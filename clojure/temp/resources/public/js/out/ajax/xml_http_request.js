// Compiled by ClojureScript 1.7.122 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__24675,handler){
var map__24676 = p__24675;
var map__24676__$1 = ((((!((map__24676 == null)))?((((map__24676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24676):map__24676);
var uri = cljs.core.get.call(null,map__24676__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__24676__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__24676__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__24676__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__24676__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__24676__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__24676__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__24676,map__24676__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__24674_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__24674_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__24676,map__24676__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___24684 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___24684)){
var response_type_24685 = temp__4425__auto___24684;
this$__$1.responseType = cljs.core.name.call(null,response_type_24685);
} else {
}

var seq__24678_24686 = cljs.core.seq.call(null,headers);
var chunk__24679_24687 = null;
var count__24680_24688 = (0);
var i__24681_24689 = (0);
while(true){
if((i__24681_24689 < count__24680_24688)){
var vec__24682_24690 = cljs.core._nth.call(null,chunk__24679_24687,i__24681_24689);
var k_24691 = cljs.core.nth.call(null,vec__24682_24690,(0),null);
var v_24692 = cljs.core.nth.call(null,vec__24682_24690,(1),null);
this$__$1.setRequestHeader(k_24691,v_24692);

var G__24693 = seq__24678_24686;
var G__24694 = chunk__24679_24687;
var G__24695 = count__24680_24688;
var G__24696 = (i__24681_24689 + (1));
seq__24678_24686 = G__24693;
chunk__24679_24687 = G__24694;
count__24680_24688 = G__24695;
i__24681_24689 = G__24696;
continue;
} else {
var temp__4425__auto___24697 = cljs.core.seq.call(null,seq__24678_24686);
if(temp__4425__auto___24697){
var seq__24678_24698__$1 = temp__4425__auto___24697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24678_24698__$1)){
var c__17166__auto___24699 = cljs.core.chunk_first.call(null,seq__24678_24698__$1);
var G__24700 = cljs.core.chunk_rest.call(null,seq__24678_24698__$1);
var G__24701 = c__17166__auto___24699;
var G__24702 = cljs.core.count.call(null,c__17166__auto___24699);
var G__24703 = (0);
seq__24678_24686 = G__24700;
chunk__24679_24687 = G__24701;
count__24680_24688 = G__24702;
i__24681_24689 = G__24703;
continue;
} else {
var vec__24683_24704 = cljs.core.first.call(null,seq__24678_24698__$1);
var k_24705 = cljs.core.nth.call(null,vec__24683_24704,(0),null);
var v_24706 = cljs.core.nth.call(null,vec__24683_24704,(1),null);
this$__$1.setRequestHeader(k_24705,v_24706);

var G__24707 = cljs.core.next.call(null,seq__24678_24698__$1);
var G__24708 = null;
var G__24709 = (0);
var G__24710 = (0);
seq__24678_24686 = G__24707;
chunk__24679_24687 = G__24708;
count__24680_24688 = G__24709;
i__24681_24689 = G__24710;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16363__auto__ = body;
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map