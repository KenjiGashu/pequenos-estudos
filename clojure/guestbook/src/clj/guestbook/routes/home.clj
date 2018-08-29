(ns guestbook.routes.home
  (:require [guestbook.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [guestbook.db.core :as db]
            [ring.util.response :refer [redirect]]
            [struct.core :as st]))

(def preco-schema
  [[:valor
    [st/required :coerce (fn [x] (Integer. x))]]

   [:datainicio
    [st/required :coerce (fn [datainicio] (.parse (java.text.SimpleDateFormat. "yyyy-MM-dd") datainicio))]]
   [:datafim
    [st/required :coerce (fn [datafim] (.parse (java.text.SimpleDateFormat. "yyyy-MM-dd") datafim))]]])

(defn valida-preco [params]
  (first (st/validate params preco-schema)))

(defn salva-preco! [{:keys [params]}]
  (if-let [errors (valida-preco params)]
    (-> (response/found "/")
        (assoc :flash (assoc params :errors errors)))
    (do
      (db/cria-preco! params)
      (response/found "/"))))

(defn home-page [{:keys [flash]}]
  (layout/render
   "home.html"
   (merge {:precos (db/precos)}
          (select-keys flash [:valor :datacomeco :datafim :errors]))))

(defn about-page []
  (layout/render "about.html"))


(defroutes home-routes
  (GET "/" request (home-page request))
  (POST "/" request (salva-preco! request))
  (GET "/about" [] (about-page)))

