// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28699_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28699_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28700 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28701 = null;
var count__28702 = (0);
var i__28703 = (0);
while(true){
if((i__28703 < count__28702)){
var n = cljs.core._nth.call(null,chunk__28701,i__28703);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28704 = seq__28700;
var G__28705 = chunk__28701;
var G__28706 = count__28702;
var G__28707 = (i__28703 + (1));
seq__28700 = G__28704;
chunk__28701 = G__28705;
count__28702 = G__28706;
i__28703 = G__28707;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28700);
if(temp__5457__auto__){
var seq__28700__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28700__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__28700__$1);
var G__28708 = cljs.core.chunk_rest.call(null,seq__28700__$1);
var G__28709 = c__4351__auto__;
var G__28710 = cljs.core.count.call(null,c__4351__auto__);
var G__28711 = (0);
seq__28700 = G__28708;
chunk__28701 = G__28709;
count__28702 = G__28710;
i__28703 = G__28711;
continue;
} else {
var n = cljs.core.first.call(null,seq__28700__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28712 = cljs.core.next.call(null,seq__28700__$1);
var G__28713 = null;
var G__28714 = (0);
var G__28715 = (0);
seq__28700 = G__28712;
chunk__28701 = G__28713;
count__28702 = G__28714;
i__28703 = G__28715;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28725_28733 = cljs.core.seq.call(null,deps);
var chunk__28726_28734 = null;
var count__28727_28735 = (0);
var i__28728_28736 = (0);
while(true){
if((i__28728_28736 < count__28727_28735)){
var dep_28737 = cljs.core._nth.call(null,chunk__28726_28734,i__28728_28736);
topo_sort_helper_STAR_.call(null,dep_28737,(depth + (1)),state);


var G__28738 = seq__28725_28733;
var G__28739 = chunk__28726_28734;
var G__28740 = count__28727_28735;
var G__28741 = (i__28728_28736 + (1));
seq__28725_28733 = G__28738;
chunk__28726_28734 = G__28739;
count__28727_28735 = G__28740;
i__28728_28736 = G__28741;
continue;
} else {
var temp__5457__auto___28742 = cljs.core.seq.call(null,seq__28725_28733);
if(temp__5457__auto___28742){
var seq__28725_28743__$1 = temp__5457__auto___28742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28725_28743__$1)){
var c__4351__auto___28744 = cljs.core.chunk_first.call(null,seq__28725_28743__$1);
var G__28745 = cljs.core.chunk_rest.call(null,seq__28725_28743__$1);
var G__28746 = c__4351__auto___28744;
var G__28747 = cljs.core.count.call(null,c__4351__auto___28744);
var G__28748 = (0);
seq__28725_28733 = G__28745;
chunk__28726_28734 = G__28746;
count__28727_28735 = G__28747;
i__28728_28736 = G__28748;
continue;
} else {
var dep_28749 = cljs.core.first.call(null,seq__28725_28743__$1);
topo_sort_helper_STAR_.call(null,dep_28749,(depth + (1)),state);


var G__28750 = cljs.core.next.call(null,seq__28725_28743__$1);
var G__28751 = null;
var G__28752 = (0);
var G__28753 = (0);
seq__28725_28733 = G__28750;
chunk__28726_28734 = G__28751;
count__28727_28735 = G__28752;
i__28728_28736 = G__28753;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28729){
var vec__28730 = p__28729;
var seq__28731 = cljs.core.seq.call(null,vec__28730);
var first__28732 = cljs.core.first.call(null,seq__28731);
var seq__28731__$1 = cljs.core.next.call(null,seq__28731);
var x = first__28732;
var xs = seq__28731__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28730,seq__28731,first__28732,seq__28731__$1,x,xs,get_deps__$1){
return (function (p1__28716_SHARP_){
return clojure.set.difference.call(null,p1__28716_SHARP_,x);
});})(vec__28730,seq__28731,first__28732,seq__28731__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28754 = cljs.core.seq.call(null,provides);
var chunk__28755 = null;
var count__28756 = (0);
var i__28757 = (0);
while(true){
if((i__28757 < count__28756)){
var prov = cljs.core._nth.call(null,chunk__28755,i__28757);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28758_28766 = cljs.core.seq.call(null,requires);
var chunk__28759_28767 = null;
var count__28760_28768 = (0);
var i__28761_28769 = (0);
while(true){
if((i__28761_28769 < count__28760_28768)){
var req_28770 = cljs.core._nth.call(null,chunk__28759_28767,i__28761_28769);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28770,prov);


var G__28771 = seq__28758_28766;
var G__28772 = chunk__28759_28767;
var G__28773 = count__28760_28768;
var G__28774 = (i__28761_28769 + (1));
seq__28758_28766 = G__28771;
chunk__28759_28767 = G__28772;
count__28760_28768 = G__28773;
i__28761_28769 = G__28774;
continue;
} else {
var temp__5457__auto___28775 = cljs.core.seq.call(null,seq__28758_28766);
if(temp__5457__auto___28775){
var seq__28758_28776__$1 = temp__5457__auto___28775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28758_28776__$1)){
var c__4351__auto___28777 = cljs.core.chunk_first.call(null,seq__28758_28776__$1);
var G__28778 = cljs.core.chunk_rest.call(null,seq__28758_28776__$1);
var G__28779 = c__4351__auto___28777;
var G__28780 = cljs.core.count.call(null,c__4351__auto___28777);
var G__28781 = (0);
seq__28758_28766 = G__28778;
chunk__28759_28767 = G__28779;
count__28760_28768 = G__28780;
i__28761_28769 = G__28781;
continue;
} else {
var req_28782 = cljs.core.first.call(null,seq__28758_28776__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28782,prov);


var G__28783 = cljs.core.next.call(null,seq__28758_28776__$1);
var G__28784 = null;
var G__28785 = (0);
var G__28786 = (0);
seq__28758_28766 = G__28783;
chunk__28759_28767 = G__28784;
count__28760_28768 = G__28785;
i__28761_28769 = G__28786;
continue;
}
} else {
}
}
break;
}


var G__28787 = seq__28754;
var G__28788 = chunk__28755;
var G__28789 = count__28756;
var G__28790 = (i__28757 + (1));
seq__28754 = G__28787;
chunk__28755 = G__28788;
count__28756 = G__28789;
i__28757 = G__28790;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28754);
if(temp__5457__auto__){
var seq__28754__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28754__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__28754__$1);
var G__28791 = cljs.core.chunk_rest.call(null,seq__28754__$1);
var G__28792 = c__4351__auto__;
var G__28793 = cljs.core.count.call(null,c__4351__auto__);
var G__28794 = (0);
seq__28754 = G__28791;
chunk__28755 = G__28792;
count__28756 = G__28793;
i__28757 = G__28794;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28754__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28762_28795 = cljs.core.seq.call(null,requires);
var chunk__28763_28796 = null;
var count__28764_28797 = (0);
var i__28765_28798 = (0);
while(true){
if((i__28765_28798 < count__28764_28797)){
var req_28799 = cljs.core._nth.call(null,chunk__28763_28796,i__28765_28798);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28799,prov);


var G__28800 = seq__28762_28795;
var G__28801 = chunk__28763_28796;
var G__28802 = count__28764_28797;
var G__28803 = (i__28765_28798 + (1));
seq__28762_28795 = G__28800;
chunk__28763_28796 = G__28801;
count__28764_28797 = G__28802;
i__28765_28798 = G__28803;
continue;
} else {
var temp__5457__auto___28804__$1 = cljs.core.seq.call(null,seq__28762_28795);
if(temp__5457__auto___28804__$1){
var seq__28762_28805__$1 = temp__5457__auto___28804__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28762_28805__$1)){
var c__4351__auto___28806 = cljs.core.chunk_first.call(null,seq__28762_28805__$1);
var G__28807 = cljs.core.chunk_rest.call(null,seq__28762_28805__$1);
var G__28808 = c__4351__auto___28806;
var G__28809 = cljs.core.count.call(null,c__4351__auto___28806);
var G__28810 = (0);
seq__28762_28795 = G__28807;
chunk__28763_28796 = G__28808;
count__28764_28797 = G__28809;
i__28765_28798 = G__28810;
continue;
} else {
var req_28811 = cljs.core.first.call(null,seq__28762_28805__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28811,prov);


var G__28812 = cljs.core.next.call(null,seq__28762_28805__$1);
var G__28813 = null;
var G__28814 = (0);
var G__28815 = (0);
seq__28762_28795 = G__28812;
chunk__28763_28796 = G__28813;
count__28764_28797 = G__28814;
i__28765_28798 = G__28815;
continue;
}
} else {
}
}
break;
}


