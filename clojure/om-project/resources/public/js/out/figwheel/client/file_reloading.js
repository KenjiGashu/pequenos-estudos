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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29437_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29437_SHARP_));
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
var seq__29438 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29439 = null;
var count__29440 = (0);
var i__29441 = (0);
while(true){
if((i__29441 < count__29440)){
var n = cljs.core._nth.call(null,chunk__29439,i__29441);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29442 = seq__29438;
var G__29443 = chunk__29439;
var G__29444 = count__29440;
var G__29445 = (i__29441 + (1));
seq__29438 = G__29442;
chunk__29439 = G__29443;
count__29440 = G__29444;
i__29441 = G__29445;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29438);
if(temp__5457__auto__){
var seq__29438__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29438__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__29438__$1);
var G__29446 = cljs.core.chunk_rest.call(null,seq__29438__$1);
var G__29447 = c__4351__auto__;
var G__29448 = cljs.core.count.call(null,c__4351__auto__);
var G__29449 = (0);
seq__29438 = G__29446;
chunk__29439 = G__29447;
count__29440 = G__29448;
i__29441 = G__29449;
continue;
} else {
var n = cljs.core.first.call(null,seq__29438__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29450 = cljs.core.next.call(null,seq__29438__$1);
var G__29451 = null;
var G__29452 = (0);
var G__29453 = (0);
seq__29438 = G__29450;
chunk__29439 = G__29451;
count__29440 = G__29452;
i__29441 = G__29453;
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
return cljs.core.some.call(null,(function (p__29454){
var vec__29455 = p__29454;
var _ = cljs.core.nth.call(null,vec__29455,(0),null);
var v = cljs.core.nth.call(null,vec__29455,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__29458){
var vec__29459 = p__29458;
var k = cljs.core.nth.call(null,vec__29459,(0),null);
var v = cljs.core.nth.call(null,vec__29459,(1),null);
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

var seq__29471_29479 = cljs.core.seq.call(null,deps);
var chunk__29472_29480 = null;
var count__29473_29481 = (0);
var i__29474_29482 = (0);
while(true){
if((i__29474_29482 < count__29473_29481)){
var dep_29483 = cljs.core._nth.call(null,chunk__29472_29480,i__29474_29482);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_29483;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29483));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29483,(depth + (1)),state);
} else {
}


var G__29484 = seq__29471_29479;
var G__29485 = chunk__29472_29480;
var G__29486 = count__29473_29481;
var G__29487 = (i__29474_29482 + (1));
seq__29471_29479 = G__29484;
chunk__29472_29480 = G__29485;
count__29473_29481 = G__29486;
i__29474_29482 = G__29487;
continue;
} else {
var temp__5457__auto___29488 = cljs.core.seq.call(null,seq__29471_29479);
if(temp__5457__auto___29488){
var seq__29471_29489__$1 = temp__5457__auto___29488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29471_29489__$1)){
var c__4351__auto___29490 = cljs.core.chunk_first.call(null,seq__29471_29489__$1);
var G__29491 = cljs.core.chunk_rest.call(null,seq__29471_29489__$1);
var G__29492 = c__4351__auto___29490;
var G__29493 = cljs.core.count.call(null,c__4351__auto___29490);
var G__29494 = (0);
seq__29471_29479 = G__29491;
chunk__29472_29480 = G__29492;
count__29473_29481 = G__29493;
i__29474_29482 = G__29494;
continue;
} else {
var dep_29495 = cljs.core.first.call(null,seq__29471_29489__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_29495;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29495));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29495,(depth + (1)),state);
} else {
}


var G__29496 = cljs.core.next.call(null,seq__29471_29489__$1);
var G__29497 = null;
var G__29498 = (0);
var G__29499 = (0);
seq__29471_29479 = G__29496;
chunk__29472_29480 = G__29497;
count__29473_29481 = G__29498;
i__29474_29482 = G__29499;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29475){
var vec__29476 = p__29475;
var seq__29477 = cljs.core.seq.call(null,vec__29476);
var first__29478 = cljs.core.first.call(null,seq__29477);
var seq__29477__$1 = cljs.core.next.call(null,seq__29477);
var x = first__29478;
var xs = seq__29477__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29476,seq__29477,first__29478,seq__29477__$1,x,xs,get_deps__$1){
return (function (p1__29462_SHARP_){
return clojure.set.difference.call(null,p1__29462_SHARP_,x);
});})(vec__29476,seq__29477,first__29478,seq__29477__$1,x,xs,get_deps__$1))
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
var seq__29500 = cljs.core.seq.call(null,provides);
var chunk__29501 = null;
var count__29502 = (0);
var i__29503 = (0);
while(true){
if((i__29503 < count__29502)){
var prov = cljs.core._nth.call(null,chunk__29501,i__29503);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29504_29512 = cljs.core.seq.call(null,requires);
var chunk__29505_29513 = null;
var count__29506_29514 = (0);
var i__29507_29515 = (0);
while(true){
if((i__29507_29515 < count__29506_29514)){
var req_29516 = cljs.core._nth.call(null,chunk__29505_29513,i__29507_29515);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29516,prov);


var G__29517 = seq__29504_29512;
var G__29518 = chunk__29505_29513;
var G__29519 = count__29506_29514;
var G__29520 = (i__29507_29515 + (1));
seq__29504_29512 = G__29517;
chunk__29505_29513 = G__29518;
count__29506_29514 = G__29519;
i__29507_29515 = G__29520;
continue;
} else {
var temp__5457__auto___29521 = cljs.core.seq.call(null,seq__29504_29512);
if(temp__5457__auto___29521){
var seq__29504_29522__$1 = temp__5457__auto___29521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29504_29522__$1)){
var c__4351__auto___29523 = cljs.core.chunk_first.call(null,seq__29504_29522__$1);
var G__29524 = cljs.core.chunk_rest.call(null,seq__29504_29522__$1);
var G__29525 = c__4351__auto___29523;
var G__29526 = cljs.core.count.call(null,c__4351__auto___29523);
var G__29527 = (0);
seq__29504_29512 = G__29524;
chunk__29505_29513 = G__29525;
count__29506_29514 = G__29526;
i__29507_29515 = G__29527;
continue;
} else {
var req_29528 = cljs.core.first.call(null,seq__29504_29522__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29528,prov);


var G__29529 = cljs.core.next.call(null,seq__29504_29522__$1);
var G__29530 = null;
var G__29531 = (0);
var G__29532 = (0);
seq__29504_29512 = G__29529;
chunk__29505_29513 = G__29530;
count__29506_29514 = G__29531;
i__29507_29515 = G__29532;
continue;
}
} else {
}
}
break;
}


