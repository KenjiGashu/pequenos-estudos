(ns web-app.routes.home
  (:require [web-app.layout :as layout]
            [web-app.db.core :as db]
            [compojure.core :refer [defroutes GET]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [bidi.ring :as bidi]))

(defn home-page [_]
  (layout/render "home.html"))

(defn docs-page [_]
  (-> (response/ok (-> "docs/docs.md" io/resource slurp))
      (response/header "Content-Type" "text/plain; charset=utf-8")))

;; (defroutes home-routes
;;   (GET "/" []
;;        (home-page))
;;   (GET "/docs" []
;;        (-> (response/ok (-> "docs/docs.md" io/resource slurp))
;;            (response/header "Content-Type" "text/plain; charset=utf-8"))))

(def home-routes
  (bidi/make-handler ["/" {"" home-page
                           "docs" docs-page}]))

;; (def home-routes
;;   (bidi/make-handler ["/" home-page]))
