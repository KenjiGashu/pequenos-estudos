// Compiled by ClojureScript 1.10.339 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23596__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23593 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23594 = cljs.core.seq.call(null,vec__23593);
var first__23595 = cljs.core.first.call(null,seq__23594);
var seq__23594__$1 = cljs.core.next.call(null,seq__23594);
var tag = first__23595;
var body = seq__23594__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23597__i = 0, G__23597__a = new Array(arguments.length -  0);
while (G__23597__i < G__23597__a.length) {G__23597__a[G__23597__i] = arguments[G__23597__i + 0]; ++G__23597__i;}
  args = new cljs.core.IndexedSeq(G__23597__a,0,null);
} 
return G__23596__delegate.call(this,args);};
G__23596.cljs$lang$maxFixedArity = 0;
G__23596.cljs$lang$applyTo = (function (arglist__23598){
var args = cljs.core.seq(arglist__23598);
return G__23596__delegate(args);
});
G__23596.cljs$core$IFn$_invoke$arity$variadic = G__23596__delegate;
return G__23596;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__23599(s__23600){
return (new cljs.core.LazySeq(null,(function (){
var s__23600__$1 = s__23600;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23600__$1);
if(temp__5457__auto__){
var s__23600__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23600__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__23600__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__23602 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__23601 = (0);
while(true){
if((i__23601 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__23601);
cljs.core.chunk_append.call(null,b__23602,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23603 = (i__23601 + (1));
i__23601 = G__23603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23602),sablono$core$update_arglists_$_iter__23599.call(null,cljs.core.chunk_rest.call(null,s__23600__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23602),null);
}
} else {
var args = cljs.core.first.call(null,s__23600__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23599.call(null,cljs.core.rest.call(null,s__23600__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23609 = arguments.length;
var i__4532__auto___23610 = (0);
while(true){
if((i__4532__auto___23610 < len__4531__auto___23609)){
args__4534__auto__.push((arguments[i__4532__auto___23610]));

var G__23611 = (i__4532__auto___23610 + (1));
i__4532__auto___23610 = G__23611;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__23605(s__23606){
return (new cljs.core.LazySeq(null,(function (){
var s__23606__$1 = s__23606;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23606__$1);
if(temp__5457__auto__){
var s__23606__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23606__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__23606__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__23608 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__23607 = (0);
while(true){
if((i__23607 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__23607);
cljs.core.chunk_append.call(null,b__23608,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23612 = (i__23607 + (1));
i__23607 = G__23612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23608),sablono$core$iter__23605.call(null,cljs.core.chunk_rest.call(null,s__23606__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23608),null);
}
} else {
var style = cljs.core.first.call(null,s__23606__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23605.call(null,cljs.core.rest.call(null,s__23606__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq23604){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23604));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23613 = (function sablono$core$link_to23613(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23616 = arguments.length;
var i__4532__auto___23617 = (0);
while(true){
if((i__4532__auto___23617 < len__4531__auto___23616)){
args__4534__auto__.push((arguments[i__4532__auto___23617]));

var G__23618 = (i__4532__auto___23617 + (1));
i__4532__auto___23617 = G__23618;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23613.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to23613.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23613.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to23613.cljs$lang$applyTo = (function (seq23614){
var G__23615 = cljs.core.first.call(null,seq23614);
var seq23614__$1 = cljs.core.next.call(null,seq23614);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23615,seq23614__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23613);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23619 = (function sablono$core$mail_to23619(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23626 = arguments.length;
var i__4532__auto___23627 = (0);
while(true){
if((i__4532__auto___23627 < len__4531__auto___23626)){
args__4534__auto__.push((arguments[i__4532__auto___23627]));

var G__23628 = (i__4532__auto___23627 + (1));
i__4532__auto___23627 = G__23628;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23619.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to23619.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23622){
var vec__23623 = p__23622;
var content = cljs.core.nth.call(null,vec__23623,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23619.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to23619.cljs$lang$applyTo = (function (seq23620){
var G__23621 = cljs.core.first.call(null,seq23620);
var seq23620__$1 = cljs.core.next.call(null,seq23620);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23621,seq23620__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23619);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23629 = (function sablono$core$unordered_list23629(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list23629_$_iter__23630(s__23631){
return (new cljs.core.LazySeq(null,(function (){
var s__23631__$1 = s__23631;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23631__$1);
if(temp__5457__auto__){
var s__23631__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23631__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__23631__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__23633 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__23632 = (0);
while(true){
if((i__23632 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__23632);
cljs.core.chunk_append.call(null,b__23633,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23634 = (i__23632 + (1));
i__23632 = G__23634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23633),sablono$core$unordered_list23629_$_iter__23630.call(null,cljs.core.chunk_rest.call(null,s__23631__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23633),null);
}
} else {
var x = cljs.core.first.call(null,s__23631__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23629_$_iter__23630.call(null,cljs.core.rest.call(null,s__23631__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23629);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23635 = (function sablono$core$ordered_list23635(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list23635_$_iter__23636(s__23637){
return (new cljs.core.LazySeq(null,(function (){
var s__23637__$1 = s__23637;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23637__$1);
if(temp__5457__auto__){
var s__23637__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23637__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__23637__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__23639 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__23638 = (0);
while(true){
if((i__23638 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__23638);
cljs.core.chunk_append.call(null,b__23639,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23640 = (i__23638 + (1));
i__23638 = G__23640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23639),sablono$core$ordered_list23635_$_iter__23636.call(null,cljs.core.chunk_rest.call(null,s__23637__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23639),null);
}
} else {
var x = cljs.core.first.call(null,s__23637__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23635_$_iter__23636.call(null,cljs.core.rest.call(null,s__23637__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23635);
/**
 * Create an image element.
 */
sablono.core.image23641 = (function sablono$core$image23641(var_args){
var G__23643 = arguments.length;
switch (G__23643) {
case 1:
return sablono.core.image23641.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23641.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image23641.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23641.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23641.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23641);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23645_SHARP_,p2__23646_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23645_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23646_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23647_SHARP_,p2__23648_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23647_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23648_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__23650 = arguments.length;
switch (G__23650) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field23652 = (function sablono$core$color_field23652(var_args){
var G__23654 = arguments.length;
switch (G__23654) {
case 1:
return sablono.core.color_field23652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field23652.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23583__auto__);
});

sablono.core.color_field23652.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.color_field23652.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23652);

/**
 * Creates a date input field.
 */
sablono.core.date_field23655 = (function sablono$core$date_field23655(var_args){
var G__23657 = arguments.length;
switch (G__23657) {
case 1:
return sablono.core.date_field23655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field23655.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23583__auto__);
});

sablono.core.date_field23655.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.date_field23655.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23655);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23658 = (function sablono$core$datetime_field23658(var_args){
var G__23660 = arguments.length;
switch (G__23660) {
case 1:
return sablono.core.datetime_field23658.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23658.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field23658.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23583__auto__);
});

sablono.core.datetime_field23658.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.datetime_field23658.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23658);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23661 = (function sablono$core$datetime_local_field23661(var_args){
var G__23663 = arguments.length;
switch (G__23663) {
case 1:
return sablono.core.datetime_local_field23661.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23661.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field23661.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23583__auto__);
});

sablono.core.datetime_local_field23661.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.datetime_local_field23661.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23661);

/**
 * Creates a email input field.
 */
sablono.core.email_field23664 = (function sablono$core$email_field23664(var_args){
var G__23666 = arguments.length;
switch (G__23666) {
case 1:
return sablono.core.email_field23664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field23664.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23583__auto__);
});

sablono.core.email_field23664.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.email_field23664.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23664);

/**
 * Creates a file input field.
 */
sablono.core.file_field23667 = (function sablono$core$file_field23667(var_args){
var G__23669 = arguments.length;
switch (G__23669) {
case 1:
return sablono.core.file_field23667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field23667.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23583__auto__);
});

sablono.core.file_field23667.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.file_field23667.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23667);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23670 = (function sablono$core$hidden_field23670(var_args){
var G__23672 = arguments.length;
switch (G__23672) {
case 1:
return sablono.core.hidden_field23670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field23670.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23583__auto__);
});

sablono.core.hidden_field23670.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.hidden_field23670.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23670);

/**
 * Creates a month input field.
 */
sablono.core.month_field23673 = (function sablono$core$month_field23673(var_args){
var G__23675 = arguments.length;
switch (G__23675) {
case 1:
return sablono.core.month_field23673.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23673.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field23673.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23583__auto__);
});

sablono.core.month_field23673.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.month_field23673.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23673);

/**
 * Creates a number input field.
 */
sablono.core.number_field23676 = (function sablono$core$number_field23676(var_args){
var G__23678 = arguments.length;
switch (G__23678) {
case 1:
return sablono.core.number_field23676.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23676.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field23676.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23583__auto__);
});

sablono.core.number_field23676.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.number_field23676.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23676);

/**
 * Creates a password input field.
 */
sablono.core.password_field23679 = (function sablono$core$password_field23679(var_args){
var G__23681 = arguments.length;
switch (G__23681) {
case 1:
return sablono.core.password_field23679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field23679.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23583__auto__);
});

sablono.core.password_field23679.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.password_field23679.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23679);

/**
 * Creates a range input field.
 */
sablono.core.range_field23682 = (function sablono$core$range_field23682(var_args){
var G__23684 = arguments.length;
switch (G__23684) {
case 1:
return sablono.core.range_field23682.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23682.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field23682.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23583__auto__);
});

sablono.core.range_field23682.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.range_field23682.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23682);

/**
 * Creates a search input field.
 */
sablono.core.search_field23685 = (function sablono$core$search_field23685(var_args){
var G__23687 = arguments.length;
switch (G__23687) {
case 1:
return sablono.core.search_field23685.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23685.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field23685.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23583__auto__);
});

sablono.core.search_field23685.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.search_field23685.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23685);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23688 = (function sablono$core$tel_field23688(var_args){
var G__23690 = arguments.length;
switch (G__23690) {
case 1:
return sablono.core.tel_field23688.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23688.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field23688.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23583__auto__);
});

sablono.core.tel_field23688.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.tel_field23688.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23688);

/**
 * Creates a text input field.
 */
sablono.core.text_field23691 = (function sablono$core$text_field23691(var_args){
var G__23693 = arguments.length;
switch (G__23693) {
case 1:
return sablono.core.text_field23691.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23691.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field23691.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23583__auto__);
});

sablono.core.text_field23691.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.text_field23691.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23691);

/**
 * Creates a time input field.
 */
sablono.core.time_field23694 = (function sablono$core$time_field23694(var_args){
var G__23696 = arguments.length;
switch (G__23696) {
case 1:
return sablono.core.time_field23694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field23694.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23583__auto__);
});

sablono.core.time_field23694.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.time_field23694.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23694);

/**
 * Creates a url input field.
 */
sablono.core.url_field23697 = (function sablono$core$url_field23697(var_args){
var G__23699 = arguments.length;
switch (G__23699) {
case 1:
return sablono.core.url_field23697.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23697.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field23697.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23583__auto__);
});

sablono.core.url_field23697.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.url_field23697.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23697);

/**
 * Creates a week input field.
 */
sablono.core.week_field23700 = (function sablono$core$week_field23700(var_args){
var G__23702 = arguments.length;
switch (G__23702) {
case 1:
return sablono.core.week_field23700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field23700.cljs$core$IFn$_invoke$arity$1 = (function (name__23583__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23583__auto__);
});

sablono.core.week_field23700.cljs$core$IFn$_invoke$arity$2 = (function (name__23583__auto__,value__23584__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23583__auto__,value__23584__auto__);
});

sablono.core.week_field23700.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23700);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23720 = (function sablono$core$check_box23720(var_args){
var G__23722 = arguments.length;
switch (G__23722) {
case 1:
return sablono.core.check_box23720.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23720.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23720.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box23720.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box23720.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23720.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23720.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23720);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23724 = (function sablono$core$radio_button23724(var_args){
var G__23726 = arguments.length;
switch (G__23726) {
case 1:
return sablono.core.radio_button23724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23724.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button23724.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button23724.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23724.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23724.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23724);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23728 = (function sablono$core$select_options23728(coll){
var iter__4324__auto__ = (function sablono$core$select_options23728_$_iter__23729(s__23730){
return (new cljs.core.LazySeq(null,(function (){
var s__23730__$1 = s__23730;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23730__$1);
if(temp__5457__auto__){
var s__23730__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23730__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__23730__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__23732 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__23731 = (0);
while(true){
if((i__23731 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__23731);
cljs.core.chunk_append.call(null,b__23732,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23733 = x;
var text = cljs.core.nth.call(null,vec__23733,(0),null);
var val = cljs.core.nth.call(null,vec__23733,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23733,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23728.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__23739 = (i__23731 + (1));
i__23731 = G__23739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23732),sablono$core$select_options23728_$_iter__23729.call(null,cljs.core.chunk_rest.call(null,s__23730__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23732),null);
}
} else {
var x = cljs.core.first.call(null,s__23730__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23736 = x;
var text = cljs.core.nth.call(null,vec__23736,(0),null);
var val = cljs.core.nth.call(null,vec__23736,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23736,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23728.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options23728_$_iter__23729.call(null,cljs.core.rest.call(null,s__23730__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23728);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23740 = (function sablono$core$drop_down23740(var_args){
var G__23742 = arguments.length;
switch (G__23742) {
case 2:
return sablono.core.drop_down23740.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23740.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down23740.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23740.call(null,name,options,null);
});

sablono.core.drop_down23740.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down23740.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23740);
/**
 * Creates a text area element.
 */
sablono.core.text_area23744 = (function sablono$core$text_area23744(var_args){
var G__23746 = arguments.length;
switch (G__23746) {
case 1:
return sablono.core.text_area23744.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23744.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area23744.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area23744.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area23744.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23744);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23748 = (function sablono$core$label23748(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23748);
/**
 * Creates a submit button.
 */
sablono.core.submit_button23749 = (function sablono$core$submit_button23749(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23749);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button23750 = (function sablono$core$reset_button23750(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23750);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to23751 = (function sablono$core$form_to23751(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23758 = arguments.length;
var i__4532__auto___23759 = (0);
while(true){
if((i__4532__auto___23759 < len__4531__auto___23758)){
args__4534__auto__.push((arguments[i__4532__auto___23759]));

var G__23760 = (i__4532__auto___23759 + (1));
i__4532__auto___23759 = G__23760;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to23751.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to23751.cljs$core$IFn$_invoke$arity$variadic = (function (p__23754,body){
var vec__23755 = p__23754;
var method = cljs.core.nth.call(null,vec__23755,(0),null);
var action = cljs.core.nth.call(null,vec__23755,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to23751.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to23751.cljs$lang$applyTo = (function (seq23752){
var G__23753 = cljs.core.first.call(null,seq23752);
var seq23752__$1 = cljs.core.next.call(null,seq23752);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23753,seq23752__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23751);

//# sourceMappingURL=core.js.map?rel=1530909567824
