// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16785__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16785__auto__){
return or__16785__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16785__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27383_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27383_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__27388 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27389 = null;
var count__27390 = (0);
var i__27391 = (0);
while(true){
if((i__27391 < count__27390)){
var n = cljs.core._nth.call(null,chunk__27389,i__27391);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27392 = seq__27388;
var G__27393 = chunk__27389;
var G__27394 = count__27390;
var G__27395 = (i__27391 + (1));
seq__27388 = G__27392;
chunk__27389 = G__27393;
count__27390 = G__27394;
i__27391 = G__27395;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27388);
if(temp__4425__auto__){
var seq__27388__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27388__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__27388__$1);
var G__27396 = cljs.core.chunk_rest.call(null,seq__27388__$1);
var G__27397 = c__17588__auto__;
var G__27398 = cljs.core.count.call(null,c__17588__auto__);
var G__27399 = (0);
seq__27388 = G__27396;
chunk__27389 = G__27397;
count__27390 = G__27398;
i__27391 = G__27399;
continue;
} else {
var n = cljs.core.first.call(null,seq__27388__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27400 = cljs.core.next.call(null,seq__27388__$1);
var G__27401 = null;
var G__27402 = (0);
var G__27403 = (0);
seq__27388 = G__27400;
chunk__27389 = G__27401;
count__27390 = G__27402;
i__27391 = G__27403;
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

var seq__27442_27449 = cljs.core.seq.call(null,deps);
var chunk__27443_27450 = null;
var count__27444_27451 = (0);
var i__27445_27452 = (0);
while(true){
if((i__27445_27452 < count__27444_27451)){
var dep_27453 = cljs.core._nth.call(null,chunk__27443_27450,i__27445_27452);
topo_sort_helper_STAR_.call(null,dep_27453,(depth + (1)),state);

var G__27454 = seq__27442_27449;
var G__27455 = chunk__27443_27450;
var G__27456 = count__27444_27451;
var G__27457 = (i__27445_27452 + (1));
seq__27442_27449 = G__27454;
chunk__27443_27450 = G__27455;
count__27444_27451 = G__27456;
i__27445_27452 = G__27457;
continue;
} else {
var temp__4425__auto___27458 = cljs.core.seq.call(null,seq__27442_27449);
if(temp__4425__auto___27458){
var seq__27442_27459__$1 = temp__4425__auto___27458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27442_27459__$1)){
var c__17588__auto___27460 = cljs.core.chunk_first.call(null,seq__27442_27459__$1);
var G__27461 = cljs.core.chunk_rest.call(null,seq__27442_27459__$1);
var G__27462 = c__17588__auto___27460;
var G__27463 = cljs.core.count.call(null,c__17588__auto___27460);
var G__27464 = (0);
seq__27442_27449 = G__27461;
chunk__27443_27450 = G__27462;
count__27444_27451 = G__27463;
i__27445_27452 = G__27464;
continue;
} else {
var dep_27465 = cljs.core.first.call(null,seq__27442_27459__$1);
topo_sort_helper_STAR_.call(null,dep_27465,(depth + (1)),state);

var G__27466 = cljs.core.next.call(null,seq__27442_27459__$1);
var G__27467 = null;
var G__27468 = (0);
var G__27469 = (0);
seq__27442_27449 = G__27466;
chunk__27443_27450 = G__27467;
count__27444_27451 = G__27468;
i__27445_27452 = G__27469;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27446){
var vec__27448 = p__27446;
var x = cljs.core.nth.call(null,vec__27448,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27448,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27448,x,xs,get_deps__$1){
return (function (p1__27404_SHARP_){
return clojure.set.difference.call(null,p1__27404_SHARP_,x);
});})(vec__27448,x,xs,get_deps__$1))
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
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27482 = cljs.core.seq.call(null,provides);
var chunk__27483 = null;
var count__27484 = (0);
var i__27485 = (0);
while(true){
if((i__27485 < count__27484)){
var prov = cljs.core._nth.call(null,chunk__27483,i__27485);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27486_27494 = cljs.core.seq.call(null,requires);
var chunk__27487_27495 = null;
var count__27488_27496 = (0);
var i__27489_27497 = (0);
while(true){
if((i__27489_27497 < count__27488_27496)){
var req_27498 = cljs.core._nth.call(null,chunk__27487_27495,i__27489_27497);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27498,prov);

var G__27499 = seq__27486_27494;
var G__27500 = chunk__27487_27495;
var G__27501 = count__27488_27496;
var G__27502 = (i__27489_27497 + (1));
seq__27486_27494 = G__27499;
chunk__27487_27495 = G__27500;
count__27488_27496 = G__27501;
i__27489_27497 = G__27502;
continue;
} else {
var temp__4425__auto___27503 = cljs.core.seq.call(null,seq__27486_27494);
if(temp__4425__auto___27503){
var seq__27486_27504__$1 = temp__4425__auto___27503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27486_27504__$1)){
var c__17588__auto___27505 = cljs.core.chunk_first.call(null,seq__27486_27504__$1);
var G__27506 = cljs.core.chunk_rest.call(null,seq__27486_27504__$1);
var G__27507 = c__17588__auto___27505;
var G__27508 = cljs.core.count.call(null,c__17588__auto___27505);
var G__27509 = (0);
seq__27486_27494 = G__27506;
chunk__27487_27495 = G__27507;
count__27488_27496 = G__27508;
i__27489_27497 = G__27509;
continue;
} else {
var req_27510 = cljs.core.first.call(null,seq__27486_27504__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27510,prov);

var G__27511 = cljs.core.next.call(null,seq__27486_27504__$1);
var G__27512 = null;
var G__27513 = (0);
var G__27514 = (0);
seq__27486_27494 = G__27511;
chunk__27487_27495 = G__27512;
count__27488_27496 = G__27513;
i__27489_27497 = G__27514;
continue;
}
} else {
}
}
break;
}

var G__27515 = seq__27482;
var G__27516 = chunk__27483;
var G__27517 = count__27484;
var G__27518 = (i__27485 + (1));
seq__27482 = G__27515;
chunk__27483 = G__27516;
count__27484 = G__27517;
i__27485 = G__27518;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27482);
if(temp__4425__auto__){
var seq__27482__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27482__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__27482__$1);
var G__27519 = cljs.core.chunk_rest.call(null,seq__27482__$1);
var G__27520 = c__17588__auto__;
var G__27521 = cljs.core.count.call(null,c__17588__auto__);
var G__27522 = (0);
seq__27482 = G__27519;
chunk__27483 = G__27520;
count__27484 = G__27521;
i__27485 = G__27522;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27482__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27490_27523 = cljs.core.seq.call(null,requires);
var chunk__27491_27524 = null;
var count__27492_27525 = (0);
var i__27493_27526 = (0);
while(true){
if((i__27493_27526 < count__27492_27525)){
var req_27527 = cljs.core._nth.call(null,chunk__27491_27524,i__27493_27526);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27527,prov);

var G__27528 = seq__27490_27523;
var G__27529 = chunk__27491_27524;
var G__27530 = count__27492_27525;
var G__27531 = (i__27493_27526 + (1));
seq__27490_27523 = G__27528;
chunk__27491_27524 = G__27529;
count__27492_27525 = G__27530;
i__27493_27526 = G__27531;
continue;
} else {
var temp__4425__auto___27532__$1 = cljs.core.seq.call(null,seq__27490_27523);
if(temp__4425__auto___27532__$1){
var seq__27490_27533__$1 = temp__4425__auto___27532__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27490_27533__$1)){
var c__17588__auto___27534 = cljs.core.chunk_first.call(null,seq__27490_27533__$1);
var G__27535 = cljs.core.chunk_rest.call(null,seq__27490_27533__$1);
var G__27536 = c__17588__auto___27534;
var G__27537 = cljs.core.count.call(null,c__17588__auto___27534);
var G__27538 = (0);
seq__27490_27523 = G__27535;
chunk__27491_27524 = G__27536;
count__27492_27525 = G__27537;
i__27493_27526 = G__27538;
continue;
} else {
var req_27539 = cljs.core.first.call(null,seq__27490_27533__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27539,prov);

var G__27540 = cljs.core.next.call(null,seq__27490_27533__$1);
var G__27541 = null;
var G__27542 = (0);
var G__27543 = (0);
seq__27490_27523 = G__27540;
chunk__27491_27524 = G__27541;
count__27492_27525 = G__27542;
i__27493_27526 = G__27543;
continue;
}
} else {
}
}
break;
}

