// Compiled by ClojureScript 1.7.122 {}
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
var or__16363__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16363__auto__){
return or__16363__auto__;
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
var or__16363__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26618_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26618_SHARP_));
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
var seq__26623 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26624 = null;
var count__26625 = (0);
var i__26626 = (0);
while(true){
if((i__26626 < count__26625)){
var n = cljs.core._nth.call(null,chunk__26624,i__26626);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26627 = seq__26623;
var G__26628 = chunk__26624;
var G__26629 = count__26625;
var G__26630 = (i__26626 + (1));
seq__26623 = G__26627;
chunk__26624 = G__26628;
count__26625 = G__26629;
i__26626 = G__26630;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26623);
if(temp__4425__auto__){
var seq__26623__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26623__$1)){
var c__17166__auto__ = cljs.core.chunk_first.call(null,seq__26623__$1);
var G__26631 = cljs.core.chunk_rest.call(null,seq__26623__$1);
var G__26632 = c__17166__auto__;
var G__26633 = cljs.core.count.call(null,c__17166__auto__);
var G__26634 = (0);
seq__26623 = G__26631;
chunk__26624 = G__26632;
count__26625 = G__26633;
i__26626 = G__26634;
continue;
} else {
var n = cljs.core.first.call(null,seq__26623__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26635 = cljs.core.next.call(null,seq__26623__$1);
var G__26636 = null;
var G__26637 = (0);
var G__26638 = (0);
seq__26623 = G__26635;
chunk__26624 = G__26636;
count__26625 = G__26637;
i__26626 = G__26638;
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

var seq__26677_26684 = cljs.core.seq.call(null,deps);
var chunk__26678_26685 = null;
var count__26679_26686 = (0);
var i__26680_26687 = (0);
while(true){
if((i__26680_26687 < count__26679_26686)){
var dep_26688 = cljs.core._nth.call(null,chunk__26678_26685,i__26680_26687);
topo_sort_helper_STAR_.call(null,dep_26688,(depth + (1)),state);

var G__26689 = seq__26677_26684;
var G__26690 = chunk__26678_26685;
var G__26691 = count__26679_26686;
var G__26692 = (i__26680_26687 + (1));
seq__26677_26684 = G__26689;
chunk__26678_26685 = G__26690;
count__26679_26686 = G__26691;
i__26680_26687 = G__26692;
continue;
} else {
var temp__4425__auto___26693 = cljs.core.seq.call(null,seq__26677_26684);
if(temp__4425__auto___26693){
var seq__26677_26694__$1 = temp__4425__auto___26693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26677_26694__$1)){
var c__17166__auto___26695 = cljs.core.chunk_first.call(null,seq__26677_26694__$1);
var G__26696 = cljs.core.chunk_rest.call(null,seq__26677_26694__$1);
var G__26697 = c__17166__auto___26695;
var G__26698 = cljs.core.count.call(null,c__17166__auto___26695);
var G__26699 = (0);
seq__26677_26684 = G__26696;
chunk__26678_26685 = G__26697;
count__26679_26686 = G__26698;
i__26680_26687 = G__26699;
continue;
} else {
var dep_26700 = cljs.core.first.call(null,seq__26677_26694__$1);
topo_sort_helper_STAR_.call(null,dep_26700,(depth + (1)),state);

var G__26701 = cljs.core.next.call(null,seq__26677_26694__$1);
var G__26702 = null;
var G__26703 = (0);
var G__26704 = (0);
seq__26677_26684 = G__26701;
chunk__26678_26685 = G__26702;
count__26679_26686 = G__26703;
i__26680_26687 = G__26704;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26681){
var vec__26683 = p__26681;
var x = cljs.core.nth.call(null,vec__26683,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26683,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26683,x,xs,get_deps__$1){
return (function (p1__26639_SHARP_){
return clojure.set.difference.call(null,p1__26639_SHARP_,x);
});})(vec__26683,x,xs,get_deps__$1))
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
var seq__26717 = cljs.core.seq.call(null,provides);
var chunk__26718 = null;
var count__26719 = (0);
var i__26720 = (0);
while(true){
if((i__26720 < count__26719)){
var prov = cljs.core._nth.call(null,chunk__26718,i__26720);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26721_26729 = cljs.core.seq.call(null,requires);
var chunk__26722_26730 = null;
var count__26723_26731 = (0);
var i__26724_26732 = (0);
while(true){
if((i__26724_26732 < count__26723_26731)){
var req_26733 = cljs.core._nth.call(null,chunk__26722_26730,i__26724_26732);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26733,prov);

var G__26734 = seq__26721_26729;
var G__26735 = chunk__26722_26730;
var G__26736 = count__26723_26731;
var G__26737 = (i__26724_26732 + (1));
seq__26721_26729 = G__26734;
chunk__26722_26730 = G__26735;
count__26723_26731 = G__26736;
i__26724_26732 = G__26737;
continue;
} else {
var temp__4425__auto___26738 = cljs.core.seq.call(null,seq__26721_26729);
if(temp__4425__auto___26738){
var seq__26721_26739__$1 = temp__4425__auto___26738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26721_26739__$1)){
var c__17166__auto___26740 = cljs.core.chunk_first.call(null,seq__26721_26739__$1);
var G__26741 = cljs.core.chunk_rest.call(null,seq__26721_26739__$1);
var G__26742 = c__17166__auto___26740;
var G__26743 = cljs.core.count.call(null,c__17166__auto___26740);
var G__26744 = (0);
seq__26721_26729 = G__26741;
chunk__26722_26730 = G__26742;
count__26723_26731 = G__26743;
i__26724_26732 = G__26744;
continue;
} else {
var req_26745 = cljs.core.first.call(null,seq__26721_26739__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26745,prov);

var G__26746 = cljs.core.next.call(null,seq__26721_26739__$1);
var G__26747 = null;
var G__26748 = (0);
var G__26749 = (0);
seq__26721_26729 = G__26746;
chunk__26722_26730 = G__26747;
count__26723_26731 = G__26748;
i__26724_26732 = G__26749;
continue;
}
} else {
}
}
break;
}

var G__26750 = seq__26717;
var G__26751 = chunk__26718;
var G__26752 = count__26719;
var G__26753 = (i__26720 + (1));
seq__26717 = G__26750;
chunk__26718 = G__26751;
count__26719 = G__26752;
i__26720 = G__26753;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26717);
if(temp__4425__auto__){
var seq__26717__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26717__$1)){
var c__17166__auto__ = cljs.core.chunk_first.call(null,seq__26717__$1);
var G__26754 = cljs.core.chunk_rest.call(null,seq__26717__$1);
var G__26755 = c__17166__auto__;
var G__26756 = cljs.core.count.call(null,c__17166__auto__);
var G__26757 = (0);
seq__26717 = G__26754;
chunk__26718 = G__26755;
count__26719 = G__26756;
i__26720 = G__26757;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26717__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26725_26758 = cljs.core.seq.call(null,requires);
var chunk__26726_26759 = null;
var count__26727_26760 = (0);
var i__26728_26761 = (0);
while(true){
if((i__26728_26761 < count__26727_26760)){
var req_26762 = cljs.core._nth.call(null,chunk__26726_26759,i__26728_26761);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26762,prov);

var G__26763 = seq__26725_26758;
var G__26764 = chunk__26726_26759;
var G__26765 = count__26727_26760;
var G__26766 = (i__26728_26761 + (1));
seq__26725_26758 = G__26763;
chunk__26726_26759 = G__26764;
count__26727_26760 = G__26765;
i__26728_26761 = G__26766;
continue;
} else {
var temp__4425__auto___26767__$1 = cljs.core.seq.call(null,seq__26725_26758);
if(temp__4425__auto___26767__$1){
var seq__26725_26768__$1 = temp__4425__auto___26767__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26725_26768__$1)){
var c__17166__auto___26769 = cljs.core.chunk_first.call(null,seq__26725_26768__$1);
var G__26770 = cljs.core.chunk_rest.call(null,seq__26725_26768__$1);
var G__26771 = c__17166__auto___26769;
var G__26772 = cljs.core.count.call(null,c__17166__auto___26769);
var G__26773 = (0);
seq__26725_26758 = G__26770;
chunk__26726_26759 = G__26771;
count__26727_26760 = G__26772;
i__26728_26761 = G__26773;
continue;
} else {
var req_26774 = cljs.core.first.call(null,seq__26725_26768__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26774,prov);

var G__26775 = cljs.core.next.call(null,seq__26725_26768__$1);
var G__26776 = null;
var G__26777 = (0);
var G__26778 = (0);
seq__26725_26758 = G__26775;
chunk__26726_26759 = G__26776;
count__26727_26760 = G__26777;
i__26728_26761 = G__26778;
continue;
}
} else {
}
}
break;
}

