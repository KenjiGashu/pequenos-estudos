// Compiled by ClojureScript 1.10.339 {}
goog.provide('hello_seymore.core');
goog.require('cljs.core');
goog.require('sablono.core');
hello_seymore.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"likes","likes",792554542),(0)], null));
hello_seymore.core.like_seymore = (function hello_seymore$core$like_seymore(data){
return React.createElement("div",null,React.createElement("h1",null,"Seymore's quantified popularity: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"likes","likes",792554542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))),React.createElement("div",null,React.createElement("a",({"href": "#", "onClick": (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"likes","likes",792554542)], null),cljs.core.inc);
})}),"Thumbs up")));
});
hello_seymore.core.render_BANG_ = (function hello_seymore$core$render_BANG_(){
return ReactDOM.render(hello_seymore.core.like_seymore.call(null,hello_seymore.core.app_state),document.getElementById("app"));
});
cljs.core.add_watch.call(null,hello_seymore.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return hello_seymore.core.render_BANG_.call(null);
}));
hello_seymore.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1530909569543
