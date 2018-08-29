// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30901){
var map__30902 = p__30901;
var map__30902__$1 = ((((!((map__30902 == null)))?(((((map__30902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30902):map__30902);
var m = map__30902__$1;
var n = cljs.core.get.call(null,map__30902__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30902__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30904_30926 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30905_30927 = null;
var count__30906_30928 = (0);
var i__30907_30929 = (0);
while(true){
if((i__30907_30929 < count__30906_30928)){
var f_30930 = cljs.core._nth.call(null,chunk__30905_30927,i__30907_30929);
cljs.core.println.call(null,"  ",f_30930);


var G__30931 = seq__30904_30926;
var G__30932 = chunk__30905_30927;
var G__30933 = count__30906_30928;
var G__30934 = (i__30907_30929 + (1));
seq__30904_30926 = G__30931;
chunk__30905_30927 = G__30932;
count__30906_30928 = G__30933;
i__30907_30929 = G__30934;
continue;
} else {
var temp__5457__auto___30935 = cljs.core.seq.call(null,seq__30904_30926);
if(temp__5457__auto___30935){
var seq__30904_30936__$1 = temp__5457__auto___30935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30904_30936__$1)){
var c__4351__auto___30937 = cljs.core.chunk_first.call(null,seq__30904_30936__$1);
var G__30938 = cljs.core.chunk_rest.call(null,seq__30904_30936__$1);
var G__30939 = c__4351__auto___30937;
var G__30940 = cljs.core.count.call(null,c__4351__auto___30937);
var G__30941 = (0);
seq__30904_30926 = G__30938;
chunk__30905_30927 = G__30939;
count__30906_30928 = G__30940;
i__30907_30929 = G__30941;
continue;
} else {
var f_30942 = cljs.core.first.call(null,seq__30904_30936__$1);
cljs.core.println.call(null,"  ",f_30942);


var G__30943 = cljs.core.next.call(null,seq__30904_30936__$1);
var G__30944 = null;
var G__30945 = (0);
var G__30946 = (0);
seq__30904_30926 = G__30943;
chunk__30905_30927 = G__30944;
count__30906_30928 = G__30945;
i__30907_30929 = G__30946;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30947 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30947);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30947)))?cljs.core.second.call(null,arglists_30947):arglists_30947));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__30908_30948 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30909_30949 = null;
var count__30910_30950 = (0);
var i__30911_30951 = (0);
while(true){
if((i__30911_30951 < count__30910_30950)){
var vec__30912_30952 = cljs.core._nth.call(null,chunk__30909_30949,i__30911_30951);
var name_30953 = cljs.core.nth.call(null,vec__30912_30952,(0),null);
var map__30915_30954 = cljs.core.nth.call(null,vec__30912_30952,(1),null);
var map__30915_30955__$1 = ((((!((map__30915_30954 == null)))?(((((map__30915_30954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30915_30954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30915_30954):map__30915_30954);
var doc_30956 = cljs.core.get.call(null,map__30915_30955__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30957 = cljs.core.get.call(null,map__30915_30955__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30953);

cljs.core.println.call(null," ",arglists_30957);

if(cljs.core.truth_(doc_30956)){
cljs.core.println.call(null," ",doc_30956);
} else {
}


var G__30958 = seq__30908_30948;
var G__30959 = chunk__30909_30949;
var G__30960 = count__30910_30950;
var G__30961 = (i__30911_30951 + (1));
seq__30908_30948 = G__30958;
chunk__30909_30949 = G__30959;
count__30910_30950 = G__30960;
i__30911_30951 = G__30961;
continue;
} else {
var temp__5457__auto___30962 = cljs.core.seq.call(null,seq__30908_30948);
if(temp__5457__auto___30962){
var seq__30908_30963__$1 = temp__5457__auto___30962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30908_30963__$1)){
var c__4351__auto___30964 = cljs.core.chunk_first.call(null,seq__30908_30963__$1);
var G__30965 = cljs.core.chunk_rest.call(null,seq__30908_30963__$1);
var G__30966 = c__4351__auto___30964;
var G__30967 = cljs.core.count.call(null,c__4351__auto___30964);
var G__30968 = (0);
seq__30908_30948 = G__30965;
chunk__30909_30949 = G__30966;
count__30910_30950 = G__30967;
i__30911_30951 = G__30968;
continue;
} else {
var vec__30917_30969 = cljs.core.first.call(null,seq__30908_30963__$1);
var name_30970 = cljs.core.nth.call(null,vec__30917_30969,(0),null);
var map__30920_30971 = cljs.core.nth.call(null,vec__30917_30969,(1),null);
var map__30920_30972__$1 = ((((!((map__30920_30971 == null)))?(((((map__30920_30971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30920_30971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30920_30971):map__30920_30971);
var doc_30973 = cljs.core.get.call(null,map__30920_30972__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30974 = cljs.core.get.call(null,map__30920_30972__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30970);

cljs.core.println.call(null," ",arglists_30974);

if(cljs.core.truth_(doc_30973)){
cljs.core.println.call(null," ",doc_30973);
} else {
}


var G__30975 = cljs.core.next.call(null,seq__30908_30963__$1);
var G__30976 = null;
var G__30977 = (0);
var G__30978 = (0);
seq__30908_30948 = G__30975;
chunk__30909_30949 = G__30976;
count__30910_30950 = G__30977;
i__30911_30951 = G__30978;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30922 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30923 = null;
var count__30924 = (0);
var i__30925 = (0);
while(true){
if((i__30925 < count__30924)){
var role = cljs.core._nth.call(null,chunk__30923,i__30925);
var temp__5457__auto___30979__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30979__$1)){
var spec_30980 = temp__5457__auto___30979__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30980));
} else {
}


var G__30981 = seq__30922;
var G__30982 = chunk__30923;
var G__30983 = count__30924;
var G__30984 = (i__30925 + (1));
seq__30922 = G__30981;
chunk__30923 = G__30982;
count__30924 = G__30983;
i__30925 = G__30984;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30922);
if(temp__5457__auto____$1){
var seq__30922__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30922__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30922__$1);
var G__30985 = cljs.core.chunk_rest.call(null,seq__30922__$1);
var G__30986 = c__4351__auto__;
var G__30987 = cljs.core.count.call(null,c__4351__auto__);
var G__30988 = (0);
seq__30922 = G__30985;
chunk__30923 = G__30986;
count__30924 = G__30987;
i__30925 = G__30988;
continue;
} else {
var role = cljs.core.first.call(null,seq__30922__$1);
var temp__5457__auto___30989__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30989__$2)){
var spec_30990 = temp__5457__auto___30989__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30990));
} else {
}


var G__30991 = cljs.core.next.call(null,seq__30922__$1);
var G__30992 = null;
var G__30993 = (0);
var G__30994 = (0);
seq__30922 = G__30991;
chunk__30923 = G__30992;
count__30924 = G__30993;
i__30925 = G__30994;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1530901595028
