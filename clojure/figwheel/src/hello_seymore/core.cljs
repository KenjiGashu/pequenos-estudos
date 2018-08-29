(ns hello-seymore.core
  (:require [sablono.core :as sab]))

(def app-state (atom { :likes 0 }))

(defn like-seymore [data]
  (sab/html [:div
             [:h1 "Seymore's quantified popularity: " (:likes @data)]
             [:div [:a {:href "#"
                        :onClick #(swap! data update-in [:likes] inc)}
                    "Thumbs up"]]]))

(defn render! []
  (.render js/ReactDOM
           (like-seymore app-state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