var G__26779 = cljs.core.next.call(null,seq__26717__$1);
var G__26780 = null;
var G__26781 = (0);
var G__26782 = (0);
seq__26717 = G__26779;
chunk__26718 = G__26780;
count__26719 = G__26781;
i__26720 = G__26782;
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
var seq__26787_26791 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26788_26792 = null;
var count__26789_26793 = (0);
var i__26790_26794 = (0);
while(true){
if((i__26790_26794 < count__26789_26793)){
var ns_26795 = cljs.core._nth.call(null,chunk__26788_26792,i__26790_26794);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26795);

var G__26796 = seq__26787_26791;
var G__26797 = chunk__26788_26792;
var G__26798 = count__26789_26793;
var G__26799 = (i__26790_26794 + (1));
seq__26787_26791 = G__26796;
chunk__26788_26792 = G__26797;
count__26789_26793 = G__26798;
i__26790_26794 = G__26799;
continue;
} else {
var temp__4425__auto___26800 = cljs.core.seq.call(null,seq__26787_26791);
if(temp__4425__auto___26800){
var seq__26787_26801__$1 = temp__4425__auto___26800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26787_26801__$1)){
var c__17166__auto___26802 = cljs.core.chunk_first.call(null,seq__26787_26801__$1);
var G__26803 = cljs.core.chunk_rest.call(null,seq__26787_26801__$1);
var G__26804 = c__17166__auto___26802;
var G__26805 = cljs.core.count.call(null,c__17166__auto___26802);
var G__26806 = (0);
seq__26787_26791 = G__26803;
chunk__26788_26792 = G__26804;
count__26789_26793 = G__26805;
i__26790_26794 = G__26806;
continue;
} else {
var ns_26807 = cljs.core.first.call(null,seq__26787_26801__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26807);

var G__26808 = cljs.core.next.call(null,seq__26787_26801__$1);
var G__26809 = null;
var G__26810 = (0);
var G__26811 = (0);
seq__26787_26791 = G__26808;
chunk__26788_26792 = G__26809;
count__26789_26793 = G__26810;
i__26790_26794 = G__26811;
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
goog.require_figwheel_backup_ = (function (){var or__16363__auto__ = goog.require__;
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
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
var G__26812__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26813__i = 0, G__26813__a = new Array(arguments.length -  0);
while (G__26813__i < G__26813__a.length) {G__26813__a[G__26813__i] = arguments[G__26813__i + 0]; ++G__26813__i;}
  args = new cljs.core.IndexedSeq(G__26813__a,0);
} 
return G__26812__delegate.call(this,args);};
G__26812.cljs$lang$maxFixedArity = 0;
G__26812.cljs$lang$applyTo = (function (arglist__26814){
var args = cljs.core.seq(arglist__26814);
return G__26812__delegate(args);
});
G__26812.cljs$core$IFn$_invoke$arity$variadic = G__26812__delegate;
return G__26812;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26816 = cljs.core._EQ_;
var expr__26817 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26816.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26817))){
var path_parts = ((function (pred__26816,expr__26817){
return (function (p1__26815_SHARP_){
return clojure.string.split.call(null,p1__26815_SHARP_,/[\/\\]/);
});})(pred__26816,expr__26817))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26816,expr__26817){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e26819){if((e26819 instanceof Error)){
var e = e26819;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26819;

}
}})());
});
;})(path_parts,sep,root,pred__26816,expr__26817))
} else {
if(cljs.core.truth_(pred__26816.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26817))){
return ((function (pred__26816,expr__26817){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26816,expr__26817){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26816,expr__26817))
);

return deferred.addErrback(((function (deferred,pred__26816,expr__26817){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26816,expr__26817))
);
});
;})(pred__26816,expr__26817))
} else {
return ((function (pred__26816,expr__26817){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26816,expr__26817))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26820,callback){
var map__26823 = p__26820;
var map__26823__$1 = ((((!((map__26823 == null)))?((((map__26823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26823):map__26823);
var file_msg = map__26823__$1;
var request_url = cljs.core.get.call(null,map__26823__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26823,map__26823__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26823,map__26823__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20150__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto__){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto__){
return (function (state_26847){
var state_val_26848 = (state_26847[(1)]);
if((state_val_26848 === (7))){
var inst_26843 = (state_26847[(2)]);
var state_26847__$1 = state_26847;
var statearr_26849_26869 = state_26847__$1;
(statearr_26849_26869[(2)] = inst_26843);

(statearr_26849_26869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (1))){
var state_26847__$1 = state_26847;
var statearr_26850_26870 = state_26847__$1;
(statearr_26850_26870[(2)] = null);

(statearr_26850_26870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (4))){
var inst_26827 = (state_26847[(7)]);
var inst_26827__$1 = (state_26847[(2)]);
var state_26847__$1 = (function (){var statearr_26851 = state_26847;
(statearr_26851[(7)] = inst_26827__$1);

return statearr_26851;
})();
if(cljs.core.truth_(inst_26827__$1)){
var statearr_26852_26871 = state_26847__$1;
(statearr_26852_26871[(1)] = (5));

} else {
var statearr_26853_26872 = state_26847__$1;
(statearr_26853_26872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (6))){
var state_26847__$1 = state_26847;
var statearr_26854_26873 = state_26847__$1;
(statearr_26854_26873[(2)] = null);

(statearr_26854_26873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (3))){
var inst_26845 = (state_26847[(2)]);
var state_26847__$1 = state_26847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26847__$1,inst_26845);
} else {
if((state_val_26848 === (2))){
var state_26847__$1 = state_26847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26847__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26848 === (11))){
var inst_26839 = (state_26847[(2)]);
var state_26847__$1 = (function (){var statearr_26855 = state_26847;
(statearr_26855[(8)] = inst_26839);

return statearr_26855;
})();
var statearr_26856_26874 = state_26847__$1;
(statearr_26856_26874[(2)] = null);

(statearr_26856_26874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (9))){
var inst_26831 = (state_26847[(9)]);
var inst_26833 = (state_26847[(10)]);
var inst_26835 = inst_26833.call(null,inst_26831);
var state_26847__$1 = state_26847;
var statearr_26857_26875 = state_26847__$1;
(statearr_26857_26875[(2)] = inst_26835);

(statearr_26857_26875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (5))){
var inst_26827 = (state_26847[(7)]);
var inst_26829 = figwheel.client.file_reloading.blocking_load.call(null,inst_26827);
var state_26847__$1 = state_26847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26847__$1,(8),inst_26829);
} else {
if((state_val_26848 === (10))){
var inst_26831 = (state_26847[(9)]);
var inst_26837 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26831);
var state_26847__$1 = state_26847;
var statearr_26858_26876 = state_26847__$1;
(statearr_26858_26876[(2)] = inst_26837);

(statearr_26858_26876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (8))){
var inst_26827 = (state_26847[(7)]);
var inst_26833 = (state_26847[(10)]);
var inst_26831 = (state_26847[(2)]);
var inst_26832 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26833__$1 = cljs.core.get.call(null,inst_26832,inst_26827);
var state_26847__$1 = (function (){var statearr_26859 = state_26847;
(statearr_26859[(9)] = inst_26831);

(statearr_26859[(10)] = inst_26833__$1);

return statearr_26859;
})();
if(cljs.core.truth_(inst_26833__$1)){
var statearr_26860_26877 = state_26847__$1;
(statearr_26860_26877[(1)] = (9));

} else {
var statearr_26861_26878 = state_26847__$1;
(statearr_26861_26878[(1)] = (10));

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
});})(c__20150__auto__))
;
return ((function (switch__20085__auto__,c__20150__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20086__auto__ = null;
var figwheel$client$file_reloading$state_machine__20086__auto____0 = (function (){
var statearr_26865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26865[(0)] = figwheel$client$file_reloading$state_machine__20086__auto__);

(statearr_26865[(1)] = (1));

return statearr_26865;
});
var figwheel$client$file_reloading$state_machine__20086__auto____1 = (function (state_26847){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_26847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e26866){if((e26866 instanceof Object)){
var ex__20089__auto__ = e26866;
var statearr_26867_26879 = state_26847;
(statearr_26867_26879[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26880 = state_26847;
state_26847 = G__26880;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20086__auto__ = function(state_26847){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20086__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20086__auto____1.call(this,state_26847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20086__auto____0;
figwheel$client$file_reloading$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20086__auto____1;
return figwheel$client$file_reloading$state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto__))
})();
var state__20152__auto__ = (function (){var statearr_26868 = f__20151__auto__.call(null);
(statearr_26868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto__);

return statearr_26868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto__))
);

return c__20150__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26881,callback){
var map__26884 = p__26881;
var map__26884__$1 = ((((!((map__26884 == null)))?((((map__26884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26884):map__26884);
var file_msg = map__26884__$1;
var namespace = cljs.core.get.call(null,map__26884__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26884,map__26884__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26884,map__26884__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26886){
var map__26889 = p__26886;
var map__26889__$1 = ((((!((map__26889 == null)))?((((map__26889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26889):map__26889);
var file_msg = map__26889__$1;
var namespace = cljs.core.get.call(null,map__26889__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16351__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16351__auto__){
var or__16363__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
} else {
var or__16363__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16363__auto____$1)){
return or__16363__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16351__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26891,callback){
var map__26894 = p__26891;
var map__26894__$1 = ((((!((map__26894 == null)))?((((map__26894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26894):map__26894);
var file_msg = map__26894__$1;
var request_url = cljs.core.get.call(null,map__26894__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26894__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20150__auto___26982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___26982,out){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___26982,out){
return (function (state_26964){
var state_val_26965 = (state_26964[(1)]);
if((state_val_26965 === (1))){
var inst_26942 = cljs.core.nth.call(null,files,(0),null);
var inst_26943 = cljs.core.nthnext.call(null,files,(1));
var inst_26944 = files;
var state_26964__$1 = (function (){var statearr_26966 = state_26964;
(statearr_26966[(7)] = inst_26942);

(statearr_26966[(8)] = inst_26943);

(statearr_26966[(9)] = inst_26944);

return statearr_26966;
})();
var statearr_26967_26983 = state_26964__$1;
(statearr_26967_26983[(2)] = null);

(statearr_26967_26983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (2))){
var inst_26947 = (state_26964[(10)]);
var inst_26944 = (state_26964[(9)]);
var inst_26947__$1 = cljs.core.nth.call(null,inst_26944,(0),null);
var inst_26948 = cljs.core.nthnext.call(null,inst_26944,(1));
var inst_26949 = (inst_26947__$1 == null);
var inst_26950 = cljs.core.not.call(null,inst_26949);
var state_26964__$1 = (function (){var statearr_26968 = state_26964;
(statearr_26968[(10)] = inst_26947__$1);

(statearr_26968[(11)] = inst_26948);

return statearr_26968;
})();
if(inst_26950){
var statearr_26969_26984 = state_26964__$1;
(statearr_26969_26984[(1)] = (4));

} else {
var statearr_26970_26985 = state_26964__$1;
(statearr_26970_26985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (3))){
var inst_26962 = (state_26964[(2)]);
var state_26964__$1 = state_26964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26964__$1,inst_26962);
} else {
if((state_val_26965 === (4))){
var inst_26947 = (state_26964[(10)]);
var inst_26952 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26947);
var state_26964__$1 = state_26964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26964__$1,(7),inst_26952);
} else {
if((state_val_26965 === (5))){
var inst_26958 = cljs.core.async.close_BANG_.call(null,out);
var state_26964__$1 = state_26964;
var statearr_26971_26986 = state_26964__$1;
(statearr_26971_26986[(2)] = inst_26958);

(statearr_26971_26986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (6))){
var inst_26960 = (state_26964[(2)]);
var state_26964__$1 = state_26964;
var statearr_26972_26987 = state_26964__$1;
(statearr_26972_26987[(2)] = inst_26960);

(statearr_26972_26987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (7))){
var inst_26948 = (state_26964[(11)]);
var inst_26954 = (state_26964[(2)]);
var inst_26955 = cljs.core.async.put_BANG_.call(null,out,inst_26954);
var inst_26944 = inst_26948;
var state_26964__$1 = (function (){var statearr_26973 = state_26964;
(statearr_26973[(12)] = inst_26955);

(statearr_26973[(9)] = inst_26944);

return statearr_26973;
})();
var statearr_26974_26988 = state_26964__$1;
(statearr_26974_26988[(2)] = null);

(statearr_26974_26988[(1)] = (2));


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
});})(c__20150__auto___26982,out))
;
return ((function (switch__20085__auto__,c__20150__auto___26982,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20086__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20086__auto____0 = (function (){
var statearr_26978 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26978[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20086__auto__);

(statearr_26978[(1)] = (1));

return statearr_26978;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20086__auto____1 = (function (state_26964){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_26964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e26979){if((e26979 instanceof Object)){
var ex__20089__auto__ = e26979;
var statearr_26980_26989 = state_26964;
(statearr_26980_26989[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26990 = state_26964;
state_26964 = G__26990;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20086__auto__ = function(state_26964){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20086__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20086__auto____1.call(this,state_26964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20086__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20086__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___26982,out))
})();
var state__20152__auto__ = (function (){var statearr_26981 = f__20151__auto__.call(null);
(statearr_26981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___26982);

return statearr_26981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___26982,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26991,opts){
var map__26995 = p__26991;
var map__26995__$1 = ((((!((map__26995 == null)))?((((map__26995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26995):map__26995);
var eval_body__$1 = cljs.core.get.call(null,map__26995__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26995__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16351__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16351__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16351__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26997){var e = e26997;
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
return (function (p1__26998_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26998_SHARP_),n);
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
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27003){
var vec__27004 = p__27003;
var k = cljs.core.nth.call(null,vec__27004,(0),null);
var v = cljs.core.nth.call(null,vec__27004,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27005){
var vec__27006 = p__27005;
var k = cljs.core.nth.call(null,vec__27006,(0),null);
var v = cljs.core.nth.call(null,vec__27006,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27010,p__27011){
var map__27258 = p__27010;
var map__27258__$1 = ((((!((map__27258 == null)))?((((map__27258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27258):map__27258);
var opts = map__27258__$1;
var before_jsload = cljs.core.get.call(null,map__27258__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27258__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27258__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27259 = p__27011;
var map__27259__$1 = ((((!((map__27259 == null)))?((((map__27259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27259):map__27259);
var msg = map__27259__$1;
var files = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20150__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27412){
var state_val_27413 = (state_27412[(1)]);
if((state_val_27413 === (7))){
var inst_27275 = (state_27412[(7)]);
var inst_27273 = (state_27412[(8)]);
var inst_27274 = (state_27412[(9)]);
var inst_27276 = (state_27412[(10)]);
var inst_27281 = cljs.core._nth.call(null,inst_27274,inst_27276);
var inst_27282 = figwheel.client.file_reloading.eval_body.call(null,inst_27281,opts);
var inst_27283 = (inst_27276 + (1));
var tmp27414 = inst_27275;
var tmp27415 = inst_27273;
var tmp27416 = inst_27274;
var inst_27273__$1 = tmp27415;
var inst_27274__$1 = tmp27416;
var inst_27275__$1 = tmp27414;
var inst_27276__$1 = inst_27283;
var state_27412__$1 = (function (){var statearr_27417 = state_27412;
(statearr_27417[(7)] = inst_27275__$1);

(statearr_27417[(8)] = inst_27273__$1);

(statearr_27417[(9)] = inst_27274__$1);

(statearr_27417[(11)] = inst_27282);

(statearr_27417[(10)] = inst_27276__$1);

return statearr_27417;
})();
var statearr_27418_27504 = state_27412__$1;
(statearr_27418_27504[(2)] = null);

(statearr_27418_27504[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (20))){
var inst_27316 = (state_27412[(12)]);
var inst_27324 = figwheel.client.file_reloading.sort_files.call(null,inst_27316);
var state_27412__$1 = state_27412;
var statearr_27419_27505 = state_27412__$1;
(statearr_27419_27505[(2)] = inst_27324);

(statearr_27419_27505[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (27))){
var state_27412__$1 = state_27412;
var statearr_27420_27506 = state_27412__$1;
(statearr_27420_27506[(2)] = null);

(statearr_27420_27506[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (1))){
var inst_27265 = (state_27412[(13)]);
var inst_27262 = before_jsload.call(null,files);
var inst_27263 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27264 = (function (){return ((function (inst_27265,inst_27262,inst_27263,state_val_27413,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27007_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27007_SHARP_);
});
;})(inst_27265,inst_27262,inst_27263,state_val_27413,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27265__$1 = cljs.core.filter.call(null,inst_27264,files);
var inst_27266 = cljs.core.not_empty.call(null,inst_27265__$1);
var state_27412__$1 = (function (){var statearr_27421 = state_27412;
(statearr_27421[(13)] = inst_27265__$1);

(statearr_27421[(14)] = inst_27263);

(statearr_27421[(15)] = inst_27262);

return statearr_27421;
})();
if(cljs.core.truth_(inst_27266)){
var statearr_27422_27507 = state_27412__$1;
(statearr_27422_27507[(1)] = (2));

} else {
var statearr_27423_27508 = state_27412__$1;
(statearr_27423_27508[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (24))){
var state_27412__$1 = state_27412;
var statearr_27424_27509 = state_27412__$1;
(statearr_27424_27509[(2)] = null);

(statearr_27424_27509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (39))){
var inst_27366 = (state_27412[(16)]);
var state_27412__$1 = state_27412;
var statearr_27425_27510 = state_27412__$1;
(statearr_27425_27510[(2)] = inst_27366);

(statearr_27425_27510[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (46))){
var inst_27407 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
var statearr_27426_27511 = state_27412__$1;
(statearr_27426_27511[(2)] = inst_27407);

(statearr_27426_27511[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (4))){
var inst_27310 = (state_27412[(2)]);
var inst_27311 = cljs.core.List.EMPTY;
var inst_27312 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27311);
var inst_27313 = (function (){return ((function (inst_27310,inst_27311,inst_27312,state_val_27413,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27008_SHARP_){
var and__16351__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27008_SHARP_);
if(cljs.core.truth_(and__16351__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27008_SHARP_));
} else {
return and__16351__auto__;
}
});
;})(inst_27310,inst_27311,inst_27312,state_val_27413,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27314 = cljs.core.filter.call(null,inst_27313,files);
var inst_27315 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27316 = cljs.core.concat.call(null,inst_27314,inst_27315);
var state_27412__$1 = (function (){var statearr_27427 = state_27412;
(statearr_27427[(12)] = inst_27316);

(statearr_27427[(17)] = inst_27312);

(statearr_27427[(18)] = inst_27310);

return statearr_27427;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27428_27512 = state_27412__$1;
(statearr_27428_27512[(1)] = (16));

} else {
var statearr_27429_27513 = state_27412__$1;
(statearr_27429_27513[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (15))){
var inst_27300 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
var statearr_27430_27514 = state_27412__$1;
(statearr_27430_27514[(2)] = inst_27300);

(statearr_27430_27514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (21))){
var inst_27326 = (state_27412[(19)]);
var inst_27326__$1 = (state_27412[(2)]);
var inst_27327 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27326__$1);
var state_27412__$1 = (function (){var statearr_27431 = state_27412;
(statearr_27431[(19)] = inst_27326__$1);

return statearr_27431;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27412__$1,(22),inst_27327);
} else {
if((state_val_27413 === (31))){
var inst_27410 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27412__$1,inst_27410);
} else {
if((state_val_27413 === (32))){
var inst_27366 = (state_27412[(16)]);
var inst_27371 = inst_27366.cljs$lang$protocol_mask$partition0$;
var inst_27372 = (inst_27371 & (64));
var inst_27373 = inst_27366.cljs$core$ISeq$;
var inst_27374 = (inst_27372) || (inst_27373);
var state_27412__$1 = state_27412;
if(cljs.core.truth_(inst_27374)){
var statearr_27432_27515 = state_27412__$1;
(statearr_27432_27515[(1)] = (35));

} else {
var statearr_27433_27516 = state_27412__$1;
(statearr_27433_27516[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (40))){
var inst_27387 = (state_27412[(20)]);
var inst_27386 = (state_27412[(2)]);
var inst_27387__$1 = cljs.core.get.call(null,inst_27386,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27388 = cljs.core.get.call(null,inst_27386,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27389 = cljs.core.not_empty.call(null,inst_27387__$1);
var state_27412__$1 = (function (){var statearr_27434 = state_27412;
(statearr_27434[(20)] = inst_27387__$1);

(statearr_27434[(21)] = inst_27388);

return statearr_27434;
})();
if(cljs.core.truth_(inst_27389)){
var statearr_27435_27517 = state_27412__$1;
(statearr_27435_27517[(1)] = (41));

} else {
var statearr_27436_27518 = state_27412__$1;
(statearr_27436_27518[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (33))){
var state_27412__$1 = state_27412;
var statearr_27437_27519 = state_27412__$1;
(statearr_27437_27519[(2)] = false);

(statearr_27437_27519[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (13))){
var inst_27286 = (state_27412[(22)]);
var inst_27290 = cljs.core.chunk_first.call(null,inst_27286);
var inst_27291 = cljs.core.chunk_rest.call(null,inst_27286);
var inst_27292 = cljs.core.count.call(null,inst_27290);
var inst_27273 = inst_27291;
var inst_27274 = inst_27290;
var inst_27275 = inst_27292;
var inst_27276 = (0);
var state_27412__$1 = (function (){var statearr_27438 = state_27412;
(statearr_27438[(7)] = inst_27275);

(statearr_27438[(8)] = inst_27273);

(statearr_27438[(9)] = inst_27274);

(statearr_27438[(10)] = inst_27276);

return statearr_27438;
})();
var statearr_27439_27520 = state_27412__$1;
(statearr_27439_27520[(2)] = null);

(statearr_27439_27520[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (22))){
var inst_27330 = (state_27412[(23)]);
var inst_27329 = (state_27412[(24)]);
var inst_27326 = (state_27412[(19)]);
var inst_27334 = (state_27412[(25)]);
var inst_27329__$1 = (state_27412[(2)]);
var inst_27330__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27329__$1);
var inst_27331 = (function (){var all_files = inst_27326;
var res_SINGLEQUOTE_ = inst_27329__$1;
var res = inst_27330__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27330,inst_27329,inst_27326,inst_27334,inst_27329__$1,inst_27330__$1,state_val_27413,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27009_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27009_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27330,inst_27329,inst_27326,inst_27334,inst_27329__$1,inst_27330__$1,state_val_27413,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27332 = cljs.core.filter.call(null,inst_27331,inst_27329__$1);
var inst_27333 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27334__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27333);
var inst_27335 = cljs.core.not_empty.call(null,inst_27334__$1);
var state_27412__$1 = (function (){var statearr_27440 = state_27412;
(statearr_27440[(23)] = inst_27330__$1);

(statearr_27440[(24)] = inst_27329__$1);

(statearr_27440[(26)] = inst_27332);

(statearr_27440[(25)] = inst_27334__$1);

return statearr_27440;
})();
if(cljs.core.truth_(inst_27335)){
var statearr_27441_27521 = state_27412__$1;
(statearr_27441_27521[(1)] = (23));

} else {
var statearr_27442_27522 = state_27412__$1;
(statearr_27442_27522[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (36))){
var state_27412__$1 = state_27412;
var statearr_27443_27523 = state_27412__$1;
(statearr_27443_27523[(2)] = false);

(statearr_27443_27523[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (41))){
var inst_27387 = (state_27412[(20)]);
var inst_27391 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27392 = cljs.core.map.call(null,inst_27391,inst_27387);
var inst_27393 = cljs.core.pr_str.call(null,inst_27392);
var inst_27394 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27393)].join('');
var inst_27395 = figwheel.client.utils.log.call(null,inst_27394);
var state_27412__$1 = state_27412;
var statearr_27444_27524 = state_27412__$1;
(statearr_27444_27524[(2)] = inst_27395);

(statearr_27444_27524[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (43))){
var inst_27388 = (state_27412[(21)]);
var inst_27398 = (state_27412[(2)]);
var inst_27399 = cljs.core.not_empty.call(null,inst_27388);
var state_27412__$1 = (function (){var statearr_27445 = state_27412;
(statearr_27445[(27)] = inst_27398);

return statearr_27445;
})();
if(cljs.core.truth_(inst_27399)){
var statearr_27446_27525 = state_27412__$1;
(statearr_27446_27525[(1)] = (44));

} else {
var statearr_27447_27526 = state_27412__$1;
(statearr_27447_27526[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (29))){
var inst_27330 = (state_27412[(23)]);
var inst_27329 = (state_27412[(24)]);
var inst_27326 = (state_27412[(19)]);
var inst_27332 = (state_27412[(26)]);
var inst_27334 = (state_27412[(25)]);
var inst_27366 = (state_27412[(16)]);
var inst_27362 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27365 = (function (){var all_files = inst_27326;
var res_SINGLEQUOTE_ = inst_27329;
var res = inst_27330;
var files_not_loaded = inst_27332;
var dependencies_that_loaded = inst_27334;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27330,inst_27329,inst_27326,inst_27332,inst_27334,inst_27366,inst_27362,state_val_27413,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27364){
var map__27448 = p__27364;
var map__27448__$1 = ((((!((map__27448 == null)))?((((map__27448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27448):map__27448);
var namespace = cljs.core.get.call(null,map__27448__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27330,inst_27329,inst_27326,inst_27332,inst_27334,inst_27366,inst_27362,state_val_27413,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27366__$1 = cljs.core.group_by.call(null,inst_27365,inst_27332);
var inst_27368 = (inst_27366__$1 == null);
var inst_27369 = cljs.core.not.call(null,inst_27368);
var state_27412__$1 = (function (){var statearr_27450 = state_27412;
(statearr_27450[(28)] = inst_27362);

(statearr_27450[(16)] = inst_27366__$1);

return statearr_27450;
})();
if(inst_27369){
var statearr_27451_27527 = state_27412__$1;
(statearr_27451_27527[(1)] = (32));

} else {
var statearr_27452_27528 = state_27412__$1;
(statearr_27452_27528[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (44))){
var inst_27388 = (state_27412[(21)]);
var inst_27401 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27388);
var inst_27402 = cljs.core.pr_str.call(null,inst_27401);
var inst_27403 = [cljs.core.str("not required: "),cljs.core.str(inst_27402)].join('');
var inst_27404 = figwheel.client.utils.log.call(null,inst_27403);
var state_27412__$1 = state_27412;
var statearr_27453_27529 = state_27412__$1;
(statearr_27453_27529[(2)] = inst_27404);

(statearr_27453_27529[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (6))){
var inst_27307 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
var statearr_27454_27530 = state_27412__$1;
(statearr_27454_27530[(2)] = inst_27307);

(statearr_27454_27530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (28))){
var inst_27332 = (state_27412[(26)]);
var inst_27359 = (state_27412[(2)]);
var inst_27360 = cljs.core.not_empty.call(null,inst_27332);
var state_27412__$1 = (function (){var statearr_27455 = state_27412;
(statearr_27455[(29)] = inst_27359);

return statearr_27455;
})();
if(cljs.core.truth_(inst_27360)){
var statearr_27456_27531 = state_27412__$1;
(statearr_27456_27531[(1)] = (29));

} else {
var statearr_27457_27532 = state_27412__$1;
(statearr_27457_27532[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (25))){
var inst_27330 = (state_27412[(23)]);
var inst_27346 = (state_27412[(2)]);
var inst_27347 = cljs.core.not_empty.call(null,inst_27330);
var state_27412__$1 = (function (){var statearr_27458 = state_27412;
(statearr_27458[(30)] = inst_27346);

return statearr_27458;
})();
if(cljs.core.truth_(inst_27347)){
var statearr_27459_27533 = state_27412__$1;
(statearr_27459_27533[(1)] = (26));

} else {
var statearr_27460_27534 = state_27412__$1;
(statearr_27460_27534[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (34))){
var inst_27381 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
if(cljs.core.truth_(inst_27381)){
var statearr_27461_27535 = state_27412__$1;
(statearr_27461_27535[(1)] = (38));

} else {
var statearr_27462_27536 = state_27412__$1;
(statearr_27462_27536[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (17))){
var state_27412__$1 = state_27412;
var statearr_27463_27537 = state_27412__$1;
(statearr_27463_27537[(2)] = recompile_dependents);

(statearr_27463_27537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (3))){
var state_27412__$1 = state_27412;
var statearr_27464_27538 = state_27412__$1;
(statearr_27464_27538[(2)] = null);

(statearr_27464_27538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (12))){
var inst_27303 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
var statearr_27465_27539 = state_27412__$1;
(statearr_27465_27539[(2)] = inst_27303);

(statearr_27465_27539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (2))){
var inst_27265 = (state_27412[(13)]);
var inst_27272 = cljs.core.seq.call(null,inst_27265);
var inst_27273 = inst_27272;
var inst_27274 = null;
var inst_27275 = (0);
var inst_27276 = (0);
var state_27412__$1 = (function (){var statearr_27466 = state_27412;
(statearr_27466[(7)] = inst_27275);

(statearr_27466[(8)] = inst_27273);

(statearr_27466[(9)] = inst_27274);

(statearr_27466[(10)] = inst_27276);

return statearr_27466;
})();
var statearr_27467_27540 = state_27412__$1;
(statearr_27467_27540[(2)] = null);

(statearr_27467_27540[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (23))){
var inst_27330 = (state_27412[(23)]);
var inst_27329 = (state_27412[(24)]);
var inst_27326 = (state_27412[(19)]);
var inst_27332 = (state_27412[(26)]);
var inst_27334 = (state_27412[(25)]);
var inst_27337 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27339 = (function (){var all_files = inst_27326;
var res_SINGLEQUOTE_ = inst_27329;
var res = inst_27330;
var files_not_loaded = inst_27332;
var dependencies_that_loaded = inst_27334;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27330,inst_27329,inst_27326,inst_27332,inst_27334,inst_27337,state_val_27413,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27338){
var map__27468 = p__27338;
var map__27468__$1 = ((((!((map__27468 == null)))?((((map__27468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27468):map__27468);
var request_url = cljs.core.get.call(null,map__27468__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27330,inst_27329,inst_27326,inst_27332,inst_27334,inst_27337,state_val_27413,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27340 = cljs.core.reverse.call(null,inst_27334);
var inst_27341 = cljs.core.map.call(null,inst_27339,inst_27340);
var inst_27342 = cljs.core.pr_str.call(null,inst_27341);
var inst_27343 = figwheel.client.utils.log.call(null,inst_27342);
var state_27412__$1 = (function (){var statearr_27470 = state_27412;
(statearr_27470[(31)] = inst_27337);

return statearr_27470;
})();
var statearr_27471_27541 = state_27412__$1;
(statearr_27471_27541[(2)] = inst_27343);

(statearr_27471_27541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (35))){
var state_27412__$1 = state_27412;
var statearr_27472_27542 = state_27412__$1;
(statearr_27472_27542[(2)] = true);

(statearr_27472_27542[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (19))){
var inst_27316 = (state_27412[(12)]);
var inst_27322 = figwheel.client.file_reloading.expand_files.call(null,inst_27316);
var state_27412__$1 = state_27412;
var statearr_27473_27543 = state_27412__$1;
(statearr_27473_27543[(2)] = inst_27322);

(statearr_27473_27543[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (11))){
var state_27412__$1 = state_27412;
var statearr_27474_27544 = state_27412__$1;
(statearr_27474_27544[(2)] = null);

(statearr_27474_27544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (9))){
var inst_27305 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
var statearr_27475_27545 = state_27412__$1;
(statearr_27475_27545[(2)] = inst_27305);

(statearr_27475_27545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (5))){
var inst_27275 = (state_27412[(7)]);
var inst_27276 = (state_27412[(10)]);
var inst_27278 = (inst_27276 < inst_27275);
var inst_27279 = inst_27278;
var state_27412__$1 = state_27412;
if(cljs.core.truth_(inst_27279)){
var statearr_27476_27546 = state_27412__$1;
(statearr_27476_27546[(1)] = (7));

} else {
var statearr_27477_27547 = state_27412__$1;
(statearr_27477_27547[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (14))){
var inst_27286 = (state_27412[(22)]);
var inst_27295 = cljs.core.first.call(null,inst_27286);
var inst_27296 = figwheel.client.file_reloading.eval_body.call(null,inst_27295,opts);
var inst_27297 = cljs.core.next.call(null,inst_27286);
var inst_27273 = inst_27297;
var inst_27274 = null;
var inst_27275 = (0);
var inst_27276 = (0);
var state_27412__$1 = (function (){var statearr_27478 = state_27412;
(statearr_27478[(7)] = inst_27275);

(statearr_27478[(8)] = inst_27273);

(statearr_27478[(9)] = inst_27274);

(statearr_27478[(10)] = inst_27276);

(statearr_27478[(32)] = inst_27296);

return statearr_27478;
})();
var statearr_27479_27548 = state_27412__$1;
(statearr_27479_27548[(2)] = null);

(statearr_27479_27548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (45))){
var state_27412__$1 = state_27412;
var statearr_27480_27549 = state_27412__$1;
(statearr_27480_27549[(2)] = null);

(statearr_27480_27549[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (26))){
var inst_27330 = (state_27412[(23)]);
var inst_27329 = (state_27412[(24)]);
var inst_27326 = (state_27412[(19)]);
var inst_27332 = (state_27412[(26)]);
var inst_27334 = (state_27412[(25)]);
var inst_27349 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27351 = (function (){var all_files = inst_27326;
var res_SINGLEQUOTE_ = inst_27329;
var res = inst_27330;
var files_not_loaded = inst_27332;
var dependencies_that_loaded = inst_27334;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27330,inst_27329,inst_27326,inst_27332,inst_27334,inst_27349,state_val_27413,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27350){
var map__27481 = p__27350;
var map__27481__$1 = ((((!((map__27481 == null)))?((((map__27481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27481):map__27481);
var namespace = cljs.core.get.call(null,map__27481__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27481__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27330,inst_27329,inst_27326,inst_27332,inst_27334,inst_27349,state_val_27413,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27352 = cljs.core.map.call(null,inst_27351,inst_27330);
var inst_27353 = cljs.core.pr_str.call(null,inst_27352);
var inst_27354 = figwheel.client.utils.log.call(null,inst_27353);
var inst_27355 = (function (){var all_files = inst_27326;
var res_SINGLEQUOTE_ = inst_27329;
var res = inst_27330;
var files_not_loaded = inst_27332;
var dependencies_that_loaded = inst_27334;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27330,inst_27329,inst_27326,inst_27332,inst_27334,inst_27349,inst_27351,inst_27352,inst_27353,inst_27354,state_val_27413,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27330,inst_27329,inst_27326,inst_27332,inst_27334,inst_27349,inst_27351,inst_27352,inst_27353,inst_27354,state_val_27413,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27356 = setTimeout(inst_27355,(10));
var state_27412__$1 = (function (){var statearr_27483 = state_27412;
(statearr_27483[(33)] = inst_27349);

(statearr_27483[(34)] = inst_27354);

return statearr_27483;
})();
var statearr_27484_27550 = state_27412__$1;
(statearr_27484_27550[(2)] = inst_27356);

(statearr_27484_27550[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (16))){
var state_27412__$1 = state_27412;
var statearr_27485_27551 = state_27412__$1;
(statearr_27485_27551[(2)] = reload_dependents);

(statearr_27485_27551[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (38))){
var inst_27366 = (state_27412[(16)]);
var inst_27383 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27366);
var state_27412__$1 = state_27412;
var statearr_27486_27552 = state_27412__$1;
(statearr_27486_27552[(2)] = inst_27383);

(statearr_27486_27552[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (30))){
var state_27412__$1 = state_27412;
var statearr_27487_27553 = state_27412__$1;
(statearr_27487_27553[(2)] = null);

(statearr_27487_27553[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (10))){
var inst_27286 = (state_27412[(22)]);
var inst_27288 = cljs.core.chunked_seq_QMARK_.call(null,inst_27286);
var state_27412__$1 = state_27412;
if(inst_27288){
var statearr_27488_27554 = state_27412__$1;
(statearr_27488_27554[(1)] = (13));

} else {
var statearr_27489_27555 = state_27412__$1;
(statearr_27489_27555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (18))){
var inst_27320 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
if(cljs.core.truth_(inst_27320)){
var statearr_27490_27556 = state_27412__$1;
(statearr_27490_27556[(1)] = (19));

} else {
var statearr_27491_27557 = state_27412__$1;
(statearr_27491_27557[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (42))){
var state_27412__$1 = state_27412;
var statearr_27492_27558 = state_27412__$1;
(statearr_27492_27558[(2)] = null);

(statearr_27492_27558[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (37))){
var inst_27378 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
var statearr_27493_27559 = state_27412__$1;
(statearr_27493_27559[(2)] = inst_27378);

(statearr_27493_27559[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (8))){
var inst_27273 = (state_27412[(8)]);
var inst_27286 = (state_27412[(22)]);
var inst_27286__$1 = cljs.core.seq.call(null,inst_27273);
var state_27412__$1 = (function (){var statearr_27494 = state_27412;
(statearr_27494[(22)] = inst_27286__$1);

return statearr_27494;
})();
if(inst_27286__$1){
var statearr_27495_27560 = state_27412__$1;
(statearr_27495_27560[(1)] = (10));

} else {
var statearr_27496_27561 = state_27412__$1;
(statearr_27496_27561[(1)] = (11));

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
});})(c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20085__auto__,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20086__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20086__auto____0 = (function (){
var statearr_27500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27500[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20086__auto__);

(statearr_27500[(1)] = (1));

return statearr_27500;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20086__auto____1 = (function (state_27412){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_27412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e27501){if((e27501 instanceof Object)){
var ex__20089__auto__ = e27501;
var statearr_27502_27562 = state_27412;
(statearr_27502_27562[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27563 = state_27412;
state_27412 = G__27563;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20086__auto__ = function(state_27412){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20086__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20086__auto____1.call(this,state_27412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20086__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20086__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20152__auto__ = (function (){var statearr_27503 = f__20151__auto__.call(null);
(statearr_27503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto__);

return statearr_27503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto__,map__27258,map__27258__$1,opts,before_jsload,on_jsload,reload_dependents,map__27259,map__27259__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20150__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27566,link){
var map__27569 = p__27566;
var map__27569__$1 = ((((!((map__27569 == null)))?((((map__27569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27569):map__27569);
var file = cljs.core.get.call(null,map__27569__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27569,map__27569__$1,file){
return (function (p1__27564_SHARP_,p2__27565_SHARP_){
if(cljs.core._EQ_.call(null,p1__27564_SHARP_,p2__27565_SHARP_)){
return p1__27564_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27569,map__27569__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27575){
var map__27576 = p__27575;
var map__27576__$1 = ((((!((map__27576 == null)))?((((map__27576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27576):map__27576);
var match_length = cljs.core.get.call(null,map__27576__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27576__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27571_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27571_SHARP_);
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
var args27578 = [];
var len__17421__auto___27581 = arguments.length;
var i__17422__auto___27582 = (0);
while(true){
if((i__17422__auto___27582 < len__17421__auto___27581)){
args27578.push((arguments[i__17422__auto___27582]));

var G__27583 = (i__17422__auto___27582 + (1));
i__17422__auto___27582 = G__27583;
continue;
} else {
}
break;
}

var G__27580 = args27578.length;
switch (G__27580) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27578.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27585_SHARP_,p2__27586_SHARP_){
return cljs.core.assoc.call(null,p1__27585_SHARP_,cljs.core.get.call(null,p2__27586_SHARP_,key),p2__27586_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27587){
var map__27590 = p__27587;
var map__27590__$1 = ((((!((map__27590 == null)))?((((map__27590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27590):map__27590);
var f_data = map__27590__$1;
var file = cljs.core.get.call(null,map__27590__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27592,files_msg){
var map__27599 = p__27592;
var map__27599__$1 = ((((!((map__27599 == null)))?((((map__27599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27599):map__27599);
var opts = map__27599__$1;
var on_cssload = cljs.core.get.call(null,map__27599__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27601_27605 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27602_27606 = null;
var count__27603_27607 = (0);
var i__27604_27608 = (0);
while(true){
if((i__27604_27608 < count__27603_27607)){
var f_27609 = cljs.core._nth.call(null,chunk__27602_27606,i__27604_27608);
figwheel.client.file_reloading.reload_css_file.call(null,f_27609);

var G__27610 = seq__27601_27605;
var G__27611 = chunk__27602_27606;
var G__27612 = count__27603_27607;
var G__27613 = (i__27604_27608 + (1));
seq__27601_27605 = G__27610;
chunk__27602_27606 = G__27611;
count__27603_27607 = G__27612;
i__27604_27608 = G__27613;
continue;
} else {
var temp__4425__auto___27614 = cljs.core.seq.call(null,seq__27601_27605);
if(temp__4425__auto___27614){
var seq__27601_27615__$1 = temp__4425__auto___27614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27601_27615__$1)){
var c__17166__auto___27616 = cljs.core.chunk_first.call(null,seq__27601_27615__$1);
var G__27617 = cljs.core.chunk_rest.call(null,seq__27601_27615__$1);
var G__27618 = c__17166__auto___27616;
var G__27619 = cljs.core.count.call(null,c__17166__auto___27616);
var G__27620 = (0);
seq__27601_27605 = G__27617;
chunk__27602_27606 = G__27618;
count__27603_27607 = G__27619;
i__27604_27608 = G__27620;
continue;
} else {
var f_27621 = cljs.core.first.call(null,seq__27601_27615__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27621);

var G__27622 = cljs.core.next.call(null,seq__27601_27615__$1);
var G__27623 = null;
var G__27624 = (0);
var G__27625 = (0);
seq__27601_27605 = G__27622;
chunk__27602_27606 = G__27623;
count__27603_27607 = G__27624;
i__27604_27608 = G__27625;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27599,map__27599__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27599,map__27599__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map