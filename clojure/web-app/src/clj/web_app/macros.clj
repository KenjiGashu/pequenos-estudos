(ns web-app.macros)

(defmacro <? "Version of <! which throws Error that come out of the channel."
  [c]
  `(web-app.core/throw-err (cljs.core.async/<! ~c)))

(defmacro err-or "If body throws an exception, catch it and return it" 
  [& body]
  `(try 
     ~@body
     (catch js/Error e# e#)))

(defmacro go-safe "'Safe' version of cljs.core.async/go which catches and returns exception which are thrown in its body"
  [& body]
  `(cljs.core.async.macros/go (web-app.macros/err-or ~@body)))

(defmacro spy [form]
  (let [text (str form)]
    `(let [r# ~form]
       (prn ~text r#)
       r#)))

(defmacro my-macro [routes page params]
  `(apply bidi.bidi/path-for ~routes ~page (->> ~params seq flatten)))
