(ns figwheel.connect (:require [simple-app.app] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "simple-app", :websocket-url "ws://localhost:3449/figwheel-ws"})

