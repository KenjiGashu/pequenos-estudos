(ns caixa.routes.services
  (:require [muuntaja.middleware :as muuntaja]
            [reitit.ring.coercion :as rrc]
            [reitit.swagger :as swagger]
            [ring.util.http-response :refer :all]
            [ring.middleware.params :as params]
            [caixa.db.core :as db]
            [clojure.string :as str]
            [cognitect.transit :as transit]
            [muuntaja.format.transit :as formats]
            [camel-snake-kebab.core :as csk]))

(defn service-routes []
  ["/api"
   {:middleware [params/wrap-params
                 muuntaja/wrap-format
                 swagger/swagger-feature
                 rrc/coerce-exceptions-middleware
                 rrc/coerce-request-middleware
                 rrc/coerce-response-middleware]
    :swagger {:id ::api
              :info {:title "my-api"
                     :description "using [reitit](https://github.com/metosin/reitit)."}
              :produces #{"application/json"
                          "application/edn"
                          "application/transit+json"}
              :consumes #{"application/json"
                          "application/edn"
                          "application/transit+json"}}}
   ["/precos"     
    ["/id/:id" {:get {:handler (fn [{{:keys [id]} :path-params}]
                                 {:status 200
                                  :body {:preco (db/select-preco {:id_preco id})}})}}]
    ["/todos" {:get {:handler (fn [req] {:status 200
                                         :body {:precos (db/select-precos)}})}}]
    ["/novo" {:post {:handler
                     (fn [req]
                       (let [{{:keys [valor data-inicio data-fim]} :body-params} req]
                         (clojure.pprint/pprint req)
                         {:status 200
                          :body {:inserted
                                 (db/cria-preco!
                                  {:valor valor
                                   :data_inicio (.parse (java.text.SimpleDateFormat. "yyyy-MM-dd") data-inicio)
                                   :data_fim (.parse (java.text.SimpleDateFormat. "yyyy-MM-dd") data-fim)})}}))}}]
    ["/deleta/:id" {:delete {:handler
                             (fn [{{:keys [id]} :path-params}]
                               {:status 200
                                :body {:deleted (db/deleta-preco! {:id_preco id})}})}}]
    ["/atualiza" {:put {:handler
                           (fn [{{:keys [id-preco valor data-inicio data-fim]} :body-params}]
                             {:status 200
                              :body {:results
                                     (db/atualiza-preco!
                                      {:id_preco id-preco
                                       :valor valor
                                       :data_inicio (.parse (java.text.SimpleDateFormat. "yyyyMMdd") data-inicio)
                                       :data_fim (.parse (java.text.SimpleDateFormat. "yyyyMMdd") data-fim)})}})}}]]
     ["/swagger.json"
      {:get {:no-doc true
             :handler (swagger/create-swagger-handler)}}]
     ["/ping" {:get (constantly (ok {:message "ping"}))}]
     ["/pong" {:post (constantly (ok {:message "pong"}))}]])