var G__27544 = cljs.core.next.call(null,seq__27482__$1);
var G__27545 = null;
var G__27546 = (0);
var G__27547 = (0);
seq__27482 = G__27544;
chunk__27483 = G__27545;
count__27484 = G__27546;
i__27485 = G__27547;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27552_27556 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27553_27557 = null;
var count__27554_27558 = (0);
var i__27555_27559 = (0);
while(true){
if((i__27555_27559 < count__27554_27558)){
var ns_27560 = cljs.core._nth.call(null,chunk__27553_27557,i__27555_27559);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27560);

var G__27561 = seq__27552_27556;
var G__27562 = chunk__27553_27557;
var G__27563 = count__27554_27558;
var G__27564 = (i__27555_27559 + (1));
seq__27552_27556 = G__27561;
chunk__27553_27557 = G__27562;
count__27554_27558 = G__27563;
i__27555_27559 = G__27564;
continue;
} else {
var temp__4425__auto___27565 = cljs.core.seq.call(null,seq__27552_27556);
if(temp__4425__auto___27565){
var seq__27552_27566__$1 = temp__4425__auto___27565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27552_27566__$1)){
var c__17588__auto___27567 = cljs.core.chunk_first.call(null,seq__27552_27566__$1);
var G__27568 = cljs.core.chunk_rest.call(null,seq__27552_27566__$1);
var G__27569 = c__17588__auto___27567;
var G__27570 = cljs.core.count.call(null,c__17588__auto___27567);
var G__27571 = (0);
seq__27552_27556 = G__27568;
chunk__27553_27557 = G__27569;
count__27554_27558 = G__27570;
i__27555_27559 = G__27571;
continue;
} else {
var ns_27572 = cljs.core.first.call(null,seq__27552_27566__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27572);

var G__27573 = cljs.core.next.call(null,seq__27552_27566__$1);
var G__27574 = null;
var G__27575 = (0);
var G__27576 = (0);
seq__27552_27556 = G__27573;
chunk__27553_27557 = G__27574;
count__27554_27558 = G__27575;
i__27555_27559 = G__27576;
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
goog.require_figwheel_backup_ = (function (){var or__16785__auto__ = goog.require__;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
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
var G__27577__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27578__i = 0, G__27578__a = new Array(arguments.length -  0);
while (G__27578__i < G__27578__a.length) {G__27578__a[G__27578__i] = arguments[G__27578__i + 0]; ++G__27578__i;}
  args = new cljs.core.IndexedSeq(G__27578__a,0);
} 
return G__27577__delegate.call(this,args);};
G__27577.cljs$lang$maxFixedArity = 0;
G__27577.cljs$lang$applyTo = (function (arglist__27579){
var args = cljs.core.seq(arglist__27579);
return G__27577__delegate(args);
});
G__27577.cljs$core$IFn$_invoke$arity$variadic = G__27577__delegate;
return G__27577;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27581 = cljs.core._EQ_;
var expr__27582 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27581.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27582))){
var path_parts = ((function (pred__27581,expr__27582){
return (function (p1__27580_SHARP_){
return clojure.string.split.call(null,p1__27580_SHARP_,/[\/\\]/);
});})(pred__27581,expr__27582))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27581,expr__27582){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27584){if((e27584 instanceof Error)){
var e = e27584;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27584;

}
}})());
});
;})(path_parts,sep,root,pred__27581,expr__27582))
} else {
if(cljs.core.truth_(pred__27581.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27582))){
return ((function (pred__27581,expr__27582){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27581,expr__27582){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27581,expr__27582))
);

return deferred.addErrback(((function (deferred,pred__27581,expr__27582){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27581,expr__27582))
);
});
;})(pred__27581,expr__27582))
} else {
return ((function (pred__27581,expr__27582){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27581,expr__27582))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27585,callback){
var map__27588 = p__27585;
var map__27588__$1 = ((((!((map__27588 == null)))?((((map__27588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27588):map__27588);
var file_msg = map__27588__$1;
var request_url = cljs.core.get.call(null,map__27588__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27588,map__27588__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27588,map__27588__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
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
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto__){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto__){
return (function (state_27612){
var state_val_27613 = (state_27612[(1)]);
if((state_val_27613 === (7))){
var inst_27608 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
var statearr_27614_27634 = state_27612__$1;
(statearr_27614_27634[(2)] = inst_27608);

(statearr_27614_27634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (1))){
var state_27612__$1 = state_27612;
var statearr_27615_27635 = state_27612__$1;
(statearr_27615_27635[(2)] = null);

(statearr_27615_27635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (4))){
var inst_27592 = (state_27612[(7)]);
var inst_27592__$1 = (state_27612[(2)]);
var state_27612__$1 = (function (){var statearr_27616 = state_27612;
(statearr_27616[(7)] = inst_27592__$1);

return statearr_27616;
})();
if(cljs.core.truth_(inst_27592__$1)){
var statearr_27617_27636 = state_27612__$1;
(statearr_27617_27636[(1)] = (5));

} else {
var statearr_27618_27637 = state_27612__$1;
(statearr_27618_27637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (6))){
var state_27612__$1 = state_27612;
var statearr_27619_27638 = state_27612__$1;
(statearr_27619_27638[(2)] = null);

(statearr_27619_27638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (3))){
var inst_27610 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27612__$1,inst_27610);
} else {
if((state_val_27613 === (2))){
var state_27612__$1 = state_27612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27612__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27613 === (11))){
var inst_27604 = (state_27612[(2)]);
var state_27612__$1 = (function (){var statearr_27620 = state_27612;
(statearr_27620[(8)] = inst_27604);

return statearr_27620;
})();
var statearr_27621_27639 = state_27612__$1;
(statearr_27621_27639[(2)] = null);

(statearr_27621_27639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (9))){
var inst_27598 = (state_27612[(9)]);
var inst_27596 = (state_27612[(10)]);
var inst_27600 = inst_27598.call(null,inst_27596);
var state_27612__$1 = state_27612;
var statearr_27622_27640 = state_27612__$1;
(statearr_27622_27640[(2)] = inst_27600);

(statearr_27622_27640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (5))){
var inst_27592 = (state_27612[(7)]);
var inst_27594 = figwheel.client.file_reloading.blocking_load.call(null,inst_27592);
var state_27612__$1 = state_27612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27612__$1,(8),inst_27594);
} else {
if((state_val_27613 === (10))){
var inst_27596 = (state_27612[(10)]);
var inst_27602 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27596);
var state_27612__$1 = state_27612;
var statearr_27623_27641 = state_27612__$1;
(statearr_27623_27641[(2)] = inst_27602);

(statearr_27623_27641[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (8))){
var inst_27598 = (state_27612[(9)]);
var inst_27592 = (state_27612[(7)]);
var inst_27596 = (state_27612[(2)]);
var inst_27597 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27598__$1 = cljs.core.get.call(null,inst_27597,inst_27592);
var state_27612__$1 = (function (){var statearr_27624 = state_27612;
(statearr_27624[(9)] = inst_27598__$1);

(statearr_27624[(10)] = inst_27596);

return statearr_27624;
})();
if(cljs.core.truth_(inst_27598__$1)){
var statearr_27625_27642 = state_27612__$1;
(statearr_27625_27642[(1)] = (9));

} else {
var statearr_27626_27643 = state_27612__$1;
(statearr_27626_27643[(1)] = (10));

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
});})(c__19893__auto__))
;
return ((function (switch__19872__auto__,c__19893__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19873__auto__ = null;
var figwheel$client$file_reloading$state_machine__19873__auto____0 = (function (){
var statearr_27630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27630[(0)] = figwheel$client$file_reloading$state_machine__19873__auto__);

(statearr_27630[(1)] = (1));

return statearr_27630;
});
var figwheel$client$file_reloading$state_machine__19873__auto____1 = (function (state_27612){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_27612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e27631){if((e27631 instanceof Object)){
var ex__19876__auto__ = e27631;
var statearr_27632_27644 = state_27612;
(statearr_27632_27644[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27645 = state_27612;
state_27612 = G__27645;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19873__auto__ = function(state_27612){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19873__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19873__auto____1.call(this,state_27612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19873__auto____0;
figwheel$client$file_reloading$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19873__auto____1;
return figwheel$client$file_reloading$state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto__))
})();
var state__19895__auto__ = (function (){var statearr_27633 = f__19894__auto__.call(null);
(statearr_27633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto__);

return statearr_27633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto__))
);

return c__19893__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27646,callback){
var map__27649 = p__27646;
var map__27649__$1 = ((((!((map__27649 == null)))?((((map__27649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27649):map__27649);
var file_msg = map__27649__$1;
var namespace = cljs.core.get.call(null,map__27649__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27649,map__27649__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27649,map__27649__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27651){
var map__27654 = p__27651;
var map__27654__$1 = ((((!((map__27654 == null)))?((((map__27654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27654):map__27654);
var file_msg = map__27654__$1;
var namespace = cljs.core.get.call(null,map__27654__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16773__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16773__auto__){
var or__16785__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16773__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27656,callback){
var map__27659 = p__27656;
var map__27659__$1 = ((((!((map__27659 == null)))?((((map__27659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27659):map__27659);
var file_msg = map__27659__$1;
var request_url = cljs.core.get.call(null,map__27659__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27659__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__19893__auto___27747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___27747,out){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___27747,out){
return (function (state_27729){
var state_val_27730 = (state_27729[(1)]);
if((state_val_27730 === (1))){
var inst_27707 = cljs.core.nth.call(null,files,(0),null);
var inst_27708 = cljs.core.nthnext.call(null,files,(1));
var inst_27709 = files;
var state_27729__$1 = (function (){var statearr_27731 = state_27729;
(statearr_27731[(7)] = inst_27708);

(statearr_27731[(8)] = inst_27707);

(statearr_27731[(9)] = inst_27709);

return statearr_27731;
})();
var statearr_27732_27748 = state_27729__$1;
(statearr_27732_27748[(2)] = null);

(statearr_27732_27748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (2))){
var inst_27709 = (state_27729[(9)]);
var inst_27712 = (state_27729[(10)]);
var inst_27712__$1 = cljs.core.nth.call(null,inst_27709,(0),null);
var inst_27713 = cljs.core.nthnext.call(null,inst_27709,(1));
var inst_27714 = (inst_27712__$1 == null);
var inst_27715 = cljs.core.not.call(null,inst_27714);
var state_27729__$1 = (function (){var statearr_27733 = state_27729;
(statearr_27733[(11)] = inst_27713);

(statearr_27733[(10)] = inst_27712__$1);

return statearr_27733;
})();
if(inst_27715){
var statearr_27734_27749 = state_27729__$1;
(statearr_27734_27749[(1)] = (4));

} else {
var statearr_27735_27750 = state_27729__$1;
(statearr_27735_27750[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (3))){
var inst_27727 = (state_27729[(2)]);
var state_27729__$1 = state_27729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27729__$1,inst_27727);
} else {
if((state_val_27730 === (4))){
var inst_27712 = (state_27729[(10)]);
var inst_27717 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27712);
var state_27729__$1 = state_27729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27729__$1,(7),inst_27717);
} else {
if((state_val_27730 === (5))){
var inst_27723 = cljs.core.async.close_BANG_.call(null,out);
var state_27729__$1 = state_27729;
var statearr_27736_27751 = state_27729__$1;
(statearr_27736_27751[(2)] = inst_27723);

(statearr_27736_27751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (6))){
var inst_27725 = (state_27729[(2)]);
var state_27729__$1 = state_27729;
var statearr_27737_27752 = state_27729__$1;
(statearr_27737_27752[(2)] = inst_27725);

(statearr_27737_27752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (7))){
var inst_27713 = (state_27729[(11)]);
var inst_27719 = (state_27729[(2)]);
var inst_27720 = cljs.core.async.put_BANG_.call(null,out,inst_27719);
var inst_27709 = inst_27713;
var state_27729__$1 = (function (){var statearr_27738 = state_27729;
(statearr_27738[(12)] = inst_27720);

(statearr_27738[(9)] = inst_27709);

return statearr_27738;
})();
var statearr_27739_27753 = state_27729__$1;
(statearr_27739_27753[(2)] = null);

(statearr_27739_27753[(1)] = (2));


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
});})(c__19893__auto___27747,out))
;
return ((function (switch__19872__auto__,c__19893__auto___27747,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19873__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19873__auto____0 = (function (){
var statearr_27743 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27743[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19873__auto__);

(statearr_27743[(1)] = (1));

return statearr_27743;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19873__auto____1 = (function (state_27729){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_27729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e27744){if((e27744 instanceof Object)){
var ex__19876__auto__ = e27744;
var statearr_27745_27754 = state_27729;
(statearr_27745_27754[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27755 = state_27729;
state_27729 = G__27755;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19873__auto__ = function(state_27729){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19873__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19873__auto____1.call(this,state_27729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19873__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19873__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___27747,out))
})();
var state__19895__auto__ = (function (){var statearr_27746 = f__19894__auto__.call(null);
(statearr_27746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___27747);

return statearr_27746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___27747,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27756,opts){
var map__27760 = p__27756;
var map__27760__$1 = ((((!((map__27760 == null)))?((((map__27760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27760):map__27760);
var eval_body__$1 = cljs.core.get.call(null,map__27760__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27760__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16773__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16773__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16773__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27762){var e = e27762;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27763_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27763_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
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
return cljs.core.map.call(null,(function (p__27768){
var vec__27769 = p__27768;
var k = cljs.core.nth.call(null,vec__27769,(0),null);
var v = cljs.core.nth.call(null,vec__27769,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27770){
var vec__27771 = p__27770;
var k = cljs.core.nth.call(null,vec__27771,(0),null);
var v = cljs.core.nth.call(null,vec__27771,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27775,p__27776){
var map__28023 = p__27775;
var map__28023__$1 = ((((!((map__28023 == null)))?((((map__28023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28023):map__28023);
var opts = map__28023__$1;
var before_jsload = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28024 = p__27776;
var map__28024__$1 = ((((!((map__28024 == null)))?((((map__28024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28024):map__28024);
var msg = map__28024__$1;
var files = cljs.core.get.call(null,map__28024__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28024__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28024__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28177){
var state_val_28178 = (state_28177[(1)]);
if((state_val_28178 === (7))){
var inst_28038 = (state_28177[(7)]);
var inst_28041 = (state_28177[(8)]);
var inst_28040 = (state_28177[(9)]);
var inst_28039 = (state_28177[(10)]);
var inst_28046 = cljs.core._nth.call(null,inst_28039,inst_28041);
var inst_28047 = figwheel.client.file_reloading.eval_body.call(null,inst_28046,opts);
var inst_28048 = (inst_28041 + (1));
var tmp28179 = inst_28038;
var tmp28180 = inst_28040;
var tmp28181 = inst_28039;
var inst_28038__$1 = tmp28179;
var inst_28039__$1 = tmp28181;
var inst_28040__$1 = tmp28180;
var inst_28041__$1 = inst_28048;
var state_28177__$1 = (function (){var statearr_28182 = state_28177;
(statearr_28182[(7)] = inst_28038__$1);

(statearr_28182[(8)] = inst_28041__$1);

(statearr_28182[(9)] = inst_28040__$1);

(statearr_28182[(11)] = inst_28047);

(statearr_28182[(10)] = inst_28039__$1);

return statearr_28182;
})();
var statearr_28183_28269 = state_28177__$1;
(statearr_28183_28269[(2)] = null);

(statearr_28183_28269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (20))){
var inst_28081 = (state_28177[(12)]);
var inst_28089 = figwheel.client.file_reloading.sort_files.call(null,inst_28081);
var state_28177__$1 = state_28177;
var statearr_28184_28270 = state_28177__$1;
(statearr_28184_28270[(2)] = inst_28089);

(statearr_28184_28270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (27))){
var state_28177__$1 = state_28177;
var statearr_28185_28271 = state_28177__$1;
(statearr_28185_28271[(2)] = null);

(statearr_28185_28271[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (1))){
var inst_28030 = (state_28177[(13)]);
var inst_28027 = before_jsload.call(null,files);
var inst_28028 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28029 = (function (){return ((function (inst_28030,inst_28027,inst_28028,state_val_28178,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27772_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27772_SHARP_);
});
;})(inst_28030,inst_28027,inst_28028,state_val_28178,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28030__$1 = cljs.core.filter.call(null,inst_28029,files);
var inst_28031 = cljs.core.not_empty.call(null,inst_28030__$1);
var state_28177__$1 = (function (){var statearr_28186 = state_28177;
(statearr_28186[(14)] = inst_28028);

(statearr_28186[(15)] = inst_28027);

(statearr_28186[(13)] = inst_28030__$1);

return statearr_28186;
})();
if(cljs.core.truth_(inst_28031)){
var statearr_28187_28272 = state_28177__$1;
(statearr_28187_28272[(1)] = (2));

} else {
var statearr_28188_28273 = state_28177__$1;
(statearr_28188_28273[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (24))){
var state_28177__$1 = state_28177;
var statearr_28189_28274 = state_28177__$1;
(statearr_28189_28274[(2)] = null);

(statearr_28189_28274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (39))){
var inst_28131 = (state_28177[(16)]);
var state_28177__$1 = state_28177;
var statearr_28190_28275 = state_28177__$1;
(statearr_28190_28275[(2)] = inst_28131);

(statearr_28190_28275[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (46))){
var inst_28172 = (state_28177[(2)]);
var state_28177__$1 = state_28177;
var statearr_28191_28276 = state_28177__$1;
(statearr_28191_28276[(2)] = inst_28172);

(statearr_28191_28276[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (4))){
var inst_28075 = (state_28177[(2)]);
var inst_28076 = cljs.core.List.EMPTY;
var inst_28077 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28076);
var inst_28078 = (function (){return ((function (inst_28075,inst_28076,inst_28077,state_val_28178,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27773_SHARP_){
var and__16773__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27773_SHARP_);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27773_SHARP_));
} else {
return and__16773__auto__;
}
});
;})(inst_28075,inst_28076,inst_28077,state_val_28178,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28079 = cljs.core.filter.call(null,inst_28078,files);
var inst_28080 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28081 = cljs.core.concat.call(null,inst_28079,inst_28080);
var state_28177__$1 = (function (){var statearr_28192 = state_28177;
(statearr_28192[(12)] = inst_28081);

(statearr_28192[(17)] = inst_28075);

(statearr_28192[(18)] = inst_28077);

return statearr_28192;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28193_28277 = state_28177__$1;
(statearr_28193_28277[(1)] = (16));

} else {
var statearr_28194_28278 = state_28177__$1;
(statearr_28194_28278[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (15))){
var inst_28065 = (state_28177[(2)]);
var state_28177__$1 = state_28177;
var statearr_28195_28279 = state_28177__$1;
(statearr_28195_28279[(2)] = inst_28065);

(statearr_28195_28279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (21))){
var inst_28091 = (state_28177[(19)]);
var inst_28091__$1 = (state_28177[(2)]);
var inst_28092 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28091__$1);
var state_28177__$1 = (function (){var statearr_28196 = state_28177;
(statearr_28196[(19)] = inst_28091__$1);

return statearr_28196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28177__$1,(22),inst_28092);
} else {
if((state_val_28178 === (31))){
var inst_28175 = (state_28177[(2)]);
var state_28177__$1 = state_28177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28177__$1,inst_28175);
} else {
if((state_val_28178 === (32))){
var inst_28131 = (state_28177[(16)]);
var inst_28136 = inst_28131.cljs$lang$protocol_mask$partition0$;
var inst_28137 = (inst_28136 & (64));
var inst_28138 = inst_28131.cljs$core$ISeq$;
var inst_28139 = (inst_28137) || (inst_28138);
var state_28177__$1 = state_28177;
if(cljs.core.truth_(inst_28139)){
var statearr_28197_28280 = state_28177__$1;
(statearr_28197_28280[(1)] = (35));

} else {
var statearr_28198_28281 = state_28177__$1;
(statearr_28198_28281[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (40))){
var inst_28152 = (state_28177[(20)]);
var inst_28151 = (state_28177[(2)]);
var inst_28152__$1 = cljs.core.get.call(null,inst_28151,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28153 = cljs.core.get.call(null,inst_28151,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28154 = cljs.core.not_empty.call(null,inst_28152__$1);
var state_28177__$1 = (function (){var statearr_28199 = state_28177;
(statearr_28199[(20)] = inst_28152__$1);

(statearr_28199[(21)] = inst_28153);

return statearr_28199;
})();
if(cljs.core.truth_(inst_28154)){
var statearr_28200_28282 = state_28177__$1;
(statearr_28200_28282[(1)] = (41));

} else {
var statearr_28201_28283 = state_28177__$1;
(statearr_28201_28283[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (33))){
var state_28177__$1 = state_28177;
var statearr_28202_28284 = state_28177__$1;
(statearr_28202_28284[(2)] = false);

(statearr_28202_28284[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (13))){
var inst_28051 = (state_28177[(22)]);
var inst_28055 = cljs.core.chunk_first.call(null,inst_28051);
var inst_28056 = cljs.core.chunk_rest.call(null,inst_28051);
var inst_28057 = cljs.core.count.call(null,inst_28055);
var inst_28038 = inst_28056;
var inst_28039 = inst_28055;
var inst_28040 = inst_28057;
var inst_28041 = (0);
var state_28177__$1 = (function (){var statearr_28203 = state_28177;
(statearr_28203[(7)] = inst_28038);

(statearr_28203[(8)] = inst_28041);

(statearr_28203[(9)] = inst_28040);

(statearr_28203[(10)] = inst_28039);

return statearr_28203;
})();
var statearr_28204_28285 = state_28177__$1;
(statearr_28204_28285[(2)] = null);

(statearr_28204_28285[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (22))){
var inst_28099 = (state_28177[(23)]);
var inst_28094 = (state_28177[(24)]);
var inst_28095 = (state_28177[(25)]);
var inst_28091 = (state_28177[(19)]);
var inst_28094__$1 = (state_28177[(2)]);
var inst_28095__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28094__$1);
var inst_28096 = (function (){var all_files = inst_28091;
var res_SINGLEQUOTE_ = inst_28094__$1;
var res = inst_28095__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28099,inst_28094,inst_28095,inst_28091,inst_28094__$1,inst_28095__$1,state_val_28178,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27774_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27774_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28099,inst_28094,inst_28095,inst_28091,inst_28094__$1,inst_28095__$1,state_val_28178,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28097 = cljs.core.filter.call(null,inst_28096,inst_28094__$1);
var inst_28098 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28099__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28098);
var inst_28100 = cljs.core.not_empty.call(null,inst_28099__$1);
var state_28177__$1 = (function (){var statearr_28205 = state_28177;
(statearr_28205[(23)] = inst_28099__$1);

(statearr_28205[(26)] = inst_28097);

(statearr_28205[(24)] = inst_28094__$1);

(statearr_28205[(25)] = inst_28095__$1);

return statearr_28205;
})();
if(cljs.core.truth_(inst_28100)){
var statearr_28206_28286 = state_28177__$1;
(statearr_28206_28286[(1)] = (23));

} else {
var statearr_28207_28287 = state_28177__$1;
(statearr_28207_28287[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (36))){
var state_28177__$1 = state_28177;
var statearr_28208_28288 = state_28177__$1;
(statearr_28208_28288[(2)] = false);

(statearr_28208_28288[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (41))){
var inst_28152 = (state_28177[(20)]);
var inst_28156 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28157 = cljs.core.map.call(null,inst_28156,inst_28152);
var inst_28158 = cljs.core.pr_str.call(null,inst_28157);
var inst_28159 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28158)].join('');
var inst_28160 = figwheel.client.utils.log.call(null,inst_28159);
var state_28177__$1 = state_28177;
var statearr_28209_28289 = state_28177__$1;
(statearr_28209_28289[(2)] = inst_28160);

(statearr_28209_28289[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (43))){
var inst_28153 = (state_28177[(21)]);
var inst_28163 = (state_28177[(2)]);
var inst_28164 = cljs.core.not_empty.call(null,inst_28153);
var state_28177__$1 = (function (){var statearr_28210 = state_28177;
(statearr_28210[(27)] = inst_28163);

return statearr_28210;
})();
if(cljs.core.truth_(inst_28164)){
var statearr_28211_28290 = state_28177__$1;
(statearr_28211_28290[(1)] = (44));

} else {
var statearr_28212_28291 = state_28177__$1;
(statearr_28212_28291[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (29))){
var inst_28099 = (state_28177[(23)]);
var inst_28131 = (state_28177[(16)]);
var inst_28097 = (state_28177[(26)]);
var inst_28094 = (state_28177[(24)]);
var inst_28095 = (state_28177[(25)]);
var inst_28091 = (state_28177[(19)]);
var inst_28127 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28130 = (function (){var all_files = inst_28091;
var res_SINGLEQUOTE_ = inst_28094;
var res = inst_28095;
var files_not_loaded = inst_28097;
var dependencies_that_loaded = inst_28099;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28099,inst_28131,inst_28097,inst_28094,inst_28095,inst_28091,inst_28127,state_val_28178,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28129){
var map__28213 = p__28129;
var map__28213__$1 = ((((!((map__28213 == null)))?((((map__28213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28213):map__28213);
var namespace = cljs.core.get.call(null,map__28213__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28099,inst_28131,inst_28097,inst_28094,inst_28095,inst_28091,inst_28127,state_val_28178,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28131__$1 = cljs.core.group_by.call(null,inst_28130,inst_28097);
var inst_28133 = (inst_28131__$1 == null);
var inst_28134 = cljs.core.not.call(null,inst_28133);
var state_28177__$1 = (function (){var statearr_28215 = state_28177;
(statearr_28215[(16)] = inst_28131__$1);

(statearr_28215[(28)] = inst_28127);

return statearr_28215;
})();
if(inst_28134){
var statearr_28216_28292 = state_28177__$1;
(statearr_28216_28292[(1)] = (32));

} else {
var statearr_28217_28293 = state_28177__$1;
(statearr_28217_28293[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (44))){
var inst_28153 = (state_28177[(21)]);
var inst_28166 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28153);
var inst_28167 = cljs.core.pr_str.call(null,inst_28166);
var inst_28168 = [cljs.core.str("not required: "),cljs.core.str(inst_28167)].join('');
var inst_28169 = figwheel.client.utils.log.call(null,inst_28168);
var state_28177__$1 = state_28177;
var statearr_28218_28294 = state_28177__$1;
(statearr_28218_28294[(2)] = inst_28169);

(statearr_28218_28294[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (6))){
var inst_28072 = (state_28177[(2)]);
var state_28177__$1 = state_28177;
var statearr_28219_28295 = state_28177__$1;
(statearr_28219_28295[(2)] = inst_28072);

(statearr_28219_28295[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (28))){
var inst_28097 = (state_28177[(26)]);
var inst_28124 = (state_28177[(2)]);
var inst_28125 = cljs.core.not_empty.call(null,inst_28097);
var state_28177__$1 = (function (){var statearr_28220 = state_28177;
(statearr_28220[(29)] = inst_28124);

return statearr_28220;
})();
if(cljs.core.truth_(inst_28125)){
var statearr_28221_28296 = state_28177__$1;
(statearr_28221_28296[(1)] = (29));

} else {
var statearr_28222_28297 = state_28177__$1;
(statearr_28222_28297[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (25))){
var inst_28095 = (state_28177[(25)]);
var inst_28111 = (state_28177[(2)]);
var inst_28112 = cljs.core.not_empty.call(null,inst_28095);
var state_28177__$1 = (function (){var statearr_28223 = state_28177;
(statearr_28223[(30)] = inst_28111);

return statearr_28223;
})();
if(cljs.core.truth_(inst_28112)){
var statearr_28224_28298 = state_28177__$1;
(statearr_28224_28298[(1)] = (26));

} else {
var statearr_28225_28299 = state_28177__$1;
(statearr_28225_28299[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (34))){
var inst_28146 = (state_28177[(2)]);
var state_28177__$1 = state_28177;
if(cljs.core.truth_(inst_28146)){
var statearr_28226_28300 = state_28177__$1;
(statearr_28226_28300[(1)] = (38));

} else {
var statearr_28227_28301 = state_28177__$1;
(statearr_28227_28301[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (17))){
var state_28177__$1 = state_28177;
var statearr_28228_28302 = state_28177__$1;
(statearr_28228_28302[(2)] = recompile_dependents);

(statearr_28228_28302[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (3))){
var state_28177__$1 = state_28177;
var statearr_28229_28303 = state_28177__$1;
(statearr_28229_28303[(2)] = null);

(statearr_28229_28303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (12))){
var inst_28068 = (state_28177[(2)]);
var state_28177__$1 = state_28177;
var statearr_28230_28304 = state_28177__$1;
(statearr_28230_28304[(2)] = inst_28068);

(statearr_28230_28304[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (2))){
var inst_28030 = (state_28177[(13)]);
var inst_28037 = cljs.core.seq.call(null,inst_28030);
var inst_28038 = inst_28037;
var inst_28039 = null;
var inst_28040 = (0);
var inst_28041 = (0);
var state_28177__$1 = (function (){var statearr_28231 = state_28177;
(statearr_28231[(7)] = inst_28038);

(statearr_28231[(8)] = inst_28041);

(statearr_28231[(9)] = inst_28040);

(statearr_28231[(10)] = inst_28039);

return statearr_28231;
})();
var statearr_28232_28305 = state_28177__$1;
(statearr_28232_28305[(2)] = null);

(statearr_28232_28305[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (23))){
var inst_28099 = (state_28177[(23)]);
var inst_28097 = (state_28177[(26)]);
var inst_28094 = (state_28177[(24)]);
var inst_28095 = (state_28177[(25)]);
var inst_28091 = (state_28177[(19)]);
var inst_28102 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28104 = (function (){var all_files = inst_28091;
var res_SINGLEQUOTE_ = inst_28094;
var res = inst_28095;
var files_not_loaded = inst_28097;
var dependencies_that_loaded = inst_28099;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28099,inst_28097,inst_28094,inst_28095,inst_28091,inst_28102,state_val_28178,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28103){
var map__28233 = p__28103;
var map__28233__$1 = ((((!((map__28233 == null)))?((((map__28233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28233):map__28233);
var request_url = cljs.core.get.call(null,map__28233__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28099,inst_28097,inst_28094,inst_28095,inst_28091,inst_28102,state_val_28178,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28105 = cljs.core.reverse.call(null,inst_28099);
var inst_28106 = cljs.core.map.call(null,inst_28104,inst_28105);
var inst_28107 = cljs.core.pr_str.call(null,inst_28106);
var inst_28108 = figwheel.client.utils.log.call(null,inst_28107);
var state_28177__$1 = (function (){var statearr_28235 = state_28177;
(statearr_28235[(31)] = inst_28102);

return statearr_28235;
})();
var statearr_28236_28306 = state_28177__$1;
(statearr_28236_28306[(2)] = inst_28108);

(statearr_28236_28306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (35))){
var state_28177__$1 = state_28177;
var statearr_28237_28307 = state_28177__$1;
(statearr_28237_28307[(2)] = true);

(statearr_28237_28307[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (19))){
var inst_28081 = (state_28177[(12)]);
var inst_28087 = figwheel.client.file_reloading.expand_files.call(null,inst_28081);
var state_28177__$1 = state_28177;
var statearr_28238_28308 = state_28177__$1;
(statearr_28238_28308[(2)] = inst_28087);

(statearr_28238_28308[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (11))){
var state_28177__$1 = state_28177;
var statearr_28239_28309 = state_28177__$1;
(statearr_28239_28309[(2)] = null);

(statearr_28239_28309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (9))){
var inst_28070 = (state_28177[(2)]);
var state_28177__$1 = state_28177;
var statearr_28240_28310 = state_28177__$1;
(statearr_28240_28310[(2)] = inst_28070);

(statearr_28240_28310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (5))){
var inst_28041 = (state_28177[(8)]);
var inst_28040 = (state_28177[(9)]);
var inst_28043 = (inst_28041 < inst_28040);
var inst_28044 = inst_28043;
var state_28177__$1 = state_28177;
if(cljs.core.truth_(inst_28044)){
var statearr_28241_28311 = state_28177__$1;
(statearr_28241_28311[(1)] = (7));

} else {
var statearr_28242_28312 = state_28177__$1;
(statearr_28242_28312[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (14))){
var inst_28051 = (state_28177[(22)]);
var inst_28060 = cljs.core.first.call(null,inst_28051);
var inst_28061 = figwheel.client.file_reloading.eval_body.call(null,inst_28060,opts);
var inst_28062 = cljs.core.next.call(null,inst_28051);
var inst_28038 = inst_28062;
var inst_28039 = null;
var inst_28040 = (0);
var inst_28041 = (0);
var state_28177__$1 = (function (){var statearr_28243 = state_28177;
(statearr_28243[(7)] = inst_28038);

(statearr_28243[(8)] = inst_28041);

(statearr_28243[(32)] = inst_28061);

(statearr_28243[(9)] = inst_28040);

(statearr_28243[(10)] = inst_28039);

return statearr_28243;
})();
var statearr_28244_28313 = state_28177__$1;
(statearr_28244_28313[(2)] = null);

(statearr_28244_28313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (45))){
var state_28177__$1 = state_28177;
var statearr_28245_28314 = state_28177__$1;
(statearr_28245_28314[(2)] = null);

(statearr_28245_28314[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (26))){
var inst_28099 = (state_28177[(23)]);
var inst_28097 = (state_28177[(26)]);
var inst_28094 = (state_28177[(24)]);
var inst_28095 = (state_28177[(25)]);
var inst_28091 = (state_28177[(19)]);
var inst_28114 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28116 = (function (){var all_files = inst_28091;
var res_SINGLEQUOTE_ = inst_28094;
var res = inst_28095;
var files_not_loaded = inst_28097;
var dependencies_that_loaded = inst_28099;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28099,inst_28097,inst_28094,inst_28095,inst_28091,inst_28114,state_val_28178,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28115){
var map__28246 = p__28115;
var map__28246__$1 = ((((!((map__28246 == null)))?((((map__28246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28246):map__28246);
var namespace = cljs.core.get.call(null,map__28246__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28246__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28099,inst_28097,inst_28094,inst_28095,inst_28091,inst_28114,state_val_28178,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28117 = cljs.core.map.call(null,inst_28116,inst_28095);
var inst_28118 = cljs.core.pr_str.call(null,inst_28117);
var inst_28119 = figwheel.client.utils.log.call(null,inst_28118);
var inst_28120 = (function (){var all_files = inst_28091;
var res_SINGLEQUOTE_ = inst_28094;
var res = inst_28095;
var files_not_loaded = inst_28097;
var dependencies_that_loaded = inst_28099;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28099,inst_28097,inst_28094,inst_28095,inst_28091,inst_28114,inst_28116,inst_28117,inst_28118,inst_28119,state_val_28178,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28099,inst_28097,inst_28094,inst_28095,inst_28091,inst_28114,inst_28116,inst_28117,inst_28118,inst_28119,state_val_28178,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28121 = setTimeout(inst_28120,(10));
var state_28177__$1 = (function (){var statearr_28248 = state_28177;
(statearr_28248[(33)] = inst_28119);

(statearr_28248[(34)] = inst_28114);

return statearr_28248;
})();
var statearr_28249_28315 = state_28177__$1;
(statearr_28249_28315[(2)] = inst_28121);

(statearr_28249_28315[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (16))){
var state_28177__$1 = state_28177;
var statearr_28250_28316 = state_28177__$1;
(statearr_28250_28316[(2)] = reload_dependents);

(statearr_28250_28316[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (38))){
var inst_28131 = (state_28177[(16)]);
var inst_28148 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28131);
var state_28177__$1 = state_28177;
var statearr_28251_28317 = state_28177__$1;
(statearr_28251_28317[(2)] = inst_28148);

(statearr_28251_28317[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (30))){
var state_28177__$1 = state_28177;
var statearr_28252_28318 = state_28177__$1;
(statearr_28252_28318[(2)] = null);

(statearr_28252_28318[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (10))){
var inst_28051 = (state_28177[(22)]);
var inst_28053 = cljs.core.chunked_seq_QMARK_.call(null,inst_28051);
var state_28177__$1 = state_28177;
if(inst_28053){
var statearr_28253_28319 = state_28177__$1;
(statearr_28253_28319[(1)] = (13));

} else {
var statearr_28254_28320 = state_28177__$1;
(statearr_28254_28320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (18))){
var inst_28085 = (state_28177[(2)]);
var state_28177__$1 = state_28177;
if(cljs.core.truth_(inst_28085)){
var statearr_28255_28321 = state_28177__$1;
(statearr_28255_28321[(1)] = (19));

} else {
var statearr_28256_28322 = state_28177__$1;
(statearr_28256_28322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (42))){
var state_28177__$1 = state_28177;
var statearr_28257_28323 = state_28177__$1;
(statearr_28257_28323[(2)] = null);

(statearr_28257_28323[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (37))){
var inst_28143 = (state_28177[(2)]);
var state_28177__$1 = state_28177;
var statearr_28258_28324 = state_28177__$1;
(statearr_28258_28324[(2)] = inst_28143);

(statearr_28258_28324[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (8))){
var inst_28038 = (state_28177[(7)]);
var inst_28051 = (state_28177[(22)]);
var inst_28051__$1 = cljs.core.seq.call(null,inst_28038);
var state_28177__$1 = (function (){var statearr_28259 = state_28177;
(statearr_28259[(22)] = inst_28051__$1);

return statearr_28259;
})();
if(inst_28051__$1){
var statearr_28260_28325 = state_28177__$1;
(statearr_28260_28325[(1)] = (10));

} else {
var statearr_28261_28326 = state_28177__$1;
(statearr_28261_28326[(1)] = (11));

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
});})(c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19872__auto__,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19873__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19873__auto____0 = (function (){
var statearr_28265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28265[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19873__auto__);

(statearr_28265[(1)] = (1));

return statearr_28265;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19873__auto____1 = (function (state_28177){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_28177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e28266){if((e28266 instanceof Object)){
var ex__19876__auto__ = e28266;
var statearr_28267_28327 = state_28177;
(statearr_28267_28327[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28328 = state_28177;
state_28177 = G__28328;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19873__auto__ = function(state_28177){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19873__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19873__auto____1.call(this,state_28177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19873__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19873__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19895__auto__ = (function (){var statearr_28268 = f__19894__auto__.call(null);
(statearr_28268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto__);

return statearr_28268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto__,map__28023,map__28023__$1,opts,before_jsload,on_jsload,reload_dependents,map__28024,map__28024__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19893__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28331,link){
var map__28334 = p__28331;
var map__28334__$1 = ((((!((map__28334 == null)))?((((map__28334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28334):map__28334);
var file = cljs.core.get.call(null,map__28334__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28334,map__28334__$1,file){
return (function (p1__28329_SHARP_,p2__28330_SHARP_){
if(cljs.core._EQ_.call(null,p1__28329_SHARP_,p2__28330_SHARP_)){
return p1__28329_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28334,map__28334__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28340){
var map__28341 = p__28340;
var map__28341__$1 = ((((!((map__28341 == null)))?((((map__28341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28341):map__28341);
var match_length = cljs.core.get.call(null,map__28341__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28341__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28336_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28336_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28343 = [];
var len__17843__auto___28346 = arguments.length;
var i__17844__auto___28347 = (0);
while(true){
if((i__17844__auto___28347 < len__17843__auto___28346)){
args28343.push((arguments[i__17844__auto___28347]));

var G__28348 = (i__17844__auto___28347 + (1));
i__17844__auto___28347 = G__28348;
continue;
} else {
}
break;
}

var G__28345 = args28343.length;
switch (G__28345) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28343.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28350_SHARP_,p2__28351_SHARP_){
return cljs.core.assoc.call(null,p1__28350_SHARP_,cljs.core.get.call(null,p2__28351_SHARP_,key),p2__28351_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28352){
var map__28355 = p__28352;
var map__28355__$1 = ((((!((map__28355 == null)))?((((map__28355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28355):map__28355);
var f_data = map__28355__$1;
var file = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28357,files_msg){
var map__28364 = p__28357;
var map__28364__$1 = ((((!((map__28364 == null)))?((((map__28364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28364):map__28364);
var opts = map__28364__$1;
var on_cssload = cljs.core.get.call(null,map__28364__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28366_28370 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28367_28371 = null;
var count__28368_28372 = (0);
var i__28369_28373 = (0);
while(true){
if((i__28369_28373 < count__28368_28372)){
var f_28374 = cljs.core._nth.call(null,chunk__28367_28371,i__28369_28373);
figwheel.client.file_reloading.reload_css_file.call(null,f_28374);

var G__28375 = seq__28366_28370;
var G__28376 = chunk__28367_28371;
var G__28377 = count__28368_28372;
var G__28378 = (i__28369_28373 + (1));
seq__28366_28370 = G__28375;
chunk__28367_28371 = G__28376;
count__28368_28372 = G__28377;
i__28369_28373 = G__28378;
continue;
} else {
var temp__4425__auto___28379 = cljs.core.seq.call(null,seq__28366_28370);
if(temp__4425__auto___28379){
var seq__28366_28380__$1 = temp__4425__auto___28379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28366_28380__$1)){
var c__17588__auto___28381 = cljs.core.chunk_first.call(null,seq__28366_28380__$1);
var G__28382 = cljs.core.chunk_rest.call(null,seq__28366_28380__$1);
var G__28383 = c__17588__auto___28381;
var G__28384 = cljs.core.count.call(null,c__17588__auto___28381);
var G__28385 = (0);
seq__28366_28370 = G__28382;
chunk__28367_28371 = G__28383;
count__28368_28372 = G__28384;
i__28369_28373 = G__28385;
continue;
} else {
var f_28386 = cljs.core.first.call(null,seq__28366_28380__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28386);

var G__28387 = cljs.core.next.call(null,seq__28366_28380__$1);
var G__28388 = null;
var G__28389 = (0);
var G__28390 = (0);
seq__28366_28370 = G__28387;
chunk__28367_28371 = G__28388;
count__28368_28372 = G__28389;
i__28369_28373 = G__28390;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28364,map__28364__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28364,map__28364__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map