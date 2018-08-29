// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27330 = arguments.length;
switch (G__27330) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27331 = (function (f,blockable,meta27332){
this.f = f;
this.blockable = blockable;
this.meta27332 = meta27332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27333,meta27332__$1){
var self__ = this;
var _27333__$1 = this;
return (new cljs.core.async.t_cljs$core$async27331(self__.f,self__.blockable,meta27332__$1));
});

cljs.core.async.t_cljs$core$async27331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27333){
var self__ = this;
var _27333__$1 = this;
return self__.meta27332;
});

cljs.core.async.t_cljs$core$async27331.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27331.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27332","meta27332",-2068738553,null)], null);
});

cljs.core.async.t_cljs$core$async27331.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27331";

cljs.core.async.t_cljs$core$async27331.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27331");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27331.
 */
cljs.core.async.__GT_t_cljs$core$async27331 = (function cljs$core$async$__GT_t_cljs$core$async27331(f__$1,blockable__$1,meta27332){
return (new cljs.core.async.t_cljs$core$async27331(f__$1,blockable__$1,meta27332));
});

}

return (new cljs.core.async.t_cljs$core$async27331(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__27337 = arguments.length;
switch (G__27337) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__27340 = arguments.length;
switch (G__27340) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__27343 = arguments.length;
switch (G__27343) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27345 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27345);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27345,ret){
return (function (){
return fn1.call(null,val_27345);
});})(val_27345,ret))
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
var G__27347 = arguments.length;
switch (G__27347) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__4408__auto___27349 = n;
var x_27350 = (0);
while(true){
if((x_27350 < n__4408__auto___27349)){
(a[x_27350] = (0));

var G__27351 = (x_27350 + (1));
x_27350 = G__27351;
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

var G__27352 = (i + (1));
i = G__27352;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27353 = (function (flag,meta27354){
this.flag = flag;
this.meta27354 = meta27354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27355,meta27354__$1){
var self__ = this;
var _27355__$1 = this;
return (new cljs.core.async.t_cljs$core$async27353(self__.flag,meta27354__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27355){
var self__ = this;
var _27355__$1 = this;
return self__.meta27354;
});})(flag))
;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27353.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27354","meta27354",819625597,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27353";

cljs.core.async.t_cljs$core$async27353.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27353");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27353.
 */
cljs.core.async.__GT_t_cljs$core$async27353 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27353(flag__$1,meta27354){
return (new cljs.core.async.t_cljs$core$async27353(flag__$1,meta27354));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27353(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27356 = (function (flag,cb,meta27357){
this.flag = flag;
this.cb = cb;
this.meta27357 = meta27357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27358,meta27357__$1){
var self__ = this;
var _27358__$1 = this;
return (new cljs.core.async.t_cljs$core$async27356(self__.flag,self__.cb,meta27357__$1));
});

cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27358){
var self__ = this;
var _27358__$1 = this;
return self__.meta27357;
});

cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27357","meta27357",-1910268679,null)], null);
});

cljs.core.async.t_cljs$core$async27356.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27356";

cljs.core.async.t_cljs$core$async27356.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27356");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27356.
 */
cljs.core.async.__GT_t_cljs$core$async27356 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27356(flag__$1,cb__$1,meta27357){
return (new cljs.core.async.t_cljs$core$async27356(flag__$1,cb__$1,meta27357));
});

}

