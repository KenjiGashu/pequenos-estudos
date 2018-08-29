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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29438_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29438_SHARP_));
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
var seq__29439 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29440 = null;
var count__29441 = (0);
var i__29442 = (0);
while(true){
if((i__29442 < count__29441)){
var n = cljs.core._nth.call(null,chunk__29440,i__29442);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29443 = seq__29439;
var G__29444 = chunk__29440;
var G__29445 = count__29441;
var G__29446 = (i__29442 + (1));
seq__29439 = G__29443;
chunk__29440 = G__29444;
count__29441 = G__29445;
i__29442 = G__29446;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29439);
if(temp__5457__auto__){
var seq__29439__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29439__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__29439__$1);
var G__29447 = cljs.core.chunk_rest.call(null,seq__29439__$1);
var G__29448 = c__4351__auto__;
var G__29449 = cljs.core.count.call(null,c__4351__auto__);
var G__29450 = (0);
seq__29439 = G__29447;
chunk__29440 = G__29448;
count__29441 = G__29449;
i__29442 = G__29450;
continue;
} else {
var n = cljs.core.first.call(null,seq__29439__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29451 = cljs.core.next.call(null,seq__29439__$1);
var G__29452 = null;
var G__29453 = (0);
var G__29454 = (0);
seq__29439 = G__29451;
chunk__29440 = G__29452;
count__29441 = G__29453;
i__29442 = G__29454;
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
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29455){
var vec__29456 = p__29455;
var _ = cljs.core.nth.call(null,vec__29456,(0),null);
var v = cljs.core.nth.call(null,vec__29456,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__29459){
var vec__29460 = p__29459;
var k = cljs.core.nth.call(null,vec__29460,(0),null);
var v = cljs.core.nth.call(null,vec__29460,(1),null);
return (k > current_depth);
}),topo_state));
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

var seq__29472_29480 = cljs.core.seq.call(null,deps);
var chunk__29473_29481 = null;
var count__29474_29482 = (0);
var i__29475_29483 = (0);
while(true){
if((i__29475_29483 < count__29474_29482)){
var dep_29484 = cljs.core._nth.call(null,chunk__29473_29481,i__29475_29483);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_29484;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29484));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29484,(depth + (1)),state);
} else {
}


var G__29485 = seq__29472_29480;
var G__29486 = chunk__29473_29481;
var G__29487 = count__29474_29482;
var G__29488 = (i__29475_29483 + (1));
seq__29472_29480 = G__29485;
chunk__29473_29481 = G__29486;
count__29474_29482 = G__29487;
i__29475_29483 = G__29488;
continue;
} else {
var temp__5457__auto___29489 = cljs.core.seq.call(null,seq__29472_29480);
if(temp__5457__auto___29489){
var seq__29472_29490__$1 = temp__5457__auto___29489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29472_29490__$1)){
var c__4351__auto___29491 = cljs.core.chunk_first.call(null,seq__29472_29490__$1);
var G__29492 = cljs.core.chunk_rest.call(null,seq__29472_29490__$1);
var G__29493 = c__4351__auto___29491;
var G__29494 = cljs.core.count.call(null,c__4351__auto___29491);
var G__29495 = (0);
seq__29472_29480 = G__29492;
chunk__29473_29481 = G__29493;
count__29474_29482 = G__29494;
i__29475_29483 = G__29495;
continue;
} else {
var dep_29496 = cljs.core.first.call(null,seq__29472_29490__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_29496;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29496));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29496,(depth + (1)),state);
} else {
}


var G__29497 = cljs.core.next.call(null,seq__29472_29490__$1);
var G__29498 = null;
var G__29499 = (0);
var G__29500 = (0);
seq__29472_29480 = G__29497;
chunk__29473_29481 = G__29498;
count__29474_29482 = G__29499;
i__29475_29483 = G__29500;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29476){
var vec__29477 = p__29476;
var seq__29478 = cljs.core.seq.call(null,vec__29477);
var first__29479 = cljs.core.first.call(null,seq__29478);
var seq__29478__$1 = cljs.core.next.call(null,seq__29478);
var x = first__29479;
var xs = seq__29478__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29477,seq__29478,first__29479,seq__29478__$1,x,xs,get_deps__$1){
return (function (p1__29463_SHARP_){
return clojure.set.difference.call(null,p1__29463_SHARP_,x);
});})(vec__29477,seq__29478,first__29479,seq__29478__$1,x,xs,get_deps__$1))
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
var seq__29501 = cljs.core.seq.call(null,provides);
var chunk__29502 = null;
var count__29503 = (0);
var i__29504 = (0);
while(true){
if((i__29504 < count__29503)){
var prov = cljs.core._nth.call(null,chunk__29502,i__29504);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29505_29513 = cljs.core.seq.call(null,requires);
var chunk__29506_29514 = null;
var count__29507_29515 = (0);
var i__29508_29516 = (0);
while(true){
if((i__29508_29516 < count__29507_29515)){
var req_29517 = cljs.core._nth.call(null,chunk__29506_29514,i__29508_29516);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29517,prov);


var G__29518 = seq__29505_29513;
var G__29519 = chunk__29506_29514;
var G__29520 = count__29507_29515;
var G__29521 = (i__29508_29516 + (1));
seq__29505_29513 = G__29518;
chunk__29506_29514 = G__29519;
count__29507_29515 = G__29520;
i__29508_29516 = G__29521;
continue;
} else {
var temp__5457__auto___29522 = cljs.core.seq.call(null,seq__29505_29513);
if(temp__5457__auto___29522){
var seq__29505_29523__$1 = temp__5457__auto___29522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29505_29523__$1)){
var c__4351__auto___29524 = cljs.core.chunk_first.call(null,seq__29505_29523__$1);
var G__29525 = cljs.core.chunk_rest.call(null,seq__29505_29523__$1);
var G__29526 = c__4351__auto___29524;
var G__29527 = cljs.core.count.call(null,c__4351__auto___29524);
var G__29528 = (0);
seq__29505_29513 = G__29525;
chunk__29506_29514 = G__29526;
count__29507_29515 = G__29527;
i__29508_29516 = G__29528;
continue;
} else {
var req_29529 = cljs.core.first.call(null,seq__29505_29523__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29529,prov);


var G__29530 = cljs.core.next.call(null,seq__29505_29523__$1);
var G__29531 = null;
var G__29532 = (0);
var G__29533 = (0);
seq__29505_29513 = G__29530;
chunk__29506_29514 = G__29531;
count__29507_29515 = G__29532;
i__29508_29516 = G__29533;
continue;
}
} else {
}
}
break;
}


