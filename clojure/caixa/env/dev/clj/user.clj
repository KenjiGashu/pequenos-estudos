(ns user
  (:require [caixa.config :refer [env]]
            [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [mount.core :as mount]
            [caixa.figwheel :refer [start-fw stop-fw cljs]]
            [caixa.core :refer [start-app]]
            [caixa.db.core]
            [conman.core :as conman]
            [luminus-migrations.core :as migrations]))

(alter-var-root #'s/*explain-out* (constantly expound/printer))

(defn start []
  (mount/start-without #'caixa.core/repl-server))

(defn stop []
  (mount/stop-except #'caixa.core/repl-server))

(defn restart []
  (stop)
  (start))

(defn restart-db []
  (mount/stop #'caixa.db.core/*db*)
  (mount/start #'caixa.db.core/*db*)
  (binding [*ns* 'caixa.db.core]
    (conman/bind-connection caixa.db.core/*db* "sql/queries.sql")))

(defn reset-db []
  (migrations/migrate ["reset"] (select-keys env [:database-url])))

(defn migrate []
  (migrations/migrate ["migrate"] (select-keys env [:database-url])))

(defn rollback []
  (migrations/migrate ["rollback"] (select-keys env [:database-url])))

(defn create-migration [name]
  (migrations/create name (select-keys env [:database-url])))


