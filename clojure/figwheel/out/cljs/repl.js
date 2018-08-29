// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30131){
var map__30132 = p__30131;
var map__30132__$1 = ((((!((map__30132 == null)))?(((((map__30132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30132):map__30132);
var m = map__30132__$1;
var n = cljs.core.get.call(null,map__30132__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30132__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30134_30156 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30135_30157 = null;
var count__30136_30158 = (0);
var i__30137_30159 = (0);
while(true){
if((i__30137_30159 < count__30136_30158)){
var f_30160 = cljs.core._nth.call(null,chunk__30135_30157,i__30137_30159);
cljs.core.println.call(null,"  ",f_30160);


var G__30161 = seq__30134_30156;
var G__30162 = chunk__30135_30157;
var G__30163 = count__30136_30158;
var G__30164 = (i__30137_30159 + (1));
seq__30134_30156 = G__30161;
chunk__30135_30157 = G__30162;
count__30136_30158 = G__30163;
i__30137_30159 = G__30164;
continue;
} else {
var temp__5457__auto___30165 = cljs.core.seq.call(null,seq__30134_30156);
if(temp__5457__auto___30165){
var seq__30134_30166__$1 = temp__5457__auto___30165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30134_30166__$1)){
var c__4351__auto___30167 = cljs.core.chunk_first.call(null,seq__30134_30166__$1);
var G__30168 = cljs.core.chunk_rest.call(null,seq__30134_30166__$1);
var G__30169 = c__4351__auto___30167;
var G__30170 = cljs.core.count.call(null,c__4351__auto___30167);
var G__30171 = (0);
seq__30134_30156 = G__30168;
chunk__30135_30157 = G__30169;
count__30136_30158 = G__30170;
i__30137_30159 = G__30171;
continue;
} else {
var f_30172 = cljs.core.first.call(null,seq__30134_30166__$1);
cljs.core.println.call(null,"  ",f_30172);


var G__30173 = cljs.core.next.call(null,seq__30134_30166__$1);
var G__30174 = null;
var G__30175 = (0);
var G__30176 = (0);
seq__30134_30156 = G__30173;
chunk__30135_30157 = G__30174;
count__30136_30158 = G__30175;
i__30137_30159 = G__30176;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30177 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30177);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30177)))?cljs.core.second.call(null,arglists_30177):arglists_30177));
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
var seq__30138_30178 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30139_30179 = null;
var count__30140_30180 = (0);
var i__30141_30181 = (0);
while(true){
if((i__30141_30181 < count__30140_30180)){
var vec__30142_30182 = cljs.core._nth.call(null,chunk__30139_30179,i__30141_30181);
var name_30183 = cljs.core.nth.call(null,vec__30142_30182,(0),null);
var map__30145_30184 = cljs.core.nth.call(null,vec__30142_30182,(1),null);
var map__30145_30185__$1 = ((((!((map__30145_30184 == null)))?(((((map__30145_30184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30145_30184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30145_30184):map__30145_30184);
var doc_30186 = cljs.core.get.call(null,map__30145_30185__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30187 = cljs.core.get.call(null,map__30145_30185__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30183);

cljs.core.println.call(null," ",arglists_30187);

if(cljs.core.truth_(doc_30186)){
cljs.core.println.call(null," ",doc_30186);
} else {
}


var G__30188 = seq__30138_30178;
var G__30189 = chunk__30139_30179;
var G__30190 = count__30140_30180;
var G__30191 = (i__30141_30181 + (1));
seq__30138_30178 = G__30188;
chunk__30139_30179 = G__30189;
count__30140_30180 = G__30190;
i__30141_30181 = G__30191;
continue;
} else {
var temp__5457__auto___30192 = cljs.core.seq.call(null,seq__30138_30178);
if(temp__5457__auto___30192){
var seq__30138_30193__$1 = temp__5457__auto___30192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30138_30193__$1)){
var c__4351__auto___30194 = cljs.core.chunk_first.call(null,seq__30138_30193__$1);
var G__30195 = cljs.core.chunk_rest.call(null,seq__30138_30193__$1);
var G__30196 = c__4351__auto___30194;
var G__30197 = cljs.core.count.call(null,c__4351__auto___30194);
var G__30198 = (0);
seq__30138_30178 = G__30195;
chunk__30139_30179 = G__30196;
count__30140_30180 = G__30197;
i__30141_30181 = G__30198;
continue;
} else {
var vec__30147_30199 = cljs.core.first.call(null,seq__30138_30193__$1);
var name_30200 = cljs.core.nth.call(null,vec__30147_30199,(0),null);
var map__30150_30201 = cljs.core.nth.call(null,vec__30147_30199,(1),null);
var map__30150_30202__$1 = ((((!((map__30150_30201 == null)))?(((((map__30150_30201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30150_30201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30150_30201):map__30150_30201);
var doc_30203 = cljs.core.get.call(null,map__30150_30202__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30204 = cljs.core.get.call(null,map__30150_30202__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30200);

cljs.core.println.call(null," ",arglists_30204);

if(cljs.core.truth_(doc_30203)){
cljs.core.println.call(null," ",doc_30203);
} else {
}


var G__30205 = cljs.core.next.call(null,seq__30138_30193__$1);
var G__30206 = null;
var G__30207 = (0);
var G__30208 = (0);
seq__30138_30178 = G__30205;
chunk__30139_30179 = G__30206;
count__30140_30180 = G__30207;
i__30141_30181 = G__30208;
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

var seq__30152 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30153 = null;
var count__30154 = (0);
var i__30155 = (0);
while(true){
if((i__30155 < count__30154)){
var role = cljs.core._nth.call(null,chunk__30153,i__30155);
var temp__5457__auto___30209__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30209__$1)){
var spec_30210 = temp__5457__auto___30209__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30210));
} else {
}


var G__30211 = seq__30152;
var G__30212 = chunk__30153;
var G__30213 = count__30154;
var G__30214 = (i__30155 + (1));
seq__30152 = G__30211;
chunk__30153 = G__30212;
count__30154 = G__30213;
i__30155 = G__30214;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30152);
if(temp__5457__auto____$1){
var seq__30152__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30152__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30152__$1);
var G__30215 = cljs.core.chunk_rest.call(null,seq__30152__$1);
var G__30216 = c__4351__auto__;
var G__30217 = cljs.core.count.call(null,c__4351__auto__);
var G__30218 = (0);
seq__30152 = G__30215;
chunk__30153 = G__30216;
count__30154 = G__30217;
i__30155 = G__30218;
continue;
} else {
var role = cljs.core.first.call(null,seq__30152__$1);
var temp__5457__auto___30219__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30219__$2)){
var spec_30220 = temp__5457__auto___30219__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30220));
} else {
}


var G__30221 = cljs.core.next.call(null,seq__30152__$1);
var G__30222 = null;
var G__30223 = (0);
var G__30224 = (0);
seq__30152 = G__30221;
chunk__30153 = G__30222;
count__30154 = G__30223;
i__30155 = G__30224;
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

//# sourceMappingURL=repl.js.map?rel=1530909575491