var G__29534 = seq__29501;
var G__29535 = chunk__29502;
var G__29536 = count__29503;
var G__29537 = (i__29504 + (1));
seq__29501 = G__29534;
chunk__29502 = G__29535;
count__29503 = G__29536;
i__29504 = G__29537;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29501);
if(temp__5457__auto__){
var seq__29501__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29501__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__29501__$1);
var G__29538 = cljs.core.chunk_rest.call(null,seq__29501__$1);
var G__29539 = c__4351__auto__;
var G__29540 = cljs.core.count.call(null,c__4351__auto__);
var G__29541 = (0);
seq__29501 = G__29538;
chunk__29502 = G__29539;
count__29503 = G__29540;
i__29504 = G__29541;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29501__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29509_29542 = cljs.core.seq.call(null,requires);
var chunk__29510_29543 = null;
var count__29511_29544 = (0);
var i__29512_29545 = (0);
while(true){
if((i__29512_29545 < count__29511_29544)){
var req_29546 = cljs.core._nth.call(null,chunk__29510_29543,i__29512_29545);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29546,prov);


var G__29547 = seq__29509_29542;
var G__29548 = chunk__29510_29543;
var G__29549 = count__29511_29544;
var G__29550 = (i__29512_29545 + (1));
seq__29509_29542 = G__29547;
chunk__29510_29543 = G__29548;
count__29511_29544 = G__29549;
i__29512_29545 = G__29550;
continue;
} else {
var temp__5457__auto___29551__$1 = cljs.core.seq.call(null,seq__29509_29542);
if(temp__5457__auto___29551__$1){
var seq__29509_29552__$1 = temp__5457__auto___29551__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29509_29552__$1)){
var c__4351__auto___29553 = cljs.core.chunk_first.call(null,seq__29509_29552__$1);
var G__29554 = cljs.core.chunk_rest.call(null,seq__29509_29552__$1);
var G__29555 = c__4351__auto___29553;
var G__29556 = cljs.core.count.call(null,c__4351__auto___29553);
var G__29557 = (0);
seq__29509_29542 = G__29554;
chunk__29510_29543 = G__29555;
count__29511_29544 = G__29556;
i__29512_29545 = G__29557;
continue;
} else {
var req_29558 = cljs.core.first.call(null,seq__29509_29552__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29558,prov);


var G__29559 = cljs.core.next.call(null,seq__29509_29552__$1);
var G__29560 = null;
var G__29561 = (0);
var G__29562 = (0);
seq__29509_29542 = G__29559;
chunk__29510_29543 = G__29560;
count__29511_29544 = G__29561;
i__29512_29545 = G__29562;
continue;
}
} else {
}
}
break;
}


