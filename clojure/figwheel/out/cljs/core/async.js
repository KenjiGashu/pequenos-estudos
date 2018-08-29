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
var G__25561 = arguments.length;
switch (G__25561) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25562 = (function (f,blockable,meta25563){
this.f = f;
this.blockable = blockable;
this.meta25563 = meta25563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25564,meta25563__$1){
var self__ = this;
var _25564__$1 = this;
return (new cljs.core.async.t_cljs$core$async25562(self__.f,self__.blockable,meta25563__$1));
});

cljs.core.async.t_cljs$core$async25562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25564){
var self__ = this;
var _25564__$1 = this;
return self__.meta25563;
});

cljs.core.async.t_cljs$core$async25562.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25562.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25563","meta25563",1054381494,null)], null);
});

cljs.core.async.t_cljs$core$async25562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25562";

cljs.core.async.t_cljs$core$async25562.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25562");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25562.
 */
cljs.core.async.__GT_t_cljs$core$async25562 = (function cljs$core$async$__GT_t_cljs$core$async25562(f__$1,blockable__$1,meta25563){
return (new cljs.core.async.t_cljs$core$async25562(f__$1,blockable__$1,meta25563));
});

}

return (new cljs.core.async.t_cljs$core$async25562(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25568 = arguments.length;
switch (G__25568) {
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
var G__25571 = arguments.length;
switch (G__25571) {
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
var G__25574 = arguments.length;
switch (G__25574) {
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
var val_25576 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25576);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25576,ret){
return (function (){
return fn1.call(null,val_25576);
});})(val_25576,ret))
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
var G__25578 = arguments.length;
switch (G__25578) {
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
var n__4408__auto___25580 = n;
var x_25581 = (0);
while(true){
if((x_25581 < n__4408__auto___25580)){
(a[x_25581] = (0));

var G__25582 = (x_25581 + (1));
x_25581 = G__25582;
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

var G__25583 = (i + (1));
i = G__25583;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25584 = (function (flag,meta25585){
this.flag = flag;
this.meta25585 = meta25585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25586,meta25585__$1){
var self__ = this;
var _25586__$1 = this;
return (new cljs.core.async.t_cljs$core$async25584(self__.flag,meta25585__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25586){
var self__ = this;
var _25586__$1 = this;
return self__.meta25585;
});})(flag))
;

cljs.core.async.t_cljs$core$async25584.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25584.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25584.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25585","meta25585",-1880933029,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25584.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25584";

cljs.core.async.t_cljs$core$async25584.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25584");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25584.
 */
cljs.core.async.__GT_t_cljs$core$async25584 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25584(flag__$1,meta25585){
return (new cljs.core.async.t_cljs$core$async25584(flag__$1,meta25585));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25584(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25587 = (function (flag,cb,meta25588){
this.flag = flag;
this.cb = cb;
this.meta25588 = meta25588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25589,meta25588__$1){
var self__ = this;
var _25589__$1 = this;
return (new cljs.core.async.t_cljs$core$async25587(self__.flag,self__.cb,meta25588__$1));
});

cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25589){
var self__ = this;
var _25589__$1 = this;
return self__.meta25588;
});

cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25588","meta25588",-1459907334,null)], null);
});

cljs.core.async.t_cljs$core$async25587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25587";

cljs.core.async.t_cljs$core$async25587.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25587");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25587.
 */
cljs.core.async.__GT_t_cljs$core$async25587 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25587(flag__$1,cb__$1,meta25588){
return (new cljs.core.async.t_cljs$core$async25587(flag__$1,cb__$1,meta25588));
});

}

