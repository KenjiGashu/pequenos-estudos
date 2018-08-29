// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26297 = cljs.core._EQ_;
var expr__26298 = (function (){var or__16785__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26297.call(null,"true",expr__26298))){
return true;
} else {
if(cljs.core.truth_(pred__26297.call(null,"false",expr__26298))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26298)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26300__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26301__i = 0, G__26301__a = new Array(arguments.length -  0);
while (G__26301__i < G__26301__a.length) {G__26301__a[G__26301__i] = arguments[G__26301__i + 0]; ++G__26301__i;}
  args = new cljs.core.IndexedSeq(G__26301__a,0);
} 
return G__26300__delegate.call(this,args);};
G__26300.cljs$lang$maxFixedArity = 0;
G__26300.cljs$lang$applyTo = (function (arglist__26302){
var args = cljs.core.seq(arglist__26302);
return G__26300__delegate(args);
});
G__26300.cljs$core$IFn$_invoke$arity$variadic = G__26300__delegate;
return G__26300;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26303){
var map__26306 = p__26303;
var map__26306__$1 = ((((!((map__26306 == null)))?((((map__26306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26306):map__26306);
var message = cljs.core.get.call(null,map__26306__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26306__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16785__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16773__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16773__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16773__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21910__auto___26468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___26468,ch){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___26468,ch){
return (function (state_26437){
var state_val_26438 = (state_26437[(1)]);
if((state_val_26438 === (7))){
var inst_26433 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
var statearr_26439_26469 = state_26437__$1;
(statearr_26439_26469[(2)] = inst_26433);

(statearr_26439_26469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (1))){
var state_26437__$1 = state_26437;
var statearr_26440_26470 = state_26437__$1;
(statearr_26440_26470[(2)] = null);

(statearr_26440_26470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (4))){
var inst_26390 = (state_26437[(7)]);
var inst_26390__$1 = (state_26437[(2)]);
var state_26437__$1 = (function (){var statearr_26441 = state_26437;
(statearr_26441[(7)] = inst_26390__$1);

return statearr_26441;
})();
if(cljs.core.truth_(inst_26390__$1)){
var statearr_26442_26471 = state_26437__$1;
(statearr_26442_26471[(1)] = (5));

} else {
var statearr_26443_26472 = state_26437__$1;
(statearr_26443_26472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (15))){
var inst_26397 = (state_26437[(8)]);
var inst_26412 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26397);
var inst_26413 = cljs.core.first.call(null,inst_26412);
var inst_26414 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26413);
var inst_26415 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26414)].join('');
var inst_26416 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26415);
var state_26437__$1 = state_26437;
var statearr_26444_26473 = state_26437__$1;
(statearr_26444_26473[(2)] = inst_26416);

(statearr_26444_26473[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (13))){
var inst_26421 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
var statearr_26445_26474 = state_26437__$1;
(statearr_26445_26474[(2)] = inst_26421);

(statearr_26445_26474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (6))){
var state_26437__$1 = state_26437;
var statearr_26446_26475 = state_26437__$1;
(statearr_26446_26475[(2)] = null);

(statearr_26446_26475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (17))){
var inst_26419 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
var statearr_26447_26476 = state_26437__$1;
(statearr_26447_26476[(2)] = inst_26419);

(statearr_26447_26476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (3))){
var inst_26435 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26437__$1,inst_26435);
} else {
if((state_val_26438 === (12))){
var inst_26396 = (state_26437[(9)]);
var inst_26410 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26396,opts);
var state_26437__$1 = state_26437;
if(cljs.core.truth_(inst_26410)){
var statearr_26448_26477 = state_26437__$1;
(statearr_26448_26477[(1)] = (15));

} else {
var statearr_26449_26478 = state_26437__$1;
(statearr_26449_26478[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (2))){
var state_26437__$1 = state_26437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26437__$1,(4),ch);
} else {
if((state_val_26438 === (11))){
var inst_26397 = (state_26437[(8)]);
var inst_26402 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26403 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26397);
var inst_26404 = cljs.core.async.timeout.call(null,(1000));
var inst_26405 = [inst_26403,inst_26404];
var inst_26406 = (new cljs.core.PersistentVector(null,2,(5),inst_26402,inst_26405,null));
var state_26437__$1 = state_26437;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26437__$1,(14),inst_26406);
} else {
if((state_val_26438 === (9))){
var inst_26397 = (state_26437[(8)]);
var inst_26423 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26424 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26397);
var inst_26425 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26424);
var inst_26426 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26425)].join('');
var inst_26427 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26426);
var state_26437__$1 = (function (){var statearr_26450 = state_26437;
(statearr_26450[(10)] = inst_26423);

return statearr_26450;
})();
var statearr_26451_26479 = state_26437__$1;
(statearr_26451_26479[(2)] = inst_26427);

(statearr_26451_26479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (5))){
var inst_26390 = (state_26437[(7)]);
var inst_26392 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26393 = (new cljs.core.PersistentArrayMap(null,2,inst_26392,null));
var inst_26394 = (new cljs.core.PersistentHashSet(null,inst_26393,null));
var inst_26395 = figwheel.client.focus_msgs.call(null,inst_26394,inst_26390);
var inst_26396 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26395);
var inst_26397 = cljs.core.first.call(null,inst_26395);
var inst_26398 = figwheel.client.autoload_QMARK_.call(null);
var state_26437__$1 = (function (){var statearr_26452 = state_26437;
(statearr_26452[(8)] = inst_26397);

(statearr_26452[(9)] = inst_26396);

return statearr_26452;
})();
if(cljs.core.truth_(inst_26398)){
var statearr_26453_26480 = state_26437__$1;
(statearr_26453_26480[(1)] = (8));

} else {
var statearr_26454_26481 = state_26437__$1;
(statearr_26454_26481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (14))){
var inst_26408 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
var statearr_26455_26482 = state_26437__$1;
(statearr_26455_26482[(2)] = inst_26408);

(statearr_26455_26482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (16))){
var state_26437__$1 = state_26437;
var statearr_26456_26483 = state_26437__$1;
(statearr_26456_26483[(2)] = null);

(statearr_26456_26483[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (10))){
var inst_26429 = (state_26437[(2)]);
var state_26437__$1 = (function (){var statearr_26457 = state_26437;
(statearr_26457[(11)] = inst_26429);

return statearr_26457;
})();
var statearr_26458_26484 = state_26437__$1;
(statearr_26458_26484[(2)] = null);

(statearr_26458_26484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (8))){
var inst_26396 = (state_26437[(9)]);
var inst_26400 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26396,opts);
var state_26437__$1 = state_26437;
if(cljs.core.truth_(inst_26400)){
var statearr_26459_26485 = state_26437__$1;
(statearr_26459_26485[(1)] = (11));

} else {
var statearr_26460_26486 = state_26437__$1;
(statearr_26460_26486[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto___26468,ch))
;
return ((function (switch__21798__auto__,c__21910__auto___26468,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21799__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21799__auto____0 = (function (){
var statearr_26464 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26464[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21799__auto__);

(statearr_26464[(1)] = (1));

return statearr_26464;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21799__auto____1 = (function (state_26437){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_26437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e26465){if((e26465 instanceof Object)){
var ex__21802__auto__ = e26465;
var statearr_26466_26487 = state_26437;
(statearr_26466_26487[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26488 = state_26437;
state_26437 = G__26488;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21799__auto__ = function(state_26437){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21799__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21799__auto____1.call(this,state_26437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21799__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21799__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___26468,ch))
})();
var state__21912__auto__ = (function (){var statearr_26467 = f__21911__auto__.call(null);
(statearr_26467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___26468);

return statearr_26467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___26468,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26489_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26489_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26496 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26496){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26494 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26495 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26494,_STAR_print_newline_STAR_26495,base_path_26496){
return (function() { 
var G__26497__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26498__i = 0, G__26498__a = new Array(arguments.length -  0);
while (G__26498__i < G__26498__a.length) {G__26498__a[G__26498__i] = arguments[G__26498__i + 0]; ++G__26498__i;}
  args = new cljs.core.IndexedSeq(G__26498__a,0);
} 
return G__26497__delegate.call(this,args);};
G__26497.cljs$lang$maxFixedArity = 0;
G__26497.cljs$lang$applyTo = (function (arglist__26499){
var args = cljs.core.seq(arglist__26499);
return G__26497__delegate(args);
});
G__26497.cljs$core$IFn$_invoke$arity$variadic = G__26497__delegate;
return G__26497;
})()
;})(_STAR_print_fn_STAR_26494,_STAR_print_newline_STAR_26495,base_path_26496))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26495;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26494;
}}catch (e26493){if((e26493 instanceof Error)){
var e = e26493;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26496], null));
} else {
var e = e26493;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26496))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26500){
var map__26507 = p__26500;
var map__26507__$1 = ((((!((map__26507 == null)))?((((map__26507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26507):map__26507);
var opts = map__26507__$1;
var build_id = cljs.core.get.call(null,map__26507__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26507,map__26507__$1,opts,build_id){
return (function (p__26509){
var vec__26510 = p__26509;
var map__26511 = cljs.core.nth.call(null,vec__26510,(0),null);
var map__26511__$1 = ((((!((map__26511 == null)))?((((map__26511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26511):map__26511);
var msg = map__26511__$1;
var msg_name = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26510,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26510,map__26511,map__26511__$1,msg,msg_name,_,map__26507,map__26507__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26510,map__26511,map__26511__$1,msg,msg_name,_,map__26507,map__26507__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26507,map__26507__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26517){
var vec__26518 = p__26517;
var map__26519 = cljs.core.nth.call(null,vec__26518,(0),null);
var map__26519__$1 = ((((!((map__26519 == null)))?((((map__26519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26519):map__26519);
var msg = map__26519__$1;
var msg_name = cljs.core.get.call(null,map__26519__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26518,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26521){
var map__26531 = p__26521;
var map__26531__$1 = ((((!((map__26531 == null)))?((((map__26531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26531):map__26531);
var on_compile_warning = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26531,map__26531__$1,on_compile_warning,on_compile_fail){
return (function (p__26533){
var vec__26534 = p__26533;
var map__26535 = cljs.core.nth.call(null,vec__26534,(0),null);
var map__26535__$1 = ((((!((map__26535 == null)))?((((map__26535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26535):map__26535);
var msg = map__26535__$1;
var msg_name = cljs.core.get.call(null,map__26535__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26534,(1));
var pred__26537 = cljs.core._EQ_;
var expr__26538 = msg_name;
if(cljs.core.truth_(pred__26537.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26538))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26537.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26538))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26531,map__26531__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto__,msg_hist,msg_names,msg){
return (function (state_26754){
var state_val_26755 = (state_26754[(1)]);
if((state_val_26755 === (7))){
var inst_26678 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
if(cljs.core.truth_(inst_26678)){
var statearr_26756_26802 = state_26754__$1;
(statearr_26756_26802[(1)] = (8));

} else {
var statearr_26757_26803 = state_26754__$1;
(statearr_26757_26803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (20))){
var inst_26748 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26758_26804 = state_26754__$1;
(statearr_26758_26804[(2)] = inst_26748);

(statearr_26758_26804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (27))){
var inst_26744 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26759_26805 = state_26754__$1;
(statearr_26759_26805[(2)] = inst_26744);

(statearr_26759_26805[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (1))){
var inst_26671 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26754__$1 = state_26754;
if(cljs.core.truth_(inst_26671)){
var statearr_26760_26806 = state_26754__$1;
(statearr_26760_26806[(1)] = (2));

} else {
var statearr_26761_26807 = state_26754__$1;
(statearr_26761_26807[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (24))){
var inst_26746 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26762_26808 = state_26754__$1;
(statearr_26762_26808[(2)] = inst_26746);

(statearr_26762_26808[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (4))){
var inst_26752 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26754__$1,inst_26752);
} else {
if((state_val_26755 === (15))){
var inst_26750 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26763_26809 = state_26754__$1;
(statearr_26763_26809[(2)] = inst_26750);

(statearr_26763_26809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (21))){
var inst_26709 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26764_26810 = state_26754__$1;
(statearr_26764_26810[(2)] = inst_26709);

(statearr_26764_26810[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (31))){
var inst_26733 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26754__$1 = state_26754;
if(cljs.core.truth_(inst_26733)){
var statearr_26765_26811 = state_26754__$1;
(statearr_26765_26811[(1)] = (34));

} else {
var statearr_26766_26812 = state_26754__$1;
(statearr_26766_26812[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (32))){
var inst_26742 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26767_26813 = state_26754__$1;
(statearr_26767_26813[(2)] = inst_26742);

(statearr_26767_26813[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (33))){
var inst_26731 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26768_26814 = state_26754__$1;
(statearr_26768_26814[(2)] = inst_26731);

(statearr_26768_26814[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (13))){
var inst_26692 = figwheel.client.heads_up.clear.call(null);
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26754__$1,(16),inst_26692);
} else {
if((state_val_26755 === (22))){
var inst_26713 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26714 = figwheel.client.heads_up.append_message.call(null,inst_26713);
var state_26754__$1 = state_26754;
var statearr_26769_26815 = state_26754__$1;
(statearr_26769_26815[(2)] = inst_26714);

(statearr_26769_26815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (36))){
var inst_26740 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26770_26816 = state_26754__$1;
(statearr_26770_26816[(2)] = inst_26740);

(statearr_26770_26816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (29))){
var inst_26724 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26771_26817 = state_26754__$1;
(statearr_26771_26817[(2)] = inst_26724);

(statearr_26771_26817[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (6))){
var inst_26673 = (state_26754[(7)]);
var state_26754__$1 = state_26754;
var statearr_26772_26818 = state_26754__$1;
(statearr_26772_26818[(2)] = inst_26673);

(statearr_26772_26818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (28))){
var inst_26720 = (state_26754[(2)]);
var inst_26721 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26722 = figwheel.client.heads_up.display_warning.call(null,inst_26721);
var state_26754__$1 = (function (){var statearr_26773 = state_26754;
(statearr_26773[(8)] = inst_26720);

return statearr_26773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26754__$1,(29),inst_26722);
} else {
if((state_val_26755 === (25))){
var inst_26718 = figwheel.client.heads_up.clear.call(null);
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26754__$1,(28),inst_26718);
} else {
if((state_val_26755 === (34))){
var inst_26735 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26754__$1,(37),inst_26735);
} else {
if((state_val_26755 === (17))){
var inst_26700 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26774_26819 = state_26754__$1;
(statearr_26774_26819[(2)] = inst_26700);

(statearr_26774_26819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (3))){
var inst_26690 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26754__$1 = state_26754;
if(cljs.core.truth_(inst_26690)){
var statearr_26775_26820 = state_26754__$1;
(statearr_26775_26820[(1)] = (13));

} else {
var statearr_26776_26821 = state_26754__$1;
(statearr_26776_26821[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (12))){
var inst_26686 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26777_26822 = state_26754__$1;
(statearr_26777_26822[(2)] = inst_26686);

(statearr_26777_26822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (2))){
var inst_26673 = (state_26754[(7)]);
var inst_26673__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26754__$1 = (function (){var statearr_26778 = state_26754;
(statearr_26778[(7)] = inst_26673__$1);

return statearr_26778;
})();
if(cljs.core.truth_(inst_26673__$1)){
var statearr_26779_26823 = state_26754__$1;
(statearr_26779_26823[(1)] = (5));

} else {
var statearr_26780_26824 = state_26754__$1;
(statearr_26780_26824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (23))){
var inst_26716 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26754__$1 = state_26754;
if(cljs.core.truth_(inst_26716)){
var statearr_26781_26825 = state_26754__$1;
(statearr_26781_26825[(1)] = (25));

} else {
var statearr_26782_26826 = state_26754__$1;
(statearr_26782_26826[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (35))){
var state_26754__$1 = state_26754;
var statearr_26783_26827 = state_26754__$1;
(statearr_26783_26827[(2)] = null);

(statearr_26783_26827[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (19))){
var inst_26711 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26754__$1 = state_26754;
if(cljs.core.truth_(inst_26711)){
var statearr_26784_26828 = state_26754__$1;
(statearr_26784_26828[(1)] = (22));

} else {
var statearr_26785_26829 = state_26754__$1;
(statearr_26785_26829[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (11))){
var inst_26682 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26786_26830 = state_26754__$1;
(statearr_26786_26830[(2)] = inst_26682);

(statearr_26786_26830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (9))){
var inst_26684 = figwheel.client.heads_up.clear.call(null);
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26754__$1,(12),inst_26684);
} else {
if((state_val_26755 === (5))){
var inst_26675 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26754__$1 = state_26754;
var statearr_26787_26831 = state_26754__$1;
(statearr_26787_26831[(2)] = inst_26675);

(statearr_26787_26831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (14))){
var inst_26702 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26754__$1 = state_26754;
if(cljs.core.truth_(inst_26702)){
var statearr_26788_26832 = state_26754__$1;
(statearr_26788_26832[(1)] = (18));

} else {
var statearr_26789_26833 = state_26754__$1;
(statearr_26789_26833[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (26))){
var inst_26726 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26754__$1 = state_26754;
if(cljs.core.truth_(inst_26726)){
var statearr_26790_26834 = state_26754__$1;
(statearr_26790_26834[(1)] = (30));

} else {
var statearr_26791_26835 = state_26754__$1;
(statearr_26791_26835[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (16))){
var inst_26694 = (state_26754[(2)]);
var inst_26695 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26696 = figwheel.client.format_messages.call(null,inst_26695);
var inst_26697 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26698 = figwheel.client.heads_up.display_error.call(null,inst_26696,inst_26697);
var state_26754__$1 = (function (){var statearr_26792 = state_26754;
(statearr_26792[(9)] = inst_26694);

return statearr_26792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26754__$1,(17),inst_26698);
} else {
if((state_val_26755 === (30))){
var inst_26728 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26729 = figwheel.client.heads_up.display_warning.call(null,inst_26728);
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26754__$1,(33),inst_26729);
} else {
if((state_val_26755 === (10))){
var inst_26688 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26793_26836 = state_26754__$1;
(statearr_26793_26836[(2)] = inst_26688);

(statearr_26793_26836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (18))){
var inst_26704 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26705 = figwheel.client.format_messages.call(null,inst_26704);
var inst_26706 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26707 = figwheel.client.heads_up.display_error.call(null,inst_26705,inst_26706);
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26754__$1,(21),inst_26707);
} else {
if((state_val_26755 === (37))){
var inst_26737 = (state_26754[(2)]);
var state_26754__$1 = state_26754;
var statearr_26794_26837 = state_26754__$1;
(statearr_26794_26837[(2)] = inst_26737);

(statearr_26794_26837[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26755 === (8))){
var inst_26680 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26754__$1 = state_26754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26754__$1,(11),inst_26680);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21798__auto__,c__21910__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto____0 = (function (){
var statearr_26798 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26798[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto__);

(statearr_26798[(1)] = (1));

return statearr_26798;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto____1 = (function (state_26754){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_26754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e26799){if((e26799 instanceof Object)){
var ex__21802__auto__ = e26799;
var statearr_26800_26838 = state_26754;
(statearr_26800_26838[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26839 = state_26754;
state_26754 = G__26839;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto__ = function(state_26754){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto____1.call(this,state_26754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto__,msg_hist,msg_names,msg))
})();
var state__21912__auto__ = (function (){var statearr_26801 = f__21911__auto__.call(null);
(statearr_26801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto__);

return statearr_26801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto__,msg_hist,msg_names,msg))
);

return c__21910__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21910__auto___26902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___26902,ch){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___26902,ch){
return (function (state_26885){
var state_val_26886 = (state_26885[(1)]);
if((state_val_26886 === (1))){
var state_26885__$1 = state_26885;
var statearr_26887_26903 = state_26885__$1;
(statearr_26887_26903[(2)] = null);

(statearr_26887_26903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (2))){
var state_26885__$1 = state_26885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26885__$1,(4),ch);
} else {
if((state_val_26886 === (3))){
var inst_26883 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26885__$1,inst_26883);
} else {
if((state_val_26886 === (4))){
var inst_26873 = (state_26885[(7)]);
var inst_26873__$1 = (state_26885[(2)]);
var state_26885__$1 = (function (){var statearr_26888 = state_26885;
(statearr_26888[(7)] = inst_26873__$1);

return statearr_26888;
})();
if(cljs.core.truth_(inst_26873__$1)){
var statearr_26889_26904 = state_26885__$1;
(statearr_26889_26904[(1)] = (5));

} else {
var statearr_26890_26905 = state_26885__$1;
(statearr_26890_26905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (5))){
var inst_26873 = (state_26885[(7)]);
var inst_26875 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26873);
var state_26885__$1 = state_26885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26885__$1,(8),inst_26875);
} else {
if((state_val_26886 === (6))){
var state_26885__$1 = state_26885;
var statearr_26891_26906 = state_26885__$1;
(statearr_26891_26906[(2)] = null);

(statearr_26891_26906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (7))){
var inst_26881 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
var statearr_26892_26907 = state_26885__$1;
(statearr_26892_26907[(2)] = inst_26881);

(statearr_26892_26907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (8))){
var inst_26877 = (state_26885[(2)]);
var state_26885__$1 = (function (){var statearr_26893 = state_26885;
(statearr_26893[(8)] = inst_26877);

return statearr_26893;
})();
var statearr_26894_26908 = state_26885__$1;
(statearr_26894_26908[(2)] = null);

(statearr_26894_26908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21910__auto___26902,ch))
;
return ((function (switch__21798__auto__,c__21910__auto___26902,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21799__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21799__auto____0 = (function (){
var statearr_26898 = [null,null,null,null,null,null,null,null,null];
(statearr_26898[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21799__auto__);

(statearr_26898[(1)] = (1));

return statearr_26898;
});
var figwheel$client$heads_up_plugin_$_state_machine__21799__auto____1 = (function (state_26885){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_26885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e26899){if((e26899 instanceof Object)){
var ex__21802__auto__ = e26899;
var statearr_26900_26909 = state_26885;
(statearr_26900_26909[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26910 = state_26885;
state_26885 = G__26910;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21799__auto__ = function(state_26885){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21799__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21799__auto____1.call(this,state_26885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21799__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21799__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___26902,ch))
})();
var state__21912__auto__ = (function (){var statearr_26901 = f__21911__auto__.call(null);
(statearr_26901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___26902);

return statearr_26901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___26902,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto__){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto__){
return (function (state_26931){
var state_val_26932 = (state_26931[(1)]);
if((state_val_26932 === (1))){
var inst_26926 = cljs.core.async.timeout.call(null,(3000));
var state_26931__$1 = state_26931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26931__$1,(2),inst_26926);
} else {
if((state_val_26932 === (2))){
var inst_26928 = (state_26931[(2)]);
var inst_26929 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26931__$1 = (function (){var statearr_26933 = state_26931;
(statearr_26933[(7)] = inst_26928);

return statearr_26933;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26931__$1,inst_26929);
} else {
return null;
}
}
});})(c__21910__auto__))
;
return ((function (switch__21798__auto__,c__21910__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21799__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21799__auto____0 = (function (){
var statearr_26937 = [null,null,null,null,null,null,null,null];
(statearr_26937[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21799__auto__);

(statearr_26937[(1)] = (1));

return statearr_26937;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21799__auto____1 = (function (state_26931){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_26931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e26938){if((e26938 instanceof Object)){
var ex__21802__auto__ = e26938;
var statearr_26939_26941 = state_26931;
(statearr_26939_26941[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26942 = state_26931;
state_26931 = G__26942;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21799__auto__ = function(state_26931){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21799__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21799__auto____1.call(this,state_26931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21799__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21799__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto__))
})();
var state__21912__auto__ = (function (){var statearr_26940 = f__21911__auto__.call(null);
(statearr_26940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto__);

return statearr_26940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto__))
);

return c__21910__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26943){
var map__26950 = p__26943;
var map__26950__$1 = ((((!((map__26950 == null)))?((((map__26950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26950):map__26950);
var ed = map__26950__$1;
var formatted_exception = cljs.core.get.call(null,map__26950__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26950__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26950__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26952_26956 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26953_26957 = null;
var count__26954_26958 = (0);
var i__26955_26959 = (0);
while(true){
if((i__26955_26959 < count__26954_26958)){
var msg_26960 = cljs.core._nth.call(null,chunk__26953_26957,i__26955_26959);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26960);

var G__26961 = seq__26952_26956;
var G__26962 = chunk__26953_26957;
var G__26963 = count__26954_26958;
var G__26964 = (i__26955_26959 + (1));
seq__26952_26956 = G__26961;
chunk__26953_26957 = G__26962;
count__26954_26958 = G__26963;
i__26955_26959 = G__26964;
continue;
} else {
var temp__4425__auto___26965 = cljs.core.seq.call(null,seq__26952_26956);
if(temp__4425__auto___26965){
var seq__26952_26966__$1 = temp__4425__auto___26965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26952_26966__$1)){
var c__17588__auto___26967 = cljs.core.chunk_first.call(null,seq__26952_26966__$1);
var G__26968 = cljs.core.chunk_rest.call(null,seq__26952_26966__$1);
var G__26969 = c__17588__auto___26967;
var G__26970 = cljs.core.count.call(null,c__17588__auto___26967);
var G__26971 = (0);
seq__26952_26956 = G__26968;
chunk__26953_26957 = G__26969;
count__26954_26958 = G__26970;
i__26955_26959 = G__26971;
continue;
} else {
var msg_26972 = cljs.core.first.call(null,seq__26952_26966__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26972);

var G__26973 = cljs.core.next.call(null,seq__26952_26966__$1);
var G__26974 = null;
var G__26975 = (0);
var G__26976 = (0);
seq__26952_26956 = G__26973;
chunk__26953_26957 = G__26974;
count__26954_26958 = G__26975;
i__26955_26959 = G__26976;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26977){
var map__26980 = p__26977;
var map__26980__$1 = ((((!((map__26980 == null)))?((((map__26980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26980):map__26980);
var w = map__26980__$1;
var message = cljs.core.get.call(null,map__26980__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16773__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16773__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16773__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26988 = cljs.core.seq.call(null,plugins);
var chunk__26989 = null;
var count__26990 = (0);
var i__26991 = (0);
while(true){
if((i__26991 < count__26990)){
var vec__26992 = cljs.core._nth.call(null,chunk__26989,i__26991);
var k = cljs.core.nth.call(null,vec__26992,(0),null);
var plugin = cljs.core.nth.call(null,vec__26992,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26994 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26988,chunk__26989,count__26990,i__26991,pl_26994,vec__26992,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26994.call(null,msg_hist);
});})(seq__26988,chunk__26989,count__26990,i__26991,pl_26994,vec__26992,k,plugin))
);
} else {
}

var G__26995 = seq__26988;
var G__26996 = chunk__26989;
var G__26997 = count__26990;
var G__26998 = (i__26991 + (1));
seq__26988 = G__26995;
chunk__26989 = G__26996;
count__26990 = G__26997;
i__26991 = G__26998;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26988);
if(temp__4425__auto__){
var seq__26988__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26988__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__26988__$1);
var G__26999 = cljs.core.chunk_rest.call(null,seq__26988__$1);
var G__27000 = c__17588__auto__;
var G__27001 = cljs.core.count.call(null,c__17588__auto__);
var G__27002 = (0);
seq__26988 = G__26999;
chunk__26989 = G__27000;
count__26990 = G__27001;
i__26991 = G__27002;
continue;
} else {
var vec__26993 = cljs.core.first.call(null,seq__26988__$1);
var k = cljs.core.nth.call(null,vec__26993,(0),null);
var plugin = cljs.core.nth.call(null,vec__26993,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27003 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26988,chunk__26989,count__26990,i__26991,pl_27003,vec__26993,k,plugin,seq__26988__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27003.call(null,msg_hist);
});})(seq__26988,chunk__26989,count__26990,i__26991,pl_27003,vec__26993,k,plugin,seq__26988__$1,temp__4425__auto__))
);
} else {
}

var G__27004 = cljs.core.next.call(null,seq__26988__$1);
var G__27005 = null;
var G__27006 = (0);
var G__27007 = (0);
seq__26988 = G__27004;
chunk__26989 = G__27005;
count__26990 = G__27006;
i__26991 = G__27007;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27008 = [];
var len__17843__auto___27011 = arguments.length;
var i__17844__auto___27012 = (0);
while(true){
if((i__17844__auto___27012 < len__17843__auto___27011)){
args27008.push((arguments[i__17844__auto___27012]));

var G__27013 = (i__17844__auto___27012 + (1));
i__17844__auto___27012 = G__27013;
continue;
} else {
}
break;
}

var G__27010 = args27008.length;
switch (G__27010) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27008.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17850__auto__ = [];
var len__17843__auto___27019 = arguments.length;
var i__17844__auto___27020 = (0);
while(true){
if((i__17844__auto___27020 < len__17843__auto___27019)){
args__17850__auto__.push((arguments[i__17844__auto___27020]));

var G__27021 = (i__17844__auto___27020 + (1));
i__17844__auto___27020 = G__27021;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((0) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17851__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27016){
var map__27017 = p__27016;
var map__27017__$1 = ((((!((map__27017 == null)))?((((map__27017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27017):map__27017);
var opts = map__27017__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27015){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27015));
});

//# sourceMappingURL=client.js.map