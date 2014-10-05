// Compiled by ClojureScript 0.0-2356
goog.provide('garden.units');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('garden.util');
goog.require('garden.util');
goog.require('cljs.reader');
goog.require('garden.types');
goog.require('garden.types');
garden.units.length_units = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.call(null,"%"),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"in","in",-1531184865)], true);
garden.units.angular_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),null,new cljs.core.Keyword(null,"turn","turn",75759344),null,new cljs.core.Keyword(null,"rad","rad",-833983012),null,new cljs.core.Keyword(null,"grad","grad",1125187229),null], null), null);
garden.units.time_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null], null), null);
garden.units.frequency_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kHz","kHz",240398466),null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916),null], null), null);
garden.units.resolution_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dppx","dppx",1920508843),null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236),null,new cljs.core.Keyword(null,"dpi","dpi",-986162832),null], null), null);
/**
* True if x is of type CSSUnit.
*/
garden.units.unit_QMARK_ = (function unit_QMARK_(x){return (x instanceof garden.types.CSSUnit);
});
garden.units.length_QMARK_ = (function length_QMARK_(x){return (garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.length_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x)));
});
garden.units.angle_QMARK_ = (function angle_QMARK_(x){return (garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.angular_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x)));
});
garden.units.time_QMARK_ = (function time_QMARK_(x){return (garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.time_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x)));
});
garden.units.frequency_QMARK_ = (function frequency_QMARK_(x){return (garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.frequency_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x)));
});
garden.units.resolution_QMARK_ = (function resolution_QMARK_(x){return (garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.resolution_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x)));
});
/**
* Map associating CSS unit types to their conversion values.
*/
garden.units.conversions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"kHz","kHz",240398466),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"rem","rem",-976484757),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"Hz","Hz",-1958732916),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.call(null,"%"),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"deg","deg",-681556081),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"rad","rad",-833983012),new cljs.core.Keyword(null,"grad","grad",1125187229),new cljs.core.Keyword(null,"in","in",-1531184865)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mm","mm",-1652850560),(1),new cljs.core.Keyword(null,"pt","pt",556460867),2.83464567,new cljs.core.Keyword(null,"px","px",281329899),3.7795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kHz","kHz",240398466),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),(1),new cljs.core.Keyword(null,"px","px",281329899),1.3333333333], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"px","px",281329899),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rem","rem",-976484757),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"em","em",707813035),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Hz","Hz",-1958732916),(1),new cljs.core.Keyword(null,"kHz","kHz",240398466),0.001], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pc","pc",512913453),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),4.23333333,new cljs.core.Keyword(null,"pt","pt",556460867),(12),new cljs.core.Keyword(null,"px","px",281329899),(16)], null),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,"%"),(1)], true, false),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),(1),new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),(1),new cljs.core.Keyword(null,"grad","grad",1125187229),1.111111111,new cljs.core.Keyword(null,"rad","rad",-833983012),0.0174532925,new cljs.core.Keyword(null,"turn","turn",75759344),0.002777778], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cm","cm",540591536),(1),new cljs.core.Keyword(null,"pc","pc",512913453),2.36220473,new cljs.core.Keyword(null,"mm","mm",-1652850560),(10),new cljs.core.Keyword(null,"pt","pt",556460867),28.3464567,new cljs.core.Keyword(null,"px","px",281329899),37.795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rad","rad",-833983012),(1),new cljs.core.Keyword(null,"turn","turn",75759344),0.159154943], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grad","grad",1125187229),(1),new cljs.core.Keyword(null,"rad","rad",-833983012),63.661977237,new cljs.core.Keyword(null,"turn","turn",75759344),0.0025], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"in","in",-1531184865),(1),new cljs.core.Keyword(null,"cm","cm",540591536),2.54,new cljs.core.Keyword(null,"pc","pc",512913453),(6),new cljs.core.Keyword(null,"mm","mm",-1652850560),25.4,new cljs.core.Keyword(null,"pt","pt",556460867),(72),new cljs.core.Keyword(null,"px","px",281329899),(96)], null)]);
/**
* True if unit is a key of convertable-units, false otherwise.
*/
garden.units.convertable_QMARK_ = (function convertable_QMARK_(unit){return cljs.core.contains_QMARK_.call(null,garden.units.conversions,unit);
});
/**
* Convert a Unit with :unit left to a Unit with :unit right if possible.
*/
garden.units.convert = (function convert(p__15073,right){var map__15075 = p__15073;var map__15075__$1 = ((cljs.core.seq_QMARK_.call(null,map__15075))?cljs.core.apply.call(null,cljs.core.hash_map,map__15075):map__15075);var m = cljs.core.get.call(null,map__15075__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));var left = cljs.core.get.call(null,map__15075__$1,new cljs.core.Keyword(null,"unit","unit",375175175));if(cljs.core.every_QMARK_.call(null,garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)))
{var v1 = cljs.core.get_in.call(null,garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null));var v2 = cljs.core.get_in.call(null,garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right,left], null));if(cljs.core.truth_(v1))
{return (new garden.types.CSSUnit(right,(v1 * m)));
} else
{if(cljs.core.truth_(v2))
{return (new garden.types.CSSUnit(right,(m / v2)));
} else
{throw cljs.core.ex_info.call(null,garden.util.format.call(null,"Can't convert %s to %s",cljs.core.name.call(null,left),cljs.core.name.call(null,right)),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else
{var x = cljs.core.first.call(null,cljs.core.drop_while.call(null,garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)));throw cljs.core.ex_info.call(null,("Inconvertible unit "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,x))),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
* Regular expression for matching a CSS unit. The magnitude
* and unit are captured.
*/
garden.units.unit_re = /([+-]?\d+(?:\.?\d+)?)(p[xtc]|in|[cm]m|%|r?em|ex|ch|v(?:[wh]|m(?:in|ax))|deg|g?rad|turn|m?s|k?Hz|dp(?:i|cm|px))/;
/**
* Read a `CSSUnit` object from the string `s`.
*/
garden.units.read_unit = (function read_unit(s){var temp__4126__auto__ = cljs.core.re_matches.call(null,garden.units.unit_re,s);if(cljs.core.truth_(temp__4126__auto__))
{var vec__15077 = temp__4126__auto__;var _ = cljs.core.nth.call(null,vec__15077,(0),null);var magnitude = cljs.core.nth.call(null,vec__15077,(1),null);var unit = cljs.core.nth.call(null,vec__15077,(2),null);var unit__$1 = cljs.core.keyword.call(null,unit);var magnitude__$1 = (cljs.core.truth_(magnitude)?cljs.reader.read_string.call(null,magnitude):(0));return (new garden.types.CSSUnit(unit__$1,magnitude__$1));
} else
{return null;
}
});
/**
* Creates a function for verifying the given unit type.
*/
garden.units.make_unit_predicate = (function make_unit_predicate(unit){return (function (x){return (garden.units.unit_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x),unit));
});
});
/**
* Creates a function for creating and converting `CSSUnit`s for the
* given unit. If a number n is passed the function it will produce a
* new `CSSUnit` record with a the magnitude set to n. If a `CSSUnit`
* is passed the function will attempt to convert it.
*/
garden.units.make_unit_fn = (function make_unit_fn(unit){return (function (x){if(typeof x === 'number')
{return (new garden.types.CSSUnit(unit,x));
} else
{if(garden.units.unit_QMARK_.call(null,x))
{var or__3639__auto__ = (function (){var and__3627__auto__ = cljs.core._EQ_.call(null,unit.call(null,x),unit);if(and__3627__auto__)
{return x;
} else
{return and__3627__auto__;
}
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return garden.units.convert.call(null,x,unit);
}
} else
{throw cljs.core.ex_info.call(null,garden.util.format.call(null,"Don't know how to convert type %s to %s",cljs.core.type.call(null,x).getName(),cljs.core.name.call(null,unit)),cljs.core.PersistentArrayMap.EMPTY);

}
}
});
});
/**
* Create a addition function for adding Units.
*/
garden.units.make_unit_adder = (function make_unit_adder(unit){var u = garden.units.make_unit_fn.call(null,unit);return ((function (u){
return (function() {
var u_PLUS_ = null;
var u_PLUS___0 = (function (){return u.call(null,(0));
});
var u_PLUS___1 = (function (x){return u.call(null,x);
});
var u_PLUS___2 = (function (x,y){var map__15084 = u.call(null,x);var map__15084__$1 = ((cljs.core.seq_QMARK_.call(null,map__15084))?cljs.core.apply.call(null,cljs.core.hash_map,map__15084):map__15084);var m1 = cljs.core.get.call(null,map__15084__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));var map__15085 = u.call(null,y);var map__15085__$1 = ((cljs.core.seq_QMARK_.call(null,map__15085))?cljs.core.apply.call(null,cljs.core.hash_map,map__15085):map__15085);var m2 = cljs.core.get.call(null,map__15085__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));return u.call(null,(m1 + m2));
});
var u_PLUS___3 = (function() { 
var G__15086__delegate = function (x,y,more){return cljs.core.reduce.call(null,u_PLUS_,u_PLUS_.call(null,x,y),more);
};
var G__15086 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15086__delegate.call(this,x,y,more);};
G__15086.cljs$lang$maxFixedArity = 2;
G__15086.cljs$lang$applyTo = (function (arglist__15087){
var x = cljs.core.first(arglist__15087);
arglist__15087 = cljs.core.next(arglist__15087);
var y = cljs.core.first(arglist__15087);
var more = cljs.core.rest(arglist__15087);
return G__15086__delegate(x,y,more);
});
G__15086.cljs$core$IFn$_invoke$arity$variadic = G__15086__delegate;
return G__15086;
})()
;
u_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return u_PLUS___0.call(this);
case 1:
return u_PLUS___1.call(this,x);
case 2:
return u_PLUS___2.call(this,x,y);
default:
return u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
u_PLUS_.cljs$lang$maxFixedArity = 2;
u_PLUS_.cljs$lang$applyTo = u_PLUS___3.cljs$lang$applyTo;
u_PLUS_.cljs$core$IFn$_invoke$arity$0 = u_PLUS___0;
u_PLUS_.cljs$core$IFn$_invoke$arity$1 = u_PLUS___1;
u_PLUS_.cljs$core$IFn$_invoke$arity$2 = u_PLUS___2;
u_PLUS_.cljs$core$IFn$_invoke$arity$variadic = u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return u_PLUS_;
})()
;})(u))
});
/**
* Create a subtraction function for subtracting Units.
*/
garden.units.make_unit_subtractor = (function make_unit_subtractor(unit){var u = garden.units.make_unit_fn.call(null,unit);return ((function (u){
return (function() {
var u_ = null;
var u___1 = (function (x){return u.call(null,(- x));
});
var u___2 = (function (x,y){var map__15094 = u.call(null,x);var map__15094__$1 = ((cljs.core.seq_QMARK_.call(null,map__15094))?cljs.core.apply.call(null,cljs.core.hash_map,map__15094):map__15094);var m1 = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));var map__15095 = u.call(null,y);var map__15095__$1 = ((cljs.core.seq_QMARK_.call(null,map__15095))?cljs.core.apply.call(null,cljs.core.hash_map,map__15095):map__15095);var m2 = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));return u.call(null,(m1 - m2));
});
var u___3 = (function() { 
var G__15096__delegate = function (x,y,more){return cljs.core.reduce.call(null,u_,u_.call(null,x,y),more);
};
var G__15096 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15096__delegate.call(this,x,y,more);};
G__15096.cljs$lang$maxFixedArity = 2;
G__15096.cljs$lang$applyTo = (function (arglist__15097){
var x = cljs.core.first(arglist__15097);
arglist__15097 = cljs.core.next(arglist__15097);
var y = cljs.core.first(arglist__15097);
var more = cljs.core.rest(arglist__15097);
return G__15096__delegate(x,y,more);
});
G__15096.cljs$core$IFn$_invoke$arity$variadic = G__15096__delegate;
return G__15096;
})()
;
u_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return u___1.call(this,x);
case 2:
return u___2.call(this,x,y);
default:
return u___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
u_.cljs$lang$maxFixedArity = 2;
u_.cljs$lang$applyTo = u___3.cljs$lang$applyTo;
u_.cljs$core$IFn$_invoke$arity$1 = u___1;
u_.cljs$core$IFn$_invoke$arity$2 = u___2;
u_.cljs$core$IFn$_invoke$arity$variadic = u___3.cljs$core$IFn$_invoke$arity$variadic;
return u_;
})()
;})(u))
});
/**
* Create a multiplication function for multiplying Units.
*/
garden.units.make_unit_multiplier = (function make_unit_multiplier(unit){var u = garden.units.make_unit_fn.call(null,unit);return ((function (u){
return (function() {
var u_STAR_ = null;
var u_STAR___0 = (function (){return u.call(null,(1));
});
var u_STAR___1 = (function (x){return u.call(null,x);
});
var u_STAR___2 = (function (x,y){var map__15104 = u.call(null,x);var map__15104__$1 = ((cljs.core.seq_QMARK_.call(null,map__15104))?cljs.core.apply.call(null,cljs.core.hash_map,map__15104):map__15104);var m1 = cljs.core.get.call(null,map__15104__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));var map__15105 = u.call(null,y);var map__15105__$1 = ((cljs.core.seq_QMARK_.call(null,map__15105))?cljs.core.apply.call(null,cljs.core.hash_map,map__15105):map__15105);var m2 = cljs.core.get.call(null,map__15105__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));return u.call(null,(m1 * m2));
});
var u_STAR___3 = (function() { 
var G__15106__delegate = function (x,y,more){return cljs.core.reduce.call(null,u_STAR_,u_STAR_.call(null,x,y),more);
};
var G__15106 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15106__delegate.call(this,x,y,more);};
G__15106.cljs$lang$maxFixedArity = 2;
G__15106.cljs$lang$applyTo = (function (arglist__15107){
var x = cljs.core.first(arglist__15107);
arglist__15107 = cljs.core.next(arglist__15107);
var y = cljs.core.first(arglist__15107);
var more = cljs.core.rest(arglist__15107);
return G__15106__delegate(x,y,more);
});
G__15106.cljs$core$IFn$_invoke$arity$variadic = G__15106__delegate;
return G__15106;
})()
;
u_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return u_STAR___0.call(this);
case 1:
return u_STAR___1.call(this,x);
case 2:
return u_STAR___2.call(this,x,y);
default:
return u_STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
u_STAR_.cljs$lang$maxFixedArity = 2;
u_STAR_.cljs$lang$applyTo = u_STAR___3.cljs$lang$applyTo;
u_STAR_.cljs$core$IFn$_invoke$arity$0 = u_STAR___0;
u_STAR_.cljs$core$IFn$_invoke$arity$1 = u_STAR___1;
u_STAR_.cljs$core$IFn$_invoke$arity$2 = u_STAR___2;
u_STAR_.cljs$core$IFn$_invoke$arity$variadic = u_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return u_STAR_;
})()
;})(u))
});
/**
* Create a division function for dividing Units.
*/
garden.units.make_unit_divider = (function make_unit_divider(unit){var u = garden.units.make_unit_fn.call(null,unit);return ((function (u){
return (function() {
var ud = null;
var ud__1 = (function (x){return u.call(null,((1) / x));
});
var ud__2 = (function (x,y){var map__15114 = u.call(null,x);var map__15114__$1 = ((cljs.core.seq_QMARK_.call(null,map__15114))?cljs.core.apply.call(null,cljs.core.hash_map,map__15114):map__15114);var m1 = cljs.core.get.call(null,map__15114__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));var map__15115 = u.call(null,y);var map__15115__$1 = ((cljs.core.seq_QMARK_.call(null,map__15115))?cljs.core.apply.call(null,cljs.core.hash_map,map__15115):map__15115);var m2 = cljs.core.get.call(null,map__15115__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));return u.call(null,(m1 / m2));
});
var ud__3 = (function() { 
var G__15116__delegate = function (x,y,more){return cljs.core.reduce.call(null,ud,ud.call(null,x,y),more);
};
var G__15116 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15116__delegate.call(this,x,y,more);};
G__15116.cljs$lang$maxFixedArity = 2;
G__15116.cljs$lang$applyTo = (function (arglist__15117){
var x = cljs.core.first(arglist__15117);
arglist__15117 = cljs.core.next(arglist__15117);
var y = cljs.core.first(arglist__15117);
var more = cljs.core.rest(arglist__15117);
return G__15116__delegate(x,y,more);
});
G__15116.cljs$core$IFn$_invoke$arity$variadic = G__15116__delegate;
return G__15116;
})()
;
ud = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ud__1.call(this,x);
case 2:
return ud__2.call(this,x,y);
default:
return ud__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ud.cljs$lang$maxFixedArity = 2;
ud.cljs$lang$applyTo = ud__3.cljs$lang$applyTo;
ud.cljs$core$IFn$_invoke$arity$1 = ud__1;
ud.cljs$core$IFn$_invoke$arity$2 = ud__2;
ud.cljs$core$IFn$_invoke$arity$variadic = ud__3.cljs$core$IFn$_invoke$arity$variadic;
return ud;
})()
;})(u))
});
garden.units.cm = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));
garden.units.cm_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));
garden.units.cm_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));
garden.units.cm_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));
garden.units.cm_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));
garden.units.cm_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));
garden.units.mm = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));
garden.units.mm_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));
garden.units.mm_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));
garden.units.mm_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));
garden.units.mm_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));
garden.units.mm_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));
garden.units.in$ = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));
garden.units.in_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));
garden.units.in_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));
garden.units.in_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));
garden.units.in_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));
garden.units.in_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));
garden.units.px = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"px","px",281329899));
garden.units.px_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"px","px",281329899));
garden.units.px_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"px","px",281329899));
garden.units.px_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"px","px",281329899));
garden.units.px_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"px","px",281329899));
garden.units.px_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"px","px",281329899));
garden.units.pt = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));
garden.units.pt_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));
garden.units.pt_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));
garden.units.pt_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));
garden.units.pt_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));
garden.units.pt_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));
garden.units.pc = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));
garden.units.pc_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));
garden.units.pc_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));
garden.units.pc_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));
garden.units.pc_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));
garden.units.pc_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));
garden.units.percent = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"%","%",1704198600));
garden.units.percent_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"%","%",1704198600));
garden.units.percent_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"%","%",1704198600));
garden.units.percent_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"%","%",1704198600));
garden.units.percent_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"%","%",1704198600));
garden.units.percent_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"%","%",1704198600));
garden.units.em = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"em","em",707813035));
garden.units.em_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"em","em",707813035));
garden.units.em_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"em","em",707813035));
garden.units.em_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"em","em",707813035));
garden.units.em_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"em","em",707813035));
garden.units.em_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"em","em",707813035));
garden.units.ex = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));
garden.units.ex_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));
garden.units.ex_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));
garden.units.ex_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));
garden.units.ex_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));
garden.units.ex_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));
garden.units.ch = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));
garden.units.ch_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));
garden.units.ch_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));
garden.units.ch_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));
garden.units.ch_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));
garden.units.ch_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));
garden.units.rem = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));
garden.units.rem_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));
garden.units.rem_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));
garden.units.rem_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));
garden.units.rem_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));
garden.units.rem_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));
garden.units.vw = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));
garden.units.vw_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));
garden.units.vw_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));
garden.units.vw_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));
garden.units.vw_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));
garden.units.vw_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));
garden.units.vh = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));
garden.units.vh_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));
garden.units.vh_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));
garden.units.vh_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));
garden.units.vh_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));
garden.units.vh_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));
garden.units.vmin = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));
garden.units.vmin_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));
garden.units.vmin_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));
garden.units.vmin_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));
garden.units.vmin_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));
garden.units.vmin_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));
garden.units.vmax = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
garden.units.vmax_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
garden.units.vmax_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
garden.units.vmax_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
garden.units.vmax_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
garden.units.vmax_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
garden.units.deg = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));
garden.units.deg_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));
garden.units.deg_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));
garden.units.deg_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));
garden.units.deg_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));
garden.units.deg_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));
garden.units.grad = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));
garden.units.grad_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));
garden.units.grad_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));
garden.units.grad_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));
garden.units.grad_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));
garden.units.grad_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));
garden.units.rad = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));
garden.units.rad_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));
garden.units.rad_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));
garden.units.rad_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));
garden.units.rad_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));
garden.units.rad_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));
garden.units.turn = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));
garden.units.turn_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));
garden.units.turn_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));
garden.units.turn_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));
garden.units.turn_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));
garden.units.turn_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));
garden.units.s = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"s","s",1705939918));
garden.units.s_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"s","s",1705939918));
garden.units.s_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"s","s",1705939918));
garden.units.s_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"s","s",1705939918));
garden.units.s_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"s","s",1705939918));
garden.units.s_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"s","s",1705939918));
garden.units.ms = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));
garden.units.ms_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));
garden.units.ms_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));
garden.units.ms_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));
garden.units.ms_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));
garden.units.ms_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));
garden.units.Hz = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
garden.units.Hz_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
garden.units.Hz_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
garden.units.Hz_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
garden.units.Hz_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
garden.units.Hz_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
garden.units.kHz = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));
garden.units.kHz_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));
garden.units.kHz_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));
garden.units.kHz_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));
garden.units.kHz_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));
garden.units.kHz_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));
garden.units.dpi = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));
garden.units.dpi_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));
garden.units.dpi_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));
garden.units.dpi_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));
garden.units.dpi_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));
garden.units.dpi_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));
garden.units.dpcm = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
garden.units.dpcm_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
garden.units.dpcm_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
garden.units.dpcm_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
garden.units.dpcm_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
garden.units.dpcm_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
garden.units.dppx = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));
garden.units.dppx_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));
garden.units.dppx_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));
garden.units.dppx_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));
garden.units.dppx_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));
garden.units.dppx_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

//# sourceMappingURL=units.js.map