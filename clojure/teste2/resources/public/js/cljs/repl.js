// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28407_28421 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28408_28422 = null;
var count__28409_28423 = (0);
var i__28410_28424 = (0);
while(true){
if((i__28410_28424 < count__28409_28423)){
var f_28425 = cljs.core._nth.call(null,chunk__28408_28422,i__28410_28424);
cljs.core.println.call(null,"  ",f_28425);

var G__28426 = seq__28407_28421;
var G__28427 = chunk__28408_28422;
var G__28428 = count__28409_28423;
var G__28429 = (i__28410_28424 + (1));
seq__28407_28421 = G__28426;
chunk__28408_28422 = G__28427;
count__28409_28423 = G__28428;
i__28410_28424 = G__28429;
continue;
} else {
var temp__4425__auto___28430 = cljs.core.seq.call(null,seq__28407_28421);
if(temp__4425__auto___28430){
var seq__28407_28431__$1 = temp__4425__auto___28430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28407_28431__$1)){
var c__17588__auto___28432 = cljs.core.chunk_first.call(null,seq__28407_28431__$1);
var G__28433 = cljs.core.chunk_rest.call(null,seq__28407_28431__$1);
var G__28434 = c__17588__auto___28432;
var G__28435 = cljs.core.count.call(null,c__17588__auto___28432);
var G__28436 = (0);
seq__28407_28421 = G__28433;
chunk__28408_28422 = G__28434;
count__28409_28423 = G__28435;
i__28410_28424 = G__28436;
continue;
} else {
var f_28437 = cljs.core.first.call(null,seq__28407_28431__$1);
cljs.core.println.call(null,"  ",f_28437);

var G__28438 = cljs.core.next.call(null,seq__28407_28431__$1);
var G__28439 = null;
var G__28440 = (0);
var G__28441 = (0);
seq__28407_28421 = G__28438;
chunk__28408_28422 = G__28439;
count__28409_28423 = G__28440;
i__28410_28424 = G__28441;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28442 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16785__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28442);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28442)))?cljs.core.second.call(null,arglists_28442):arglists_28442));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28411 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28412 = null;
var count__28413 = (0);
var i__28414 = (0);
while(true){
if((i__28414 < count__28413)){
var vec__28415 = cljs.core._nth.call(null,chunk__28412,i__28414);
var name = cljs.core.nth.call(null,vec__28415,(0),null);
var map__28416 = cljs.core.nth.call(null,vec__28415,(1),null);
var map__28416__$1 = ((((!((map__28416 == null)))?((((map__28416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28416):map__28416);
var doc = cljs.core.get.call(null,map__28416__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28416__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28443 = seq__28411;
var G__28444 = chunk__28412;
var G__28445 = count__28413;
var G__28446 = (i__28414 + (1));
seq__28411 = G__28443;
chunk__28412 = G__28444;
count__28413 = G__28445;
i__28414 = G__28446;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28411);
if(temp__4425__auto__){
var seq__28411__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28411__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__28411__$1);
var G__28447 = cljs.core.chunk_rest.call(null,seq__28411__$1);
var G__28448 = c__17588__auto__;
var G__28449 = cljs.core.count.call(null,c__17588__auto__);
var G__28450 = (0);
seq__28411 = G__28447;
chunk__28412 = G__28448;
count__28413 = G__28449;
i__28414 = G__28450;
continue;
} else {
var vec__28418 = cljs.core.first.call(null,seq__28411__$1);
var name = cljs.core.nth.call(null,vec__28418,(0),null);
var map__28419 = cljs.core.nth.call(null,vec__28418,(1),null);
var map__28419__$1 = ((((!((map__28419 == null)))?((((map__28419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28419):map__28419);
var doc = cljs.core.get.call(null,map__28419__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28419__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28451 = cljs.core.next.call(null,seq__28411__$1);
var G__28452 = null;
var G__28453 = (0);
var G__28454 = (0);
seq__28411 = G__28451;
chunk__28412 = G__28452;
count__28413 = G__28453;
i__28414 = G__28454;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map