var G__29533 = seq__29500;
var G__29534 = chunk__29501;
var G__29535 = count__29502;
var G__29536 = (i__29503 + (1));
seq__29500 = G__29533;
chunk__29501 = G__29534;
count__29502 = G__29535;
i__29503 = G__29536;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29500);
if(temp__5457__auto__){
var seq__29500__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29500__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__29500__$1);
var G__29537 = cljs.core.chunk_rest.call(null,seq__29500__$1);
var G__29538 = c__4351__auto__;
var G__29539 = cljs.core.count.call(null,c__4351__auto__);
var G__29540 = (0);
seq__29500 = G__29537;
chunk__29501 = G__29538;
count__29502 = G__29539;
i__29503 = G__29540;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29500__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29508_29541 = cljs.core.seq.call(null,requires);
var chunk__29509_29542 = null;
var count__29510_29543 = (0);
var i__29511_29544 = (0);
while(true){
if((i__29511_29544 < count__29510_29543)){
var req_29545 = cljs.core._nth.call(null,chunk__29509_29542,i__29511_29544);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29545,prov);


var G__29546 = seq__29508_29541;
var G__29547 = chunk__29509_29542;
var G__29548 = count__29510_29543;
var G__29549 = (i__29511_29544 + (1));
seq__29508_29541 = G__29546;
chunk__29509_29542 = G__29547;
count__29510_29543 = G__29548;
i__29511_29544 = G__29549;
continue;
} else {
var temp__5457__auto___29550__$1 = cljs.core.seq.call(null,seq__29508_29541);
if(temp__5457__auto___29550__$1){
var seq__29508_29551__$1 = temp__5457__auto___29550__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29508_29551__$1)){
var c__4351__auto___29552 = cljs.core.chunk_first.call(null,seq__29508_29551__$1);
var G__29553 = cljs.core.chunk_rest.call(null,seq__29508_29551__$1);
var G__29554 = c__4351__auto___29552;
var G__29555 = cljs.core.count.call(null,c__4351__auto___29552);
var G__29556 = (0);
seq__29508_29541 = G__29553;
chunk__29509_29542 = G__29554;
count__29510_29543 = G__29555;
i__29511_29544 = G__29556;
continue;
} else {
var req_29557 = cljs.core.first.call(null,seq__29508_29551__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29557,prov);


var G__29558 = cljs.core.next.call(null,seq__29508_29551__$1);
var G__29559 = null;
var G__29560 = (0);
var G__29561 = (0);
seq__29508_29541 = G__29558;
chunk__29509_29542 = G__29559;
count__29510_29543 = G__29560;
i__29511_29544 = G__29561;
continue;
}
} else {
}
}
break;
}


