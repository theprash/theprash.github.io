// Compiled by ClojureScript 0.0-2356
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12133 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12133 = (function (f,fn_handler,meta12134){
this.f = f;
this.fn_handler = fn_handler;
this.meta12134 = meta12134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12133.cljs$lang$type = true;
cljs.core.async.t12133.cljs$lang$ctorStr = "cljs.core.async/t12133";
cljs.core.async.t12133.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t12133");
});
cljs.core.async.t12133.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12133.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12133.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12135){var self__ = this;
var _12135__$1 = this;return self__.meta12134;
});
cljs.core.async.t12133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12135,meta12134__$1){var self__ = this;
var _12135__$1 = this;return (new cljs.core.async.t12133(self__.f,self__.fn_handler,meta12134__$1));
});
cljs.core.async.__GT_t12133 = (function __GT_t12133(f__$1,fn_handler__$1,meta12134){return (new cljs.core.async.t12133(f__$1,fn_handler__$1,meta12134));
});
}
return (new cljs.core.async.t12133(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12137 = buff;if(G__12137)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__12137.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12137.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12137);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12137);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12138 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12138);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12138,ret){
return (function (){return fn1.call(null,val_12138);
});})(val_12138,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___12139 = n;var x_12140 = (0);while(true){
if((x_12140 < n__4508__auto___12139))
{(a[x_12140] = (0));
{
var G__12141 = (x_12140 + (1));
x_12140 = G__12141;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12142 = (i + (1));
i = G__12142;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12146 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12146 = (function (flag,alt_flag,meta12147){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12147 = meta12147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12146.cljs$lang$type = true;
cljs.core.async.t12146.cljs$lang$ctorStr = "cljs.core.async/t12146";
cljs.core.async.t12146.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t12146");
});})(flag))
;
cljs.core.async.t12146.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12148){var self__ = this;
var _12148__$1 = this;return self__.meta12147;
});})(flag))
;
cljs.core.async.t12146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12148,meta12147__$1){var self__ = this;
var _12148__$1 = this;return (new cljs.core.async.t12146(self__.flag,self__.alt_flag,meta12147__$1));
});})(flag))
;
cljs.core.async.__GT_t12146 = ((function (flag){
return (function __GT_t12146(flag__$1,alt_flag__$1,meta12147){return (new cljs.core.async.t12146(flag__$1,alt_flag__$1,meta12147));
});})(flag))
;
}
return (new cljs.core.async.t12146(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12152 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12152 = (function (cb,flag,alt_handler,meta12153){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12153 = meta12153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12152.cljs$lang$type = true;
cljs.core.async.t12152.cljs$lang$ctorStr = "cljs.core.async/t12152";
cljs.core.async.t12152.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t12152");
});
cljs.core.async.t12152.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12152.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12152.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12154){var self__ = this;
var _12154__$1 = this;return self__.meta12153;
});
cljs.core.async.t12152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12154,meta12153__$1){var self__ = this;
var _12154__$1 = this;return (new cljs.core.async.t12152(self__.cb,self__.flag,self__.alt_handler,meta12153__$1));
});
cljs.core.async.__GT_t12152 = (function __GT_t12152(cb__$1,flag__$1,alt_handler__$1,meta12153){return (new cljs.core.async.t12152(cb__$1,flag__$1,alt_handler__$1,meta12153));
});
}
return (new cljs.core.async.t12152(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12155_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12155_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12156_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12156_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3639__auto__ = wport;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12157 = (i + (1));
i = G__12157;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3639__auto__ = ret;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3627__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3627__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12158){var map__12160 = p__12158;var map__12160__$1 = ((cljs.core.seq_QMARK_.call(null,map__12160))?cljs.core.apply.call(null,cljs.core.hash_map,map__12160):map__12160);var opts = map__12160__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__12158 = null;if (arguments.length > 1) {
  p__12158 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12158);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12161){
var ports = cljs.core.first(arglist__12161);
var p__12158 = cljs.core.rest(arglist__12161);
return alts_BANG___delegate(ports,p__12158);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12169 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12169 = (function (ch,f,map_LT_,meta12170){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12170 = meta12170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12169.cljs$lang$type = true;
cljs.core.async.t12169.cljs$lang$ctorStr = "cljs.core.async/t12169";
cljs.core.async.t12169.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t12169");
});
cljs.core.async.t12169.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12169.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t12169.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12169.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12172 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12172 = (function (fn1,_,meta12170,ch,f,map_LT_,meta12173){
this.fn1 = fn1;
this._ = _;
this.meta12170 = meta12170;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12173 = meta12173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12172.cljs$lang$type = true;
cljs.core.async.t12172.cljs$lang$ctorStr = "cljs.core.async/t12172";
cljs.core.async.t12172.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t12172");
});})(___$1))
;
cljs.core.async.t12172.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12172.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__12162_SHARP_){return f1.call(null,(((p1__12162_SHARP_ == null))?null:self__.f.call(null,p1__12162_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t12172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12174){var self__ = this;
var _12174__$1 = this;return self__.meta12173;
});})(___$1))
;
cljs.core.async.t12172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12174,meta12173__$1){var self__ = this;
var _12174__$1 = this;return (new cljs.core.async.t12172(self__.fn1,self__._,self__.meta12170,self__.ch,self__.f,self__.map_LT_,meta12173__$1));
});})(___$1))
;
cljs.core.async.__GT_t12172 = ((function (___$1){
return (function __GT_t12172(fn1__$1,___$2,meta12170__$1,ch__$2,f__$2,map_LT___$2,meta12173){return (new cljs.core.async.t12172(fn1__$1,___$2,meta12170__$1,ch__$2,f__$2,map_LT___$2,meta12173));
});})(___$1))
;
}
return (new cljs.core.async.t12172(fn1,___$1,self__.meta12170,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3627__auto__ = ret;if(cljs.core.truth_(and__3627__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12169.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12169.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12169.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12171){var self__ = this;
var _12171__$1 = this;return self__.meta12170;
});
cljs.core.async.t12169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12171,meta12170__$1){var self__ = this;
var _12171__$1 = this;return (new cljs.core.async.t12169(self__.ch,self__.f,self__.map_LT_,meta12170__$1));
});
cljs.core.async.__GT_t12169 = (function __GT_t12169(ch__$1,f__$1,map_LT___$1,meta12170){return (new cljs.core.async.t12169(ch__$1,f__$1,map_LT___$1,meta12170));
});
}
return (new cljs.core.async.t12169(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12178 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12178 = (function (ch,f,map_GT_,meta12179){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12179 = meta12179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12178.cljs$lang$type = true;
cljs.core.async.t12178.cljs$lang$ctorStr = "cljs.core.async/t12178";
cljs.core.async.t12178.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t12178");
});
cljs.core.async.t12178.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t12178.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12178.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12180){var self__ = this;
var _12180__$1 = this;return self__.meta12179;
});
cljs.core.async.t12178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12180,meta12179__$1){var self__ = this;
var _12180__$1 = this;return (new cljs.core.async.t12178(self__.ch,self__.f,self__.map_GT_,meta12179__$1));
});
cljs.core.async.__GT_t12178 = (function __GT_t12178(ch__$1,f__$1,map_GT___$1,meta12179){return (new cljs.core.async.t12178(ch__$1,f__$1,map_GT___$1,meta12179));
});
}
return (new cljs.core.async.t12178(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12184 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12184 = (function (ch,p,filter_GT_,meta12185){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12185 = meta12185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12184.cljs$lang$type = true;
cljs.core.async.t12184.cljs$lang$ctorStr = "cljs.core.async/t12184";
cljs.core.async.t12184.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t12184");
});
cljs.core.async.t12184.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t12184.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12184.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12184.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12186){var self__ = this;
var _12186__$1 = this;return self__.meta12185;
});
cljs.core.async.t12184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12186,meta12185__$1){var self__ = this;
var _12186__$1 = this;return (new cljs.core.async.t12184(self__.ch,self__.p,self__.filter_GT_,meta12185__$1));
});
cljs.core.async.__GT_t12184 = (function __GT_t12184(ch__$1,p__$1,filter_GT___$1,meta12185){return (new cljs.core.async.t12184(ch__$1,p__$1,filter_GT___$1,meta12185));
});
}
return (new cljs.core.async.t12184(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6622__auto___12269 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto___12269,out){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto___12269,out){
return (function (state_12248){var state_val_12249 = (state_12248[(1)]);if((state_val_12249 === (7)))
{var inst_12244 = (state_12248[(2)]);var state_12248__$1 = state_12248;var statearr_12250_12270 = state_12248__$1;(statearr_12250_12270[(2)] = inst_12244);
(statearr_12250_12270[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12249 === (1)))
{var state_12248__$1 = state_12248;var statearr_12251_12271 = state_12248__$1;(statearr_12251_12271[(2)] = null);
(statearr_12251_12271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12249 === (4)))
{var inst_12230 = (state_12248[(7)]);var inst_12230__$1 = (state_12248[(2)]);var inst_12231 = (inst_12230__$1 == null);var state_12248__$1 = (function (){var statearr_12252 = state_12248;(statearr_12252[(7)] = inst_12230__$1);
return statearr_12252;
})();if(cljs.core.truth_(inst_12231))
{var statearr_12253_12272 = state_12248__$1;(statearr_12253_12272[(1)] = (5));
} else
{var statearr_12254_12273 = state_12248__$1;(statearr_12254_12273[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12249 === (6)))
{var inst_12230 = (state_12248[(7)]);var inst_12235 = p.call(null,inst_12230);var state_12248__$1 = state_12248;if(cljs.core.truth_(inst_12235))
{var statearr_12255_12274 = state_12248__$1;(statearr_12255_12274[(1)] = (8));
} else
{var statearr_12256_12275 = state_12248__$1;(statearr_12256_12275[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12249 === (3)))
{var inst_12246 = (state_12248[(2)]);var state_12248__$1 = state_12248;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12248__$1,inst_12246);
} else
{if((state_val_12249 === (2)))
{var state_12248__$1 = state_12248;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12248__$1,(4),ch);
} else
{if((state_val_12249 === (11)))
{var inst_12238 = (state_12248[(2)]);var state_12248__$1 = state_12248;var statearr_12257_12276 = state_12248__$1;(statearr_12257_12276[(2)] = inst_12238);
(statearr_12257_12276[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12249 === (9)))
{var state_12248__$1 = state_12248;var statearr_12258_12277 = state_12248__$1;(statearr_12258_12277[(2)] = null);
(statearr_12258_12277[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12249 === (5)))
{var inst_12233 = cljs.core.async.close_BANG_.call(null,out);var state_12248__$1 = state_12248;var statearr_12259_12278 = state_12248__$1;(statearr_12259_12278[(2)] = inst_12233);
(statearr_12259_12278[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12249 === (10)))
{var inst_12241 = (state_12248[(2)]);var state_12248__$1 = (function (){var statearr_12260 = state_12248;(statearr_12260[(8)] = inst_12241);
return statearr_12260;
})();var statearr_12261_12279 = state_12248__$1;(statearr_12261_12279[(2)] = null);
(statearr_12261_12279[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12249 === (8)))
{var inst_12230 = (state_12248[(7)]);var state_12248__$1 = state_12248;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12248__$1,(11),out,inst_12230);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6622__auto___12269,out))
;return ((function (switch__6557__auto__,c__6622__auto___12269,out){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_12265 = [null,null,null,null,null,null,null,null,null];(statearr_12265[(0)] = state_machine__6558__auto__);
(statearr_12265[(1)] = (1));
return statearr_12265;
});
var state_machine__6558__auto____1 = (function (state_12248){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_12248);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e12266){if((e12266 instanceof Object))
{var ex__6561__auto__ = e12266;var statearr_12267_12280 = state_12248;(statearr_12267_12280[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12248);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12266;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12281 = state_12248;
state_12248 = G__12281;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_12248){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_12248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto___12269,out))
})();var state__6624__auto__ = (function (){var statearr_12268 = f__6623__auto__.call(null);(statearr_12268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto___12269);
return statearr_12268;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto___12269,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6622__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto__){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto__){
return (function (state_12447){var state_val_12448 = (state_12447[(1)]);if((state_val_12448 === (7)))
{var inst_12443 = (state_12447[(2)]);var state_12447__$1 = state_12447;var statearr_12449_12490 = state_12447__$1;(statearr_12449_12490[(2)] = inst_12443);
(statearr_12449_12490[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (20)))
{var inst_12413 = (state_12447[(7)]);var inst_12424 = (state_12447[(2)]);var inst_12425 = cljs.core.next.call(null,inst_12413);var inst_12399 = inst_12425;var inst_12400 = null;var inst_12401 = (0);var inst_12402 = (0);var state_12447__$1 = (function (){var statearr_12450 = state_12447;(statearr_12450[(8)] = inst_12401);
(statearr_12450[(9)] = inst_12399);
(statearr_12450[(10)] = inst_12400);
(statearr_12450[(11)] = inst_12402);
(statearr_12450[(12)] = inst_12424);
return statearr_12450;
})();var statearr_12451_12491 = state_12447__$1;(statearr_12451_12491[(2)] = null);
(statearr_12451_12491[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (1)))
{var state_12447__$1 = state_12447;var statearr_12452_12492 = state_12447__$1;(statearr_12452_12492[(2)] = null);
(statearr_12452_12492[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (4)))
{var inst_12388 = (state_12447[(13)]);var inst_12388__$1 = (state_12447[(2)]);var inst_12389 = (inst_12388__$1 == null);var state_12447__$1 = (function (){var statearr_12453 = state_12447;(statearr_12453[(13)] = inst_12388__$1);
return statearr_12453;
})();if(cljs.core.truth_(inst_12389))
{var statearr_12454_12493 = state_12447__$1;(statearr_12454_12493[(1)] = (5));
} else
{var statearr_12455_12494 = state_12447__$1;(statearr_12455_12494[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (15)))
{var state_12447__$1 = state_12447;var statearr_12459_12495 = state_12447__$1;(statearr_12459_12495[(2)] = null);
(statearr_12459_12495[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (21)))
{var state_12447__$1 = state_12447;var statearr_12460_12496 = state_12447__$1;(statearr_12460_12496[(2)] = null);
(statearr_12460_12496[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (13)))
{var inst_12401 = (state_12447[(8)]);var inst_12399 = (state_12447[(9)]);var inst_12400 = (state_12447[(10)]);var inst_12402 = (state_12447[(11)]);var inst_12409 = (state_12447[(2)]);var inst_12410 = (inst_12402 + (1));var tmp12456 = inst_12401;var tmp12457 = inst_12399;var tmp12458 = inst_12400;var inst_12399__$1 = tmp12457;var inst_12400__$1 = tmp12458;var inst_12401__$1 = tmp12456;var inst_12402__$1 = inst_12410;var state_12447__$1 = (function (){var statearr_12461 = state_12447;(statearr_12461[(8)] = inst_12401__$1);
(statearr_12461[(9)] = inst_12399__$1);
(statearr_12461[(10)] = inst_12400__$1);
(statearr_12461[(11)] = inst_12402__$1);
(statearr_12461[(14)] = inst_12409);
return statearr_12461;
})();var statearr_12462_12497 = state_12447__$1;(statearr_12462_12497[(2)] = null);
(statearr_12462_12497[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (22)))
{var state_12447__$1 = state_12447;var statearr_12463_12498 = state_12447__$1;(statearr_12463_12498[(2)] = null);
(statearr_12463_12498[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (6)))
{var inst_12388 = (state_12447[(13)]);var inst_12397 = f.call(null,inst_12388);var inst_12398 = cljs.core.seq.call(null,inst_12397);var inst_12399 = inst_12398;var inst_12400 = null;var inst_12401 = (0);var inst_12402 = (0);var state_12447__$1 = (function (){var statearr_12464 = state_12447;(statearr_12464[(8)] = inst_12401);
(statearr_12464[(9)] = inst_12399);
(statearr_12464[(10)] = inst_12400);
(statearr_12464[(11)] = inst_12402);
return statearr_12464;
})();var statearr_12465_12499 = state_12447__$1;(statearr_12465_12499[(2)] = null);
(statearr_12465_12499[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (17)))
{var inst_12413 = (state_12447[(7)]);var inst_12417 = cljs.core.chunk_first.call(null,inst_12413);var inst_12418 = cljs.core.chunk_rest.call(null,inst_12413);var inst_12419 = cljs.core.count.call(null,inst_12417);var inst_12399 = inst_12418;var inst_12400 = inst_12417;var inst_12401 = inst_12419;var inst_12402 = (0);var state_12447__$1 = (function (){var statearr_12466 = state_12447;(statearr_12466[(8)] = inst_12401);
(statearr_12466[(9)] = inst_12399);
(statearr_12466[(10)] = inst_12400);
(statearr_12466[(11)] = inst_12402);
return statearr_12466;
})();var statearr_12467_12500 = state_12447__$1;(statearr_12467_12500[(2)] = null);
(statearr_12467_12500[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (3)))
{var inst_12445 = (state_12447[(2)]);var state_12447__$1 = state_12447;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12447__$1,inst_12445);
} else
{if((state_val_12448 === (12)))
{var inst_12433 = (state_12447[(2)]);var state_12447__$1 = state_12447;var statearr_12468_12501 = state_12447__$1;(statearr_12468_12501[(2)] = inst_12433);
(statearr_12468_12501[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (2)))
{var state_12447__$1 = state_12447;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12447__$1,(4),in$);
} else
{if((state_val_12448 === (23)))
{var inst_12441 = (state_12447[(2)]);var state_12447__$1 = state_12447;var statearr_12469_12502 = state_12447__$1;(statearr_12469_12502[(2)] = inst_12441);
(statearr_12469_12502[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (19)))
{var inst_12428 = (state_12447[(2)]);var state_12447__$1 = state_12447;var statearr_12470_12503 = state_12447__$1;(statearr_12470_12503[(2)] = inst_12428);
(statearr_12470_12503[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (11)))
{var inst_12399 = (state_12447[(9)]);var inst_12413 = (state_12447[(7)]);var inst_12413__$1 = cljs.core.seq.call(null,inst_12399);var state_12447__$1 = (function (){var statearr_12471 = state_12447;(statearr_12471[(7)] = inst_12413__$1);
return statearr_12471;
})();if(inst_12413__$1)
{var statearr_12472_12504 = state_12447__$1;(statearr_12472_12504[(1)] = (14));
} else
{var statearr_12473_12505 = state_12447__$1;(statearr_12473_12505[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (9)))
{var inst_12435 = (state_12447[(2)]);var inst_12436 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_12447__$1 = (function (){var statearr_12474 = state_12447;(statearr_12474[(15)] = inst_12435);
return statearr_12474;
})();if(cljs.core.truth_(inst_12436))
{var statearr_12475_12506 = state_12447__$1;(statearr_12475_12506[(1)] = (21));
} else
{var statearr_12476_12507 = state_12447__$1;(statearr_12476_12507[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (5)))
{var inst_12391 = cljs.core.async.close_BANG_.call(null,out);var state_12447__$1 = state_12447;var statearr_12477_12508 = state_12447__$1;(statearr_12477_12508[(2)] = inst_12391);
(statearr_12477_12508[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (14)))
{var inst_12413 = (state_12447[(7)]);var inst_12415 = cljs.core.chunked_seq_QMARK_.call(null,inst_12413);var state_12447__$1 = state_12447;if(inst_12415)
{var statearr_12478_12509 = state_12447__$1;(statearr_12478_12509[(1)] = (17));
} else
{var statearr_12479_12510 = state_12447__$1;(statearr_12479_12510[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (16)))
{var inst_12431 = (state_12447[(2)]);var state_12447__$1 = state_12447;var statearr_12480_12511 = state_12447__$1;(statearr_12480_12511[(2)] = inst_12431);
(statearr_12480_12511[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12448 === (10)))
{var inst_12400 = (state_12447[(10)]);var inst_12402 = (state_12447[(11)]);var inst_12407 = cljs.core._nth.call(null,inst_12400,inst_12402);var state_12447__$1 = state_12447;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12447__$1,(13),out,inst_12407);
} else
{if((state_val_12448 === (18)))
{var inst_12413 = (state_12447[(7)]);var inst_12422 = cljs.core.first.call(null,inst_12413);var state_12447__$1 = state_12447;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12447__$1,(20),out,inst_12422);
} else
{if((state_val_12448 === (8)))
{var inst_12401 = (state_12447[(8)]);var inst_12402 = (state_12447[(11)]);var inst_12404 = (inst_12402 < inst_12401);var inst_12405 = inst_12404;var state_12447__$1 = state_12447;if(cljs.core.truth_(inst_12405))
{var statearr_12481_12512 = state_12447__$1;(statearr_12481_12512[(1)] = (10));
} else
{var statearr_12482_12513 = state_12447__$1;(statearr_12482_12513[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6622__auto__))
;return ((function (switch__6557__auto__,c__6622__auto__){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_12486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12486[(0)] = state_machine__6558__auto__);
(statearr_12486[(1)] = (1));
return statearr_12486;
});
var state_machine__6558__auto____1 = (function (state_12447){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_12447);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e12487){if((e12487 instanceof Object))
{var ex__6561__auto__ = e12487;var statearr_12488_12514 = state_12447;(statearr_12488_12514[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12447);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12487;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12515 = state_12447;
state_12447 = G__12515;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_12447){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_12447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto__))
})();var state__6624__auto__ = (function (){var statearr_12489 = f__6623__auto__.call(null);(statearr_12489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto__);
return statearr_12489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto__))
);
return c__6622__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6622__auto___12610 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto___12610){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto___12610){
return (function (state_12586){var state_val_12587 = (state_12586[(1)]);if((state_val_12587 === (7)))
{var inst_12582 = (state_12586[(2)]);var state_12586__$1 = state_12586;var statearr_12588_12611 = state_12586__$1;(statearr_12588_12611[(2)] = inst_12582);
(statearr_12588_12611[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12587 === (1)))
{var state_12586__$1 = state_12586;var statearr_12589_12612 = state_12586__$1;(statearr_12589_12612[(2)] = null);
(statearr_12589_12612[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12587 === (4)))
{var inst_12565 = (state_12586[(7)]);var inst_12565__$1 = (state_12586[(2)]);var inst_12566 = (inst_12565__$1 == null);var state_12586__$1 = (function (){var statearr_12590 = state_12586;(statearr_12590[(7)] = inst_12565__$1);
return statearr_12590;
})();if(cljs.core.truth_(inst_12566))
{var statearr_12591_12613 = state_12586__$1;(statearr_12591_12613[(1)] = (5));
} else
{var statearr_12592_12614 = state_12586__$1;(statearr_12592_12614[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12587 === (13)))
{var state_12586__$1 = state_12586;var statearr_12593_12615 = state_12586__$1;(statearr_12593_12615[(2)] = null);
(statearr_12593_12615[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12587 === (6)))
{var inst_12565 = (state_12586[(7)]);var state_12586__$1 = state_12586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12586__$1,(11),to,inst_12565);
} else
{if((state_val_12587 === (3)))
{var inst_12584 = (state_12586[(2)]);var state_12586__$1 = state_12586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12586__$1,inst_12584);
} else
{if((state_val_12587 === (12)))
{var state_12586__$1 = state_12586;var statearr_12594_12616 = state_12586__$1;(statearr_12594_12616[(2)] = null);
(statearr_12594_12616[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12587 === (2)))
{var state_12586__$1 = state_12586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12586__$1,(4),from);
} else
{if((state_val_12587 === (11)))
{var inst_12575 = (state_12586[(2)]);var state_12586__$1 = state_12586;if(cljs.core.truth_(inst_12575))
{var statearr_12595_12617 = state_12586__$1;(statearr_12595_12617[(1)] = (12));
} else
{var statearr_12596_12618 = state_12586__$1;(statearr_12596_12618[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12587 === (9)))
{var state_12586__$1 = state_12586;var statearr_12597_12619 = state_12586__$1;(statearr_12597_12619[(2)] = null);
(statearr_12597_12619[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12587 === (5)))
{var state_12586__$1 = state_12586;if(cljs.core.truth_(close_QMARK_))
{var statearr_12598_12620 = state_12586__$1;(statearr_12598_12620[(1)] = (8));
} else
{var statearr_12599_12621 = state_12586__$1;(statearr_12599_12621[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12587 === (14)))
{var inst_12580 = (state_12586[(2)]);var state_12586__$1 = state_12586;var statearr_12600_12622 = state_12586__$1;(statearr_12600_12622[(2)] = inst_12580);
(statearr_12600_12622[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12587 === (10)))
{var inst_12572 = (state_12586[(2)]);var state_12586__$1 = state_12586;var statearr_12601_12623 = state_12586__$1;(statearr_12601_12623[(2)] = inst_12572);
(statearr_12601_12623[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12587 === (8)))
{var inst_12569 = cljs.core.async.close_BANG_.call(null,to);var state_12586__$1 = state_12586;var statearr_12602_12624 = state_12586__$1;(statearr_12602_12624[(2)] = inst_12569);
(statearr_12602_12624[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6622__auto___12610))
;return ((function (switch__6557__auto__,c__6622__auto___12610){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_12606 = [null,null,null,null,null,null,null,null];(statearr_12606[(0)] = state_machine__6558__auto__);
(statearr_12606[(1)] = (1));
return statearr_12606;
});
var state_machine__6558__auto____1 = (function (state_12586){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_12586);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e12607){if((e12607 instanceof Object))
{var ex__6561__auto__ = e12607;var statearr_12608_12625 = state_12586;(statearr_12608_12625[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12586);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12607;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12626 = state_12586;
state_12586 = G__12626;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_12586){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_12586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto___12610))
})();var state__6624__auto__ = (function (){var statearr_12609 = f__6623__auto__.call(null);(statearr_12609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto___12610);
return statearr_12609;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto___12610))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6622__auto___12727 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto___12727,tc,fc){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto___12727,tc,fc){
return (function (state_12702){var state_val_12703 = (state_12702[(1)]);if((state_val_12703 === (7)))
{var inst_12698 = (state_12702[(2)]);var state_12702__$1 = state_12702;var statearr_12704_12728 = state_12702__$1;(statearr_12704_12728[(2)] = inst_12698);
(statearr_12704_12728[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12703 === (1)))
{var state_12702__$1 = state_12702;var statearr_12705_12729 = state_12702__$1;(statearr_12705_12729[(2)] = null);
(statearr_12705_12729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12703 === (4)))
{var inst_12679 = (state_12702[(7)]);var inst_12679__$1 = (state_12702[(2)]);var inst_12680 = (inst_12679__$1 == null);var state_12702__$1 = (function (){var statearr_12706 = state_12702;(statearr_12706[(7)] = inst_12679__$1);
return statearr_12706;
})();if(cljs.core.truth_(inst_12680))
{var statearr_12707_12730 = state_12702__$1;(statearr_12707_12730[(1)] = (5));
} else
{var statearr_12708_12731 = state_12702__$1;(statearr_12708_12731[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12703 === (13)))
{var state_12702__$1 = state_12702;var statearr_12709_12732 = state_12702__$1;(statearr_12709_12732[(2)] = null);
(statearr_12709_12732[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12703 === (6)))
{var inst_12679 = (state_12702[(7)]);var inst_12685 = p.call(null,inst_12679);var state_12702__$1 = state_12702;if(cljs.core.truth_(inst_12685))
{var statearr_12710_12733 = state_12702__$1;(statearr_12710_12733[(1)] = (9));
} else
{var statearr_12711_12734 = state_12702__$1;(statearr_12711_12734[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12703 === (3)))
{var inst_12700 = (state_12702[(2)]);var state_12702__$1 = state_12702;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12702__$1,inst_12700);
} else
{if((state_val_12703 === (12)))
{var state_12702__$1 = state_12702;var statearr_12712_12735 = state_12702__$1;(statearr_12712_12735[(2)] = null);
(statearr_12712_12735[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12703 === (2)))
{var state_12702__$1 = state_12702;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12702__$1,(4),ch);
} else
{if((state_val_12703 === (11)))
{var inst_12679 = (state_12702[(7)]);var inst_12689 = (state_12702[(2)]);var state_12702__$1 = state_12702;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12702__$1,(8),inst_12689,inst_12679);
} else
{if((state_val_12703 === (9)))
{var state_12702__$1 = state_12702;var statearr_12713_12736 = state_12702__$1;(statearr_12713_12736[(2)] = tc);
(statearr_12713_12736[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12703 === (5)))
{var inst_12682 = cljs.core.async.close_BANG_.call(null,tc);var inst_12683 = cljs.core.async.close_BANG_.call(null,fc);var state_12702__$1 = (function (){var statearr_12714 = state_12702;(statearr_12714[(8)] = inst_12682);
return statearr_12714;
})();var statearr_12715_12737 = state_12702__$1;(statearr_12715_12737[(2)] = inst_12683);
(statearr_12715_12737[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12703 === (14)))
{var inst_12696 = (state_12702[(2)]);var state_12702__$1 = state_12702;var statearr_12716_12738 = state_12702__$1;(statearr_12716_12738[(2)] = inst_12696);
(statearr_12716_12738[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12703 === (10)))
{var state_12702__$1 = state_12702;var statearr_12717_12739 = state_12702__$1;(statearr_12717_12739[(2)] = fc);
(statearr_12717_12739[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12703 === (8)))
{var inst_12691 = (state_12702[(2)]);var state_12702__$1 = state_12702;if(cljs.core.truth_(inst_12691))
{var statearr_12718_12740 = state_12702__$1;(statearr_12718_12740[(1)] = (12));
} else
{var statearr_12719_12741 = state_12702__$1;(statearr_12719_12741[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6622__auto___12727,tc,fc))
;return ((function (switch__6557__auto__,c__6622__auto___12727,tc,fc){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_12723 = [null,null,null,null,null,null,null,null,null];(statearr_12723[(0)] = state_machine__6558__auto__);
(statearr_12723[(1)] = (1));
return statearr_12723;
});
var state_machine__6558__auto____1 = (function (state_12702){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_12702);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e12724){if((e12724 instanceof Object))
{var ex__6561__auto__ = e12724;var statearr_12725_12742 = state_12702;(statearr_12725_12742[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12702);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12724;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12743 = state_12702;
state_12702 = G__12743;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_12702){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_12702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto___12727,tc,fc))
})();var state__6624__auto__ = (function (){var statearr_12726 = f__6623__auto__.call(null);(statearr_12726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto___12727);
return statearr_12726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto___12727,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6622__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto__){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto__){
return (function (state_12790){var state_val_12791 = (state_12790[(1)]);if((state_val_12791 === (7)))
{var inst_12786 = (state_12790[(2)]);var state_12790__$1 = state_12790;var statearr_12792_12808 = state_12790__$1;(statearr_12792_12808[(2)] = inst_12786);
(statearr_12792_12808[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12791 === (6)))
{var inst_12776 = (state_12790[(7)]);var inst_12779 = (state_12790[(8)]);var inst_12783 = f.call(null,inst_12776,inst_12779);var inst_12776__$1 = inst_12783;var state_12790__$1 = (function (){var statearr_12793 = state_12790;(statearr_12793[(7)] = inst_12776__$1);
return statearr_12793;
})();var statearr_12794_12809 = state_12790__$1;(statearr_12794_12809[(2)] = null);
(statearr_12794_12809[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12791 === (5)))
{var inst_12776 = (state_12790[(7)]);var state_12790__$1 = state_12790;var statearr_12795_12810 = state_12790__$1;(statearr_12795_12810[(2)] = inst_12776);
(statearr_12795_12810[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12791 === (4)))
{var inst_12779 = (state_12790[(8)]);var inst_12779__$1 = (state_12790[(2)]);var inst_12780 = (inst_12779__$1 == null);var state_12790__$1 = (function (){var statearr_12796 = state_12790;(statearr_12796[(8)] = inst_12779__$1);
return statearr_12796;
})();if(cljs.core.truth_(inst_12780))
{var statearr_12797_12811 = state_12790__$1;(statearr_12797_12811[(1)] = (5));
} else
{var statearr_12798_12812 = state_12790__$1;(statearr_12798_12812[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12791 === (3)))
{var inst_12788 = (state_12790[(2)]);var state_12790__$1 = state_12790;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12790__$1,inst_12788);
} else
{if((state_val_12791 === (2)))
{var state_12790__$1 = state_12790;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12790__$1,(4),ch);
} else
{if((state_val_12791 === (1)))
{var inst_12776 = init;var state_12790__$1 = (function (){var statearr_12799 = state_12790;(statearr_12799[(7)] = inst_12776);
return statearr_12799;
})();var statearr_12800_12813 = state_12790__$1;(statearr_12800_12813[(2)] = null);
(statearr_12800_12813[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6622__auto__))
;return ((function (switch__6557__auto__,c__6622__auto__){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_12804 = [null,null,null,null,null,null,null,null,null];(statearr_12804[(0)] = state_machine__6558__auto__);
(statearr_12804[(1)] = (1));
return statearr_12804;
});
var state_machine__6558__auto____1 = (function (state_12790){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_12790);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e12805){if((e12805 instanceof Object))
{var ex__6561__auto__ = e12805;var statearr_12806_12814 = state_12790;(statearr_12806_12814[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12790);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12805;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12815 = state_12790;
state_12790 = G__12815;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_12790){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_12790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto__))
})();var state__6624__auto__ = (function (){var statearr_12807 = f__6623__auto__.call(null);(statearr_12807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto__);
return statearr_12807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto__))
);
return c__6622__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6622__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto__){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto__){
return (function (state_12889){var state_val_12890 = (state_12889[(1)]);if((state_val_12890 === (7)))
{var inst_12871 = (state_12889[(2)]);var state_12889__$1 = state_12889;var statearr_12891_12914 = state_12889__$1;(statearr_12891_12914[(2)] = inst_12871);
(statearr_12891_12914[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (1)))
{var inst_12865 = cljs.core.seq.call(null,coll);var inst_12866 = inst_12865;var state_12889__$1 = (function (){var statearr_12892 = state_12889;(statearr_12892[(7)] = inst_12866);
return statearr_12892;
})();var statearr_12893_12915 = state_12889__$1;(statearr_12893_12915[(2)] = null);
(statearr_12893_12915[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (4)))
{var inst_12866 = (state_12889[(7)]);var inst_12869 = cljs.core.first.call(null,inst_12866);var state_12889__$1 = state_12889;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12889__$1,(7),ch,inst_12869);
} else
{if((state_val_12890 === (13)))
{var inst_12883 = (state_12889[(2)]);var state_12889__$1 = state_12889;var statearr_12894_12916 = state_12889__$1;(statearr_12894_12916[(2)] = inst_12883);
(statearr_12894_12916[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (6)))
{var inst_12874 = (state_12889[(2)]);var state_12889__$1 = state_12889;if(cljs.core.truth_(inst_12874))
{var statearr_12895_12917 = state_12889__$1;(statearr_12895_12917[(1)] = (8));
} else
{var statearr_12896_12918 = state_12889__$1;(statearr_12896_12918[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (3)))
{var inst_12887 = (state_12889[(2)]);var state_12889__$1 = state_12889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12889__$1,inst_12887);
} else
{if((state_val_12890 === (12)))
{var state_12889__$1 = state_12889;var statearr_12897_12919 = state_12889__$1;(statearr_12897_12919[(2)] = null);
(statearr_12897_12919[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (2)))
{var inst_12866 = (state_12889[(7)]);var state_12889__$1 = state_12889;if(cljs.core.truth_(inst_12866))
{var statearr_12898_12920 = state_12889__$1;(statearr_12898_12920[(1)] = (4));
} else
{var statearr_12899_12921 = state_12889__$1;(statearr_12899_12921[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (11)))
{var inst_12880 = cljs.core.async.close_BANG_.call(null,ch);var state_12889__$1 = state_12889;var statearr_12900_12922 = state_12889__$1;(statearr_12900_12922[(2)] = inst_12880);
(statearr_12900_12922[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (9)))
{var state_12889__$1 = state_12889;if(cljs.core.truth_(close_QMARK_))
{var statearr_12901_12923 = state_12889__$1;(statearr_12901_12923[(1)] = (11));
} else
{var statearr_12902_12924 = state_12889__$1;(statearr_12902_12924[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (5)))
{var inst_12866 = (state_12889[(7)]);var state_12889__$1 = state_12889;var statearr_12903_12925 = state_12889__$1;(statearr_12903_12925[(2)] = inst_12866);
(statearr_12903_12925[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (10)))
{var inst_12885 = (state_12889[(2)]);var state_12889__$1 = state_12889;var statearr_12904_12926 = state_12889__$1;(statearr_12904_12926[(2)] = inst_12885);
(statearr_12904_12926[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (8)))
{var inst_12866 = (state_12889[(7)]);var inst_12876 = cljs.core.next.call(null,inst_12866);var inst_12866__$1 = inst_12876;var state_12889__$1 = (function (){var statearr_12905 = state_12889;(statearr_12905[(7)] = inst_12866__$1);
return statearr_12905;
})();var statearr_12906_12927 = state_12889__$1;(statearr_12906_12927[(2)] = null);
(statearr_12906_12927[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6622__auto__))
;return ((function (switch__6557__auto__,c__6622__auto__){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_12910 = [null,null,null,null,null,null,null,null];(statearr_12910[(0)] = state_machine__6558__auto__);
(statearr_12910[(1)] = (1));
return statearr_12910;
});
var state_machine__6558__auto____1 = (function (state_12889){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_12889);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e12911){if((e12911 instanceof Object))
{var ex__6561__auto__ = e12911;var statearr_12912_12928 = state_12889;(statearr_12912_12928[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12889);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12911;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12929 = state_12889;
state_12889 = G__12929;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_12889){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_12889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto__))
})();var state__6624__auto__ = (function (){var statearr_12913 = f__6623__auto__.call(null);(statearr_12913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto__);
return statearr_12913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto__))
);
return c__6622__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12931 = {};return obj12931;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3627__auto__ = _;if(and__3627__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4275__auto__ = (((_ == null))?null:_);return (function (){var or__3639__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12933 = {};return obj12933;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13155 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13155 = (function (cs,ch,mult,meta13156){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13156 = meta13156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13155.cljs$lang$type = true;
cljs.core.async.t13155.cljs$lang$ctorStr = "cljs.core.async/t13155";
cljs.core.async.t13155.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t13155");
});})(cs))
;
cljs.core.async.t13155.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13155.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13155.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13155.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13155.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13155.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13157){var self__ = this;
var _13157__$1 = this;return self__.meta13156;
});})(cs))
;
cljs.core.async.t13155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13157,meta13156__$1){var self__ = this;
var _13157__$1 = this;return (new cljs.core.async.t13155(self__.cs,self__.ch,self__.mult,meta13156__$1));
});})(cs))
;
cljs.core.async.__GT_t13155 = ((function (cs){
return (function __GT_t13155(cs__$1,ch__$1,mult__$1,meta13156){return (new cljs.core.async.t13155(cs__$1,ch__$1,mult__$1,meta13156));
});})(cs))
;
}
return (new cljs.core.async.t13155(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6622__auto___13376 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto___13376,cs,m,dchan,dctr,done){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto___13376,cs,m,dchan,dctr,done){
return (function (state_13288){var state_val_13289 = (state_13288[(1)]);if((state_val_13289 === (7)))
{var inst_13284 = (state_13288[(2)]);var state_13288__$1 = state_13288;var statearr_13290_13377 = state_13288__$1;(statearr_13290_13377[(2)] = inst_13284);
(statearr_13290_13377[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (20)))
{var inst_13189 = (state_13288[(7)]);var inst_13199 = cljs.core.first.call(null,inst_13189);var inst_13200 = cljs.core.nth.call(null,inst_13199,(0),null);var inst_13201 = cljs.core.nth.call(null,inst_13199,(1),null);var state_13288__$1 = (function (){var statearr_13291 = state_13288;(statearr_13291[(8)] = inst_13200);
return statearr_13291;
})();if(cljs.core.truth_(inst_13201))
{var statearr_13292_13378 = state_13288__$1;(statearr_13292_13378[(1)] = (22));
} else
{var statearr_13293_13379 = state_13288__$1;(statearr_13293_13379[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (27)))
{var inst_13236 = (state_13288[(9)]);var inst_13229 = (state_13288[(10)]);var inst_13160 = (state_13288[(11)]);var inst_13231 = (state_13288[(12)]);var inst_13236__$1 = cljs.core._nth.call(null,inst_13229,inst_13231);var inst_13237 = cljs.core.async.put_BANG_.call(null,inst_13236__$1,inst_13160,done);var state_13288__$1 = (function (){var statearr_13294 = state_13288;(statearr_13294[(9)] = inst_13236__$1);
return statearr_13294;
})();if(cljs.core.truth_(inst_13237))
{var statearr_13295_13380 = state_13288__$1;(statearr_13295_13380[(1)] = (30));
} else
{var statearr_13296_13381 = state_13288__$1;(statearr_13296_13381[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (1)))
{var state_13288__$1 = state_13288;var statearr_13297_13382 = state_13288__$1;(statearr_13297_13382[(2)] = null);
(statearr_13297_13382[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (24)))
{var inst_13189 = (state_13288[(7)]);var inst_13206 = (state_13288[(2)]);var inst_13207 = cljs.core.next.call(null,inst_13189);var inst_13169 = inst_13207;var inst_13170 = null;var inst_13171 = (0);var inst_13172 = (0);var state_13288__$1 = (function (){var statearr_13298 = state_13288;(statearr_13298[(13)] = inst_13206);
(statearr_13298[(14)] = inst_13172);
(statearr_13298[(15)] = inst_13169);
(statearr_13298[(16)] = inst_13170);
(statearr_13298[(17)] = inst_13171);
return statearr_13298;
})();var statearr_13299_13383 = state_13288__$1;(statearr_13299_13383[(2)] = null);
(statearr_13299_13383[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (39)))
{var state_13288__$1 = state_13288;var statearr_13303_13384 = state_13288__$1;(statearr_13303_13384[(2)] = null);
(statearr_13303_13384[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (4)))
{var inst_13160 = (state_13288[(11)]);var inst_13160__$1 = (state_13288[(2)]);var inst_13161 = (inst_13160__$1 == null);var state_13288__$1 = (function (){var statearr_13304 = state_13288;(statearr_13304[(11)] = inst_13160__$1);
return statearr_13304;
})();if(cljs.core.truth_(inst_13161))
{var statearr_13305_13385 = state_13288__$1;(statearr_13305_13385[(1)] = (5));
} else
{var statearr_13306_13386 = state_13288__$1;(statearr_13306_13386[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (15)))
{var inst_13172 = (state_13288[(14)]);var inst_13169 = (state_13288[(15)]);var inst_13170 = (state_13288[(16)]);var inst_13171 = (state_13288[(17)]);var inst_13185 = (state_13288[(2)]);var inst_13186 = (inst_13172 + (1));var tmp13300 = inst_13169;var tmp13301 = inst_13170;var tmp13302 = inst_13171;var inst_13169__$1 = tmp13300;var inst_13170__$1 = tmp13301;var inst_13171__$1 = tmp13302;var inst_13172__$1 = inst_13186;var state_13288__$1 = (function (){var statearr_13307 = state_13288;(statearr_13307[(18)] = inst_13185);
(statearr_13307[(14)] = inst_13172__$1);
(statearr_13307[(15)] = inst_13169__$1);
(statearr_13307[(16)] = inst_13170__$1);
(statearr_13307[(17)] = inst_13171__$1);
return statearr_13307;
})();var statearr_13308_13387 = state_13288__$1;(statearr_13308_13387[(2)] = null);
(statearr_13308_13387[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (21)))
{var inst_13210 = (state_13288[(2)]);var state_13288__$1 = state_13288;var statearr_13312_13388 = state_13288__$1;(statearr_13312_13388[(2)] = inst_13210);
(statearr_13312_13388[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (31)))
{var inst_13236 = (state_13288[(9)]);var inst_13240 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13241 = cljs.core.async.untap_STAR_.call(null,m,inst_13236);var state_13288__$1 = (function (){var statearr_13313 = state_13288;(statearr_13313[(19)] = inst_13240);
return statearr_13313;
})();var statearr_13314_13389 = state_13288__$1;(statearr_13314_13389[(2)] = inst_13241);
(statearr_13314_13389[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (32)))
{var inst_13229 = (state_13288[(10)]);var inst_13231 = (state_13288[(12)]);var inst_13230 = (state_13288[(20)]);var inst_13228 = (state_13288[(21)]);var inst_13243 = (state_13288[(2)]);var inst_13244 = (inst_13231 + (1));var tmp13309 = inst_13229;var tmp13310 = inst_13230;var tmp13311 = inst_13228;var inst_13228__$1 = tmp13311;var inst_13229__$1 = tmp13309;var inst_13230__$1 = tmp13310;var inst_13231__$1 = inst_13244;var state_13288__$1 = (function (){var statearr_13315 = state_13288;(statearr_13315[(10)] = inst_13229__$1);
(statearr_13315[(12)] = inst_13231__$1);
(statearr_13315[(20)] = inst_13230__$1);
(statearr_13315[(21)] = inst_13228__$1);
(statearr_13315[(22)] = inst_13243);
return statearr_13315;
})();var statearr_13316_13390 = state_13288__$1;(statearr_13316_13390[(2)] = null);
(statearr_13316_13390[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (40)))
{var inst_13256 = (state_13288[(23)]);var inst_13260 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13261 = cljs.core.async.untap_STAR_.call(null,m,inst_13256);var state_13288__$1 = (function (){var statearr_13317 = state_13288;(statearr_13317[(24)] = inst_13260);
return statearr_13317;
})();var statearr_13318_13391 = state_13288__$1;(statearr_13318_13391[(2)] = inst_13261);
(statearr_13318_13391[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (33)))
{var inst_13247 = (state_13288[(25)]);var inst_13249 = cljs.core.chunked_seq_QMARK_.call(null,inst_13247);var state_13288__$1 = state_13288;if(inst_13249)
{var statearr_13319_13392 = state_13288__$1;(statearr_13319_13392[(1)] = (36));
} else
{var statearr_13320_13393 = state_13288__$1;(statearr_13320_13393[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (13)))
{var inst_13179 = (state_13288[(26)]);var inst_13182 = cljs.core.async.close_BANG_.call(null,inst_13179);var state_13288__$1 = state_13288;var statearr_13321_13394 = state_13288__$1;(statearr_13321_13394[(2)] = inst_13182);
(statearr_13321_13394[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (22)))
{var inst_13200 = (state_13288[(8)]);var inst_13203 = cljs.core.async.close_BANG_.call(null,inst_13200);var state_13288__$1 = state_13288;var statearr_13322_13395 = state_13288__$1;(statearr_13322_13395[(2)] = inst_13203);
(statearr_13322_13395[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (36)))
{var inst_13247 = (state_13288[(25)]);var inst_13251 = cljs.core.chunk_first.call(null,inst_13247);var inst_13252 = cljs.core.chunk_rest.call(null,inst_13247);var inst_13253 = cljs.core.count.call(null,inst_13251);var inst_13228 = inst_13252;var inst_13229 = inst_13251;var inst_13230 = inst_13253;var inst_13231 = (0);var state_13288__$1 = (function (){var statearr_13323 = state_13288;(statearr_13323[(10)] = inst_13229);
(statearr_13323[(12)] = inst_13231);
(statearr_13323[(20)] = inst_13230);
(statearr_13323[(21)] = inst_13228);
return statearr_13323;
})();var statearr_13324_13396 = state_13288__$1;(statearr_13324_13396[(2)] = null);
(statearr_13324_13396[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (41)))
{var inst_13247 = (state_13288[(25)]);var inst_13263 = (state_13288[(2)]);var inst_13264 = cljs.core.next.call(null,inst_13247);var inst_13228 = inst_13264;var inst_13229 = null;var inst_13230 = (0);var inst_13231 = (0);var state_13288__$1 = (function (){var statearr_13325 = state_13288;(statearr_13325[(10)] = inst_13229);
(statearr_13325[(27)] = inst_13263);
(statearr_13325[(12)] = inst_13231);
(statearr_13325[(20)] = inst_13230);
(statearr_13325[(21)] = inst_13228);
return statearr_13325;
})();var statearr_13326_13397 = state_13288__$1;(statearr_13326_13397[(2)] = null);
(statearr_13326_13397[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (43)))
{var state_13288__$1 = state_13288;var statearr_13327_13398 = state_13288__$1;(statearr_13327_13398[(2)] = null);
(statearr_13327_13398[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (29)))
{var inst_13272 = (state_13288[(2)]);var state_13288__$1 = state_13288;var statearr_13328_13399 = state_13288__$1;(statearr_13328_13399[(2)] = inst_13272);
(statearr_13328_13399[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (44)))
{var inst_13281 = (state_13288[(2)]);var state_13288__$1 = (function (){var statearr_13329 = state_13288;(statearr_13329[(28)] = inst_13281);
return statearr_13329;
})();var statearr_13330_13400 = state_13288__$1;(statearr_13330_13400[(2)] = null);
(statearr_13330_13400[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (6)))
{var inst_13220 = (state_13288[(29)]);var inst_13219 = cljs.core.deref.call(null,cs);var inst_13220__$1 = cljs.core.keys.call(null,inst_13219);var inst_13221 = cljs.core.count.call(null,inst_13220__$1);var inst_13222 = cljs.core.reset_BANG_.call(null,dctr,inst_13221);var inst_13227 = cljs.core.seq.call(null,inst_13220__$1);var inst_13228 = inst_13227;var inst_13229 = null;var inst_13230 = (0);var inst_13231 = (0);var state_13288__$1 = (function (){var statearr_13331 = state_13288;(statearr_13331[(10)] = inst_13229);
(statearr_13331[(29)] = inst_13220__$1);
(statearr_13331[(30)] = inst_13222);
(statearr_13331[(12)] = inst_13231);
(statearr_13331[(20)] = inst_13230);
(statearr_13331[(21)] = inst_13228);
return statearr_13331;
})();var statearr_13332_13401 = state_13288__$1;(statearr_13332_13401[(2)] = null);
(statearr_13332_13401[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (28)))
{var inst_13247 = (state_13288[(25)]);var inst_13228 = (state_13288[(21)]);var inst_13247__$1 = cljs.core.seq.call(null,inst_13228);var state_13288__$1 = (function (){var statearr_13333 = state_13288;(statearr_13333[(25)] = inst_13247__$1);
return statearr_13333;
})();if(inst_13247__$1)
{var statearr_13334_13402 = state_13288__$1;(statearr_13334_13402[(1)] = (33));
} else
{var statearr_13335_13403 = state_13288__$1;(statearr_13335_13403[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (25)))
{var inst_13231 = (state_13288[(12)]);var inst_13230 = (state_13288[(20)]);var inst_13233 = (inst_13231 < inst_13230);var inst_13234 = inst_13233;var state_13288__$1 = state_13288;if(cljs.core.truth_(inst_13234))
{var statearr_13336_13404 = state_13288__$1;(statearr_13336_13404[(1)] = (27));
} else
{var statearr_13337_13405 = state_13288__$1;(statearr_13337_13405[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (34)))
{var state_13288__$1 = state_13288;var statearr_13338_13406 = state_13288__$1;(statearr_13338_13406[(2)] = null);
(statearr_13338_13406[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (17)))
{var state_13288__$1 = state_13288;var statearr_13339_13407 = state_13288__$1;(statearr_13339_13407[(2)] = null);
(statearr_13339_13407[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (3)))
{var inst_13286 = (state_13288[(2)]);var state_13288__$1 = state_13288;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13288__$1,inst_13286);
} else
{if((state_val_13289 === (12)))
{var inst_13215 = (state_13288[(2)]);var state_13288__$1 = state_13288;var statearr_13340_13408 = state_13288__$1;(statearr_13340_13408[(2)] = inst_13215);
(statearr_13340_13408[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (2)))
{var state_13288__$1 = state_13288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13288__$1,(4),ch);
} else
{if((state_val_13289 === (23)))
{var state_13288__$1 = state_13288;var statearr_13341_13409 = state_13288__$1;(statearr_13341_13409[(2)] = null);
(statearr_13341_13409[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (35)))
{var inst_13270 = (state_13288[(2)]);var state_13288__$1 = state_13288;var statearr_13342_13410 = state_13288__$1;(statearr_13342_13410[(2)] = inst_13270);
(statearr_13342_13410[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (19)))
{var inst_13189 = (state_13288[(7)]);var inst_13193 = cljs.core.chunk_first.call(null,inst_13189);var inst_13194 = cljs.core.chunk_rest.call(null,inst_13189);var inst_13195 = cljs.core.count.call(null,inst_13193);var inst_13169 = inst_13194;var inst_13170 = inst_13193;var inst_13171 = inst_13195;var inst_13172 = (0);var state_13288__$1 = (function (){var statearr_13343 = state_13288;(statearr_13343[(14)] = inst_13172);
(statearr_13343[(15)] = inst_13169);
(statearr_13343[(16)] = inst_13170);
(statearr_13343[(17)] = inst_13171);
return statearr_13343;
})();var statearr_13344_13411 = state_13288__$1;(statearr_13344_13411[(2)] = null);
(statearr_13344_13411[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (11)))
{var inst_13189 = (state_13288[(7)]);var inst_13169 = (state_13288[(15)]);var inst_13189__$1 = cljs.core.seq.call(null,inst_13169);var state_13288__$1 = (function (){var statearr_13345 = state_13288;(statearr_13345[(7)] = inst_13189__$1);
return statearr_13345;
})();if(inst_13189__$1)
{var statearr_13346_13412 = state_13288__$1;(statearr_13346_13412[(1)] = (16));
} else
{var statearr_13347_13413 = state_13288__$1;(statearr_13347_13413[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (9)))
{var inst_13217 = (state_13288[(2)]);var state_13288__$1 = state_13288;var statearr_13348_13414 = state_13288__$1;(statearr_13348_13414[(2)] = inst_13217);
(statearr_13348_13414[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (5)))
{var inst_13167 = cljs.core.deref.call(null,cs);var inst_13168 = cljs.core.seq.call(null,inst_13167);var inst_13169 = inst_13168;var inst_13170 = null;var inst_13171 = (0);var inst_13172 = (0);var state_13288__$1 = (function (){var statearr_13349 = state_13288;(statearr_13349[(14)] = inst_13172);
(statearr_13349[(15)] = inst_13169);
(statearr_13349[(16)] = inst_13170);
(statearr_13349[(17)] = inst_13171);
return statearr_13349;
})();var statearr_13350_13415 = state_13288__$1;(statearr_13350_13415[(2)] = null);
(statearr_13350_13415[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (14)))
{var state_13288__$1 = state_13288;var statearr_13351_13416 = state_13288__$1;(statearr_13351_13416[(2)] = null);
(statearr_13351_13416[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (45)))
{var inst_13278 = (state_13288[(2)]);var state_13288__$1 = state_13288;var statearr_13352_13417 = state_13288__$1;(statearr_13352_13417[(2)] = inst_13278);
(statearr_13352_13417[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (26)))
{var inst_13220 = (state_13288[(29)]);var inst_13274 = (state_13288[(2)]);var inst_13275 = cljs.core.seq.call(null,inst_13220);var state_13288__$1 = (function (){var statearr_13353 = state_13288;(statearr_13353[(31)] = inst_13274);
return statearr_13353;
})();if(inst_13275)
{var statearr_13354_13418 = state_13288__$1;(statearr_13354_13418[(1)] = (42));
} else
{var statearr_13355_13419 = state_13288__$1;(statearr_13355_13419[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (16)))
{var inst_13189 = (state_13288[(7)]);var inst_13191 = cljs.core.chunked_seq_QMARK_.call(null,inst_13189);var state_13288__$1 = state_13288;if(inst_13191)
{var statearr_13356_13420 = state_13288__$1;(statearr_13356_13420[(1)] = (19));
} else
{var statearr_13357_13421 = state_13288__$1;(statearr_13357_13421[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (38)))
{var inst_13267 = (state_13288[(2)]);var state_13288__$1 = state_13288;var statearr_13358_13422 = state_13288__$1;(statearr_13358_13422[(2)] = inst_13267);
(statearr_13358_13422[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (30)))
{var state_13288__$1 = state_13288;var statearr_13359_13423 = state_13288__$1;(statearr_13359_13423[(2)] = null);
(statearr_13359_13423[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (10)))
{var inst_13172 = (state_13288[(14)]);var inst_13170 = (state_13288[(16)]);var inst_13178 = cljs.core._nth.call(null,inst_13170,inst_13172);var inst_13179 = cljs.core.nth.call(null,inst_13178,(0),null);var inst_13180 = cljs.core.nth.call(null,inst_13178,(1),null);var state_13288__$1 = (function (){var statearr_13360 = state_13288;(statearr_13360[(26)] = inst_13179);
return statearr_13360;
})();if(cljs.core.truth_(inst_13180))
{var statearr_13361_13424 = state_13288__$1;(statearr_13361_13424[(1)] = (13));
} else
{var statearr_13362_13425 = state_13288__$1;(statearr_13362_13425[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (18)))
{var inst_13213 = (state_13288[(2)]);var state_13288__$1 = state_13288;var statearr_13363_13426 = state_13288__$1;(statearr_13363_13426[(2)] = inst_13213);
(statearr_13363_13426[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (42)))
{var state_13288__$1 = state_13288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13288__$1,(45),dchan);
} else
{if((state_val_13289 === (37)))
{var inst_13256 = (state_13288[(23)]);var inst_13247 = (state_13288[(25)]);var inst_13160 = (state_13288[(11)]);var inst_13256__$1 = cljs.core.first.call(null,inst_13247);var inst_13257 = cljs.core.async.put_BANG_.call(null,inst_13256__$1,inst_13160,done);var state_13288__$1 = (function (){var statearr_13364 = state_13288;(statearr_13364[(23)] = inst_13256__$1);
return statearr_13364;
})();if(cljs.core.truth_(inst_13257))
{var statearr_13365_13427 = state_13288__$1;(statearr_13365_13427[(1)] = (39));
} else
{var statearr_13366_13428 = state_13288__$1;(statearr_13366_13428[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13289 === (8)))
{var inst_13172 = (state_13288[(14)]);var inst_13171 = (state_13288[(17)]);var inst_13174 = (inst_13172 < inst_13171);var inst_13175 = inst_13174;var state_13288__$1 = state_13288;if(cljs.core.truth_(inst_13175))
{var statearr_13367_13429 = state_13288__$1;(statearr_13367_13429[(1)] = (10));
} else
{var statearr_13368_13430 = state_13288__$1;(statearr_13368_13430[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6622__auto___13376,cs,m,dchan,dctr,done))
;return ((function (switch__6557__auto__,c__6622__auto___13376,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_13372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13372[(0)] = state_machine__6558__auto__);
(statearr_13372[(1)] = (1));
return statearr_13372;
});
var state_machine__6558__auto____1 = (function (state_13288){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_13288);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e13373){if((e13373 instanceof Object))
{var ex__6561__auto__ = e13373;var statearr_13374_13431 = state_13288;(statearr_13374_13431[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13288);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13373;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13432 = state_13288;
state_13288 = G__13432;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_13288){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_13288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto___13376,cs,m,dchan,dctr,done))
})();var state__6624__auto__ = (function (){var statearr_13375 = f__6623__auto__.call(null);(statearr_13375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto___13376);
return statearr_13375;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto___13376,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13434 = {};return obj13434;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13554 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13554 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13555){
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
this.meta13555 = meta13555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13554.cljs$lang$type = true;
cljs.core.async.t13554.cljs$lang$ctorStr = "cljs.core.async/t13554";
cljs.core.async.t13554.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t13554");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13554.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13554.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13554.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13554.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13554.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13554.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13554.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13554.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13556){var self__ = this;
var _13556__$1 = this;return self__.meta13555;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13556,meta13555__$1){var self__ = this;
var _13556__$1 = this;return (new cljs.core.async.t13554(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13555__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13554 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13554(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13555){return (new cljs.core.async.t13554(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13555));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13554(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6622__auto___13673 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto___13673,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto___13673,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13626){var state_val_13627 = (state_13626[(1)]);if((state_val_13627 === (7)))
{var inst_13570 = (state_13626[(7)]);var inst_13575 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13570);var state_13626__$1 = state_13626;var statearr_13628_13674 = state_13626__$1;(statearr_13628_13674[(2)] = inst_13575);
(statearr_13628_13674[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (20)))
{var inst_13585 = (state_13626[(8)]);var state_13626__$1 = state_13626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13626__$1,(23),out,inst_13585);
} else
{if((state_val_13627 === (1)))
{var inst_13560 = (state_13626[(9)]);var inst_13560__$1 = calc_state.call(null);var inst_13561 = cljs.core.seq_QMARK_.call(null,inst_13560__$1);var state_13626__$1 = (function (){var statearr_13629 = state_13626;(statearr_13629[(9)] = inst_13560__$1);
return statearr_13629;
})();if(inst_13561)
{var statearr_13630_13675 = state_13626__$1;(statearr_13630_13675[(1)] = (2));
} else
{var statearr_13631_13676 = state_13626__$1;(statearr_13631_13676[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (24)))
{var inst_13578 = (state_13626[(10)]);var inst_13570 = inst_13578;var state_13626__$1 = (function (){var statearr_13632 = state_13626;(statearr_13632[(7)] = inst_13570);
return statearr_13632;
})();var statearr_13633_13677 = state_13626__$1;(statearr_13633_13677[(2)] = null);
(statearr_13633_13677[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (4)))
{var inst_13560 = (state_13626[(9)]);var inst_13566 = (state_13626[(2)]);var inst_13567 = cljs.core.get.call(null,inst_13566,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13568 = cljs.core.get.call(null,inst_13566,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13569 = cljs.core.get.call(null,inst_13566,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13570 = inst_13560;var state_13626__$1 = (function (){var statearr_13634 = state_13626;(statearr_13634[(11)] = inst_13569);
(statearr_13634[(12)] = inst_13567);
(statearr_13634[(7)] = inst_13570);
(statearr_13634[(13)] = inst_13568);
return statearr_13634;
})();var statearr_13635_13678 = state_13626__$1;(statearr_13635_13678[(2)] = null);
(statearr_13635_13678[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (15)))
{var state_13626__$1 = state_13626;var statearr_13636_13679 = state_13626__$1;(statearr_13636_13679[(2)] = null);
(statearr_13636_13679[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (21)))
{var inst_13578 = (state_13626[(10)]);var inst_13570 = inst_13578;var state_13626__$1 = (function (){var statearr_13637 = state_13626;(statearr_13637[(7)] = inst_13570);
return statearr_13637;
})();var statearr_13638_13680 = state_13626__$1;(statearr_13638_13680[(2)] = null);
(statearr_13638_13680[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (13)))
{var inst_13622 = (state_13626[(2)]);var state_13626__$1 = state_13626;var statearr_13639_13681 = state_13626__$1;(statearr_13639_13681[(2)] = inst_13622);
(statearr_13639_13681[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (22)))
{var inst_13620 = (state_13626[(2)]);var state_13626__$1 = state_13626;var statearr_13640_13682 = state_13626__$1;(statearr_13640_13682[(2)] = inst_13620);
(statearr_13640_13682[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (6)))
{var inst_13624 = (state_13626[(2)]);var state_13626__$1 = state_13626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13626__$1,inst_13624);
} else
{if((state_val_13627 === (25)))
{var state_13626__$1 = state_13626;var statearr_13641_13683 = state_13626__$1;(statearr_13641_13683[(2)] = null);
(statearr_13641_13683[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (17)))
{var inst_13600 = (state_13626[(14)]);var state_13626__$1 = state_13626;var statearr_13642_13684 = state_13626__$1;(statearr_13642_13684[(2)] = inst_13600);
(statearr_13642_13684[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (3)))
{var inst_13560 = (state_13626[(9)]);var state_13626__$1 = state_13626;var statearr_13643_13685 = state_13626__$1;(statearr_13643_13685[(2)] = inst_13560);
(statearr_13643_13685[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (12)))
{var inst_13586 = (state_13626[(15)]);var inst_13581 = (state_13626[(16)]);var inst_13600 = (state_13626[(14)]);var inst_13600__$1 = inst_13581.call(null,inst_13586);var state_13626__$1 = (function (){var statearr_13644 = state_13626;(statearr_13644[(14)] = inst_13600__$1);
return statearr_13644;
})();if(cljs.core.truth_(inst_13600__$1))
{var statearr_13645_13686 = state_13626__$1;(statearr_13645_13686[(1)] = (17));
} else
{var statearr_13646_13687 = state_13626__$1;(statearr_13646_13687[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (2)))
{var inst_13560 = (state_13626[(9)]);var inst_13563 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13560);var state_13626__$1 = state_13626;var statearr_13647_13688 = state_13626__$1;(statearr_13647_13688[(2)] = inst_13563);
(statearr_13647_13688[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (23)))
{var inst_13611 = (state_13626[(2)]);var state_13626__$1 = state_13626;if(cljs.core.truth_(inst_13611))
{var statearr_13648_13689 = state_13626__$1;(statearr_13648_13689[(1)] = (24));
} else
{var statearr_13649_13690 = state_13626__$1;(statearr_13649_13690[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (19)))
{var inst_13608 = (state_13626[(2)]);var state_13626__$1 = state_13626;if(cljs.core.truth_(inst_13608))
{var statearr_13650_13691 = state_13626__$1;(statearr_13650_13691[(1)] = (20));
} else
{var statearr_13651_13692 = state_13626__$1;(statearr_13651_13692[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (11)))
{var inst_13585 = (state_13626[(8)]);var inst_13591 = (inst_13585 == null);var state_13626__$1 = state_13626;if(cljs.core.truth_(inst_13591))
{var statearr_13652_13693 = state_13626__$1;(statearr_13652_13693[(1)] = (14));
} else
{var statearr_13653_13694 = state_13626__$1;(statearr_13653_13694[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (9)))
{var inst_13578 = (state_13626[(10)]);var inst_13578__$1 = (state_13626[(2)]);var inst_13579 = cljs.core.get.call(null,inst_13578__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13580 = cljs.core.get.call(null,inst_13578__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13581 = cljs.core.get.call(null,inst_13578__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13626__$1 = (function (){var statearr_13654 = state_13626;(statearr_13654[(16)] = inst_13581);
(statearr_13654[(17)] = inst_13580);
(statearr_13654[(10)] = inst_13578__$1);
return statearr_13654;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13626__$1,(10),inst_13579);
} else
{if((state_val_13627 === (5)))
{var inst_13570 = (state_13626[(7)]);var inst_13573 = cljs.core.seq_QMARK_.call(null,inst_13570);var state_13626__$1 = state_13626;if(inst_13573)
{var statearr_13655_13695 = state_13626__$1;(statearr_13655_13695[(1)] = (7));
} else
{var statearr_13656_13696 = state_13626__$1;(statearr_13656_13696[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (14)))
{var inst_13586 = (state_13626[(15)]);var inst_13593 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13586);var state_13626__$1 = state_13626;var statearr_13657_13697 = state_13626__$1;(statearr_13657_13697[(2)] = inst_13593);
(statearr_13657_13697[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (26)))
{var inst_13616 = (state_13626[(2)]);var state_13626__$1 = state_13626;var statearr_13658_13698 = state_13626__$1;(statearr_13658_13698[(2)] = inst_13616);
(statearr_13658_13698[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (16)))
{var inst_13596 = (state_13626[(2)]);var inst_13597 = calc_state.call(null);var inst_13570 = inst_13597;var state_13626__$1 = (function (){var statearr_13659 = state_13626;(statearr_13659[(7)] = inst_13570);
(statearr_13659[(18)] = inst_13596);
return statearr_13659;
})();var statearr_13660_13699 = state_13626__$1;(statearr_13660_13699[(2)] = null);
(statearr_13660_13699[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (10)))
{var inst_13585 = (state_13626[(8)]);var inst_13586 = (state_13626[(15)]);var inst_13584 = (state_13626[(2)]);var inst_13585__$1 = cljs.core.nth.call(null,inst_13584,(0),null);var inst_13586__$1 = cljs.core.nth.call(null,inst_13584,(1),null);var inst_13587 = (inst_13585__$1 == null);var inst_13588 = cljs.core._EQ_.call(null,inst_13586__$1,change);var inst_13589 = (inst_13587) || (inst_13588);var state_13626__$1 = (function (){var statearr_13661 = state_13626;(statearr_13661[(8)] = inst_13585__$1);
(statearr_13661[(15)] = inst_13586__$1);
return statearr_13661;
})();if(cljs.core.truth_(inst_13589))
{var statearr_13662_13700 = state_13626__$1;(statearr_13662_13700[(1)] = (11));
} else
{var statearr_13663_13701 = state_13626__$1;(statearr_13663_13701[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (18)))
{var inst_13586 = (state_13626[(15)]);var inst_13581 = (state_13626[(16)]);var inst_13580 = (state_13626[(17)]);var inst_13603 = cljs.core.empty_QMARK_.call(null,inst_13581);var inst_13604 = inst_13580.call(null,inst_13586);var inst_13605 = cljs.core.not.call(null,inst_13604);var inst_13606 = (inst_13603) && (inst_13605);var state_13626__$1 = state_13626;var statearr_13664_13702 = state_13626__$1;(statearr_13664_13702[(2)] = inst_13606);
(statearr_13664_13702[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13627 === (8)))
{var inst_13570 = (state_13626[(7)]);var state_13626__$1 = state_13626;var statearr_13665_13703 = state_13626__$1;(statearr_13665_13703[(2)] = inst_13570);
(statearr_13665_13703[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6622__auto___13673,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6557__auto__,c__6622__auto___13673,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_13669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13669[(0)] = state_machine__6558__auto__);
(statearr_13669[(1)] = (1));
return statearr_13669;
});
var state_machine__6558__auto____1 = (function (state_13626){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_13626);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e13670){if((e13670 instanceof Object))
{var ex__6561__auto__ = e13670;var statearr_13671_13704 = state_13626;(statearr_13671_13704[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13626);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13670;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13705 = state_13626;
state_13626 = G__13705;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_13626){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_13626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto___13673,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6624__auto__ = (function (){var statearr_13672 = f__6623__auto__.call(null);(statearr_13672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto___13673);
return statearr_13672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto___13673,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13707 = {};return obj13707;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3639__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3639__auto__,mults){
return (function (p1__13708_SHARP_){if(cljs.core.truth_(p1__13708_SHARP_.call(null,topic)))
{return p1__13708_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13708_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13823 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13823 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13824){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13824 = meta13824;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13823.cljs$lang$type = true;
cljs.core.async.t13823.cljs$lang$ctorStr = "cljs.core.async/t13823";
cljs.core.async.t13823.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t13823");
});})(mults,ensure_mult))
;
cljs.core.async.t13823.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13823.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13823.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13823.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13823.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13823.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13823.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13825){var self__ = this;
var _13825__$1 = this;return self__.meta13824;
});})(mults,ensure_mult))
;
cljs.core.async.t13823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13825,meta13824__$1){var self__ = this;
var _13825__$1 = this;return (new cljs.core.async.t13823(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13824__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13823 = ((function (mults,ensure_mult){
return (function __GT_t13823(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13824){return (new cljs.core.async.t13823(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13824));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13823(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6622__auto___13937 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto___13937,mults,ensure_mult,p){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto___13937,mults,ensure_mult,p){
return (function (state_13893){var state_val_13894 = (state_13893[(1)]);if((state_val_13894 === (7)))
{var inst_13889 = (state_13893[(2)]);var state_13893__$1 = state_13893;var statearr_13895_13938 = state_13893__$1;(statearr_13895_13938[(2)] = inst_13889);
(statearr_13895_13938[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (20)))
{var state_13893__$1 = state_13893;var statearr_13896_13939 = state_13893__$1;(statearr_13896_13939[(2)] = null);
(statearr_13896_13939[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (1)))
{var state_13893__$1 = state_13893;var statearr_13897_13940 = state_13893__$1;(statearr_13897_13940[(2)] = null);
(statearr_13897_13940[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (4)))
{var inst_13828 = (state_13893[(7)]);var inst_13828__$1 = (state_13893[(2)]);var inst_13829 = (inst_13828__$1 == null);var state_13893__$1 = (function (){var statearr_13898 = state_13893;(statearr_13898[(7)] = inst_13828__$1);
return statearr_13898;
})();if(cljs.core.truth_(inst_13829))
{var statearr_13899_13941 = state_13893__$1;(statearr_13899_13941[(1)] = (5));
} else
{var statearr_13900_13942 = state_13893__$1;(statearr_13900_13942[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (15)))
{var inst_13870 = (state_13893[(2)]);var state_13893__$1 = state_13893;var statearr_13901_13943 = state_13893__$1;(statearr_13901_13943[(2)] = inst_13870);
(statearr_13901_13943[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (21)))
{var inst_13876 = (state_13893[(8)]);var inst_13884 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13876);var state_13893__$1 = state_13893;var statearr_13902_13944 = state_13893__$1;(statearr_13902_13944[(2)] = inst_13884);
(statearr_13902_13944[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (13)))
{var inst_13852 = (state_13893[(9)]);var inst_13854 = cljs.core.chunked_seq_QMARK_.call(null,inst_13852);var state_13893__$1 = state_13893;if(inst_13854)
{var statearr_13903_13945 = state_13893__$1;(statearr_13903_13945[(1)] = (16));
} else
{var statearr_13904_13946 = state_13893__$1;(statearr_13904_13946[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (22)))
{var inst_13886 = (state_13893[(2)]);var state_13893__$1 = (function (){var statearr_13905 = state_13893;(statearr_13905[(10)] = inst_13886);
return statearr_13905;
})();var statearr_13906_13947 = state_13893__$1;(statearr_13906_13947[(2)] = null);
(statearr_13906_13947[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (6)))
{var inst_13828 = (state_13893[(7)]);var inst_13876 = (state_13893[(8)]);var inst_13876__$1 = topic_fn.call(null,inst_13828);var inst_13877 = cljs.core.deref.call(null,mults);var inst_13878 = cljs.core.get.call(null,inst_13877,inst_13876__$1);var inst_13879 = cljs.core.async.muxch_STAR_.call(null,inst_13878);var state_13893__$1 = (function (){var statearr_13907 = state_13893;(statearr_13907[(8)] = inst_13876__$1);
return statearr_13907;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13893__$1,(19),inst_13879,inst_13828);
} else
{if((state_val_13894 === (17)))
{var inst_13852 = (state_13893[(9)]);var inst_13861 = cljs.core.first.call(null,inst_13852);var inst_13862 = cljs.core.async.muxch_STAR_.call(null,inst_13861);var inst_13863 = cljs.core.async.close_BANG_.call(null,inst_13862);var inst_13864 = cljs.core.next.call(null,inst_13852);var inst_13838 = inst_13864;var inst_13839 = null;var inst_13840 = (0);var inst_13841 = (0);var state_13893__$1 = (function (){var statearr_13908 = state_13893;(statearr_13908[(11)] = inst_13838);
(statearr_13908[(12)] = inst_13841);
(statearr_13908[(13)] = inst_13863);
(statearr_13908[(14)] = inst_13839);
(statearr_13908[(15)] = inst_13840);
return statearr_13908;
})();var statearr_13909_13948 = state_13893__$1;(statearr_13909_13948[(2)] = null);
(statearr_13909_13948[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (3)))
{var inst_13891 = (state_13893[(2)]);var state_13893__$1 = state_13893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13893__$1,inst_13891);
} else
{if((state_val_13894 === (12)))
{var inst_13872 = (state_13893[(2)]);var state_13893__$1 = state_13893;var statearr_13910_13949 = state_13893__$1;(statearr_13910_13949[(2)] = inst_13872);
(statearr_13910_13949[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (2)))
{var state_13893__$1 = state_13893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13893__$1,(4),ch);
} else
{if((state_val_13894 === (19)))
{var inst_13881 = (state_13893[(2)]);var state_13893__$1 = state_13893;if(cljs.core.truth_(inst_13881))
{var statearr_13911_13950 = state_13893__$1;(statearr_13911_13950[(1)] = (20));
} else
{var statearr_13912_13951 = state_13893__$1;(statearr_13912_13951[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (11)))
{var inst_13838 = (state_13893[(11)]);var inst_13852 = (state_13893[(9)]);var inst_13852__$1 = cljs.core.seq.call(null,inst_13838);var state_13893__$1 = (function (){var statearr_13913 = state_13893;(statearr_13913[(9)] = inst_13852__$1);
return statearr_13913;
})();if(inst_13852__$1)
{var statearr_13914_13952 = state_13893__$1;(statearr_13914_13952[(1)] = (13));
} else
{var statearr_13915_13953 = state_13893__$1;(statearr_13915_13953[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (9)))
{var inst_13874 = (state_13893[(2)]);var state_13893__$1 = state_13893;var statearr_13916_13954 = state_13893__$1;(statearr_13916_13954[(2)] = inst_13874);
(statearr_13916_13954[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (5)))
{var inst_13835 = cljs.core.deref.call(null,mults);var inst_13836 = cljs.core.vals.call(null,inst_13835);var inst_13837 = cljs.core.seq.call(null,inst_13836);var inst_13838 = inst_13837;var inst_13839 = null;var inst_13840 = (0);var inst_13841 = (0);var state_13893__$1 = (function (){var statearr_13917 = state_13893;(statearr_13917[(11)] = inst_13838);
(statearr_13917[(12)] = inst_13841);
(statearr_13917[(14)] = inst_13839);
(statearr_13917[(15)] = inst_13840);
return statearr_13917;
})();var statearr_13918_13955 = state_13893__$1;(statearr_13918_13955[(2)] = null);
(statearr_13918_13955[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (14)))
{var state_13893__$1 = state_13893;var statearr_13922_13956 = state_13893__$1;(statearr_13922_13956[(2)] = null);
(statearr_13922_13956[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (16)))
{var inst_13852 = (state_13893[(9)]);var inst_13856 = cljs.core.chunk_first.call(null,inst_13852);var inst_13857 = cljs.core.chunk_rest.call(null,inst_13852);var inst_13858 = cljs.core.count.call(null,inst_13856);var inst_13838 = inst_13857;var inst_13839 = inst_13856;var inst_13840 = inst_13858;var inst_13841 = (0);var state_13893__$1 = (function (){var statearr_13923 = state_13893;(statearr_13923[(11)] = inst_13838);
(statearr_13923[(12)] = inst_13841);
(statearr_13923[(14)] = inst_13839);
(statearr_13923[(15)] = inst_13840);
return statearr_13923;
})();var statearr_13924_13957 = state_13893__$1;(statearr_13924_13957[(2)] = null);
(statearr_13924_13957[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (10)))
{var inst_13838 = (state_13893[(11)]);var inst_13841 = (state_13893[(12)]);var inst_13839 = (state_13893[(14)]);var inst_13840 = (state_13893[(15)]);var inst_13846 = cljs.core._nth.call(null,inst_13839,inst_13841);var inst_13847 = cljs.core.async.muxch_STAR_.call(null,inst_13846);var inst_13848 = cljs.core.async.close_BANG_.call(null,inst_13847);var inst_13849 = (inst_13841 + (1));var tmp13919 = inst_13838;var tmp13920 = inst_13839;var tmp13921 = inst_13840;var inst_13838__$1 = tmp13919;var inst_13839__$1 = tmp13920;var inst_13840__$1 = tmp13921;var inst_13841__$1 = inst_13849;var state_13893__$1 = (function (){var statearr_13925 = state_13893;(statearr_13925[(11)] = inst_13838__$1);
(statearr_13925[(16)] = inst_13848);
(statearr_13925[(12)] = inst_13841__$1);
(statearr_13925[(14)] = inst_13839__$1);
(statearr_13925[(15)] = inst_13840__$1);
return statearr_13925;
})();var statearr_13926_13958 = state_13893__$1;(statearr_13926_13958[(2)] = null);
(statearr_13926_13958[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (18)))
{var inst_13867 = (state_13893[(2)]);var state_13893__$1 = state_13893;var statearr_13927_13959 = state_13893__$1;(statearr_13927_13959[(2)] = inst_13867);
(statearr_13927_13959[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13894 === (8)))
{var inst_13841 = (state_13893[(12)]);var inst_13840 = (state_13893[(15)]);var inst_13843 = (inst_13841 < inst_13840);var inst_13844 = inst_13843;var state_13893__$1 = state_13893;if(cljs.core.truth_(inst_13844))
{var statearr_13928_13960 = state_13893__$1;(statearr_13928_13960[(1)] = (10));
} else
{var statearr_13929_13961 = state_13893__$1;(statearr_13929_13961[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6622__auto___13937,mults,ensure_mult,p))
;return ((function (switch__6557__auto__,c__6622__auto___13937,mults,ensure_mult,p){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_13933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13933[(0)] = state_machine__6558__auto__);
(statearr_13933[(1)] = (1));
return statearr_13933;
});
var state_machine__6558__auto____1 = (function (state_13893){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_13893);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e13934){if((e13934 instanceof Object))
{var ex__6561__auto__ = e13934;var statearr_13935_13962 = state_13893;(statearr_13935_13962[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13893);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13934;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13963 = state_13893;
state_13893 = G__13963;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_13893){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_13893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto___13937,mults,ensure_mult,p))
})();var state__6624__auto__ = (function (){var statearr_13936 = f__6623__auto__.call(null);(statearr_13936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto___13937);
return statearr_13936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto___13937,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6622__auto___14100 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto___14100,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto___14100,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14070){var state_val_14071 = (state_14070[(1)]);if((state_val_14071 === (7)))
{var state_14070__$1 = state_14070;var statearr_14072_14101 = state_14070__$1;(statearr_14072_14101[(2)] = null);
(statearr_14072_14101[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (1)))
{var state_14070__$1 = state_14070;var statearr_14073_14102 = state_14070__$1;(statearr_14073_14102[(2)] = null);
(statearr_14073_14102[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (4)))
{var inst_14034 = (state_14070[(7)]);var inst_14036 = (inst_14034 < cnt);var state_14070__$1 = state_14070;if(cljs.core.truth_(inst_14036))
{var statearr_14074_14103 = state_14070__$1;(statearr_14074_14103[(1)] = (6));
} else
{var statearr_14075_14104 = state_14070__$1;(statearr_14075_14104[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (15)))
{var inst_14066 = (state_14070[(2)]);var state_14070__$1 = state_14070;var statearr_14076_14105 = state_14070__$1;(statearr_14076_14105[(2)] = inst_14066);
(statearr_14076_14105[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (13)))
{var inst_14059 = cljs.core.async.close_BANG_.call(null,out);var state_14070__$1 = state_14070;var statearr_14077_14106 = state_14070__$1;(statearr_14077_14106[(2)] = inst_14059);
(statearr_14077_14106[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (6)))
{var state_14070__$1 = state_14070;var statearr_14078_14107 = state_14070__$1;(statearr_14078_14107[(2)] = null);
(statearr_14078_14107[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (3)))
{var inst_14068 = (state_14070[(2)]);var state_14070__$1 = state_14070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14070__$1,inst_14068);
} else
{if((state_val_14071 === (12)))
{var inst_14056 = (state_14070[(8)]);var inst_14056__$1 = (state_14070[(2)]);var inst_14057 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14056__$1);var state_14070__$1 = (function (){var statearr_14079 = state_14070;(statearr_14079[(8)] = inst_14056__$1);
return statearr_14079;
})();if(cljs.core.truth_(inst_14057))
{var statearr_14080_14108 = state_14070__$1;(statearr_14080_14108[(1)] = (13));
} else
{var statearr_14081_14109 = state_14070__$1;(statearr_14081_14109[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (2)))
{var inst_14033 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14034 = (0);var state_14070__$1 = (function (){var statearr_14082 = state_14070;(statearr_14082[(7)] = inst_14034);
(statearr_14082[(9)] = inst_14033);
return statearr_14082;
})();var statearr_14083_14110 = state_14070__$1;(statearr_14083_14110[(2)] = null);
(statearr_14083_14110[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (11)))
{var inst_14034 = (state_14070[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14070,(10),Object,null,(9));var inst_14043 = chs__$1.call(null,inst_14034);var inst_14044 = done.call(null,inst_14034);var inst_14045 = cljs.core.async.take_BANG_.call(null,inst_14043,inst_14044);var state_14070__$1 = state_14070;var statearr_14084_14111 = state_14070__$1;(statearr_14084_14111[(2)] = inst_14045);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14070__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (9)))
{var inst_14034 = (state_14070[(7)]);var inst_14047 = (state_14070[(2)]);var inst_14048 = (inst_14034 + (1));var inst_14034__$1 = inst_14048;var state_14070__$1 = (function (){var statearr_14085 = state_14070;(statearr_14085[(7)] = inst_14034__$1);
(statearr_14085[(10)] = inst_14047);
return statearr_14085;
})();var statearr_14086_14112 = state_14070__$1;(statearr_14086_14112[(2)] = null);
(statearr_14086_14112[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (5)))
{var inst_14054 = (state_14070[(2)]);var state_14070__$1 = (function (){var statearr_14087 = state_14070;(statearr_14087[(11)] = inst_14054);
return statearr_14087;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14070__$1,(12),dchan);
} else
{if((state_val_14071 === (14)))
{var inst_14056 = (state_14070[(8)]);var inst_14061 = cljs.core.apply.call(null,f,inst_14056);var state_14070__$1 = state_14070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14070__$1,(16),out,inst_14061);
} else
{if((state_val_14071 === (16)))
{var inst_14063 = (state_14070[(2)]);var state_14070__$1 = (function (){var statearr_14088 = state_14070;(statearr_14088[(12)] = inst_14063);
return statearr_14088;
})();var statearr_14089_14113 = state_14070__$1;(statearr_14089_14113[(2)] = null);
(statearr_14089_14113[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (10)))
{var inst_14038 = (state_14070[(2)]);var inst_14039 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14070__$1 = (function (){var statearr_14090 = state_14070;(statearr_14090[(13)] = inst_14038);
return statearr_14090;
})();var statearr_14091_14114 = state_14070__$1;(statearr_14091_14114[(2)] = inst_14039);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14070__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (8)))
{var inst_14052 = (state_14070[(2)]);var state_14070__$1 = state_14070;var statearr_14092_14115 = state_14070__$1;(statearr_14092_14115[(2)] = inst_14052);
(statearr_14092_14115[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6622__auto___14100,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6557__auto__,c__6622__auto___14100,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_14096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14096[(0)] = state_machine__6558__auto__);
(statearr_14096[(1)] = (1));
return statearr_14096;
});
var state_machine__6558__auto____1 = (function (state_14070){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_14070);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e14097){if((e14097 instanceof Object))
{var ex__6561__auto__ = e14097;var statearr_14098_14116 = state_14070;(statearr_14098_14116[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14070);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14097;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14117 = state_14070;
state_14070 = G__14117;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_14070){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_14070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto___14100,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6624__auto__ = (function (){var statearr_14099 = f__6623__auto__.call(null);(statearr_14099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto___14100);
return statearr_14099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto___14100,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6622__auto___14225 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto___14225,out){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto___14225,out){
return (function (state_14201){var state_val_14202 = (state_14201[(1)]);if((state_val_14202 === (7)))
{var inst_14180 = (state_14201[(7)]);var inst_14181 = (state_14201[(8)]);var inst_14180__$1 = (state_14201[(2)]);var inst_14181__$1 = cljs.core.nth.call(null,inst_14180__$1,(0),null);var inst_14182 = cljs.core.nth.call(null,inst_14180__$1,(1),null);var inst_14183 = (inst_14181__$1 == null);var state_14201__$1 = (function (){var statearr_14203 = state_14201;(statearr_14203[(7)] = inst_14180__$1);
(statearr_14203[(8)] = inst_14181__$1);
(statearr_14203[(9)] = inst_14182);
return statearr_14203;
})();if(cljs.core.truth_(inst_14183))
{var statearr_14204_14226 = state_14201__$1;(statearr_14204_14226[(1)] = (8));
} else
{var statearr_14205_14227 = state_14201__$1;(statearr_14205_14227[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14202 === (1)))
{var inst_14172 = cljs.core.vec.call(null,chs);var inst_14173 = inst_14172;var state_14201__$1 = (function (){var statearr_14206 = state_14201;(statearr_14206[(10)] = inst_14173);
return statearr_14206;
})();var statearr_14207_14228 = state_14201__$1;(statearr_14207_14228[(2)] = null);
(statearr_14207_14228[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14202 === (4)))
{var inst_14173 = (state_14201[(10)]);var state_14201__$1 = state_14201;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14201__$1,(7),inst_14173);
} else
{if((state_val_14202 === (6)))
{var inst_14197 = (state_14201[(2)]);var state_14201__$1 = state_14201;var statearr_14208_14229 = state_14201__$1;(statearr_14208_14229[(2)] = inst_14197);
(statearr_14208_14229[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14202 === (3)))
{var inst_14199 = (state_14201[(2)]);var state_14201__$1 = state_14201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14201__$1,inst_14199);
} else
{if((state_val_14202 === (2)))
{var inst_14173 = (state_14201[(10)]);var inst_14175 = cljs.core.count.call(null,inst_14173);var inst_14176 = (inst_14175 > (0));var state_14201__$1 = state_14201;if(cljs.core.truth_(inst_14176))
{var statearr_14210_14230 = state_14201__$1;(statearr_14210_14230[(1)] = (4));
} else
{var statearr_14211_14231 = state_14201__$1;(statearr_14211_14231[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14202 === (11)))
{var inst_14173 = (state_14201[(10)]);var inst_14190 = (state_14201[(2)]);var tmp14209 = inst_14173;var inst_14173__$1 = tmp14209;var state_14201__$1 = (function (){var statearr_14212 = state_14201;(statearr_14212[(10)] = inst_14173__$1);
(statearr_14212[(11)] = inst_14190);
return statearr_14212;
})();var statearr_14213_14232 = state_14201__$1;(statearr_14213_14232[(2)] = null);
(statearr_14213_14232[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14202 === (9)))
{var inst_14181 = (state_14201[(8)]);var state_14201__$1 = state_14201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14201__$1,(11),out,inst_14181);
} else
{if((state_val_14202 === (5)))
{var inst_14195 = cljs.core.async.close_BANG_.call(null,out);var state_14201__$1 = state_14201;var statearr_14214_14233 = state_14201__$1;(statearr_14214_14233[(2)] = inst_14195);
(statearr_14214_14233[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14202 === (10)))
{var inst_14193 = (state_14201[(2)]);var state_14201__$1 = state_14201;var statearr_14215_14234 = state_14201__$1;(statearr_14215_14234[(2)] = inst_14193);
(statearr_14215_14234[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14202 === (8)))
{var inst_14173 = (state_14201[(10)]);var inst_14180 = (state_14201[(7)]);var inst_14181 = (state_14201[(8)]);var inst_14182 = (state_14201[(9)]);var inst_14185 = (function (){var c = inst_14182;var v = inst_14181;var vec__14178 = inst_14180;var cs = inst_14173;return ((function (c,v,vec__14178,cs,inst_14173,inst_14180,inst_14181,inst_14182,state_val_14202,c__6622__auto___14225,out){
return (function (p1__14118_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14118_SHARP_);
});
;})(c,v,vec__14178,cs,inst_14173,inst_14180,inst_14181,inst_14182,state_val_14202,c__6622__auto___14225,out))
})();var inst_14186 = cljs.core.filterv.call(null,inst_14185,inst_14173);var inst_14173__$1 = inst_14186;var state_14201__$1 = (function (){var statearr_14216 = state_14201;(statearr_14216[(10)] = inst_14173__$1);
return statearr_14216;
})();var statearr_14217_14235 = state_14201__$1;(statearr_14217_14235[(2)] = null);
(statearr_14217_14235[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6622__auto___14225,out))
;return ((function (switch__6557__auto__,c__6622__auto___14225,out){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_14221 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14221[(0)] = state_machine__6558__auto__);
(statearr_14221[(1)] = (1));
return statearr_14221;
});
var state_machine__6558__auto____1 = (function (state_14201){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_14201);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e14222){if((e14222 instanceof Object))
{var ex__6561__auto__ = e14222;var statearr_14223_14236 = state_14201;(statearr_14223_14236[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14201);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14222;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14237 = state_14201;
state_14201 = G__14237;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_14201){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_14201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto___14225,out))
})();var state__6624__auto__ = (function (){var statearr_14224 = f__6623__auto__.call(null);(statearr_14224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto___14225);
return statearr_14224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto___14225,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6622__auto___14330 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto___14330,out){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto___14330,out){
return (function (state_14307){var state_val_14308 = (state_14307[(1)]);if((state_val_14308 === (7)))
{var inst_14289 = (state_14307[(7)]);var inst_14289__$1 = (state_14307[(2)]);var inst_14290 = (inst_14289__$1 == null);var inst_14291 = cljs.core.not.call(null,inst_14290);var state_14307__$1 = (function (){var statearr_14309 = state_14307;(statearr_14309[(7)] = inst_14289__$1);
return statearr_14309;
})();if(inst_14291)
{var statearr_14310_14331 = state_14307__$1;(statearr_14310_14331[(1)] = (8));
} else
{var statearr_14311_14332 = state_14307__$1;(statearr_14311_14332[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14308 === (1)))
{var inst_14284 = (0);var state_14307__$1 = (function (){var statearr_14312 = state_14307;(statearr_14312[(8)] = inst_14284);
return statearr_14312;
})();var statearr_14313_14333 = state_14307__$1;(statearr_14313_14333[(2)] = null);
(statearr_14313_14333[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14308 === (4)))
{var state_14307__$1 = state_14307;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14307__$1,(7),ch);
} else
{if((state_val_14308 === (6)))
{var inst_14302 = (state_14307[(2)]);var state_14307__$1 = state_14307;var statearr_14314_14334 = state_14307__$1;(statearr_14314_14334[(2)] = inst_14302);
(statearr_14314_14334[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14308 === (3)))
{var inst_14304 = (state_14307[(2)]);var inst_14305 = cljs.core.async.close_BANG_.call(null,out);var state_14307__$1 = (function (){var statearr_14315 = state_14307;(statearr_14315[(9)] = inst_14304);
return statearr_14315;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14307__$1,inst_14305);
} else
{if((state_val_14308 === (2)))
{var inst_14284 = (state_14307[(8)]);var inst_14286 = (inst_14284 < n);var state_14307__$1 = state_14307;if(cljs.core.truth_(inst_14286))
{var statearr_14316_14335 = state_14307__$1;(statearr_14316_14335[(1)] = (4));
} else
{var statearr_14317_14336 = state_14307__$1;(statearr_14317_14336[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14308 === (11)))
{var inst_14284 = (state_14307[(8)]);var inst_14294 = (state_14307[(2)]);var inst_14295 = (inst_14284 + (1));var inst_14284__$1 = inst_14295;var state_14307__$1 = (function (){var statearr_14318 = state_14307;(statearr_14318[(10)] = inst_14294);
(statearr_14318[(8)] = inst_14284__$1);
return statearr_14318;
})();var statearr_14319_14337 = state_14307__$1;(statearr_14319_14337[(2)] = null);
(statearr_14319_14337[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14308 === (9)))
{var state_14307__$1 = state_14307;var statearr_14320_14338 = state_14307__$1;(statearr_14320_14338[(2)] = null);
(statearr_14320_14338[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14308 === (5)))
{var state_14307__$1 = state_14307;var statearr_14321_14339 = state_14307__$1;(statearr_14321_14339[(2)] = null);
(statearr_14321_14339[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14308 === (10)))
{var inst_14299 = (state_14307[(2)]);var state_14307__$1 = state_14307;var statearr_14322_14340 = state_14307__$1;(statearr_14322_14340[(2)] = inst_14299);
(statearr_14322_14340[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14308 === (8)))
{var inst_14289 = (state_14307[(7)]);var state_14307__$1 = state_14307;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14307__$1,(11),out,inst_14289);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6622__auto___14330,out))
;return ((function (switch__6557__auto__,c__6622__auto___14330,out){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_14326 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14326[(0)] = state_machine__6558__auto__);
(statearr_14326[(1)] = (1));
return statearr_14326;
});
var state_machine__6558__auto____1 = (function (state_14307){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_14307);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e14327){if((e14327 instanceof Object))
{var ex__6561__auto__ = e14327;var statearr_14328_14341 = state_14307;(statearr_14328_14341[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14307);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14327;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14342 = state_14307;
state_14307 = G__14342;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_14307){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_14307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto___14330,out))
})();var state__6624__auto__ = (function (){var statearr_14329 = f__6623__auto__.call(null);(statearr_14329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto___14330);
return statearr_14329;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto___14330,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6622__auto___14439 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto___14439,out){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto___14439,out){
return (function (state_14414){var state_val_14415 = (state_14414[(1)]);if((state_val_14415 === (7)))
{var inst_14409 = (state_14414[(2)]);var state_14414__$1 = state_14414;var statearr_14416_14440 = state_14414__$1;(statearr_14416_14440[(2)] = inst_14409);
(statearr_14416_14440[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14415 === (1)))
{var inst_14391 = null;var state_14414__$1 = (function (){var statearr_14417 = state_14414;(statearr_14417[(7)] = inst_14391);
return statearr_14417;
})();var statearr_14418_14441 = state_14414__$1;(statearr_14418_14441[(2)] = null);
(statearr_14418_14441[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14415 === (4)))
{var inst_14394 = (state_14414[(8)]);var inst_14394__$1 = (state_14414[(2)]);var inst_14395 = (inst_14394__$1 == null);var inst_14396 = cljs.core.not.call(null,inst_14395);var state_14414__$1 = (function (){var statearr_14419 = state_14414;(statearr_14419[(8)] = inst_14394__$1);
return statearr_14419;
})();if(inst_14396)
{var statearr_14420_14442 = state_14414__$1;(statearr_14420_14442[(1)] = (5));
} else
{var statearr_14421_14443 = state_14414__$1;(statearr_14421_14443[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14415 === (6)))
{var state_14414__$1 = state_14414;var statearr_14422_14444 = state_14414__$1;(statearr_14422_14444[(2)] = null);
(statearr_14422_14444[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14415 === (3)))
{var inst_14411 = (state_14414[(2)]);var inst_14412 = cljs.core.async.close_BANG_.call(null,out);var state_14414__$1 = (function (){var statearr_14423 = state_14414;(statearr_14423[(9)] = inst_14411);
return statearr_14423;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14414__$1,inst_14412);
} else
{if((state_val_14415 === (2)))
{var state_14414__$1 = state_14414;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14414__$1,(4),ch);
} else
{if((state_val_14415 === (11)))
{var inst_14394 = (state_14414[(8)]);var inst_14403 = (state_14414[(2)]);var inst_14391 = inst_14394;var state_14414__$1 = (function (){var statearr_14424 = state_14414;(statearr_14424[(7)] = inst_14391);
(statearr_14424[(10)] = inst_14403);
return statearr_14424;
})();var statearr_14425_14445 = state_14414__$1;(statearr_14425_14445[(2)] = null);
(statearr_14425_14445[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14415 === (9)))
{var inst_14394 = (state_14414[(8)]);var state_14414__$1 = state_14414;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14414__$1,(11),out,inst_14394);
} else
{if((state_val_14415 === (5)))
{var inst_14394 = (state_14414[(8)]);var inst_14391 = (state_14414[(7)]);var inst_14398 = cljs.core._EQ_.call(null,inst_14394,inst_14391);var state_14414__$1 = state_14414;if(inst_14398)
{var statearr_14427_14446 = state_14414__$1;(statearr_14427_14446[(1)] = (8));
} else
{var statearr_14428_14447 = state_14414__$1;(statearr_14428_14447[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14415 === (10)))
{var inst_14406 = (state_14414[(2)]);var state_14414__$1 = state_14414;var statearr_14429_14448 = state_14414__$1;(statearr_14429_14448[(2)] = inst_14406);
(statearr_14429_14448[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14415 === (8)))
{var inst_14391 = (state_14414[(7)]);var tmp14426 = inst_14391;var inst_14391__$1 = tmp14426;var state_14414__$1 = (function (){var statearr_14430 = state_14414;(statearr_14430[(7)] = inst_14391__$1);
return statearr_14430;
})();var statearr_14431_14449 = state_14414__$1;(statearr_14431_14449[(2)] = null);
(statearr_14431_14449[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6622__auto___14439,out))
;return ((function (switch__6557__auto__,c__6622__auto___14439,out){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_14435 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14435[(0)] = state_machine__6558__auto__);
(statearr_14435[(1)] = (1));
return statearr_14435;
});
var state_machine__6558__auto____1 = (function (state_14414){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_14414);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e14436){if((e14436 instanceof Object))
{var ex__6561__auto__ = e14436;var statearr_14437_14450 = state_14414;(statearr_14437_14450[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14414);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14436;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14451 = state_14414;
state_14414 = G__14451;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_14414){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_14414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto___14439,out))
})();var state__6624__auto__ = (function (){var statearr_14438 = f__6623__auto__.call(null);(statearr_14438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto___14439);
return statearr_14438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto___14439,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6622__auto___14586 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto___14586,out){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto___14586,out){
return (function (state_14556){var state_val_14557 = (state_14556[(1)]);if((state_val_14557 === (7)))
{var inst_14552 = (state_14556[(2)]);var state_14556__$1 = state_14556;var statearr_14558_14587 = state_14556__$1;(statearr_14558_14587[(2)] = inst_14552);
(statearr_14558_14587[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14557 === (1)))
{var inst_14519 = (new Array(n));var inst_14520 = inst_14519;var inst_14521 = (0);var state_14556__$1 = (function (){var statearr_14559 = state_14556;(statearr_14559[(7)] = inst_14521);
(statearr_14559[(8)] = inst_14520);
return statearr_14559;
})();var statearr_14560_14588 = state_14556__$1;(statearr_14560_14588[(2)] = null);
(statearr_14560_14588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14557 === (4)))
{var inst_14524 = (state_14556[(9)]);var inst_14524__$1 = (state_14556[(2)]);var inst_14525 = (inst_14524__$1 == null);var inst_14526 = cljs.core.not.call(null,inst_14525);var state_14556__$1 = (function (){var statearr_14561 = state_14556;(statearr_14561[(9)] = inst_14524__$1);
return statearr_14561;
})();if(inst_14526)
{var statearr_14562_14589 = state_14556__$1;(statearr_14562_14589[(1)] = (5));
} else
{var statearr_14563_14590 = state_14556__$1;(statearr_14563_14590[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14557 === (15)))
{var inst_14546 = (state_14556[(2)]);var state_14556__$1 = state_14556;var statearr_14564_14591 = state_14556__$1;(statearr_14564_14591[(2)] = inst_14546);
(statearr_14564_14591[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14557 === (13)))
{var state_14556__$1 = state_14556;var statearr_14565_14592 = state_14556__$1;(statearr_14565_14592[(2)] = null);
(statearr_14565_14592[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14557 === (6)))
{var inst_14521 = (state_14556[(7)]);var inst_14542 = (inst_14521 > (0));var state_14556__$1 = state_14556;if(cljs.core.truth_(inst_14542))
{var statearr_14566_14593 = state_14556__$1;(statearr_14566_14593[(1)] = (12));
} else
{var statearr_14567_14594 = state_14556__$1;(statearr_14567_14594[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14557 === (3)))
{var inst_14554 = (state_14556[(2)]);var state_14556__$1 = state_14556;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14556__$1,inst_14554);
} else
{if((state_val_14557 === (12)))
{var inst_14520 = (state_14556[(8)]);var inst_14544 = cljs.core.vec.call(null,inst_14520);var state_14556__$1 = state_14556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14556__$1,(15),out,inst_14544);
} else
{if((state_val_14557 === (2)))
{var state_14556__$1 = state_14556;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14556__$1,(4),ch);
} else
{if((state_val_14557 === (11)))
{var inst_14536 = (state_14556[(2)]);var inst_14537 = (new Array(n));var inst_14520 = inst_14537;var inst_14521 = (0);var state_14556__$1 = (function (){var statearr_14568 = state_14556;(statearr_14568[(7)] = inst_14521);
(statearr_14568[(8)] = inst_14520);
(statearr_14568[(10)] = inst_14536);
return statearr_14568;
})();var statearr_14569_14595 = state_14556__$1;(statearr_14569_14595[(2)] = null);
(statearr_14569_14595[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14557 === (9)))
{var inst_14520 = (state_14556[(8)]);var inst_14534 = cljs.core.vec.call(null,inst_14520);var state_14556__$1 = state_14556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14556__$1,(11),out,inst_14534);
} else
{if((state_val_14557 === (5)))
{var inst_14529 = (state_14556[(11)]);var inst_14524 = (state_14556[(9)]);var inst_14521 = (state_14556[(7)]);var inst_14520 = (state_14556[(8)]);var inst_14528 = (inst_14520[inst_14521] = inst_14524);var inst_14529__$1 = (inst_14521 + (1));var inst_14530 = (inst_14529__$1 < n);var state_14556__$1 = (function (){var statearr_14570 = state_14556;(statearr_14570[(11)] = inst_14529__$1);
(statearr_14570[(12)] = inst_14528);
return statearr_14570;
})();if(cljs.core.truth_(inst_14530))
{var statearr_14571_14596 = state_14556__$1;(statearr_14571_14596[(1)] = (8));
} else
{var statearr_14572_14597 = state_14556__$1;(statearr_14572_14597[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14557 === (14)))
{var inst_14549 = (state_14556[(2)]);var inst_14550 = cljs.core.async.close_BANG_.call(null,out);var state_14556__$1 = (function (){var statearr_14574 = state_14556;(statearr_14574[(13)] = inst_14549);
return statearr_14574;
})();var statearr_14575_14598 = state_14556__$1;(statearr_14575_14598[(2)] = inst_14550);
(statearr_14575_14598[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14557 === (10)))
{var inst_14540 = (state_14556[(2)]);var state_14556__$1 = state_14556;var statearr_14576_14599 = state_14556__$1;(statearr_14576_14599[(2)] = inst_14540);
(statearr_14576_14599[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14557 === (8)))
{var inst_14529 = (state_14556[(11)]);var inst_14520 = (state_14556[(8)]);var tmp14573 = inst_14520;var inst_14520__$1 = tmp14573;var inst_14521 = inst_14529;var state_14556__$1 = (function (){var statearr_14577 = state_14556;(statearr_14577[(7)] = inst_14521);
(statearr_14577[(8)] = inst_14520__$1);
return statearr_14577;
})();var statearr_14578_14600 = state_14556__$1;(statearr_14578_14600[(2)] = null);
(statearr_14578_14600[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6622__auto___14586,out))
;return ((function (switch__6557__auto__,c__6622__auto___14586,out){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_14582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14582[(0)] = state_machine__6558__auto__);
(statearr_14582[(1)] = (1));
return statearr_14582;
});
var state_machine__6558__auto____1 = (function (state_14556){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_14556);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e14583){if((e14583 instanceof Object))
{var ex__6561__auto__ = e14583;var statearr_14584_14601 = state_14556;(statearr_14584_14601[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14556);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14583;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14602 = state_14556;
state_14556 = G__14602;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_14556){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_14556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto___14586,out))
})();var state__6624__auto__ = (function (){var statearr_14585 = f__6623__auto__.call(null);(statearr_14585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto___14586);
return statearr_14585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto___14586,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6622__auto___14745 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto___14745,out){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto___14745,out){
return (function (state_14715){var state_val_14716 = (state_14715[(1)]);if((state_val_14716 === (7)))
{var inst_14711 = (state_14715[(2)]);var state_14715__$1 = state_14715;var statearr_14717_14746 = state_14715__$1;(statearr_14717_14746[(2)] = inst_14711);
(statearr_14717_14746[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14716 === (1)))
{var inst_14674 = [];var inst_14675 = inst_14674;var inst_14676 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14715__$1 = (function (){var statearr_14718 = state_14715;(statearr_14718[(7)] = inst_14675);
(statearr_14718[(8)] = inst_14676);
return statearr_14718;
})();var statearr_14719_14747 = state_14715__$1;(statearr_14719_14747[(2)] = null);
(statearr_14719_14747[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14716 === (4)))
{var inst_14679 = (state_14715[(9)]);var inst_14679__$1 = (state_14715[(2)]);var inst_14680 = (inst_14679__$1 == null);var inst_14681 = cljs.core.not.call(null,inst_14680);var state_14715__$1 = (function (){var statearr_14720 = state_14715;(statearr_14720[(9)] = inst_14679__$1);
return statearr_14720;
})();if(inst_14681)
{var statearr_14721_14748 = state_14715__$1;(statearr_14721_14748[(1)] = (5));
} else
{var statearr_14722_14749 = state_14715__$1;(statearr_14722_14749[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14716 === (15)))
{var inst_14705 = (state_14715[(2)]);var state_14715__$1 = state_14715;var statearr_14723_14750 = state_14715__$1;(statearr_14723_14750[(2)] = inst_14705);
(statearr_14723_14750[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14716 === (13)))
{var state_14715__$1 = state_14715;var statearr_14724_14751 = state_14715__$1;(statearr_14724_14751[(2)] = null);
(statearr_14724_14751[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14716 === (6)))
{var inst_14675 = (state_14715[(7)]);var inst_14700 = inst_14675.length;var inst_14701 = (inst_14700 > (0));var state_14715__$1 = state_14715;if(cljs.core.truth_(inst_14701))
{var statearr_14725_14752 = state_14715__$1;(statearr_14725_14752[(1)] = (12));
} else
{var statearr_14726_14753 = state_14715__$1;(statearr_14726_14753[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14716 === (3)))
{var inst_14713 = (state_14715[(2)]);var state_14715__$1 = state_14715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14715__$1,inst_14713);
} else
{if((state_val_14716 === (12)))
{var inst_14675 = (state_14715[(7)]);var inst_14703 = cljs.core.vec.call(null,inst_14675);var state_14715__$1 = state_14715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14715__$1,(15),out,inst_14703);
} else
{if((state_val_14716 === (2)))
{var state_14715__$1 = state_14715;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14715__$1,(4),ch);
} else
{if((state_val_14716 === (11)))
{var inst_14683 = (state_14715[(10)]);var inst_14679 = (state_14715[(9)]);var inst_14693 = (state_14715[(2)]);var inst_14694 = [];var inst_14695 = inst_14694.push(inst_14679);var inst_14675 = inst_14694;var inst_14676 = inst_14683;var state_14715__$1 = (function (){var statearr_14727 = state_14715;(statearr_14727[(11)] = inst_14695);
(statearr_14727[(7)] = inst_14675);
(statearr_14727[(12)] = inst_14693);
(statearr_14727[(8)] = inst_14676);
return statearr_14727;
})();var statearr_14728_14754 = state_14715__$1;(statearr_14728_14754[(2)] = null);
(statearr_14728_14754[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14716 === (9)))
{var inst_14675 = (state_14715[(7)]);var inst_14691 = cljs.core.vec.call(null,inst_14675);var state_14715__$1 = state_14715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14715__$1,(11),out,inst_14691);
} else
{if((state_val_14716 === (5)))
{var inst_14683 = (state_14715[(10)]);var inst_14676 = (state_14715[(8)]);var inst_14679 = (state_14715[(9)]);var inst_14683__$1 = f.call(null,inst_14679);var inst_14684 = cljs.core._EQ_.call(null,inst_14683__$1,inst_14676);var inst_14685 = cljs.core.keyword_identical_QMARK_.call(null,inst_14676,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14686 = (inst_14684) || (inst_14685);var state_14715__$1 = (function (){var statearr_14729 = state_14715;(statearr_14729[(10)] = inst_14683__$1);
return statearr_14729;
})();if(cljs.core.truth_(inst_14686))
{var statearr_14730_14755 = state_14715__$1;(statearr_14730_14755[(1)] = (8));
} else
{var statearr_14731_14756 = state_14715__$1;(statearr_14731_14756[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14716 === (14)))
{var inst_14708 = (state_14715[(2)]);var inst_14709 = cljs.core.async.close_BANG_.call(null,out);var state_14715__$1 = (function (){var statearr_14733 = state_14715;(statearr_14733[(13)] = inst_14708);
return statearr_14733;
})();var statearr_14734_14757 = state_14715__$1;(statearr_14734_14757[(2)] = inst_14709);
(statearr_14734_14757[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14716 === (10)))
{var inst_14698 = (state_14715[(2)]);var state_14715__$1 = state_14715;var statearr_14735_14758 = state_14715__$1;(statearr_14735_14758[(2)] = inst_14698);
(statearr_14735_14758[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14716 === (8)))
{var inst_14683 = (state_14715[(10)]);var inst_14675 = (state_14715[(7)]);var inst_14679 = (state_14715[(9)]);var inst_14688 = inst_14675.push(inst_14679);var tmp14732 = inst_14675;var inst_14675__$1 = tmp14732;var inst_14676 = inst_14683;var state_14715__$1 = (function (){var statearr_14736 = state_14715;(statearr_14736[(14)] = inst_14688);
(statearr_14736[(7)] = inst_14675__$1);
(statearr_14736[(8)] = inst_14676);
return statearr_14736;
})();var statearr_14737_14759 = state_14715__$1;(statearr_14737_14759[(2)] = null);
(statearr_14737_14759[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6622__auto___14745,out))
;return ((function (switch__6557__auto__,c__6622__auto___14745,out){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_14741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14741[(0)] = state_machine__6558__auto__);
(statearr_14741[(1)] = (1));
return statearr_14741;
});
var state_machine__6558__auto____1 = (function (state_14715){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_14715);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e14742){if((e14742 instanceof Object))
{var ex__6561__auto__ = e14742;var statearr_14743_14760 = state_14715;(statearr_14743_14760[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14715);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14742;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14761 = state_14715;
state_14715 = G__14761;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_14715){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_14715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto___14745,out))
})();var state__6624__auto__ = (function (){var statearr_14744 = f__6623__auto__.call(null);(statearr_14744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto___14745);
return statearr_14744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto___14745,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map