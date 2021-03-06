(ns user
  (:require [web-app.config :refer [env]]
            [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [mount.core :as mount]
            [web-app.figwheel :refer [start-fw stop-fw cljs]]
            [web-app.core :refer [start-app]]
            [web-app.db.core]
            [conman.core :as conman]
            [luminus-migrations.core :as migrations]))

(alter-var-root #'s/*explain-out* (constantly expound/printer))

(defn start []
  (mount/start-without #'web-app.core/repl-server))

(defn stop []
  (mount/stop-except #'web-app.core/repl-server))

(defn restart []
  (stop)
  (start))

(defn restart-db []
  (mount/stop #'web-app.db.core/*db*)
  (mount/start #'web-app.db.core/*db*)
  (binding [*ns* 'web-app.db.core]
    (conman/bind-connection web-app.db.core/*db* "sql/queries.sql")))

(defn reset-db []
  (migrations/migrate ["reset"] (select-keys env [:database-url])))

(defn migrate []
  (migrations/migrate ["migrate"] (select-keys env [:database-url])))

(defn rollback []
  (migrations/migrate ["rollback"] (select-keys env [:database-url])))

(defn create-migration [name]
  (migrations/create name (select-keys env [:database-url])))


