(defproject om-project "0.1.0-SNAPSHOT"
  :description "om project"
  :min-lein-version "2.8.1"
  :source-paths ["src/"]
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [compojure "1.6.1"]
                 [ring/ring-defaults "0.3.2"]
                 [ring/ring-json "0.4.0"]
                 ;;ClojureScript
                 [org.clojure/clojurescript "1.10.339"]
                 [cljs-ajax "0.7.3"]
                 [prismatic/dommy "1.1.0"]
                 [org.omcljs/om "1.0.0-alpha34"]
                 [figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]]
  :plugins [[lein-ring "0.12.4"]
            [lein-figwheel "0.5.16"]]
  :ring {:handler om-project.handler/app}
  ;; :cljsbuild {
  ;;             :builds [{:id "om-project"
  ;;                       :source-paths ["src"]
  ;;                       :figwheel true
  ;;                       :compiler {:main "om-project.core"
  ;;                                  :asset-path "js/out"
  ;;                                  :output-to "resources/public/js/main.js"
  ;;                                  :output-dir "resources/public/js/out"
  ;;                                  :verbose true}}]}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.2"]]}})
