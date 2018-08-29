// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async27692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27692 = (function (fn_handler,f,meta27693){
this.fn_handler = fn_handler;
this.f = f;
this.meta27693 = meta27693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27694,meta27693__$1){
var self__ = this;
var _27694__$1 = this;
return (new cljs.core.async.t_cljs$core$async27692(self__.fn_handler,self__.f,meta27693__$1));
});

cljs.core.async.t_cljs$core$async27692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27694){
var self__ = this;
var _27694__$1 = this;
return self__.meta27693;
});

cljs.core.async.t_cljs$core$async27692.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27693","meta27693",411754634,null)], null);
});

cljs.core.async.t_cljs$core$async27692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27692";

cljs.core.async.t_cljs$core$async27692.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cljs.core.async/t_cljs$core$async27692");
});

cljs.core.async.__GT_t_cljs$core$async27692 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async27692(fn_handler__$1,f__$1,meta27693){
return (new cljs.core.async.t_cljs$core$async27692(fn_handler__$1,f__$1,meta27693));
});

}

return (new cljs.core.async.t_cljs$core$async27692(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27697 = [];
var len__17421__auto___27700 = arguments.length;
var i__17422__auto___27701 = (0);
while(true){
if((i__17422__auto___27701 < len__17421__auto___27700)){
args27697.push((arguments[i__17422__auto___27701]));

var G__27702 = (i__17422__auto___27701 + (1));
i__17422__auto___27701 = G__27702;
continue;
} else {
}
break;
}

var G__27699 = args27697.length;
switch (G__27699) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27697.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27704 = [];
var len__17421__auto___27707 = arguments.length;
var i__17422__auto___27708 = (0);
while(true){
if((i__17422__auto___27708 < len__17421__auto___27707)){
args27704.push((arguments[i__17422__auto___27708]));

var G__27709 = (i__17422__auto___27708 + (1));
i__17422__auto___27708 = G__27709;
continue;
} else {
}
break;
}

var G__27706 = args27704.length;
switch (G__27706) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27704.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27711 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27711);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27711,ret){
return (function (){
return fn1.call(null,val_27711);
});})(val_27711,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27712 = [];
var len__17421__auto___27715 = arguments.length;
var i__17422__auto___27716 = (0);
while(true){
if((i__17422__auto___27716 < len__17421__auto___27715)){
args27712.push((arguments[i__17422__auto___27716]));

var G__27717 = (i__17422__auto___27716 + (1));
i__17422__auto___27716 = G__27717;
continue;
} else {
}
break;
}

var G__27714 = args27712.length;
switch (G__27714) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27712.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17266__auto___27719 = n;
var x_27720 = (0);
while(true){
if((x_27720 < n__17266__auto___27719)){
(a[x_27720] = (0));

var G__27721 = (x_27720 + (1));
x_27720 = G__27721;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27722 = (i + (1));
i = G__27722;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27726 = (function (alt_flag,flag,meta27727){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27727 = meta27727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27728,meta27727__$1){
var self__ = this;
var _27728__$1 = this;
return (new cljs.core.async.t_cljs$core$async27726(self__.alt_flag,self__.flag,meta27727__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27728){
var self__ = this;
var _27728__$1 = this;
return self__.meta27727;
});})(flag))
;

cljs.core.async.t_cljs$core$async27726.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27726.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27726.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27726.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27727","meta27727",-992715418,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27726";

cljs.core.async.t_cljs$core$async27726.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cljs.core.async/t_cljs$core$async27726");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27726 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27726(alt_flag__$1,flag__$1,meta27727){
return (new cljs.core.async.t_cljs$core$async27726(alt_flag__$1,flag__$1,meta27727));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27726(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27732 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27732 = (function (alt_handler,flag,cb,meta27733){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27733 = meta27733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27734,meta27733__$1){
var self__ = this;
var _27734__$1 = this;
return (new cljs.core.async.t_cljs$core$async27732(self__.alt_handler,self__.flag,self__.cb,meta27733__$1));
});

cljs.core.async.t_cljs$core$async27732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27734){
var self__ = this;
var _27734__$1 = this;
return self__.meta27733;
});

cljs.core.async.t_cljs$core$async27732.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27733","meta27733",-1670526130,null)], null);
});

cljs.core.async.t_cljs$core$async27732.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27732";

cljs.core.async.t_cljs$core$async27732.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cljs.core.async/t_cljs$core$async27732");
});

cljs.core.async.__GT_t_cljs$core$async27732 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27732(alt_handler__$1,flag__$1,cb__$1,meta27733){
return (new cljs.core.async.t_cljs$core$async27732(alt_handler__$1,flag__$1,cb__$1,meta27733));
});

}

