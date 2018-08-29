(ns caixa.routes.home
  (:require [caixa.layout :as layout]
            [caixa.db.core :as db]
            [clojure.java.io :as io]
            [caixa.middleware :as middleware]
            [ring.util.http-response :as response]
            [struct.core :as st]))

(def preco-schema
  [[:valor
    st/required]
   [:data_inicio
    st/required]
   [:data_fim
    st/required]])

(defn validate-preco [params]
  (first (st/validate params preco-schema)))

(defn home-page [{:keys [flash]}]
  (layout/render "home.html" (merge {:precos (db/select-precos)}
                                    (select-keys flash [:name :precos :errors]))))

(defn home-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/" {:get home-page}]
   ["/docs" {:get (fn [_]
                    (-> (response/ok (-> "docs/docs.md" io/resource slurp))
                        (response/header "Content-Type" "text/plain; charset=utf-8")))}]])

