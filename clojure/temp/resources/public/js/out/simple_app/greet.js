// Compiled by ClojureScript 1.7.122 {}
goog.provide('simple_app.greet');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('dommy.core');
simple_app.greet.handler = (function simple_app$greet$handler(response){
console.log("server responded...");

return dommy.core.set_text_BANG_.call(null,document.querySelector(".fromServer"),[cljs.core.str("Hello "),cljs.core.str((cljs.core.clj__GT_js.call(null,response)["greeting"]))].join(''));
});
simple_app.greet.error_handler = (function simple_app$greet$error_handler(p__24151){
var map__24154 = p__24151;
var map__24154__$1 = ((((!((map__24154 == null)))?((((map__24154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24154):map__24154);
var status = cljs.core.get.call(null,map__24154__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__24154__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
simple_app.greet.say_hello = (function simple_app$greet$say_hello(){
return ajax.core.POST.call(null,"/hello",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),"from Server!"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),simple_app.greet.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),simple_app.greet.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});

//# sourceMappingURL=greet.js.map