var G__29563 = cljs.core.next.call(null,seq__29501__$1);
var G__29564 = null;
var G__29565 = (0);
var G__29566 = (0);
seq__29501 = G__29563;
chunk__29502 = G__29564;
count__29503 = G__29565;
i__29504 = G__29566;
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
var seq__29567_29571 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29568_29572 = null;
var count__29569_29573 = (0);
var i__29570_29574 = (0);
while(true){
if((i__29570_29574 < count__29569_29573)){
var ns_29575 = cljs.core._nth.call(null,chunk__29568_29572,i__29570_29574);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29575);


var G__29576 = seq__29567_29571;
var G__29577 = chunk__29568_29572;
var G__29578 = count__29569_29573;
var G__29579 = (i__29570_29574 + (1));
seq__29567_29571 = G__29576;
chunk__29568_29572 = G__29577;
count__29569_29573 = G__29578;
i__29570_29574 = G__29579;
continue;
} else {
var temp__5457__auto___29580 = cljs.core.seq.call(null,seq__29567_29571);
if(temp__5457__auto___29580){
var seq__29567_29581__$1 = temp__5457__auto___29580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29567_29581__$1)){
var c__4351__auto___29582 = cljs.core.chunk_first.call(null,seq__29567_29581__$1);
var G__29583 = cljs.core.chunk_rest.call(null,seq__29567_29581__$1);
var G__29584 = c__4351__auto___29582;
var G__29585 = cljs.core.count.call(null,c__4351__auto___29582);
var G__29586 = (0);
seq__29567_29571 = G__29583;
chunk__29568_29572 = G__29584;
count__29569_29573 = G__29585;
i__29570_29574 = G__29586;
continue;
} else {
var ns_29587 = cljs.core.first.call(null,seq__29567_29581__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29587);


var G__29588 = cljs.core.next.call(null,seq__29567_29581__$1);
var G__29589 = null;
var G__29590 = (0);
var G__29591 = (0);
seq__29567_29571 = G__29588;
chunk__29568_29572 = G__29589;
count__29569_29573 = G__29590;
i__29570_29574 = G__29591;
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
var G__29592__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29593__i = 0, G__29593__a = new Array(arguments.length -  0);
while (G__29593__i < G__29593__a.length) {G__29593__a[G__29593__i] = arguments[G__29593__i + 0]; ++G__29593__i;}
  args = new cljs.core.IndexedSeq(G__29593__a,0,null);
} 
return G__29592__delegate.call(this,args);};
G__29592.cljs$lang$maxFixedArity = 0;
G__29592.cljs$lang$applyTo = (function (arglist__29594){
var args = cljs.core.seq(arglist__29594);
return G__29592__delegate(args);
});
G__29592.cljs$core$IFn$_invoke$arity$variadic = G__29592__delegate;
return G__29592;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29595_SHARP_,p2__29596_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29595_SHARP_)].join('')),p2__29596_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29597_SHARP_,p2__29598_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29597_SHARP_)].join(''),p2__29598_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29599 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29599.addCallback(((function (G__29599){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29599))
);

G__29599.addErrback(((function (G__29599){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29599))
);

return G__29599;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29600){if((e29600 instanceof Error)){
var e = e29600;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29600;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29601){if((e29601 instanceof Error)){
var e = e29601;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29601;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29602 = cljs.core._EQ_;
var expr__29603 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29602.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29603))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29602.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29603))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29602.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29603))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29602,expr__29603){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29602,expr__29603))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29605,callback){
var map__29606 = p__29605;
var map__29606__$1 = ((((!((map__29606 == null)))?(((((map__29606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29606):map__29606);
var file_msg = map__29606__$1;
var request_url = cljs.core.get.call(null,map__29606__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29606,map__29606__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29606,map__29606__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27270__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto__){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto__){
return (function (state_29644){
var state_val_29645 = (state_29644[(1)]);
if((state_val_29645 === (7))){
var inst_29640 = (state_29644[(2)]);
var state_29644__$1 = state_29644;
var statearr_29646_29672 = state_29644__$1;
(statearr_29646_29672[(2)] = inst_29640);

(statearr_29646_29672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29645 === (1))){
var state_29644__$1 = state_29644;
var statearr_29647_29673 = state_29644__$1;
(statearr_29647_29673[(2)] = null);

(statearr_29647_29673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29645 === (4))){
var inst_29610 = (state_29644[(7)]);
var inst_29610__$1 = (state_29644[(2)]);
var state_29644__$1 = (function (){var statearr_29648 = state_29644;
(statearr_29648[(7)] = inst_29610__$1);

return statearr_29648;
})();
if(cljs.core.truth_(inst_29610__$1)){
var statearr_29649_29674 = state_29644__$1;
(statearr_29649_29674[(1)] = (5));

} else {
var statearr_29650_29675 = state_29644__$1;
(statearr_29650_29675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29645 === (15))){
var inst_29623 = (state_29644[(8)]);
var inst_29625 = (state_29644[(9)]);
var inst_29627 = inst_29625.call(null,inst_29623);
var state_29644__$1 = state_29644;
var statearr_29651_29676 = state_29644__$1;
(statearr_29651_29676[(2)] = inst_29627);

(statearr_29651_29676[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29645 === (13))){
var inst_29634 = (state_29644[(2)]);
var state_29644__$1 = state_29644;
var statearr_29652_29677 = state_29644__$1;
(statearr_29652_29677[(2)] = inst_29634);

(statearr_29652_29677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29645 === (6))){
var state_29644__$1 = state_29644;
var statearr_29653_29678 = state_29644__$1;
(statearr_29653_29678[(2)] = null);

(statearr_29653_29678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29645 === (17))){
var inst_29631 = (state_29644[(2)]);
var state_29644__$1 = state_29644;
var statearr_29654_29679 = state_29644__$1;
(statearr_29654_29679[(2)] = inst_29631);

(statearr_29654_29679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29645 === (3))){
var inst_29642 = (state_29644[(2)]);
var state_29644__$1 = state_29644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29644__$1,inst_29642);
} else {
if((state_val_29645 === (12))){
var state_29644__$1 = state_29644;
var statearr_29655_29680 = state_29644__$1;
(statearr_29655_29680[(2)] = null);

(statearr_29655_29680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29645 === (2))){
var state_29644__$1 = state_29644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29644__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29645 === (11))){
var inst_29615 = (state_29644[(10)]);
var inst_29621 = figwheel.client.file_reloading.blocking_load.call(null,inst_29615);
var state_29644__$1 = state_29644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29644__$1,(14),inst_29621);
} else {
if((state_val_29645 === (9))){
var inst_29615 = (state_29644[(10)]);
var state_29644__$1 = state_29644;
if(cljs.core.truth_(inst_29615)){
var statearr_29656_29681 = state_29644__$1;
(statearr_29656_29681[(1)] = (11));

} else {
var statearr_29657_29682 = state_29644__$1;
(statearr_29657_29682[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29645 === (5))){
var inst_29616 = (state_29644[(11)]);
var inst_29610 = (state_29644[(7)]);
var inst_29615 = cljs.core.nth.call(null,inst_29610,(0),null);
var inst_29616__$1 = cljs.core.nth.call(null,inst_29610,(1),null);
var state_29644__$1 = (function (){var statearr_29658 = state_29644;
(statearr_29658[(10)] = inst_29615);

(statearr_29658[(11)] = inst_29616__$1);

return statearr_29658;
})();
if(cljs.core.truth_(inst_29616__$1)){
var statearr_29659_29683 = state_29644__$1;
(statearr_29659_29683[(1)] = (8));

} else {
var statearr_29660_29684 = state_29644__$1;
(statearr_29660_29684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29645 === (14))){
var inst_29615 = (state_29644[(10)]);
var inst_29625 = (state_29644[(9)]);
var inst_29623 = (state_29644[(2)]);
var inst_29624 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29625__$1 = cljs.core.get.call(null,inst_29624,inst_29615);
var state_29644__$1 = (function (){var statearr_29661 = state_29644;
(statearr_29661[(8)] = inst_29623);

(statearr_29661[(9)] = inst_29625__$1);

return statearr_29661;
})();
if(cljs.core.truth_(inst_29625__$1)){
var statearr_29662_29685 = state_29644__$1;
(statearr_29662_29685[(1)] = (15));

} else {
var statearr_29663_29686 = state_29644__$1;
(statearr_29663_29686[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29645 === (16))){
var inst_29623 = (state_29644[(8)]);
var inst_29629 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29623);
var state_29644__$1 = state_29644;
var statearr_29664_29687 = state_29644__$1;
(statearr_29664_29687[(2)] = inst_29629);

(statearr_29664_29687[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29645 === (10))){
var inst_29636 = (state_29644[(2)]);
var state_29644__$1 = (function (){var statearr_29665 = state_29644;
(statearr_29665[(12)] = inst_29636);

return statearr_29665;
})();
var statearr_29666_29688 = state_29644__$1;
(statearr_29666_29688[(2)] = null);

(statearr_29666_29688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29645 === (8))){
var inst_29616 = (state_29644[(11)]);
var inst_29618 = eval(inst_29616);
var state_29644__$1 = state_29644;
var statearr_29667_29689 = state_29644__$1;
(statearr_29667_29689[(2)] = inst_29618);

(statearr_29667_29689[(1)] = (10));


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
});})(c__27270__auto__))
;
return ((function (switch__27179__auto__,c__27270__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27180__auto__ = null;
var figwheel$client$file_reloading$state_machine__27180__auto____0 = (function (){
var statearr_29668 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29668[(0)] = figwheel$client$file_reloading$state_machine__27180__auto__);

(statearr_29668[(1)] = (1));

return statearr_29668;
});
var figwheel$client$file_reloading$state_machine__27180__auto____1 = (function (state_29644){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_29644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e29669){if((e29669 instanceof Object)){
var ex__27183__auto__ = e29669;
var statearr_29670_29690 = state_29644;
(statearr_29670_29690[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29691 = state_29644;
state_29644 = G__29691;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27180__auto__ = function(state_29644){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27180__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27180__auto____1.call(this,state_29644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27180__auto____0;
figwheel$client$file_reloading$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27180__auto____1;
return figwheel$client$file_reloading$state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto__))
})();
var state__27272__auto__ = (function (){var statearr_29671 = f__27271__auto__.call(null);
(statearr_29671[(6)] = c__27270__auto__);

return statearr_29671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto__))
);

return c__27270__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29693 = arguments.length;
switch (G__29693) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29695,callback){
var map__29696 = p__29695;
var map__29696__$1 = ((((!((map__29696 == null)))?(((((map__29696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29696):map__29696);
var file_msg = map__29696__$1;
var namespace = cljs.core.get.call(null,map__29696__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29696,map__29696__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29696,map__29696__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29698){
var map__29699 = p__29698;
var map__29699__$1 = ((((!((map__29699 == null)))?(((((map__29699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29699):map__29699);
var file_msg = map__29699__$1;
var namespace = cljs.core.get.call(null,map__29699__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29701){
var map__29702 = p__29701;
var map__29702__$1 = ((((!((map__29702 == null)))?(((((map__29702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29702):map__29702);
var file_msg = map__29702__$1;
var namespace = cljs.core.get.call(null,map__29702__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29704,callback){
var map__29705 = p__29704;
var map__29705__$1 = ((((!((map__29705 == null)))?(((((map__29705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29705):map__29705);
var file_msg = map__29705__$1;
var request_url = cljs.core.get.call(null,map__29705__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29705__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27270__auto___29755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___29755,out){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___29755,out){
return (function (state_29740){
var state_val_29741 = (state_29740[(1)]);
if((state_val_29741 === (1))){
var inst_29714 = cljs.core.seq.call(null,files);
var inst_29715 = cljs.core.first.call(null,inst_29714);
var inst_29716 = cljs.core.next.call(null,inst_29714);
var inst_29717 = files;
var state_29740__$1 = (function (){var statearr_29742 = state_29740;
(statearr_29742[(7)] = inst_29717);

(statearr_29742[(8)] = inst_29715);

(statearr_29742[(9)] = inst_29716);

return statearr_29742;
})();
var statearr_29743_29756 = state_29740__$1;
(statearr_29743_29756[(2)] = null);

(statearr_29743_29756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (2))){
var inst_29723 = (state_29740[(10)]);
var inst_29717 = (state_29740[(7)]);
var inst_29722 = cljs.core.seq.call(null,inst_29717);
var inst_29723__$1 = cljs.core.first.call(null,inst_29722);
var inst_29724 = cljs.core.next.call(null,inst_29722);
var inst_29725 = (inst_29723__$1 == null);
var inst_29726 = cljs.core.not.call(null,inst_29725);
var state_29740__$1 = (function (){var statearr_29744 = state_29740;
(statearr_29744[(10)] = inst_29723__$1);

(statearr_29744[(11)] = inst_29724);

return statearr_29744;
})();
if(inst_29726){
var statearr_29745_29757 = state_29740__$1;
(statearr_29745_29757[(1)] = (4));

} else {
var statearr_29746_29758 = state_29740__$1;
(statearr_29746_29758[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (3))){
var inst_29738 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29740__$1,inst_29738);
} else {
if((state_val_29741 === (4))){
var inst_29723 = (state_29740[(10)]);
var inst_29728 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29723);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29740__$1,(7),inst_29728);
} else {
if((state_val_29741 === (5))){
var inst_29734 = cljs.core.async.close_BANG_.call(null,out);
var state_29740__$1 = state_29740;
var statearr_29747_29759 = state_29740__$1;
(statearr_29747_29759[(2)] = inst_29734);

(statearr_29747_29759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (6))){
var inst_29736 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29748_29760 = state_29740__$1;
(statearr_29748_29760[(2)] = inst_29736);

(statearr_29748_29760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (7))){
var inst_29724 = (state_29740[(11)]);
var inst_29730 = (state_29740[(2)]);
var inst_29731 = cljs.core.async.put_BANG_.call(null,out,inst_29730);
var inst_29717 = inst_29724;
var state_29740__$1 = (function (){var statearr_29749 = state_29740;
(statearr_29749[(7)] = inst_29717);

(statearr_29749[(12)] = inst_29731);

return statearr_29749;
})();
var statearr_29750_29761 = state_29740__$1;
(statearr_29750_29761[(2)] = null);

(statearr_29750_29761[(1)] = (2));


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
});})(c__27270__auto___29755,out))
;
return ((function (switch__27179__auto__,c__27270__auto___29755,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto____0 = (function (){
var statearr_29751 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29751[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto__);

(statearr_29751[(1)] = (1));

return statearr_29751;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto____1 = (function (state_29740){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_29740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e29752){if((e29752 instanceof Object)){
var ex__27183__auto__ = e29752;
var statearr_29753_29762 = state_29740;
(statearr_29753_29762[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29763 = state_29740;
state_29740 = G__29763;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto__ = function(state_29740){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto____1.call(this,state_29740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___29755,out))
})();
var state__27272__auto__ = (function (){var statearr_29754 = f__27271__auto__.call(null);
(statearr_29754[(6)] = c__27270__auto___29755);

return statearr_29754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___29755,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29764,opts){
var map__29765 = p__29764;
var map__29765__$1 = ((((!((map__29765 == null)))?(((((map__29765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29765):map__29765);
var eval_body = cljs.core.get.call(null,map__29765__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29765__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29767){var e = e29767;
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
return (function (p1__29768_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29768_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29769){
var vec__29770 = p__29769;
var k = cljs.core.nth.call(null,vec__29770,(0),null);
var v = cljs.core.nth.call(null,vec__29770,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29773){
var vec__29774 = p__29773;
var k = cljs.core.nth.call(null,vec__29774,(0),null);
var v = cljs.core.nth.call(null,vec__29774,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29780,p__29781){
var map__29782 = p__29780;
var map__29782__$1 = ((((!((map__29782 == null)))?(((((map__29782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29782):map__29782);
var opts = map__29782__$1;
var before_jsload = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29783 = p__29781;
var map__29783__$1 = ((((!((map__29783 == null)))?(((((map__29783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29783):map__29783);
var msg = map__29783__$1;
var files = cljs.core.get.call(null,map__29783__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29783__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29783__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27270__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29937){
var state_val_29938 = (state_29937[(1)]);
if((state_val_29938 === (7))){
var inst_29797 = (state_29937[(7)]);
var inst_29799 = (state_29937[(8)]);
var inst_29800 = (state_29937[(9)]);
var inst_29798 = (state_29937[(10)]);
var inst_29805 = cljs.core._nth.call(null,inst_29798,inst_29800);
var inst_29806 = figwheel.client.file_reloading.eval_body.call(null,inst_29805,opts);
var inst_29807 = (inst_29800 + (1));
var tmp29939 = inst_29797;
var tmp29940 = inst_29799;
var tmp29941 = inst_29798;
var inst_29797__$1 = tmp29939;
var inst_29798__$1 = tmp29941;
var inst_29799__$1 = tmp29940;
var inst_29800__$1 = inst_29807;
var state_29937__$1 = (function (){var statearr_29942 = state_29937;
(statearr_29942[(7)] = inst_29797__$1);

(statearr_29942[(11)] = inst_29806);

(statearr_29942[(8)] = inst_29799__$1);

(statearr_29942[(9)] = inst_29800__$1);

(statearr_29942[(10)] = inst_29798__$1);

return statearr_29942;
})();
var statearr_29943_30026 = state_29937__$1;
(statearr_29943_30026[(2)] = null);

(statearr_29943_30026[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (20))){
var inst_29840 = (state_29937[(12)]);
var inst_29848 = figwheel.client.file_reloading.sort_files.call(null,inst_29840);
var state_29937__$1 = state_29937;
var statearr_29944_30027 = state_29937__$1;
(statearr_29944_30027[(2)] = inst_29848);

(statearr_29944_30027[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (27))){
var state_29937__$1 = state_29937;
var statearr_29945_30028 = state_29937__$1;
(statearr_29945_30028[(2)] = null);

(statearr_29945_30028[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (1))){
var inst_29789 = (state_29937[(13)]);
var inst_29786 = before_jsload.call(null,files);
var inst_29787 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29788 = (function (){return ((function (inst_29789,inst_29786,inst_29787,state_val_29938,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29777_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29777_SHARP_);
});
;})(inst_29789,inst_29786,inst_29787,state_val_29938,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29789__$1 = cljs.core.filter.call(null,inst_29788,files);
var inst_29790 = cljs.core.not_empty.call(null,inst_29789__$1);
var state_29937__$1 = (function (){var statearr_29946 = state_29937;
(statearr_29946[(13)] = inst_29789__$1);

(statearr_29946[(14)] = inst_29787);

(statearr_29946[(15)] = inst_29786);

return statearr_29946;
})();
if(cljs.core.truth_(inst_29790)){
var statearr_29947_30029 = state_29937__$1;
(statearr_29947_30029[(1)] = (2));

} else {
var statearr_29948_30030 = state_29937__$1;
(statearr_29948_30030[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (24))){
var state_29937__$1 = state_29937;
var statearr_29949_30031 = state_29937__$1;
(statearr_29949_30031[(2)] = null);

(statearr_29949_30031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (39))){
var inst_29890 = (state_29937[(16)]);
var state_29937__$1 = state_29937;
var statearr_29950_30032 = state_29937__$1;
(statearr_29950_30032[(2)] = inst_29890);

(statearr_29950_30032[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (46))){
var inst_29932 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29951_30033 = state_29937__$1;
(statearr_29951_30033[(2)] = inst_29932);

(statearr_29951_30033[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (4))){
var inst_29834 = (state_29937[(2)]);
var inst_29835 = cljs.core.List.EMPTY;
var inst_29836 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29835);
var inst_29837 = (function (){return ((function (inst_29834,inst_29835,inst_29836,state_val_29938,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29778_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29778_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29778_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29778_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_29834,inst_29835,inst_29836,state_val_29938,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29838 = cljs.core.filter.call(null,inst_29837,files);
var inst_29839 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29840 = cljs.core.concat.call(null,inst_29838,inst_29839);
var state_29937__$1 = (function (){var statearr_29952 = state_29937;
(statearr_29952[(12)] = inst_29840);

(statearr_29952[(17)] = inst_29836);

(statearr_29952[(18)] = inst_29834);

return statearr_29952;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29953_30034 = state_29937__$1;
(statearr_29953_30034[(1)] = (16));

} else {
var statearr_29954_30035 = state_29937__$1;
(statearr_29954_30035[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (15))){
var inst_29824 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29955_30036 = state_29937__$1;
(statearr_29955_30036[(2)] = inst_29824);

(statearr_29955_30036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (21))){
var inst_29850 = (state_29937[(19)]);
var inst_29850__$1 = (state_29937[(2)]);
var inst_29851 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29850__$1);
var state_29937__$1 = (function (){var statearr_29956 = state_29937;
(statearr_29956[(19)] = inst_29850__$1);

return statearr_29956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29937__$1,(22),inst_29851);
} else {
if((state_val_29938 === (31))){
var inst_29935 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29937__$1,inst_29935);
} else {
if((state_val_29938 === (32))){
var inst_29890 = (state_29937[(16)]);
var inst_29895 = inst_29890.cljs$lang$protocol_mask$partition0$;
var inst_29896 = (inst_29895 & (64));
var inst_29897 = inst_29890.cljs$core$ISeq$;
var inst_29898 = (cljs.core.PROTOCOL_SENTINEL === inst_29897);
var inst_29899 = ((inst_29896) || (inst_29898));
var state_29937__$1 = state_29937;
if(cljs.core.truth_(inst_29899)){
var statearr_29957_30037 = state_29937__$1;
(statearr_29957_30037[(1)] = (35));

} else {
var statearr_29958_30038 = state_29937__$1;
(statearr_29958_30038[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (40))){
var inst_29912 = (state_29937[(20)]);
var inst_29911 = (state_29937[(2)]);
var inst_29912__$1 = cljs.core.get.call(null,inst_29911,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29913 = cljs.core.get.call(null,inst_29911,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29914 = cljs.core.not_empty.call(null,inst_29912__$1);
var state_29937__$1 = (function (){var statearr_29959 = state_29937;
(statearr_29959[(20)] = inst_29912__$1);

(statearr_29959[(21)] = inst_29913);

return statearr_29959;
})();
if(cljs.core.truth_(inst_29914)){
var statearr_29960_30039 = state_29937__$1;
(statearr_29960_30039[(1)] = (41));

} else {
var statearr_29961_30040 = state_29937__$1;
(statearr_29961_30040[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (33))){
var state_29937__$1 = state_29937;
var statearr_29962_30041 = state_29937__$1;
(statearr_29962_30041[(2)] = false);

(statearr_29962_30041[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (13))){
var inst_29810 = (state_29937[(22)]);
var inst_29814 = cljs.core.chunk_first.call(null,inst_29810);
var inst_29815 = cljs.core.chunk_rest.call(null,inst_29810);
var inst_29816 = cljs.core.count.call(null,inst_29814);
var inst_29797 = inst_29815;
var inst_29798 = inst_29814;
var inst_29799 = inst_29816;
var inst_29800 = (0);
var state_29937__$1 = (function (){var statearr_29963 = state_29937;
(statearr_29963[(7)] = inst_29797);

(statearr_29963[(8)] = inst_29799);

(statearr_29963[(9)] = inst_29800);

(statearr_29963[(10)] = inst_29798);

return statearr_29963;
})();
var statearr_29964_30042 = state_29937__$1;
(statearr_29964_30042[(2)] = null);

(statearr_29964_30042[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (22))){
var inst_29850 = (state_29937[(19)]);
var inst_29858 = (state_29937[(23)]);
var inst_29854 = (state_29937[(24)]);
var inst_29853 = (state_29937[(25)]);
var inst_29853__$1 = (state_29937[(2)]);
var inst_29854__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29853__$1);
var inst_29855 = (function (){var all_files = inst_29850;
var res_SINGLEQUOTE_ = inst_29853__$1;
var res = inst_29854__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29850,inst_29858,inst_29854,inst_29853,inst_29853__$1,inst_29854__$1,state_val_29938,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29779_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29779_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29850,inst_29858,inst_29854,inst_29853,inst_29853__$1,inst_29854__$1,state_val_29938,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29856 = cljs.core.filter.call(null,inst_29855,inst_29853__$1);
var inst_29857 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29858__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29857);
var inst_29859 = cljs.core.not_empty.call(null,inst_29858__$1);
var state_29937__$1 = (function (){var statearr_29965 = state_29937;
(statearr_29965[(23)] = inst_29858__$1);

(statearr_29965[(24)] = inst_29854__$1);

(statearr_29965[(25)] = inst_29853__$1);

(statearr_29965[(26)] = inst_29856);

return statearr_29965;
})();
if(cljs.core.truth_(inst_29859)){
var statearr_29966_30043 = state_29937__$1;
(statearr_29966_30043[(1)] = (23));

} else {
var statearr_29967_30044 = state_29937__$1;
(statearr_29967_30044[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (36))){
var state_29937__$1 = state_29937;
var statearr_29968_30045 = state_29937__$1;
(statearr_29968_30045[(2)] = false);

(statearr_29968_30045[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (41))){
var inst_29912 = (state_29937[(20)]);
var inst_29916 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29917 = cljs.core.map.call(null,inst_29916,inst_29912);
var inst_29918 = cljs.core.pr_str.call(null,inst_29917);
var inst_29919 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29918)].join('');
var inst_29920 = figwheel.client.utils.log.call(null,inst_29919);
var state_29937__$1 = state_29937;
var statearr_29969_30046 = state_29937__$1;
(statearr_29969_30046[(2)] = inst_29920);

(statearr_29969_30046[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (43))){
var inst_29913 = (state_29937[(21)]);
var inst_29923 = (state_29937[(2)]);
var inst_29924 = cljs.core.not_empty.call(null,inst_29913);
var state_29937__$1 = (function (){var statearr_29970 = state_29937;
(statearr_29970[(27)] = inst_29923);

return statearr_29970;
})();
if(cljs.core.truth_(inst_29924)){
var statearr_29971_30047 = state_29937__$1;
(statearr_29971_30047[(1)] = (44));

} else {
var statearr_29972_30048 = state_29937__$1;
(statearr_29972_30048[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (29))){
var inst_29850 = (state_29937[(19)]);
var inst_29858 = (state_29937[(23)]);
var inst_29854 = (state_29937[(24)]);
var inst_29890 = (state_29937[(16)]);
var inst_29853 = (state_29937[(25)]);
var inst_29856 = (state_29937[(26)]);
var inst_29886 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29889 = (function (){var all_files = inst_29850;
var res_SINGLEQUOTE_ = inst_29853;
var res = inst_29854;
var files_not_loaded = inst_29856;
var dependencies_that_loaded = inst_29858;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29850,inst_29858,inst_29854,inst_29890,inst_29853,inst_29856,inst_29886,state_val_29938,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29888){
var map__29973 = p__29888;
var map__29973__$1 = ((((!((map__29973 == null)))?(((((map__29973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29973):map__29973);
var namespace = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29850,inst_29858,inst_29854,inst_29890,inst_29853,inst_29856,inst_29886,state_val_29938,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29890__$1 = cljs.core.group_by.call(null,inst_29889,inst_29856);
var inst_29892 = (inst_29890__$1 == null);
var inst_29893 = cljs.core.not.call(null,inst_29892);
var state_29937__$1 = (function (){var statearr_29975 = state_29937;
(statearr_29975[(16)] = inst_29890__$1);

(statearr_29975[(28)] = inst_29886);

return statearr_29975;
})();
if(inst_29893){
var statearr_29976_30049 = state_29937__$1;
(statearr_29976_30049[(1)] = (32));

} else {
var statearr_29977_30050 = state_29937__$1;
(statearr_29977_30050[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (44))){
var inst_29913 = (state_29937[(21)]);
var inst_29926 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29913);
var inst_29927 = cljs.core.pr_str.call(null,inst_29926);
var inst_29928 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29927)].join('');
var inst_29929 = figwheel.client.utils.log.call(null,inst_29928);
var state_29937__$1 = state_29937;
var statearr_29978_30051 = state_29937__$1;
(statearr_29978_30051[(2)] = inst_29929);

(statearr_29978_30051[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (6))){
var inst_29831 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29979_30052 = state_29937__$1;
(statearr_29979_30052[(2)] = inst_29831);

(statearr_29979_30052[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (28))){
var inst_29856 = (state_29937[(26)]);
var inst_29883 = (state_29937[(2)]);
var inst_29884 = cljs.core.not_empty.call(null,inst_29856);
var state_29937__$1 = (function (){var statearr_29980 = state_29937;
(statearr_29980[(29)] = inst_29883);

return statearr_29980;
})();
if(cljs.core.truth_(inst_29884)){
var statearr_29981_30053 = state_29937__$1;
(statearr_29981_30053[(1)] = (29));

} else {
var statearr_29982_30054 = state_29937__$1;
(statearr_29982_30054[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (25))){
var inst_29854 = (state_29937[(24)]);
var inst_29870 = (state_29937[(2)]);
var inst_29871 = cljs.core.not_empty.call(null,inst_29854);
var state_29937__$1 = (function (){var statearr_29983 = state_29937;
(statearr_29983[(30)] = inst_29870);

return statearr_29983;
})();
if(cljs.core.truth_(inst_29871)){
var statearr_29984_30055 = state_29937__$1;
(statearr_29984_30055[(1)] = (26));

} else {
var statearr_29985_30056 = state_29937__$1;
(statearr_29985_30056[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (34))){
var inst_29906 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
if(cljs.core.truth_(inst_29906)){
var statearr_29986_30057 = state_29937__$1;
(statearr_29986_30057[(1)] = (38));

} else {
var statearr_29987_30058 = state_29937__$1;
(statearr_29987_30058[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (17))){
var state_29937__$1 = state_29937;
var statearr_29988_30059 = state_29937__$1;
(statearr_29988_30059[(2)] = recompile_dependents);

(statearr_29988_30059[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (3))){
var state_29937__$1 = state_29937;
var statearr_29989_30060 = state_29937__$1;
(statearr_29989_30060[(2)] = null);

(statearr_29989_30060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (12))){
var inst_29827 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29990_30061 = state_29937__$1;
(statearr_29990_30061[(2)] = inst_29827);

(statearr_29990_30061[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (2))){
var inst_29789 = (state_29937[(13)]);
var inst_29796 = cljs.core.seq.call(null,inst_29789);
var inst_29797 = inst_29796;
var inst_29798 = null;
var inst_29799 = (0);
var inst_29800 = (0);
var state_29937__$1 = (function (){var statearr_29991 = state_29937;
(statearr_29991[(7)] = inst_29797);

(statearr_29991[(8)] = inst_29799);

(statearr_29991[(9)] = inst_29800);

(statearr_29991[(10)] = inst_29798);

return statearr_29991;
})();
var statearr_29992_30062 = state_29937__$1;
(statearr_29992_30062[(2)] = null);

(statearr_29992_30062[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (23))){
var inst_29850 = (state_29937[(19)]);
var inst_29858 = (state_29937[(23)]);
var inst_29854 = (state_29937[(24)]);
var inst_29853 = (state_29937[(25)]);
var inst_29856 = (state_29937[(26)]);
var inst_29861 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29863 = (function (){var all_files = inst_29850;
var res_SINGLEQUOTE_ = inst_29853;
var res = inst_29854;
var files_not_loaded = inst_29856;
var dependencies_that_loaded = inst_29858;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29850,inst_29858,inst_29854,inst_29853,inst_29856,inst_29861,state_val_29938,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29862){
var map__29993 = p__29862;
var map__29993__$1 = ((((!((map__29993 == null)))?(((((map__29993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29993):map__29993);
var request_url = cljs.core.get.call(null,map__29993__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29850,inst_29858,inst_29854,inst_29853,inst_29856,inst_29861,state_val_29938,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29864 = cljs.core.reverse.call(null,inst_29858);
var inst_29865 = cljs.core.map.call(null,inst_29863,inst_29864);
var inst_29866 = cljs.core.pr_str.call(null,inst_29865);
var inst_29867 = figwheel.client.utils.log.call(null,inst_29866);
var state_29937__$1 = (function (){var statearr_29995 = state_29937;
(statearr_29995[(31)] = inst_29861);

return statearr_29995;
})();
var statearr_29996_30063 = state_29937__$1;
(statearr_29996_30063[(2)] = inst_29867);

(statearr_29996_30063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (35))){
var state_29937__$1 = state_29937;
var statearr_29997_30064 = state_29937__$1;
(statearr_29997_30064[(2)] = true);

(statearr_29997_30064[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (19))){
var inst_29840 = (state_29937[(12)]);
var inst_29846 = figwheel.client.file_reloading.expand_files.call(null,inst_29840);
var state_29937__$1 = state_29937;
var statearr_29998_30065 = state_29937__$1;
(statearr_29998_30065[(2)] = inst_29846);

(statearr_29998_30065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (11))){
var state_29937__$1 = state_29937;
var statearr_29999_30066 = state_29937__$1;
(statearr_29999_30066[(2)] = null);

(statearr_29999_30066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (9))){
var inst_29829 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_30000_30067 = state_29937__$1;
(statearr_30000_30067[(2)] = inst_29829);

(statearr_30000_30067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (5))){
var inst_29799 = (state_29937[(8)]);
var inst_29800 = (state_29937[(9)]);
var inst_29802 = (inst_29800 < inst_29799);
var inst_29803 = inst_29802;
var state_29937__$1 = state_29937;
if(cljs.core.truth_(inst_29803)){
var statearr_30001_30068 = state_29937__$1;
(statearr_30001_30068[(1)] = (7));

} else {
var statearr_30002_30069 = state_29937__$1;
(statearr_30002_30069[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (14))){
var inst_29810 = (state_29937[(22)]);
var inst_29819 = cljs.core.first.call(null,inst_29810);
var inst_29820 = figwheel.client.file_reloading.eval_body.call(null,inst_29819,opts);
var inst_29821 = cljs.core.next.call(null,inst_29810);
var inst_29797 = inst_29821;
var inst_29798 = null;
var inst_29799 = (0);
var inst_29800 = (0);
var state_29937__$1 = (function (){var statearr_30003 = state_29937;
(statearr_30003[(7)] = inst_29797);

(statearr_30003[(32)] = inst_29820);

(statearr_30003[(8)] = inst_29799);

(statearr_30003[(9)] = inst_29800);

(statearr_30003[(10)] = inst_29798);

return statearr_30003;
})();
var statearr_30004_30070 = state_29937__$1;
(statearr_30004_30070[(2)] = null);

(statearr_30004_30070[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (45))){
var state_29937__$1 = state_29937;
var statearr_30005_30071 = state_29937__$1;
(statearr_30005_30071[(2)] = null);

(statearr_30005_30071[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (26))){
var inst_29850 = (state_29937[(19)]);
var inst_29858 = (state_29937[(23)]);
var inst_29854 = (state_29937[(24)]);
var inst_29853 = (state_29937[(25)]);
var inst_29856 = (state_29937[(26)]);
var inst_29873 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29875 = (function (){var all_files = inst_29850;
var res_SINGLEQUOTE_ = inst_29853;
var res = inst_29854;
var files_not_loaded = inst_29856;
var dependencies_that_loaded = inst_29858;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29850,inst_29858,inst_29854,inst_29853,inst_29856,inst_29873,state_val_29938,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29874){
var map__30006 = p__29874;
var map__30006__$1 = ((((!((map__30006 == null)))?(((((map__30006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30006):map__30006);
var namespace = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29850,inst_29858,inst_29854,inst_29853,inst_29856,inst_29873,state_val_29938,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29876 = cljs.core.map.call(null,inst_29875,inst_29854);
var inst_29877 = cljs.core.pr_str.call(null,inst_29876);
var inst_29878 = figwheel.client.utils.log.call(null,inst_29877);
var inst_29879 = (function (){var all_files = inst_29850;
var res_SINGLEQUOTE_ = inst_29853;
var res = inst_29854;
var files_not_loaded = inst_29856;
var dependencies_that_loaded = inst_29858;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29850,inst_29858,inst_29854,inst_29853,inst_29856,inst_29873,inst_29875,inst_29876,inst_29877,inst_29878,state_val_29938,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29850,inst_29858,inst_29854,inst_29853,inst_29856,inst_29873,inst_29875,inst_29876,inst_29877,inst_29878,state_val_29938,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29880 = setTimeout(inst_29879,(10));
var state_29937__$1 = (function (){var statearr_30008 = state_29937;
(statearr_30008[(33)] = inst_29878);

(statearr_30008[(34)] = inst_29873);

return statearr_30008;
})();
var statearr_30009_30072 = state_29937__$1;
(statearr_30009_30072[(2)] = inst_29880);

(statearr_30009_30072[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (16))){
var state_29937__$1 = state_29937;
var statearr_30010_30073 = state_29937__$1;
(statearr_30010_30073[(2)] = reload_dependents);

(statearr_30010_30073[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (38))){
var inst_29890 = (state_29937[(16)]);
var inst_29908 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29890);
var state_29937__$1 = state_29937;
var statearr_30011_30074 = state_29937__$1;
(statearr_30011_30074[(2)] = inst_29908);

(statearr_30011_30074[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (30))){
var state_29937__$1 = state_29937;
var statearr_30012_30075 = state_29937__$1;
(statearr_30012_30075[(2)] = null);

(statearr_30012_30075[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (10))){
var inst_29810 = (state_29937[(22)]);
var inst_29812 = cljs.core.chunked_seq_QMARK_.call(null,inst_29810);
var state_29937__$1 = state_29937;
if(inst_29812){
var statearr_30013_30076 = state_29937__$1;
(statearr_30013_30076[(1)] = (13));

} else {
var statearr_30014_30077 = state_29937__$1;
(statearr_30014_30077[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (18))){
var inst_29844 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
if(cljs.core.truth_(inst_29844)){
var statearr_30015_30078 = state_29937__$1;
(statearr_30015_30078[(1)] = (19));

} else {
var statearr_30016_30079 = state_29937__$1;
(statearr_30016_30079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (42))){
var state_29937__$1 = state_29937;
var statearr_30017_30080 = state_29937__$1;
(statearr_30017_30080[(2)] = null);

(statearr_30017_30080[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (37))){
var inst_29903 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_30018_30081 = state_29937__$1;
(statearr_30018_30081[(2)] = inst_29903);

(statearr_30018_30081[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (8))){
var inst_29797 = (state_29937[(7)]);
var inst_29810 = (state_29937[(22)]);
var inst_29810__$1 = cljs.core.seq.call(null,inst_29797);
var state_29937__$1 = (function (){var statearr_30019 = state_29937;
(statearr_30019[(22)] = inst_29810__$1);

return statearr_30019;
})();
if(inst_29810__$1){
var statearr_30020_30082 = state_29937__$1;
(statearr_30020_30082[(1)] = (10));

} else {
var statearr_30021_30083 = state_29937__$1;
(statearr_30021_30083[(1)] = (11));

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
});})(c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27179__auto__,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto____0 = (function (){
var statearr_30022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30022[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto__);

(statearr_30022[(1)] = (1));

return statearr_30022;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto____1 = (function (state_29937){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_29937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e30023){if((e30023 instanceof Object)){
var ex__27183__auto__ = e30023;
var statearr_30024_30084 = state_29937;
(statearr_30024_30084[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30085 = state_29937;
state_29937 = G__30085;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto__ = function(state_29937){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto____1.call(this,state_29937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27272__auto__ = (function (){var statearr_30025 = f__27271__auto__.call(null);
(statearr_30025[(6)] = c__27270__auto__);

return statearr_30025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto__,map__29782,map__29782__$1,opts,before_jsload,on_jsload,reload_dependents,map__29783,map__29783__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27270__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30088,link){
var map__30089 = p__30088;
var map__30089__$1 = ((((!((map__30089 == null)))?(((((map__30089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30089):map__30089);
var file = cljs.core.get.call(null,map__30089__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30089,map__30089__$1,file){
return (function (p1__30086_SHARP_,p2__30087_SHARP_){
if(cljs.core._EQ_.call(null,p1__30086_SHARP_,p2__30087_SHARP_)){
return p1__30086_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30089,map__30089__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30092){
var map__30093 = p__30092;
var map__30093__$1 = ((((!((map__30093 == null)))?(((((map__30093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30093):map__30093);
var match_length = cljs.core.get.call(null,map__30093__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30093__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30091_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30091_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30095_SHARP_,p2__30096_SHARP_){
return cljs.core.assoc.call(null,p1__30095_SHARP_,cljs.core.get.call(null,p2__30096_SHARP_,key),p2__30096_SHARP_);
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
var loaded_f_datas_30097 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30097);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30097);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30098,p__30099){
var map__30100 = p__30098;
var map__30100__$1 = ((((!((map__30100 == null)))?(((((map__30100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30100):map__30100);
var on_cssload = cljs.core.get.call(null,map__30100__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30101 = p__30099;
var map__30101__$1 = ((((!((map__30101 == null)))?(((((map__30101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30101):map__30101);
var files_msg = map__30101__$1;
var files = cljs.core.get.call(null,map__30101__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1530911825269