return (new cljs.core.async.t_cljs$core$async27356(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27359_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27359_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27360_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27360_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27361 = (i + (1));
i = G__27361;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__4534__auto__ = [];
var len__4531__auto___27367 = arguments.length;
var i__4532__auto___27368 = (0);
while(true){
if((i__4532__auto___27368 < len__4531__auto___27367)){
args__4534__auto__.push((arguments[i__4532__auto___27368]));

var G__27369 = (i__4532__auto___27368 + (1));
i__4532__auto___27368 = G__27369;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27364){
var map__27365 = p__27364;
var map__27365__$1 = ((((!((map__27365 == null)))?(((((map__27365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27365):map__27365);
var opts = map__27365__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27362){
var G__27363 = cljs.core.first.call(null,seq27362);
var seq27362__$1 = cljs.core.next.call(null,seq27362);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27363,seq27362__$1);
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
var G__27371 = arguments.length;
switch (G__27371) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27270__auto___27417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___27417){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___27417){
return (function (state_27395){
var state_val_27396 = (state_27395[(1)]);
if((state_val_27396 === (7))){
var inst_27391 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
var statearr_27397_27418 = state_27395__$1;
(statearr_27397_27418[(2)] = inst_27391);

(statearr_27397_27418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (1))){
var state_27395__$1 = state_27395;
var statearr_27398_27419 = state_27395__$1;
(statearr_27398_27419[(2)] = null);

(statearr_27398_27419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (4))){
var inst_27374 = (state_27395[(7)]);
var inst_27374__$1 = (state_27395[(2)]);
var inst_27375 = (inst_27374__$1 == null);
var state_27395__$1 = (function (){var statearr_27399 = state_27395;
(statearr_27399[(7)] = inst_27374__$1);

return statearr_27399;
})();
if(cljs.core.truth_(inst_27375)){
var statearr_27400_27420 = state_27395__$1;
(statearr_27400_27420[(1)] = (5));

} else {
var statearr_27401_27421 = state_27395__$1;
(statearr_27401_27421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (13))){
var state_27395__$1 = state_27395;
var statearr_27402_27422 = state_27395__$1;
(statearr_27402_27422[(2)] = null);

(statearr_27402_27422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (6))){
var inst_27374 = (state_27395[(7)]);
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27395__$1,(11),to,inst_27374);
} else {
if((state_val_27396 === (3))){
var inst_27393 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27395__$1,inst_27393);
} else {
if((state_val_27396 === (12))){
var state_27395__$1 = state_27395;
var statearr_27403_27423 = state_27395__$1;
(statearr_27403_27423[(2)] = null);

(statearr_27403_27423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (2))){
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27395__$1,(4),from);
} else {
if((state_val_27396 === (11))){
var inst_27384 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
if(cljs.core.truth_(inst_27384)){
var statearr_27404_27424 = state_27395__$1;
(statearr_27404_27424[(1)] = (12));

} else {
var statearr_27405_27425 = state_27395__$1;
(statearr_27405_27425[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (9))){
var state_27395__$1 = state_27395;
var statearr_27406_27426 = state_27395__$1;
(statearr_27406_27426[(2)] = null);

(statearr_27406_27426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (5))){
var state_27395__$1 = state_27395;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27407_27427 = state_27395__$1;
(statearr_27407_27427[(1)] = (8));

} else {
var statearr_27408_27428 = state_27395__$1;
(statearr_27408_27428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (14))){
var inst_27389 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
var statearr_27409_27429 = state_27395__$1;
(statearr_27409_27429[(2)] = inst_27389);

(statearr_27409_27429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (10))){
var inst_27381 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
var statearr_27410_27430 = state_27395__$1;
(statearr_27410_27430[(2)] = inst_27381);

(statearr_27410_27430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (8))){
var inst_27378 = cljs.core.async.close_BANG_.call(null,to);
var state_27395__$1 = state_27395;
var statearr_27411_27431 = state_27395__$1;
(statearr_27411_27431[(2)] = inst_27378);

(statearr_27411_27431[(1)] = (10));


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
});})(c__27270__auto___27417))
;
return ((function (switch__27179__auto__,c__27270__auto___27417){
return (function() {
var cljs$core$async$state_machine__27180__auto__ = null;
var cljs$core$async$state_machine__27180__auto____0 = (function (){
var statearr_27412 = [null,null,null,null,null,null,null,null];
(statearr_27412[(0)] = cljs$core$async$state_machine__27180__auto__);

(statearr_27412[(1)] = (1));

return statearr_27412;
});
var cljs$core$async$state_machine__27180__auto____1 = (function (state_27395){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_27395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e27413){if((e27413 instanceof Object)){
var ex__27183__auto__ = e27413;
var statearr_27414_27432 = state_27395;
(statearr_27414_27432[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27433 = state_27395;
state_27395 = G__27433;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$state_machine__27180__auto__ = function(state_27395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27180__auto____1.call(this,state_27395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27180__auto____0;
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27180__auto____1;
return cljs$core$async$state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___27417))
})();
var state__27272__auto__ = (function (){var statearr_27415 = f__27271__auto__.call(null);
(statearr_27415[(6)] = c__27270__auto___27417);

return statearr_27415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___27417))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27434){
var vec__27435 = p__27434;
var v = cljs.core.nth.call(null,vec__27435,(0),null);
var p = cljs.core.nth.call(null,vec__27435,(1),null);
var job = vec__27435;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27270__auto___27606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___27606,res,vec__27435,v,p,job,jobs,results){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___27606,res,vec__27435,v,p,job,jobs,results){
return (function (state_27442){
var state_val_27443 = (state_27442[(1)]);
if((state_val_27443 === (1))){
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27442__$1,(2),res,v);
} else {
if((state_val_27443 === (2))){
var inst_27439 = (state_27442[(2)]);
var inst_27440 = cljs.core.async.close_BANG_.call(null,res);
var state_27442__$1 = (function (){var statearr_27444 = state_27442;
(statearr_27444[(7)] = inst_27439);

return statearr_27444;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27442__$1,inst_27440);
} else {
return null;
}
}
});})(c__27270__auto___27606,res,vec__27435,v,p,job,jobs,results))
;
return ((function (switch__27179__auto__,c__27270__auto___27606,res,vec__27435,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0 = (function (){
var statearr_27445 = [null,null,null,null,null,null,null,null];
(statearr_27445[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__);

(statearr_27445[(1)] = (1));

return statearr_27445;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1 = (function (state_27442){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_27442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e27446){if((e27446 instanceof Object)){
var ex__27183__auto__ = e27446;
var statearr_27447_27607 = state_27442;
(statearr_27447_27607[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27608 = state_27442;
state_27442 = G__27608;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__ = function(state_27442){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1.call(this,state_27442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___27606,res,vec__27435,v,p,job,jobs,results))
})();
var state__27272__auto__ = (function (){var statearr_27448 = f__27271__auto__.call(null);
(statearr_27448[(6)] = c__27270__auto___27606);

return statearr_27448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___27606,res,vec__27435,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27449){
var vec__27450 = p__27449;
var v = cljs.core.nth.call(null,vec__27450,(0),null);
var p = cljs.core.nth.call(null,vec__27450,(1),null);
var job = vec__27450;
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
var n__4408__auto___27609 = n;
var __27610 = (0);
while(true){
if((__27610 < n__4408__auto___27609)){
var G__27453_27611 = type;
var G__27453_27612__$1 = (((G__27453_27611 instanceof cljs.core.Keyword))?G__27453_27611.fqn:null);
switch (G__27453_27612__$1) {
case "compute":
var c__27270__auto___27614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27610,c__27270__auto___27614,G__27453_27611,G__27453_27612__$1,n__4408__auto___27609,jobs,results,process,async){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (__27610,c__27270__auto___27614,G__27453_27611,G__27453_27612__$1,n__4408__auto___27609,jobs,results,process,async){
return (function (state_27466){
var state_val_27467 = (state_27466[(1)]);
if((state_val_27467 === (1))){
var state_27466__$1 = state_27466;
var statearr_27468_27615 = state_27466__$1;
(statearr_27468_27615[(2)] = null);

(statearr_27468_27615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (2))){
var state_27466__$1 = state_27466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27466__$1,(4),jobs);
} else {
if((state_val_27467 === (3))){
var inst_27464 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27466__$1,inst_27464);
} else {
if((state_val_27467 === (4))){
var inst_27456 = (state_27466[(2)]);
var inst_27457 = process.call(null,inst_27456);
var state_27466__$1 = state_27466;
if(cljs.core.truth_(inst_27457)){
var statearr_27469_27616 = state_27466__$1;
(statearr_27469_27616[(1)] = (5));

} else {
var statearr_27470_27617 = state_27466__$1;
(statearr_27470_27617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (5))){
var state_27466__$1 = state_27466;
var statearr_27471_27618 = state_27466__$1;
(statearr_27471_27618[(2)] = null);

(statearr_27471_27618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (6))){
var state_27466__$1 = state_27466;
var statearr_27472_27619 = state_27466__$1;
(statearr_27472_27619[(2)] = null);

(statearr_27472_27619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (7))){
var inst_27462 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27473_27620 = state_27466__$1;
(statearr_27473_27620[(2)] = inst_27462);

(statearr_27473_27620[(1)] = (3));


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
});})(__27610,c__27270__auto___27614,G__27453_27611,G__27453_27612__$1,n__4408__auto___27609,jobs,results,process,async))
;
return ((function (__27610,switch__27179__auto__,c__27270__auto___27614,G__27453_27611,G__27453_27612__$1,n__4408__auto___27609,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0 = (function (){
var statearr_27474 = [null,null,null,null,null,null,null];
(statearr_27474[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__);

(statearr_27474[(1)] = (1));

return statearr_27474;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1 = (function (state_27466){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_27466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e27475){if((e27475 instanceof Object)){
var ex__27183__auto__ = e27475;
var statearr_27476_27621 = state_27466;
(statearr_27476_27621[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27622 = state_27466;
state_27466 = G__27622;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__ = function(state_27466){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1.call(this,state_27466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__;
})()
;})(__27610,switch__27179__auto__,c__27270__auto___27614,G__27453_27611,G__27453_27612__$1,n__4408__auto___27609,jobs,results,process,async))
})();
var state__27272__auto__ = (function (){var statearr_27477 = f__27271__auto__.call(null);
(statearr_27477[(6)] = c__27270__auto___27614);

return statearr_27477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(__27610,c__27270__auto___27614,G__27453_27611,G__27453_27612__$1,n__4408__auto___27609,jobs,results,process,async))
);


break;
case "async":
var c__27270__auto___27623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27610,c__27270__auto___27623,G__27453_27611,G__27453_27612__$1,n__4408__auto___27609,jobs,results,process,async){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (__27610,c__27270__auto___27623,G__27453_27611,G__27453_27612__$1,n__4408__auto___27609,jobs,results,process,async){
return (function (state_27490){
var state_val_27491 = (state_27490[(1)]);
if((state_val_27491 === (1))){
var state_27490__$1 = state_27490;
var statearr_27492_27624 = state_27490__$1;
(statearr_27492_27624[(2)] = null);

(statearr_27492_27624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (2))){
var state_27490__$1 = state_27490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27490__$1,(4),jobs);
} else {
if((state_val_27491 === (3))){
var inst_27488 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27490__$1,inst_27488);
} else {
if((state_val_27491 === (4))){
var inst_27480 = (state_27490[(2)]);
var inst_27481 = async.call(null,inst_27480);
var state_27490__$1 = state_27490;
if(cljs.core.truth_(inst_27481)){
var statearr_27493_27625 = state_27490__$1;
(statearr_27493_27625[(1)] = (5));

} else {
var statearr_27494_27626 = state_27490__$1;
(statearr_27494_27626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (5))){
var state_27490__$1 = state_27490;
var statearr_27495_27627 = state_27490__$1;
(statearr_27495_27627[(2)] = null);

(statearr_27495_27627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (6))){
var state_27490__$1 = state_27490;
var statearr_27496_27628 = state_27490__$1;
(statearr_27496_27628[(2)] = null);

(statearr_27496_27628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (7))){
var inst_27486 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
var statearr_27497_27629 = state_27490__$1;
(statearr_27497_27629[(2)] = inst_27486);

(statearr_27497_27629[(1)] = (3));


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
});})(__27610,c__27270__auto___27623,G__27453_27611,G__27453_27612__$1,n__4408__auto___27609,jobs,results,process,async))
;
return ((function (__27610,switch__27179__auto__,c__27270__auto___27623,G__27453_27611,G__27453_27612__$1,n__4408__auto___27609,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0 = (function (){
var statearr_27498 = [null,null,null,null,null,null,null];
(statearr_27498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__);

(statearr_27498[(1)] = (1));

return statearr_27498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1 = (function (state_27490){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_27490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e27499){if((e27499 instanceof Object)){
var ex__27183__auto__ = e27499;
var statearr_27500_27630 = state_27490;
(statearr_27500_27630[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27631 = state_27490;
state_27490 = G__27631;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__ = function(state_27490){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1.call(this,state_27490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__;
})()
;})(__27610,switch__27179__auto__,c__27270__auto___27623,G__27453_27611,G__27453_27612__$1,n__4408__auto___27609,jobs,results,process,async))
})();
var state__27272__auto__ = (function (){var statearr_27501 = f__27271__auto__.call(null);
(statearr_27501[(6)] = c__27270__auto___27623);

return statearr_27501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(__27610,c__27270__auto___27623,G__27453_27611,G__27453_27612__$1,n__4408__auto___27609,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27453_27612__$1)].join('')));

}

var G__27632 = (__27610 + (1));
__27610 = G__27632;
continue;
} else {
}
break;
}

var c__27270__auto___27633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___27633,jobs,results,process,async){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___27633,jobs,results,process,async){
return (function (state_27523){
var state_val_27524 = (state_27523[(1)]);
if((state_val_27524 === (1))){
var state_27523__$1 = state_27523;
var statearr_27525_27634 = state_27523__$1;
(statearr_27525_27634[(2)] = null);

(statearr_27525_27634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (2))){
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27523__$1,(4),from);
} else {
if((state_val_27524 === (3))){
var inst_27521 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27523__$1,inst_27521);
} else {
if((state_val_27524 === (4))){
var inst_27504 = (state_27523[(7)]);
var inst_27504__$1 = (state_27523[(2)]);
var inst_27505 = (inst_27504__$1 == null);
var state_27523__$1 = (function (){var statearr_27526 = state_27523;
(statearr_27526[(7)] = inst_27504__$1);

return statearr_27526;
})();
if(cljs.core.truth_(inst_27505)){
var statearr_27527_27635 = state_27523__$1;
(statearr_27527_27635[(1)] = (5));

} else {
var statearr_27528_27636 = state_27523__$1;
(statearr_27528_27636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (5))){
var inst_27507 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27523__$1 = state_27523;
var statearr_27529_27637 = state_27523__$1;
(statearr_27529_27637[(2)] = inst_27507);

(statearr_27529_27637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (6))){
var inst_27504 = (state_27523[(7)]);
var inst_27509 = (state_27523[(8)]);
var inst_27509__$1 = cljs.core.async.chan.call(null,(1));
var inst_27510 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27511 = [inst_27504,inst_27509__$1];
var inst_27512 = (new cljs.core.PersistentVector(null,2,(5),inst_27510,inst_27511,null));
var state_27523__$1 = (function (){var statearr_27530 = state_27523;
(statearr_27530[(8)] = inst_27509__$1);

return statearr_27530;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27523__$1,(8),jobs,inst_27512);
} else {
if((state_val_27524 === (7))){
var inst_27519 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27531_27638 = state_27523__$1;
(statearr_27531_27638[(2)] = inst_27519);

(statearr_27531_27638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (8))){
var inst_27509 = (state_27523[(8)]);
var inst_27514 = (state_27523[(2)]);
var state_27523__$1 = (function (){var statearr_27532 = state_27523;
(statearr_27532[(9)] = inst_27514);

return statearr_27532;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27523__$1,(9),results,inst_27509);
} else {
if((state_val_27524 === (9))){
var inst_27516 = (state_27523[(2)]);
var state_27523__$1 = (function (){var statearr_27533 = state_27523;
(statearr_27533[(10)] = inst_27516);

return statearr_27533;
})();
var statearr_27534_27639 = state_27523__$1;
(statearr_27534_27639[(2)] = null);

(statearr_27534_27639[(1)] = (2));


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
});})(c__27270__auto___27633,jobs,results,process,async))
;
return ((function (switch__27179__auto__,c__27270__auto___27633,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0 = (function (){
var statearr_27535 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27535[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__);

(statearr_27535[(1)] = (1));

return statearr_27535;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1 = (function (state_27523){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_27523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e27536){if((e27536 instanceof Object)){
var ex__27183__auto__ = e27536;
var statearr_27537_27640 = state_27523;
(statearr_27537_27640[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27641 = state_27523;
state_27523 = G__27641;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__ = function(state_27523){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1.call(this,state_27523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___27633,jobs,results,process,async))
})();
var state__27272__auto__ = (function (){var statearr_27538 = f__27271__auto__.call(null);
(statearr_27538[(6)] = c__27270__auto___27633);

return statearr_27538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___27633,jobs,results,process,async))
);


var c__27270__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto__,jobs,results,process,async){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto__,jobs,results,process,async){
return (function (state_27576){
var state_val_27577 = (state_27576[(1)]);
if((state_val_27577 === (7))){
var inst_27572 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27578_27642 = state_27576__$1;
(statearr_27578_27642[(2)] = inst_27572);

(statearr_27578_27642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (20))){
var state_27576__$1 = state_27576;
var statearr_27579_27643 = state_27576__$1;
(statearr_27579_27643[(2)] = null);

(statearr_27579_27643[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (1))){
var state_27576__$1 = state_27576;
var statearr_27580_27644 = state_27576__$1;
(statearr_27580_27644[(2)] = null);

(statearr_27580_27644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (4))){
var inst_27541 = (state_27576[(7)]);
var inst_27541__$1 = (state_27576[(2)]);
var inst_27542 = (inst_27541__$1 == null);
var state_27576__$1 = (function (){var statearr_27581 = state_27576;
(statearr_27581[(7)] = inst_27541__$1);

return statearr_27581;
})();
if(cljs.core.truth_(inst_27542)){
var statearr_27582_27645 = state_27576__$1;
(statearr_27582_27645[(1)] = (5));

} else {
var statearr_27583_27646 = state_27576__$1;
(statearr_27583_27646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (15))){
var inst_27554 = (state_27576[(8)]);
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27576__$1,(18),to,inst_27554);
} else {
if((state_val_27577 === (21))){
var inst_27567 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27584_27647 = state_27576__$1;
(statearr_27584_27647[(2)] = inst_27567);

(statearr_27584_27647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (13))){
var inst_27569 = (state_27576[(2)]);
var state_27576__$1 = (function (){var statearr_27585 = state_27576;
(statearr_27585[(9)] = inst_27569);

return statearr_27585;
})();
var statearr_27586_27648 = state_27576__$1;
(statearr_27586_27648[(2)] = null);

(statearr_27586_27648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (6))){
var inst_27541 = (state_27576[(7)]);
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27576__$1,(11),inst_27541);
} else {
if((state_val_27577 === (17))){
var inst_27562 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
if(cljs.core.truth_(inst_27562)){
var statearr_27587_27649 = state_27576__$1;
(statearr_27587_27649[(1)] = (19));

} else {
var statearr_27588_27650 = state_27576__$1;
(statearr_27588_27650[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (3))){
var inst_27574 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27576__$1,inst_27574);
} else {
if((state_val_27577 === (12))){
var inst_27551 = (state_27576[(10)]);
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27576__$1,(14),inst_27551);
} else {
if((state_val_27577 === (2))){
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27576__$1,(4),results);
} else {
if((state_val_27577 === (19))){
var state_27576__$1 = state_27576;
var statearr_27589_27651 = state_27576__$1;
(statearr_27589_27651[(2)] = null);

(statearr_27589_27651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (11))){
var inst_27551 = (state_27576[(2)]);
var state_27576__$1 = (function (){var statearr_27590 = state_27576;
(statearr_27590[(10)] = inst_27551);

return statearr_27590;
})();
var statearr_27591_27652 = state_27576__$1;
(statearr_27591_27652[(2)] = null);

(statearr_27591_27652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (9))){
var state_27576__$1 = state_27576;
var statearr_27592_27653 = state_27576__$1;
(statearr_27592_27653[(2)] = null);

(statearr_27592_27653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (5))){
var state_27576__$1 = state_27576;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27593_27654 = state_27576__$1;
(statearr_27593_27654[(1)] = (8));

} else {
var statearr_27594_27655 = state_27576__$1;
(statearr_27594_27655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (14))){
var inst_27556 = (state_27576[(11)]);
var inst_27554 = (state_27576[(8)]);
var inst_27554__$1 = (state_27576[(2)]);
var inst_27555 = (inst_27554__$1 == null);
var inst_27556__$1 = cljs.core.not.call(null,inst_27555);
var state_27576__$1 = (function (){var statearr_27595 = state_27576;
(statearr_27595[(11)] = inst_27556__$1);

(statearr_27595[(8)] = inst_27554__$1);

return statearr_27595;
})();
if(inst_27556__$1){
var statearr_27596_27656 = state_27576__$1;
(statearr_27596_27656[(1)] = (15));

} else {
var statearr_27597_27657 = state_27576__$1;
(statearr_27597_27657[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (16))){
var inst_27556 = (state_27576[(11)]);
var state_27576__$1 = state_27576;
var statearr_27598_27658 = state_27576__$1;
(statearr_27598_27658[(2)] = inst_27556);

(statearr_27598_27658[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (10))){
var inst_27548 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27599_27659 = state_27576__$1;
(statearr_27599_27659[(2)] = inst_27548);

(statearr_27599_27659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (18))){
var inst_27559 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27600_27660 = state_27576__$1;
(statearr_27600_27660[(2)] = inst_27559);

(statearr_27600_27660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (8))){
var inst_27545 = cljs.core.async.close_BANG_.call(null,to);
var state_27576__$1 = state_27576;
var statearr_27601_27661 = state_27576__$1;
(statearr_27601_27661[(2)] = inst_27545);

(statearr_27601_27661[(1)] = (10));


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
});})(c__27270__auto__,jobs,results,process,async))
;
return ((function (switch__27179__auto__,c__27270__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0 = (function (){
var statearr_27602 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27602[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__);

(statearr_27602[(1)] = (1));

return statearr_27602;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1 = (function (state_27576){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_27576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e27603){if((e27603 instanceof Object)){
var ex__27183__auto__ = e27603;
var statearr_27604_27662 = state_27576;
(statearr_27604_27662[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27663 = state_27576;
state_27576 = G__27663;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__ = function(state_27576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1.call(this,state_27576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27180__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto__,jobs,results,process,async))
})();
var state__27272__auto__ = (function (){var statearr_27605 = f__27271__auto__.call(null);
(statearr_27605[(6)] = c__27270__auto__);

return statearr_27605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto__,jobs,results,process,async))
);

return c__27270__auto__;
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
var G__27665 = arguments.length;
switch (G__27665) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__27668 = arguments.length;
switch (G__27668) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__27671 = arguments.length;
switch (G__27671) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27270__auto___27720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___27720,tc,fc){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___27720,tc,fc){
return (function (state_27697){
var state_val_27698 = (state_27697[(1)]);
if((state_val_27698 === (7))){
var inst_27693 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27699_27721 = state_27697__$1;
(statearr_27699_27721[(2)] = inst_27693);

(statearr_27699_27721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (1))){
var state_27697__$1 = state_27697;
var statearr_27700_27722 = state_27697__$1;
(statearr_27700_27722[(2)] = null);

(statearr_27700_27722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (4))){
var inst_27674 = (state_27697[(7)]);
var inst_27674__$1 = (state_27697[(2)]);
var inst_27675 = (inst_27674__$1 == null);
var state_27697__$1 = (function (){var statearr_27701 = state_27697;
(statearr_27701[(7)] = inst_27674__$1);

return statearr_27701;
})();
if(cljs.core.truth_(inst_27675)){
var statearr_27702_27723 = state_27697__$1;
(statearr_27702_27723[(1)] = (5));

} else {
var statearr_27703_27724 = state_27697__$1;
(statearr_27703_27724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (13))){
var state_27697__$1 = state_27697;
var statearr_27704_27725 = state_27697__$1;
(statearr_27704_27725[(2)] = null);

(statearr_27704_27725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (6))){
var inst_27674 = (state_27697[(7)]);
var inst_27680 = p.call(null,inst_27674);
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27680)){
var statearr_27705_27726 = state_27697__$1;
(statearr_27705_27726[(1)] = (9));

} else {
var statearr_27706_27727 = state_27697__$1;
(statearr_27706_27727[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (3))){
var inst_27695 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27697__$1,inst_27695);
} else {
if((state_val_27698 === (12))){
var state_27697__$1 = state_27697;
var statearr_27707_27728 = state_27697__$1;
(statearr_27707_27728[(2)] = null);

(statearr_27707_27728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (2))){
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(4),ch);
} else {
if((state_val_27698 === (11))){
var inst_27674 = (state_27697[(7)]);
var inst_27684 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27697__$1,(8),inst_27684,inst_27674);
} else {
if((state_val_27698 === (9))){
var state_27697__$1 = state_27697;
var statearr_27708_27729 = state_27697__$1;
(statearr_27708_27729[(2)] = tc);

(statearr_27708_27729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (5))){
var inst_27677 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27678 = cljs.core.async.close_BANG_.call(null,fc);
var state_27697__$1 = (function (){var statearr_27709 = state_27697;
(statearr_27709[(8)] = inst_27677);

return statearr_27709;
})();
var statearr_27710_27730 = state_27697__$1;
(statearr_27710_27730[(2)] = inst_27678);

(statearr_27710_27730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (14))){
var inst_27691 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27711_27731 = state_27697__$1;
(statearr_27711_27731[(2)] = inst_27691);

(statearr_27711_27731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (10))){
var state_27697__$1 = state_27697;
var statearr_27712_27732 = state_27697__$1;
(statearr_27712_27732[(2)] = fc);

(statearr_27712_27732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (8))){
var inst_27686 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27686)){
var statearr_27713_27733 = state_27697__$1;
(statearr_27713_27733[(1)] = (12));

} else {
var statearr_27714_27734 = state_27697__$1;
(statearr_27714_27734[(1)] = (13));

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
});})(c__27270__auto___27720,tc,fc))
;
return ((function (switch__27179__auto__,c__27270__auto___27720,tc,fc){
return (function() {
var cljs$core$async$state_machine__27180__auto__ = null;
var cljs$core$async$state_machine__27180__auto____0 = (function (){
var statearr_27715 = [null,null,null,null,null,null,null,null,null];
(statearr_27715[(0)] = cljs$core$async$state_machine__27180__auto__);

(statearr_27715[(1)] = (1));

return statearr_27715;
});
var cljs$core$async$state_machine__27180__auto____1 = (function (state_27697){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_27697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e27716){if((e27716 instanceof Object)){
var ex__27183__auto__ = e27716;
var statearr_27717_27735 = state_27697;
(statearr_27717_27735[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27736 = state_27697;
state_27697 = G__27736;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$state_machine__27180__auto__ = function(state_27697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27180__auto____1.call(this,state_27697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27180__auto____0;
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27180__auto____1;
return cljs$core$async$state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___27720,tc,fc))
})();
var state__27272__auto__ = (function (){var statearr_27718 = f__27271__auto__.call(null);
(statearr_27718[(6)] = c__27270__auto___27720);

return statearr_27718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___27720,tc,fc))
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
var c__27270__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto__){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto__){
return (function (state_27757){
var state_val_27758 = (state_27757[(1)]);
if((state_val_27758 === (7))){
var inst_27753 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
var statearr_27759_27777 = state_27757__$1;
(statearr_27759_27777[(2)] = inst_27753);

(statearr_27759_27777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27758 === (1))){
var inst_27737 = init;
var state_27757__$1 = (function (){var statearr_27760 = state_27757;
(statearr_27760[(7)] = inst_27737);

return statearr_27760;
})();
var statearr_27761_27778 = state_27757__$1;
(statearr_27761_27778[(2)] = null);

(statearr_27761_27778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27758 === (4))){
var inst_27740 = (state_27757[(8)]);
var inst_27740__$1 = (state_27757[(2)]);
var inst_27741 = (inst_27740__$1 == null);
var state_27757__$1 = (function (){var statearr_27762 = state_27757;
(statearr_27762[(8)] = inst_27740__$1);

return statearr_27762;
})();
if(cljs.core.truth_(inst_27741)){
var statearr_27763_27779 = state_27757__$1;
(statearr_27763_27779[(1)] = (5));

} else {
var statearr_27764_27780 = state_27757__$1;
(statearr_27764_27780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27758 === (6))){
var inst_27744 = (state_27757[(9)]);
var inst_27740 = (state_27757[(8)]);
var inst_27737 = (state_27757[(7)]);
var inst_27744__$1 = f.call(null,inst_27737,inst_27740);
var inst_27745 = cljs.core.reduced_QMARK_.call(null,inst_27744__$1);
var state_27757__$1 = (function (){var statearr_27765 = state_27757;
(statearr_27765[(9)] = inst_27744__$1);

return statearr_27765;
})();
if(inst_27745){
var statearr_27766_27781 = state_27757__$1;
(statearr_27766_27781[(1)] = (8));

} else {
var statearr_27767_27782 = state_27757__$1;
(statearr_27767_27782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27758 === (3))){
var inst_27755 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27757__$1,inst_27755);
} else {
if((state_val_27758 === (2))){
var state_27757__$1 = state_27757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27757__$1,(4),ch);
} else {
if((state_val_27758 === (9))){
var inst_27744 = (state_27757[(9)]);
var inst_27737 = inst_27744;
var state_27757__$1 = (function (){var statearr_27768 = state_27757;
(statearr_27768[(7)] = inst_27737);

return statearr_27768;
})();
var statearr_27769_27783 = state_27757__$1;
(statearr_27769_27783[(2)] = null);

(statearr_27769_27783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27758 === (5))){
var inst_27737 = (state_27757[(7)]);
var state_27757__$1 = state_27757;
var statearr_27770_27784 = state_27757__$1;
(statearr_27770_27784[(2)] = inst_27737);

(statearr_27770_27784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27758 === (10))){
var inst_27751 = (state_27757[(2)]);
var state_27757__$1 = state_27757;
var statearr_27771_27785 = state_27757__$1;
(statearr_27771_27785[(2)] = inst_27751);

(statearr_27771_27785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27758 === (8))){
var inst_27744 = (state_27757[(9)]);
var inst_27747 = cljs.core.deref.call(null,inst_27744);
var state_27757__$1 = state_27757;
var statearr_27772_27786 = state_27757__$1;
(statearr_27772_27786[(2)] = inst_27747);

(statearr_27772_27786[(1)] = (10));


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
});})(c__27270__auto__))
;
return ((function (switch__27179__auto__,c__27270__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27180__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27180__auto____0 = (function (){
var statearr_27773 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27773[(0)] = cljs$core$async$reduce_$_state_machine__27180__auto__);

(statearr_27773[(1)] = (1));

return statearr_27773;
});
var cljs$core$async$reduce_$_state_machine__27180__auto____1 = (function (state_27757){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_27757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e27774){if((e27774 instanceof Object)){
var ex__27183__auto__ = e27774;
var statearr_27775_27787 = state_27757;
(statearr_27775_27787[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27788 = state_27757;
state_27757 = G__27788;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27180__auto__ = function(state_27757){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27180__auto____1.call(this,state_27757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27180__auto____0;
cljs$core$async$reduce_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27180__auto____1;
return cljs$core$async$reduce_$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto__))
})();
var state__27272__auto__ = (function (){var statearr_27776 = f__27271__auto__.call(null);
(statearr_27776[(6)] = c__27270__auto__);

return statearr_27776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto__))
);

return c__27270__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27270__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto__,f__$1){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto__,f__$1){
return (function (state_27794){
var state_val_27795 = (state_27794[(1)]);
if((state_val_27795 === (1))){
var inst_27789 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27794__$1 = state_27794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27794__$1,(2),inst_27789);
} else {
if((state_val_27795 === (2))){
var inst_27791 = (state_27794[(2)]);
var inst_27792 = f__$1.call(null,inst_27791);
var state_27794__$1 = state_27794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27794__$1,inst_27792);
} else {
return null;
}
}
});})(c__27270__auto__,f__$1))
;
return ((function (switch__27179__auto__,c__27270__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27180__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27180__auto____0 = (function (){
var statearr_27796 = [null,null,null,null,null,null,null];
(statearr_27796[(0)] = cljs$core$async$transduce_$_state_machine__27180__auto__);

(statearr_27796[(1)] = (1));

return statearr_27796;
});
var cljs$core$async$transduce_$_state_machine__27180__auto____1 = (function (state_27794){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_27794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e27797){if((e27797 instanceof Object)){
var ex__27183__auto__ = e27797;
var statearr_27798_27800 = state_27794;
(statearr_27798_27800[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27801 = state_27794;
state_27794 = G__27801;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27180__auto__ = function(state_27794){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27180__auto____1.call(this,state_27794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27180__auto____0;
cljs$core$async$transduce_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27180__auto____1;
return cljs$core$async$transduce_$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto__,f__$1))
})();
var state__27272__auto__ = (function (){var statearr_27799 = f__27271__auto__.call(null);
(statearr_27799[(6)] = c__27270__auto__);

return statearr_27799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto__,f__$1))
);

return c__27270__auto__;
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
var G__27803 = arguments.length;
switch (G__27803) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27270__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto__){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto__){
return (function (state_27828){
var state_val_27829 = (state_27828[(1)]);
if((state_val_27829 === (7))){
var inst_27810 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
var statearr_27830_27851 = state_27828__$1;
(statearr_27830_27851[(2)] = inst_27810);

(statearr_27830_27851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (1))){
var inst_27804 = cljs.core.seq.call(null,coll);
var inst_27805 = inst_27804;
var state_27828__$1 = (function (){var statearr_27831 = state_27828;
(statearr_27831[(7)] = inst_27805);

return statearr_27831;
})();
var statearr_27832_27852 = state_27828__$1;
(statearr_27832_27852[(2)] = null);

(statearr_27832_27852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (4))){
var inst_27805 = (state_27828[(7)]);
var inst_27808 = cljs.core.first.call(null,inst_27805);
var state_27828__$1 = state_27828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27828__$1,(7),ch,inst_27808);
} else {
if((state_val_27829 === (13))){
var inst_27822 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
var statearr_27833_27853 = state_27828__$1;
(statearr_27833_27853[(2)] = inst_27822);

(statearr_27833_27853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (6))){
var inst_27813 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
if(cljs.core.truth_(inst_27813)){
var statearr_27834_27854 = state_27828__$1;
(statearr_27834_27854[(1)] = (8));

} else {
var statearr_27835_27855 = state_27828__$1;
(statearr_27835_27855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (3))){
var inst_27826 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27828__$1,inst_27826);
} else {
if((state_val_27829 === (12))){
var state_27828__$1 = state_27828;
var statearr_27836_27856 = state_27828__$1;
(statearr_27836_27856[(2)] = null);

(statearr_27836_27856[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (2))){
var inst_27805 = (state_27828[(7)]);
var state_27828__$1 = state_27828;
if(cljs.core.truth_(inst_27805)){
var statearr_27837_27857 = state_27828__$1;
(statearr_27837_27857[(1)] = (4));

} else {
var statearr_27838_27858 = state_27828__$1;
(statearr_27838_27858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (11))){
var inst_27819 = cljs.core.async.close_BANG_.call(null,ch);
var state_27828__$1 = state_27828;
var statearr_27839_27859 = state_27828__$1;
(statearr_27839_27859[(2)] = inst_27819);

(statearr_27839_27859[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (9))){
var state_27828__$1 = state_27828;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27840_27860 = state_27828__$1;
(statearr_27840_27860[(1)] = (11));

} else {
var statearr_27841_27861 = state_27828__$1;
(statearr_27841_27861[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (5))){
var inst_27805 = (state_27828[(7)]);
var state_27828__$1 = state_27828;
var statearr_27842_27862 = state_27828__$1;
(statearr_27842_27862[(2)] = inst_27805);

(statearr_27842_27862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (10))){
var inst_27824 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
var statearr_27843_27863 = state_27828__$1;
(statearr_27843_27863[(2)] = inst_27824);

(statearr_27843_27863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (8))){
var inst_27805 = (state_27828[(7)]);
var inst_27815 = cljs.core.next.call(null,inst_27805);
var inst_27805__$1 = inst_27815;
var state_27828__$1 = (function (){var statearr_27844 = state_27828;
(statearr_27844[(7)] = inst_27805__$1);

return statearr_27844;
})();
var statearr_27845_27864 = state_27828__$1;
(statearr_27845_27864[(2)] = null);

(statearr_27845_27864[(1)] = (2));


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
});})(c__27270__auto__))
;
return ((function (switch__27179__auto__,c__27270__auto__){
return (function() {
var cljs$core$async$state_machine__27180__auto__ = null;
var cljs$core$async$state_machine__27180__auto____0 = (function (){
var statearr_27846 = [null,null,null,null,null,null,null,null];
(statearr_27846[(0)] = cljs$core$async$state_machine__27180__auto__);

(statearr_27846[(1)] = (1));

return statearr_27846;
});
var cljs$core$async$state_machine__27180__auto____1 = (function (state_27828){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_27828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e27847){if((e27847 instanceof Object)){
var ex__27183__auto__ = e27847;
var statearr_27848_27865 = state_27828;
(statearr_27848_27865[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27866 = state_27828;
state_27828 = G__27866;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$state_machine__27180__auto__ = function(state_27828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27180__auto____1.call(this,state_27828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27180__auto____0;
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27180__auto____1;
return cljs$core$async$state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto__))
})();
var state__27272__auto__ = (function (){var statearr_27849 = f__27271__auto__.call(null);
(statearr_27849[(6)] = c__27270__auto__);

return statearr_27849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto__))
);

return c__27270__auto__;
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
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27867 = (function (ch,cs,meta27868){
this.ch = ch;
this.cs = cs;
this.meta27868 = meta27868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27869,meta27868__$1){
var self__ = this;
var _27869__$1 = this;
return (new cljs.core.async.t_cljs$core$async27867(self__.ch,self__.cs,meta27868__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27869){
var self__ = this;
var _27869__$1 = this;
return self__.meta27868;
});})(cs))
;

cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27867.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27867.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27868","meta27868",-1290527113,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27867.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27867";

cljs.core.async.t_cljs$core$async27867.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27867");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27867.
 */
cljs.core.async.__GT_t_cljs$core$async27867 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27867(ch__$1,cs__$1,meta27868){
return (new cljs.core.async.t_cljs$core$async27867(ch__$1,cs__$1,meta27868));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27867(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27270__auto___28089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___28089,cs,m,dchan,dctr,done){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___28089,cs,m,dchan,dctr,done){
return (function (state_28004){
var state_val_28005 = (state_28004[(1)]);
if((state_val_28005 === (7))){
var inst_28000 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28006_28090 = state_28004__$1;
(statearr_28006_28090[(2)] = inst_28000);

(statearr_28006_28090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (20))){
var inst_27903 = (state_28004[(7)]);
var inst_27915 = cljs.core.first.call(null,inst_27903);
var inst_27916 = cljs.core.nth.call(null,inst_27915,(0),null);
var inst_27917 = cljs.core.nth.call(null,inst_27915,(1),null);
var state_28004__$1 = (function (){var statearr_28007 = state_28004;
(statearr_28007[(8)] = inst_27916);

return statearr_28007;
})();
if(cljs.core.truth_(inst_27917)){
var statearr_28008_28091 = state_28004__$1;
(statearr_28008_28091[(1)] = (22));

} else {
var statearr_28009_28092 = state_28004__$1;
(statearr_28009_28092[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (27))){
var inst_27952 = (state_28004[(9)]);
var inst_27872 = (state_28004[(10)]);
var inst_27945 = (state_28004[(11)]);
var inst_27947 = (state_28004[(12)]);
var inst_27952__$1 = cljs.core._nth.call(null,inst_27945,inst_27947);
var inst_27953 = cljs.core.async.put_BANG_.call(null,inst_27952__$1,inst_27872,done);
var state_28004__$1 = (function (){var statearr_28010 = state_28004;
(statearr_28010[(9)] = inst_27952__$1);

return statearr_28010;
})();
if(cljs.core.truth_(inst_27953)){
var statearr_28011_28093 = state_28004__$1;
(statearr_28011_28093[(1)] = (30));

} else {
var statearr_28012_28094 = state_28004__$1;
(statearr_28012_28094[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (1))){
var state_28004__$1 = state_28004;
var statearr_28013_28095 = state_28004__$1;
(statearr_28013_28095[(2)] = null);

(statearr_28013_28095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (24))){
var inst_27903 = (state_28004[(7)]);
var inst_27922 = (state_28004[(2)]);
var inst_27923 = cljs.core.next.call(null,inst_27903);
var inst_27881 = inst_27923;
var inst_27882 = null;
var inst_27883 = (0);
var inst_27884 = (0);
var state_28004__$1 = (function (){var statearr_28014 = state_28004;
(statearr_28014[(13)] = inst_27882);

(statearr_28014[(14)] = inst_27881);

(statearr_28014[(15)] = inst_27922);

(statearr_28014[(16)] = inst_27884);

(statearr_28014[(17)] = inst_27883);

return statearr_28014;
})();
var statearr_28015_28096 = state_28004__$1;
(statearr_28015_28096[(2)] = null);

(statearr_28015_28096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (39))){
var state_28004__$1 = state_28004;
var statearr_28019_28097 = state_28004__$1;
(statearr_28019_28097[(2)] = null);

(statearr_28019_28097[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (4))){
var inst_27872 = (state_28004[(10)]);
var inst_27872__$1 = (state_28004[(2)]);
var inst_27873 = (inst_27872__$1 == null);
var state_28004__$1 = (function (){var statearr_28020 = state_28004;
(statearr_28020[(10)] = inst_27872__$1);

return statearr_28020;
})();
if(cljs.core.truth_(inst_27873)){
var statearr_28021_28098 = state_28004__$1;
(statearr_28021_28098[(1)] = (5));

} else {
var statearr_28022_28099 = state_28004__$1;
(statearr_28022_28099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (15))){
var inst_27882 = (state_28004[(13)]);
var inst_27881 = (state_28004[(14)]);
var inst_27884 = (state_28004[(16)]);
var inst_27883 = (state_28004[(17)]);
var inst_27899 = (state_28004[(2)]);
var inst_27900 = (inst_27884 + (1));
var tmp28016 = inst_27882;
var tmp28017 = inst_27881;
var tmp28018 = inst_27883;
var inst_27881__$1 = tmp28017;
var inst_27882__$1 = tmp28016;
var inst_27883__$1 = tmp28018;
var inst_27884__$1 = inst_27900;
var state_28004__$1 = (function (){var statearr_28023 = state_28004;
(statearr_28023[(13)] = inst_27882__$1);

(statearr_28023[(14)] = inst_27881__$1);

(statearr_28023[(16)] = inst_27884__$1);

(statearr_28023[(17)] = inst_27883__$1);

(statearr_28023[(18)] = inst_27899);

return statearr_28023;
})();
var statearr_28024_28100 = state_28004__$1;
(statearr_28024_28100[(2)] = null);

(statearr_28024_28100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (21))){
var inst_27926 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28028_28101 = state_28004__$1;
(statearr_28028_28101[(2)] = inst_27926);

(statearr_28028_28101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (31))){
var inst_27952 = (state_28004[(9)]);
var inst_27956 = done.call(null,null);
var inst_27957 = cljs.core.async.untap_STAR_.call(null,m,inst_27952);
var state_28004__$1 = (function (){var statearr_28029 = state_28004;
(statearr_28029[(19)] = inst_27956);

return statearr_28029;
})();
var statearr_28030_28102 = state_28004__$1;
(statearr_28030_28102[(2)] = inst_27957);

(statearr_28030_28102[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (32))){
var inst_27944 = (state_28004[(20)]);
var inst_27946 = (state_28004[(21)]);
var inst_27945 = (state_28004[(11)]);
var inst_27947 = (state_28004[(12)]);
var inst_27959 = (state_28004[(2)]);
var inst_27960 = (inst_27947 + (1));
var tmp28025 = inst_27944;
var tmp28026 = inst_27946;
var tmp28027 = inst_27945;
var inst_27944__$1 = tmp28025;
var inst_27945__$1 = tmp28027;
var inst_27946__$1 = tmp28026;
var inst_27947__$1 = inst_27960;
var state_28004__$1 = (function (){var statearr_28031 = state_28004;
(statearr_28031[(20)] = inst_27944__$1);

(statearr_28031[(22)] = inst_27959);

(statearr_28031[(21)] = inst_27946__$1);

(statearr_28031[(11)] = inst_27945__$1);

(statearr_28031[(12)] = inst_27947__$1);

return statearr_28031;
})();
var statearr_28032_28103 = state_28004__$1;
(statearr_28032_28103[(2)] = null);

(statearr_28032_28103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (40))){
var inst_27972 = (state_28004[(23)]);
var inst_27976 = done.call(null,null);
var inst_27977 = cljs.core.async.untap_STAR_.call(null,m,inst_27972);
var state_28004__$1 = (function (){var statearr_28033 = state_28004;
(statearr_28033[(24)] = inst_27976);

return statearr_28033;
})();
var statearr_28034_28104 = state_28004__$1;
(statearr_28034_28104[(2)] = inst_27977);

(statearr_28034_28104[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (33))){
var inst_27963 = (state_28004[(25)]);
var inst_27965 = cljs.core.chunked_seq_QMARK_.call(null,inst_27963);
var state_28004__$1 = state_28004;
if(inst_27965){
var statearr_28035_28105 = state_28004__$1;
(statearr_28035_28105[(1)] = (36));

} else {
var statearr_28036_28106 = state_28004__$1;
(statearr_28036_28106[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (13))){
var inst_27893 = (state_28004[(26)]);
var inst_27896 = cljs.core.async.close_BANG_.call(null,inst_27893);
var state_28004__$1 = state_28004;
var statearr_28037_28107 = state_28004__$1;
(statearr_28037_28107[(2)] = inst_27896);

(statearr_28037_28107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (22))){
var inst_27916 = (state_28004[(8)]);
var inst_27919 = cljs.core.async.close_BANG_.call(null,inst_27916);
var state_28004__$1 = state_28004;
var statearr_28038_28108 = state_28004__$1;
(statearr_28038_28108[(2)] = inst_27919);

(statearr_28038_28108[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (36))){
var inst_27963 = (state_28004[(25)]);
var inst_27967 = cljs.core.chunk_first.call(null,inst_27963);
var inst_27968 = cljs.core.chunk_rest.call(null,inst_27963);
var inst_27969 = cljs.core.count.call(null,inst_27967);
var inst_27944 = inst_27968;
var inst_27945 = inst_27967;
var inst_27946 = inst_27969;
var inst_27947 = (0);
var state_28004__$1 = (function (){var statearr_28039 = state_28004;
(statearr_28039[(20)] = inst_27944);

(statearr_28039[(21)] = inst_27946);

(statearr_28039[(11)] = inst_27945);

(statearr_28039[(12)] = inst_27947);

return statearr_28039;
})();
var statearr_28040_28109 = state_28004__$1;
(statearr_28040_28109[(2)] = null);

(statearr_28040_28109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (41))){
var inst_27963 = (state_28004[(25)]);
var inst_27979 = (state_28004[(2)]);
var inst_27980 = cljs.core.next.call(null,inst_27963);
var inst_27944 = inst_27980;
var inst_27945 = null;
var inst_27946 = (0);
var inst_27947 = (0);
var state_28004__$1 = (function (){var statearr_28041 = state_28004;
(statearr_28041[(20)] = inst_27944);

(statearr_28041[(27)] = inst_27979);

(statearr_28041[(21)] = inst_27946);

(statearr_28041[(11)] = inst_27945);

(statearr_28041[(12)] = inst_27947);

return statearr_28041;
})();
var statearr_28042_28110 = state_28004__$1;
(statearr_28042_28110[(2)] = null);

(statearr_28042_28110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (43))){
var state_28004__$1 = state_28004;
var statearr_28043_28111 = state_28004__$1;
(statearr_28043_28111[(2)] = null);

(statearr_28043_28111[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (29))){
var inst_27988 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28044_28112 = state_28004__$1;
(statearr_28044_28112[(2)] = inst_27988);

(statearr_28044_28112[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (44))){
var inst_27997 = (state_28004[(2)]);
var state_28004__$1 = (function (){var statearr_28045 = state_28004;
(statearr_28045[(28)] = inst_27997);

return statearr_28045;
})();
var statearr_28046_28113 = state_28004__$1;
(statearr_28046_28113[(2)] = null);

(statearr_28046_28113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (6))){
var inst_27936 = (state_28004[(29)]);
var inst_27935 = cljs.core.deref.call(null,cs);
var inst_27936__$1 = cljs.core.keys.call(null,inst_27935);
var inst_27937 = cljs.core.count.call(null,inst_27936__$1);
var inst_27938 = cljs.core.reset_BANG_.call(null,dctr,inst_27937);
var inst_27943 = cljs.core.seq.call(null,inst_27936__$1);
var inst_27944 = inst_27943;
var inst_27945 = null;
var inst_27946 = (0);
var inst_27947 = (0);
var state_28004__$1 = (function (){var statearr_28047 = state_28004;
(statearr_28047[(20)] = inst_27944);

(statearr_28047[(29)] = inst_27936__$1);

(statearr_28047[(21)] = inst_27946);

(statearr_28047[(30)] = inst_27938);

(statearr_28047[(11)] = inst_27945);

(statearr_28047[(12)] = inst_27947);

return statearr_28047;
})();
var statearr_28048_28114 = state_28004__$1;
(statearr_28048_28114[(2)] = null);

(statearr_28048_28114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (28))){
var inst_27944 = (state_28004[(20)]);
var inst_27963 = (state_28004[(25)]);
var inst_27963__$1 = cljs.core.seq.call(null,inst_27944);
var state_28004__$1 = (function (){var statearr_28049 = state_28004;
(statearr_28049[(25)] = inst_27963__$1);

return statearr_28049;
})();
if(inst_27963__$1){
var statearr_28050_28115 = state_28004__$1;
(statearr_28050_28115[(1)] = (33));

} else {
var statearr_28051_28116 = state_28004__$1;
(statearr_28051_28116[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (25))){
var inst_27946 = (state_28004[(21)]);
var inst_27947 = (state_28004[(12)]);
var inst_27949 = (inst_27947 < inst_27946);
var inst_27950 = inst_27949;
var state_28004__$1 = state_28004;
if(cljs.core.truth_(inst_27950)){
var statearr_28052_28117 = state_28004__$1;
(statearr_28052_28117[(1)] = (27));

} else {
var statearr_28053_28118 = state_28004__$1;
(statearr_28053_28118[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (34))){
var state_28004__$1 = state_28004;
var statearr_28054_28119 = state_28004__$1;
(statearr_28054_28119[(2)] = null);

(statearr_28054_28119[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (17))){
var state_28004__$1 = state_28004;
var statearr_28055_28120 = state_28004__$1;
(statearr_28055_28120[(2)] = null);

(statearr_28055_28120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (3))){
var inst_28002 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28004__$1,inst_28002);
} else {
if((state_val_28005 === (12))){
var inst_27931 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28056_28121 = state_28004__$1;
(statearr_28056_28121[(2)] = inst_27931);

(statearr_28056_28121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (2))){
var state_28004__$1 = state_28004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28004__$1,(4),ch);
} else {
if((state_val_28005 === (23))){
var state_28004__$1 = state_28004;
var statearr_28057_28122 = state_28004__$1;
(statearr_28057_28122[(2)] = null);

(statearr_28057_28122[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (35))){
var inst_27986 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28058_28123 = state_28004__$1;
(statearr_28058_28123[(2)] = inst_27986);

(statearr_28058_28123[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (19))){
var inst_27903 = (state_28004[(7)]);
var inst_27907 = cljs.core.chunk_first.call(null,inst_27903);
var inst_27908 = cljs.core.chunk_rest.call(null,inst_27903);
var inst_27909 = cljs.core.count.call(null,inst_27907);
var inst_27881 = inst_27908;
var inst_27882 = inst_27907;
var inst_27883 = inst_27909;
var inst_27884 = (0);
var state_28004__$1 = (function (){var statearr_28059 = state_28004;
(statearr_28059[(13)] = inst_27882);

(statearr_28059[(14)] = inst_27881);

(statearr_28059[(16)] = inst_27884);

(statearr_28059[(17)] = inst_27883);

return statearr_28059;
})();
var statearr_28060_28124 = state_28004__$1;
(statearr_28060_28124[(2)] = null);

(statearr_28060_28124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (11))){
var inst_27881 = (state_28004[(14)]);
var inst_27903 = (state_28004[(7)]);
var inst_27903__$1 = cljs.core.seq.call(null,inst_27881);
var state_28004__$1 = (function (){var statearr_28061 = state_28004;
(statearr_28061[(7)] = inst_27903__$1);

return statearr_28061;
})();
if(inst_27903__$1){
var statearr_28062_28125 = state_28004__$1;
(statearr_28062_28125[(1)] = (16));

} else {
var statearr_28063_28126 = state_28004__$1;
(statearr_28063_28126[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (9))){
var inst_27933 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28064_28127 = state_28004__$1;
(statearr_28064_28127[(2)] = inst_27933);

(statearr_28064_28127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (5))){
var inst_27879 = cljs.core.deref.call(null,cs);
var inst_27880 = cljs.core.seq.call(null,inst_27879);
var inst_27881 = inst_27880;
var inst_27882 = null;
var inst_27883 = (0);
var inst_27884 = (0);
var state_28004__$1 = (function (){var statearr_28065 = state_28004;
(statearr_28065[(13)] = inst_27882);

(statearr_28065[(14)] = inst_27881);

(statearr_28065[(16)] = inst_27884);

(statearr_28065[(17)] = inst_27883);

return statearr_28065;
})();
var statearr_28066_28128 = state_28004__$1;
(statearr_28066_28128[(2)] = null);

(statearr_28066_28128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (14))){
var state_28004__$1 = state_28004;
var statearr_28067_28129 = state_28004__$1;
(statearr_28067_28129[(2)] = null);

(statearr_28067_28129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (45))){
var inst_27994 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28068_28130 = state_28004__$1;
(statearr_28068_28130[(2)] = inst_27994);

(statearr_28068_28130[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (26))){
var inst_27936 = (state_28004[(29)]);
var inst_27990 = (state_28004[(2)]);
var inst_27991 = cljs.core.seq.call(null,inst_27936);
var state_28004__$1 = (function (){var statearr_28069 = state_28004;
(statearr_28069[(31)] = inst_27990);

return statearr_28069;
})();
if(inst_27991){
var statearr_28070_28131 = state_28004__$1;
(statearr_28070_28131[(1)] = (42));

} else {
var statearr_28071_28132 = state_28004__$1;
(statearr_28071_28132[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (16))){
var inst_27903 = (state_28004[(7)]);
var inst_27905 = cljs.core.chunked_seq_QMARK_.call(null,inst_27903);
var state_28004__$1 = state_28004;
if(inst_27905){
var statearr_28072_28133 = state_28004__$1;
(statearr_28072_28133[(1)] = (19));

} else {
var statearr_28073_28134 = state_28004__$1;
(statearr_28073_28134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (38))){
var inst_27983 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28074_28135 = state_28004__$1;
(statearr_28074_28135[(2)] = inst_27983);

(statearr_28074_28135[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (30))){
var state_28004__$1 = state_28004;
var statearr_28075_28136 = state_28004__$1;
(statearr_28075_28136[(2)] = null);

(statearr_28075_28136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (10))){
var inst_27882 = (state_28004[(13)]);
var inst_27884 = (state_28004[(16)]);
var inst_27892 = cljs.core._nth.call(null,inst_27882,inst_27884);
var inst_27893 = cljs.core.nth.call(null,inst_27892,(0),null);
var inst_27894 = cljs.core.nth.call(null,inst_27892,(1),null);
var state_28004__$1 = (function (){var statearr_28076 = state_28004;
(statearr_28076[(26)] = inst_27893);

return statearr_28076;
})();
if(cljs.core.truth_(inst_27894)){
var statearr_28077_28137 = state_28004__$1;
(statearr_28077_28137[(1)] = (13));

} else {
var statearr_28078_28138 = state_28004__$1;
(statearr_28078_28138[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (18))){
var inst_27929 = (state_28004[(2)]);
var state_28004__$1 = state_28004;
var statearr_28079_28139 = state_28004__$1;
(statearr_28079_28139[(2)] = inst_27929);

(statearr_28079_28139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (42))){
var state_28004__$1 = state_28004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28004__$1,(45),dchan);
} else {
if((state_val_28005 === (37))){
var inst_27972 = (state_28004[(23)]);
var inst_27872 = (state_28004[(10)]);
var inst_27963 = (state_28004[(25)]);
var inst_27972__$1 = cljs.core.first.call(null,inst_27963);
var inst_27973 = cljs.core.async.put_BANG_.call(null,inst_27972__$1,inst_27872,done);
var state_28004__$1 = (function (){var statearr_28080 = state_28004;
(statearr_28080[(23)] = inst_27972__$1);

return statearr_28080;
})();
if(cljs.core.truth_(inst_27973)){
var statearr_28081_28140 = state_28004__$1;
(statearr_28081_28140[(1)] = (39));

} else {
var statearr_28082_28141 = state_28004__$1;
(statearr_28082_28141[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28005 === (8))){
var inst_27884 = (state_28004[(16)]);
var inst_27883 = (state_28004[(17)]);
var inst_27886 = (inst_27884 < inst_27883);
var inst_27887 = inst_27886;
var state_28004__$1 = state_28004;
if(cljs.core.truth_(inst_27887)){
var statearr_28083_28142 = state_28004__$1;
(statearr_28083_28142[(1)] = (10));

} else {
var statearr_28084_28143 = state_28004__$1;
(statearr_28084_28143[(1)] = (11));

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
});})(c__27270__auto___28089,cs,m,dchan,dctr,done))
;
return ((function (switch__27179__auto__,c__27270__auto___28089,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27180__auto__ = null;
var cljs$core$async$mult_$_state_machine__27180__auto____0 = (function (){
var statearr_28085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28085[(0)] = cljs$core$async$mult_$_state_machine__27180__auto__);

(statearr_28085[(1)] = (1));

return statearr_28085;
});
var cljs$core$async$mult_$_state_machine__27180__auto____1 = (function (state_28004){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_28004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e28086){if((e28086 instanceof Object)){
var ex__27183__auto__ = e28086;
var statearr_28087_28144 = state_28004;
(statearr_28087_28144[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28145 = state_28004;
state_28004 = G__28145;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27180__auto__ = function(state_28004){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27180__auto____1.call(this,state_28004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27180__auto____0;
cljs$core$async$mult_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27180__auto____1;
return cljs$core$async$mult_$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___28089,cs,m,dchan,dctr,done))
})();
var state__27272__auto__ = (function (){var statearr_28088 = f__27271__auto__.call(null);
(statearr_28088[(6)] = c__27270__auto___28089);

return statearr_28088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___28089,cs,m,dchan,dctr,done))
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
var G__28147 = arguments.length;
switch (G__28147) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28159 = arguments.length;
var i__4532__auto___28160 = (0);
while(true){
if((i__4532__auto___28160 < len__4531__auto___28159)){
args__4534__auto__.push((arguments[i__4532__auto___28160]));

var G__28161 = (i__4532__auto___28160 + (1));
i__4532__auto___28160 = G__28161;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28153){
var map__28154 = p__28153;
var map__28154__$1 = ((((!((map__28154 == null)))?(((((map__28154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28154):map__28154);
var opts = map__28154__$1;
var statearr_28156_28162 = state;
(statearr_28156_28162[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28154,map__28154__$1,opts){
return (function (val){
var statearr_28157_28163 = state;
(statearr_28157_28163[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28154,map__28154__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28158_28164 = state;
(statearr_28158_28164[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28149){
var G__28150 = cljs.core.first.call(null,seq28149);
var seq28149__$1 = cljs.core.next.call(null,seq28149);
var G__28151 = cljs.core.first.call(null,seq28149__$1);
var seq28149__$2 = cljs.core.next.call(null,seq28149__$1);
var G__28152 = cljs.core.first.call(null,seq28149__$2);
var seq28149__$3 = cljs.core.next.call(null,seq28149__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28150,G__28151,G__28152,seq28149__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28165 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28166){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28166 = meta28166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28167,meta28166__$1){
var self__ = this;
var _28167__$1 = this;
return (new cljs.core.async.t_cljs$core$async28165(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28166__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28165.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28167){
var self__ = this;
var _28167__$1 = this;
return self__.meta28166;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28165.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28165.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28165.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28165.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28165.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28165.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28165.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28165.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28165.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28166","meta28166",-1097044283,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28165.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28165";

cljs.core.async.t_cljs$core$async28165.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28165");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28165.
 */
cljs.core.async.__GT_t_cljs$core$async28165 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28165(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28166){
return (new cljs.core.async.t_cljs$core$async28165(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28166));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28165(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27270__auto___28329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___28329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___28329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28269){
var state_val_28270 = (state_28269[(1)]);
if((state_val_28270 === (7))){
var inst_28184 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
var statearr_28271_28330 = state_28269__$1;
(statearr_28271_28330[(2)] = inst_28184);

(statearr_28271_28330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (20))){
var inst_28196 = (state_28269[(7)]);
var state_28269__$1 = state_28269;
var statearr_28272_28331 = state_28269__$1;
(statearr_28272_28331[(2)] = inst_28196);

(statearr_28272_28331[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (27))){
var state_28269__$1 = state_28269;
var statearr_28273_28332 = state_28269__$1;
(statearr_28273_28332[(2)] = null);

(statearr_28273_28332[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (1))){
var inst_28171 = (state_28269[(8)]);
var inst_28171__$1 = calc_state.call(null);
var inst_28173 = (inst_28171__$1 == null);
var inst_28174 = cljs.core.not.call(null,inst_28173);
var state_28269__$1 = (function (){var statearr_28274 = state_28269;
(statearr_28274[(8)] = inst_28171__$1);

return statearr_28274;
})();
if(inst_28174){
var statearr_28275_28333 = state_28269__$1;
(statearr_28275_28333[(1)] = (2));

} else {
var statearr_28276_28334 = state_28269__$1;
(statearr_28276_28334[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (24))){
var inst_28243 = (state_28269[(9)]);
var inst_28229 = (state_28269[(10)]);
var inst_28220 = (state_28269[(11)]);
var inst_28243__$1 = inst_28220.call(null,inst_28229);
var state_28269__$1 = (function (){var statearr_28277 = state_28269;
(statearr_28277[(9)] = inst_28243__$1);

return statearr_28277;
})();
if(cljs.core.truth_(inst_28243__$1)){
var statearr_28278_28335 = state_28269__$1;
(statearr_28278_28335[(1)] = (29));

} else {
var statearr_28279_28336 = state_28269__$1;
(statearr_28279_28336[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (4))){
var inst_28187 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28187)){
var statearr_28280_28337 = state_28269__$1;
(statearr_28280_28337[(1)] = (8));

} else {
var statearr_28281_28338 = state_28269__$1;
(statearr_28281_28338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (15))){
var inst_28214 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28214)){
var statearr_28282_28339 = state_28269__$1;
(statearr_28282_28339[(1)] = (19));

} else {
var statearr_28283_28340 = state_28269__$1;
(statearr_28283_28340[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (21))){
var inst_28219 = (state_28269[(12)]);
var inst_28219__$1 = (state_28269[(2)]);
var inst_28220 = cljs.core.get.call(null,inst_28219__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28221 = cljs.core.get.call(null,inst_28219__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28222 = cljs.core.get.call(null,inst_28219__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28269__$1 = (function (){var statearr_28284 = state_28269;
(statearr_28284[(12)] = inst_28219__$1);

(statearr_28284[(13)] = inst_28221);

(statearr_28284[(11)] = inst_28220);

return statearr_28284;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28269__$1,(22),inst_28222);
} else {
if((state_val_28270 === (31))){
var inst_28251 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28251)){
var statearr_28285_28341 = state_28269__$1;
(statearr_28285_28341[(1)] = (32));

} else {
var statearr_28286_28342 = state_28269__$1;
(statearr_28286_28342[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (32))){
var inst_28228 = (state_28269[(14)]);
var state_28269__$1 = state_28269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28269__$1,(35),out,inst_28228);
} else {
if((state_val_28270 === (33))){
var inst_28219 = (state_28269[(12)]);
var inst_28196 = inst_28219;
var state_28269__$1 = (function (){var statearr_28287 = state_28269;
(statearr_28287[(7)] = inst_28196);

return statearr_28287;
})();
var statearr_28288_28343 = state_28269__$1;
(statearr_28288_28343[(2)] = null);

(statearr_28288_28343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (13))){
var inst_28196 = (state_28269[(7)]);
var inst_28203 = inst_28196.cljs$lang$protocol_mask$partition0$;
var inst_28204 = (inst_28203 & (64));
var inst_28205 = inst_28196.cljs$core$ISeq$;
var inst_28206 = (cljs.core.PROTOCOL_SENTINEL === inst_28205);
var inst_28207 = ((inst_28204) || (inst_28206));
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28207)){
var statearr_28289_28344 = state_28269__$1;
(statearr_28289_28344[(1)] = (16));

} else {
var statearr_28290_28345 = state_28269__$1;
(statearr_28290_28345[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (22))){
var inst_28229 = (state_28269[(10)]);
var inst_28228 = (state_28269[(14)]);
var inst_28227 = (state_28269[(2)]);
var inst_28228__$1 = cljs.core.nth.call(null,inst_28227,(0),null);
var inst_28229__$1 = cljs.core.nth.call(null,inst_28227,(1),null);
var inst_28230 = (inst_28228__$1 == null);
var inst_28231 = cljs.core._EQ_.call(null,inst_28229__$1,change);
var inst_28232 = ((inst_28230) || (inst_28231));
var state_28269__$1 = (function (){var statearr_28291 = state_28269;
(statearr_28291[(10)] = inst_28229__$1);

(statearr_28291[(14)] = inst_28228__$1);

return statearr_28291;
})();
if(cljs.core.truth_(inst_28232)){
var statearr_28292_28346 = state_28269__$1;
(statearr_28292_28346[(1)] = (23));

} else {
var statearr_28293_28347 = state_28269__$1;
(statearr_28293_28347[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (36))){
var inst_28219 = (state_28269[(12)]);
var inst_28196 = inst_28219;
var state_28269__$1 = (function (){var statearr_28294 = state_28269;
(statearr_28294[(7)] = inst_28196);

return statearr_28294;
})();
var statearr_28295_28348 = state_28269__$1;
(statearr_28295_28348[(2)] = null);

(statearr_28295_28348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (29))){
var inst_28243 = (state_28269[(9)]);
var state_28269__$1 = state_28269;
var statearr_28296_28349 = state_28269__$1;
(statearr_28296_28349[(2)] = inst_28243);

(statearr_28296_28349[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (6))){
var state_28269__$1 = state_28269;
var statearr_28297_28350 = state_28269__$1;
(statearr_28297_28350[(2)] = false);

(statearr_28297_28350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (28))){
var inst_28239 = (state_28269[(2)]);
var inst_28240 = calc_state.call(null);
var inst_28196 = inst_28240;
var state_28269__$1 = (function (){var statearr_28298 = state_28269;
(statearr_28298[(7)] = inst_28196);

(statearr_28298[(15)] = inst_28239);

return statearr_28298;
})();
var statearr_28299_28351 = state_28269__$1;
(statearr_28299_28351[(2)] = null);

(statearr_28299_28351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (25))){
var inst_28265 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
var statearr_28300_28352 = state_28269__$1;
(statearr_28300_28352[(2)] = inst_28265);

(statearr_28300_28352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (34))){
var inst_28263 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
var statearr_28301_28353 = state_28269__$1;
(statearr_28301_28353[(2)] = inst_28263);

(statearr_28301_28353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (17))){
var state_28269__$1 = state_28269;
var statearr_28302_28354 = state_28269__$1;
(statearr_28302_28354[(2)] = false);

(statearr_28302_28354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (3))){
var state_28269__$1 = state_28269;
var statearr_28303_28355 = state_28269__$1;
(statearr_28303_28355[(2)] = false);

(statearr_28303_28355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (12))){
var inst_28267 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28269__$1,inst_28267);
} else {
if((state_val_28270 === (2))){
var inst_28171 = (state_28269[(8)]);
var inst_28176 = inst_28171.cljs$lang$protocol_mask$partition0$;
var inst_28177 = (inst_28176 & (64));
var inst_28178 = inst_28171.cljs$core$ISeq$;
var inst_28179 = (cljs.core.PROTOCOL_SENTINEL === inst_28178);
var inst_28180 = ((inst_28177) || (inst_28179));
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28180)){
var statearr_28304_28356 = state_28269__$1;
(statearr_28304_28356[(1)] = (5));

} else {
var statearr_28305_28357 = state_28269__$1;
(statearr_28305_28357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (23))){
var inst_28228 = (state_28269[(14)]);
var inst_28234 = (inst_28228 == null);
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28234)){
var statearr_28306_28358 = state_28269__$1;
(statearr_28306_28358[(1)] = (26));

} else {
var statearr_28307_28359 = state_28269__$1;
(statearr_28307_28359[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (35))){
var inst_28254 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
if(cljs.core.truth_(inst_28254)){
var statearr_28308_28360 = state_28269__$1;
(statearr_28308_28360[(1)] = (36));

} else {
var statearr_28309_28361 = state_28269__$1;
(statearr_28309_28361[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (19))){
var inst_28196 = (state_28269[(7)]);
var inst_28216 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28196);
var state_28269__$1 = state_28269;
var statearr_28310_28362 = state_28269__$1;
(statearr_28310_28362[(2)] = inst_28216);

(statearr_28310_28362[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (11))){
var inst_28196 = (state_28269[(7)]);
var inst_28200 = (inst_28196 == null);
var inst_28201 = cljs.core.not.call(null,inst_28200);
var state_28269__$1 = state_28269;
if(inst_28201){
var statearr_28311_28363 = state_28269__$1;
(statearr_28311_28363[(1)] = (13));

} else {
var statearr_28312_28364 = state_28269__$1;
(statearr_28312_28364[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (9))){
var inst_28171 = (state_28269[(8)]);
var state_28269__$1 = state_28269;
var statearr_28313_28365 = state_28269__$1;
(statearr_28313_28365[(2)] = inst_28171);

(statearr_28313_28365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (5))){
var state_28269__$1 = state_28269;
var statearr_28314_28366 = state_28269__$1;
(statearr_28314_28366[(2)] = true);

(statearr_28314_28366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (14))){
var state_28269__$1 = state_28269;
var statearr_28315_28367 = state_28269__$1;
(statearr_28315_28367[(2)] = false);

(statearr_28315_28367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (26))){
var inst_28229 = (state_28269[(10)]);
var inst_28236 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28229);
var state_28269__$1 = state_28269;
var statearr_28316_28368 = state_28269__$1;
(statearr_28316_28368[(2)] = inst_28236);

(statearr_28316_28368[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (16))){
var state_28269__$1 = state_28269;
var statearr_28317_28369 = state_28269__$1;
(statearr_28317_28369[(2)] = true);

(statearr_28317_28369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (38))){
var inst_28259 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
var statearr_28318_28370 = state_28269__$1;
(statearr_28318_28370[(2)] = inst_28259);

(statearr_28318_28370[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (30))){
var inst_28229 = (state_28269[(10)]);
var inst_28221 = (state_28269[(13)]);
var inst_28220 = (state_28269[(11)]);
var inst_28246 = cljs.core.empty_QMARK_.call(null,inst_28220);
var inst_28247 = inst_28221.call(null,inst_28229);
var inst_28248 = cljs.core.not.call(null,inst_28247);
var inst_28249 = ((inst_28246) && (inst_28248));
var state_28269__$1 = state_28269;
var statearr_28319_28371 = state_28269__$1;
(statearr_28319_28371[(2)] = inst_28249);

(statearr_28319_28371[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (10))){
var inst_28171 = (state_28269[(8)]);
var inst_28192 = (state_28269[(2)]);
var inst_28193 = cljs.core.get.call(null,inst_28192,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28194 = cljs.core.get.call(null,inst_28192,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28195 = cljs.core.get.call(null,inst_28192,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28196 = inst_28171;
var state_28269__$1 = (function (){var statearr_28320 = state_28269;
(statearr_28320[(7)] = inst_28196);

(statearr_28320[(16)] = inst_28193);

(statearr_28320[(17)] = inst_28195);

(statearr_28320[(18)] = inst_28194);

return statearr_28320;
})();
var statearr_28321_28372 = state_28269__$1;
(statearr_28321_28372[(2)] = null);

(statearr_28321_28372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (18))){
var inst_28211 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
var statearr_28322_28373 = state_28269__$1;
(statearr_28322_28373[(2)] = inst_28211);

(statearr_28322_28373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (37))){
var state_28269__$1 = state_28269;
var statearr_28323_28374 = state_28269__$1;
(statearr_28323_28374[(2)] = null);

(statearr_28323_28374[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (8))){
var inst_28171 = (state_28269[(8)]);
var inst_28189 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28171);
var state_28269__$1 = state_28269;
var statearr_28324_28375 = state_28269__$1;
(statearr_28324_28375[(2)] = inst_28189);

(statearr_28324_28375[(1)] = (10));


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
});})(c__27270__auto___28329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27179__auto__,c__27270__auto___28329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27180__auto__ = null;
var cljs$core$async$mix_$_state_machine__27180__auto____0 = (function (){
var statearr_28325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28325[(0)] = cljs$core$async$mix_$_state_machine__27180__auto__);

(statearr_28325[(1)] = (1));

return statearr_28325;
});
var cljs$core$async$mix_$_state_machine__27180__auto____1 = (function (state_28269){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_28269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e28326){if((e28326 instanceof Object)){
var ex__27183__auto__ = e28326;
var statearr_28327_28376 = state_28269;
(statearr_28327_28376[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28377 = state_28269;
state_28269 = G__28377;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27180__auto__ = function(state_28269){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27180__auto____1.call(this,state_28269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27180__auto____0;
cljs$core$async$mix_$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27180__auto____1;
return cljs$core$async$mix_$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___28329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27272__auto__ = (function (){var statearr_28328 = f__27271__auto__.call(null);
(statearr_28328[(6)] = c__27270__auto___28329);

return statearr_28328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___28329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28379 = arguments.length;
switch (G__28379) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
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
var G__28383 = arguments.length;
switch (G__28383) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__28381_SHARP_){
if(cljs.core.truth_(p1__28381_SHARP_.call(null,topic))){
return p1__28381_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28381_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28384 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28385){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28385 = meta28385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28386,meta28385__$1){
var self__ = this;
var _28386__$1 = this;
return (new cljs.core.async.t_cljs$core$async28384(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28385__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28386){
var self__ = this;
var _28386__$1 = this;
return self__.meta28385;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28384.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28384.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28385","meta28385",-67056209,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28384";

cljs.core.async.t_cljs$core$async28384.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28384");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28384.
 */
cljs.core.async.__GT_t_cljs$core$async28384 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28384(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28385){
return (new cljs.core.async.t_cljs$core$async28384(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28385));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28384(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27270__auto___28504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___28504,mults,ensure_mult,p){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___28504,mults,ensure_mult,p){
return (function (state_28458){
var state_val_28459 = (state_28458[(1)]);
if((state_val_28459 === (7))){
var inst_28454 = (state_28458[(2)]);
var state_28458__$1 = state_28458;
var statearr_28460_28505 = state_28458__$1;
(statearr_28460_28505[(2)] = inst_28454);

(statearr_28460_28505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (20))){
var state_28458__$1 = state_28458;
var statearr_28461_28506 = state_28458__$1;
(statearr_28461_28506[(2)] = null);

(statearr_28461_28506[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (1))){
var state_28458__$1 = state_28458;
var statearr_28462_28507 = state_28458__$1;
(statearr_28462_28507[(2)] = null);

(statearr_28462_28507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (24))){
var inst_28437 = (state_28458[(7)]);
var inst_28446 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28437);
var state_28458__$1 = state_28458;
var statearr_28463_28508 = state_28458__$1;
(statearr_28463_28508[(2)] = inst_28446);

(statearr_28463_28508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (4))){
var inst_28389 = (state_28458[(8)]);
var inst_28389__$1 = (state_28458[(2)]);
var inst_28390 = (inst_28389__$1 == null);
var state_28458__$1 = (function (){var statearr_28464 = state_28458;
(statearr_28464[(8)] = inst_28389__$1);

return statearr_28464;
})();
if(cljs.core.truth_(inst_28390)){
var statearr_28465_28509 = state_28458__$1;
(statearr_28465_28509[(1)] = (5));

} else {
var statearr_28466_28510 = state_28458__$1;
(statearr_28466_28510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (15))){
var inst_28431 = (state_28458[(2)]);
var state_28458__$1 = state_28458;
var statearr_28467_28511 = state_28458__$1;
(statearr_28467_28511[(2)] = inst_28431);

(statearr_28467_28511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (21))){
var inst_28451 = (state_28458[(2)]);
var state_28458__$1 = (function (){var statearr_28468 = state_28458;
(statearr_28468[(9)] = inst_28451);

return statearr_28468;
})();
var statearr_28469_28512 = state_28458__$1;
(statearr_28469_28512[(2)] = null);

(statearr_28469_28512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (13))){
var inst_28413 = (state_28458[(10)]);
var inst_28415 = cljs.core.chunked_seq_QMARK_.call(null,inst_28413);
var state_28458__$1 = state_28458;
if(inst_28415){
var statearr_28470_28513 = state_28458__$1;
(statearr_28470_28513[(1)] = (16));

} else {
var statearr_28471_28514 = state_28458__$1;
(statearr_28471_28514[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (22))){
var inst_28443 = (state_28458[(2)]);
var state_28458__$1 = state_28458;
if(cljs.core.truth_(inst_28443)){
var statearr_28472_28515 = state_28458__$1;
(statearr_28472_28515[(1)] = (23));

} else {
var statearr_28473_28516 = state_28458__$1;
(statearr_28473_28516[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (6))){
var inst_28389 = (state_28458[(8)]);
var inst_28439 = (state_28458[(11)]);
var inst_28437 = (state_28458[(7)]);
var inst_28437__$1 = topic_fn.call(null,inst_28389);
var inst_28438 = cljs.core.deref.call(null,mults);
var inst_28439__$1 = cljs.core.get.call(null,inst_28438,inst_28437__$1);
var state_28458__$1 = (function (){var statearr_28474 = state_28458;
(statearr_28474[(11)] = inst_28439__$1);

(statearr_28474[(7)] = inst_28437__$1);

return statearr_28474;
})();
if(cljs.core.truth_(inst_28439__$1)){
var statearr_28475_28517 = state_28458__$1;
(statearr_28475_28517[(1)] = (19));

} else {
var statearr_28476_28518 = state_28458__$1;
(statearr_28476_28518[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (25))){
var inst_28448 = (state_28458[(2)]);
var state_28458__$1 = state_28458;
var statearr_28477_28519 = state_28458__$1;
(statearr_28477_28519[(2)] = inst_28448);

(statearr_28477_28519[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (17))){
var inst_28413 = (state_28458[(10)]);
var inst_28422 = cljs.core.first.call(null,inst_28413);
var inst_28423 = cljs.core.async.muxch_STAR_.call(null,inst_28422);
var inst_28424 = cljs.core.async.close_BANG_.call(null,inst_28423);
var inst_28425 = cljs.core.next.call(null,inst_28413);
var inst_28399 = inst_28425;
var inst_28400 = null;
var inst_28401 = (0);
var inst_28402 = (0);
var state_28458__$1 = (function (){var statearr_28478 = state_28458;
(statearr_28478[(12)] = inst_28424);

(statearr_28478[(13)] = inst_28402);

(statearr_28478[(14)] = inst_28399);

(statearr_28478[(15)] = inst_28401);

(statearr_28478[(16)] = inst_28400);

return statearr_28478;
})();
var statearr_28479_28520 = state_28458__$1;
(statearr_28479_28520[(2)] = null);

(statearr_28479_28520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (3))){
var inst_28456 = (state_28458[(2)]);
var state_28458__$1 = state_28458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28458__$1,inst_28456);
} else {
if((state_val_28459 === (12))){
var inst_28433 = (state_28458[(2)]);
var state_28458__$1 = state_28458;
var statearr_28480_28521 = state_28458__$1;
(statearr_28480_28521[(2)] = inst_28433);

(statearr_28480_28521[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (2))){
var state_28458__$1 = state_28458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28458__$1,(4),ch);
} else {
if((state_val_28459 === (23))){
var state_28458__$1 = state_28458;
var statearr_28481_28522 = state_28458__$1;
(statearr_28481_28522[(2)] = null);

(statearr_28481_28522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (19))){
var inst_28389 = (state_28458[(8)]);
var inst_28439 = (state_28458[(11)]);
var inst_28441 = cljs.core.async.muxch_STAR_.call(null,inst_28439);
var state_28458__$1 = state_28458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28458__$1,(22),inst_28441,inst_28389);
} else {
if((state_val_28459 === (11))){
var inst_28399 = (state_28458[(14)]);
var inst_28413 = (state_28458[(10)]);
var inst_28413__$1 = cljs.core.seq.call(null,inst_28399);
var state_28458__$1 = (function (){var statearr_28482 = state_28458;
(statearr_28482[(10)] = inst_28413__$1);

return statearr_28482;
})();
if(inst_28413__$1){
var statearr_28483_28523 = state_28458__$1;
(statearr_28483_28523[(1)] = (13));

} else {
var statearr_28484_28524 = state_28458__$1;
(statearr_28484_28524[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (9))){
var inst_28435 = (state_28458[(2)]);
var state_28458__$1 = state_28458;
var statearr_28485_28525 = state_28458__$1;
(statearr_28485_28525[(2)] = inst_28435);

(statearr_28485_28525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (5))){
var inst_28396 = cljs.core.deref.call(null,mults);
var inst_28397 = cljs.core.vals.call(null,inst_28396);
var inst_28398 = cljs.core.seq.call(null,inst_28397);
var inst_28399 = inst_28398;
var inst_28400 = null;
var inst_28401 = (0);
var inst_28402 = (0);
var state_28458__$1 = (function (){var statearr_28486 = state_28458;
(statearr_28486[(13)] = inst_28402);

(statearr_28486[(14)] = inst_28399);

(statearr_28486[(15)] = inst_28401);

(statearr_28486[(16)] = inst_28400);

return statearr_28486;
})();
var statearr_28487_28526 = state_28458__$1;
(statearr_28487_28526[(2)] = null);

(statearr_28487_28526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (14))){
var state_28458__$1 = state_28458;
var statearr_28491_28527 = state_28458__$1;
(statearr_28491_28527[(2)] = null);

(statearr_28491_28527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (16))){
var inst_28413 = (state_28458[(10)]);
var inst_28417 = cljs.core.chunk_first.call(null,inst_28413);
var inst_28418 = cljs.core.chunk_rest.call(null,inst_28413);
var inst_28419 = cljs.core.count.call(null,inst_28417);
var inst_28399 = inst_28418;
var inst_28400 = inst_28417;
var inst_28401 = inst_28419;
var inst_28402 = (0);
var state_28458__$1 = (function (){var statearr_28492 = state_28458;
(statearr_28492[(13)] = inst_28402);

(statearr_28492[(14)] = inst_28399);

(statearr_28492[(15)] = inst_28401);

(statearr_28492[(16)] = inst_28400);

return statearr_28492;
})();
var statearr_28493_28528 = state_28458__$1;
(statearr_28493_28528[(2)] = null);

(statearr_28493_28528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (10))){
var inst_28402 = (state_28458[(13)]);
var inst_28399 = (state_28458[(14)]);
var inst_28401 = (state_28458[(15)]);
var inst_28400 = (state_28458[(16)]);
var inst_28407 = cljs.core._nth.call(null,inst_28400,inst_28402);
var inst_28408 = cljs.core.async.muxch_STAR_.call(null,inst_28407);
var inst_28409 = cljs.core.async.close_BANG_.call(null,inst_28408);
var inst_28410 = (inst_28402 + (1));
var tmp28488 = inst_28399;
var tmp28489 = inst_28401;
var tmp28490 = inst_28400;
var inst_28399__$1 = tmp28488;
var inst_28400__$1 = tmp28490;
var inst_28401__$1 = tmp28489;
var inst_28402__$1 = inst_28410;
var state_28458__$1 = (function (){var statearr_28494 = state_28458;
(statearr_28494[(17)] = inst_28409);

(statearr_28494[(13)] = inst_28402__$1);

(statearr_28494[(14)] = inst_28399__$1);

(statearr_28494[(15)] = inst_28401__$1);

(statearr_28494[(16)] = inst_28400__$1);

return statearr_28494;
})();
var statearr_28495_28529 = state_28458__$1;
(statearr_28495_28529[(2)] = null);

(statearr_28495_28529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (18))){
var inst_28428 = (state_28458[(2)]);
var state_28458__$1 = state_28458;
var statearr_28496_28530 = state_28458__$1;
(statearr_28496_28530[(2)] = inst_28428);

(statearr_28496_28530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (8))){
var inst_28402 = (state_28458[(13)]);
var inst_28401 = (state_28458[(15)]);
var inst_28404 = (inst_28402 < inst_28401);
var inst_28405 = inst_28404;
var state_28458__$1 = state_28458;
if(cljs.core.truth_(inst_28405)){
var statearr_28497_28531 = state_28458__$1;
(statearr_28497_28531[(1)] = (10));

} else {
var statearr_28498_28532 = state_28458__$1;
(statearr_28498_28532[(1)] = (11));

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
});})(c__27270__auto___28504,mults,ensure_mult,p))
;
return ((function (switch__27179__auto__,c__27270__auto___28504,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27180__auto__ = null;
var cljs$core$async$state_machine__27180__auto____0 = (function (){
var statearr_28499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28499[(0)] = cljs$core$async$state_machine__27180__auto__);

(statearr_28499[(1)] = (1));

return statearr_28499;
});
var cljs$core$async$state_machine__27180__auto____1 = (function (state_28458){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_28458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e28500){if((e28500 instanceof Object)){
var ex__27183__auto__ = e28500;
var statearr_28501_28533 = state_28458;
(statearr_28501_28533[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28534 = state_28458;
state_28458 = G__28534;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$state_machine__27180__auto__ = function(state_28458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27180__auto____1.call(this,state_28458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27180__auto____0;
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27180__auto____1;
return cljs$core$async$state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___28504,mults,ensure_mult,p))
})();
var state__27272__auto__ = (function (){var statearr_28502 = f__27271__auto__.call(null);
(statearr_28502[(6)] = c__27270__auto___28504);

return statearr_28502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___28504,mults,ensure_mult,p))
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
var G__28536 = arguments.length;
switch (G__28536) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__28539 = arguments.length;
switch (G__28539) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__28542 = arguments.length;
switch (G__28542) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__27270__auto___28609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___28609,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___28609,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28581){
var state_val_28582 = (state_28581[(1)]);
if((state_val_28582 === (7))){
var state_28581__$1 = state_28581;
var statearr_28583_28610 = state_28581__$1;
(statearr_28583_28610[(2)] = null);

(statearr_28583_28610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (1))){
var state_28581__$1 = state_28581;
var statearr_28584_28611 = state_28581__$1;
(statearr_28584_28611[(2)] = null);

(statearr_28584_28611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (4))){
var inst_28545 = (state_28581[(7)]);
var inst_28547 = (inst_28545 < cnt);
var state_28581__$1 = state_28581;
if(cljs.core.truth_(inst_28547)){
var statearr_28585_28612 = state_28581__$1;
(statearr_28585_28612[(1)] = (6));

} else {
var statearr_28586_28613 = state_28581__$1;
(statearr_28586_28613[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (15))){
var inst_28577 = (state_28581[(2)]);
var state_28581__$1 = state_28581;
var statearr_28587_28614 = state_28581__$1;
(statearr_28587_28614[(2)] = inst_28577);

(statearr_28587_28614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (13))){
var inst_28570 = cljs.core.async.close_BANG_.call(null,out);
var state_28581__$1 = state_28581;
var statearr_28588_28615 = state_28581__$1;
(statearr_28588_28615[(2)] = inst_28570);

(statearr_28588_28615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (6))){
var state_28581__$1 = state_28581;
var statearr_28589_28616 = state_28581__$1;
(statearr_28589_28616[(2)] = null);

(statearr_28589_28616[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (3))){
var inst_28579 = (state_28581[(2)]);
var state_28581__$1 = state_28581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28581__$1,inst_28579);
} else {
if((state_val_28582 === (12))){
var inst_28567 = (state_28581[(8)]);
var inst_28567__$1 = (state_28581[(2)]);
var inst_28568 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28567__$1);
var state_28581__$1 = (function (){var statearr_28590 = state_28581;
(statearr_28590[(8)] = inst_28567__$1);

return statearr_28590;
})();
if(cljs.core.truth_(inst_28568)){
var statearr_28591_28617 = state_28581__$1;
(statearr_28591_28617[(1)] = (13));

} else {
var statearr_28592_28618 = state_28581__$1;
(statearr_28592_28618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (2))){
var inst_28544 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28545 = (0);
var state_28581__$1 = (function (){var statearr_28593 = state_28581;
(statearr_28593[(9)] = inst_28544);

(statearr_28593[(7)] = inst_28545);

return statearr_28593;
})();
var statearr_28594_28619 = state_28581__$1;
(statearr_28594_28619[(2)] = null);

(statearr_28594_28619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (11))){
var inst_28545 = (state_28581[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28581,(10),Object,null,(9));
var inst_28554 = chs__$1.call(null,inst_28545);
var inst_28555 = done.call(null,inst_28545);
var inst_28556 = cljs.core.async.take_BANG_.call(null,inst_28554,inst_28555);
var state_28581__$1 = state_28581;
var statearr_28595_28620 = state_28581__$1;
(statearr_28595_28620[(2)] = inst_28556);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28581__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (9))){
var inst_28545 = (state_28581[(7)]);
var inst_28558 = (state_28581[(2)]);
var inst_28559 = (inst_28545 + (1));
var inst_28545__$1 = inst_28559;
var state_28581__$1 = (function (){var statearr_28596 = state_28581;
(statearr_28596[(7)] = inst_28545__$1);

(statearr_28596[(10)] = inst_28558);

return statearr_28596;
})();
var statearr_28597_28621 = state_28581__$1;
(statearr_28597_28621[(2)] = null);

(statearr_28597_28621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (5))){
var inst_28565 = (state_28581[(2)]);
var state_28581__$1 = (function (){var statearr_28598 = state_28581;
(statearr_28598[(11)] = inst_28565);

return statearr_28598;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28581__$1,(12),dchan);
} else {
if((state_val_28582 === (14))){
var inst_28567 = (state_28581[(8)]);
var inst_28572 = cljs.core.apply.call(null,f,inst_28567);
var state_28581__$1 = state_28581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28581__$1,(16),out,inst_28572);
} else {
if((state_val_28582 === (16))){
var inst_28574 = (state_28581[(2)]);
var state_28581__$1 = (function (){var statearr_28599 = state_28581;
(statearr_28599[(12)] = inst_28574);

return statearr_28599;
})();
var statearr_28600_28622 = state_28581__$1;
(statearr_28600_28622[(2)] = null);

(statearr_28600_28622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (10))){
var inst_28549 = (state_28581[(2)]);
var inst_28550 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28581__$1 = (function (){var statearr_28601 = state_28581;
(statearr_28601[(13)] = inst_28549);

return statearr_28601;
})();
var statearr_28602_28623 = state_28581__$1;
(statearr_28602_28623[(2)] = inst_28550);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28581__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28582 === (8))){
var inst_28563 = (state_28581[(2)]);
var state_28581__$1 = state_28581;
var statearr_28603_28624 = state_28581__$1;
(statearr_28603_28624[(2)] = inst_28563);

(statearr_28603_28624[(1)] = (5));


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
});})(c__27270__auto___28609,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27179__auto__,c__27270__auto___28609,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27180__auto__ = null;
var cljs$core$async$state_machine__27180__auto____0 = (function (){
var statearr_28604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28604[(0)] = cljs$core$async$state_machine__27180__auto__);

(statearr_28604[(1)] = (1));

return statearr_28604;
});
var cljs$core$async$state_machine__27180__auto____1 = (function (state_28581){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_28581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e28605){if((e28605 instanceof Object)){
var ex__27183__auto__ = e28605;
var statearr_28606_28625 = state_28581;
(statearr_28606_28625[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28626 = state_28581;
state_28581 = G__28626;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$state_machine__27180__auto__ = function(state_28581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27180__auto____1.call(this,state_28581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27180__auto____0;
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27180__auto____1;
return cljs$core$async$state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___28609,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27272__auto__ = (function (){var statearr_28607 = f__27271__auto__.call(null);
(statearr_28607[(6)] = c__27270__auto___28609);

return statearr_28607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___28609,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28629 = arguments.length;
switch (G__28629) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27270__auto___28683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___28683,out){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___28683,out){
return (function (state_28661){
var state_val_28662 = (state_28661[(1)]);
if((state_val_28662 === (7))){
var inst_28640 = (state_28661[(7)]);
var inst_28641 = (state_28661[(8)]);
var inst_28640__$1 = (state_28661[(2)]);
var inst_28641__$1 = cljs.core.nth.call(null,inst_28640__$1,(0),null);
var inst_28642 = cljs.core.nth.call(null,inst_28640__$1,(1),null);
var inst_28643 = (inst_28641__$1 == null);
var state_28661__$1 = (function (){var statearr_28663 = state_28661;
(statearr_28663[(7)] = inst_28640__$1);

(statearr_28663[(9)] = inst_28642);

(statearr_28663[(8)] = inst_28641__$1);

return statearr_28663;
})();
if(cljs.core.truth_(inst_28643)){
var statearr_28664_28684 = state_28661__$1;
(statearr_28664_28684[(1)] = (8));

} else {
var statearr_28665_28685 = state_28661__$1;
(statearr_28665_28685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28662 === (1))){
var inst_28630 = cljs.core.vec.call(null,chs);
var inst_28631 = inst_28630;
var state_28661__$1 = (function (){var statearr_28666 = state_28661;
(statearr_28666[(10)] = inst_28631);

return statearr_28666;
})();
var statearr_28667_28686 = state_28661__$1;
(statearr_28667_28686[(2)] = null);

(statearr_28667_28686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28662 === (4))){
var inst_28631 = (state_28661[(10)]);
var state_28661__$1 = state_28661;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28661__$1,(7),inst_28631);
} else {
if((state_val_28662 === (6))){
var inst_28657 = (state_28661[(2)]);
var state_28661__$1 = state_28661;
var statearr_28668_28687 = state_28661__$1;
(statearr_28668_28687[(2)] = inst_28657);

(statearr_28668_28687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28662 === (3))){
var inst_28659 = (state_28661[(2)]);
var state_28661__$1 = state_28661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28661__$1,inst_28659);
} else {
if((state_val_28662 === (2))){
var inst_28631 = (state_28661[(10)]);
var inst_28633 = cljs.core.count.call(null,inst_28631);
var inst_28634 = (inst_28633 > (0));
var state_28661__$1 = state_28661;
if(cljs.core.truth_(inst_28634)){
var statearr_28670_28688 = state_28661__$1;
(statearr_28670_28688[(1)] = (4));

} else {
var statearr_28671_28689 = state_28661__$1;
(statearr_28671_28689[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28662 === (11))){
var inst_28631 = (state_28661[(10)]);
var inst_28650 = (state_28661[(2)]);
var tmp28669 = inst_28631;
var inst_28631__$1 = tmp28669;
var state_28661__$1 = (function (){var statearr_28672 = state_28661;
(statearr_28672[(10)] = inst_28631__$1);

(statearr_28672[(11)] = inst_28650);

return statearr_28672;
})();
var statearr_28673_28690 = state_28661__$1;
(statearr_28673_28690[(2)] = null);

(statearr_28673_28690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28662 === (9))){
var inst_28641 = (state_28661[(8)]);
var state_28661__$1 = state_28661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28661__$1,(11),out,inst_28641);
} else {
if((state_val_28662 === (5))){
var inst_28655 = cljs.core.async.close_BANG_.call(null,out);
var state_28661__$1 = state_28661;
var statearr_28674_28691 = state_28661__$1;
(statearr_28674_28691[(2)] = inst_28655);

(statearr_28674_28691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28662 === (10))){
var inst_28653 = (state_28661[(2)]);
var state_28661__$1 = state_28661;
var statearr_28675_28692 = state_28661__$1;
(statearr_28675_28692[(2)] = inst_28653);

(statearr_28675_28692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28662 === (8))){
var inst_28631 = (state_28661[(10)]);
var inst_28640 = (state_28661[(7)]);
var inst_28642 = (state_28661[(9)]);
var inst_28641 = (state_28661[(8)]);
var inst_28645 = (function (){var cs = inst_28631;
var vec__28636 = inst_28640;
var v = inst_28641;
var c = inst_28642;
return ((function (cs,vec__28636,v,c,inst_28631,inst_28640,inst_28642,inst_28641,state_val_28662,c__27270__auto___28683,out){
return (function (p1__28627_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28627_SHARP_);
});
;})(cs,vec__28636,v,c,inst_28631,inst_28640,inst_28642,inst_28641,state_val_28662,c__27270__auto___28683,out))
})();
var inst_28646 = cljs.core.filterv.call(null,inst_28645,inst_28631);
var inst_28631__$1 = inst_28646;
var state_28661__$1 = (function (){var statearr_28676 = state_28661;
(statearr_28676[(10)] = inst_28631__$1);

return statearr_28676;
})();
var statearr_28677_28693 = state_28661__$1;
(statearr_28677_28693[(2)] = null);

(statearr_28677_28693[(1)] = (2));


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
});})(c__27270__auto___28683,out))
;
return ((function (switch__27179__auto__,c__27270__auto___28683,out){
return (function() {
var cljs$core$async$state_machine__27180__auto__ = null;
var cljs$core$async$state_machine__27180__auto____0 = (function (){
var statearr_28678 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28678[(0)] = cljs$core$async$state_machine__27180__auto__);

(statearr_28678[(1)] = (1));

return statearr_28678;
});
var cljs$core$async$state_machine__27180__auto____1 = (function (state_28661){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_28661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e28679){if((e28679 instanceof Object)){
var ex__27183__auto__ = e28679;
var statearr_28680_28694 = state_28661;
(statearr_28680_28694[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28695 = state_28661;
state_28661 = G__28695;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$state_machine__27180__auto__ = function(state_28661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27180__auto____1.call(this,state_28661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27180__auto____0;
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27180__auto____1;
return cljs$core$async$state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___28683,out))
})();
var state__27272__auto__ = (function (){var statearr_28681 = f__27271__auto__.call(null);
(statearr_28681[(6)] = c__27270__auto___28683);

return statearr_28681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___28683,out))
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
var G__28697 = arguments.length;
switch (G__28697) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27270__auto___28742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___28742,out){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___28742,out){
return (function (state_28721){
var state_val_28722 = (state_28721[(1)]);
if((state_val_28722 === (7))){
var inst_28703 = (state_28721[(7)]);
var inst_28703__$1 = (state_28721[(2)]);
var inst_28704 = (inst_28703__$1 == null);
var inst_28705 = cljs.core.not.call(null,inst_28704);
var state_28721__$1 = (function (){var statearr_28723 = state_28721;
(statearr_28723[(7)] = inst_28703__$1);

return statearr_28723;
})();
if(inst_28705){
var statearr_28724_28743 = state_28721__$1;
(statearr_28724_28743[(1)] = (8));

} else {
var statearr_28725_28744 = state_28721__$1;
(statearr_28725_28744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (1))){
var inst_28698 = (0);
var state_28721__$1 = (function (){var statearr_28726 = state_28721;
(statearr_28726[(8)] = inst_28698);

return statearr_28726;
})();
var statearr_28727_28745 = state_28721__$1;
(statearr_28727_28745[(2)] = null);

(statearr_28727_28745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (4))){
var state_28721__$1 = state_28721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28721__$1,(7),ch);
} else {
if((state_val_28722 === (6))){
var inst_28716 = (state_28721[(2)]);
var state_28721__$1 = state_28721;
var statearr_28728_28746 = state_28721__$1;
(statearr_28728_28746[(2)] = inst_28716);

(statearr_28728_28746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (3))){
var inst_28718 = (state_28721[(2)]);
var inst_28719 = cljs.core.async.close_BANG_.call(null,out);
var state_28721__$1 = (function (){var statearr_28729 = state_28721;
(statearr_28729[(9)] = inst_28718);

return statearr_28729;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28721__$1,inst_28719);
} else {
if((state_val_28722 === (2))){
var inst_28698 = (state_28721[(8)]);
var inst_28700 = (inst_28698 < n);
var state_28721__$1 = state_28721;
if(cljs.core.truth_(inst_28700)){
var statearr_28730_28747 = state_28721__$1;
(statearr_28730_28747[(1)] = (4));

} else {
var statearr_28731_28748 = state_28721__$1;
(statearr_28731_28748[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (11))){
var inst_28698 = (state_28721[(8)]);
var inst_28708 = (state_28721[(2)]);
var inst_28709 = (inst_28698 + (1));
var inst_28698__$1 = inst_28709;
var state_28721__$1 = (function (){var statearr_28732 = state_28721;
(statearr_28732[(8)] = inst_28698__$1);

(statearr_28732[(10)] = inst_28708);

return statearr_28732;
})();
var statearr_28733_28749 = state_28721__$1;
(statearr_28733_28749[(2)] = null);

(statearr_28733_28749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (9))){
var state_28721__$1 = state_28721;
var statearr_28734_28750 = state_28721__$1;
(statearr_28734_28750[(2)] = null);

(statearr_28734_28750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (5))){
var state_28721__$1 = state_28721;
var statearr_28735_28751 = state_28721__$1;
(statearr_28735_28751[(2)] = null);

(statearr_28735_28751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (10))){
var inst_28713 = (state_28721[(2)]);
var state_28721__$1 = state_28721;
var statearr_28736_28752 = state_28721__$1;
(statearr_28736_28752[(2)] = inst_28713);

(statearr_28736_28752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (8))){
var inst_28703 = (state_28721[(7)]);
var state_28721__$1 = state_28721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28721__$1,(11),out,inst_28703);
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
});})(c__27270__auto___28742,out))
;
return ((function (switch__27179__auto__,c__27270__auto___28742,out){
return (function() {
var cljs$core$async$state_machine__27180__auto__ = null;
var cljs$core$async$state_machine__27180__auto____0 = (function (){
var statearr_28737 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28737[(0)] = cljs$core$async$state_machine__27180__auto__);

(statearr_28737[(1)] = (1));

return statearr_28737;
});
var cljs$core$async$state_machine__27180__auto____1 = (function (state_28721){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_28721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e28738){if((e28738 instanceof Object)){
var ex__27183__auto__ = e28738;
var statearr_28739_28753 = state_28721;
(statearr_28739_28753[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28754 = state_28721;
state_28721 = G__28754;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$state_machine__27180__auto__ = function(state_28721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27180__auto____1.call(this,state_28721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27180__auto____0;
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27180__auto____1;
return cljs$core$async$state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___28742,out))
})();
var state__27272__auto__ = (function (){var statearr_28740 = f__27271__auto__.call(null);
(statearr_28740[(6)] = c__27270__auto___28742);

return statearr_28740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___28742,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28756 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28756 = (function (f,ch,meta28757){
this.f = f;
this.ch = ch;
this.meta28757 = meta28757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28758,meta28757__$1){
var self__ = this;
var _28758__$1 = this;
return (new cljs.core.async.t_cljs$core$async28756(self__.f,self__.ch,meta28757__$1));
});

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28758){
var self__ = this;
var _28758__$1 = this;
return self__.meta28757;
});

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28759 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28759 = (function (f,ch,meta28757,_,fn1,meta28760){
this.f = f;
this.ch = ch;
this.meta28757 = meta28757;
this._ = _;
this.fn1 = fn1;
this.meta28760 = meta28760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28761,meta28760__$1){
var self__ = this;
var _28761__$1 = this;
return (new cljs.core.async.t_cljs$core$async28759(self__.f,self__.ch,self__.meta28757,self__._,self__.fn1,meta28760__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28761){
var self__ = this;
var _28761__$1 = this;
return self__.meta28760;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28759.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28759.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28755_SHARP_){
return f1.call(null,(((p1__28755_SHARP_ == null))?null:self__.f.call(null,p1__28755_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28759.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28757","meta28757",487521364,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28756","cljs.core.async/t_cljs$core$async28756",-1702256296,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28760","meta28760",1108069008,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28759";

cljs.core.async.t_cljs$core$async28759.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28759");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28759.
 */
cljs.core.async.__GT_t_cljs$core$async28759 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28759(f__$1,ch__$1,meta28757__$1,___$2,fn1__$1,meta28760){
return (new cljs.core.async.t_cljs$core$async28759(f__$1,ch__$1,meta28757__$1,___$2,fn1__$1,meta28760));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28759(self__.f,self__.ch,self__.meta28757,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28757","meta28757",487521364,null)], null);
});

cljs.core.async.t_cljs$core$async28756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28756";

cljs.core.async.t_cljs$core$async28756.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28756");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28756.
 */
cljs.core.async.__GT_t_cljs$core$async28756 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28756(f__$1,ch__$1,meta28757){
return (new cljs.core.async.t_cljs$core$async28756(f__$1,ch__$1,meta28757));
});

}

return (new cljs.core.async.t_cljs$core$async28756(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28762 = (function (f,ch,meta28763){
this.f = f;
this.ch = ch;
this.meta28763 = meta28763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28764,meta28763__$1){
var self__ = this;
var _28764__$1 = this;
return (new cljs.core.async.t_cljs$core$async28762(self__.f,self__.ch,meta28763__$1));
});

cljs.core.async.t_cljs$core$async28762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28764){
var self__ = this;
var _28764__$1 = this;
return self__.meta28763;
});

cljs.core.async.t_cljs$core$async28762.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28762.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28762.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28762.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28762.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28762.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28763","meta28763",562069642,null)], null);
});

cljs.core.async.t_cljs$core$async28762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28762";

cljs.core.async.t_cljs$core$async28762.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28762");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28762.
 */
cljs.core.async.__GT_t_cljs$core$async28762 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28762(f__$1,ch__$1,meta28763){
return (new cljs.core.async.t_cljs$core$async28762(f__$1,ch__$1,meta28763));
});

}

return (new cljs.core.async.t_cljs$core$async28762(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28765 = (function (p,ch,meta28766){
this.p = p;
this.ch = ch;
this.meta28766 = meta28766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28767,meta28766__$1){
var self__ = this;
var _28767__$1 = this;
return (new cljs.core.async.t_cljs$core$async28765(self__.p,self__.ch,meta28766__$1));
});

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28767){
var self__ = this;
var _28767__$1 = this;
return self__.meta28766;
});

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28766","meta28766",-1626433090,null)], null);
});

cljs.core.async.t_cljs$core$async28765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28765";

cljs.core.async.t_cljs$core$async28765.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28765");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28765.
 */
cljs.core.async.__GT_t_cljs$core$async28765 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28765(p__$1,ch__$1,meta28766){
return (new cljs.core.async.t_cljs$core$async28765(p__$1,ch__$1,meta28766));
});

}

return (new cljs.core.async.t_cljs$core$async28765(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28769 = arguments.length;
switch (G__28769) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27270__auto___28809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___28809,out){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___28809,out){
return (function (state_28790){
var state_val_28791 = (state_28790[(1)]);
if((state_val_28791 === (7))){
var inst_28786 = (state_28790[(2)]);
var state_28790__$1 = state_28790;
var statearr_28792_28810 = state_28790__$1;
(statearr_28792_28810[(2)] = inst_28786);

(statearr_28792_28810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (1))){
var state_28790__$1 = state_28790;
var statearr_28793_28811 = state_28790__$1;
(statearr_28793_28811[(2)] = null);

(statearr_28793_28811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (4))){
var inst_28772 = (state_28790[(7)]);
var inst_28772__$1 = (state_28790[(2)]);
var inst_28773 = (inst_28772__$1 == null);
var state_28790__$1 = (function (){var statearr_28794 = state_28790;
(statearr_28794[(7)] = inst_28772__$1);

return statearr_28794;
})();
if(cljs.core.truth_(inst_28773)){
var statearr_28795_28812 = state_28790__$1;
(statearr_28795_28812[(1)] = (5));

} else {
var statearr_28796_28813 = state_28790__$1;
(statearr_28796_28813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (6))){
var inst_28772 = (state_28790[(7)]);
var inst_28777 = p.call(null,inst_28772);
var state_28790__$1 = state_28790;
if(cljs.core.truth_(inst_28777)){
var statearr_28797_28814 = state_28790__$1;
(statearr_28797_28814[(1)] = (8));

} else {
var statearr_28798_28815 = state_28790__$1;
(statearr_28798_28815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (3))){
var inst_28788 = (state_28790[(2)]);
var state_28790__$1 = state_28790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28790__$1,inst_28788);
} else {
if((state_val_28791 === (2))){
var state_28790__$1 = state_28790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28790__$1,(4),ch);
} else {
if((state_val_28791 === (11))){
var inst_28780 = (state_28790[(2)]);
var state_28790__$1 = state_28790;
var statearr_28799_28816 = state_28790__$1;
(statearr_28799_28816[(2)] = inst_28780);

(statearr_28799_28816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (9))){
var state_28790__$1 = state_28790;
var statearr_28800_28817 = state_28790__$1;
(statearr_28800_28817[(2)] = null);

(statearr_28800_28817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (5))){
var inst_28775 = cljs.core.async.close_BANG_.call(null,out);
var state_28790__$1 = state_28790;
var statearr_28801_28818 = state_28790__$1;
(statearr_28801_28818[(2)] = inst_28775);

(statearr_28801_28818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (10))){
var inst_28783 = (state_28790[(2)]);
var state_28790__$1 = (function (){var statearr_28802 = state_28790;
(statearr_28802[(8)] = inst_28783);

return statearr_28802;
})();
var statearr_28803_28819 = state_28790__$1;
(statearr_28803_28819[(2)] = null);

(statearr_28803_28819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28791 === (8))){
var inst_28772 = (state_28790[(7)]);
var state_28790__$1 = state_28790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28790__$1,(11),out,inst_28772);
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
});})(c__27270__auto___28809,out))
;
return ((function (switch__27179__auto__,c__27270__auto___28809,out){
return (function() {
var cljs$core$async$state_machine__27180__auto__ = null;
var cljs$core$async$state_machine__27180__auto____0 = (function (){
var statearr_28804 = [null,null,null,null,null,null,null,null,null];
(statearr_28804[(0)] = cljs$core$async$state_machine__27180__auto__);

(statearr_28804[(1)] = (1));

return statearr_28804;
});
var cljs$core$async$state_machine__27180__auto____1 = (function (state_28790){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_28790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e28805){if((e28805 instanceof Object)){
var ex__27183__auto__ = e28805;
var statearr_28806_28820 = state_28790;
(statearr_28806_28820[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28821 = state_28790;
state_28790 = G__28821;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$state_machine__27180__auto__ = function(state_28790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27180__auto____1.call(this,state_28790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27180__auto____0;
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27180__auto____1;
return cljs$core$async$state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___28809,out))
})();
var state__27272__auto__ = (function (){var statearr_28807 = f__27271__auto__.call(null);
(statearr_28807[(6)] = c__27270__auto___28809);

return statearr_28807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___28809,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28823 = arguments.length;
switch (G__28823) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__27270__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto__){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto__){
return (function (state_28886){
var state_val_28887 = (state_28886[(1)]);
if((state_val_28887 === (7))){
var inst_28882 = (state_28886[(2)]);
var state_28886__$1 = state_28886;
var statearr_28888_28926 = state_28886__$1;
(statearr_28888_28926[(2)] = inst_28882);

(statearr_28888_28926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (20))){
var inst_28852 = (state_28886[(7)]);
var inst_28863 = (state_28886[(2)]);
var inst_28864 = cljs.core.next.call(null,inst_28852);
var inst_28838 = inst_28864;
var inst_28839 = null;
var inst_28840 = (0);
var inst_28841 = (0);
var state_28886__$1 = (function (){var statearr_28889 = state_28886;
(statearr_28889[(8)] = inst_28863);

(statearr_28889[(9)] = inst_28839);

(statearr_28889[(10)] = inst_28838);

(statearr_28889[(11)] = inst_28840);

(statearr_28889[(12)] = inst_28841);

return statearr_28889;
})();
var statearr_28890_28927 = state_28886__$1;
(statearr_28890_28927[(2)] = null);

(statearr_28890_28927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (1))){
var state_28886__$1 = state_28886;
var statearr_28891_28928 = state_28886__$1;
(statearr_28891_28928[(2)] = null);

(statearr_28891_28928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (4))){
var inst_28827 = (state_28886[(13)]);
var inst_28827__$1 = (state_28886[(2)]);
var inst_28828 = (inst_28827__$1 == null);
var state_28886__$1 = (function (){var statearr_28892 = state_28886;
(statearr_28892[(13)] = inst_28827__$1);

return statearr_28892;
})();
if(cljs.core.truth_(inst_28828)){
var statearr_28893_28929 = state_28886__$1;
(statearr_28893_28929[(1)] = (5));

} else {
var statearr_28894_28930 = state_28886__$1;
(statearr_28894_28930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (15))){
var state_28886__$1 = state_28886;
var statearr_28898_28931 = state_28886__$1;
(statearr_28898_28931[(2)] = null);

(statearr_28898_28931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (21))){
var state_28886__$1 = state_28886;
var statearr_28899_28932 = state_28886__$1;
(statearr_28899_28932[(2)] = null);

(statearr_28899_28932[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (13))){
var inst_28839 = (state_28886[(9)]);
var inst_28838 = (state_28886[(10)]);
var inst_28840 = (state_28886[(11)]);
var inst_28841 = (state_28886[(12)]);
var inst_28848 = (state_28886[(2)]);
var inst_28849 = (inst_28841 + (1));
var tmp28895 = inst_28839;
var tmp28896 = inst_28838;
var tmp28897 = inst_28840;
var inst_28838__$1 = tmp28896;
var inst_28839__$1 = tmp28895;
var inst_28840__$1 = tmp28897;
var inst_28841__$1 = inst_28849;
var state_28886__$1 = (function (){var statearr_28900 = state_28886;
(statearr_28900[(9)] = inst_28839__$1);

(statearr_28900[(14)] = inst_28848);

(statearr_28900[(10)] = inst_28838__$1);

(statearr_28900[(11)] = inst_28840__$1);

(statearr_28900[(12)] = inst_28841__$1);

return statearr_28900;
})();
var statearr_28901_28933 = state_28886__$1;
(statearr_28901_28933[(2)] = null);

(statearr_28901_28933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (22))){
var state_28886__$1 = state_28886;
var statearr_28902_28934 = state_28886__$1;
(statearr_28902_28934[(2)] = null);

(statearr_28902_28934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (6))){
var inst_28827 = (state_28886[(13)]);
var inst_28836 = f.call(null,inst_28827);
var inst_28837 = cljs.core.seq.call(null,inst_28836);
var inst_28838 = inst_28837;
var inst_28839 = null;
var inst_28840 = (0);
var inst_28841 = (0);
var state_28886__$1 = (function (){var statearr_28903 = state_28886;
(statearr_28903[(9)] = inst_28839);

(statearr_28903[(10)] = inst_28838);

(statearr_28903[(11)] = inst_28840);

(statearr_28903[(12)] = inst_28841);

return statearr_28903;
})();
var statearr_28904_28935 = state_28886__$1;
(statearr_28904_28935[(2)] = null);

(statearr_28904_28935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (17))){
var inst_28852 = (state_28886[(7)]);
var inst_28856 = cljs.core.chunk_first.call(null,inst_28852);
var inst_28857 = cljs.core.chunk_rest.call(null,inst_28852);
var inst_28858 = cljs.core.count.call(null,inst_28856);
var inst_28838 = inst_28857;
var inst_28839 = inst_28856;
var inst_28840 = inst_28858;
var inst_28841 = (0);
var state_28886__$1 = (function (){var statearr_28905 = state_28886;
(statearr_28905[(9)] = inst_28839);

(statearr_28905[(10)] = inst_28838);

(statearr_28905[(11)] = inst_28840);

(statearr_28905[(12)] = inst_28841);

return statearr_28905;
})();
var statearr_28906_28936 = state_28886__$1;
(statearr_28906_28936[(2)] = null);

(statearr_28906_28936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (3))){
var inst_28884 = (state_28886[(2)]);
var state_28886__$1 = state_28886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28886__$1,inst_28884);
} else {
if((state_val_28887 === (12))){
var inst_28872 = (state_28886[(2)]);
var state_28886__$1 = state_28886;
var statearr_28907_28937 = state_28886__$1;
(statearr_28907_28937[(2)] = inst_28872);

(statearr_28907_28937[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (2))){
var state_28886__$1 = state_28886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28886__$1,(4),in$);
} else {
if((state_val_28887 === (23))){
var inst_28880 = (state_28886[(2)]);
var state_28886__$1 = state_28886;
var statearr_28908_28938 = state_28886__$1;
(statearr_28908_28938[(2)] = inst_28880);

(statearr_28908_28938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (19))){
var inst_28867 = (state_28886[(2)]);
var state_28886__$1 = state_28886;
var statearr_28909_28939 = state_28886__$1;
(statearr_28909_28939[(2)] = inst_28867);

(statearr_28909_28939[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (11))){
var inst_28852 = (state_28886[(7)]);
var inst_28838 = (state_28886[(10)]);
var inst_28852__$1 = cljs.core.seq.call(null,inst_28838);
var state_28886__$1 = (function (){var statearr_28910 = state_28886;
(statearr_28910[(7)] = inst_28852__$1);

return statearr_28910;
})();
if(inst_28852__$1){
var statearr_28911_28940 = state_28886__$1;
(statearr_28911_28940[(1)] = (14));

} else {
var statearr_28912_28941 = state_28886__$1;
(statearr_28912_28941[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (9))){
var inst_28874 = (state_28886[(2)]);
var inst_28875 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28886__$1 = (function (){var statearr_28913 = state_28886;
(statearr_28913[(15)] = inst_28874);

return statearr_28913;
})();
if(cljs.core.truth_(inst_28875)){
var statearr_28914_28942 = state_28886__$1;
(statearr_28914_28942[(1)] = (21));

} else {
var statearr_28915_28943 = state_28886__$1;
(statearr_28915_28943[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (5))){
var inst_28830 = cljs.core.async.close_BANG_.call(null,out);
var state_28886__$1 = state_28886;
var statearr_28916_28944 = state_28886__$1;
(statearr_28916_28944[(2)] = inst_28830);

(statearr_28916_28944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (14))){
var inst_28852 = (state_28886[(7)]);
var inst_28854 = cljs.core.chunked_seq_QMARK_.call(null,inst_28852);
var state_28886__$1 = state_28886;
if(inst_28854){
var statearr_28917_28945 = state_28886__$1;
(statearr_28917_28945[(1)] = (17));

} else {
var statearr_28918_28946 = state_28886__$1;
(statearr_28918_28946[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (16))){
var inst_28870 = (state_28886[(2)]);
var state_28886__$1 = state_28886;
var statearr_28919_28947 = state_28886__$1;
(statearr_28919_28947[(2)] = inst_28870);

(statearr_28919_28947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28887 === (10))){
var inst_28839 = (state_28886[(9)]);
var inst_28841 = (state_28886[(12)]);
var inst_28846 = cljs.core._nth.call(null,inst_28839,inst_28841);
var state_28886__$1 = state_28886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28886__$1,(13),out,inst_28846);
} else {
if((state_val_28887 === (18))){
var inst_28852 = (state_28886[(7)]);
var inst_28861 = cljs.core.first.call(null,inst_28852);
var state_28886__$1 = state_28886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28886__$1,(20),out,inst_28861);
} else {
if((state_val_28887 === (8))){
var inst_28840 = (state_28886[(11)]);
var inst_28841 = (state_28886[(12)]);
var inst_28843 = (inst_28841 < inst_28840);
var inst_28844 = inst_28843;
var state_28886__$1 = state_28886;
if(cljs.core.truth_(inst_28844)){
var statearr_28920_28948 = state_28886__$1;
(statearr_28920_28948[(1)] = (10));

} else {
var statearr_28921_28949 = state_28886__$1;
(statearr_28921_28949[(1)] = (11));

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
});})(c__27270__auto__))
;
return ((function (switch__27179__auto__,c__27270__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27180__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27180__auto____0 = (function (){
var statearr_28922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28922[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27180__auto__);

(statearr_28922[(1)] = (1));

return statearr_28922;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27180__auto____1 = (function (state_28886){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_28886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e28923){if((e28923 instanceof Object)){
var ex__27183__auto__ = e28923;
var statearr_28924_28950 = state_28886;
(statearr_28924_28950[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28951 = state_28886;
state_28886 = G__28951;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27180__auto__ = function(state_28886){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27180__auto____1.call(this,state_28886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27180__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27180__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto__))
})();
var state__27272__auto__ = (function (){var statearr_28925 = f__27271__auto__.call(null);
(statearr_28925[(6)] = c__27270__auto__);

return statearr_28925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto__))
);

return c__27270__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28953 = arguments.length;
switch (G__28953) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__28956 = arguments.length;
switch (G__28956) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__28959 = arguments.length;
switch (G__28959) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27270__auto___29006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___29006,out){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___29006,out){
return (function (state_28983){
var state_val_28984 = (state_28983[(1)]);
if((state_val_28984 === (7))){
var inst_28978 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
var statearr_28985_29007 = state_28983__$1;
(statearr_28985_29007[(2)] = inst_28978);

(statearr_28985_29007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (1))){
var inst_28960 = null;
var state_28983__$1 = (function (){var statearr_28986 = state_28983;
(statearr_28986[(7)] = inst_28960);

return statearr_28986;
})();
var statearr_28987_29008 = state_28983__$1;
(statearr_28987_29008[(2)] = null);

(statearr_28987_29008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (4))){
var inst_28963 = (state_28983[(8)]);
var inst_28963__$1 = (state_28983[(2)]);
var inst_28964 = (inst_28963__$1 == null);
var inst_28965 = cljs.core.not.call(null,inst_28964);
var state_28983__$1 = (function (){var statearr_28988 = state_28983;
(statearr_28988[(8)] = inst_28963__$1);

return statearr_28988;
})();
if(inst_28965){
var statearr_28989_29009 = state_28983__$1;
(statearr_28989_29009[(1)] = (5));

} else {
var statearr_28990_29010 = state_28983__$1;
(statearr_28990_29010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (6))){
var state_28983__$1 = state_28983;
var statearr_28991_29011 = state_28983__$1;
(statearr_28991_29011[(2)] = null);

(statearr_28991_29011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (3))){
var inst_28980 = (state_28983[(2)]);
var inst_28981 = cljs.core.async.close_BANG_.call(null,out);
var state_28983__$1 = (function (){var statearr_28992 = state_28983;
(statearr_28992[(9)] = inst_28980);

return statearr_28992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28983__$1,inst_28981);
} else {
if((state_val_28984 === (2))){
var state_28983__$1 = state_28983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28983__$1,(4),ch);
} else {
if((state_val_28984 === (11))){
var inst_28963 = (state_28983[(8)]);
var inst_28972 = (state_28983[(2)]);
var inst_28960 = inst_28963;
var state_28983__$1 = (function (){var statearr_28993 = state_28983;
(statearr_28993[(7)] = inst_28960);

(statearr_28993[(10)] = inst_28972);

return statearr_28993;
})();
var statearr_28994_29012 = state_28983__$1;
(statearr_28994_29012[(2)] = null);

(statearr_28994_29012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (9))){
var inst_28963 = (state_28983[(8)]);
var state_28983__$1 = state_28983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28983__$1,(11),out,inst_28963);
} else {
if((state_val_28984 === (5))){
var inst_28963 = (state_28983[(8)]);
var inst_28960 = (state_28983[(7)]);
var inst_28967 = cljs.core._EQ_.call(null,inst_28963,inst_28960);
var state_28983__$1 = state_28983;
if(inst_28967){
var statearr_28996_29013 = state_28983__$1;
(statearr_28996_29013[(1)] = (8));

} else {
var statearr_28997_29014 = state_28983__$1;
(statearr_28997_29014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (10))){
var inst_28975 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
var statearr_28998_29015 = state_28983__$1;
(statearr_28998_29015[(2)] = inst_28975);

(statearr_28998_29015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (8))){
var inst_28960 = (state_28983[(7)]);
var tmp28995 = inst_28960;
var inst_28960__$1 = tmp28995;
var state_28983__$1 = (function (){var statearr_28999 = state_28983;
(statearr_28999[(7)] = inst_28960__$1);

return statearr_28999;
})();
var statearr_29000_29016 = state_28983__$1;
(statearr_29000_29016[(2)] = null);

(statearr_29000_29016[(1)] = (2));


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
});})(c__27270__auto___29006,out))
;
return ((function (switch__27179__auto__,c__27270__auto___29006,out){
return (function() {
var cljs$core$async$state_machine__27180__auto__ = null;
var cljs$core$async$state_machine__27180__auto____0 = (function (){
var statearr_29001 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29001[(0)] = cljs$core$async$state_machine__27180__auto__);

(statearr_29001[(1)] = (1));

return statearr_29001;
});
var cljs$core$async$state_machine__27180__auto____1 = (function (state_28983){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_28983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e29002){if((e29002 instanceof Object)){
var ex__27183__auto__ = e29002;
var statearr_29003_29017 = state_28983;
(statearr_29003_29017[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29018 = state_28983;
state_28983 = G__29018;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$state_machine__27180__auto__ = function(state_28983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27180__auto____1.call(this,state_28983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27180__auto____0;
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27180__auto____1;
return cljs$core$async$state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___29006,out))
})();
var state__27272__auto__ = (function (){var statearr_29004 = f__27271__auto__.call(null);
(statearr_29004[(6)] = c__27270__auto___29006);

return statearr_29004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___29006,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29020 = arguments.length;
switch (G__29020) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27270__auto___29086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___29086,out){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___29086,out){
return (function (state_29058){
var state_val_29059 = (state_29058[(1)]);
if((state_val_29059 === (7))){
var inst_29054 = (state_29058[(2)]);
var state_29058__$1 = state_29058;
var statearr_29060_29087 = state_29058__$1;
(statearr_29060_29087[(2)] = inst_29054);

(statearr_29060_29087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (1))){
var inst_29021 = (new Array(n));
var inst_29022 = inst_29021;
var inst_29023 = (0);
var state_29058__$1 = (function (){var statearr_29061 = state_29058;
(statearr_29061[(7)] = inst_29022);

(statearr_29061[(8)] = inst_29023);

return statearr_29061;
})();
var statearr_29062_29088 = state_29058__$1;
(statearr_29062_29088[(2)] = null);

(statearr_29062_29088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (4))){
var inst_29026 = (state_29058[(9)]);
var inst_29026__$1 = (state_29058[(2)]);
var inst_29027 = (inst_29026__$1 == null);
var inst_29028 = cljs.core.not.call(null,inst_29027);
var state_29058__$1 = (function (){var statearr_29063 = state_29058;
(statearr_29063[(9)] = inst_29026__$1);

return statearr_29063;
})();
if(inst_29028){
var statearr_29064_29089 = state_29058__$1;
(statearr_29064_29089[(1)] = (5));

} else {
var statearr_29065_29090 = state_29058__$1;
(statearr_29065_29090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (15))){
var inst_29048 = (state_29058[(2)]);
var state_29058__$1 = state_29058;
var statearr_29066_29091 = state_29058__$1;
(statearr_29066_29091[(2)] = inst_29048);

(statearr_29066_29091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (13))){
var state_29058__$1 = state_29058;
var statearr_29067_29092 = state_29058__$1;
(statearr_29067_29092[(2)] = null);

(statearr_29067_29092[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (6))){
var inst_29023 = (state_29058[(8)]);
var inst_29044 = (inst_29023 > (0));
var state_29058__$1 = state_29058;
if(cljs.core.truth_(inst_29044)){
var statearr_29068_29093 = state_29058__$1;
(statearr_29068_29093[(1)] = (12));

} else {
var statearr_29069_29094 = state_29058__$1;
(statearr_29069_29094[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (3))){
var inst_29056 = (state_29058[(2)]);
var state_29058__$1 = state_29058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29058__$1,inst_29056);
} else {
if((state_val_29059 === (12))){
var inst_29022 = (state_29058[(7)]);
var inst_29046 = cljs.core.vec.call(null,inst_29022);
var state_29058__$1 = state_29058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29058__$1,(15),out,inst_29046);
} else {
if((state_val_29059 === (2))){
var state_29058__$1 = state_29058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29058__$1,(4),ch);
} else {
if((state_val_29059 === (11))){
var inst_29038 = (state_29058[(2)]);
var inst_29039 = (new Array(n));
var inst_29022 = inst_29039;
var inst_29023 = (0);
var state_29058__$1 = (function (){var statearr_29070 = state_29058;
(statearr_29070[(7)] = inst_29022);

(statearr_29070[(8)] = inst_29023);

(statearr_29070[(10)] = inst_29038);

return statearr_29070;
})();
var statearr_29071_29095 = state_29058__$1;
(statearr_29071_29095[(2)] = null);

(statearr_29071_29095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (9))){
var inst_29022 = (state_29058[(7)]);
var inst_29036 = cljs.core.vec.call(null,inst_29022);
var state_29058__$1 = state_29058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29058__$1,(11),out,inst_29036);
} else {
if((state_val_29059 === (5))){
var inst_29022 = (state_29058[(7)]);
var inst_29031 = (state_29058[(11)]);
var inst_29026 = (state_29058[(9)]);
var inst_29023 = (state_29058[(8)]);
var inst_29030 = (inst_29022[inst_29023] = inst_29026);
var inst_29031__$1 = (inst_29023 + (1));
var inst_29032 = (inst_29031__$1 < n);
var state_29058__$1 = (function (){var statearr_29072 = state_29058;
(statearr_29072[(12)] = inst_29030);

(statearr_29072[(11)] = inst_29031__$1);

return statearr_29072;
})();
if(cljs.core.truth_(inst_29032)){
var statearr_29073_29096 = state_29058__$1;
(statearr_29073_29096[(1)] = (8));

} else {
var statearr_29074_29097 = state_29058__$1;
(statearr_29074_29097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (14))){
var inst_29051 = (state_29058[(2)]);
var inst_29052 = cljs.core.async.close_BANG_.call(null,out);
var state_29058__$1 = (function (){var statearr_29076 = state_29058;
(statearr_29076[(13)] = inst_29051);

return statearr_29076;
})();
var statearr_29077_29098 = state_29058__$1;
(statearr_29077_29098[(2)] = inst_29052);

(statearr_29077_29098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (10))){
var inst_29042 = (state_29058[(2)]);
var state_29058__$1 = state_29058;
var statearr_29078_29099 = state_29058__$1;
(statearr_29078_29099[(2)] = inst_29042);

(statearr_29078_29099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (8))){
var inst_29022 = (state_29058[(7)]);
var inst_29031 = (state_29058[(11)]);
var tmp29075 = inst_29022;
var inst_29022__$1 = tmp29075;
var inst_29023 = inst_29031;
var state_29058__$1 = (function (){var statearr_29079 = state_29058;
(statearr_29079[(7)] = inst_29022__$1);

(statearr_29079[(8)] = inst_29023);

return statearr_29079;
})();
var statearr_29080_29100 = state_29058__$1;
(statearr_29080_29100[(2)] = null);

(statearr_29080_29100[(1)] = (2));


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
});})(c__27270__auto___29086,out))
;
return ((function (switch__27179__auto__,c__27270__auto___29086,out){
return (function() {
var cljs$core$async$state_machine__27180__auto__ = null;
var cljs$core$async$state_machine__27180__auto____0 = (function (){
var statearr_29081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29081[(0)] = cljs$core$async$state_machine__27180__auto__);

(statearr_29081[(1)] = (1));

return statearr_29081;
});
var cljs$core$async$state_machine__27180__auto____1 = (function (state_29058){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_29058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e29082){if((e29082 instanceof Object)){
var ex__27183__auto__ = e29082;
var statearr_29083_29101 = state_29058;
(statearr_29083_29101[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29102 = state_29058;
state_29058 = G__29102;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$state_machine__27180__auto__ = function(state_29058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27180__auto____1.call(this,state_29058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27180__auto____0;
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27180__auto____1;
return cljs$core$async$state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___29086,out))
})();
var state__27272__auto__ = (function (){var statearr_29084 = f__27271__auto__.call(null);
(statearr_29084[(6)] = c__27270__auto___29086);

return statearr_29084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___29086,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29104 = arguments.length;
switch (G__29104) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27270__auto___29174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27270__auto___29174,out){
return (function (){
var f__27271__auto__ = (function (){var switch__27179__auto__ = ((function (c__27270__auto___29174,out){
return (function (state_29146){
var state_val_29147 = (state_29146[(1)]);
if((state_val_29147 === (7))){
var inst_29142 = (state_29146[(2)]);
var state_29146__$1 = state_29146;
var statearr_29148_29175 = state_29146__$1;
(statearr_29148_29175[(2)] = inst_29142);

(statearr_29148_29175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (1))){
var inst_29105 = [];
var inst_29106 = inst_29105;
var inst_29107 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29146__$1 = (function (){var statearr_29149 = state_29146;
(statearr_29149[(7)] = inst_29107);

(statearr_29149[(8)] = inst_29106);

return statearr_29149;
})();
var statearr_29150_29176 = state_29146__$1;
(statearr_29150_29176[(2)] = null);

(statearr_29150_29176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (4))){
var inst_29110 = (state_29146[(9)]);
var inst_29110__$1 = (state_29146[(2)]);
var inst_29111 = (inst_29110__$1 == null);
var inst_29112 = cljs.core.not.call(null,inst_29111);
var state_29146__$1 = (function (){var statearr_29151 = state_29146;
(statearr_29151[(9)] = inst_29110__$1);

return statearr_29151;
})();
if(inst_29112){
var statearr_29152_29177 = state_29146__$1;
(statearr_29152_29177[(1)] = (5));

} else {
var statearr_29153_29178 = state_29146__$1;
(statearr_29153_29178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (15))){
var inst_29136 = (state_29146[(2)]);
var state_29146__$1 = state_29146;
var statearr_29154_29179 = state_29146__$1;
(statearr_29154_29179[(2)] = inst_29136);

(statearr_29154_29179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (13))){
var state_29146__$1 = state_29146;
var statearr_29155_29180 = state_29146__$1;
(statearr_29155_29180[(2)] = null);

(statearr_29155_29180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (6))){
var inst_29106 = (state_29146[(8)]);
var inst_29131 = inst_29106.length;
var inst_29132 = (inst_29131 > (0));
var state_29146__$1 = state_29146;
if(cljs.core.truth_(inst_29132)){
var statearr_29156_29181 = state_29146__$1;
(statearr_29156_29181[(1)] = (12));

} else {
var statearr_29157_29182 = state_29146__$1;
(statearr_29157_29182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (3))){
var inst_29144 = (state_29146[(2)]);
var state_29146__$1 = state_29146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29146__$1,inst_29144);
} else {
if((state_val_29147 === (12))){
var inst_29106 = (state_29146[(8)]);
var inst_29134 = cljs.core.vec.call(null,inst_29106);
var state_29146__$1 = state_29146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29146__$1,(15),out,inst_29134);
} else {
if((state_val_29147 === (2))){
var state_29146__$1 = state_29146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29146__$1,(4),ch);
} else {
if((state_val_29147 === (11))){
var inst_29110 = (state_29146[(9)]);
var inst_29114 = (state_29146[(10)]);
var inst_29124 = (state_29146[(2)]);
var inst_29125 = [];
var inst_29126 = inst_29125.push(inst_29110);
var inst_29106 = inst_29125;
var inst_29107 = inst_29114;
var state_29146__$1 = (function (){var statearr_29158 = state_29146;
(statearr_29158[(7)] = inst_29107);

(statearr_29158[(11)] = inst_29126);

(statearr_29158[(12)] = inst_29124);

(statearr_29158[(8)] = inst_29106);

return statearr_29158;
})();
var statearr_29159_29183 = state_29146__$1;
(statearr_29159_29183[(2)] = null);

(statearr_29159_29183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (9))){
var inst_29106 = (state_29146[(8)]);
var inst_29122 = cljs.core.vec.call(null,inst_29106);
var state_29146__$1 = state_29146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29146__$1,(11),out,inst_29122);
} else {
if((state_val_29147 === (5))){
var inst_29107 = (state_29146[(7)]);
var inst_29110 = (state_29146[(9)]);
var inst_29114 = (state_29146[(10)]);
var inst_29114__$1 = f.call(null,inst_29110);
var inst_29115 = cljs.core._EQ_.call(null,inst_29114__$1,inst_29107);
var inst_29116 = cljs.core.keyword_identical_QMARK_.call(null,inst_29107,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29117 = ((inst_29115) || (inst_29116));
var state_29146__$1 = (function (){var statearr_29160 = state_29146;
(statearr_29160[(10)] = inst_29114__$1);

return statearr_29160;
})();
if(cljs.core.truth_(inst_29117)){
var statearr_29161_29184 = state_29146__$1;
(statearr_29161_29184[(1)] = (8));

} else {
var statearr_29162_29185 = state_29146__$1;
(statearr_29162_29185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (14))){
var inst_29139 = (state_29146[(2)]);
var inst_29140 = cljs.core.async.close_BANG_.call(null,out);
var state_29146__$1 = (function (){var statearr_29164 = state_29146;
(statearr_29164[(13)] = inst_29139);

return statearr_29164;
})();
var statearr_29165_29186 = state_29146__$1;
(statearr_29165_29186[(2)] = inst_29140);

(statearr_29165_29186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (10))){
var inst_29129 = (state_29146[(2)]);
var state_29146__$1 = state_29146;
var statearr_29166_29187 = state_29146__$1;
(statearr_29166_29187[(2)] = inst_29129);

(statearr_29166_29187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (8))){
var inst_29110 = (state_29146[(9)]);
var inst_29114 = (state_29146[(10)]);
var inst_29106 = (state_29146[(8)]);
var inst_29119 = inst_29106.push(inst_29110);
var tmp29163 = inst_29106;
var inst_29106__$1 = tmp29163;
var inst_29107 = inst_29114;
var state_29146__$1 = (function (){var statearr_29167 = state_29146;
(statearr_29167[(14)] = inst_29119);

(statearr_29167[(7)] = inst_29107);

(statearr_29167[(8)] = inst_29106__$1);

return statearr_29167;
})();
var statearr_29168_29188 = state_29146__$1;
(statearr_29168_29188[(2)] = null);

(statearr_29168_29188[(1)] = (2));


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
});})(c__27270__auto___29174,out))
;
return ((function (switch__27179__auto__,c__27270__auto___29174,out){
return (function() {
var cljs$core$async$state_machine__27180__auto__ = null;
var cljs$core$async$state_machine__27180__auto____0 = (function (){
var statearr_29169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29169[(0)] = cljs$core$async$state_machine__27180__auto__);

(statearr_29169[(1)] = (1));

return statearr_29169;
});
var cljs$core$async$state_machine__27180__auto____1 = (function (state_29146){
while(true){
var ret_value__27181__auto__ = (function (){try{while(true){
var result__27182__auto__ = switch__27179__auto__.call(null,state_29146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27182__auto__;
}
break;
}
}catch (e29170){if((e29170 instanceof Object)){
var ex__27183__auto__ = e29170;
var statearr_29171_29189 = state_29146;
(statearr_29171_29189[(5)] = ex__27183__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29190 = state_29146;
state_29146 = G__29190;
continue;
} else {
return ret_value__27181__auto__;
}
break;
}
});
cljs$core$async$state_machine__27180__auto__ = function(state_29146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27180__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27180__auto____1.call(this,state_29146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27180__auto____0;
cljs$core$async$state_machine__27180__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27180__auto____1;
return cljs$core$async$state_machine__27180__auto__;
})()
;})(switch__27179__auto__,c__27270__auto___29174,out))
})();
var state__27272__auto__ = (function (){var statearr_29172 = f__27271__auto__.call(null);
(statearr_29172[(6)] = c__27270__auto___29174);

return statearr_29172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27272__auto__);
});})(c__27270__auto___29174,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1530901592190
