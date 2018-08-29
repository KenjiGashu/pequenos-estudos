// Compiled by ClojureScript 1.7.122 {}
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
var seq__26566_26580 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26567_26581 = null;
var count__26568_26582 = (0);
var i__26569_26583 = (0);
while(true){
if((i__26569_26583 < count__26568_26582)){
var f_26584 = cljs.core._nth.call(null,chunk__26567_26581,i__26569_26583);
cljs.core.println.call(null,"  ",f_26584);

var G__26585 = seq__26566_26580;
var G__26586 = chunk__26567_26581;
var G__26587 = count__26568_26582;
var G__26588 = (i__26569_26583 + (1));
seq__26566_26580 = G__26585;
chunk__26567_26581 = G__26586;
count__26568_26582 = G__26587;
i__26569_26583 = G__26588;
continue;
} else {
var temp__4425__auto___26589 = cljs.core.seq.call(null,seq__26566_26580);
if(temp__4425__auto___26589){
var seq__26566_26590__$1 = temp__4425__auto___26589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26566_26590__$1)){
var c__17166__auto___26591 = cljs.core.chunk_first.call(null,seq__26566_26590__$1);
var G__26592 = cljs.core.chunk_rest.call(null,seq__26566_26590__$1);
var G__26593 = c__17166__auto___26591;
var G__26594 = cljs.core.count.call(null,c__17166__auto___26591);
var G__26595 = (0);
seq__26566_26580 = G__26592;
chunk__26567_26581 = G__26593;
count__26568_26582 = G__26594;
i__26569_26583 = G__26595;
continue;
} else {
var f_26596 = cljs.core.first.call(null,seq__26566_26590__$1);
cljs.core.println.call(null,"  ",f_26596);

var G__26597 = cljs.core.next.call(null,seq__26566_26590__$1);
var G__26598 = null;
var G__26599 = (0);
var G__26600 = (0);
seq__26566_26580 = G__26597;
chunk__26567_26581 = G__26598;
count__26568_26582 = G__26599;
i__26569_26583 = G__26600;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26601 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16363__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26601);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26601)))?cljs.core.second.call(null,arglists_26601):arglists_26601));
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
var seq__26570 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26571 = null;
var count__26572 = (0);
var i__26573 = (0);
while(true){
if((i__26573 < count__26572)){
var vec__26574 = cljs.core._nth.call(null,chunk__26571,i__26573);
var name = cljs.core.nth.call(null,vec__26574,(0),null);
var map__26575 = cljs.core.nth.call(null,vec__26574,(1),null);
var map__26575__$1 = ((((!((map__26575 == null)))?((((map__26575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26575):map__26575);
var doc = cljs.core.get.call(null,map__26575__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26575__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26602 = seq__26570;
var G__26603 = chunk__26571;
var G__26604 = count__26572;
var G__26605 = (i__26573 + (1));
seq__26570 = G__26602;
chunk__26571 = G__26603;
count__26572 = G__26604;
i__26573 = G__26605;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26570);
if(temp__4425__auto__){
var seq__26570__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26570__$1)){
var c__17166__auto__ = cljs.core.chunk_first.call(null,seq__26570__$1);
var G__26606 = cljs.core.chunk_rest.call(null,seq__26570__$1);
var G__26607 = c__17166__auto__;
var G__26608 = cljs.core.count.call(null,c__17166__auto__);
var G__26609 = (0);
seq__26570 = G__26606;
chunk__26571 = G__26607;
count__26572 = G__26608;
i__26573 = G__26609;
continue;
} else {
var vec__26577 = cljs.core.first.call(null,seq__26570__$1);
var name = cljs.core.nth.call(null,vec__26577,(0),null);
var map__26578 = cljs.core.nth.call(null,vec__26577,(1),null);
var map__26578__$1 = ((((!((map__26578 == null)))?((((map__26578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26578):map__26578);
var doc = cljs.core.get.call(null,map__26578__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26578__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26610 = cljs.core.next.call(null,seq__26570__$1);
var G__26611 = null;
var G__26612 = (0);
var G__26613 = (0);
seq__26570 = G__26610;
chunk__26571 = G__26611;
count__26572 = G__26612;
i__26573 = G__26613;
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