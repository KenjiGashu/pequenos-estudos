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
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e31189){if((e31189 instanceof Error)){
var e = e31189;
return "Error: Unable to stringify";
} else {
throw e31189;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31192 = arguments.length;
switch (G__31192) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31190_SHARP_){
if(typeof p1__31190_SHARP_ === 'string'){
return p1__31190_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31190_SHARP_);
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
var len__4531__auto___31195 = arguments.length;
var i__4532__auto___31196 = (0);
while(true){
if((i__4532__auto___31196 < len__4531__auto___31195)){
args__4534__auto__.push((arguments[i__4532__auto___31196]));

var G__31197 = (i__4532__auto___31196 + (1));
i__4532__auto___31196 = G__31197;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31194){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31194));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31199 = arguments.length;
var i__4532__auto___31200 = (0);
while(true){
if((i__4532__auto___31200 < len__4531__auto___31199)){
args__4534__auto__.push((arguments[i__4532__auto___31200]));

var G__31201 = (i__4532__auto___31200 + (1));
i__4532__auto___31200 = G__31201;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31198){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31198));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31202){
var map__31203 = p__31202;
var map__31203__$1 = ((((!((map__31203 == null)))?(((((map__31203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31203):map__31203);
var message = cljs.core.get.call(null,map__31203__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31203__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27270__auto___31282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___31282,ch){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___31282,ch){
return (function (state_31254){
var state_val_31255 = (state_31254[(1)]);
if((state_val_31255 === (7))){
var inst_31250 = (state_31254[(2)]);
var state_31254__$1 = state_31254;
var statearr_31256_31283 = state_31254__$1;
(statearr_31256_31283[(2)] = inst_31250);

(statearr_31256_31283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (1))){
var state_31254__$1 = state_31254;
var statearr_31257_31284 = state_31254__$1;
(statearr_31257_31284[(2)] = null);

(statearr_31257_31284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (4))){
var inst_31207 = (state_31254[(7)]);
var inst_31207__$1 = (state_31254[(2)]);
var state_31254__$1 = (function (){var statearr_31258 = state_31254;
(statearr_31258[(7)] = inst_31207__$1);

return statearr_31258;
})();
if(cljs.core.truth_(inst_31207__$1)){
var statearr_31259_31285 = state_31254__$1;
(statearr_31259_31285[(1)] = (5));

} else {
var statearr_31260_31286 = state_31254__$1;
(statearr_31260_31286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (15))){
var inst_31214 = (state_31254[(8)]);
var inst_31229 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31214);
var inst_31230 = cljs.core.first.call(null,inst_31229);
var inst_31231 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31230);
var inst_31232 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31231)].join('');
var inst_31233 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31232);
var state_31254__$1 = state_31254;
var statearr_31261_31287 = state_31254__$1;
(statearr_31261_31287[(2)] = inst_31233);

(statearr_31261_31287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (13))){
var inst_31238 = (state_31254[(2)]);
var state_31254__$1 = state_31254;
var statearr_31262_31288 = state_31254__$1;
(statearr_31262_31288[(2)] = inst_31238);

(statearr_31262_31288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (6))){
var state_31254__$1 = state_31254;
var statearr_31263_31289 = state_31254__$1;
(statearr_31263_31289[(2)] = null);

(statearr_31263_31289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (17))){
var inst_31236 = (state_31254[(2)]);
var state_31254__$1 = state_31254;
var statearr_31264_31290 = state_31254__$1;
(statearr_31264_31290[(2)] = inst_31236);

(statearr_31264_31290[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (3))){
var inst_31252 = (state_31254[(2)]);
var state_31254__$1 = state_31254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31254__$1,inst_31252);
} else {
if((state_val_31255 === (12))){
var inst_31213 = (state_31254[(9)]);
var inst_31227 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31213,opts);
var state_31254__$1 = state_31254;
if(cljs.core.truth_(inst_31227)){
var statearr_31265_31291 = state_31254__$1;
(statearr_31265_31291[(1)] = (15));

} else {
var statearr_31266_31292 = state_31254__$1;
(statearr_31266_31292[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (2))){
var state_31254__$1 = state_31254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31254__$1,(4),ch);
} else {
if((state_val_31255 === (11))){
var inst_31214 = (state_31254[(8)]);
var inst_31219 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31220 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31214);
var inst_31221 = cljs.core.async.timeout.call(null,(1000));
var inst_31222 = [inst_31220,inst_31221];
var inst_31223 = (new cljs.core.PersistentVector(null,2,(5),inst_31219,inst_31222,null));
var state_31254__$1 = state_31254;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31254__$1,(14),inst_31223);
} else {
if((state_val_31255 === (9))){
var inst_31214 = (state_31254[(8)]);
var inst_31240 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31241 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31214);
var inst_31242 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31241);
var inst_31243 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31242)].join('');
var inst_31244 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31243);
var state_31254__$1 = (function (){var statearr_31267 = state_31254;
(statearr_31267[(10)] = inst_31240);

return statearr_31267;
})();
var statearr_31268_31293 = state_31254__$1;
(statearr_31268_31293[(2)] = inst_31244);

(statearr_31268_31293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (5))){
var inst_31207 = (state_31254[(7)]);
var inst_31209 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31210 = (new cljs.core.PersistentArrayMap(null,2,inst_31209,null));
var inst_31211 = (new cljs.core.PersistentHashSet(null,inst_31210,null));
var inst_31212 = figwheel.client.focus_msgs.call(null,inst_31211,inst_31207);
var inst_31213 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31212);
var inst_31214 = cljs.core.first.call(null,inst_31212);
var inst_31215 = figwheel.client.autoload_QMARK_.call(null);
var state_31254__$1 = (function (){var statearr_31269 = state_31254;
(statearr_31269[(9)] = inst_31213);

(statearr_31269[(8)] = inst_31214);

return statearr_31269;
})();
if(cljs.core.truth_(inst_31215)){
var statearr_31270_31294 = state_31254__$1;
(statearr_31270_31294[(1)] = (8));

} else {
var statearr_31271_31295 = state_31254__$1;
(statearr_31271_31295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (14))){
var inst_31225 = (state_31254[(2)]);
var state_31254__$1 = state_31254;
var statearr_31272_31296 = state_31254__$1;
(statearr_31272_31296[(2)] = inst_31225);

(statearr_31272_31296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (16))){
var state_31254__$1 = state_31254;
var statearr_31273_31297 = state_31254__$1;
(statearr_31273_31297[(2)] = null);

(statearr_31273_31297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (10))){
var inst_31246 = (state_31254[(2)]);
var state_31254__$1 = (function (){var statearr_31274 = state_31254;
(statearr_31274[(11)] = inst_31246);

return statearr_31274;
})();
var statearr_31275_31298 = state_31254__$1;
(statearr_31275_31298[(2)] = null);

(statearr_31275_31298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (8))){
var inst_31213 = (state_31254[(9)]);
var inst_31217 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31213,opts);
var state_31254__$1 = state_31254;
if(cljs.core.truth_(inst_31217)){
var statearr_31276_31299 = state_31254__$1;
(statearr_31276_31299[(1)] = (11));

} else {
var statearr_31277_31300 = state_31254__$1;
(statearr_31277_31300[(1)] = (12));

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
});})(c__27270__auto___31282,ch))
;
return ((function (switch__27179__auto__,c__27270__auto___31282,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27180__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27180__auto____0 = (function (){
var statearr_31278 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31278[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27180__auto__);

(statearr_31278[(1)] = (1));

return statearr_31278;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27180__auto____1 = (function (state_31254){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_31254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e31279){if((e31279 instanceof Object)){
var ex__27183__auto__ = e31279;
var statearr_31280_31301 = state_31254;
(statearr_31280_31301[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31302 = state_31254;
state_31254 = G__31302;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27180__auto__ = function(state_31254){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27180__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27180__auto____1.call(this,state_31254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27180__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27180__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___31282,ch))
})();
var state__27272__auto__ = (function (){var statearr_31281 = f__27271__auto__.call(null);
(statearr_31281[(6)] = c__27270__auto___31282);

return statearr_31281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___31282,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31303_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31303_SHARP_));
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
var base_path_31307 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31307){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31305 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31306 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31305,_STAR_print_fn_STAR_31306,sb,base_path_31307){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31305,_STAR_print_fn_STAR_31306,sb,base_path_31307))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31306;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31305;
}}catch (e31304){if((e31304 instanceof Error)){
var e = e31304;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31307], null));
} else {
var e = e31304;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31307))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31308){
var map__31309 = p__31308;
var map__31309__$1 = ((((!((map__31309 == null)))?(((((map__31309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31309):map__31309);
var opts = map__31309__$1;
var build_id = cljs.core.get.call(null,map__31309__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31309,map__31309__$1,opts,build_id){
return (function (p__31311){
var vec__31312 = p__31311;
var seq__31313 = cljs.core.seq.call(null,vec__31312);
var first__31314 = cljs.core.first.call(null,seq__31313);
var seq__31313__$1 = cljs.core.next.call(null,seq__31313);
var map__31315 = first__31314;
var map__31315__$1 = ((((!((map__31315 == null)))?(((((map__31315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31315):map__31315);
var msg = map__31315__$1;
var msg_name = cljs.core.get.call(null,map__31315__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31313__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31312,seq__31313,first__31314,seq__31313__$1,map__31315,map__31315__$1,msg,msg_name,_,map__31309,map__31309__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31312,seq__31313,first__31314,seq__31313__$1,map__31315,map__31315__$1,msg,msg_name,_,map__31309,map__31309__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31309,map__31309__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31317){
var vec__31318 = p__31317;
var seq__31319 = cljs.core.seq.call(null,vec__31318);
var first__31320 = cljs.core.first.call(null,seq__31319);
var seq__31319__$1 = cljs.core.next.call(null,seq__31319);
var map__31321 = first__31320;
var map__31321__$1 = ((((!((map__31321 == null)))?(((((map__31321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31321):map__31321);
var msg = map__31321__$1;
var msg_name = cljs.core.get.call(null,map__31321__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31319__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31323){
var map__31324 = p__31323;
var map__31324__$1 = ((((!((map__31324 == null)))?(((((map__31324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31324):map__31324);
var on_compile_warning = cljs.core.get.call(null,map__31324__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31324__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31324,map__31324__$1,on_compile_warning,on_compile_fail){
return (function (p__31326){
var vec__31327 = p__31326;
var seq__31328 = cljs.core.seq.call(null,vec__31327);
var first__31329 = cljs.core.first.call(null,seq__31328);
var seq__31328__$1 = cljs.core.next.call(null,seq__31328);
var map__31330 = first__31329;
var map__31330__$1 = ((((!((map__31330 == null)))?(((((map__31330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31330):map__31330);
var msg = map__31330__$1;
var msg_name = cljs.core.get.call(null,map__31330__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31328__$1;
var pred__31332 = cljs.core._EQ_;
var expr__31333 = msg_name;
if(cljs.core.truth_(pred__31332.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31333))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31332.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31333))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31324,map__31324__$1,on_compile_warning,on_compile_fail))
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
var c__27270__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto__,msg_hist,msg_names,msg){
return (function (state_31422){
var state_val_31423 = (state_31422[(1)]);
if((state_val_31423 === (7))){
var inst_31342 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31342)){
var statearr_31424_31471 = state_31422__$1;
(statearr_31424_31471[(1)] = (8));

} else {
var statearr_31425_31472 = state_31422__$1;
(statearr_31425_31472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (20))){
var inst_31416 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31426_31473 = state_31422__$1;
(statearr_31426_31473[(2)] = inst_31416);

(statearr_31426_31473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (27))){
var inst_31412 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31427_31474 = state_31422__$1;
(statearr_31427_31474[(2)] = inst_31412);

(statearr_31427_31474[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (1))){
var inst_31335 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31335)){
var statearr_31428_31475 = state_31422__$1;
(statearr_31428_31475[(1)] = (2));

} else {
var statearr_31429_31476 = state_31422__$1;
(statearr_31429_31476[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (24))){
var inst_31414 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31430_31477 = state_31422__$1;
(statearr_31430_31477[(2)] = inst_31414);

(statearr_31430_31477[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (4))){
var inst_31420 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31422__$1,inst_31420);
} else {
if((state_val_31423 === (15))){
var inst_31418 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31431_31478 = state_31422__$1;
(statearr_31431_31478[(2)] = inst_31418);

(statearr_31431_31478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (21))){
var inst_31371 = (state_31422[(2)]);
var inst_31372 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31373 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31372);
var state_31422__$1 = (function (){var statearr_31432 = state_31422;
(statearr_31432[(7)] = inst_31371);

return statearr_31432;
})();
var statearr_31433_31479 = state_31422__$1;
(statearr_31433_31479[(2)] = inst_31373);

(statearr_31433_31479[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (31))){
var inst_31401 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31401)){
var statearr_31434_31480 = state_31422__$1;
(statearr_31434_31480[(1)] = (34));

} else {
var statearr_31435_31481 = state_31422__$1;
(statearr_31435_31481[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (32))){
var inst_31410 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31436_31482 = state_31422__$1;
(statearr_31436_31482[(2)] = inst_31410);

(statearr_31436_31482[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (33))){
var inst_31397 = (state_31422[(2)]);
var inst_31398 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31399 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31398);
var state_31422__$1 = (function (){var statearr_31437 = state_31422;
(statearr_31437[(8)] = inst_31397);

return statearr_31437;
})();
var statearr_31438_31483 = state_31422__$1;
(statearr_31438_31483[(2)] = inst_31399);

(statearr_31438_31483[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (13))){
var inst_31356 = figwheel.client.heads_up.clear.call(null);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31422__$1,(16),inst_31356);
} else {
if((state_val_31423 === (22))){
var inst_31377 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31378 = figwheel.client.heads_up.append_warning_message.call(null,inst_31377);
var state_31422__$1 = state_31422;
var statearr_31439_31484 = state_31422__$1;
(statearr_31439_31484[(2)] = inst_31378);

(statearr_31439_31484[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (36))){
var inst_31408 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31440_31485 = state_31422__$1;
(statearr_31440_31485[(2)] = inst_31408);

(statearr_31440_31485[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (29))){
var inst_31388 = (state_31422[(2)]);
var inst_31389 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31390 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31389);
var state_31422__$1 = (function (){var statearr_31441 = state_31422;
(statearr_31441[(9)] = inst_31388);

return statearr_31441;
})();
var statearr_31442_31486 = state_31422__$1;
(statearr_31442_31486[(2)] = inst_31390);

(statearr_31442_31486[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (6))){
var inst_31337 = (state_31422[(10)]);
var state_31422__$1 = state_31422;
var statearr_31443_31487 = state_31422__$1;
(statearr_31443_31487[(2)] = inst_31337);

(statearr_31443_31487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (28))){
var inst_31384 = (state_31422[(2)]);
var inst_31385 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31386 = figwheel.client.heads_up.display_warning.call(null,inst_31385);
var state_31422__$1 = (function (){var statearr_31444 = state_31422;
(statearr_31444[(11)] = inst_31384);

return statearr_31444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31422__$1,(29),inst_31386);
} else {
if((state_val_31423 === (25))){
var inst_31382 = figwheel.client.heads_up.clear.call(null);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31422__$1,(28),inst_31382);
} else {
if((state_val_31423 === (34))){
var inst_31403 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31422__$1,(37),inst_31403);
} else {
if((state_val_31423 === (17))){
var inst_31362 = (state_31422[(2)]);
var inst_31363 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31364 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31363);
var state_31422__$1 = (function (){var statearr_31445 = state_31422;
(statearr_31445[(12)] = inst_31362);

return statearr_31445;
})();
var statearr_31446_31488 = state_31422__$1;
(statearr_31446_31488[(2)] = inst_31364);

(statearr_31446_31488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (3))){
var inst_31354 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31354)){
var statearr_31447_31489 = state_31422__$1;
(statearr_31447_31489[(1)] = (13));

} else {
var statearr_31448_31490 = state_31422__$1;
(statearr_31448_31490[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (12))){
var inst_31350 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31449_31491 = state_31422__$1;
(statearr_31449_31491[(2)] = inst_31350);

(statearr_31449_31491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (2))){
var inst_31337 = (state_31422[(10)]);
var inst_31337__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31422__$1 = (function (){var statearr_31450 = state_31422;
(statearr_31450[(10)] = inst_31337__$1);

return statearr_31450;
})();
if(cljs.core.truth_(inst_31337__$1)){
var statearr_31451_31492 = state_31422__$1;
(statearr_31451_31492[(1)] = (5));

} else {
var statearr_31452_31493 = state_31422__$1;
(statearr_31452_31493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (23))){
var inst_31380 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31380)){
var statearr_31453_31494 = state_31422__$1;
(statearr_31453_31494[(1)] = (25));

} else {
var statearr_31454_31495 = state_31422__$1;
(statearr_31454_31495[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (35))){
var state_31422__$1 = state_31422;
var statearr_31455_31496 = state_31422__$1;
(statearr_31455_31496[(2)] = null);

(statearr_31455_31496[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (19))){
var inst_31375 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31375)){
var statearr_31456_31497 = state_31422__$1;
(statearr_31456_31497[(1)] = (22));

} else {
var statearr_31457_31498 = state_31422__$1;
(statearr_31457_31498[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (11))){
var inst_31346 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31458_31499 = state_31422__$1;
(statearr_31458_31499[(2)] = inst_31346);

(statearr_31458_31499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (9))){
var inst_31348 = figwheel.client.heads_up.clear.call(null);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31422__$1,(12),inst_31348);
} else {
if((state_val_31423 === (5))){
var inst_31339 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31422__$1 = state_31422;
var statearr_31459_31500 = state_31422__$1;
(statearr_31459_31500[(2)] = inst_31339);

(statearr_31459_31500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (14))){
var inst_31366 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31366)){
var statearr_31460_31501 = state_31422__$1;
(statearr_31460_31501[(1)] = (18));

} else {
var statearr_31461_31502 = state_31422__$1;
(statearr_31461_31502[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (26))){
var inst_31392 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31392)){
var statearr_31462_31503 = state_31422__$1;
(statearr_31462_31503[(1)] = (30));

} else {
var statearr_31463_31504 = state_31422__$1;
(statearr_31463_31504[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (16))){
var inst_31358 = (state_31422[(2)]);
var inst_31359 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31360 = figwheel.client.heads_up.display_exception.call(null,inst_31359);
var state_31422__$1 = (function (){var statearr_31464 = state_31422;
(statearr_31464[(13)] = inst_31358);

return statearr_31464;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31422__$1,(17),inst_31360);
} else {
if((state_val_31423 === (30))){
var inst_31394 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31395 = figwheel.client.heads_up.display_warning.call(null,inst_31394);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31422__$1,(33),inst_31395);
} else {
if((state_val_31423 === (10))){
var inst_31352 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31465_31505 = state_31422__$1;
(statearr_31465_31505[(2)] = inst_31352);

(statearr_31465_31505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (18))){
var inst_31368 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31369 = figwheel.client.heads_up.display_exception.call(null,inst_31368);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31422__$1,(21),inst_31369);
} else {
if((state_val_31423 === (37))){
var inst_31405 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31466_31506 = state_31422__$1;
(statearr_31466_31506[(2)] = inst_31405);

(statearr_31466_31506[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (8))){
var inst_31344 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31422__$1,(11),inst_31344);
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
});})(c__27270__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27179__auto__,c__27270__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27180__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27180__auto____0 = (function (){
var statearr_31467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31467[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27180__auto__);

(statearr_31467[(1)] = (1));

return statearr_31467;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27180__auto____1 = (function (state_31422){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_31422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e31468){if((e31468 instanceof Object)){
var ex__27183__auto__ = e31468;
var statearr_31469_31507 = state_31422;
(statearr_31469_31507[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31508 = state_31422;
state_31422 = G__31508;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27180__auto__ = function(state_31422){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27180__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27180__auto____1.call(this,state_31422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27180__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27180__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto__,msg_hist,msg_names,msg))
})();
var state__27272__auto__ = (function (){var statearr_31470 = f__27271__auto__.call(null);
(statearr_31470[(6)] = c__27270__auto__);

return statearr_31470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto__,msg_hist,msg_names,msg))
);

return c__27270__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27270__auto___31537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___31537,ch){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___31537,ch){
return (function (state_31523){
var state_val_31524 = (state_31523[(1)]);
if((state_val_31524 === (1))){
var state_31523__$1 = state_31523;
var statearr_31525_31538 = state_31523__$1;
(statearr_31525_31538[(2)] = null);

(statearr_31525_31538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (2))){
var state_31523__$1 = state_31523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31523__$1,(4),ch);
} else {
if((state_val_31524 === (3))){
var inst_31521 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31523__$1,inst_31521);
} else {
if((state_val_31524 === (4))){
var inst_31511 = (state_31523[(7)]);
var inst_31511__$1 = (state_31523[(2)]);
var state_31523__$1 = (function (){var statearr_31526 = state_31523;
(statearr_31526[(7)] = inst_31511__$1);

return statearr_31526;
})();
if(cljs.core.truth_(inst_31511__$1)){
var statearr_31527_31539 = state_31523__$1;
(statearr_31527_31539[(1)] = (5));

} else {
var statearr_31528_31540 = state_31523__$1;
(statearr_31528_31540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (5))){
var inst_31511 = (state_31523[(7)]);
var inst_31513 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31511);
var state_31523__$1 = state_31523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31523__$1,(8),inst_31513);
} else {
if((state_val_31524 === (6))){
var state_31523__$1 = state_31523;
var statearr_31529_31541 = state_31523__$1;
(statearr_31529_31541[(2)] = null);

(statearr_31529_31541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (7))){
var inst_31519 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
var statearr_31530_31542 = state_31523__$1;
(statearr_31530_31542[(2)] = inst_31519);

(statearr_31530_31542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (8))){
var inst_31515 = (state_31523[(2)]);
var state_31523__$1 = (function (){var statearr_31531 = state_31523;
(statearr_31531[(8)] = inst_31515);

return statearr_31531;
})();
var statearr_31532_31543 = state_31523__$1;
(statearr_31532_31543[(2)] = null);

(statearr_31532_31543[(1)] = (2));


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
});})(c__27270__auto___31537,ch))
;
return ((function (switch__27179__auto__,c__27270__auto___31537,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27180__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27180__auto____0 = (function (){
var statearr_31533 = [null,null,null,null,null,null,null,null,null];
(statearr_31533[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27180__auto__);

(statearr_31533[(1)] = (1));

return statearr_31533;
});
var figwheel$client$heads_up_plugin_$_state_machine__27180__auto____1 = (function (state_31523){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_31523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e31534){if((e31534 instanceof Object)){
var ex__27183__auto__ = e31534;
var statearr_31535_31544 = state_31523;
(statearr_31535_31544[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31545 = state_31523;
state_31523 = G__31545;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27180__auto__ = function(state_31523){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27180__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27180__auto____1.call(this,state_31523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27180__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27180__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___31537,ch))
})();
var state__27272__auto__ = (function (){var statearr_31536 = f__27271__auto__.call(null);
(statearr_31536[(6)] = c__27270__auto___31537);

return statearr_31536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___31537,ch))
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
var c__27270__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto__){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto__){
return (function (state_31551){
var state_val_31552 = (state_31551[(1)]);
if((state_val_31552 === (1))){
var inst_31546 = cljs.core.async.timeout.call(null,(3000));
var state_31551__$1 = state_31551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31551__$1,(2),inst_31546);
} else {
if((state_val_31552 === (2))){
var inst_31548 = (state_31551[(2)]);
var inst_31549 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31551__$1 = (function (){var statearr_31553 = state_31551;
(statearr_31553[(7)] = inst_31548);

return statearr_31553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31551__$1,inst_31549);
} else {
return null;
}
}
});})(c__27270__auto__))
;
return ((function (switch__27179__auto__,c__27270__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27180__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27180__auto____0 = (function (){
var statearr_31554 = [null,null,null,null,null,null,null,null];
(statearr_31554[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27180__auto__);

(statearr_31554[(1)] = (1));

return statearr_31554;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27180__auto____1 = (function (state_31551){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_31551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e31555){if((e31555 instanceof Object)){
var ex__27183__auto__ = e31555;
var statearr_31556_31558 = state_31551;
(statearr_31556_31558[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31559 = state_31551;
state_31551 = G__31559;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27180__auto__ = function(state_31551){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27180__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27180__auto____1.call(this,state_31551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27180__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27180__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto__))
})();
var state__27272__auto__ = (function (){var statearr_31557 = f__27271__auto__.call(null);
(statearr_31557[(6)] = c__27270__auto__);

return statearr_31557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto__))
);

return c__27270__auto__;
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
var c__27270__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31566){
var state_val_31567 = (state_31566[(1)]);
if((state_val_31567 === (1))){
var inst_31560 = cljs.core.async.timeout.call(null,(2000));
var state_31566__$1 = state_31566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31566__$1,(2),inst_31560);
} else {
if((state_val_31567 === (2))){
var inst_31562 = (state_31566[(2)]);
var inst_31563 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31564 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31563);
var state_31566__$1 = (function (){var statearr_31568 = state_31566;
(statearr_31568[(7)] = inst_31562);

return statearr_31568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31566__$1,inst_31564);
} else {
return null;
}
}
});})(c__27270__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27179__auto__,c__27270__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27180__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27180__auto____0 = (function (){
var statearr_31569 = [null,null,null,null,null,null,null,null];
(statearr_31569[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27180__auto__);

(statearr_31569[(1)] = (1));

return statearr_31569;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27180__auto____1 = (function (state_31566){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_31566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e31570){if((e31570 instanceof Object)){
var ex__27183__auto__ = e31570;
var statearr_31571_31573 = state_31566;
(statearr_31571_31573[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31574 = state_31566;
state_31566 = G__31574;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27180__auto__ = function(state_31566){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27180__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27180__auto____1.call(this,state_31566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27180__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27180__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27272__auto__ = (function (){var statearr_31572 = f__27271__auto__.call(null);
(statearr_31572[(6)] = c__27270__auto__);

return statearr_31572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto__,figwheel_version,temp__5457__auto__))
);

return c__27270__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31575){
var map__31576 = p__31575;
var map__31576__$1 = ((((!((map__31576 == null)))?(((((map__31576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31576):map__31576);
var file = cljs.core.get.call(null,map__31576__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31576__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31576__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31578 = "";
var G__31578__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31578),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31578);
var G__31578__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31578__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31578__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31578__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31578__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31579){
var map__31580 = p__31579;
var map__31580__$1 = ((((!((map__31580 == null)))?(((((map__31580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31580):map__31580);
var ed = map__31580__$1;
var formatted_exception = cljs.core.get.call(null,map__31580__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31580__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31580__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31582_31586 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31583_31587 = null;
var count__31584_31588 = (0);
var i__31585_31589 = (0);
while(true){
if((i__31585_31589 < count__31584_31588)){
var msg_31590 = cljs.core._nth.call(null,chunk__31583_31587,i__31585_31589);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31590);


var G__31591 = seq__31582_31586;
var G__31592 = chunk__31583_31587;
var G__31593 = count__31584_31588;
var G__31594 = (i__31585_31589 + (1));
seq__31582_31586 = G__31591;
chunk__31583_31587 = G__31592;
count__31584_31588 = G__31593;
i__31585_31589 = G__31594;
continue;
} else {
var temp__5457__auto___31595 = cljs.core.seq.call(null,seq__31582_31586);
if(temp__5457__auto___31595){
var seq__31582_31596__$1 = temp__5457__auto___31595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31582_31596__$1)){
var c__4351__auto___31597 = cljs.core.chunk_first.call(null,seq__31582_31596__$1);
var G__31598 = cljs.core.chunk_rest.call(null,seq__31582_31596__$1);
var G__31599 = c__4351__auto___31597;
var G__31600 = cljs.core.count.call(null,c__4351__auto___31597);
var G__31601 = (0);
seq__31582_31586 = G__31598;
chunk__31583_31587 = G__31599;
count__31584_31588 = G__31600;
i__31585_31589 = G__31601;
continue;
} else {
var msg_31602 = cljs.core.first.call(null,seq__31582_31596__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31602);


var G__31603 = cljs.core.next.call(null,seq__31582_31596__$1);
var G__31604 = null;
var G__31605 = (0);
var G__31606 = (0);
seq__31582_31586 = G__31603;
chunk__31583_31587 = G__31604;
count__31584_31588 = G__31605;
i__31585_31589 = G__31606;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31607){
var map__31608 = p__31607;
var map__31608__$1 = ((((!((map__31608 == null)))?(((((map__31608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31608):map__31608);
var w = map__31608__$1;
var message = cljs.core.get.call(null,map__31608__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31610 = cljs.core.seq.call(null,plugins);
var chunk__31611 = null;
var count__31612 = (0);
var i__31613 = (0);
while(true){
if((i__31613 < count__31612)){
var vec__31614 = cljs.core._nth.call(null,chunk__31611,i__31613);
var k = cljs.core.nth.call(null,vec__31614,(0),null);
var plugin = cljs.core.nth.call(null,vec__31614,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31620 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31610,chunk__31611,count__31612,i__31613,pl_31620,vec__31614,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31620.call(null,msg_hist);
});})(seq__31610,chunk__31611,count__31612,i__31613,pl_31620,vec__31614,k,plugin))
);
} else {
}


var G__31621 = seq__31610;
var G__31622 = chunk__31611;
var G__31623 = count__31612;
var G__31624 = (i__31613 + (1));
seq__31610 = G__31621;
chunk__31611 = G__31622;
count__31612 = G__31623;
i__31613 = G__31624;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31610);
if(temp__5457__auto__){
var seq__31610__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31610__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__31610__$1);
var G__31625 = cljs.core.chunk_rest.call(null,seq__31610__$1);
var G__31626 = c__4351__auto__;
var G__31627 = cljs.core.count.call(null,c__4351__auto__);
var G__31628 = (0);
seq__31610 = G__31625;
chunk__31611 = G__31626;
count__31612 = G__31627;
i__31613 = G__31628;
continue;
} else {
var vec__31617 = cljs.core.first.call(null,seq__31610__$1);
var k = cljs.core.nth.call(null,vec__31617,(0),null);
var plugin = cljs.core.nth.call(null,vec__31617,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31629 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31610,chunk__31611,count__31612,i__31613,pl_31629,vec__31617,k,plugin,seq__31610__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31629.call(null,msg_hist);
});})(seq__31610,chunk__31611,count__31612,i__31613,pl_31629,vec__31617,k,plugin,seq__31610__$1,temp__5457__auto__))
);
} else {
}


var G__31630 = cljs.core.next.call(null,seq__31610__$1);
var G__31631 = null;
var G__31632 = (0);
var G__31633 = (0);
seq__31610 = G__31630;
chunk__31611 = G__31631;
count__31612 = G__31632;
i__31613 = G__31633;
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
var G__31635 = arguments.length;
switch (G__31635) {
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

var seq__31636_31641 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31637_31642 = null;
var count__31638_31643 = (0);
var i__31639_31644 = (0);
while(true){
if((i__31639_31644 < count__31638_31643)){
var msg_31645 = cljs.core._nth.call(null,chunk__31637_31642,i__31639_31644);
figwheel.client.socket.handle_incoming_message.call(null,msg_31645);


var G__31646 = seq__31636_31641;
var G__31647 = chunk__31637_31642;
var G__31648 = count__31638_31643;
var G__31649 = (i__31639_31644 + (1));
seq__31636_31641 = G__31646;
chunk__31637_31642 = G__31647;
count__31638_31643 = G__31648;
i__31639_31644 = G__31649;
continue;
} else {
var temp__5457__auto___31650 = cljs.core.seq.call(null,seq__31636_31641);
if(temp__5457__auto___31650){
var seq__31636_31651__$1 = temp__5457__auto___31650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31636_31651__$1)){
var c__4351__auto___31652 = cljs.core.chunk_first.call(null,seq__31636_31651__$1);
var G__31653 = cljs.core.chunk_rest.call(null,seq__31636_31651__$1);
var G__31654 = c__4351__auto___31652;
var G__31655 = cljs.core.count.call(null,c__4351__auto___31652);
var G__31656 = (0);
seq__31636_31641 = G__31653;
chunk__31637_31642 = G__31654;
count__31638_31643 = G__31655;
i__31639_31644 = G__31656;
continue;
} else {
var msg_31657 = cljs.core.first.call(null,seq__31636_31651__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31657);


var G__31658 = cljs.core.next.call(null,seq__31636_31651__$1);
var G__31659 = null;
var G__31660 = (0);
var G__31661 = (0);
seq__31636_31641 = G__31658;
chunk__31637_31642 = G__31659;
count__31638_31643 = G__31660;
i__31639_31644 = G__31661;
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
var len__4531__auto___31666 = arguments.length;
var i__4532__auto___31667 = (0);
while(true){
if((i__4532__auto___31667 < len__4531__auto___31666)){
args__4534__auto__.push((arguments[i__4532__auto___31667]));

var G__31668 = (i__4532__auto___31667 + (1));
i__4532__auto___31667 = G__31668;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31663){
var map__31664 = p__31663;
var map__31664__$1 = ((((!((map__31664 == null)))?(((((map__31664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31664):map__31664);
var opts = map__31664__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31662){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31662));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31669){if((e31669 instanceof Error)){
var e = e31669;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31669;

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
return (function (p__31670){
var map__31671 = p__31670;
var map__31671__$1 = ((((!((map__31671 == null)))?(((((map__31671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31671):map__31671);
var msg_name = cljs.core.get.call(null,map__31671__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1530901595640