var G__28816 = cljs.core.next.call(null,seq__28754__$1);
var G__28817 = null;
var G__28818 = (0);
var G__28819 = (0);
seq__28754 = G__28816;
chunk__28755 = G__28817;
count__28756 = G__28818;
i__28757 = G__28819;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28820_28824 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28821_28825 = null;
var count__28822_28826 = (0);
var i__28823_28827 = (0);
while(true){
if((i__28823_28827 < count__28822_28826)){
var ns_28828 = cljs.core._nth.call(null,chunk__28821_28825,i__28823_28827);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28828);


var G__28829 = seq__28820_28824;
var G__28830 = chunk__28821_28825;
var G__28831 = count__28822_28826;
var G__28832 = (i__28823_28827 + (1));
seq__28820_28824 = G__28829;
chunk__28821_28825 = G__28830;
count__28822_28826 = G__28831;
i__28823_28827 = G__28832;
continue;
} else {
var temp__5457__auto___28833 = cljs.core.seq.call(null,seq__28820_28824);
if(temp__5457__auto___28833){
var seq__28820_28834__$1 = temp__5457__auto___28833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28820_28834__$1)){
var c__4351__auto___28835 = cljs.core.chunk_first.call(null,seq__28820_28834__$1);
var G__28836 = cljs.core.chunk_rest.call(null,seq__28820_28834__$1);
var G__28837 = c__4351__auto___28835;
var G__28838 = cljs.core.count.call(null,c__4351__auto___28835);
var G__28839 = (0);
seq__28820_28824 = G__28836;
chunk__28821_28825 = G__28837;
count__28822_28826 = G__28838;
i__28823_28827 = G__28839;
continue;
} else {
var ns_28840 = cljs.core.first.call(null,seq__28820_28834__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28840);


var G__28841 = cljs.core.next.call(null,seq__28820_28834__$1);
var G__28842 = null;
var G__28843 = (0);
var G__28844 = (0);
seq__28820_28824 = G__28841;
chunk__28821_28825 = G__28842;
count__28822_28826 = G__28843;
i__28823_28827 = G__28844;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28845__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28846__i = 0, G__28846__a = new Array(arguments.length -  0);
while (G__28846__i < G__28846__a.length) {G__28846__a[G__28846__i] = arguments[G__28846__i + 0]; ++G__28846__i;}
  args = new cljs.core.IndexedSeq(G__28846__a,0,null);
} 
return G__28845__delegate.call(this,args);};
G__28845.cljs$lang$maxFixedArity = 0;
G__28845.cljs$lang$applyTo = (function (arglist__28847){
var args = cljs.core.seq(arglist__28847);
return G__28845__delegate(args);
});
G__28845.cljs$core$IFn$_invoke$arity$variadic = G__28845__delegate;
return G__28845;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28848_SHARP_,p2__28849_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28848_SHARP_)].join('')),p2__28849_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28850_SHARP_,p2__28851_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28850_SHARP_)].join(''),p2__28851_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28852 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28852.addCallback(((function (G__28852){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28852))
);

G__28852.addErrback(((function (G__28852){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28852))
);

return G__28852;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28853 = cljs.core._EQ_;
var expr__28854 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28853.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28854))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__28853,expr__28854){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__28853,expr__28854))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__28853,expr__28854){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28856){if((e28856 instanceof Error)){
var e = e28856;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28856;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__28853,expr__28854))
} else {
if(cljs.core.truth_(pred__28853.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28854))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__28853.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__28854))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__28853.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28854))){
return ((function (pred__28853,expr__28854){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28857){if((e28857 instanceof Error)){
var e = e28857;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28857;

}
}})());
});
;})(pred__28853,expr__28854))
} else {
return ((function (pred__28853,expr__28854){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28853,expr__28854))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28858,callback){
var map__28859 = p__28858;
var map__28859__$1 = ((((!((map__28859 == null)))?(((((map__28859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28859):map__28859);
var file_msg = map__28859__$1;
var request_url = cljs.core.get.call(null,map__28859__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28859,map__28859__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28859,map__28859__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25501__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto__){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto__){
return (function (state_28883){
var state_val_28884 = (state_28883[(1)]);
if((state_val_28884 === (7))){
var inst_28879 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28885_28902 = state_28883__$1;
(statearr_28885_28902[(2)] = inst_28879);

(statearr_28885_28902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (1))){
var state_28883__$1 = state_28883;
var statearr_28886_28903 = state_28883__$1;
(statearr_28886_28903[(2)] = null);

(statearr_28886_28903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (4))){
var inst_28863 = (state_28883[(7)]);
var inst_28863__$1 = (state_28883[(2)]);
var state_28883__$1 = (function (){var statearr_28887 = state_28883;
(statearr_28887[(7)] = inst_28863__$1);

return statearr_28887;
})();
if(cljs.core.truth_(inst_28863__$1)){
var statearr_28888_28904 = state_28883__$1;
(statearr_28888_28904[(1)] = (5));

} else {
var statearr_28889_28905 = state_28883__$1;
(statearr_28889_28905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (6))){
var state_28883__$1 = state_28883;
var statearr_28890_28906 = state_28883__$1;
(statearr_28890_28906[(2)] = null);

(statearr_28890_28906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (3))){
var inst_28881 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28883__$1,inst_28881);
} else {
if((state_val_28884 === (2))){
var state_28883__$1 = state_28883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28883__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28884 === (11))){
var inst_28875 = (state_28883[(2)]);
var state_28883__$1 = (function (){var statearr_28891 = state_28883;
(statearr_28891[(8)] = inst_28875);

return statearr_28891;
})();
var statearr_28892_28907 = state_28883__$1;
(statearr_28892_28907[(2)] = null);

(statearr_28892_28907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (9))){
var inst_28867 = (state_28883[(9)]);
var inst_28869 = (state_28883[(10)]);
var inst_28871 = inst_28869.call(null,inst_28867);
var state_28883__$1 = state_28883;
var statearr_28893_28908 = state_28883__$1;
(statearr_28893_28908[(2)] = inst_28871);

(statearr_28893_28908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (5))){
var inst_28863 = (state_28883[(7)]);
var inst_28865 = figwheel.client.file_reloading.blocking_load.call(null,inst_28863);
var state_28883__$1 = state_28883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28883__$1,(8),inst_28865);
} else {
if((state_val_28884 === (10))){
var inst_28867 = (state_28883[(9)]);
var inst_28873 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28867);
var state_28883__$1 = state_28883;
var statearr_28894_28909 = state_28883__$1;
(statearr_28894_28909[(2)] = inst_28873);

(statearr_28894_28909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (8))){
var inst_28863 = (state_28883[(7)]);
var inst_28869 = (state_28883[(10)]);
var inst_28867 = (state_28883[(2)]);
var inst_28868 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28869__$1 = cljs.core.get.call(null,inst_28868,inst_28863);
var state_28883__$1 = (function (){var statearr_28895 = state_28883;
(statearr_28895[(9)] = inst_28867);

(statearr_28895[(10)] = inst_28869__$1);

return statearr_28895;
})();
if(cljs.core.truth_(inst_28869__$1)){
var statearr_28896_28910 = state_28883__$1;
(statearr_28896_28910[(1)] = (9));

} else {
var statearr_28897_28911 = state_28883__$1;
(statearr_28897_28911[(1)] = (10));

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
});})(c__25501__auto__))
;
return ((function (switch__25410__auto__,c__25501__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25411__auto__ = null;
var figwheel$client$file_reloading$state_machine__25411__auto____0 = (function (){
var statearr_28898 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28898[(0)] = figwheel$client$file_reloading$state_machine__25411__auto__);

(statearr_28898[(1)] = (1));

return statearr_28898;
});
var figwheel$client$file_reloading$state_machine__25411__auto____1 = (function (state_28883){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_28883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e28899){if((e28899 instanceof Object)){
var ex__25414__auto__ = e28899;
var statearr_28900_28912 = state_28883;
(statearr_28900_28912[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28913 = state_28883;
state_28883 = G__28913;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25411__auto__ = function(state_28883){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25411__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25411__auto____1.call(this,state_28883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25411__auto____0;
figwheel$client$file_reloading$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25411__auto____1;
return figwheel$client$file_reloading$state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto__))
})();
var state__25503__auto__ = (function (){var statearr_28901 = f__25502__auto__.call(null);
(statearr_28901[(6)] = c__25501__auto__);

return statearr_28901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto__))
);

return c__25501__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28914,callback){
var map__28915 = p__28914;
var map__28915__$1 = ((((!((map__28915 == null)))?(((((map__28915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28915):map__28915);
var file_msg = map__28915__$1;
var namespace = cljs.core.get.call(null,map__28915__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28915,map__28915__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28915,map__28915__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28917){
var map__28918 = p__28917;
var map__28918__$1 = ((((!((map__28918 == null)))?(((((map__28918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28918):map__28918);
var file_msg = map__28918__$1;
var namespace = cljs.core.get.call(null,map__28918__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28920){
var map__28921 = p__28920;
var map__28921__$1 = ((((!((map__28921 == null)))?(((((map__28921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28921):map__28921);
var file_msg = map__28921__$1;
var namespace = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28923,callback){
var map__28924 = p__28923;
var map__28924__$1 = ((((!((map__28924 == null)))?(((((map__28924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28924):map__28924);
var file_msg = map__28924__$1;
var request_url = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25501__auto___28974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___28974,out){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___28974,out){
return (function (state_28959){
var state_val_28960 = (state_28959[(1)]);
if((state_val_28960 === (1))){
var inst_28933 = cljs.core.seq.call(null,files);
var inst_28934 = cljs.core.first.call(null,inst_28933);
var inst_28935 = cljs.core.next.call(null,inst_28933);
var inst_28936 = files;
var state_28959__$1 = (function (){var statearr_28961 = state_28959;
(statearr_28961[(7)] = inst_28934);

(statearr_28961[(8)] = inst_28935);

(statearr_28961[(9)] = inst_28936);

return statearr_28961;
})();
var statearr_28962_28975 = state_28959__$1;
(statearr_28962_28975[(2)] = null);

(statearr_28962_28975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28960 === (2))){
var inst_28936 = (state_28959[(9)]);
var inst_28942 = (state_28959[(10)]);
var inst_28941 = cljs.core.seq.call(null,inst_28936);
var inst_28942__$1 = cljs.core.first.call(null,inst_28941);
var inst_28943 = cljs.core.next.call(null,inst_28941);
var inst_28944 = (inst_28942__$1 == null);
var inst_28945 = cljs.core.not.call(null,inst_28944);
var state_28959__$1 = (function (){var statearr_28963 = state_28959;
(statearr_28963[(11)] = inst_28943);

(statearr_28963[(10)] = inst_28942__$1);

return statearr_28963;
})();
if(inst_28945){
var statearr_28964_28976 = state_28959__$1;
(statearr_28964_28976[(1)] = (4));

} else {
var statearr_28965_28977 = state_28959__$1;
(statearr_28965_28977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28960 === (3))){
var inst_28957 = (state_28959[(2)]);
var state_28959__$1 = state_28959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28959__$1,inst_28957);
} else {
if((state_val_28960 === (4))){
var inst_28942 = (state_28959[(10)]);
var inst_28947 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28942);
var state_28959__$1 = state_28959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28959__$1,(7),inst_28947);
} else {
if((state_val_28960 === (5))){
var inst_28953 = cljs.core.async.close_BANG_.call(null,out);
var state_28959__$1 = state_28959;
var statearr_28966_28978 = state_28959__$1;
(statearr_28966_28978[(2)] = inst_28953);

(statearr_28966_28978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28960 === (6))){
var inst_28955 = (state_28959[(2)]);
var state_28959__$1 = state_28959;
var statearr_28967_28979 = state_28959__$1;
(statearr_28967_28979[(2)] = inst_28955);

(statearr_28967_28979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28960 === (7))){
var inst_28943 = (state_28959[(11)]);
var inst_28949 = (state_28959[(2)]);
var inst_28950 = cljs.core.async.put_BANG_.call(null,out,inst_28949);
var inst_28936 = inst_28943;
var state_28959__$1 = (function (){var statearr_28968 = state_28959;
(statearr_28968[(12)] = inst_28950);

(statearr_28968[(9)] = inst_28936);

return statearr_28968;
})();
var statearr_28969_28980 = state_28959__$1;
(statearr_28969_28980[(2)] = null);

(statearr_28969_28980[(1)] = (2));


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
});})(c__25501__auto___28974,out))
;
return ((function (switch__25410__auto__,c__25501__auto___28974,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25411__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25411__auto____0 = (function (){
var statearr_28970 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28970[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25411__auto__);

(statearr_28970[(1)] = (1));

return statearr_28970;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25411__auto____1 = (function (state_28959){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_28959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e28971){if((e28971 instanceof Object)){
var ex__25414__auto__ = e28971;
var statearr_28972_28981 = state_28959;
(statearr_28972_28981[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28982 = state_28959;
state_28959 = G__28982;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25411__auto__ = function(state_28959){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25411__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25411__auto____1.call(this,state_28959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25411__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25411__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___28974,out))
})();
var state__25503__auto__ = (function (){var statearr_28973 = f__25502__auto__.call(null);
(statearr_28973[(6)] = c__25501__auto___28974);

return statearr_28973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___28974,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28983,opts){
var map__28984 = p__28983;
var map__28984__$1 = ((((!((map__28984 == null)))?(((((map__28984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28984):map__28984);
var eval_body = cljs.core.get.call(null,map__28984__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28984__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28986){var e = e28986;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28987_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28987_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28988){
var vec__28989 = p__28988;
var k = cljs.core.nth.call(null,vec__28989,(0),null);
var v = cljs.core.nth.call(null,vec__28989,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28992){
var vec__28993 = p__28992;
var k = cljs.core.nth.call(null,vec__28993,(0),null);
var v = cljs.core.nth.call(null,vec__28993,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28999,p__29000){
var map__29001 = p__28999;
var map__29001__$1 = ((((!((map__29001 == null)))?(((((map__29001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29001):map__29001);
var opts = map__29001__$1;
var before_jsload = cljs.core.get.call(null,map__29001__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29001__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29001__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29002 = p__29000;
var map__29002__$1 = ((((!((map__29002 == null)))?(((((map__29002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29002):map__29002);
var msg = map__29002__$1;
var files = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25501__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29156){
var state_val_29157 = (state_29156[(1)]);
if((state_val_29157 === (7))){
var inst_29018 = (state_29156[(7)]);
var inst_29019 = (state_29156[(8)]);
var inst_29016 = (state_29156[(9)]);
var inst_29017 = (state_29156[(10)]);
var inst_29024 = cljs.core._nth.call(null,inst_29017,inst_29019);
var inst_29025 = figwheel.client.file_reloading.eval_body.call(null,inst_29024,opts);
var inst_29026 = (inst_29019 + (1));
var tmp29158 = inst_29018;
var tmp29159 = inst_29016;
var tmp29160 = inst_29017;
var inst_29016__$1 = tmp29159;
var inst_29017__$1 = tmp29160;
var inst_29018__$1 = tmp29158;
var inst_29019__$1 = inst_29026;
var state_29156__$1 = (function (){var statearr_29161 = state_29156;
(statearr_29161[(7)] = inst_29018__$1);

(statearr_29161[(8)] = inst_29019__$1);

(statearr_29161[(9)] = inst_29016__$1);

(statearr_29161[(11)] = inst_29025);

(statearr_29161[(10)] = inst_29017__$1);

return statearr_29161;
})();
var statearr_29162_29245 = state_29156__$1;
(statearr_29162_29245[(2)] = null);

(statearr_29162_29245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (20))){
var inst_29059 = (state_29156[(12)]);
var inst_29067 = figwheel.client.file_reloading.sort_files.call(null,inst_29059);
var state_29156__$1 = state_29156;
var statearr_29163_29246 = state_29156__$1;
(statearr_29163_29246[(2)] = inst_29067);

(statearr_29163_29246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (27))){
var state_29156__$1 = state_29156;
var statearr_29164_29247 = state_29156__$1;
(statearr_29164_29247[(2)] = null);

(statearr_29164_29247[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (1))){
var inst_29008 = (state_29156[(13)]);
var inst_29005 = before_jsload.call(null,files);
var inst_29006 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29007 = (function (){return ((function (inst_29008,inst_29005,inst_29006,state_val_29157,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28996_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28996_SHARP_);
});
;})(inst_29008,inst_29005,inst_29006,state_val_29157,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29008__$1 = cljs.core.filter.call(null,inst_29007,files);
var inst_29009 = cljs.core.not_empty.call(null,inst_29008__$1);
var state_29156__$1 = (function (){var statearr_29165 = state_29156;
(statearr_29165[(13)] = inst_29008__$1);

(statearr_29165[(14)] = inst_29005);

(statearr_29165[(15)] = inst_29006);

return statearr_29165;
})();
if(cljs.core.truth_(inst_29009)){
var statearr_29166_29248 = state_29156__$1;
(statearr_29166_29248[(1)] = (2));

} else {
var statearr_29167_29249 = state_29156__$1;
(statearr_29167_29249[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (24))){
var state_29156__$1 = state_29156;
var statearr_29168_29250 = state_29156__$1;
(statearr_29168_29250[(2)] = null);

(statearr_29168_29250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (39))){
var inst_29109 = (state_29156[(16)]);
var state_29156__$1 = state_29156;
var statearr_29169_29251 = state_29156__$1;
(statearr_29169_29251[(2)] = inst_29109);

(statearr_29169_29251[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (46))){
var inst_29151 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
var statearr_29170_29252 = state_29156__$1;
(statearr_29170_29252[(2)] = inst_29151);

(statearr_29170_29252[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (4))){
var inst_29053 = (state_29156[(2)]);
var inst_29054 = cljs.core.List.EMPTY;
var inst_29055 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29054);
var inst_29056 = (function (){return ((function (inst_29053,inst_29054,inst_29055,state_val_29157,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28997_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28997_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28997_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28997_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_29053,inst_29054,inst_29055,state_val_29157,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29057 = cljs.core.filter.call(null,inst_29056,files);
var inst_29058 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29059 = cljs.core.concat.call(null,inst_29057,inst_29058);
var state_29156__$1 = (function (){var statearr_29171 = state_29156;
(statearr_29171[(17)] = inst_29055);

(statearr_29171[(12)] = inst_29059);

(statearr_29171[(18)] = inst_29053);

return statearr_29171;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29172_29253 = state_29156__$1;
(statearr_29172_29253[(1)] = (16));

} else {
var statearr_29173_29254 = state_29156__$1;
(statearr_29173_29254[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (15))){
var inst_29043 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
var statearr_29174_29255 = state_29156__$1;
(statearr_29174_29255[(2)] = inst_29043);

(statearr_29174_29255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (21))){
var inst_29069 = (state_29156[(19)]);
var inst_29069__$1 = (state_29156[(2)]);
var inst_29070 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29069__$1);
var state_29156__$1 = (function (){var statearr_29175 = state_29156;
(statearr_29175[(19)] = inst_29069__$1);

return statearr_29175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29156__$1,(22),inst_29070);
} else {
if((state_val_29157 === (31))){
var inst_29154 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29156__$1,inst_29154);
} else {
if((state_val_29157 === (32))){
var inst_29109 = (state_29156[(16)]);
var inst_29114 = inst_29109.cljs$lang$protocol_mask$partition0$;
var inst_29115 = (inst_29114 & (64));
var inst_29116 = inst_29109.cljs$core$ISeq$;
var inst_29117 = (cljs.core.PROTOCOL_SENTINEL === inst_29116);
var inst_29118 = ((inst_29115) || (inst_29117));
var state_29156__$1 = state_29156;
if(cljs.core.truth_(inst_29118)){
var statearr_29176_29256 = state_29156__$1;
(statearr_29176_29256[(1)] = (35));

} else {
var statearr_29177_29257 = state_29156__$1;
(statearr_29177_29257[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (40))){
var inst_29131 = (state_29156[(20)]);
var inst_29130 = (state_29156[(2)]);
var inst_29131__$1 = cljs.core.get.call(null,inst_29130,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29132 = cljs.core.get.call(null,inst_29130,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29133 = cljs.core.not_empty.call(null,inst_29131__$1);
var state_29156__$1 = (function (){var statearr_29178 = state_29156;
(statearr_29178[(20)] = inst_29131__$1);

(statearr_29178[(21)] = inst_29132);

return statearr_29178;
})();
if(cljs.core.truth_(inst_29133)){
var statearr_29179_29258 = state_29156__$1;
(statearr_29179_29258[(1)] = (41));

} else {
var statearr_29180_29259 = state_29156__$1;
(statearr_29180_29259[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (33))){
var state_29156__$1 = state_29156;
var statearr_29181_29260 = state_29156__$1;
(statearr_29181_29260[(2)] = false);

(statearr_29181_29260[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (13))){
var inst_29029 = (state_29156[(22)]);
var inst_29033 = cljs.core.chunk_first.call(null,inst_29029);
var inst_29034 = cljs.core.chunk_rest.call(null,inst_29029);
var inst_29035 = cljs.core.count.call(null,inst_29033);
var inst_29016 = inst_29034;
var inst_29017 = inst_29033;
var inst_29018 = inst_29035;
var inst_29019 = (0);
var state_29156__$1 = (function (){var statearr_29182 = state_29156;
(statearr_29182[(7)] = inst_29018);

(statearr_29182[(8)] = inst_29019);

(statearr_29182[(9)] = inst_29016);

(statearr_29182[(10)] = inst_29017);

return statearr_29182;
})();
var statearr_29183_29261 = state_29156__$1;
(statearr_29183_29261[(2)] = null);

(statearr_29183_29261[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (22))){
var inst_29069 = (state_29156[(19)]);
var inst_29073 = (state_29156[(23)]);
var inst_29077 = (state_29156[(24)]);
var inst_29072 = (state_29156[(25)]);
var inst_29072__$1 = (state_29156[(2)]);
var inst_29073__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29072__$1);
var inst_29074 = (function (){var all_files = inst_29069;
var res_SINGLEQUOTE_ = inst_29072__$1;
var res = inst_29073__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29069,inst_29073,inst_29077,inst_29072,inst_29072__$1,inst_29073__$1,state_val_29157,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28998_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28998_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29069,inst_29073,inst_29077,inst_29072,inst_29072__$1,inst_29073__$1,state_val_29157,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29075 = cljs.core.filter.call(null,inst_29074,inst_29072__$1);
var inst_29076 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29077__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29076);
var inst_29078 = cljs.core.not_empty.call(null,inst_29077__$1);
var state_29156__$1 = (function (){var statearr_29184 = state_29156;
(statearr_29184[(26)] = inst_29075);

(statearr_29184[(23)] = inst_29073__$1);

(statearr_29184[(24)] = inst_29077__$1);

(statearr_29184[(25)] = inst_29072__$1);

return statearr_29184;
})();
if(cljs.core.truth_(inst_29078)){
var statearr_29185_29262 = state_29156__$1;
(statearr_29185_29262[(1)] = (23));

} else {
var statearr_29186_29263 = state_29156__$1;
(statearr_29186_29263[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (36))){
var state_29156__$1 = state_29156;
var statearr_29187_29264 = state_29156__$1;
(statearr_29187_29264[(2)] = false);

(statearr_29187_29264[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (41))){
var inst_29131 = (state_29156[(20)]);
var inst_29135 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29136 = cljs.core.map.call(null,inst_29135,inst_29131);
var inst_29137 = cljs.core.pr_str.call(null,inst_29136);
var inst_29138 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29137)].join('');
var inst_29139 = figwheel.client.utils.log.call(null,inst_29138);
var state_29156__$1 = state_29156;
var statearr_29188_29265 = state_29156__$1;
(statearr_29188_29265[(2)] = inst_29139);

(statearr_29188_29265[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (43))){
var inst_29132 = (state_29156[(21)]);
var inst_29142 = (state_29156[(2)]);
var inst_29143 = cljs.core.not_empty.call(null,inst_29132);
var state_29156__$1 = (function (){var statearr_29189 = state_29156;
(statearr_29189[(27)] = inst_29142);

return statearr_29189;
})();
if(cljs.core.truth_(inst_29143)){
var statearr_29190_29266 = state_29156__$1;
(statearr_29190_29266[(1)] = (44));

} else {
var statearr_29191_29267 = state_29156__$1;
(statearr_29191_29267[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (29))){
var inst_29109 = (state_29156[(16)]);
var inst_29069 = (state_29156[(19)]);
var inst_29075 = (state_29156[(26)]);
var inst_29073 = (state_29156[(23)]);
var inst_29077 = (state_29156[(24)]);
var inst_29072 = (state_29156[(25)]);
var inst_29105 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29108 = (function (){var all_files = inst_29069;
var res_SINGLEQUOTE_ = inst_29072;
var res = inst_29073;
var files_not_loaded = inst_29075;
var dependencies_that_loaded = inst_29077;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29109,inst_29069,inst_29075,inst_29073,inst_29077,inst_29072,inst_29105,state_val_29157,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29107){
var map__29192 = p__29107;
var map__29192__$1 = ((((!((map__29192 == null)))?(((((map__29192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29192):map__29192);
var namespace = cljs.core.get.call(null,map__29192__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29109,inst_29069,inst_29075,inst_29073,inst_29077,inst_29072,inst_29105,state_val_29157,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29109__$1 = cljs.core.group_by.call(null,inst_29108,inst_29075);
var inst_29111 = (inst_29109__$1 == null);
var inst_29112 = cljs.core.not.call(null,inst_29111);
var state_29156__$1 = (function (){var statearr_29194 = state_29156;
(statearr_29194[(28)] = inst_29105);

(statearr_29194[(16)] = inst_29109__$1);

return statearr_29194;
})();
if(inst_29112){
var statearr_29195_29268 = state_29156__$1;
(statearr_29195_29268[(1)] = (32));

} else {
var statearr_29196_29269 = state_29156__$1;
(statearr_29196_29269[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (44))){
var inst_29132 = (state_29156[(21)]);
var inst_29145 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29132);
var inst_29146 = cljs.core.pr_str.call(null,inst_29145);
var inst_29147 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29146)].join('');
var inst_29148 = figwheel.client.utils.log.call(null,inst_29147);
var state_29156__$1 = state_29156;
var statearr_29197_29270 = state_29156__$1;
(statearr_29197_29270[(2)] = inst_29148);

(statearr_29197_29270[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (6))){
var inst_29050 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
var statearr_29198_29271 = state_29156__$1;
(statearr_29198_29271[(2)] = inst_29050);

(statearr_29198_29271[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (28))){
var inst_29075 = (state_29156[(26)]);
var inst_29102 = (state_29156[(2)]);
var inst_29103 = cljs.core.not_empty.call(null,inst_29075);
var state_29156__$1 = (function (){var statearr_29199 = state_29156;
(statearr_29199[(29)] = inst_29102);

return statearr_29199;
})();
if(cljs.core.truth_(inst_29103)){
var statearr_29200_29272 = state_29156__$1;
(statearr_29200_29272[(1)] = (29));

} else {
var statearr_29201_29273 = state_29156__$1;
(statearr_29201_29273[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (25))){
var inst_29073 = (state_29156[(23)]);
var inst_29089 = (state_29156[(2)]);
var inst_29090 = cljs.core.not_empty.call(null,inst_29073);
var state_29156__$1 = (function (){var statearr_29202 = state_29156;
(statearr_29202[(30)] = inst_29089);

return statearr_29202;
})();
if(cljs.core.truth_(inst_29090)){
var statearr_29203_29274 = state_29156__$1;
(statearr_29203_29274[(1)] = (26));

} else {
var statearr_29204_29275 = state_29156__$1;
(statearr_29204_29275[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (34))){
var inst_29125 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
if(cljs.core.truth_(inst_29125)){
var statearr_29205_29276 = state_29156__$1;
(statearr_29205_29276[(1)] = (38));

} else {
var statearr_29206_29277 = state_29156__$1;
(statearr_29206_29277[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (17))){
var state_29156__$1 = state_29156;
var statearr_29207_29278 = state_29156__$1;
(statearr_29207_29278[(2)] = recompile_dependents);

(statearr_29207_29278[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (3))){
var state_29156__$1 = state_29156;
var statearr_29208_29279 = state_29156__$1;
(statearr_29208_29279[(2)] = null);

(statearr_29208_29279[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (12))){
var inst_29046 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
var statearr_29209_29280 = state_29156__$1;
(statearr_29209_29280[(2)] = inst_29046);

(statearr_29209_29280[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (2))){
var inst_29008 = (state_29156[(13)]);
var inst_29015 = cljs.core.seq.call(null,inst_29008);
var inst_29016 = inst_29015;
var inst_29017 = null;
var inst_29018 = (0);
var inst_29019 = (0);
var state_29156__$1 = (function (){var statearr_29210 = state_29156;
(statearr_29210[(7)] = inst_29018);

(statearr_29210[(8)] = inst_29019);

(statearr_29210[(9)] = inst_29016);

(statearr_29210[(10)] = inst_29017);

return statearr_29210;
})();
var statearr_29211_29281 = state_29156__$1;
(statearr_29211_29281[(2)] = null);

(statearr_29211_29281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (23))){
var inst_29069 = (state_29156[(19)]);
var inst_29075 = (state_29156[(26)]);
var inst_29073 = (state_29156[(23)]);
var inst_29077 = (state_29156[(24)]);
var inst_29072 = (state_29156[(25)]);
var inst_29080 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29082 = (function (){var all_files = inst_29069;
var res_SINGLEQUOTE_ = inst_29072;
var res = inst_29073;
var files_not_loaded = inst_29075;
var dependencies_that_loaded = inst_29077;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29069,inst_29075,inst_29073,inst_29077,inst_29072,inst_29080,state_val_29157,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29081){
var map__29212 = p__29081;
var map__29212__$1 = ((((!((map__29212 == null)))?(((((map__29212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29212):map__29212);
var request_url = cljs.core.get.call(null,map__29212__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29069,inst_29075,inst_29073,inst_29077,inst_29072,inst_29080,state_val_29157,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29083 = cljs.core.reverse.call(null,inst_29077);
var inst_29084 = cljs.core.map.call(null,inst_29082,inst_29083);
var inst_29085 = cljs.core.pr_str.call(null,inst_29084);
var inst_29086 = figwheel.client.utils.log.call(null,inst_29085);
var state_29156__$1 = (function (){var statearr_29214 = state_29156;
(statearr_29214[(31)] = inst_29080);

return statearr_29214;
})();
var statearr_29215_29282 = state_29156__$1;
(statearr_29215_29282[(2)] = inst_29086);

(statearr_29215_29282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (35))){
var state_29156__$1 = state_29156;
var statearr_29216_29283 = state_29156__$1;
(statearr_29216_29283[(2)] = true);

(statearr_29216_29283[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (19))){
var inst_29059 = (state_29156[(12)]);
var inst_29065 = figwheel.client.file_reloading.expand_files.call(null,inst_29059);
var state_29156__$1 = state_29156;
var statearr_29217_29284 = state_29156__$1;
(statearr_29217_29284[(2)] = inst_29065);

(statearr_29217_29284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (11))){
var state_29156__$1 = state_29156;
var statearr_29218_29285 = state_29156__$1;
(statearr_29218_29285[(2)] = null);

(statearr_29218_29285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (9))){
var inst_29048 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
var statearr_29219_29286 = state_29156__$1;
(statearr_29219_29286[(2)] = inst_29048);

(statearr_29219_29286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (5))){
var inst_29018 = (state_29156[(7)]);
var inst_29019 = (state_29156[(8)]);
var inst_29021 = (inst_29019 < inst_29018);
var inst_29022 = inst_29021;
var state_29156__$1 = state_29156;
if(cljs.core.truth_(inst_29022)){
var statearr_29220_29287 = state_29156__$1;
(statearr_29220_29287[(1)] = (7));

} else {
var statearr_29221_29288 = state_29156__$1;
(statearr_29221_29288[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (14))){
var inst_29029 = (state_29156[(22)]);
var inst_29038 = cljs.core.first.call(null,inst_29029);
var inst_29039 = figwheel.client.file_reloading.eval_body.call(null,inst_29038,opts);
var inst_29040 = cljs.core.next.call(null,inst_29029);
var inst_29016 = inst_29040;
var inst_29017 = null;
var inst_29018 = (0);
var inst_29019 = (0);
var state_29156__$1 = (function (){var statearr_29222 = state_29156;
(statearr_29222[(7)] = inst_29018);

(statearr_29222[(32)] = inst_29039);

(statearr_29222[(8)] = inst_29019);

(statearr_29222[(9)] = inst_29016);

(statearr_29222[(10)] = inst_29017);

return statearr_29222;
})();
var statearr_29223_29289 = state_29156__$1;
(statearr_29223_29289[(2)] = null);

(statearr_29223_29289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (45))){
var state_29156__$1 = state_29156;
var statearr_29224_29290 = state_29156__$1;
(statearr_29224_29290[(2)] = null);

(statearr_29224_29290[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (26))){
var inst_29069 = (state_29156[(19)]);
var inst_29075 = (state_29156[(26)]);
var inst_29073 = (state_29156[(23)]);
var inst_29077 = (state_29156[(24)]);
var inst_29072 = (state_29156[(25)]);
var inst_29092 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29094 = (function (){var all_files = inst_29069;
var res_SINGLEQUOTE_ = inst_29072;
var res = inst_29073;
var files_not_loaded = inst_29075;
var dependencies_that_loaded = inst_29077;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29069,inst_29075,inst_29073,inst_29077,inst_29072,inst_29092,state_val_29157,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29093){
var map__29225 = p__29093;
var map__29225__$1 = ((((!((map__29225 == null)))?(((((map__29225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29225):map__29225);
var namespace = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29069,inst_29075,inst_29073,inst_29077,inst_29072,inst_29092,state_val_29157,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29095 = cljs.core.map.call(null,inst_29094,inst_29073);
var inst_29096 = cljs.core.pr_str.call(null,inst_29095);
var inst_29097 = figwheel.client.utils.log.call(null,inst_29096);
var inst_29098 = (function (){var all_files = inst_29069;
var res_SINGLEQUOTE_ = inst_29072;
var res = inst_29073;
var files_not_loaded = inst_29075;
var dependencies_that_loaded = inst_29077;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29069,inst_29075,inst_29073,inst_29077,inst_29072,inst_29092,inst_29094,inst_29095,inst_29096,inst_29097,state_val_29157,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29069,inst_29075,inst_29073,inst_29077,inst_29072,inst_29092,inst_29094,inst_29095,inst_29096,inst_29097,state_val_29157,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29099 = setTimeout(inst_29098,(10));
var state_29156__$1 = (function (){var statearr_29227 = state_29156;
(statearr_29227[(33)] = inst_29097);

(statearr_29227[(34)] = inst_29092);

return statearr_29227;
})();
var statearr_29228_29291 = state_29156__$1;
(statearr_29228_29291[(2)] = inst_29099);

(statearr_29228_29291[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (16))){
var state_29156__$1 = state_29156;
var statearr_29229_29292 = state_29156__$1;
(statearr_29229_29292[(2)] = reload_dependents);

(statearr_29229_29292[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (38))){
var inst_29109 = (state_29156[(16)]);
var inst_29127 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29109);
var state_29156__$1 = state_29156;
var statearr_29230_29293 = state_29156__$1;
(statearr_29230_29293[(2)] = inst_29127);

(statearr_29230_29293[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (30))){
var state_29156__$1 = state_29156;
var statearr_29231_29294 = state_29156__$1;
(statearr_29231_29294[(2)] = null);

(statearr_29231_29294[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (10))){
var inst_29029 = (state_29156[(22)]);
var inst_29031 = cljs.core.chunked_seq_QMARK_.call(null,inst_29029);
var state_29156__$1 = state_29156;
if(inst_29031){
var statearr_29232_29295 = state_29156__$1;
(statearr_29232_29295[(1)] = (13));

} else {
var statearr_29233_29296 = state_29156__$1;
(statearr_29233_29296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (18))){
var inst_29063 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
if(cljs.core.truth_(inst_29063)){
var statearr_29234_29297 = state_29156__$1;
(statearr_29234_29297[(1)] = (19));

} else {
var statearr_29235_29298 = state_29156__$1;
(statearr_29235_29298[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (42))){
var state_29156__$1 = state_29156;
var statearr_29236_29299 = state_29156__$1;
(statearr_29236_29299[(2)] = null);

(statearr_29236_29299[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (37))){
var inst_29122 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
var statearr_29237_29300 = state_29156__$1;
(statearr_29237_29300[(2)] = inst_29122);

(statearr_29237_29300[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (8))){
var inst_29029 = (state_29156[(22)]);
var inst_29016 = (state_29156[(9)]);
var inst_29029__$1 = cljs.core.seq.call(null,inst_29016);
var state_29156__$1 = (function (){var statearr_29238 = state_29156;
(statearr_29238[(22)] = inst_29029__$1);

return statearr_29238;
})();
if(inst_29029__$1){
var statearr_29239_29301 = state_29156__$1;
(statearr_29239_29301[(1)] = (10));

} else {
var statearr_29240_29302 = state_29156__$1;
(statearr_29240_29302[(1)] = (11));

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
});})(c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25410__auto__,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25411__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25411__auto____0 = (function (){
var statearr_29241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29241[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25411__auto__);

(statearr_29241[(1)] = (1));

return statearr_29241;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25411__auto____1 = (function (state_29156){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_29156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e29242){if((e29242 instanceof Object)){
var ex__25414__auto__ = e29242;
var statearr_29243_29303 = state_29156;
(statearr_29243_29303[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29304 = state_29156;
state_29156 = G__29304;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25411__auto__ = function(state_29156){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25411__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25411__auto____1.call(this,state_29156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25411__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25411__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25503__auto__ = (function (){var statearr_29244 = f__25502__auto__.call(null);
(statearr_29244[(6)] = c__25501__auto__);

return statearr_29244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto__,map__29001,map__29001__$1,opts,before_jsload,on_jsload,reload_dependents,map__29002,map__29002__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25501__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29307,link){
var map__29308 = p__29307;
var map__29308__$1 = ((((!((map__29308 == null)))?(((((map__29308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29308):map__29308);
var file = cljs.core.get.call(null,map__29308__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29308,map__29308__$1,file){
return (function (p1__29305_SHARP_,p2__29306_SHARP_){
if(cljs.core._EQ_.call(null,p1__29305_SHARP_,p2__29306_SHARP_)){
return p1__29305_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29308,map__29308__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29311){
var map__29312 = p__29311;
var map__29312__$1 = ((((!((map__29312 == null)))?(((((map__29312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29312):map__29312);
var match_length = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29310_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29310_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29314_SHARP_,p2__29315_SHARP_){
return cljs.core.assoc.call(null,p1__29314_SHARP_,cljs.core.get.call(null,p2__29315_SHARP_,key),p2__29315_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29316 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29316);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29316);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29317,p__29318){
var map__29319 = p__29317;
var map__29319__$1 = ((((!((map__29319 == null)))?(((((map__29319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29319):map__29319);
var on_cssload = cljs.core.get.call(null,map__29319__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29320 = p__29318;
var map__29320__$1 = ((((!((map__29320 == null)))?(((((map__29320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29320):map__29320);
var files_msg = map__29320__$1;
var files = cljs.core.get.call(null,map__29320__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1530909573751
