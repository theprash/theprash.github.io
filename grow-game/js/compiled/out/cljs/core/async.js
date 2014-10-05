// Compiled by ClojureScript 0.0-2197
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15656 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15656 = (function (f,fn_handler,meta15657){
this.f = f;
this.fn_handler = fn_handler;
this.meta15657 = meta15657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15656.cljs$lang$type = true;
cljs.core.async.t15656.cljs$lang$ctorStr = "cljs.core.async/t15656";
cljs.core.async.t15656.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t15656");
});
cljs.core.async.t15656.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15658){var self__ = this;
var _15658__$1 = this;return self__.meta15657;
});
cljs.core.async.t15656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15658,meta15657__$1){var self__ = this;
var _15658__$1 = this;return (new cljs.core.async.t15656(self__.f,self__.fn_handler,meta15657__$1));
});
cljs.core.async.__GT_t15656 = (function __GT_t15656(f__$1,fn_handler__$1,meta15657){return (new cljs.core.async.t15656(f__$1,fn_handler__$1,meta15657));
});
}
return (new cljs.core.async.t15656(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15660 = buff;if(G__15660)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__15660.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15660.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15660);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15660);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
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
{var val_15661 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15661);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15661,ret){
return (function (){return fn1.call(null,val_15661);
});})(val_15661,ret))
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4090__auto__))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8728__auto___15662 = n;var x_15663 = 0;while(true){
if((x_15663 < n__8728__auto___15662))
{(a[x_15663] = 0);
{
var G__15664 = (x_15663 + 1);
x_15663 = G__15664;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__15665 = (i + 1);
i = G__15665;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15669 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15669 = (function (flag,alt_flag,meta15670){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15670 = meta15670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15669.cljs$lang$type = true;
cljs.core.async.t15669.cljs$lang$ctorStr = "cljs.core.async/t15669";
cljs.core.async.t15669.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t15669");
});})(flag))
;
cljs.core.async.t15669.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15669.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15669.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15671){var self__ = this;
var _15671__$1 = this;return self__.meta15670;
});})(flag))
;
cljs.core.async.t15669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15671,meta15670__$1){var self__ = this;
var _15671__$1 = this;return (new cljs.core.async.t15669(self__.flag,self__.alt_flag,meta15670__$1));
});})(flag))
;
cljs.core.async.__GT_t15669 = ((function (flag){
return (function __GT_t15669(flag__$1,alt_flag__$1,meta15670){return (new cljs.core.async.t15669(flag__$1,alt_flag__$1,meta15670));
});})(flag))
;
}
return (new cljs.core.async.t15669(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15675 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15675 = (function (cb,flag,alt_handler,meta15676){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15676 = meta15676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15675.cljs$lang$type = true;
cljs.core.async.t15675.cljs$lang$ctorStr = "cljs.core.async/t15675";
cljs.core.async.t15675.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t15675");
});
cljs.core.async.t15675.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15675.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15675.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15677){var self__ = this;
var _15677__$1 = this;return self__.meta15676;
});
cljs.core.async.t15675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15677,meta15676__$1){var self__ = this;
var _15677__$1 = this;return (new cljs.core.async.t15675(self__.cb,self__.flag,self__.alt_handler,meta15676__$1));
});
cljs.core.async.__GT_t15675 = (function __GT_t15675(cb__$1,flag__$1,alt_handler__$1,meta15676){return (new cljs.core.async.t15675(cb__$1,flag__$1,alt_handler__$1,meta15676));
});
}
return (new cljs.core.async.t15675(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15678_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15678_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15679_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15679_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7880__auto__ = wport;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15680 = (i + 1);
i = G__15680;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7880__auto__ = ret;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7868__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7868__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7868__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__15681){var map__15683 = p__15681;var map__15683__$1 = ((cljs.core.seq_QMARK_.call(null,map__15683))?cljs.core.apply.call(null,cljs.core.hash_map,map__15683):map__15683);var opts = map__15683__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15681 = null;if (arguments.length > 1) {
  p__15681 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15681);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15684){
var ports = cljs.core.first(arglist__15684);
var p__15681 = cljs.core.rest(arglist__15684);
return alts_BANG___delegate(ports,p__15681);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15692 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15692 = (function (ch,f,map_LT_,meta15693){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15693 = meta15693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15692.cljs$lang$type = true;
cljs.core.async.t15692.cljs$lang$ctorStr = "cljs.core.async/t15692";
cljs.core.async.t15692.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t15692");
});
cljs.core.async.t15692.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t15692.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15695 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15695 = (function (fn1,_,meta15693,ch,f,map_LT_,meta15696){
this.fn1 = fn1;
this._ = _;
this.meta15693 = meta15693;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15696 = meta15696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15695.cljs$lang$type = true;
cljs.core.async.t15695.cljs$lang$ctorStr = "cljs.core.async/t15695";
cljs.core.async.t15695.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t15695");
});})(___$1))
;
cljs.core.async.t15695.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15695.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15695.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15695.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15685_SHARP_){return f1.call(null,(((p1__15685_SHARP_ == null))?null:self__.f.call(null,p1__15685_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15695.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15697){var self__ = this;
var _15697__$1 = this;return self__.meta15696;
});})(___$1))
;
cljs.core.async.t15695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15697,meta15696__$1){var self__ = this;
var _15697__$1 = this;return (new cljs.core.async.t15695(self__.fn1,self__._,self__.meta15693,self__.ch,self__.f,self__.map_LT_,meta15696__$1));
});})(___$1))
;
cljs.core.async.__GT_t15695 = ((function (___$1){
return (function __GT_t15695(fn1__$1,___$2,meta15693__$1,ch__$2,f__$2,map_LT___$2,meta15696){return (new cljs.core.async.t15695(fn1__$1,___$2,meta15693__$1,ch__$2,f__$2,map_LT___$2,meta15696));
});})(___$1))
;
}
return (new cljs.core.async.t15695(fn1,___$1,self__.meta15693,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7868__auto__ = ret;if(cljs.core.truth_(and__7868__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7868__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15692.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15692.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15694){var self__ = this;
var _15694__$1 = this;return self__.meta15693;
});
cljs.core.async.t15692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15694,meta15693__$1){var self__ = this;
var _15694__$1 = this;return (new cljs.core.async.t15692(self__.ch,self__.f,self__.map_LT_,meta15693__$1));
});
cljs.core.async.__GT_t15692 = (function __GT_t15692(ch__$1,f__$1,map_LT___$1,meta15693){return (new cljs.core.async.t15692(ch__$1,f__$1,map_LT___$1,meta15693));
});
}
return (new cljs.core.async.t15692(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15701 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15701 = (function (ch,f,map_GT_,meta15702){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15702 = meta15702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15701.cljs$lang$type = true;
cljs.core.async.t15701.cljs$lang$ctorStr = "cljs.core.async/t15701";
cljs.core.async.t15701.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t15701");
});
cljs.core.async.t15701.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15701.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t15701.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15701.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15701.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15701.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15703){var self__ = this;
var _15703__$1 = this;return self__.meta15702;
});
cljs.core.async.t15701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15703,meta15702__$1){var self__ = this;
var _15703__$1 = this;return (new cljs.core.async.t15701(self__.ch,self__.f,self__.map_GT_,meta15702__$1));
});
cljs.core.async.__GT_t15701 = (function __GT_t15701(ch__$1,f__$1,map_GT___$1,meta15702){return (new cljs.core.async.t15701(ch__$1,f__$1,map_GT___$1,meta15702));
});
}
return (new cljs.core.async.t15701(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15707 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15707 = (function (ch,p,filter_GT_,meta15708){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15708 = meta15708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15707.cljs$lang$type = true;
cljs.core.async.t15707.cljs$lang$ctorStr = "cljs.core.async/t15707";
cljs.core.async.t15707.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t15707");
});
cljs.core.async.t15707.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15707.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t15707.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15707.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15707.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15707.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15707.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15709){var self__ = this;
var _15709__$1 = this;return self__.meta15708;
});
cljs.core.async.t15707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15709,meta15708__$1){var self__ = this;
var _15709__$1 = this;return (new cljs.core.async.t15707(self__.ch,self__.p,self__.filter_GT_,meta15708__$1));
});
cljs.core.async.__GT_t15707 = (function __GT_t15707(ch__$1,p__$1,filter_GT___$1,meta15708){return (new cljs.core.async.t15707(ch__$1,p__$1,filter_GT___$1,meta15708));
});
}
return (new cljs.core.async.t15707(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10478__auto___15792 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto___15792,out){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto___15792,out){
return (function (state_15771){var state_val_15772 = (state_15771[1]);if((state_val_15772 === 1))
{var state_15771__$1 = state_15771;var statearr_15773_15793 = state_15771__$1;(statearr_15773_15793[2] = null);
(statearr_15773_15793[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 2))
{var state_15771__$1 = state_15771;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15771__$1,4,ch);
} else
{if((state_val_15772 === 3))
{var inst_15769 = (state_15771[2]);var state_15771__$1 = state_15771;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15771__$1,inst_15769);
} else
{if((state_val_15772 === 4))
{var inst_15753 = (state_15771[7]);var inst_15753__$1 = (state_15771[2]);var inst_15754 = (inst_15753__$1 == null);var state_15771__$1 = (function (){var statearr_15774 = state_15771;(statearr_15774[7] = inst_15753__$1);
return statearr_15774;
})();if(cljs.core.truth_(inst_15754))
{var statearr_15775_15794 = state_15771__$1;(statearr_15775_15794[1] = 5);
} else
{var statearr_15776_15795 = state_15771__$1;(statearr_15776_15795[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 5))
{var inst_15756 = cljs.core.async.close_BANG_.call(null,out);var state_15771__$1 = state_15771;var statearr_15777_15796 = state_15771__$1;(statearr_15777_15796[2] = inst_15756);
(statearr_15777_15796[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 6))
{var inst_15753 = (state_15771[7]);var inst_15758 = p.call(null,inst_15753);var state_15771__$1 = state_15771;if(cljs.core.truth_(inst_15758))
{var statearr_15778_15797 = state_15771__$1;(statearr_15778_15797[1] = 8);
} else
{var statearr_15779_15798 = state_15771__$1;(statearr_15779_15798[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 7))
{var inst_15767 = (state_15771[2]);var state_15771__$1 = state_15771;var statearr_15780_15799 = state_15771__$1;(statearr_15780_15799[2] = inst_15767);
(statearr_15780_15799[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 8))
{var inst_15753 = (state_15771[7]);var state_15771__$1 = state_15771;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15771__$1,11,out,inst_15753);
} else
{if((state_val_15772 === 9))
{var state_15771__$1 = state_15771;var statearr_15781_15800 = state_15771__$1;(statearr_15781_15800[2] = null);
(statearr_15781_15800[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 10))
{var inst_15764 = (state_15771[2]);var state_15771__$1 = (function (){var statearr_15782 = state_15771;(statearr_15782[8] = inst_15764);
return statearr_15782;
})();var statearr_15783_15801 = state_15771__$1;(statearr_15783_15801[2] = null);
(statearr_15783_15801[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 11))
{var inst_15761 = (state_15771[2]);var state_15771__$1 = state_15771;var statearr_15784_15802 = state_15771__$1;(statearr_15784_15802[2] = inst_15761);
(statearr_15784_15802[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10478__auto___15792,out))
;return ((function (switch__10408__auto__,c__10478__auto___15792,out){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_15788 = [null,null,null,null,null,null,null,null,null];(statearr_15788[0] = state_machine__10409__auto__);
(statearr_15788[1] = 1);
return statearr_15788;
});
var state_machine__10409__auto____1 = (function (state_15771){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_15771);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e15789){if((e15789 instanceof Object))
{var ex__10412__auto__ = e15789;var statearr_15790_15803 = state_15771;(statearr_15790_15803[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15771);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15789;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15804 = state_15771;
state_15771 = G__15804;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_15771){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_15771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto___15792,out))
})();var state__10480__auto__ = (function (){var statearr_15791 = f__10479__auto__.call(null);(statearr_15791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto___15792);
return statearr_15791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto___15792,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10478__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto__){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto__){
return (function (state_15970){var state_val_15971 = (state_15970[1]);if((state_val_15971 === 1))
{var state_15970__$1 = state_15970;var statearr_15972_16013 = state_15970__$1;(statearr_15972_16013[2] = null);
(statearr_15972_16013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 2))
{var state_15970__$1 = state_15970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15970__$1,4,in$);
} else
{if((state_val_15971 === 3))
{var inst_15968 = (state_15970[2]);var state_15970__$1 = state_15970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15970__$1,inst_15968);
} else
{if((state_val_15971 === 4))
{var inst_15911 = (state_15970[7]);var inst_15911__$1 = (state_15970[2]);var inst_15912 = (inst_15911__$1 == null);var state_15970__$1 = (function (){var statearr_15973 = state_15970;(statearr_15973[7] = inst_15911__$1);
return statearr_15973;
})();if(cljs.core.truth_(inst_15912))
{var statearr_15974_16014 = state_15970__$1;(statearr_15974_16014[1] = 5);
} else
{var statearr_15975_16015 = state_15970__$1;(statearr_15975_16015[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 5))
{var inst_15914 = cljs.core.async.close_BANG_.call(null,out);var state_15970__$1 = state_15970;var statearr_15976_16016 = state_15970__$1;(statearr_15976_16016[2] = inst_15914);
(statearr_15976_16016[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 6))
{var inst_15911 = (state_15970[7]);var inst_15920 = f.call(null,inst_15911);var inst_15921 = cljs.core.seq.call(null,inst_15920);var inst_15922 = inst_15921;var inst_15923 = null;var inst_15924 = 0;var inst_15925 = 0;var state_15970__$1 = (function (){var statearr_15977 = state_15970;(statearr_15977[8] = inst_15922);
(statearr_15977[9] = inst_15923);
(statearr_15977[10] = inst_15924);
(statearr_15977[11] = inst_15925);
return statearr_15977;
})();var statearr_15978_16017 = state_15970__$1;(statearr_15978_16017[2] = null);
(statearr_15978_16017[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 7))
{var inst_15966 = (state_15970[2]);var state_15970__$1 = state_15970;var statearr_15979_16018 = state_15970__$1;(statearr_15979_16018[2] = inst_15966);
(statearr_15979_16018[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 8))
{var inst_15924 = (state_15970[10]);var inst_15925 = (state_15970[11]);var inst_15927 = (inst_15925 < inst_15924);var inst_15928 = inst_15927;var state_15970__$1 = state_15970;if(cljs.core.truth_(inst_15928))
{var statearr_15980_16019 = state_15970__$1;(statearr_15980_16019[1] = 10);
} else
{var statearr_15981_16020 = state_15970__$1;(statearr_15981_16020[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 9))
{var inst_15958 = (state_15970[2]);var inst_15959 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15970__$1 = (function (){var statearr_15982 = state_15970;(statearr_15982[12] = inst_15958);
return statearr_15982;
})();if(cljs.core.truth_(inst_15959))
{var statearr_15983_16021 = state_15970__$1;(statearr_15983_16021[1] = 21);
} else
{var statearr_15984_16022 = state_15970__$1;(statearr_15984_16022[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 10))
{var inst_15923 = (state_15970[9]);var inst_15925 = (state_15970[11]);var inst_15930 = cljs.core._nth.call(null,inst_15923,inst_15925);var state_15970__$1 = state_15970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15970__$1,13,out,inst_15930);
} else
{if((state_val_15971 === 11))
{var inst_15936 = (state_15970[13]);var inst_15922 = (state_15970[8]);var inst_15936__$1 = cljs.core.seq.call(null,inst_15922);var state_15970__$1 = (function (){var statearr_15988 = state_15970;(statearr_15988[13] = inst_15936__$1);
return statearr_15988;
})();if(inst_15936__$1)
{var statearr_15989_16023 = state_15970__$1;(statearr_15989_16023[1] = 14);
} else
{var statearr_15990_16024 = state_15970__$1;(statearr_15990_16024[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 12))
{var inst_15956 = (state_15970[2]);var state_15970__$1 = state_15970;var statearr_15991_16025 = state_15970__$1;(statearr_15991_16025[2] = inst_15956);
(statearr_15991_16025[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 13))
{var inst_15922 = (state_15970[8]);var inst_15923 = (state_15970[9]);var inst_15924 = (state_15970[10]);var inst_15925 = (state_15970[11]);var inst_15932 = (state_15970[2]);var inst_15933 = (inst_15925 + 1);var tmp15985 = inst_15922;var tmp15986 = inst_15923;var tmp15987 = inst_15924;var inst_15922__$1 = tmp15985;var inst_15923__$1 = tmp15986;var inst_15924__$1 = tmp15987;var inst_15925__$1 = inst_15933;var state_15970__$1 = (function (){var statearr_15992 = state_15970;(statearr_15992[8] = inst_15922__$1);
(statearr_15992[14] = inst_15932);
(statearr_15992[9] = inst_15923__$1);
(statearr_15992[10] = inst_15924__$1);
(statearr_15992[11] = inst_15925__$1);
return statearr_15992;
})();var statearr_15993_16026 = state_15970__$1;(statearr_15993_16026[2] = null);
(statearr_15993_16026[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 14))
{var inst_15936 = (state_15970[13]);var inst_15938 = cljs.core.chunked_seq_QMARK_.call(null,inst_15936);var state_15970__$1 = state_15970;if(inst_15938)
{var statearr_15994_16027 = state_15970__$1;(statearr_15994_16027[1] = 17);
} else
{var statearr_15995_16028 = state_15970__$1;(statearr_15995_16028[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 15))
{var state_15970__$1 = state_15970;var statearr_15996_16029 = state_15970__$1;(statearr_15996_16029[2] = null);
(statearr_15996_16029[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 16))
{var inst_15954 = (state_15970[2]);var state_15970__$1 = state_15970;var statearr_15997_16030 = state_15970__$1;(statearr_15997_16030[2] = inst_15954);
(statearr_15997_16030[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 17))
{var inst_15936 = (state_15970[13]);var inst_15940 = cljs.core.chunk_first.call(null,inst_15936);var inst_15941 = cljs.core.chunk_rest.call(null,inst_15936);var inst_15942 = cljs.core.count.call(null,inst_15940);var inst_15922 = inst_15941;var inst_15923 = inst_15940;var inst_15924 = inst_15942;var inst_15925 = 0;var state_15970__$1 = (function (){var statearr_15998 = state_15970;(statearr_15998[8] = inst_15922);
(statearr_15998[9] = inst_15923);
(statearr_15998[10] = inst_15924);
(statearr_15998[11] = inst_15925);
return statearr_15998;
})();var statearr_15999_16031 = state_15970__$1;(statearr_15999_16031[2] = null);
(statearr_15999_16031[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 18))
{var inst_15936 = (state_15970[13]);var inst_15945 = cljs.core.first.call(null,inst_15936);var state_15970__$1 = state_15970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15970__$1,20,out,inst_15945);
} else
{if((state_val_15971 === 19))
{var inst_15951 = (state_15970[2]);var state_15970__$1 = state_15970;var statearr_16000_16032 = state_15970__$1;(statearr_16000_16032[2] = inst_15951);
(statearr_16000_16032[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 20))
{var inst_15936 = (state_15970[13]);var inst_15947 = (state_15970[2]);var inst_15948 = cljs.core.next.call(null,inst_15936);var inst_15922 = inst_15948;var inst_15923 = null;var inst_15924 = 0;var inst_15925 = 0;var state_15970__$1 = (function (){var statearr_16001 = state_15970;(statearr_16001[8] = inst_15922);
(statearr_16001[9] = inst_15923);
(statearr_16001[10] = inst_15924);
(statearr_16001[11] = inst_15925);
(statearr_16001[15] = inst_15947);
return statearr_16001;
})();var statearr_16002_16033 = state_15970__$1;(statearr_16002_16033[2] = null);
(statearr_16002_16033[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 21))
{var state_15970__$1 = state_15970;var statearr_16003_16034 = state_15970__$1;(statearr_16003_16034[2] = null);
(statearr_16003_16034[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 22))
{var state_15970__$1 = state_15970;var statearr_16004_16035 = state_15970__$1;(statearr_16004_16035[2] = null);
(statearr_16004_16035[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15971 === 23))
{var inst_15964 = (state_15970[2]);var state_15970__$1 = state_15970;var statearr_16005_16036 = state_15970__$1;(statearr_16005_16036[2] = inst_15964);
(statearr_16005_16036[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10478__auto__))
;return ((function (switch__10408__auto__,c__10478__auto__){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_16009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16009[0] = state_machine__10409__auto__);
(statearr_16009[1] = 1);
return statearr_16009;
});
var state_machine__10409__auto____1 = (function (state_15970){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_15970);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e16010){if((e16010 instanceof Object))
{var ex__10412__auto__ = e16010;var statearr_16011_16037 = state_15970;(statearr_16011_16037[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15970);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16038 = state_15970;
state_15970 = G__16038;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_15970){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_15970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto__))
})();var state__10480__auto__ = (function (){var statearr_16012 = f__10479__auto__.call(null);(statearr_16012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto__);
return statearr_16012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto__))
);
return c__10478__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10478__auto___16133 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto___16133){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto___16133){
return (function (state_16109){var state_val_16110 = (state_16109[1]);if((state_val_16110 === 1))
{var state_16109__$1 = state_16109;var statearr_16111_16134 = state_16109__$1;(statearr_16111_16134[2] = null);
(statearr_16111_16134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16110 === 2))
{var state_16109__$1 = state_16109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16109__$1,4,from);
} else
{if((state_val_16110 === 3))
{var inst_16107 = (state_16109[2]);var state_16109__$1 = state_16109;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16109__$1,inst_16107);
} else
{if((state_val_16110 === 4))
{var inst_16088 = (state_16109[7]);var inst_16088__$1 = (state_16109[2]);var inst_16089 = (inst_16088__$1 == null);var state_16109__$1 = (function (){var statearr_16112 = state_16109;(statearr_16112[7] = inst_16088__$1);
return statearr_16112;
})();if(cljs.core.truth_(inst_16089))
{var statearr_16113_16135 = state_16109__$1;(statearr_16113_16135[1] = 5);
} else
{var statearr_16114_16136 = state_16109__$1;(statearr_16114_16136[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16110 === 5))
{var state_16109__$1 = state_16109;if(cljs.core.truth_(close_QMARK_))
{var statearr_16115_16137 = state_16109__$1;(statearr_16115_16137[1] = 8);
} else
{var statearr_16116_16138 = state_16109__$1;(statearr_16116_16138[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16110 === 6))
{var inst_16088 = (state_16109[7]);var state_16109__$1 = state_16109;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16109__$1,11,to,inst_16088);
} else
{if((state_val_16110 === 7))
{var inst_16105 = (state_16109[2]);var state_16109__$1 = state_16109;var statearr_16117_16139 = state_16109__$1;(statearr_16117_16139[2] = inst_16105);
(statearr_16117_16139[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16110 === 8))
{var inst_16092 = cljs.core.async.close_BANG_.call(null,to);var state_16109__$1 = state_16109;var statearr_16118_16140 = state_16109__$1;(statearr_16118_16140[2] = inst_16092);
(statearr_16118_16140[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16110 === 9))
{var state_16109__$1 = state_16109;var statearr_16119_16141 = state_16109__$1;(statearr_16119_16141[2] = null);
(statearr_16119_16141[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16110 === 10))
{var inst_16095 = (state_16109[2]);var state_16109__$1 = state_16109;var statearr_16120_16142 = state_16109__$1;(statearr_16120_16142[2] = inst_16095);
(statearr_16120_16142[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16110 === 11))
{var inst_16098 = (state_16109[2]);var state_16109__$1 = state_16109;if(cljs.core.truth_(inst_16098))
{var statearr_16121_16143 = state_16109__$1;(statearr_16121_16143[1] = 12);
} else
{var statearr_16122_16144 = state_16109__$1;(statearr_16122_16144[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16110 === 12))
{var state_16109__$1 = state_16109;var statearr_16123_16145 = state_16109__$1;(statearr_16123_16145[2] = null);
(statearr_16123_16145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16110 === 13))
{var state_16109__$1 = state_16109;var statearr_16124_16146 = state_16109__$1;(statearr_16124_16146[2] = null);
(statearr_16124_16146[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16110 === 14))
{var inst_16103 = (state_16109[2]);var state_16109__$1 = state_16109;var statearr_16125_16147 = state_16109__$1;(statearr_16125_16147[2] = inst_16103);
(statearr_16125_16147[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10478__auto___16133))
;return ((function (switch__10408__auto__,c__10478__auto___16133){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_16129 = [null,null,null,null,null,null,null,null];(statearr_16129[0] = state_machine__10409__auto__);
(statearr_16129[1] = 1);
return statearr_16129;
});
var state_machine__10409__auto____1 = (function (state_16109){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_16109);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e16130){if((e16130 instanceof Object))
{var ex__10412__auto__ = e16130;var statearr_16131_16148 = state_16109;(statearr_16131_16148[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16109);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16130;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16149 = state_16109;
state_16109 = G__16149;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_16109){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_16109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto___16133))
})();var state__10480__auto__ = (function (){var statearr_16132 = f__10479__auto__.call(null);(statearr_16132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto___16133);
return statearr_16132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto___16133))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10478__auto___16250 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto___16250,tc,fc){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto___16250,tc,fc){
return (function (state_16225){var state_val_16226 = (state_16225[1]);if((state_val_16226 === 1))
{var state_16225__$1 = state_16225;var statearr_16227_16251 = state_16225__$1;(statearr_16227_16251[2] = null);
(statearr_16227_16251[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16226 === 2))
{var state_16225__$1 = state_16225;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16225__$1,4,ch);
} else
{if((state_val_16226 === 3))
{var inst_16223 = (state_16225[2]);var state_16225__$1 = state_16225;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16225__$1,inst_16223);
} else
{if((state_val_16226 === 4))
{var inst_16202 = (state_16225[7]);var inst_16202__$1 = (state_16225[2]);var inst_16203 = (inst_16202__$1 == null);var state_16225__$1 = (function (){var statearr_16228 = state_16225;(statearr_16228[7] = inst_16202__$1);
return statearr_16228;
})();if(cljs.core.truth_(inst_16203))
{var statearr_16229_16252 = state_16225__$1;(statearr_16229_16252[1] = 5);
} else
{var statearr_16230_16253 = state_16225__$1;(statearr_16230_16253[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16226 === 5))
{var inst_16205 = cljs.core.async.close_BANG_.call(null,tc);var inst_16206 = cljs.core.async.close_BANG_.call(null,fc);var state_16225__$1 = (function (){var statearr_16231 = state_16225;(statearr_16231[8] = inst_16205);
return statearr_16231;
})();var statearr_16232_16254 = state_16225__$1;(statearr_16232_16254[2] = inst_16206);
(statearr_16232_16254[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16226 === 6))
{var inst_16202 = (state_16225[7]);var inst_16208 = p.call(null,inst_16202);var state_16225__$1 = state_16225;if(cljs.core.truth_(inst_16208))
{var statearr_16233_16255 = state_16225__$1;(statearr_16233_16255[1] = 9);
} else
{var statearr_16234_16256 = state_16225__$1;(statearr_16234_16256[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16226 === 7))
{var inst_16221 = (state_16225[2]);var state_16225__$1 = state_16225;var statearr_16235_16257 = state_16225__$1;(statearr_16235_16257[2] = inst_16221);
(statearr_16235_16257[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16226 === 8))
{var inst_16214 = (state_16225[2]);var state_16225__$1 = state_16225;if(cljs.core.truth_(inst_16214))
{var statearr_16236_16258 = state_16225__$1;(statearr_16236_16258[1] = 12);
} else
{var statearr_16237_16259 = state_16225__$1;(statearr_16237_16259[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16226 === 9))
{var state_16225__$1 = state_16225;var statearr_16238_16260 = state_16225__$1;(statearr_16238_16260[2] = tc);
(statearr_16238_16260[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16226 === 10))
{var state_16225__$1 = state_16225;var statearr_16239_16261 = state_16225__$1;(statearr_16239_16261[2] = fc);
(statearr_16239_16261[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16226 === 11))
{var inst_16202 = (state_16225[7]);var inst_16212 = (state_16225[2]);var state_16225__$1 = state_16225;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16225__$1,8,inst_16212,inst_16202);
} else
{if((state_val_16226 === 12))
{var state_16225__$1 = state_16225;var statearr_16240_16262 = state_16225__$1;(statearr_16240_16262[2] = null);
(statearr_16240_16262[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16226 === 13))
{var state_16225__$1 = state_16225;var statearr_16241_16263 = state_16225__$1;(statearr_16241_16263[2] = null);
(statearr_16241_16263[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16226 === 14))
{var inst_16219 = (state_16225[2]);var state_16225__$1 = state_16225;var statearr_16242_16264 = state_16225__$1;(statearr_16242_16264[2] = inst_16219);
(statearr_16242_16264[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10478__auto___16250,tc,fc))
;return ((function (switch__10408__auto__,c__10478__auto___16250,tc,fc){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_16246 = [null,null,null,null,null,null,null,null,null];(statearr_16246[0] = state_machine__10409__auto__);
(statearr_16246[1] = 1);
return statearr_16246;
});
var state_machine__10409__auto____1 = (function (state_16225){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_16225);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e16247){if((e16247 instanceof Object))
{var ex__10412__auto__ = e16247;var statearr_16248_16265 = state_16225;(statearr_16248_16265[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16225);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16247;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16266 = state_16225;
state_16225 = G__16266;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_16225){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_16225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto___16250,tc,fc))
})();var state__10480__auto__ = (function (){var statearr_16249 = f__10479__auto__.call(null);(statearr_16249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto___16250);
return statearr_16249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto___16250,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10478__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto__){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto__){
return (function (state_16313){var state_val_16314 = (state_16313[1]);if((state_val_16314 === 7))
{var inst_16309 = (state_16313[2]);var state_16313__$1 = state_16313;var statearr_16315_16331 = state_16313__$1;(statearr_16315_16331[2] = inst_16309);
(statearr_16315_16331[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16314 === 6))
{var inst_16302 = (state_16313[7]);var inst_16299 = (state_16313[8]);var inst_16306 = f.call(null,inst_16299,inst_16302);var inst_16299__$1 = inst_16306;var state_16313__$1 = (function (){var statearr_16316 = state_16313;(statearr_16316[8] = inst_16299__$1);
return statearr_16316;
})();var statearr_16317_16332 = state_16313__$1;(statearr_16317_16332[2] = null);
(statearr_16317_16332[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16314 === 5))
{var inst_16299 = (state_16313[8]);var state_16313__$1 = state_16313;var statearr_16318_16333 = state_16313__$1;(statearr_16318_16333[2] = inst_16299);
(statearr_16318_16333[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16314 === 4))
{var inst_16302 = (state_16313[7]);var inst_16302__$1 = (state_16313[2]);var inst_16303 = (inst_16302__$1 == null);var state_16313__$1 = (function (){var statearr_16319 = state_16313;(statearr_16319[7] = inst_16302__$1);
return statearr_16319;
})();if(cljs.core.truth_(inst_16303))
{var statearr_16320_16334 = state_16313__$1;(statearr_16320_16334[1] = 5);
} else
{var statearr_16321_16335 = state_16313__$1;(statearr_16321_16335[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16314 === 3))
{var inst_16311 = (state_16313[2]);var state_16313__$1 = state_16313;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16313__$1,inst_16311);
} else
{if((state_val_16314 === 2))
{var state_16313__$1 = state_16313;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16313__$1,4,ch);
} else
{if((state_val_16314 === 1))
{var inst_16299 = init;var state_16313__$1 = (function (){var statearr_16322 = state_16313;(statearr_16322[8] = inst_16299);
return statearr_16322;
})();var statearr_16323_16336 = state_16313__$1;(statearr_16323_16336[2] = null);
(statearr_16323_16336[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10478__auto__))
;return ((function (switch__10408__auto__,c__10478__auto__){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_16327 = [null,null,null,null,null,null,null,null,null];(statearr_16327[0] = state_machine__10409__auto__);
(statearr_16327[1] = 1);
return statearr_16327;
});
var state_machine__10409__auto____1 = (function (state_16313){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_16313);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e16328){if((e16328 instanceof Object))
{var ex__10412__auto__ = e16328;var statearr_16329_16337 = state_16313;(statearr_16329_16337[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16313);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16338 = state_16313;
state_16313 = G__16338;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_16313){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_16313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto__))
})();var state__10480__auto__ = (function (){var statearr_16330 = f__10479__auto__.call(null);(statearr_16330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto__);
return statearr_16330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto__))
);
return c__10478__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10478__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto__){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto__){
return (function (state_16412){var state_val_16413 = (state_16412[1]);if((state_val_16413 === 1))
{var inst_16388 = cljs.core.seq.call(null,coll);var inst_16389 = inst_16388;var state_16412__$1 = (function (){var statearr_16414 = state_16412;(statearr_16414[7] = inst_16389);
return statearr_16414;
})();var statearr_16415_16437 = state_16412__$1;(statearr_16415_16437[2] = null);
(statearr_16415_16437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16413 === 2))
{var inst_16389 = (state_16412[7]);var state_16412__$1 = state_16412;if(cljs.core.truth_(inst_16389))
{var statearr_16416_16438 = state_16412__$1;(statearr_16416_16438[1] = 4);
} else
{var statearr_16417_16439 = state_16412__$1;(statearr_16417_16439[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16413 === 3))
{var inst_16410 = (state_16412[2]);var state_16412__$1 = state_16412;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16412__$1,inst_16410);
} else
{if((state_val_16413 === 4))
{var inst_16389 = (state_16412[7]);var inst_16392 = cljs.core.first.call(null,inst_16389);var state_16412__$1 = state_16412;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16412__$1,7,ch,inst_16392);
} else
{if((state_val_16413 === 5))
{var inst_16389 = (state_16412[7]);var state_16412__$1 = state_16412;var statearr_16418_16440 = state_16412__$1;(statearr_16418_16440[2] = inst_16389);
(statearr_16418_16440[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16413 === 6))
{var inst_16397 = (state_16412[2]);var state_16412__$1 = state_16412;if(cljs.core.truth_(inst_16397))
{var statearr_16419_16441 = state_16412__$1;(statearr_16419_16441[1] = 8);
} else
{var statearr_16420_16442 = state_16412__$1;(statearr_16420_16442[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16413 === 7))
{var inst_16394 = (state_16412[2]);var state_16412__$1 = state_16412;var statearr_16421_16443 = state_16412__$1;(statearr_16421_16443[2] = inst_16394);
(statearr_16421_16443[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16413 === 8))
{var inst_16389 = (state_16412[7]);var inst_16399 = cljs.core.next.call(null,inst_16389);var inst_16389__$1 = inst_16399;var state_16412__$1 = (function (){var statearr_16422 = state_16412;(statearr_16422[7] = inst_16389__$1);
return statearr_16422;
})();var statearr_16423_16444 = state_16412__$1;(statearr_16423_16444[2] = null);
(statearr_16423_16444[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16413 === 9))
{var state_16412__$1 = state_16412;if(cljs.core.truth_(close_QMARK_))
{var statearr_16424_16445 = state_16412__$1;(statearr_16424_16445[1] = 11);
} else
{var statearr_16425_16446 = state_16412__$1;(statearr_16425_16446[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16413 === 10))
{var inst_16408 = (state_16412[2]);var state_16412__$1 = state_16412;var statearr_16426_16447 = state_16412__$1;(statearr_16426_16447[2] = inst_16408);
(statearr_16426_16447[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16413 === 11))
{var inst_16403 = cljs.core.async.close_BANG_.call(null,ch);var state_16412__$1 = state_16412;var statearr_16427_16448 = state_16412__$1;(statearr_16427_16448[2] = inst_16403);
(statearr_16427_16448[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16413 === 12))
{var state_16412__$1 = state_16412;var statearr_16428_16449 = state_16412__$1;(statearr_16428_16449[2] = null);
(statearr_16428_16449[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16413 === 13))
{var inst_16406 = (state_16412[2]);var state_16412__$1 = state_16412;var statearr_16429_16450 = state_16412__$1;(statearr_16429_16450[2] = inst_16406);
(statearr_16429_16450[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10478__auto__))
;return ((function (switch__10408__auto__,c__10478__auto__){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_16433 = [null,null,null,null,null,null,null,null];(statearr_16433[0] = state_machine__10409__auto__);
(statearr_16433[1] = 1);
return statearr_16433;
});
var state_machine__10409__auto____1 = (function (state_16412){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_16412);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e16434){if((e16434 instanceof Object))
{var ex__10412__auto__ = e16434;var statearr_16435_16451 = state_16412;(statearr_16435_16451[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16412);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16452 = state_16412;
state_16412 = G__16452;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_16412){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_16412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto__))
})();var state__10480__auto__ = (function (){var statearr_16436 = f__10479__auto__.call(null);(statearr_16436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto__);
return statearr_16436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto__))
);
return c__10478__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj16454 = {};return obj16454;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7868__auto__ = _;if(and__7868__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7868__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8507__auto__ = (((_ == null))?null:_);return (function (){var or__7880__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16456 = {};return obj16456;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16678 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16678 = (function (cs,ch,mult,meta16679){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16679 = meta16679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16678.cljs$lang$type = true;
cljs.core.async.t16678.cljs$lang$ctorStr = "cljs.core.async/t16678";
cljs.core.async.t16678.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t16678");
});})(cs))
;
cljs.core.async.t16678.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16678.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16678.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16678.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16678.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16680){var self__ = this;
var _16680__$1 = this;return self__.meta16679;
});})(cs))
;
cljs.core.async.t16678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16680,meta16679__$1){var self__ = this;
var _16680__$1 = this;return (new cljs.core.async.t16678(self__.cs,self__.ch,self__.mult,meta16679__$1));
});})(cs))
;
cljs.core.async.__GT_t16678 = ((function (cs){
return (function __GT_t16678(cs__$1,ch__$1,mult__$1,meta16679){return (new cljs.core.async.t16678(cs__$1,ch__$1,mult__$1,meta16679));
});})(cs))
;
}
return (new cljs.core.async.t16678(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10478__auto___16899 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto___16899,cs,m,dchan,dctr,done){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto___16899,cs,m,dchan,dctr,done){
return (function (state_16811){var state_val_16812 = (state_16811[1]);if((state_val_16812 === 32))
{var inst_16754 = (state_16811[7]);var inst_16752 = (state_16811[8]);var inst_16753 = (state_16811[9]);var inst_16751 = (state_16811[10]);var inst_16766 = (state_16811[2]);var inst_16767 = (inst_16754 + 1);var tmp16813 = inst_16752;var tmp16814 = inst_16753;var tmp16815 = inst_16751;var inst_16751__$1 = tmp16815;var inst_16752__$1 = tmp16813;var inst_16753__$1 = tmp16814;var inst_16754__$1 = inst_16767;var state_16811__$1 = (function (){var statearr_16816 = state_16811;(statearr_16816[7] = inst_16754__$1);
(statearr_16816[8] = inst_16752__$1);
(statearr_16816[9] = inst_16753__$1);
(statearr_16816[10] = inst_16751__$1);
(statearr_16816[11] = inst_16766);
return statearr_16816;
})();var statearr_16817_16900 = state_16811__$1;(statearr_16817_16900[2] = null);
(statearr_16817_16900[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 1))
{var state_16811__$1 = state_16811;var statearr_16818_16901 = state_16811__$1;(statearr_16818_16901[2] = null);
(statearr_16818_16901[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 33))
{var inst_16770 = (state_16811[12]);var inst_16772 = cljs.core.chunked_seq_QMARK_.call(null,inst_16770);var state_16811__$1 = state_16811;if(inst_16772)
{var statearr_16819_16902 = state_16811__$1;(statearr_16819_16902[1] = 36);
} else
{var statearr_16820_16903 = state_16811__$1;(statearr_16820_16903[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 2))
{var state_16811__$1 = state_16811;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16811__$1,4,ch);
} else
{if((state_val_16812 === 34))
{var state_16811__$1 = state_16811;var statearr_16821_16904 = state_16811__$1;(statearr_16821_16904[2] = null);
(statearr_16821_16904[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 3))
{var inst_16809 = (state_16811[2]);var state_16811__$1 = state_16811;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16811__$1,inst_16809);
} else
{if((state_val_16812 === 35))
{var inst_16793 = (state_16811[2]);var state_16811__$1 = state_16811;var statearr_16822_16905 = state_16811__$1;(statearr_16822_16905[2] = inst_16793);
(statearr_16822_16905[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 4))
{var inst_16683 = (state_16811[13]);var inst_16683__$1 = (state_16811[2]);var inst_16684 = (inst_16683__$1 == null);var state_16811__$1 = (function (){var statearr_16823 = state_16811;(statearr_16823[13] = inst_16683__$1);
return statearr_16823;
})();if(cljs.core.truth_(inst_16684))
{var statearr_16824_16906 = state_16811__$1;(statearr_16824_16906[1] = 5);
} else
{var statearr_16825_16907 = state_16811__$1;(statearr_16825_16907[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 36))
{var inst_16770 = (state_16811[12]);var inst_16774 = cljs.core.chunk_first.call(null,inst_16770);var inst_16775 = cljs.core.chunk_rest.call(null,inst_16770);var inst_16776 = cljs.core.count.call(null,inst_16774);var inst_16751 = inst_16775;var inst_16752 = inst_16774;var inst_16753 = inst_16776;var inst_16754 = 0;var state_16811__$1 = (function (){var statearr_16826 = state_16811;(statearr_16826[7] = inst_16754);
(statearr_16826[8] = inst_16752);
(statearr_16826[9] = inst_16753);
(statearr_16826[10] = inst_16751);
return statearr_16826;
})();var statearr_16827_16908 = state_16811__$1;(statearr_16827_16908[2] = null);
(statearr_16827_16908[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 5))
{var inst_16690 = cljs.core.deref.call(null,cs);var inst_16691 = cljs.core.seq.call(null,inst_16690);var inst_16692 = inst_16691;var inst_16693 = null;var inst_16694 = 0;var inst_16695 = 0;var state_16811__$1 = (function (){var statearr_16828 = state_16811;(statearr_16828[14] = inst_16695);
(statearr_16828[15] = inst_16692);
(statearr_16828[16] = inst_16694);
(statearr_16828[17] = inst_16693);
return statearr_16828;
})();var statearr_16829_16909 = state_16811__$1;(statearr_16829_16909[2] = null);
(statearr_16829_16909[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 37))
{var inst_16779 = (state_16811[18]);var inst_16683 = (state_16811[13]);var inst_16770 = (state_16811[12]);var inst_16779__$1 = cljs.core.first.call(null,inst_16770);var inst_16780 = cljs.core.async.put_BANG_.call(null,inst_16779__$1,inst_16683,done);var state_16811__$1 = (function (){var statearr_16830 = state_16811;(statearr_16830[18] = inst_16779__$1);
return statearr_16830;
})();if(cljs.core.truth_(inst_16780))
{var statearr_16831_16910 = state_16811__$1;(statearr_16831_16910[1] = 39);
} else
{var statearr_16832_16911 = state_16811__$1;(statearr_16832_16911[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 6))
{var inst_16743 = (state_16811[19]);var inst_16742 = cljs.core.deref.call(null,cs);var inst_16743__$1 = cljs.core.keys.call(null,inst_16742);var inst_16744 = cljs.core.count.call(null,inst_16743__$1);var inst_16745 = cljs.core.reset_BANG_.call(null,dctr,inst_16744);var inst_16750 = cljs.core.seq.call(null,inst_16743__$1);var inst_16751 = inst_16750;var inst_16752 = null;var inst_16753 = 0;var inst_16754 = 0;var state_16811__$1 = (function (){var statearr_16833 = state_16811;(statearr_16833[7] = inst_16754);
(statearr_16833[8] = inst_16752);
(statearr_16833[9] = inst_16753);
(statearr_16833[10] = inst_16751);
(statearr_16833[20] = inst_16745);
(statearr_16833[19] = inst_16743__$1);
return statearr_16833;
})();var statearr_16834_16912 = state_16811__$1;(statearr_16834_16912[2] = null);
(statearr_16834_16912[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 38))
{var inst_16790 = (state_16811[2]);var state_16811__$1 = state_16811;var statearr_16835_16913 = state_16811__$1;(statearr_16835_16913[2] = inst_16790);
(statearr_16835_16913[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 7))
{var inst_16807 = (state_16811[2]);var state_16811__$1 = state_16811;var statearr_16836_16914 = state_16811__$1;(statearr_16836_16914[2] = inst_16807);
(statearr_16836_16914[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 39))
{var state_16811__$1 = state_16811;var statearr_16837_16915 = state_16811__$1;(statearr_16837_16915[2] = null);
(statearr_16837_16915[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 8))
{var inst_16695 = (state_16811[14]);var inst_16694 = (state_16811[16]);var inst_16697 = (inst_16695 < inst_16694);var inst_16698 = inst_16697;var state_16811__$1 = state_16811;if(cljs.core.truth_(inst_16698))
{var statearr_16838_16916 = state_16811__$1;(statearr_16838_16916[1] = 10);
} else
{var statearr_16839_16917 = state_16811__$1;(statearr_16839_16917[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 40))
{var inst_16779 = (state_16811[18]);var inst_16783 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16784 = cljs.core.async.untap_STAR_.call(null,m,inst_16779);var state_16811__$1 = (function (){var statearr_16840 = state_16811;(statearr_16840[21] = inst_16783);
return statearr_16840;
})();var statearr_16841_16918 = state_16811__$1;(statearr_16841_16918[2] = inst_16784);
(statearr_16841_16918[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 9))
{var inst_16740 = (state_16811[2]);var state_16811__$1 = state_16811;var statearr_16842_16919 = state_16811__$1;(statearr_16842_16919[2] = inst_16740);
(statearr_16842_16919[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 41))
{var inst_16770 = (state_16811[12]);var inst_16786 = (state_16811[2]);var inst_16787 = cljs.core.next.call(null,inst_16770);var inst_16751 = inst_16787;var inst_16752 = null;var inst_16753 = 0;var inst_16754 = 0;var state_16811__$1 = (function (){var statearr_16843 = state_16811;(statearr_16843[22] = inst_16786);
(statearr_16843[7] = inst_16754);
(statearr_16843[8] = inst_16752);
(statearr_16843[9] = inst_16753);
(statearr_16843[10] = inst_16751);
return statearr_16843;
})();var statearr_16844_16920 = state_16811__$1;(statearr_16844_16920[2] = null);
(statearr_16844_16920[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 10))
{var inst_16695 = (state_16811[14]);var inst_16693 = (state_16811[17]);var inst_16701 = cljs.core._nth.call(null,inst_16693,inst_16695);var inst_16702 = cljs.core.nth.call(null,inst_16701,0,null);var inst_16703 = cljs.core.nth.call(null,inst_16701,1,null);var state_16811__$1 = (function (){var statearr_16845 = state_16811;(statearr_16845[23] = inst_16702);
return statearr_16845;
})();if(cljs.core.truth_(inst_16703))
{var statearr_16846_16921 = state_16811__$1;(statearr_16846_16921[1] = 13);
} else
{var statearr_16847_16922 = state_16811__$1;(statearr_16847_16922[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 42))
{var state_16811__$1 = state_16811;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16811__$1,45,dchan);
} else
{if((state_val_16812 === 11))
{var inst_16712 = (state_16811[24]);var inst_16692 = (state_16811[15]);var inst_16712__$1 = cljs.core.seq.call(null,inst_16692);var state_16811__$1 = (function (){var statearr_16848 = state_16811;(statearr_16848[24] = inst_16712__$1);
return statearr_16848;
})();if(inst_16712__$1)
{var statearr_16849_16923 = state_16811__$1;(statearr_16849_16923[1] = 16);
} else
{var statearr_16850_16924 = state_16811__$1;(statearr_16850_16924[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 43))
{var state_16811__$1 = state_16811;var statearr_16851_16925 = state_16811__$1;(statearr_16851_16925[2] = null);
(statearr_16851_16925[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 12))
{var inst_16738 = (state_16811[2]);var state_16811__$1 = state_16811;var statearr_16852_16926 = state_16811__$1;(statearr_16852_16926[2] = inst_16738);
(statearr_16852_16926[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 44))
{var inst_16804 = (state_16811[2]);var state_16811__$1 = (function (){var statearr_16853 = state_16811;(statearr_16853[25] = inst_16804);
return statearr_16853;
})();var statearr_16854_16927 = state_16811__$1;(statearr_16854_16927[2] = null);
(statearr_16854_16927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 13))
{var inst_16702 = (state_16811[23]);var inst_16705 = cljs.core.async.close_BANG_.call(null,inst_16702);var state_16811__$1 = state_16811;var statearr_16855_16928 = state_16811__$1;(statearr_16855_16928[2] = inst_16705);
(statearr_16855_16928[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 45))
{var inst_16801 = (state_16811[2]);var state_16811__$1 = state_16811;var statearr_16859_16929 = state_16811__$1;(statearr_16859_16929[2] = inst_16801);
(statearr_16859_16929[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 14))
{var state_16811__$1 = state_16811;var statearr_16860_16930 = state_16811__$1;(statearr_16860_16930[2] = null);
(statearr_16860_16930[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 15))
{var inst_16695 = (state_16811[14]);var inst_16692 = (state_16811[15]);var inst_16694 = (state_16811[16]);var inst_16693 = (state_16811[17]);var inst_16708 = (state_16811[2]);var inst_16709 = (inst_16695 + 1);var tmp16856 = inst_16692;var tmp16857 = inst_16694;var tmp16858 = inst_16693;var inst_16692__$1 = tmp16856;var inst_16693__$1 = tmp16858;var inst_16694__$1 = tmp16857;var inst_16695__$1 = inst_16709;var state_16811__$1 = (function (){var statearr_16861 = state_16811;(statearr_16861[26] = inst_16708);
(statearr_16861[14] = inst_16695__$1);
(statearr_16861[15] = inst_16692__$1);
(statearr_16861[16] = inst_16694__$1);
(statearr_16861[17] = inst_16693__$1);
return statearr_16861;
})();var statearr_16862_16931 = state_16811__$1;(statearr_16862_16931[2] = null);
(statearr_16862_16931[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 16))
{var inst_16712 = (state_16811[24]);var inst_16714 = cljs.core.chunked_seq_QMARK_.call(null,inst_16712);var state_16811__$1 = state_16811;if(inst_16714)
{var statearr_16863_16932 = state_16811__$1;(statearr_16863_16932[1] = 19);
} else
{var statearr_16864_16933 = state_16811__$1;(statearr_16864_16933[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 17))
{var state_16811__$1 = state_16811;var statearr_16865_16934 = state_16811__$1;(statearr_16865_16934[2] = null);
(statearr_16865_16934[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 18))
{var inst_16736 = (state_16811[2]);var state_16811__$1 = state_16811;var statearr_16866_16935 = state_16811__$1;(statearr_16866_16935[2] = inst_16736);
(statearr_16866_16935[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 19))
{var inst_16712 = (state_16811[24]);var inst_16716 = cljs.core.chunk_first.call(null,inst_16712);var inst_16717 = cljs.core.chunk_rest.call(null,inst_16712);var inst_16718 = cljs.core.count.call(null,inst_16716);var inst_16692 = inst_16717;var inst_16693 = inst_16716;var inst_16694 = inst_16718;var inst_16695 = 0;var state_16811__$1 = (function (){var statearr_16867 = state_16811;(statearr_16867[14] = inst_16695);
(statearr_16867[15] = inst_16692);
(statearr_16867[16] = inst_16694);
(statearr_16867[17] = inst_16693);
return statearr_16867;
})();var statearr_16868_16936 = state_16811__$1;(statearr_16868_16936[2] = null);
(statearr_16868_16936[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 20))
{var inst_16712 = (state_16811[24]);var inst_16722 = cljs.core.first.call(null,inst_16712);var inst_16723 = cljs.core.nth.call(null,inst_16722,0,null);var inst_16724 = cljs.core.nth.call(null,inst_16722,1,null);var state_16811__$1 = (function (){var statearr_16869 = state_16811;(statearr_16869[27] = inst_16723);
return statearr_16869;
})();if(cljs.core.truth_(inst_16724))
{var statearr_16870_16937 = state_16811__$1;(statearr_16870_16937[1] = 22);
} else
{var statearr_16871_16938 = state_16811__$1;(statearr_16871_16938[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 21))
{var inst_16733 = (state_16811[2]);var state_16811__$1 = state_16811;var statearr_16872_16939 = state_16811__$1;(statearr_16872_16939[2] = inst_16733);
(statearr_16872_16939[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 22))
{var inst_16723 = (state_16811[27]);var inst_16726 = cljs.core.async.close_BANG_.call(null,inst_16723);var state_16811__$1 = state_16811;var statearr_16873_16940 = state_16811__$1;(statearr_16873_16940[2] = inst_16726);
(statearr_16873_16940[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 23))
{var state_16811__$1 = state_16811;var statearr_16874_16941 = state_16811__$1;(statearr_16874_16941[2] = null);
(statearr_16874_16941[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 24))
{var inst_16712 = (state_16811[24]);var inst_16729 = (state_16811[2]);var inst_16730 = cljs.core.next.call(null,inst_16712);var inst_16692 = inst_16730;var inst_16693 = null;var inst_16694 = 0;var inst_16695 = 0;var state_16811__$1 = (function (){var statearr_16875 = state_16811;(statearr_16875[28] = inst_16729);
(statearr_16875[14] = inst_16695);
(statearr_16875[15] = inst_16692);
(statearr_16875[16] = inst_16694);
(statearr_16875[17] = inst_16693);
return statearr_16875;
})();var statearr_16876_16942 = state_16811__$1;(statearr_16876_16942[2] = null);
(statearr_16876_16942[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 25))
{var inst_16754 = (state_16811[7]);var inst_16753 = (state_16811[9]);var inst_16756 = (inst_16754 < inst_16753);var inst_16757 = inst_16756;var state_16811__$1 = state_16811;if(cljs.core.truth_(inst_16757))
{var statearr_16877_16943 = state_16811__$1;(statearr_16877_16943[1] = 27);
} else
{var statearr_16878_16944 = state_16811__$1;(statearr_16878_16944[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 26))
{var inst_16743 = (state_16811[19]);var inst_16797 = (state_16811[2]);var inst_16798 = cljs.core.seq.call(null,inst_16743);var state_16811__$1 = (function (){var statearr_16879 = state_16811;(statearr_16879[29] = inst_16797);
return statearr_16879;
})();if(inst_16798)
{var statearr_16880_16945 = state_16811__$1;(statearr_16880_16945[1] = 42);
} else
{var statearr_16881_16946 = state_16811__$1;(statearr_16881_16946[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 27))
{var inst_16754 = (state_16811[7]);var inst_16752 = (state_16811[8]);var inst_16683 = (state_16811[13]);var inst_16759 = (state_16811[30]);var inst_16759__$1 = cljs.core._nth.call(null,inst_16752,inst_16754);var inst_16760 = cljs.core.async.put_BANG_.call(null,inst_16759__$1,inst_16683,done);var state_16811__$1 = (function (){var statearr_16882 = state_16811;(statearr_16882[30] = inst_16759__$1);
return statearr_16882;
})();if(cljs.core.truth_(inst_16760))
{var statearr_16883_16947 = state_16811__$1;(statearr_16883_16947[1] = 30);
} else
{var statearr_16884_16948 = state_16811__$1;(statearr_16884_16948[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 28))
{var inst_16751 = (state_16811[10]);var inst_16770 = (state_16811[12]);var inst_16770__$1 = cljs.core.seq.call(null,inst_16751);var state_16811__$1 = (function (){var statearr_16885 = state_16811;(statearr_16885[12] = inst_16770__$1);
return statearr_16885;
})();if(inst_16770__$1)
{var statearr_16886_16949 = state_16811__$1;(statearr_16886_16949[1] = 33);
} else
{var statearr_16887_16950 = state_16811__$1;(statearr_16887_16950[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 29))
{var inst_16795 = (state_16811[2]);var state_16811__$1 = state_16811;var statearr_16888_16951 = state_16811__$1;(statearr_16888_16951[2] = inst_16795);
(statearr_16888_16951[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 30))
{var state_16811__$1 = state_16811;var statearr_16889_16952 = state_16811__$1;(statearr_16889_16952[2] = null);
(statearr_16889_16952[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16812 === 31))
{var inst_16759 = (state_16811[30]);var inst_16763 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16764 = cljs.core.async.untap_STAR_.call(null,m,inst_16759);var state_16811__$1 = (function (){var statearr_16890 = state_16811;(statearr_16890[31] = inst_16763);
return statearr_16890;
})();var statearr_16891_16953 = state_16811__$1;(statearr_16891_16953[2] = inst_16764);
(statearr_16891_16953[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10478__auto___16899,cs,m,dchan,dctr,done))
;return ((function (switch__10408__auto__,c__10478__auto___16899,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_16895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16895[0] = state_machine__10409__auto__);
(statearr_16895[1] = 1);
return statearr_16895;
});
var state_machine__10409__auto____1 = (function (state_16811){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_16811);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e16896){if((e16896 instanceof Object))
{var ex__10412__auto__ = e16896;var statearr_16897_16954 = state_16811;(statearr_16897_16954[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16811);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16896;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16955 = state_16811;
state_16811 = G__16955;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_16811){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_16811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto___16899,cs,m,dchan,dctr,done))
})();var state__10480__auto__ = (function (){var statearr_16898 = f__10479__auto__.call(null);(statearr_16898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto___16899);
return statearr_16898;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto___16899,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16957 = {};return obj16957;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t17077 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17077 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta17078){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta17078 = meta17078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17077.cljs$lang$type = true;
cljs.core.async.t17077.cljs$lang$ctorStr = "cljs.core.async/t17077";
cljs.core.async.t17077.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t17077");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17077.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17079){var self__ = this;
var _17079__$1 = this;return self__.meta17078;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17079,meta17078__$1){var self__ = this;
var _17079__$1 = this;return (new cljs.core.async.t17077(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta17078__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17077 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17077(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17078){return (new cljs.core.async.t17077(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17078));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17077(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10478__auto___17196 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto___17196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto___17196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17149){var state_val_17150 = (state_17149[1]);if((state_val_17150 === 1))
{var inst_17083 = (state_17149[7]);var inst_17083__$1 = calc_state.call(null);var inst_17084 = cljs.core.seq_QMARK_.call(null,inst_17083__$1);var state_17149__$1 = (function (){var statearr_17151 = state_17149;(statearr_17151[7] = inst_17083__$1);
return statearr_17151;
})();if(inst_17084)
{var statearr_17152_17197 = state_17149__$1;(statearr_17152_17197[1] = 2);
} else
{var statearr_17153_17198 = state_17149__$1;(statearr_17153_17198[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 2))
{var inst_17083 = (state_17149[7]);var inst_17086 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17083);var state_17149__$1 = state_17149;var statearr_17154_17199 = state_17149__$1;(statearr_17154_17199[2] = inst_17086);
(statearr_17154_17199[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 3))
{var inst_17083 = (state_17149[7]);var state_17149__$1 = state_17149;var statearr_17155_17200 = state_17149__$1;(statearr_17155_17200[2] = inst_17083);
(statearr_17155_17200[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 4))
{var inst_17083 = (state_17149[7]);var inst_17089 = (state_17149[2]);var inst_17090 = cljs.core.get.call(null,inst_17089,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17091 = cljs.core.get.call(null,inst_17089,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17092 = cljs.core.get.call(null,inst_17089,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_17093 = inst_17083;var state_17149__$1 = (function (){var statearr_17156 = state_17149;(statearr_17156[8] = inst_17093);
(statearr_17156[9] = inst_17092);
(statearr_17156[10] = inst_17091);
(statearr_17156[11] = inst_17090);
return statearr_17156;
})();var statearr_17157_17201 = state_17149__$1;(statearr_17157_17201[2] = null);
(statearr_17157_17201[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 5))
{var inst_17093 = (state_17149[8]);var inst_17096 = cljs.core.seq_QMARK_.call(null,inst_17093);var state_17149__$1 = state_17149;if(inst_17096)
{var statearr_17158_17202 = state_17149__$1;(statearr_17158_17202[1] = 7);
} else
{var statearr_17159_17203 = state_17149__$1;(statearr_17159_17203[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 6))
{var inst_17147 = (state_17149[2]);var state_17149__$1 = state_17149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17149__$1,inst_17147);
} else
{if((state_val_17150 === 7))
{var inst_17093 = (state_17149[8]);var inst_17098 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17093);var state_17149__$1 = state_17149;var statearr_17160_17204 = state_17149__$1;(statearr_17160_17204[2] = inst_17098);
(statearr_17160_17204[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 8))
{var inst_17093 = (state_17149[8]);var state_17149__$1 = state_17149;var statearr_17161_17205 = state_17149__$1;(statearr_17161_17205[2] = inst_17093);
(statearr_17161_17205[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 9))
{var inst_17101 = (state_17149[12]);var inst_17101__$1 = (state_17149[2]);var inst_17102 = cljs.core.get.call(null,inst_17101__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17103 = cljs.core.get.call(null,inst_17101__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17104 = cljs.core.get.call(null,inst_17101__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_17149__$1 = (function (){var statearr_17162 = state_17149;(statearr_17162[13] = inst_17104);
(statearr_17162[14] = inst_17103);
(statearr_17162[12] = inst_17101__$1);
return statearr_17162;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17149__$1,10,inst_17102);
} else
{if((state_val_17150 === 10))
{var inst_17109 = (state_17149[15]);var inst_17108 = (state_17149[16]);var inst_17107 = (state_17149[2]);var inst_17108__$1 = cljs.core.nth.call(null,inst_17107,0,null);var inst_17109__$1 = cljs.core.nth.call(null,inst_17107,1,null);var inst_17110 = (inst_17108__$1 == null);var inst_17111 = cljs.core._EQ_.call(null,inst_17109__$1,change);var inst_17112 = (inst_17110) || (inst_17111);var state_17149__$1 = (function (){var statearr_17163 = state_17149;(statearr_17163[15] = inst_17109__$1);
(statearr_17163[16] = inst_17108__$1);
return statearr_17163;
})();if(cljs.core.truth_(inst_17112))
{var statearr_17164_17206 = state_17149__$1;(statearr_17164_17206[1] = 11);
} else
{var statearr_17165_17207 = state_17149__$1;(statearr_17165_17207[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 11))
{var inst_17108 = (state_17149[16]);var inst_17114 = (inst_17108 == null);var state_17149__$1 = state_17149;if(cljs.core.truth_(inst_17114))
{var statearr_17166_17208 = state_17149__$1;(statearr_17166_17208[1] = 14);
} else
{var statearr_17167_17209 = state_17149__$1;(statearr_17167_17209[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 12))
{var inst_17123 = (state_17149[17]);var inst_17109 = (state_17149[15]);var inst_17104 = (state_17149[13]);var inst_17123__$1 = inst_17104.call(null,inst_17109);var state_17149__$1 = (function (){var statearr_17168 = state_17149;(statearr_17168[17] = inst_17123__$1);
return statearr_17168;
})();if(cljs.core.truth_(inst_17123__$1))
{var statearr_17169_17210 = state_17149__$1;(statearr_17169_17210[1] = 17);
} else
{var statearr_17170_17211 = state_17149__$1;(statearr_17170_17211[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 13))
{var inst_17145 = (state_17149[2]);var state_17149__$1 = state_17149;var statearr_17171_17212 = state_17149__$1;(statearr_17171_17212[2] = inst_17145);
(statearr_17171_17212[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 14))
{var inst_17109 = (state_17149[15]);var inst_17116 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17109);var state_17149__$1 = state_17149;var statearr_17172_17213 = state_17149__$1;(statearr_17172_17213[2] = inst_17116);
(statearr_17172_17213[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 15))
{var state_17149__$1 = state_17149;var statearr_17173_17214 = state_17149__$1;(statearr_17173_17214[2] = null);
(statearr_17173_17214[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 16))
{var inst_17119 = (state_17149[2]);var inst_17120 = calc_state.call(null);var inst_17093 = inst_17120;var state_17149__$1 = (function (){var statearr_17174 = state_17149;(statearr_17174[8] = inst_17093);
(statearr_17174[18] = inst_17119);
return statearr_17174;
})();var statearr_17175_17215 = state_17149__$1;(statearr_17175_17215[2] = null);
(statearr_17175_17215[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 17))
{var inst_17123 = (state_17149[17]);var state_17149__$1 = state_17149;var statearr_17176_17216 = state_17149__$1;(statearr_17176_17216[2] = inst_17123);
(statearr_17176_17216[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 18))
{var inst_17109 = (state_17149[15]);var inst_17104 = (state_17149[13]);var inst_17103 = (state_17149[14]);var inst_17126 = cljs.core.empty_QMARK_.call(null,inst_17104);var inst_17127 = inst_17103.call(null,inst_17109);var inst_17128 = cljs.core.not.call(null,inst_17127);var inst_17129 = (inst_17126) && (inst_17128);var state_17149__$1 = state_17149;var statearr_17177_17217 = state_17149__$1;(statearr_17177_17217[2] = inst_17129);
(statearr_17177_17217[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 19))
{var inst_17131 = (state_17149[2]);var state_17149__$1 = state_17149;if(cljs.core.truth_(inst_17131))
{var statearr_17178_17218 = state_17149__$1;(statearr_17178_17218[1] = 20);
} else
{var statearr_17179_17219 = state_17149__$1;(statearr_17179_17219[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 20))
{var inst_17108 = (state_17149[16]);var state_17149__$1 = state_17149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17149__$1,23,out,inst_17108);
} else
{if((state_val_17150 === 21))
{var inst_17101 = (state_17149[12]);var inst_17093 = inst_17101;var state_17149__$1 = (function (){var statearr_17180 = state_17149;(statearr_17180[8] = inst_17093);
return statearr_17180;
})();var statearr_17181_17220 = state_17149__$1;(statearr_17181_17220[2] = null);
(statearr_17181_17220[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 22))
{var inst_17143 = (state_17149[2]);var state_17149__$1 = state_17149;var statearr_17182_17221 = state_17149__$1;(statearr_17182_17221[2] = inst_17143);
(statearr_17182_17221[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 23))
{var inst_17134 = (state_17149[2]);var state_17149__$1 = state_17149;if(cljs.core.truth_(inst_17134))
{var statearr_17183_17222 = state_17149__$1;(statearr_17183_17222[1] = 24);
} else
{var statearr_17184_17223 = state_17149__$1;(statearr_17184_17223[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 24))
{var inst_17101 = (state_17149[12]);var inst_17093 = inst_17101;var state_17149__$1 = (function (){var statearr_17185 = state_17149;(statearr_17185[8] = inst_17093);
return statearr_17185;
})();var statearr_17186_17224 = state_17149__$1;(statearr_17186_17224[2] = null);
(statearr_17186_17224[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 25))
{var state_17149__$1 = state_17149;var statearr_17187_17225 = state_17149__$1;(statearr_17187_17225[2] = null);
(statearr_17187_17225[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 26))
{var inst_17139 = (state_17149[2]);var state_17149__$1 = state_17149;var statearr_17188_17226 = state_17149__$1;(statearr_17188_17226[2] = inst_17139);
(statearr_17188_17226[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10478__auto___17196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10408__auto__,c__10478__auto___17196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_17192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17192[0] = state_machine__10409__auto__);
(statearr_17192[1] = 1);
return statearr_17192;
});
var state_machine__10409__auto____1 = (function (state_17149){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_17149);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e17193){if((e17193 instanceof Object))
{var ex__10412__auto__ = e17193;var statearr_17194_17227 = state_17149;(statearr_17194_17227[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17149);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17228 = state_17149;
state_17149 = G__17228;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_17149){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_17149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto___17196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10480__auto__ = (function (){var statearr_17195 = f__10479__auto__.call(null);(statearr_17195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto___17196);
return statearr_17195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto___17196,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj17230 = {};return obj17230;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7868__auto__ = p;if(and__7868__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7868__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8507__auto__ = (((p == null))?null:p);return (function (){var or__7880__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7868__auto__ = p;if(and__7868__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7868__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8507__auto__ = (((p == null))?null:p);return (function (){var or__7880__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7868__auto__ = p;if(and__7868__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7868__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8507__auto__ = (((p == null))?null:p);return (function (){var or__7880__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7868__auto__ = p;if(and__7868__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7868__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8507__auto__ = (((p == null))?null:p);return (function (){var or__7880__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
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
return (function (topic){var or__7880__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7880__auto__,mults){
return (function (p1__17231_SHARP_){if(cljs.core.truth_(p1__17231_SHARP_.call(null,topic)))
{return p1__17231_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17231_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7880__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17346 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17346 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17347){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17347 = meta17347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17346.cljs$lang$type = true;
cljs.core.async.t17346.cljs$lang$ctorStr = "cljs.core.async/t17346";
cljs.core.async.t17346.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t17346");
});})(mults,ensure_mult))
;
cljs.core.async.t17346.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17346.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17346.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17346.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17346.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17346.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17348){var self__ = this;
var _17348__$1 = this;return self__.meta17347;
});})(mults,ensure_mult))
;
cljs.core.async.t17346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17348,meta17347__$1){var self__ = this;
var _17348__$1 = this;return (new cljs.core.async.t17346(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17347__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17346 = ((function (mults,ensure_mult){
return (function __GT_t17346(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17347){return (new cljs.core.async.t17346(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17347));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17346(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10478__auto___17460 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto___17460,mults,ensure_mult,p){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto___17460,mults,ensure_mult,p){
return (function (state_17416){var state_val_17417 = (state_17416[1]);if((state_val_17417 === 1))
{var state_17416__$1 = state_17416;var statearr_17418_17461 = state_17416__$1;(statearr_17418_17461[2] = null);
(statearr_17418_17461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 2))
{var state_17416__$1 = state_17416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17416__$1,4,ch);
} else
{if((state_val_17417 === 3))
{var inst_17414 = (state_17416[2]);var state_17416__$1 = state_17416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17416__$1,inst_17414);
} else
{if((state_val_17417 === 4))
{var inst_17351 = (state_17416[7]);var inst_17351__$1 = (state_17416[2]);var inst_17352 = (inst_17351__$1 == null);var state_17416__$1 = (function (){var statearr_17419 = state_17416;(statearr_17419[7] = inst_17351__$1);
return statearr_17419;
})();if(cljs.core.truth_(inst_17352))
{var statearr_17420_17462 = state_17416__$1;(statearr_17420_17462[1] = 5);
} else
{var statearr_17421_17463 = state_17416__$1;(statearr_17421_17463[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 5))
{var inst_17358 = cljs.core.deref.call(null,mults);var inst_17359 = cljs.core.vals.call(null,inst_17358);var inst_17360 = cljs.core.seq.call(null,inst_17359);var inst_17361 = inst_17360;var inst_17362 = null;var inst_17363 = 0;var inst_17364 = 0;var state_17416__$1 = (function (){var statearr_17422 = state_17416;(statearr_17422[8] = inst_17363);
(statearr_17422[9] = inst_17362);
(statearr_17422[10] = inst_17364);
(statearr_17422[11] = inst_17361);
return statearr_17422;
})();var statearr_17423_17464 = state_17416__$1;(statearr_17423_17464[2] = null);
(statearr_17423_17464[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 6))
{var inst_17399 = (state_17416[12]);var inst_17351 = (state_17416[7]);var inst_17399__$1 = topic_fn.call(null,inst_17351);var inst_17400 = cljs.core.deref.call(null,mults);var inst_17401 = cljs.core.get.call(null,inst_17400,inst_17399__$1);var inst_17402 = cljs.core.async.muxch_STAR_.call(null,inst_17401);var state_17416__$1 = (function (){var statearr_17424 = state_17416;(statearr_17424[12] = inst_17399__$1);
return statearr_17424;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17416__$1,19,inst_17402,inst_17351);
} else
{if((state_val_17417 === 7))
{var inst_17412 = (state_17416[2]);var state_17416__$1 = state_17416;var statearr_17425_17465 = state_17416__$1;(statearr_17425_17465[2] = inst_17412);
(statearr_17425_17465[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 8))
{var inst_17363 = (state_17416[8]);var inst_17364 = (state_17416[10]);var inst_17366 = (inst_17364 < inst_17363);var inst_17367 = inst_17366;var state_17416__$1 = state_17416;if(cljs.core.truth_(inst_17367))
{var statearr_17429_17466 = state_17416__$1;(statearr_17429_17466[1] = 10);
} else
{var statearr_17430_17467 = state_17416__$1;(statearr_17430_17467[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 9))
{var inst_17397 = (state_17416[2]);var state_17416__$1 = state_17416;var statearr_17431_17468 = state_17416__$1;(statearr_17431_17468[2] = inst_17397);
(statearr_17431_17468[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 10))
{var inst_17363 = (state_17416[8]);var inst_17362 = (state_17416[9]);var inst_17364 = (state_17416[10]);var inst_17361 = (state_17416[11]);var inst_17369 = cljs.core._nth.call(null,inst_17362,inst_17364);var inst_17370 = cljs.core.async.muxch_STAR_.call(null,inst_17369);var inst_17371 = cljs.core.async.close_BANG_.call(null,inst_17370);var inst_17372 = (inst_17364 + 1);var tmp17426 = inst_17363;var tmp17427 = inst_17362;var tmp17428 = inst_17361;var inst_17361__$1 = tmp17428;var inst_17362__$1 = tmp17427;var inst_17363__$1 = tmp17426;var inst_17364__$1 = inst_17372;var state_17416__$1 = (function (){var statearr_17432 = state_17416;(statearr_17432[13] = inst_17371);
(statearr_17432[8] = inst_17363__$1);
(statearr_17432[9] = inst_17362__$1);
(statearr_17432[10] = inst_17364__$1);
(statearr_17432[11] = inst_17361__$1);
return statearr_17432;
})();var statearr_17433_17469 = state_17416__$1;(statearr_17433_17469[2] = null);
(statearr_17433_17469[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 11))
{var inst_17361 = (state_17416[11]);var inst_17375 = (state_17416[14]);var inst_17375__$1 = cljs.core.seq.call(null,inst_17361);var state_17416__$1 = (function (){var statearr_17434 = state_17416;(statearr_17434[14] = inst_17375__$1);
return statearr_17434;
})();if(inst_17375__$1)
{var statearr_17435_17470 = state_17416__$1;(statearr_17435_17470[1] = 13);
} else
{var statearr_17436_17471 = state_17416__$1;(statearr_17436_17471[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 12))
{var inst_17395 = (state_17416[2]);var state_17416__$1 = state_17416;var statearr_17437_17472 = state_17416__$1;(statearr_17437_17472[2] = inst_17395);
(statearr_17437_17472[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 13))
{var inst_17375 = (state_17416[14]);var inst_17377 = cljs.core.chunked_seq_QMARK_.call(null,inst_17375);var state_17416__$1 = state_17416;if(inst_17377)
{var statearr_17438_17473 = state_17416__$1;(statearr_17438_17473[1] = 16);
} else
{var statearr_17439_17474 = state_17416__$1;(statearr_17439_17474[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 14))
{var state_17416__$1 = state_17416;var statearr_17440_17475 = state_17416__$1;(statearr_17440_17475[2] = null);
(statearr_17440_17475[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 15))
{var inst_17393 = (state_17416[2]);var state_17416__$1 = state_17416;var statearr_17441_17476 = state_17416__$1;(statearr_17441_17476[2] = inst_17393);
(statearr_17441_17476[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 16))
{var inst_17375 = (state_17416[14]);var inst_17379 = cljs.core.chunk_first.call(null,inst_17375);var inst_17380 = cljs.core.chunk_rest.call(null,inst_17375);var inst_17381 = cljs.core.count.call(null,inst_17379);var inst_17361 = inst_17380;var inst_17362 = inst_17379;var inst_17363 = inst_17381;var inst_17364 = 0;var state_17416__$1 = (function (){var statearr_17442 = state_17416;(statearr_17442[8] = inst_17363);
(statearr_17442[9] = inst_17362);
(statearr_17442[10] = inst_17364);
(statearr_17442[11] = inst_17361);
return statearr_17442;
})();var statearr_17443_17477 = state_17416__$1;(statearr_17443_17477[2] = null);
(statearr_17443_17477[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 17))
{var inst_17375 = (state_17416[14]);var inst_17384 = cljs.core.first.call(null,inst_17375);var inst_17385 = cljs.core.async.muxch_STAR_.call(null,inst_17384);var inst_17386 = cljs.core.async.close_BANG_.call(null,inst_17385);var inst_17387 = cljs.core.next.call(null,inst_17375);var inst_17361 = inst_17387;var inst_17362 = null;var inst_17363 = 0;var inst_17364 = 0;var state_17416__$1 = (function (){var statearr_17444 = state_17416;(statearr_17444[8] = inst_17363);
(statearr_17444[9] = inst_17362);
(statearr_17444[10] = inst_17364);
(statearr_17444[11] = inst_17361);
(statearr_17444[15] = inst_17386);
return statearr_17444;
})();var statearr_17445_17478 = state_17416__$1;(statearr_17445_17478[2] = null);
(statearr_17445_17478[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 18))
{var inst_17390 = (state_17416[2]);var state_17416__$1 = state_17416;var statearr_17446_17479 = state_17416__$1;(statearr_17446_17479[2] = inst_17390);
(statearr_17446_17479[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 19))
{var inst_17404 = (state_17416[2]);var state_17416__$1 = state_17416;if(cljs.core.truth_(inst_17404))
{var statearr_17447_17480 = state_17416__$1;(statearr_17447_17480[1] = 20);
} else
{var statearr_17448_17481 = state_17416__$1;(statearr_17448_17481[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 20))
{var state_17416__$1 = state_17416;var statearr_17449_17482 = state_17416__$1;(statearr_17449_17482[2] = null);
(statearr_17449_17482[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 21))
{var inst_17399 = (state_17416[12]);var inst_17407 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17399);var state_17416__$1 = state_17416;var statearr_17450_17483 = state_17416__$1;(statearr_17450_17483[2] = inst_17407);
(statearr_17450_17483[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17417 === 22))
{var inst_17409 = (state_17416[2]);var state_17416__$1 = (function (){var statearr_17451 = state_17416;(statearr_17451[16] = inst_17409);
return statearr_17451;
})();var statearr_17452_17484 = state_17416__$1;(statearr_17452_17484[2] = null);
(statearr_17452_17484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10478__auto___17460,mults,ensure_mult,p))
;return ((function (switch__10408__auto__,c__10478__auto___17460,mults,ensure_mult,p){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_17456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17456[0] = state_machine__10409__auto__);
(statearr_17456[1] = 1);
return statearr_17456;
});
var state_machine__10409__auto____1 = (function (state_17416){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_17416);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e17457){if((e17457 instanceof Object))
{var ex__10412__auto__ = e17457;var statearr_17458_17485 = state_17416;(statearr_17458_17485[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17416);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17486 = state_17416;
state_17416 = G__17486;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_17416){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_17416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto___17460,mults,ensure_mult,p))
})();var state__10480__auto__ = (function (){var statearr_17459 = f__10479__auto__.call(null);(statearr_17459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto___17460);
return statearr_17459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto___17460,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10478__auto___17623 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto___17623,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto___17623,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17593){var state_val_17594 = (state_17593[1]);if((state_val_17594 === 1))
{var state_17593__$1 = state_17593;var statearr_17595_17624 = state_17593__$1;(statearr_17595_17624[2] = null);
(statearr_17595_17624[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17594 === 2))
{var inst_17556 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17557 = 0;var state_17593__$1 = (function (){var statearr_17596 = state_17593;(statearr_17596[7] = inst_17556);
(statearr_17596[8] = inst_17557);
return statearr_17596;
})();var statearr_17597_17625 = state_17593__$1;(statearr_17597_17625[2] = null);
(statearr_17597_17625[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17594 === 3))
{var inst_17591 = (state_17593[2]);var state_17593__$1 = state_17593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17593__$1,inst_17591);
} else
{if((state_val_17594 === 4))
{var inst_17557 = (state_17593[8]);var inst_17559 = (inst_17557 < cnt);var state_17593__$1 = state_17593;if(cljs.core.truth_(inst_17559))
{var statearr_17598_17626 = state_17593__$1;(statearr_17598_17626[1] = 6);
} else
{var statearr_17599_17627 = state_17593__$1;(statearr_17599_17627[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17594 === 5))
{var inst_17577 = (state_17593[2]);var state_17593__$1 = (function (){var statearr_17600 = state_17593;(statearr_17600[9] = inst_17577);
return statearr_17600;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17593__$1,12,dchan);
} else
{if((state_val_17594 === 6))
{var state_17593__$1 = state_17593;var statearr_17601_17628 = state_17593__$1;(statearr_17601_17628[2] = null);
(statearr_17601_17628[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17594 === 7))
{var state_17593__$1 = state_17593;var statearr_17602_17629 = state_17593__$1;(statearr_17602_17629[2] = null);
(statearr_17602_17629[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17594 === 8))
{var inst_17575 = (state_17593[2]);var state_17593__$1 = state_17593;var statearr_17603_17630 = state_17593__$1;(statearr_17603_17630[2] = inst_17575);
(statearr_17603_17630[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17594 === 9))
{var inst_17557 = (state_17593[8]);var inst_17570 = (state_17593[2]);var inst_17571 = (inst_17557 + 1);var inst_17557__$1 = inst_17571;var state_17593__$1 = (function (){var statearr_17604 = state_17593;(statearr_17604[10] = inst_17570);
(statearr_17604[8] = inst_17557__$1);
return statearr_17604;
})();var statearr_17605_17631 = state_17593__$1;(statearr_17605_17631[2] = null);
(statearr_17605_17631[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17594 === 10))
{var inst_17561 = (state_17593[2]);var inst_17562 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17593__$1 = (function (){var statearr_17606 = state_17593;(statearr_17606[11] = inst_17561);
return statearr_17606;
})();var statearr_17607_17632 = state_17593__$1;(statearr_17607_17632[2] = inst_17562);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17593__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17594 === 11))
{var inst_17557 = (state_17593[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17593,10,Object,null,9);var inst_17566 = chs__$1.call(null,inst_17557);var inst_17567 = done.call(null,inst_17557);var inst_17568 = cljs.core.async.take_BANG_.call(null,inst_17566,inst_17567);var state_17593__$1 = state_17593;var statearr_17608_17633 = state_17593__$1;(statearr_17608_17633[2] = inst_17568);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17593__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17594 === 12))
{var inst_17579 = (state_17593[12]);var inst_17579__$1 = (state_17593[2]);var inst_17580 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17579__$1);var state_17593__$1 = (function (){var statearr_17609 = state_17593;(statearr_17609[12] = inst_17579__$1);
return statearr_17609;
})();if(cljs.core.truth_(inst_17580))
{var statearr_17610_17634 = state_17593__$1;(statearr_17610_17634[1] = 13);
} else
{var statearr_17611_17635 = state_17593__$1;(statearr_17611_17635[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17594 === 13))
{var inst_17582 = cljs.core.async.close_BANG_.call(null,out);var state_17593__$1 = state_17593;var statearr_17612_17636 = state_17593__$1;(statearr_17612_17636[2] = inst_17582);
(statearr_17612_17636[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17594 === 14))
{var inst_17579 = (state_17593[12]);var inst_17584 = cljs.core.apply.call(null,f,inst_17579);var state_17593__$1 = state_17593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17593__$1,16,out,inst_17584);
} else
{if((state_val_17594 === 15))
{var inst_17589 = (state_17593[2]);var state_17593__$1 = state_17593;var statearr_17613_17637 = state_17593__$1;(statearr_17613_17637[2] = inst_17589);
(statearr_17613_17637[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17594 === 16))
{var inst_17586 = (state_17593[2]);var state_17593__$1 = (function (){var statearr_17614 = state_17593;(statearr_17614[13] = inst_17586);
return statearr_17614;
})();var statearr_17615_17638 = state_17593__$1;(statearr_17615_17638[2] = null);
(statearr_17615_17638[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10478__auto___17623,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10408__auto__,c__10478__auto___17623,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_17619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17619[0] = state_machine__10409__auto__);
(statearr_17619[1] = 1);
return statearr_17619;
});
var state_machine__10409__auto____1 = (function (state_17593){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_17593);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e17620){if((e17620 instanceof Object))
{var ex__10412__auto__ = e17620;var statearr_17621_17639 = state_17593;(statearr_17621_17639[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17593);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17620;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17640 = state_17593;
state_17593 = G__17640;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_17593){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_17593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto___17623,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10480__auto__ = (function (){var statearr_17622 = f__10479__auto__.call(null);(statearr_17622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto___17623);
return statearr_17622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto___17623,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10478__auto___17748 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto___17748,out){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto___17748,out){
return (function (state_17724){var state_val_17725 = (state_17724[1]);if((state_val_17725 === 1))
{var inst_17695 = cljs.core.vec.call(null,chs);var inst_17696 = inst_17695;var state_17724__$1 = (function (){var statearr_17726 = state_17724;(statearr_17726[7] = inst_17696);
return statearr_17726;
})();var statearr_17727_17749 = state_17724__$1;(statearr_17727_17749[2] = null);
(statearr_17727_17749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17725 === 2))
{var inst_17696 = (state_17724[7]);var inst_17698 = cljs.core.count.call(null,inst_17696);var inst_17699 = (inst_17698 > 0);var state_17724__$1 = state_17724;if(cljs.core.truth_(inst_17699))
{var statearr_17728_17750 = state_17724__$1;(statearr_17728_17750[1] = 4);
} else
{var statearr_17729_17751 = state_17724__$1;(statearr_17729_17751[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17725 === 3))
{var inst_17722 = (state_17724[2]);var state_17724__$1 = state_17724;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17724__$1,inst_17722);
} else
{if((state_val_17725 === 4))
{var inst_17696 = (state_17724[7]);var state_17724__$1 = state_17724;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17724__$1,7,inst_17696);
} else
{if((state_val_17725 === 5))
{var inst_17718 = cljs.core.async.close_BANG_.call(null,out);var state_17724__$1 = state_17724;var statearr_17730_17752 = state_17724__$1;(statearr_17730_17752[2] = inst_17718);
(statearr_17730_17752[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17725 === 6))
{var inst_17720 = (state_17724[2]);var state_17724__$1 = state_17724;var statearr_17731_17753 = state_17724__$1;(statearr_17731_17753[2] = inst_17720);
(statearr_17731_17753[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17725 === 7))
{var inst_17704 = (state_17724[8]);var inst_17703 = (state_17724[9]);var inst_17703__$1 = (state_17724[2]);var inst_17704__$1 = cljs.core.nth.call(null,inst_17703__$1,0,null);var inst_17705 = cljs.core.nth.call(null,inst_17703__$1,1,null);var inst_17706 = (inst_17704__$1 == null);var state_17724__$1 = (function (){var statearr_17732 = state_17724;(statearr_17732[8] = inst_17704__$1);
(statearr_17732[10] = inst_17705);
(statearr_17732[9] = inst_17703__$1);
return statearr_17732;
})();if(cljs.core.truth_(inst_17706))
{var statearr_17733_17754 = state_17724__$1;(statearr_17733_17754[1] = 8);
} else
{var statearr_17734_17755 = state_17724__$1;(statearr_17734_17755[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17725 === 8))
{var inst_17704 = (state_17724[8]);var inst_17705 = (state_17724[10]);var inst_17696 = (state_17724[7]);var inst_17703 = (state_17724[9]);var inst_17708 = (function (){var c = inst_17705;var v = inst_17704;var vec__17701 = inst_17703;var cs = inst_17696;return ((function (c,v,vec__17701,cs,inst_17704,inst_17705,inst_17696,inst_17703,state_val_17725,c__10478__auto___17748,out){
return (function (p1__17641_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17641_SHARP_);
});
;})(c,v,vec__17701,cs,inst_17704,inst_17705,inst_17696,inst_17703,state_val_17725,c__10478__auto___17748,out))
})();var inst_17709 = cljs.core.filterv.call(null,inst_17708,inst_17696);var inst_17696__$1 = inst_17709;var state_17724__$1 = (function (){var statearr_17735 = state_17724;(statearr_17735[7] = inst_17696__$1);
return statearr_17735;
})();var statearr_17736_17756 = state_17724__$1;(statearr_17736_17756[2] = null);
(statearr_17736_17756[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17725 === 9))
{var inst_17704 = (state_17724[8]);var state_17724__$1 = state_17724;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17724__$1,11,out,inst_17704);
} else
{if((state_val_17725 === 10))
{var inst_17716 = (state_17724[2]);var state_17724__$1 = state_17724;var statearr_17738_17757 = state_17724__$1;(statearr_17738_17757[2] = inst_17716);
(statearr_17738_17757[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17725 === 11))
{var inst_17696 = (state_17724[7]);var inst_17713 = (state_17724[2]);var tmp17737 = inst_17696;var inst_17696__$1 = tmp17737;var state_17724__$1 = (function (){var statearr_17739 = state_17724;(statearr_17739[11] = inst_17713);
(statearr_17739[7] = inst_17696__$1);
return statearr_17739;
})();var statearr_17740_17758 = state_17724__$1;(statearr_17740_17758[2] = null);
(statearr_17740_17758[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10478__auto___17748,out))
;return ((function (switch__10408__auto__,c__10478__auto___17748,out){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_17744 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17744[0] = state_machine__10409__auto__);
(statearr_17744[1] = 1);
return statearr_17744;
});
var state_machine__10409__auto____1 = (function (state_17724){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_17724);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e17745){if((e17745 instanceof Object))
{var ex__10412__auto__ = e17745;var statearr_17746_17759 = state_17724;(statearr_17746_17759[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17724);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17745;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17760 = state_17724;
state_17724 = G__17760;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_17724){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_17724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto___17748,out))
})();var state__10480__auto__ = (function (){var statearr_17747 = f__10479__auto__.call(null);(statearr_17747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto___17748);
return statearr_17747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto___17748,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10478__auto___17853 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto___17853,out){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto___17853,out){
return (function (state_17830){var state_val_17831 = (state_17830[1]);if((state_val_17831 === 1))
{var inst_17807 = 0;var state_17830__$1 = (function (){var statearr_17832 = state_17830;(statearr_17832[7] = inst_17807);
return statearr_17832;
})();var statearr_17833_17854 = state_17830__$1;(statearr_17833_17854[2] = null);
(statearr_17833_17854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17831 === 2))
{var inst_17807 = (state_17830[7]);var inst_17809 = (inst_17807 < n);var state_17830__$1 = state_17830;if(cljs.core.truth_(inst_17809))
{var statearr_17834_17855 = state_17830__$1;(statearr_17834_17855[1] = 4);
} else
{var statearr_17835_17856 = state_17830__$1;(statearr_17835_17856[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17831 === 3))
{var inst_17827 = (state_17830[2]);var inst_17828 = cljs.core.async.close_BANG_.call(null,out);var state_17830__$1 = (function (){var statearr_17836 = state_17830;(statearr_17836[8] = inst_17827);
return statearr_17836;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17830__$1,inst_17828);
} else
{if((state_val_17831 === 4))
{var state_17830__$1 = state_17830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17830__$1,7,ch);
} else
{if((state_val_17831 === 5))
{var state_17830__$1 = state_17830;var statearr_17837_17857 = state_17830__$1;(statearr_17837_17857[2] = null);
(statearr_17837_17857[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17831 === 6))
{var inst_17825 = (state_17830[2]);var state_17830__$1 = state_17830;var statearr_17838_17858 = state_17830__$1;(statearr_17838_17858[2] = inst_17825);
(statearr_17838_17858[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17831 === 7))
{var inst_17812 = (state_17830[9]);var inst_17812__$1 = (state_17830[2]);var inst_17813 = (inst_17812__$1 == null);var inst_17814 = cljs.core.not.call(null,inst_17813);var state_17830__$1 = (function (){var statearr_17839 = state_17830;(statearr_17839[9] = inst_17812__$1);
return statearr_17839;
})();if(inst_17814)
{var statearr_17840_17859 = state_17830__$1;(statearr_17840_17859[1] = 8);
} else
{var statearr_17841_17860 = state_17830__$1;(statearr_17841_17860[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17831 === 8))
{var inst_17812 = (state_17830[9]);var state_17830__$1 = state_17830;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17830__$1,11,out,inst_17812);
} else
{if((state_val_17831 === 9))
{var state_17830__$1 = state_17830;var statearr_17842_17861 = state_17830__$1;(statearr_17842_17861[2] = null);
(statearr_17842_17861[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17831 === 10))
{var inst_17822 = (state_17830[2]);var state_17830__$1 = state_17830;var statearr_17843_17862 = state_17830__$1;(statearr_17843_17862[2] = inst_17822);
(statearr_17843_17862[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17831 === 11))
{var inst_17807 = (state_17830[7]);var inst_17817 = (state_17830[2]);var inst_17818 = (inst_17807 + 1);var inst_17807__$1 = inst_17818;var state_17830__$1 = (function (){var statearr_17844 = state_17830;(statearr_17844[7] = inst_17807__$1);
(statearr_17844[10] = inst_17817);
return statearr_17844;
})();var statearr_17845_17863 = state_17830__$1;(statearr_17845_17863[2] = null);
(statearr_17845_17863[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10478__auto___17853,out))
;return ((function (switch__10408__auto__,c__10478__auto___17853,out){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_17849 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17849[0] = state_machine__10409__auto__);
(statearr_17849[1] = 1);
return statearr_17849;
});
var state_machine__10409__auto____1 = (function (state_17830){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_17830);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e17850){if((e17850 instanceof Object))
{var ex__10412__auto__ = e17850;var statearr_17851_17864 = state_17830;(statearr_17851_17864[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17830);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17865 = state_17830;
state_17830 = G__17865;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_17830){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_17830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto___17853,out))
})();var state__10480__auto__ = (function (){var statearr_17852 = f__10479__auto__.call(null);(statearr_17852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto___17853);
return statearr_17852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto___17853,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10478__auto___17962 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto___17962,out){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto___17962,out){
return (function (state_17937){var state_val_17938 = (state_17937[1]);if((state_val_17938 === 1))
{var inst_17914 = null;var state_17937__$1 = (function (){var statearr_17939 = state_17937;(statearr_17939[7] = inst_17914);
return statearr_17939;
})();var statearr_17940_17963 = state_17937__$1;(statearr_17940_17963[2] = null);
(statearr_17940_17963[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17938 === 2))
{var state_17937__$1 = state_17937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17937__$1,4,ch);
} else
{if((state_val_17938 === 3))
{var inst_17934 = (state_17937[2]);var inst_17935 = cljs.core.async.close_BANG_.call(null,out);var state_17937__$1 = (function (){var statearr_17941 = state_17937;(statearr_17941[8] = inst_17934);
return statearr_17941;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17937__$1,inst_17935);
} else
{if((state_val_17938 === 4))
{var inst_17917 = (state_17937[9]);var inst_17917__$1 = (state_17937[2]);var inst_17918 = (inst_17917__$1 == null);var inst_17919 = cljs.core.not.call(null,inst_17918);var state_17937__$1 = (function (){var statearr_17942 = state_17937;(statearr_17942[9] = inst_17917__$1);
return statearr_17942;
})();if(inst_17919)
{var statearr_17943_17964 = state_17937__$1;(statearr_17943_17964[1] = 5);
} else
{var statearr_17944_17965 = state_17937__$1;(statearr_17944_17965[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17938 === 5))
{var inst_17914 = (state_17937[7]);var inst_17917 = (state_17937[9]);var inst_17921 = cljs.core._EQ_.call(null,inst_17917,inst_17914);var state_17937__$1 = state_17937;if(inst_17921)
{var statearr_17945_17966 = state_17937__$1;(statearr_17945_17966[1] = 8);
} else
{var statearr_17946_17967 = state_17937__$1;(statearr_17946_17967[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17938 === 6))
{var state_17937__$1 = state_17937;var statearr_17948_17968 = state_17937__$1;(statearr_17948_17968[2] = null);
(statearr_17948_17968[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17938 === 7))
{var inst_17932 = (state_17937[2]);var state_17937__$1 = state_17937;var statearr_17949_17969 = state_17937__$1;(statearr_17949_17969[2] = inst_17932);
(statearr_17949_17969[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17938 === 8))
{var inst_17914 = (state_17937[7]);var tmp17947 = inst_17914;var inst_17914__$1 = tmp17947;var state_17937__$1 = (function (){var statearr_17950 = state_17937;(statearr_17950[7] = inst_17914__$1);
return statearr_17950;
})();var statearr_17951_17970 = state_17937__$1;(statearr_17951_17970[2] = null);
(statearr_17951_17970[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17938 === 9))
{var inst_17917 = (state_17937[9]);var state_17937__$1 = state_17937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17937__$1,11,out,inst_17917);
} else
{if((state_val_17938 === 10))
{var inst_17929 = (state_17937[2]);var state_17937__$1 = state_17937;var statearr_17952_17971 = state_17937__$1;(statearr_17952_17971[2] = inst_17929);
(statearr_17952_17971[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17938 === 11))
{var inst_17917 = (state_17937[9]);var inst_17926 = (state_17937[2]);var inst_17914 = inst_17917;var state_17937__$1 = (function (){var statearr_17953 = state_17937;(statearr_17953[7] = inst_17914);
(statearr_17953[10] = inst_17926);
return statearr_17953;
})();var statearr_17954_17972 = state_17937__$1;(statearr_17954_17972[2] = null);
(statearr_17954_17972[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10478__auto___17962,out))
;return ((function (switch__10408__auto__,c__10478__auto___17962,out){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_17958 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17958[0] = state_machine__10409__auto__);
(statearr_17958[1] = 1);
return statearr_17958;
});
var state_machine__10409__auto____1 = (function (state_17937){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_17937);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e17959){if((e17959 instanceof Object))
{var ex__10412__auto__ = e17959;var statearr_17960_17973 = state_17937;(statearr_17960_17973[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17937);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17974 = state_17937;
state_17937 = G__17974;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_17937){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_17937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto___17962,out))
})();var state__10480__auto__ = (function (){var statearr_17961 = f__10479__auto__.call(null);(statearr_17961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto___17962);
return statearr_17961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto___17962,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10478__auto___18109 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto___18109,out){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto___18109,out){
return (function (state_18079){var state_val_18080 = (state_18079[1]);if((state_val_18080 === 1))
{var inst_18042 = (new Array(n));var inst_18043 = inst_18042;var inst_18044 = 0;var state_18079__$1 = (function (){var statearr_18081 = state_18079;(statearr_18081[7] = inst_18044);
(statearr_18081[8] = inst_18043);
return statearr_18081;
})();var statearr_18082_18110 = state_18079__$1;(statearr_18082_18110[2] = null);
(statearr_18082_18110[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18080 === 2))
{var state_18079__$1 = state_18079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18079__$1,4,ch);
} else
{if((state_val_18080 === 3))
{var inst_18077 = (state_18079[2]);var state_18079__$1 = state_18079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18079__$1,inst_18077);
} else
{if((state_val_18080 === 4))
{var inst_18047 = (state_18079[9]);var inst_18047__$1 = (state_18079[2]);var inst_18048 = (inst_18047__$1 == null);var inst_18049 = cljs.core.not.call(null,inst_18048);var state_18079__$1 = (function (){var statearr_18083 = state_18079;(statearr_18083[9] = inst_18047__$1);
return statearr_18083;
})();if(inst_18049)
{var statearr_18084_18111 = state_18079__$1;(statearr_18084_18111[1] = 5);
} else
{var statearr_18085_18112 = state_18079__$1;(statearr_18085_18112[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18080 === 5))
{var inst_18044 = (state_18079[7]);var inst_18047 = (state_18079[9]);var inst_18052 = (state_18079[10]);var inst_18043 = (state_18079[8]);var inst_18051 = (inst_18043[inst_18044] = inst_18047);var inst_18052__$1 = (inst_18044 + 1);var inst_18053 = (inst_18052__$1 < n);var state_18079__$1 = (function (){var statearr_18086 = state_18079;(statearr_18086[11] = inst_18051);
(statearr_18086[10] = inst_18052__$1);
return statearr_18086;
})();if(cljs.core.truth_(inst_18053))
{var statearr_18087_18113 = state_18079__$1;(statearr_18087_18113[1] = 8);
} else
{var statearr_18088_18114 = state_18079__$1;(statearr_18088_18114[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18080 === 6))
{var inst_18044 = (state_18079[7]);var inst_18065 = (inst_18044 > 0);var state_18079__$1 = state_18079;if(cljs.core.truth_(inst_18065))
{var statearr_18090_18115 = state_18079__$1;(statearr_18090_18115[1] = 12);
} else
{var statearr_18091_18116 = state_18079__$1;(statearr_18091_18116[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18080 === 7))
{var inst_18075 = (state_18079[2]);var state_18079__$1 = state_18079;var statearr_18092_18117 = state_18079__$1;(statearr_18092_18117[2] = inst_18075);
(statearr_18092_18117[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18080 === 8))
{var inst_18052 = (state_18079[10]);var inst_18043 = (state_18079[8]);var tmp18089 = inst_18043;var inst_18043__$1 = tmp18089;var inst_18044 = inst_18052;var state_18079__$1 = (function (){var statearr_18093 = state_18079;(statearr_18093[7] = inst_18044);
(statearr_18093[8] = inst_18043__$1);
return statearr_18093;
})();var statearr_18094_18118 = state_18079__$1;(statearr_18094_18118[2] = null);
(statearr_18094_18118[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18080 === 9))
{var inst_18043 = (state_18079[8]);var inst_18057 = cljs.core.vec.call(null,inst_18043);var state_18079__$1 = state_18079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18079__$1,11,out,inst_18057);
} else
{if((state_val_18080 === 10))
{var inst_18063 = (state_18079[2]);var state_18079__$1 = state_18079;var statearr_18095_18119 = state_18079__$1;(statearr_18095_18119[2] = inst_18063);
(statearr_18095_18119[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18080 === 11))
{var inst_18059 = (state_18079[2]);var inst_18060 = (new Array(n));var inst_18043 = inst_18060;var inst_18044 = 0;var state_18079__$1 = (function (){var statearr_18096 = state_18079;(statearr_18096[7] = inst_18044);
(statearr_18096[12] = inst_18059);
(statearr_18096[8] = inst_18043);
return statearr_18096;
})();var statearr_18097_18120 = state_18079__$1;(statearr_18097_18120[2] = null);
(statearr_18097_18120[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18080 === 12))
{var inst_18043 = (state_18079[8]);var inst_18067 = cljs.core.vec.call(null,inst_18043);var state_18079__$1 = state_18079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18079__$1,15,out,inst_18067);
} else
{if((state_val_18080 === 13))
{var state_18079__$1 = state_18079;var statearr_18098_18121 = state_18079__$1;(statearr_18098_18121[2] = null);
(statearr_18098_18121[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18080 === 14))
{var inst_18072 = (state_18079[2]);var inst_18073 = cljs.core.async.close_BANG_.call(null,out);var state_18079__$1 = (function (){var statearr_18099 = state_18079;(statearr_18099[13] = inst_18072);
return statearr_18099;
})();var statearr_18100_18122 = state_18079__$1;(statearr_18100_18122[2] = inst_18073);
(statearr_18100_18122[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18080 === 15))
{var inst_18069 = (state_18079[2]);var state_18079__$1 = state_18079;var statearr_18101_18123 = state_18079__$1;(statearr_18101_18123[2] = inst_18069);
(statearr_18101_18123[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10478__auto___18109,out))
;return ((function (switch__10408__auto__,c__10478__auto___18109,out){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_18105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18105[0] = state_machine__10409__auto__);
(statearr_18105[1] = 1);
return statearr_18105;
});
var state_machine__10409__auto____1 = (function (state_18079){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_18079);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e18106){if((e18106 instanceof Object))
{var ex__10412__auto__ = e18106;var statearr_18107_18124 = state_18079;(statearr_18107_18124[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18125 = state_18079;
state_18079 = G__18125;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_18079){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_18079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto___18109,out))
})();var state__10480__auto__ = (function (){var statearr_18108 = f__10479__auto__.call(null);(statearr_18108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto___18109);
return statearr_18108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto___18109,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10478__auto___18268 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto___18268,out){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto___18268,out){
return (function (state_18238){var state_val_18239 = (state_18238[1]);if((state_val_18239 === 1))
{var inst_18197 = [];var inst_18198 = inst_18197;var inst_18199 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_18238__$1 = (function (){var statearr_18240 = state_18238;(statearr_18240[7] = inst_18199);
(statearr_18240[8] = inst_18198);
return statearr_18240;
})();var statearr_18241_18269 = state_18238__$1;(statearr_18241_18269[2] = null);
(statearr_18241_18269[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18239 === 2))
{var state_18238__$1 = state_18238;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18238__$1,4,ch);
} else
{if((state_val_18239 === 3))
{var inst_18236 = (state_18238[2]);var state_18238__$1 = state_18238;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18238__$1,inst_18236);
} else
{if((state_val_18239 === 4))
{var inst_18202 = (state_18238[9]);var inst_18202__$1 = (state_18238[2]);var inst_18203 = (inst_18202__$1 == null);var inst_18204 = cljs.core.not.call(null,inst_18203);var state_18238__$1 = (function (){var statearr_18242 = state_18238;(statearr_18242[9] = inst_18202__$1);
return statearr_18242;
})();if(inst_18204)
{var statearr_18243_18270 = state_18238__$1;(statearr_18243_18270[1] = 5);
} else
{var statearr_18244_18271 = state_18238__$1;(statearr_18244_18271[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18239 === 5))
{var inst_18202 = (state_18238[9]);var inst_18206 = (state_18238[10]);var inst_18199 = (state_18238[7]);var inst_18206__$1 = f.call(null,inst_18202);var inst_18207 = cljs.core._EQ_.call(null,inst_18206__$1,inst_18199);var inst_18208 = cljs.core.keyword_identical_QMARK_.call(null,inst_18199,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_18209 = (inst_18207) || (inst_18208);var state_18238__$1 = (function (){var statearr_18245 = state_18238;(statearr_18245[10] = inst_18206__$1);
return statearr_18245;
})();if(cljs.core.truth_(inst_18209))
{var statearr_18246_18272 = state_18238__$1;(statearr_18246_18272[1] = 8);
} else
{var statearr_18247_18273 = state_18238__$1;(statearr_18247_18273[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18239 === 6))
{var inst_18198 = (state_18238[8]);var inst_18223 = inst_18198.length;var inst_18224 = (inst_18223 > 0);var state_18238__$1 = state_18238;if(cljs.core.truth_(inst_18224))
{var statearr_18249_18274 = state_18238__$1;(statearr_18249_18274[1] = 12);
} else
{var statearr_18250_18275 = state_18238__$1;(statearr_18250_18275[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18239 === 7))
{var inst_18234 = (state_18238[2]);var state_18238__$1 = state_18238;var statearr_18251_18276 = state_18238__$1;(statearr_18251_18276[2] = inst_18234);
(statearr_18251_18276[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18239 === 8))
{var inst_18202 = (state_18238[9]);var inst_18206 = (state_18238[10]);var inst_18198 = (state_18238[8]);var inst_18211 = inst_18198.push(inst_18202);var tmp18248 = inst_18198;var inst_18198__$1 = tmp18248;var inst_18199 = inst_18206;var state_18238__$1 = (function (){var statearr_18252 = state_18238;(statearr_18252[11] = inst_18211);
(statearr_18252[7] = inst_18199);
(statearr_18252[8] = inst_18198__$1);
return statearr_18252;
})();var statearr_18253_18277 = state_18238__$1;(statearr_18253_18277[2] = null);
(statearr_18253_18277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18239 === 9))
{var inst_18198 = (state_18238[8]);var inst_18214 = cljs.core.vec.call(null,inst_18198);var state_18238__$1 = state_18238;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18238__$1,11,out,inst_18214);
} else
{if((state_val_18239 === 10))
{var inst_18221 = (state_18238[2]);var state_18238__$1 = state_18238;var statearr_18254_18278 = state_18238__$1;(statearr_18254_18278[2] = inst_18221);
(statearr_18254_18278[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18239 === 11))
{var inst_18202 = (state_18238[9]);var inst_18206 = (state_18238[10]);var inst_18216 = (state_18238[2]);var inst_18217 = [];var inst_18218 = inst_18217.push(inst_18202);var inst_18198 = inst_18217;var inst_18199 = inst_18206;var state_18238__$1 = (function (){var statearr_18255 = state_18238;(statearr_18255[12] = inst_18218);
(statearr_18255[13] = inst_18216);
(statearr_18255[7] = inst_18199);
(statearr_18255[8] = inst_18198);
return statearr_18255;
})();var statearr_18256_18279 = state_18238__$1;(statearr_18256_18279[2] = null);
(statearr_18256_18279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18239 === 12))
{var inst_18198 = (state_18238[8]);var inst_18226 = cljs.core.vec.call(null,inst_18198);var state_18238__$1 = state_18238;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18238__$1,15,out,inst_18226);
} else
{if((state_val_18239 === 13))
{var state_18238__$1 = state_18238;var statearr_18257_18280 = state_18238__$1;(statearr_18257_18280[2] = null);
(statearr_18257_18280[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18239 === 14))
{var inst_18231 = (state_18238[2]);var inst_18232 = cljs.core.async.close_BANG_.call(null,out);var state_18238__$1 = (function (){var statearr_18258 = state_18238;(statearr_18258[14] = inst_18231);
return statearr_18258;
})();var statearr_18259_18281 = state_18238__$1;(statearr_18259_18281[2] = inst_18232);
(statearr_18259_18281[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18239 === 15))
{var inst_18228 = (state_18238[2]);var state_18238__$1 = state_18238;var statearr_18260_18282 = state_18238__$1;(statearr_18260_18282[2] = inst_18228);
(statearr_18260_18282[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__10478__auto___18268,out))
;return ((function (switch__10408__auto__,c__10478__auto___18268,out){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_18264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18264[0] = state_machine__10409__auto__);
(statearr_18264[1] = 1);
return statearr_18264;
});
var state_machine__10409__auto____1 = (function (state_18238){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_18238);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e18265){if((e18265 instanceof Object))
{var ex__10412__auto__ = e18265;var statearr_18266_18283 = state_18238;(statearr_18266_18283[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18238);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18265;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18284 = state_18238;
state_18238 = G__18284;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_18238){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_18238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto___18268,out))
})();var state__10480__auto__ = (function (){var statearr_18267 = f__10479__auto__.call(null);(statearr_18267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto___18268);
return statearr_18267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto___18268,out))
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