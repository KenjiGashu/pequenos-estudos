(ns web-app.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [web-app.macros :refer [<? go-safe spy my-macro]]
                   )
  (:require [reagent.core :as reagent]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [web-app.ajax :refer [load-interceptors!]]
            [ajax.core :as ajx]
            [secretary.core :as secretary :include-macros true]
            [bidi.bidi :as bidi :include-macros true] 
            [goog.history.EventType :as EventType]
            [clojure.string :as str]
            [cljs.core.async :as async]
            ;;[cljsjs.react-transition-group :as react-transition-group]
            ;;[cljsjs.react :as react]
            )
  (:import goog.History))

 
;; ----------------------------------------------------------------
;; Utility

(defn throw-err "Accept a value and returns it, unless it is an Error, in which case it throws it."
  [v]
  (if (instance? js/Error v) (throw v) v))


;; ------------------------------------------------------------------------
;; State
(defonce session (reagent/atom {:page :home}))

(defonce state (reagent/atom {:phones []
                              :search ""
                              :order-prop :name
                              
                              :navigation {:page :phones ;; can be any one of #{:phones :phone}
                                           :params {}}
                              :phone-by-id {}

                              :car {}
                              }))

(def navigational-state (reagent/cursor state [:navigation]))

(def order-prop-state (reagent/cursor state [:order-prop]))

(defn update-search [state new-search]
  (assoc state :search new-search))




