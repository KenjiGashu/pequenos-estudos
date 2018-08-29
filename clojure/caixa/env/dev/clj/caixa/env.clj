(ns caixa.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [caixa.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[caixa started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[caixa has shut down successfully]=-"))
   :middleware wrap-dev})
