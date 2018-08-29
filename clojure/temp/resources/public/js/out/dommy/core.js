// Compiled by ClojureScript 1.7.122 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__16363__auto__ = elem.textContent;
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args24713 = [];
var len__17421__auto___24716 = arguments.length;
var i__17422__auto___24717 = (0);
while(true){
if((i__17422__auto___24717 < len__17421__auto___24716)){
args24713.push((arguments[i__17422__auto___24717]));

var G__24718 = (i__17422__auto___24717 + (1));
i__17422__auto___24717 = G__24718;
continue;
} else {
}
break;
}

var G__24715 = args24713.length;
switch (G__24715) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24713.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto__ = elem.classList;
if(cljs.core.truth_(temp__4423__auto__)){
var class_list = temp__4423__auto__;
return class_list.contains(c__$1);
} else {
var temp__4425__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4425__auto__)){
var class_name = temp__4425__auto__;
var temp__4425__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4425__auto____$1)){
var i = temp__4425__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args24720 = [];
var len__17421__auto___24723 = arguments.length;
var i__17422__auto___24724 = (0);
while(true){
if((i__17422__auto___24724 < len__17421__auto___24723)){
args24720.push((arguments[i__17422__auto___24724]));

var G__24725 = (i__17422__auto___24724 + (1));
i__17422__auto___24724 = G__24725;
continue;
} else {
}
break;
}

var G__24722 = args24720.length;
switch (G__24722) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24720.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args24728 = [];
var len__17421__auto___24731 = arguments.length;
var i__17422__auto___24732 = (0);
while(true){
if((i__17422__auto___24732 < len__17421__auto___24731)){
args24728.push((arguments[i__17422__auto___24732]));

var G__24733 = (i__17422__auto___24732 + (1));
i__17422__auto___24732 = G__24733;
continue;
} else {
}
break;
}

var G__24730 = args24728.length;
switch (G__24730) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24728.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__24727_SHARP_){
return !((p1__24727_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__17428__auto__ = [];
var len__17421__auto___24743 = arguments.length;
var i__17422__auto___24744 = (0);
while(true){
if((i__17422__auto___24744 < len__17421__auto___24743)){
args__17428__auto__.push((arguments[i__17422__auto___24744]));

var G__24745 = (i__17422__auto___24744 + (1));
i__17422__auto___24744 = G__24745;
continue;
} else {
}
break;
}

var argseq__17429__auto__ = ((((1) < args__17428__auto__.length))?(new cljs.core.IndexedSeq(args__17428__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17429__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__24737_24746 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__24738_24747 = null;
var count__24739_24748 = (0);
var i__24740_24749 = (0);
while(true){
if((i__24740_24749 < count__24739_24748)){
var vec__24741_24750 = cljs.core._nth.call(null,chunk__24738_24747,i__24740_24749);
var k_24751 = cljs.core.nth.call(null,vec__24741_24750,(0),null);
var v_24752 = cljs.core.nth.call(null,vec__24741_24750,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_24751),v_24752);

var G__24753 = seq__24737_24746;
var G__24754 = chunk__24738_24747;
var G__24755 = count__24739_24748;
var G__24756 = (i__24740_24749 + (1));
seq__24737_24746 = G__24753;
chunk__24738_24747 = G__24754;
count__24739_24748 = G__24755;
i__24740_24749 = G__24756;
continue;
} else {
var temp__4425__auto___24757 = cljs.core.seq.call(null,seq__24737_24746);
if(temp__4425__auto___24757){
var seq__24737_24758__$1 = temp__4425__auto___24757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24737_24758__$1)){
var c__17166__auto___24759 = cljs.core.chunk_first.call(null,seq__24737_24758__$1);
var G__24760 = cljs.core.chunk_rest.call(null,seq__24737_24758__$1);
var G__24761 = c__17166__auto___24759;
var G__24762 = cljs.core.count.call(null,c__17166__auto___24759);
var G__24763 = (0);
seq__24737_24746 = G__24760;
chunk__24738_24747 = G__24761;
count__24739_24748 = G__24762;
i__24740_24749 = G__24763;
continue;
} else {
var vec__24742_24764 = cljs.core.first.call(null,seq__24737_24758__$1);
var k_24765 = cljs.core.nth.call(null,vec__24742_24764,(0),null);
var v_24766 = cljs.core.nth.call(null,vec__24742_24764,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_24765),v_24766);

var G__24767 = cljs.core.next.call(null,seq__24737_24758__$1);
var G__24768 = null;
var G__24769 = (0);
var G__24770 = (0);
seq__24737_24746 = G__24767;
chunk__24738_24747 = G__24768;
count__24739_24748 = G__24769;
i__24740_24749 = G__24770;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq24735){
var G__24736 = cljs.core.first.call(null,seq24735);
var seq24735__$1 = cljs.core.next.call(null,seq24735);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24736,seq24735__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__17428__auto__ = [];
var len__17421__auto___24777 = arguments.length;
var i__17422__auto___24778 = (0);
while(true){
if((i__17422__auto___24778 < len__17421__auto___24777)){
args__17428__auto__.push((arguments[i__17422__auto___24778]));

var G__24779 = (i__17422__auto___24778 + (1));
i__17422__auto___24778 = G__24779;
continue;
} else {
}
break;
}

var argseq__17429__auto__ = ((((1) < args__17428__auto__.length))?(new cljs.core.IndexedSeq(args__17428__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17429__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__24773_24780 = cljs.core.seq.call(null,keywords);
var chunk__24774_24781 = null;
var count__24775_24782 = (0);
var i__24776_24783 = (0);
while(true){
if((i__24776_24783 < count__24775_24782)){
var kw_24784 = cljs.core._nth.call(null,chunk__24774_24781,i__24776_24783);
style.removeProperty(dommy.utils.as_str.call(null,kw_24784));

var G__24785 = seq__24773_24780;
var G__24786 = chunk__24774_24781;
var G__24787 = count__24775_24782;
var G__24788 = (i__24776_24783 + (1));
seq__24773_24780 = G__24785;
chunk__24774_24781 = G__24786;
count__24775_24782 = G__24787;
i__24776_24783 = G__24788;
continue;
} else {
var temp__4425__auto___24789 = cljs.core.seq.call(null,seq__24773_24780);
if(temp__4425__auto___24789){
var seq__24773_24790__$1 = temp__4425__auto___24789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24773_24790__$1)){
var c__17166__auto___24791 = cljs.core.chunk_first.call(null,seq__24773_24790__$1);
var G__24792 = cljs.core.chunk_rest.call(null,seq__24773_24790__$1);
var G__24793 = c__17166__auto___24791;
var G__24794 = cljs.core.count.call(null,c__17166__auto___24791);
var G__24795 = (0);
seq__24773_24780 = G__24792;
chunk__24774_24781 = G__24793;
count__24775_24782 = G__24794;
i__24776_24783 = G__24795;
continue;
} else {
var kw_24796 = cljs.core.first.call(null,seq__24773_24790__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_24796));

var G__24797 = cljs.core.next.call(null,seq__24773_24790__$1);
var G__24798 = null;
var G__24799 = (0);
var G__24800 = (0);
seq__24773_24780 = G__24797;
chunk__24774_24781 = G__24798;
count__24775_24782 = G__24799;
i__24776_24783 = G__24800;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq24771){
var G__24772 = cljs.core.first.call(null,seq24771);
var seq24771__$1 = cljs.core.next.call(null,seq24771);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24772,seq24771__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__17428__auto__ = [];
var len__17421__auto___24809 = arguments.length;
var i__17422__auto___24810 = (0);
while(true){
if((i__17422__auto___24810 < len__17421__auto___24809)){
args__17428__auto__.push((arguments[i__17422__auto___24810]));

var G__24811 = (i__17422__auto___24810 + (1));
i__17422__auto___24810 = G__24811;
continue;
} else {
}
break;
}

var argseq__17429__auto__ = ((((1) < args__17428__auto__.length))?(new cljs.core.IndexedSeq(args__17428__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17429__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__24803_24812 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__24804_24813 = null;
var count__24805_24814 = (0);
var i__24806_24815 = (0);
while(true){
if((i__24806_24815 < count__24805_24814)){
var vec__24807_24816 = cljs.core._nth.call(null,chunk__24804_24813,i__24806_24815);
var k_24817 = cljs.core.nth.call(null,vec__24807_24816,(0),null);
var v_24818 = cljs.core.nth.call(null,vec__24807_24816,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_24817,[cljs.core.str(v_24818),cljs.core.str("px")].join(''));

var G__24819 = seq__24803_24812;
var G__24820 = chunk__24804_24813;
var G__24821 = count__24805_24814;
var G__24822 = (i__24806_24815 + (1));
seq__24803_24812 = G__24819;
chunk__24804_24813 = G__24820;
count__24805_24814 = G__24821;
i__24806_24815 = G__24822;
continue;
} else {
var temp__4425__auto___24823 = cljs.core.seq.call(null,seq__24803_24812);
if(temp__4425__auto___24823){
var seq__24803_24824__$1 = temp__4425__auto___24823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24803_24824__$1)){
var c__17166__auto___24825 = cljs.core.chunk_first.call(null,seq__24803_24824__$1);
var G__24826 = cljs.core.chunk_rest.call(null,seq__24803_24824__$1);
var G__24827 = c__17166__auto___24825;
var G__24828 = cljs.core.count.call(null,c__17166__auto___24825);
var G__24829 = (0);
seq__24803_24812 = G__24826;
chunk__24804_24813 = G__24827;
count__24805_24814 = G__24828;
i__24806_24815 = G__24829;
continue;
} else {
var vec__24808_24830 = cljs.core.first.call(null,seq__24803_24824__$1);
var k_24831 = cljs.core.nth.call(null,vec__24808_24830,(0),null);
var v_24832 = cljs.core.nth.call(null,vec__24808_24830,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_24831,[cljs.core.str(v_24832),cljs.core.str("px")].join(''));

var G__24833 = cljs.core.next.call(null,seq__24803_24824__$1);
var G__24834 = null;
var G__24835 = (0);
var G__24836 = (0);
seq__24803_24812 = G__24833;
chunk__24804_24813 = G__24834;
count__24805_24814 = G__24835;
i__24806_24815 = G__24836;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq24801){
var G__24802 = cljs.core.first.call(null,seq24801);
var seq24801__$1 = cljs.core.next.call(null,seq24801);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24802,seq24801__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args24837 = [];
var len__17421__auto___24852 = arguments.length;
var i__17422__auto___24853 = (0);
while(true){
if((i__17422__auto___24853 < len__17421__auto___24852)){
args24837.push((arguments[i__17422__auto___24853]));

var G__24854 = (i__17422__auto___24853 + (1));
i__17422__auto___24853 = G__24854;
continue;
} else {
}
break;
}

var G__24843 = args24837.length;
switch (G__24843) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__17440__auto__ = (new cljs.core.IndexedSeq(args24837.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17440__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__24844 = elem;
(G__24844[k__$1] = v);

return G__24844;
} else {
var G__24845 = elem;
G__24845.setAttribute(k__$1,v);

return G__24845;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__24846_24856 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__24847_24857 = null;
var count__24848_24858 = (0);
var i__24849_24859 = (0);
while(true){
if((i__24849_24859 < count__24848_24858)){
var vec__24850_24860 = cljs.core._nth.call(null,chunk__24847_24857,i__24849_24859);
var k_24861__$1 = cljs.core.nth.call(null,vec__24850_24860,(0),null);
var v_24862__$1 = cljs.core.nth.call(null,vec__24850_24860,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_24861__$1,v_24862__$1);

var G__24863 = seq__24846_24856;
var G__24864 = chunk__24847_24857;
var G__24865 = count__24848_24858;
var G__24866 = (i__24849_24859 + (1));
seq__24846_24856 = G__24863;
chunk__24847_24857 = G__24864;
count__24848_24858 = G__24865;
i__24849_24859 = G__24866;
continue;
} else {
var temp__4425__auto___24867 = cljs.core.seq.call(null,seq__24846_24856);
if(temp__4425__auto___24867){
var seq__24846_24868__$1 = temp__4425__auto___24867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24846_24868__$1)){
var c__17166__auto___24869 = cljs.core.chunk_first.call(null,seq__24846_24868__$1);
var G__24870 = cljs.core.chunk_rest.call(null,seq__24846_24868__$1);
var G__24871 = c__17166__auto___24869;
var G__24872 = cljs.core.count.call(null,c__17166__auto___24869);
var G__24873 = (0);
seq__24846_24856 = G__24870;
chunk__24847_24857 = G__24871;
count__24848_24858 = G__24872;
i__24849_24859 = G__24873;
continue;
} else {
var vec__24851_24874 = cljs.core.first.call(null,seq__24846_24868__$1);
var k_24875__$1 = cljs.core.nth.call(null,vec__24851_24874,(0),null);
var v_24876__$1 = cljs.core.nth.call(null,vec__24851_24874,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_24875__$1,v_24876__$1);

var G__24877 = cljs.core.next.call(null,seq__24846_24868__$1);
var G__24878 = null;
var G__24879 = (0);
var G__24880 = (0);
seq__24846_24856 = G__24877;
chunk__24847_24857 = G__24878;
count__24848_24858 = G__24879;
i__24849_24859 = G__24880;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq24838){
var G__24839 = cljs.core.first.call(null,seq24838);
var seq24838__$1 = cljs.core.next.call(null,seq24838);
var G__24840 = cljs.core.first.call(null,seq24838__$1);
var seq24838__$2 = cljs.core.next.call(null,seq24838__$1);
var G__24841 = cljs.core.first.call(null,seq24838__$2);
var seq24838__$3 = cljs.core.next.call(null,seq24838__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24839,G__24840,G__24841,seq24838__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args24881 = [];
var len__17421__auto___24891 = arguments.length;
var i__17422__auto___24892 = (0);
while(true){
if((i__17422__auto___24892 < len__17421__auto___24891)){
args24881.push((arguments[i__17422__auto___24892]));

var G__24893 = (i__17422__auto___24892 + (1));
i__17422__auto___24892 = G__24893;
continue;
} else {
}
break;
}

var G__24886 = args24881.length;
switch (G__24886) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17440__auto__ = (new cljs.core.IndexedSeq(args24881.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17440__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_24895__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_24895__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_24895__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__24887_24896 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__24888_24897 = null;
var count__24889_24898 = (0);
var i__24890_24899 = (0);
while(true){
if((i__24890_24899 < count__24889_24898)){
var k_24900__$1 = cljs.core._nth.call(null,chunk__24888_24897,i__24890_24899);
dommy.core.remove_attr_BANG_.call(null,elem,k_24900__$1);

var G__24901 = seq__24887_24896;
var G__24902 = chunk__24888_24897;
var G__24903 = count__24889_24898;
var G__24904 = (i__24890_24899 + (1));
seq__24887_24896 = G__24901;
chunk__24888_24897 = G__24902;
count__24889_24898 = G__24903;
i__24890_24899 = G__24904;
continue;
} else {
var temp__4425__auto___24905 = cljs.core.seq.call(null,seq__24887_24896);
if(temp__4425__auto___24905){
var seq__24887_24906__$1 = temp__4425__auto___24905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24887_24906__$1)){
var c__17166__auto___24907 = cljs.core.chunk_first.call(null,seq__24887_24906__$1);
var G__24908 = cljs.core.chunk_rest.call(null,seq__24887_24906__$1);
var G__24909 = c__17166__auto___24907;
var G__24910 = cljs.core.count.call(null,c__17166__auto___24907);
var G__24911 = (0);
seq__24887_24896 = G__24908;
chunk__24888_24897 = G__24909;
count__24889_24898 = G__24910;
i__24890_24899 = G__24911;
continue;
} else {
var k_24912__$1 = cljs.core.first.call(null,seq__24887_24906__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_24912__$1);

var G__24913 = cljs.core.next.call(null,seq__24887_24906__$1);
var G__24914 = null;
var G__24915 = (0);
var G__24916 = (0);
seq__24887_24896 = G__24913;
chunk__24888_24897 = G__24914;
count__24889_24898 = G__24915;
i__24890_24899 = G__24916;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq24882){
var G__24883 = cljs.core.first.call(null,seq24882);
var seq24882__$1 = cljs.core.next.call(null,seq24882);
var G__24884 = cljs.core.first.call(null,seq24882__$1);
var seq24882__$2 = cljs.core.next.call(null,seq24882__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24883,G__24884,seq24882__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args24917 = [];
var len__17421__auto___24920 = arguments.length;
var i__17422__auto___24921 = (0);
while(true){
if((i__17422__auto___24921 < len__17421__auto___24920)){
args24917.push((arguments[i__17422__auto___24921]));

var G__24922 = (i__17422__auto___24921 + (1));
i__17422__auto___24921 = G__24922;
continue;
} else {
}
break;
}

var G__24919 = args24917.length;
switch (G__24919) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24917.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args24924 = [];
var len__17421__auto___24942 = arguments.length;
var i__17422__auto___24943 = (0);
while(true){
if((i__17422__auto___24943 < len__17421__auto___24942)){
args24924.push((arguments[i__17422__auto___24943]));

var G__24944 = (i__17422__auto___24943 + (1));
i__17422__auto___24943 = G__24944;
continue;
} else {
}
break;
}

var G__24929 = args24924.length;
switch (G__24929) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17440__auto__ = (new cljs.core.IndexedSeq(args24924.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17440__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___24946 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___24946)){
var class_list_24947 = temp__4423__auto___24946;
var seq__24930_24948 = cljs.core.seq.call(null,classes__$1);
var chunk__24931_24949 = null;
var count__24932_24950 = (0);
var i__24933_24951 = (0);
while(true){
if((i__24933_24951 < count__24932_24950)){
var c_24952 = cljs.core._nth.call(null,chunk__24931_24949,i__24933_24951);
class_list_24947.add(c_24952);

var G__24953 = seq__24930_24948;
var G__24954 = chunk__24931_24949;
var G__24955 = count__24932_24950;
var G__24956 = (i__24933_24951 + (1));
seq__24930_24948 = G__24953;
chunk__24931_24949 = G__24954;
count__24932_24950 = G__24955;
i__24933_24951 = G__24956;
continue;
} else {
var temp__4425__auto___24957 = cljs.core.seq.call(null,seq__24930_24948);
if(temp__4425__auto___24957){
var seq__24930_24958__$1 = temp__4425__auto___24957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24930_24958__$1)){
var c__17166__auto___24959 = cljs.core.chunk_first.call(null,seq__24930_24958__$1);
var G__24960 = cljs.core.chunk_rest.call(null,seq__24930_24958__$1);
var G__24961 = c__17166__auto___24959;
var G__24962 = cljs.core.count.call(null,c__17166__auto___24959);
var G__24963 = (0);
seq__24930_24948 = G__24960;
chunk__24931_24949 = G__24961;
count__24932_24950 = G__24962;
i__24933_24951 = G__24963;
continue;
} else {
var c_24964 = cljs.core.first.call(null,seq__24930_24958__$1);
class_list_24947.add(c_24964);

var G__24965 = cljs.core.next.call(null,seq__24930_24958__$1);
var G__24966 = null;
var G__24967 = (0);
var G__24968 = (0);
seq__24930_24948 = G__24965;
chunk__24931_24949 = G__24966;
count__24932_24950 = G__24967;
i__24933_24951 = G__24968;
continue;
}
} else {
}
}
break;
}
} else {
var seq__24934_24969 = cljs.core.seq.call(null,classes__$1);
var chunk__24935_24970 = null;
var count__24936_24971 = (0);
var i__24937_24972 = (0);
while(true){
if((i__24937_24972 < count__24936_24971)){
var c_24973 = cljs.core._nth.call(null,chunk__24935_24970,i__24937_24972);
var class_name_24974 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_24974,c_24973))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_24974 === ""))?c_24973:[cljs.core.str(class_name_24974),cljs.core.str(" "),cljs.core.str(c_24973)].join('')));
}

var G__24975 = seq__24934_24969;
var G__24976 = chunk__24935_24970;
var G__24977 = count__24936_24971;
var G__24978 = (i__24937_24972 + (1));
seq__24934_24969 = G__24975;
chunk__24935_24970 = G__24976;
count__24936_24971 = G__24977;
i__24937_24972 = G__24978;
continue;
} else {
var temp__4425__auto___24979 = cljs.core.seq.call(null,seq__24934_24969);
if(temp__4425__auto___24979){
var seq__24934_24980__$1 = temp__4425__auto___24979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24934_24980__$1)){
var c__17166__auto___24981 = cljs.core.chunk_first.call(null,seq__24934_24980__$1);
var G__24982 = cljs.core.chunk_rest.call(null,seq__24934_24980__$1);
var G__24983 = c__17166__auto___24981;
var G__24984 = cljs.core.count.call(null,c__17166__auto___24981);
var G__24985 = (0);
seq__24934_24969 = G__24982;
chunk__24935_24970 = G__24983;
count__24936_24971 = G__24984;
i__24937_24972 = G__24985;
continue;
} else {
var c_24986 = cljs.core.first.call(null,seq__24934_24980__$1);
var class_name_24987 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_24987,c_24986))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_24987 === ""))?c_24986:[cljs.core.str(class_name_24987),cljs.core.str(" "),cljs.core.str(c_24986)].join('')));
}

var G__24988 = cljs.core.next.call(null,seq__24934_24980__$1);
var G__24989 = null;
var G__24990 = (0);
var G__24991 = (0);
seq__24934_24969 = G__24988;
chunk__24935_24970 = G__24989;
count__24936_24971 = G__24990;
i__24937_24972 = G__24991;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__24938_24992 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__24939_24993 = null;
var count__24940_24994 = (0);
var i__24941_24995 = (0);
while(true){
if((i__24941_24995 < count__24940_24994)){
var c_24996 = cljs.core._nth.call(null,chunk__24939_24993,i__24941_24995);
dommy.core.add_class_BANG_.call(null,elem,c_24996);

var G__24997 = seq__24938_24992;
var G__24998 = chunk__24939_24993;
var G__24999 = count__24940_24994;
var G__25000 = (i__24941_24995 + (1));
seq__24938_24992 = G__24997;
chunk__24939_24993 = G__24998;
count__24940_24994 = G__24999;
i__24941_24995 = G__25000;
continue;
} else {
var temp__4425__auto___25001 = cljs.core.seq.call(null,seq__24938_24992);
if(temp__4425__auto___25001){
var seq__24938_25002__$1 = temp__4425__auto___25001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24938_25002__$1)){
var c__17166__auto___25003 = cljs.core.chunk_first.call(null,seq__24938_25002__$1);
var G__25004 = cljs.core.chunk_rest.call(null,seq__24938_25002__$1);
var G__25005 = c__17166__auto___25003;
var G__25006 = cljs.core.count.call(null,c__17166__auto___25003);
var G__25007 = (0);
seq__24938_24992 = G__25004;
chunk__24939_24993 = G__25005;
count__24940_24994 = G__25006;
i__24941_24995 = G__25007;
continue;
} else {
var c_25008 = cljs.core.first.call(null,seq__24938_25002__$1);
dommy.core.add_class_BANG_.call(null,elem,c_25008);

var G__25009 = cljs.core.next.call(null,seq__24938_25002__$1);
var G__25010 = null;
var G__25011 = (0);
var G__25012 = (0);
seq__24938_24992 = G__25009;
chunk__24939_24993 = G__25010;
count__24940_24994 = G__25011;
i__24941_24995 = G__25012;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq24925){
var G__24926 = cljs.core.first.call(null,seq24925);
var seq24925__$1 = cljs.core.next.call(null,seq24925);
var G__24927 = cljs.core.first.call(null,seq24925__$1);
var seq24925__$2 = cljs.core.next.call(null,seq24925__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24926,G__24927,seq24925__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args25013 = [];
var len__17421__auto___25023 = arguments.length;
var i__17422__auto___25024 = (0);
while(true){
if((i__17422__auto___25024 < len__17421__auto___25023)){
args25013.push((arguments[i__17422__auto___25024]));

var G__25025 = (i__17422__auto___25024 + (1));
i__17422__auto___25024 = G__25025;
continue;
} else {
}
break;
}

var G__25018 = args25013.length;
switch (G__25018) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17440__auto__ = (new cljs.core.IndexedSeq(args25013.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17440__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___25027 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___25027)){
var class_list_25028 = temp__4423__auto___25027;
class_list_25028.remove(c__$1);
} else {
var class_name_25029 = dommy.core.class$.call(null,elem);
var new_class_name_25030 = dommy.utils.remove_class_str.call(null,class_name_25029,c__$1);
if((class_name_25029 === new_class_name_25030)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_25030);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__25019 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__25020 = null;
var count__25021 = (0);
var i__25022 = (0);
while(true){
if((i__25022 < count__25021)){
var c = cljs.core._nth.call(null,chunk__25020,i__25022);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__25031 = seq__25019;
var G__25032 = chunk__25020;
var G__25033 = count__25021;
var G__25034 = (i__25022 + (1));
seq__25019 = G__25031;
chunk__25020 = G__25032;
count__25021 = G__25033;
i__25022 = G__25034;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25019);
if(temp__4425__auto__){
var seq__25019__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25019__$1)){
var c__17166__auto__ = cljs.core.chunk_first.call(null,seq__25019__$1);
var G__25035 = cljs.core.chunk_rest.call(null,seq__25019__$1);
var G__25036 = c__17166__auto__;
var G__25037 = cljs.core.count.call(null,c__17166__auto__);
var G__25038 = (0);
seq__25019 = G__25035;
chunk__25020 = G__25036;
count__25021 = G__25037;
i__25022 = G__25038;
continue;
} else {
var c = cljs.core.first.call(null,seq__25019__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__25039 = cljs.core.next.call(null,seq__25019__$1);
var G__25040 = null;
var G__25041 = (0);
var G__25042 = (0);
seq__25019 = G__25039;
chunk__25020 = G__25040;
count__25021 = G__25041;
i__25022 = G__25042;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq25014){
var G__25015 = cljs.core.first.call(null,seq25014);
var seq25014__$1 = cljs.core.next.call(null,seq25014);
var G__25016 = cljs.core.first.call(null,seq25014__$1);
var seq25014__$2 = cljs.core.next.call(null,seq25014__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25015,G__25016,seq25014__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args25043 = [];
var len__17421__auto___25046 = arguments.length;
var i__17422__auto___25047 = (0);
while(true){
if((i__17422__auto___25047 < len__17421__auto___25046)){
args25043.push((arguments[i__17422__auto___25047]));

var G__25048 = (i__17422__auto___25047 + (1));
i__17422__auto___25047 = G__25048;
continue;
} else {
}
break;
}

var G__25045 = args25043.length;
switch (G__25045) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25043.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___25050 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___25050)){
var class_list_25051 = temp__4423__auto___25050;
class_list_25051.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args25052 = [];
var len__17421__auto___25055 = arguments.length;
var i__17422__auto___25056 = (0);
while(true){
if((i__17422__auto___25056 < len__17421__auto___25055)){
args25052.push((arguments[i__17422__auto___25056]));

var G__25057 = (i__17422__auto___25056 + (1));
i__17422__auto___25056 = G__25057;
continue;
} else {
}
break;
}

var G__25054 = args25052.length;
switch (G__25054) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25052.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args25059 = [];
var len__17421__auto___25062 = arguments.length;
var i__17422__auto___25063 = (0);
while(true){
if((i__17422__auto___25063 < len__17421__auto___25062)){
args25059.push((arguments[i__17422__auto___25063]));

var G__25064 = (i__17422__auto___25063 + (1));
i__17422__auto___25063 = G__25064;
continue;
} else {
}
break;
}

var G__25061 = args25059.length;
switch (G__25061) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25059.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args25066 = [];
var len__17421__auto___25077 = arguments.length;
var i__17422__auto___25078 = (0);
while(true){
if((i__17422__auto___25078 < len__17421__auto___25077)){
args25066.push((arguments[i__17422__auto___25078]));

var G__25079 = (i__17422__auto___25078 + (1));
i__17422__auto___25078 = G__25079;
continue;
} else {
}
break;
}

var G__25071 = args25066.length;
switch (G__25071) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17440__auto__ = (new cljs.core.IndexedSeq(args25066.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17440__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__25072 = parent;
G__25072.appendChild(child);

return G__25072;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__25073_25081 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__25074_25082 = null;
var count__25075_25083 = (0);
var i__25076_25084 = (0);
while(true){
if((i__25076_25084 < count__25075_25083)){
var c_25085 = cljs.core._nth.call(null,chunk__25074_25082,i__25076_25084);
dommy.core.append_BANG_.call(null,parent,c_25085);

var G__25086 = seq__25073_25081;
var G__25087 = chunk__25074_25082;
var G__25088 = count__25075_25083;
var G__25089 = (i__25076_25084 + (1));
seq__25073_25081 = G__25086;
chunk__25074_25082 = G__25087;
count__25075_25083 = G__25088;
i__25076_25084 = G__25089;
continue;
} else {
var temp__4425__auto___25090 = cljs.core.seq.call(null,seq__25073_25081);
if(temp__4425__auto___25090){
var seq__25073_25091__$1 = temp__4425__auto___25090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25073_25091__$1)){
var c__17166__auto___25092 = cljs.core.chunk_first.call(null,seq__25073_25091__$1);
var G__25093 = cljs.core.chunk_rest.call(null,seq__25073_25091__$1);
var G__25094 = c__17166__auto___25092;
var G__25095 = cljs.core.count.call(null,c__17166__auto___25092);
var G__25096 = (0);
seq__25073_25081 = G__25093;
chunk__25074_25082 = G__25094;
count__25075_25083 = G__25095;
i__25076_25084 = G__25096;
continue;
} else {
var c_25097 = cljs.core.first.call(null,seq__25073_25091__$1);
dommy.core.append_BANG_.call(null,parent,c_25097);

var G__25098 = cljs.core.next.call(null,seq__25073_25091__$1);
var G__25099 = null;
var G__25100 = (0);
var G__25101 = (0);
seq__25073_25081 = G__25098;
chunk__25074_25082 = G__25099;
count__25075_25083 = G__25100;
i__25076_25084 = G__25101;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq25067){
var G__25068 = cljs.core.first.call(null,seq25067);
var seq25067__$1 = cljs.core.next.call(null,seq25067);
var G__25069 = cljs.core.first.call(null,seq25067__$1);
var seq25067__$2 = cljs.core.next.call(null,seq25067__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25068,G__25069,seq25067__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args25102 = [];
var len__17421__auto___25113 = arguments.length;
var i__17422__auto___25114 = (0);
while(true){
if((i__17422__auto___25114 < len__17421__auto___25113)){
args25102.push((arguments[i__17422__auto___25114]));

var G__25115 = (i__17422__auto___25114 + (1));
i__17422__auto___25114 = G__25115;
continue;
} else {
}
break;
}

var G__25107 = args25102.length;
switch (G__25107) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17440__auto__ = (new cljs.core.IndexedSeq(args25102.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17440__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__25108 = parent;
G__25108.insertBefore(child,parent.firstChild);

return G__25108;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__25109_25117 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__25110_25118 = null;
var count__25111_25119 = (0);
var i__25112_25120 = (0);
while(true){
if((i__25112_25120 < count__25111_25119)){
var c_25121 = cljs.core._nth.call(null,chunk__25110_25118,i__25112_25120);
dommy.core.prepend_BANG_.call(null,parent,c_25121);

var G__25122 = seq__25109_25117;
var G__25123 = chunk__25110_25118;
var G__25124 = count__25111_25119;
var G__25125 = (i__25112_25120 + (1));
seq__25109_25117 = G__25122;
chunk__25110_25118 = G__25123;
count__25111_25119 = G__25124;
i__25112_25120 = G__25125;
continue;
} else {
var temp__4425__auto___25126 = cljs.core.seq.call(null,seq__25109_25117);
if(temp__4425__auto___25126){
var seq__25109_25127__$1 = temp__4425__auto___25126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25109_25127__$1)){
var c__17166__auto___25128 = cljs.core.chunk_first.call(null,seq__25109_25127__$1);
var G__25129 = cljs.core.chunk_rest.call(null,seq__25109_25127__$1);
var G__25130 = c__17166__auto___25128;
var G__25131 = cljs.core.count.call(null,c__17166__auto___25128);
var G__25132 = (0);
seq__25109_25117 = G__25129;
chunk__25110_25118 = G__25130;
count__25111_25119 = G__25131;
i__25112_25120 = G__25132;
continue;
} else {
var c_25133 = cljs.core.first.call(null,seq__25109_25127__$1);
dommy.core.prepend_BANG_.call(null,parent,c_25133);

var G__25134 = cljs.core.next.call(null,seq__25109_25127__$1);
var G__25135 = null;
var G__25136 = (0);
var G__25137 = (0);
seq__25109_25117 = G__25134;
chunk__25110_25118 = G__25135;
count__25111_25119 = G__25136;
i__25112_25120 = G__25137;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq25103){
var G__25104 = cljs.core.first.call(null,seq25103);
var seq25103__$1 = cljs.core.next.call(null,seq25103);
var G__25105 = cljs.core.first.call(null,seq25103__$1);
var seq25103__$2 = cljs.core.next.call(null,seq25103__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25104,G__25105,seq25103__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4423__auto___25138 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___25138)){
var next_25139 = temp__4423__auto___25138;
dommy.core.insert_before_BANG_.call(null,elem,next_25139);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args25140 = [];
var len__17421__auto___25144 = arguments.length;
var i__17422__auto___25145 = (0);
while(true){
if((i__17422__auto___25145 < len__17421__auto___25144)){
args25140.push((arguments[i__17422__auto___25145]));

var G__25146 = (i__17422__auto___25145 + (1));
i__17422__auto___25145 = G__25146;
continue;
} else {
}
break;
}

var G__25142 = args25140.length;
switch (G__25142) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25140.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__25143 = p;
G__25143.removeChild(elem);

return G__25143;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__25148){
var vec__25149 = p__25148;
var special_mouse_event = cljs.core.nth.call(null,vec__25149,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__25149,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__25149,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__25149,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__16363__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__16351__auto__ = related_target;
if(cljs.core.truth_(and__16351__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__16351__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__25149,special_mouse_event,real_mouse_event))
});})(vec__25149,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__16351__auto__ = selected_target;
if(cljs.core.truth_(and__16351__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__16351__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__16363__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__17428__auto__ = [];
var len__17421__auto___25153 = arguments.length;
var i__17422__auto___25154 = (0);
while(true){
if((i__17422__auto___25154 < len__17421__auto___25153)){
args__17428__auto__.push((arguments[i__17422__auto___25154]));

var G__25155 = (i__17422__auto___25154 + (1));
i__17422__auto___25154 = G__25155;
continue;
} else {
}
break;
}

var argseq__17429__auto__ = ((((2) < args__17428__auto__.length))?(new cljs.core.IndexedSeq(args__17428__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17429__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq25150){
var G__25151 = cljs.core.first.call(null,seq25150);
var seq25150__$1 = cljs.core.next.call(null,seq25150);
var G__25152 = cljs.core.first.call(null,seq25150__$1);
var seq25150__$2 = cljs.core.next.call(null,seq25150__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25151,G__25152,seq25150__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__17428__auto__ = [];
var len__17421__auto___25181 = arguments.length;
var i__17422__auto___25182 = (0);
while(true){
if((i__17422__auto___25182 < len__17421__auto___25181)){
args__17428__auto__.push((arguments[i__17422__auto___25182]));

var G__25183 = (i__17422__auto___25182 + (1));
i__17422__auto___25182 = G__25183;
continue;
} else {
}
break;
}

var argseq__17429__auto__ = ((((1) < args__17428__auto__.length))?(new cljs.core.IndexedSeq(args__17428__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17429__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__25158_25184 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_25185 = cljs.core.nth.call(null,vec__25158_25184,(0),null);
var selector_25186 = cljs.core.nth.call(null,vec__25158_25184,(1),null);
var seq__25159_25187 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__25166_25188 = null;
var count__25167_25189 = (0);
var i__25168_25190 = (0);
while(true){
if((i__25168_25190 < count__25167_25189)){
var vec__25175_25191 = cljs.core._nth.call(null,chunk__25166_25188,i__25168_25190);
var orig_type_25192 = cljs.core.nth.call(null,vec__25175_25191,(0),null);
var f_25193 = cljs.core.nth.call(null,vec__25175_25191,(1),null);
var seq__25169_25194 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25192,cljs.core.PersistentArrayMap.fromArray([orig_type_25192,cljs.core.identity], true, false)));
var chunk__25171_25195 = null;
var count__25172_25196 = (0);
var i__25173_25197 = (0);
while(true){
if((i__25173_25197 < count__25172_25196)){
var vec__25176_25198 = cljs.core._nth.call(null,chunk__25171_25195,i__25173_25197);
var actual_type_25199 = cljs.core.nth.call(null,vec__25176_25198,(0),null);
var factory_25200 = cljs.core.nth.call(null,vec__25176_25198,(1),null);
var canonical_f_25201 = (cljs.core.truth_(selector_25186)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25185,selector_25186):cljs.core.identity).call(null,factory_25200.call(null,f_25193));
dommy.core.update_event_listeners_BANG_.call(null,elem_25185,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25186,actual_type_25199,f_25193], null),canonical_f_25201);

if(cljs.core.truth_(elem_25185.addEventListener)){
elem_25185.addEventListener(cljs.core.name.call(null,actual_type_25199),canonical_f_25201);
} else {
elem_25185.attachEvent(cljs.core.name.call(null,actual_type_25199),canonical_f_25201);
}

var G__25202 = seq__25169_25194;
var G__25203 = chunk__25171_25195;
var G__25204 = count__25172_25196;
var G__25205 = (i__25173_25197 + (1));
seq__25169_25194 = G__25202;
chunk__25171_25195 = G__25203;
count__25172_25196 = G__25204;
i__25173_25197 = G__25205;
continue;
} else {
var temp__4425__auto___25206 = cljs.core.seq.call(null,seq__25169_25194);
if(temp__4425__auto___25206){
var seq__25169_25207__$1 = temp__4425__auto___25206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25169_25207__$1)){
var c__17166__auto___25208 = cljs.core.chunk_first.call(null,seq__25169_25207__$1);
var G__25209 = cljs.core.chunk_rest.call(null,seq__25169_25207__$1);
var G__25210 = c__17166__auto___25208;
var G__25211 = cljs.core.count.call(null,c__17166__auto___25208);
var G__25212 = (0);
seq__25169_25194 = G__25209;
chunk__25171_25195 = G__25210;
count__25172_25196 = G__25211;
i__25173_25197 = G__25212;
continue;
} else {
var vec__25177_25213 = cljs.core.first.call(null,seq__25169_25207__$1);
var actual_type_25214 = cljs.core.nth.call(null,vec__25177_25213,(0),null);
var factory_25215 = cljs.core.nth.call(null,vec__25177_25213,(1),null);
var canonical_f_25216 = (cljs.core.truth_(selector_25186)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25185,selector_25186):cljs.core.identity).call(null,factory_25215.call(null,f_25193));
dommy.core.update_event_listeners_BANG_.call(null,elem_25185,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25186,actual_type_25214,f_25193], null),canonical_f_25216);

if(cljs.core.truth_(elem_25185.addEventListener)){
elem_25185.addEventListener(cljs.core.name.call(null,actual_type_25214),canonical_f_25216);
} else {
elem_25185.attachEvent(cljs.core.name.call(null,actual_type_25214),canonical_f_25216);
}

var G__25217 = cljs.core.next.call(null,seq__25169_25207__$1);
var G__25218 = null;
var G__25219 = (0);
var G__25220 = (0);
seq__25169_25194 = G__25217;
chunk__25171_25195 = G__25218;
count__25172_25196 = G__25219;
i__25173_25197 = G__25220;
continue;
}
} else {
}
}
break;
}

var G__25221 = seq__25159_25187;
var G__25222 = chunk__25166_25188;
var G__25223 = count__25167_25189;
var G__25224 = (i__25168_25190 + (1));
seq__25159_25187 = G__25221;
chunk__25166_25188 = G__25222;
count__25167_25189 = G__25223;
i__25168_25190 = G__25224;
continue;
} else {
var temp__4425__auto___25225 = cljs.core.seq.call(null,seq__25159_25187);
if(temp__4425__auto___25225){
var seq__25159_25226__$1 = temp__4425__auto___25225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25159_25226__$1)){
var c__17166__auto___25227 = cljs.core.chunk_first.call(null,seq__25159_25226__$1);
var G__25228 = cljs.core.chunk_rest.call(null,seq__25159_25226__$1);
var G__25229 = c__17166__auto___25227;
var G__25230 = cljs.core.count.call(null,c__17166__auto___25227);
var G__25231 = (0);
seq__25159_25187 = G__25228;
chunk__25166_25188 = G__25229;
count__25167_25189 = G__25230;
i__25168_25190 = G__25231;
continue;
} else {
var vec__25178_25232 = cljs.core.first.call(null,seq__25159_25226__$1);
var orig_type_25233 = cljs.core.nth.call(null,vec__25178_25232,(0),null);
var f_25234 = cljs.core.nth.call(null,vec__25178_25232,(1),null);
var seq__25160_25235 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25233,cljs.core.PersistentArrayMap.fromArray([orig_type_25233,cljs.core.identity], true, false)));
var chunk__25162_25236 = null;
var count__25163_25237 = (0);
var i__25164_25238 = (0);
while(true){
if((i__25164_25238 < count__25163_25237)){
var vec__25179_25239 = cljs.core._nth.call(null,chunk__25162_25236,i__25164_25238);
var actual_type_25240 = cljs.core.nth.call(null,vec__25179_25239,(0),null);
var factory_25241 = cljs.core.nth.call(null,vec__25179_25239,(1),null);
var canonical_f_25242 = (cljs.core.truth_(selector_25186)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25185,selector_25186):cljs.core.identity).call(null,factory_25241.call(null,f_25234));
dommy.core.update_event_listeners_BANG_.call(null,elem_25185,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25186,actual_type_25240,f_25234], null),canonical_f_25242);

if(cljs.core.truth_(elem_25185.addEventListener)){
elem_25185.addEventListener(cljs.core.name.call(null,actual_type_25240),canonical_f_25242);
} else {
elem_25185.attachEvent(cljs.core.name.call(null,actual_type_25240),canonical_f_25242);
}

var G__25243 = seq__25160_25235;
var G__25244 = chunk__25162_25236;
var G__25245 = count__25163_25237;
var G__25246 = (i__25164_25238 + (1));
seq__25160_25235 = G__25243;
chunk__25162_25236 = G__25244;
count__25163_25237 = G__25245;
i__25164_25238 = G__25246;
continue;
} else {
var temp__4425__auto___25247__$1 = cljs.core.seq.call(null,seq__25160_25235);
if(temp__4425__auto___25247__$1){
var seq__25160_25248__$1 = temp__4425__auto___25247__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25160_25248__$1)){
var c__17166__auto___25249 = cljs.core.chunk_first.call(null,seq__25160_25248__$1);
var G__25250 = cljs.core.chunk_rest.call(null,seq__25160_25248__$1);
var G__25251 = c__17166__auto___25249;
var G__25252 = cljs.core.count.call(null,c__17166__auto___25249);
var G__25253 = (0);
seq__25160_25235 = G__25250;
chunk__25162_25236 = G__25251;
count__25163_25237 = G__25252;
i__25164_25238 = G__25253;
continue;
} else {
var vec__25180_25254 = cljs.core.first.call(null,seq__25160_25248__$1);
var actual_type_25255 = cljs.core.nth.call(null,vec__25180_25254,(0),null);
var factory_25256 = cljs.core.nth.call(null,vec__25180_25254,(1),null);
var canonical_f_25257 = (cljs.core.truth_(selector_25186)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25185,selector_25186):cljs.core.identity).call(null,factory_25256.call(null,f_25234));
dommy.core.update_event_listeners_BANG_.call(null,elem_25185,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25186,actual_type_25255,f_25234], null),canonical_f_25257);

if(cljs.core.truth_(elem_25185.addEventListener)){
elem_25185.addEventListener(cljs.core.name.call(null,actual_type_25255),canonical_f_25257);
} else {
elem_25185.attachEvent(cljs.core.name.call(null,actual_type_25255),canonical_f_25257);
}

var G__25258 = cljs.core.next.call(null,seq__25160_25248__$1);
var G__25259 = null;
var G__25260 = (0);
var G__25261 = (0);
seq__25160_25235 = G__25258;
chunk__25162_25236 = G__25259;
count__25163_25237 = G__25260;
i__25164_25238 = G__25261;
continue;
}
} else {
}
}
break;
}

var G__25262 = cljs.core.next.call(null,seq__25159_25226__$1);
var G__25263 = null;
var G__25264 = (0);
var G__25265 = (0);
seq__25159_25187 = G__25262;
chunk__25166_25188 = G__25263;
count__25167_25189 = G__25264;
i__25168_25190 = G__25265;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq25156){
var G__25157 = cljs.core.first.call(null,seq25156);
var seq25156__$1 = cljs.core.next.call(null,seq25156);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25157,seq25156__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__17428__auto__ = [];
var len__17421__auto___25291 = arguments.length;
var i__17422__auto___25292 = (0);
while(true){
if((i__17422__auto___25292 < len__17421__auto___25291)){
args__17428__auto__.push((arguments[i__17422__auto___25292]));

var G__25293 = (i__17422__auto___25292 + (1));
i__17422__auto___25292 = G__25293;
continue;
} else {
}
break;
}

var argseq__17429__auto__ = ((((1) < args__17428__auto__.length))?(new cljs.core.IndexedSeq(args__17428__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17429__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__25268_25294 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_25295 = cljs.core.nth.call(null,vec__25268_25294,(0),null);
var selector_25296 = cljs.core.nth.call(null,vec__25268_25294,(1),null);
var seq__25269_25297 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__25276_25298 = null;
var count__25277_25299 = (0);
var i__25278_25300 = (0);
while(true){
if((i__25278_25300 < count__25277_25299)){
var vec__25285_25301 = cljs.core._nth.call(null,chunk__25276_25298,i__25278_25300);
var orig_type_25302 = cljs.core.nth.call(null,vec__25285_25301,(0),null);
var f_25303 = cljs.core.nth.call(null,vec__25285_25301,(1),null);
var seq__25279_25304 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25302,cljs.core.PersistentArrayMap.fromArray([orig_type_25302,cljs.core.identity], true, false)));
var chunk__25281_25305 = null;
var count__25282_25306 = (0);
var i__25283_25307 = (0);
while(true){
if((i__25283_25307 < count__25282_25306)){
var vec__25286_25308 = cljs.core._nth.call(null,chunk__25281_25305,i__25283_25307);
var actual_type_25309 = cljs.core.nth.call(null,vec__25286_25308,(0),null);
var __25310 = cljs.core.nth.call(null,vec__25286_25308,(1),null);
var keys_25311 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25296,actual_type_25309,f_25303], null);
var canonical_f_25312 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25295),keys_25311);
dommy.core.update_event_listeners_BANG_.call(null,elem_25295,dommy.utils.dissoc_in,keys_25311);

if(cljs.core.truth_(elem_25295.removeEventListener)){
elem_25295.removeEventListener(cljs.core.name.call(null,actual_type_25309),canonical_f_25312);
} else {
elem_25295.detachEvent(cljs.core.name.call(null,actual_type_25309),canonical_f_25312);
}

var G__25313 = seq__25279_25304;
var G__25314 = chunk__25281_25305;
var G__25315 = count__25282_25306;
var G__25316 = (i__25283_25307 + (1));
seq__25279_25304 = G__25313;
chunk__25281_25305 = G__25314;
count__25282_25306 = G__25315;
i__25283_25307 = G__25316;
continue;
} else {
var temp__4425__auto___25317 = cljs.core.seq.call(null,seq__25279_25304);
if(temp__4425__auto___25317){
var seq__25279_25318__$1 = temp__4425__auto___25317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25279_25318__$1)){
var c__17166__auto___25319 = cljs.core.chunk_first.call(null,seq__25279_25318__$1);
var G__25320 = cljs.core.chunk_rest.call(null,seq__25279_25318__$1);
var G__25321 = c__17166__auto___25319;
var G__25322 = cljs.core.count.call(null,c__17166__auto___25319);
var G__25323 = (0);
seq__25279_25304 = G__25320;
chunk__25281_25305 = G__25321;
count__25282_25306 = G__25322;
i__25283_25307 = G__25323;
continue;
} else {
var vec__25287_25324 = cljs.core.first.call(null,seq__25279_25318__$1);
var actual_type_25325 = cljs.core.nth.call(null,vec__25287_25324,(0),null);
var __25326 = cljs.core.nth.call(null,vec__25287_25324,(1),null);
var keys_25327 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25296,actual_type_25325,f_25303], null);
var canonical_f_25328 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25295),keys_25327);
dommy.core.update_event_listeners_BANG_.call(null,elem_25295,dommy.utils.dissoc_in,keys_25327);

if(cljs.core.truth_(elem_25295.removeEventListener)){
elem_25295.removeEventListener(cljs.core.name.call(null,actual_type_25325),canonical_f_25328);
} else {
elem_25295.detachEvent(cljs.core.name.call(null,actual_type_25325),canonical_f_25328);
}

var G__25329 = cljs.core.next.call(null,seq__25279_25318__$1);
var G__25330 = null;
var G__25331 = (0);
var G__25332 = (0);
seq__25279_25304 = G__25329;
chunk__25281_25305 = G__25330;
count__25282_25306 = G__25331;
i__25283_25307 = G__25332;
continue;
}
} else {
}
}
break;
}

var G__25333 = seq__25269_25297;
var G__25334 = chunk__25276_25298;
var G__25335 = count__25277_25299;
var G__25336 = (i__25278_25300 + (1));
seq__25269_25297 = G__25333;
chunk__25276_25298 = G__25334;
count__25277_25299 = G__25335;
i__25278_25300 = G__25336;
continue;
} else {
var temp__4425__auto___25337 = cljs.core.seq.call(null,seq__25269_25297);
if(temp__4425__auto___25337){
var seq__25269_25338__$1 = temp__4425__auto___25337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25269_25338__$1)){
var c__17166__auto___25339 = cljs.core.chunk_first.call(null,seq__25269_25338__$1);
var G__25340 = cljs.core.chunk_rest.call(null,seq__25269_25338__$1);
var G__25341 = c__17166__auto___25339;
var G__25342 = cljs.core.count.call(null,c__17166__auto___25339);
var G__25343 = (0);
seq__25269_25297 = G__25340;
chunk__25276_25298 = G__25341;
count__25277_25299 = G__25342;
i__25278_25300 = G__25343;
continue;
} else {
var vec__25288_25344 = cljs.core.first.call(null,seq__25269_25338__$1);
var orig_type_25345 = cljs.core.nth.call(null,vec__25288_25344,(0),null);
var f_25346 = cljs.core.nth.call(null,vec__25288_25344,(1),null);
var seq__25270_25347 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25345,cljs.core.PersistentArrayMap.fromArray([orig_type_25345,cljs.core.identity], true, false)));
var chunk__25272_25348 = null;
var count__25273_25349 = (0);
var i__25274_25350 = (0);
while(true){
if((i__25274_25350 < count__25273_25349)){
var vec__25289_25351 = cljs.core._nth.call(null,chunk__25272_25348,i__25274_25350);
var actual_type_25352 = cljs.core.nth.call(null,vec__25289_25351,(0),null);
var __25353 = cljs.core.nth.call(null,vec__25289_25351,(1),null);
var keys_25354 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25296,actual_type_25352,f_25346], null);
var canonical_f_25355 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25295),keys_25354);
dommy.core.update_event_listeners_BANG_.call(null,elem_25295,dommy.utils.dissoc_in,keys_25354);

if(cljs.core.truth_(elem_25295.removeEventListener)){
elem_25295.removeEventListener(cljs.core.name.call(null,actual_type_25352),canonical_f_25355);
} else {
elem_25295.detachEvent(cljs.core.name.call(null,actual_type_25352),canonical_f_25355);
}

var G__25356 = seq__25270_25347;
var G__25357 = chunk__25272_25348;
var G__25358 = count__25273_25349;
var G__25359 = (i__25274_25350 + (1));
seq__25270_25347 = G__25356;
chunk__25272_25348 = G__25357;
count__25273_25349 = G__25358;
i__25274_25350 = G__25359;
continue;
} else {
var temp__4425__auto___25360__$1 = cljs.core.seq.call(null,seq__25270_25347);
if(temp__4425__auto___25360__$1){
var seq__25270_25361__$1 = temp__4425__auto___25360__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25270_25361__$1)){
var c__17166__auto___25362 = cljs.core.chunk_first.call(null,seq__25270_25361__$1);
var G__25363 = cljs.core.chunk_rest.call(null,seq__25270_25361__$1);
var G__25364 = c__17166__auto___25362;
var G__25365 = cljs.core.count.call(null,c__17166__auto___25362);
var G__25366 = (0);
seq__25270_25347 = G__25363;
chunk__25272_25348 = G__25364;
count__25273_25349 = G__25365;
i__25274_25350 = G__25366;
continue;
} else {
var vec__25290_25367 = cljs.core.first.call(null,seq__25270_25361__$1);
var actual_type_25368 = cljs.core.nth.call(null,vec__25290_25367,(0),null);
var __25369 = cljs.core.nth.call(null,vec__25290_25367,(1),null);
var keys_25370 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25296,actual_type_25368,f_25346], null);
var canonical_f_25371 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25295),keys_25370);
dommy.core.update_event_listeners_BANG_.call(null,elem_25295,dommy.utils.dissoc_in,keys_25370);

if(cljs.core.truth_(elem_25295.removeEventListener)){
elem_25295.removeEventListener(cljs.core.name.call(null,actual_type_25368),canonical_f_25371);
} else {
elem_25295.detachEvent(cljs.core.name.call(null,actual_type_25368),canonical_f_25371);
}

var G__25372 = cljs.core.next.call(null,seq__25270_25361__$1);
var G__25373 = null;
var G__25374 = (0);
var G__25375 = (0);
seq__25270_25347 = G__25372;
chunk__25272_25348 = G__25373;
count__25273_25349 = G__25374;
i__25274_25350 = G__25375;
continue;
}
} else {
}
}
break;
}

