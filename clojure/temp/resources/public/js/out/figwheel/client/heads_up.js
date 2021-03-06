// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17428__auto__ = [];
var len__17421__auto___26318 = arguments.length;
var i__17422__auto___26319 = (0);
while(true){
if((i__17422__auto___26319 < len__17421__auto___26318)){
args__17428__auto__.push((arguments[i__17422__auto___26319]));

var G__26320 = (i__17422__auto___26319 + (1));
i__17422__auto___26319 = G__26320;
continue;
} else {
}
break;
}

var argseq__17429__auto__ = ((((2) < args__17428__auto__.length))?(new cljs.core.IndexedSeq(args__17428__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17429__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26310_26321 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26311_26322 = null;
var count__26312_26323 = (0);
var i__26313_26324 = (0);
while(true){
if((i__26313_26324 < count__26312_26323)){
var k_26325 = cljs.core._nth.call(null,chunk__26311_26322,i__26313_26324);
e.setAttribute(cljs.core.name.call(null,k_26325),cljs.core.get.call(null,attrs,k_26325));

var G__26326 = seq__26310_26321;
var G__26327 = chunk__26311_26322;
var G__26328 = count__26312_26323;
var G__26329 = (i__26313_26324 + (1));
seq__26310_26321 = G__26326;
chunk__26311_26322 = G__26327;
count__26312_26323 = G__26328;
i__26313_26324 = G__26329;
continue;
} else {
var temp__4425__auto___26330 = cljs.core.seq.call(null,seq__26310_26321);
if(temp__4425__auto___26330){
var seq__26310_26331__$1 = temp__4425__auto___26330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26310_26331__$1)){
var c__17166__auto___26332 = cljs.core.chunk_first.call(null,seq__26310_26331__$1);
var G__26333 = cljs.core.chunk_rest.call(null,seq__26310_26331__$1);
var G__26334 = c__17166__auto___26332;
var G__26335 = cljs.core.count.call(null,c__17166__auto___26332);
var G__26336 = (0);
seq__26310_26321 = G__26333;
chunk__26311_26322 = G__26334;
count__26312_26323 = G__26335;
i__26313_26324 = G__26336;
continue;
} else {
var k_26337 = cljs.core.first.call(null,seq__26310_26331__$1);
e.setAttribute(cljs.core.name.call(null,k_26337),cljs.core.get.call(null,attrs,k_26337));

var G__26338 = cljs.core.next.call(null,seq__26310_26331__$1);
var G__26339 = null;
var G__26340 = (0);
var G__26341 = (0);
seq__26310_26321 = G__26338;
chunk__26311_26322 = G__26339;
count__26312_26323 = G__26340;
i__26313_26324 = G__26341;
continue;
}
} else {
}
}
break;
}

var seq__26314_26342 = cljs.core.seq.call(null,children);
var chunk__26315_26343 = null;
var count__26316_26344 = (0);
var i__26317_26345 = (0);
while(true){
if((i__26317_26345 < count__26316_26344)){
var ch_26346 = cljs.core._nth.call(null,chunk__26315_26343,i__26317_26345);
e.appendChild(ch_26346);

var G__26347 = seq__26314_26342;
var G__26348 = chunk__26315_26343;
var G__26349 = count__26316_26344;
var G__26350 = (i__26317_26345 + (1));
seq__26314_26342 = G__26347;
chunk__26315_26343 = G__26348;
count__26316_26344 = G__26349;
i__26317_26345 = G__26350;
continue;
} else {
var temp__4425__auto___26351 = cljs.core.seq.call(null,seq__26314_26342);
if(temp__4425__auto___26351){
var seq__26314_26352__$1 = temp__4425__auto___26351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26314_26352__$1)){
var c__17166__auto___26353 = cljs.core.chunk_first.call(null,seq__26314_26352__$1);
var G__26354 = cljs.core.chunk_rest.call(null,seq__26314_26352__$1);
var G__26355 = c__17166__auto___26353;
var G__26356 = cljs.core.count.call(null,c__17166__auto___26353);
var G__26357 = (0);
seq__26314_26342 = G__26354;
chunk__26315_26343 = G__26355;
count__26316_26344 = G__26356;
i__26317_26345 = G__26357;
continue;
} else {
var ch_26358 = cljs.core.first.call(null,seq__26314_26352__$1);
e.appendChild(ch_26358);

var G__26359 = cljs.core.next.call(null,seq__26314_26352__$1);
var G__26360 = null;
var G__26361 = (0);
var G__26362 = (0);
seq__26314_26342 = G__26359;
chunk__26315_26343 = G__26360;
count__26316_26344 = G__26361;
i__26317_26345 = G__26362;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26307){
var G__26308 = cljs.core.first.call(null,seq26307);
var seq26307__$1 = cljs.core.next.call(null,seq26307);
var G__26309 = cljs.core.first.call(null,seq26307__$1);
var seq26307__$2 = cljs.core.next.call(null,seq26307__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26308,G__26309,seq26307__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17276__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17277__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17278__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17279__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17280__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17276__auto__,prefer_table__17277__auto__,method_cache__17278__auto__,cached_hierarchy__17279__auto__,hierarchy__17280__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17276__auto__,prefer_table__17277__auto__,method_cache__17278__auto__,cached_hierarchy__17279__auto__,hierarchy__17280__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17280__auto__,method_table__17276__auto__,prefer_table__17277__auto__,method_cache__17278__auto__,cached_hierarchy__17279__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26363 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26363.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26363.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_26363.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26363);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26364,st_map){
var map__26369 = p__26364;
var map__26369__$1 = ((((!((map__26369 == null)))?((((map__26369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26369):map__26369);
var container_el = cljs.core.get.call(null,map__26369__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26369,map__26369__$1,container_el){
return (function (p__26371){
var vec__26372 = p__26371;
var k = cljs.core.nth.call(null,vec__26372,(0),null);
var v = cljs.core.nth.call(null,vec__26372,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26369,map__26369__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26373,dom_str){
var map__26376 = p__26373;
var map__26376__$1 = ((((!((map__26376 == null)))?((((map__26376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26376):map__26376);
var c = map__26376__$1;
var content_area_el = cljs.core.get.call(null,map__26376__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26378){
var map__26381 = p__26378;
var map__26381__$1 = ((((!((map__26381 == null)))?((((map__26381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26381):map__26381);
var content_area_el = cljs.core.get.call(null,map__26381__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20150__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto__){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto__){
return (function (state_26424){
var state_val_26425 = (state_26424[(1)]);
if((state_val_26425 === (1))){
var inst_26409 = (state_26424[(7)]);
var inst_26409__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26410 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26411 = ["10px","10px","100%","68px","1.0"];
var inst_26412 = cljs.core.PersistentHashMap.fromArrays(inst_26410,inst_26411);
var inst_26413 = cljs.core.merge.call(null,inst_26412,style);
var inst_26414 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26409__$1,inst_26413);
var inst_26415 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26409__$1,msg);
var inst_26416 = cljs.core.async.timeout.call(null,(300));
var state_26424__$1 = (function (){var statearr_26426 = state_26424;
(statearr_26426[(7)] = inst_26409__$1);

(statearr_26426[(8)] = inst_26414);

(statearr_26426[(9)] = inst_26415);

return statearr_26426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26424__$1,(2),inst_26416);
} else {
if((state_val_26425 === (2))){
var inst_26409 = (state_26424[(7)]);
var inst_26418 = (state_26424[(2)]);
var inst_26419 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26420 = ["auto"];
var inst_26421 = cljs.core.PersistentHashMap.fromArrays(inst_26419,inst_26420);
var inst_26422 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26409,inst_26421);
var state_26424__$1 = (function (){var statearr_26427 = state_26424;
(statearr_26427[(10)] = inst_26418);

return statearr_26427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26424__$1,inst_26422);
} else {
return null;
}
}
});})(c__20150__auto__))
;
return ((function (switch__20085__auto__,c__20150__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20086__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20086__auto____0 = (function (){
var statearr_26431 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26431[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20086__auto__);

(statearr_26431[(1)] = (1));

return statearr_26431;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20086__auto____1 = (function (state_26424){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_26424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e26432){if((e26432 instanceof Object)){
var ex__20089__auto__ = e26432;
var statearr_26433_26435 = state_26424;
(statearr_26433_26435[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26436 = state_26424;
state_26424 = G__26436;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20086__auto__ = function(state_26424){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20086__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20086__auto____1.call(this,state_26424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20086__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20086__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto__))
})();
var state__20152__auto__ = (function (){var statearr_26434 = f__20151__auto__.call(null);
(statearr_26434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto__);

return statearr_26434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto__))
);

return c__20150__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__26438 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__26438,(0),null);
var ln = cljs.core.nth.call(null,vec__26438,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26441 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26441,(0),null);
var file_line = cljs.core.nth.call(null,vec__26441,(1),null);
var file_column = cljs.core.nth.call(null,vec__26441,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26441,file_name,file_line,file_column){
return (function (p1__26439_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__26439_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__26441,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16363__auto__ = file_line;
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
} else {
var and__16351__auto__ = cause;
if(cljs.core.truth_(and__16351__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16351__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26444 = figwheel.client.heads_up.ensure_container.call(null);
var map__26444__$1 = ((((!((map__26444 == null)))?((((map__26444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26444):map__26444);
var content_area_el = cljs.core.get.call(null,map__26444__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20150__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto__){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto__){
return (function (state_26492){
var state_val_26493 = (state_26492[(1)]);
if((state_val_26493 === (1))){
var inst_26475 = (state_26492[(7)]);
var inst_26475__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26476 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26477 = ["0.0"];
var inst_26478 = cljs.core.PersistentHashMap.fromArrays(inst_26476,inst_26477);
var inst_26479 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26475__$1,inst_26478);
var inst_26480 = cljs.core.async.timeout.call(null,(300));
var state_26492__$1 = (function (){var statearr_26494 = state_26492;
(statearr_26494[(8)] = inst_26479);

(statearr_26494[(7)] = inst_26475__$1);

return statearr_26494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26492__$1,(2),inst_26480);
} else {
if((state_val_26493 === (2))){
var inst_26475 = (state_26492[(7)]);
var inst_26482 = (state_26492[(2)]);
var inst_26483 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26484 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26485 = cljs.core.PersistentHashMap.fromArrays(inst_26483,inst_26484);
var inst_26486 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26475,inst_26485);
var inst_26487 = cljs.core.async.timeout.call(null,(200));
var state_26492__$1 = (function (){var statearr_26495 = state_26492;
(statearr_26495[(9)] = inst_26482);

(statearr_26495[(10)] = inst_26486);

return statearr_26495;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26492__$1,(3),inst_26487);
} else {
if((state_val_26493 === (3))){
var inst_26475 = (state_26492[(7)]);
var inst_26489 = (state_26492[(2)]);
var inst_26490 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26475,"");
var state_26492__$1 = (function (){var statearr_26496 = state_26492;
(statearr_26496[(11)] = inst_26489);

return statearr_26496;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26492__$1,inst_26490);
} else {
return null;
}
}
}
});})(c__20150__auto__))
;
return ((function (switch__20085__auto__,c__20150__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20086__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20086__auto____0 = (function (){
var statearr_26500 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26500[(0)] = figwheel$client$heads_up$clear_$_state_machine__20086__auto__);

(statearr_26500[(1)] = (1));

return statearr_26500;
});
var figwheel$client$heads_up$clear_$_state_machine__20086__auto____1 = (function (state_26492){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_26492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e26501){if((e26501 instanceof Object)){
var ex__20089__auto__ = e26501;
var statearr_26502_26504 = state_26492;
(statearr_26502_26504[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26505 = state_26492;
state_26492 = G__26505;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20086__auto__ = function(state_26492){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20086__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20086__auto____1.call(this,state_26492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20086__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20086__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto__))
})();
var state__20152__auto__ = (function (){var statearr_26503 = f__20151__auto__.call(null);
(statearr_26503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto__);

return statearr_26503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto__))
);

return c__20150__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20150__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto__){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto__){
return (function (state_26537){
var state_val_26538 = (state_26537[(1)]);
if((state_val_26538 === (1))){
var inst_26527 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26537__$1 = state_26537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26537__$1,(2),inst_26527);
} else {
if((state_val_26538 === (2))){
var inst_26529 = (state_26537[(2)]);
var inst_26530 = cljs.core.async.timeout.call(null,(400));
var state_26537__$1 = (function (){var statearr_26539 = state_26537;
(statearr_26539[(7)] = inst_26529);

return statearr_26539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26537__$1,(3),inst_26530);
} else {
if((state_val_26538 === (3))){
var inst_26532 = (state_26537[(2)]);
var inst_26533 = figwheel.client.heads_up.clear.call(null);
var state_26537__$1 = (function (){var statearr_26540 = state_26537;
(statearr_26540[(8)] = inst_26532);

return statearr_26540;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26537__$1,(4),inst_26533);
} else {
if((state_val_26538 === (4))){
var inst_26535 = (state_26537[(2)]);
var state_26537__$1 = state_26537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26537__$1,inst_26535);
} else {
return null;
}
}
}
}
});})(c__20150__auto__))
;
return ((function (switch__20085__auto__,c__20150__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20086__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20086__auto____0 = (function (){
var statearr_26544 = [null,null,null,null,null,null,null,null,null];
(statearr_26544[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20086__auto__);

(statearr_26544[(1)] = (1));

return statearr_26544;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20086__auto____1 = (function (state_26537){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_26537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e26545){if((e26545 instanceof Object)){
var ex__20089__auto__ = e26545;
var statearr_26546_26548 = state_26537;
(statearr_26546_26548[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26549 = state_26537;
state_26537 = G__26549;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20086__auto__ = function(state_26537){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20086__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20086__auto____1.call(this,state_26537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20086__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20086__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto__))
})();
var state__20152__auto__ = (function (){var statearr_26547 = f__20151__auto__.call(null);
(statearr_26547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto__);

return statearr_26547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto__))
);

return c__20150__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map