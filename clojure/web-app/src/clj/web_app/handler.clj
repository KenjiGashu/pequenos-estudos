(ns web-app.handler
  (:require [web-app.middleware :as middleware]
            [web-app.layout :refer [error-page]]
            [web-app.routes.home :refer [home-routes]]
            [compojure.core :refer [routes wrap-routes]]
            [ring.util.http-response :as response]
            [compojure.route :as route]
            [web-app.env :refer [defaults]]
            [mount.core :as mount]))

(mount/defstate init-app
  :start ((or (:init defaults) identity))
  :stop  ((or (:stop defaults) identity)))

;; (mount/defstate app
;;   :start
;;   (middleware/wrap-base
;;     (routes
;;       (-> #'home-routes
;;           (wrap-routes middleware/wrap-csrf)
;;           (wrap-routes middleware/wrap-formats))
;;           (route/not-found
;;              (:body
;;                (error-page {:status 404
;;                             :title "page not found"}))))))

;; (mount/defstate app
;;   :start
;;   (middleware/wrap-base
;;    (-> #'home-routes
;;        middleware/wrap-csrf
;;        middleware/wrap-formats)))

(mount/defstate app
  :start
  (middleware/wrap-base
   (-> home-routes
      middleware/wrap-csrf
      middleware/wrap-formats))) 