var G__25376 = cljs.core.next.call(null,seq__25269_25338__$1);
var G__25377 = null;
var G__25378 = (0);
var G__25379 = (0);
seq__25269_25297 = G__25376;
chunk__25276_25298 = G__25377;
count__25277_25299 = G__25378;
i__25278_25300 = G__25379;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq25266){
var G__25267 = cljs.core.first.call(null,seq25266);
var seq25266__$1 = cljs.core.next.call(null,seq25266);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25267,seq25266__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__17428__auto__ = [];
var len__17421__auto___25389 = arguments.length;
var i__17422__auto___25390 = (0);
while(true){
if((i__17422__auto___25390 < len__17421__auto___25389)){
args__17428__auto__.push((arguments[i__17422__auto___25390]));

var G__25391 = (i__17422__auto___25390 + (1));
i__17422__auto___25390 = G__25391;
continue;
} else {
}
break;
}

var argseq__17429__auto__ = ((((1) < args__17428__auto__.length))?(new cljs.core.IndexedSeq(args__17428__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17429__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__25382_25392 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_25393 = cljs.core.nth.call(null,vec__25382_25392,(0),null);
var selector_25394 = cljs.core.nth.call(null,vec__25382_25392,(1),null);
var seq__25383_25395 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__25384_25396 = null;
var count__25385_25397 = (0);
var i__25386_25398 = (0);
while(true){
if((i__25386_25398 < count__25385_25397)){
var vec__25387_25399 = cljs.core._nth.call(null,chunk__25384_25396,i__25386_25398);
var type_25400 = cljs.core.nth.call(null,vec__25387_25399,(0),null);
var f_25401 = cljs.core.nth.call(null,vec__25387_25399,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_25400,((function (seq__25383_25395,chunk__25384_25396,count__25385_25397,i__25386_25398,vec__25387_25399,type_25400,f_25401,vec__25382_25392,elem_25393,selector_25394){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_25400,dommy$core$this_fn);

return f_25401.call(null,e);
});})(seq__25383_25395,chunk__25384_25396,count__25385_25397,i__25386_25398,vec__25387_25399,type_25400,f_25401,vec__25382_25392,elem_25393,selector_25394))
);

var G__25402 = seq__25383_25395;
var G__25403 = chunk__25384_25396;
var G__25404 = count__25385_25397;
var G__25405 = (i__25386_25398 + (1));
seq__25383_25395 = G__25402;
chunk__25384_25396 = G__25403;
count__25385_25397 = G__25404;
i__25386_25398 = G__25405;
continue;
} else {
var temp__4425__auto___25406 = cljs.core.seq.call(null,seq__25383_25395);
if(temp__4425__auto___25406){
var seq__25383_25407__$1 = temp__4425__auto___25406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25383_25407__$1)){
var c__17166__auto___25408 = cljs.core.chunk_first.call(null,seq__25383_25407__$1);
var G__25409 = cljs.core.chunk_rest.call(null,seq__25383_25407__$1);
var G__25410 = c__17166__auto___25408;
var G__25411 = cljs.core.count.call(null,c__17166__auto___25408);
var G__25412 = (0);
seq__25383_25395 = G__25409;
chunk__25384_25396 = G__25410;
count__25385_25397 = G__25411;
i__25386_25398 = G__25412;
continue;
} else {
var vec__25388_25413 = cljs.core.first.call(null,seq__25383_25407__$1);
var type_25414 = cljs.core.nth.call(null,vec__25388_25413,(0),null);
var f_25415 = cljs.core.nth.call(null,vec__25388_25413,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_25414,((function (seq__25383_25395,chunk__25384_25396,count__25385_25397,i__25386_25398,vec__25388_25413,type_25414,f_25415,seq__25383_25407__$1,temp__4425__auto___25406,vec__25382_25392,elem_25393,selector_25394){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_25414,dommy$core$this_fn);

return f_25415.call(null,e);
});})(seq__25383_25395,chunk__25384_25396,count__25385_25397,i__25386_25398,vec__25388_25413,type_25414,f_25415,seq__25383_25407__$1,temp__4425__auto___25406,vec__25382_25392,elem_25393,selector_25394))
);

var G__25416 = cljs.core.next.call(null,seq__25383_25407__$1);
var G__25417 = null;
var G__25418 = (0);
var G__25419 = (0);
seq__25383_25395 = G__25416;
chunk__25384_25396 = G__25417;
count__25385_25397 = G__25418;
i__25386_25398 = G__25419;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq25380){
var G__25381 = cljs.core.first.call(null,seq25380);
var seq25380__$1 = cljs.core.next.call(null,seq25380);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25381,seq25380__$1);
});

//# sourceMappingURL=core.js.map