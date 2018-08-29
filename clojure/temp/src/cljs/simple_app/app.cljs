(ns simple-app.app
  (:require [simple-app.greet :as greet]))

(greet/say-hello)

(.log js/console "Hello Cljs!")