return (new cljs.core.async.t_cljs$core$async27732(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27735_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27735_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27736_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27736_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16363__auto__ = wport;
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27737 = (i + (1));
i = G__27737;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16363__auto__ = ret;
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16351__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16351__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16351__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17428__auto__ = [];
var len__17421__auto___27743 = arguments.length;
var i__17422__auto___27744 = (0);
while(true){
if((i__17422__auto___27744 < len__17421__auto___27743)){
args__17428__auto__.push((arguments[i__17422__auto___27744]));

var G__27745 = (i__17422__auto___27744 + (1));
i__17422__auto___27744 = G__27745;
continue;
} else {
}
break;
}

var argseq__17429__auto__ = ((((1) < args__17428__auto__.length))?(new cljs.core.IndexedSeq(args__17428__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17429__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27740){
var map__27741 = p__27740;
var map__27741__$1 = ((((!((map__27741 == null)))?((((map__27741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27741):map__27741);
var opts = map__27741__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27738){
var G__27739 = cljs.core.first.call(null,seq27738);
var seq27738__$1 = cljs.core.next.call(null,seq27738);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27739,seq27738__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27746 = [];
var len__17421__auto___27796 = arguments.length;
var i__17422__auto___27797 = (0);
while(true){
if((i__17422__auto___27797 < len__17421__auto___27796)){
args27746.push((arguments[i__17422__auto___27797]));

var G__27798 = (i__17422__auto___27797 + (1));
i__17422__auto___27797 = G__27798;
continue;
} else {
}
break;
}

var G__27748 = args27746.length;
switch (G__27748) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27746.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20150__auto___27800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___27800){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___27800){
return (function (state_27772){
var state_val_27773 = (state_27772[(1)]);
if((state_val_27773 === (7))){
var inst_27768 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
var statearr_27774_27801 = state_27772__$1;
(statearr_27774_27801[(2)] = inst_27768);

(statearr_27774_27801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (1))){
var state_27772__$1 = state_27772;
var statearr_27775_27802 = state_27772__$1;
(statearr_27775_27802[(2)] = null);

(statearr_27775_27802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (4))){
var inst_27751 = (state_27772[(7)]);
var inst_27751__$1 = (state_27772[(2)]);
var inst_27752 = (inst_27751__$1 == null);
var state_27772__$1 = (function (){var statearr_27776 = state_27772;
(statearr_27776[(7)] = inst_27751__$1);

return statearr_27776;
})();
if(cljs.core.truth_(inst_27752)){
var statearr_27777_27803 = state_27772__$1;
(statearr_27777_27803[(1)] = (5));

} else {
var statearr_27778_27804 = state_27772__$1;
(statearr_27778_27804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (13))){
var state_27772__$1 = state_27772;
var statearr_27779_27805 = state_27772__$1;
(statearr_27779_27805[(2)] = null);

(statearr_27779_27805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (6))){
var inst_27751 = (state_27772[(7)]);
var state_27772__$1 = state_27772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27772__$1,(11),to,inst_27751);
} else {
if((state_val_27773 === (3))){
var inst_27770 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27772__$1,inst_27770);
} else {
if((state_val_27773 === (12))){
var state_27772__$1 = state_27772;
var statearr_27780_27806 = state_27772__$1;
(statearr_27780_27806[(2)] = null);

(statearr_27780_27806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (2))){
var state_27772__$1 = state_27772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27772__$1,(4),from);
} else {
if((state_val_27773 === (11))){
var inst_27761 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
if(cljs.core.truth_(inst_27761)){
var statearr_27781_27807 = state_27772__$1;
(statearr_27781_27807[(1)] = (12));

} else {
var statearr_27782_27808 = state_27772__$1;
(statearr_27782_27808[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (9))){
var state_27772__$1 = state_27772;
var statearr_27783_27809 = state_27772__$1;
(statearr_27783_27809[(2)] = null);

(statearr_27783_27809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (5))){
var state_27772__$1 = state_27772;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27784_27810 = state_27772__$1;
(statearr_27784_27810[(1)] = (8));

} else {
var statearr_27785_27811 = state_27772__$1;
(statearr_27785_27811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (14))){
var inst_27766 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
var statearr_27786_27812 = state_27772__$1;
(statearr_27786_27812[(2)] = inst_27766);

(statearr_27786_27812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (10))){
var inst_27758 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
var statearr_27787_27813 = state_27772__$1;
(statearr_27787_27813[(2)] = inst_27758);

(statearr_27787_27813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (8))){
var inst_27755 = cljs.core.async.close_BANG_.call(null,to);
var state_27772__$1 = state_27772;
var statearr_27788_27814 = state_27772__$1;
(statearr_27788_27814[(2)] = inst_27755);

(statearr_27788_27814[(1)] = (10));


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
});})(c__20150__auto___27800))
;
return ((function (switch__20085__auto__,c__20150__auto___27800){
return (function() {
var cljs$core$async$state_machine__20086__auto__ = null;
var cljs$core$async$state_machine__20086__auto____0 = (function (){
var statearr_27792 = [null,null,null,null,null,null,null,null];
(statearr_27792[(0)] = cljs$core$async$state_machine__20086__auto__);

(statearr_27792[(1)] = (1));

return statearr_27792;
});
var cljs$core$async$state_machine__20086__auto____1 = (function (state_27772){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_27772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e27793){if((e27793 instanceof Object)){
var ex__20089__auto__ = e27793;
var statearr_27794_27815 = state_27772;
(statearr_27794_27815[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27816 = state_27772;
state_27772 = G__27816;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$state_machine__20086__auto__ = function(state_27772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20086__auto____1.call(this,state_27772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20086__auto____0;
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20086__auto____1;
return cljs$core$async$state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___27800))
})();
var state__20152__auto__ = (function (){var statearr_27795 = f__20151__auto__.call(null);
(statearr_27795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___27800);

return statearr_27795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___27800))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28000){
var vec__28001 = p__28000;
var v = cljs.core.nth.call(null,vec__28001,(0),null);
var p = cljs.core.nth.call(null,vec__28001,(1),null);
var job = vec__28001;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20150__auto___28183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___28183,res,vec__28001,v,p,job,jobs,results){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___28183,res,vec__28001,v,p,job,jobs,results){
return (function (state_28006){
var state_val_28007 = (state_28006[(1)]);
if((state_val_28007 === (1))){
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28006__$1,(2),res,v);
} else {
if((state_val_28007 === (2))){
var inst_28003 = (state_28006[(2)]);
var inst_28004 = cljs.core.async.close_BANG_.call(null,res);
var state_28006__$1 = (function (){var statearr_28008 = state_28006;
(statearr_28008[(7)] = inst_28003);

return statearr_28008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28006__$1,inst_28004);
} else {
return null;
}
}
});})(c__20150__auto___28183,res,vec__28001,v,p,job,jobs,results))
;
return ((function (switch__20085__auto__,c__20150__auto___28183,res,vec__28001,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0 = (function (){
var statearr_28012 = [null,null,null,null,null,null,null,null];
(statearr_28012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__);

(statearr_28012[(1)] = (1));

return statearr_28012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1 = (function (state_28006){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_28006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e28013){if((e28013 instanceof Object)){
var ex__20089__auto__ = e28013;
var statearr_28014_28184 = state_28006;
(statearr_28014_28184[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28185 = state_28006;
state_28006 = G__28185;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__ = function(state_28006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1.call(this,state_28006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___28183,res,vec__28001,v,p,job,jobs,results))
})();
var state__20152__auto__ = (function (){var statearr_28015 = f__20151__auto__.call(null);
(statearr_28015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___28183);

return statearr_28015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___28183,res,vec__28001,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28016){
var vec__28017 = p__28016;
var v = cljs.core.nth.call(null,vec__28017,(0),null);
var p = cljs.core.nth.call(null,vec__28017,(1),null);
var job = vec__28017;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17266__auto___28186 = n;
var __28187 = (0);
while(true){
if((__28187 < n__17266__auto___28186)){
var G__28018_28188 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28018_28188) {
case "compute":
var c__20150__auto___28190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28187,c__20150__auto___28190,G__28018_28188,n__17266__auto___28186,jobs,results,process,async){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (__28187,c__20150__auto___28190,G__28018_28188,n__17266__auto___28186,jobs,results,process,async){
return (function (state_28031){
var state_val_28032 = (state_28031[(1)]);
if((state_val_28032 === (1))){
var state_28031__$1 = state_28031;
var statearr_28033_28191 = state_28031__$1;
(statearr_28033_28191[(2)] = null);

(statearr_28033_28191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (2))){
var state_28031__$1 = state_28031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28031__$1,(4),jobs);
} else {
if((state_val_28032 === (3))){
var inst_28029 = (state_28031[(2)]);
var state_28031__$1 = state_28031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28031__$1,inst_28029);
} else {
if((state_val_28032 === (4))){
var inst_28021 = (state_28031[(2)]);
var inst_28022 = process.call(null,inst_28021);
var state_28031__$1 = state_28031;
if(cljs.core.truth_(inst_28022)){
var statearr_28034_28192 = state_28031__$1;
(statearr_28034_28192[(1)] = (5));

} else {
var statearr_28035_28193 = state_28031__$1;
(statearr_28035_28193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (5))){
var state_28031__$1 = state_28031;
var statearr_28036_28194 = state_28031__$1;
(statearr_28036_28194[(2)] = null);

(statearr_28036_28194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (6))){
var state_28031__$1 = state_28031;
var statearr_28037_28195 = state_28031__$1;
(statearr_28037_28195[(2)] = null);

(statearr_28037_28195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28032 === (7))){
var inst_28027 = (state_28031[(2)]);
var state_28031__$1 = state_28031;
var statearr_28038_28196 = state_28031__$1;
(statearr_28038_28196[(2)] = inst_28027);

(statearr_28038_28196[(1)] = (3));


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
});})(__28187,c__20150__auto___28190,G__28018_28188,n__17266__auto___28186,jobs,results,process,async))
;
return ((function (__28187,switch__20085__auto__,c__20150__auto___28190,G__28018_28188,n__17266__auto___28186,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0 = (function (){
var statearr_28042 = [null,null,null,null,null,null,null];
(statearr_28042[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__);

(statearr_28042[(1)] = (1));

return statearr_28042;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1 = (function (state_28031){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_28031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e28043){if((e28043 instanceof Object)){
var ex__20089__auto__ = e28043;
var statearr_28044_28197 = state_28031;
(statearr_28044_28197[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28198 = state_28031;
state_28031 = G__28198;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__ = function(state_28031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1.call(this,state_28031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__;
})()
;})(__28187,switch__20085__auto__,c__20150__auto___28190,G__28018_28188,n__17266__auto___28186,jobs,results,process,async))
})();
var state__20152__auto__ = (function (){var statearr_28045 = f__20151__auto__.call(null);
(statearr_28045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___28190);

return statearr_28045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(__28187,c__20150__auto___28190,G__28018_28188,n__17266__auto___28186,jobs,results,process,async))
);


break;
case "async":
var c__20150__auto___28199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28187,c__20150__auto___28199,G__28018_28188,n__17266__auto___28186,jobs,results,process,async){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (__28187,c__20150__auto___28199,G__28018_28188,n__17266__auto___28186,jobs,results,process,async){
return (function (state_28058){
var state_val_28059 = (state_28058[(1)]);
if((state_val_28059 === (1))){
var state_28058__$1 = state_28058;
var statearr_28060_28200 = state_28058__$1;
(statearr_28060_28200[(2)] = null);

(statearr_28060_28200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (2))){
var state_28058__$1 = state_28058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28058__$1,(4),jobs);
} else {
if((state_val_28059 === (3))){
var inst_28056 = (state_28058[(2)]);
var state_28058__$1 = state_28058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28058__$1,inst_28056);
} else {
if((state_val_28059 === (4))){
var inst_28048 = (state_28058[(2)]);
var inst_28049 = async.call(null,inst_28048);
var state_28058__$1 = state_28058;
if(cljs.core.truth_(inst_28049)){
var statearr_28061_28201 = state_28058__$1;
(statearr_28061_28201[(1)] = (5));

} else {
var statearr_28062_28202 = state_28058__$1;
(statearr_28062_28202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (5))){
var state_28058__$1 = state_28058;
var statearr_28063_28203 = state_28058__$1;
(statearr_28063_28203[(2)] = null);

(statearr_28063_28203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (6))){
var state_28058__$1 = state_28058;
var statearr_28064_28204 = state_28058__$1;
(statearr_28064_28204[(2)] = null);

(statearr_28064_28204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (7))){
var inst_28054 = (state_28058[(2)]);
var state_28058__$1 = state_28058;
var statearr_28065_28205 = state_28058__$1;
(statearr_28065_28205[(2)] = inst_28054);

(statearr_28065_28205[(1)] = (3));


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
});})(__28187,c__20150__auto___28199,G__28018_28188,n__17266__auto___28186,jobs,results,process,async))
;
return ((function (__28187,switch__20085__auto__,c__20150__auto___28199,G__28018_28188,n__17266__auto___28186,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0 = (function (){
var statearr_28069 = [null,null,null,null,null,null,null];
(statearr_28069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__);

(statearr_28069[(1)] = (1));

return statearr_28069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1 = (function (state_28058){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_28058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e28070){if((e28070 instanceof Object)){
var ex__20089__auto__ = e28070;
var statearr_28071_28206 = state_28058;
(statearr_28071_28206[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28207 = state_28058;
state_28058 = G__28207;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__ = function(state_28058){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1.call(this,state_28058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__;
})()
;})(__28187,switch__20085__auto__,c__20150__auto___28199,G__28018_28188,n__17266__auto___28186,jobs,results,process,async))
})();
var state__20152__auto__ = (function (){var statearr_28072 = f__20151__auto__.call(null);
(statearr_28072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___28199);

return statearr_28072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(__28187,c__20150__auto___28199,G__28018_28188,n__17266__auto___28186,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28208 = (__28187 + (1));
__28187 = G__28208;
continue;
} else {
}
break;
}

var c__20150__auto___28209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___28209,jobs,results,process,async){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___28209,jobs,results,process,async){
return (function (state_28094){
var state_val_28095 = (state_28094[(1)]);
if((state_val_28095 === (1))){
var state_28094__$1 = state_28094;
var statearr_28096_28210 = state_28094__$1;
(statearr_28096_28210[(2)] = null);

(statearr_28096_28210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (2))){
var state_28094__$1 = state_28094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28094__$1,(4),from);
} else {
if((state_val_28095 === (3))){
var inst_28092 = (state_28094[(2)]);
var state_28094__$1 = state_28094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28094__$1,inst_28092);
} else {
if((state_val_28095 === (4))){
var inst_28075 = (state_28094[(7)]);
var inst_28075__$1 = (state_28094[(2)]);
var inst_28076 = (inst_28075__$1 == null);
var state_28094__$1 = (function (){var statearr_28097 = state_28094;
(statearr_28097[(7)] = inst_28075__$1);

return statearr_28097;
})();
if(cljs.core.truth_(inst_28076)){
var statearr_28098_28211 = state_28094__$1;
(statearr_28098_28211[(1)] = (5));

} else {
var statearr_28099_28212 = state_28094__$1;
(statearr_28099_28212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (5))){
var inst_28078 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28094__$1 = state_28094;
var statearr_28100_28213 = state_28094__$1;
(statearr_28100_28213[(2)] = inst_28078);

(statearr_28100_28213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (6))){
var inst_28080 = (state_28094[(8)]);
var inst_28075 = (state_28094[(7)]);
var inst_28080__$1 = cljs.core.async.chan.call(null,(1));
var inst_28081 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28082 = [inst_28075,inst_28080__$1];
var inst_28083 = (new cljs.core.PersistentVector(null,2,(5),inst_28081,inst_28082,null));
var state_28094__$1 = (function (){var statearr_28101 = state_28094;
(statearr_28101[(8)] = inst_28080__$1);

return statearr_28101;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28094__$1,(8),jobs,inst_28083);
} else {
if((state_val_28095 === (7))){
var inst_28090 = (state_28094[(2)]);
var state_28094__$1 = state_28094;
var statearr_28102_28214 = state_28094__$1;
(statearr_28102_28214[(2)] = inst_28090);

(statearr_28102_28214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (8))){
var inst_28080 = (state_28094[(8)]);
var inst_28085 = (state_28094[(2)]);
var state_28094__$1 = (function (){var statearr_28103 = state_28094;
(statearr_28103[(9)] = inst_28085);

return statearr_28103;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28094__$1,(9),results,inst_28080);
} else {
if((state_val_28095 === (9))){
var inst_28087 = (state_28094[(2)]);
var state_28094__$1 = (function (){var statearr_28104 = state_28094;
(statearr_28104[(10)] = inst_28087);

return statearr_28104;
})();
var statearr_28105_28215 = state_28094__$1;
(statearr_28105_28215[(2)] = null);

(statearr_28105_28215[(1)] = (2));


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
});})(c__20150__auto___28209,jobs,results,process,async))
;
return ((function (switch__20085__auto__,c__20150__auto___28209,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0 = (function (){
var statearr_28109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28109[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__);

(statearr_28109[(1)] = (1));

return statearr_28109;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1 = (function (state_28094){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_28094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e28110){if((e28110 instanceof Object)){
var ex__20089__auto__ = e28110;
var statearr_28111_28216 = state_28094;
(statearr_28111_28216[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28217 = state_28094;
state_28094 = G__28217;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__ = function(state_28094){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1.call(this,state_28094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___28209,jobs,results,process,async))
})();
var state__20152__auto__ = (function (){var statearr_28112 = f__20151__auto__.call(null);
(statearr_28112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___28209);

return statearr_28112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___28209,jobs,results,process,async))
);


var c__20150__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto__,jobs,results,process,async){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto__,jobs,results,process,async){
return (function (state_28150){
var state_val_28151 = (state_28150[(1)]);
if((state_val_28151 === (7))){
var inst_28146 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
var statearr_28152_28218 = state_28150__$1;
(statearr_28152_28218[(2)] = inst_28146);

(statearr_28152_28218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (20))){
var state_28150__$1 = state_28150;
var statearr_28153_28219 = state_28150__$1;
(statearr_28153_28219[(2)] = null);

(statearr_28153_28219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (1))){
var state_28150__$1 = state_28150;
var statearr_28154_28220 = state_28150__$1;
(statearr_28154_28220[(2)] = null);

(statearr_28154_28220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (4))){
var inst_28115 = (state_28150[(7)]);
var inst_28115__$1 = (state_28150[(2)]);
var inst_28116 = (inst_28115__$1 == null);
var state_28150__$1 = (function (){var statearr_28155 = state_28150;
(statearr_28155[(7)] = inst_28115__$1);

return statearr_28155;
})();
if(cljs.core.truth_(inst_28116)){
var statearr_28156_28221 = state_28150__$1;
(statearr_28156_28221[(1)] = (5));

} else {
var statearr_28157_28222 = state_28150__$1;
(statearr_28157_28222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (15))){
var inst_28128 = (state_28150[(8)]);
var state_28150__$1 = state_28150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28150__$1,(18),to,inst_28128);
} else {
if((state_val_28151 === (21))){
var inst_28141 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
var statearr_28158_28223 = state_28150__$1;
(statearr_28158_28223[(2)] = inst_28141);

(statearr_28158_28223[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (13))){
var inst_28143 = (state_28150[(2)]);
var state_28150__$1 = (function (){var statearr_28159 = state_28150;
(statearr_28159[(9)] = inst_28143);

return statearr_28159;
})();
var statearr_28160_28224 = state_28150__$1;
(statearr_28160_28224[(2)] = null);

(statearr_28160_28224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (6))){
var inst_28115 = (state_28150[(7)]);
var state_28150__$1 = state_28150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28150__$1,(11),inst_28115);
} else {
if((state_val_28151 === (17))){
var inst_28136 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
if(cljs.core.truth_(inst_28136)){
var statearr_28161_28225 = state_28150__$1;
(statearr_28161_28225[(1)] = (19));

} else {
var statearr_28162_28226 = state_28150__$1;
(statearr_28162_28226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (3))){
var inst_28148 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28150__$1,inst_28148);
} else {
if((state_val_28151 === (12))){
var inst_28125 = (state_28150[(10)]);
var state_28150__$1 = state_28150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28150__$1,(14),inst_28125);
} else {
if((state_val_28151 === (2))){
var state_28150__$1 = state_28150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28150__$1,(4),results);
} else {
if((state_val_28151 === (19))){
var state_28150__$1 = state_28150;
var statearr_28163_28227 = state_28150__$1;
(statearr_28163_28227[(2)] = null);

(statearr_28163_28227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (11))){
var inst_28125 = (state_28150[(2)]);
var state_28150__$1 = (function (){var statearr_28164 = state_28150;
(statearr_28164[(10)] = inst_28125);

return statearr_28164;
})();
var statearr_28165_28228 = state_28150__$1;
(statearr_28165_28228[(2)] = null);

(statearr_28165_28228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (9))){
var state_28150__$1 = state_28150;
var statearr_28166_28229 = state_28150__$1;
(statearr_28166_28229[(2)] = null);

(statearr_28166_28229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (5))){
var state_28150__$1 = state_28150;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28167_28230 = state_28150__$1;
(statearr_28167_28230[(1)] = (8));

} else {
var statearr_28168_28231 = state_28150__$1;
(statearr_28168_28231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (14))){
var inst_28130 = (state_28150[(11)]);
var inst_28128 = (state_28150[(8)]);
var inst_28128__$1 = (state_28150[(2)]);
var inst_28129 = (inst_28128__$1 == null);
var inst_28130__$1 = cljs.core.not.call(null,inst_28129);
var state_28150__$1 = (function (){var statearr_28169 = state_28150;
(statearr_28169[(11)] = inst_28130__$1);

(statearr_28169[(8)] = inst_28128__$1);

return statearr_28169;
})();
if(inst_28130__$1){
var statearr_28170_28232 = state_28150__$1;
(statearr_28170_28232[(1)] = (15));

} else {
var statearr_28171_28233 = state_28150__$1;
(statearr_28171_28233[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (16))){
var inst_28130 = (state_28150[(11)]);
var state_28150__$1 = state_28150;
var statearr_28172_28234 = state_28150__$1;
(statearr_28172_28234[(2)] = inst_28130);

(statearr_28172_28234[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (10))){
var inst_28122 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
var statearr_28173_28235 = state_28150__$1;
(statearr_28173_28235[(2)] = inst_28122);

(statearr_28173_28235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (18))){
var inst_28133 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
var statearr_28174_28236 = state_28150__$1;
(statearr_28174_28236[(2)] = inst_28133);

(statearr_28174_28236[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (8))){
var inst_28119 = cljs.core.async.close_BANG_.call(null,to);
var state_28150__$1 = state_28150;
var statearr_28175_28237 = state_28150__$1;
(statearr_28175_28237[(2)] = inst_28119);

(statearr_28175_28237[(1)] = (10));


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
});})(c__20150__auto__,jobs,results,process,async))
;
return ((function (switch__20085__auto__,c__20150__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0 = (function (){
var statearr_28179 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__);

(statearr_28179[(1)] = (1));

return statearr_28179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1 = (function (state_28150){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_28150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e28180){if((e28180 instanceof Object)){
var ex__20089__auto__ = e28180;
var statearr_28181_28238 = state_28150;
(statearr_28181_28238[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28239 = state_28150;
state_28150 = G__28239;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__ = function(state_28150){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1.call(this,state_28150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto__,jobs,results,process,async))
})();
var state__20152__auto__ = (function (){var statearr_28182 = f__20151__auto__.call(null);
(statearr_28182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto__);

return statearr_28182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto__,jobs,results,process,async))
);

return c__20150__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28240 = [];
var len__17421__auto___28243 = arguments.length;
var i__17422__auto___28244 = (0);
while(true){
if((i__17422__auto___28244 < len__17421__auto___28243)){
args28240.push((arguments[i__17422__auto___28244]));

var G__28245 = (i__17422__auto___28244 + (1));
i__17422__auto___28244 = G__28245;
continue;
} else {
}
break;
}

var G__28242 = args28240.length;
switch (G__28242) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28240.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28247 = [];
var len__17421__auto___28250 = arguments.length;
var i__17422__auto___28251 = (0);
while(true){
if((i__17422__auto___28251 < len__17421__auto___28250)){
args28247.push((arguments[i__17422__auto___28251]));

var G__28252 = (i__17422__auto___28251 + (1));
i__17422__auto___28251 = G__28252;
continue;
} else {
}
break;
}

var G__28249 = args28247.length;
switch (G__28249) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28247.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28254 = [];
var len__17421__auto___28307 = arguments.length;
var i__17422__auto___28308 = (0);
while(true){
if((i__17422__auto___28308 < len__17421__auto___28307)){
args28254.push((arguments[i__17422__auto___28308]));

var G__28309 = (i__17422__auto___28308 + (1));
i__17422__auto___28308 = G__28309;
continue;
} else {
}
break;
}

var G__28256 = args28254.length;
switch (G__28256) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28254.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20150__auto___28311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___28311,tc,fc){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___28311,tc,fc){
return (function (state_28282){
var state_val_28283 = (state_28282[(1)]);
if((state_val_28283 === (7))){
var inst_28278 = (state_28282[(2)]);
var state_28282__$1 = state_28282;
var statearr_28284_28312 = state_28282__$1;
(statearr_28284_28312[(2)] = inst_28278);

(statearr_28284_28312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28283 === (1))){
var state_28282__$1 = state_28282;
var statearr_28285_28313 = state_28282__$1;
(statearr_28285_28313[(2)] = null);

(statearr_28285_28313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28283 === (4))){
var inst_28259 = (state_28282[(7)]);
var inst_28259__$1 = (state_28282[(2)]);
var inst_28260 = (inst_28259__$1 == null);
var state_28282__$1 = (function (){var statearr_28286 = state_28282;
(statearr_28286[(7)] = inst_28259__$1);

return statearr_28286;
})();
if(cljs.core.truth_(inst_28260)){
var statearr_28287_28314 = state_28282__$1;
(statearr_28287_28314[(1)] = (5));

} else {
var statearr_28288_28315 = state_28282__$1;
(statearr_28288_28315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28283 === (13))){
var state_28282__$1 = state_28282;
var statearr_28289_28316 = state_28282__$1;
(statearr_28289_28316[(2)] = null);

(statearr_28289_28316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28283 === (6))){
var inst_28259 = (state_28282[(7)]);
var inst_28265 = p.call(null,inst_28259);
var state_28282__$1 = state_28282;
if(cljs.core.truth_(inst_28265)){
var statearr_28290_28317 = state_28282__$1;
(statearr_28290_28317[(1)] = (9));

} else {
var statearr_28291_28318 = state_28282__$1;
(statearr_28291_28318[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28283 === (3))){
var inst_28280 = (state_28282[(2)]);
var state_28282__$1 = state_28282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28282__$1,inst_28280);
} else {
if((state_val_28283 === (12))){
var state_28282__$1 = state_28282;
var statearr_28292_28319 = state_28282__$1;
(statearr_28292_28319[(2)] = null);

(statearr_28292_28319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28283 === (2))){
var state_28282__$1 = state_28282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28282__$1,(4),ch);
} else {
if((state_val_28283 === (11))){
var inst_28259 = (state_28282[(7)]);
var inst_28269 = (state_28282[(2)]);
var state_28282__$1 = state_28282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28282__$1,(8),inst_28269,inst_28259);
} else {
if((state_val_28283 === (9))){
var state_28282__$1 = state_28282;
var statearr_28293_28320 = state_28282__$1;
(statearr_28293_28320[(2)] = tc);

(statearr_28293_28320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28283 === (5))){
var inst_28262 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28263 = cljs.core.async.close_BANG_.call(null,fc);
var state_28282__$1 = (function (){var statearr_28294 = state_28282;
(statearr_28294[(8)] = inst_28262);

return statearr_28294;
})();
var statearr_28295_28321 = state_28282__$1;
(statearr_28295_28321[(2)] = inst_28263);

(statearr_28295_28321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28283 === (14))){
var inst_28276 = (state_28282[(2)]);
var state_28282__$1 = state_28282;
var statearr_28296_28322 = state_28282__$1;
(statearr_28296_28322[(2)] = inst_28276);

(statearr_28296_28322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28283 === (10))){
var state_28282__$1 = state_28282;
var statearr_28297_28323 = state_28282__$1;
(statearr_28297_28323[(2)] = fc);

(statearr_28297_28323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28283 === (8))){
var inst_28271 = (state_28282[(2)]);
var state_28282__$1 = state_28282;
if(cljs.core.truth_(inst_28271)){
var statearr_28298_28324 = state_28282__$1;
(statearr_28298_28324[(1)] = (12));

} else {
var statearr_28299_28325 = state_28282__$1;
(statearr_28299_28325[(1)] = (13));

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
});})(c__20150__auto___28311,tc,fc))
;
return ((function (switch__20085__auto__,c__20150__auto___28311,tc,fc){
return (function() {
var cljs$core$async$state_machine__20086__auto__ = null;
var cljs$core$async$state_machine__20086__auto____0 = (function (){
var statearr_28303 = [null,null,null,null,null,null,null,null,null];
(statearr_28303[(0)] = cljs$core$async$state_machine__20086__auto__);

(statearr_28303[(1)] = (1));

return statearr_28303;
});
var cljs$core$async$state_machine__20086__auto____1 = (function (state_28282){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_28282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e28304){if((e28304 instanceof Object)){
var ex__20089__auto__ = e28304;
var statearr_28305_28326 = state_28282;
(statearr_28305_28326[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28327 = state_28282;
state_28282 = G__28327;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$state_machine__20086__auto__ = function(state_28282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20086__auto____1.call(this,state_28282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20086__auto____0;
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20086__auto____1;
return cljs$core$async$state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___28311,tc,fc))
})();
var state__20152__auto__ = (function (){var statearr_28306 = f__20151__auto__.call(null);
(statearr_28306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___28311);

return statearr_28306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___28311,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20150__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto__){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto__){
return (function (state_28374){
var state_val_28375 = (state_28374[(1)]);
if((state_val_28375 === (1))){
var inst_28360 = init;
var state_28374__$1 = (function (){var statearr_28376 = state_28374;
(statearr_28376[(7)] = inst_28360);

return statearr_28376;
})();
var statearr_28377_28392 = state_28374__$1;
(statearr_28377_28392[(2)] = null);

(statearr_28377_28392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28375 === (2))){
var state_28374__$1 = state_28374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28374__$1,(4),ch);
} else {
if((state_val_28375 === (3))){
var inst_28372 = (state_28374[(2)]);
var state_28374__$1 = state_28374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28374__$1,inst_28372);
} else {
if((state_val_28375 === (4))){
var inst_28363 = (state_28374[(8)]);
var inst_28363__$1 = (state_28374[(2)]);
var inst_28364 = (inst_28363__$1 == null);
var state_28374__$1 = (function (){var statearr_28378 = state_28374;
(statearr_28378[(8)] = inst_28363__$1);

return statearr_28378;
})();
if(cljs.core.truth_(inst_28364)){
var statearr_28379_28393 = state_28374__$1;
(statearr_28379_28393[(1)] = (5));

} else {
var statearr_28380_28394 = state_28374__$1;
(statearr_28380_28394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28375 === (5))){
var inst_28360 = (state_28374[(7)]);
var state_28374__$1 = state_28374;
var statearr_28381_28395 = state_28374__$1;
(statearr_28381_28395[(2)] = inst_28360);

(statearr_28381_28395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28375 === (6))){
var inst_28363 = (state_28374[(8)]);
var inst_28360 = (state_28374[(7)]);
var inst_28367 = f.call(null,inst_28360,inst_28363);
var inst_28360__$1 = inst_28367;
var state_28374__$1 = (function (){var statearr_28382 = state_28374;
(statearr_28382[(7)] = inst_28360__$1);

return statearr_28382;
})();
var statearr_28383_28396 = state_28374__$1;
(statearr_28383_28396[(2)] = null);

(statearr_28383_28396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28375 === (7))){
var inst_28370 = (state_28374[(2)]);
var state_28374__$1 = state_28374;
var statearr_28384_28397 = state_28374__$1;
(statearr_28384_28397[(2)] = inst_28370);

(statearr_28384_28397[(1)] = (3));


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
});})(c__20150__auto__))
;
return ((function (switch__20085__auto__,c__20150__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20086__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20086__auto____0 = (function (){
var statearr_28388 = [null,null,null,null,null,null,null,null,null];
(statearr_28388[(0)] = cljs$core$async$reduce_$_state_machine__20086__auto__);

(statearr_28388[(1)] = (1));

return statearr_28388;
});
var cljs$core$async$reduce_$_state_machine__20086__auto____1 = (function (state_28374){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_28374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e28389){if((e28389 instanceof Object)){
var ex__20089__auto__ = e28389;
var statearr_28390_28398 = state_28374;
(statearr_28390_28398[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28399 = state_28374;
state_28374 = G__28399;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20086__auto__ = function(state_28374){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20086__auto____1.call(this,state_28374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20086__auto____0;
cljs$core$async$reduce_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20086__auto____1;
return cljs$core$async$reduce_$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto__))
})();
var state__20152__auto__ = (function (){var statearr_28391 = f__20151__auto__.call(null);
(statearr_28391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto__);

return statearr_28391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto__))
);

return c__20150__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28400 = [];
var len__17421__auto___28452 = arguments.length;
var i__17422__auto___28453 = (0);
while(true){
if((i__17422__auto___28453 < len__17421__auto___28452)){
args28400.push((arguments[i__17422__auto___28453]));

var G__28454 = (i__17422__auto___28453 + (1));
i__17422__auto___28453 = G__28454;
continue;
} else {
}
break;
}

var G__28402 = args28400.length;
switch (G__28402) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28400.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20150__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto__){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto__){
return (function (state_28427){
var state_val_28428 = (state_28427[(1)]);
if((state_val_28428 === (7))){
var inst_28409 = (state_28427[(2)]);
var state_28427__$1 = state_28427;
var statearr_28429_28456 = state_28427__$1;
(statearr_28429_28456[(2)] = inst_28409);

(statearr_28429_28456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (1))){
var inst_28403 = cljs.core.seq.call(null,coll);
var inst_28404 = inst_28403;
var state_28427__$1 = (function (){var statearr_28430 = state_28427;
(statearr_28430[(7)] = inst_28404);

return statearr_28430;
})();
var statearr_28431_28457 = state_28427__$1;
(statearr_28431_28457[(2)] = null);

(statearr_28431_28457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (4))){
var inst_28404 = (state_28427[(7)]);
var inst_28407 = cljs.core.first.call(null,inst_28404);
var state_28427__$1 = state_28427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28427__$1,(7),ch,inst_28407);
} else {
if((state_val_28428 === (13))){
var inst_28421 = (state_28427[(2)]);
var state_28427__$1 = state_28427;
var statearr_28432_28458 = state_28427__$1;
(statearr_28432_28458[(2)] = inst_28421);

(statearr_28432_28458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (6))){
var inst_28412 = (state_28427[(2)]);
var state_28427__$1 = state_28427;
if(cljs.core.truth_(inst_28412)){
var statearr_28433_28459 = state_28427__$1;
(statearr_28433_28459[(1)] = (8));

} else {
var statearr_28434_28460 = state_28427__$1;
(statearr_28434_28460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (3))){
var inst_28425 = (state_28427[(2)]);
var state_28427__$1 = state_28427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28427__$1,inst_28425);
} else {
if((state_val_28428 === (12))){
var state_28427__$1 = state_28427;
var statearr_28435_28461 = state_28427__$1;
(statearr_28435_28461[(2)] = null);

(statearr_28435_28461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (2))){
var inst_28404 = (state_28427[(7)]);
var state_28427__$1 = state_28427;
if(cljs.core.truth_(inst_28404)){
var statearr_28436_28462 = state_28427__$1;
(statearr_28436_28462[(1)] = (4));

} else {
var statearr_28437_28463 = state_28427__$1;
(statearr_28437_28463[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (11))){
var inst_28418 = cljs.core.async.close_BANG_.call(null,ch);
var state_28427__$1 = state_28427;
var statearr_28438_28464 = state_28427__$1;
(statearr_28438_28464[(2)] = inst_28418);

(statearr_28438_28464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (9))){
var state_28427__$1 = state_28427;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28439_28465 = state_28427__$1;
(statearr_28439_28465[(1)] = (11));

} else {
var statearr_28440_28466 = state_28427__$1;
(statearr_28440_28466[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (5))){
var inst_28404 = (state_28427[(7)]);
var state_28427__$1 = state_28427;
var statearr_28441_28467 = state_28427__$1;
(statearr_28441_28467[(2)] = inst_28404);

(statearr_28441_28467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (10))){
var inst_28423 = (state_28427[(2)]);
var state_28427__$1 = state_28427;
var statearr_28442_28468 = state_28427__$1;
(statearr_28442_28468[(2)] = inst_28423);

(statearr_28442_28468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (8))){
var inst_28404 = (state_28427[(7)]);
var inst_28414 = cljs.core.next.call(null,inst_28404);
var inst_28404__$1 = inst_28414;
var state_28427__$1 = (function (){var statearr_28443 = state_28427;
(statearr_28443[(7)] = inst_28404__$1);

return statearr_28443;
})();
var statearr_28444_28469 = state_28427__$1;
(statearr_28444_28469[(2)] = null);

(statearr_28444_28469[(1)] = (2));


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
});})(c__20150__auto__))
;
return ((function (switch__20085__auto__,c__20150__auto__){
return (function() {
var cljs$core$async$state_machine__20086__auto__ = null;
var cljs$core$async$state_machine__20086__auto____0 = (function (){
var statearr_28448 = [null,null,null,null,null,null,null,null];
(statearr_28448[(0)] = cljs$core$async$state_machine__20086__auto__);

(statearr_28448[(1)] = (1));

return statearr_28448;
});
var cljs$core$async$state_machine__20086__auto____1 = (function (state_28427){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_28427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e28449){if((e28449 instanceof Object)){
var ex__20089__auto__ = e28449;
var statearr_28450_28470 = state_28427;
(statearr_28450_28470[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28471 = state_28427;
state_28427 = G__28471;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$state_machine__20086__auto__ = function(state_28427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20086__auto____1.call(this,state_28427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20086__auto____0;
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20086__auto____1;
return cljs$core$async$state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto__))
})();
var state__20152__auto__ = (function (){var statearr_28451 = f__20151__auto__.call(null);
(statearr_28451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto__);

return statearr_28451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto__))
);

return c__20150__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17018__auto__ = (((_ == null))?null:_);
var m__17019__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17018__auto__)]);
if(!((m__17019__auto__ == null))){
return m__17019__auto__.call(null,_);
} else {
var m__17019__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17019__auto____$1 == null))){
return m__17019__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17018__auto__ = (((m == null))?null:m);
var m__17019__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17018__auto__)]);
if(!((m__17019__auto__ == null))){
return m__17019__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17019__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17019__auto____$1 == null))){
return m__17019__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17018__auto__ = (((m == null))?null:m);
var m__17019__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17018__auto__)]);
if(!((m__17019__auto__ == null))){
return m__17019__auto__.call(null,m,ch);
} else {
var m__17019__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17019__auto____$1 == null))){
return m__17019__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17018__auto__ = (((m == null))?null:m);
var m__17019__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17018__auto__)]);
if(!((m__17019__auto__ == null))){
return m__17019__auto__.call(null,m);
} else {
var m__17019__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17019__auto____$1 == null))){
return m__17019__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28693 = (function (mult,ch,cs,meta28694){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28694 = meta28694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28695,meta28694__$1){
var self__ = this;
var _28695__$1 = this;
return (new cljs.core.async.t_cljs$core$async28693(self__.mult,self__.ch,self__.cs,meta28694__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28695){
var self__ = this;
var _28695__$1 = this;
return self__.meta28694;
});})(cs))
;

cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28693.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28693.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28694","meta28694",-767796297,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28693";

cljs.core.async.t_cljs$core$async28693.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cljs.core.async/t_cljs$core$async28693");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28693 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28693(mult__$1,ch__$1,cs__$1,meta28694){
return (new cljs.core.async.t_cljs$core$async28693(mult__$1,ch__$1,cs__$1,meta28694));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28693(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20150__auto___28914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___28914,cs,m,dchan,dctr,done){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___28914,cs,m,dchan,dctr,done){
return (function (state_28826){
var state_val_28827 = (state_28826[(1)]);
if((state_val_28827 === (7))){
var inst_28822 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
var statearr_28828_28915 = state_28826__$1;
(statearr_28828_28915[(2)] = inst_28822);

(statearr_28828_28915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (20))){
var inst_28727 = (state_28826[(7)]);
var inst_28737 = cljs.core.first.call(null,inst_28727);
var inst_28738 = cljs.core.nth.call(null,inst_28737,(0),null);
var inst_28739 = cljs.core.nth.call(null,inst_28737,(1),null);
var state_28826__$1 = (function (){var statearr_28829 = state_28826;
(statearr_28829[(8)] = inst_28738);

return statearr_28829;
})();
if(cljs.core.truth_(inst_28739)){
var statearr_28830_28916 = state_28826__$1;
(statearr_28830_28916[(1)] = (22));

} else {
var statearr_28831_28917 = state_28826__$1;
(statearr_28831_28917[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (27))){
var inst_28769 = (state_28826[(9)]);
var inst_28698 = (state_28826[(10)]);
var inst_28774 = (state_28826[(11)]);
var inst_28767 = (state_28826[(12)]);
var inst_28774__$1 = cljs.core._nth.call(null,inst_28767,inst_28769);
var inst_28775 = cljs.core.async.put_BANG_.call(null,inst_28774__$1,inst_28698,done);
var state_28826__$1 = (function (){var statearr_28832 = state_28826;
(statearr_28832[(11)] = inst_28774__$1);

return statearr_28832;
})();
if(cljs.core.truth_(inst_28775)){
var statearr_28833_28918 = state_28826__$1;
(statearr_28833_28918[(1)] = (30));

} else {
var statearr_28834_28919 = state_28826__$1;
(statearr_28834_28919[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (1))){
var state_28826__$1 = state_28826;
var statearr_28835_28920 = state_28826__$1;
(statearr_28835_28920[(2)] = null);

(statearr_28835_28920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (24))){
var inst_28727 = (state_28826[(7)]);
var inst_28744 = (state_28826[(2)]);
var inst_28745 = cljs.core.next.call(null,inst_28727);
var inst_28707 = inst_28745;
var inst_28708 = null;
var inst_28709 = (0);
var inst_28710 = (0);
var state_28826__$1 = (function (){var statearr_28836 = state_28826;
(statearr_28836[(13)] = inst_28709);

(statearr_28836[(14)] = inst_28707);

(statearr_28836[(15)] = inst_28708);

(statearr_28836[(16)] = inst_28710);

(statearr_28836[(17)] = inst_28744);

return statearr_28836;
})();
var statearr_28837_28921 = state_28826__$1;
(statearr_28837_28921[(2)] = null);

(statearr_28837_28921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (39))){
var state_28826__$1 = state_28826;
var statearr_28841_28922 = state_28826__$1;
(statearr_28841_28922[(2)] = null);

(statearr_28841_28922[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (4))){
var inst_28698 = (state_28826[(10)]);
var inst_28698__$1 = (state_28826[(2)]);
var inst_28699 = (inst_28698__$1 == null);
var state_28826__$1 = (function (){var statearr_28842 = state_28826;
(statearr_28842[(10)] = inst_28698__$1);

return statearr_28842;
})();
if(cljs.core.truth_(inst_28699)){
var statearr_28843_28923 = state_28826__$1;
(statearr_28843_28923[(1)] = (5));

} else {
var statearr_28844_28924 = state_28826__$1;
(statearr_28844_28924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (15))){
var inst_28709 = (state_28826[(13)]);
var inst_28707 = (state_28826[(14)]);
var inst_28708 = (state_28826[(15)]);
var inst_28710 = (state_28826[(16)]);
var inst_28723 = (state_28826[(2)]);
var inst_28724 = (inst_28710 + (1));
var tmp28838 = inst_28709;
var tmp28839 = inst_28707;
var tmp28840 = inst_28708;
var inst_28707__$1 = tmp28839;
var inst_28708__$1 = tmp28840;
var inst_28709__$1 = tmp28838;
var inst_28710__$1 = inst_28724;
var state_28826__$1 = (function (){var statearr_28845 = state_28826;
(statearr_28845[(13)] = inst_28709__$1);

(statearr_28845[(14)] = inst_28707__$1);

(statearr_28845[(18)] = inst_28723);

(statearr_28845[(15)] = inst_28708__$1);

(statearr_28845[(16)] = inst_28710__$1);

return statearr_28845;
})();
var statearr_28846_28925 = state_28826__$1;
(statearr_28846_28925[(2)] = null);

(statearr_28846_28925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (21))){
var inst_28748 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
var statearr_28850_28926 = state_28826__$1;
(statearr_28850_28926[(2)] = inst_28748);

(statearr_28850_28926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (31))){
var inst_28774 = (state_28826[(11)]);
var inst_28778 = done.call(null,null);
var inst_28779 = cljs.core.async.untap_STAR_.call(null,m,inst_28774);
var state_28826__$1 = (function (){var statearr_28851 = state_28826;
(statearr_28851[(19)] = inst_28778);

return statearr_28851;
})();
var statearr_28852_28927 = state_28826__$1;
(statearr_28852_28927[(2)] = inst_28779);

(statearr_28852_28927[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (32))){
var inst_28769 = (state_28826[(9)]);
var inst_28768 = (state_28826[(20)]);
var inst_28766 = (state_28826[(21)]);
var inst_28767 = (state_28826[(12)]);
var inst_28781 = (state_28826[(2)]);
var inst_28782 = (inst_28769 + (1));
var tmp28847 = inst_28768;
var tmp28848 = inst_28766;
var tmp28849 = inst_28767;
var inst_28766__$1 = tmp28848;
var inst_28767__$1 = tmp28849;
var inst_28768__$1 = tmp28847;
var inst_28769__$1 = inst_28782;
var state_28826__$1 = (function (){var statearr_28853 = state_28826;
(statearr_28853[(9)] = inst_28769__$1);

(statearr_28853[(20)] = inst_28768__$1);

(statearr_28853[(21)] = inst_28766__$1);

(statearr_28853[(12)] = inst_28767__$1);

(statearr_28853[(22)] = inst_28781);

return statearr_28853;
})();
var statearr_28854_28928 = state_28826__$1;
(statearr_28854_28928[(2)] = null);

(statearr_28854_28928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (40))){
var inst_28794 = (state_28826[(23)]);
var inst_28798 = done.call(null,null);
var inst_28799 = cljs.core.async.untap_STAR_.call(null,m,inst_28794);
var state_28826__$1 = (function (){var statearr_28855 = state_28826;
(statearr_28855[(24)] = inst_28798);

return statearr_28855;
})();
var statearr_28856_28929 = state_28826__$1;
(statearr_28856_28929[(2)] = inst_28799);

(statearr_28856_28929[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (33))){
var inst_28785 = (state_28826[(25)]);
var inst_28787 = cljs.core.chunked_seq_QMARK_.call(null,inst_28785);
var state_28826__$1 = state_28826;
if(inst_28787){
var statearr_28857_28930 = state_28826__$1;
(statearr_28857_28930[(1)] = (36));

} else {
var statearr_28858_28931 = state_28826__$1;
(statearr_28858_28931[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (13))){
var inst_28717 = (state_28826[(26)]);
var inst_28720 = cljs.core.async.close_BANG_.call(null,inst_28717);
var state_28826__$1 = state_28826;
var statearr_28859_28932 = state_28826__$1;
(statearr_28859_28932[(2)] = inst_28720);

(statearr_28859_28932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (22))){
var inst_28738 = (state_28826[(8)]);
var inst_28741 = cljs.core.async.close_BANG_.call(null,inst_28738);
var state_28826__$1 = state_28826;
var statearr_28860_28933 = state_28826__$1;
(statearr_28860_28933[(2)] = inst_28741);

(statearr_28860_28933[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (36))){
var inst_28785 = (state_28826[(25)]);
var inst_28789 = cljs.core.chunk_first.call(null,inst_28785);
var inst_28790 = cljs.core.chunk_rest.call(null,inst_28785);
var inst_28791 = cljs.core.count.call(null,inst_28789);
var inst_28766 = inst_28790;
var inst_28767 = inst_28789;
var inst_28768 = inst_28791;
var inst_28769 = (0);
var state_28826__$1 = (function (){var statearr_28861 = state_28826;
(statearr_28861[(9)] = inst_28769);

(statearr_28861[(20)] = inst_28768);

(statearr_28861[(21)] = inst_28766);

(statearr_28861[(12)] = inst_28767);

return statearr_28861;
})();
var statearr_28862_28934 = state_28826__$1;
(statearr_28862_28934[(2)] = null);

(statearr_28862_28934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (41))){
var inst_28785 = (state_28826[(25)]);
var inst_28801 = (state_28826[(2)]);
var inst_28802 = cljs.core.next.call(null,inst_28785);
var inst_28766 = inst_28802;
var inst_28767 = null;
var inst_28768 = (0);
var inst_28769 = (0);
var state_28826__$1 = (function (){var statearr_28863 = state_28826;
(statearr_28863[(9)] = inst_28769);

(statearr_28863[(27)] = inst_28801);

(statearr_28863[(20)] = inst_28768);

(statearr_28863[(21)] = inst_28766);

(statearr_28863[(12)] = inst_28767);

return statearr_28863;
})();
var statearr_28864_28935 = state_28826__$1;
(statearr_28864_28935[(2)] = null);

(statearr_28864_28935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (43))){
var state_28826__$1 = state_28826;
var statearr_28865_28936 = state_28826__$1;
(statearr_28865_28936[(2)] = null);

(statearr_28865_28936[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (29))){
var inst_28810 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
var statearr_28866_28937 = state_28826__$1;
(statearr_28866_28937[(2)] = inst_28810);

(statearr_28866_28937[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (44))){
var inst_28819 = (state_28826[(2)]);
var state_28826__$1 = (function (){var statearr_28867 = state_28826;
(statearr_28867[(28)] = inst_28819);

return statearr_28867;
})();
var statearr_28868_28938 = state_28826__$1;
(statearr_28868_28938[(2)] = null);

(statearr_28868_28938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (6))){
var inst_28758 = (state_28826[(29)]);
var inst_28757 = cljs.core.deref.call(null,cs);
var inst_28758__$1 = cljs.core.keys.call(null,inst_28757);
var inst_28759 = cljs.core.count.call(null,inst_28758__$1);
var inst_28760 = cljs.core.reset_BANG_.call(null,dctr,inst_28759);
var inst_28765 = cljs.core.seq.call(null,inst_28758__$1);
var inst_28766 = inst_28765;
var inst_28767 = null;
var inst_28768 = (0);
var inst_28769 = (0);
var state_28826__$1 = (function (){var statearr_28869 = state_28826;
(statearr_28869[(9)] = inst_28769);

(statearr_28869[(20)] = inst_28768);

(statearr_28869[(29)] = inst_28758__$1);

(statearr_28869[(21)] = inst_28766);

(statearr_28869[(12)] = inst_28767);

(statearr_28869[(30)] = inst_28760);

return statearr_28869;
})();
var statearr_28870_28939 = state_28826__$1;
(statearr_28870_28939[(2)] = null);

(statearr_28870_28939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (28))){
var inst_28785 = (state_28826[(25)]);
var inst_28766 = (state_28826[(21)]);
var inst_28785__$1 = cljs.core.seq.call(null,inst_28766);
var state_28826__$1 = (function (){var statearr_28871 = state_28826;
(statearr_28871[(25)] = inst_28785__$1);

return statearr_28871;
})();
if(inst_28785__$1){
var statearr_28872_28940 = state_28826__$1;
(statearr_28872_28940[(1)] = (33));

} else {
var statearr_28873_28941 = state_28826__$1;
(statearr_28873_28941[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (25))){
var inst_28769 = (state_28826[(9)]);
var inst_28768 = (state_28826[(20)]);
var inst_28771 = (inst_28769 < inst_28768);
var inst_28772 = inst_28771;
var state_28826__$1 = state_28826;
if(cljs.core.truth_(inst_28772)){
var statearr_28874_28942 = state_28826__$1;
(statearr_28874_28942[(1)] = (27));

} else {
var statearr_28875_28943 = state_28826__$1;
(statearr_28875_28943[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (34))){
var state_28826__$1 = state_28826;
var statearr_28876_28944 = state_28826__$1;
(statearr_28876_28944[(2)] = null);

(statearr_28876_28944[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (17))){
var state_28826__$1 = state_28826;
var statearr_28877_28945 = state_28826__$1;
(statearr_28877_28945[(2)] = null);

(statearr_28877_28945[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (3))){
var inst_28824 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28826__$1,inst_28824);
} else {
if((state_val_28827 === (12))){
var inst_28753 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
var statearr_28878_28946 = state_28826__$1;
(statearr_28878_28946[(2)] = inst_28753);

(statearr_28878_28946[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (2))){
var state_28826__$1 = state_28826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28826__$1,(4),ch);
} else {
if((state_val_28827 === (23))){
var state_28826__$1 = state_28826;
var statearr_28879_28947 = state_28826__$1;
(statearr_28879_28947[(2)] = null);

(statearr_28879_28947[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (35))){
var inst_28808 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
var statearr_28880_28948 = state_28826__$1;
(statearr_28880_28948[(2)] = inst_28808);

(statearr_28880_28948[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (19))){
var inst_28727 = (state_28826[(7)]);
var inst_28731 = cljs.core.chunk_first.call(null,inst_28727);
var inst_28732 = cljs.core.chunk_rest.call(null,inst_28727);
var inst_28733 = cljs.core.count.call(null,inst_28731);
var inst_28707 = inst_28732;
var inst_28708 = inst_28731;
var inst_28709 = inst_28733;
var inst_28710 = (0);
var state_28826__$1 = (function (){var statearr_28881 = state_28826;
(statearr_28881[(13)] = inst_28709);

(statearr_28881[(14)] = inst_28707);

(statearr_28881[(15)] = inst_28708);

(statearr_28881[(16)] = inst_28710);

return statearr_28881;
})();
var statearr_28882_28949 = state_28826__$1;
(statearr_28882_28949[(2)] = null);

(statearr_28882_28949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (11))){
var inst_28707 = (state_28826[(14)]);
var inst_28727 = (state_28826[(7)]);
var inst_28727__$1 = cljs.core.seq.call(null,inst_28707);
var state_28826__$1 = (function (){var statearr_28883 = state_28826;
(statearr_28883[(7)] = inst_28727__$1);

return statearr_28883;
})();
if(inst_28727__$1){
var statearr_28884_28950 = state_28826__$1;
(statearr_28884_28950[(1)] = (16));

} else {
var statearr_28885_28951 = state_28826__$1;
(statearr_28885_28951[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (9))){
var inst_28755 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
var statearr_28886_28952 = state_28826__$1;
(statearr_28886_28952[(2)] = inst_28755);

(statearr_28886_28952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (5))){
var inst_28705 = cljs.core.deref.call(null,cs);
var inst_28706 = cljs.core.seq.call(null,inst_28705);
var inst_28707 = inst_28706;
var inst_28708 = null;
var inst_28709 = (0);
var inst_28710 = (0);
var state_28826__$1 = (function (){var statearr_28887 = state_28826;
(statearr_28887[(13)] = inst_28709);

(statearr_28887[(14)] = inst_28707);

(statearr_28887[(15)] = inst_28708);

(statearr_28887[(16)] = inst_28710);

return statearr_28887;
})();
var statearr_28888_28953 = state_28826__$1;
(statearr_28888_28953[(2)] = null);

(statearr_28888_28953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (14))){
var state_28826__$1 = state_28826;
var statearr_28889_28954 = state_28826__$1;
(statearr_28889_28954[(2)] = null);

(statearr_28889_28954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (45))){
var inst_28816 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
var statearr_28890_28955 = state_28826__$1;
(statearr_28890_28955[(2)] = inst_28816);

(statearr_28890_28955[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (26))){
var inst_28758 = (state_28826[(29)]);
var inst_28812 = (state_28826[(2)]);
var inst_28813 = cljs.core.seq.call(null,inst_28758);
var state_28826__$1 = (function (){var statearr_28891 = state_28826;
(statearr_28891[(31)] = inst_28812);

return statearr_28891;
})();
if(inst_28813){
var statearr_28892_28956 = state_28826__$1;
(statearr_28892_28956[(1)] = (42));

} else {
var statearr_28893_28957 = state_28826__$1;
(statearr_28893_28957[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (16))){
var inst_28727 = (state_28826[(7)]);
var inst_28729 = cljs.core.chunked_seq_QMARK_.call(null,inst_28727);
var state_28826__$1 = state_28826;
if(inst_28729){
var statearr_28894_28958 = state_28826__$1;
(statearr_28894_28958[(1)] = (19));

} else {
var statearr_28895_28959 = state_28826__$1;
(statearr_28895_28959[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (38))){
var inst_28805 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
var statearr_28896_28960 = state_28826__$1;
(statearr_28896_28960[(2)] = inst_28805);

(statearr_28896_28960[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (30))){
var state_28826__$1 = state_28826;
var statearr_28897_28961 = state_28826__$1;
(statearr_28897_28961[(2)] = null);

(statearr_28897_28961[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (10))){
var inst_28708 = (state_28826[(15)]);
var inst_28710 = (state_28826[(16)]);
var inst_28716 = cljs.core._nth.call(null,inst_28708,inst_28710);
var inst_28717 = cljs.core.nth.call(null,inst_28716,(0),null);
var inst_28718 = cljs.core.nth.call(null,inst_28716,(1),null);
var state_28826__$1 = (function (){var statearr_28898 = state_28826;
(statearr_28898[(26)] = inst_28717);

return statearr_28898;
})();
if(cljs.core.truth_(inst_28718)){
var statearr_28899_28962 = state_28826__$1;
(statearr_28899_28962[(1)] = (13));

} else {
var statearr_28900_28963 = state_28826__$1;
(statearr_28900_28963[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (18))){
var inst_28751 = (state_28826[(2)]);
var state_28826__$1 = state_28826;
var statearr_28901_28964 = state_28826__$1;
(statearr_28901_28964[(2)] = inst_28751);

(statearr_28901_28964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (42))){
var state_28826__$1 = state_28826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28826__$1,(45),dchan);
} else {
if((state_val_28827 === (37))){
var inst_28698 = (state_28826[(10)]);
var inst_28785 = (state_28826[(25)]);
var inst_28794 = (state_28826[(23)]);
var inst_28794__$1 = cljs.core.first.call(null,inst_28785);
var inst_28795 = cljs.core.async.put_BANG_.call(null,inst_28794__$1,inst_28698,done);
var state_28826__$1 = (function (){var statearr_28902 = state_28826;
(statearr_28902[(23)] = inst_28794__$1);

return statearr_28902;
})();
if(cljs.core.truth_(inst_28795)){
var statearr_28903_28965 = state_28826__$1;
(statearr_28903_28965[(1)] = (39));

} else {
var statearr_28904_28966 = state_28826__$1;
(statearr_28904_28966[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28827 === (8))){
var inst_28709 = (state_28826[(13)]);
var inst_28710 = (state_28826[(16)]);
var inst_28712 = (inst_28710 < inst_28709);
var inst_28713 = inst_28712;
var state_28826__$1 = state_28826;
if(cljs.core.truth_(inst_28713)){
var statearr_28905_28967 = state_28826__$1;
(statearr_28905_28967[(1)] = (10));

} else {
var statearr_28906_28968 = state_28826__$1;
(statearr_28906_28968[(1)] = (11));

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
});})(c__20150__auto___28914,cs,m,dchan,dctr,done))
;
return ((function (switch__20085__auto__,c__20150__auto___28914,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20086__auto__ = null;
var cljs$core$async$mult_$_state_machine__20086__auto____0 = (function (){
var statearr_28910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28910[(0)] = cljs$core$async$mult_$_state_machine__20086__auto__);

(statearr_28910[(1)] = (1));

return statearr_28910;
});
var cljs$core$async$mult_$_state_machine__20086__auto____1 = (function (state_28826){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_28826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e28911){if((e28911 instanceof Object)){
var ex__20089__auto__ = e28911;
var statearr_28912_28969 = state_28826;
(statearr_28912_28969[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28970 = state_28826;
state_28826 = G__28970;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20086__auto__ = function(state_28826){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20086__auto____1.call(this,state_28826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20086__auto____0;
cljs$core$async$mult_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20086__auto____1;
return cljs$core$async$mult_$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___28914,cs,m,dchan,dctr,done))
})();
var state__20152__auto__ = (function (){var statearr_28913 = f__20151__auto__.call(null);
(statearr_28913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___28914);

return statearr_28913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___28914,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28971 = [];
var len__17421__auto___28974 = arguments.length;
var i__17422__auto___28975 = (0);
while(true){
if((i__17422__auto___28975 < len__17421__auto___28974)){
args28971.push((arguments[i__17422__auto___28975]));

var G__28976 = (i__17422__auto___28975 + (1));
i__17422__auto___28975 = G__28976;
continue;
} else {
}
break;
}

var G__28973 = args28971.length;
switch (G__28973) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28971.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17018__auto__ = (((m == null))?null:m);
var m__17019__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17018__auto__)]);
if(!((m__17019__auto__ == null))){
return m__17019__auto__.call(null,m,ch);
} else {
var m__17019__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17019__auto____$1 == null))){
return m__17019__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17018__auto__ = (((m == null))?null:m);
var m__17019__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17018__auto__)]);
if(!((m__17019__auto__ == null))){
return m__17019__auto__.call(null,m,ch);
} else {
var m__17019__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17019__auto____$1 == null))){
return m__17019__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17018__auto__ = (((m == null))?null:m);
var m__17019__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17018__auto__)]);
if(!((m__17019__auto__ == null))){
return m__17019__auto__.call(null,m);
} else {
var m__17019__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17019__auto____$1 == null))){
return m__17019__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17018__auto__ = (((m == null))?null:m);
var m__17019__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17018__auto__)]);
if(!((m__17019__auto__ == null))){
return m__17019__auto__.call(null,m,state_map);
} else {
var m__17019__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17019__auto____$1 == null))){
return m__17019__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17018__auto__ = (((m == null))?null:m);
var m__17019__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17018__auto__)]);
if(!((m__17019__auto__ == null))){
return m__17019__auto__.call(null,m,mode);
} else {
var m__17019__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17019__auto____$1 == null))){
return m__17019__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17428__auto__ = [];
var len__17421__auto___28988 = arguments.length;
var i__17422__auto___28989 = (0);
while(true){
if((i__17422__auto___28989 < len__17421__auto___28988)){
args__17428__auto__.push((arguments[i__17422__auto___28989]));

var G__28990 = (i__17422__auto___28989 + (1));
i__17422__auto___28989 = G__28990;
continue;
} else {
}
break;
}

var argseq__17429__auto__ = ((((3) < args__17428__auto__.length))?(new cljs.core.IndexedSeq(args__17428__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17429__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28982){
var map__28983 = p__28982;
var map__28983__$1 = ((((!((map__28983 == null)))?((((map__28983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28983):map__28983);
var opts = map__28983__$1;
var statearr_28985_28991 = state;
(statearr_28985_28991[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28983,map__28983__$1,opts){
return (function (val){
var statearr_28986_28992 = state;
(statearr_28986_28992[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28983,map__28983__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28987_28993 = state;
(statearr_28987_28993[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28978){
var G__28979 = cljs.core.first.call(null,seq28978);
var seq28978__$1 = cljs.core.next.call(null,seq28978);
var G__28980 = cljs.core.first.call(null,seq28978__$1);
var seq28978__$2 = cljs.core.next.call(null,seq28978__$1);
var G__28981 = cljs.core.first.call(null,seq28978__$2);
var seq28978__$3 = cljs.core.next.call(null,seq28978__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28979,G__28980,G__28981,seq28978__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29157 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29158){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29158 = meta29158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29159,meta29158__$1){
var self__ = this;
var _29159__$1 = this;
return (new cljs.core.async.t_cljs$core$async29157(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29158__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29159){
var self__ = this;
var _29159__$1 = this;
return self__.meta29158;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29157.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29157.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29157.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29157.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29157.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29157.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29157.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29157.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29157.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29158","meta29158",1673931184,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29157.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29157";

cljs.core.async.t_cljs$core$async29157.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cljs.core.async/t_cljs$core$async29157");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29157 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29157(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29158){
return (new cljs.core.async.t_cljs$core$async29157(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29158));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29157(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20150__auto___29320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___29320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___29320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29257){
var state_val_29258 = (state_29257[(1)]);
if((state_val_29258 === (7))){
var inst_29175 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
var statearr_29259_29321 = state_29257__$1;
(statearr_29259_29321[(2)] = inst_29175);

(statearr_29259_29321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (20))){
var inst_29187 = (state_29257[(7)]);
var state_29257__$1 = state_29257;
var statearr_29260_29322 = state_29257__$1;
(statearr_29260_29322[(2)] = inst_29187);

(statearr_29260_29322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (27))){
var state_29257__$1 = state_29257;
var statearr_29261_29323 = state_29257__$1;
(statearr_29261_29323[(2)] = null);

(statearr_29261_29323[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (1))){
var inst_29163 = (state_29257[(8)]);
var inst_29163__$1 = calc_state.call(null);
var inst_29165 = (inst_29163__$1 == null);
var inst_29166 = cljs.core.not.call(null,inst_29165);
var state_29257__$1 = (function (){var statearr_29262 = state_29257;
(statearr_29262[(8)] = inst_29163__$1);

return statearr_29262;
})();
if(inst_29166){
var statearr_29263_29324 = state_29257__$1;
(statearr_29263_29324[(1)] = (2));

} else {
var statearr_29264_29325 = state_29257__$1;
(statearr_29264_29325[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (24))){
var inst_29231 = (state_29257[(9)]);
var inst_29217 = (state_29257[(10)]);
var inst_29210 = (state_29257[(11)]);
var inst_29231__$1 = inst_29210.call(null,inst_29217);
var state_29257__$1 = (function (){var statearr_29265 = state_29257;
(statearr_29265[(9)] = inst_29231__$1);

return statearr_29265;
})();
if(cljs.core.truth_(inst_29231__$1)){
var statearr_29266_29326 = state_29257__$1;
(statearr_29266_29326[(1)] = (29));

} else {
var statearr_29267_29327 = state_29257__$1;
(statearr_29267_29327[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (4))){
var inst_29178 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
if(cljs.core.truth_(inst_29178)){
var statearr_29268_29328 = state_29257__$1;
(statearr_29268_29328[(1)] = (8));

} else {
var statearr_29269_29329 = state_29257__$1;
(statearr_29269_29329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (15))){
var inst_29204 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
if(cljs.core.truth_(inst_29204)){
var statearr_29270_29330 = state_29257__$1;
(statearr_29270_29330[(1)] = (19));

} else {
var statearr_29271_29331 = state_29257__$1;
(statearr_29271_29331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (21))){
var inst_29209 = (state_29257[(12)]);
var inst_29209__$1 = (state_29257[(2)]);
var inst_29210 = cljs.core.get.call(null,inst_29209__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29211 = cljs.core.get.call(null,inst_29209__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29212 = cljs.core.get.call(null,inst_29209__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29257__$1 = (function (){var statearr_29272 = state_29257;
(statearr_29272[(13)] = inst_29211);

(statearr_29272[(11)] = inst_29210);

(statearr_29272[(12)] = inst_29209__$1);

return statearr_29272;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29257__$1,(22),inst_29212);
} else {
if((state_val_29258 === (31))){
var inst_29239 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
if(cljs.core.truth_(inst_29239)){
var statearr_29273_29332 = state_29257__$1;
(statearr_29273_29332[(1)] = (32));

} else {
var statearr_29274_29333 = state_29257__$1;
(statearr_29274_29333[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (32))){
var inst_29216 = (state_29257[(14)]);
var state_29257__$1 = state_29257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29257__$1,(35),out,inst_29216);
} else {
if((state_val_29258 === (33))){
var inst_29209 = (state_29257[(12)]);
var inst_29187 = inst_29209;
var state_29257__$1 = (function (){var statearr_29275 = state_29257;
(statearr_29275[(7)] = inst_29187);

return statearr_29275;
})();
var statearr_29276_29334 = state_29257__$1;
(statearr_29276_29334[(2)] = null);

(statearr_29276_29334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (13))){
var inst_29187 = (state_29257[(7)]);
var inst_29194 = inst_29187.cljs$lang$protocol_mask$partition0$;
var inst_29195 = (inst_29194 & (64));
var inst_29196 = inst_29187.cljs$core$ISeq$;
var inst_29197 = (inst_29195) || (inst_29196);
var state_29257__$1 = state_29257;
if(cljs.core.truth_(inst_29197)){
var statearr_29277_29335 = state_29257__$1;
(statearr_29277_29335[(1)] = (16));

} else {
var statearr_29278_29336 = state_29257__$1;
(statearr_29278_29336[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (22))){
var inst_29217 = (state_29257[(10)]);
var inst_29216 = (state_29257[(14)]);
var inst_29215 = (state_29257[(2)]);
var inst_29216__$1 = cljs.core.nth.call(null,inst_29215,(0),null);
var inst_29217__$1 = cljs.core.nth.call(null,inst_29215,(1),null);
var inst_29218 = (inst_29216__$1 == null);
var inst_29219 = cljs.core._EQ_.call(null,inst_29217__$1,change);
var inst_29220 = (inst_29218) || (inst_29219);
var state_29257__$1 = (function (){var statearr_29279 = state_29257;
(statearr_29279[(10)] = inst_29217__$1);

(statearr_29279[(14)] = inst_29216__$1);

return statearr_29279;
})();
if(cljs.core.truth_(inst_29220)){
var statearr_29280_29337 = state_29257__$1;
(statearr_29280_29337[(1)] = (23));

} else {
var statearr_29281_29338 = state_29257__$1;
(statearr_29281_29338[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (36))){
var inst_29209 = (state_29257[(12)]);
var inst_29187 = inst_29209;
var state_29257__$1 = (function (){var statearr_29282 = state_29257;
(statearr_29282[(7)] = inst_29187);

return statearr_29282;
})();
var statearr_29283_29339 = state_29257__$1;
(statearr_29283_29339[(2)] = null);

(statearr_29283_29339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (29))){
var inst_29231 = (state_29257[(9)]);
var state_29257__$1 = state_29257;
var statearr_29284_29340 = state_29257__$1;
(statearr_29284_29340[(2)] = inst_29231);

(statearr_29284_29340[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (6))){
var state_29257__$1 = state_29257;
var statearr_29285_29341 = state_29257__$1;
(statearr_29285_29341[(2)] = false);

(statearr_29285_29341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (28))){
var inst_29227 = (state_29257[(2)]);
var inst_29228 = calc_state.call(null);
var inst_29187 = inst_29228;
var state_29257__$1 = (function (){var statearr_29286 = state_29257;
(statearr_29286[(7)] = inst_29187);

(statearr_29286[(15)] = inst_29227);

return statearr_29286;
})();
var statearr_29287_29342 = state_29257__$1;
(statearr_29287_29342[(2)] = null);

(statearr_29287_29342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (25))){
var inst_29253 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
var statearr_29288_29343 = state_29257__$1;
(statearr_29288_29343[(2)] = inst_29253);

(statearr_29288_29343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (34))){
var inst_29251 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
var statearr_29289_29344 = state_29257__$1;
(statearr_29289_29344[(2)] = inst_29251);

(statearr_29289_29344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (17))){
var state_29257__$1 = state_29257;
var statearr_29290_29345 = state_29257__$1;
(statearr_29290_29345[(2)] = false);

(statearr_29290_29345[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (3))){
var state_29257__$1 = state_29257;
var statearr_29291_29346 = state_29257__$1;
(statearr_29291_29346[(2)] = false);

(statearr_29291_29346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (12))){
var inst_29255 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29257__$1,inst_29255);
} else {
if((state_val_29258 === (2))){
var inst_29163 = (state_29257[(8)]);
var inst_29168 = inst_29163.cljs$lang$protocol_mask$partition0$;
var inst_29169 = (inst_29168 & (64));
var inst_29170 = inst_29163.cljs$core$ISeq$;
var inst_29171 = (inst_29169) || (inst_29170);
var state_29257__$1 = state_29257;
if(cljs.core.truth_(inst_29171)){
var statearr_29292_29347 = state_29257__$1;
(statearr_29292_29347[(1)] = (5));

} else {
var statearr_29293_29348 = state_29257__$1;
(statearr_29293_29348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (23))){
var inst_29216 = (state_29257[(14)]);
var inst_29222 = (inst_29216 == null);
var state_29257__$1 = state_29257;
if(cljs.core.truth_(inst_29222)){
var statearr_29294_29349 = state_29257__$1;
(statearr_29294_29349[(1)] = (26));

} else {
var statearr_29295_29350 = state_29257__$1;
(statearr_29295_29350[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (35))){
var inst_29242 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
if(cljs.core.truth_(inst_29242)){
var statearr_29296_29351 = state_29257__$1;
(statearr_29296_29351[(1)] = (36));

} else {
var statearr_29297_29352 = state_29257__$1;
(statearr_29297_29352[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (19))){
var inst_29187 = (state_29257[(7)]);
var inst_29206 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29187);
var state_29257__$1 = state_29257;
var statearr_29298_29353 = state_29257__$1;
(statearr_29298_29353[(2)] = inst_29206);

(statearr_29298_29353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (11))){
var inst_29187 = (state_29257[(7)]);
var inst_29191 = (inst_29187 == null);
var inst_29192 = cljs.core.not.call(null,inst_29191);
var state_29257__$1 = state_29257;
if(inst_29192){
var statearr_29299_29354 = state_29257__$1;
(statearr_29299_29354[(1)] = (13));

} else {
var statearr_29300_29355 = state_29257__$1;
(statearr_29300_29355[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (9))){
var inst_29163 = (state_29257[(8)]);
var state_29257__$1 = state_29257;
var statearr_29301_29356 = state_29257__$1;
(statearr_29301_29356[(2)] = inst_29163);

(statearr_29301_29356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (5))){
var state_29257__$1 = state_29257;
var statearr_29302_29357 = state_29257__$1;
(statearr_29302_29357[(2)] = true);

(statearr_29302_29357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (14))){
var state_29257__$1 = state_29257;
var statearr_29303_29358 = state_29257__$1;
(statearr_29303_29358[(2)] = false);

(statearr_29303_29358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (26))){
var inst_29217 = (state_29257[(10)]);
var inst_29224 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29217);
var state_29257__$1 = state_29257;
var statearr_29304_29359 = state_29257__$1;
(statearr_29304_29359[(2)] = inst_29224);

(statearr_29304_29359[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (16))){
var state_29257__$1 = state_29257;
var statearr_29305_29360 = state_29257__$1;
(statearr_29305_29360[(2)] = true);

(statearr_29305_29360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (38))){
var inst_29247 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
var statearr_29306_29361 = state_29257__$1;
(statearr_29306_29361[(2)] = inst_29247);

(statearr_29306_29361[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (30))){
var inst_29217 = (state_29257[(10)]);
var inst_29211 = (state_29257[(13)]);
var inst_29210 = (state_29257[(11)]);
var inst_29234 = cljs.core.empty_QMARK_.call(null,inst_29210);
var inst_29235 = inst_29211.call(null,inst_29217);
var inst_29236 = cljs.core.not.call(null,inst_29235);
var inst_29237 = (inst_29234) && (inst_29236);
var state_29257__$1 = state_29257;
var statearr_29307_29362 = state_29257__$1;
(statearr_29307_29362[(2)] = inst_29237);

(statearr_29307_29362[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (10))){
var inst_29163 = (state_29257[(8)]);
var inst_29183 = (state_29257[(2)]);
var inst_29184 = cljs.core.get.call(null,inst_29183,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29185 = cljs.core.get.call(null,inst_29183,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29186 = cljs.core.get.call(null,inst_29183,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29187 = inst_29163;
var state_29257__$1 = (function (){var statearr_29308 = state_29257;
(statearr_29308[(7)] = inst_29187);

(statearr_29308[(16)] = inst_29184);

(statearr_29308[(17)] = inst_29186);

(statearr_29308[(18)] = inst_29185);

return statearr_29308;
})();
var statearr_29309_29363 = state_29257__$1;
(statearr_29309_29363[(2)] = null);

(statearr_29309_29363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (18))){
var inst_29201 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
var statearr_29310_29364 = state_29257__$1;
(statearr_29310_29364[(2)] = inst_29201);

(statearr_29310_29364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (37))){
var state_29257__$1 = state_29257;
var statearr_29311_29365 = state_29257__$1;
(statearr_29311_29365[(2)] = null);

(statearr_29311_29365[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (8))){
var inst_29163 = (state_29257[(8)]);
var inst_29180 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29163);
var state_29257__$1 = state_29257;
var statearr_29312_29366 = state_29257__$1;
(statearr_29312_29366[(2)] = inst_29180);

(statearr_29312_29366[(1)] = (10));


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
});})(c__20150__auto___29320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20085__auto__,c__20150__auto___29320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20086__auto__ = null;
var cljs$core$async$mix_$_state_machine__20086__auto____0 = (function (){
var statearr_29316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29316[(0)] = cljs$core$async$mix_$_state_machine__20086__auto__);

(statearr_29316[(1)] = (1));

return statearr_29316;
});
var cljs$core$async$mix_$_state_machine__20086__auto____1 = (function (state_29257){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_29257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e29317){if((e29317 instanceof Object)){
var ex__20089__auto__ = e29317;
var statearr_29318_29367 = state_29257;
(statearr_29318_29367[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29368 = state_29257;
state_29257 = G__29368;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20086__auto__ = function(state_29257){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20086__auto____1.call(this,state_29257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20086__auto____0;
cljs$core$async$mix_$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20086__auto____1;
return cljs$core$async$mix_$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___29320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20152__auto__ = (function (){var statearr_29319 = f__20151__auto__.call(null);
(statearr_29319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___29320);

return statearr_29319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___29320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17018__auto__ = (((p == null))?null:p);
var m__17019__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17018__auto__)]);
if(!((m__17019__auto__ == null))){
return m__17019__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17019__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17019__auto____$1 == null))){
return m__17019__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17018__auto__ = (((p == null))?null:p);
var m__17019__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17018__auto__)]);
if(!((m__17019__auto__ == null))){
return m__17019__auto__.call(null,p,v,ch);
} else {
var m__17019__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17019__auto____$1 == null))){
return m__17019__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29369 = [];
var len__17421__auto___29372 = arguments.length;
var i__17422__auto___29373 = (0);
while(true){
if((i__17422__auto___29373 < len__17421__auto___29372)){
args29369.push((arguments[i__17422__auto___29373]));

var G__29374 = (i__17422__auto___29373 + (1));
i__17422__auto___29373 = G__29374;
continue;
} else {
}
break;
}

var G__29371 = args29369.length;
switch (G__29371) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29369.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17018__auto__ = (((p == null))?null:p);
var m__17019__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17018__auto__)]);
if(!((m__17019__auto__ == null))){
return m__17019__auto__.call(null,p);
} else {
var m__17019__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17019__auto____$1 == null))){
return m__17019__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17018__auto__ = (((p == null))?null:p);
var m__17019__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17018__auto__)]);
if(!((m__17019__auto__ == null))){
return m__17019__auto__.call(null,p,v);
} else {
var m__17019__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17019__auto____$1 == null))){
return m__17019__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29377 = [];
var len__17421__auto___29502 = arguments.length;
var i__17422__auto___29503 = (0);
while(true){
if((i__17422__auto___29503 < len__17421__auto___29502)){
args29377.push((arguments[i__17422__auto___29503]));

var G__29504 = (i__17422__auto___29503 + (1));
i__17422__auto___29503 = G__29504;
continue;
} else {
}
break;
}

var G__29379 = args29377.length;
switch (G__29379) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29377.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16363__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16363__auto__)){
return or__16363__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16363__auto__,mults){
return (function (p1__29376_SHARP_){
if(cljs.core.truth_(p1__29376_SHARP_.call(null,topic))){
return p1__29376_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29376_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16363__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29380 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29381){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29381 = meta29381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29382,meta29381__$1){
var self__ = this;
var _29382__$1 = this;
return (new cljs.core.async.t_cljs$core$async29380(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29381__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29382){
var self__ = this;
var _29382__$1 = this;
return self__.meta29381;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29380.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29380.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29380.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29380.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29380.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29380.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29380.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29380.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29381","meta29381",601856812,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29380";

cljs.core.async.t_cljs$core$async29380.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cljs.core.async/t_cljs$core$async29380");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29380 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29380(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29381){
return (new cljs.core.async.t_cljs$core$async29380(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29381));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29380(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20150__auto___29506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___29506,mults,ensure_mult,p){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___29506,mults,ensure_mult,p){
return (function (state_29454){
var state_val_29455 = (state_29454[(1)]);
if((state_val_29455 === (7))){
var inst_29450 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
var statearr_29456_29507 = state_29454__$1;
(statearr_29456_29507[(2)] = inst_29450);

(statearr_29456_29507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (20))){
var state_29454__$1 = state_29454;
var statearr_29457_29508 = state_29454__$1;
(statearr_29457_29508[(2)] = null);

(statearr_29457_29508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (1))){
var state_29454__$1 = state_29454;
var statearr_29458_29509 = state_29454__$1;
(statearr_29458_29509[(2)] = null);

(statearr_29458_29509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (24))){
var inst_29433 = (state_29454[(7)]);
var inst_29442 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29433);
var state_29454__$1 = state_29454;
var statearr_29459_29510 = state_29454__$1;
(statearr_29459_29510[(2)] = inst_29442);

(statearr_29459_29510[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (4))){
var inst_29385 = (state_29454[(8)]);
var inst_29385__$1 = (state_29454[(2)]);
var inst_29386 = (inst_29385__$1 == null);
var state_29454__$1 = (function (){var statearr_29460 = state_29454;
(statearr_29460[(8)] = inst_29385__$1);

return statearr_29460;
})();
if(cljs.core.truth_(inst_29386)){
var statearr_29461_29511 = state_29454__$1;
(statearr_29461_29511[(1)] = (5));

} else {
var statearr_29462_29512 = state_29454__$1;
(statearr_29462_29512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (15))){
var inst_29427 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
var statearr_29463_29513 = state_29454__$1;
(statearr_29463_29513[(2)] = inst_29427);

(statearr_29463_29513[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (21))){
var inst_29447 = (state_29454[(2)]);
var state_29454__$1 = (function (){var statearr_29464 = state_29454;
(statearr_29464[(9)] = inst_29447);

return statearr_29464;
})();
var statearr_29465_29514 = state_29454__$1;
(statearr_29465_29514[(2)] = null);

(statearr_29465_29514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (13))){
var inst_29409 = (state_29454[(10)]);
var inst_29411 = cljs.core.chunked_seq_QMARK_.call(null,inst_29409);
var state_29454__$1 = state_29454;
if(inst_29411){
var statearr_29466_29515 = state_29454__$1;
(statearr_29466_29515[(1)] = (16));

} else {
var statearr_29467_29516 = state_29454__$1;
(statearr_29467_29516[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (22))){
var inst_29439 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
if(cljs.core.truth_(inst_29439)){
var statearr_29468_29517 = state_29454__$1;
(statearr_29468_29517[(1)] = (23));

} else {
var statearr_29469_29518 = state_29454__$1;
(statearr_29469_29518[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (6))){
var inst_29433 = (state_29454[(7)]);
var inst_29435 = (state_29454[(11)]);
var inst_29385 = (state_29454[(8)]);
var inst_29433__$1 = topic_fn.call(null,inst_29385);
var inst_29434 = cljs.core.deref.call(null,mults);
var inst_29435__$1 = cljs.core.get.call(null,inst_29434,inst_29433__$1);
var state_29454__$1 = (function (){var statearr_29470 = state_29454;
(statearr_29470[(7)] = inst_29433__$1);

(statearr_29470[(11)] = inst_29435__$1);

return statearr_29470;
})();
if(cljs.core.truth_(inst_29435__$1)){
var statearr_29471_29519 = state_29454__$1;
(statearr_29471_29519[(1)] = (19));

} else {
var statearr_29472_29520 = state_29454__$1;
(statearr_29472_29520[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (25))){
var inst_29444 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
var statearr_29473_29521 = state_29454__$1;
(statearr_29473_29521[(2)] = inst_29444);

(statearr_29473_29521[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (17))){
var inst_29409 = (state_29454[(10)]);
var inst_29418 = cljs.core.first.call(null,inst_29409);
var inst_29419 = cljs.core.async.muxch_STAR_.call(null,inst_29418);
var inst_29420 = cljs.core.async.close_BANG_.call(null,inst_29419);
var inst_29421 = cljs.core.next.call(null,inst_29409);
var inst_29395 = inst_29421;
var inst_29396 = null;
var inst_29397 = (0);
var inst_29398 = (0);
var state_29454__$1 = (function (){var statearr_29474 = state_29454;
(statearr_29474[(12)] = inst_29397);

(statearr_29474[(13)] = inst_29395);

(statearr_29474[(14)] = inst_29398);

(statearr_29474[(15)] = inst_29396);

(statearr_29474[(16)] = inst_29420);

return statearr_29474;
})();
var statearr_29475_29522 = state_29454__$1;
(statearr_29475_29522[(2)] = null);

(statearr_29475_29522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (3))){
var inst_29452 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29454__$1,inst_29452);
} else {
if((state_val_29455 === (12))){
var inst_29429 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
var statearr_29476_29523 = state_29454__$1;
(statearr_29476_29523[(2)] = inst_29429);

(statearr_29476_29523[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (2))){
var state_29454__$1 = state_29454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29454__$1,(4),ch);
} else {
if((state_val_29455 === (23))){
var state_29454__$1 = state_29454;
var statearr_29477_29524 = state_29454__$1;
(statearr_29477_29524[(2)] = null);

(statearr_29477_29524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (19))){
var inst_29435 = (state_29454[(11)]);
var inst_29385 = (state_29454[(8)]);
var inst_29437 = cljs.core.async.muxch_STAR_.call(null,inst_29435);
var state_29454__$1 = state_29454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29454__$1,(22),inst_29437,inst_29385);
} else {
if((state_val_29455 === (11))){
var inst_29395 = (state_29454[(13)]);
var inst_29409 = (state_29454[(10)]);
var inst_29409__$1 = cljs.core.seq.call(null,inst_29395);
var state_29454__$1 = (function (){var statearr_29478 = state_29454;
(statearr_29478[(10)] = inst_29409__$1);

return statearr_29478;
})();
if(inst_29409__$1){
var statearr_29479_29525 = state_29454__$1;
(statearr_29479_29525[(1)] = (13));

} else {
var statearr_29480_29526 = state_29454__$1;
(statearr_29480_29526[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (9))){
var inst_29431 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
var statearr_29481_29527 = state_29454__$1;
(statearr_29481_29527[(2)] = inst_29431);

(statearr_29481_29527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (5))){
var inst_29392 = cljs.core.deref.call(null,mults);
var inst_29393 = cljs.core.vals.call(null,inst_29392);
var inst_29394 = cljs.core.seq.call(null,inst_29393);
var inst_29395 = inst_29394;
var inst_29396 = null;
var inst_29397 = (0);
var inst_29398 = (0);
var state_29454__$1 = (function (){var statearr_29482 = state_29454;
(statearr_29482[(12)] = inst_29397);

(statearr_29482[(13)] = inst_29395);

(statearr_29482[(14)] = inst_29398);

(statearr_29482[(15)] = inst_29396);

return statearr_29482;
})();
var statearr_29483_29528 = state_29454__$1;
(statearr_29483_29528[(2)] = null);

(statearr_29483_29528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (14))){
var state_29454__$1 = state_29454;
var statearr_29487_29529 = state_29454__$1;
(statearr_29487_29529[(2)] = null);

(statearr_29487_29529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (16))){
var inst_29409 = (state_29454[(10)]);
var inst_29413 = cljs.core.chunk_first.call(null,inst_29409);
var inst_29414 = cljs.core.chunk_rest.call(null,inst_29409);
var inst_29415 = cljs.core.count.call(null,inst_29413);
var inst_29395 = inst_29414;
var inst_29396 = inst_29413;
var inst_29397 = inst_29415;
var inst_29398 = (0);
var state_29454__$1 = (function (){var statearr_29488 = state_29454;
(statearr_29488[(12)] = inst_29397);

(statearr_29488[(13)] = inst_29395);

(statearr_29488[(14)] = inst_29398);

(statearr_29488[(15)] = inst_29396);

return statearr_29488;
})();
var statearr_29489_29530 = state_29454__$1;
(statearr_29489_29530[(2)] = null);

(statearr_29489_29530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (10))){
var inst_29397 = (state_29454[(12)]);
var inst_29395 = (state_29454[(13)]);
var inst_29398 = (state_29454[(14)]);
var inst_29396 = (state_29454[(15)]);
var inst_29403 = cljs.core._nth.call(null,inst_29396,inst_29398);
var inst_29404 = cljs.core.async.muxch_STAR_.call(null,inst_29403);
var inst_29405 = cljs.core.async.close_BANG_.call(null,inst_29404);
var inst_29406 = (inst_29398 + (1));
var tmp29484 = inst_29397;
var tmp29485 = inst_29395;
var tmp29486 = inst_29396;
var inst_29395__$1 = tmp29485;
var inst_29396__$1 = tmp29486;
var inst_29397__$1 = tmp29484;
var inst_29398__$1 = inst_29406;
var state_29454__$1 = (function (){var statearr_29490 = state_29454;
(statearr_29490[(12)] = inst_29397__$1);

(statearr_29490[(13)] = inst_29395__$1);

(statearr_29490[(14)] = inst_29398__$1);

(statearr_29490[(15)] = inst_29396__$1);

(statearr_29490[(17)] = inst_29405);

return statearr_29490;
})();
var statearr_29491_29531 = state_29454__$1;
(statearr_29491_29531[(2)] = null);

(statearr_29491_29531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (18))){
var inst_29424 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
var statearr_29492_29532 = state_29454__$1;
(statearr_29492_29532[(2)] = inst_29424);

(statearr_29492_29532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (8))){
var inst_29397 = (state_29454[(12)]);
var inst_29398 = (state_29454[(14)]);
var inst_29400 = (inst_29398 < inst_29397);
var inst_29401 = inst_29400;
var state_29454__$1 = state_29454;
if(cljs.core.truth_(inst_29401)){
var statearr_29493_29533 = state_29454__$1;
(statearr_29493_29533[(1)] = (10));

} else {
var statearr_29494_29534 = state_29454__$1;
(statearr_29494_29534[(1)] = (11));

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
});})(c__20150__auto___29506,mults,ensure_mult,p))
;
return ((function (switch__20085__auto__,c__20150__auto___29506,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20086__auto__ = null;
var cljs$core$async$state_machine__20086__auto____0 = (function (){
var statearr_29498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29498[(0)] = cljs$core$async$state_machine__20086__auto__);

(statearr_29498[(1)] = (1));

return statearr_29498;
});
var cljs$core$async$state_machine__20086__auto____1 = (function (state_29454){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_29454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e29499){if((e29499 instanceof Object)){
var ex__20089__auto__ = e29499;
var statearr_29500_29535 = state_29454;
(statearr_29500_29535[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29536 = state_29454;
state_29454 = G__29536;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$state_machine__20086__auto__ = function(state_29454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20086__auto____1.call(this,state_29454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20086__auto____0;
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20086__auto____1;
return cljs$core$async$state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___29506,mults,ensure_mult,p))
})();
var state__20152__auto__ = (function (){var statearr_29501 = f__20151__auto__.call(null);
(statearr_29501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___29506);

return statearr_29501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___29506,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29537 = [];
var len__17421__auto___29540 = arguments.length;
var i__17422__auto___29541 = (0);
while(true){
if((i__17422__auto___29541 < len__17421__auto___29540)){
args29537.push((arguments[i__17422__auto___29541]));

var G__29542 = (i__17422__auto___29541 + (1));
i__17422__auto___29541 = G__29542;
continue;
} else {
}
break;
}

var G__29539 = args29537.length;
switch (G__29539) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29537.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29544 = [];
var len__17421__auto___29547 = arguments.length;
var i__17422__auto___29548 = (0);
while(true){
if((i__17422__auto___29548 < len__17421__auto___29547)){
args29544.push((arguments[i__17422__auto___29548]));

var G__29549 = (i__17422__auto___29548 + (1));
i__17422__auto___29548 = G__29549;
continue;
} else {
}
break;
}

var G__29546 = args29544.length;
switch (G__29546) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29544.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29551 = [];
var len__17421__auto___29622 = arguments.length;
var i__17422__auto___29623 = (0);
while(true){
if((i__17422__auto___29623 < len__17421__auto___29622)){
args29551.push((arguments[i__17422__auto___29623]));

var G__29624 = (i__17422__auto___29623 + (1));
i__17422__auto___29623 = G__29624;
continue;
} else {
}
break;
}

var G__29553 = args29551.length;
switch (G__29553) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29551.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20150__auto___29626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___29626,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___29626,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29592){
var state_val_29593 = (state_29592[(1)]);
if((state_val_29593 === (7))){
var state_29592__$1 = state_29592;
var statearr_29594_29627 = state_29592__$1;
(statearr_29594_29627[(2)] = null);

(statearr_29594_29627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (1))){
var state_29592__$1 = state_29592;
var statearr_29595_29628 = state_29592__$1;
(statearr_29595_29628[(2)] = null);

(statearr_29595_29628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (4))){
var inst_29556 = (state_29592[(7)]);
var inst_29558 = (inst_29556 < cnt);
var state_29592__$1 = state_29592;
if(cljs.core.truth_(inst_29558)){
var statearr_29596_29629 = state_29592__$1;
(statearr_29596_29629[(1)] = (6));

} else {
var statearr_29597_29630 = state_29592__$1;
(statearr_29597_29630[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (15))){
var inst_29588 = (state_29592[(2)]);
var state_29592__$1 = state_29592;
var statearr_29598_29631 = state_29592__$1;
(statearr_29598_29631[(2)] = inst_29588);

(statearr_29598_29631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (13))){
var inst_29581 = cljs.core.async.close_BANG_.call(null,out);
var state_29592__$1 = state_29592;
var statearr_29599_29632 = state_29592__$1;
(statearr_29599_29632[(2)] = inst_29581);

(statearr_29599_29632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (6))){
var state_29592__$1 = state_29592;
var statearr_29600_29633 = state_29592__$1;
(statearr_29600_29633[(2)] = null);

(statearr_29600_29633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (3))){
var inst_29590 = (state_29592[(2)]);
var state_29592__$1 = state_29592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29592__$1,inst_29590);
} else {
if((state_val_29593 === (12))){
var inst_29578 = (state_29592[(8)]);
var inst_29578__$1 = (state_29592[(2)]);
var inst_29579 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29578__$1);
var state_29592__$1 = (function (){var statearr_29601 = state_29592;
(statearr_29601[(8)] = inst_29578__$1);

return statearr_29601;
})();
if(cljs.core.truth_(inst_29579)){
var statearr_29602_29634 = state_29592__$1;
(statearr_29602_29634[(1)] = (13));

} else {
var statearr_29603_29635 = state_29592__$1;
(statearr_29603_29635[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (2))){
var inst_29555 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29556 = (0);
var state_29592__$1 = (function (){var statearr_29604 = state_29592;
(statearr_29604[(7)] = inst_29556);

(statearr_29604[(9)] = inst_29555);

return statearr_29604;
})();
var statearr_29605_29636 = state_29592__$1;
(statearr_29605_29636[(2)] = null);

(statearr_29605_29636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (11))){
var inst_29556 = (state_29592[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29592,(10),Object,null,(9));
var inst_29565 = chs__$1.call(null,inst_29556);
var inst_29566 = done.call(null,inst_29556);
var inst_29567 = cljs.core.async.take_BANG_.call(null,inst_29565,inst_29566);
var state_29592__$1 = state_29592;
var statearr_29606_29637 = state_29592__$1;
(statearr_29606_29637[(2)] = inst_29567);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29592__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (9))){
var inst_29556 = (state_29592[(7)]);
var inst_29569 = (state_29592[(2)]);
var inst_29570 = (inst_29556 + (1));
var inst_29556__$1 = inst_29570;
var state_29592__$1 = (function (){var statearr_29607 = state_29592;
(statearr_29607[(7)] = inst_29556__$1);

(statearr_29607[(10)] = inst_29569);

return statearr_29607;
})();
var statearr_29608_29638 = state_29592__$1;
(statearr_29608_29638[(2)] = null);

(statearr_29608_29638[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (5))){
var inst_29576 = (state_29592[(2)]);
var state_29592__$1 = (function (){var statearr_29609 = state_29592;
(statearr_29609[(11)] = inst_29576);

return statearr_29609;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29592__$1,(12),dchan);
} else {
if((state_val_29593 === (14))){
var inst_29578 = (state_29592[(8)]);
var inst_29583 = cljs.core.apply.call(null,f,inst_29578);
var state_29592__$1 = state_29592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29592__$1,(16),out,inst_29583);
} else {
if((state_val_29593 === (16))){
var inst_29585 = (state_29592[(2)]);
var state_29592__$1 = (function (){var statearr_29610 = state_29592;
(statearr_29610[(12)] = inst_29585);

return statearr_29610;
})();
var statearr_29611_29639 = state_29592__$1;
(statearr_29611_29639[(2)] = null);

(statearr_29611_29639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (10))){
var inst_29560 = (state_29592[(2)]);
var inst_29561 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29592__$1 = (function (){var statearr_29612 = state_29592;
(statearr_29612[(13)] = inst_29560);

return statearr_29612;
})();
var statearr_29613_29640 = state_29592__$1;
(statearr_29613_29640[(2)] = inst_29561);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29592__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (8))){
var inst_29574 = (state_29592[(2)]);
var state_29592__$1 = state_29592;
var statearr_29614_29641 = state_29592__$1;
(statearr_29614_29641[(2)] = inst_29574);

(statearr_29614_29641[(1)] = (5));


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
});})(c__20150__auto___29626,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20085__auto__,c__20150__auto___29626,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20086__auto__ = null;
var cljs$core$async$state_machine__20086__auto____0 = (function (){
var statearr_29618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29618[(0)] = cljs$core$async$state_machine__20086__auto__);

(statearr_29618[(1)] = (1));

return statearr_29618;
});
var cljs$core$async$state_machine__20086__auto____1 = (function (state_29592){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_29592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e29619){if((e29619 instanceof Object)){
var ex__20089__auto__ = e29619;
var statearr_29620_29642 = state_29592;
(statearr_29620_29642[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29643 = state_29592;
state_29592 = G__29643;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$state_machine__20086__auto__ = function(state_29592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20086__auto____1.call(this,state_29592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20086__auto____0;
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20086__auto____1;
return cljs$core$async$state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___29626,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20152__auto__ = (function (){var statearr_29621 = f__20151__auto__.call(null);
(statearr_29621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___29626);

return statearr_29621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___29626,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29645 = [];
var len__17421__auto___29701 = arguments.length;
var i__17422__auto___29702 = (0);
while(true){
if((i__17422__auto___29702 < len__17421__auto___29701)){
args29645.push((arguments[i__17422__auto___29702]));

var G__29703 = (i__17422__auto___29702 + (1));
i__17422__auto___29702 = G__29703;
continue;
} else {
}
break;
}

var G__29647 = args29645.length;
switch (G__29647) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29645.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20150__auto___29705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___29705,out){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___29705,out){
return (function (state_29677){
var state_val_29678 = (state_29677[(1)]);
if((state_val_29678 === (7))){
var inst_29657 = (state_29677[(7)]);
var inst_29656 = (state_29677[(8)]);
var inst_29656__$1 = (state_29677[(2)]);
var inst_29657__$1 = cljs.core.nth.call(null,inst_29656__$1,(0),null);
var inst_29658 = cljs.core.nth.call(null,inst_29656__$1,(1),null);
var inst_29659 = (inst_29657__$1 == null);
var state_29677__$1 = (function (){var statearr_29679 = state_29677;
(statearr_29679[(7)] = inst_29657__$1);

(statearr_29679[(8)] = inst_29656__$1);

(statearr_29679[(9)] = inst_29658);

return statearr_29679;
})();
if(cljs.core.truth_(inst_29659)){
var statearr_29680_29706 = state_29677__$1;
(statearr_29680_29706[(1)] = (8));

} else {
var statearr_29681_29707 = state_29677__$1;
(statearr_29681_29707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (1))){
var inst_29648 = cljs.core.vec.call(null,chs);
var inst_29649 = inst_29648;
var state_29677__$1 = (function (){var statearr_29682 = state_29677;
(statearr_29682[(10)] = inst_29649);

return statearr_29682;
})();
var statearr_29683_29708 = state_29677__$1;
(statearr_29683_29708[(2)] = null);

(statearr_29683_29708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (4))){
var inst_29649 = (state_29677[(10)]);
var state_29677__$1 = state_29677;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29677__$1,(7),inst_29649);
} else {
if((state_val_29678 === (6))){
var inst_29673 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
var statearr_29684_29709 = state_29677__$1;
(statearr_29684_29709[(2)] = inst_29673);

(statearr_29684_29709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (3))){
var inst_29675 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29677__$1,inst_29675);
} else {
if((state_val_29678 === (2))){
var inst_29649 = (state_29677[(10)]);
var inst_29651 = cljs.core.count.call(null,inst_29649);
var inst_29652 = (inst_29651 > (0));
var state_29677__$1 = state_29677;
if(cljs.core.truth_(inst_29652)){
var statearr_29686_29710 = state_29677__$1;
(statearr_29686_29710[(1)] = (4));

} else {
var statearr_29687_29711 = state_29677__$1;
(statearr_29687_29711[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (11))){
var inst_29649 = (state_29677[(10)]);
var inst_29666 = (state_29677[(2)]);
var tmp29685 = inst_29649;
var inst_29649__$1 = tmp29685;
var state_29677__$1 = (function (){var statearr_29688 = state_29677;
(statearr_29688[(10)] = inst_29649__$1);

(statearr_29688[(11)] = inst_29666);

return statearr_29688;
})();
var statearr_29689_29712 = state_29677__$1;
(statearr_29689_29712[(2)] = null);

(statearr_29689_29712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (9))){
var inst_29657 = (state_29677[(7)]);
var state_29677__$1 = state_29677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29677__$1,(11),out,inst_29657);
} else {
if((state_val_29678 === (5))){
var inst_29671 = cljs.core.async.close_BANG_.call(null,out);
var state_29677__$1 = state_29677;
var statearr_29690_29713 = state_29677__$1;
(statearr_29690_29713[(2)] = inst_29671);

(statearr_29690_29713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (10))){
var inst_29669 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
var statearr_29691_29714 = state_29677__$1;
(statearr_29691_29714[(2)] = inst_29669);

(statearr_29691_29714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (8))){
var inst_29649 = (state_29677[(10)]);
var inst_29657 = (state_29677[(7)]);
var inst_29656 = (state_29677[(8)]);
var inst_29658 = (state_29677[(9)]);
var inst_29661 = (function (){var cs = inst_29649;
var vec__29654 = inst_29656;
var v = inst_29657;
var c = inst_29658;
return ((function (cs,vec__29654,v,c,inst_29649,inst_29657,inst_29656,inst_29658,state_val_29678,c__20150__auto___29705,out){
return (function (p1__29644_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29644_SHARP_);
});
;})(cs,vec__29654,v,c,inst_29649,inst_29657,inst_29656,inst_29658,state_val_29678,c__20150__auto___29705,out))
})();
var inst_29662 = cljs.core.filterv.call(null,inst_29661,inst_29649);
var inst_29649__$1 = inst_29662;
var state_29677__$1 = (function (){var statearr_29692 = state_29677;
(statearr_29692[(10)] = inst_29649__$1);

return statearr_29692;
})();
var statearr_29693_29715 = state_29677__$1;
(statearr_29693_29715[(2)] = null);

(statearr_29693_29715[(1)] = (2));


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
});})(c__20150__auto___29705,out))
;
return ((function (switch__20085__auto__,c__20150__auto___29705,out){
return (function() {
var cljs$core$async$state_machine__20086__auto__ = null;
var cljs$core$async$state_machine__20086__auto____0 = (function (){
var statearr_29697 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29697[(0)] = cljs$core$async$state_machine__20086__auto__);

(statearr_29697[(1)] = (1));

return statearr_29697;
});
var cljs$core$async$state_machine__20086__auto____1 = (function (state_29677){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_29677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e29698){if((e29698 instanceof Object)){
var ex__20089__auto__ = e29698;
var statearr_29699_29716 = state_29677;
(statearr_29699_29716[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29717 = state_29677;
state_29677 = G__29717;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$state_machine__20086__auto__ = function(state_29677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20086__auto____1.call(this,state_29677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20086__auto____0;
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20086__auto____1;
return cljs$core$async$state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___29705,out))
})();
var state__20152__auto__ = (function (){var statearr_29700 = f__20151__auto__.call(null);
(statearr_29700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___29705);

return statearr_29700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___29705,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29718 = [];
var len__17421__auto___29767 = arguments.length;
var i__17422__auto___29768 = (0);
while(true){
if((i__17422__auto___29768 < len__17421__auto___29767)){
args29718.push((arguments[i__17422__auto___29768]));

var G__29769 = (i__17422__auto___29768 + (1));
i__17422__auto___29768 = G__29769;
continue;
} else {
}
break;
}

var G__29720 = args29718.length;
switch (G__29720) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29718.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20150__auto___29771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___29771,out){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___29771,out){
return (function (state_29744){
var state_val_29745 = (state_29744[(1)]);
if((state_val_29745 === (7))){
var inst_29726 = (state_29744[(7)]);
var inst_29726__$1 = (state_29744[(2)]);
var inst_29727 = (inst_29726__$1 == null);
var inst_29728 = cljs.core.not.call(null,inst_29727);
var state_29744__$1 = (function (){var statearr_29746 = state_29744;
(statearr_29746[(7)] = inst_29726__$1);

return statearr_29746;
})();
if(inst_29728){
var statearr_29747_29772 = state_29744__$1;
(statearr_29747_29772[(1)] = (8));

} else {
var statearr_29748_29773 = state_29744__$1;
(statearr_29748_29773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (1))){
var inst_29721 = (0);
var state_29744__$1 = (function (){var statearr_29749 = state_29744;
(statearr_29749[(8)] = inst_29721);

return statearr_29749;
})();
var statearr_29750_29774 = state_29744__$1;
(statearr_29750_29774[(2)] = null);

(statearr_29750_29774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (4))){
var state_29744__$1 = state_29744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29744__$1,(7),ch);
} else {
if((state_val_29745 === (6))){
var inst_29739 = (state_29744[(2)]);
var state_29744__$1 = state_29744;
var statearr_29751_29775 = state_29744__$1;
(statearr_29751_29775[(2)] = inst_29739);

(statearr_29751_29775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (3))){
var inst_29741 = (state_29744[(2)]);
var inst_29742 = cljs.core.async.close_BANG_.call(null,out);
var state_29744__$1 = (function (){var statearr_29752 = state_29744;
(statearr_29752[(9)] = inst_29741);

return statearr_29752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29744__$1,inst_29742);
} else {
if((state_val_29745 === (2))){
var inst_29721 = (state_29744[(8)]);
var inst_29723 = (inst_29721 < n);
var state_29744__$1 = state_29744;
if(cljs.core.truth_(inst_29723)){
var statearr_29753_29776 = state_29744__$1;
(statearr_29753_29776[(1)] = (4));

} else {
var statearr_29754_29777 = state_29744__$1;
(statearr_29754_29777[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (11))){
var inst_29721 = (state_29744[(8)]);
var inst_29731 = (state_29744[(2)]);
var inst_29732 = (inst_29721 + (1));
var inst_29721__$1 = inst_29732;
var state_29744__$1 = (function (){var statearr_29755 = state_29744;
(statearr_29755[(8)] = inst_29721__$1);

(statearr_29755[(10)] = inst_29731);

return statearr_29755;
})();
var statearr_29756_29778 = state_29744__$1;
(statearr_29756_29778[(2)] = null);

(statearr_29756_29778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (9))){
var state_29744__$1 = state_29744;
var statearr_29757_29779 = state_29744__$1;
(statearr_29757_29779[(2)] = null);

(statearr_29757_29779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (5))){
var state_29744__$1 = state_29744;
var statearr_29758_29780 = state_29744__$1;
(statearr_29758_29780[(2)] = null);

(statearr_29758_29780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (10))){
var inst_29736 = (state_29744[(2)]);
var state_29744__$1 = state_29744;
var statearr_29759_29781 = state_29744__$1;
(statearr_29759_29781[(2)] = inst_29736);

(statearr_29759_29781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (8))){
var inst_29726 = (state_29744[(7)]);
var state_29744__$1 = state_29744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29744__$1,(11),out,inst_29726);
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
});})(c__20150__auto___29771,out))
;
return ((function (switch__20085__auto__,c__20150__auto___29771,out){
return (function() {
var cljs$core$async$state_machine__20086__auto__ = null;
var cljs$core$async$state_machine__20086__auto____0 = (function (){
var statearr_29763 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29763[(0)] = cljs$core$async$state_machine__20086__auto__);

(statearr_29763[(1)] = (1));

return statearr_29763;
});
var cljs$core$async$state_machine__20086__auto____1 = (function (state_29744){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_29744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e29764){if((e29764 instanceof Object)){
var ex__20089__auto__ = e29764;
var statearr_29765_29782 = state_29744;
(statearr_29765_29782[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29783 = state_29744;
state_29744 = G__29783;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$state_machine__20086__auto__ = function(state_29744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20086__auto____1.call(this,state_29744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20086__auto____0;
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20086__auto____1;
return cljs$core$async$state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___29771,out))
})();
var state__20152__auto__ = (function (){var statearr_29766 = f__20151__auto__.call(null);
(statearr_29766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___29771);

return statearr_29766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___29771,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29791 = (function (map_LT_,f,ch,meta29792){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29792 = meta29792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29793,meta29792__$1){
var self__ = this;
var _29793__$1 = this;
return (new cljs.core.async.t_cljs$core$async29791(self__.map_LT_,self__.f,self__.ch,meta29792__$1));
});

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29793){
var self__ = this;
var _29793__$1 = this;
return self__.meta29792;
});

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29794 = (function (map_LT_,f,ch,meta29792,_,fn1,meta29795){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29792 = meta29792;
this._ = _;
this.fn1 = fn1;
this.meta29795 = meta29795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29796,meta29795__$1){
var self__ = this;
var _29796__$1 = this;
return (new cljs.core.async.t_cljs$core$async29794(self__.map_LT_,self__.f,self__.ch,self__.meta29792,self__._,self__.fn1,meta29795__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29796){
var self__ = this;
var _29796__$1 = this;
return self__.meta29795;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29784_SHARP_){
return f1.call(null,(((p1__29784_SHARP_ == null))?null:self__.f.call(null,p1__29784_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29794.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29792","meta29792",674200748,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29791","cljs.core.async/t_cljs$core$async29791",-610657026,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29795","meta29795",1377045973,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29794";

cljs.core.async.t_cljs$core$async29794.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cljs.core.async/t_cljs$core$async29794");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29794 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29794(map_LT___$1,f__$1,ch__$1,meta29792__$1,___$2,fn1__$1,meta29795){
return (new cljs.core.async.t_cljs$core$async29794(map_LT___$1,f__$1,ch__$1,meta29792__$1,___$2,fn1__$1,meta29795));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29794(self__.map_LT_,self__.f,self__.ch,self__.meta29792,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16351__auto__ = ret;
if(cljs.core.truth_(and__16351__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16351__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29792","meta29792",674200748,null)], null);
});

cljs.core.async.t_cljs$core$async29791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29791";

cljs.core.async.t_cljs$core$async29791.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cljs.core.async/t_cljs$core$async29791");
});

cljs.core.async.__GT_t_cljs$core$async29791 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29791(map_LT___$1,f__$1,ch__$1,meta29792){
return (new cljs.core.async.t_cljs$core$async29791(map_LT___$1,f__$1,ch__$1,meta29792));
});

}

return (new cljs.core.async.t_cljs$core$async29791(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29800 = (function (map_GT_,f,ch,meta29801){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29801 = meta29801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29802,meta29801__$1){
var self__ = this;
var _29802__$1 = this;
return (new cljs.core.async.t_cljs$core$async29800(self__.map_GT_,self__.f,self__.ch,meta29801__$1));
});

cljs.core.async.t_cljs$core$async29800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29802){
var self__ = this;
var _29802__$1 = this;
return self__.meta29801;
});

cljs.core.async.t_cljs$core$async29800.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29800.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29800.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29801","meta29801",746811564,null)], null);
});

cljs.core.async.t_cljs$core$async29800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29800";

cljs.core.async.t_cljs$core$async29800.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cljs.core.async/t_cljs$core$async29800");
});

cljs.core.async.__GT_t_cljs$core$async29800 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29800(map_GT___$1,f__$1,ch__$1,meta29801){
return (new cljs.core.async.t_cljs$core$async29800(map_GT___$1,f__$1,ch__$1,meta29801));
});

}

return (new cljs.core.async.t_cljs$core$async29800(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29806 = (function (filter_GT_,p,ch,meta29807){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29807 = meta29807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29808,meta29807__$1){
var self__ = this;
var _29808__$1 = this;
return (new cljs.core.async.t_cljs$core$async29806(self__.filter_GT_,self__.p,self__.ch,meta29807__$1));
});

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29808){
var self__ = this;
var _29808__$1 = this;
return self__.meta29807;
});

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29806.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29807","meta29807",2068052358,null)], null);
});

cljs.core.async.t_cljs$core$async29806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29806";

cljs.core.async.t_cljs$core$async29806.cljs$lang$ctorPrWriter = (function (this__16961__auto__,writer__16962__auto__,opt__16963__auto__){
return cljs.core._write.call(null,writer__16962__auto__,"cljs.core.async/t_cljs$core$async29806");
});

cljs.core.async.__GT_t_cljs$core$async29806 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29806(filter_GT___$1,p__$1,ch__$1,meta29807){
return (new cljs.core.async.t_cljs$core$async29806(filter_GT___$1,p__$1,ch__$1,meta29807));
});

}

return (new cljs.core.async.t_cljs$core$async29806(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29809 = [];
var len__17421__auto___29853 = arguments.length;
var i__17422__auto___29854 = (0);
while(true){
if((i__17422__auto___29854 < len__17421__auto___29853)){
args29809.push((arguments[i__17422__auto___29854]));

var G__29855 = (i__17422__auto___29854 + (1));
i__17422__auto___29854 = G__29855;
continue;
} else {
}
break;
}

var G__29811 = args29809.length;
switch (G__29811) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29809.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20150__auto___29857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___29857,out){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___29857,out){
return (function (state_29832){
var state_val_29833 = (state_29832[(1)]);
if((state_val_29833 === (7))){
var inst_29828 = (state_29832[(2)]);
var state_29832__$1 = state_29832;
var statearr_29834_29858 = state_29832__$1;
(statearr_29834_29858[(2)] = inst_29828);

(statearr_29834_29858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (1))){
var state_29832__$1 = state_29832;
var statearr_29835_29859 = state_29832__$1;
(statearr_29835_29859[(2)] = null);

(statearr_29835_29859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (4))){
var inst_29814 = (state_29832[(7)]);
var inst_29814__$1 = (state_29832[(2)]);
var inst_29815 = (inst_29814__$1 == null);
var state_29832__$1 = (function (){var statearr_29836 = state_29832;
(statearr_29836[(7)] = inst_29814__$1);

return statearr_29836;
})();
if(cljs.core.truth_(inst_29815)){
var statearr_29837_29860 = state_29832__$1;
(statearr_29837_29860[(1)] = (5));

} else {
var statearr_29838_29861 = state_29832__$1;
(statearr_29838_29861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (6))){
var inst_29814 = (state_29832[(7)]);
var inst_29819 = p.call(null,inst_29814);
var state_29832__$1 = state_29832;
if(cljs.core.truth_(inst_29819)){
var statearr_29839_29862 = state_29832__$1;
(statearr_29839_29862[(1)] = (8));

} else {
var statearr_29840_29863 = state_29832__$1;
(statearr_29840_29863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (3))){
var inst_29830 = (state_29832[(2)]);
var state_29832__$1 = state_29832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29832__$1,inst_29830);
} else {
if((state_val_29833 === (2))){
var state_29832__$1 = state_29832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29832__$1,(4),ch);
} else {
if((state_val_29833 === (11))){
var inst_29822 = (state_29832[(2)]);
var state_29832__$1 = state_29832;
var statearr_29841_29864 = state_29832__$1;
(statearr_29841_29864[(2)] = inst_29822);

(statearr_29841_29864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (9))){
var state_29832__$1 = state_29832;
var statearr_29842_29865 = state_29832__$1;
(statearr_29842_29865[(2)] = null);

(statearr_29842_29865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (5))){
var inst_29817 = cljs.core.async.close_BANG_.call(null,out);
var state_29832__$1 = state_29832;
var statearr_29843_29866 = state_29832__$1;
(statearr_29843_29866[(2)] = inst_29817);

(statearr_29843_29866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (10))){
var inst_29825 = (state_29832[(2)]);
var state_29832__$1 = (function (){var statearr_29844 = state_29832;
(statearr_29844[(8)] = inst_29825);

return statearr_29844;
})();
var statearr_29845_29867 = state_29832__$1;
(statearr_29845_29867[(2)] = null);

(statearr_29845_29867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29833 === (8))){
var inst_29814 = (state_29832[(7)]);
var state_29832__$1 = state_29832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29832__$1,(11),out,inst_29814);
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
});})(c__20150__auto___29857,out))
;
return ((function (switch__20085__auto__,c__20150__auto___29857,out){
return (function() {
var cljs$core$async$state_machine__20086__auto__ = null;
var cljs$core$async$state_machine__20086__auto____0 = (function (){
var statearr_29849 = [null,null,null,null,null,null,null,null,null];
(statearr_29849[(0)] = cljs$core$async$state_machine__20086__auto__);

(statearr_29849[(1)] = (1));

return statearr_29849;
});
var cljs$core$async$state_machine__20086__auto____1 = (function (state_29832){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_29832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e29850){if((e29850 instanceof Object)){
var ex__20089__auto__ = e29850;
var statearr_29851_29868 = state_29832;
(statearr_29851_29868[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29869 = state_29832;
state_29832 = G__29869;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$state_machine__20086__auto__ = function(state_29832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20086__auto____1.call(this,state_29832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20086__auto____0;
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20086__auto____1;
return cljs$core$async$state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___29857,out))
})();
var state__20152__auto__ = (function (){var statearr_29852 = f__20151__auto__.call(null);
(statearr_29852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___29857);

return statearr_29852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___29857,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29870 = [];
var len__17421__auto___29873 = arguments.length;
var i__17422__auto___29874 = (0);
while(true){
if((i__17422__auto___29874 < len__17421__auto___29873)){
args29870.push((arguments[i__17422__auto___29874]));

var G__29875 = (i__17422__auto___29874 + (1));
i__17422__auto___29874 = G__29875;
continue;
} else {
}
break;
}

var G__29872 = args29870.length;
switch (G__29872) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29870.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20150__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto__){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto__){
return (function (state_30042){
var state_val_30043 = (state_30042[(1)]);
if((state_val_30043 === (7))){
var inst_30038 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
var statearr_30044_30085 = state_30042__$1;
(statearr_30044_30085[(2)] = inst_30038);

(statearr_30044_30085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (20))){
var inst_30008 = (state_30042[(7)]);
var inst_30019 = (state_30042[(2)]);
var inst_30020 = cljs.core.next.call(null,inst_30008);
var inst_29994 = inst_30020;
var inst_29995 = null;
var inst_29996 = (0);
var inst_29997 = (0);
var state_30042__$1 = (function (){var statearr_30045 = state_30042;
(statearr_30045[(8)] = inst_29994);

(statearr_30045[(9)] = inst_29996);

(statearr_30045[(10)] = inst_29995);

(statearr_30045[(11)] = inst_29997);

(statearr_30045[(12)] = inst_30019);

return statearr_30045;
})();
var statearr_30046_30086 = state_30042__$1;
(statearr_30046_30086[(2)] = null);

(statearr_30046_30086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (1))){
var state_30042__$1 = state_30042;
var statearr_30047_30087 = state_30042__$1;
(statearr_30047_30087[(2)] = null);

(statearr_30047_30087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (4))){
var inst_29983 = (state_30042[(13)]);
var inst_29983__$1 = (state_30042[(2)]);
var inst_29984 = (inst_29983__$1 == null);
var state_30042__$1 = (function (){var statearr_30048 = state_30042;
(statearr_30048[(13)] = inst_29983__$1);

return statearr_30048;
})();
if(cljs.core.truth_(inst_29984)){
var statearr_30049_30088 = state_30042__$1;
(statearr_30049_30088[(1)] = (5));

} else {
var statearr_30050_30089 = state_30042__$1;
(statearr_30050_30089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (15))){
var state_30042__$1 = state_30042;
var statearr_30054_30090 = state_30042__$1;
(statearr_30054_30090[(2)] = null);

(statearr_30054_30090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (21))){
var state_30042__$1 = state_30042;
var statearr_30055_30091 = state_30042__$1;
(statearr_30055_30091[(2)] = null);

(statearr_30055_30091[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (13))){
var inst_29994 = (state_30042[(8)]);
var inst_29996 = (state_30042[(9)]);
var inst_29995 = (state_30042[(10)]);
var inst_29997 = (state_30042[(11)]);
var inst_30004 = (state_30042[(2)]);
var inst_30005 = (inst_29997 + (1));
var tmp30051 = inst_29994;
var tmp30052 = inst_29996;
var tmp30053 = inst_29995;
var inst_29994__$1 = tmp30051;
var inst_29995__$1 = tmp30053;
var inst_29996__$1 = tmp30052;
var inst_29997__$1 = inst_30005;
var state_30042__$1 = (function (){var statearr_30056 = state_30042;
(statearr_30056[(8)] = inst_29994__$1);

(statearr_30056[(14)] = inst_30004);

(statearr_30056[(9)] = inst_29996__$1);

(statearr_30056[(10)] = inst_29995__$1);

(statearr_30056[(11)] = inst_29997__$1);

return statearr_30056;
})();
var statearr_30057_30092 = state_30042__$1;
(statearr_30057_30092[(2)] = null);

(statearr_30057_30092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (22))){
var state_30042__$1 = state_30042;
var statearr_30058_30093 = state_30042__$1;
(statearr_30058_30093[(2)] = null);

(statearr_30058_30093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (6))){
var inst_29983 = (state_30042[(13)]);
var inst_29992 = f.call(null,inst_29983);
var inst_29993 = cljs.core.seq.call(null,inst_29992);
var inst_29994 = inst_29993;
var inst_29995 = null;
var inst_29996 = (0);
var inst_29997 = (0);
var state_30042__$1 = (function (){var statearr_30059 = state_30042;
(statearr_30059[(8)] = inst_29994);

(statearr_30059[(9)] = inst_29996);

(statearr_30059[(10)] = inst_29995);

(statearr_30059[(11)] = inst_29997);

return statearr_30059;
})();
var statearr_30060_30094 = state_30042__$1;
(statearr_30060_30094[(2)] = null);

(statearr_30060_30094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (17))){
var inst_30008 = (state_30042[(7)]);
var inst_30012 = cljs.core.chunk_first.call(null,inst_30008);
var inst_30013 = cljs.core.chunk_rest.call(null,inst_30008);
var inst_30014 = cljs.core.count.call(null,inst_30012);
var inst_29994 = inst_30013;
var inst_29995 = inst_30012;
var inst_29996 = inst_30014;
var inst_29997 = (0);
var state_30042__$1 = (function (){var statearr_30061 = state_30042;
(statearr_30061[(8)] = inst_29994);

(statearr_30061[(9)] = inst_29996);

(statearr_30061[(10)] = inst_29995);

(statearr_30061[(11)] = inst_29997);

return statearr_30061;
})();
var statearr_30062_30095 = state_30042__$1;
(statearr_30062_30095[(2)] = null);

(statearr_30062_30095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (3))){
var inst_30040 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30042__$1,inst_30040);
} else {
if((state_val_30043 === (12))){
var inst_30028 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
var statearr_30063_30096 = state_30042__$1;
(statearr_30063_30096[(2)] = inst_30028);

(statearr_30063_30096[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (2))){
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30042__$1,(4),in$);
} else {
if((state_val_30043 === (23))){
var inst_30036 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
var statearr_30064_30097 = state_30042__$1;
(statearr_30064_30097[(2)] = inst_30036);

(statearr_30064_30097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (19))){
var inst_30023 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
var statearr_30065_30098 = state_30042__$1;
(statearr_30065_30098[(2)] = inst_30023);

(statearr_30065_30098[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (11))){
var inst_29994 = (state_30042[(8)]);
var inst_30008 = (state_30042[(7)]);
var inst_30008__$1 = cljs.core.seq.call(null,inst_29994);
var state_30042__$1 = (function (){var statearr_30066 = state_30042;
(statearr_30066[(7)] = inst_30008__$1);

return statearr_30066;
})();
if(inst_30008__$1){
var statearr_30067_30099 = state_30042__$1;
(statearr_30067_30099[(1)] = (14));

} else {
var statearr_30068_30100 = state_30042__$1;
(statearr_30068_30100[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (9))){
var inst_30030 = (state_30042[(2)]);
var inst_30031 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30042__$1 = (function (){var statearr_30069 = state_30042;
(statearr_30069[(15)] = inst_30030);

return statearr_30069;
})();
if(cljs.core.truth_(inst_30031)){
var statearr_30070_30101 = state_30042__$1;
(statearr_30070_30101[(1)] = (21));

} else {
var statearr_30071_30102 = state_30042__$1;
(statearr_30071_30102[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (5))){
var inst_29986 = cljs.core.async.close_BANG_.call(null,out);
var state_30042__$1 = state_30042;
var statearr_30072_30103 = state_30042__$1;
(statearr_30072_30103[(2)] = inst_29986);

(statearr_30072_30103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (14))){
var inst_30008 = (state_30042[(7)]);
var inst_30010 = cljs.core.chunked_seq_QMARK_.call(null,inst_30008);
var state_30042__$1 = state_30042;
if(inst_30010){
var statearr_30073_30104 = state_30042__$1;
(statearr_30073_30104[(1)] = (17));

} else {
var statearr_30074_30105 = state_30042__$1;
(statearr_30074_30105[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (16))){
var inst_30026 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
var statearr_30075_30106 = state_30042__$1;
(statearr_30075_30106[(2)] = inst_30026);

(statearr_30075_30106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (10))){
var inst_29995 = (state_30042[(10)]);
var inst_29997 = (state_30042[(11)]);
var inst_30002 = cljs.core._nth.call(null,inst_29995,inst_29997);
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30042__$1,(13),out,inst_30002);
} else {
if((state_val_30043 === (18))){
var inst_30008 = (state_30042[(7)]);
var inst_30017 = cljs.core.first.call(null,inst_30008);
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30042__$1,(20),out,inst_30017);
} else {
if((state_val_30043 === (8))){
var inst_29996 = (state_30042[(9)]);
var inst_29997 = (state_30042[(11)]);
var inst_29999 = (inst_29997 < inst_29996);
var inst_30000 = inst_29999;
var state_30042__$1 = state_30042;
if(cljs.core.truth_(inst_30000)){
var statearr_30076_30107 = state_30042__$1;
(statearr_30076_30107[(1)] = (10));

} else {
var statearr_30077_30108 = state_30042__$1;
(statearr_30077_30108[(1)] = (11));

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
});})(c__20150__auto__))
;
return ((function (switch__20085__auto__,c__20150__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20086__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20086__auto____0 = (function (){
var statearr_30081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30081[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20086__auto__);

(statearr_30081[(1)] = (1));

return statearr_30081;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20086__auto____1 = (function (state_30042){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_30042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e30082){if((e30082 instanceof Object)){
var ex__20089__auto__ = e30082;
var statearr_30083_30109 = state_30042;
(statearr_30083_30109[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30110 = state_30042;
state_30042 = G__30110;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20086__auto__ = function(state_30042){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20086__auto____1.call(this,state_30042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20086__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20086__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto__))
})();
var state__20152__auto__ = (function (){var statearr_30084 = f__20151__auto__.call(null);
(statearr_30084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto__);

return statearr_30084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto__))
);

return c__20150__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30111 = [];
var len__17421__auto___30114 = arguments.length;
var i__17422__auto___30115 = (0);
while(true){
if((i__17422__auto___30115 < len__17421__auto___30114)){
args30111.push((arguments[i__17422__auto___30115]));

var G__30116 = (i__17422__auto___30115 + (1));
i__17422__auto___30115 = G__30116;
continue;
} else {
}
break;
}

var G__30113 = args30111.length;
switch (G__30113) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30111.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30118 = [];
var len__17421__auto___30121 = arguments.length;
var i__17422__auto___30122 = (0);
while(true){
if((i__17422__auto___30122 < len__17421__auto___30121)){
args30118.push((arguments[i__17422__auto___30122]));

var G__30123 = (i__17422__auto___30122 + (1));
i__17422__auto___30122 = G__30123;
continue;
} else {
}
break;
}

var G__30120 = args30118.length;
switch (G__30120) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30118.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30125 = [];
var len__17421__auto___30176 = arguments.length;
var i__17422__auto___30177 = (0);
while(true){
if((i__17422__auto___30177 < len__17421__auto___30176)){
args30125.push((arguments[i__17422__auto___30177]));

var G__30178 = (i__17422__auto___30177 + (1));
i__17422__auto___30177 = G__30178;
continue;
} else {
}
break;
}

var G__30127 = args30125.length;
switch (G__30127) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30125.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20150__auto___30180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___30180,out){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___30180,out){
return (function (state_30151){
var state_val_30152 = (state_30151[(1)]);
if((state_val_30152 === (7))){
var inst_30146 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30153_30181 = state_30151__$1;
(statearr_30153_30181[(2)] = inst_30146);

(statearr_30153_30181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (1))){
var inst_30128 = null;
var state_30151__$1 = (function (){var statearr_30154 = state_30151;
(statearr_30154[(7)] = inst_30128);

return statearr_30154;
})();
var statearr_30155_30182 = state_30151__$1;
(statearr_30155_30182[(2)] = null);

(statearr_30155_30182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (4))){
var inst_30131 = (state_30151[(8)]);
var inst_30131__$1 = (state_30151[(2)]);
var inst_30132 = (inst_30131__$1 == null);
var inst_30133 = cljs.core.not.call(null,inst_30132);
var state_30151__$1 = (function (){var statearr_30156 = state_30151;
(statearr_30156[(8)] = inst_30131__$1);

return statearr_30156;
})();
if(inst_30133){
var statearr_30157_30183 = state_30151__$1;
(statearr_30157_30183[(1)] = (5));

} else {
var statearr_30158_30184 = state_30151__$1;
(statearr_30158_30184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (6))){
var state_30151__$1 = state_30151;
var statearr_30159_30185 = state_30151__$1;
(statearr_30159_30185[(2)] = null);

(statearr_30159_30185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (3))){
var inst_30148 = (state_30151[(2)]);
var inst_30149 = cljs.core.async.close_BANG_.call(null,out);
var state_30151__$1 = (function (){var statearr_30160 = state_30151;
(statearr_30160[(9)] = inst_30148);

return statearr_30160;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30151__$1,inst_30149);
} else {
if((state_val_30152 === (2))){
var state_30151__$1 = state_30151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30151__$1,(4),ch);
} else {
if((state_val_30152 === (11))){
var inst_30131 = (state_30151[(8)]);
var inst_30140 = (state_30151[(2)]);
var inst_30128 = inst_30131;
var state_30151__$1 = (function (){var statearr_30161 = state_30151;
(statearr_30161[(7)] = inst_30128);

(statearr_30161[(10)] = inst_30140);

return statearr_30161;
})();
var statearr_30162_30186 = state_30151__$1;
(statearr_30162_30186[(2)] = null);

(statearr_30162_30186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (9))){
var inst_30131 = (state_30151[(8)]);
var state_30151__$1 = state_30151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30151__$1,(11),out,inst_30131);
} else {
if((state_val_30152 === (5))){
var inst_30128 = (state_30151[(7)]);
var inst_30131 = (state_30151[(8)]);
var inst_30135 = cljs.core._EQ_.call(null,inst_30131,inst_30128);
var state_30151__$1 = state_30151;
if(inst_30135){
var statearr_30164_30187 = state_30151__$1;
(statearr_30164_30187[(1)] = (8));

} else {
var statearr_30165_30188 = state_30151__$1;
(statearr_30165_30188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (10))){
var inst_30143 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30166_30189 = state_30151__$1;
(statearr_30166_30189[(2)] = inst_30143);

(statearr_30166_30189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (8))){
var inst_30128 = (state_30151[(7)]);
var tmp30163 = inst_30128;
var inst_30128__$1 = tmp30163;
var state_30151__$1 = (function (){var statearr_30167 = state_30151;
(statearr_30167[(7)] = inst_30128__$1);

return statearr_30167;
})();
var statearr_30168_30190 = state_30151__$1;
(statearr_30168_30190[(2)] = null);

(statearr_30168_30190[(1)] = (2));


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
});})(c__20150__auto___30180,out))
;
return ((function (switch__20085__auto__,c__20150__auto___30180,out){
return (function() {
var cljs$core$async$state_machine__20086__auto__ = null;
var cljs$core$async$state_machine__20086__auto____0 = (function (){
var statearr_30172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30172[(0)] = cljs$core$async$state_machine__20086__auto__);

(statearr_30172[(1)] = (1));

return statearr_30172;
});
var cljs$core$async$state_machine__20086__auto____1 = (function (state_30151){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_30151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e30173){if((e30173 instanceof Object)){
var ex__20089__auto__ = e30173;
var statearr_30174_30191 = state_30151;
(statearr_30174_30191[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30192 = state_30151;
state_30151 = G__30192;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$state_machine__20086__auto__ = function(state_30151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20086__auto____1.call(this,state_30151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20086__auto____0;
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20086__auto____1;
return cljs$core$async$state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___30180,out))
})();
var state__20152__auto__ = (function (){var statearr_30175 = f__20151__auto__.call(null);
(statearr_30175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___30180);

return statearr_30175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___30180,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30193 = [];
var len__17421__auto___30263 = arguments.length;
var i__17422__auto___30264 = (0);
while(true){
if((i__17422__auto___30264 < len__17421__auto___30263)){
args30193.push((arguments[i__17422__auto___30264]));

var G__30265 = (i__17422__auto___30264 + (1));
i__17422__auto___30264 = G__30265;
continue;
} else {
}
break;
}

var G__30195 = args30193.length;
switch (G__30195) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30193.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20150__auto___30267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___30267,out){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___30267,out){
return (function (state_30233){
var state_val_30234 = (state_30233[(1)]);
if((state_val_30234 === (7))){
var inst_30229 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
var statearr_30235_30268 = state_30233__$1;
(statearr_30235_30268[(2)] = inst_30229);

(statearr_30235_30268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (1))){
var inst_30196 = (new Array(n));
var inst_30197 = inst_30196;
var inst_30198 = (0);
var state_30233__$1 = (function (){var statearr_30236 = state_30233;
(statearr_30236[(7)] = inst_30197);

(statearr_30236[(8)] = inst_30198);

return statearr_30236;
})();
var statearr_30237_30269 = state_30233__$1;
(statearr_30237_30269[(2)] = null);

(statearr_30237_30269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (4))){
var inst_30201 = (state_30233[(9)]);
var inst_30201__$1 = (state_30233[(2)]);
var inst_30202 = (inst_30201__$1 == null);
var inst_30203 = cljs.core.not.call(null,inst_30202);
var state_30233__$1 = (function (){var statearr_30238 = state_30233;
(statearr_30238[(9)] = inst_30201__$1);

return statearr_30238;
})();
if(inst_30203){
var statearr_30239_30270 = state_30233__$1;
(statearr_30239_30270[(1)] = (5));

} else {
var statearr_30240_30271 = state_30233__$1;
(statearr_30240_30271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (15))){
var inst_30223 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
var statearr_30241_30272 = state_30233__$1;
(statearr_30241_30272[(2)] = inst_30223);

(statearr_30241_30272[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (13))){
var state_30233__$1 = state_30233;
var statearr_30242_30273 = state_30233__$1;
(statearr_30242_30273[(2)] = null);

(statearr_30242_30273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (6))){
var inst_30198 = (state_30233[(8)]);
var inst_30219 = (inst_30198 > (0));
var state_30233__$1 = state_30233;
if(cljs.core.truth_(inst_30219)){
var statearr_30243_30274 = state_30233__$1;
(statearr_30243_30274[(1)] = (12));

} else {
var statearr_30244_30275 = state_30233__$1;
(statearr_30244_30275[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (3))){
var inst_30231 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30233__$1,inst_30231);
} else {
if((state_val_30234 === (12))){
var inst_30197 = (state_30233[(7)]);
var inst_30221 = cljs.core.vec.call(null,inst_30197);
var state_30233__$1 = state_30233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30233__$1,(15),out,inst_30221);
} else {
if((state_val_30234 === (2))){
var state_30233__$1 = state_30233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30233__$1,(4),ch);
} else {
if((state_val_30234 === (11))){
var inst_30213 = (state_30233[(2)]);
var inst_30214 = (new Array(n));
var inst_30197 = inst_30214;
var inst_30198 = (0);
var state_30233__$1 = (function (){var statearr_30245 = state_30233;
(statearr_30245[(7)] = inst_30197);

(statearr_30245[(8)] = inst_30198);

(statearr_30245[(10)] = inst_30213);

return statearr_30245;
})();
var statearr_30246_30276 = state_30233__$1;
(statearr_30246_30276[(2)] = null);

(statearr_30246_30276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (9))){
var inst_30197 = (state_30233[(7)]);
var inst_30211 = cljs.core.vec.call(null,inst_30197);
var state_30233__$1 = state_30233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30233__$1,(11),out,inst_30211);
} else {
if((state_val_30234 === (5))){
var inst_30201 = (state_30233[(9)]);
var inst_30197 = (state_30233[(7)]);
var inst_30206 = (state_30233[(11)]);
var inst_30198 = (state_30233[(8)]);
var inst_30205 = (inst_30197[inst_30198] = inst_30201);
var inst_30206__$1 = (inst_30198 + (1));
var inst_30207 = (inst_30206__$1 < n);
var state_30233__$1 = (function (){var statearr_30247 = state_30233;
(statearr_30247[(12)] = inst_30205);

(statearr_30247[(11)] = inst_30206__$1);

return statearr_30247;
})();
if(cljs.core.truth_(inst_30207)){
var statearr_30248_30277 = state_30233__$1;
(statearr_30248_30277[(1)] = (8));

} else {
var statearr_30249_30278 = state_30233__$1;
(statearr_30249_30278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (14))){
var inst_30226 = (state_30233[(2)]);
var inst_30227 = cljs.core.async.close_BANG_.call(null,out);
var state_30233__$1 = (function (){var statearr_30251 = state_30233;
(statearr_30251[(13)] = inst_30226);

return statearr_30251;
})();
var statearr_30252_30279 = state_30233__$1;
(statearr_30252_30279[(2)] = inst_30227);

(statearr_30252_30279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (10))){
var inst_30217 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
var statearr_30253_30280 = state_30233__$1;
(statearr_30253_30280[(2)] = inst_30217);

(statearr_30253_30280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (8))){
var inst_30197 = (state_30233[(7)]);
var inst_30206 = (state_30233[(11)]);
var tmp30250 = inst_30197;
var inst_30197__$1 = tmp30250;
var inst_30198 = inst_30206;
var state_30233__$1 = (function (){var statearr_30254 = state_30233;
(statearr_30254[(7)] = inst_30197__$1);

(statearr_30254[(8)] = inst_30198);

return statearr_30254;
})();
var statearr_30255_30281 = state_30233__$1;
(statearr_30255_30281[(2)] = null);

(statearr_30255_30281[(1)] = (2));


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
});})(c__20150__auto___30267,out))
;
return ((function (switch__20085__auto__,c__20150__auto___30267,out){
return (function() {
var cljs$core$async$state_machine__20086__auto__ = null;
var cljs$core$async$state_machine__20086__auto____0 = (function (){
var statearr_30259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30259[(0)] = cljs$core$async$state_machine__20086__auto__);

(statearr_30259[(1)] = (1));

return statearr_30259;
});
var cljs$core$async$state_machine__20086__auto____1 = (function (state_30233){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_30233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e30260){if((e30260 instanceof Object)){
var ex__20089__auto__ = e30260;
var statearr_30261_30282 = state_30233;
(statearr_30261_30282[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30283 = state_30233;
state_30233 = G__30283;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$state_machine__20086__auto__ = function(state_30233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20086__auto____1.call(this,state_30233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20086__auto____0;
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20086__auto____1;
return cljs$core$async$state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___30267,out))
})();
var state__20152__auto__ = (function (){var statearr_30262 = f__20151__auto__.call(null);
(statearr_30262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___30267);

return statearr_30262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___30267,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30284 = [];
var len__17421__auto___30358 = arguments.length;
var i__17422__auto___30359 = (0);
while(true){
if((i__17422__auto___30359 < len__17421__auto___30358)){
args30284.push((arguments[i__17422__auto___30359]));

var G__30360 = (i__17422__auto___30359 + (1));
i__17422__auto___30359 = G__30360;
continue;
} else {
}
break;
}

var G__30286 = args30284.length;
switch (G__30286) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30284.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20150__auto___30362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20150__auto___30362,out){
return (function (){
var f__20151__auto__ = (function (){var switch__20085__auto__ = ((function (c__20150__auto___30362,out){
return (function (state_30328){
var state_val_30329 = (state_30328[(1)]);
if((state_val_30329 === (7))){
var inst_30324 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30330_30363 = state_30328__$1;
(statearr_30330_30363[(2)] = inst_30324);

(statearr_30330_30363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (1))){
var inst_30287 = [];
var inst_30288 = inst_30287;
var inst_30289 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30328__$1 = (function (){var statearr_30331 = state_30328;
(statearr_30331[(7)] = inst_30288);

(statearr_30331[(8)] = inst_30289);

return statearr_30331;
})();
var statearr_30332_30364 = state_30328__$1;
(statearr_30332_30364[(2)] = null);

(statearr_30332_30364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (4))){
var inst_30292 = (state_30328[(9)]);
var inst_30292__$1 = (state_30328[(2)]);
var inst_30293 = (inst_30292__$1 == null);
var inst_30294 = cljs.core.not.call(null,inst_30293);
var state_30328__$1 = (function (){var statearr_30333 = state_30328;
(statearr_30333[(9)] = inst_30292__$1);

return statearr_30333;
})();
if(inst_30294){
var statearr_30334_30365 = state_30328__$1;
(statearr_30334_30365[(1)] = (5));

} else {
var statearr_30335_30366 = state_30328__$1;
(statearr_30335_30366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (15))){
var inst_30318 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30336_30367 = state_30328__$1;
(statearr_30336_30367[(2)] = inst_30318);

(statearr_30336_30367[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (13))){
var state_30328__$1 = state_30328;
var statearr_30337_30368 = state_30328__$1;
(statearr_30337_30368[(2)] = null);

(statearr_30337_30368[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (6))){
var inst_30288 = (state_30328[(7)]);
var inst_30313 = inst_30288.length;
var inst_30314 = (inst_30313 > (0));
var state_30328__$1 = state_30328;
if(cljs.core.truth_(inst_30314)){
var statearr_30338_30369 = state_30328__$1;
(statearr_30338_30369[(1)] = (12));

} else {
var statearr_30339_30370 = state_30328__$1;
(statearr_30339_30370[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (3))){
var inst_30326 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30328__$1,inst_30326);
} else {
if((state_val_30329 === (12))){
var inst_30288 = (state_30328[(7)]);
var inst_30316 = cljs.core.vec.call(null,inst_30288);
var state_30328__$1 = state_30328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30328__$1,(15),out,inst_30316);
} else {
if((state_val_30329 === (2))){
var state_30328__$1 = state_30328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30328__$1,(4),ch);
} else {
if((state_val_30329 === (11))){
var inst_30292 = (state_30328[(9)]);
var inst_30296 = (state_30328[(10)]);
var inst_30306 = (state_30328[(2)]);
var inst_30307 = [];
var inst_30308 = inst_30307.push(inst_30292);
var inst_30288 = inst_30307;
var inst_30289 = inst_30296;
var state_30328__$1 = (function (){var statearr_30340 = state_30328;
(statearr_30340[(7)] = inst_30288);

(statearr_30340[(8)] = inst_30289);

(statearr_30340[(11)] = inst_30308);

(statearr_30340[(12)] = inst_30306);

return statearr_30340;
})();
var statearr_30341_30371 = state_30328__$1;
(statearr_30341_30371[(2)] = null);

(statearr_30341_30371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (9))){
var inst_30288 = (state_30328[(7)]);
var inst_30304 = cljs.core.vec.call(null,inst_30288);
var state_30328__$1 = state_30328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30328__$1,(11),out,inst_30304);
} else {
if((state_val_30329 === (5))){
var inst_30289 = (state_30328[(8)]);
var inst_30292 = (state_30328[(9)]);
var inst_30296 = (state_30328[(10)]);
var inst_30296__$1 = f.call(null,inst_30292);
var inst_30297 = cljs.core._EQ_.call(null,inst_30296__$1,inst_30289);
var inst_30298 = cljs.core.keyword_identical_QMARK_.call(null,inst_30289,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30299 = (inst_30297) || (inst_30298);
var state_30328__$1 = (function (){var statearr_30342 = state_30328;
(statearr_30342[(10)] = inst_30296__$1);

return statearr_30342;
})();
if(cljs.core.truth_(inst_30299)){
var statearr_30343_30372 = state_30328__$1;
(statearr_30343_30372[(1)] = (8));

} else {
var statearr_30344_30373 = state_30328__$1;
(statearr_30344_30373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (14))){
var inst_30321 = (state_30328[(2)]);
var inst_30322 = cljs.core.async.close_BANG_.call(null,out);
var state_30328__$1 = (function (){var statearr_30346 = state_30328;
(statearr_30346[(13)] = inst_30321);

return statearr_30346;
})();
var statearr_30347_30374 = state_30328__$1;
(statearr_30347_30374[(2)] = inst_30322);

(statearr_30347_30374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (10))){
var inst_30311 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30348_30375 = state_30328__$1;
(statearr_30348_30375[(2)] = inst_30311);

(statearr_30348_30375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (8))){
var inst_30288 = (state_30328[(7)]);
var inst_30292 = (state_30328[(9)]);
var inst_30296 = (state_30328[(10)]);
var inst_30301 = inst_30288.push(inst_30292);
var tmp30345 = inst_30288;
var inst_30288__$1 = tmp30345;
var inst_30289 = inst_30296;
var state_30328__$1 = (function (){var statearr_30349 = state_30328;
(statearr_30349[(14)] = inst_30301);

(statearr_30349[(7)] = inst_30288__$1);

(statearr_30349[(8)] = inst_30289);

return statearr_30349;
})();
var statearr_30350_30376 = state_30328__$1;
(statearr_30350_30376[(2)] = null);

(statearr_30350_30376[(1)] = (2));


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
});})(c__20150__auto___30362,out))
;
return ((function (switch__20085__auto__,c__20150__auto___30362,out){
return (function() {
var cljs$core$async$state_machine__20086__auto__ = null;
var cljs$core$async$state_machine__20086__auto____0 = (function (){
var statearr_30354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30354[(0)] = cljs$core$async$state_machine__20086__auto__);

(statearr_30354[(1)] = (1));

return statearr_30354;
});
var cljs$core$async$state_machine__20086__auto____1 = (function (state_30328){
while(true){
var ret_value__20087__auto__ = (function (){try{while(true){
var result__20088__auto__ = switch__20085__auto__.call(null,state_30328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20088__auto__;
}
break;
}
}catch (e30355){if((e30355 instanceof Object)){
var ex__20089__auto__ = e30355;
var statearr_30356_30377 = state_30328;
(statearr_30356_30377[(5)] = ex__20089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30378 = state_30328;
state_30328 = G__30378;
continue;
} else {
return ret_value__20087__auto__;
}
break;
}
});
cljs$core$async$state_machine__20086__auto__ = function(state_30328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20086__auto____1.call(this,state_30328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20086__auto____0;
cljs$core$async$state_machine__20086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20086__auto____1;
return cljs$core$async$state_machine__20086__auto__;
})()
;})(switch__20085__auto__,c__20150__auto___30362,out))
})();
var state__20152__auto__ = (function (){var statearr_30357 = f__20151__auto__.call(null);
(statearr_30357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20150__auto___30362);

return statearr_30357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20152__auto__);
});})(c__20150__auto___30362,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map