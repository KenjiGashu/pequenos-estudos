(ns caixa.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [day8.re-frame.http-fx]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST json-response-format json-request-format]]
            [caixa.ajax :refer [load-interceptors!]]
            [caixa.events]
            [reitit.core :as reitit]
            [clojure.string :as string]
            [cljs.spec.alpha :as spec]
            [devtools.core :as devtools]
            [cljs-time.format :as formatter]
            [cljs-time.coerce :as time-coercer]
            [cljs-time.core :as time-core]
            [camel-snake-kebab.core :as csk]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [caixa.subs]
            [caixa.events]
            [caixa.views]
            )
  (:import goog.History))

;; -- Debugging aids ----------------------------------------------------------
(devtools/install!)       ;; we love https://github.com/binaryage/cljs-devtools
(enable-console-print!) ;; so that println writes to `console.log`



;; (def pages
;;   {:home #'home-page
;;    :about #'about-page
;;    :precos #'precos
;;    :precos/novo #'novo-preco})

;; (defn page []
;;   [:div
;;    [navbar]
;;    [(pages @(re-frame/subscribe [:page]))]])

;; -------------------------
;; Routes

(def router
  (reitit/router
    [["/" :home]
     ["/about" :about]
     ["/precos" :precos]
     ["/precos/novo" :precos/novo]]))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      HistoryEventType/NAVIGATE
      (fn [event]
        (let [uri (or (not-empty (string/replace (.-token event) #"^.*#" "")) "/")]
          (re-frame/dispatch
           [:set-active-page (-> (reitit/match-by-path router uri)
                                 :data
                                 :name)]))))
    (.setEnabled true)))


;; ----------------------------
;; Specs
(spec/def ::id int?)
(spec/def ::valor double?)
(spec/def ::data-inicio (fn [x] (instance? org.joda.time.DateTime x)))
(spec/def ::data-fim (fn [x] (instance? org.joda.time.DateTime x)))
(spec/def ::preco (spec/keys :req-un [::id ::valor ::data-inicio ::data-fim]))


;; ---------------------------------
;; Interceptors
(defn check-and-throw
  "Throws an exception if `db` doesn't match the Spec `a-spec`."
  [a-spec db]
  (when-not (spec/valid? a-spec db)
    (throw (ex-info (str "spec check failed: " (spec/explain-str a-spec db)) {}))))

;; now we create an interceptor using `after`
(def check-spec-interceptor (re-frame/after (partial check-and-throw :preco)))


;; -------------------------
;; Initialize app
(defn fetch-docs! []
  (GET "/docs" {:handler #(re-frame/dispatch [:set-docs %])}))

(defn mount-components []
  (re-frame/clear-subscription-cache!)
  (reagent/render [caixa.views/caixa-app] (.getElementById js/document "app"))
  )

(defn init! []
  (re-frame/dispatch-sync [:navigate (reitit/match-by-name router :home)])
  (re-frame/dispatch-sync [:precos/get-precos])
  (load-interceptors!)
  (fetch-docs!)
  (hook-browser-navigation!)
  (mount-components))
