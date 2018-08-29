// Compiled by ClojureScript 1.7.122 {}
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
var pred__25456 = cljs.core._EQ_;
var expr__25457 = (function (){var or__16363__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25456.call(null,"true",expr__25457))){
return true;
} else {
if(cljs.core.truth_(pred__25456.call(null,"false",expr__25457))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25457)].join('')));
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
var G__25459__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25460__i = 0, G__25460__a = new Array(arguments.length -  0);
while (G__25460__i < G__25460__a.length) {G__25460__a[G__25460__i] = arguments[G__25460__i + 0]; ++G__25460__i;}
  args = new cljs.core.IndexedSeq(G__25460__a,0);
} 
return G__25459__delegate.call(this,args);};
G__25459.cljs$lang$maxFixedArity = 0;
G__25459.cljs$lang$applyTo = (function (arglist__25461){
var args = cljs.core.seq(arglist__25461);
return G__25459__delegate(args);
});
G__25459.cljs$core$IFn$_invoke$arity$variadic = G__25459__delegate;
return G__25459;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25462){
var map__25465 = p__25462;
var map__25465__$1 = ((((!((map__25465 == null)))?((((map__25465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25465):map__25465);
var message = cljs.core.get.call(null,map__25465__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25465__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16363__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16351__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16351__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16351__auto__;
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
var c__20150__auto___25627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___25627,ch){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___25627,ch){
return (function (state_25596){
var state_val_25597 = (state_25596[(1)]);
if((state_val_25597 === (7))){
var inst_25592 = (state_25596[(2)]);
var state_25596__$1 = state_25596;
var statearr_25598_25628 = state_25596__$1;
(statearr_25598_25628[(2)] = inst_25592);

(statearr_25598_25628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (1))){
var state_25596__$1 = state_25596;
var statearr_25599_25629 = state_25596__$1;
(statearr_25599_25629[(2)] = null);

(statearr_25599_25629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (4))){
var inst_25549 = (state_25596[(7)]);
var inst_25549__$1 = (state_25596[(2)]);
var state_25596__$1 = (function (){var statearr_25600 = state_25596;
(statearr_25600[(7)] = inst_25549__$1);

return statearr_25600;
})();
if(cljs.core.truth_(inst_25549__$1)){
var statearr_25601_25630 = state_25596__$1;
(statearr_25601_25630[(1)] = (5));

} else {
var statearr_25602_25631 = state_25596__$1;
(statearr_25602_25631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (15))){
var inst_25556 = (state_25596[(8)]);
var inst_25571 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25556);
var inst_25572 = cljs.core.first.call(null,inst_25571);
var inst_25573 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25572);
var inst_25574 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25573)].join('');
var inst_25575 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25574);
var state_25596__$1 = state_25596;
var statearr_25603_25632 = state_25596__$1;
(statearr_25603_25632[(2)] = inst_25575);

(statearr_25603_25632[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (13))){
var inst_25580 = (state_25596[(2)]);
var state_25596__$1 = state_25596;
var statearr_25604_25633 = state_25596__$1;
(statearr_25604_25633[(2)] = inst_25580);

(statearr_25604_25633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (6))){
var state_25596__$1 = state_25596;
var statearr_25605_25634 = state_25596__$1;
(statearr_25605_25634[(2)] = null);

(statearr_25605_25634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (17))){
var inst_25578 = (state_25596[(2)]);
var state_25596__$1 = state_25596;
var statearr_25606_25635 = state_25596__$1;
(statearr_25606_25635[(2)] = inst_25578);

(statearr_25606_25635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (3))){
var inst_25594 = (state_25596[(2)]);
var state_25596__$1 = state_25596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25596__$1,inst_25594);
} else {
if((state_val_25597 === (12))){
var inst_25555 = (state_25596[(9)]);
var inst_25569 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25555,opts);
var state_25596__$1 = state_25596;
if(cljs.core.truth_(inst_25569)){
var statearr_25607_25636 = state_25596__$1;
(statearr_25607_25636[(1)] = (15));

} else {
var statearr_25608_25637 = state_25596__$1;
(statearr_25608_25637[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (2))){
var state_25596__$1 = state_25596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25596__$1,(4),ch);
} else {
if((state_val_25597 === (11))){
var inst_25556 = (state_25596[(8)]);
var inst_25561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25562 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25556);
var inst_25563 = cljs.core.async.timeout.call(null,(1000));
var inst_25564 = [inst_25562,inst_25563];
var inst_25565 = (new cljs.core.PersistentVector(null,2,(5),inst_25561,inst_25564,null));
var state_25596__$1 = state_25596;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25596__$1,(14),inst_25565);
} else {
if((state_val_25597 === (9))){
var inst_25556 = (state_25596[(8)]);
var inst_25582 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25583 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25556);
var inst_25584 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25583);
var inst_25585 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25584)].join('');
var inst_25586 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25585);
var state_25596__$1 = (function (){var statearr_25609 = state_25596;
(statearr_25609[(10)] = inst_25582);

return statearr_25609;
})();
var statearr_25610_25638 = state_25596__$1;
(statearr_25610_25638[(2)] = inst_25586);

(statearr_25610_25638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (5))){
var inst_25549 = (state_25596[(7)]);
var inst_25551 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25552 = (new cljs.core.PersistentArrayMap(null,2,inst_25551,null));
var inst_25553 = (new cljs.core.PersistentHashSet(null,inst_25552,null));
var inst_25554 = figwheel.client.focus_msgs.call(null,inst_25553,inst_25549);
var inst_25555 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25554);
var inst_25556 = cljs.core.first.call(null,inst_25554);
var inst_25557 = figwheel.client.autoload_QMARK_.call(null);
var state_25596__$1 = (function (){var statearr_25611 = state_25596;
(statearr_25611[(9)] = inst_25555);

(statearr_25611[(8)] = inst_25556);

return statearr_25611;
})();
if(cljs.core.truth_(inst_25557)){
var statearr_25612_25639 = state_25596__$1;
(statearr_25612_25639[(1)] = (8));

} else {
var statearr_25613_25640 = state_25596__$1;
(statearr_25613_25640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (14))){
var inst_25567 = (state_25596[(2)]);
var state_25596__$1 = state_25596;
var statearr_25614_25641 = state_25596__$1;
(statearr_25614_25641[(2)] = inst_25567);

(statearr_25614_25641[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (16))){
var state_25596__$1 = state_25596;
var statearr_25615_25642 = state_25596__$1;
(statearr_25615_25642[(2)] = null);

(statearr_25615_25642[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (10))){
var inst_25588 = (state_25596[(2)]);
var state_25596__$1 = (function (){var statearr_25616 = state_25596;
(statearr_25616[(11)] = inst_25588);

return statearr_25616;
})();
var statearr_25617_25643 = state_25596__$1;
(statearr_25617_25643[(2)] = null);

(statearr_25617_25643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25597 === (8))){
var inst_25555 = (state_25596[(9)]);
var inst_25559 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25555,opts);
var state_25596__$1 = state_25596;
if(cljs.core.truth_(inst_25559)){
var statearr_25618_25644 = state_25596__$1;
(statearr_25618_25644[(1)] = (11));

} else {
var statearr_25619_25645 = state_25596__$1;
(statearr_25619_25645[(1)] = (12));

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
});})(c__20150__auto___25627,ch))
;
return ((function (switch__20085__auto__,c__20150__auto___25627,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20086__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20086__auto____0 = (function (){
var statearr_25623 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25623[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20086__auto__);

(statearr_25623[(1)] = (1));

return statearr_25623;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20086__auto____1 = (function (state_25596){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_25596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e25624){if((e25624 instanceof Object)){
var ex__20089__auto__ = e25624;
var statearr_25625_25646 = state_25596;
(statearr_25625_25646[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25647 = state_25596;
state_25596 = G__25647;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20086__auto__ = function(state_25596){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20086__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20086__auto____1.call(this,state_25596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20086__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20086__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___25627,ch))
})();
var state__20152__auto__ = (function (){var statearr_25626 = f__20151__auto__.call(null);
(statearr_25626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___25627);

return statearr_25626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___25627,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25648_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25648_SHARP_));
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
var base_path_25655 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25655){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25653 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25654 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25653,_STAR_print_newline_STAR_25654,base_path_25655){
return (function() { 
var G__25656__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25657__i = 0, G__25657__a = new Array(arguments.length -  0);
while (G__25657__i < G__25657__a.length) {G__25657__a[G__25657__i] = arguments[G__25657__i + 0]; ++G__25657__i;}
  args = new cljs.core.IndexedSeq(G__25657__a,0);
} 
return G__25656__delegate.call(this,args);};
G__25656.cljs$lang$maxFixedArity = 0;
G__25656.cljs$lang$applyTo = (function (arglist__25658){
var args = cljs.core.seq(arglist__25658);
return G__25656__delegate(args);
});
G__25656.cljs$core$IFn$_invoke$arity$variadic = G__25656__delegate;
return G__25656;
})()
;})(_STAR_print_fn_STAR_25653,_STAR_print_newline_STAR_25654,base_path_25655))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25654;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25653;
}}catch (e25652){if((e25652 instanceof Error)){
var e = e25652;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25655], null));
} else {
var e = e25652;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25655))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25659){
var map__25666 = p__25659;
var map__25666__$1 = ((((!((map__25666 == null)))?((((map__25666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25666):map__25666);
var opts = map__25666__$1;
var build_id = cljs.core.get.call(null,map__25666__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25666,map__25666__$1,opts,build_id){
return (function (p__25668){
var vec__25669 = p__25668;
var map__25670 = cljs.core.nth.call(null,vec__25669,(0),null);
var map__25670__$1 = ((((!((map__25670 == null)))?((((map__25670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25670):map__25670);
var msg = map__25670__$1;
var msg_name = cljs.core.get.call(null,map__25670__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25669,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25669,map__25670,map__25670__$1,msg,msg_name,_,map__25666,map__25666__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25669,map__25670,map__25670__$1,msg,msg_name,_,map__25666,map__25666__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25666,map__25666__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25676){
var vec__25677 = p__25676;
var map__25678 = cljs.core.nth.call(null,vec__25677,(0),null);
var map__25678__$1 = ((((!((map__25678 == null)))?((((map__25678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25678):map__25678);
var msg = map__25678__$1;
var msg_name = cljs.core.get.call(null,map__25678__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25677,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25680){
var map__25690 = p__25680;
var map__25690__$1 = ((((!((map__25690 == null)))?((((map__25690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25690):map__25690);
var on_compile_warning = cljs.core.get.call(null,map__25690__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25690__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25690,map__25690__$1,on_compile_warning,on_compile_fail){
return (function (p__25692){
var vec__25693 = p__25692;
var map__25694 = cljs.core.nth.call(null,vec__25693,(0),null);
var map__25694__$1 = ((((!((map__25694 == null)))?((((map__25694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25694):map__25694);
var msg = map__25694__$1;
var msg_name = cljs.core.get.call(null,map__25694__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25693,(1));
var pred__25696 = cljs.core._EQ_;
var expr__25697 = msg_name;
if(cljs.core.truth_(pred__25696.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25697))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25696.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25697))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25690,map__25690__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20150__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto__,msg_hist,msg_names,msg){
return (function (state_25913){
var state_val_25914 = (state_25913[(1)]);
if((state_val_25914 === (7))){
var inst_25837 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
if(cljs.core.truth_(inst_25837)){
var statearr_25915_25961 = state_25913__$1;
(statearr_25915_25961[(1)] = (8));

} else {
var statearr_25916_25962 = state_25913__$1;
(statearr_25916_25962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (20))){
var inst_25907 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
var statearr_25917_25963 = state_25913__$1;
(statearr_25917_25963[(2)] = inst_25907);

(statearr_25917_25963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (27))){
var inst_25903 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
var statearr_25918_25964 = state_25913__$1;
(statearr_25918_25964[(2)] = inst_25903);

(statearr_25918_25964[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (1))){
var inst_25830 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25913__$1 = state_25913;
if(cljs.core.truth_(inst_25830)){
var statearr_25919_25965 = state_25913__$1;
(statearr_25919_25965[(1)] = (2));

} else {
var statearr_25920_25966 = state_25913__$1;
(statearr_25920_25966[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (24))){
var inst_25905 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
var statearr_25921_25967 = state_25913__$1;
(statearr_25921_25967[(2)] = inst_25905);

(statearr_25921_25967[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (4))){
var inst_25911 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25913__$1,inst_25911);
} else {
if((state_val_25914 === (15))){
var inst_25909 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
var statearr_25922_25968 = state_25913__$1;
(statearr_25922_25968[(2)] = inst_25909);

(statearr_25922_25968[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (21))){
var inst_25868 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
var statearr_25923_25969 = state_25913__$1;
(statearr_25923_25969[(2)] = inst_25868);

(statearr_25923_25969[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (31))){
var inst_25892 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25913__$1 = state_25913;
if(cljs.core.truth_(inst_25892)){
var statearr_25924_25970 = state_25913__$1;
(statearr_25924_25970[(1)] = (34));

} else {
var statearr_25925_25971 = state_25913__$1;
(statearr_25925_25971[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (32))){
var inst_25901 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
var statearr_25926_25972 = state_25913__$1;
(statearr_25926_25972[(2)] = inst_25901);

(statearr_25926_25972[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (33))){
var inst_25890 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
var statearr_25927_25973 = state_25913__$1;
(statearr_25927_25973[(2)] = inst_25890);

(statearr_25927_25973[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (13))){
var inst_25851 = figwheel.client.heads_up.clear.call(null);
var state_25913__$1 = state_25913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25913__$1,(16),inst_25851);
} else {
if((state_val_25914 === (22))){
var inst_25872 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25873 = figwheel.client.heads_up.append_message.call(null,inst_25872);
var state_25913__$1 = state_25913;
var statearr_25928_25974 = state_25913__$1;
(statearr_25928_25974[(2)] = inst_25873);

(statearr_25928_25974[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (36))){
var inst_25899 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
var statearr_25929_25975 = state_25913__$1;
(statearr_25929_25975[(2)] = inst_25899);

(statearr_25929_25975[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (29))){
var inst_25883 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
var statearr_25930_25976 = state_25913__$1;
(statearr_25930_25976[(2)] = inst_25883);

(statearr_25930_25976[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (6))){
var inst_25832 = (state_25913[(7)]);
var state_25913__$1 = state_25913;
var statearr_25931_25977 = state_25913__$1;
(statearr_25931_25977[(2)] = inst_25832);

(statearr_25931_25977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (28))){
var inst_25879 = (state_25913[(2)]);
var inst_25880 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25881 = figwheel.client.heads_up.display_warning.call(null,inst_25880);
var state_25913__$1 = (function (){var statearr_25932 = state_25913;
(statearr_25932[(8)] = inst_25879);

return statearr_25932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25913__$1,(29),inst_25881);
} else {
if((state_val_25914 === (25))){
var inst_25877 = figwheel.client.heads_up.clear.call(null);
var state_25913__$1 = state_25913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25913__$1,(28),inst_25877);
} else {
if((state_val_25914 === (34))){
var inst_25894 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25913__$1 = state_25913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25913__$1,(37),inst_25894);
} else {
if((state_val_25914 === (17))){
var inst_25859 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
var statearr_25933_25978 = state_25913__$1;
(statearr_25933_25978[(2)] = inst_25859);

(statearr_25933_25978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (3))){
var inst_25849 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25913__$1 = state_25913;
if(cljs.core.truth_(inst_25849)){
var statearr_25934_25979 = state_25913__$1;
(statearr_25934_25979[(1)] = (13));

} else {
var statearr_25935_25980 = state_25913__$1;
(statearr_25935_25980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (12))){
var inst_25845 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
var statearr_25936_25981 = state_25913__$1;
(statearr_25936_25981[(2)] = inst_25845);

(statearr_25936_25981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (2))){
var inst_25832 = (state_25913[(7)]);
var inst_25832__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25913__$1 = (function (){var statearr_25937 = state_25913;
(statearr_25937[(7)] = inst_25832__$1);

return statearr_25937;
})();
if(cljs.core.truth_(inst_25832__$1)){
var statearr_25938_25982 = state_25913__$1;
(statearr_25938_25982[(1)] = (5));

} else {
var statearr_25939_25983 = state_25913__$1;
(statearr_25939_25983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (23))){
var inst_25875 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25913__$1 = state_25913;
if(cljs.core.truth_(inst_25875)){
var statearr_25940_25984 = state_25913__$1;
(statearr_25940_25984[(1)] = (25));

} else {
var statearr_25941_25985 = state_25913__$1;
(statearr_25941_25985[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (35))){
var state_25913__$1 = state_25913;
var statearr_25942_25986 = state_25913__$1;
(statearr_25942_25986[(2)] = null);

(statearr_25942_25986[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (19))){
var inst_25870 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25913__$1 = state_25913;
if(cljs.core.truth_(inst_25870)){
var statearr_25943_25987 = state_25913__$1;
(statearr_25943_25987[(1)] = (22));

} else {
var statearr_25944_25988 = state_25913__$1;
(statearr_25944_25988[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (11))){
var inst_25841 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
var statearr_25945_25989 = state_25913__$1;
(statearr_25945_25989[(2)] = inst_25841);

(statearr_25945_25989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (9))){
var inst_25843 = figwheel.client.heads_up.clear.call(null);
var state_25913__$1 = state_25913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25913__$1,(12),inst_25843);
} else {
if((state_val_25914 === (5))){
var inst_25834 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25913__$1 = state_25913;
var statearr_25946_25990 = state_25913__$1;
(statearr_25946_25990[(2)] = inst_25834);

(statearr_25946_25990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (14))){
var inst_25861 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25913__$1 = state_25913;
if(cljs.core.truth_(inst_25861)){
var statearr_25947_25991 = state_25913__$1;
(statearr_25947_25991[(1)] = (18));

} else {
var statearr_25948_25992 = state_25913__$1;
(statearr_25948_25992[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (26))){
var inst_25885 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25913__$1 = state_25913;
if(cljs.core.truth_(inst_25885)){
var statearr_25949_25993 = state_25913__$1;
(statearr_25949_25993[(1)] = (30));

} else {
var statearr_25950_25994 = state_25913__$1;
(statearr_25950_25994[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (16))){
var inst_25853 = (state_25913[(2)]);
var inst_25854 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25855 = figwheel.client.format_messages.call(null,inst_25854);
var inst_25856 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25857 = figwheel.client.heads_up.display_error.call(null,inst_25855,inst_25856);
var state_25913__$1 = (function (){var statearr_25951 = state_25913;
(statearr_25951[(9)] = inst_25853);

return statearr_25951;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25913__$1,(17),inst_25857);
} else {
if((state_val_25914 === (30))){
var inst_25887 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25888 = figwheel.client.heads_up.display_warning.call(null,inst_25887);
var state_25913__$1 = state_25913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25913__$1,(33),inst_25888);
} else {
if((state_val_25914 === (10))){
var inst_25847 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
var statearr_25952_25995 = state_25913__$1;
(statearr_25952_25995[(2)] = inst_25847);

(statearr_25952_25995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (18))){
var inst_25863 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25864 = figwheel.client.format_messages.call(null,inst_25863);
var inst_25865 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25866 = figwheel.client.heads_up.display_error.call(null,inst_25864,inst_25865);
var state_25913__$1 = state_25913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25913__$1,(21),inst_25866);
} else {
if((state_val_25914 === (37))){
var inst_25896 = (state_25913[(2)]);
var state_25913__$1 = state_25913;
var statearr_25953_25996 = state_25913__$1;
(statearr_25953_25996[(2)] = inst_25896);

(statearr_25953_25996[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25914 === (8))){
var inst_25839 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25913__$1 = state_25913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25913__$1,(11),inst_25839);
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
});})(c__20150__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20085__auto__,c__20150__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20086__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20086__auto____0 = (function (){
var statearr_25957 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25957[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20086__auto__);

(statearr_25957[(1)] = (1));

return statearr_25957;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20086__auto____1 = (function (state_25913){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_25913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e25958){if((e25958 instanceof Object)){
var ex__20089__auto__ = e25958;
var statearr_25959_25997 = state_25913;
(statearr_25959_25997[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25998 = state_25913;
state_25913 = G__25998;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20086__auto__ = function(state_25913){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20086__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20086__auto____1.call(this,state_25913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20086__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20086__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto__,msg_hist,msg_names,msg))
})();
var state__20152__auto__ = (function (){var statearr_25960 = f__20151__auto__.call(null);
(statearr_25960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto__);

return statearr_25960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto__,msg_hist,msg_names,msg))
);

return c__20150__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20150__auto___26061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___26061,ch){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___26061,ch){
return (function (state_26044){
var state_val_26045 = (state_26044[(1)]);
if((state_val_26045 === (1))){
var state_26044__$1 = state_26044;
var statearr_26046_26062 = state_26044__$1;
(statearr_26046_26062[(2)] = null);

(statearr_26046_26062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (2))){
var state_26044__$1 = state_26044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26044__$1,(4),ch);
} else {
if((state_val_26045 === (3))){
var inst_26042 = (state_26044[(2)]);
var state_26044__$1 = state_26044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26044__$1,inst_26042);
} else {
if((state_val_26045 === (4))){
var inst_26032 = (state_26044[(7)]);
var inst_26032__$1 = (state_26044[(2)]);
var state_26044__$1 = (function (){var statearr_26047 = state_26044;
(statearr_26047[(7)] = inst_26032__$1);

return statearr_26047;
})();
if(cljs.core.truth_(inst_26032__$1)){
var statearr_26048_26063 = state_26044__$1;
(statearr_26048_26063[(1)] = (5));

} else {
var statearr_26049_26064 = state_26044__$1;
(statearr_26049_26064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (5))){
var inst_26032 = (state_26044[(7)]);
var inst_26034 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26032);
var state_26044__$1 = state_26044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26044__$1,(8),inst_26034);
} else {
if((state_val_26045 === (6))){
var state_26044__$1 = state_26044;
var statearr_26050_26065 = state_26044__$1;
(statearr_26050_26065[(2)] = null);

(statearr_26050_26065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (7))){
var inst_26040 = (state_26044[(2)]);
var state_26044__$1 = state_26044;
var statearr_26051_26066 = state_26044__$1;
(statearr_26051_26066[(2)] = inst_26040);

(statearr_26051_26066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (8))){
var inst_26036 = (state_26044[(2)]);
var state_26044__$1 = (function (){var statearr_26052 = state_26044;
(statearr_26052[(8)] = inst_26036);

return statearr_26052;
})();
var statearr_26053_26067 = state_26044__$1;
(statearr_26053_26067[(2)] = null);

(statearr_26053_26067[(1)] = (2));


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
});})(c__20150__auto___26061,ch))
;
return ((function (switch__20085__auto__,c__20150__auto___26061,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20086__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20086__auto____0 = (function (){
var statearr_26057 = [null,null,null,null,null,null,null,null,null];
(statearr_26057[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20086__auto__);

(statearr_26057[(1)] = (1));

return statearr_26057;
});
var figwheel$client$heads_up_plugin_$_state_machine__20086__auto____1 = (function (state_26044){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_26044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e26058){if((e26058 instanceof Object)){
var ex__20089__auto__ = e26058;
var statearr_26059_26068 = state_26044;
(statearr_26059_26068[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26069 = state_26044;
state_26044 = G__26069;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20086__auto__ = function(state_26044){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20086__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20086__auto____1.call(this,state_26044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20086__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20086__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___26061,ch))
})();
var state__20152__auto__ = (function (){var statearr_26060 = f__20151__auto__.call(null);
(statearr_26060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___26061);

return statearr_26060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___26061,ch))
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
var c__20150__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto__){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto__){
return (function (state_26090){
var state_val_26091 = (state_26090[(1)]);
if((state_val_26091 === (1))){
var inst_26085 = cljs.core.async.timeout.call(null,(3000));
var state_26090__$1 = state_26090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26090__$1,(2),inst_26085);
} else {
if((state_val_26091 === (2))){
var inst_26087 = (state_26090[(2)]);
var inst_26088 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26090__$1 = (function (){var statearr_26092 = state_26090;
(statearr_26092[(7)] = inst_26087);

return statearr_26092;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26090__$1,inst_26088);
} else {
return null;
}
}
});})(c__20150__auto__))
;
return ((function (switch__20085__auto__,c__20150__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20086__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20086__auto____0 = (function (){
var statearr_26096 = [null,null,null,null,null,null,null,null];
(statearr_26096[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20086__auto__);

(statearr_26096[(1)] = (1));

return statearr_26096;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20086__auto____1 = (function (state_26090){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_26090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e26097){if((e26097 instanceof Object)){
var ex__20089__auto__ = e26097;
var statearr_26098_26100 = state_26090;
(statearr_26098_26100[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26101 = state_26090;
state_26090 = G__26101;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20086__auto__ = function(state_26090){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20086__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20086__auto____1.call(this,state_26090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20086__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20086__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto__))
})();
var state__20152__auto__ = (function (){var statearr_26099 = f__20151__auto__.call(null);
(statearr_26099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto__);

return statearr_26099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto__))
);

return c__20150__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26102){
var map__26109 = p__26102;
var map__26109__$1 = ((((!((map__26109 == null)))?((((map__26109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26109):map__26109);
var ed = map__26109__$1;
var formatted_exception = cljs.core.get.call(null,map__26109__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26109__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26109__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26111_26115 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26112_26116 = null;
var count__26113_26117 = (0);
var i__26114_26118 = (0);
while(true){
if((i__26114_26118 < count__26113_26117)){
var msg_26119 = cljs.core._nth.call(null,chunk__26112_26116,i__26114_26118);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26119);

var G__26120 = seq__26111_26115;
var G__26121 = chunk__26112_26116;
var G__26122 = count__26113_26117;
var G__26123 = (i__26114_26118 + (1));
seq__26111_26115 = G__26120;
chunk__26112_26116 = G__26121;
count__26113_26117 = G__26122;
i__26114_26118 = G__26123;
continue;
} else {
var temp__4425__auto___26124 = cljs.core.seq.call(null,seq__26111_26115);
if(temp__4425__auto___26124){
var seq__26111_26125__$1 = temp__4425__auto___26124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26111_26125__$1)){
var c__17166__auto___26126 = cljs.core.chunk_first.call(null,seq__26111_26125__$1);
var G__26127 = cljs.core.chunk_rest.call(null,seq__26111_26125__$1);
var G__26128 = c__17166__auto___26126;
var G__26129 = cljs.core.count.call(null,c__17166__auto___26126);
var G__26130 = (0);
seq__26111_26115 = G__26127;
chunk__26112_26116 = G__26128;
count__26113_26117 = G__26129;
i__26114_26118 = G__26130;
continue;
} else {
var msg_26131 = cljs.core.first.call(null,seq__26111_26125__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26131);

var G__26132 = cljs.core.next.call(null,seq__26111_26125__$1);
var G__26133 = null;
var G__26134 = (0);
var G__26135 = (0);
seq__26111_26115 = G__26132;
chunk__26112_26116 = G__26133;
count__26113_26117 = G__26134;
i__26114_26118 = G__26135;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26136){
var map__26139 = p__26136;
var map__26139__$1 = ((((!((map__26139 == null)))?((((map__26139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26139):map__26139);
var w = map__26139__$1;
var message = cljs.core.get.call(null,map__26139__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16351__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16351__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16351__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26147 = cljs.core.seq.call(null,plugins);
var chunk__26148 = null;
var count__26149 = (0);
var i__26150 = (0);
while(true){
if((i__26150 < count__26149)){
var vec__26151 = cljs.core._nth.call(null,chunk__26148,i__26150);
var k = cljs.core.nth.call(null,vec__26151,(0),null);
var plugin = cljs.core.nth.call(null,vec__26151,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26153 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26147,chunk__26148,count__26149,i__26150,pl_26153,vec__26151,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26153.call(null,msg_hist);
});})(seq__26147,chunk__26148,count__26149,i__26150,pl_26153,vec__26151,k,plugin))
);
} else {
}

var G__26154 = seq__26147;
var G__26155 = chunk__26148;
var G__26156 = count__26149;
var G__26157 = (i__26150 + (1));
seq__26147 = G__26154;
chunk__26148 = G__26155;
count__26149 = G__26156;
i__26150 = G__26157;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26147);
if(temp__4425__auto__){
var seq__26147__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26147__$1)){
var c__17166__auto__ = cljs.core.chunk_first.call(null,seq__26147__$1);
var G__26158 = cljs.core.chunk_rest.call(null,seq__26147__$1);
var G__26159 = c__17166__auto__;
var G__26160 = cljs.core.count.call(null,c__17166__auto__);
var G__26161 = (0);
seq__26147 = G__26158;
chunk__26148 = G__26159;
count__26149 = G__26160;
i__26150 = G__26161;
continue;
} else {
var vec__26152 = cljs.core.first.call(null,seq__26147__$1);
var k = cljs.core.nth.call(null,vec__26152,(0),null);
var plugin = cljs.core.nth.call(null,vec__26152,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26162 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26147,chunk__26148,count__26149,i__26150,pl_26162,vec__26152,k,plugin,seq__26147__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26162.call(null,msg_hist);
});})(seq__26147,chunk__26148,count__26149,i__26150,pl_26162,vec__26152,k,plugin,seq__26147__$1,temp__4425__auto__))
);
} else {
}

var G__26163 = cljs.core.next.call(null,seq__26147__$1);
var G__26164 = null;
var G__26165 = (0);
var G__26166 = (0);
seq__26147 = G__26163;
chunk__26148 = G__26164;
count__26149 = G__26165;
i__26150 = G__26166;
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
var args26167 = [];
var len__17421__auto___26170 = arguments.length;
var i__17422__auto___26171 = (0);
while(true){
if((i__17422__auto___26171 < len__17421__auto___26170)){
args26167.push((arguments[i__17422__auto___26171]));

var G__26172 = (i__17422__auto___26171 + (1));
i__17422__auto___26171 = G__26172;
continue;
} else {
}
break;
}

var G__26169 = args26167.length;
switch (G__26169) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26167.length)].join('')));

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
var args__17428__auto__ = [];
var len__17421__auto___26178 = arguments.length;
var i__17422__auto___26179 = (0);
while(true){
if((i__17422__auto___26179 < len__17421__auto___26178)){
args__17428__auto__.push((arguments[i__17422__auto___26179]));

var G__26180 = (i__17422__auto___26179 + (1));
i__17422__auto___26179 = G__26180;
continue;
} else {
}
break;
}

var argseq__17429__auto__ = ((((0) < args__17428__auto__.length))?(new cljs.core.IndexedSeq(args__17428__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17429__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26175){
var map__26176 = p__26175;
var map__26176__$1 = ((((!((map__26176 == null)))?((((map__26176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26176):map__26176);
var opts = map__26176__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26174){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26174));
});

//# sourceMappingURL=client.js.map