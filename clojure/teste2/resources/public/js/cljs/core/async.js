// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24517 = [];
var len__17843__auto___24523 = arguments.length;
var i__17844__auto___24524 = (0);
while(true){
if((i__17844__auto___24524 < len__17843__auto___24523)){
args24517.push((arguments[i__17844__auto___24524]));

var G__24525 = (i__17844__auto___24524 + (1));
i__17844__auto___24524 = G__24525;
continue;
} else {
}
break;
}

var G__24519 = args24517.length;
switch (G__24519) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24517.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24520 = (function (f,blockable,meta24521){
this.f = f;
this.blockable = blockable;
this.meta24521 = meta24521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24522,meta24521__$1){
var self__ = this;
var _24522__$1 = this;
return (new cljs.core.async.t_cljs$core$async24520(self__.f,self__.blockable,meta24521__$1));
});

cljs.core.async.t_cljs$core$async24520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24522){
var self__ = this;
var _24522__$1 = this;
return self__.meta24521;
});

cljs.core.async.t_cljs$core$async24520.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24520.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24520.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24520.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24521","meta24521",-1998009759,null)], null);
});

cljs.core.async.t_cljs$core$async24520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24520";

cljs.core.async.t_cljs$core$async24520.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async24520");
});

cljs.core.async.__GT_t_cljs$core$async24520 = (function cljs$core$async$__GT_t_cljs$core$async24520(f__$1,blockable__$1,meta24521){
return (new cljs.core.async.t_cljs$core$async24520(f__$1,blockable__$1,meta24521));
});

}

return (new cljs.core.async.t_cljs$core$async24520(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
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
var args24529 = [];
var len__17843__auto___24532 = arguments.length;
var i__17844__auto___24533 = (0);
while(true){
if((i__17844__auto___24533 < len__17843__auto___24532)){
args24529.push((arguments[i__17844__auto___24533]));

var G__24534 = (i__17844__auto___24533 + (1));
i__17844__auto___24533 = G__24534;
continue;
} else {
}
break;
}

var G__24531 = args24529.length;
switch (G__24531) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24529.length)].join('')));

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
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24536 = [];
var len__17843__auto___24539 = arguments.length;
var i__17844__auto___24540 = (0);
while(true){
if((i__17844__auto___24540 < len__17843__auto___24539)){
args24536.push((arguments[i__17844__auto___24540]));

var G__24541 = (i__17844__auto___24540 + (1));
i__17844__auto___24540 = G__24541;
continue;
} else {
}
break;
}

var G__24538 = args24536.length;
switch (G__24538) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24536.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
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
var args24543 = [];
var len__17843__auto___24546 = arguments.length;
var i__17844__auto___24547 = (0);
while(true){
if((i__17844__auto___24547 < len__17843__auto___24546)){
args24543.push((arguments[i__17844__auto___24547]));

var G__24548 = (i__17844__auto___24547 + (1));
i__17844__auto___24547 = G__24548;
continue;
} else {
}
break;
}

var G__24545 = args24543.length;
switch (G__24545) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24543.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24550 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24550);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24550,ret){
return (function (){
return fn1.call(null,val_24550);
});})(val_24550,ret))
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
var args24551 = [];
var len__17843__auto___24554 = arguments.length;
var i__17844__auto___24555 = (0);
while(true){
if((i__17844__auto___24555 < len__17843__auto___24554)){
args24551.push((arguments[i__17844__auto___24555]));

var G__24556 = (i__17844__auto___24555 + (1));
i__17844__auto___24555 = G__24556;
continue;
} else {
}
break;
}

var G__24553 = args24551.length;
switch (G__24553) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24551.length)].join('')));

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
var n__17688__auto___24558 = n;
var x_24559 = (0);
while(true){
if((x_24559 < n__17688__auto___24558)){
(a[x_24559] = (0));

var G__24560 = (x_24559 + (1));
x_24559 = G__24560;
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

var G__24561 = (i + (1));
i = G__24561;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24565 = (function (alt_flag,flag,meta24566){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24566 = meta24566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24567,meta24566__$1){
var self__ = this;
var _24567__$1 = this;
return (new cljs.core.async.t_cljs$core$async24565(self__.alt_flag,self__.flag,meta24566__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24567){
var self__ = this;
var _24567__$1 = this;
return self__.meta24566;
});})(flag))
;

cljs.core.async.t_cljs$core$async24565.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24565.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24565.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24566","meta24566",1913274275,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24565";

cljs.core.async.t_cljs$core$async24565.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async24565");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24565 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24565(alt_flag__$1,flag__$1,meta24566){
return (new cljs.core.async.t_cljs$core$async24565(alt_flag__$1,flag__$1,meta24566));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24565(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24571 = (function (alt_handler,flag,cb,meta24572){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24572 = meta24572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24573,meta24572__$1){
var self__ = this;
var _24573__$1 = this;
return (new cljs.core.async.t_cljs$core$async24571(self__.alt_handler,self__.flag,self__.cb,meta24572__$1));
});

cljs.core.async.t_cljs$core$async24571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24573){
var self__ = this;
var _24573__$1 = this;
return self__.meta24572;
});

cljs.core.async.t_cljs$core$async24571.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24571.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24572","meta24572",-384137547,null)], null);
});

cljs.core.async.t_cljs$core$async24571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24571";

cljs.core.async.t_cljs$core$async24571.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async24571");
});

cljs.core.async.__GT_t_cljs$core$async24571 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24571(alt_handler__$1,flag__$1,cb__$1,meta24572){
return (new cljs.core.async.t_cljs$core$async24571(alt_handler__$1,flag__$1,cb__$1,meta24572));
});

}

