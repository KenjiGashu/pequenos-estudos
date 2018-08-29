(defproject simple-app "0.1.0-SNAPSHOT"
  :description "a simple app with ring+compojure+cljs"
  :url "http://rockyj.in"
  :min-lein-version "2.0.0"
  :source-paths ["src/clj"]
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [compojure "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [ring/ring-json "0.4.0"]
                 ;;ClojureScript
                 [org.clojure/clojurescript "1.7.122"]
                 [cljs-ajax "0.5.1"]
                 [prismatic/dommy "1.1.0"]]
  :plugins [[lein-ring "0.8.13"]
            [lein-figwheel "0.4.1"]]
  :ring {:handler simple-app.handler/app}
  :cljsbuild {
              :builds [ { :id "simple-app"
                         :source-paths ["src/cljs"]
                         :figwheel true
                         :compiler {:main "simple-app.app"
                                    :asset-path "js/out"
                                    :output-to "resources/public/js/app.js"
                                    :output-dir "resources/public/js/out"}}]}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}})
