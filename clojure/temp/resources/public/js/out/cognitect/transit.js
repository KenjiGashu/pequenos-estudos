// Compiled by ClojureScript 1.7.122 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__24524_24528 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__24525_24529 = null;
var count__24526_24530 = (0);
var i__24527_24531 = (0);
while(true){
if((i__24527_24531 < count__24526_24530)){
var k_24532 = cljs.core._nth.call(null,chunk__24525_24529,i__24527_24531);
var v_24533 = (b[k_24532]);
(a[k_24532] = v_24533);

var G__24534 = seq__24524_24528;
var G__24535 = chunk__24525_24529;
var G__24536 = count__24526_24530;
var G__24537 = (i__24527_24531 + (1));
seq__24524_24528 = G__24534;
chunk__24525_24529 = G__24535;
count__24526_24530 = G__24536;
i__24527_24531 = G__24537;
continue;
} else {
var temp__4425__auto___24538 = cljs.core.seq.call(null,seq__24524_24528);
if(temp__4425__auto___24538){
var seq__24524_24539__$1 = temp__4425__auto___24538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24524_24539__$1)){
var c__17166__auto___24540 = cljs.core.chunk_first.call(null,seq__24524_24539__$1);
var G__24541 = cljs.core.chunk_rest.call(null,seq__24524_24539__$1);
var G__24542 = c__17166__auto___24540;
var G__24543 = cljs.core.count.call(null,c__17166__auto___24540);
var G__24544 = (0);
seq__24524_24528 = G__24541;
chunk__24525_24529 = G__24542;
count__24526_24530 = G__24543;
i__24527_24531 = G__24544;
continue;
} else {
var k_24545 = cljs.core.first.call(null,seq__24524_24539__$1);
var v_24546 = (b[k_24545]);
(a[k_24545] = v_24546);

var G__24547 = cljs.core.next.call(null,seq__24524_24539__$1);
var G__24548 = null;
var G__24549 = (0);
var G__24550 = (0);
seq__24524_24528 = G__24547;
chunk__24525_24529 = G__24548;
count__24526_24530 = G__24549;
i__24527_24531 = G__24550;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args24551 = [];
var len__17421__auto___24554 = arguments.length;
var i__17422__auto___24555 = (0);
while(true){
if((i__17422__auto___24555 < len__17421__auto___24554)){
args24551.push((arguments[i__17422__auto___24555]));

var G__24556 = (i__17422__auto___24555 + (1));
i__17422__auto___24555 = G__24556;
continue;
} else {
}
break;
}

var G__24553 = args24551.length;
switch (G__24553) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24551.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__24558 = (i + (2));
var G__24559 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__24558;
ret = G__24559;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24560_24564 = cljs.core.seq.call(null,v);
var chunk__24561_24565 = null;
var count__24562_24566 = (0);
var i__24563_24567 = (0);
while(true){
if((i__24563_24567 < count__24562_24566)){
var x_24568 = cljs.core._nth.call(null,chunk__24561_24565,i__24563_24567);
ret.push(x_24568);

var G__24569 = seq__24560_24564;
var G__24570 = chunk__24561_24565;
var G__24571 = count__24562_24566;
var G__24572 = (i__24563_24567 + (1));
seq__24560_24564 = G__24569;
chunk__24561_24565 = G__24570;
count__24562_24566 = G__24571;
i__24563_24567 = G__24572;
continue;
} else {
var temp__4425__auto___24573 = cljs.core.seq.call(null,seq__24560_24564);
if(temp__4425__auto___24573){
var seq__24560_24574__$1 = temp__4425__auto___24573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24560_24574__$1)){
var c__17166__auto___24575 = cljs.core.chunk_first.call(null,seq__24560_24574__$1);
var G__24576 = cljs.core.chunk_rest.call(null,seq__24560_24574__$1);
var G__24577 = c__17166__auto___24575;
var G__24578 = cljs.core.count.call(null,c__17166__auto___24575);
var G__24579 = (0);
seq__24560_24564 = G__24576;
chunk__24561_24565 = G__24577;
count__24562_24566 = G__24578;
i__24563_24567 = G__24579;
continue;
} else {
var x_24580 = cljs.core.first.call(null,seq__24560_24574__$1);
ret.push(x_24580);

var G__24581 = cljs.core.next.call(null,seq__24560_24574__$1);
var G__24582 = null;
var G__24583 = (0);
var G__24584 = (0);
seq__24560_24564 = G__24581;
chunk__24561_24565 = G__24582;
count__24562_24566 = G__24583;
i__24563_24567 = G__24584;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24585_24589 = cljs.core.seq.call(null,v);
var chunk__24586_24590 = null;
var count__24587_24591 = (0);
var i__24588_24592 = (0);
while(true){
if((i__24588_24592 < count__24587_24591)){
var x_24593 = cljs.core._nth.call(null,chunk__24586_24590,i__24588_24592);
ret.push(x_24593);

var G__24594 = seq__24585_24589;
var G__24595 = chunk__24586_24590;
var G__24596 = count__24587_24591;
var G__24597 = (i__24588_24592 + (1));
seq__24585_24589 = G__24594;
chunk__24586_24590 = G__24595;
count__24587_24591 = G__24596;
i__24588_24592 = G__24597;
continue;
} else {
var temp__4425__auto___24598 = cljs.core.seq.call(null,seq__24585_24589);
if(temp__4425__auto___24598){
var seq__24585_24599__$1 = temp__4425__auto___24598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24585_24599__$1)){
var c__17166__auto___24600 = cljs.core.chunk_first.call(null,seq__24585_24599__$1);
var G__24601 = cljs.core.chunk_rest.call(null,seq__24585_24599__$1);
var G__24602 = c__17166__auto___24600;
var G__24603 = cljs.core.count.call(null,c__17166__auto___24600);
var G__24604 = (0);
seq__24585_24589 = G__24601;
chunk__24586_24590 = G__24602;
count__24587_24591 = G__24603;
i__24588_24592 = G__24604;
continue;
} else {
var x_24605 = cljs.core.first.call(null,seq__24585_24599__$1);
ret.push(x_24605);

var G__24606 = cljs.core.next.call(null,seq__24585_24599__$1);
var G__24607 = null;
var G__24608 = (0);
var G__24609 = (0);
seq__24585_24589 = G__24606;
chunk__24586_24590 = G__24607;
count__24587_24591 = G__24608;
i__24588_24592 = G__24609;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24610_24614 = cljs.core.seq.call(null,v);
var chunk__24611_24615 = null;
var count__24612_24616 = (0);
var i__24613_24617 = (0);
while(true){
if((i__24613_24617 < count__24612_24616)){
var x_24618 = cljs.core._nth.call(null,chunk__24611_24615,i__24613_24617);
ret.push(x_24618);

var G__24619 = seq__24610_24614;
var G__24620 = chunk__24611_24615;
var G__24621 = count__24612_24616;
var G__24622 = (i__24613_24617 + (1));
seq__24610_24614 = G__24619;
chunk__24611_24615 = G__24620;
count__24612_24616 = G__24621;
i__24613_24617 = G__24622;
continue;
} else {
var temp__4425__auto___24623 = cljs.core.seq.call(null,seq__24610_24614);
if(temp__4425__auto___24623){
var seq__24610_24624__$1 = temp__4425__auto___24623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24610_24624__$1)){
var c__17166__auto___24625 = cljs.core.chunk_first.call(null,seq__24610_24624__$1);
var G__24626 = cljs.core.chunk_rest.call(null,seq__24610_24624__$1);
var G__24627 = c__17166__auto___24625;
var G__24628 = cljs.core.count.call(null,c__17166__auto___24625);
var G__24629 = (0);
seq__24610_24614 = G__24626;
chunk__24611_24615 = G__24627;
count__24612_24616 = G__24628;
i__24613_24617 = G__24629;
continue;
} else {
var x_24630 = cljs.core.first.call(null,seq__24610_24624__$1);
ret.push(x_24630);

var G__24631 = cljs.core.next.call(null,seq__24610_24624__$1);
var G__24632 = null;
var G__24633 = (0);
var G__24634 = (0);
seq__24610_24614 = G__24631;
chunk__24611_24615 = G__24632;
count__24612_24616 = G__24633;
i__24613_24617 = G__24634;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args24635 = [];
var len__17421__auto___24646 = arguments.length;
var i__17422__auto___24647 = (0);
while(true){
if((i__17422__auto___24647 < len__17421__auto___24646)){
args24635.push((arguments[i__17422__auto___24647]));

var G__24648 = (i__17422__auto___24647 + (1));
i__17422__auto___24647 = G__24648;
continue;
} else {
}
break;
}

var G__24637 = args24635.length;
switch (G__24637) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24635.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__24638 = obj;
G__24638.push(kfn.call(null,k),vfn.call(null,v));

return G__24638;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x24639 = cljs.core.clone.call(null,handlers);
x24639.forEach = ((function (x24639,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__24640 = cljs.core.seq.call(null,coll);
var chunk__24641 = null;
var count__24642 = (0);
var i__24643 = (0);
while(true){
if((i__24643 < count__24642)){
var vec__24644 = cljs.core._nth.call(null,chunk__24641,i__24643);
var k = cljs.core.nth.call(null,vec__24644,(0),null);
var v = cljs.core.nth.call(null,vec__24644,(1),null);
f.call(null,v,k);

var G__24650 = seq__24640;
var G__24651 = chunk__24641;
var G__24652 = count__24642;
var G__24653 = (i__24643 + (1));
seq__24640 = G__24650;
chunk__24641 = G__24651;
count__24642 = G__24652;
i__24643 = G__24653;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24640);
if(temp__4425__auto__){
var seq__24640__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24640__$1)){
var c__17166__auto__ = cljs.core.chunk_first.call(null,seq__24640__$1);
var G__24654 = cljs.core.chunk_rest.call(null,seq__24640__$1);
var G__24655 = c__17166__auto__;
var G__24656 = cljs.core.count.call(null,c__17166__auto__);
var G__24657 = (0);
seq__24640 = G__24654;
chunk__24641 = G__24655;
count__24642 = G__24656;
i__24643 = G__24657;
continue;
} else {
var vec__24645 = cljs.core.first.call(null,seq__24640__$1);
var k = cljs.core.nth.call(null,vec__24645,(0),null);
var v = cljs.core.nth.call(null,vec__24645,(1),null);
f.call(null,v,k);

var G__24658 = cljs.core.next.call(null,seq__24640__$1);
var G__24659 = null;
var G__24660 = (0);
var G__24661 = (0);
seq__24640 = G__24658;
chunk__24641 = G__24659;
count__24642 = G__24660;
i__24643 = G__24661;
continue;
}
} else {
return null;
}
}
break;
}
});})(x24639,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x24639;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args24662 = [];
var len__17421__auto___24668 = arguments.length;
var i__17422__auto___24669 = (0);
while(true){
if((i__17422__auto___24669 < len__17421__auto___24668)){
args24662.push((arguments[i__17422__auto___24669]));

var G__24670 = (i__17422__auto___24669 + (1));
i__17422__auto___24669 = G__24670;
continue;
} else {
}
break;
}

var G__24664 = args24662.length;
switch (G__24664) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24662.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit24665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit24665 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta24666){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta24666 = meta24666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit24665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24667,meta24666__$1){
var self__ = this;
var _24667__$1 = this;
return (new cognitect.transit.t_cognitect$transit24665(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta24666__$1));
});

cognitect.transit.t_cognitect$transit24665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24667){
var self__ = this;
var _24667__$1 = this;
return self__.meta24666;
});

cognitect.transit.t_cognitect$transit24665.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit24665.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit24665.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit24665.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit24665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta24666","meta24666",-475080589,null)], null);
});

cognitect.transit.t_cognitect$transit24665.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit24665.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit24665";

cognitect.transit.t_cognitect$transit24665.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cognitect.transit/t_cognitect$transit24665");
});

cognitect.transit.__GT_t_cognitect$transit24665 = (function cognitect$transit$__GT_t_cognitect$transit24665(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24666){
return (new cognitect.transit.t_cognitect$transit24665(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24666));
});

}

return (new cognitect.transit.t_cognitect$transit24665(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16363__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map