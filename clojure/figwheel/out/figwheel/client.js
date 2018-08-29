// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e30419){if((e30419 instanceof Error)){
var e = e30419;
return "Error: Unable to stringify";
} else {
throw e30419;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30422 = arguments.length;
switch (G__30422) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30420_SHARP_){
if(typeof p1__30420_SHARP_ === 'string'){
return p1__30420_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30420_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___30425 = arguments.length;
var i__4532__auto___30426 = (0);
while(true){
if((i__4532__auto___30426 < len__4531__auto___30425)){
args__4534__auto__.push((arguments[i__4532__auto___30426]));

var G__30427 = (i__4532__auto___30426 + (1));
i__4532__auto___30426 = G__30427;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30424){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30424));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___30429 = arguments.length;
var i__4532__auto___30430 = (0);
while(true){
if((i__4532__auto___30430 < len__4531__auto___30429)){
args__4534__auto__.push((arguments[i__4532__auto___30430]));

var G__30431 = (i__4532__auto___30430 + (1));
i__4532__auto___30430 = G__30431;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30428){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30428));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30432){
var map__30433 = p__30432;
var map__30433__$1 = ((((!((map__30433 == null)))?(((((map__30433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30433):map__30433);
var message = cljs.core.get.call(null,map__30433__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30433__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
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
var c__25501__auto___30512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___30512,ch){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___30512,ch){
return (function (state_30484){
var state_val_30485 = (state_30484[(1)]);
if((state_val_30485 === (7))){
var inst_30480 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30486_30513 = state_30484__$1;
(statearr_30486_30513[(2)] = inst_30480);

(statearr_30486_30513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (1))){
var state_30484__$1 = state_30484;
var statearr_30487_30514 = state_30484__$1;
(statearr_30487_30514[(2)] = null);

(statearr_30487_30514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (4))){
var inst_30437 = (state_30484[(7)]);
var inst_30437__$1 = (state_30484[(2)]);
var state_30484__$1 = (function (){var statearr_30488 = state_30484;
(statearr_30488[(7)] = inst_30437__$1);

return statearr_30488;
})();
if(cljs.core.truth_(inst_30437__$1)){
var statearr_30489_30515 = state_30484__$1;
(statearr_30489_30515[(1)] = (5));

} else {
var statearr_30490_30516 = state_30484__$1;
(statearr_30490_30516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (15))){
var inst_30444 = (state_30484[(8)]);
var inst_30459 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30444);
var inst_30460 = cljs.core.first.call(null,inst_30459);
var inst_30461 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30460);
var inst_30462 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30461)].join('');
var inst_30463 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30462);
var state_30484__$1 = state_30484;
var statearr_30491_30517 = state_30484__$1;
(statearr_30491_30517[(2)] = inst_30463);

(statearr_30491_30517[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (13))){
var inst_30468 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30492_30518 = state_30484__$1;
(statearr_30492_30518[(2)] = inst_30468);

(statearr_30492_30518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (6))){
var state_30484__$1 = state_30484;
var statearr_30493_30519 = state_30484__$1;
(statearr_30493_30519[(2)] = null);

(statearr_30493_30519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (17))){
var inst_30466 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30494_30520 = state_30484__$1;
(statearr_30494_30520[(2)] = inst_30466);

(statearr_30494_30520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (3))){
var inst_30482 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30484__$1,inst_30482);
} else {
if((state_val_30485 === (12))){
var inst_30443 = (state_30484[(9)]);
var inst_30457 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30443,opts);
var state_30484__$1 = state_30484;
if(cljs.core.truth_(inst_30457)){
var statearr_30495_30521 = state_30484__$1;
(statearr_30495_30521[(1)] = (15));

} else {
var statearr_30496_30522 = state_30484__$1;
(statearr_30496_30522[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (2))){
var state_30484__$1 = state_30484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30484__$1,(4),ch);
} else {
if((state_val_30485 === (11))){
var inst_30444 = (state_30484[(8)]);
var inst_30449 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30450 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30444);
var inst_30451 = cljs.core.async.timeout.call(null,(1000));
var inst_30452 = [inst_30450,inst_30451];
var inst_30453 = (new cljs.core.PersistentVector(null,2,(5),inst_30449,inst_30452,null));
var state_30484__$1 = state_30484;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30484__$1,(14),inst_30453);
} else {
if((state_val_30485 === (9))){
var inst_30444 = (state_30484[(8)]);
var inst_30470 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30471 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30444);
var inst_30472 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30471);
var inst_30473 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30472)].join('');
var inst_30474 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30473);
var state_30484__$1 = (function (){var statearr_30497 = state_30484;
(statearr_30497[(10)] = inst_30470);

return statearr_30497;
})();
var statearr_30498_30523 = state_30484__$1;
(statearr_30498_30523[(2)] = inst_30474);

(statearr_30498_30523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (5))){
var inst_30437 = (state_30484[(7)]);
var inst_30439 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30440 = (new cljs.core.PersistentArrayMap(null,2,inst_30439,null));
var inst_30441 = (new cljs.core.PersistentHashSet(null,inst_30440,null));
var inst_30442 = figwheel.client.focus_msgs.call(null,inst_30441,inst_30437);
var inst_30443 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30442);
var inst_30444 = cljs.core.first.call(null,inst_30442);
var inst_30445 = figwheel.client.autoload_QMARK_.call(null);
var state_30484__$1 = (function (){var statearr_30499 = state_30484;
(statearr_30499[(8)] = inst_30444);

(statearr_30499[(9)] = inst_30443);

return statearr_30499;
})();
if(cljs.core.truth_(inst_30445)){
var statearr_30500_30524 = state_30484__$1;
(statearr_30500_30524[(1)] = (8));

} else {
var statearr_30501_30525 = state_30484__$1;
(statearr_30501_30525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (14))){
var inst_30455 = (state_30484[(2)]);
var state_30484__$1 = state_30484;
var statearr_30502_30526 = state_30484__$1;
(statearr_30502_30526[(2)] = inst_30455);

(statearr_30502_30526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (16))){
var state_30484__$1 = state_30484;
var statearr_30503_30527 = state_30484__$1;
(statearr_30503_30527[(2)] = null);

(statearr_30503_30527[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (10))){
var inst_30476 = (state_30484[(2)]);
var state_30484__$1 = (function (){var statearr_30504 = state_30484;
(statearr_30504[(11)] = inst_30476);

return statearr_30504;
})();
var statearr_30505_30528 = state_30484__$1;
(statearr_30505_30528[(2)] = null);

(statearr_30505_30528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30485 === (8))){
var inst_30443 = (state_30484[(9)]);
var inst_30447 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30443,opts);
var state_30484__$1 = state_30484;
if(cljs.core.truth_(inst_30447)){
var statearr_30506_30529 = state_30484__$1;
(statearr_30506_30529[(1)] = (11));

} else {
var statearr_30507_30530 = state_30484__$1;
(statearr_30507_30530[(1)] = (12));

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
});})(c__25501__auto___30512,ch))
;
return ((function (switch__25410__auto__,c__25501__auto___30512,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25411__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25411__auto____0 = (function (){
var statearr_30508 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30508[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25411__auto__);

(statearr_30508[(1)] = (1));

return statearr_30508;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25411__auto____1 = (function (state_30484){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_30484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e30509){if((e30509 instanceof Object)){
var ex__25414__auto__ = e30509;
var statearr_30510_30531 = state_30484;
(statearr_30510_30531[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30532 = state_30484;
state_30484 = G__30532;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25411__auto__ = function(state_30484){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25411__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25411__auto____1.call(this,state_30484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25411__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25411__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___30512,ch))
})();
var state__25503__auto__ = (function (){var statearr_30511 = f__25502__auto__.call(null);
(statearr_30511[(6)] = c__25501__auto___30512);

return statearr_30511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___30512,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30533_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30533_SHARP_));
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
var base_path_30535 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30535){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e30534){if((e30534 instanceof Error)){
var e = e30534;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30535], null));
} else {
var e = e30534;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_30535))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30536){
var map__30537 = p__30536;
var map__30537__$1 = ((((!((map__30537 == null)))?(((((map__30537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30537):map__30537);
var opts = map__30537__$1;
var build_id = cljs.core.get.call(null,map__30537__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30537,map__30537__$1,opts,build_id){
return (function (p__30539){
var vec__30540 = p__30539;
var seq__30541 = cljs.core.seq.call(null,vec__30540);
var first__30542 = cljs.core.first.call(null,seq__30541);
var seq__30541__$1 = cljs.core.next.call(null,seq__30541);
var map__30543 = first__30542;
var map__30543__$1 = ((((!((map__30543 == null)))?(((((map__30543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30543):map__30543);
var msg = map__30543__$1;
var msg_name = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30541__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30540,seq__30541,first__30542,seq__30541__$1,map__30543,map__30543__$1,msg,msg_name,_,map__30537,map__30537__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30540,seq__30541,first__30542,seq__30541__$1,map__30543,map__30543__$1,msg,msg_name,_,map__30537,map__30537__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30537,map__30537__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30545){
var vec__30546 = p__30545;
var seq__30547 = cljs.core.seq.call(null,vec__30546);
var first__30548 = cljs.core.first.call(null,seq__30547);
var seq__30547__$1 = cljs.core.next.call(null,seq__30547);
var map__30549 = first__30548;
var map__30549__$1 = ((((!((map__30549 == null)))?(((((map__30549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30549):map__30549);
var msg = map__30549__$1;
var msg_name = cljs.core.get.call(null,map__30549__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30547__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30551){
var map__30552 = p__30551;
var map__30552__$1 = ((((!((map__30552 == null)))?(((((map__30552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30552):map__30552);
var on_compile_warning = cljs.core.get.call(null,map__30552__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30552__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30552,map__30552__$1,on_compile_warning,on_compile_fail){
return (function (p__30554){
var vec__30555 = p__30554;
var seq__30556 = cljs.core.seq.call(null,vec__30555);
var first__30557 = cljs.core.first.call(null,seq__30556);
var seq__30556__$1 = cljs.core.next.call(null,seq__30556);
var map__30558 = first__30557;
var map__30558__$1 = ((((!((map__30558 == null)))?(((((map__30558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30558):map__30558);
var msg = map__30558__$1;
var msg_name = cljs.core.get.call(null,map__30558__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30556__$1;
var pred__30560 = cljs.core._EQ_;
var expr__30561 = msg_name;
if(cljs.core.truth_(pred__30560.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30561))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30560.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30561))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30552,map__30552__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25501__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto__,msg_hist,msg_names,msg){
return (function (state_30650){
var state_val_30651 = (state_30650[(1)]);
if((state_val_30651 === (7))){
var inst_30570 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30570)){
var statearr_30652_30699 = state_30650__$1;
(statearr_30652_30699[(1)] = (8));

} else {
var statearr_30653_30700 = state_30650__$1;
(statearr_30653_30700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (20))){
var inst_30644 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30654_30701 = state_30650__$1;
(statearr_30654_30701[(2)] = inst_30644);

(statearr_30654_30701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (27))){
var inst_30640 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30655_30702 = state_30650__$1;
(statearr_30655_30702[(2)] = inst_30640);

(statearr_30655_30702[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (1))){
var inst_30563 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30563)){
var statearr_30656_30703 = state_30650__$1;
(statearr_30656_30703[(1)] = (2));

} else {
var statearr_30657_30704 = state_30650__$1;
(statearr_30657_30704[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (24))){
var inst_30642 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30658_30705 = state_30650__$1;
(statearr_30658_30705[(2)] = inst_30642);

(statearr_30658_30705[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (4))){
var inst_30648 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30650__$1,inst_30648);
} else {
if((state_val_30651 === (15))){
var inst_30646 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30659_30706 = state_30650__$1;
(statearr_30659_30706[(2)] = inst_30646);

(statearr_30659_30706[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (21))){
var inst_30599 = (state_30650[(2)]);
var inst_30600 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30601 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30600);
var state_30650__$1 = (function (){var statearr_30660 = state_30650;
(statearr_30660[(7)] = inst_30599);

return statearr_30660;
})();
var statearr_30661_30707 = state_30650__$1;
(statearr_30661_30707[(2)] = inst_30601);

(statearr_30661_30707[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (31))){
var inst_30629 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30629)){
var statearr_30662_30708 = state_30650__$1;
(statearr_30662_30708[(1)] = (34));

} else {
var statearr_30663_30709 = state_30650__$1;
(statearr_30663_30709[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (32))){
var inst_30638 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30664_30710 = state_30650__$1;
(statearr_30664_30710[(2)] = inst_30638);

(statearr_30664_30710[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (33))){
var inst_30625 = (state_30650[(2)]);
var inst_30626 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30627 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30626);
var state_30650__$1 = (function (){var statearr_30665 = state_30650;
(statearr_30665[(8)] = inst_30625);

return statearr_30665;
})();
var statearr_30666_30711 = state_30650__$1;
(statearr_30666_30711[(2)] = inst_30627);

(statearr_30666_30711[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (13))){
var inst_30584 = figwheel.client.heads_up.clear.call(null);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(16),inst_30584);
} else {
if((state_val_30651 === (22))){
var inst_30605 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30606 = figwheel.client.heads_up.append_warning_message.call(null,inst_30605);
var state_30650__$1 = state_30650;
var statearr_30667_30712 = state_30650__$1;
(statearr_30667_30712[(2)] = inst_30606);

(statearr_30667_30712[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (36))){
var inst_30636 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30668_30713 = state_30650__$1;
(statearr_30668_30713[(2)] = inst_30636);

(statearr_30668_30713[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (29))){
var inst_30616 = (state_30650[(2)]);
var inst_30617 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30618 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30617);
var state_30650__$1 = (function (){var statearr_30669 = state_30650;
(statearr_30669[(9)] = inst_30616);

return statearr_30669;
})();
var statearr_30670_30714 = state_30650__$1;
(statearr_30670_30714[(2)] = inst_30618);

(statearr_30670_30714[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (6))){
var inst_30565 = (state_30650[(10)]);
var state_30650__$1 = state_30650;
var statearr_30671_30715 = state_30650__$1;
(statearr_30671_30715[(2)] = inst_30565);

(statearr_30671_30715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (28))){
var inst_30612 = (state_30650[(2)]);
var inst_30613 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30614 = figwheel.client.heads_up.display_warning.call(null,inst_30613);
var state_30650__$1 = (function (){var statearr_30672 = state_30650;
(statearr_30672[(11)] = inst_30612);

return statearr_30672;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(29),inst_30614);
} else {
if((state_val_30651 === (25))){
var inst_30610 = figwheel.client.heads_up.clear.call(null);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(28),inst_30610);
} else {
if((state_val_30651 === (34))){
var inst_30631 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(37),inst_30631);
} else {
if((state_val_30651 === (17))){
var inst_30590 = (state_30650[(2)]);
var inst_30591 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30592 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30591);
var state_30650__$1 = (function (){var statearr_30673 = state_30650;
(statearr_30673[(12)] = inst_30590);

return statearr_30673;
})();
var statearr_30674_30716 = state_30650__$1;
(statearr_30674_30716[(2)] = inst_30592);

(statearr_30674_30716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (3))){
var inst_30582 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30582)){
var statearr_30675_30717 = state_30650__$1;
(statearr_30675_30717[(1)] = (13));

} else {
var statearr_30676_30718 = state_30650__$1;
(statearr_30676_30718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (12))){
var inst_30578 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30677_30719 = state_30650__$1;
(statearr_30677_30719[(2)] = inst_30578);

(statearr_30677_30719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (2))){
var inst_30565 = (state_30650[(10)]);
var inst_30565__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30650__$1 = (function (){var statearr_30678 = state_30650;
(statearr_30678[(10)] = inst_30565__$1);

return statearr_30678;
})();
if(cljs.core.truth_(inst_30565__$1)){
var statearr_30679_30720 = state_30650__$1;
(statearr_30679_30720[(1)] = (5));

} else {
var statearr_30680_30721 = state_30650__$1;
(statearr_30680_30721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (23))){
var inst_30608 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30608)){
var statearr_30681_30722 = state_30650__$1;
(statearr_30681_30722[(1)] = (25));

} else {
var statearr_30682_30723 = state_30650__$1;
(statearr_30682_30723[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (35))){
var state_30650__$1 = state_30650;
var statearr_30683_30724 = state_30650__$1;
(statearr_30683_30724[(2)] = null);

(statearr_30683_30724[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (19))){
var inst_30603 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30603)){
var statearr_30684_30725 = state_30650__$1;
(statearr_30684_30725[(1)] = (22));

} else {
var statearr_30685_30726 = state_30650__$1;
(statearr_30685_30726[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (11))){
var inst_30574 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30686_30727 = state_30650__$1;
(statearr_30686_30727[(2)] = inst_30574);

(statearr_30686_30727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (9))){
var inst_30576 = figwheel.client.heads_up.clear.call(null);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(12),inst_30576);
} else {
if((state_val_30651 === (5))){
var inst_30567 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30650__$1 = state_30650;
var statearr_30687_30728 = state_30650__$1;
(statearr_30687_30728[(2)] = inst_30567);

(statearr_30687_30728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (14))){
var inst_30594 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30594)){
var statearr_30688_30729 = state_30650__$1;
(statearr_30688_30729[(1)] = (18));

} else {
var statearr_30689_30730 = state_30650__$1;
(statearr_30689_30730[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (26))){
var inst_30620 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30620)){
var statearr_30690_30731 = state_30650__$1;
(statearr_30690_30731[(1)] = (30));

} else {
var statearr_30691_30732 = state_30650__$1;
(statearr_30691_30732[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (16))){
var inst_30586 = (state_30650[(2)]);
var inst_30587 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30588 = figwheel.client.heads_up.display_exception.call(null,inst_30587);
var state_30650__$1 = (function (){var statearr_30692 = state_30650;
(statearr_30692[(13)] = inst_30586);

return statearr_30692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(17),inst_30588);
} else {
if((state_val_30651 === (30))){
var inst_30622 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30623 = figwheel.client.heads_up.display_warning.call(null,inst_30622);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(33),inst_30623);
} else {
if((state_val_30651 === (10))){
var inst_30580 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30693_30733 = state_30650__$1;
(statearr_30693_30733[(2)] = inst_30580);

(statearr_30693_30733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (18))){
var inst_30596 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30597 = figwheel.client.heads_up.display_exception.call(null,inst_30596);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(21),inst_30597);
} else {
if((state_val_30651 === (37))){
var inst_30633 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30694_30734 = state_30650__$1;
(statearr_30694_30734[(2)] = inst_30633);

(statearr_30694_30734[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (8))){
var inst_30572 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(11),inst_30572);
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
});})(c__25501__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25410__auto__,c__25501__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25411__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25411__auto____0 = (function (){
var statearr_30695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30695[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25411__auto__);

(statearr_30695[(1)] = (1));

return statearr_30695;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25411__auto____1 = (function (state_30650){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_30650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e30696){if((e30696 instanceof Object)){
var ex__25414__auto__ = e30696;
var statearr_30697_30735 = state_30650;
(statearr_30697_30735[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30736 = state_30650;
state_30650 = G__30736;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25411__auto__ = function(state_30650){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25411__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25411__auto____1.call(this,state_30650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25411__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25411__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto__,msg_hist,msg_names,msg))
})();
var state__25503__auto__ = (function (){var statearr_30698 = f__25502__auto__.call(null);
(statearr_30698[(6)] = c__25501__auto__);

return statearr_30698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto__,msg_hist,msg_names,msg))
);

return c__25501__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25501__auto___30765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___30765,ch){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___30765,ch){
return (function (state_30751){
var state_val_30752 = (state_30751[(1)]);
if((state_val_30752 === (1))){
var state_30751__$1 = state_30751;
var statearr_30753_30766 = state_30751__$1;
(statearr_30753_30766[(2)] = null);

(statearr_30753_30766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (2))){
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30751__$1,(4),ch);
} else {
if((state_val_30752 === (3))){
var inst_30749 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30751__$1,inst_30749);
} else {
if((state_val_30752 === (4))){
var inst_30739 = (state_30751[(7)]);
var inst_30739__$1 = (state_30751[(2)]);
var state_30751__$1 = (function (){var statearr_30754 = state_30751;
(statearr_30754[(7)] = inst_30739__$1);

return statearr_30754;
})();
if(cljs.core.truth_(inst_30739__$1)){
var statearr_30755_30767 = state_30751__$1;
(statearr_30755_30767[(1)] = (5));

} else {
var statearr_30756_30768 = state_30751__$1;
(statearr_30756_30768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (5))){
var inst_30739 = (state_30751[(7)]);
var inst_30741 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30739);
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30751__$1,(8),inst_30741);
} else {
if((state_val_30752 === (6))){
var state_30751__$1 = state_30751;
var statearr_30757_30769 = state_30751__$1;
(statearr_30757_30769[(2)] = null);

(statearr_30757_30769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (7))){
var inst_30747 = (state_30751[(2)]);
var state_30751__$1 = state_30751;
var statearr_30758_30770 = state_30751__$1;
(statearr_30758_30770[(2)] = inst_30747);

(statearr_30758_30770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30752 === (8))){
var inst_30743 = (state_30751[(2)]);
var state_30751__$1 = (function (){var statearr_30759 = state_30751;
(statearr_30759[(8)] = inst_30743);

return statearr_30759;
})();
var statearr_30760_30771 = state_30751__$1;
(statearr_30760_30771[(2)] = null);

(statearr_30760_30771[(1)] = (2));


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
});})(c__25501__auto___30765,ch))
;
return ((function (switch__25410__auto__,c__25501__auto___30765,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25411__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25411__auto____0 = (function (){
var statearr_30761 = [null,null,null,null,null,null,null,null,null];
(statearr_30761[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25411__auto__);

(statearr_30761[(1)] = (1));

return statearr_30761;
});
var figwheel$client$heads_up_plugin_$_state_machine__25411__auto____1 = (function (state_30751){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_30751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e30762){if((e30762 instanceof Object)){
var ex__25414__auto__ = e30762;
var statearr_30763_30772 = state_30751;
(statearr_30763_30772[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30773 = state_30751;
state_30751 = G__30773;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25411__auto__ = function(state_30751){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25411__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25411__auto____1.call(this,state_30751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25411__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25411__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___30765,ch))
})();
var state__25503__auto__ = (function (){var statearr_30764 = f__25502__auto__.call(null);
(statearr_30764[(6)] = c__25501__auto___30765);

return statearr_30764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___30765,ch))
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
var c__25501__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto__){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto__){
return (function (state_30779){
var state_val_30780 = (state_30779[(1)]);
if((state_val_30780 === (1))){
var inst_30774 = cljs.core.async.timeout.call(null,(3000));
var state_30779__$1 = state_30779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30779__$1,(2),inst_30774);
} else {
if((state_val_30780 === (2))){
var inst_30776 = (state_30779[(2)]);
var inst_30777 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30779__$1 = (function (){var statearr_30781 = state_30779;
(statearr_30781[(7)] = inst_30776);

return statearr_30781;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30779__$1,inst_30777);
} else {
return null;
}
}
});})(c__25501__auto__))
;
return ((function (switch__25410__auto__,c__25501__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25411__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25411__auto____0 = (function (){
var statearr_30782 = [null,null,null,null,null,null,null,null];
(statearr_30782[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25411__auto__);

(statearr_30782[(1)] = (1));

return statearr_30782;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25411__auto____1 = (function (state_30779){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_30779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e30783){if((e30783 instanceof Object)){
var ex__25414__auto__ = e30783;
var statearr_30784_30786 = state_30779;
(statearr_30784_30786[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30787 = state_30779;
state_30779 = G__30787;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25411__auto__ = function(state_30779){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25411__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25411__auto____1.call(this,state_30779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25411__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25411__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto__))
})();
var state__25503__auto__ = (function (){var statearr_30785 = f__25502__auto__.call(null);
(statearr_30785[(6)] = c__25501__auto__);

return statearr_30785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto__))
);

return c__25501__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25501__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto__,figwheel_version,temp__5457__auto__){
return (function (state_30794){
var state_val_30795 = (state_30794[(1)]);
if((state_val_30795 === (1))){
var inst_30788 = cljs.core.async.timeout.call(null,(2000));
var state_30794__$1 = state_30794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30794__$1,(2),inst_30788);
} else {
if((state_val_30795 === (2))){
var inst_30790 = (state_30794[(2)]);
var inst_30791 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30792 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30791);
var state_30794__$1 = (function (){var statearr_30796 = state_30794;
(statearr_30796[(7)] = inst_30790);

return statearr_30796;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30794__$1,inst_30792);
} else {
return null;
}
}
});})(c__25501__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__25410__auto__,c__25501__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25411__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25411__auto____0 = (function (){
var statearr_30797 = [null,null,null,null,null,null,null,null];
(statearr_30797[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25411__auto__);

(statearr_30797[(1)] = (1));

return statearr_30797;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25411__auto____1 = (function (state_30794){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_30794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e30798){if((e30798 instanceof Object)){
var ex__25414__auto__ = e30798;
var statearr_30799_30801 = state_30794;
(statearr_30799_30801[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30802 = state_30794;
state_30794 = G__30802;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25411__auto__ = function(state_30794){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25411__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25411__auto____1.call(this,state_30794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25411__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25411__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto__,figwheel_version,temp__5457__auto__))
})();
var state__25503__auto__ = (function (){var statearr_30800 = f__25502__auto__.call(null);
(statearr_30800[(6)] = c__25501__auto__);

return statearr_30800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto__,figwheel_version,temp__5457__auto__))
);

return c__25501__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30803){
var map__30804 = p__30803;
var map__30804__$1 = ((((!((map__30804 == null)))?(((((map__30804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30804):map__30804);
var file = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30806 = "";
var G__30806__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30806),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30806);
var G__30806__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30806__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30806__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30806__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30806__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30807){
var map__30808 = p__30807;
var map__30808__$1 = ((((!((map__30808 == null)))?(((((map__30808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30808):map__30808);
var ed = map__30808__$1;
var formatted_exception = cljs.core.get.call(null,map__30808__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30808__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30808__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30810_30814 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30811_30815 = null;
var count__30812_30816 = (0);
var i__30813_30817 = (0);
while(true){
if((i__30813_30817 < count__30812_30816)){
var msg_30818 = cljs.core._nth.call(null,chunk__30811_30815,i__30813_30817);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30818);


var G__30819 = seq__30810_30814;
var G__30820 = chunk__30811_30815;
var G__30821 = count__30812_30816;
var G__30822 = (i__30813_30817 + (1));
seq__30810_30814 = G__30819;
chunk__30811_30815 = G__30820;
count__30812_30816 = G__30821;
i__30813_30817 = G__30822;
continue;
} else {
var temp__5457__auto___30823 = cljs.core.seq.call(null,seq__30810_30814);
if(temp__5457__auto___30823){
var seq__30810_30824__$1 = temp__5457__auto___30823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30810_30824__$1)){
var c__4351__auto___30825 = cljs.core.chunk_first.call(null,seq__30810_30824__$1);
var G__30826 = cljs.core.chunk_rest.call(null,seq__30810_30824__$1);
var G__30827 = c__4351__auto___30825;
var G__30828 = cljs.core.count.call(null,c__4351__auto___30825);
var G__30829 = (0);
seq__30810_30814 = G__30826;
chunk__30811_30815 = G__30827;
count__30812_30816 = G__30828;
i__30813_30817 = G__30829;
continue;
} else {
var msg_30830 = cljs.core.first.call(null,seq__30810_30824__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30830);


var G__30831 = cljs.core.next.call(null,seq__30810_30824__$1);
var G__30832 = null;
var G__30833 = (0);
var G__30834 = (0);
seq__30810_30814 = G__30831;
chunk__30811_30815 = G__30832;
count__30812_30816 = G__30833;
i__30813_30817 = G__30834;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30835){
var map__30836 = p__30835;
var map__30836__$1 = ((((!((map__30836 == null)))?(((((map__30836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30836):map__30836);
var w = map__30836__$1;
var message = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
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
var seq__30838 = cljs.core.seq.call(null,plugins);
var chunk__30839 = null;
var count__30840 = (0);
var i__30841 = (0);
while(true){
if((i__30841 < count__30840)){
var vec__30842 = cljs.core._nth.call(null,chunk__30839,i__30841);
var k = cljs.core.nth.call(null,vec__30842,(0),null);
var plugin = cljs.core.nth.call(null,vec__30842,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30848 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30838,chunk__30839,count__30840,i__30841,pl_30848,vec__30842,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30848.call(null,msg_hist);
});})(seq__30838,chunk__30839,count__30840,i__30841,pl_30848,vec__30842,k,plugin))
);
} else {
}


var G__30849 = seq__30838;
var G__30850 = chunk__30839;
var G__30851 = count__30840;
var G__30852 = (i__30841 + (1));
seq__30838 = G__30849;
chunk__30839 = G__30850;
count__30840 = G__30851;
i__30841 = G__30852;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30838);
if(temp__5457__auto__){
var seq__30838__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30838__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30838__$1);
var G__30853 = cljs.core.chunk_rest.call(null,seq__30838__$1);
var G__30854 = c__4351__auto__;
var G__30855 = cljs.core.count.call(null,c__4351__auto__);
var G__30856 = (0);
seq__30838 = G__30853;
chunk__30839 = G__30854;
count__30840 = G__30855;
i__30841 = G__30856;
continue;
} else {
var vec__30845 = cljs.core.first.call(null,seq__30838__$1);
var k = cljs.core.nth.call(null,vec__30845,(0),null);
var plugin = cljs.core.nth.call(null,vec__30845,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30857 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30838,chunk__30839,count__30840,i__30841,pl_30857,vec__30845,k,plugin,seq__30838__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30857.call(null,msg_hist);
});})(seq__30838,chunk__30839,count__30840,i__30841,pl_30857,vec__30845,k,plugin,seq__30838__$1,temp__5457__auto__))
);
} else {
}


var G__30858 = cljs.core.next.call(null,seq__30838__$1);
var G__30859 = null;
var G__30860 = (0);
var G__30861 = (0);
seq__30838 = G__30858;
chunk__30839 = G__30859;
count__30840 = G__30860;
i__30841 = G__30861;
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
var G__30863 = arguments.length;
switch (G__30863) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30864_30869 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30865_30870 = null;
var count__30866_30871 = (0);
var i__30867_30872 = (0);
while(true){
if((i__30867_30872 < count__30866_30871)){
var msg_30873 = cljs.core._nth.call(null,chunk__30865_30870,i__30867_30872);
figwheel.client.socket.handle_incoming_message.call(null,msg_30873);


var G__30874 = seq__30864_30869;
var G__30875 = chunk__30865_30870;
var G__30876 = count__30866_30871;
var G__30877 = (i__30867_30872 + (1));
seq__30864_30869 = G__30874;
chunk__30865_30870 = G__30875;
count__30866_30871 = G__30876;
i__30867_30872 = G__30877;
continue;
} else {
var temp__5457__auto___30878 = cljs.core.seq.call(null,seq__30864_30869);
if(temp__5457__auto___30878){
var seq__30864_30879__$1 = temp__5457__auto___30878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30864_30879__$1)){
var c__4351__auto___30880 = cljs.core.chunk_first.call(null,seq__30864_30879__$1);
var G__30881 = cljs.core.chunk_rest.call(null,seq__30864_30879__$1);
var G__30882 = c__4351__auto___30880;
var G__30883 = cljs.core.count.call(null,c__4351__auto___30880);
var G__30884 = (0);
seq__30864_30869 = G__30881;
chunk__30865_30870 = G__30882;
count__30866_30871 = G__30883;
i__30867_30872 = G__30884;
continue;
} else {
var msg_30885 = cljs.core.first.call(null,seq__30864_30879__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30885);


var G__30886 = cljs.core.next.call(null,seq__30864_30879__$1);
var G__30887 = null;
var G__30888 = (0);
var G__30889 = (0);
seq__30864_30869 = G__30886;
chunk__30865_30870 = G__30887;
count__30866_30871 = G__30888;
i__30867_30872 = G__30889;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___30894 = arguments.length;
var i__4532__auto___30895 = (0);
while(true){
if((i__4532__auto___30895 < len__4531__auto___30894)){
args__4534__auto__.push((arguments[i__4532__auto___30895]));

var G__30896 = (i__4532__auto___30895 + (1));
i__4532__auto___30895 = G__30896;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30891){
var map__30892 = p__30891;
var map__30892__$1 = ((((!((map__30892 == null)))?(((((map__30892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30892):map__30892);
var opts = map__30892__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30890){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30890));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30897){if((e30897 instanceof Error)){
var e = e30897;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30897;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30898){
var map__30899 = p__30898;
var map__30899__$1 = ((((!((map__30899 == null)))?(((((map__30899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30899):map__30899);
var msg_name = cljs.core.get.call(null,map__30899__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1530909576045
