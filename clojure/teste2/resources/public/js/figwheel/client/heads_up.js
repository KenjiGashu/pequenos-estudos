// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17850__auto__ = [];
var len__17843__auto___28592 = arguments.length;
var i__17844__auto___28593 = (0);
while(true){
if((i__17844__auto___28593 < len__17843__auto___28592)){
args__17850__auto__.push((arguments[i__17844__auto___28593]));

var G__28594 = (i__17844__auto___28593 + (1));
i__17844__auto___28593 = G__28594;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((2) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17851__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28584_28595 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28585_28596 = null;
var count__28586_28597 = (0);
var i__28587_28598 = (0);
while(true){
if((i__28587_28598 < count__28586_28597)){
var k_28599 = cljs.core._nth.call(null,chunk__28585_28596,i__28587_28598);
e.setAttribute(cljs.core.name.call(null,k_28599),cljs.core.get.call(null,attrs,k_28599));

var G__28600 = seq__28584_28595;
var G__28601 = chunk__28585_28596;
var G__28602 = count__28586_28597;
var G__28603 = (i__28587_28598 + (1));
seq__28584_28595 = G__28600;
chunk__28585_28596 = G__28601;
count__28586_28597 = G__28602;
i__28587_28598 = G__28603;
continue;
} else {
var temp__4425__auto___28604 = cljs.core.seq.call(null,seq__28584_28595);
if(temp__4425__auto___28604){
var seq__28584_28605__$1 = temp__4425__auto___28604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28584_28605__$1)){
var c__17588__auto___28606 = cljs.core.chunk_first.call(null,seq__28584_28605__$1);
var G__28607 = cljs.core.chunk_rest.call(null,seq__28584_28605__$1);
var G__28608 = c__17588__auto___28606;
var G__28609 = cljs.core.count.call(null,c__17588__auto___28606);
var G__28610 = (0);
seq__28584_28595 = G__28607;
chunk__28585_28596 = G__28608;
count__28586_28597 = G__28609;
i__28587_28598 = G__28610;
continue;
} else {
var k_28611 = cljs.core.first.call(null,seq__28584_28605__$1);
e.setAttribute(cljs.core.name.call(null,k_28611),cljs.core.get.call(null,attrs,k_28611));

var G__28612 = cljs.core.next.call(null,seq__28584_28605__$1);
var G__28613 = null;
var G__28614 = (0);
var G__28615 = (0);
seq__28584_28595 = G__28612;
chunk__28585_28596 = G__28613;
count__28586_28597 = G__28614;
i__28587_28598 = G__28615;
continue;
}
} else {
}
}
break;
}

var seq__28588_28616 = cljs.core.seq.call(null,children);
var chunk__28589_28617 = null;
var count__28590_28618 = (0);
var i__28591_28619 = (0);
while(true){
if((i__28591_28619 < count__28590_28618)){
var ch_28620 = cljs.core._nth.call(null,chunk__28589_28617,i__28591_28619);
e.appendChild(ch_28620);

var G__28621 = seq__28588_28616;
var G__28622 = chunk__28589_28617;
var G__28623 = count__28590_28618;
var G__28624 = (i__28591_28619 + (1));
seq__28588_28616 = G__28621;
chunk__28589_28617 = G__28622;
count__28590_28618 = G__28623;
i__28591_28619 = G__28624;
continue;
} else {
var temp__4425__auto___28625 = cljs.core.seq.call(null,seq__28588_28616);
if(temp__4425__auto___28625){
var seq__28588_28626__$1 = temp__4425__auto___28625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28588_28626__$1)){
var c__17588__auto___28627 = cljs.core.chunk_first.call(null,seq__28588_28626__$1);
var G__28628 = cljs.core.chunk_rest.call(null,seq__28588_28626__$1);
var G__28629 = c__17588__auto___28627;
var G__28630 = cljs.core.count.call(null,c__17588__auto___28627);
var G__28631 = (0);
seq__28588_28616 = G__28628;
chunk__28589_28617 = G__28629;
count__28590_28618 = G__28630;
i__28591_28619 = G__28631;
continue;
} else {
var ch_28632 = cljs.core.first.call(null,seq__28588_28626__$1);
e.appendChild(ch_28632);

var G__28633 = cljs.core.next.call(null,seq__28588_28626__$1);
var G__28634 = null;
var G__28635 = (0);
var G__28636 = (0);
seq__28588_28616 = G__28633;
chunk__28589_28617 = G__28634;
count__28590_28618 = G__28635;
i__28591_28619 = G__28636;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28581){
var G__28582 = cljs.core.first.call(null,seq28581);
var seq28581__$1 = cljs.core.next.call(null,seq28581);
var G__28583 = cljs.core.first.call(null,seq28581__$1);
var seq28581__$2 = cljs.core.next.call(null,seq28581__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28582,G__28583,seq28581__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17702__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__,hierarchy__17702__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__,hierarchy__17702__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17702__auto__,method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__));
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
var el_28637 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28637.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28637.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28637.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28637);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28638,st_map){
var map__28643 = p__28638;
var map__28643__$1 = ((((!((map__28643 == null)))?((((map__28643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28643):map__28643);
var container_el = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28643,map__28643__$1,container_el){
return (function (p__28645){
var vec__28646 = p__28645;
var k = cljs.core.nth.call(null,vec__28646,(0),null);
var v = cljs.core.nth.call(null,vec__28646,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28643,map__28643__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28647,dom_str){
var map__28650 = p__28647;
var map__28650__$1 = ((((!((map__28650 == null)))?((((map__28650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28650):map__28650);
var c = map__28650__$1;
var content_area_el = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28652){
var map__28655 = p__28652;
var map__28655__$1 = ((((!((map__28655 == null)))?((((map__28655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28655):map__28655);
var content_area_el = cljs.core.get.call(null,map__28655__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto__){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto__){
return (function (state_28698){
var state_val_28699 = (state_28698[(1)]);
if((state_val_28699 === (1))){
var inst_28683 = (state_28698[(7)]);
var inst_28683__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28684 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28685 = ["10px","10px","100%","68px","1.0"];
var inst_28686 = cljs.core.PersistentHashMap.fromArrays(inst_28684,inst_28685);
var inst_28687 = cljs.core.merge.call(null,inst_28686,style);
var inst_28688 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28683__$1,inst_28687);
var inst_28689 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28683__$1,msg);
var inst_28690 = cljs.core.async.timeout.call(null,(300));
var state_28698__$1 = (function (){var statearr_28700 = state_28698;
(statearr_28700[(8)] = inst_28689);

(statearr_28700[(9)] = inst_28688);

(statearr_28700[(7)] = inst_28683__$1);

return statearr_28700;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28698__$1,(2),inst_28690);
} else {
if((state_val_28699 === (2))){
var inst_28683 = (state_28698[(7)]);
var inst_28692 = (state_28698[(2)]);
var inst_28693 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28694 = ["auto"];
var inst_28695 = cljs.core.PersistentHashMap.fromArrays(inst_28693,inst_28694);
var inst_28696 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28683,inst_28695);
var state_28698__$1 = (function (){var statearr_28701 = state_28698;
(statearr_28701[(10)] = inst_28692);

return statearr_28701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28698__$1,inst_28696);
} else {
return null;
}
}
});})(c__19893__auto__))
;
return ((function (switch__19872__auto__,c__19893__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19873__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19873__auto____0 = (function (){
var statearr_28705 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28705[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19873__auto__);

(statearr_28705[(1)] = (1));

return statearr_28705;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19873__auto____1 = (function (state_28698){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_28698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e28706){if((e28706 instanceof Object)){
var ex__19876__auto__ = e28706;
var statearr_28707_28709 = state_28698;
(statearr_28707_28709[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28710 = state_28698;
state_28698 = G__28710;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19873__auto__ = function(state_28698){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19873__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19873__auto____1.call(this,state_28698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19873__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19873__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto__))
})();
var state__19895__auto__ = (function (){var statearr_28708 = f__19894__auto__.call(null);
(statearr_28708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto__);

return statearr_28708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto__))
);

return c__19893__auto__;
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
var vec__28712 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28712,(0),null);
var ln = cljs.core.nth.call(null,vec__28712,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28715 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28715,(0),null);
var file_line = cljs.core.nth.call(null,vec__28715,(1),null);
var file_column = cljs.core.nth.call(null,vec__28715,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28715,file_name,file_line,file_column){
return (function (p1__28713_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28713_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28715,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16785__auto__ = file_line;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var and__16773__auto__ = cause;
if(cljs.core.truth_(and__16773__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16773__auto__;
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
var map__28718 = figwheel.client.heads_up.ensure_container.call(null);
var map__28718__$1 = ((((!((map__28718 == null)))?((((map__28718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28718):map__28718);
var content_area_el = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto__){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto__){
return (function (state_28766){
var state_val_28767 = (state_28766[(1)]);
if((state_val_28767 === (1))){
var inst_28749 = (state_28766[(7)]);
var inst_28749__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28750 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28751 = ["0.0"];
var inst_28752 = cljs.core.PersistentHashMap.fromArrays(inst_28750,inst_28751);
var inst_28753 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28749__$1,inst_28752);
var inst_28754 = cljs.core.async.timeout.call(null,(300));
var state_28766__$1 = (function (){var statearr_28768 = state_28766;
(statearr_28768[(7)] = inst_28749__$1);

(statearr_28768[(8)] = inst_28753);

return statearr_28768;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28766__$1,(2),inst_28754);
} else {
if((state_val_28767 === (2))){
var inst_28749 = (state_28766[(7)]);
var inst_28756 = (state_28766[(2)]);
var inst_28757 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28758 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28759 = cljs.core.PersistentHashMap.fromArrays(inst_28757,inst_28758);
var inst_28760 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28749,inst_28759);
var inst_28761 = cljs.core.async.timeout.call(null,(200));
var state_28766__$1 = (function (){var statearr_28769 = state_28766;
(statearr_28769[(9)] = inst_28756);

(statearr_28769[(10)] = inst_28760);

return statearr_28769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28766__$1,(3),inst_28761);
} else {
if((state_val_28767 === (3))){
var inst_28749 = (state_28766[(7)]);
var inst_28763 = (state_28766[(2)]);
var inst_28764 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28749,"");
var state_28766__$1 = (function (){var statearr_28770 = state_28766;
(statearr_28770[(11)] = inst_28763);

return statearr_28770;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28766__$1,inst_28764);
} else {
return null;
}
}
}
});})(c__19893__auto__))
;
return ((function (switch__19872__auto__,c__19893__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19873__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19873__auto____0 = (function (){
var statearr_28774 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28774[(0)] = figwheel$client$heads_up$clear_$_state_machine__19873__auto__);

(statearr_28774[(1)] = (1));

return statearr_28774;
});
var figwheel$client$heads_up$clear_$_state_machine__19873__auto____1 = (function (state_28766){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_28766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e28775){if((e28775 instanceof Object)){
var ex__19876__auto__ = e28775;
var statearr_28776_28778 = state_28766;
(statearr_28776_28778[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28779 = state_28766;
state_28766 = G__28779;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19873__auto__ = function(state_28766){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19873__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19873__auto____1.call(this,state_28766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19873__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19873__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto__))
})();
var state__19895__auto__ = (function (){var statearr_28777 = f__19894__auto__.call(null);
(statearr_28777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto__);

return statearr_28777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto__))
);

return c__19893__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto__){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto__){
return (function (state_28811){
var state_val_28812 = (state_28811[(1)]);
if((state_val_28812 === (1))){
var inst_28801 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28811__$1 = state_28811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28811__$1,(2),inst_28801);
} else {
if((state_val_28812 === (2))){
var inst_28803 = (state_28811[(2)]);
var inst_28804 = cljs.core.async.timeout.call(null,(400));
var state_28811__$1 = (function (){var statearr_28813 = state_28811;
(statearr_28813[(7)] = inst_28803);

return statearr_28813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28811__$1,(3),inst_28804);
} else {
if((state_val_28812 === (3))){
var inst_28806 = (state_28811[(2)]);
var inst_28807 = figwheel.client.heads_up.clear.call(null);
var state_28811__$1 = (function (){var statearr_28814 = state_28811;
(statearr_28814[(8)] = inst_28806);

return statearr_28814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28811__$1,(4),inst_28807);
} else {
if((state_val_28812 === (4))){
var inst_28809 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28811__$1,inst_28809);
} else {
return null;
}
}
}
}
});})(c__19893__auto__))
;
return ((function (switch__19872__auto__,c__19893__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19873__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19873__auto____0 = (function (){
var statearr_28818 = [null,null,null,null,null,null,null,null,null];
(statearr_28818[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19873__auto__);

(statearr_28818[(1)] = (1));

return statearr_28818;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19873__auto____1 = (function (state_28811){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_28811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e28819){if((e28819 instanceof Object)){
var ex__19876__auto__ = e28819;
var statearr_28820_28822 = state_28811;
(statearr_28820_28822[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28823 = state_28811;
state_28811 = G__28823;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19873__auto__ = function(state_28811){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19873__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19873__auto____1.call(this,state_28811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19873__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19873__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto__))
})();
var state__19895__auto__ = (function (){var statearr_28821 = f__19894__auto__.call(null);
(statearr_28821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto__);

return statearr_28821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto__))
);

return c__19893__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map