return (new cljs.core.async.t_cljs$core$async24571(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24574_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24574_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24575_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24575_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16785__auto__ = wport;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24576 = (i + (1));
i = G__24576;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16785__auto__ = ret;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16773__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16773__auto__;
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
var args__17850__auto__ = [];
var len__17843__auto___24582 = arguments.length;
var i__17844__auto___24583 = (0);
while(true){
if((i__17844__auto___24583 < len__17843__auto___24582)){
args__17850__auto__.push((arguments[i__17844__auto___24583]));

var G__24584 = (i__17844__auto___24583 + (1));
i__17844__auto___24583 = G__24584;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((1) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17851__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24579){
var map__24580 = p__24579;
var map__24580__$1 = ((((!((map__24580 == null)))?((((map__24580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24580):map__24580);
var opts = map__24580__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24577){
var G__24578 = cljs.core.first.call(null,seq24577);
var seq24577__$1 = cljs.core.next.call(null,seq24577);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24578,seq24577__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24585 = [];
var len__17843__auto___24635 = arguments.length;
var i__17844__auto___24636 = (0);
while(true){
if((i__17844__auto___24636 < len__17843__auto___24635)){
args24585.push((arguments[i__17844__auto___24636]));

var G__24637 = (i__17844__auto___24636 + (1));
i__17844__auto___24636 = G__24637;
continue;
} else {
}
break;
}

var G__24587 = args24585.length;
switch (G__24587) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24585.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19893__auto___24639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___24639){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___24639){
return (function (state_24611){
var state_val_24612 = (state_24611[(1)]);
if((state_val_24612 === (7))){
var inst_24607 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
var statearr_24613_24640 = state_24611__$1;
(statearr_24613_24640[(2)] = inst_24607);

(statearr_24613_24640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (1))){
var state_24611__$1 = state_24611;
var statearr_24614_24641 = state_24611__$1;
(statearr_24614_24641[(2)] = null);

(statearr_24614_24641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (4))){
var inst_24590 = (state_24611[(7)]);
var inst_24590__$1 = (state_24611[(2)]);
var inst_24591 = (inst_24590__$1 == null);
var state_24611__$1 = (function (){var statearr_24615 = state_24611;
(statearr_24615[(7)] = inst_24590__$1);

return statearr_24615;
})();
if(cljs.core.truth_(inst_24591)){
var statearr_24616_24642 = state_24611__$1;
(statearr_24616_24642[(1)] = (5));

} else {
var statearr_24617_24643 = state_24611__$1;
(statearr_24617_24643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (13))){
var state_24611__$1 = state_24611;
var statearr_24618_24644 = state_24611__$1;
(statearr_24618_24644[(2)] = null);

(statearr_24618_24644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (6))){
var inst_24590 = (state_24611[(7)]);
var state_24611__$1 = state_24611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24611__$1,(11),to,inst_24590);
} else {
if((state_val_24612 === (3))){
var inst_24609 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24611__$1,inst_24609);
} else {
if((state_val_24612 === (12))){
var state_24611__$1 = state_24611;
var statearr_24619_24645 = state_24611__$1;
(statearr_24619_24645[(2)] = null);

(statearr_24619_24645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (2))){
var state_24611__$1 = state_24611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24611__$1,(4),from);
} else {
if((state_val_24612 === (11))){
var inst_24600 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
if(cljs.core.truth_(inst_24600)){
var statearr_24620_24646 = state_24611__$1;
(statearr_24620_24646[(1)] = (12));

} else {
var statearr_24621_24647 = state_24611__$1;
(statearr_24621_24647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (9))){
var state_24611__$1 = state_24611;
var statearr_24622_24648 = state_24611__$1;
(statearr_24622_24648[(2)] = null);

(statearr_24622_24648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (5))){
var state_24611__$1 = state_24611;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24623_24649 = state_24611__$1;
(statearr_24623_24649[(1)] = (8));

} else {
var statearr_24624_24650 = state_24611__$1;
(statearr_24624_24650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (14))){
var inst_24605 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
var statearr_24625_24651 = state_24611__$1;
(statearr_24625_24651[(2)] = inst_24605);

(statearr_24625_24651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (10))){
var inst_24597 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
var statearr_24626_24652 = state_24611__$1;
(statearr_24626_24652[(2)] = inst_24597);

(statearr_24626_24652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (8))){
var inst_24594 = cljs.core.async.close_BANG_.call(null,to);
var state_24611__$1 = state_24611;
var statearr_24627_24653 = state_24611__$1;
(statearr_24627_24653[(2)] = inst_24594);

(statearr_24627_24653[(1)] = (10));


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
});})(c__19893__auto___24639))
;
return ((function (switch__19872__auto__,c__19893__auto___24639){
return (function() {
var cljs$core$async$state_machine__19873__auto__ = null;
var cljs$core$async$state_machine__19873__auto____0 = (function (){
var statearr_24631 = [null,null,null,null,null,null,null,null];
(statearr_24631[(0)] = cljs$core$async$state_machine__19873__auto__);

(statearr_24631[(1)] = (1));

return statearr_24631;
});
var cljs$core$async$state_machine__19873__auto____1 = (function (state_24611){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_24611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e24632){if((e24632 instanceof Object)){
var ex__19876__auto__ = e24632;
var statearr_24633_24654 = state_24611;
(statearr_24633_24654[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24655 = state_24611;
state_24611 = G__24655;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$state_machine__19873__auto__ = function(state_24611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19873__auto____1.call(this,state_24611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19873__auto____0;
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19873__auto____1;
return cljs$core$async$state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___24639))
})();
var state__19895__auto__ = (function (){var statearr_24634 = f__19894__auto__.call(null);
(statearr_24634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___24639);

return statearr_24634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___24639))
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
return (function (p__24839){
var vec__24840 = p__24839;
var v = cljs.core.nth.call(null,vec__24840,(0),null);
var p = cljs.core.nth.call(null,vec__24840,(1),null);
var job = vec__24840;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19893__auto___25022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___25022,res,vec__24840,v,p,job,jobs,results){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___25022,res,vec__24840,v,p,job,jobs,results){
return (function (state_24845){
var state_val_24846 = (state_24845[(1)]);
if((state_val_24846 === (1))){
var state_24845__$1 = state_24845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24845__$1,(2),res,v);
} else {
if((state_val_24846 === (2))){
var inst_24842 = (state_24845[(2)]);
var inst_24843 = cljs.core.async.close_BANG_.call(null,res);
var state_24845__$1 = (function (){var statearr_24847 = state_24845;
(statearr_24847[(7)] = inst_24842);

return statearr_24847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24845__$1,inst_24843);
} else {
return null;
}
}
});})(c__19893__auto___25022,res,vec__24840,v,p,job,jobs,results))
;
return ((function (switch__19872__auto__,c__19893__auto___25022,res,vec__24840,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0 = (function (){
var statearr_24851 = [null,null,null,null,null,null,null,null];
(statearr_24851[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__);

(statearr_24851[(1)] = (1));

return statearr_24851;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1 = (function (state_24845){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_24845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e24852){if((e24852 instanceof Object)){
var ex__19876__auto__ = e24852;
var statearr_24853_25023 = state_24845;
(statearr_24853_25023[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25024 = state_24845;
state_24845 = G__25024;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__ = function(state_24845){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1.call(this,state_24845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___25022,res,vec__24840,v,p,job,jobs,results))
})();
var state__19895__auto__ = (function (){var statearr_24854 = f__19894__auto__.call(null);
(statearr_24854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___25022);

return statearr_24854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___25022,res,vec__24840,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24855){
var vec__24856 = p__24855;
var v = cljs.core.nth.call(null,vec__24856,(0),null);
var p = cljs.core.nth.call(null,vec__24856,(1),null);
var job = vec__24856;
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
var n__17688__auto___25025 = n;
var __25026 = (0);
while(true){
if((__25026 < n__17688__auto___25025)){
var G__24857_25027 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24857_25027) {
case "compute":
var c__19893__auto___25029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25026,c__19893__auto___25029,G__24857_25027,n__17688__auto___25025,jobs,results,process,async){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (__25026,c__19893__auto___25029,G__24857_25027,n__17688__auto___25025,jobs,results,process,async){
return (function (state_24870){
var state_val_24871 = (state_24870[(1)]);
if((state_val_24871 === (1))){
var state_24870__$1 = state_24870;
var statearr_24872_25030 = state_24870__$1;
(statearr_24872_25030[(2)] = null);

(statearr_24872_25030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24871 === (2))){
var state_24870__$1 = state_24870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24870__$1,(4),jobs);
} else {
if((state_val_24871 === (3))){
var inst_24868 = (state_24870[(2)]);
var state_24870__$1 = state_24870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24870__$1,inst_24868);
} else {
if((state_val_24871 === (4))){
var inst_24860 = (state_24870[(2)]);
var inst_24861 = process.call(null,inst_24860);
var state_24870__$1 = state_24870;
if(cljs.core.truth_(inst_24861)){
var statearr_24873_25031 = state_24870__$1;
(statearr_24873_25031[(1)] = (5));

} else {
var statearr_24874_25032 = state_24870__$1;
(statearr_24874_25032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24871 === (5))){
var state_24870__$1 = state_24870;
var statearr_24875_25033 = state_24870__$1;
(statearr_24875_25033[(2)] = null);

(statearr_24875_25033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24871 === (6))){
var state_24870__$1 = state_24870;
var statearr_24876_25034 = state_24870__$1;
(statearr_24876_25034[(2)] = null);

(statearr_24876_25034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24871 === (7))){
var inst_24866 = (state_24870[(2)]);
var state_24870__$1 = state_24870;
var statearr_24877_25035 = state_24870__$1;
(statearr_24877_25035[(2)] = inst_24866);

(statearr_24877_25035[(1)] = (3));


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
});})(__25026,c__19893__auto___25029,G__24857_25027,n__17688__auto___25025,jobs,results,process,async))
;
return ((function (__25026,switch__19872__auto__,c__19893__auto___25029,G__24857_25027,n__17688__auto___25025,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0 = (function (){
var statearr_24881 = [null,null,null,null,null,null,null];
(statearr_24881[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__);

(statearr_24881[(1)] = (1));

return statearr_24881;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1 = (function (state_24870){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_24870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e24882){if((e24882 instanceof Object)){
var ex__19876__auto__ = e24882;
var statearr_24883_25036 = state_24870;
(statearr_24883_25036[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25037 = state_24870;
state_24870 = G__25037;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__ = function(state_24870){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1.call(this,state_24870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__;
})()
;})(__25026,switch__19872__auto__,c__19893__auto___25029,G__24857_25027,n__17688__auto___25025,jobs,results,process,async))
})();
var state__19895__auto__ = (function (){var statearr_24884 = f__19894__auto__.call(null);
(statearr_24884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___25029);

return statearr_24884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(__25026,c__19893__auto___25029,G__24857_25027,n__17688__auto___25025,jobs,results,process,async))
);


break;
case "async":
var c__19893__auto___25038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25026,c__19893__auto___25038,G__24857_25027,n__17688__auto___25025,jobs,results,process,async){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (__25026,c__19893__auto___25038,G__24857_25027,n__17688__auto___25025,jobs,results,process,async){
return (function (state_24897){
var state_val_24898 = (state_24897[(1)]);
if((state_val_24898 === (1))){
var state_24897__$1 = state_24897;
var statearr_24899_25039 = state_24897__$1;
(statearr_24899_25039[(2)] = null);

(statearr_24899_25039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (2))){
var state_24897__$1 = state_24897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24897__$1,(4),jobs);
} else {
if((state_val_24898 === (3))){
var inst_24895 = (state_24897[(2)]);
var state_24897__$1 = state_24897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24897__$1,inst_24895);
} else {
if((state_val_24898 === (4))){
var inst_24887 = (state_24897[(2)]);
var inst_24888 = async.call(null,inst_24887);
var state_24897__$1 = state_24897;
if(cljs.core.truth_(inst_24888)){
var statearr_24900_25040 = state_24897__$1;
(statearr_24900_25040[(1)] = (5));

} else {
var statearr_24901_25041 = state_24897__$1;
(statearr_24901_25041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (5))){
var state_24897__$1 = state_24897;
var statearr_24902_25042 = state_24897__$1;
(statearr_24902_25042[(2)] = null);

(statearr_24902_25042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (6))){
var state_24897__$1 = state_24897;
var statearr_24903_25043 = state_24897__$1;
(statearr_24903_25043[(2)] = null);

(statearr_24903_25043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (7))){
var inst_24893 = (state_24897[(2)]);
var state_24897__$1 = state_24897;
var statearr_24904_25044 = state_24897__$1;
(statearr_24904_25044[(2)] = inst_24893);

(statearr_24904_25044[(1)] = (3));


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
});})(__25026,c__19893__auto___25038,G__24857_25027,n__17688__auto___25025,jobs,results,process,async))
;
return ((function (__25026,switch__19872__auto__,c__19893__auto___25038,G__24857_25027,n__17688__auto___25025,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0 = (function (){
var statearr_24908 = [null,null,null,null,null,null,null];
(statearr_24908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__);

(statearr_24908[(1)] = (1));

return statearr_24908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1 = (function (state_24897){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_24897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e24909){if((e24909 instanceof Object)){
var ex__19876__auto__ = e24909;
var statearr_24910_25045 = state_24897;
(statearr_24910_25045[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25046 = state_24897;
state_24897 = G__25046;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__ = function(state_24897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1.call(this,state_24897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__;
})()
;})(__25026,switch__19872__auto__,c__19893__auto___25038,G__24857_25027,n__17688__auto___25025,jobs,results,process,async))
})();
var state__19895__auto__ = (function (){var statearr_24911 = f__19894__auto__.call(null);
(statearr_24911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___25038);

return statearr_24911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(__25026,c__19893__auto___25038,G__24857_25027,n__17688__auto___25025,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25047 = (__25026 + (1));
__25026 = G__25047;
continue;
} else {
}
break;
}

var c__19893__auto___25048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___25048,jobs,results,process,async){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___25048,jobs,results,process,async){
return (function (state_24933){
var state_val_24934 = (state_24933[(1)]);
if((state_val_24934 === (1))){
var state_24933__$1 = state_24933;
var statearr_24935_25049 = state_24933__$1;
(statearr_24935_25049[(2)] = null);

(statearr_24935_25049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24934 === (2))){
var state_24933__$1 = state_24933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24933__$1,(4),from);
} else {
if((state_val_24934 === (3))){
var inst_24931 = (state_24933[(2)]);
var state_24933__$1 = state_24933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24933__$1,inst_24931);
} else {
if((state_val_24934 === (4))){
var inst_24914 = (state_24933[(7)]);
var inst_24914__$1 = (state_24933[(2)]);
var inst_24915 = (inst_24914__$1 == null);
var state_24933__$1 = (function (){var statearr_24936 = state_24933;
(statearr_24936[(7)] = inst_24914__$1);

return statearr_24936;
})();
if(cljs.core.truth_(inst_24915)){
var statearr_24937_25050 = state_24933__$1;
(statearr_24937_25050[(1)] = (5));

} else {
var statearr_24938_25051 = state_24933__$1;
(statearr_24938_25051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24934 === (5))){
var inst_24917 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24933__$1 = state_24933;
var statearr_24939_25052 = state_24933__$1;
(statearr_24939_25052[(2)] = inst_24917);

(statearr_24939_25052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24934 === (6))){
var inst_24914 = (state_24933[(7)]);
var inst_24919 = (state_24933[(8)]);
var inst_24919__$1 = cljs.core.async.chan.call(null,(1));
var inst_24920 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24921 = [inst_24914,inst_24919__$1];
var inst_24922 = (new cljs.core.PersistentVector(null,2,(5),inst_24920,inst_24921,null));
var state_24933__$1 = (function (){var statearr_24940 = state_24933;
(statearr_24940[(8)] = inst_24919__$1);

return statearr_24940;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24933__$1,(8),jobs,inst_24922);
} else {
if((state_val_24934 === (7))){
var inst_24929 = (state_24933[(2)]);
var state_24933__$1 = state_24933;
var statearr_24941_25053 = state_24933__$1;
(statearr_24941_25053[(2)] = inst_24929);

(statearr_24941_25053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24934 === (8))){
var inst_24919 = (state_24933[(8)]);
var inst_24924 = (state_24933[(2)]);
var state_24933__$1 = (function (){var statearr_24942 = state_24933;
(statearr_24942[(9)] = inst_24924);

return statearr_24942;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24933__$1,(9),results,inst_24919);
} else {
if((state_val_24934 === (9))){
var inst_24926 = (state_24933[(2)]);
var state_24933__$1 = (function (){var statearr_24943 = state_24933;
(statearr_24943[(10)] = inst_24926);

return statearr_24943;
})();
var statearr_24944_25054 = state_24933__$1;
(statearr_24944_25054[(2)] = null);

(statearr_24944_25054[(1)] = (2));


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
});})(c__19893__auto___25048,jobs,results,process,async))
;
return ((function (switch__19872__auto__,c__19893__auto___25048,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0 = (function (){
var statearr_24948 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24948[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__);

(statearr_24948[(1)] = (1));

return statearr_24948;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1 = (function (state_24933){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_24933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e24949){if((e24949 instanceof Object)){
var ex__19876__auto__ = e24949;
var statearr_24950_25055 = state_24933;
(statearr_24950_25055[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25056 = state_24933;
state_24933 = G__25056;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__ = function(state_24933){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1.call(this,state_24933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___25048,jobs,results,process,async))
})();
var state__19895__auto__ = (function (){var statearr_24951 = f__19894__auto__.call(null);
(statearr_24951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___25048);

return statearr_24951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___25048,jobs,results,process,async))
);


var c__19893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto__,jobs,results,process,async){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto__,jobs,results,process,async){
return (function (state_24989){
var state_val_24990 = (state_24989[(1)]);
if((state_val_24990 === (7))){
var inst_24985 = (state_24989[(2)]);
var state_24989__$1 = state_24989;
var statearr_24991_25057 = state_24989__$1;
(statearr_24991_25057[(2)] = inst_24985);

(statearr_24991_25057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (20))){
var state_24989__$1 = state_24989;
var statearr_24992_25058 = state_24989__$1;
(statearr_24992_25058[(2)] = null);

(statearr_24992_25058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (1))){
var state_24989__$1 = state_24989;
var statearr_24993_25059 = state_24989__$1;
(statearr_24993_25059[(2)] = null);

(statearr_24993_25059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (4))){
var inst_24954 = (state_24989[(7)]);
var inst_24954__$1 = (state_24989[(2)]);
var inst_24955 = (inst_24954__$1 == null);
var state_24989__$1 = (function (){var statearr_24994 = state_24989;
(statearr_24994[(7)] = inst_24954__$1);

return statearr_24994;
})();
if(cljs.core.truth_(inst_24955)){
var statearr_24995_25060 = state_24989__$1;
(statearr_24995_25060[(1)] = (5));

} else {
var statearr_24996_25061 = state_24989__$1;
(statearr_24996_25061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (15))){
var inst_24967 = (state_24989[(8)]);
var state_24989__$1 = state_24989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24989__$1,(18),to,inst_24967);
} else {
if((state_val_24990 === (21))){
var inst_24980 = (state_24989[(2)]);
var state_24989__$1 = state_24989;
var statearr_24997_25062 = state_24989__$1;
(statearr_24997_25062[(2)] = inst_24980);

(statearr_24997_25062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (13))){
var inst_24982 = (state_24989[(2)]);
var state_24989__$1 = (function (){var statearr_24998 = state_24989;
(statearr_24998[(9)] = inst_24982);

return statearr_24998;
})();
var statearr_24999_25063 = state_24989__$1;
(statearr_24999_25063[(2)] = null);

(statearr_24999_25063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (6))){
var inst_24954 = (state_24989[(7)]);
var state_24989__$1 = state_24989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24989__$1,(11),inst_24954);
} else {
if((state_val_24990 === (17))){
var inst_24975 = (state_24989[(2)]);
var state_24989__$1 = state_24989;
if(cljs.core.truth_(inst_24975)){
var statearr_25000_25064 = state_24989__$1;
(statearr_25000_25064[(1)] = (19));

} else {
var statearr_25001_25065 = state_24989__$1;
(statearr_25001_25065[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (3))){
var inst_24987 = (state_24989[(2)]);
var state_24989__$1 = state_24989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24989__$1,inst_24987);
} else {
if((state_val_24990 === (12))){
var inst_24964 = (state_24989[(10)]);
var state_24989__$1 = state_24989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24989__$1,(14),inst_24964);
} else {
if((state_val_24990 === (2))){
var state_24989__$1 = state_24989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24989__$1,(4),results);
} else {
if((state_val_24990 === (19))){
var state_24989__$1 = state_24989;
var statearr_25002_25066 = state_24989__$1;
(statearr_25002_25066[(2)] = null);

(statearr_25002_25066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (11))){
var inst_24964 = (state_24989[(2)]);
var state_24989__$1 = (function (){var statearr_25003 = state_24989;
(statearr_25003[(10)] = inst_24964);

return statearr_25003;
})();
var statearr_25004_25067 = state_24989__$1;
(statearr_25004_25067[(2)] = null);

(statearr_25004_25067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (9))){
var state_24989__$1 = state_24989;
var statearr_25005_25068 = state_24989__$1;
(statearr_25005_25068[(2)] = null);

(statearr_25005_25068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (5))){
var state_24989__$1 = state_24989;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25006_25069 = state_24989__$1;
(statearr_25006_25069[(1)] = (8));

} else {
var statearr_25007_25070 = state_24989__$1;
(statearr_25007_25070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (14))){
var inst_24967 = (state_24989[(8)]);
var inst_24969 = (state_24989[(11)]);
var inst_24967__$1 = (state_24989[(2)]);
var inst_24968 = (inst_24967__$1 == null);
var inst_24969__$1 = cljs.core.not.call(null,inst_24968);
var state_24989__$1 = (function (){var statearr_25008 = state_24989;
(statearr_25008[(8)] = inst_24967__$1);

(statearr_25008[(11)] = inst_24969__$1);

return statearr_25008;
})();
if(inst_24969__$1){
var statearr_25009_25071 = state_24989__$1;
(statearr_25009_25071[(1)] = (15));

} else {
var statearr_25010_25072 = state_24989__$1;
(statearr_25010_25072[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (16))){
var inst_24969 = (state_24989[(11)]);
var state_24989__$1 = state_24989;
var statearr_25011_25073 = state_24989__$1;
(statearr_25011_25073[(2)] = inst_24969);

(statearr_25011_25073[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (10))){
var inst_24961 = (state_24989[(2)]);
var state_24989__$1 = state_24989;
var statearr_25012_25074 = state_24989__$1;
(statearr_25012_25074[(2)] = inst_24961);

(statearr_25012_25074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (18))){
var inst_24972 = (state_24989[(2)]);
var state_24989__$1 = state_24989;
var statearr_25013_25075 = state_24989__$1;
(statearr_25013_25075[(2)] = inst_24972);

(statearr_25013_25075[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24990 === (8))){
var inst_24958 = cljs.core.async.close_BANG_.call(null,to);
var state_24989__$1 = state_24989;
var statearr_25014_25076 = state_24989__$1;
(statearr_25014_25076[(2)] = inst_24958);

(statearr_25014_25076[(1)] = (10));


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
});})(c__19893__auto__,jobs,results,process,async))
;
return ((function (switch__19872__auto__,c__19893__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0 = (function (){
var statearr_25018 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25018[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__);

(statearr_25018[(1)] = (1));

return statearr_25018;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1 = (function (state_24989){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_24989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e25019){if((e25019 instanceof Object)){
var ex__19876__auto__ = e25019;
var statearr_25020_25077 = state_24989;
(statearr_25020_25077[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25078 = state_24989;
state_24989 = G__25078;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__ = function(state_24989){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1.call(this,state_24989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto__,jobs,results,process,async))
})();
var state__19895__auto__ = (function (){var statearr_25021 = f__19894__auto__.call(null);
(statearr_25021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto__);

return statearr_25021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto__,jobs,results,process,async))
);

return c__19893__auto__;
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
var args25079 = [];
var len__17843__auto___25082 = arguments.length;
var i__17844__auto___25083 = (0);
while(true){
if((i__17844__auto___25083 < len__17843__auto___25082)){
args25079.push((arguments[i__17844__auto___25083]));

var G__25084 = (i__17844__auto___25083 + (1));
i__17844__auto___25083 = G__25084;
continue;
} else {
}
break;
}

var G__25081 = args25079.length;
switch (G__25081) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25079.length)].join('')));

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
var args25086 = [];
var len__17843__auto___25089 = arguments.length;
var i__17844__auto___25090 = (0);
while(true){
if((i__17844__auto___25090 < len__17843__auto___25089)){
args25086.push((arguments[i__17844__auto___25090]));

var G__25091 = (i__17844__auto___25090 + (1));
i__17844__auto___25090 = G__25091;
continue;
} else {
}
break;
}

var G__25088 = args25086.length;
switch (G__25088) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25086.length)].join('')));

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
var args25093 = [];
var len__17843__auto___25146 = arguments.length;
var i__17844__auto___25147 = (0);
while(true){
if((i__17844__auto___25147 < len__17843__auto___25146)){
args25093.push((arguments[i__17844__auto___25147]));

var G__25148 = (i__17844__auto___25147 + (1));
i__17844__auto___25147 = G__25148;
continue;
} else {
}
break;
}

var G__25095 = args25093.length;
switch (G__25095) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25093.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19893__auto___25150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___25150,tc,fc){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___25150,tc,fc){
return (function (state_25121){
var state_val_25122 = (state_25121[(1)]);
if((state_val_25122 === (7))){
var inst_25117 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25123_25151 = state_25121__$1;
(statearr_25123_25151[(2)] = inst_25117);

(statearr_25123_25151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (1))){
var state_25121__$1 = state_25121;
var statearr_25124_25152 = state_25121__$1;
(statearr_25124_25152[(2)] = null);

(statearr_25124_25152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (4))){
var inst_25098 = (state_25121[(7)]);
var inst_25098__$1 = (state_25121[(2)]);
var inst_25099 = (inst_25098__$1 == null);
var state_25121__$1 = (function (){var statearr_25125 = state_25121;
(statearr_25125[(7)] = inst_25098__$1);

return statearr_25125;
})();
if(cljs.core.truth_(inst_25099)){
var statearr_25126_25153 = state_25121__$1;
(statearr_25126_25153[(1)] = (5));

} else {
var statearr_25127_25154 = state_25121__$1;
(statearr_25127_25154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (13))){
var state_25121__$1 = state_25121;
var statearr_25128_25155 = state_25121__$1;
(statearr_25128_25155[(2)] = null);

(statearr_25128_25155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (6))){
var inst_25098 = (state_25121[(7)]);
var inst_25104 = p.call(null,inst_25098);
var state_25121__$1 = state_25121;
if(cljs.core.truth_(inst_25104)){
var statearr_25129_25156 = state_25121__$1;
(statearr_25129_25156[(1)] = (9));

} else {
var statearr_25130_25157 = state_25121__$1;
(statearr_25130_25157[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (3))){
var inst_25119 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25121__$1,inst_25119);
} else {
if((state_val_25122 === (12))){
var state_25121__$1 = state_25121;
var statearr_25131_25158 = state_25121__$1;
(statearr_25131_25158[(2)] = null);

(statearr_25131_25158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (2))){
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25121__$1,(4),ch);
} else {
if((state_val_25122 === (11))){
var inst_25098 = (state_25121[(7)]);
var inst_25108 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25121__$1,(8),inst_25108,inst_25098);
} else {
if((state_val_25122 === (9))){
var state_25121__$1 = state_25121;
var statearr_25132_25159 = state_25121__$1;
(statearr_25132_25159[(2)] = tc);

(statearr_25132_25159[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (5))){
var inst_25101 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25102 = cljs.core.async.close_BANG_.call(null,fc);
var state_25121__$1 = (function (){var statearr_25133 = state_25121;
(statearr_25133[(8)] = inst_25101);

return statearr_25133;
})();
var statearr_25134_25160 = state_25121__$1;
(statearr_25134_25160[(2)] = inst_25102);

(statearr_25134_25160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (14))){
var inst_25115 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25135_25161 = state_25121__$1;
(statearr_25135_25161[(2)] = inst_25115);

(statearr_25135_25161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (10))){
var state_25121__$1 = state_25121;
var statearr_25136_25162 = state_25121__$1;
(statearr_25136_25162[(2)] = fc);

(statearr_25136_25162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (8))){
var inst_25110 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
if(cljs.core.truth_(inst_25110)){
var statearr_25137_25163 = state_25121__$1;
(statearr_25137_25163[(1)] = (12));

} else {
var statearr_25138_25164 = state_25121__$1;
(statearr_25138_25164[(1)] = (13));

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
});})(c__19893__auto___25150,tc,fc))
;
return ((function (switch__19872__auto__,c__19893__auto___25150,tc,fc){
return (function() {
var cljs$core$async$state_machine__19873__auto__ = null;
var cljs$core$async$state_machine__19873__auto____0 = (function (){
var statearr_25142 = [null,null,null,null,null,null,null,null,null];
(statearr_25142[(0)] = cljs$core$async$state_machine__19873__auto__);

(statearr_25142[(1)] = (1));

return statearr_25142;
});
var cljs$core$async$state_machine__19873__auto____1 = (function (state_25121){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_25121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e25143){if((e25143 instanceof Object)){
var ex__19876__auto__ = e25143;
var statearr_25144_25165 = state_25121;
(statearr_25144_25165[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25166 = state_25121;
state_25121 = G__25166;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$state_machine__19873__auto__ = function(state_25121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19873__auto____1.call(this,state_25121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19873__auto____0;
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19873__auto____1;
return cljs$core$async$state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___25150,tc,fc))
})();
var state__19895__auto__ = (function (){var statearr_25145 = f__19894__auto__.call(null);
(statearr_25145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___25150);

return statearr_25145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___25150,tc,fc))
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
var c__19893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto__){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto__){
return (function (state_25230){
var state_val_25231 = (state_25230[(1)]);
if((state_val_25231 === (7))){
var inst_25226 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25232_25253 = state_25230__$1;
(statearr_25232_25253[(2)] = inst_25226);

(statearr_25232_25253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (1))){
var inst_25210 = init;
var state_25230__$1 = (function (){var statearr_25233 = state_25230;
(statearr_25233[(7)] = inst_25210);

return statearr_25233;
})();
var statearr_25234_25254 = state_25230__$1;
(statearr_25234_25254[(2)] = null);

(statearr_25234_25254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (4))){
var inst_25213 = (state_25230[(8)]);
var inst_25213__$1 = (state_25230[(2)]);
var inst_25214 = (inst_25213__$1 == null);
var state_25230__$1 = (function (){var statearr_25235 = state_25230;
(statearr_25235[(8)] = inst_25213__$1);

return statearr_25235;
})();
if(cljs.core.truth_(inst_25214)){
var statearr_25236_25255 = state_25230__$1;
(statearr_25236_25255[(1)] = (5));

} else {
var statearr_25237_25256 = state_25230__$1;
(statearr_25237_25256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (6))){
var inst_25210 = (state_25230[(7)]);
var inst_25217 = (state_25230[(9)]);
var inst_25213 = (state_25230[(8)]);
var inst_25217__$1 = f.call(null,inst_25210,inst_25213);
var inst_25218 = cljs.core.reduced_QMARK_.call(null,inst_25217__$1);
var state_25230__$1 = (function (){var statearr_25238 = state_25230;
(statearr_25238[(9)] = inst_25217__$1);

return statearr_25238;
})();
if(inst_25218){
var statearr_25239_25257 = state_25230__$1;
(statearr_25239_25257[(1)] = (8));

} else {
var statearr_25240_25258 = state_25230__$1;
(statearr_25240_25258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (3))){
var inst_25228 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25230__$1,inst_25228);
} else {
if((state_val_25231 === (2))){
var state_25230__$1 = state_25230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25230__$1,(4),ch);
} else {
if((state_val_25231 === (9))){
var inst_25217 = (state_25230[(9)]);
var inst_25210 = inst_25217;
var state_25230__$1 = (function (){var statearr_25241 = state_25230;
(statearr_25241[(7)] = inst_25210);

return statearr_25241;
})();
var statearr_25242_25259 = state_25230__$1;
(statearr_25242_25259[(2)] = null);

(statearr_25242_25259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (5))){
var inst_25210 = (state_25230[(7)]);
var state_25230__$1 = state_25230;
var statearr_25243_25260 = state_25230__$1;
(statearr_25243_25260[(2)] = inst_25210);

(statearr_25243_25260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (10))){
var inst_25224 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25244_25261 = state_25230__$1;
(statearr_25244_25261[(2)] = inst_25224);

(statearr_25244_25261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (8))){
var inst_25217 = (state_25230[(9)]);
var inst_25220 = cljs.core.deref.call(null,inst_25217);
var state_25230__$1 = state_25230;
var statearr_25245_25262 = state_25230__$1;
(statearr_25245_25262[(2)] = inst_25220);

(statearr_25245_25262[(1)] = (10));


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
});})(c__19893__auto__))
;
return ((function (switch__19872__auto__,c__19893__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19873__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19873__auto____0 = (function (){
var statearr_25249 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25249[(0)] = cljs$core$async$reduce_$_state_machine__19873__auto__);

(statearr_25249[(1)] = (1));

return statearr_25249;
});
var cljs$core$async$reduce_$_state_machine__19873__auto____1 = (function (state_25230){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_25230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e25250){if((e25250 instanceof Object)){
var ex__19876__auto__ = e25250;
var statearr_25251_25263 = state_25230;
(statearr_25251_25263[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25264 = state_25230;
state_25230 = G__25264;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19873__auto__ = function(state_25230){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19873__auto____1.call(this,state_25230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19873__auto____0;
cljs$core$async$reduce_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19873__auto____1;
return cljs$core$async$reduce_$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto__))
})();
var state__19895__auto__ = (function (){var statearr_25252 = f__19894__auto__.call(null);
(statearr_25252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto__);

return statearr_25252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto__))
);

return c__19893__auto__;
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
var args25265 = [];
var len__17843__auto___25317 = arguments.length;
var i__17844__auto___25318 = (0);
while(true){
if((i__17844__auto___25318 < len__17843__auto___25317)){
args25265.push((arguments[i__17844__auto___25318]));

var G__25319 = (i__17844__auto___25318 + (1));
i__17844__auto___25318 = G__25319;
continue;
} else {
}
break;
}

var G__25267 = args25265.length;
switch (G__25267) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25265.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto__){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto__){
return (function (state_25292){
var state_val_25293 = (state_25292[(1)]);
if((state_val_25293 === (7))){
var inst_25274 = (state_25292[(2)]);
var state_25292__$1 = state_25292;
var statearr_25294_25321 = state_25292__$1;
(statearr_25294_25321[(2)] = inst_25274);

(statearr_25294_25321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25293 === (1))){
var inst_25268 = cljs.core.seq.call(null,coll);
var inst_25269 = inst_25268;
var state_25292__$1 = (function (){var statearr_25295 = state_25292;
(statearr_25295[(7)] = inst_25269);

return statearr_25295;
})();
var statearr_25296_25322 = state_25292__$1;
(statearr_25296_25322[(2)] = null);

(statearr_25296_25322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25293 === (4))){
var inst_25269 = (state_25292[(7)]);
var inst_25272 = cljs.core.first.call(null,inst_25269);
var state_25292__$1 = state_25292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25292__$1,(7),ch,inst_25272);
} else {
if((state_val_25293 === (13))){
var inst_25286 = (state_25292[(2)]);
var state_25292__$1 = state_25292;
var statearr_25297_25323 = state_25292__$1;
(statearr_25297_25323[(2)] = inst_25286);

(statearr_25297_25323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25293 === (6))){
var inst_25277 = (state_25292[(2)]);
var state_25292__$1 = state_25292;
if(cljs.core.truth_(inst_25277)){
var statearr_25298_25324 = state_25292__$1;
(statearr_25298_25324[(1)] = (8));

} else {
var statearr_25299_25325 = state_25292__$1;
(statearr_25299_25325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25293 === (3))){
var inst_25290 = (state_25292[(2)]);
var state_25292__$1 = state_25292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25292__$1,inst_25290);
} else {
if((state_val_25293 === (12))){
var state_25292__$1 = state_25292;
var statearr_25300_25326 = state_25292__$1;
(statearr_25300_25326[(2)] = null);

(statearr_25300_25326[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25293 === (2))){
var inst_25269 = (state_25292[(7)]);
var state_25292__$1 = state_25292;
if(cljs.core.truth_(inst_25269)){
var statearr_25301_25327 = state_25292__$1;
(statearr_25301_25327[(1)] = (4));

} else {
var statearr_25302_25328 = state_25292__$1;
(statearr_25302_25328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25293 === (11))){
var inst_25283 = cljs.core.async.close_BANG_.call(null,ch);
var state_25292__$1 = state_25292;
var statearr_25303_25329 = state_25292__$1;
(statearr_25303_25329[(2)] = inst_25283);

(statearr_25303_25329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25293 === (9))){
var state_25292__$1 = state_25292;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25304_25330 = state_25292__$1;
(statearr_25304_25330[(1)] = (11));

} else {
var statearr_25305_25331 = state_25292__$1;
(statearr_25305_25331[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25293 === (5))){
var inst_25269 = (state_25292[(7)]);
var state_25292__$1 = state_25292;
var statearr_25306_25332 = state_25292__$1;
(statearr_25306_25332[(2)] = inst_25269);

(statearr_25306_25332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25293 === (10))){
var inst_25288 = (state_25292[(2)]);
var state_25292__$1 = state_25292;
var statearr_25307_25333 = state_25292__$1;
(statearr_25307_25333[(2)] = inst_25288);

(statearr_25307_25333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25293 === (8))){
var inst_25269 = (state_25292[(7)]);
var inst_25279 = cljs.core.next.call(null,inst_25269);
var inst_25269__$1 = inst_25279;
var state_25292__$1 = (function (){var statearr_25308 = state_25292;
(statearr_25308[(7)] = inst_25269__$1);

return statearr_25308;
})();
var statearr_25309_25334 = state_25292__$1;
(statearr_25309_25334[(2)] = null);

(statearr_25309_25334[(1)] = (2));


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
});})(c__19893__auto__))
;
return ((function (switch__19872__auto__,c__19893__auto__){
return (function() {
var cljs$core$async$state_machine__19873__auto__ = null;
var cljs$core$async$state_machine__19873__auto____0 = (function (){
var statearr_25313 = [null,null,null,null,null,null,null,null];
(statearr_25313[(0)] = cljs$core$async$state_machine__19873__auto__);

(statearr_25313[(1)] = (1));

return statearr_25313;
});
var cljs$core$async$state_machine__19873__auto____1 = (function (state_25292){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_25292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e25314){if((e25314 instanceof Object)){
var ex__19876__auto__ = e25314;
var statearr_25315_25335 = state_25292;
(statearr_25315_25335[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25336 = state_25292;
state_25292 = G__25336;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$state_machine__19873__auto__ = function(state_25292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19873__auto____1.call(this,state_25292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19873__auto____0;
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19873__auto____1;
return cljs$core$async$state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto__))
})();
var state__19895__auto__ = (function (){var statearr_25316 = f__19894__auto__.call(null);
(statearr_25316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto__);

return statearr_25316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto__))
);

return c__19893__auto__;
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
var x__17440__auto__ = (((_ == null))?null:_);
var m__17441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,_);
} else {
var m__17441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,_);
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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m);
} else {
var m__17441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async25558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25558 = (function (mult,ch,cs,meta25559){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25559 = meta25559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25560,meta25559__$1){
var self__ = this;
var _25560__$1 = this;
return (new cljs.core.async.t_cljs$core$async25558(self__.mult,self__.ch,self__.cs,meta25559__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25560){
var self__ = this;
var _25560__$1 = this;
return self__.meta25559;
});})(cs))
;

cljs.core.async.t_cljs$core$async25558.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25558.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25558.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25558.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25558.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25558.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25559","meta25559",-1066974199,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25558";

cljs.core.async.t_cljs$core$async25558.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async25558");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25558 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25558(mult__$1,ch__$1,cs__$1,meta25559){
return (new cljs.core.async.t_cljs$core$async25558(mult__$1,ch__$1,cs__$1,meta25559));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25558(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19893__auto___25779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___25779,cs,m,dchan,dctr,done){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___25779,cs,m,dchan,dctr,done){
return (function (state_25691){
var state_val_25692 = (state_25691[(1)]);
if((state_val_25692 === (7))){
var inst_25687 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
var statearr_25693_25780 = state_25691__$1;
(statearr_25693_25780[(2)] = inst_25687);

(statearr_25693_25780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (20))){
var inst_25592 = (state_25691[(7)]);
var inst_25602 = cljs.core.first.call(null,inst_25592);
var inst_25603 = cljs.core.nth.call(null,inst_25602,(0),null);
var inst_25604 = cljs.core.nth.call(null,inst_25602,(1),null);
var state_25691__$1 = (function (){var statearr_25694 = state_25691;
(statearr_25694[(8)] = inst_25603);

return statearr_25694;
})();
if(cljs.core.truth_(inst_25604)){
var statearr_25695_25781 = state_25691__$1;
(statearr_25695_25781[(1)] = (22));

} else {
var statearr_25696_25782 = state_25691__$1;
(statearr_25696_25782[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (27))){
var inst_25634 = (state_25691[(9)]);
var inst_25639 = (state_25691[(10)]);
var inst_25632 = (state_25691[(11)]);
var inst_25563 = (state_25691[(12)]);
var inst_25639__$1 = cljs.core._nth.call(null,inst_25632,inst_25634);
var inst_25640 = cljs.core.async.put_BANG_.call(null,inst_25639__$1,inst_25563,done);
var state_25691__$1 = (function (){var statearr_25697 = state_25691;
(statearr_25697[(10)] = inst_25639__$1);

return statearr_25697;
})();
if(cljs.core.truth_(inst_25640)){
var statearr_25698_25783 = state_25691__$1;
(statearr_25698_25783[(1)] = (30));

} else {
var statearr_25699_25784 = state_25691__$1;
(statearr_25699_25784[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (1))){
var state_25691__$1 = state_25691;
var statearr_25700_25785 = state_25691__$1;
(statearr_25700_25785[(2)] = null);

(statearr_25700_25785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (24))){
var inst_25592 = (state_25691[(7)]);
var inst_25609 = (state_25691[(2)]);
var inst_25610 = cljs.core.next.call(null,inst_25592);
var inst_25572 = inst_25610;
var inst_25573 = null;
var inst_25574 = (0);
var inst_25575 = (0);
var state_25691__$1 = (function (){var statearr_25701 = state_25691;
(statearr_25701[(13)] = inst_25609);

(statearr_25701[(14)] = inst_25575);

(statearr_25701[(15)] = inst_25573);

(statearr_25701[(16)] = inst_25574);

(statearr_25701[(17)] = inst_25572);

return statearr_25701;
})();
var statearr_25702_25786 = state_25691__$1;
(statearr_25702_25786[(2)] = null);

(statearr_25702_25786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (39))){
var state_25691__$1 = state_25691;
var statearr_25706_25787 = state_25691__$1;
(statearr_25706_25787[(2)] = null);

(statearr_25706_25787[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (4))){
var inst_25563 = (state_25691[(12)]);
var inst_25563__$1 = (state_25691[(2)]);
var inst_25564 = (inst_25563__$1 == null);
var state_25691__$1 = (function (){var statearr_25707 = state_25691;
(statearr_25707[(12)] = inst_25563__$1);

return statearr_25707;
})();
if(cljs.core.truth_(inst_25564)){
var statearr_25708_25788 = state_25691__$1;
(statearr_25708_25788[(1)] = (5));

} else {
var statearr_25709_25789 = state_25691__$1;
(statearr_25709_25789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (15))){
var inst_25575 = (state_25691[(14)]);
var inst_25573 = (state_25691[(15)]);
var inst_25574 = (state_25691[(16)]);
var inst_25572 = (state_25691[(17)]);
var inst_25588 = (state_25691[(2)]);
var inst_25589 = (inst_25575 + (1));
var tmp25703 = inst_25573;
var tmp25704 = inst_25574;
var tmp25705 = inst_25572;
var inst_25572__$1 = tmp25705;
var inst_25573__$1 = tmp25703;
var inst_25574__$1 = tmp25704;
var inst_25575__$1 = inst_25589;
var state_25691__$1 = (function (){var statearr_25710 = state_25691;
(statearr_25710[(14)] = inst_25575__$1);

(statearr_25710[(15)] = inst_25573__$1);

(statearr_25710[(16)] = inst_25574__$1);

(statearr_25710[(18)] = inst_25588);

(statearr_25710[(17)] = inst_25572__$1);

return statearr_25710;
})();
var statearr_25711_25790 = state_25691__$1;
(statearr_25711_25790[(2)] = null);

(statearr_25711_25790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (21))){
var inst_25613 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
var statearr_25715_25791 = state_25691__$1;
(statearr_25715_25791[(2)] = inst_25613);

(statearr_25715_25791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (31))){
var inst_25639 = (state_25691[(10)]);
var inst_25643 = done.call(null,null);
var inst_25644 = cljs.core.async.untap_STAR_.call(null,m,inst_25639);
var state_25691__$1 = (function (){var statearr_25716 = state_25691;
(statearr_25716[(19)] = inst_25643);

return statearr_25716;
})();
var statearr_25717_25792 = state_25691__$1;
(statearr_25717_25792[(2)] = inst_25644);

(statearr_25717_25792[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (32))){
var inst_25634 = (state_25691[(9)]);
var inst_25631 = (state_25691[(20)]);
var inst_25633 = (state_25691[(21)]);
var inst_25632 = (state_25691[(11)]);
var inst_25646 = (state_25691[(2)]);
var inst_25647 = (inst_25634 + (1));
var tmp25712 = inst_25631;
var tmp25713 = inst_25633;
var tmp25714 = inst_25632;
var inst_25631__$1 = tmp25712;
var inst_25632__$1 = tmp25714;
var inst_25633__$1 = tmp25713;
var inst_25634__$1 = inst_25647;
var state_25691__$1 = (function (){var statearr_25718 = state_25691;
(statearr_25718[(9)] = inst_25634__$1);

(statearr_25718[(20)] = inst_25631__$1);

(statearr_25718[(21)] = inst_25633__$1);

(statearr_25718[(11)] = inst_25632__$1);

(statearr_25718[(22)] = inst_25646);

return statearr_25718;
})();
var statearr_25719_25793 = state_25691__$1;
(statearr_25719_25793[(2)] = null);

(statearr_25719_25793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (40))){
var inst_25659 = (state_25691[(23)]);
var inst_25663 = done.call(null,null);
var inst_25664 = cljs.core.async.untap_STAR_.call(null,m,inst_25659);
var state_25691__$1 = (function (){var statearr_25720 = state_25691;
(statearr_25720[(24)] = inst_25663);

return statearr_25720;
})();
var statearr_25721_25794 = state_25691__$1;
(statearr_25721_25794[(2)] = inst_25664);

(statearr_25721_25794[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (33))){
var inst_25650 = (state_25691[(25)]);
var inst_25652 = cljs.core.chunked_seq_QMARK_.call(null,inst_25650);
var state_25691__$1 = state_25691;
if(inst_25652){
var statearr_25722_25795 = state_25691__$1;
(statearr_25722_25795[(1)] = (36));

} else {
var statearr_25723_25796 = state_25691__$1;
(statearr_25723_25796[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (13))){
var inst_25582 = (state_25691[(26)]);
var inst_25585 = cljs.core.async.close_BANG_.call(null,inst_25582);
var state_25691__$1 = state_25691;
var statearr_25724_25797 = state_25691__$1;
(statearr_25724_25797[(2)] = inst_25585);

(statearr_25724_25797[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (22))){
var inst_25603 = (state_25691[(8)]);
var inst_25606 = cljs.core.async.close_BANG_.call(null,inst_25603);
var state_25691__$1 = state_25691;
var statearr_25725_25798 = state_25691__$1;
(statearr_25725_25798[(2)] = inst_25606);

(statearr_25725_25798[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (36))){
var inst_25650 = (state_25691[(25)]);
var inst_25654 = cljs.core.chunk_first.call(null,inst_25650);
var inst_25655 = cljs.core.chunk_rest.call(null,inst_25650);
var inst_25656 = cljs.core.count.call(null,inst_25654);
var inst_25631 = inst_25655;
var inst_25632 = inst_25654;
var inst_25633 = inst_25656;
var inst_25634 = (0);
var state_25691__$1 = (function (){var statearr_25726 = state_25691;
(statearr_25726[(9)] = inst_25634);

(statearr_25726[(20)] = inst_25631);

(statearr_25726[(21)] = inst_25633);

(statearr_25726[(11)] = inst_25632);

return statearr_25726;
})();
var statearr_25727_25799 = state_25691__$1;
(statearr_25727_25799[(2)] = null);

(statearr_25727_25799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (41))){
var inst_25650 = (state_25691[(25)]);
var inst_25666 = (state_25691[(2)]);
var inst_25667 = cljs.core.next.call(null,inst_25650);
var inst_25631 = inst_25667;
var inst_25632 = null;
var inst_25633 = (0);
var inst_25634 = (0);
var state_25691__$1 = (function (){var statearr_25728 = state_25691;
(statearr_25728[(9)] = inst_25634);

(statearr_25728[(20)] = inst_25631);

(statearr_25728[(21)] = inst_25633);

(statearr_25728[(11)] = inst_25632);

(statearr_25728[(27)] = inst_25666);

return statearr_25728;
})();
var statearr_25729_25800 = state_25691__$1;
(statearr_25729_25800[(2)] = null);

(statearr_25729_25800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (43))){
var state_25691__$1 = state_25691;
var statearr_25730_25801 = state_25691__$1;
(statearr_25730_25801[(2)] = null);

(statearr_25730_25801[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (29))){
var inst_25675 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
var statearr_25731_25802 = state_25691__$1;
(statearr_25731_25802[(2)] = inst_25675);

(statearr_25731_25802[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (44))){
var inst_25684 = (state_25691[(2)]);
var state_25691__$1 = (function (){var statearr_25732 = state_25691;
(statearr_25732[(28)] = inst_25684);

return statearr_25732;
})();
var statearr_25733_25803 = state_25691__$1;
(statearr_25733_25803[(2)] = null);

(statearr_25733_25803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (6))){
var inst_25623 = (state_25691[(29)]);
var inst_25622 = cljs.core.deref.call(null,cs);
var inst_25623__$1 = cljs.core.keys.call(null,inst_25622);
var inst_25624 = cljs.core.count.call(null,inst_25623__$1);
var inst_25625 = cljs.core.reset_BANG_.call(null,dctr,inst_25624);
var inst_25630 = cljs.core.seq.call(null,inst_25623__$1);
var inst_25631 = inst_25630;
var inst_25632 = null;
var inst_25633 = (0);
var inst_25634 = (0);
var state_25691__$1 = (function (){var statearr_25734 = state_25691;
(statearr_25734[(9)] = inst_25634);

(statearr_25734[(20)] = inst_25631);

(statearr_25734[(21)] = inst_25633);

(statearr_25734[(11)] = inst_25632);

(statearr_25734[(29)] = inst_25623__$1);

(statearr_25734[(30)] = inst_25625);

return statearr_25734;
})();
var statearr_25735_25804 = state_25691__$1;
(statearr_25735_25804[(2)] = null);

(statearr_25735_25804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (28))){
var inst_25650 = (state_25691[(25)]);
var inst_25631 = (state_25691[(20)]);
var inst_25650__$1 = cljs.core.seq.call(null,inst_25631);
var state_25691__$1 = (function (){var statearr_25736 = state_25691;
(statearr_25736[(25)] = inst_25650__$1);

return statearr_25736;
})();
if(inst_25650__$1){
var statearr_25737_25805 = state_25691__$1;
(statearr_25737_25805[(1)] = (33));

} else {
var statearr_25738_25806 = state_25691__$1;
(statearr_25738_25806[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (25))){
var inst_25634 = (state_25691[(9)]);
var inst_25633 = (state_25691[(21)]);
var inst_25636 = (inst_25634 < inst_25633);
var inst_25637 = inst_25636;
var state_25691__$1 = state_25691;
if(cljs.core.truth_(inst_25637)){
var statearr_25739_25807 = state_25691__$1;
(statearr_25739_25807[(1)] = (27));

} else {
var statearr_25740_25808 = state_25691__$1;
(statearr_25740_25808[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (34))){
var state_25691__$1 = state_25691;
var statearr_25741_25809 = state_25691__$1;
(statearr_25741_25809[(2)] = null);

(statearr_25741_25809[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (17))){
var state_25691__$1 = state_25691;
var statearr_25742_25810 = state_25691__$1;
(statearr_25742_25810[(2)] = null);

(statearr_25742_25810[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (3))){
var inst_25689 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25691__$1,inst_25689);
} else {
if((state_val_25692 === (12))){
var inst_25618 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
var statearr_25743_25811 = state_25691__$1;
(statearr_25743_25811[(2)] = inst_25618);

(statearr_25743_25811[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (2))){
var state_25691__$1 = state_25691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25691__$1,(4),ch);
} else {
if((state_val_25692 === (23))){
var state_25691__$1 = state_25691;
var statearr_25744_25812 = state_25691__$1;
(statearr_25744_25812[(2)] = null);

(statearr_25744_25812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (35))){
var inst_25673 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
var statearr_25745_25813 = state_25691__$1;
(statearr_25745_25813[(2)] = inst_25673);

(statearr_25745_25813[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (19))){
var inst_25592 = (state_25691[(7)]);
var inst_25596 = cljs.core.chunk_first.call(null,inst_25592);
var inst_25597 = cljs.core.chunk_rest.call(null,inst_25592);
var inst_25598 = cljs.core.count.call(null,inst_25596);
var inst_25572 = inst_25597;
var inst_25573 = inst_25596;
var inst_25574 = inst_25598;
var inst_25575 = (0);
var state_25691__$1 = (function (){var statearr_25746 = state_25691;
(statearr_25746[(14)] = inst_25575);

(statearr_25746[(15)] = inst_25573);

(statearr_25746[(16)] = inst_25574);

(statearr_25746[(17)] = inst_25572);

return statearr_25746;
})();
var statearr_25747_25814 = state_25691__$1;
(statearr_25747_25814[(2)] = null);

(statearr_25747_25814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (11))){
var inst_25592 = (state_25691[(7)]);
var inst_25572 = (state_25691[(17)]);
var inst_25592__$1 = cljs.core.seq.call(null,inst_25572);
var state_25691__$1 = (function (){var statearr_25748 = state_25691;
(statearr_25748[(7)] = inst_25592__$1);

return statearr_25748;
})();
if(inst_25592__$1){
var statearr_25749_25815 = state_25691__$1;
(statearr_25749_25815[(1)] = (16));

} else {
var statearr_25750_25816 = state_25691__$1;
(statearr_25750_25816[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (9))){
var inst_25620 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
var statearr_25751_25817 = state_25691__$1;
(statearr_25751_25817[(2)] = inst_25620);

(statearr_25751_25817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (5))){
var inst_25570 = cljs.core.deref.call(null,cs);
var inst_25571 = cljs.core.seq.call(null,inst_25570);
var inst_25572 = inst_25571;
var inst_25573 = null;
var inst_25574 = (0);
var inst_25575 = (0);
var state_25691__$1 = (function (){var statearr_25752 = state_25691;
(statearr_25752[(14)] = inst_25575);

(statearr_25752[(15)] = inst_25573);

(statearr_25752[(16)] = inst_25574);

(statearr_25752[(17)] = inst_25572);

return statearr_25752;
})();
var statearr_25753_25818 = state_25691__$1;
(statearr_25753_25818[(2)] = null);

(statearr_25753_25818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (14))){
var state_25691__$1 = state_25691;
var statearr_25754_25819 = state_25691__$1;
(statearr_25754_25819[(2)] = null);

(statearr_25754_25819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (45))){
var inst_25681 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
var statearr_25755_25820 = state_25691__$1;
(statearr_25755_25820[(2)] = inst_25681);

(statearr_25755_25820[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (26))){
var inst_25623 = (state_25691[(29)]);
var inst_25677 = (state_25691[(2)]);
var inst_25678 = cljs.core.seq.call(null,inst_25623);
var state_25691__$1 = (function (){var statearr_25756 = state_25691;
(statearr_25756[(31)] = inst_25677);

return statearr_25756;
})();
if(inst_25678){
var statearr_25757_25821 = state_25691__$1;
(statearr_25757_25821[(1)] = (42));

} else {
var statearr_25758_25822 = state_25691__$1;
(statearr_25758_25822[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (16))){
var inst_25592 = (state_25691[(7)]);
var inst_25594 = cljs.core.chunked_seq_QMARK_.call(null,inst_25592);
var state_25691__$1 = state_25691;
if(inst_25594){
var statearr_25759_25823 = state_25691__$1;
(statearr_25759_25823[(1)] = (19));

} else {
var statearr_25760_25824 = state_25691__$1;
(statearr_25760_25824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (38))){
var inst_25670 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
var statearr_25761_25825 = state_25691__$1;
(statearr_25761_25825[(2)] = inst_25670);

(statearr_25761_25825[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (30))){
var state_25691__$1 = state_25691;
var statearr_25762_25826 = state_25691__$1;
(statearr_25762_25826[(2)] = null);

(statearr_25762_25826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (10))){
var inst_25575 = (state_25691[(14)]);
var inst_25573 = (state_25691[(15)]);
var inst_25581 = cljs.core._nth.call(null,inst_25573,inst_25575);
var inst_25582 = cljs.core.nth.call(null,inst_25581,(0),null);
var inst_25583 = cljs.core.nth.call(null,inst_25581,(1),null);
var state_25691__$1 = (function (){var statearr_25763 = state_25691;
(statearr_25763[(26)] = inst_25582);

return statearr_25763;
})();
if(cljs.core.truth_(inst_25583)){
var statearr_25764_25827 = state_25691__$1;
(statearr_25764_25827[(1)] = (13));

} else {
var statearr_25765_25828 = state_25691__$1;
(statearr_25765_25828[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (18))){
var inst_25616 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
var statearr_25766_25829 = state_25691__$1;
(statearr_25766_25829[(2)] = inst_25616);

(statearr_25766_25829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (42))){
var state_25691__$1 = state_25691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25691__$1,(45),dchan);
} else {
if((state_val_25692 === (37))){
var inst_25650 = (state_25691[(25)]);
var inst_25659 = (state_25691[(23)]);
var inst_25563 = (state_25691[(12)]);
var inst_25659__$1 = cljs.core.first.call(null,inst_25650);
var inst_25660 = cljs.core.async.put_BANG_.call(null,inst_25659__$1,inst_25563,done);
var state_25691__$1 = (function (){var statearr_25767 = state_25691;
(statearr_25767[(23)] = inst_25659__$1);

return statearr_25767;
})();
if(cljs.core.truth_(inst_25660)){
var statearr_25768_25830 = state_25691__$1;
(statearr_25768_25830[(1)] = (39));

} else {
var statearr_25769_25831 = state_25691__$1;
(statearr_25769_25831[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (8))){
var inst_25575 = (state_25691[(14)]);
var inst_25574 = (state_25691[(16)]);
var inst_25577 = (inst_25575 < inst_25574);
var inst_25578 = inst_25577;
var state_25691__$1 = state_25691;
if(cljs.core.truth_(inst_25578)){
var statearr_25770_25832 = state_25691__$1;
(statearr_25770_25832[(1)] = (10));

} else {
var statearr_25771_25833 = state_25691__$1;
(statearr_25771_25833[(1)] = (11));

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
});})(c__19893__auto___25779,cs,m,dchan,dctr,done))
;
return ((function (switch__19872__auto__,c__19893__auto___25779,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19873__auto__ = null;
var cljs$core$async$mult_$_state_machine__19873__auto____0 = (function (){
var statearr_25775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25775[(0)] = cljs$core$async$mult_$_state_machine__19873__auto__);

(statearr_25775[(1)] = (1));

return statearr_25775;
});
var cljs$core$async$mult_$_state_machine__19873__auto____1 = (function (state_25691){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_25691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e25776){if((e25776 instanceof Object)){
var ex__19876__auto__ = e25776;
var statearr_25777_25834 = state_25691;
(statearr_25777_25834[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25835 = state_25691;
state_25691 = G__25835;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19873__auto__ = function(state_25691){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19873__auto____1.call(this,state_25691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19873__auto____0;
cljs$core$async$mult_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19873__auto____1;
return cljs$core$async$mult_$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___25779,cs,m,dchan,dctr,done))
})();
var state__19895__auto__ = (function (){var statearr_25778 = f__19894__auto__.call(null);
(statearr_25778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___25779);

return statearr_25778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___25779,cs,m,dchan,dctr,done))
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
var args25836 = [];
var len__17843__auto___25839 = arguments.length;
var i__17844__auto___25840 = (0);
while(true){
if((i__17844__auto___25840 < len__17843__auto___25839)){
args25836.push((arguments[i__17844__auto___25840]));

var G__25841 = (i__17844__auto___25840 + (1));
i__17844__auto___25840 = G__25841;
continue;
} else {
}
break;
}

var G__25838 = args25836.length;
switch (G__25838) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25836.length)].join('')));

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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m);
} else {
var m__17441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m);
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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,state_map);
} else {
var m__17441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,state_map);
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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,mode);
} else {
var m__17441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17850__auto__ = [];
var len__17843__auto___25853 = arguments.length;
var i__17844__auto___25854 = (0);
while(true){
if((i__17844__auto___25854 < len__17843__auto___25853)){
args__17850__auto__.push((arguments[i__17844__auto___25854]));

var G__25855 = (i__17844__auto___25854 + (1));
i__17844__auto___25854 = G__25855;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((3) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17851__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25847){
var map__25848 = p__25847;
var map__25848__$1 = ((((!((map__25848 == null)))?((((map__25848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25848):map__25848);
var opts = map__25848__$1;
var statearr_25850_25856 = state;
(statearr_25850_25856[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25848,map__25848__$1,opts){
return (function (val){
var statearr_25851_25857 = state;
(statearr_25851_25857[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25848,map__25848__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25852_25858 = state;
(statearr_25852_25858[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25843){
var G__25844 = cljs.core.first.call(null,seq25843);
var seq25843__$1 = cljs.core.next.call(null,seq25843);
var G__25845 = cljs.core.first.call(null,seq25843__$1);
var seq25843__$2 = cljs.core.next.call(null,seq25843__$1);
var G__25846 = cljs.core.first.call(null,seq25843__$2);
var seq25843__$3 = cljs.core.next.call(null,seq25843__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25844,G__25845,G__25846,seq25843__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26022 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26022 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26023){
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
this.meta26023 = meta26023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26024,meta26023__$1){
var self__ = this;
var _26024__$1 = this;
return (new cljs.core.async.t_cljs$core$async26022(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26023__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26024){
var self__ = this;
var _26024__$1 = this;
return self__.meta26023;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26022.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26022.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26023","meta26023",-1109084382,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26022";

cljs.core.async.t_cljs$core$async26022.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async26022");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26022 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26022(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26023){
return (new cljs.core.async.t_cljs$core$async26022(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26023));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26022(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19893__auto___26185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___26185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___26185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26122){
var state_val_26123 = (state_26122[(1)]);
if((state_val_26123 === (7))){
var inst_26040 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
var statearr_26124_26186 = state_26122__$1;
(statearr_26124_26186[(2)] = inst_26040);

(statearr_26124_26186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (20))){
var inst_26052 = (state_26122[(7)]);
var state_26122__$1 = state_26122;
var statearr_26125_26187 = state_26122__$1;
(statearr_26125_26187[(2)] = inst_26052);

(statearr_26125_26187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (27))){
var state_26122__$1 = state_26122;
var statearr_26126_26188 = state_26122__$1;
(statearr_26126_26188[(2)] = null);

(statearr_26126_26188[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (1))){
var inst_26028 = (state_26122[(8)]);
var inst_26028__$1 = calc_state.call(null);
var inst_26030 = (inst_26028__$1 == null);
var inst_26031 = cljs.core.not.call(null,inst_26030);
var state_26122__$1 = (function (){var statearr_26127 = state_26122;
(statearr_26127[(8)] = inst_26028__$1);

return statearr_26127;
})();
if(inst_26031){
var statearr_26128_26189 = state_26122__$1;
(statearr_26128_26189[(1)] = (2));

} else {
var statearr_26129_26190 = state_26122__$1;
(statearr_26129_26190[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (24))){
var inst_26096 = (state_26122[(9)]);
var inst_26082 = (state_26122[(10)]);
var inst_26075 = (state_26122[(11)]);
var inst_26096__$1 = inst_26075.call(null,inst_26082);
var state_26122__$1 = (function (){var statearr_26130 = state_26122;
(statearr_26130[(9)] = inst_26096__$1);

return statearr_26130;
})();
if(cljs.core.truth_(inst_26096__$1)){
var statearr_26131_26191 = state_26122__$1;
(statearr_26131_26191[(1)] = (29));

} else {
var statearr_26132_26192 = state_26122__$1;
(statearr_26132_26192[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (4))){
var inst_26043 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
if(cljs.core.truth_(inst_26043)){
var statearr_26133_26193 = state_26122__$1;
(statearr_26133_26193[(1)] = (8));

} else {
var statearr_26134_26194 = state_26122__$1;
(statearr_26134_26194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (15))){
var inst_26069 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
if(cljs.core.truth_(inst_26069)){
var statearr_26135_26195 = state_26122__$1;
(statearr_26135_26195[(1)] = (19));

} else {
var statearr_26136_26196 = state_26122__$1;
(statearr_26136_26196[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (21))){
var inst_26074 = (state_26122[(12)]);
var inst_26074__$1 = (state_26122[(2)]);
var inst_26075 = cljs.core.get.call(null,inst_26074__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26076 = cljs.core.get.call(null,inst_26074__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26077 = cljs.core.get.call(null,inst_26074__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26122__$1 = (function (){var statearr_26137 = state_26122;
(statearr_26137[(13)] = inst_26076);

(statearr_26137[(11)] = inst_26075);

(statearr_26137[(12)] = inst_26074__$1);

return statearr_26137;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26122__$1,(22),inst_26077);
} else {
if((state_val_26123 === (31))){
var inst_26104 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
if(cljs.core.truth_(inst_26104)){
var statearr_26138_26197 = state_26122__$1;
(statearr_26138_26197[(1)] = (32));

} else {
var statearr_26139_26198 = state_26122__$1;
(statearr_26139_26198[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (32))){
var inst_26081 = (state_26122[(14)]);
var state_26122__$1 = state_26122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26122__$1,(35),out,inst_26081);
} else {
if((state_val_26123 === (33))){
var inst_26074 = (state_26122[(12)]);
var inst_26052 = inst_26074;
var state_26122__$1 = (function (){var statearr_26140 = state_26122;
(statearr_26140[(7)] = inst_26052);

return statearr_26140;
})();
var statearr_26141_26199 = state_26122__$1;
(statearr_26141_26199[(2)] = null);

(statearr_26141_26199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (13))){
var inst_26052 = (state_26122[(7)]);
var inst_26059 = inst_26052.cljs$lang$protocol_mask$partition0$;
var inst_26060 = (inst_26059 & (64));
var inst_26061 = inst_26052.cljs$core$ISeq$;
var inst_26062 = (inst_26060) || (inst_26061);
var state_26122__$1 = state_26122;
if(cljs.core.truth_(inst_26062)){
var statearr_26142_26200 = state_26122__$1;
(statearr_26142_26200[(1)] = (16));

} else {
var statearr_26143_26201 = state_26122__$1;
(statearr_26143_26201[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (22))){
var inst_26082 = (state_26122[(10)]);
var inst_26081 = (state_26122[(14)]);
var inst_26080 = (state_26122[(2)]);
var inst_26081__$1 = cljs.core.nth.call(null,inst_26080,(0),null);
var inst_26082__$1 = cljs.core.nth.call(null,inst_26080,(1),null);
var inst_26083 = (inst_26081__$1 == null);
var inst_26084 = cljs.core._EQ_.call(null,inst_26082__$1,change);
var inst_26085 = (inst_26083) || (inst_26084);
var state_26122__$1 = (function (){var statearr_26144 = state_26122;
(statearr_26144[(10)] = inst_26082__$1);

(statearr_26144[(14)] = inst_26081__$1);

return statearr_26144;
})();
if(cljs.core.truth_(inst_26085)){
var statearr_26145_26202 = state_26122__$1;
(statearr_26145_26202[(1)] = (23));

} else {
var statearr_26146_26203 = state_26122__$1;
(statearr_26146_26203[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (36))){
var inst_26074 = (state_26122[(12)]);
var inst_26052 = inst_26074;
var state_26122__$1 = (function (){var statearr_26147 = state_26122;
(statearr_26147[(7)] = inst_26052);

return statearr_26147;
})();
var statearr_26148_26204 = state_26122__$1;
(statearr_26148_26204[(2)] = null);

(statearr_26148_26204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (29))){
var inst_26096 = (state_26122[(9)]);
var state_26122__$1 = state_26122;
var statearr_26149_26205 = state_26122__$1;
(statearr_26149_26205[(2)] = inst_26096);

(statearr_26149_26205[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (6))){
var state_26122__$1 = state_26122;
var statearr_26150_26206 = state_26122__$1;
(statearr_26150_26206[(2)] = false);

(statearr_26150_26206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (28))){
var inst_26092 = (state_26122[(2)]);
var inst_26093 = calc_state.call(null);
var inst_26052 = inst_26093;
var state_26122__$1 = (function (){var statearr_26151 = state_26122;
(statearr_26151[(15)] = inst_26092);

(statearr_26151[(7)] = inst_26052);

return statearr_26151;
})();
var statearr_26152_26207 = state_26122__$1;
(statearr_26152_26207[(2)] = null);

(statearr_26152_26207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (25))){
var inst_26118 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
var statearr_26153_26208 = state_26122__$1;
(statearr_26153_26208[(2)] = inst_26118);

(statearr_26153_26208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (34))){
var inst_26116 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
var statearr_26154_26209 = state_26122__$1;
(statearr_26154_26209[(2)] = inst_26116);

(statearr_26154_26209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (17))){
var state_26122__$1 = state_26122;
var statearr_26155_26210 = state_26122__$1;
(statearr_26155_26210[(2)] = false);

(statearr_26155_26210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (3))){
var state_26122__$1 = state_26122;
var statearr_26156_26211 = state_26122__$1;
(statearr_26156_26211[(2)] = false);

(statearr_26156_26211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (12))){
var inst_26120 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26122__$1,inst_26120);
} else {
if((state_val_26123 === (2))){
var inst_26028 = (state_26122[(8)]);
var inst_26033 = inst_26028.cljs$lang$protocol_mask$partition0$;
var inst_26034 = (inst_26033 & (64));
var inst_26035 = inst_26028.cljs$core$ISeq$;
var inst_26036 = (inst_26034) || (inst_26035);
var state_26122__$1 = state_26122;
if(cljs.core.truth_(inst_26036)){
var statearr_26157_26212 = state_26122__$1;
(statearr_26157_26212[(1)] = (5));

} else {
var statearr_26158_26213 = state_26122__$1;
(statearr_26158_26213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (23))){
var inst_26081 = (state_26122[(14)]);
var inst_26087 = (inst_26081 == null);
var state_26122__$1 = state_26122;
if(cljs.core.truth_(inst_26087)){
var statearr_26159_26214 = state_26122__$1;
(statearr_26159_26214[(1)] = (26));

} else {
var statearr_26160_26215 = state_26122__$1;
(statearr_26160_26215[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (35))){
var inst_26107 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
if(cljs.core.truth_(inst_26107)){
var statearr_26161_26216 = state_26122__$1;
(statearr_26161_26216[(1)] = (36));

} else {
var statearr_26162_26217 = state_26122__$1;
(statearr_26162_26217[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (19))){
var inst_26052 = (state_26122[(7)]);
var inst_26071 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26052);
var state_26122__$1 = state_26122;
var statearr_26163_26218 = state_26122__$1;
(statearr_26163_26218[(2)] = inst_26071);

(statearr_26163_26218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (11))){
var inst_26052 = (state_26122[(7)]);
var inst_26056 = (inst_26052 == null);
var inst_26057 = cljs.core.not.call(null,inst_26056);
var state_26122__$1 = state_26122;
if(inst_26057){
var statearr_26164_26219 = state_26122__$1;
(statearr_26164_26219[(1)] = (13));

} else {
var statearr_26165_26220 = state_26122__$1;
(statearr_26165_26220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (9))){
var inst_26028 = (state_26122[(8)]);
var state_26122__$1 = state_26122;
var statearr_26166_26221 = state_26122__$1;
(statearr_26166_26221[(2)] = inst_26028);

(statearr_26166_26221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (5))){
var state_26122__$1 = state_26122;
var statearr_26167_26222 = state_26122__$1;
(statearr_26167_26222[(2)] = true);

(statearr_26167_26222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (14))){
var state_26122__$1 = state_26122;
var statearr_26168_26223 = state_26122__$1;
(statearr_26168_26223[(2)] = false);

(statearr_26168_26223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (26))){
var inst_26082 = (state_26122[(10)]);
var inst_26089 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26082);
var state_26122__$1 = state_26122;
var statearr_26169_26224 = state_26122__$1;
(statearr_26169_26224[(2)] = inst_26089);

(statearr_26169_26224[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (16))){
var state_26122__$1 = state_26122;
var statearr_26170_26225 = state_26122__$1;
(statearr_26170_26225[(2)] = true);

(statearr_26170_26225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (38))){
var inst_26112 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
var statearr_26171_26226 = state_26122__$1;
(statearr_26171_26226[(2)] = inst_26112);

(statearr_26171_26226[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (30))){
var inst_26076 = (state_26122[(13)]);
var inst_26082 = (state_26122[(10)]);
var inst_26075 = (state_26122[(11)]);
var inst_26099 = cljs.core.empty_QMARK_.call(null,inst_26075);
var inst_26100 = inst_26076.call(null,inst_26082);
var inst_26101 = cljs.core.not.call(null,inst_26100);
var inst_26102 = (inst_26099) && (inst_26101);
var state_26122__$1 = state_26122;
var statearr_26172_26227 = state_26122__$1;
(statearr_26172_26227[(2)] = inst_26102);

(statearr_26172_26227[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (10))){
var inst_26028 = (state_26122[(8)]);
var inst_26048 = (state_26122[(2)]);
var inst_26049 = cljs.core.get.call(null,inst_26048,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26050 = cljs.core.get.call(null,inst_26048,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26051 = cljs.core.get.call(null,inst_26048,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26052 = inst_26028;
var state_26122__$1 = (function (){var statearr_26173 = state_26122;
(statearr_26173[(16)] = inst_26049);

(statearr_26173[(17)] = inst_26051);

(statearr_26173[(18)] = inst_26050);

(statearr_26173[(7)] = inst_26052);

return statearr_26173;
})();
var statearr_26174_26228 = state_26122__$1;
(statearr_26174_26228[(2)] = null);

(statearr_26174_26228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (18))){
var inst_26066 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
var statearr_26175_26229 = state_26122__$1;
(statearr_26175_26229[(2)] = inst_26066);

(statearr_26175_26229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (37))){
var state_26122__$1 = state_26122;
var statearr_26176_26230 = state_26122__$1;
(statearr_26176_26230[(2)] = null);

(statearr_26176_26230[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26123 === (8))){
var inst_26028 = (state_26122[(8)]);
var inst_26045 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26028);
var state_26122__$1 = state_26122;
var statearr_26177_26231 = state_26122__$1;
(statearr_26177_26231[(2)] = inst_26045);

(statearr_26177_26231[(1)] = (10));


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
});})(c__19893__auto___26185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19872__auto__,c__19893__auto___26185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19873__auto__ = null;
var cljs$core$async$mix_$_state_machine__19873__auto____0 = (function (){
var statearr_26181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26181[(0)] = cljs$core$async$mix_$_state_machine__19873__auto__);

(statearr_26181[(1)] = (1));

return statearr_26181;
});
var cljs$core$async$mix_$_state_machine__19873__auto____1 = (function (state_26122){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_26122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e26182){if((e26182 instanceof Object)){
var ex__19876__auto__ = e26182;
var statearr_26183_26232 = state_26122;
(statearr_26183_26232[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26233 = state_26122;
state_26122 = G__26233;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19873__auto__ = function(state_26122){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19873__auto____1.call(this,state_26122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19873__auto____0;
cljs$core$async$mix_$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19873__auto____1;
return cljs$core$async$mix_$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___26185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19895__auto__ = (function (){var statearr_26184 = f__19894__auto__.call(null);
(statearr_26184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___26185);

return statearr_26184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___26185,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26234 = [];
var len__17843__auto___26237 = arguments.length;
var i__17844__auto___26238 = (0);
while(true){
if((i__17844__auto___26238 < len__17843__auto___26237)){
args26234.push((arguments[i__17844__auto___26238]));

var G__26239 = (i__17844__auto___26238 + (1));
i__17844__auto___26238 = G__26239;
continue;
} else {
}
break;
}

var G__26236 = args26234.length;
switch (G__26236) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26234.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p);
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
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v);
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
var args26242 = [];
var len__17843__auto___26367 = arguments.length;
var i__17844__auto___26368 = (0);
while(true){
if((i__17844__auto___26368 < len__17843__auto___26367)){
args26242.push((arguments[i__17844__auto___26368]));

var G__26369 = (i__17844__auto___26368 + (1));
i__17844__auto___26368 = G__26369;
continue;
} else {
}
break;
}

var G__26244 = args26242.length;
switch (G__26244) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26242.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16785__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16785__auto__,mults){
return (function (p1__26241_SHARP_){
if(cljs.core.truth_(p1__26241_SHARP_.call(null,topic))){
return p1__26241_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26241_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16785__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26245 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26246){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26246 = meta26246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26247,meta26246__$1){
var self__ = this;
var _26247__$1 = this;
return (new cljs.core.async.t_cljs$core$async26245(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26246__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26247){
var self__ = this;
var _26247__$1 = this;
return self__.meta26246;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26245.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26245.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26245.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26245.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26245.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26245.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26245.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26246","meta26246",-685618736,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26245";

cljs.core.async.t_cljs$core$async26245.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async26245");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26245 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26245(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26246){
return (new cljs.core.async.t_cljs$core$async26245(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26246));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26245(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19893__auto___26371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___26371,mults,ensure_mult,p){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___26371,mults,ensure_mult,p){
return (function (state_26319){
var state_val_26320 = (state_26319[(1)]);
if((state_val_26320 === (7))){
var inst_26315 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
var statearr_26321_26372 = state_26319__$1;
(statearr_26321_26372[(2)] = inst_26315);

(statearr_26321_26372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (20))){
var state_26319__$1 = state_26319;
var statearr_26322_26373 = state_26319__$1;
(statearr_26322_26373[(2)] = null);

(statearr_26322_26373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (1))){
var state_26319__$1 = state_26319;
var statearr_26323_26374 = state_26319__$1;
(statearr_26323_26374[(2)] = null);

(statearr_26323_26374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (24))){
var inst_26298 = (state_26319[(7)]);
var inst_26307 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26298);
var state_26319__$1 = state_26319;
var statearr_26324_26375 = state_26319__$1;
(statearr_26324_26375[(2)] = inst_26307);

(statearr_26324_26375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (4))){
var inst_26250 = (state_26319[(8)]);
var inst_26250__$1 = (state_26319[(2)]);
var inst_26251 = (inst_26250__$1 == null);
var state_26319__$1 = (function (){var statearr_26325 = state_26319;
(statearr_26325[(8)] = inst_26250__$1);

return statearr_26325;
})();
if(cljs.core.truth_(inst_26251)){
var statearr_26326_26376 = state_26319__$1;
(statearr_26326_26376[(1)] = (5));

} else {
var statearr_26327_26377 = state_26319__$1;
(statearr_26327_26377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (15))){
var inst_26292 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
var statearr_26328_26378 = state_26319__$1;
(statearr_26328_26378[(2)] = inst_26292);

(statearr_26328_26378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (21))){
var inst_26312 = (state_26319[(2)]);
var state_26319__$1 = (function (){var statearr_26329 = state_26319;
(statearr_26329[(9)] = inst_26312);

return statearr_26329;
})();
var statearr_26330_26379 = state_26319__$1;
(statearr_26330_26379[(2)] = null);

(statearr_26330_26379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (13))){
var inst_26274 = (state_26319[(10)]);
var inst_26276 = cljs.core.chunked_seq_QMARK_.call(null,inst_26274);
var state_26319__$1 = state_26319;
if(inst_26276){
var statearr_26331_26380 = state_26319__$1;
(statearr_26331_26380[(1)] = (16));

} else {
var statearr_26332_26381 = state_26319__$1;
(statearr_26332_26381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (22))){
var inst_26304 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
if(cljs.core.truth_(inst_26304)){
var statearr_26333_26382 = state_26319__$1;
(statearr_26333_26382[(1)] = (23));

} else {
var statearr_26334_26383 = state_26319__$1;
(statearr_26334_26383[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (6))){
var inst_26250 = (state_26319[(8)]);
var inst_26298 = (state_26319[(7)]);
var inst_26300 = (state_26319[(11)]);
var inst_26298__$1 = topic_fn.call(null,inst_26250);
var inst_26299 = cljs.core.deref.call(null,mults);
var inst_26300__$1 = cljs.core.get.call(null,inst_26299,inst_26298__$1);
var state_26319__$1 = (function (){var statearr_26335 = state_26319;
(statearr_26335[(7)] = inst_26298__$1);

(statearr_26335[(11)] = inst_26300__$1);

return statearr_26335;
})();
if(cljs.core.truth_(inst_26300__$1)){
var statearr_26336_26384 = state_26319__$1;
(statearr_26336_26384[(1)] = (19));

} else {
var statearr_26337_26385 = state_26319__$1;
(statearr_26337_26385[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (25))){
var inst_26309 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
var statearr_26338_26386 = state_26319__$1;
(statearr_26338_26386[(2)] = inst_26309);

(statearr_26338_26386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (17))){
var inst_26274 = (state_26319[(10)]);
var inst_26283 = cljs.core.first.call(null,inst_26274);
var inst_26284 = cljs.core.async.muxch_STAR_.call(null,inst_26283);
var inst_26285 = cljs.core.async.close_BANG_.call(null,inst_26284);
var inst_26286 = cljs.core.next.call(null,inst_26274);
var inst_26260 = inst_26286;
var inst_26261 = null;
var inst_26262 = (0);
var inst_26263 = (0);
var state_26319__$1 = (function (){var statearr_26339 = state_26319;
(statearr_26339[(12)] = inst_26262);

(statearr_26339[(13)] = inst_26285);

(statearr_26339[(14)] = inst_26261);

(statearr_26339[(15)] = inst_26263);

(statearr_26339[(16)] = inst_26260);

return statearr_26339;
})();
var statearr_26340_26387 = state_26319__$1;
(statearr_26340_26387[(2)] = null);

(statearr_26340_26387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (3))){
var inst_26317 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26319__$1,inst_26317);
} else {
if((state_val_26320 === (12))){
var inst_26294 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
var statearr_26341_26388 = state_26319__$1;
(statearr_26341_26388[(2)] = inst_26294);

(statearr_26341_26388[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (2))){
var state_26319__$1 = state_26319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26319__$1,(4),ch);
} else {
if((state_val_26320 === (23))){
var state_26319__$1 = state_26319;
var statearr_26342_26389 = state_26319__$1;
(statearr_26342_26389[(2)] = null);

(statearr_26342_26389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (19))){
var inst_26250 = (state_26319[(8)]);
var inst_26300 = (state_26319[(11)]);
var inst_26302 = cljs.core.async.muxch_STAR_.call(null,inst_26300);
var state_26319__$1 = state_26319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26319__$1,(22),inst_26302,inst_26250);
} else {
if((state_val_26320 === (11))){
var inst_26260 = (state_26319[(16)]);
var inst_26274 = (state_26319[(10)]);
var inst_26274__$1 = cljs.core.seq.call(null,inst_26260);
var state_26319__$1 = (function (){var statearr_26343 = state_26319;
(statearr_26343[(10)] = inst_26274__$1);

return statearr_26343;
})();
if(inst_26274__$1){
var statearr_26344_26390 = state_26319__$1;
(statearr_26344_26390[(1)] = (13));

} else {
var statearr_26345_26391 = state_26319__$1;
(statearr_26345_26391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (9))){
var inst_26296 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
var statearr_26346_26392 = state_26319__$1;
(statearr_26346_26392[(2)] = inst_26296);

(statearr_26346_26392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (5))){
var inst_26257 = cljs.core.deref.call(null,mults);
var inst_26258 = cljs.core.vals.call(null,inst_26257);
var inst_26259 = cljs.core.seq.call(null,inst_26258);
var inst_26260 = inst_26259;
var inst_26261 = null;
var inst_26262 = (0);
var inst_26263 = (0);
var state_26319__$1 = (function (){var statearr_26347 = state_26319;
(statearr_26347[(12)] = inst_26262);

(statearr_26347[(14)] = inst_26261);

(statearr_26347[(15)] = inst_26263);

(statearr_26347[(16)] = inst_26260);

return statearr_26347;
})();
var statearr_26348_26393 = state_26319__$1;
(statearr_26348_26393[(2)] = null);

(statearr_26348_26393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (14))){
var state_26319__$1 = state_26319;
var statearr_26352_26394 = state_26319__$1;
(statearr_26352_26394[(2)] = null);

(statearr_26352_26394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (16))){
var inst_26274 = (state_26319[(10)]);
var inst_26278 = cljs.core.chunk_first.call(null,inst_26274);
var inst_26279 = cljs.core.chunk_rest.call(null,inst_26274);
var inst_26280 = cljs.core.count.call(null,inst_26278);
var inst_26260 = inst_26279;
var inst_26261 = inst_26278;
var inst_26262 = inst_26280;
var inst_26263 = (0);
var state_26319__$1 = (function (){var statearr_26353 = state_26319;
(statearr_26353[(12)] = inst_26262);

(statearr_26353[(14)] = inst_26261);

(statearr_26353[(15)] = inst_26263);

(statearr_26353[(16)] = inst_26260);

return statearr_26353;
})();
var statearr_26354_26395 = state_26319__$1;
(statearr_26354_26395[(2)] = null);

(statearr_26354_26395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (10))){
var inst_26262 = (state_26319[(12)]);
var inst_26261 = (state_26319[(14)]);
var inst_26263 = (state_26319[(15)]);
var inst_26260 = (state_26319[(16)]);
var inst_26268 = cljs.core._nth.call(null,inst_26261,inst_26263);
var inst_26269 = cljs.core.async.muxch_STAR_.call(null,inst_26268);
var inst_26270 = cljs.core.async.close_BANG_.call(null,inst_26269);
var inst_26271 = (inst_26263 + (1));
var tmp26349 = inst_26262;
var tmp26350 = inst_26261;
var tmp26351 = inst_26260;
var inst_26260__$1 = tmp26351;
var inst_26261__$1 = tmp26350;
var inst_26262__$1 = tmp26349;
var inst_26263__$1 = inst_26271;
var state_26319__$1 = (function (){var statearr_26355 = state_26319;
(statearr_26355[(17)] = inst_26270);

(statearr_26355[(12)] = inst_26262__$1);

(statearr_26355[(14)] = inst_26261__$1);

(statearr_26355[(15)] = inst_26263__$1);

(statearr_26355[(16)] = inst_26260__$1);

return statearr_26355;
})();
var statearr_26356_26396 = state_26319__$1;
(statearr_26356_26396[(2)] = null);

(statearr_26356_26396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (18))){
var inst_26289 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
var statearr_26357_26397 = state_26319__$1;
(statearr_26357_26397[(2)] = inst_26289);

(statearr_26357_26397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26320 === (8))){
var inst_26262 = (state_26319[(12)]);
var inst_26263 = (state_26319[(15)]);
var inst_26265 = (inst_26263 < inst_26262);
var inst_26266 = inst_26265;
var state_26319__$1 = state_26319;
if(cljs.core.truth_(inst_26266)){
var statearr_26358_26398 = state_26319__$1;
(statearr_26358_26398[(1)] = (10));

} else {
var statearr_26359_26399 = state_26319__$1;
(statearr_26359_26399[(1)] = (11));

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
});})(c__19893__auto___26371,mults,ensure_mult,p))
;
return ((function (switch__19872__auto__,c__19893__auto___26371,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19873__auto__ = null;
var cljs$core$async$state_machine__19873__auto____0 = (function (){
var statearr_26363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26363[(0)] = cljs$core$async$state_machine__19873__auto__);

(statearr_26363[(1)] = (1));

return statearr_26363;
});
var cljs$core$async$state_machine__19873__auto____1 = (function (state_26319){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_26319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e26364){if((e26364 instanceof Object)){
var ex__19876__auto__ = e26364;
var statearr_26365_26400 = state_26319;
(statearr_26365_26400[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26401 = state_26319;
state_26319 = G__26401;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$state_machine__19873__auto__ = function(state_26319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19873__auto____1.call(this,state_26319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19873__auto____0;
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19873__auto____1;
return cljs$core$async$state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___26371,mults,ensure_mult,p))
})();
var state__19895__auto__ = (function (){var statearr_26366 = f__19894__auto__.call(null);
(statearr_26366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___26371);

return statearr_26366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___26371,mults,ensure_mult,p))
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
var args26402 = [];
var len__17843__auto___26405 = arguments.length;
var i__17844__auto___26406 = (0);
while(true){
if((i__17844__auto___26406 < len__17843__auto___26405)){
args26402.push((arguments[i__17844__auto___26406]));

var G__26407 = (i__17844__auto___26406 + (1));
i__17844__auto___26406 = G__26407;
continue;
} else {
}
break;
}

var G__26404 = args26402.length;
switch (G__26404) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26402.length)].join('')));

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
var args26409 = [];
var len__17843__auto___26412 = arguments.length;
var i__17844__auto___26413 = (0);
while(true){
if((i__17844__auto___26413 < len__17843__auto___26412)){
args26409.push((arguments[i__17844__auto___26413]));

var G__26414 = (i__17844__auto___26413 + (1));
i__17844__auto___26413 = G__26414;
continue;
} else {
}
break;
}

var G__26411 = args26409.length;
switch (G__26411) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26409.length)].join('')));

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
var args26416 = [];
var len__17843__auto___26487 = arguments.length;
var i__17844__auto___26488 = (0);
while(true){
if((i__17844__auto___26488 < len__17843__auto___26487)){
args26416.push((arguments[i__17844__auto___26488]));

var G__26489 = (i__17844__auto___26488 + (1));
i__17844__auto___26488 = G__26489;
continue;
} else {
}
break;
}

var G__26418 = args26416.length;
switch (G__26418) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26416.length)].join('')));

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
var c__19893__auto___26491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___26491,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___26491,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26457){
var state_val_26458 = (state_26457[(1)]);
if((state_val_26458 === (7))){
var state_26457__$1 = state_26457;
var statearr_26459_26492 = state_26457__$1;
(statearr_26459_26492[(2)] = null);

(statearr_26459_26492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (1))){
var state_26457__$1 = state_26457;
var statearr_26460_26493 = state_26457__$1;
(statearr_26460_26493[(2)] = null);

(statearr_26460_26493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (4))){
var inst_26421 = (state_26457[(7)]);
var inst_26423 = (inst_26421 < cnt);
var state_26457__$1 = state_26457;
if(cljs.core.truth_(inst_26423)){
var statearr_26461_26494 = state_26457__$1;
(statearr_26461_26494[(1)] = (6));

} else {
var statearr_26462_26495 = state_26457__$1;
(statearr_26462_26495[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (15))){
var inst_26453 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26463_26496 = state_26457__$1;
(statearr_26463_26496[(2)] = inst_26453);

(statearr_26463_26496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (13))){
var inst_26446 = cljs.core.async.close_BANG_.call(null,out);
var state_26457__$1 = state_26457;
var statearr_26464_26497 = state_26457__$1;
(statearr_26464_26497[(2)] = inst_26446);

(statearr_26464_26497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (6))){
var state_26457__$1 = state_26457;
var statearr_26465_26498 = state_26457__$1;
(statearr_26465_26498[(2)] = null);

(statearr_26465_26498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (3))){
var inst_26455 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26457__$1,inst_26455);
} else {
if((state_val_26458 === (12))){
var inst_26443 = (state_26457[(8)]);
var inst_26443__$1 = (state_26457[(2)]);
var inst_26444 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26443__$1);
var state_26457__$1 = (function (){var statearr_26466 = state_26457;
(statearr_26466[(8)] = inst_26443__$1);

return statearr_26466;
})();
if(cljs.core.truth_(inst_26444)){
var statearr_26467_26499 = state_26457__$1;
(statearr_26467_26499[(1)] = (13));

} else {
var statearr_26468_26500 = state_26457__$1;
(statearr_26468_26500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (2))){
var inst_26420 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26421 = (0);
var state_26457__$1 = (function (){var statearr_26469 = state_26457;
(statearr_26469[(9)] = inst_26420);

(statearr_26469[(7)] = inst_26421);

return statearr_26469;
})();
var statearr_26470_26501 = state_26457__$1;
(statearr_26470_26501[(2)] = null);

(statearr_26470_26501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (11))){
var inst_26421 = (state_26457[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26457,(10),Object,null,(9));
var inst_26430 = chs__$1.call(null,inst_26421);
var inst_26431 = done.call(null,inst_26421);
var inst_26432 = cljs.core.async.take_BANG_.call(null,inst_26430,inst_26431);
var state_26457__$1 = state_26457;
var statearr_26471_26502 = state_26457__$1;
(statearr_26471_26502[(2)] = inst_26432);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26457__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (9))){
var inst_26421 = (state_26457[(7)]);
var inst_26434 = (state_26457[(2)]);
var inst_26435 = (inst_26421 + (1));
var inst_26421__$1 = inst_26435;
var state_26457__$1 = (function (){var statearr_26472 = state_26457;
(statearr_26472[(7)] = inst_26421__$1);

(statearr_26472[(10)] = inst_26434);

return statearr_26472;
})();
var statearr_26473_26503 = state_26457__$1;
(statearr_26473_26503[(2)] = null);

(statearr_26473_26503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (5))){
var inst_26441 = (state_26457[(2)]);
var state_26457__$1 = (function (){var statearr_26474 = state_26457;
(statearr_26474[(11)] = inst_26441);

return statearr_26474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26457__$1,(12),dchan);
} else {
if((state_val_26458 === (14))){
var inst_26443 = (state_26457[(8)]);
var inst_26448 = cljs.core.apply.call(null,f,inst_26443);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26457__$1,(16),out,inst_26448);
} else {
if((state_val_26458 === (16))){
var inst_26450 = (state_26457[(2)]);
var state_26457__$1 = (function (){var statearr_26475 = state_26457;
(statearr_26475[(12)] = inst_26450);

return statearr_26475;
})();
var statearr_26476_26504 = state_26457__$1;
(statearr_26476_26504[(2)] = null);

(statearr_26476_26504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (10))){
var inst_26425 = (state_26457[(2)]);
var inst_26426 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26457__$1 = (function (){var statearr_26477 = state_26457;
(statearr_26477[(13)] = inst_26425);

return statearr_26477;
})();
var statearr_26478_26505 = state_26457__$1;
(statearr_26478_26505[(2)] = inst_26426);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26457__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (8))){
var inst_26439 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26479_26506 = state_26457__$1;
(statearr_26479_26506[(2)] = inst_26439);

(statearr_26479_26506[(1)] = (5));


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
});})(c__19893__auto___26491,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19872__auto__,c__19893__auto___26491,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19873__auto__ = null;
var cljs$core$async$state_machine__19873__auto____0 = (function (){
var statearr_26483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26483[(0)] = cljs$core$async$state_machine__19873__auto__);

(statearr_26483[(1)] = (1));

return statearr_26483;
});
var cljs$core$async$state_machine__19873__auto____1 = (function (state_26457){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_26457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e26484){if((e26484 instanceof Object)){
var ex__19876__auto__ = e26484;
var statearr_26485_26507 = state_26457;
(statearr_26485_26507[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26508 = state_26457;
state_26457 = G__26508;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$state_machine__19873__auto__ = function(state_26457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19873__auto____1.call(this,state_26457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19873__auto____0;
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19873__auto____1;
return cljs$core$async$state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___26491,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19895__auto__ = (function (){var statearr_26486 = f__19894__auto__.call(null);
(statearr_26486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___26491);

return statearr_26486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___26491,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26510 = [];
var len__17843__auto___26566 = arguments.length;
var i__17844__auto___26567 = (0);
while(true){
if((i__17844__auto___26567 < len__17843__auto___26566)){
args26510.push((arguments[i__17844__auto___26567]));

var G__26568 = (i__17844__auto___26567 + (1));
i__17844__auto___26567 = G__26568;
continue;
} else {
}
break;
}

var G__26512 = args26510.length;
switch (G__26512) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26510.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19893__auto___26570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___26570,out){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___26570,out){
return (function (state_26542){
var state_val_26543 = (state_26542[(1)]);
if((state_val_26543 === (7))){
var inst_26521 = (state_26542[(7)]);
var inst_26522 = (state_26542[(8)]);
var inst_26521__$1 = (state_26542[(2)]);
var inst_26522__$1 = cljs.core.nth.call(null,inst_26521__$1,(0),null);
var inst_26523 = cljs.core.nth.call(null,inst_26521__$1,(1),null);
var inst_26524 = (inst_26522__$1 == null);
var state_26542__$1 = (function (){var statearr_26544 = state_26542;
(statearr_26544[(7)] = inst_26521__$1);

(statearr_26544[(8)] = inst_26522__$1);

(statearr_26544[(9)] = inst_26523);

return statearr_26544;
})();
if(cljs.core.truth_(inst_26524)){
var statearr_26545_26571 = state_26542__$1;
(statearr_26545_26571[(1)] = (8));

} else {
var statearr_26546_26572 = state_26542__$1;
(statearr_26546_26572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (1))){
var inst_26513 = cljs.core.vec.call(null,chs);
var inst_26514 = inst_26513;
var state_26542__$1 = (function (){var statearr_26547 = state_26542;
(statearr_26547[(10)] = inst_26514);

return statearr_26547;
})();
var statearr_26548_26573 = state_26542__$1;
(statearr_26548_26573[(2)] = null);

(statearr_26548_26573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (4))){
var inst_26514 = (state_26542[(10)]);
var state_26542__$1 = state_26542;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26542__$1,(7),inst_26514);
} else {
if((state_val_26543 === (6))){
var inst_26538 = (state_26542[(2)]);
var state_26542__$1 = state_26542;
var statearr_26549_26574 = state_26542__$1;
(statearr_26549_26574[(2)] = inst_26538);

(statearr_26549_26574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (3))){
var inst_26540 = (state_26542[(2)]);
var state_26542__$1 = state_26542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26542__$1,inst_26540);
} else {
if((state_val_26543 === (2))){
var inst_26514 = (state_26542[(10)]);
var inst_26516 = cljs.core.count.call(null,inst_26514);
var inst_26517 = (inst_26516 > (0));
var state_26542__$1 = state_26542;
if(cljs.core.truth_(inst_26517)){
var statearr_26551_26575 = state_26542__$1;
(statearr_26551_26575[(1)] = (4));

} else {
var statearr_26552_26576 = state_26542__$1;
(statearr_26552_26576[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (11))){
var inst_26514 = (state_26542[(10)]);
var inst_26531 = (state_26542[(2)]);
var tmp26550 = inst_26514;
var inst_26514__$1 = tmp26550;
var state_26542__$1 = (function (){var statearr_26553 = state_26542;
(statearr_26553[(10)] = inst_26514__$1);

(statearr_26553[(11)] = inst_26531);

return statearr_26553;
})();
var statearr_26554_26577 = state_26542__$1;
(statearr_26554_26577[(2)] = null);

(statearr_26554_26577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (9))){
var inst_26522 = (state_26542[(8)]);
var state_26542__$1 = state_26542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26542__$1,(11),out,inst_26522);
} else {
if((state_val_26543 === (5))){
var inst_26536 = cljs.core.async.close_BANG_.call(null,out);
var state_26542__$1 = state_26542;
var statearr_26555_26578 = state_26542__$1;
(statearr_26555_26578[(2)] = inst_26536);

(statearr_26555_26578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (10))){
var inst_26534 = (state_26542[(2)]);
var state_26542__$1 = state_26542;
var statearr_26556_26579 = state_26542__$1;
(statearr_26556_26579[(2)] = inst_26534);

(statearr_26556_26579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (8))){
var inst_26514 = (state_26542[(10)]);
var inst_26521 = (state_26542[(7)]);
var inst_26522 = (state_26542[(8)]);
var inst_26523 = (state_26542[(9)]);
var inst_26526 = (function (){var cs = inst_26514;
var vec__26519 = inst_26521;
var v = inst_26522;
var c = inst_26523;
return ((function (cs,vec__26519,v,c,inst_26514,inst_26521,inst_26522,inst_26523,state_val_26543,c__19893__auto___26570,out){
return (function (p1__26509_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26509_SHARP_);
});
;})(cs,vec__26519,v,c,inst_26514,inst_26521,inst_26522,inst_26523,state_val_26543,c__19893__auto___26570,out))
})();
var inst_26527 = cljs.core.filterv.call(null,inst_26526,inst_26514);
var inst_26514__$1 = inst_26527;
var state_26542__$1 = (function (){var statearr_26557 = state_26542;
(statearr_26557[(10)] = inst_26514__$1);

return statearr_26557;
})();
var statearr_26558_26580 = state_26542__$1;
(statearr_26558_26580[(2)] = null);

(statearr_26558_26580[(1)] = (2));


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
});})(c__19893__auto___26570,out))
;
return ((function (switch__19872__auto__,c__19893__auto___26570,out){
return (function() {
var cljs$core$async$state_machine__19873__auto__ = null;
var cljs$core$async$state_machine__19873__auto____0 = (function (){
var statearr_26562 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26562[(0)] = cljs$core$async$state_machine__19873__auto__);

(statearr_26562[(1)] = (1));

return statearr_26562;
});
var cljs$core$async$state_machine__19873__auto____1 = (function (state_26542){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_26542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e26563){if((e26563 instanceof Object)){
var ex__19876__auto__ = e26563;
var statearr_26564_26581 = state_26542;
(statearr_26564_26581[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26582 = state_26542;
state_26542 = G__26582;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$state_machine__19873__auto__ = function(state_26542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19873__auto____1.call(this,state_26542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19873__auto____0;
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19873__auto____1;
return cljs$core$async$state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___26570,out))
})();
var state__19895__auto__ = (function (){var statearr_26565 = f__19894__auto__.call(null);
(statearr_26565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___26570);

return statearr_26565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___26570,out))
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
var args26583 = [];
var len__17843__auto___26632 = arguments.length;
var i__17844__auto___26633 = (0);
while(true){
if((i__17844__auto___26633 < len__17843__auto___26632)){
args26583.push((arguments[i__17844__auto___26633]));

var G__26634 = (i__17844__auto___26633 + (1));
i__17844__auto___26633 = G__26634;
continue;
} else {
}
break;
}

var G__26585 = args26583.length;
switch (G__26585) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26583.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19893__auto___26636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___26636,out){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___26636,out){
return (function (state_26609){
var state_val_26610 = (state_26609[(1)]);
if((state_val_26610 === (7))){
var inst_26591 = (state_26609[(7)]);
var inst_26591__$1 = (state_26609[(2)]);
var inst_26592 = (inst_26591__$1 == null);
var inst_26593 = cljs.core.not.call(null,inst_26592);
var state_26609__$1 = (function (){var statearr_26611 = state_26609;
(statearr_26611[(7)] = inst_26591__$1);

return statearr_26611;
})();
if(inst_26593){
var statearr_26612_26637 = state_26609__$1;
(statearr_26612_26637[(1)] = (8));

} else {
var statearr_26613_26638 = state_26609__$1;
(statearr_26613_26638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26610 === (1))){
var inst_26586 = (0);
var state_26609__$1 = (function (){var statearr_26614 = state_26609;
(statearr_26614[(8)] = inst_26586);

return statearr_26614;
})();
var statearr_26615_26639 = state_26609__$1;
(statearr_26615_26639[(2)] = null);

(statearr_26615_26639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26610 === (4))){
var state_26609__$1 = state_26609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26609__$1,(7),ch);
} else {
if((state_val_26610 === (6))){
var inst_26604 = (state_26609[(2)]);
var state_26609__$1 = state_26609;
var statearr_26616_26640 = state_26609__$1;
(statearr_26616_26640[(2)] = inst_26604);

(statearr_26616_26640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26610 === (3))){
var inst_26606 = (state_26609[(2)]);
var inst_26607 = cljs.core.async.close_BANG_.call(null,out);
var state_26609__$1 = (function (){var statearr_26617 = state_26609;
(statearr_26617[(9)] = inst_26606);

return statearr_26617;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26609__$1,inst_26607);
} else {
if((state_val_26610 === (2))){
var inst_26586 = (state_26609[(8)]);
var inst_26588 = (inst_26586 < n);
var state_26609__$1 = state_26609;
if(cljs.core.truth_(inst_26588)){
var statearr_26618_26641 = state_26609__$1;
(statearr_26618_26641[(1)] = (4));

} else {
var statearr_26619_26642 = state_26609__$1;
(statearr_26619_26642[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26610 === (11))){
var inst_26586 = (state_26609[(8)]);
var inst_26596 = (state_26609[(2)]);
var inst_26597 = (inst_26586 + (1));
var inst_26586__$1 = inst_26597;
var state_26609__$1 = (function (){var statearr_26620 = state_26609;
(statearr_26620[(10)] = inst_26596);

(statearr_26620[(8)] = inst_26586__$1);

return statearr_26620;
})();
var statearr_26621_26643 = state_26609__$1;
(statearr_26621_26643[(2)] = null);

(statearr_26621_26643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26610 === (9))){
var state_26609__$1 = state_26609;
var statearr_26622_26644 = state_26609__$1;
(statearr_26622_26644[(2)] = null);

(statearr_26622_26644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26610 === (5))){
var state_26609__$1 = state_26609;
var statearr_26623_26645 = state_26609__$1;
(statearr_26623_26645[(2)] = null);

(statearr_26623_26645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26610 === (10))){
var inst_26601 = (state_26609[(2)]);
var state_26609__$1 = state_26609;
var statearr_26624_26646 = state_26609__$1;
(statearr_26624_26646[(2)] = inst_26601);

(statearr_26624_26646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26610 === (8))){
var inst_26591 = (state_26609[(7)]);
var state_26609__$1 = state_26609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26609__$1,(11),out,inst_26591);
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
});})(c__19893__auto___26636,out))
;
return ((function (switch__19872__auto__,c__19893__auto___26636,out){
return (function() {
var cljs$core$async$state_machine__19873__auto__ = null;
var cljs$core$async$state_machine__19873__auto____0 = (function (){
var statearr_26628 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26628[(0)] = cljs$core$async$state_machine__19873__auto__);

(statearr_26628[(1)] = (1));

return statearr_26628;
});
var cljs$core$async$state_machine__19873__auto____1 = (function (state_26609){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_26609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e26629){if((e26629 instanceof Object)){
var ex__19876__auto__ = e26629;
var statearr_26630_26647 = state_26609;
(statearr_26630_26647[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26648 = state_26609;
state_26609 = G__26648;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$state_machine__19873__auto__ = function(state_26609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19873__auto____1.call(this,state_26609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19873__auto____0;
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19873__auto____1;
return cljs$core$async$state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___26636,out))
})();
var state__19895__auto__ = (function (){var statearr_26631 = f__19894__auto__.call(null);
(statearr_26631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___26636);

return statearr_26631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___26636,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26656 = (function (map_LT_,f,ch,meta26657){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26657 = meta26657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26658,meta26657__$1){
var self__ = this;
var _26658__$1 = this;
return (new cljs.core.async.t_cljs$core$async26656(self__.map_LT_,self__.f,self__.ch,meta26657__$1));
});

cljs.core.async.t_cljs$core$async26656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26658){
var self__ = this;
var _26658__$1 = this;
return self__.meta26657;
});

cljs.core.async.t_cljs$core$async26656.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26656.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26656.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26659 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26659 = (function (map_LT_,f,ch,meta26657,_,fn1,meta26660){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26657 = meta26657;
this._ = _;
this.fn1 = fn1;
this.meta26660 = meta26660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26661,meta26660__$1){
var self__ = this;
var _26661__$1 = this;
return (new cljs.core.async.t_cljs$core$async26659(self__.map_LT_,self__.f,self__.ch,self__.meta26657,self__._,self__.fn1,meta26660__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26661){
var self__ = this;
var _26661__$1 = this;
return self__.meta26660;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26659.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26649_SHARP_){
return f1.call(null,(((p1__26649_SHARP_ == null))?null:self__.f.call(null,p1__26649_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26659.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26657","meta26657",782098326,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26656","cljs.core.async/t_cljs$core$async26656",232971908,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26660","meta26660",-1264278363,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26659";

cljs.core.async.t_cljs$core$async26659.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async26659");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26659 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26659(map_LT___$1,f__$1,ch__$1,meta26657__$1,___$2,fn1__$1,meta26660){
return (new cljs.core.async.t_cljs$core$async26659(map_LT___$1,f__$1,ch__$1,meta26657__$1,___$2,fn1__$1,meta26660));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26659(self__.map_LT_,self__.f,self__.ch,self__.meta26657,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16773__auto__ = ret;
if(cljs.core.truth_(and__16773__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16773__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26656.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26657","meta26657",782098326,null)], null);
});

cljs.core.async.t_cljs$core$async26656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26656";

cljs.core.async.t_cljs$core$async26656.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async26656");
});

cljs.core.async.__GT_t_cljs$core$async26656 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26656(map_LT___$1,f__$1,ch__$1,meta26657){
return (new cljs.core.async.t_cljs$core$async26656(map_LT___$1,f__$1,ch__$1,meta26657));
});

}

return (new cljs.core.async.t_cljs$core$async26656(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26665 = (function (map_GT_,f,ch,meta26666){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26666 = meta26666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26667,meta26666__$1){
var self__ = this;
var _26667__$1 = this;
return (new cljs.core.async.t_cljs$core$async26665(self__.map_GT_,self__.f,self__.ch,meta26666__$1));
});

cljs.core.async.t_cljs$core$async26665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26667){
var self__ = this;
var _26667__$1 = this;
return self__.meta26666;
});

cljs.core.async.t_cljs$core$async26665.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26665.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26665.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26665.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26665.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26665.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26666","meta26666",325939456,null)], null);
});

cljs.core.async.t_cljs$core$async26665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26665";

cljs.core.async.t_cljs$core$async26665.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async26665");
});

cljs.core.async.__GT_t_cljs$core$async26665 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26665(map_GT___$1,f__$1,ch__$1,meta26666){
return (new cljs.core.async.t_cljs$core$async26665(map_GT___$1,f__$1,ch__$1,meta26666));
});

}

return (new cljs.core.async.t_cljs$core$async26665(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26671 = (function (filter_GT_,p,ch,meta26672){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26672 = meta26672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26673,meta26672__$1){
var self__ = this;
var _26673__$1 = this;
return (new cljs.core.async.t_cljs$core$async26671(self__.filter_GT_,self__.p,self__.ch,meta26672__$1));
});

cljs.core.async.t_cljs$core$async26671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26673){
var self__ = this;
var _26673__$1 = this;
return self__.meta26672;
});

cljs.core.async.t_cljs$core$async26671.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26671.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26671.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26671.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26671.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26671.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26671.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26672","meta26672",1652983735,null)], null);
});

cljs.core.async.t_cljs$core$async26671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26671";

cljs.core.async.t_cljs$core$async26671.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async26671");
});

cljs.core.async.__GT_t_cljs$core$async26671 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26671(filter_GT___$1,p__$1,ch__$1,meta26672){
return (new cljs.core.async.t_cljs$core$async26671(filter_GT___$1,p__$1,ch__$1,meta26672));
});

}

return (new cljs.core.async.t_cljs$core$async26671(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26674 = [];
var len__17843__auto___26718 = arguments.length;
var i__17844__auto___26719 = (0);
while(true){
if((i__17844__auto___26719 < len__17843__auto___26718)){
args26674.push((arguments[i__17844__auto___26719]));

var G__26720 = (i__17844__auto___26719 + (1));
i__17844__auto___26719 = G__26720;
continue;
} else {
}
break;
}

var G__26676 = args26674.length;
switch (G__26676) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26674.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19893__auto___26722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___26722,out){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___26722,out){
return (function (state_26697){
var state_val_26698 = (state_26697[(1)]);
if((state_val_26698 === (7))){
var inst_26693 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
var statearr_26699_26723 = state_26697__$1;
(statearr_26699_26723[(2)] = inst_26693);

(statearr_26699_26723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (1))){
var state_26697__$1 = state_26697;
var statearr_26700_26724 = state_26697__$1;
(statearr_26700_26724[(2)] = null);

(statearr_26700_26724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (4))){
var inst_26679 = (state_26697[(7)]);
var inst_26679__$1 = (state_26697[(2)]);
var inst_26680 = (inst_26679__$1 == null);
var state_26697__$1 = (function (){var statearr_26701 = state_26697;
(statearr_26701[(7)] = inst_26679__$1);

return statearr_26701;
})();
if(cljs.core.truth_(inst_26680)){
var statearr_26702_26725 = state_26697__$1;
(statearr_26702_26725[(1)] = (5));

} else {
var statearr_26703_26726 = state_26697__$1;
(statearr_26703_26726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (6))){
var inst_26679 = (state_26697[(7)]);
var inst_26684 = p.call(null,inst_26679);
var state_26697__$1 = state_26697;
if(cljs.core.truth_(inst_26684)){
var statearr_26704_26727 = state_26697__$1;
(statearr_26704_26727[(1)] = (8));

} else {
var statearr_26705_26728 = state_26697__$1;
(statearr_26705_26728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (3))){
var inst_26695 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26697__$1,inst_26695);
} else {
if((state_val_26698 === (2))){
var state_26697__$1 = state_26697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26697__$1,(4),ch);
} else {
if((state_val_26698 === (11))){
var inst_26687 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
var statearr_26706_26729 = state_26697__$1;
(statearr_26706_26729[(2)] = inst_26687);

(statearr_26706_26729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (9))){
var state_26697__$1 = state_26697;
var statearr_26707_26730 = state_26697__$1;
(statearr_26707_26730[(2)] = null);

(statearr_26707_26730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (5))){
var inst_26682 = cljs.core.async.close_BANG_.call(null,out);
var state_26697__$1 = state_26697;
var statearr_26708_26731 = state_26697__$1;
(statearr_26708_26731[(2)] = inst_26682);

(statearr_26708_26731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (10))){
var inst_26690 = (state_26697[(2)]);
var state_26697__$1 = (function (){var statearr_26709 = state_26697;
(statearr_26709[(8)] = inst_26690);

return statearr_26709;
})();
var statearr_26710_26732 = state_26697__$1;
(statearr_26710_26732[(2)] = null);

(statearr_26710_26732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (8))){
var inst_26679 = (state_26697[(7)]);
var state_26697__$1 = state_26697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26697__$1,(11),out,inst_26679);
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
});})(c__19893__auto___26722,out))
;
return ((function (switch__19872__auto__,c__19893__auto___26722,out){
return (function() {
var cljs$core$async$state_machine__19873__auto__ = null;
var cljs$core$async$state_machine__19873__auto____0 = (function (){
var statearr_26714 = [null,null,null,null,null,null,null,null,null];
(statearr_26714[(0)] = cljs$core$async$state_machine__19873__auto__);

(statearr_26714[(1)] = (1));

return statearr_26714;
});
var cljs$core$async$state_machine__19873__auto____1 = (function (state_26697){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_26697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e26715){if((e26715 instanceof Object)){
var ex__19876__auto__ = e26715;
var statearr_26716_26733 = state_26697;
(statearr_26716_26733[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26734 = state_26697;
state_26697 = G__26734;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$state_machine__19873__auto__ = function(state_26697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19873__auto____1.call(this,state_26697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19873__auto____0;
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19873__auto____1;
return cljs$core$async$state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___26722,out))
})();
var state__19895__auto__ = (function (){var statearr_26717 = f__19894__auto__.call(null);
(statearr_26717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___26722);

return statearr_26717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___26722,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26735 = [];
var len__17843__auto___26738 = arguments.length;
var i__17844__auto___26739 = (0);
while(true){
if((i__17844__auto___26739 < len__17843__auto___26738)){
args26735.push((arguments[i__17844__auto___26739]));

var G__26740 = (i__17844__auto___26739 + (1));
i__17844__auto___26739 = G__26740;
continue;
} else {
}
break;
}

var G__26737 = args26735.length;
switch (G__26737) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26735.length)].join('')));

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
var c__19893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto__){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto__){
return (function (state_26907){
var state_val_26908 = (state_26907[(1)]);
if((state_val_26908 === (7))){
var inst_26903 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
var statearr_26909_26950 = state_26907__$1;
(statearr_26909_26950[(2)] = inst_26903);

(statearr_26909_26950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (20))){
var inst_26873 = (state_26907[(7)]);
var inst_26884 = (state_26907[(2)]);
var inst_26885 = cljs.core.next.call(null,inst_26873);
var inst_26859 = inst_26885;
var inst_26860 = null;
var inst_26861 = (0);
var inst_26862 = (0);
var state_26907__$1 = (function (){var statearr_26910 = state_26907;
(statearr_26910[(8)] = inst_26861);

(statearr_26910[(9)] = inst_26862);

(statearr_26910[(10)] = inst_26859);

(statearr_26910[(11)] = inst_26860);

(statearr_26910[(12)] = inst_26884);

return statearr_26910;
})();
var statearr_26911_26951 = state_26907__$1;
(statearr_26911_26951[(2)] = null);

(statearr_26911_26951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (1))){
var state_26907__$1 = state_26907;
var statearr_26912_26952 = state_26907__$1;
(statearr_26912_26952[(2)] = null);

(statearr_26912_26952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (4))){
var inst_26848 = (state_26907[(13)]);
var inst_26848__$1 = (state_26907[(2)]);
var inst_26849 = (inst_26848__$1 == null);
var state_26907__$1 = (function (){var statearr_26913 = state_26907;
(statearr_26913[(13)] = inst_26848__$1);

return statearr_26913;
})();
if(cljs.core.truth_(inst_26849)){
var statearr_26914_26953 = state_26907__$1;
(statearr_26914_26953[(1)] = (5));

} else {
var statearr_26915_26954 = state_26907__$1;
(statearr_26915_26954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (15))){
var state_26907__$1 = state_26907;
var statearr_26919_26955 = state_26907__$1;
(statearr_26919_26955[(2)] = null);

(statearr_26919_26955[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (21))){
var state_26907__$1 = state_26907;
var statearr_26920_26956 = state_26907__$1;
(statearr_26920_26956[(2)] = null);

(statearr_26920_26956[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (13))){
var inst_26861 = (state_26907[(8)]);
var inst_26862 = (state_26907[(9)]);
var inst_26859 = (state_26907[(10)]);
var inst_26860 = (state_26907[(11)]);
var inst_26869 = (state_26907[(2)]);
var inst_26870 = (inst_26862 + (1));
var tmp26916 = inst_26861;
var tmp26917 = inst_26859;
var tmp26918 = inst_26860;
var inst_26859__$1 = tmp26917;
var inst_26860__$1 = tmp26918;
var inst_26861__$1 = tmp26916;
var inst_26862__$1 = inst_26870;
var state_26907__$1 = (function (){var statearr_26921 = state_26907;
(statearr_26921[(8)] = inst_26861__$1);

(statearr_26921[(9)] = inst_26862__$1);

(statearr_26921[(10)] = inst_26859__$1);

(statearr_26921[(14)] = inst_26869);

(statearr_26921[(11)] = inst_26860__$1);

return statearr_26921;
})();
var statearr_26922_26957 = state_26907__$1;
(statearr_26922_26957[(2)] = null);

(statearr_26922_26957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (22))){
var state_26907__$1 = state_26907;
var statearr_26923_26958 = state_26907__$1;
(statearr_26923_26958[(2)] = null);

(statearr_26923_26958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (6))){
var inst_26848 = (state_26907[(13)]);
var inst_26857 = f.call(null,inst_26848);
var inst_26858 = cljs.core.seq.call(null,inst_26857);
var inst_26859 = inst_26858;
var inst_26860 = null;
var inst_26861 = (0);
var inst_26862 = (0);
var state_26907__$1 = (function (){var statearr_26924 = state_26907;
(statearr_26924[(8)] = inst_26861);

(statearr_26924[(9)] = inst_26862);

(statearr_26924[(10)] = inst_26859);

(statearr_26924[(11)] = inst_26860);

return statearr_26924;
})();
var statearr_26925_26959 = state_26907__$1;
(statearr_26925_26959[(2)] = null);

(statearr_26925_26959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (17))){
var inst_26873 = (state_26907[(7)]);
var inst_26877 = cljs.core.chunk_first.call(null,inst_26873);
var inst_26878 = cljs.core.chunk_rest.call(null,inst_26873);
var inst_26879 = cljs.core.count.call(null,inst_26877);
var inst_26859 = inst_26878;
var inst_26860 = inst_26877;
var inst_26861 = inst_26879;
var inst_26862 = (0);
var state_26907__$1 = (function (){var statearr_26926 = state_26907;
(statearr_26926[(8)] = inst_26861);

(statearr_26926[(9)] = inst_26862);

(statearr_26926[(10)] = inst_26859);

(statearr_26926[(11)] = inst_26860);

return statearr_26926;
})();
var statearr_26927_26960 = state_26907__$1;
(statearr_26927_26960[(2)] = null);

(statearr_26927_26960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (3))){
var inst_26905 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26907__$1,inst_26905);
} else {
if((state_val_26908 === (12))){
var inst_26893 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
var statearr_26928_26961 = state_26907__$1;
(statearr_26928_26961[(2)] = inst_26893);

(statearr_26928_26961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (2))){
var state_26907__$1 = state_26907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26907__$1,(4),in$);
} else {
if((state_val_26908 === (23))){
var inst_26901 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
var statearr_26929_26962 = state_26907__$1;
(statearr_26929_26962[(2)] = inst_26901);

(statearr_26929_26962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (19))){
var inst_26888 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
var statearr_26930_26963 = state_26907__$1;
(statearr_26930_26963[(2)] = inst_26888);

(statearr_26930_26963[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (11))){
var inst_26873 = (state_26907[(7)]);
var inst_26859 = (state_26907[(10)]);
var inst_26873__$1 = cljs.core.seq.call(null,inst_26859);
var state_26907__$1 = (function (){var statearr_26931 = state_26907;
(statearr_26931[(7)] = inst_26873__$1);

return statearr_26931;
})();
if(inst_26873__$1){
var statearr_26932_26964 = state_26907__$1;
(statearr_26932_26964[(1)] = (14));

} else {
var statearr_26933_26965 = state_26907__$1;
(statearr_26933_26965[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (9))){
var inst_26895 = (state_26907[(2)]);
var inst_26896 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26907__$1 = (function (){var statearr_26934 = state_26907;
(statearr_26934[(15)] = inst_26895);

return statearr_26934;
})();
if(cljs.core.truth_(inst_26896)){
var statearr_26935_26966 = state_26907__$1;
(statearr_26935_26966[(1)] = (21));

} else {
var statearr_26936_26967 = state_26907__$1;
(statearr_26936_26967[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (5))){
var inst_26851 = cljs.core.async.close_BANG_.call(null,out);
var state_26907__$1 = state_26907;
var statearr_26937_26968 = state_26907__$1;
(statearr_26937_26968[(2)] = inst_26851);

(statearr_26937_26968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (14))){
var inst_26873 = (state_26907[(7)]);
var inst_26875 = cljs.core.chunked_seq_QMARK_.call(null,inst_26873);
var state_26907__$1 = state_26907;
if(inst_26875){
var statearr_26938_26969 = state_26907__$1;
(statearr_26938_26969[(1)] = (17));

} else {
var statearr_26939_26970 = state_26907__$1;
(statearr_26939_26970[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (16))){
var inst_26891 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
var statearr_26940_26971 = state_26907__$1;
(statearr_26940_26971[(2)] = inst_26891);

(statearr_26940_26971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (10))){
var inst_26862 = (state_26907[(9)]);
var inst_26860 = (state_26907[(11)]);
var inst_26867 = cljs.core._nth.call(null,inst_26860,inst_26862);
var state_26907__$1 = state_26907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26907__$1,(13),out,inst_26867);
} else {
if((state_val_26908 === (18))){
var inst_26873 = (state_26907[(7)]);
var inst_26882 = cljs.core.first.call(null,inst_26873);
var state_26907__$1 = state_26907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26907__$1,(20),out,inst_26882);
} else {
if((state_val_26908 === (8))){
var inst_26861 = (state_26907[(8)]);
var inst_26862 = (state_26907[(9)]);
var inst_26864 = (inst_26862 < inst_26861);
var inst_26865 = inst_26864;
var state_26907__$1 = state_26907;
if(cljs.core.truth_(inst_26865)){
var statearr_26941_26972 = state_26907__$1;
(statearr_26941_26972[(1)] = (10));

} else {
var statearr_26942_26973 = state_26907__$1;
(statearr_26942_26973[(1)] = (11));

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
});})(c__19893__auto__))
;
return ((function (switch__19872__auto__,c__19893__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19873__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19873__auto____0 = (function (){
var statearr_26946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26946[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19873__auto__);

(statearr_26946[(1)] = (1));

return statearr_26946;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19873__auto____1 = (function (state_26907){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_26907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e26947){if((e26947 instanceof Object)){
var ex__19876__auto__ = e26947;
var statearr_26948_26974 = state_26907;
(statearr_26948_26974[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26975 = state_26907;
state_26907 = G__26975;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19873__auto__ = function(state_26907){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19873__auto____1.call(this,state_26907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19873__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19873__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto__))
})();
var state__19895__auto__ = (function (){var statearr_26949 = f__19894__auto__.call(null);
(statearr_26949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto__);

return statearr_26949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto__))
);

return c__19893__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26976 = [];
var len__17843__auto___26979 = arguments.length;
var i__17844__auto___26980 = (0);
while(true){
if((i__17844__auto___26980 < len__17843__auto___26979)){
args26976.push((arguments[i__17844__auto___26980]));

var G__26981 = (i__17844__auto___26980 + (1));
i__17844__auto___26980 = G__26981;
continue;
} else {
}
break;
}

var G__26978 = args26976.length;
switch (G__26978) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26976.length)].join('')));

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
var args26983 = [];
var len__17843__auto___26986 = arguments.length;
var i__17844__auto___26987 = (0);
while(true){
if((i__17844__auto___26987 < len__17843__auto___26986)){
args26983.push((arguments[i__17844__auto___26987]));

var G__26988 = (i__17844__auto___26987 + (1));
i__17844__auto___26987 = G__26988;
continue;
} else {
}
break;
}

var G__26985 = args26983.length;
switch (G__26985) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26983.length)].join('')));

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
var args26990 = [];
var len__17843__auto___27041 = arguments.length;
var i__17844__auto___27042 = (0);
while(true){
if((i__17844__auto___27042 < len__17843__auto___27041)){
args26990.push((arguments[i__17844__auto___27042]));

var G__27043 = (i__17844__auto___27042 + (1));
i__17844__auto___27042 = G__27043;
continue;
} else {
}
break;
}

var G__26992 = args26990.length;
switch (G__26992) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26990.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19893__auto___27045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___27045,out){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___27045,out){
return (function (state_27016){
var state_val_27017 = (state_27016[(1)]);
if((state_val_27017 === (7))){
var inst_27011 = (state_27016[(2)]);
var state_27016__$1 = state_27016;
var statearr_27018_27046 = state_27016__$1;
(statearr_27018_27046[(2)] = inst_27011);

(statearr_27018_27046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (1))){
var inst_26993 = null;
var state_27016__$1 = (function (){var statearr_27019 = state_27016;
(statearr_27019[(7)] = inst_26993);

return statearr_27019;
})();
var statearr_27020_27047 = state_27016__$1;
(statearr_27020_27047[(2)] = null);

(statearr_27020_27047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (4))){
var inst_26996 = (state_27016[(8)]);
var inst_26996__$1 = (state_27016[(2)]);
var inst_26997 = (inst_26996__$1 == null);
var inst_26998 = cljs.core.not.call(null,inst_26997);
var state_27016__$1 = (function (){var statearr_27021 = state_27016;
(statearr_27021[(8)] = inst_26996__$1);

return statearr_27021;
})();
if(inst_26998){
var statearr_27022_27048 = state_27016__$1;
(statearr_27022_27048[(1)] = (5));

} else {
var statearr_27023_27049 = state_27016__$1;
(statearr_27023_27049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (6))){
var state_27016__$1 = state_27016;
var statearr_27024_27050 = state_27016__$1;
(statearr_27024_27050[(2)] = null);

(statearr_27024_27050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (3))){
var inst_27013 = (state_27016[(2)]);
var inst_27014 = cljs.core.async.close_BANG_.call(null,out);
var state_27016__$1 = (function (){var statearr_27025 = state_27016;
(statearr_27025[(9)] = inst_27013);

return statearr_27025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27016__$1,inst_27014);
} else {
if((state_val_27017 === (2))){
var state_27016__$1 = state_27016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27016__$1,(4),ch);
} else {
if((state_val_27017 === (11))){
var inst_26996 = (state_27016[(8)]);
var inst_27005 = (state_27016[(2)]);
var inst_26993 = inst_26996;
var state_27016__$1 = (function (){var statearr_27026 = state_27016;
(statearr_27026[(10)] = inst_27005);

(statearr_27026[(7)] = inst_26993);

return statearr_27026;
})();
var statearr_27027_27051 = state_27016__$1;
(statearr_27027_27051[(2)] = null);

(statearr_27027_27051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (9))){
var inst_26996 = (state_27016[(8)]);
var state_27016__$1 = state_27016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27016__$1,(11),out,inst_26996);
} else {
if((state_val_27017 === (5))){
var inst_26996 = (state_27016[(8)]);
var inst_26993 = (state_27016[(7)]);
var inst_27000 = cljs.core._EQ_.call(null,inst_26996,inst_26993);
var state_27016__$1 = state_27016;
if(inst_27000){
var statearr_27029_27052 = state_27016__$1;
(statearr_27029_27052[(1)] = (8));

} else {
var statearr_27030_27053 = state_27016__$1;
(statearr_27030_27053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (10))){
var inst_27008 = (state_27016[(2)]);
var state_27016__$1 = state_27016;
var statearr_27031_27054 = state_27016__$1;
(statearr_27031_27054[(2)] = inst_27008);

(statearr_27031_27054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27017 === (8))){
var inst_26993 = (state_27016[(7)]);
var tmp27028 = inst_26993;
var inst_26993__$1 = tmp27028;
var state_27016__$1 = (function (){var statearr_27032 = state_27016;
(statearr_27032[(7)] = inst_26993__$1);

return statearr_27032;
})();
var statearr_27033_27055 = state_27016__$1;
(statearr_27033_27055[(2)] = null);

(statearr_27033_27055[(1)] = (2));


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
});})(c__19893__auto___27045,out))
;
return ((function (switch__19872__auto__,c__19893__auto___27045,out){
return (function() {
var cljs$core$async$state_machine__19873__auto__ = null;
var cljs$core$async$state_machine__19873__auto____0 = (function (){
var statearr_27037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27037[(0)] = cljs$core$async$state_machine__19873__auto__);

(statearr_27037[(1)] = (1));

return statearr_27037;
});
var cljs$core$async$state_machine__19873__auto____1 = (function (state_27016){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_27016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e27038){if((e27038 instanceof Object)){
var ex__19876__auto__ = e27038;
var statearr_27039_27056 = state_27016;
(statearr_27039_27056[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27057 = state_27016;
state_27016 = G__27057;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$state_machine__19873__auto__ = function(state_27016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19873__auto____1.call(this,state_27016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19873__auto____0;
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19873__auto____1;
return cljs$core$async$state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___27045,out))
})();
var state__19895__auto__ = (function (){var statearr_27040 = f__19894__auto__.call(null);
(statearr_27040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___27045);

return statearr_27040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___27045,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27058 = [];
var len__17843__auto___27128 = arguments.length;
var i__17844__auto___27129 = (0);
while(true){
if((i__17844__auto___27129 < len__17843__auto___27128)){
args27058.push((arguments[i__17844__auto___27129]));

var G__27130 = (i__17844__auto___27129 + (1));
i__17844__auto___27129 = G__27130;
continue;
} else {
}
break;
}

var G__27060 = args27058.length;
switch (G__27060) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27058.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19893__auto___27132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___27132,out){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___27132,out){
return (function (state_27098){
var state_val_27099 = (state_27098[(1)]);
if((state_val_27099 === (7))){
var inst_27094 = (state_27098[(2)]);
var state_27098__$1 = state_27098;
var statearr_27100_27133 = state_27098__$1;
(statearr_27100_27133[(2)] = inst_27094);

(statearr_27100_27133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27099 === (1))){
var inst_27061 = (new Array(n));
var inst_27062 = inst_27061;
var inst_27063 = (0);
var state_27098__$1 = (function (){var statearr_27101 = state_27098;
(statearr_27101[(7)] = inst_27062);

(statearr_27101[(8)] = inst_27063);

return statearr_27101;
})();
var statearr_27102_27134 = state_27098__$1;
(statearr_27102_27134[(2)] = null);

(statearr_27102_27134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27099 === (4))){
var inst_27066 = (state_27098[(9)]);
var inst_27066__$1 = (state_27098[(2)]);
var inst_27067 = (inst_27066__$1 == null);
var inst_27068 = cljs.core.not.call(null,inst_27067);
var state_27098__$1 = (function (){var statearr_27103 = state_27098;
(statearr_27103[(9)] = inst_27066__$1);

return statearr_27103;
})();
if(inst_27068){
var statearr_27104_27135 = state_27098__$1;
(statearr_27104_27135[(1)] = (5));

} else {
var statearr_27105_27136 = state_27098__$1;
(statearr_27105_27136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27099 === (15))){
var inst_27088 = (state_27098[(2)]);
var state_27098__$1 = state_27098;
var statearr_27106_27137 = state_27098__$1;
(statearr_27106_27137[(2)] = inst_27088);

(statearr_27106_27137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27099 === (13))){
var state_27098__$1 = state_27098;
var statearr_27107_27138 = state_27098__$1;
(statearr_27107_27138[(2)] = null);

(statearr_27107_27138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27099 === (6))){
var inst_27063 = (state_27098[(8)]);
var inst_27084 = (inst_27063 > (0));
var state_27098__$1 = state_27098;
if(cljs.core.truth_(inst_27084)){
var statearr_27108_27139 = state_27098__$1;
(statearr_27108_27139[(1)] = (12));

} else {
var statearr_27109_27140 = state_27098__$1;
(statearr_27109_27140[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27099 === (3))){
var inst_27096 = (state_27098[(2)]);
var state_27098__$1 = state_27098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27098__$1,inst_27096);
} else {
if((state_val_27099 === (12))){
var inst_27062 = (state_27098[(7)]);
var inst_27086 = cljs.core.vec.call(null,inst_27062);
var state_27098__$1 = state_27098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27098__$1,(15),out,inst_27086);
} else {
if((state_val_27099 === (2))){
var state_27098__$1 = state_27098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27098__$1,(4),ch);
} else {
if((state_val_27099 === (11))){
var inst_27078 = (state_27098[(2)]);
var inst_27079 = (new Array(n));
var inst_27062 = inst_27079;
var inst_27063 = (0);
var state_27098__$1 = (function (){var statearr_27110 = state_27098;
(statearr_27110[(7)] = inst_27062);

(statearr_27110[(8)] = inst_27063);

(statearr_27110[(10)] = inst_27078);

return statearr_27110;
})();
var statearr_27111_27141 = state_27098__$1;
(statearr_27111_27141[(2)] = null);

(statearr_27111_27141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27099 === (9))){
var inst_27062 = (state_27098[(7)]);
var inst_27076 = cljs.core.vec.call(null,inst_27062);
var state_27098__$1 = state_27098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27098__$1,(11),out,inst_27076);
} else {
if((state_val_27099 === (5))){
var inst_27062 = (state_27098[(7)]);
var inst_27063 = (state_27098[(8)]);
var inst_27066 = (state_27098[(9)]);
var inst_27071 = (state_27098[(11)]);
var inst_27070 = (inst_27062[inst_27063] = inst_27066);
var inst_27071__$1 = (inst_27063 + (1));
var inst_27072 = (inst_27071__$1 < n);
var state_27098__$1 = (function (){var statearr_27112 = state_27098;
(statearr_27112[(11)] = inst_27071__$1);

(statearr_27112[(12)] = inst_27070);

return statearr_27112;
})();
if(cljs.core.truth_(inst_27072)){
var statearr_27113_27142 = state_27098__$1;
(statearr_27113_27142[(1)] = (8));

} else {
var statearr_27114_27143 = state_27098__$1;
(statearr_27114_27143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27099 === (14))){
var inst_27091 = (state_27098[(2)]);
var inst_27092 = cljs.core.async.close_BANG_.call(null,out);
var state_27098__$1 = (function (){var statearr_27116 = state_27098;
(statearr_27116[(13)] = inst_27091);

return statearr_27116;
})();
var statearr_27117_27144 = state_27098__$1;
(statearr_27117_27144[(2)] = inst_27092);

(statearr_27117_27144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27099 === (10))){
var inst_27082 = (state_27098[(2)]);
var state_27098__$1 = state_27098;
var statearr_27118_27145 = state_27098__$1;
(statearr_27118_27145[(2)] = inst_27082);

(statearr_27118_27145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27099 === (8))){
var inst_27062 = (state_27098[(7)]);
var inst_27071 = (state_27098[(11)]);
var tmp27115 = inst_27062;
var inst_27062__$1 = tmp27115;
var inst_27063 = inst_27071;
var state_27098__$1 = (function (){var statearr_27119 = state_27098;
(statearr_27119[(7)] = inst_27062__$1);

(statearr_27119[(8)] = inst_27063);

return statearr_27119;
})();
var statearr_27120_27146 = state_27098__$1;
(statearr_27120_27146[(2)] = null);

(statearr_27120_27146[(1)] = (2));


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
});})(c__19893__auto___27132,out))
;
return ((function (switch__19872__auto__,c__19893__auto___27132,out){
return (function() {
var cljs$core$async$state_machine__19873__auto__ = null;
var cljs$core$async$state_machine__19873__auto____0 = (function (){
var statearr_27124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27124[(0)] = cljs$core$async$state_machine__19873__auto__);

(statearr_27124[(1)] = (1));

return statearr_27124;
});
var cljs$core$async$state_machine__19873__auto____1 = (function (state_27098){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_27098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e27125){if((e27125 instanceof Object)){
var ex__19876__auto__ = e27125;
var statearr_27126_27147 = state_27098;
(statearr_27126_27147[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27148 = state_27098;
state_27098 = G__27148;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$state_machine__19873__auto__ = function(state_27098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19873__auto____1.call(this,state_27098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19873__auto____0;
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19873__auto____1;
return cljs$core$async$state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___27132,out))
})();
var state__19895__auto__ = (function (){var statearr_27127 = f__19894__auto__.call(null);
(statearr_27127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___27132);

return statearr_27127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___27132,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27149 = [];
var len__17843__auto___27223 = arguments.length;
var i__17844__auto___27224 = (0);
while(true){
if((i__17844__auto___27224 < len__17843__auto___27223)){
args27149.push((arguments[i__17844__auto___27224]));

var G__27225 = (i__17844__auto___27224 + (1));
i__17844__auto___27224 = G__27225;
continue;
} else {
}
break;
}

var G__27151 = args27149.length;
switch (G__27151) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27149.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19893__auto___27227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19893__auto___27227,out){
return (function (){
var f__19894__auto__ = (function (){var switch__19872__auto__ = ((function (c__19893__auto___27227,out){
return (function (state_27193){
var state_val_27194 = (state_27193[(1)]);
if((state_val_27194 === (7))){
var inst_27189 = (state_27193[(2)]);
var state_27193__$1 = state_27193;
var statearr_27195_27228 = state_27193__$1;
(statearr_27195_27228[(2)] = inst_27189);

(statearr_27195_27228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (1))){
var inst_27152 = [];
var inst_27153 = inst_27152;
var inst_27154 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27193__$1 = (function (){var statearr_27196 = state_27193;
(statearr_27196[(7)] = inst_27154);

(statearr_27196[(8)] = inst_27153);

return statearr_27196;
})();
var statearr_27197_27229 = state_27193__$1;
(statearr_27197_27229[(2)] = null);

(statearr_27197_27229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (4))){
var inst_27157 = (state_27193[(9)]);
var inst_27157__$1 = (state_27193[(2)]);
var inst_27158 = (inst_27157__$1 == null);
var inst_27159 = cljs.core.not.call(null,inst_27158);
var state_27193__$1 = (function (){var statearr_27198 = state_27193;
(statearr_27198[(9)] = inst_27157__$1);

return statearr_27198;
})();
if(inst_27159){
var statearr_27199_27230 = state_27193__$1;
(statearr_27199_27230[(1)] = (5));

} else {
var statearr_27200_27231 = state_27193__$1;
(statearr_27200_27231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (15))){
var inst_27183 = (state_27193[(2)]);
var state_27193__$1 = state_27193;
var statearr_27201_27232 = state_27193__$1;
(statearr_27201_27232[(2)] = inst_27183);

(statearr_27201_27232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (13))){
var state_27193__$1 = state_27193;
var statearr_27202_27233 = state_27193__$1;
(statearr_27202_27233[(2)] = null);

(statearr_27202_27233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (6))){
var inst_27153 = (state_27193[(8)]);
var inst_27178 = inst_27153.length;
var inst_27179 = (inst_27178 > (0));
var state_27193__$1 = state_27193;
if(cljs.core.truth_(inst_27179)){
var statearr_27203_27234 = state_27193__$1;
(statearr_27203_27234[(1)] = (12));

} else {
var statearr_27204_27235 = state_27193__$1;
(statearr_27204_27235[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (3))){
var inst_27191 = (state_27193[(2)]);
var state_27193__$1 = state_27193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27193__$1,inst_27191);
} else {
if((state_val_27194 === (12))){
var inst_27153 = (state_27193[(8)]);
var inst_27181 = cljs.core.vec.call(null,inst_27153);
var state_27193__$1 = state_27193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27193__$1,(15),out,inst_27181);
} else {
if((state_val_27194 === (2))){
var state_27193__$1 = state_27193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27193__$1,(4),ch);
} else {
if((state_val_27194 === (11))){
var inst_27161 = (state_27193[(10)]);
var inst_27157 = (state_27193[(9)]);
var inst_27171 = (state_27193[(2)]);
var inst_27172 = [];
var inst_27173 = inst_27172.push(inst_27157);
var inst_27153 = inst_27172;
var inst_27154 = inst_27161;
var state_27193__$1 = (function (){var statearr_27205 = state_27193;
(statearr_27205[(11)] = inst_27173);

(statearr_27205[(12)] = inst_27171);

(statearr_27205[(7)] = inst_27154);

(statearr_27205[(8)] = inst_27153);

return statearr_27205;
})();
var statearr_27206_27236 = state_27193__$1;
(statearr_27206_27236[(2)] = null);

(statearr_27206_27236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (9))){
var inst_27153 = (state_27193[(8)]);
var inst_27169 = cljs.core.vec.call(null,inst_27153);
var state_27193__$1 = state_27193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27193__$1,(11),out,inst_27169);
} else {
if((state_val_27194 === (5))){
var inst_27161 = (state_27193[(10)]);
var inst_27154 = (state_27193[(7)]);
var inst_27157 = (state_27193[(9)]);
var inst_27161__$1 = f.call(null,inst_27157);
var inst_27162 = cljs.core._EQ_.call(null,inst_27161__$1,inst_27154);
var inst_27163 = cljs.core.keyword_identical_QMARK_.call(null,inst_27154,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27164 = (inst_27162) || (inst_27163);
var state_27193__$1 = (function (){var statearr_27207 = state_27193;
(statearr_27207[(10)] = inst_27161__$1);

return statearr_27207;
})();
if(cljs.core.truth_(inst_27164)){
var statearr_27208_27237 = state_27193__$1;
(statearr_27208_27237[(1)] = (8));

} else {
var statearr_27209_27238 = state_27193__$1;
(statearr_27209_27238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (14))){
var inst_27186 = (state_27193[(2)]);
var inst_27187 = cljs.core.async.close_BANG_.call(null,out);
var state_27193__$1 = (function (){var statearr_27211 = state_27193;
(statearr_27211[(13)] = inst_27186);

return statearr_27211;
})();
var statearr_27212_27239 = state_27193__$1;
(statearr_27212_27239[(2)] = inst_27187);

(statearr_27212_27239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (10))){
var inst_27176 = (state_27193[(2)]);
var state_27193__$1 = state_27193;
var statearr_27213_27240 = state_27193__$1;
(statearr_27213_27240[(2)] = inst_27176);

(statearr_27213_27240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (8))){
var inst_27161 = (state_27193[(10)]);
var inst_27157 = (state_27193[(9)]);
var inst_27153 = (state_27193[(8)]);
var inst_27166 = inst_27153.push(inst_27157);
var tmp27210 = inst_27153;
var inst_27153__$1 = tmp27210;
var inst_27154 = inst_27161;
var state_27193__$1 = (function (){var statearr_27214 = state_27193;
(statearr_27214[(14)] = inst_27166);

(statearr_27214[(7)] = inst_27154);

(statearr_27214[(8)] = inst_27153__$1);

return statearr_27214;
})();
var statearr_27215_27241 = state_27193__$1;
(statearr_27215_27241[(2)] = null);

(statearr_27215_27241[(1)] = (2));


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
});})(c__19893__auto___27227,out))
;
return ((function (switch__19872__auto__,c__19893__auto___27227,out){
return (function() {
var cljs$core$async$state_machine__19873__auto__ = null;
var cljs$core$async$state_machine__19873__auto____0 = (function (){
var statearr_27219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27219[(0)] = cljs$core$async$state_machine__19873__auto__);

(statearr_27219[(1)] = (1));

return statearr_27219;
});
var cljs$core$async$state_machine__19873__auto____1 = (function (state_27193){
while(true){
var ret_value__19874__auto__ = (function (){try{while(true){
var result__19875__auto__ = switch__19872__auto__.call(null,state_27193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19875__auto__;
}
break;
}
}catch (e27220){if((e27220 instanceof Object)){
var ex__19876__auto__ = e27220;
var statearr_27221_27242 = state_27193;
(statearr_27221_27242[(5)] = ex__19876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27243 = state_27193;
state_27193 = G__27243;
continue;
} else {
return ret_value__19874__auto__;
}
break;
}
});
cljs$core$async$state_machine__19873__auto__ = function(state_27193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19873__auto____1.call(this,state_27193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19873__auto____0;
cljs$core$async$state_machine__19873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19873__auto____1;
return cljs$core$async$state_machine__19873__auto__;
})()
;})(switch__19872__auto__,c__19893__auto___27227,out))
})();
var state__19895__auto__ = (function (){var statearr_27222 = f__19894__auto__.call(null);
(statearr_27222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19893__auto___27227);

return statearr_27222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19895__auto__);
});})(c__19893__auto___27227,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map