var G__29562 = cljs.core.next.call(null,seq__29500__$1);
var G__29563 = null;
var G__29564 = (0);
var G__29565 = (0);
seq__29500 = G__29562;
chunk__29501 = G__29563;
count__29502 = G__29564;
i__29503 = G__29565;
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
var seq__29566_29570 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29567_29571 = null;
var count__29568_29572 = (0);
var i__29569_29573 = (0);
while(true){
if((i__29569_29573 < count__29568_29572)){
var ns_29574 = cljs.core._nth.call(null,chunk__29567_29571,i__29569_29573);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29574);


var G__29575 = seq__29566_29570;
var G__29576 = chunk__29567_29571;
var G__29577 = count__29568_29572;
var G__29578 = (i__29569_29573 + (1));
seq__29566_29570 = G__29575;
chunk__29567_29571 = G__29576;
count__29568_29572 = G__29577;
i__29569_29573 = G__29578;
continue;
} else {
var temp__5457__auto___29579 = cljs.core.seq.call(null,seq__29566_29570);
if(temp__5457__auto___29579){
var seq__29566_29580__$1 = temp__5457__auto___29579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29566_29580__$1)){
var c__4351__auto___29581 = cljs.core.chunk_first.call(null,seq__29566_29580__$1);
var G__29582 = cljs.core.chunk_rest.call(null,seq__29566_29580__$1);
var G__29583 = c__4351__auto___29581;
var G__29584 = cljs.core.count.call(null,c__4351__auto___29581);
var G__29585 = (0);
seq__29566_29570 = G__29582;
chunk__29567_29571 = G__29583;
count__29568_29572 = G__29584;
i__29569_29573 = G__29585;
continue;
} else {
var ns_29586 = cljs.core.first.call(null,seq__29566_29580__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29586);


var G__29587 = cljs.core.next.call(null,seq__29566_29580__$1);
var G__29588 = null;
var G__29589 = (0);
var G__29590 = (0);
seq__29566_29570 = G__29587;
chunk__29567_29571 = G__29588;
count__29568_29572 = G__29589;
i__29569_29573 = G__29590;
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
var G__29591__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29591 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29592__i = 0, G__29592__a = new Array(arguments.length -  0);
while (G__29592__i < G__29592__a.length) {G__29592__a[G__29592__i] = arguments[G__29592__i + 0]; ++G__29592__i;}
  args = new cljs.core.IndexedSeq(G__29592__a,0,null);
} 
return G__29591__delegate.call(this,args);};
G__29591.cljs$lang$maxFixedArity = 0;
G__29591.cljs$lang$applyTo = (function (arglist__29593){
var args = cljs.core.seq(arglist__29593);
return G__29591__delegate(args);
});
G__29591.cljs$core$IFn$_invoke$arity$variadic = G__29591__delegate;
return G__29591;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29594_SHARP_,p2__29595_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29594_SHARP_)].join('')),p2__29595_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29596_SHARP_,p2__29597_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29596_SHARP_)].join(''),p2__29597_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29598 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29598.addCallback(((function (G__29598){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29598))
);

G__29598.addErrback(((function (G__29598){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29598))
);

return G__29598;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29599){if((e29599 instanceof Error)){
var e = e29599;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29599;

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
}catch (e29600){if((e29600 instanceof Error)){
var e = e29600;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29600;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29601 = cljs.core._EQ_;
var expr__29602 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29601.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29602))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29601.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29602))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29601.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29602))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29601,expr__29602){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29601,expr__29602))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29604,callback){
var map__29605 = p__29604;
var map__29605__$1 = ((((!((map__29605 == null)))?(((((map__29605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29605):map__29605);
var file_msg = map__29605__$1;
var request_url = cljs.core.get.call(null,map__29605__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29605,map__29605__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29605,map__29605__$1,file_msg,request_url))
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
return (function (state_29643){
var state_val_29644 = (state_29643[(1)]);
if((state_val_29644 === (7))){
var inst_29639 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
var statearr_29645_29671 = state_29643__$1;
(statearr_29645_29671[(2)] = inst_29639);

(statearr_29645_29671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (1))){
var state_29643__$1 = state_29643;
var statearr_29646_29672 = state_29643__$1;
(statearr_29646_29672[(2)] = null);

(statearr_29646_29672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (4))){
var inst_29609 = (state_29643[(7)]);
var inst_29609__$1 = (state_29643[(2)]);
var state_29643__$1 = (function (){var statearr_29647 = state_29643;
(statearr_29647[(7)] = inst_29609__$1);

return statearr_29647;
})();
if(cljs.core.truth_(inst_29609__$1)){
var statearr_29648_29673 = state_29643__$1;
(statearr_29648_29673[(1)] = (5));

} else {
var statearr_29649_29674 = state_29643__$1;
(statearr_29649_29674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (15))){
var inst_29624 = (state_29643[(8)]);
var inst_29622 = (state_29643[(9)]);
var inst_29626 = inst_29624.call(null,inst_29622);
var state_29643__$1 = state_29643;
var statearr_29650_29675 = state_29643__$1;
(statearr_29650_29675[(2)] = inst_29626);

(statearr_29650_29675[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (13))){
var inst_29633 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
var statearr_29651_29676 = state_29643__$1;
(statearr_29651_29676[(2)] = inst_29633);

(statearr_29651_29676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (6))){
var state_29643__$1 = state_29643;
var statearr_29652_29677 = state_29643__$1;
(statearr_29652_29677[(2)] = null);

(statearr_29652_29677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (17))){
var inst_29630 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
var statearr_29653_29678 = state_29643__$1;
(statearr_29653_29678[(2)] = inst_29630);

(statearr_29653_29678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (3))){
var inst_29641 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29643__$1,inst_29641);
} else {
if((state_val_29644 === (12))){
var state_29643__$1 = state_29643;
var statearr_29654_29679 = state_29643__$1;
(statearr_29654_29679[(2)] = null);

(statearr_29654_29679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (2))){
var state_29643__$1 = state_29643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29643__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29644 === (11))){
var inst_29614 = (state_29643[(10)]);
var inst_29620 = figwheel.client.file_reloading.blocking_load.call(null,inst_29614);
var state_29643__$1 = state_29643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29643__$1,(14),inst_29620);
} else {
if((state_val_29644 === (9))){
var inst_29614 = (state_29643[(10)]);
var state_29643__$1 = state_29643;
if(cljs.core.truth_(inst_29614)){
var statearr_29655_29680 = state_29643__$1;
(statearr_29655_29680[(1)] = (11));

} else {
var statearr_29656_29681 = state_29643__$1;
(statearr_29656_29681[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (5))){
var inst_29615 = (state_29643[(11)]);
var inst_29609 = (state_29643[(7)]);
var inst_29614 = cljs.core.nth.call(null,inst_29609,(0),null);
var inst_29615__$1 = cljs.core.nth.call(null,inst_29609,(1),null);
var state_29643__$1 = (function (){var statearr_29657 = state_29643;
(statearr_29657[(11)] = inst_29615__$1);

(statearr_29657[(10)] = inst_29614);

return statearr_29657;
})();
if(cljs.core.truth_(inst_29615__$1)){
var statearr_29658_29682 = state_29643__$1;
(statearr_29658_29682[(1)] = (8));

} else {
var statearr_29659_29683 = state_29643__$1;
(statearr_29659_29683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (14))){
var inst_29614 = (state_29643[(10)]);
var inst_29624 = (state_29643[(8)]);
var inst_29622 = (state_29643[(2)]);
var inst_29623 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29624__$1 = cljs.core.get.call(null,inst_29623,inst_29614);
var state_29643__$1 = (function (){var statearr_29660 = state_29643;
(statearr_29660[(8)] = inst_29624__$1);

(statearr_29660[(9)] = inst_29622);

return statearr_29660;
})();
if(cljs.core.truth_(inst_29624__$1)){
var statearr_29661_29684 = state_29643__$1;
(statearr_29661_29684[(1)] = (15));

} else {
var statearr_29662_29685 = state_29643__$1;
(statearr_29662_29685[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (16))){
var inst_29622 = (state_29643[(9)]);
var inst_29628 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29622);
var state_29643__$1 = state_29643;
var statearr_29663_29686 = state_29643__$1;
(statearr_29663_29686[(2)] = inst_29628);

(statearr_29663_29686[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (10))){
var inst_29635 = (state_29643[(2)]);
var state_29643__$1 = (function (){var statearr_29664 = state_29643;
(statearr_29664[(12)] = inst_29635);

return statearr_29664;
})();
var statearr_29665_29687 = state_29643__$1;
(statearr_29665_29687[(2)] = null);

(statearr_29665_29687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (8))){
var inst_29615 = (state_29643[(11)]);
var inst_29617 = eval(inst_29615);
var state_29643__$1 = state_29643;
var statearr_29666_29688 = state_29643__$1;
(statearr_29666_29688[(2)] = inst_29617);

(statearr_29666_29688[(1)] = (10));


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
var statearr_29667 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29667[(0)] = figwheel$client$file_reloading$state_machine__27180__auto__);

(statearr_29667[(1)] = (1));

return statearr_29667;
});
var figwheel$client$file_reloading$state_machine__27180__auto____1 = (function (state_29643){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_29643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e29668){if((e29668 instanceof Object)){
var ex__27183__auto__ = e29668;
var statearr_29669_29689 = state_29643;
(statearr_29669_29689[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29690 = state_29643;
state_29643 = G__29690;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27180__auto__ = function(state_29643){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27180__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27180__auto____1.call(this,state_29643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27180__auto____0;
figwheel$client$file_reloading$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27180__auto____1;
return figwheel$client$file_reloading$state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto__))
})();
var state__27272__auto__ = (function (){var statearr_29670 = f__27271__auto__.call(null);
(statearr_29670[(6)] = c__27270__auto__);

return statearr_29670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto__))
);

return c__27270__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29692 = arguments.length;
switch (G__29692) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29694,callback){
var map__29695 = p__29694;
var map__29695__$1 = ((((!((map__29695 == null)))?(((((map__29695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29695):map__29695);
var file_msg = map__29695__$1;
var namespace = cljs.core.get.call(null,map__29695__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29695,map__29695__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29695,map__29695__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29697){
var map__29698 = p__29697;
var map__29698__$1 = ((((!((map__29698 == null)))?(((((map__29698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29698):map__29698);
var file_msg = map__29698__$1;
var namespace = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29700){
var map__29701 = p__29700;
var map__29701__$1 = ((((!((map__29701 == null)))?(((((map__29701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29701):map__29701);
var file_msg = map__29701__$1;
var namespace = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29703,callback){
var map__29704 = p__29703;
var map__29704__$1 = ((((!((map__29704 == null)))?(((((map__29704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29704):map__29704);
var file_msg = map__29704__$1;
var request_url = cljs.core.get.call(null,map__29704__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29704__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27270__auto___29754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___29754,out){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___29754,out){
return (function (state_29739){
var state_val_29740 = (state_29739[(1)]);
if((state_val_29740 === (1))){
var inst_29713 = cljs.core.seq.call(null,files);
var inst_29714 = cljs.core.first.call(null,inst_29713);
var inst_29715 = cljs.core.next.call(null,inst_29713);
var inst_29716 = files;
var state_29739__$1 = (function (){var statearr_29741 = state_29739;
(statearr_29741[(7)] = inst_29714);

(statearr_29741[(8)] = inst_29715);

(statearr_29741[(9)] = inst_29716);

return statearr_29741;
})();
var statearr_29742_29755 = state_29739__$1;
(statearr_29742_29755[(2)] = null);

(statearr_29742_29755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (2))){
var inst_29722 = (state_29739[(10)]);
var inst_29716 = (state_29739[(9)]);
var inst_29721 = cljs.core.seq.call(null,inst_29716);
var inst_29722__$1 = cljs.core.first.call(null,inst_29721);
var inst_29723 = cljs.core.next.call(null,inst_29721);
var inst_29724 = (inst_29722__$1 == null);
var inst_29725 = cljs.core.not.call(null,inst_29724);
var state_29739__$1 = (function (){var statearr_29743 = state_29739;
(statearr_29743[(11)] = inst_29723);

(statearr_29743[(10)] = inst_29722__$1);

return statearr_29743;
})();
if(inst_29725){
var statearr_29744_29756 = state_29739__$1;
(statearr_29744_29756[(1)] = (4));

} else {
var statearr_29745_29757 = state_29739__$1;
(statearr_29745_29757[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (3))){
var inst_29737 = (state_29739[(2)]);
var state_29739__$1 = state_29739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29739__$1,inst_29737);
} else {
if((state_val_29740 === (4))){
var inst_29722 = (state_29739[(10)]);
var inst_29727 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29722);
var state_29739__$1 = state_29739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29739__$1,(7),inst_29727);
} else {
if((state_val_29740 === (5))){
var inst_29733 = cljs.core.async.close_BANG_.call(null,out);
var state_29739__$1 = state_29739;
var statearr_29746_29758 = state_29739__$1;
(statearr_29746_29758[(2)] = inst_29733);

(statearr_29746_29758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (6))){
var inst_29735 = (state_29739[(2)]);
var state_29739__$1 = state_29739;
var statearr_29747_29759 = state_29739__$1;
(statearr_29747_29759[(2)] = inst_29735);

(statearr_29747_29759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29740 === (7))){
var inst_29723 = (state_29739[(11)]);
var inst_29729 = (state_29739[(2)]);
var inst_29730 = cljs.core.async.put_BANG_.call(null,out,inst_29729);
var inst_29716 = inst_29723;
var state_29739__$1 = (function (){var statearr_29748 = state_29739;
(statearr_29748[(9)] = inst_29716);

(statearr_29748[(12)] = inst_29730);

return statearr_29748;
})();
var statearr_29749_29760 = state_29739__$1;
(statearr_29749_29760[(2)] = null);

(statearr_29749_29760[(1)] = (2));


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
});})(c__27270__auto___29754,out))
;
return ((function (switch__27179__auto__,c__27270__auto___29754,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto____0 = (function (){
var statearr_29750 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29750[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto__);

(statearr_29750[(1)] = (1));

return statearr_29750;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto____1 = (function (state_29739){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_29739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e29751){if((e29751 instanceof Object)){
var ex__27183__auto__ = e29751;
var statearr_29752_29761 = state_29739;
(statearr_29752_29761[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29762 = state_29739;
state_29739 = G__29762;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto__ = function(state_29739){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto____1.call(this,state_29739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___29754,out))
})();
var state__27272__auto__ = (function (){var statearr_29753 = f__27271__auto__.call(null);
(statearr_29753[(6)] = c__27270__auto___29754);

return statearr_29753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___29754,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29763,opts){
var map__29764 = p__29763;
var map__29764__$1 = ((((!((map__29764 == null)))?(((((map__29764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29764):map__29764);
var eval_body = cljs.core.get.call(null,map__29764__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29764__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29766){var e = e29766;
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
return (function (p1__29767_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29767_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29768){
var vec__29769 = p__29768;
var k = cljs.core.nth.call(null,vec__29769,(0),null);
var v = cljs.core.nth.call(null,vec__29769,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29772){
var vec__29773 = p__29772;
var k = cljs.core.nth.call(null,vec__29773,(0),null);
var v = cljs.core.nth.call(null,vec__29773,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29779,p__29780){
var map__29781 = p__29779;
var map__29781__$1 = ((((!((map__29781 == null)))?(((((map__29781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29781):map__29781);
var opts = map__29781__$1;
var before_jsload = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29782 = p__29780;
var map__29782__$1 = ((((!((map__29782 == null)))?(((((map__29782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29782):map__29782);
var msg = map__29782__$1;
var files = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27270__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29936){
var state_val_29937 = (state_29936[(1)]);
if((state_val_29937 === (7))){
var inst_29797 = (state_29936[(7)]);
var inst_29796 = (state_29936[(8)]);
var inst_29799 = (state_29936[(9)]);
var inst_29798 = (state_29936[(10)]);
var inst_29804 = cljs.core._nth.call(null,inst_29797,inst_29799);
var inst_29805 = figwheel.client.file_reloading.eval_body.call(null,inst_29804,opts);
var inst_29806 = (inst_29799 + (1));
var tmp29938 = inst_29797;
var tmp29939 = inst_29796;
var tmp29940 = inst_29798;
var inst_29796__$1 = tmp29939;
var inst_29797__$1 = tmp29938;
var inst_29798__$1 = tmp29940;
var inst_29799__$1 = inst_29806;
var state_29936__$1 = (function (){var statearr_29941 = state_29936;
(statearr_29941[(11)] = inst_29805);

(statearr_29941[(7)] = inst_29797__$1);

(statearr_29941[(8)] = inst_29796__$1);

(statearr_29941[(9)] = inst_29799__$1);

(statearr_29941[(10)] = inst_29798__$1);

return statearr_29941;
})();
var statearr_29942_30025 = state_29936__$1;
(statearr_29942_30025[(2)] = null);

(statearr_29942_30025[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (20))){
var inst_29839 = (state_29936[(12)]);
var inst_29847 = figwheel.client.file_reloading.sort_files.call(null,inst_29839);
var state_29936__$1 = state_29936;
var statearr_29943_30026 = state_29936__$1;
(statearr_29943_30026[(2)] = inst_29847);

(statearr_29943_30026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (27))){
var state_29936__$1 = state_29936;
var statearr_29944_30027 = state_29936__$1;
(statearr_29944_30027[(2)] = null);

(statearr_29944_30027[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (1))){
var inst_29788 = (state_29936[(13)]);
var inst_29785 = before_jsload.call(null,files);
var inst_29786 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29787 = (function (){return ((function (inst_29788,inst_29785,inst_29786,state_val_29937,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29776_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29776_SHARP_);
});
;})(inst_29788,inst_29785,inst_29786,state_val_29937,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29788__$1 = cljs.core.filter.call(null,inst_29787,files);
var inst_29789 = cljs.core.not_empty.call(null,inst_29788__$1);
var state_29936__$1 = (function (){var statearr_29945 = state_29936;
(statearr_29945[(13)] = inst_29788__$1);

(statearr_29945[(14)] = inst_29785);

(statearr_29945[(15)] = inst_29786);

return statearr_29945;
})();
if(cljs.core.truth_(inst_29789)){
var statearr_29946_30028 = state_29936__$1;
(statearr_29946_30028[(1)] = (2));

} else {
var statearr_29947_30029 = state_29936__$1;
(statearr_29947_30029[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (24))){
var state_29936__$1 = state_29936;
var statearr_29948_30030 = state_29936__$1;
(statearr_29948_30030[(2)] = null);

(statearr_29948_30030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (39))){
var inst_29889 = (state_29936[(16)]);
var state_29936__$1 = state_29936;
var statearr_29949_30031 = state_29936__$1;
(statearr_29949_30031[(2)] = inst_29889);

(statearr_29949_30031[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (46))){
var inst_29931 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
var statearr_29950_30032 = state_29936__$1;
(statearr_29950_30032[(2)] = inst_29931);

(statearr_29950_30032[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (4))){
var inst_29833 = (state_29936[(2)]);
var inst_29834 = cljs.core.List.EMPTY;
var inst_29835 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29834);
var inst_29836 = (function (){return ((function (inst_29833,inst_29834,inst_29835,state_val_29937,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29777_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29777_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29777_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29777_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_29833,inst_29834,inst_29835,state_val_29937,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29837 = cljs.core.filter.call(null,inst_29836,files);
var inst_29838 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29839 = cljs.core.concat.call(null,inst_29837,inst_29838);
var state_29936__$1 = (function (){var statearr_29951 = state_29936;
(statearr_29951[(17)] = inst_29835);

(statearr_29951[(12)] = inst_29839);

(statearr_29951[(18)] = inst_29833);

return statearr_29951;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29952_30033 = state_29936__$1;
(statearr_29952_30033[(1)] = (16));

} else {
var statearr_29953_30034 = state_29936__$1;
(statearr_29953_30034[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (15))){
var inst_29823 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
var statearr_29954_30035 = state_29936__$1;
(statearr_29954_30035[(2)] = inst_29823);

(statearr_29954_30035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (21))){
var inst_29849 = (state_29936[(19)]);
var inst_29849__$1 = (state_29936[(2)]);
var inst_29850 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29849__$1);
var state_29936__$1 = (function (){var statearr_29955 = state_29936;
(statearr_29955[(19)] = inst_29849__$1);

return statearr_29955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29936__$1,(22),inst_29850);
} else {
if((state_val_29937 === (31))){
var inst_29934 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29936__$1,inst_29934);
} else {
if((state_val_29937 === (32))){
var inst_29889 = (state_29936[(16)]);
var inst_29894 = inst_29889.cljs$lang$protocol_mask$partition0$;
var inst_29895 = (inst_29894 & (64));
var inst_29896 = inst_29889.cljs$core$ISeq$;
var inst_29897 = (cljs.core.PROTOCOL_SENTINEL === inst_29896);
var inst_29898 = ((inst_29895) || (inst_29897));
var state_29936__$1 = state_29936;
if(cljs.core.truth_(inst_29898)){
var statearr_29956_30036 = state_29936__$1;
(statearr_29956_30036[(1)] = (35));

} else {
var statearr_29957_30037 = state_29936__$1;
(statearr_29957_30037[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (40))){
var inst_29911 = (state_29936[(20)]);
var inst_29910 = (state_29936[(2)]);
var inst_29911__$1 = cljs.core.get.call(null,inst_29910,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29912 = cljs.core.get.call(null,inst_29910,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29913 = cljs.core.not_empty.call(null,inst_29911__$1);
var state_29936__$1 = (function (){var statearr_29958 = state_29936;
(statearr_29958[(21)] = inst_29912);

(statearr_29958[(20)] = inst_29911__$1);

return statearr_29958;
})();
if(cljs.core.truth_(inst_29913)){
var statearr_29959_30038 = state_29936__$1;
(statearr_29959_30038[(1)] = (41));

} else {
var statearr_29960_30039 = state_29936__$1;
(statearr_29960_30039[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (33))){
var state_29936__$1 = state_29936;
var statearr_29961_30040 = state_29936__$1;
(statearr_29961_30040[(2)] = false);

(statearr_29961_30040[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (13))){
var inst_29809 = (state_29936[(22)]);
var inst_29813 = cljs.core.chunk_first.call(null,inst_29809);
var inst_29814 = cljs.core.chunk_rest.call(null,inst_29809);
var inst_29815 = cljs.core.count.call(null,inst_29813);
var inst_29796 = inst_29814;
var inst_29797 = inst_29813;
var inst_29798 = inst_29815;
var inst_29799 = (0);
var state_29936__$1 = (function (){var statearr_29962 = state_29936;
(statearr_29962[(7)] = inst_29797);

(statearr_29962[(8)] = inst_29796);

(statearr_29962[(9)] = inst_29799);

(statearr_29962[(10)] = inst_29798);

return statearr_29962;
})();
var statearr_29963_30041 = state_29936__$1;
(statearr_29963_30041[(2)] = null);

(statearr_29963_30041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (22))){
var inst_29857 = (state_29936[(23)]);
var inst_29849 = (state_29936[(19)]);
var inst_29852 = (state_29936[(24)]);
var inst_29853 = (state_29936[(25)]);
var inst_29852__$1 = (state_29936[(2)]);
var inst_29853__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29852__$1);
var inst_29854 = (function (){var all_files = inst_29849;
var res_SINGLEQUOTE_ = inst_29852__$1;
var res = inst_29853__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29857,inst_29849,inst_29852,inst_29853,inst_29852__$1,inst_29853__$1,state_val_29937,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29778_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29778_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29857,inst_29849,inst_29852,inst_29853,inst_29852__$1,inst_29853__$1,state_val_29937,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29855 = cljs.core.filter.call(null,inst_29854,inst_29852__$1);
var inst_29856 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29857__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29856);
var inst_29858 = cljs.core.not_empty.call(null,inst_29857__$1);
var state_29936__$1 = (function (){var statearr_29964 = state_29936;
(statearr_29964[(26)] = inst_29855);

(statearr_29964[(23)] = inst_29857__$1);

(statearr_29964[(24)] = inst_29852__$1);

(statearr_29964[(25)] = inst_29853__$1);

return statearr_29964;
})();
if(cljs.core.truth_(inst_29858)){
var statearr_29965_30042 = state_29936__$1;
(statearr_29965_30042[(1)] = (23));

} else {
var statearr_29966_30043 = state_29936__$1;
(statearr_29966_30043[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (36))){
var state_29936__$1 = state_29936;
var statearr_29967_30044 = state_29936__$1;
(statearr_29967_30044[(2)] = false);

(statearr_29967_30044[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (41))){
var inst_29911 = (state_29936[(20)]);
var inst_29915 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29916 = cljs.core.map.call(null,inst_29915,inst_29911);
var inst_29917 = cljs.core.pr_str.call(null,inst_29916);
var inst_29918 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29917)].join('');
var inst_29919 = figwheel.client.utils.log.call(null,inst_29918);
var state_29936__$1 = state_29936;
var statearr_29968_30045 = state_29936__$1;
(statearr_29968_30045[(2)] = inst_29919);

(statearr_29968_30045[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (43))){
var inst_29912 = (state_29936[(21)]);
var inst_29922 = (state_29936[(2)]);
var inst_29923 = cljs.core.not_empty.call(null,inst_29912);
var state_29936__$1 = (function (){var statearr_29969 = state_29936;
(statearr_29969[(27)] = inst_29922);

return statearr_29969;
})();
if(cljs.core.truth_(inst_29923)){
var statearr_29970_30046 = state_29936__$1;
(statearr_29970_30046[(1)] = (44));

} else {
var statearr_29971_30047 = state_29936__$1;
(statearr_29971_30047[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (29))){
var inst_29855 = (state_29936[(26)]);
var inst_29857 = (state_29936[(23)]);
var inst_29889 = (state_29936[(16)]);
var inst_29849 = (state_29936[(19)]);
var inst_29852 = (state_29936[(24)]);
var inst_29853 = (state_29936[(25)]);
var inst_29885 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29888 = (function (){var all_files = inst_29849;
var res_SINGLEQUOTE_ = inst_29852;
var res = inst_29853;
var files_not_loaded = inst_29855;
var dependencies_that_loaded = inst_29857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29855,inst_29857,inst_29889,inst_29849,inst_29852,inst_29853,inst_29885,state_val_29937,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29887){
var map__29972 = p__29887;
var map__29972__$1 = ((((!((map__29972 == null)))?(((((map__29972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29972):map__29972);
var namespace = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29855,inst_29857,inst_29889,inst_29849,inst_29852,inst_29853,inst_29885,state_val_29937,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29889__$1 = cljs.core.group_by.call(null,inst_29888,inst_29855);
var inst_29891 = (inst_29889__$1 == null);
var inst_29892 = cljs.core.not.call(null,inst_29891);
var state_29936__$1 = (function (){var statearr_29974 = state_29936;
(statearr_29974[(28)] = inst_29885);

(statearr_29974[(16)] = inst_29889__$1);

return statearr_29974;
})();
if(inst_29892){
var statearr_29975_30048 = state_29936__$1;
(statearr_29975_30048[(1)] = (32));

} else {
var statearr_29976_30049 = state_29936__$1;
(statearr_29976_30049[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (44))){
var inst_29912 = (state_29936[(21)]);
var inst_29925 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29912);
var inst_29926 = cljs.core.pr_str.call(null,inst_29925);
var inst_29927 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29926)].join('');
var inst_29928 = figwheel.client.utils.log.call(null,inst_29927);
var state_29936__$1 = state_29936;
var statearr_29977_30050 = state_29936__$1;
(statearr_29977_30050[(2)] = inst_29928);

(statearr_29977_30050[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (6))){
var inst_29830 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
var statearr_29978_30051 = state_29936__$1;
(statearr_29978_30051[(2)] = inst_29830);

(statearr_29978_30051[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (28))){
var inst_29855 = (state_29936[(26)]);
var inst_29882 = (state_29936[(2)]);
var inst_29883 = cljs.core.not_empty.call(null,inst_29855);
var state_29936__$1 = (function (){var statearr_29979 = state_29936;
(statearr_29979[(29)] = inst_29882);

return statearr_29979;
})();
if(cljs.core.truth_(inst_29883)){
var statearr_29980_30052 = state_29936__$1;
(statearr_29980_30052[(1)] = (29));

} else {
var statearr_29981_30053 = state_29936__$1;
(statearr_29981_30053[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (25))){
var inst_29853 = (state_29936[(25)]);
var inst_29869 = (state_29936[(2)]);
var inst_29870 = cljs.core.not_empty.call(null,inst_29853);
var state_29936__$1 = (function (){var statearr_29982 = state_29936;
(statearr_29982[(30)] = inst_29869);

return statearr_29982;
})();
if(cljs.core.truth_(inst_29870)){
var statearr_29983_30054 = state_29936__$1;
(statearr_29983_30054[(1)] = (26));

} else {
var statearr_29984_30055 = state_29936__$1;
(statearr_29984_30055[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (34))){
var inst_29905 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
if(cljs.core.truth_(inst_29905)){
var statearr_29985_30056 = state_29936__$1;
(statearr_29985_30056[(1)] = (38));

} else {
var statearr_29986_30057 = state_29936__$1;
(statearr_29986_30057[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (17))){
var state_29936__$1 = state_29936;
var statearr_29987_30058 = state_29936__$1;
(statearr_29987_30058[(2)] = recompile_dependents);

(statearr_29987_30058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (3))){
var state_29936__$1 = state_29936;
var statearr_29988_30059 = state_29936__$1;
(statearr_29988_30059[(2)] = null);

(statearr_29988_30059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (12))){
var inst_29826 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
var statearr_29989_30060 = state_29936__$1;
(statearr_29989_30060[(2)] = inst_29826);

(statearr_29989_30060[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (2))){
var inst_29788 = (state_29936[(13)]);
var inst_29795 = cljs.core.seq.call(null,inst_29788);
var inst_29796 = inst_29795;
var inst_29797 = null;
var inst_29798 = (0);
var inst_29799 = (0);
var state_29936__$1 = (function (){var statearr_29990 = state_29936;
(statearr_29990[(7)] = inst_29797);

(statearr_29990[(8)] = inst_29796);

(statearr_29990[(9)] = inst_29799);

(statearr_29990[(10)] = inst_29798);

return statearr_29990;
})();
var statearr_29991_30061 = state_29936__$1;
(statearr_29991_30061[(2)] = null);

(statearr_29991_30061[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (23))){
var inst_29855 = (state_29936[(26)]);
var inst_29857 = (state_29936[(23)]);
var inst_29849 = (state_29936[(19)]);
var inst_29852 = (state_29936[(24)]);
var inst_29853 = (state_29936[(25)]);
var inst_29860 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29862 = (function (){var all_files = inst_29849;
var res_SINGLEQUOTE_ = inst_29852;
var res = inst_29853;
var files_not_loaded = inst_29855;
var dependencies_that_loaded = inst_29857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29855,inst_29857,inst_29849,inst_29852,inst_29853,inst_29860,state_val_29937,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29861){
var map__29992 = p__29861;
var map__29992__$1 = ((((!((map__29992 == null)))?(((((map__29992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29992):map__29992);
var request_url = cljs.core.get.call(null,map__29992__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29855,inst_29857,inst_29849,inst_29852,inst_29853,inst_29860,state_val_29937,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29863 = cljs.core.reverse.call(null,inst_29857);
var inst_29864 = cljs.core.map.call(null,inst_29862,inst_29863);
var inst_29865 = cljs.core.pr_str.call(null,inst_29864);
var inst_29866 = figwheel.client.utils.log.call(null,inst_29865);
var state_29936__$1 = (function (){var statearr_29994 = state_29936;
(statearr_29994[(31)] = inst_29860);

return statearr_29994;
})();
var statearr_29995_30062 = state_29936__$1;
(statearr_29995_30062[(2)] = inst_29866);

(statearr_29995_30062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (35))){
var state_29936__$1 = state_29936;
var statearr_29996_30063 = state_29936__$1;
(statearr_29996_30063[(2)] = true);

(statearr_29996_30063[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (19))){
var inst_29839 = (state_29936[(12)]);
var inst_29845 = figwheel.client.file_reloading.expand_files.call(null,inst_29839);
var state_29936__$1 = state_29936;
var statearr_29997_30064 = state_29936__$1;
(statearr_29997_30064[(2)] = inst_29845);

(statearr_29997_30064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (11))){
var state_29936__$1 = state_29936;
var statearr_29998_30065 = state_29936__$1;
(statearr_29998_30065[(2)] = null);

(statearr_29998_30065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (9))){
var inst_29828 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
var statearr_29999_30066 = state_29936__$1;
(statearr_29999_30066[(2)] = inst_29828);

(statearr_29999_30066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (5))){
var inst_29799 = (state_29936[(9)]);
var inst_29798 = (state_29936[(10)]);
var inst_29801 = (inst_29799 < inst_29798);
var inst_29802 = inst_29801;
var state_29936__$1 = state_29936;
if(cljs.core.truth_(inst_29802)){
var statearr_30000_30067 = state_29936__$1;
(statearr_30000_30067[(1)] = (7));

} else {
var statearr_30001_30068 = state_29936__$1;
(statearr_30001_30068[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (14))){
var inst_29809 = (state_29936[(22)]);
var inst_29818 = cljs.core.first.call(null,inst_29809);
var inst_29819 = figwheel.client.file_reloading.eval_body.call(null,inst_29818,opts);
var inst_29820 = cljs.core.next.call(null,inst_29809);
var inst_29796 = inst_29820;
var inst_29797 = null;
var inst_29798 = (0);
var inst_29799 = (0);
var state_29936__$1 = (function (){var statearr_30002 = state_29936;
(statearr_30002[(7)] = inst_29797);

(statearr_30002[(8)] = inst_29796);

(statearr_30002[(9)] = inst_29799);

(statearr_30002[(10)] = inst_29798);

(statearr_30002[(32)] = inst_29819);

return statearr_30002;
})();
var statearr_30003_30069 = state_29936__$1;
(statearr_30003_30069[(2)] = null);

(statearr_30003_30069[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (45))){
var state_29936__$1 = state_29936;
var statearr_30004_30070 = state_29936__$1;
(statearr_30004_30070[(2)] = null);

(statearr_30004_30070[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (26))){
var inst_29855 = (state_29936[(26)]);
var inst_29857 = (state_29936[(23)]);
var inst_29849 = (state_29936[(19)]);
var inst_29852 = (state_29936[(24)]);
var inst_29853 = (state_29936[(25)]);
var inst_29872 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29874 = (function (){var all_files = inst_29849;
var res_SINGLEQUOTE_ = inst_29852;
var res = inst_29853;
var files_not_loaded = inst_29855;
var dependencies_that_loaded = inst_29857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29855,inst_29857,inst_29849,inst_29852,inst_29853,inst_29872,state_val_29937,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29873){
var map__30005 = p__29873;
var map__30005__$1 = ((((!((map__30005 == null)))?(((((map__30005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30005):map__30005);
var namespace = cljs.core.get.call(null,map__30005__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30005__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29855,inst_29857,inst_29849,inst_29852,inst_29853,inst_29872,state_val_29937,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29875 = cljs.core.map.call(null,inst_29874,inst_29853);
var inst_29876 = cljs.core.pr_str.call(null,inst_29875);
var inst_29877 = figwheel.client.utils.log.call(null,inst_29876);
var inst_29878 = (function (){var all_files = inst_29849;
var res_SINGLEQUOTE_ = inst_29852;
var res = inst_29853;
var files_not_loaded = inst_29855;
var dependencies_that_loaded = inst_29857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29855,inst_29857,inst_29849,inst_29852,inst_29853,inst_29872,inst_29874,inst_29875,inst_29876,inst_29877,state_val_29937,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29855,inst_29857,inst_29849,inst_29852,inst_29853,inst_29872,inst_29874,inst_29875,inst_29876,inst_29877,state_val_29937,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29879 = setTimeout(inst_29878,(10));
var state_29936__$1 = (function (){var statearr_30007 = state_29936;
(statearr_30007[(33)] = inst_29877);

(statearr_30007[(34)] = inst_29872);

return statearr_30007;
})();
var statearr_30008_30071 = state_29936__$1;
(statearr_30008_30071[(2)] = inst_29879);

(statearr_30008_30071[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (16))){
var state_29936__$1 = state_29936;
var statearr_30009_30072 = state_29936__$1;
(statearr_30009_30072[(2)] = reload_dependents);

(statearr_30009_30072[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (38))){
var inst_29889 = (state_29936[(16)]);
var inst_29907 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29889);
var state_29936__$1 = state_29936;
var statearr_30010_30073 = state_29936__$1;
(statearr_30010_30073[(2)] = inst_29907);

(statearr_30010_30073[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (30))){
var state_29936__$1 = state_29936;
var statearr_30011_30074 = state_29936__$1;
(statearr_30011_30074[(2)] = null);

(statearr_30011_30074[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (10))){
var inst_29809 = (state_29936[(22)]);
var inst_29811 = cljs.core.chunked_seq_QMARK_.call(null,inst_29809);
var state_29936__$1 = state_29936;
if(inst_29811){
var statearr_30012_30075 = state_29936__$1;
(statearr_30012_30075[(1)] = (13));

} else {
var statearr_30013_30076 = state_29936__$1;
(statearr_30013_30076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (18))){
var inst_29843 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
if(cljs.core.truth_(inst_29843)){
var statearr_30014_30077 = state_29936__$1;
(statearr_30014_30077[(1)] = (19));

} else {
var statearr_30015_30078 = state_29936__$1;
(statearr_30015_30078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (42))){
var state_29936__$1 = state_29936;
var statearr_30016_30079 = state_29936__$1;
(statearr_30016_30079[(2)] = null);

(statearr_30016_30079[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (37))){
var inst_29902 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
var statearr_30017_30080 = state_29936__$1;
(statearr_30017_30080[(2)] = inst_29902);

(statearr_30017_30080[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (8))){
var inst_29809 = (state_29936[(22)]);
var inst_29796 = (state_29936[(8)]);
var inst_29809__$1 = cljs.core.seq.call(null,inst_29796);
var state_29936__$1 = (function (){var statearr_30018 = state_29936;
(statearr_30018[(22)] = inst_29809__$1);

return statearr_30018;
})();
if(inst_29809__$1){
var statearr_30019_30081 = state_29936__$1;
(statearr_30019_30081[(1)] = (10));

} else {
var statearr_30020_30082 = state_29936__$1;
(statearr_30020_30082[(1)] = (11));

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
});})(c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27179__auto__,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto____0 = (function (){
var statearr_30021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30021[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto__);

(statearr_30021[(1)] = (1));

return statearr_30021;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto____1 = (function (state_29936){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_29936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e30022){if((e30022 instanceof Object)){
var ex__27183__auto__ = e30022;
var statearr_30023_30083 = state_29936;
(statearr_30023_30083[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30084 = state_29936;
state_29936 = G__30084;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto__ = function(state_29936){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto____1.call(this,state_29936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27272__auto__ = (function (){var statearr_30024 = f__27271__auto__.call(null);
(statearr_30024[(6)] = c__27270__auto__);

return statearr_30024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto__,map__29781,map__29781__$1,opts,before_jsload,on_jsload,reload_dependents,map__29782,map__29782__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27270__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30087,link){
var map__30088 = p__30087;
var map__30088__$1 = ((((!((map__30088 == null)))?(((((map__30088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30088):map__30088);
var file = cljs.core.get.call(null,map__30088__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30088,map__30088__$1,file){
return (function (p1__30085_SHARP_,p2__30086_SHARP_){
if(cljs.core._EQ_.call(null,p1__30085_SHARP_,p2__30086_SHARP_)){
return p1__30085_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30088,map__30088__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30091){
var map__30092 = p__30091;
var map__30092__$1 = ((((!((map__30092 == null)))?(((((map__30092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30092):map__30092);
var match_length = cljs.core.get.call(null,map__30092__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30092__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30090_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30090_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30094_SHARP_,p2__30095_SHARP_){
return cljs.core.assoc.call(null,p1__30094_SHARP_,cljs.core.get.call(null,p2__30095_SHARP_,key),p2__30095_SHARP_);
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
var loaded_f_datas_30096 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30096);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30096);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30097,p__30098){
var map__30099 = p__30097;
var map__30099__$1 = ((((!((map__30099 == null)))?(((((map__30099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30099):map__30099);
var on_cssload = cljs.core.get.call(null,map__30099__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30100 = p__30098;
var map__30100__$1 = ((((!((map__30100 == null)))?(((((map__30100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30100):map__30100);
var files_msg = map__30100__$1;
var files = cljs.core.get.call(null,map__30100__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1530901593317