return (new cljs.core.async.t_cljs$core$async25587(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25590_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25590_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25591_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25591_SHARP_,port], null));
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
var G__25592 = (i + (1));
i = G__25592;
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
var len__4531__auto___25598 = arguments.length;
var i__4532__auto___25599 = (0);
while(true){
if((i__4532__auto___25599 < len__4531__auto___25598)){
args__4534__auto__.push((arguments[i__4532__auto___25599]));

var G__25600 = (i__4532__auto___25599 + (1));
i__4532__auto___25599 = G__25600;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25595){
var map__25596 = p__25595;
var map__25596__$1 = ((((!((map__25596 == null)))?(((((map__25596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25596):map__25596);
var opts = map__25596__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25593){
var G__25594 = cljs.core.first.call(null,seq25593);
var seq25593__$1 = cljs.core.next.call(null,seq25593);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25594,seq25593__$1);
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
var G__25602 = arguments.length;
switch (G__25602) {
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
var c__25501__auto___25648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___25648){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___25648){
return (function (state_25626){
var state_val_25627 = (state_25626[(1)]);
if((state_val_25627 === (7))){
var inst_25622 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25628_25649 = state_25626__$1;
(statearr_25628_25649[(2)] = inst_25622);

(statearr_25628_25649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (1))){
var state_25626__$1 = state_25626;
var statearr_25629_25650 = state_25626__$1;
(statearr_25629_25650[(2)] = null);

(statearr_25629_25650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (4))){
var inst_25605 = (state_25626[(7)]);
var inst_25605__$1 = (state_25626[(2)]);
var inst_25606 = (inst_25605__$1 == null);
var state_25626__$1 = (function (){var statearr_25630 = state_25626;
(statearr_25630[(7)] = inst_25605__$1);

return statearr_25630;
})();
if(cljs.core.truth_(inst_25606)){
var statearr_25631_25651 = state_25626__$1;
(statearr_25631_25651[(1)] = (5));

} else {
var statearr_25632_25652 = state_25626__$1;
(statearr_25632_25652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (13))){
var state_25626__$1 = state_25626;
var statearr_25633_25653 = state_25626__$1;
(statearr_25633_25653[(2)] = null);

(statearr_25633_25653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (6))){
var inst_25605 = (state_25626[(7)]);
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25626__$1,(11),to,inst_25605);
} else {
if((state_val_25627 === (3))){
var inst_25624 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25626__$1,inst_25624);
} else {
if((state_val_25627 === (12))){
var state_25626__$1 = state_25626;
var statearr_25634_25654 = state_25626__$1;
(statearr_25634_25654[(2)] = null);

(statearr_25634_25654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (2))){
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25626__$1,(4),from);
} else {
if((state_val_25627 === (11))){
var inst_25615 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
if(cljs.core.truth_(inst_25615)){
var statearr_25635_25655 = state_25626__$1;
(statearr_25635_25655[(1)] = (12));

} else {
var statearr_25636_25656 = state_25626__$1;
(statearr_25636_25656[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (9))){
var state_25626__$1 = state_25626;
var statearr_25637_25657 = state_25626__$1;
(statearr_25637_25657[(2)] = null);

(statearr_25637_25657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (5))){
var state_25626__$1 = state_25626;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25638_25658 = state_25626__$1;
(statearr_25638_25658[(1)] = (8));

} else {
var statearr_25639_25659 = state_25626__$1;
(statearr_25639_25659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (14))){
var inst_25620 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25640_25660 = state_25626__$1;
(statearr_25640_25660[(2)] = inst_25620);

(statearr_25640_25660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (10))){
var inst_25612 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25641_25661 = state_25626__$1;
(statearr_25641_25661[(2)] = inst_25612);

(statearr_25641_25661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (8))){
var inst_25609 = cljs.core.async.close_BANG_.call(null,to);
var state_25626__$1 = state_25626;
var statearr_25642_25662 = state_25626__$1;
(statearr_25642_25662[(2)] = inst_25609);

(statearr_25642_25662[(1)] = (10));


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
});})(c__25501__auto___25648))
;
return ((function (switch__25410__auto__,c__25501__auto___25648){
return (function() {
var cljs$core$async$state_machine__25411__auto__ = null;
var cljs$core$async$state_machine__25411__auto____0 = (function (){
var statearr_25643 = [null,null,null,null,null,null,null,null];
(statearr_25643[(0)] = cljs$core$async$state_machine__25411__auto__);

(statearr_25643[(1)] = (1));

return statearr_25643;
});
var cljs$core$async$state_machine__25411__auto____1 = (function (state_25626){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_25626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e25644){if((e25644 instanceof Object)){
var ex__25414__auto__ = e25644;
var statearr_25645_25663 = state_25626;
(statearr_25645_25663[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25664 = state_25626;
state_25626 = G__25664;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$state_machine__25411__auto__ = function(state_25626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25411__auto____1.call(this,state_25626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25411__auto____0;
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25411__auto____1;
return cljs$core$async$state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___25648))
})();
var state__25503__auto__ = (function (){var statearr_25646 = f__25502__auto__.call(null);
(statearr_25646[(6)] = c__25501__auto___25648);

return statearr_25646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___25648))
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
return (function (p__25665){
var vec__25666 = p__25665;
var v = cljs.core.nth.call(null,vec__25666,(0),null);
var p = cljs.core.nth.call(null,vec__25666,(1),null);
var job = vec__25666;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25501__auto___25837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___25837,res,vec__25666,v,p,job,jobs,results){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___25837,res,vec__25666,v,p,job,jobs,results){
return (function (state_25673){
var state_val_25674 = (state_25673[(1)]);
if((state_val_25674 === (1))){
var state_25673__$1 = state_25673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25673__$1,(2),res,v);
} else {
if((state_val_25674 === (2))){
var inst_25670 = (state_25673[(2)]);
var inst_25671 = cljs.core.async.close_BANG_.call(null,res);
var state_25673__$1 = (function (){var statearr_25675 = state_25673;
(statearr_25675[(7)] = inst_25670);

return statearr_25675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25673__$1,inst_25671);
} else {
return null;
}
}
});})(c__25501__auto___25837,res,vec__25666,v,p,job,jobs,results))
;
return ((function (switch__25410__auto__,c__25501__auto___25837,res,vec__25666,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0 = (function (){
var statearr_25676 = [null,null,null,null,null,null,null,null];
(statearr_25676[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__);

(statearr_25676[(1)] = (1));

return statearr_25676;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1 = (function (state_25673){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_25673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e25677){if((e25677 instanceof Object)){
var ex__25414__auto__ = e25677;
var statearr_25678_25838 = state_25673;
(statearr_25678_25838[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25839 = state_25673;
state_25673 = G__25839;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__ = function(state_25673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1.call(this,state_25673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___25837,res,vec__25666,v,p,job,jobs,results))
})();
var state__25503__auto__ = (function (){var statearr_25679 = f__25502__auto__.call(null);
(statearr_25679[(6)] = c__25501__auto___25837);

return statearr_25679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___25837,res,vec__25666,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25680){
var vec__25681 = p__25680;
var v = cljs.core.nth.call(null,vec__25681,(0),null);
var p = cljs.core.nth.call(null,vec__25681,(1),null);
var job = vec__25681;
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
var n__4408__auto___25840 = n;
var __25841 = (0);
while(true){
if((__25841 < n__4408__auto___25840)){
var G__25684_25842 = type;
var G__25684_25843__$1 = (((G__25684_25842 instanceof cljs.core.Keyword))?G__25684_25842.fqn:null);
switch (G__25684_25843__$1) {
case "compute":
var c__25501__auto___25845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25841,c__25501__auto___25845,G__25684_25842,G__25684_25843__$1,n__4408__auto___25840,jobs,results,process,async){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (__25841,c__25501__auto___25845,G__25684_25842,G__25684_25843__$1,n__4408__auto___25840,jobs,results,process,async){
return (function (state_25697){
var state_val_25698 = (state_25697[(1)]);
if((state_val_25698 === (1))){
var state_25697__$1 = state_25697;
var statearr_25699_25846 = state_25697__$1;
(statearr_25699_25846[(2)] = null);

(statearr_25699_25846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25698 === (2))){
var state_25697__$1 = state_25697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25697__$1,(4),jobs);
} else {
if((state_val_25698 === (3))){
var inst_25695 = (state_25697[(2)]);
var state_25697__$1 = state_25697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25697__$1,inst_25695);
} else {
if((state_val_25698 === (4))){
var inst_25687 = (state_25697[(2)]);
var inst_25688 = process.call(null,inst_25687);
var state_25697__$1 = state_25697;
if(cljs.core.truth_(inst_25688)){
var statearr_25700_25847 = state_25697__$1;
(statearr_25700_25847[(1)] = (5));

} else {
var statearr_25701_25848 = state_25697__$1;
(statearr_25701_25848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25698 === (5))){
var state_25697__$1 = state_25697;
var statearr_25702_25849 = state_25697__$1;
(statearr_25702_25849[(2)] = null);

(statearr_25702_25849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25698 === (6))){
var state_25697__$1 = state_25697;
var statearr_25703_25850 = state_25697__$1;
(statearr_25703_25850[(2)] = null);

(statearr_25703_25850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25698 === (7))){
var inst_25693 = (state_25697[(2)]);
var state_25697__$1 = state_25697;
var statearr_25704_25851 = state_25697__$1;
(statearr_25704_25851[(2)] = inst_25693);

(statearr_25704_25851[(1)] = (3));


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
});})(__25841,c__25501__auto___25845,G__25684_25842,G__25684_25843__$1,n__4408__auto___25840,jobs,results,process,async))
;
return ((function (__25841,switch__25410__auto__,c__25501__auto___25845,G__25684_25842,G__25684_25843__$1,n__4408__auto___25840,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0 = (function (){
var statearr_25705 = [null,null,null,null,null,null,null];
(statearr_25705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__);

(statearr_25705[(1)] = (1));

return statearr_25705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1 = (function (state_25697){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_25697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e25706){if((e25706 instanceof Object)){
var ex__25414__auto__ = e25706;
var statearr_25707_25852 = state_25697;
(statearr_25707_25852[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25853 = state_25697;
state_25697 = G__25853;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__ = function(state_25697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1.call(this,state_25697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__;
})()
;})(__25841,switch__25410__auto__,c__25501__auto___25845,G__25684_25842,G__25684_25843__$1,n__4408__auto___25840,jobs,results,process,async))
})();
var state__25503__auto__ = (function (){var statearr_25708 = f__25502__auto__.call(null);
(statearr_25708[(6)] = c__25501__auto___25845);

return statearr_25708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(__25841,c__25501__auto___25845,G__25684_25842,G__25684_25843__$1,n__4408__auto___25840,jobs,results,process,async))
);


break;
case "async":
var c__25501__auto___25854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25841,c__25501__auto___25854,G__25684_25842,G__25684_25843__$1,n__4408__auto___25840,jobs,results,process,async){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (__25841,c__25501__auto___25854,G__25684_25842,G__25684_25843__$1,n__4408__auto___25840,jobs,results,process,async){
return (function (state_25721){
var state_val_25722 = (state_25721[(1)]);
if((state_val_25722 === (1))){
var state_25721__$1 = state_25721;
var statearr_25723_25855 = state_25721__$1;
(statearr_25723_25855[(2)] = null);

(statearr_25723_25855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (2))){
var state_25721__$1 = state_25721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25721__$1,(4),jobs);
} else {
if((state_val_25722 === (3))){
var inst_25719 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25721__$1,inst_25719);
} else {
if((state_val_25722 === (4))){
var inst_25711 = (state_25721[(2)]);
var inst_25712 = async.call(null,inst_25711);
var state_25721__$1 = state_25721;
if(cljs.core.truth_(inst_25712)){
var statearr_25724_25856 = state_25721__$1;
(statearr_25724_25856[(1)] = (5));

} else {
var statearr_25725_25857 = state_25721__$1;
(statearr_25725_25857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (5))){
var state_25721__$1 = state_25721;
var statearr_25726_25858 = state_25721__$1;
(statearr_25726_25858[(2)] = null);

(statearr_25726_25858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (6))){
var state_25721__$1 = state_25721;
var statearr_25727_25859 = state_25721__$1;
(statearr_25727_25859[(2)] = null);

(statearr_25727_25859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (7))){
var inst_25717 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25728_25860 = state_25721__$1;
(statearr_25728_25860[(2)] = inst_25717);

(statearr_25728_25860[(1)] = (3));


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
});})(__25841,c__25501__auto___25854,G__25684_25842,G__25684_25843__$1,n__4408__auto___25840,jobs,results,process,async))
;
return ((function (__25841,switch__25410__auto__,c__25501__auto___25854,G__25684_25842,G__25684_25843__$1,n__4408__auto___25840,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0 = (function (){
var statearr_25729 = [null,null,null,null,null,null,null];
(statearr_25729[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__);

(statearr_25729[(1)] = (1));

return statearr_25729;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1 = (function (state_25721){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_25721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e25730){if((e25730 instanceof Object)){
var ex__25414__auto__ = e25730;
var statearr_25731_25861 = state_25721;
(statearr_25731_25861[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25862 = state_25721;
state_25721 = G__25862;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__ = function(state_25721){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1.call(this,state_25721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__;
})()
;})(__25841,switch__25410__auto__,c__25501__auto___25854,G__25684_25842,G__25684_25843__$1,n__4408__auto___25840,jobs,results,process,async))
})();
var state__25503__auto__ = (function (){var statearr_25732 = f__25502__auto__.call(null);
(statearr_25732[(6)] = c__25501__auto___25854);

return statearr_25732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(__25841,c__25501__auto___25854,G__25684_25842,G__25684_25843__$1,n__4408__auto___25840,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25684_25843__$1)].join('')));

}

var G__25863 = (__25841 + (1));
__25841 = G__25863;
continue;
} else {
}
break;
}

var c__25501__auto___25864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___25864,jobs,results,process,async){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___25864,jobs,results,process,async){
return (function (state_25754){
var state_val_25755 = (state_25754[(1)]);
if((state_val_25755 === (1))){
var state_25754__$1 = state_25754;
var statearr_25756_25865 = state_25754__$1;
(statearr_25756_25865[(2)] = null);

(statearr_25756_25865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25755 === (2))){
var state_25754__$1 = state_25754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25754__$1,(4),from);
} else {
if((state_val_25755 === (3))){
var inst_25752 = (state_25754[(2)]);
var state_25754__$1 = state_25754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25754__$1,inst_25752);
} else {
if((state_val_25755 === (4))){
var inst_25735 = (state_25754[(7)]);
var inst_25735__$1 = (state_25754[(2)]);
var inst_25736 = (inst_25735__$1 == null);
var state_25754__$1 = (function (){var statearr_25757 = state_25754;
(statearr_25757[(7)] = inst_25735__$1);

return statearr_25757;
})();
if(cljs.core.truth_(inst_25736)){
var statearr_25758_25866 = state_25754__$1;
(statearr_25758_25866[(1)] = (5));

} else {
var statearr_25759_25867 = state_25754__$1;
(statearr_25759_25867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25755 === (5))){
var inst_25738 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25754__$1 = state_25754;
var statearr_25760_25868 = state_25754__$1;
(statearr_25760_25868[(2)] = inst_25738);

(statearr_25760_25868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25755 === (6))){
var inst_25740 = (state_25754[(8)]);
var inst_25735 = (state_25754[(7)]);
var inst_25740__$1 = cljs.core.async.chan.call(null,(1));
var inst_25741 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25742 = [inst_25735,inst_25740__$1];
var inst_25743 = (new cljs.core.PersistentVector(null,2,(5),inst_25741,inst_25742,null));
var state_25754__$1 = (function (){var statearr_25761 = state_25754;
(statearr_25761[(8)] = inst_25740__$1);

return statearr_25761;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25754__$1,(8),jobs,inst_25743);
} else {
if((state_val_25755 === (7))){
var inst_25750 = (state_25754[(2)]);
var state_25754__$1 = state_25754;
var statearr_25762_25869 = state_25754__$1;
(statearr_25762_25869[(2)] = inst_25750);

(statearr_25762_25869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25755 === (8))){
var inst_25740 = (state_25754[(8)]);
var inst_25745 = (state_25754[(2)]);
var state_25754__$1 = (function (){var statearr_25763 = state_25754;
(statearr_25763[(9)] = inst_25745);

return statearr_25763;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25754__$1,(9),results,inst_25740);
} else {
if((state_val_25755 === (9))){
var inst_25747 = (state_25754[(2)]);
var state_25754__$1 = (function (){var statearr_25764 = state_25754;
(statearr_25764[(10)] = inst_25747);

return statearr_25764;
})();
var statearr_25765_25870 = state_25754__$1;
(statearr_25765_25870[(2)] = null);

(statearr_25765_25870[(1)] = (2));


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
});})(c__25501__auto___25864,jobs,results,process,async))
;
return ((function (switch__25410__auto__,c__25501__auto___25864,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0 = (function (){
var statearr_25766 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__);

(statearr_25766[(1)] = (1));

return statearr_25766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1 = (function (state_25754){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_25754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e25767){if((e25767 instanceof Object)){
var ex__25414__auto__ = e25767;
var statearr_25768_25871 = state_25754;
(statearr_25768_25871[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25872 = state_25754;
state_25754 = G__25872;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__ = function(state_25754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1.call(this,state_25754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___25864,jobs,results,process,async))
})();
var state__25503__auto__ = (function (){var statearr_25769 = f__25502__auto__.call(null);
(statearr_25769[(6)] = c__25501__auto___25864);

return statearr_25769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___25864,jobs,results,process,async))
);


var c__25501__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto__,jobs,results,process,async){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto__,jobs,results,process,async){
return (function (state_25807){
var state_val_25808 = (state_25807[(1)]);
if((state_val_25808 === (7))){
var inst_25803 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
var statearr_25809_25873 = state_25807__$1;
(statearr_25809_25873[(2)] = inst_25803);

(statearr_25809_25873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (20))){
var state_25807__$1 = state_25807;
var statearr_25810_25874 = state_25807__$1;
(statearr_25810_25874[(2)] = null);

(statearr_25810_25874[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (1))){
var state_25807__$1 = state_25807;
var statearr_25811_25875 = state_25807__$1;
(statearr_25811_25875[(2)] = null);

(statearr_25811_25875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (4))){
var inst_25772 = (state_25807[(7)]);
var inst_25772__$1 = (state_25807[(2)]);
var inst_25773 = (inst_25772__$1 == null);
var state_25807__$1 = (function (){var statearr_25812 = state_25807;
(statearr_25812[(7)] = inst_25772__$1);

return statearr_25812;
})();
if(cljs.core.truth_(inst_25773)){
var statearr_25813_25876 = state_25807__$1;
(statearr_25813_25876[(1)] = (5));

} else {
var statearr_25814_25877 = state_25807__$1;
(statearr_25814_25877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (15))){
var inst_25785 = (state_25807[(8)]);
var state_25807__$1 = state_25807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25807__$1,(18),to,inst_25785);
} else {
if((state_val_25808 === (21))){
var inst_25798 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
var statearr_25815_25878 = state_25807__$1;
(statearr_25815_25878[(2)] = inst_25798);

(statearr_25815_25878[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (13))){
var inst_25800 = (state_25807[(2)]);
var state_25807__$1 = (function (){var statearr_25816 = state_25807;
(statearr_25816[(9)] = inst_25800);

return statearr_25816;
})();
var statearr_25817_25879 = state_25807__$1;
(statearr_25817_25879[(2)] = null);

(statearr_25817_25879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (6))){
var inst_25772 = (state_25807[(7)]);
var state_25807__$1 = state_25807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25807__$1,(11),inst_25772);
} else {
if((state_val_25808 === (17))){
var inst_25793 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
if(cljs.core.truth_(inst_25793)){
var statearr_25818_25880 = state_25807__$1;
(statearr_25818_25880[(1)] = (19));

} else {
var statearr_25819_25881 = state_25807__$1;
(statearr_25819_25881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (3))){
var inst_25805 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25807__$1,inst_25805);
} else {
if((state_val_25808 === (12))){
var inst_25782 = (state_25807[(10)]);
var state_25807__$1 = state_25807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25807__$1,(14),inst_25782);
} else {
if((state_val_25808 === (2))){
var state_25807__$1 = state_25807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25807__$1,(4),results);
} else {
if((state_val_25808 === (19))){
var state_25807__$1 = state_25807;
var statearr_25820_25882 = state_25807__$1;
(statearr_25820_25882[(2)] = null);

(statearr_25820_25882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (11))){
var inst_25782 = (state_25807[(2)]);
var state_25807__$1 = (function (){var statearr_25821 = state_25807;
(statearr_25821[(10)] = inst_25782);

return statearr_25821;
})();
var statearr_25822_25883 = state_25807__$1;
(statearr_25822_25883[(2)] = null);

(statearr_25822_25883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (9))){
var state_25807__$1 = state_25807;
var statearr_25823_25884 = state_25807__$1;
(statearr_25823_25884[(2)] = null);

(statearr_25823_25884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (5))){
var state_25807__$1 = state_25807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25824_25885 = state_25807__$1;
(statearr_25824_25885[(1)] = (8));

} else {
var statearr_25825_25886 = state_25807__$1;
(statearr_25825_25886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (14))){
var inst_25787 = (state_25807[(11)]);
var inst_25785 = (state_25807[(8)]);
var inst_25785__$1 = (state_25807[(2)]);
var inst_25786 = (inst_25785__$1 == null);
var inst_25787__$1 = cljs.core.not.call(null,inst_25786);
var state_25807__$1 = (function (){var statearr_25826 = state_25807;
(statearr_25826[(11)] = inst_25787__$1);

(statearr_25826[(8)] = inst_25785__$1);

return statearr_25826;
})();
if(inst_25787__$1){
var statearr_25827_25887 = state_25807__$1;
(statearr_25827_25887[(1)] = (15));

} else {
var statearr_25828_25888 = state_25807__$1;
(statearr_25828_25888[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (16))){
var inst_25787 = (state_25807[(11)]);
var state_25807__$1 = state_25807;
var statearr_25829_25889 = state_25807__$1;
(statearr_25829_25889[(2)] = inst_25787);

(statearr_25829_25889[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (10))){
var inst_25779 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
var statearr_25830_25890 = state_25807__$1;
(statearr_25830_25890[(2)] = inst_25779);

(statearr_25830_25890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (18))){
var inst_25790 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
var statearr_25831_25891 = state_25807__$1;
(statearr_25831_25891[(2)] = inst_25790);

(statearr_25831_25891[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (8))){
var inst_25776 = cljs.core.async.close_BANG_.call(null,to);
var state_25807__$1 = state_25807;
var statearr_25832_25892 = state_25807__$1;
(statearr_25832_25892[(2)] = inst_25776);

(statearr_25832_25892[(1)] = (10));


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
});})(c__25501__auto__,jobs,results,process,async))
;
return ((function (switch__25410__auto__,c__25501__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0 = (function (){
var statearr_25833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__);

(statearr_25833[(1)] = (1));

return statearr_25833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1 = (function (state_25807){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_25807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e25834){if((e25834 instanceof Object)){
var ex__25414__auto__ = e25834;
var statearr_25835_25893 = state_25807;
(statearr_25835_25893[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25894 = state_25807;
state_25807 = G__25894;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__ = function(state_25807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1.call(this,state_25807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto__,jobs,results,process,async))
})();
var state__25503__auto__ = (function (){var statearr_25836 = f__25502__auto__.call(null);
(statearr_25836[(6)] = c__25501__auto__);

return statearr_25836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto__,jobs,results,process,async))
);

return c__25501__auto__;
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
var G__25896 = arguments.length;
switch (G__25896) {
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
var G__25899 = arguments.length;
switch (G__25899) {
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
var G__25902 = arguments.length;
switch (G__25902) {
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
var c__25501__auto___25951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___25951,tc,fc){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___25951,tc,fc){
return (function (state_25928){
var state_val_25929 = (state_25928[(1)]);
if((state_val_25929 === (7))){
var inst_25924 = (state_25928[(2)]);
var state_25928__$1 = state_25928;
var statearr_25930_25952 = state_25928__$1;
(statearr_25930_25952[(2)] = inst_25924);

(statearr_25930_25952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25929 === (1))){
var state_25928__$1 = state_25928;
var statearr_25931_25953 = state_25928__$1;
(statearr_25931_25953[(2)] = null);

(statearr_25931_25953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25929 === (4))){
var inst_25905 = (state_25928[(7)]);
var inst_25905__$1 = (state_25928[(2)]);
var inst_25906 = (inst_25905__$1 == null);
var state_25928__$1 = (function (){var statearr_25932 = state_25928;
(statearr_25932[(7)] = inst_25905__$1);

return statearr_25932;
})();
if(cljs.core.truth_(inst_25906)){
var statearr_25933_25954 = state_25928__$1;
(statearr_25933_25954[(1)] = (5));

} else {
var statearr_25934_25955 = state_25928__$1;
(statearr_25934_25955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25929 === (13))){
var state_25928__$1 = state_25928;
var statearr_25935_25956 = state_25928__$1;
(statearr_25935_25956[(2)] = null);

(statearr_25935_25956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25929 === (6))){
var inst_25905 = (state_25928[(7)]);
var inst_25911 = p.call(null,inst_25905);
var state_25928__$1 = state_25928;
if(cljs.core.truth_(inst_25911)){
var statearr_25936_25957 = state_25928__$1;
(statearr_25936_25957[(1)] = (9));

} else {
var statearr_25937_25958 = state_25928__$1;
(statearr_25937_25958[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25929 === (3))){
var inst_25926 = (state_25928[(2)]);
var state_25928__$1 = state_25928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25928__$1,inst_25926);
} else {
if((state_val_25929 === (12))){
var state_25928__$1 = state_25928;
var statearr_25938_25959 = state_25928__$1;
(statearr_25938_25959[(2)] = null);

(statearr_25938_25959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25929 === (2))){
var state_25928__$1 = state_25928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25928__$1,(4),ch);
} else {
if((state_val_25929 === (11))){
var inst_25905 = (state_25928[(7)]);
var inst_25915 = (state_25928[(2)]);
var state_25928__$1 = state_25928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25928__$1,(8),inst_25915,inst_25905);
} else {
if((state_val_25929 === (9))){
var state_25928__$1 = state_25928;
var statearr_25939_25960 = state_25928__$1;
(statearr_25939_25960[(2)] = tc);

(statearr_25939_25960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25929 === (5))){
var inst_25908 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25909 = cljs.core.async.close_BANG_.call(null,fc);
var state_25928__$1 = (function (){var statearr_25940 = state_25928;
(statearr_25940[(8)] = inst_25908);

return statearr_25940;
})();
var statearr_25941_25961 = state_25928__$1;
(statearr_25941_25961[(2)] = inst_25909);

(statearr_25941_25961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25929 === (14))){
var inst_25922 = (state_25928[(2)]);
var state_25928__$1 = state_25928;
var statearr_25942_25962 = state_25928__$1;
(statearr_25942_25962[(2)] = inst_25922);

(statearr_25942_25962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25929 === (10))){
var state_25928__$1 = state_25928;
var statearr_25943_25963 = state_25928__$1;
(statearr_25943_25963[(2)] = fc);

(statearr_25943_25963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25929 === (8))){
var inst_25917 = (state_25928[(2)]);
var state_25928__$1 = state_25928;
if(cljs.core.truth_(inst_25917)){
var statearr_25944_25964 = state_25928__$1;
(statearr_25944_25964[(1)] = (12));

} else {
var statearr_25945_25965 = state_25928__$1;
(statearr_25945_25965[(1)] = (13));

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
});})(c__25501__auto___25951,tc,fc))
;
return ((function (switch__25410__auto__,c__25501__auto___25951,tc,fc){
return (function() {
var cljs$core$async$state_machine__25411__auto__ = null;
var cljs$core$async$state_machine__25411__auto____0 = (function (){
var statearr_25946 = [null,null,null,null,null,null,null,null,null];
(statearr_25946[(0)] = cljs$core$async$state_machine__25411__auto__);

(statearr_25946[(1)] = (1));

return statearr_25946;
});
var cljs$core$async$state_machine__25411__auto____1 = (function (state_25928){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_25928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e25947){if((e25947 instanceof Object)){
var ex__25414__auto__ = e25947;
var statearr_25948_25966 = state_25928;
(statearr_25948_25966[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25967 = state_25928;
state_25928 = G__25967;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$state_machine__25411__auto__ = function(state_25928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25411__auto____1.call(this,state_25928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25411__auto____0;
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25411__auto____1;
return cljs$core$async$state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___25951,tc,fc))
})();
var state__25503__auto__ = (function (){var statearr_25949 = f__25502__auto__.call(null);
(statearr_25949[(6)] = c__25501__auto___25951);

return statearr_25949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___25951,tc,fc))
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
var c__25501__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto__){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto__){
return (function (state_25988){
var state_val_25989 = (state_25988[(1)]);
if((state_val_25989 === (7))){
var inst_25984 = (state_25988[(2)]);
var state_25988__$1 = state_25988;
var statearr_25990_26008 = state_25988__$1;
(statearr_25990_26008[(2)] = inst_25984);

(statearr_25990_26008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25989 === (1))){
var inst_25968 = init;
var state_25988__$1 = (function (){var statearr_25991 = state_25988;
(statearr_25991[(7)] = inst_25968);

return statearr_25991;
})();
var statearr_25992_26009 = state_25988__$1;
(statearr_25992_26009[(2)] = null);

(statearr_25992_26009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25989 === (4))){
var inst_25971 = (state_25988[(8)]);
var inst_25971__$1 = (state_25988[(2)]);
var inst_25972 = (inst_25971__$1 == null);
var state_25988__$1 = (function (){var statearr_25993 = state_25988;
(statearr_25993[(8)] = inst_25971__$1);

return statearr_25993;
})();
if(cljs.core.truth_(inst_25972)){
var statearr_25994_26010 = state_25988__$1;
(statearr_25994_26010[(1)] = (5));

} else {
var statearr_25995_26011 = state_25988__$1;
(statearr_25995_26011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25989 === (6))){
var inst_25968 = (state_25988[(7)]);
var inst_25971 = (state_25988[(8)]);
var inst_25975 = (state_25988[(9)]);
var inst_25975__$1 = f.call(null,inst_25968,inst_25971);
var inst_25976 = cljs.core.reduced_QMARK_.call(null,inst_25975__$1);
var state_25988__$1 = (function (){var statearr_25996 = state_25988;
(statearr_25996[(9)] = inst_25975__$1);

return statearr_25996;
})();
if(inst_25976){
var statearr_25997_26012 = state_25988__$1;
(statearr_25997_26012[(1)] = (8));

} else {
var statearr_25998_26013 = state_25988__$1;
(statearr_25998_26013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25989 === (3))){
var inst_25986 = (state_25988[(2)]);
var state_25988__$1 = state_25988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25988__$1,inst_25986);
} else {
if((state_val_25989 === (2))){
var state_25988__$1 = state_25988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25988__$1,(4),ch);
} else {
if((state_val_25989 === (9))){
var inst_25975 = (state_25988[(9)]);
var inst_25968 = inst_25975;
var state_25988__$1 = (function (){var statearr_25999 = state_25988;
(statearr_25999[(7)] = inst_25968);

return statearr_25999;
})();
var statearr_26000_26014 = state_25988__$1;
(statearr_26000_26014[(2)] = null);

(statearr_26000_26014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25989 === (5))){
var inst_25968 = (state_25988[(7)]);
var state_25988__$1 = state_25988;
var statearr_26001_26015 = state_25988__$1;
(statearr_26001_26015[(2)] = inst_25968);

(statearr_26001_26015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25989 === (10))){
var inst_25982 = (state_25988[(2)]);
var state_25988__$1 = state_25988;
var statearr_26002_26016 = state_25988__$1;
(statearr_26002_26016[(2)] = inst_25982);

(statearr_26002_26016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25989 === (8))){
var inst_25975 = (state_25988[(9)]);
var inst_25978 = cljs.core.deref.call(null,inst_25975);
var state_25988__$1 = state_25988;
var statearr_26003_26017 = state_25988__$1;
(statearr_26003_26017[(2)] = inst_25978);

(statearr_26003_26017[(1)] = (10));


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
});})(c__25501__auto__))
;
return ((function (switch__25410__auto__,c__25501__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25411__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25411__auto____0 = (function (){
var statearr_26004 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26004[(0)] = cljs$core$async$reduce_$_state_machine__25411__auto__);

(statearr_26004[(1)] = (1));

return statearr_26004;
});
var cljs$core$async$reduce_$_state_machine__25411__auto____1 = (function (state_25988){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_25988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e26005){if((e26005 instanceof Object)){
var ex__25414__auto__ = e26005;
var statearr_26006_26018 = state_25988;
(statearr_26006_26018[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26019 = state_25988;
state_25988 = G__26019;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25411__auto__ = function(state_25988){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25411__auto____1.call(this,state_25988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25411__auto____0;
cljs$core$async$reduce_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25411__auto____1;
return cljs$core$async$reduce_$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto__))
})();
var state__25503__auto__ = (function (){var statearr_26007 = f__25502__auto__.call(null);
(statearr_26007[(6)] = c__25501__auto__);

return statearr_26007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto__))
);

return c__25501__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25501__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto__,f__$1){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto__,f__$1){
return (function (state_26025){
var state_val_26026 = (state_26025[(1)]);
if((state_val_26026 === (1))){
var inst_26020 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26025__$1 = state_26025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26025__$1,(2),inst_26020);
} else {
if((state_val_26026 === (2))){
var inst_26022 = (state_26025[(2)]);
var inst_26023 = f__$1.call(null,inst_26022);
var state_26025__$1 = state_26025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26025__$1,inst_26023);
} else {
return null;
}
}
});})(c__25501__auto__,f__$1))
;
return ((function (switch__25410__auto__,c__25501__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25411__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25411__auto____0 = (function (){
var statearr_26027 = [null,null,null,null,null,null,null];
(statearr_26027[(0)] = cljs$core$async$transduce_$_state_machine__25411__auto__);

(statearr_26027[(1)] = (1));

return statearr_26027;
});
var cljs$core$async$transduce_$_state_machine__25411__auto____1 = (function (state_26025){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_26025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e26028){if((e26028 instanceof Object)){
var ex__25414__auto__ = e26028;
var statearr_26029_26031 = state_26025;
(statearr_26029_26031[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26032 = state_26025;
state_26025 = G__26032;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25411__auto__ = function(state_26025){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25411__auto____1.call(this,state_26025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25411__auto____0;
cljs$core$async$transduce_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25411__auto____1;
return cljs$core$async$transduce_$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto__,f__$1))
})();
var state__25503__auto__ = (function (){var statearr_26030 = f__25502__auto__.call(null);
(statearr_26030[(6)] = c__25501__auto__);

return statearr_26030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto__,f__$1))
);

return c__25501__auto__;
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
var G__26034 = arguments.length;
switch (G__26034) {
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
var c__25501__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto__){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto__){
return (function (state_26059){
var state_val_26060 = (state_26059[(1)]);
if((state_val_26060 === (7))){
var inst_26041 = (state_26059[(2)]);
var state_26059__$1 = state_26059;
var statearr_26061_26082 = state_26059__$1;
(statearr_26061_26082[(2)] = inst_26041);

(statearr_26061_26082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (1))){
var inst_26035 = cljs.core.seq.call(null,coll);
var inst_26036 = inst_26035;
var state_26059__$1 = (function (){var statearr_26062 = state_26059;
(statearr_26062[(7)] = inst_26036);

return statearr_26062;
})();
var statearr_26063_26083 = state_26059__$1;
(statearr_26063_26083[(2)] = null);

(statearr_26063_26083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (4))){
var inst_26036 = (state_26059[(7)]);
var inst_26039 = cljs.core.first.call(null,inst_26036);
var state_26059__$1 = state_26059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26059__$1,(7),ch,inst_26039);
} else {
if((state_val_26060 === (13))){
var inst_26053 = (state_26059[(2)]);
var state_26059__$1 = state_26059;
var statearr_26064_26084 = state_26059__$1;
(statearr_26064_26084[(2)] = inst_26053);

(statearr_26064_26084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (6))){
var inst_26044 = (state_26059[(2)]);
var state_26059__$1 = state_26059;
if(cljs.core.truth_(inst_26044)){
var statearr_26065_26085 = state_26059__$1;
(statearr_26065_26085[(1)] = (8));

} else {
var statearr_26066_26086 = state_26059__$1;
(statearr_26066_26086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (3))){
var inst_26057 = (state_26059[(2)]);
var state_26059__$1 = state_26059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26059__$1,inst_26057);
} else {
if((state_val_26060 === (12))){
var state_26059__$1 = state_26059;
var statearr_26067_26087 = state_26059__$1;
(statearr_26067_26087[(2)] = null);

(statearr_26067_26087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (2))){
var inst_26036 = (state_26059[(7)]);
var state_26059__$1 = state_26059;
if(cljs.core.truth_(inst_26036)){
var statearr_26068_26088 = state_26059__$1;
(statearr_26068_26088[(1)] = (4));

} else {
var statearr_26069_26089 = state_26059__$1;
(statearr_26069_26089[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (11))){
var inst_26050 = cljs.core.async.close_BANG_.call(null,ch);
var state_26059__$1 = state_26059;
var statearr_26070_26090 = state_26059__$1;
(statearr_26070_26090[(2)] = inst_26050);

(statearr_26070_26090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (9))){
var state_26059__$1 = state_26059;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26071_26091 = state_26059__$1;
(statearr_26071_26091[(1)] = (11));

} else {
var statearr_26072_26092 = state_26059__$1;
(statearr_26072_26092[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (5))){
var inst_26036 = (state_26059[(7)]);
var state_26059__$1 = state_26059;
var statearr_26073_26093 = state_26059__$1;
(statearr_26073_26093[(2)] = inst_26036);

(statearr_26073_26093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (10))){
var inst_26055 = (state_26059[(2)]);
var state_26059__$1 = state_26059;
var statearr_26074_26094 = state_26059__$1;
(statearr_26074_26094[(2)] = inst_26055);

(statearr_26074_26094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (8))){
var inst_26036 = (state_26059[(7)]);
var inst_26046 = cljs.core.next.call(null,inst_26036);
var inst_26036__$1 = inst_26046;
var state_26059__$1 = (function (){var statearr_26075 = state_26059;
(statearr_26075[(7)] = inst_26036__$1);

return statearr_26075;
})();
var statearr_26076_26095 = state_26059__$1;
(statearr_26076_26095[(2)] = null);

(statearr_26076_26095[(1)] = (2));


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
});})(c__25501__auto__))
;
return ((function (switch__25410__auto__,c__25501__auto__){
return (function() {
var cljs$core$async$state_machine__25411__auto__ = null;
var cljs$core$async$state_machine__25411__auto____0 = (function (){
var statearr_26077 = [null,null,null,null,null,null,null,null];
(statearr_26077[(0)] = cljs$core$async$state_machine__25411__auto__);

(statearr_26077[(1)] = (1));

return statearr_26077;
});
var cljs$core$async$state_machine__25411__auto____1 = (function (state_26059){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_26059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e26078){if((e26078 instanceof Object)){
var ex__25414__auto__ = e26078;
var statearr_26079_26096 = state_26059;
(statearr_26079_26096[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26097 = state_26059;
state_26059 = G__26097;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$state_machine__25411__auto__ = function(state_26059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25411__auto____1.call(this,state_26059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25411__auto____0;
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25411__auto____1;
return cljs$core$async$state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto__))
})();
var state__25503__auto__ = (function (){var statearr_26080 = f__25502__auto__.call(null);
(statearr_26080[(6)] = c__25501__auto__);

return statearr_26080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto__))
);

return c__25501__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26098 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26098 = (function (ch,cs,meta26099){
this.ch = ch;
this.cs = cs;
this.meta26099 = meta26099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26100,meta26099__$1){
var self__ = this;
var _26100__$1 = this;
return (new cljs.core.async.t_cljs$core$async26098(self__.ch,self__.cs,meta26099__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26098.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26100){
var self__ = this;
var _26100__$1 = this;
return self__.meta26099;
});})(cs))
;

cljs.core.async.t_cljs$core$async26098.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26098.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26098.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26098.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26098.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26098.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26098.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26099","meta26099",-869785884,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26098";

cljs.core.async.t_cljs$core$async26098.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26098");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26098.
 */
cljs.core.async.__GT_t_cljs$core$async26098 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26098(ch__$1,cs__$1,meta26099){
return (new cljs.core.async.t_cljs$core$async26098(ch__$1,cs__$1,meta26099));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26098(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25501__auto___26320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___26320,cs,m,dchan,dctr,done){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___26320,cs,m,dchan,dctr,done){
return (function (state_26235){
var state_val_26236 = (state_26235[(1)]);
if((state_val_26236 === (7))){
var inst_26231 = (state_26235[(2)]);
var state_26235__$1 = state_26235;
var statearr_26237_26321 = state_26235__$1;
(statearr_26237_26321[(2)] = inst_26231);

(statearr_26237_26321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (20))){
var inst_26134 = (state_26235[(7)]);
var inst_26146 = cljs.core.first.call(null,inst_26134);
var inst_26147 = cljs.core.nth.call(null,inst_26146,(0),null);
var inst_26148 = cljs.core.nth.call(null,inst_26146,(1),null);
var state_26235__$1 = (function (){var statearr_26238 = state_26235;
(statearr_26238[(8)] = inst_26147);

return statearr_26238;
})();
if(cljs.core.truth_(inst_26148)){
var statearr_26239_26322 = state_26235__$1;
(statearr_26239_26322[(1)] = (22));

} else {
var statearr_26240_26323 = state_26235__$1;
(statearr_26240_26323[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (27))){
var inst_26103 = (state_26235[(9)]);
var inst_26183 = (state_26235[(10)]);
var inst_26178 = (state_26235[(11)]);
var inst_26176 = (state_26235[(12)]);
var inst_26183__$1 = cljs.core._nth.call(null,inst_26176,inst_26178);
var inst_26184 = cljs.core.async.put_BANG_.call(null,inst_26183__$1,inst_26103,done);
var state_26235__$1 = (function (){var statearr_26241 = state_26235;
(statearr_26241[(10)] = inst_26183__$1);

return statearr_26241;
})();
if(cljs.core.truth_(inst_26184)){
var statearr_26242_26324 = state_26235__$1;
(statearr_26242_26324[(1)] = (30));

} else {
var statearr_26243_26325 = state_26235__$1;
(statearr_26243_26325[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (1))){
var state_26235__$1 = state_26235;
var statearr_26244_26326 = state_26235__$1;
(statearr_26244_26326[(2)] = null);

(statearr_26244_26326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (24))){
var inst_26134 = (state_26235[(7)]);
var inst_26153 = (state_26235[(2)]);
var inst_26154 = cljs.core.next.call(null,inst_26134);
var inst_26112 = inst_26154;
var inst_26113 = null;
var inst_26114 = (0);
var inst_26115 = (0);
var state_26235__$1 = (function (){var statearr_26245 = state_26235;
(statearr_26245[(13)] = inst_26115);

(statearr_26245[(14)] = inst_26153);

(statearr_26245[(15)] = inst_26112);

(statearr_26245[(16)] = inst_26113);

(statearr_26245[(17)] = inst_26114);

return statearr_26245;
})();
var statearr_26246_26327 = state_26235__$1;
(statearr_26246_26327[(2)] = null);

(statearr_26246_26327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (39))){
var state_26235__$1 = state_26235;
var statearr_26250_26328 = state_26235__$1;
(statearr_26250_26328[(2)] = null);

(statearr_26250_26328[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (4))){
var inst_26103 = (state_26235[(9)]);
var inst_26103__$1 = (state_26235[(2)]);
var inst_26104 = (inst_26103__$1 == null);
var state_26235__$1 = (function (){var statearr_26251 = state_26235;
(statearr_26251[(9)] = inst_26103__$1);

return statearr_26251;
})();
if(cljs.core.truth_(inst_26104)){
var statearr_26252_26329 = state_26235__$1;
(statearr_26252_26329[(1)] = (5));

} else {
var statearr_26253_26330 = state_26235__$1;
(statearr_26253_26330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (15))){
var inst_26115 = (state_26235[(13)]);
var inst_26112 = (state_26235[(15)]);
var inst_26113 = (state_26235[(16)]);
var inst_26114 = (state_26235[(17)]);
var inst_26130 = (state_26235[(2)]);
var inst_26131 = (inst_26115 + (1));
var tmp26247 = inst_26112;
var tmp26248 = inst_26113;
var tmp26249 = inst_26114;
var inst_26112__$1 = tmp26247;
var inst_26113__$1 = tmp26248;
var inst_26114__$1 = tmp26249;
var inst_26115__$1 = inst_26131;
var state_26235__$1 = (function (){var statearr_26254 = state_26235;
(statearr_26254[(13)] = inst_26115__$1);

(statearr_26254[(15)] = inst_26112__$1);

(statearr_26254[(16)] = inst_26113__$1);

(statearr_26254[(18)] = inst_26130);

(statearr_26254[(17)] = inst_26114__$1);

return statearr_26254;
})();
var statearr_26255_26331 = state_26235__$1;
(statearr_26255_26331[(2)] = null);

(statearr_26255_26331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (21))){
var inst_26157 = (state_26235[(2)]);
var state_26235__$1 = state_26235;
var statearr_26259_26332 = state_26235__$1;
(statearr_26259_26332[(2)] = inst_26157);

(statearr_26259_26332[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (31))){
var inst_26183 = (state_26235[(10)]);
var inst_26187 = done.call(null,null);
var inst_26188 = cljs.core.async.untap_STAR_.call(null,m,inst_26183);
var state_26235__$1 = (function (){var statearr_26260 = state_26235;
(statearr_26260[(19)] = inst_26187);

return statearr_26260;
})();
var statearr_26261_26333 = state_26235__$1;
(statearr_26261_26333[(2)] = inst_26188);

(statearr_26261_26333[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (32))){
var inst_26177 = (state_26235[(20)]);
var inst_26178 = (state_26235[(11)]);
var inst_26176 = (state_26235[(12)]);
var inst_26175 = (state_26235[(21)]);
var inst_26190 = (state_26235[(2)]);
var inst_26191 = (inst_26178 + (1));
var tmp26256 = inst_26177;
var tmp26257 = inst_26176;
var tmp26258 = inst_26175;
var inst_26175__$1 = tmp26258;
var inst_26176__$1 = tmp26257;
var inst_26177__$1 = tmp26256;
var inst_26178__$1 = inst_26191;
var state_26235__$1 = (function (){var statearr_26262 = state_26235;
(statearr_26262[(22)] = inst_26190);

(statearr_26262[(20)] = inst_26177__$1);

(statearr_26262[(11)] = inst_26178__$1);

(statearr_26262[(12)] = inst_26176__$1);

(statearr_26262[(21)] = inst_26175__$1);

return statearr_26262;
})();
var statearr_26263_26334 = state_26235__$1;
(statearr_26263_26334[(2)] = null);

(statearr_26263_26334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (40))){
var inst_26203 = (state_26235[(23)]);
var inst_26207 = done.call(null,null);
var inst_26208 = cljs.core.async.untap_STAR_.call(null,m,inst_26203);
var state_26235__$1 = (function (){var statearr_26264 = state_26235;
(statearr_26264[(24)] = inst_26207);

return statearr_26264;
})();
var statearr_26265_26335 = state_26235__$1;
(statearr_26265_26335[(2)] = inst_26208);

(statearr_26265_26335[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (33))){
var inst_26194 = (state_26235[(25)]);
var inst_26196 = cljs.core.chunked_seq_QMARK_.call(null,inst_26194);
var state_26235__$1 = state_26235;
if(inst_26196){
var statearr_26266_26336 = state_26235__$1;
(statearr_26266_26336[(1)] = (36));

} else {
var statearr_26267_26337 = state_26235__$1;
(statearr_26267_26337[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (13))){
var inst_26124 = (state_26235[(26)]);
var inst_26127 = cljs.core.async.close_BANG_.call(null,inst_26124);
var state_26235__$1 = state_26235;
var statearr_26268_26338 = state_26235__$1;
(statearr_26268_26338[(2)] = inst_26127);

(statearr_26268_26338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (22))){
var inst_26147 = (state_26235[(8)]);
var inst_26150 = cljs.core.async.close_BANG_.call(null,inst_26147);
var state_26235__$1 = state_26235;
var statearr_26269_26339 = state_26235__$1;
(statearr_26269_26339[(2)] = inst_26150);

(statearr_26269_26339[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (36))){
var inst_26194 = (state_26235[(25)]);
var inst_26198 = cljs.core.chunk_first.call(null,inst_26194);
var inst_26199 = cljs.core.chunk_rest.call(null,inst_26194);
var inst_26200 = cljs.core.count.call(null,inst_26198);
var inst_26175 = inst_26199;
var inst_26176 = inst_26198;
var inst_26177 = inst_26200;
var inst_26178 = (0);
var state_26235__$1 = (function (){var statearr_26270 = state_26235;
(statearr_26270[(20)] = inst_26177);

(statearr_26270[(11)] = inst_26178);

(statearr_26270[(12)] = inst_26176);

(statearr_26270[(21)] = inst_26175);

return statearr_26270;
})();
var statearr_26271_26340 = state_26235__$1;
(statearr_26271_26340[(2)] = null);

(statearr_26271_26340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (41))){
var inst_26194 = (state_26235[(25)]);
var inst_26210 = (state_26235[(2)]);
var inst_26211 = cljs.core.next.call(null,inst_26194);
var inst_26175 = inst_26211;
var inst_26176 = null;
var inst_26177 = (0);
var inst_26178 = (0);
var state_26235__$1 = (function (){var statearr_26272 = state_26235;
(statearr_26272[(20)] = inst_26177);

(statearr_26272[(11)] = inst_26178);

(statearr_26272[(12)] = inst_26176);

(statearr_26272[(27)] = inst_26210);

(statearr_26272[(21)] = inst_26175);

return statearr_26272;
})();
var statearr_26273_26341 = state_26235__$1;
(statearr_26273_26341[(2)] = null);

(statearr_26273_26341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (43))){
var state_26235__$1 = state_26235;
var statearr_26274_26342 = state_26235__$1;
(statearr_26274_26342[(2)] = null);

(statearr_26274_26342[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (29))){
var inst_26219 = (state_26235[(2)]);
var state_26235__$1 = state_26235;
var statearr_26275_26343 = state_26235__$1;
(statearr_26275_26343[(2)] = inst_26219);

(statearr_26275_26343[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (44))){
var inst_26228 = (state_26235[(2)]);
var state_26235__$1 = (function (){var statearr_26276 = state_26235;
(statearr_26276[(28)] = inst_26228);

return statearr_26276;
})();
var statearr_26277_26344 = state_26235__$1;
(statearr_26277_26344[(2)] = null);

(statearr_26277_26344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (6))){
var inst_26167 = (state_26235[(29)]);
var inst_26166 = cljs.core.deref.call(null,cs);
var inst_26167__$1 = cljs.core.keys.call(null,inst_26166);
var inst_26168 = cljs.core.count.call(null,inst_26167__$1);
var inst_26169 = cljs.core.reset_BANG_.call(null,dctr,inst_26168);
var inst_26174 = cljs.core.seq.call(null,inst_26167__$1);
var inst_26175 = inst_26174;
var inst_26176 = null;
var inst_26177 = (0);
var inst_26178 = (0);
var state_26235__$1 = (function (){var statearr_26278 = state_26235;
(statearr_26278[(20)] = inst_26177);

(statearr_26278[(30)] = inst_26169);

(statearr_26278[(11)] = inst_26178);

(statearr_26278[(12)] = inst_26176);

(statearr_26278[(29)] = inst_26167__$1);

(statearr_26278[(21)] = inst_26175);

return statearr_26278;
})();
var statearr_26279_26345 = state_26235__$1;
(statearr_26279_26345[(2)] = null);

(statearr_26279_26345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (28))){
var inst_26194 = (state_26235[(25)]);
var inst_26175 = (state_26235[(21)]);
var inst_26194__$1 = cljs.core.seq.call(null,inst_26175);
var state_26235__$1 = (function (){var statearr_26280 = state_26235;
(statearr_26280[(25)] = inst_26194__$1);

return statearr_26280;
})();
if(inst_26194__$1){
var statearr_26281_26346 = state_26235__$1;
(statearr_26281_26346[(1)] = (33));

} else {
var statearr_26282_26347 = state_26235__$1;
(statearr_26282_26347[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (25))){
var inst_26177 = (state_26235[(20)]);
var inst_26178 = (state_26235[(11)]);
var inst_26180 = (inst_26178 < inst_26177);
var inst_26181 = inst_26180;
var state_26235__$1 = state_26235;
if(cljs.core.truth_(inst_26181)){
var statearr_26283_26348 = state_26235__$1;
(statearr_26283_26348[(1)] = (27));

} else {
var statearr_26284_26349 = state_26235__$1;
(statearr_26284_26349[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (34))){
var state_26235__$1 = state_26235;
var statearr_26285_26350 = state_26235__$1;
(statearr_26285_26350[(2)] = null);

(statearr_26285_26350[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (17))){
var state_26235__$1 = state_26235;
var statearr_26286_26351 = state_26235__$1;
(statearr_26286_26351[(2)] = null);

(statearr_26286_26351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (3))){
var inst_26233 = (state_26235[(2)]);
var state_26235__$1 = state_26235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26235__$1,inst_26233);
} else {
if((state_val_26236 === (12))){
var inst_26162 = (state_26235[(2)]);
var state_26235__$1 = state_26235;
var statearr_26287_26352 = state_26235__$1;
(statearr_26287_26352[(2)] = inst_26162);

(statearr_26287_26352[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (2))){
var state_26235__$1 = state_26235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26235__$1,(4),ch);
} else {
if((state_val_26236 === (23))){
var state_26235__$1 = state_26235;
var statearr_26288_26353 = state_26235__$1;
(statearr_26288_26353[(2)] = null);

(statearr_26288_26353[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (35))){
var inst_26217 = (state_26235[(2)]);
var state_26235__$1 = state_26235;
var statearr_26289_26354 = state_26235__$1;
(statearr_26289_26354[(2)] = inst_26217);

(statearr_26289_26354[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (19))){
var inst_26134 = (state_26235[(7)]);
var inst_26138 = cljs.core.chunk_first.call(null,inst_26134);
var inst_26139 = cljs.core.chunk_rest.call(null,inst_26134);
var inst_26140 = cljs.core.count.call(null,inst_26138);
var inst_26112 = inst_26139;
var inst_26113 = inst_26138;
var inst_26114 = inst_26140;
var inst_26115 = (0);
var state_26235__$1 = (function (){var statearr_26290 = state_26235;
(statearr_26290[(13)] = inst_26115);

(statearr_26290[(15)] = inst_26112);

(statearr_26290[(16)] = inst_26113);

(statearr_26290[(17)] = inst_26114);

return statearr_26290;
})();
var statearr_26291_26355 = state_26235__$1;
(statearr_26291_26355[(2)] = null);

(statearr_26291_26355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (11))){
var inst_26112 = (state_26235[(15)]);
var inst_26134 = (state_26235[(7)]);
var inst_26134__$1 = cljs.core.seq.call(null,inst_26112);
var state_26235__$1 = (function (){var statearr_26292 = state_26235;
(statearr_26292[(7)] = inst_26134__$1);

return statearr_26292;
})();
if(inst_26134__$1){
var statearr_26293_26356 = state_26235__$1;
(statearr_26293_26356[(1)] = (16));

} else {
var statearr_26294_26357 = state_26235__$1;
(statearr_26294_26357[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (9))){
var inst_26164 = (state_26235[(2)]);
var state_26235__$1 = state_26235;
var statearr_26295_26358 = state_26235__$1;
(statearr_26295_26358[(2)] = inst_26164);

(statearr_26295_26358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (5))){
var inst_26110 = cljs.core.deref.call(null,cs);
var inst_26111 = cljs.core.seq.call(null,inst_26110);
var inst_26112 = inst_26111;
var inst_26113 = null;
var inst_26114 = (0);
var inst_26115 = (0);
var state_26235__$1 = (function (){var statearr_26296 = state_26235;
(statearr_26296[(13)] = inst_26115);

(statearr_26296[(15)] = inst_26112);

(statearr_26296[(16)] = inst_26113);

(statearr_26296[(17)] = inst_26114);

return statearr_26296;
})();
var statearr_26297_26359 = state_26235__$1;
(statearr_26297_26359[(2)] = null);

(statearr_26297_26359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (14))){
var state_26235__$1 = state_26235;
var statearr_26298_26360 = state_26235__$1;
(statearr_26298_26360[(2)] = null);

(statearr_26298_26360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (45))){
var inst_26225 = (state_26235[(2)]);
var state_26235__$1 = state_26235;
var statearr_26299_26361 = state_26235__$1;
(statearr_26299_26361[(2)] = inst_26225);

(statearr_26299_26361[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (26))){
var inst_26167 = (state_26235[(29)]);
var inst_26221 = (state_26235[(2)]);
var inst_26222 = cljs.core.seq.call(null,inst_26167);
var state_26235__$1 = (function (){var statearr_26300 = state_26235;
(statearr_26300[(31)] = inst_26221);

return statearr_26300;
})();
if(inst_26222){
var statearr_26301_26362 = state_26235__$1;
(statearr_26301_26362[(1)] = (42));

} else {
var statearr_26302_26363 = state_26235__$1;
(statearr_26302_26363[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (16))){
var inst_26134 = (state_26235[(7)]);
var inst_26136 = cljs.core.chunked_seq_QMARK_.call(null,inst_26134);
var state_26235__$1 = state_26235;
if(inst_26136){
var statearr_26303_26364 = state_26235__$1;
(statearr_26303_26364[(1)] = (19));

} else {
var statearr_26304_26365 = state_26235__$1;
(statearr_26304_26365[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (38))){
var inst_26214 = (state_26235[(2)]);
var state_26235__$1 = state_26235;
var statearr_26305_26366 = state_26235__$1;
(statearr_26305_26366[(2)] = inst_26214);

(statearr_26305_26366[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (30))){
var state_26235__$1 = state_26235;
var statearr_26306_26367 = state_26235__$1;
(statearr_26306_26367[(2)] = null);

(statearr_26306_26367[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (10))){
var inst_26115 = (state_26235[(13)]);
var inst_26113 = (state_26235[(16)]);
var inst_26123 = cljs.core._nth.call(null,inst_26113,inst_26115);
var inst_26124 = cljs.core.nth.call(null,inst_26123,(0),null);
var inst_26125 = cljs.core.nth.call(null,inst_26123,(1),null);
var state_26235__$1 = (function (){var statearr_26307 = state_26235;
(statearr_26307[(26)] = inst_26124);

return statearr_26307;
})();
if(cljs.core.truth_(inst_26125)){
var statearr_26308_26368 = state_26235__$1;
(statearr_26308_26368[(1)] = (13));

} else {
var statearr_26309_26369 = state_26235__$1;
(statearr_26309_26369[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (18))){
var inst_26160 = (state_26235[(2)]);
var state_26235__$1 = state_26235;
var statearr_26310_26370 = state_26235__$1;
(statearr_26310_26370[(2)] = inst_26160);

(statearr_26310_26370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (42))){
var state_26235__$1 = state_26235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26235__$1,(45),dchan);
} else {
if((state_val_26236 === (37))){
var inst_26103 = (state_26235[(9)]);
var inst_26194 = (state_26235[(25)]);
var inst_26203 = (state_26235[(23)]);
var inst_26203__$1 = cljs.core.first.call(null,inst_26194);
var inst_26204 = cljs.core.async.put_BANG_.call(null,inst_26203__$1,inst_26103,done);
var state_26235__$1 = (function (){var statearr_26311 = state_26235;
(statearr_26311[(23)] = inst_26203__$1);

return statearr_26311;
})();
if(cljs.core.truth_(inst_26204)){
var statearr_26312_26371 = state_26235__$1;
(statearr_26312_26371[(1)] = (39));

} else {
var statearr_26313_26372 = state_26235__$1;
(statearr_26313_26372[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26236 === (8))){
var inst_26115 = (state_26235[(13)]);
var inst_26114 = (state_26235[(17)]);
var inst_26117 = (inst_26115 < inst_26114);
var inst_26118 = inst_26117;
var state_26235__$1 = state_26235;
if(cljs.core.truth_(inst_26118)){
var statearr_26314_26373 = state_26235__$1;
(statearr_26314_26373[(1)] = (10));

} else {
var statearr_26315_26374 = state_26235__$1;
(statearr_26315_26374[(1)] = (11));

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
});})(c__25501__auto___26320,cs,m,dchan,dctr,done))
;
return ((function (switch__25410__auto__,c__25501__auto___26320,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25411__auto__ = null;
var cljs$core$async$mult_$_state_machine__25411__auto____0 = (function (){
var statearr_26316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26316[(0)] = cljs$core$async$mult_$_state_machine__25411__auto__);

(statearr_26316[(1)] = (1));

return statearr_26316;
});
var cljs$core$async$mult_$_state_machine__25411__auto____1 = (function (state_26235){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_26235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e26317){if((e26317 instanceof Object)){
var ex__25414__auto__ = e26317;
var statearr_26318_26375 = state_26235;
(statearr_26318_26375[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26376 = state_26235;
state_26235 = G__26376;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25411__auto__ = function(state_26235){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25411__auto____1.call(this,state_26235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25411__auto____0;
cljs$core$async$mult_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25411__auto____1;
return cljs$core$async$mult_$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___26320,cs,m,dchan,dctr,done))
})();
var state__25503__auto__ = (function (){var statearr_26319 = f__25502__auto__.call(null);
(statearr_26319[(6)] = c__25501__auto___26320);

return statearr_26319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___26320,cs,m,dchan,dctr,done))
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
var G__26378 = arguments.length;
switch (G__26378) {
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
var len__4531__auto___26390 = arguments.length;
var i__4532__auto___26391 = (0);
while(true){
if((i__4532__auto___26391 < len__4531__auto___26390)){
args__4534__auto__.push((arguments[i__4532__auto___26391]));

var G__26392 = (i__4532__auto___26391 + (1));
i__4532__auto___26391 = G__26392;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26384){
var map__26385 = p__26384;
var map__26385__$1 = ((((!((map__26385 == null)))?(((((map__26385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26385):map__26385);
var opts = map__26385__$1;
var statearr_26387_26393 = state;
(statearr_26387_26393[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__26385,map__26385__$1,opts){
return (function (val){
var statearr_26388_26394 = state;
(statearr_26388_26394[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26385,map__26385__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_26389_26395 = state;
(statearr_26389_26395[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26380){
var G__26381 = cljs.core.first.call(null,seq26380);
var seq26380__$1 = cljs.core.next.call(null,seq26380);
var G__26382 = cljs.core.first.call(null,seq26380__$1);
var seq26380__$2 = cljs.core.next.call(null,seq26380__$1);
var G__26383 = cljs.core.first.call(null,seq26380__$2);
var seq26380__$3 = cljs.core.next.call(null,seq26380__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26381,G__26382,G__26383,seq26380__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26396 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta26397){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta26397 = meta26397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26398,meta26397__$1){
var self__ = this;
var _26398__$1 = this;
return (new cljs.core.async.t_cljs$core$async26396(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta26397__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26398){
var self__ = this;
var _26398__$1 = this;
return self__.meta26397;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26396.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta26397","meta26397",-1811902916,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26396.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26396";

cljs.core.async.t_cljs$core$async26396.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26396");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26396.
 */
cljs.core.async.__GT_t_cljs$core$async26396 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26396(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26397){
return (new cljs.core.async.t_cljs$core$async26396(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26397));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26396(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25501__auto___26560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___26560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___26560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26500){
var state_val_26501 = (state_26500[(1)]);
if((state_val_26501 === (7))){
var inst_26415 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
var statearr_26502_26561 = state_26500__$1;
(statearr_26502_26561[(2)] = inst_26415);

(statearr_26502_26561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (20))){
var inst_26427 = (state_26500[(7)]);
var state_26500__$1 = state_26500;
var statearr_26503_26562 = state_26500__$1;
(statearr_26503_26562[(2)] = inst_26427);

(statearr_26503_26562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (27))){
var state_26500__$1 = state_26500;
var statearr_26504_26563 = state_26500__$1;
(statearr_26504_26563[(2)] = null);

(statearr_26504_26563[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (1))){
var inst_26402 = (state_26500[(8)]);
var inst_26402__$1 = calc_state.call(null);
var inst_26404 = (inst_26402__$1 == null);
var inst_26405 = cljs.core.not.call(null,inst_26404);
var state_26500__$1 = (function (){var statearr_26505 = state_26500;
(statearr_26505[(8)] = inst_26402__$1);

return statearr_26505;
})();
if(inst_26405){
var statearr_26506_26564 = state_26500__$1;
(statearr_26506_26564[(1)] = (2));

} else {
var statearr_26507_26565 = state_26500__$1;
(statearr_26507_26565[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (24))){
var inst_26460 = (state_26500[(9)]);
var inst_26451 = (state_26500[(10)]);
var inst_26474 = (state_26500[(11)]);
var inst_26474__$1 = inst_26451.call(null,inst_26460);
var state_26500__$1 = (function (){var statearr_26508 = state_26500;
(statearr_26508[(11)] = inst_26474__$1);

return statearr_26508;
})();
if(cljs.core.truth_(inst_26474__$1)){
var statearr_26509_26566 = state_26500__$1;
(statearr_26509_26566[(1)] = (29));

} else {
var statearr_26510_26567 = state_26500__$1;
(statearr_26510_26567[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (4))){
var inst_26418 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
if(cljs.core.truth_(inst_26418)){
var statearr_26511_26568 = state_26500__$1;
(statearr_26511_26568[(1)] = (8));

} else {
var statearr_26512_26569 = state_26500__$1;
(statearr_26512_26569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (15))){
var inst_26445 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
if(cljs.core.truth_(inst_26445)){
var statearr_26513_26570 = state_26500__$1;
(statearr_26513_26570[(1)] = (19));

} else {
var statearr_26514_26571 = state_26500__$1;
(statearr_26514_26571[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (21))){
var inst_26450 = (state_26500[(12)]);
var inst_26450__$1 = (state_26500[(2)]);
var inst_26451 = cljs.core.get.call(null,inst_26450__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26452 = cljs.core.get.call(null,inst_26450__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26453 = cljs.core.get.call(null,inst_26450__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26500__$1 = (function (){var statearr_26515 = state_26500;
(statearr_26515[(12)] = inst_26450__$1);

(statearr_26515[(10)] = inst_26451);

(statearr_26515[(13)] = inst_26452);

return statearr_26515;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26500__$1,(22),inst_26453);
} else {
if((state_val_26501 === (31))){
var inst_26482 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
if(cljs.core.truth_(inst_26482)){
var statearr_26516_26572 = state_26500__$1;
(statearr_26516_26572[(1)] = (32));

} else {
var statearr_26517_26573 = state_26500__$1;
(statearr_26517_26573[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (32))){
var inst_26459 = (state_26500[(14)]);
var state_26500__$1 = state_26500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26500__$1,(35),out,inst_26459);
} else {
if((state_val_26501 === (33))){
var inst_26450 = (state_26500[(12)]);
var inst_26427 = inst_26450;
var state_26500__$1 = (function (){var statearr_26518 = state_26500;
(statearr_26518[(7)] = inst_26427);

return statearr_26518;
})();
var statearr_26519_26574 = state_26500__$1;
(statearr_26519_26574[(2)] = null);

(statearr_26519_26574[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (13))){
var inst_26427 = (state_26500[(7)]);
var inst_26434 = inst_26427.cljs$lang$protocol_mask$partition0$;
var inst_26435 = (inst_26434 & (64));
var inst_26436 = inst_26427.cljs$core$ISeq$;
var inst_26437 = (cljs.core.PROTOCOL_SENTINEL === inst_26436);
var inst_26438 = ((inst_26435) || (inst_26437));
var state_26500__$1 = state_26500;
if(cljs.core.truth_(inst_26438)){
var statearr_26520_26575 = state_26500__$1;
(statearr_26520_26575[(1)] = (16));

} else {
var statearr_26521_26576 = state_26500__$1;
(statearr_26521_26576[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (22))){
var inst_26460 = (state_26500[(9)]);
var inst_26459 = (state_26500[(14)]);
var inst_26458 = (state_26500[(2)]);
var inst_26459__$1 = cljs.core.nth.call(null,inst_26458,(0),null);
var inst_26460__$1 = cljs.core.nth.call(null,inst_26458,(1),null);
var inst_26461 = (inst_26459__$1 == null);
var inst_26462 = cljs.core._EQ_.call(null,inst_26460__$1,change);
var inst_26463 = ((inst_26461) || (inst_26462));
var state_26500__$1 = (function (){var statearr_26522 = state_26500;
(statearr_26522[(9)] = inst_26460__$1);

(statearr_26522[(14)] = inst_26459__$1);

return statearr_26522;
})();
if(cljs.core.truth_(inst_26463)){
var statearr_26523_26577 = state_26500__$1;
(statearr_26523_26577[(1)] = (23));

} else {
var statearr_26524_26578 = state_26500__$1;
(statearr_26524_26578[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (36))){
var inst_26450 = (state_26500[(12)]);
var inst_26427 = inst_26450;
var state_26500__$1 = (function (){var statearr_26525 = state_26500;
(statearr_26525[(7)] = inst_26427);

return statearr_26525;
})();
var statearr_26526_26579 = state_26500__$1;
(statearr_26526_26579[(2)] = null);

(statearr_26526_26579[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (29))){
var inst_26474 = (state_26500[(11)]);
var state_26500__$1 = state_26500;
var statearr_26527_26580 = state_26500__$1;
(statearr_26527_26580[(2)] = inst_26474);

(statearr_26527_26580[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (6))){
var state_26500__$1 = state_26500;
var statearr_26528_26581 = state_26500__$1;
(statearr_26528_26581[(2)] = false);

(statearr_26528_26581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (28))){
var inst_26470 = (state_26500[(2)]);
var inst_26471 = calc_state.call(null);
var inst_26427 = inst_26471;
var state_26500__$1 = (function (){var statearr_26529 = state_26500;
(statearr_26529[(15)] = inst_26470);

(statearr_26529[(7)] = inst_26427);

return statearr_26529;
})();
var statearr_26530_26582 = state_26500__$1;
(statearr_26530_26582[(2)] = null);

(statearr_26530_26582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (25))){
var inst_26496 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
var statearr_26531_26583 = state_26500__$1;
(statearr_26531_26583[(2)] = inst_26496);

(statearr_26531_26583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (34))){
var inst_26494 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
var statearr_26532_26584 = state_26500__$1;
(statearr_26532_26584[(2)] = inst_26494);

(statearr_26532_26584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (17))){
var state_26500__$1 = state_26500;
var statearr_26533_26585 = state_26500__$1;
(statearr_26533_26585[(2)] = false);

(statearr_26533_26585[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (3))){
var state_26500__$1 = state_26500;
var statearr_26534_26586 = state_26500__$1;
(statearr_26534_26586[(2)] = false);

(statearr_26534_26586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (12))){
var inst_26498 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26500__$1,inst_26498);
} else {
if((state_val_26501 === (2))){
var inst_26402 = (state_26500[(8)]);
var inst_26407 = inst_26402.cljs$lang$protocol_mask$partition0$;
var inst_26408 = (inst_26407 & (64));
var inst_26409 = inst_26402.cljs$core$ISeq$;
var inst_26410 = (cljs.core.PROTOCOL_SENTINEL === inst_26409);
var inst_26411 = ((inst_26408) || (inst_26410));
var state_26500__$1 = state_26500;
if(cljs.core.truth_(inst_26411)){
var statearr_26535_26587 = state_26500__$1;
(statearr_26535_26587[(1)] = (5));

} else {
var statearr_26536_26588 = state_26500__$1;
(statearr_26536_26588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (23))){
var inst_26459 = (state_26500[(14)]);
var inst_26465 = (inst_26459 == null);
var state_26500__$1 = state_26500;
if(cljs.core.truth_(inst_26465)){
var statearr_26537_26589 = state_26500__$1;
(statearr_26537_26589[(1)] = (26));

} else {
var statearr_26538_26590 = state_26500__$1;
(statearr_26538_26590[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (35))){
var inst_26485 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
if(cljs.core.truth_(inst_26485)){
var statearr_26539_26591 = state_26500__$1;
(statearr_26539_26591[(1)] = (36));

} else {
var statearr_26540_26592 = state_26500__$1;
(statearr_26540_26592[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (19))){
var inst_26427 = (state_26500[(7)]);
var inst_26447 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26427);
var state_26500__$1 = state_26500;
var statearr_26541_26593 = state_26500__$1;
(statearr_26541_26593[(2)] = inst_26447);

(statearr_26541_26593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (11))){
var inst_26427 = (state_26500[(7)]);
var inst_26431 = (inst_26427 == null);
var inst_26432 = cljs.core.not.call(null,inst_26431);
var state_26500__$1 = state_26500;
if(inst_26432){
var statearr_26542_26594 = state_26500__$1;
(statearr_26542_26594[(1)] = (13));

} else {
var statearr_26543_26595 = state_26500__$1;
(statearr_26543_26595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (9))){
var inst_26402 = (state_26500[(8)]);
var state_26500__$1 = state_26500;
var statearr_26544_26596 = state_26500__$1;
(statearr_26544_26596[(2)] = inst_26402);

(statearr_26544_26596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (5))){
var state_26500__$1 = state_26500;
var statearr_26545_26597 = state_26500__$1;
(statearr_26545_26597[(2)] = true);

(statearr_26545_26597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (14))){
var state_26500__$1 = state_26500;
var statearr_26546_26598 = state_26500__$1;
(statearr_26546_26598[(2)] = false);

(statearr_26546_26598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (26))){
var inst_26460 = (state_26500[(9)]);
var inst_26467 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26460);
var state_26500__$1 = state_26500;
var statearr_26547_26599 = state_26500__$1;
(statearr_26547_26599[(2)] = inst_26467);

(statearr_26547_26599[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (16))){
var state_26500__$1 = state_26500;
var statearr_26548_26600 = state_26500__$1;
(statearr_26548_26600[(2)] = true);

(statearr_26548_26600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (38))){
var inst_26490 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
var statearr_26549_26601 = state_26500__$1;
(statearr_26549_26601[(2)] = inst_26490);

(statearr_26549_26601[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (30))){
var inst_26460 = (state_26500[(9)]);
var inst_26451 = (state_26500[(10)]);
var inst_26452 = (state_26500[(13)]);
var inst_26477 = cljs.core.empty_QMARK_.call(null,inst_26451);
var inst_26478 = inst_26452.call(null,inst_26460);
var inst_26479 = cljs.core.not.call(null,inst_26478);
var inst_26480 = ((inst_26477) && (inst_26479));
var state_26500__$1 = state_26500;
var statearr_26550_26602 = state_26500__$1;
(statearr_26550_26602[(2)] = inst_26480);

(statearr_26550_26602[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (10))){
var inst_26402 = (state_26500[(8)]);
var inst_26423 = (state_26500[(2)]);
var inst_26424 = cljs.core.get.call(null,inst_26423,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26425 = cljs.core.get.call(null,inst_26423,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26426 = cljs.core.get.call(null,inst_26423,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26427 = inst_26402;
var state_26500__$1 = (function (){var statearr_26551 = state_26500;
(statearr_26551[(16)] = inst_26426);

(statearr_26551[(17)] = inst_26424);

(statearr_26551[(7)] = inst_26427);

(statearr_26551[(18)] = inst_26425);

return statearr_26551;
})();
var statearr_26552_26603 = state_26500__$1;
(statearr_26552_26603[(2)] = null);

(statearr_26552_26603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (18))){
var inst_26442 = (state_26500[(2)]);
var state_26500__$1 = state_26500;
var statearr_26553_26604 = state_26500__$1;
(statearr_26553_26604[(2)] = inst_26442);

(statearr_26553_26604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (37))){
var state_26500__$1 = state_26500;
var statearr_26554_26605 = state_26500__$1;
(statearr_26554_26605[(2)] = null);

(statearr_26554_26605[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26501 === (8))){
var inst_26402 = (state_26500[(8)]);
var inst_26420 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26402);
var state_26500__$1 = state_26500;
var statearr_26555_26606 = state_26500__$1;
(statearr_26555_26606[(2)] = inst_26420);

(statearr_26555_26606[(1)] = (10));


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
});})(c__25501__auto___26560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25410__auto__,c__25501__auto___26560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25411__auto__ = null;
var cljs$core$async$mix_$_state_machine__25411__auto____0 = (function (){
var statearr_26556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26556[(0)] = cljs$core$async$mix_$_state_machine__25411__auto__);

(statearr_26556[(1)] = (1));

return statearr_26556;
});
var cljs$core$async$mix_$_state_machine__25411__auto____1 = (function (state_26500){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_26500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e26557){if((e26557 instanceof Object)){
var ex__25414__auto__ = e26557;
var statearr_26558_26607 = state_26500;
(statearr_26558_26607[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26608 = state_26500;
state_26500 = G__26608;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25411__auto__ = function(state_26500){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25411__auto____1.call(this,state_26500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25411__auto____0;
cljs$core$async$mix_$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25411__auto____1;
return cljs$core$async$mix_$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___26560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25503__auto__ = (function (){var statearr_26559 = f__25502__auto__.call(null);
(statearr_26559[(6)] = c__25501__auto___26560);

return statearr_26559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___26560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__26610 = arguments.length;
switch (G__26610) {
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
var G__26614 = arguments.length;
switch (G__26614) {
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
return (function (p1__26612_SHARP_){
if(cljs.core.truth_(p1__26612_SHARP_.call(null,topic))){
return p1__26612_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26612_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26615 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26616){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26616 = meta26616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26617,meta26616__$1){
var self__ = this;
var _26617__$1 = this;
return (new cljs.core.async.t_cljs$core$async26615(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26616__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26615.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26617){
var self__ = this;
var _26617__$1 = this;
return self__.meta26616;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26615.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26615.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26615.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26615.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26615.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26615.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26615.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26615.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26616","meta26616",-2041607350,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26615";

cljs.core.async.t_cljs$core$async26615.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26615");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26615.
 */
cljs.core.async.__GT_t_cljs$core$async26615 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26615(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26616){
return (new cljs.core.async.t_cljs$core$async26615(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26616));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26615(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25501__auto___26735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___26735,mults,ensure_mult,p){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___26735,mults,ensure_mult,p){
return (function (state_26689){
var state_val_26690 = (state_26689[(1)]);
if((state_val_26690 === (7))){
var inst_26685 = (state_26689[(2)]);
var state_26689__$1 = state_26689;
var statearr_26691_26736 = state_26689__$1;
(statearr_26691_26736[(2)] = inst_26685);

(statearr_26691_26736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (20))){
var state_26689__$1 = state_26689;
var statearr_26692_26737 = state_26689__$1;
(statearr_26692_26737[(2)] = null);

(statearr_26692_26737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (1))){
var state_26689__$1 = state_26689;
var statearr_26693_26738 = state_26689__$1;
(statearr_26693_26738[(2)] = null);

(statearr_26693_26738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (24))){
var inst_26668 = (state_26689[(7)]);
var inst_26677 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26668);
var state_26689__$1 = state_26689;
var statearr_26694_26739 = state_26689__$1;
(statearr_26694_26739[(2)] = inst_26677);

(statearr_26694_26739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (4))){
var inst_26620 = (state_26689[(8)]);
var inst_26620__$1 = (state_26689[(2)]);
var inst_26621 = (inst_26620__$1 == null);
var state_26689__$1 = (function (){var statearr_26695 = state_26689;
(statearr_26695[(8)] = inst_26620__$1);

return statearr_26695;
})();
if(cljs.core.truth_(inst_26621)){
var statearr_26696_26740 = state_26689__$1;
(statearr_26696_26740[(1)] = (5));

} else {
var statearr_26697_26741 = state_26689__$1;
(statearr_26697_26741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (15))){
var inst_26662 = (state_26689[(2)]);
var state_26689__$1 = state_26689;
var statearr_26698_26742 = state_26689__$1;
(statearr_26698_26742[(2)] = inst_26662);

(statearr_26698_26742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (21))){
var inst_26682 = (state_26689[(2)]);
var state_26689__$1 = (function (){var statearr_26699 = state_26689;
(statearr_26699[(9)] = inst_26682);

return statearr_26699;
})();
var statearr_26700_26743 = state_26689__$1;
(statearr_26700_26743[(2)] = null);

(statearr_26700_26743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (13))){
var inst_26644 = (state_26689[(10)]);
var inst_26646 = cljs.core.chunked_seq_QMARK_.call(null,inst_26644);
var state_26689__$1 = state_26689;
if(inst_26646){
var statearr_26701_26744 = state_26689__$1;
(statearr_26701_26744[(1)] = (16));

} else {
var statearr_26702_26745 = state_26689__$1;
(statearr_26702_26745[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (22))){
var inst_26674 = (state_26689[(2)]);
var state_26689__$1 = state_26689;
if(cljs.core.truth_(inst_26674)){
var statearr_26703_26746 = state_26689__$1;
(statearr_26703_26746[(1)] = (23));

} else {
var statearr_26704_26747 = state_26689__$1;
(statearr_26704_26747[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (6))){
var inst_26668 = (state_26689[(7)]);
var inst_26670 = (state_26689[(11)]);
var inst_26620 = (state_26689[(8)]);
var inst_26668__$1 = topic_fn.call(null,inst_26620);
var inst_26669 = cljs.core.deref.call(null,mults);
var inst_26670__$1 = cljs.core.get.call(null,inst_26669,inst_26668__$1);
var state_26689__$1 = (function (){var statearr_26705 = state_26689;
(statearr_26705[(7)] = inst_26668__$1);

(statearr_26705[(11)] = inst_26670__$1);

return statearr_26705;
})();
if(cljs.core.truth_(inst_26670__$1)){
var statearr_26706_26748 = state_26689__$1;
(statearr_26706_26748[(1)] = (19));

} else {
var statearr_26707_26749 = state_26689__$1;
(statearr_26707_26749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (25))){
var inst_26679 = (state_26689[(2)]);
var state_26689__$1 = state_26689;
var statearr_26708_26750 = state_26689__$1;
(statearr_26708_26750[(2)] = inst_26679);

(statearr_26708_26750[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (17))){
var inst_26644 = (state_26689[(10)]);
var inst_26653 = cljs.core.first.call(null,inst_26644);
var inst_26654 = cljs.core.async.muxch_STAR_.call(null,inst_26653);
var inst_26655 = cljs.core.async.close_BANG_.call(null,inst_26654);
var inst_26656 = cljs.core.next.call(null,inst_26644);
var inst_26630 = inst_26656;
var inst_26631 = null;
var inst_26632 = (0);
var inst_26633 = (0);
var state_26689__$1 = (function (){var statearr_26709 = state_26689;
(statearr_26709[(12)] = inst_26633);

(statearr_26709[(13)] = inst_26630);

(statearr_26709[(14)] = inst_26655);

(statearr_26709[(15)] = inst_26632);

(statearr_26709[(16)] = inst_26631);

return statearr_26709;
})();
var statearr_26710_26751 = state_26689__$1;
(statearr_26710_26751[(2)] = null);

(statearr_26710_26751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (3))){
var inst_26687 = (state_26689[(2)]);
var state_26689__$1 = state_26689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26689__$1,inst_26687);
} else {
if((state_val_26690 === (12))){
var inst_26664 = (state_26689[(2)]);
var state_26689__$1 = state_26689;
var statearr_26711_26752 = state_26689__$1;
(statearr_26711_26752[(2)] = inst_26664);

(statearr_26711_26752[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (2))){
var state_26689__$1 = state_26689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26689__$1,(4),ch);
} else {
if((state_val_26690 === (23))){
var state_26689__$1 = state_26689;
var statearr_26712_26753 = state_26689__$1;
(statearr_26712_26753[(2)] = null);

(statearr_26712_26753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (19))){
var inst_26670 = (state_26689[(11)]);
var inst_26620 = (state_26689[(8)]);
var inst_26672 = cljs.core.async.muxch_STAR_.call(null,inst_26670);
var state_26689__$1 = state_26689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26689__$1,(22),inst_26672,inst_26620);
} else {
if((state_val_26690 === (11))){
var inst_26644 = (state_26689[(10)]);
var inst_26630 = (state_26689[(13)]);
var inst_26644__$1 = cljs.core.seq.call(null,inst_26630);
var state_26689__$1 = (function (){var statearr_26713 = state_26689;
(statearr_26713[(10)] = inst_26644__$1);

return statearr_26713;
})();
if(inst_26644__$1){
var statearr_26714_26754 = state_26689__$1;
(statearr_26714_26754[(1)] = (13));

} else {
var statearr_26715_26755 = state_26689__$1;
(statearr_26715_26755[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (9))){
var inst_26666 = (state_26689[(2)]);
var state_26689__$1 = state_26689;
var statearr_26716_26756 = state_26689__$1;
(statearr_26716_26756[(2)] = inst_26666);

(statearr_26716_26756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (5))){
var inst_26627 = cljs.core.deref.call(null,mults);
var inst_26628 = cljs.core.vals.call(null,inst_26627);
var inst_26629 = cljs.core.seq.call(null,inst_26628);
var inst_26630 = inst_26629;
var inst_26631 = null;
var inst_26632 = (0);
var inst_26633 = (0);
var state_26689__$1 = (function (){var statearr_26717 = state_26689;
(statearr_26717[(12)] = inst_26633);

(statearr_26717[(13)] = inst_26630);

(statearr_26717[(15)] = inst_26632);

(statearr_26717[(16)] = inst_26631);

return statearr_26717;
})();
var statearr_26718_26757 = state_26689__$1;
(statearr_26718_26757[(2)] = null);

(statearr_26718_26757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (14))){
var state_26689__$1 = state_26689;
var statearr_26722_26758 = state_26689__$1;
(statearr_26722_26758[(2)] = null);

(statearr_26722_26758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (16))){
var inst_26644 = (state_26689[(10)]);
var inst_26648 = cljs.core.chunk_first.call(null,inst_26644);
var inst_26649 = cljs.core.chunk_rest.call(null,inst_26644);
var inst_26650 = cljs.core.count.call(null,inst_26648);
var inst_26630 = inst_26649;
var inst_26631 = inst_26648;
var inst_26632 = inst_26650;
var inst_26633 = (0);
var state_26689__$1 = (function (){var statearr_26723 = state_26689;
(statearr_26723[(12)] = inst_26633);

(statearr_26723[(13)] = inst_26630);

(statearr_26723[(15)] = inst_26632);

(statearr_26723[(16)] = inst_26631);

return statearr_26723;
})();
var statearr_26724_26759 = state_26689__$1;
(statearr_26724_26759[(2)] = null);

(statearr_26724_26759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (10))){
var inst_26633 = (state_26689[(12)]);
var inst_26630 = (state_26689[(13)]);
var inst_26632 = (state_26689[(15)]);
var inst_26631 = (state_26689[(16)]);
var inst_26638 = cljs.core._nth.call(null,inst_26631,inst_26633);
var inst_26639 = cljs.core.async.muxch_STAR_.call(null,inst_26638);
var inst_26640 = cljs.core.async.close_BANG_.call(null,inst_26639);
var inst_26641 = (inst_26633 + (1));
var tmp26719 = inst_26630;
var tmp26720 = inst_26632;
var tmp26721 = inst_26631;
var inst_26630__$1 = tmp26719;
var inst_26631__$1 = tmp26721;
var inst_26632__$1 = tmp26720;
var inst_26633__$1 = inst_26641;
var state_26689__$1 = (function (){var statearr_26725 = state_26689;
(statearr_26725[(12)] = inst_26633__$1);

(statearr_26725[(13)] = inst_26630__$1);

(statearr_26725[(15)] = inst_26632__$1);

(statearr_26725[(17)] = inst_26640);

(statearr_26725[(16)] = inst_26631__$1);

return statearr_26725;
})();
var statearr_26726_26760 = state_26689__$1;
(statearr_26726_26760[(2)] = null);

(statearr_26726_26760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (18))){
var inst_26659 = (state_26689[(2)]);
var state_26689__$1 = state_26689;
var statearr_26727_26761 = state_26689__$1;
(statearr_26727_26761[(2)] = inst_26659);

(statearr_26727_26761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26690 === (8))){
var inst_26633 = (state_26689[(12)]);
var inst_26632 = (state_26689[(15)]);
var inst_26635 = (inst_26633 < inst_26632);
var inst_26636 = inst_26635;
var state_26689__$1 = state_26689;
if(cljs.core.truth_(inst_26636)){
var statearr_26728_26762 = state_26689__$1;
(statearr_26728_26762[(1)] = (10));

} else {
var statearr_26729_26763 = state_26689__$1;
(statearr_26729_26763[(1)] = (11));

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
});})(c__25501__auto___26735,mults,ensure_mult,p))
;
return ((function (switch__25410__auto__,c__25501__auto___26735,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25411__auto__ = null;
var cljs$core$async$state_machine__25411__auto____0 = (function (){
var statearr_26730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26730[(0)] = cljs$core$async$state_machine__25411__auto__);

(statearr_26730[(1)] = (1));

return statearr_26730;
});
var cljs$core$async$state_machine__25411__auto____1 = (function (state_26689){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_26689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e26731){if((e26731 instanceof Object)){
var ex__25414__auto__ = e26731;
var statearr_26732_26764 = state_26689;
(statearr_26732_26764[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26765 = state_26689;
state_26689 = G__26765;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$state_machine__25411__auto__ = function(state_26689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25411__auto____1.call(this,state_26689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25411__auto____0;
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25411__auto____1;
return cljs$core$async$state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___26735,mults,ensure_mult,p))
})();
var state__25503__auto__ = (function (){var statearr_26733 = f__25502__auto__.call(null);
(statearr_26733[(6)] = c__25501__auto___26735);

return statearr_26733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___26735,mults,ensure_mult,p))
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
var G__26767 = arguments.length;
switch (G__26767) {
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
var G__26770 = arguments.length;
switch (G__26770) {
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
var G__26773 = arguments.length;
switch (G__26773) {
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
var c__25501__auto___26840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___26840,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___26840,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26812){
var state_val_26813 = (state_26812[(1)]);
if((state_val_26813 === (7))){
var state_26812__$1 = state_26812;
var statearr_26814_26841 = state_26812__$1;
(statearr_26814_26841[(2)] = null);

(statearr_26814_26841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26813 === (1))){
var state_26812__$1 = state_26812;
var statearr_26815_26842 = state_26812__$1;
(statearr_26815_26842[(2)] = null);

(statearr_26815_26842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26813 === (4))){
var inst_26776 = (state_26812[(7)]);
var inst_26778 = (inst_26776 < cnt);
var state_26812__$1 = state_26812;
if(cljs.core.truth_(inst_26778)){
var statearr_26816_26843 = state_26812__$1;
(statearr_26816_26843[(1)] = (6));

} else {
var statearr_26817_26844 = state_26812__$1;
(statearr_26817_26844[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26813 === (15))){
var inst_26808 = (state_26812[(2)]);
var state_26812__$1 = state_26812;
var statearr_26818_26845 = state_26812__$1;
(statearr_26818_26845[(2)] = inst_26808);

(statearr_26818_26845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26813 === (13))){
var inst_26801 = cljs.core.async.close_BANG_.call(null,out);
var state_26812__$1 = state_26812;
var statearr_26819_26846 = state_26812__$1;
(statearr_26819_26846[(2)] = inst_26801);

(statearr_26819_26846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26813 === (6))){
var state_26812__$1 = state_26812;
var statearr_26820_26847 = state_26812__$1;
(statearr_26820_26847[(2)] = null);

(statearr_26820_26847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26813 === (3))){
var inst_26810 = (state_26812[(2)]);
var state_26812__$1 = state_26812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26812__$1,inst_26810);
} else {
if((state_val_26813 === (12))){
var inst_26798 = (state_26812[(8)]);
var inst_26798__$1 = (state_26812[(2)]);
var inst_26799 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26798__$1);
var state_26812__$1 = (function (){var statearr_26821 = state_26812;
(statearr_26821[(8)] = inst_26798__$1);

return statearr_26821;
})();
if(cljs.core.truth_(inst_26799)){
var statearr_26822_26848 = state_26812__$1;
(statearr_26822_26848[(1)] = (13));

} else {
var statearr_26823_26849 = state_26812__$1;
(statearr_26823_26849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26813 === (2))){
var inst_26775 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26776 = (0);
var state_26812__$1 = (function (){var statearr_26824 = state_26812;
(statearr_26824[(7)] = inst_26776);

(statearr_26824[(9)] = inst_26775);

return statearr_26824;
})();
var statearr_26825_26850 = state_26812__$1;
(statearr_26825_26850[(2)] = null);

(statearr_26825_26850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26813 === (11))){
var inst_26776 = (state_26812[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26812,(10),Object,null,(9));
var inst_26785 = chs__$1.call(null,inst_26776);
var inst_26786 = done.call(null,inst_26776);
var inst_26787 = cljs.core.async.take_BANG_.call(null,inst_26785,inst_26786);
var state_26812__$1 = state_26812;
var statearr_26826_26851 = state_26812__$1;
(statearr_26826_26851[(2)] = inst_26787);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26812__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26813 === (9))){
var inst_26776 = (state_26812[(7)]);
var inst_26789 = (state_26812[(2)]);
var inst_26790 = (inst_26776 + (1));
var inst_26776__$1 = inst_26790;
var state_26812__$1 = (function (){var statearr_26827 = state_26812;
(statearr_26827[(10)] = inst_26789);

(statearr_26827[(7)] = inst_26776__$1);

return statearr_26827;
})();
var statearr_26828_26852 = state_26812__$1;
(statearr_26828_26852[(2)] = null);

(statearr_26828_26852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26813 === (5))){
var inst_26796 = (state_26812[(2)]);
var state_26812__$1 = (function (){var statearr_26829 = state_26812;
(statearr_26829[(11)] = inst_26796);

return statearr_26829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26812__$1,(12),dchan);
} else {
if((state_val_26813 === (14))){
var inst_26798 = (state_26812[(8)]);
var inst_26803 = cljs.core.apply.call(null,f,inst_26798);
var state_26812__$1 = state_26812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26812__$1,(16),out,inst_26803);
} else {
if((state_val_26813 === (16))){
var inst_26805 = (state_26812[(2)]);
var state_26812__$1 = (function (){var statearr_26830 = state_26812;
(statearr_26830[(12)] = inst_26805);

return statearr_26830;
})();
var statearr_26831_26853 = state_26812__$1;
(statearr_26831_26853[(2)] = null);

(statearr_26831_26853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26813 === (10))){
var inst_26780 = (state_26812[(2)]);
var inst_26781 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26812__$1 = (function (){var statearr_26832 = state_26812;
(statearr_26832[(13)] = inst_26780);

return statearr_26832;
})();
var statearr_26833_26854 = state_26812__$1;
(statearr_26833_26854[(2)] = inst_26781);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26812__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26813 === (8))){
var inst_26794 = (state_26812[(2)]);
var state_26812__$1 = state_26812;
var statearr_26834_26855 = state_26812__$1;
(statearr_26834_26855[(2)] = inst_26794);

(statearr_26834_26855[(1)] = (5));


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
});})(c__25501__auto___26840,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25410__auto__,c__25501__auto___26840,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25411__auto__ = null;
var cljs$core$async$state_machine__25411__auto____0 = (function (){
var statearr_26835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26835[(0)] = cljs$core$async$state_machine__25411__auto__);

(statearr_26835[(1)] = (1));

return statearr_26835;
});
var cljs$core$async$state_machine__25411__auto____1 = (function (state_26812){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_26812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e26836){if((e26836 instanceof Object)){
var ex__25414__auto__ = e26836;
var statearr_26837_26856 = state_26812;
(statearr_26837_26856[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26857 = state_26812;
state_26812 = G__26857;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$state_machine__25411__auto__ = function(state_26812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25411__auto____1.call(this,state_26812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25411__auto____0;
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25411__auto____1;
return cljs$core$async$state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___26840,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25503__auto__ = (function (){var statearr_26838 = f__25502__auto__.call(null);
(statearr_26838[(6)] = c__25501__auto___26840);

return statearr_26838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___26840,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__26860 = arguments.length;
switch (G__26860) {
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
var c__25501__auto___26914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___26914,out){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___26914,out){
return (function (state_26892){
var state_val_26893 = (state_26892[(1)]);
if((state_val_26893 === (7))){
var inst_26872 = (state_26892[(7)]);
var inst_26871 = (state_26892[(8)]);
var inst_26871__$1 = (state_26892[(2)]);
var inst_26872__$1 = cljs.core.nth.call(null,inst_26871__$1,(0),null);
var inst_26873 = cljs.core.nth.call(null,inst_26871__$1,(1),null);
var inst_26874 = (inst_26872__$1 == null);
var state_26892__$1 = (function (){var statearr_26894 = state_26892;
(statearr_26894[(9)] = inst_26873);

(statearr_26894[(7)] = inst_26872__$1);

(statearr_26894[(8)] = inst_26871__$1);

return statearr_26894;
})();
if(cljs.core.truth_(inst_26874)){
var statearr_26895_26915 = state_26892__$1;
(statearr_26895_26915[(1)] = (8));

} else {
var statearr_26896_26916 = state_26892__$1;
(statearr_26896_26916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (1))){
var inst_26861 = cljs.core.vec.call(null,chs);
var inst_26862 = inst_26861;
var state_26892__$1 = (function (){var statearr_26897 = state_26892;
(statearr_26897[(10)] = inst_26862);

return statearr_26897;
})();
var statearr_26898_26917 = state_26892__$1;
(statearr_26898_26917[(2)] = null);

(statearr_26898_26917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (4))){
var inst_26862 = (state_26892[(10)]);
var state_26892__$1 = state_26892;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26892__$1,(7),inst_26862);
} else {
if((state_val_26893 === (6))){
var inst_26888 = (state_26892[(2)]);
var state_26892__$1 = state_26892;
var statearr_26899_26918 = state_26892__$1;
(statearr_26899_26918[(2)] = inst_26888);

(statearr_26899_26918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (3))){
var inst_26890 = (state_26892[(2)]);
var state_26892__$1 = state_26892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26892__$1,inst_26890);
} else {
if((state_val_26893 === (2))){
var inst_26862 = (state_26892[(10)]);
var inst_26864 = cljs.core.count.call(null,inst_26862);
var inst_26865 = (inst_26864 > (0));
var state_26892__$1 = state_26892;
if(cljs.core.truth_(inst_26865)){
var statearr_26901_26919 = state_26892__$1;
(statearr_26901_26919[(1)] = (4));

} else {
var statearr_26902_26920 = state_26892__$1;
(statearr_26902_26920[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (11))){
var inst_26862 = (state_26892[(10)]);
var inst_26881 = (state_26892[(2)]);
var tmp26900 = inst_26862;
var inst_26862__$1 = tmp26900;
var state_26892__$1 = (function (){var statearr_26903 = state_26892;
(statearr_26903[(10)] = inst_26862__$1);

(statearr_26903[(11)] = inst_26881);

return statearr_26903;
})();
var statearr_26904_26921 = state_26892__$1;
(statearr_26904_26921[(2)] = null);

(statearr_26904_26921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (9))){
var inst_26872 = (state_26892[(7)]);
var state_26892__$1 = state_26892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26892__$1,(11),out,inst_26872);
} else {
if((state_val_26893 === (5))){
var inst_26886 = cljs.core.async.close_BANG_.call(null,out);
var state_26892__$1 = state_26892;
var statearr_26905_26922 = state_26892__$1;
(statearr_26905_26922[(2)] = inst_26886);

(statearr_26905_26922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (10))){
var inst_26884 = (state_26892[(2)]);
var state_26892__$1 = state_26892;
var statearr_26906_26923 = state_26892__$1;
(statearr_26906_26923[(2)] = inst_26884);

(statearr_26906_26923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26893 === (8))){
var inst_26873 = (state_26892[(9)]);
var inst_26862 = (state_26892[(10)]);
var inst_26872 = (state_26892[(7)]);
var inst_26871 = (state_26892[(8)]);
var inst_26876 = (function (){var cs = inst_26862;
var vec__26867 = inst_26871;
var v = inst_26872;
var c = inst_26873;
return ((function (cs,vec__26867,v,c,inst_26873,inst_26862,inst_26872,inst_26871,state_val_26893,c__25501__auto___26914,out){
return (function (p1__26858_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26858_SHARP_);
});
;})(cs,vec__26867,v,c,inst_26873,inst_26862,inst_26872,inst_26871,state_val_26893,c__25501__auto___26914,out))
})();
var inst_26877 = cljs.core.filterv.call(null,inst_26876,inst_26862);
var inst_26862__$1 = inst_26877;
var state_26892__$1 = (function (){var statearr_26907 = state_26892;
(statearr_26907[(10)] = inst_26862__$1);

return statearr_26907;
})();
var statearr_26908_26924 = state_26892__$1;
(statearr_26908_26924[(2)] = null);

(statearr_26908_26924[(1)] = (2));


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
});})(c__25501__auto___26914,out))
;
return ((function (switch__25410__auto__,c__25501__auto___26914,out){
return (function() {
var cljs$core$async$state_machine__25411__auto__ = null;
var cljs$core$async$state_machine__25411__auto____0 = (function (){
var statearr_26909 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26909[(0)] = cljs$core$async$state_machine__25411__auto__);

(statearr_26909[(1)] = (1));

return statearr_26909;
});
var cljs$core$async$state_machine__25411__auto____1 = (function (state_26892){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_26892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e26910){if((e26910 instanceof Object)){
var ex__25414__auto__ = e26910;
var statearr_26911_26925 = state_26892;
(statearr_26911_26925[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26926 = state_26892;
state_26892 = G__26926;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$state_machine__25411__auto__ = function(state_26892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25411__auto____1.call(this,state_26892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25411__auto____0;
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25411__auto____1;
return cljs$core$async$state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___26914,out))
})();
var state__25503__auto__ = (function (){var statearr_26912 = f__25502__auto__.call(null);
(statearr_26912[(6)] = c__25501__auto___26914);

return statearr_26912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___26914,out))
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
var G__26928 = arguments.length;
switch (G__26928) {
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
var c__25501__auto___26973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___26973,out){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___26973,out){
return (function (state_26952){
var state_val_26953 = (state_26952[(1)]);
if((state_val_26953 === (7))){
var inst_26934 = (state_26952[(7)]);
var inst_26934__$1 = (state_26952[(2)]);
var inst_26935 = (inst_26934__$1 == null);
var inst_26936 = cljs.core.not.call(null,inst_26935);
var state_26952__$1 = (function (){var statearr_26954 = state_26952;
(statearr_26954[(7)] = inst_26934__$1);

return statearr_26954;
})();
if(inst_26936){
var statearr_26955_26974 = state_26952__$1;
(statearr_26955_26974[(1)] = (8));

} else {
var statearr_26956_26975 = state_26952__$1;
(statearr_26956_26975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (1))){
var inst_26929 = (0);
var state_26952__$1 = (function (){var statearr_26957 = state_26952;
(statearr_26957[(8)] = inst_26929);

return statearr_26957;
})();
var statearr_26958_26976 = state_26952__$1;
(statearr_26958_26976[(2)] = null);

(statearr_26958_26976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (4))){
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26952__$1,(7),ch);
} else {
if((state_val_26953 === (6))){
var inst_26947 = (state_26952[(2)]);
var state_26952__$1 = state_26952;
var statearr_26959_26977 = state_26952__$1;
(statearr_26959_26977[(2)] = inst_26947);

(statearr_26959_26977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (3))){
var inst_26949 = (state_26952[(2)]);
var inst_26950 = cljs.core.async.close_BANG_.call(null,out);
var state_26952__$1 = (function (){var statearr_26960 = state_26952;
(statearr_26960[(9)] = inst_26949);

return statearr_26960;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26952__$1,inst_26950);
} else {
if((state_val_26953 === (2))){
var inst_26929 = (state_26952[(8)]);
var inst_26931 = (inst_26929 < n);
var state_26952__$1 = state_26952;
if(cljs.core.truth_(inst_26931)){
var statearr_26961_26978 = state_26952__$1;
(statearr_26961_26978[(1)] = (4));

} else {
var statearr_26962_26979 = state_26952__$1;
(statearr_26962_26979[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (11))){
var inst_26929 = (state_26952[(8)]);
var inst_26939 = (state_26952[(2)]);
var inst_26940 = (inst_26929 + (1));
var inst_26929__$1 = inst_26940;
var state_26952__$1 = (function (){var statearr_26963 = state_26952;
(statearr_26963[(10)] = inst_26939);

(statearr_26963[(8)] = inst_26929__$1);

return statearr_26963;
})();
var statearr_26964_26980 = state_26952__$1;
(statearr_26964_26980[(2)] = null);

(statearr_26964_26980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (9))){
var state_26952__$1 = state_26952;
var statearr_26965_26981 = state_26952__$1;
(statearr_26965_26981[(2)] = null);

(statearr_26965_26981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (5))){
var state_26952__$1 = state_26952;
var statearr_26966_26982 = state_26952__$1;
(statearr_26966_26982[(2)] = null);

(statearr_26966_26982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (10))){
var inst_26944 = (state_26952[(2)]);
var state_26952__$1 = state_26952;
var statearr_26967_26983 = state_26952__$1;
(statearr_26967_26983[(2)] = inst_26944);

(statearr_26967_26983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (8))){
var inst_26934 = (state_26952[(7)]);
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26952__$1,(11),out,inst_26934);
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
});})(c__25501__auto___26973,out))
;
return ((function (switch__25410__auto__,c__25501__auto___26973,out){
return (function() {
var cljs$core$async$state_machine__25411__auto__ = null;
var cljs$core$async$state_machine__25411__auto____0 = (function (){
var statearr_26968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26968[(0)] = cljs$core$async$state_machine__25411__auto__);

(statearr_26968[(1)] = (1));

return statearr_26968;
});
var cljs$core$async$state_machine__25411__auto____1 = (function (state_26952){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_26952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e26969){if((e26969 instanceof Object)){
var ex__25414__auto__ = e26969;
var statearr_26970_26984 = state_26952;
(statearr_26970_26984[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26985 = state_26952;
state_26952 = G__26985;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$state_machine__25411__auto__ = function(state_26952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25411__auto____1.call(this,state_26952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25411__auto____0;
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25411__auto____1;
return cljs$core$async$state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___26973,out))
})();
var state__25503__auto__ = (function (){var statearr_26971 = f__25502__auto__.call(null);
(statearr_26971[(6)] = c__25501__auto___26973);

return statearr_26971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___26973,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26987 = (function (f,ch,meta26988){
this.f = f;
this.ch = ch;
this.meta26988 = meta26988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26989,meta26988__$1){
var self__ = this;
var _26989__$1 = this;
return (new cljs.core.async.t_cljs$core$async26987(self__.f,self__.ch,meta26988__$1));
});

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26989){
var self__ = this;
var _26989__$1 = this;
return self__.meta26988;
});

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26990 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26990 = (function (f,ch,meta26988,_,fn1,meta26991){
this.f = f;
this.ch = ch;
this.meta26988 = meta26988;
this._ = _;
this.fn1 = fn1;
this.meta26991 = meta26991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26992,meta26991__$1){
var self__ = this;
var _26992__$1 = this;
return (new cljs.core.async.t_cljs$core$async26990(self__.f,self__.ch,self__.meta26988,self__._,self__.fn1,meta26991__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26992){
var self__ = this;
var _26992__$1 = this;
return self__.meta26991;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26990.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26990.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26986_SHARP_){
return f1.call(null,(((p1__26986_SHARP_ == null))?null:self__.f.call(null,p1__26986_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26990.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26988","meta26988",1882056860,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26987","cljs.core.async/t_cljs$core$async26987",1928219069,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26991","meta26991",1960004829,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26990";

cljs.core.async.t_cljs$core$async26990.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26990");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26990.
 */
cljs.core.async.__GT_t_cljs$core$async26990 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26990(f__$1,ch__$1,meta26988__$1,___$2,fn1__$1,meta26991){
return (new cljs.core.async.t_cljs$core$async26990(f__$1,ch__$1,meta26988__$1,___$2,fn1__$1,meta26991));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26990(self__.f,self__.ch,self__.meta26988,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26988","meta26988",1882056860,null)], null);
});

cljs.core.async.t_cljs$core$async26987.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26987";

cljs.core.async.t_cljs$core$async26987.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26987");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26987.
 */
cljs.core.async.__GT_t_cljs$core$async26987 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26987(f__$1,ch__$1,meta26988){
return (new cljs.core.async.t_cljs$core$async26987(f__$1,ch__$1,meta26988));
});

}

return (new cljs.core.async.t_cljs$core$async26987(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26993 = (function (f,ch,meta26994){
this.f = f;
this.ch = ch;
this.meta26994 = meta26994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26995,meta26994__$1){
var self__ = this;
var _26995__$1 = this;
return (new cljs.core.async.t_cljs$core$async26993(self__.f,self__.ch,meta26994__$1));
});

cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26995){
var self__ = this;
var _26995__$1 = this;
return self__.meta26994;
});

cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26993.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26994","meta26994",543799445,null)], null);
});

cljs.core.async.t_cljs$core$async26993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26993";

cljs.core.async.t_cljs$core$async26993.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26993");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26993.
 */
cljs.core.async.__GT_t_cljs$core$async26993 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26993(f__$1,ch__$1,meta26994){
return (new cljs.core.async.t_cljs$core$async26993(f__$1,ch__$1,meta26994));
});

}

return (new cljs.core.async.t_cljs$core$async26993(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26996 = (function (p,ch,meta26997){
this.p = p;
this.ch = ch;
this.meta26997 = meta26997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26998,meta26997__$1){
var self__ = this;
var _26998__$1 = this;
return (new cljs.core.async.t_cljs$core$async26996(self__.p,self__.ch,meta26997__$1));
});

cljs.core.async.t_cljs$core$async26996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26998){
var self__ = this;
var _26998__$1 = this;
return self__.meta26997;
});

cljs.core.async.t_cljs$core$async26996.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26996.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26996.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26996.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26996.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26996.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26996.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26997","meta26997",-100354372,null)], null);
});

cljs.core.async.t_cljs$core$async26996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26996";

cljs.core.async.t_cljs$core$async26996.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26996");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26996.
 */
cljs.core.async.__GT_t_cljs$core$async26996 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26996(p__$1,ch__$1,meta26997){
return (new cljs.core.async.t_cljs$core$async26996(p__$1,ch__$1,meta26997));
});

}

return (new cljs.core.async.t_cljs$core$async26996(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27000 = arguments.length;
switch (G__27000) {
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
var c__25501__auto___27040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___27040,out){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___27040,out){
return (function (state_27021){
var state_val_27022 = (state_27021[(1)]);
if((state_val_27022 === (7))){
var inst_27017 = (state_27021[(2)]);
var state_27021__$1 = state_27021;
var statearr_27023_27041 = state_27021__$1;
(statearr_27023_27041[(2)] = inst_27017);

(statearr_27023_27041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27022 === (1))){
var state_27021__$1 = state_27021;
var statearr_27024_27042 = state_27021__$1;
(statearr_27024_27042[(2)] = null);

(statearr_27024_27042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27022 === (4))){
var inst_27003 = (state_27021[(7)]);
var inst_27003__$1 = (state_27021[(2)]);
var inst_27004 = (inst_27003__$1 == null);
var state_27021__$1 = (function (){var statearr_27025 = state_27021;
(statearr_27025[(7)] = inst_27003__$1);

return statearr_27025;
})();
if(cljs.core.truth_(inst_27004)){
var statearr_27026_27043 = state_27021__$1;
(statearr_27026_27043[(1)] = (5));

} else {
var statearr_27027_27044 = state_27021__$1;
(statearr_27027_27044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27022 === (6))){
var inst_27003 = (state_27021[(7)]);
var inst_27008 = p.call(null,inst_27003);
var state_27021__$1 = state_27021;
if(cljs.core.truth_(inst_27008)){
var statearr_27028_27045 = state_27021__$1;
(statearr_27028_27045[(1)] = (8));

} else {
var statearr_27029_27046 = state_27021__$1;
(statearr_27029_27046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27022 === (3))){
var inst_27019 = (state_27021[(2)]);
var state_27021__$1 = state_27021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27021__$1,inst_27019);
} else {
if((state_val_27022 === (2))){
var state_27021__$1 = state_27021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27021__$1,(4),ch);
} else {
if((state_val_27022 === (11))){
var inst_27011 = (state_27021[(2)]);
var state_27021__$1 = state_27021;
var statearr_27030_27047 = state_27021__$1;
(statearr_27030_27047[(2)] = inst_27011);

(statearr_27030_27047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27022 === (9))){
var state_27021__$1 = state_27021;
var statearr_27031_27048 = state_27021__$1;
(statearr_27031_27048[(2)] = null);

(statearr_27031_27048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27022 === (5))){
var inst_27006 = cljs.core.async.close_BANG_.call(null,out);
var state_27021__$1 = state_27021;
var statearr_27032_27049 = state_27021__$1;
(statearr_27032_27049[(2)] = inst_27006);

(statearr_27032_27049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27022 === (10))){
var inst_27014 = (state_27021[(2)]);
var state_27021__$1 = (function (){var statearr_27033 = state_27021;
(statearr_27033[(8)] = inst_27014);

return statearr_27033;
})();
var statearr_27034_27050 = state_27021__$1;
(statearr_27034_27050[(2)] = null);

(statearr_27034_27050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27022 === (8))){
var inst_27003 = (state_27021[(7)]);
var state_27021__$1 = state_27021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27021__$1,(11),out,inst_27003);
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
});})(c__25501__auto___27040,out))
;
return ((function (switch__25410__auto__,c__25501__auto___27040,out){
return (function() {
var cljs$core$async$state_machine__25411__auto__ = null;
var cljs$core$async$state_machine__25411__auto____0 = (function (){
var statearr_27035 = [null,null,null,null,null,null,null,null,null];
(statearr_27035[(0)] = cljs$core$async$state_machine__25411__auto__);

(statearr_27035[(1)] = (1));

return statearr_27035;
});
var cljs$core$async$state_machine__25411__auto____1 = (function (state_27021){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_27021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e27036){if((e27036 instanceof Object)){
var ex__25414__auto__ = e27036;
var statearr_27037_27051 = state_27021;
(statearr_27037_27051[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27052 = state_27021;
state_27021 = G__27052;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$state_machine__25411__auto__ = function(state_27021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25411__auto____1.call(this,state_27021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25411__auto____0;
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25411__auto____1;
return cljs$core$async$state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___27040,out))
})();
var state__25503__auto__ = (function (){var statearr_27038 = f__25502__auto__.call(null);
(statearr_27038[(6)] = c__25501__auto___27040);

return statearr_27038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___27040,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27054 = arguments.length;
switch (G__27054) {
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
var c__25501__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto__){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto__){
return (function (state_27117){
var state_val_27118 = (state_27117[(1)]);
if((state_val_27118 === (7))){
var inst_27113 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
var statearr_27119_27157 = state_27117__$1;
(statearr_27119_27157[(2)] = inst_27113);

(statearr_27119_27157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (20))){
var inst_27083 = (state_27117[(7)]);
var inst_27094 = (state_27117[(2)]);
var inst_27095 = cljs.core.next.call(null,inst_27083);
var inst_27069 = inst_27095;
var inst_27070 = null;
var inst_27071 = (0);
var inst_27072 = (0);
var state_27117__$1 = (function (){var statearr_27120 = state_27117;
(statearr_27120[(8)] = inst_27094);

(statearr_27120[(9)] = inst_27071);

(statearr_27120[(10)] = inst_27070);

(statearr_27120[(11)] = inst_27069);

(statearr_27120[(12)] = inst_27072);

return statearr_27120;
})();
var statearr_27121_27158 = state_27117__$1;
(statearr_27121_27158[(2)] = null);

(statearr_27121_27158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (1))){
var state_27117__$1 = state_27117;
var statearr_27122_27159 = state_27117__$1;
(statearr_27122_27159[(2)] = null);

(statearr_27122_27159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (4))){
var inst_27058 = (state_27117[(13)]);
var inst_27058__$1 = (state_27117[(2)]);
var inst_27059 = (inst_27058__$1 == null);
var state_27117__$1 = (function (){var statearr_27123 = state_27117;
(statearr_27123[(13)] = inst_27058__$1);

return statearr_27123;
})();
if(cljs.core.truth_(inst_27059)){
var statearr_27124_27160 = state_27117__$1;
(statearr_27124_27160[(1)] = (5));

} else {
var statearr_27125_27161 = state_27117__$1;
(statearr_27125_27161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (15))){
var state_27117__$1 = state_27117;
var statearr_27129_27162 = state_27117__$1;
(statearr_27129_27162[(2)] = null);

(statearr_27129_27162[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (21))){
var state_27117__$1 = state_27117;
var statearr_27130_27163 = state_27117__$1;
(statearr_27130_27163[(2)] = null);

(statearr_27130_27163[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (13))){
var inst_27071 = (state_27117[(9)]);
var inst_27070 = (state_27117[(10)]);
var inst_27069 = (state_27117[(11)]);
var inst_27072 = (state_27117[(12)]);
var inst_27079 = (state_27117[(2)]);
var inst_27080 = (inst_27072 + (1));
var tmp27126 = inst_27071;
var tmp27127 = inst_27070;
var tmp27128 = inst_27069;
var inst_27069__$1 = tmp27128;
var inst_27070__$1 = tmp27127;
var inst_27071__$1 = tmp27126;
var inst_27072__$1 = inst_27080;
var state_27117__$1 = (function (){var statearr_27131 = state_27117;
(statearr_27131[(9)] = inst_27071__$1);

(statearr_27131[(10)] = inst_27070__$1);

(statearr_27131[(11)] = inst_27069__$1);

(statearr_27131[(14)] = inst_27079);

(statearr_27131[(12)] = inst_27072__$1);

return statearr_27131;
})();
var statearr_27132_27164 = state_27117__$1;
(statearr_27132_27164[(2)] = null);

(statearr_27132_27164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (22))){
var state_27117__$1 = state_27117;
var statearr_27133_27165 = state_27117__$1;
(statearr_27133_27165[(2)] = null);

(statearr_27133_27165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (6))){
var inst_27058 = (state_27117[(13)]);
var inst_27067 = f.call(null,inst_27058);
var inst_27068 = cljs.core.seq.call(null,inst_27067);
var inst_27069 = inst_27068;
var inst_27070 = null;
var inst_27071 = (0);
var inst_27072 = (0);
var state_27117__$1 = (function (){var statearr_27134 = state_27117;
(statearr_27134[(9)] = inst_27071);

(statearr_27134[(10)] = inst_27070);

(statearr_27134[(11)] = inst_27069);

(statearr_27134[(12)] = inst_27072);

return statearr_27134;
})();
var statearr_27135_27166 = state_27117__$1;
(statearr_27135_27166[(2)] = null);

(statearr_27135_27166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (17))){
var inst_27083 = (state_27117[(7)]);
var inst_27087 = cljs.core.chunk_first.call(null,inst_27083);
var inst_27088 = cljs.core.chunk_rest.call(null,inst_27083);
var inst_27089 = cljs.core.count.call(null,inst_27087);
var inst_27069 = inst_27088;
var inst_27070 = inst_27087;
var inst_27071 = inst_27089;
var inst_27072 = (0);
var state_27117__$1 = (function (){var statearr_27136 = state_27117;
(statearr_27136[(9)] = inst_27071);

(statearr_27136[(10)] = inst_27070);

(statearr_27136[(11)] = inst_27069);

(statearr_27136[(12)] = inst_27072);

return statearr_27136;
})();
var statearr_27137_27167 = state_27117__$1;
(statearr_27137_27167[(2)] = null);

(statearr_27137_27167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (3))){
var inst_27115 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27117__$1,inst_27115);
} else {
if((state_val_27118 === (12))){
var inst_27103 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
var statearr_27138_27168 = state_27117__$1;
(statearr_27138_27168[(2)] = inst_27103);

(statearr_27138_27168[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (2))){
var state_27117__$1 = state_27117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27117__$1,(4),in$);
} else {
if((state_val_27118 === (23))){
var inst_27111 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
var statearr_27139_27169 = state_27117__$1;
(statearr_27139_27169[(2)] = inst_27111);

(statearr_27139_27169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (19))){
var inst_27098 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
var statearr_27140_27170 = state_27117__$1;
(statearr_27140_27170[(2)] = inst_27098);

(statearr_27140_27170[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (11))){
var inst_27083 = (state_27117[(7)]);
var inst_27069 = (state_27117[(11)]);
var inst_27083__$1 = cljs.core.seq.call(null,inst_27069);
var state_27117__$1 = (function (){var statearr_27141 = state_27117;
(statearr_27141[(7)] = inst_27083__$1);

return statearr_27141;
})();
if(inst_27083__$1){
var statearr_27142_27171 = state_27117__$1;
(statearr_27142_27171[(1)] = (14));

} else {
var statearr_27143_27172 = state_27117__$1;
(statearr_27143_27172[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (9))){
var inst_27105 = (state_27117[(2)]);
var inst_27106 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27117__$1 = (function (){var statearr_27144 = state_27117;
(statearr_27144[(15)] = inst_27105);

return statearr_27144;
})();
if(cljs.core.truth_(inst_27106)){
var statearr_27145_27173 = state_27117__$1;
(statearr_27145_27173[(1)] = (21));

} else {
var statearr_27146_27174 = state_27117__$1;
(statearr_27146_27174[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (5))){
var inst_27061 = cljs.core.async.close_BANG_.call(null,out);
var state_27117__$1 = state_27117;
var statearr_27147_27175 = state_27117__$1;
(statearr_27147_27175[(2)] = inst_27061);

(statearr_27147_27175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (14))){
var inst_27083 = (state_27117[(7)]);
var inst_27085 = cljs.core.chunked_seq_QMARK_.call(null,inst_27083);
var state_27117__$1 = state_27117;
if(inst_27085){
var statearr_27148_27176 = state_27117__$1;
(statearr_27148_27176[(1)] = (17));

} else {
var statearr_27149_27177 = state_27117__$1;
(statearr_27149_27177[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (16))){
var inst_27101 = (state_27117[(2)]);
var state_27117__$1 = state_27117;
var statearr_27150_27178 = state_27117__$1;
(statearr_27150_27178[(2)] = inst_27101);

(statearr_27150_27178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27118 === (10))){
var inst_27070 = (state_27117[(10)]);
var inst_27072 = (state_27117[(12)]);
var inst_27077 = cljs.core._nth.call(null,inst_27070,inst_27072);
var state_27117__$1 = state_27117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27117__$1,(13),out,inst_27077);
} else {
if((state_val_27118 === (18))){
var inst_27083 = (state_27117[(7)]);
var inst_27092 = cljs.core.first.call(null,inst_27083);
var state_27117__$1 = state_27117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27117__$1,(20),out,inst_27092);
} else {
if((state_val_27118 === (8))){
var inst_27071 = (state_27117[(9)]);
var inst_27072 = (state_27117[(12)]);
var inst_27074 = (inst_27072 < inst_27071);
var inst_27075 = inst_27074;
var state_27117__$1 = state_27117;
if(cljs.core.truth_(inst_27075)){
var statearr_27151_27179 = state_27117__$1;
(statearr_27151_27179[(1)] = (10));

} else {
var statearr_27152_27180 = state_27117__$1;
(statearr_27152_27180[(1)] = (11));

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
});})(c__25501__auto__))
;
return ((function (switch__25410__auto__,c__25501__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25411__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25411__auto____0 = (function (){
var statearr_27153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27153[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25411__auto__);

(statearr_27153[(1)] = (1));

return statearr_27153;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25411__auto____1 = (function (state_27117){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_27117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e27154){if((e27154 instanceof Object)){
var ex__25414__auto__ = e27154;
var statearr_27155_27181 = state_27117;
(statearr_27155_27181[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27182 = state_27117;
state_27117 = G__27182;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25411__auto__ = function(state_27117){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25411__auto____1.call(this,state_27117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25411__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25411__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto__))
})();
var state__25503__auto__ = (function (){var statearr_27156 = f__25502__auto__.call(null);
(statearr_27156[(6)] = c__25501__auto__);

return statearr_27156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto__))
);

return c__25501__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27184 = arguments.length;
switch (G__27184) {
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
var G__27187 = arguments.length;
switch (G__27187) {
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
var G__27190 = arguments.length;
switch (G__27190) {
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
var c__25501__auto___27237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___27237,out){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___27237,out){
return (function (state_27214){
var state_val_27215 = (state_27214[(1)]);
if((state_val_27215 === (7))){
var inst_27209 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27216_27238 = state_27214__$1;
(statearr_27216_27238[(2)] = inst_27209);

(statearr_27216_27238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (1))){
var inst_27191 = null;
var state_27214__$1 = (function (){var statearr_27217 = state_27214;
(statearr_27217[(7)] = inst_27191);

return statearr_27217;
})();
var statearr_27218_27239 = state_27214__$1;
(statearr_27218_27239[(2)] = null);

(statearr_27218_27239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (4))){
var inst_27194 = (state_27214[(8)]);
var inst_27194__$1 = (state_27214[(2)]);
var inst_27195 = (inst_27194__$1 == null);
var inst_27196 = cljs.core.not.call(null,inst_27195);
var state_27214__$1 = (function (){var statearr_27219 = state_27214;
(statearr_27219[(8)] = inst_27194__$1);

return statearr_27219;
})();
if(inst_27196){
var statearr_27220_27240 = state_27214__$1;
(statearr_27220_27240[(1)] = (5));

} else {
var statearr_27221_27241 = state_27214__$1;
(statearr_27221_27241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (6))){
var state_27214__$1 = state_27214;
var statearr_27222_27242 = state_27214__$1;
(statearr_27222_27242[(2)] = null);

(statearr_27222_27242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (3))){
var inst_27211 = (state_27214[(2)]);
var inst_27212 = cljs.core.async.close_BANG_.call(null,out);
var state_27214__$1 = (function (){var statearr_27223 = state_27214;
(statearr_27223[(9)] = inst_27211);

return statearr_27223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27214__$1,inst_27212);
} else {
if((state_val_27215 === (2))){
var state_27214__$1 = state_27214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27214__$1,(4),ch);
} else {
if((state_val_27215 === (11))){
var inst_27194 = (state_27214[(8)]);
var inst_27203 = (state_27214[(2)]);
var inst_27191 = inst_27194;
var state_27214__$1 = (function (){var statearr_27224 = state_27214;
(statearr_27224[(7)] = inst_27191);

(statearr_27224[(10)] = inst_27203);

return statearr_27224;
})();
var statearr_27225_27243 = state_27214__$1;
(statearr_27225_27243[(2)] = null);

(statearr_27225_27243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (9))){
var inst_27194 = (state_27214[(8)]);
var state_27214__$1 = state_27214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27214__$1,(11),out,inst_27194);
} else {
if((state_val_27215 === (5))){
var inst_27191 = (state_27214[(7)]);
var inst_27194 = (state_27214[(8)]);
var inst_27198 = cljs.core._EQ_.call(null,inst_27194,inst_27191);
var state_27214__$1 = state_27214;
if(inst_27198){
var statearr_27227_27244 = state_27214__$1;
(statearr_27227_27244[(1)] = (8));

} else {
var statearr_27228_27245 = state_27214__$1;
(statearr_27228_27245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (10))){
var inst_27206 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27229_27246 = state_27214__$1;
(statearr_27229_27246[(2)] = inst_27206);

(statearr_27229_27246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27215 === (8))){
var inst_27191 = (state_27214[(7)]);
var tmp27226 = inst_27191;
var inst_27191__$1 = tmp27226;
var state_27214__$1 = (function (){var statearr_27230 = state_27214;
(statearr_27230[(7)] = inst_27191__$1);

return statearr_27230;
})();
var statearr_27231_27247 = state_27214__$1;
(statearr_27231_27247[(2)] = null);

(statearr_27231_27247[(1)] = (2));


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
});})(c__25501__auto___27237,out))
;
return ((function (switch__25410__auto__,c__25501__auto___27237,out){
return (function() {
var cljs$core$async$state_machine__25411__auto__ = null;
var cljs$core$async$state_machine__25411__auto____0 = (function (){
var statearr_27232 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27232[(0)] = cljs$core$async$state_machine__25411__auto__);

(statearr_27232[(1)] = (1));

return statearr_27232;
});
var cljs$core$async$state_machine__25411__auto____1 = (function (state_27214){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_27214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e27233){if((e27233 instanceof Object)){
var ex__25414__auto__ = e27233;
var statearr_27234_27248 = state_27214;
(statearr_27234_27248[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27249 = state_27214;
state_27214 = G__27249;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$state_machine__25411__auto__ = function(state_27214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25411__auto____1.call(this,state_27214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25411__auto____0;
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25411__auto____1;
return cljs$core$async$state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___27237,out))
})();
var state__25503__auto__ = (function (){var statearr_27235 = f__25502__auto__.call(null);
(statearr_27235[(6)] = c__25501__auto___27237);

return statearr_27235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___27237,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27251 = arguments.length;
switch (G__27251) {
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
var c__25501__auto___27317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___27317,out){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___27317,out){
return (function (state_27289){
var state_val_27290 = (state_27289[(1)]);
if((state_val_27290 === (7))){
var inst_27285 = (state_27289[(2)]);
var state_27289__$1 = state_27289;
var statearr_27291_27318 = state_27289__$1;
(statearr_27291_27318[(2)] = inst_27285);

(statearr_27291_27318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (1))){
var inst_27252 = (new Array(n));
var inst_27253 = inst_27252;
var inst_27254 = (0);
var state_27289__$1 = (function (){var statearr_27292 = state_27289;
(statearr_27292[(7)] = inst_27253);

(statearr_27292[(8)] = inst_27254);

return statearr_27292;
})();
var statearr_27293_27319 = state_27289__$1;
(statearr_27293_27319[(2)] = null);

(statearr_27293_27319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (4))){
var inst_27257 = (state_27289[(9)]);
var inst_27257__$1 = (state_27289[(2)]);
var inst_27258 = (inst_27257__$1 == null);
var inst_27259 = cljs.core.not.call(null,inst_27258);
var state_27289__$1 = (function (){var statearr_27294 = state_27289;
(statearr_27294[(9)] = inst_27257__$1);

return statearr_27294;
})();
if(inst_27259){
var statearr_27295_27320 = state_27289__$1;
(statearr_27295_27320[(1)] = (5));

} else {
var statearr_27296_27321 = state_27289__$1;
(statearr_27296_27321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (15))){
var inst_27279 = (state_27289[(2)]);
var state_27289__$1 = state_27289;
var statearr_27297_27322 = state_27289__$1;
(statearr_27297_27322[(2)] = inst_27279);

(statearr_27297_27322[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (13))){
var state_27289__$1 = state_27289;
var statearr_27298_27323 = state_27289__$1;
(statearr_27298_27323[(2)] = null);

(statearr_27298_27323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (6))){
var inst_27254 = (state_27289[(8)]);
var inst_27275 = (inst_27254 > (0));
var state_27289__$1 = state_27289;
if(cljs.core.truth_(inst_27275)){
var statearr_27299_27324 = state_27289__$1;
(statearr_27299_27324[(1)] = (12));

} else {
var statearr_27300_27325 = state_27289__$1;
(statearr_27300_27325[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (3))){
var inst_27287 = (state_27289[(2)]);
var state_27289__$1 = state_27289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27289__$1,inst_27287);
} else {
if((state_val_27290 === (12))){
var inst_27253 = (state_27289[(7)]);
var inst_27277 = cljs.core.vec.call(null,inst_27253);
var state_27289__$1 = state_27289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27289__$1,(15),out,inst_27277);
} else {
if((state_val_27290 === (2))){
var state_27289__$1 = state_27289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27289__$1,(4),ch);
} else {
if((state_val_27290 === (11))){
var inst_27269 = (state_27289[(2)]);
var inst_27270 = (new Array(n));
var inst_27253 = inst_27270;
var inst_27254 = (0);
var state_27289__$1 = (function (){var statearr_27301 = state_27289;
(statearr_27301[(7)] = inst_27253);

(statearr_27301[(8)] = inst_27254);

(statearr_27301[(10)] = inst_27269);

return statearr_27301;
})();
var statearr_27302_27326 = state_27289__$1;
(statearr_27302_27326[(2)] = null);

(statearr_27302_27326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (9))){
var inst_27253 = (state_27289[(7)]);
var inst_27267 = cljs.core.vec.call(null,inst_27253);
var state_27289__$1 = state_27289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27289__$1,(11),out,inst_27267);
} else {
if((state_val_27290 === (5))){
var inst_27253 = (state_27289[(7)]);
var inst_27257 = (state_27289[(9)]);
var inst_27254 = (state_27289[(8)]);
var inst_27262 = (state_27289[(11)]);
var inst_27261 = (inst_27253[inst_27254] = inst_27257);
var inst_27262__$1 = (inst_27254 + (1));
var inst_27263 = (inst_27262__$1 < n);
var state_27289__$1 = (function (){var statearr_27303 = state_27289;
(statearr_27303[(12)] = inst_27261);

(statearr_27303[(11)] = inst_27262__$1);

return statearr_27303;
})();
if(cljs.core.truth_(inst_27263)){
var statearr_27304_27327 = state_27289__$1;
(statearr_27304_27327[(1)] = (8));

} else {
var statearr_27305_27328 = state_27289__$1;
(statearr_27305_27328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (14))){
var inst_27282 = (state_27289[(2)]);
var inst_27283 = cljs.core.async.close_BANG_.call(null,out);
var state_27289__$1 = (function (){var statearr_27307 = state_27289;
(statearr_27307[(13)] = inst_27282);

return statearr_27307;
})();
var statearr_27308_27329 = state_27289__$1;
(statearr_27308_27329[(2)] = inst_27283);

(statearr_27308_27329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (10))){
var inst_27273 = (state_27289[(2)]);
var state_27289__$1 = state_27289;
var statearr_27309_27330 = state_27289__$1;
(statearr_27309_27330[(2)] = inst_27273);

(statearr_27309_27330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (8))){
var inst_27253 = (state_27289[(7)]);
var inst_27262 = (state_27289[(11)]);
var tmp27306 = inst_27253;
var inst_27253__$1 = tmp27306;
var inst_27254 = inst_27262;
var state_27289__$1 = (function (){var statearr_27310 = state_27289;
(statearr_27310[(7)] = inst_27253__$1);

(statearr_27310[(8)] = inst_27254);

return statearr_27310;
})();
var statearr_27311_27331 = state_27289__$1;
(statearr_27311_27331[(2)] = null);

(statearr_27311_27331[(1)] = (2));


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
});})(c__25501__auto___27317,out))
;
return ((function (switch__25410__auto__,c__25501__auto___27317,out){
return (function() {
var cljs$core$async$state_machine__25411__auto__ = null;
var cljs$core$async$state_machine__25411__auto____0 = (function (){
var statearr_27312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27312[(0)] = cljs$core$async$state_machine__25411__auto__);

(statearr_27312[(1)] = (1));

return statearr_27312;
});
var cljs$core$async$state_machine__25411__auto____1 = (function (state_27289){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_27289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e27313){if((e27313 instanceof Object)){
var ex__25414__auto__ = e27313;
var statearr_27314_27332 = state_27289;
(statearr_27314_27332[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27333 = state_27289;
state_27289 = G__27333;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$state_machine__25411__auto__ = function(state_27289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25411__auto____1.call(this,state_27289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25411__auto____0;
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25411__auto____1;
return cljs$core$async$state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___27317,out))
})();
var state__25503__auto__ = (function (){var statearr_27315 = f__25502__auto__.call(null);
(statearr_27315[(6)] = c__25501__auto___27317);

return statearr_27315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___27317,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27335 = arguments.length;
switch (G__27335) {
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
var c__25501__auto___27405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25501__auto___27405,out){
return (function (){
var f__25502__auto__ = (function (){var switch__25410__auto__ = ((function (c__25501__auto___27405,out){
return (function (state_27377){
var state_val_27378 = (state_27377[(1)]);
if((state_val_27378 === (7))){
var inst_27373 = (state_27377[(2)]);
var state_27377__$1 = state_27377;
var statearr_27379_27406 = state_27377__$1;
(statearr_27379_27406[(2)] = inst_27373);

(statearr_27379_27406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (1))){
var inst_27336 = [];
var inst_27337 = inst_27336;
var inst_27338 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27377__$1 = (function (){var statearr_27380 = state_27377;
(statearr_27380[(7)] = inst_27338);

(statearr_27380[(8)] = inst_27337);

return statearr_27380;
})();
var statearr_27381_27407 = state_27377__$1;
(statearr_27381_27407[(2)] = null);

(statearr_27381_27407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (4))){
var inst_27341 = (state_27377[(9)]);
var inst_27341__$1 = (state_27377[(2)]);
var inst_27342 = (inst_27341__$1 == null);
var inst_27343 = cljs.core.not.call(null,inst_27342);
var state_27377__$1 = (function (){var statearr_27382 = state_27377;
(statearr_27382[(9)] = inst_27341__$1);

return statearr_27382;
})();
if(inst_27343){
var statearr_27383_27408 = state_27377__$1;
(statearr_27383_27408[(1)] = (5));

} else {
var statearr_27384_27409 = state_27377__$1;
(statearr_27384_27409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (15))){
var inst_27367 = (state_27377[(2)]);
var state_27377__$1 = state_27377;
var statearr_27385_27410 = state_27377__$1;
(statearr_27385_27410[(2)] = inst_27367);

(statearr_27385_27410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (13))){
var state_27377__$1 = state_27377;
var statearr_27386_27411 = state_27377__$1;
(statearr_27386_27411[(2)] = null);

(statearr_27386_27411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (6))){
var inst_27337 = (state_27377[(8)]);
var inst_27362 = inst_27337.length;
var inst_27363 = (inst_27362 > (0));
var state_27377__$1 = state_27377;
if(cljs.core.truth_(inst_27363)){
var statearr_27387_27412 = state_27377__$1;
(statearr_27387_27412[(1)] = (12));

} else {
var statearr_27388_27413 = state_27377__$1;
(statearr_27388_27413[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (3))){
var inst_27375 = (state_27377[(2)]);
var state_27377__$1 = state_27377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27377__$1,inst_27375);
} else {
if((state_val_27378 === (12))){
var inst_27337 = (state_27377[(8)]);
var inst_27365 = cljs.core.vec.call(null,inst_27337);
var state_27377__$1 = state_27377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27377__$1,(15),out,inst_27365);
} else {
if((state_val_27378 === (2))){
var state_27377__$1 = state_27377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27377__$1,(4),ch);
} else {
if((state_val_27378 === (11))){
var inst_27341 = (state_27377[(9)]);
var inst_27345 = (state_27377[(10)]);
var inst_27355 = (state_27377[(2)]);
var inst_27356 = [];
var inst_27357 = inst_27356.push(inst_27341);
var inst_27337 = inst_27356;
var inst_27338 = inst_27345;
var state_27377__$1 = (function (){var statearr_27389 = state_27377;
(statearr_27389[(7)] = inst_27338);

(statearr_27389[(8)] = inst_27337);

(statearr_27389[(11)] = inst_27355);

(statearr_27389[(12)] = inst_27357);

return statearr_27389;
})();
var statearr_27390_27414 = state_27377__$1;
(statearr_27390_27414[(2)] = null);

(statearr_27390_27414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (9))){
var inst_27337 = (state_27377[(8)]);
var inst_27353 = cljs.core.vec.call(null,inst_27337);
var state_27377__$1 = state_27377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27377__$1,(11),out,inst_27353);
} else {
if((state_val_27378 === (5))){
var inst_27341 = (state_27377[(9)]);
var inst_27338 = (state_27377[(7)]);
var inst_27345 = (state_27377[(10)]);
var inst_27345__$1 = f.call(null,inst_27341);
var inst_27346 = cljs.core._EQ_.call(null,inst_27345__$1,inst_27338);
var inst_27347 = cljs.core.keyword_identical_QMARK_.call(null,inst_27338,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27348 = ((inst_27346) || (inst_27347));
var state_27377__$1 = (function (){var statearr_27391 = state_27377;
(statearr_27391[(10)] = inst_27345__$1);

return statearr_27391;
})();
if(cljs.core.truth_(inst_27348)){
var statearr_27392_27415 = state_27377__$1;
(statearr_27392_27415[(1)] = (8));

} else {
var statearr_27393_27416 = state_27377__$1;
(statearr_27393_27416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (14))){
var inst_27370 = (state_27377[(2)]);
var inst_27371 = cljs.core.async.close_BANG_.call(null,out);
var state_27377__$1 = (function (){var statearr_27395 = state_27377;
(statearr_27395[(13)] = inst_27370);

return statearr_27395;
})();
var statearr_27396_27417 = state_27377__$1;
(statearr_27396_27417[(2)] = inst_27371);

(statearr_27396_27417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (10))){
var inst_27360 = (state_27377[(2)]);
var state_27377__$1 = state_27377;
var statearr_27397_27418 = state_27377__$1;
(statearr_27397_27418[(2)] = inst_27360);

(statearr_27397_27418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27378 === (8))){
var inst_27341 = (state_27377[(9)]);
var inst_27337 = (state_27377[(8)]);
var inst_27345 = (state_27377[(10)]);
var inst_27350 = inst_27337.push(inst_27341);
var tmp27394 = inst_27337;
var inst_27337__$1 = tmp27394;
var inst_27338 = inst_27345;
var state_27377__$1 = (function (){var statearr_27398 = state_27377;
(statearr_27398[(7)] = inst_27338);

(statearr_27398[(8)] = inst_27337__$1);

(statearr_27398[(14)] = inst_27350);

return statearr_27398;
})();
var statearr_27399_27419 = state_27377__$1;
(statearr_27399_27419[(2)] = null);

(statearr_27399_27419[(1)] = (2));


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
});})(c__25501__auto___27405,out))
;
return ((function (switch__25410__auto__,c__25501__auto___27405,out){
return (function() {
var cljs$core$async$state_machine__25411__auto__ = null;
var cljs$core$async$state_machine__25411__auto____0 = (function (){
var statearr_27400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27400[(0)] = cljs$core$async$state_machine__25411__auto__);

(statearr_27400[(1)] = (1));

return statearr_27400;
});
var cljs$core$async$state_machine__25411__auto____1 = (function (state_27377){
while(true){
var ret_value__25412__auto__ = (function (){try{while(true){
var result__25413__auto__ = switch__25410__auto__.call(null,state_27377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25413__auto__;
}
break;
}
}catch (e27401){if((e27401 instanceof Object)){
var ex__25414__auto__ = e27401;
var statearr_27402_27420 = state_27377;
(statearr_27402_27420[(5)] = ex__25414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27421 = state_27377;
state_27377 = G__27421;
continue;
} else {
return ret_value__25412__auto__;
}
break;
}
});
cljs$core$async$state_machine__25411__auto__ = function(state_27377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25411__auto____1.call(this,state_27377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25411__auto____0;
cljs$core$async$state_machine__25411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25411__auto____1;
return cljs$core$async$state_machine__25411__auto__;
})()
;})(switch__25410__auto__,c__25501__auto___27405,out))
})();
var state__25503__auto__ = (function (){var statearr_27403 = f__25502__auto__.call(null);
(statearr_27403[(6)] = c__25501__auto___27405);

return statearr_27403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25503__auto__);
});})(c__25501__auto___27405,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1530909570979
