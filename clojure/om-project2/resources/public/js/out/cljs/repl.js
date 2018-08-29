// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30902){
var map__30903 = p__30902;
var map__30903__$1 = ((((!((map__30903 == null)))?(((((map__30903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30903):map__30903);
var m = map__30903__$1;
var n = cljs.core.get.call(null,map__30903__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30903__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30905_30927 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30906_30928 = null;
var count__30907_30929 = (0);
var i__30908_30930 = (0);
while(true){
if((i__30908_30930 < count__30907_30929)){
var f_30931 = cljs.core._nth.call(null,chunk__30906_30928,i__30908_30930);
cljs.core.println.call(null,"  ",f_30931);


var G__30932 = seq__30905_30927;
var G__30933 = chunk__30906_30928;
var G__30934 = count__30907_30929;
var G__30935 = (i__30908_30930 + (1));
seq__30905_30927 = G__30932;
chunk__30906_30928 = G__30933;
count__30907_30929 = G__30934;
i__30908_30930 = G__30935;
continue;
} else {
var temp__5457__auto___30936 = cljs.core.seq.call(null,seq__30905_30927);
if(temp__5457__auto___30936){
var seq__30905_30937__$1 = temp__5457__auto___30936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30905_30937__$1)){
var c__4351__auto___30938 = cljs.core.chunk_first.call(null,seq__30905_30937__$1);
var G__30939 = cljs.core.chunk_rest.call(null,seq__30905_30937__$1);
var G__30940 = c__4351__auto___30938;
var G__30941 = cljs.core.count.call(null,c__4351__auto___30938);
var G__30942 = (0);
seq__30905_30927 = G__30939;
chunk__30906_30928 = G__30940;
count__30907_30929 = G__30941;
i__30908_30930 = G__30942;
continue;
} else {
var f_30943 = cljs.core.first.call(null,seq__30905_30937__$1);
cljs.core.println.call(null,"  ",f_30943);


var G__30944 = cljs.core.next.call(null,seq__30905_30937__$1);
var G__30945 = null;
var G__30946 = (0);
var G__30947 = (0);
seq__30905_30927 = G__30944;
chunk__30906_30928 = G__30945;
count__30907_30929 = G__30946;
i__30908_30930 = G__30947;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30948 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30948);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30948)))?cljs.core.second.call(null,arglists_30948):arglists_30948));
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
var seq__30909_30949 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30910_30950 = null;
var count__30911_30951 = (0);
var i__30912_30952 = (0);
while(true){
if((i__30912_30952 < count__30911_30951)){
var vec__30913_30953 = cljs.core._nth.call(null,chunk__30910_30950,i__30912_30952);
var name_30954 = cljs.core.nth.call(null,vec__30913_30953,(0),null);
var map__30916_30955 = cljs.core.nth.call(null,vec__30913_30953,(1),null);
var map__30916_30956__$1 = ((((!((map__30916_30955 == null)))?(((((map__30916_30955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30916_30955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30916_30955):map__30916_30955);
var doc_30957 = cljs.core.get.call(null,map__30916_30956__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30958 = cljs.core.get.call(null,map__30916_30956__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30954);

cljs.core.println.call(null," ",arglists_30958);

if(cljs.core.truth_(doc_30957)){
cljs.core.println.call(null," ",doc_30957);
} else {
}


var G__30959 = seq__30909_30949;
var G__30960 = chunk__30910_30950;
var G__30961 = count__30911_30951;
var G__30962 = (i__30912_30952 + (1));
seq__30909_30949 = G__30959;
chunk__30910_30950 = G__30960;
count__30911_30951 = G__30961;
i__30912_30952 = G__30962;
continue;
} else {
var temp__5457__auto___30963 = cljs.core.seq.call(null,seq__30909_30949);
if(temp__5457__auto___30963){
var seq__30909_30964__$1 = temp__5457__auto___30963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30909_30964__$1)){
var c__4351__auto___30965 = cljs.core.chunk_first.call(null,seq__30909_30964__$1);
var G__30966 = cljs.core.chunk_rest.call(null,seq__30909_30964__$1);
var G__30967 = c__4351__auto___30965;
var G__30968 = cljs.core.count.call(null,c__4351__auto___30965);
var G__30969 = (0);
seq__30909_30949 = G__30966;
chunk__30910_30950 = G__30967;
count__30911_30951 = G__30968;
i__30912_30952 = G__30969;
continue;
} else {
var vec__30918_30970 = cljs.core.first.call(null,seq__30909_30964__$1);
var name_30971 = cljs.core.nth.call(null,vec__30918_30970,(0),null);
var map__30921_30972 = cljs.core.nth.call(null,vec__30918_30970,(1),null);
var map__30921_30973__$1 = ((((!((map__30921_30972 == null)))?(((((map__30921_30972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30921_30972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30921_30972):map__30921_30972);
var doc_30974 = cljs.core.get.call(null,map__30921_30973__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30975 = cljs.core.get.call(null,map__30921_30973__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30971);

cljs.core.println.call(null," ",arglists_30975);

if(cljs.core.truth_(doc_30974)){
cljs.core.println.call(null," ",doc_30974);
} else {
}


var G__30976 = cljs.core.next.call(null,seq__30909_30964__$1);
var G__30977 = null;
var G__30978 = (0);
var G__30979 = (0);
seq__30909_30949 = G__30976;
chunk__30910_30950 = G__30977;
count__30911_30951 = G__30978;
i__30912_30952 = G__30979;
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

var seq__30923 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30924 = null;
var count__30925 = (0);
var i__30926 = (0);
while(true){
if((i__30926 < count__30925)){
var role = cljs.core._nth.call(null,chunk__30924,i__30926);
var temp__5457__auto___30980__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30980__$1)){
var spec_30981 = temp__5457__auto___30980__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30981));
} else {
}


var G__30982 = seq__30923;
var G__30983 = chunk__30924;
var G__30984 = count__30925;
var G__30985 = (i__30926 + (1));
seq__30923 = G__30982;
chunk__30924 = G__30983;
count__30925 = G__30984;
i__30926 = G__30985;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30923);
if(temp__5457__auto____$1){
var seq__30923__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30923__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30923__$1);
var G__30986 = cljs.core.chunk_rest.call(null,seq__30923__$1);
var G__30987 = c__4351__auto__;
var G__30988 = cljs.core.count.call(null,c__4351__auto__);
var G__30989 = (0);
seq__30923 = G__30986;
chunk__30924 = G__30987;
count__30925 = G__30988;
i__30926 = G__30989;
continue;
} else {
var role = cljs.core.first.call(null,seq__30923__$1);
var temp__5457__auto___30990__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30990__$2)){
var spec_30991 = temp__5457__auto___30990__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30991));
} else {
}


var G__30992 = cljs.core.next.call(null,seq__30923__$1);
var G__30993 = null;
var G__30994 = (0);
var G__30995 = (0);
seq__30923 = G__30992;
chunk__30924 = G__30993;
count__30925 = G__30994;
i__30926 = G__30995;
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

//# sourceMappingURL=repl.js.map?rel=1530911826982