;;-----------------------------------------------------------------------
;; Search Logic
(defn matches-search? "Determines if a phone item matches a text query."
  [search data]
  (let [qp (-> search (or "") str/lower-case re-pattern)]
    (->> (vals data)
         (filter string?) (map str/lower-case)
         (some #(re-find qp %)))))





;; -------------------------------------------------------------------------------
;; Server Communication

;; Without Macros

;; (defn ajax-call "Accept a cljs-ajax request map, and returns a channel which will contain the response."
;;   [{:keys [method uri] :as opts}]
;;   (let [=resp= (async/chan)]
;;     (ajx/ajax-request (assoc opts
;;                         :handler (fn [[ok r :as data]]
;;                                    (if ok
;;                                      (async/put! =resp= r)
;;                                      (prn "AJAX Error" {:error r :request opts})
;;                                      ))
;;                         ))
;;     =resp=))

;; (def ajax-defaults "Basic options for the response format"
;;   {:format (ajx/json-request-format)
;;    :response-format (ajx/json-response-format {:keywords? true})})

;; (defn fetch-phones-list []
;;   (ajax-call (assoc ajax-defaults 
;;                :method :get :uri "/phones/phones.json")))

;; (defn fetch-phone-details [phone-id]
;;   (ajax-call (assoc ajax-defaults
;;                :method :get :uri (str "/phones/" phone-id ".json"))))



;; (defmulti load-page-data "Loads data for a page and returns a function with which to swap! the application state"
;;   (fn [page params] page))

;; (defmethod load-page-data :phones
;;   [_ _] (go
;;           (let [phones (async/<! (fetch-phones-list))]
;;             #(assoc % :phones phones)
;;             )))

;; (defmethod load-page-data :phone
;;   [_ {:keys [phone-id]}] (go
;;                            (let [phone-details (async/<! (fetch-phone-details phone-id))]
;;                              #(assoc-in % [:phone-by-id phone-id] phone-details))))



;; With Macros
(defn ajax-call "Accept a cljs-ajax request map, and returns a channel which will contain the response, or an Error if the response is an error."
  [{:keys [method uri] :as opts}]
  (let [=resp= (async/chan)]
    (ajx/ajax-request (assoc opts
                        :handler (fn [[ok r :as data]]
                                   (if ok
                                     (async/put! =resp= r)

                                     ;; HERE
                                     (async/put! =resp= (ex-info "AJAX error" {:request opts :response r}))
                                     ))
                        ))
    =resp=))

(def ajax-defaults "Basic options for the response format"
  {:format (ajx/json-request-format)
   :response-format (ajx/json-response-format {:keywords? true})})

(defn fetch-phones-list []
  (ajax-call (assoc ajax-defaults
               :method :get :uri "/phones/phones.json")))

(defn fetch-phone-details [phone-id]
  (ajax-call (assoc ajax-defaults
               :method :get :uri (str "/phones/" phone-id ".json"))))



;; ;; ... and load-page-data as well:

(defmulti load-page-data "Loads data for a page and returns a function with which to swap! the application state"
  (fn [page params] page))

(defmethod load-page-data :phones
  [_ _] (go-safe ;; LOOK HERE we use `go-safe` instead of `go`, and `<?` instead of `<!`
          (let [phones (<? (fetch-phones-list))]
            #(assoc % :phones phones)
            )))

(defmethod load-page-data :phone
  [_ {:keys [phone-id]}] (go-safe
                           (let [phone-details (<? (fetch-phone-details phone-id))]
                             #(assoc-in % [:phone-by-id phone-id] phone-details))))



;; --------------------------------------------
;; Routing 

;; we declare the routes with a tree-ish data structure which leaves identify our pages
(def routes 
  ["/phones" {"" :phones
              ["/" :phone-id] :phone}])

;; then we leverage bidi functions to match against this data structure
(defn url-to-nav [routes path]
  (let [{:keys [handler route-params]} (bidi/match-route routes path)]
    {:page handler :params route-params}))

(defn nav-to-url [routes {:keys [page params]}]
  (my-macro routes page params))

(def h (History.))

(defn navigate-to! [routes nav]
  (.setToken h (nav-to-url routes nav)))

(def =path-changes= "A channel which will output the new value of the path when the URL changes"
  (async/chan (async/sliding-buffer 1) (comp (map (fn [event] (.-token event))) (dedupe))))

(defn hook-browser-navigation! "Watches the path in the URL and puts change events to the =path-changes= channel."
  []
  (doto h
    (events/listen
      EventType/NAVIGATE (fn [event] (async/put! =path-changes= event)))
    (.setEnabled true)))
  
;; (defn listen-to-paths-changes! "Listen to changes in the path, resolving the new page and fetching its data, or falling back to last page if an error occurred"
;;   [routes]
;;   (go (loop [last-path "/phones"] ;; the last page for which routing was successful, we'll fall back to it if something goes wrong.
;;         (when-let [next-path (async/<! =path-changes=)]
;;           (let [{:keys [page params] :as nav} (url-to-nav routes next-path)
;;                 new-last-path (cond
;;                                 (nil? page) (do (.replaceToken h last-path) ;; route does not exist, fall back to last page
;;                                                 last-path)
;;                                 :else (let [change-data (async/<! (load-page-data page params))]
;;                                         (swap! state change-data)
;;                                         (reset! navigational-state nav) ;; success, the data has loaded, we can set the navigational state to its new value
;;                                         next-path)
;;                                 )]
;;             (recur new-last-path)
;;             )))))

(defn listen-to-paths-changes! "Listen to changes in the path, resolving the new page and fetching its data, or falling back to last page if an error occurred"
  [routes]
  (go (loop [last-path "/phones"] ;; the last page for which routing was successful, we'll fall back to it if something goes wrong.
        (when-let [next-path (async/<! =path-changes=)]
          (let [{:keys [page params] :as nav} (url-to-nav routes next-path)
                new-last-path (cond
                                (nil? page) (do (.replaceToken h last-path) ;; route does not exist, fall back to last page
                                                last-path)
                                :else (try ;; LOOK HERE now we can use a try-catch
                                        (let [change-data (<? (load-page-data page params))] ;; LOOK HERE we use <? instead of <!
                                          (swap! state change-data)
                                          (reset! navigational-state nav) ;; success, the data has loaded, we can set the navigational state to its new value
                                          next-path)
                                        (catch js/Object err ;; an error occurred, abort page change
                                          (do (.replaceToken h last-path) ;; route does not exist, fall back to last page
                                              last-path)))
                                )]
            (recur new-last-path)
            )))))

;; --------------------------------------------






;; ----------------------------------------------------------------
;; View components

(declare
 <top-component>
    <phones-list-page>
      <search-component>
      <order-prop-select>
      <phones-list>
        <phone-item>
    <phone-page>
      <phone-detail-component>
        <phone-carousel>
        <phone-spec-component>
        checkmark    
 home-page)

;;(def CSSTransitionGroup (reagent/adapt-react-class (.. js/React -addons -CSSTransitionGroup)))
;;(def CSSTransition (reagent/adapt-react-class (. js/ReactTransitionGroup -CSSTransition)))
 
(defn- find-phone-by-id [phones phone-id]
  (->> phones (filter #(= (:id %) phone-id)) first))

;; ------------------------
(defn nav-link [uri title page]
  [:li.nav-item
   {:class (when (= page (:page @session)) "active")}
   [:a.nav-link {:href uri} title]])

(defn navbar []
  [:nav.navbar.navbar-dark.bg-primary.navbar-expand-md
   {:role "navigation"}
   [:button.navbar-toggler.hidden-sm-up
    {:type "button"
     :data-toggle "collapse"
     :data-target "#collapsing-navbar"}
    [:span.navbar-toggler-icon]]
   [:a.navbar-brand {:href "#/"} "web-app"]
   [:div#collapsing-navbar.collapse.navbar-collapse
    [:ul.nav.navbar-nav.mr-auto
     [nav-link "#/" "Home" :home]
     [nav-link "#/about" "About" :about]
     [nav-link "#/table" "Table" :table]]]])

(defn about-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [:img {:src "/img/warning_clojure.png"}]]]])


;; (defn <top-component> []
;;   (let [{:keys [page params]} @navigational-state]
;;     [:div.container-fluid
;;      (case page
;;        :phones [<phones-list-page>]
;;        :phone (let [phone-id (:phone-id params)]
;;                 [<phone-page> phone-id])
;;        [:div "This page does not exist"])]))

(defn <top-component> []
  (let [{:keys [page params]} @navigational-state]
    [:div.container-fluid
     [:div.view-container
      (case page
         :phones ^{:key :phones} [<phones-list-page>]
         :phone (let [phone-id (:phone-id params)]
                  ^{:key :phone} [<phone-page> phone-id])
         ^{:key :not-found} [:div "This page does not exist"]
         )
      ;; [CSSTransitionGroup {
      ;;                      ;;:timeout 300
      ;;                      ;;:class-names "view-frame"
      ;;                      :transition-name "view-frame"
      ;;                      }
       
      ;;  ]
      ]
   ]))


(defn <phones-list-page> []
  (let [{:keys [phones search]} @state]
    [:div.row
     [:div.col-md-2
      [<search-component> search]
      [:br]
      "Sort by:"
      [<order-prop-select>]]
     [:div.col-md-8 [<phones-list> phones search @order-prop-state]]]))


(defn <search-component> [search]
  [:span 
   "Search: "
   [:input {:type "text" 
            :value search
            :on-change (fn [e] (swap! state update-search (-> e .-target .-value)))}]])


(defn <order-prop-select> []
  [:select {:value @order-prop-state
            :on-change #(reset! order-prop-state (-> % .-target .-value keyword))}
   [:option {:value :name} "Alphabetical"]
   [:option {:value :age} "Newest"]
   ])


(defn <phones-list> "An unordered list of phones"
  [phones-list search order-prop]
  [:ul.phones
   [:div (for [phone (->> phones-list
                     (filter #(matches-search? search %))
                     (sort-by order-prop))]
      ^{:key (:id phone)} [<phone-item> phone]
      )]
   ;; [CSSTransitionGroup {
   ;;                      ;;:timeout 300
   ;;                      ;;:class-names "phone-listing"
   ;;                      :transition-name "phone-listing"
   ;;                      }
   ;;  ]
   ;;[CSSTransitionGroup {:transition-name "phone-listing"} ;; we wrap our phones list in the CSSTransitionGroup component
   ;;]
  ])

;; (defn <phones-list> "An unordered list of phones"
;;   [phones-list search order-prop]
;;   [:ul.phones
;;     (for [phone (->> phones-list
;;                      (filter #(matches-search? search %))
;;                      (sort-by order-prop))]
;;       ^{:key (:id phone)} [<phone-item> phone]
;;       )])


(defn <phone-item> "An phone item component"
  [{:keys [name snippet id imageUrl] :as phone}]
  (let [phone-page-href (str "#/phones/" id)]
    [:li {:class "card"}
     [:div.card-body
      [:a.thumb {:href phone-page-href} [:img.card-img-top {:src imageUrl}]]
      [:a {:href phone-page-href} name]
      [:p snippet]]]))



(defn <phone-page> [phone-id]
  (let [phone-cursor (reagent/cursor state [:phone-by-id phone-id])
        phone @phone-cursor]
    (cond
      phone ^{:key phone-id} [<phone-detail-component> phone]
      :not-loaded-yet [:div])))

(defn <phone-detail-component> [phone]
  (let [{:keys [images name description availability additionalFeatures]
         {:keys [ram flash]} :storage
         {:keys [type talkTime standbyTime]} :battery
         {:keys [cell wifi bluetooth infrared gps]} :connectivity
         {:keys [os ui]} :android
         {:keys [dimensions weight]} :sizeAndWeight
         {:keys [screenSize screenResolution touchScreen]} :display
         {:keys [cpu usb audioJack fmRadio accelerometer]} :hardware
         {:keys [primary features]} :camera
         } phone
        ]
    [:div.row
     [:div.col-md-3.phone-carousel-container [<phone-carousel> images]]
     [:h1 name]
     [:p description]

     [:ul.phone-thumbs
      (let [carousel (get-in @state [:car])]
        (.log js/console carousel)
        (map-indexed (fn [i img]
                       ^{:key img} [:img {:data-target "#phone-pictures-carousel" :on-click #(.carousel carousel i) :src img}])
                     images))]


     [:ul.specs
      [<phone-spec-component> "Availability and Networks" [(cons "Availability" availability)]]
      [<phone-spec-component>"Battery" [["Type" type] ["Talk Time" talkTime] ["Standby time (max)" standbyTime]]]
      [<phone-spec-component> "Storage and Memory" [["RAM" ram] ["Internal Storage" flash]]]
      [<phone-spec-component> "Connectivity" [["Network Support" cell] ["WiFi" wifi] ["Bluetooth" bluetooth] ["Infrared" (checkmark infrared)] ["GPS" (checkmark gps)]]]
      [<phone-spec-component> "Android" [["OS Version" os] ["UI" ui]]]
      [<phone-spec-component> "Size and Weight" [(cons "Dimensions" dimensions) ["Weight" weight]]]
      [<phone-spec-component> "Display" [["Screen size" screenSize] ["Screen resolution" screenResolution] ["Touch screen" (checkmark touchScreen)]]]
      [<phone-spec-component> "Hardware" [["CPU" cpu] ["USB" usb] ["Audio / headphone jack" audioJack] ["FM Radio" (checkmark fmRadio)] ["Accelerometer" (checkmark accelerometer)]]]
      [<phone-spec-component> "Camera" [["Primary" primary] ["Features" (str/join ", " features)]]]
      [:li
       [:span "Additional Features"]
       [:dd additionalFeatures]]
      ]
     ]))

(def <phone-carousel>
  (reagent/create-class
   ;; we can still use our classic Reagent API for the rendering function.
   {:reagent-render (fn [images]
                      [:div {:id "phone-pictures-carousel" :class "carousel slide" :data-ride "carousel"}
                       [:ol {:class "carousel-indicators"}
                        (->> images
                             (map-indexed (fn [i _]
                                            ^{:key i} [:li {:data-target "#phone-pictures-carousel" :data-slide-to (str i) :class (when (= i 0) "active")}]))
                             doall)]

                       [:div {:class "carousel-inner" :role "listbox"}
                        (->> images
                             (map-indexed (fn [i img]
                                            ^{:key i} [:div {:class (str "carousel-item " (when (= i 0) "active"))}
                                                       [:img.phone-carousel-img {:src img}]]))
                             doall)]

                       [:a {:class "carousel-control-prev" :href "#phone-pictures-carousel" :role "button" :data-slide "prev"}
                        [:span {:class "carousel-control-prev-icon" :aria-hidden "true"}]
                        [:span {:class "sr-only"} "Previous"]]
                       [:a {:class "carousel-control-next" :href "#phone-pictures-carousel" :role "button" :data-slide "next"}
                        [:span {:class "carousel-control-next-icon" :aria-hidden "true"}]
                        [:span {:class "sr-only"} "Next"]]
                       ])

    ;; once the component is mounted onto the DOM, we can use this lifecycle method to access the native DOM
    :component-did-mount (fn [this]
                           (let [e (js/jQuery (reagent/dom-node this))]
                             (swap! state assoc :car e)
                             (-> e (aget "carousel") (.call e)) ;; this looks awkward, but is necessary for advanced compilation. We could not have written (.carousel d), it would have failed in advanced compilation.
                             ))
    }))


(defn <phone-spec-component> [title kvs]
  [:li
   [:span title]
   [:dl (->> kvs (mapcat (fn [[t & ds]]
                           [^{:key t} [:dt t] (for [d ds] ^{:key d} [:dd d])]
                           )))]])

(defn checkmark [input] (if input \u2713 \u2718))


(defn home-page []
  (let [{:keys [phones]} @state]
    [:div.container
     (when-let [docs (:docs @session)]
       [:div.row>div.col-sm-12
        [:div {:dangerouslySetInnerHTML
               {:__html (md->html docs)}}]])]))

(def pages
  {:home #'home-page
   :about #'about-page})

(defn page []
  [(pages (:page @session))])

;; -------------------------
;; Routes

;; (secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (swap! session assoc :page :home))

(secretary/defroute "/about" []
  (swap! session assoc :page :about))

;; -------------------------
;; History
;; must be called after routes have been defined
;; (defn hook-browser-navigation! []
;;   (doto (History.)
;;         (events/listen
;;           HistoryEventType/NAVIGATE
;;           (fn [event]
;;             (secretary/dispatch! (.-token event))))
;;         (.setEnabled true)))





;; -------------------------
;; Initialize app
(defn fetch-docs! []
  (ajx/GET "/docs" {:handler #(swap! session assoc :docs %)}))

(defn mount-components []
  (reagent/render [#'navbar] (.getElementById js/document "navbar"))
  (reagent/render [#'page] (.getElementById js/document "app"))
  (reagent/render [<top-component>]
            (.getElementById js/document "phones-id"))
  )

(defn init! []
  (load-interceptors!)
  (fetch-docs!)
  (hook-browser-navigation!)
  ;;(load-phones! state)
  ;;(watch-nav-changes!)
  (listen-to-paths-changes! routes)
  (mount-components))
