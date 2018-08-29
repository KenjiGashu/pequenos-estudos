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
var pred__28826 = cljs.core._EQ_;
var expr__28827 = (function (){var or__16785__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28826.call(null,"true",expr__28827))){
return true;
} else {
if(cljs.core.truth_(pred__28826.call(null,"false",expr__28827))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28827)].join('')));
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
var G__28829__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28830__i = 0, G__28830__a = new Array(arguments.length -  0);
while (G__28830__i < G__28830__a.length) {G__28830__a[G__28830__i] = arguments[G__28830__i + 0]; ++G__28830__i;}
  args = new cljs.core.IndexedSeq(G__28830__a,0);
} 
return G__28829__delegate.call(this,args);};
G__28829.cljs$lang$maxFixedArity = 0;
G__28829.cljs$lang$applyTo = (function (arglist__28831){
var args = cljs.core.seq(arglist__28831);
return G__28829__delegate(args);
});
G__28829.cljs$core$IFn$_invoke$arity$variadic = G__28829__delegate;
return G__28829;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28832){
var map__28835 = p__28832;
var map__28835__$1 = ((((!((map__28835 == null)))?((((map__28835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28835):map__28835);
var message = cljs.core.get.call(null,map__28835__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28835__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19893__auto___28997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___28997,ch){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___28997,ch){
return (function (state_28966){
var state_val_28967 = (state_28966[(1)]);
if((state_val_28967 === (7))){
var inst_28962 = (state_28966[(2)]);
var state_28966__$1 = state_28966;
var statearr_28968_28998 = state_28966__$1;
(statearr_28968_28998[(2)] = inst_28962);

(statearr_28968_28998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (1))){
var state_28966__$1 = state_28966;
var statearr_28969_28999 = state_28966__$1;
(statearr_28969_28999[(2)] = null);

(statearr_28969_28999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (4))){
var inst_28919 = (state_28966[(7)]);
var inst_28919__$1 = (state_28966[(2)]);
var state_28966__$1 = (function (){var statearr_28970 = state_28966;
(statearr_28970[(7)] = inst_28919__$1);

return statearr_28970;
})();
if(cljs.core.truth_(inst_28919__$1)){
var statearr_28971_29000 = state_28966__$1;
(statearr_28971_29000[(1)] = (5));

} else {
var statearr_28972_29001 = state_28966__$1;
(statearr_28972_29001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (15))){
var inst_28926 = (state_28966[(8)]);
var inst_28941 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28926);
var inst_28942 = cljs.core.first.call(null,inst_28941);
var inst_28943 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28942);
var inst_28944 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28943)].join('');
var inst_28945 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28944);
var state_28966__$1 = state_28966;
var statearr_28973_29002 = state_28966__$1;
(statearr_28973_29002[(2)] = inst_28945);

(statearr_28973_29002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (13))){
var inst_28950 = (state_28966[(2)]);
var state_28966__$1 = state_28966;
var statearr_28974_29003 = state_28966__$1;
(statearr_28974_29003[(2)] = inst_28950);

(statearr_28974_29003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (6))){
var state_28966__$1 = state_28966;
var statearr_28975_29004 = state_28966__$1;
(statearr_28975_29004[(2)] = null);

(statearr_28975_29004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (17))){
var inst_28948 = (state_28966[(2)]);
var state_28966__$1 = state_28966;
var statearr_28976_29005 = state_28966__$1;
(statearr_28976_29005[(2)] = inst_28948);

(statearr_28976_29005[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (3))){
var inst_28964 = (state_28966[(2)]);
var state_28966__$1 = state_28966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28966__$1,inst_28964);
} else {
if((state_val_28967 === (12))){
var inst_28925 = (state_28966[(9)]);
var inst_28939 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28925,opts);
var state_28966__$1 = state_28966;
if(cljs.core.truth_(inst_28939)){
var statearr_28977_29006 = state_28966__$1;
(statearr_28977_29006[(1)] = (15));

} else {
var statearr_28978_29007 = state_28966__$1;
(statearr_28978_29007[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (2))){
var state_28966__$1 = state_28966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28966__$1,(4),ch);
} else {
if((state_val_28967 === (11))){
var inst_28926 = (state_28966[(8)]);
var inst_28931 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28932 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28926);
var inst_28933 = cljs.core.async.timeout.call(null,(1000));
var inst_28934 = [inst_28932,inst_28933];
var inst_28935 = (new cljs.core.PersistentVector(null,2,(5),inst_28931,inst_28934,null));
var state_28966__$1 = state_28966;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28966__$1,(14),inst_28935);
} else {
if((state_val_28967 === (9))){
var inst_28926 = (state_28966[(8)]);
var inst_28952 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28953 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28926);
var inst_28954 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28953);
var inst_28955 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28954)].join('');
var inst_28956 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28955);
var state_28966__$1 = (function (){var statearr_28979 = state_28966;
(statearr_28979[(10)] = inst_28952);

return statearr_28979;
})();
var statearr_28980_29008 = state_28966__$1;
(statearr_28980_29008[(2)] = inst_28956);

(statearr_28980_29008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (5))){
var inst_28919 = (state_28966[(7)]);
var inst_28921 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28922 = (new cljs.core.PersistentArrayMap(null,2,inst_28921,null));
var inst_28923 = (new cljs.core.PersistentHashSet(null,inst_28922,null));
var inst_28924 = figwheel.client.focus_msgs.call(null,inst_28923,inst_28919);
var inst_28925 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28924);
var inst_28926 = cljs.core.first.call(null,inst_28924);
var inst_28927 = figwheel.client.autoload_QMARK_.call(null);
var state_28966__$1 = (function (){var statearr_28981 = state_28966;
(statearr_28981[(9)] = inst_28925);

(statearr_28981[(8)] = inst_28926);

return statearr_28981;
})();
if(cljs.core.truth_(inst_28927)){
var statearr_28982_29009 = state_28966__$1;
(statearr_28982_29009[(1)] = (8));

} else {
var statearr_28983_29010 = state_28966__$1;
(statearr_28983_29010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (14))){
var inst_28937 = (state_28966[(2)]);
var state_28966__$1 = state_28966;
var statearr_28984_29011 = state_28966__$1;
(statearr_28984_29011[(2)] = inst_28937);

(statearr_28984_29011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (16))){
var state_28966__$1 = state_28966;
var statearr_28985_29012 = state_28966__$1;
(statearr_28985_29012[(2)] = null);

(statearr_28985_29012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (10))){
var inst_28958 = (state_28966[(2)]);
var state_28966__$1 = (function (){var statearr_28986 = state_28966;
(statearr_28986[(11)] = inst_28958);

return statearr_28986;
})();
var statearr_28987_29013 = state_28966__$1;
(statearr_28987_29013[(2)] = null);

(statearr_28987_29013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (8))){
var inst_28925 = (state_28966[(9)]);
var inst_28929 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28925,opts);
var state_28966__$1 = state_28966;
if(cljs.core.truth_(inst_28929)){
var statearr_28988_29014 = state_28966__$1;
(statearr_28988_29014[(1)] = (11));

} else {
var statearr_28989_29015 = state_28966__$1;
(statearr_28989_29015[(1)] = (12));

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
});})(c__19893__auto___28997,ch))
;
return ((function (switch__19872__auto__,c__19893__auto___28997,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19873__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19873__auto____0 = (function (){
var statearr_28993 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28993[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19873__auto__);

(statearr_28993[(1)] = (1));

return statearr_28993;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19873__auto____1 = (function (state_28966){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_28966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e28994){if((e28994 instanceof Object)){
var ex__19876__auto__ = e28994;
var statearr_28995_29016 = state_28966;
(statearr_28995_29016[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29017 = state_28966;
state_28966 = G__29017;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19873__auto__ = function(state_28966){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19873__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19873__auto____1.call(this,state_28966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19873__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19873__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___28997,ch))
})();
var state__19895__auto__ = (function (){var statearr_28996 = f__19894__auto__.call(null);
(statearr_28996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___28997);

return statearr_28996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___28997,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29018_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29018_SHARP_));
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
var base_path_29025 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29025){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29023 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29024 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29023,_STAR_print_newline_STAR_29024,base_path_29025){
return (function() { 
var G__29026__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29027__i = 0, G__29027__a = new Array(arguments.length -  0);
while (G__29027__i < G__29027__a.length) {G__29027__a[G__29027__i] = arguments[G__29027__i + 0]; ++G__29027__i;}
  args = new cljs.core.IndexedSeq(G__29027__a,0);
} 
return G__29026__delegate.call(this,args);};
G__29026.cljs$lang$maxFixedArity = 0;
G__29026.cljs$lang$applyTo = (function (arglist__29028){
var args = cljs.core.seq(arglist__29028);
return G__29026__delegate(args);
});
G__29026.cljs$core$IFn$_invoke$arity$variadic = G__29026__delegate;
return G__29026;
})()
;})(_STAR_print_fn_STAR_29023,_STAR_print_newline_STAR_29024,base_path_29025))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29024;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29023;
}}catch (e29022){if((e29022 instanceof Error)){
var e = e29022;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29025], null));
} else {
var e = e29022;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29025))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29029){
var map__29036 = p__29029;
var map__29036__$1 = ((((!((map__29036 == null)))?((((map__29036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29036):map__29036);
var opts = map__29036__$1;
var build_id = cljs.core.get.call(null,map__29036__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29036,map__29036__$1,opts,build_id){
return (function (p__29038){
var vec__29039 = p__29038;
var map__29040 = cljs.core.nth.call(null,vec__29039,(0),null);
var map__29040__$1 = ((((!((map__29040 == null)))?((((map__29040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29040):map__29040);
var msg = map__29040__$1;
var msg_name = cljs.core.get.call(null,map__29040__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29039,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29039,map__29040,map__29040__$1,msg,msg_name,_,map__29036,map__29036__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29039,map__29040,map__29040__$1,msg,msg_name,_,map__29036,map__29036__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29036,map__29036__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29046){
var vec__29047 = p__29046;
var map__29048 = cljs.core.nth.call(null,vec__29047,(0),null);
var map__29048__$1 = ((((!((map__29048 == null)))?((((map__29048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29048):map__29048);
var msg = map__29048__$1;
var msg_name = cljs.core.get.call(null,map__29048__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29047,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29050){
var map__29060 = p__29050;
var map__29060__$1 = ((((!((map__29060 == null)))?((((map__29060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29060):map__29060);
var on_compile_warning = cljs.core.get.call(null,map__29060__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29060__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29060,map__29060__$1,on_compile_warning,on_compile_fail){
return (function (p__29062){
var vec__29063 = p__29062;
var map__29064 = cljs.core.nth.call(null,vec__29063,(0),null);
var map__29064__$1 = ((((!((map__29064 == null)))?((((map__29064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29064):map__29064);
var msg = map__29064__$1;
var msg_name = cljs.core.get.call(null,map__29064__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29063,(1));
var pred__29066 = cljs.core._EQ_;
var expr__29067 = msg_name;
if(cljs.core.truth_(pred__29066.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29067))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29066.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29067))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29060,map__29060__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto__,msg_hist,msg_names,msg){
return (function (state_29283){
var state_val_29284 = (state_29283[(1)]);
if((state_val_29284 === (7))){
var inst_29207 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
if(cljs.core.truth_(inst_29207)){
var statearr_29285_29331 = state_29283__$1;
(statearr_29285_29331[(1)] = (8));

} else {
var statearr_29286_29332 = state_29283__$1;
(statearr_29286_29332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (20))){
var inst_29277 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29287_29333 = state_29283__$1;
(statearr_29287_29333[(2)] = inst_29277);

(statearr_29287_29333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (27))){
var inst_29273 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29288_29334 = state_29283__$1;
(statearr_29288_29334[(2)] = inst_29273);

(statearr_29288_29334[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (1))){
var inst_29200 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29283__$1 = state_29283;
if(cljs.core.truth_(inst_29200)){
var statearr_29289_29335 = state_29283__$1;
(statearr_29289_29335[(1)] = (2));

} else {
var statearr_29290_29336 = state_29283__$1;
(statearr_29290_29336[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (24))){
var inst_29275 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29291_29337 = state_29283__$1;
(statearr_29291_29337[(2)] = inst_29275);

(statearr_29291_29337[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (4))){
var inst_29281 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29283__$1,inst_29281);
} else {
if((state_val_29284 === (15))){
var inst_29279 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29292_29338 = state_29283__$1;
(statearr_29292_29338[(2)] = inst_29279);

(statearr_29292_29338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (21))){
var inst_29238 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29293_29339 = state_29283__$1;
(statearr_29293_29339[(2)] = inst_29238);

(statearr_29293_29339[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (31))){
var inst_29262 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29283__$1 = state_29283;
if(cljs.core.truth_(inst_29262)){
var statearr_29294_29340 = state_29283__$1;
(statearr_29294_29340[(1)] = (34));

} else {
var statearr_29295_29341 = state_29283__$1;
(statearr_29295_29341[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (32))){
var inst_29271 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29296_29342 = state_29283__$1;
(statearr_29296_29342[(2)] = inst_29271);

(statearr_29296_29342[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (33))){
var inst_29260 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29297_29343 = state_29283__$1;
(statearr_29297_29343[(2)] = inst_29260);

(statearr_29297_29343[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (13))){
var inst_29221 = figwheel.client.heads_up.clear.call(null);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(16),inst_29221);
} else {
if((state_val_29284 === (22))){
var inst_29242 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29243 = figwheel.client.heads_up.append_message.call(null,inst_29242);
var state_29283__$1 = state_29283;
var statearr_29298_29344 = state_29283__$1;
(statearr_29298_29344[(2)] = inst_29243);

(statearr_29298_29344[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (36))){
var inst_29269 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29299_29345 = state_29283__$1;
(statearr_29299_29345[(2)] = inst_29269);

(statearr_29299_29345[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (29))){
var inst_29253 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29300_29346 = state_29283__$1;
(statearr_29300_29346[(2)] = inst_29253);

(statearr_29300_29346[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (6))){
var inst_29202 = (state_29283[(7)]);
var state_29283__$1 = state_29283;
var statearr_29301_29347 = state_29283__$1;
(statearr_29301_29347[(2)] = inst_29202);

(statearr_29301_29347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (28))){
var inst_29249 = (state_29283[(2)]);
var inst_29250 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29251 = figwheel.client.heads_up.display_warning.call(null,inst_29250);
var state_29283__$1 = (function (){var statearr_29302 = state_29283;
(statearr_29302[(8)] = inst_29249);

return statearr_29302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(29),inst_29251);
} else {
if((state_val_29284 === (25))){
var inst_29247 = figwheel.client.heads_up.clear.call(null);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(28),inst_29247);
} else {
if((state_val_29284 === (34))){
var inst_29264 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(37),inst_29264);
} else {
if((state_val_29284 === (17))){
var inst_29229 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29303_29348 = state_29283__$1;
(statearr_29303_29348[(2)] = inst_29229);

(statearr_29303_29348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (3))){
var inst_29219 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29283__$1 = state_29283;
if(cljs.core.truth_(inst_29219)){
var statearr_29304_29349 = state_29283__$1;
(statearr_29304_29349[(1)] = (13));

} else {
var statearr_29305_29350 = state_29283__$1;
(statearr_29305_29350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (12))){
var inst_29215 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29306_29351 = state_29283__$1;
(statearr_29306_29351[(2)] = inst_29215);

(statearr_29306_29351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (2))){
var inst_29202 = (state_29283[(7)]);
var inst_29202__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29283__$1 = (function (){var statearr_29307 = state_29283;
(statearr_29307[(7)] = inst_29202__$1);

return statearr_29307;
})();
if(cljs.core.truth_(inst_29202__$1)){
var statearr_29308_29352 = state_29283__$1;
(statearr_29308_29352[(1)] = (5));

} else {
var statearr_29309_29353 = state_29283__$1;
(statearr_29309_29353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (23))){
var inst_29245 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29283__$1 = state_29283;
if(cljs.core.truth_(inst_29245)){
var statearr_29310_29354 = state_29283__$1;
(statearr_29310_29354[(1)] = (25));

} else {
var statearr_29311_29355 = state_29283__$1;
(statearr_29311_29355[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (35))){
var state_29283__$1 = state_29283;
var statearr_29312_29356 = state_29283__$1;
(statearr_29312_29356[(2)] = null);

(statearr_29312_29356[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (19))){
var inst_29240 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29283__$1 = state_29283;
if(cljs.core.truth_(inst_29240)){
var statearr_29313_29357 = state_29283__$1;
(statearr_29313_29357[(1)] = (22));

} else {
var statearr_29314_29358 = state_29283__$1;
(statearr_29314_29358[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (11))){
var inst_29211 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29315_29359 = state_29283__$1;
(statearr_29315_29359[(2)] = inst_29211);

(statearr_29315_29359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (9))){
var inst_29213 = figwheel.client.heads_up.clear.call(null);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(12),inst_29213);
} else {
if((state_val_29284 === (5))){
var inst_29204 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29283__$1 = state_29283;
var statearr_29316_29360 = state_29283__$1;
(statearr_29316_29360[(2)] = inst_29204);

(statearr_29316_29360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (14))){
var inst_29231 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29283__$1 = state_29283;
if(cljs.core.truth_(inst_29231)){
var statearr_29317_29361 = state_29283__$1;
(statearr_29317_29361[(1)] = (18));

} else {
var statearr_29318_29362 = state_29283__$1;
(statearr_29318_29362[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (26))){
var inst_29255 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29283__$1 = state_29283;
if(cljs.core.truth_(inst_29255)){
var statearr_29319_29363 = state_29283__$1;
(statearr_29319_29363[(1)] = (30));

} else {
var statearr_29320_29364 = state_29283__$1;
(statearr_29320_29364[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (16))){
var inst_29223 = (state_29283[(2)]);
var inst_29224 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29225 = figwheel.client.format_messages.call(null,inst_29224);
var inst_29226 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29227 = figwheel.client.heads_up.display_error.call(null,inst_29225,inst_29226);
var state_29283__$1 = (function (){var statearr_29321 = state_29283;
(statearr_29321[(9)] = inst_29223);

return statearr_29321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(17),inst_29227);
} else {
if((state_val_29284 === (30))){
var inst_29257 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29258 = figwheel.client.heads_up.display_warning.call(null,inst_29257);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(33),inst_29258);
} else {
if((state_val_29284 === (10))){
var inst_29217 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29322_29365 = state_29283__$1;
(statearr_29322_29365[(2)] = inst_29217);

(statearr_29322_29365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (18))){
var inst_29233 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29234 = figwheel.client.format_messages.call(null,inst_29233);
var inst_29235 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29236 = figwheel.client.heads_up.display_error.call(null,inst_29234,inst_29235);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(21),inst_29236);
} else {
if((state_val_29284 === (37))){
var inst_29266 = (state_29283[(2)]);
var state_29283__$1 = state_29283;
var statearr_29323_29366 = state_29283__$1;
(statearr_29323_29366[(2)] = inst_29266);

(statearr_29323_29366[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29284 === (8))){
var inst_29209 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29283__$1 = state_29283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29283__$1,(11),inst_29209);
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
});})(c__19893__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19872__auto__,c__19893__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19873__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19873__auto____0 = (function (){
var statearr_29327 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29327[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19873__auto__);

(statearr_29327[(1)] = (1));

return statearr_29327;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19873__auto____1 = (function (state_29283){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_29283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e29328){if((e29328 instanceof Object)){
var ex__19876__auto__ = e29328;
var statearr_29329_29367 = state_29283;
(statearr_29329_29367[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29368 = state_29283;
state_29283 = G__29368;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19873__auto__ = function(state_29283){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19873__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19873__auto____1.call(this,state_29283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19873__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19873__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto__,msg_hist,msg_names,msg))
})();
var state__19895__auto__ = (function (){var statearr_29330 = f__19894__auto__.call(null);
(statearr_29330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto__);

return statearr_29330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto__,msg_hist,msg_names,msg))
);

return c__19893__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19893__auto___29431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___29431,ch){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___29431,ch){
return (function (state_29414){
var state_val_29415 = (state_29414[(1)]);
if((state_val_29415 === (1))){
var state_29414__$1 = state_29414;
var statearr_29416_29432 = state_29414__$1;
(statearr_29416_29432[(2)] = null);

(statearr_29416_29432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (2))){
var state_29414__$1 = state_29414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29414__$1,(4),ch);
} else {
if((state_val_29415 === (3))){
var inst_29412 = (state_29414[(2)]);
var state_29414__$1 = state_29414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29414__$1,inst_29412);
} else {
if((state_val_29415 === (4))){
var inst_29402 = (state_29414[(7)]);
var inst_29402__$1 = (state_29414[(2)]);
var state_29414__$1 = (function (){var statearr_29417 = state_29414;
(statearr_29417[(7)] = inst_29402__$1);

return statearr_29417;
})();
if(cljs.core.truth_(inst_29402__$1)){
var statearr_29418_29433 = state_29414__$1;
(statearr_29418_29433[(1)] = (5));

} else {
var statearr_29419_29434 = state_29414__$1;
(statearr_29419_29434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (5))){
var inst_29402 = (state_29414[(7)]);
var inst_29404 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29402);
var state_29414__$1 = state_29414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29414__$1,(8),inst_29404);
} else {
if((state_val_29415 === (6))){
var state_29414__$1 = state_29414;
var statearr_29420_29435 = state_29414__$1;
(statearr_29420_29435[(2)] = null);

(statearr_29420_29435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (7))){
var inst_29410 = (state_29414[(2)]);
var state_29414__$1 = state_29414;
var statearr_29421_29436 = state_29414__$1;
(statearr_29421_29436[(2)] = inst_29410);

(statearr_29421_29436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29415 === (8))){
var inst_29406 = (state_29414[(2)]);
var state_29414__$1 = (function (){var statearr_29422 = state_29414;
(statearr_29422[(8)] = inst_29406);

return statearr_29422;
})();
var statearr_29423_29437 = state_29414__$1;
(statearr_29423_29437[(2)] = null);

(statearr_29423_29437[(1)] = (2));


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
});})(c__19893__auto___29431,ch))
;
return ((function (switch__19872__auto__,c__19893__auto___29431,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19873__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19873__auto____0 = (function (){
var statearr_29427 = [null,null,null,null,null,null,null,null,null];
(statearr_29427[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19873__auto__);

(statearr_29427[(1)] = (1));

return statearr_29427;
});
var figwheel$client$heads_up_plugin_$_state_machine__19873__auto____1 = (function (state_29414){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_29414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e29428){if((e29428 instanceof Object)){
var ex__19876__auto__ = e29428;
var statearr_29429_29438 = state_29414;
(statearr_29429_29438[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29439 = state_29414;
state_29414 = G__29439;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19873__auto__ = function(state_29414){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19873__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19873__auto____1.call(this,state_29414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19873__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19873__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___29431,ch))
})();
var state__19895__auto__ = (function (){var statearr_29430 = f__19894__auto__.call(null);
(statearr_29430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___29431);

return statearr_29430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___29431,ch))
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
var c__19893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto__){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto__){
return (function (state_29460){
var state_val_29461 = (state_29460[(1)]);
if((state_val_29461 === (1))){
var inst_29455 = cljs.core.async.timeout.call(null,(3000));
var state_29460__$1 = state_29460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29460__$1,(2),inst_29455);
} else {
if((state_val_29461 === (2))){
var inst_29457 = (state_29460[(2)]);
var inst_29458 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29460__$1 = (function (){var statearr_29462 = state_29460;
(statearr_29462[(7)] = inst_29457);

return statearr_29462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29460__$1,inst_29458);
} else {
return null;
}
}
});})(c__19893__auto__))
;
return ((function (switch__19872__auto__,c__19893__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19873__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19873__auto____0 = (function (){
var statearr_29466 = [null,null,null,null,null,null,null,null];
(statearr_29466[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19873__auto__);

(statearr_29466[(1)] = (1));

return statearr_29466;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19873__auto____1 = (function (state_29460){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_29460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e29467){if((e29467 instanceof Object)){
var ex__19876__auto__ = e29467;
var statearr_29468_29470 = state_29460;
(statearr_29468_29470[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29471 = state_29460;
state_29460 = G__29471;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19873__auto__ = function(state_29460){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19873__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19873__auto____1.call(this,state_29460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19873__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19873__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto__))
})();
var state__19895__auto__ = (function (){var statearr_29469 = f__19894__auto__.call(null);
(statearr_29469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto__);

return statearr_29469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto__))
);

return c__19893__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29472){
var map__29479 = p__29472;
var map__29479__$1 = ((((!((map__29479 == null)))?((((map__29479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29479):map__29479);
var ed = map__29479__$1;
var formatted_exception = cljs.core.get.call(null,map__29479__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29479__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29479__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29481_29485 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29482_29486 = null;
var count__29483_29487 = (0);
var i__29484_29488 = (0);
while(true){
if((i__29484_29488 < count__29483_29487)){
var msg_29489 = cljs.core._nth.call(null,chunk__29482_29486,i__29484_29488);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29489);

var G__29490 = seq__29481_29485;
var G__29491 = chunk__29482_29486;
var G__29492 = count__29483_29487;
var G__29493 = (i__29484_29488 + (1));
seq__29481_29485 = G__29490;
chunk__29482_29486 = G__29491;
count__29483_29487 = G__29492;
i__29484_29488 = G__29493;
continue;
} else {
var temp__4425__auto___29494 = cljs.core.seq.call(null,seq__29481_29485);
if(temp__4425__auto___29494){
var seq__29481_29495__$1 = temp__4425__auto___29494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29481_29495__$1)){
var c__17588__auto___29496 = cljs.core.chunk_first.call(null,seq__29481_29495__$1);
var G__29497 = cljs.core.chunk_rest.call(null,seq__29481_29495__$1);
var G__29498 = c__17588__auto___29496;
var G__29499 = cljs.core.count.call(null,c__17588__auto___29496);
var G__29500 = (0);
seq__29481_29485 = G__29497;
chunk__29482_29486 = G__29498;
count__29483_29487 = G__29499;
i__29484_29488 = G__29500;
continue;
} else {
var msg_29501 = cljs.core.first.call(null,seq__29481_29495__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29501);

var G__29502 = cljs.core.next.call(null,seq__29481_29495__$1);
var G__29503 = null;
var G__29504 = (0);
var G__29505 = (0);
seq__29481_29485 = G__29502;
chunk__29482_29486 = G__29503;
count__29483_29487 = G__29504;
i__29484_29488 = G__29505;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29506){
var map__29509 = p__29506;
var map__29509__$1 = ((((!((map__29509 == null)))?((((map__29509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29509):map__29509);
var w = map__29509__$1;
var message = cljs.core.get.call(null,map__29509__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29517 = cljs.core.seq.call(null,plugins);
var chunk__29518 = null;
var count__29519 = (0);
var i__29520 = (0);
while(true){
if((i__29520 < count__29519)){
var vec__29521 = cljs.core._nth.call(null,chunk__29518,i__29520);
var k = cljs.core.nth.call(null,vec__29521,(0),null);
var plugin = cljs.core.nth.call(null,vec__29521,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29523 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29517,chunk__29518,count__29519,i__29520,pl_29523,vec__29521,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29523.call(null,msg_hist);
});})(seq__29517,chunk__29518,count__29519,i__29520,pl_29523,vec__29521,k,plugin))
);
} else {
}

var G__29524 = seq__29517;
var G__29525 = chunk__29518;
var G__29526 = count__29519;
var G__29527 = (i__29520 + (1));
seq__29517 = G__29524;
chunk__29518 = G__29525;
count__29519 = G__29526;
i__29520 = G__29527;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29517);
if(temp__4425__auto__){
var seq__29517__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29517__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__29517__$1);
var G__29528 = cljs.core.chunk_rest.call(null,seq__29517__$1);
var G__29529 = c__17588__auto__;
var G__29530 = cljs.core.count.call(null,c__17588__auto__);
var G__29531 = (0);
seq__29517 = G__29528;
chunk__29518 = G__29529;
count__29519 = G__29530;
i__29520 = G__29531;
continue;
} else {
var vec__29522 = cljs.core.first.call(null,seq__29517__$1);
var k = cljs.core.nth.call(null,vec__29522,(0),null);
var plugin = cljs.core.nth.call(null,vec__29522,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29532 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29517,chunk__29518,count__29519,i__29520,pl_29532,vec__29522,k,plugin,seq__29517__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29532.call(null,msg_hist);
});})(seq__29517,chunk__29518,count__29519,i__29520,pl_29532,vec__29522,k,plugin,seq__29517__$1,temp__4425__auto__))
);
} else {
}

var G__29533 = cljs.core.next.call(null,seq__29517__$1);
var G__29534 = null;
var G__29535 = (0);
var G__29536 = (0);
seq__29517 = G__29533;
chunk__29518 = G__29534;
count__29519 = G__29535;
i__29520 = G__29536;
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
var args29537 = [];
var len__17843__auto___29540 = arguments.length;
var i__17844__auto___29541 = (0);
while(true){
if((i__17844__auto___29541 < len__17843__auto___29540)){
args29537.push((arguments[i__17844__auto___29541]));

var G__29542 = (i__17844__auto___29541 + (1));
i__17844__auto___29541 = G__29542;
continue;
} else {
}
break;
}

var G__29539 = args29537.length;
switch (G__29539) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29537.length)].join('')));

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
var len__17843__auto___29548 = arguments.length;
var i__17844__auto___29549 = (0);
while(true){
if((i__17844__auto___29549 < len__17843__auto___29548)){
args__17850__auto__.push((arguments[i__17844__auto___29549]));

var G__29550 = (i__17844__auto___29549 + (1));
i__17844__auto___29549 = G__29550;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((0) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17851__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29545){
var map__29546 = p__29545;
var map__29546__$1 = ((((!((map__29546 == null)))?((((map__29546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29546):map__29546);
var opts = map__29546__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29544){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29544));
});

//# sourceMappingURL=client.js.map