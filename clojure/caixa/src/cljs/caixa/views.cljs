(ns caixa.views
  (:require [reagent.core  :as reagent]
            [re-frame.core :refer [subscribe dispatch]]
            [cljs-time.format :as formatter]
            [cljs-time.coerce :as time-coercer]
            [cljs-time.core :as time-core]
            [markdown.core :refer [md->html]]
            [clojure.string :as str :refer [trim split]]
            [reitit.core :as reitit]))

;; ----------------------------------
;; helpers
(def custom-date-formatter (formatter/formatter "EEEE, dd MMMM yyyy"))


(defn nav-link [uri title page]
  [:li.nav-item
   {:class (when (= page @(subscribe [:page])) "active")}
   [:a.nav-link {:href uri} title]])

(defn navbar []
  [:nav.navbar.navbar-dark.bg-primary.navbar-expand-md
   {:role "navigation"}
   [:button.navbar-toggler.hidden-sm-up
    {:type "button"
     :data-toggle "collapse"
     :data-target "#collapsing-navbar"}
    [:span.navbar-toggler-icon]]
   [:a.navbar-brand {:href "#/"} "caixa"]
   [:div#collapsing-navbar.collapse.navbar-collapse
    [:ul.nav.navbar-nav.mr-auto
     [nav-link "#/" "Home" :home]
     [nav-link "#/about" "About" :about]
     [nav-link "#/precos" "Precos" :precos]]]])

(defn about-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [:img {:src "/img/warning_clojure.png"}]]]])

(defn home-page []
  [:div.container
   [:div.row>div.col-sm-12
    [:h2.alert.alert-info "Tip: try pressing CTRL+H to open re-frame tracing menu"]]
   (when-let [docs @(subscribe [:docs])]
     [:div.row>div.col-sm-12
      [:div {:dangerouslySetInnerHTML
             {:__html (md->html docs)}}]])])

;; -----------------------------------
;; Preços

(defn criar-preco [event preco]
  (.preventDefault event)
  (dispatch [:precos/novo-preco preco])
  )

(defn novo-preco
  []
  (let [preco (reagent/atom {:valor "" :data-inicio "" :data-fim ""})
        errors @(subscribe [:errors])
        carregando @(subscribe [:loading?])]
    (fn []
      (let [valor (:valor @preco)
            data-inicio (:data-inicio @preco)
            data-fim (:data-fim @preco)]
        [:div.container
         (when (:criando-preco carregando)
           [:div.lds-spinner
            (for [num (range 12)]
              [:div])])
         
         (when (:novo-preco errors)
           [:div.row (str (:novo-preco errors))])
         [:div.row
          [:div.col-md-6
           [:h1.text-xs-center "Criar Novo Preço"]
           [:form {:on-submit #(criar-preco % @preco)}
            [:div.form-group
             [:label {:for "valor"} "Valor"]
             [:input.form-control {:id "valor"
                                   :type "number"
                                   :name "valor"
                                   :placeholder "Valor"
                                   :value valor
                                   :on-change #(swap! preco assoc :valor (-> % .-target .-value))}]]
            [:div.form-group
             [:label {:for "data-inicio"} "Data de Início"]
             [:input.form-control {:id "data-inicio"
                                   :type "date"
                                   :name "data-inicio"
                                   :placeholder "Data de Início"
                                   :value data-inicio
                                   :on-change #(swap! preco assoc :data-inicio (-> % .-target .-value))}]]
            [:div.form-group
             [:label {:for "data-fim"} "Data de Fim"]
             [:input.form-control {:id "data-fim"
                      :type "date"
                      :name "data-fim"
                      :placeholder "Data de Fim"
                      :value data-fim
                      :on-change #(swap! preco assoc :data-fim (-> % .-target .-value))}]]
            [:button.btn.btn-primary {:type "submit"} "Criar Preço!"]]]]
         [:a.btn.btn-primary {
                              :href "#/precos"
                              ;;:on-click 
                              ;;#(dispatch [:set-active-page :precos])
                              }
          [:i.fas.fa-angle-left]]]))))

(defn precos
  []
  (let [precos @(subscribe [:precos])]
    [:div.container
     (let [precos-com-img (map-indexed (fn [idx itm] (assoc itm :imagem (str "img/produtos/1/p_1_" (+ 1 idx) ".jpg")))
                                       precos)]
       (for [linha (partition 3 3 nil precos-com-img)]
         ^{:key (first linha)} [:div.row
                                [:div.card-deck
                                 (for [item linha]
                                   ^{:key (:id-preco item)} [preco item])]]))
     [:div.row
      [:a.btn.btn-primary {:href "#/precos/novo"}
       "Novo Preço!"]]]))

(defn preco
  []
  (fn [{:keys [valor data-inicio data-fim id-preco imagem]}]
    (let [obj-data-inicio (time-coercer/from-long data-inicio)
          obj-data-fim (time-coercer/from-long data-fim)]
      [:div.card
       [:img.card-img-top {:src imagem :alt "Image"}]
       [:div.card-body
        [:h5.card-title [:p (str "R$ " valor)] ]
        [:p.card-text (formatter/unparse custom-date-formatter obj-data-inicio)]
        [:p.card-text (formatter/unparse custom-date-formatter obj-data-fim)]
        [:a.btn.btn-primary {:on-click
                             #(dispatch [:precos/deleta-preco id-preco])}
         [:i.fas.fa-trash]]]])))

(defn pages [page-name]
  (case page-name
    :home [home-page]
    :about [about-page]
    :precos [precos]
    :precos/novo [novo-preco]
    [home-page]))

(defn caixa-app
  []
  (let [pagina-atual @(subscribe [:active-page])
        loading? @(subscribe [:loading?])]
    [:div
     (when loading?
       [:div.lds-spinner
        (for [num (range 12)]
          [:div.animation-div-size])]) 
     [navbar]
     [pages pagina-atual]]))
