// Compiled by ClojureScript 0.0-2197
goog.provide('garden.units');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('garden.util');
goog.require('garden.util');
goog.require('cljs.reader');
goog.require('garden.types');
goog.require('garden.types');
garden.units.length_units = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"in","in",1013907607),cljs.core.keyword.call(null,"%"),new cljs.core.Keyword(null,"px","px",1013907834),new cljs.core.Keyword(null,"cm","cm",1013907420),new cljs.core.Keyword(null,"pt","pt",1013907830),new cljs.core.Keyword(null,"mm","mm",1013907730),new cljs.core.Keyword(null,"pc","pc",1013907813)], true);
garden.units.angular_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rad","rad",1014016903),null,new cljs.core.Keyword(null,"deg","deg",1014003576),null,new cljs.core.Keyword(null,"grad","grad",1017085376),null,new cljs.core.Keyword(null,"turn","turn",1017476079),null], null), null);
garden.units.time_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",1013907736),null,new cljs.core.Keyword(null,"s","s",1013904357),null], null), null);
garden.units.frequency_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kHz","kHz",1014009423),null,new cljs.core.Keyword(null,"Hz","Hz",1013906596),null], null), null);
garden.units.resolution_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dppx","dppx",1016994566),null,new cljs.core.Keyword(null,"dpi","dpi",1014003919),null,new cljs.core.Keyword(null,"dpcm","dpcm",1016994152),null], null), null);
/**
* True if x is of type CSSUnit.
*/
garden.units.unit_QMARK_ = (function unit_QMARK_(x){return (x instanceof garden.types.CSSUnit);
});
garden.units.length_QMARK_ = (function length_QMARK_(x){return (garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.length_units,new cljs.core.Keyword(null,"unit","unit",1017498870).cljs$core$IFn$_invoke$arity$1(x)));
});
garden.units.angle_QMARK_ = (function angle_QMARK_(x){return (garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.angular_units,new cljs.core.Keyword(null,"unit","unit",1017498870).cljs$core$IFn$_invoke$arity$1(x)));
});
garden.units.time_QMARK_ = (function time_QMARK_(x){return (garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.time_units,new cljs.core.Keyword(null,"unit","unit",1017498870).cljs$core$IFn$_invoke$arity$1(x)));
});
garden.units.frequency_QMARK_ = (function frequency_QMARK_(x){return (garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.frequency_units,new cljs.core.Keyword(null,"unit","unit",1017498870).cljs$core$IFn$_invoke$arity$1(x)));
});
garden.units.resolution_QMARK_ = (function resolution_QMARK_(x){return (garden.units.unit_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,garden.units.resolution_units,new cljs.core.Keyword(null,"unit","unit",1017498870).cljs$core$IFn$_invoke$arity$1(x)));
});
/**
* Map associating CSS unit types to their conversion values.
*/
garden.units.conversions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"rad","rad",1014016903),new cljs.core.Keyword(null,"kHz","kHz",1014009423),cljs.core.keyword.call(null,"%"),new cljs.core.Keyword(null,"px","px",1013907834),new cljs.core.Keyword(null,"Hz","Hz",1013906596),new cljs.core.Keyword(null,"cm","cm",1013907420),new cljs.core.Keyword(null,"deg","deg",1014003576),new cljs.core.Keyword(null,"pt","pt",1013907830),new cljs.core.Keyword(null,"mm","mm",1013907730),new cljs.core.Keyword(null,"grad","grad",1017085376),new cljs.core.Keyword(null,"ms","ms",1013907736),new cljs.core.Keyword(null,"rem","rem",1014017036),new cljs.core.Keyword(null,"turn","turn",1017476079),new cljs.core.Keyword(null,"s","s",1013904357),new cljs.core.Keyword(null,"pc","pc",1013907813)],[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"in","in",1013907607),1,new cljs.core.Keyword(null,"cm","cm",1013907420),2.54,new cljs.core.Keyword(null,"pc","pc",1013907813),6,new cljs.core.Keyword(null,"mm","mm",1013907730),25.4,new cljs.core.Keyword(null,"pt","pt",1013907830),72,new cljs.core.Keyword(null,"px","px",1013907834),96], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"em","em",1013907482),1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rad","rad",1014016903),1,new cljs.core.Keyword(null,"turn","turn",1017476079),0.159154943], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kHz","kHz",1014009423),1], null),new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,"%"),1], true, false),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"px","px",1013907834),1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Hz","Hz",1013906596),1,new cljs.core.Keyword(null,"kHz","kHz",1014009423),0.001], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cm","cm",1013907420),1,new cljs.core.Keyword(null,"pc","pc",1013907813),2.36220473,new cljs.core.Keyword(null,"mm","mm",1013907730),10,new cljs.core.Keyword(null,"pt","pt",1013907830),28.3464567,new cljs.core.Keyword(null,"px","px",1013907834),37.795275591], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",1014003576),1,new cljs.core.Keyword(null,"grad","grad",1017085376),1.111111111,new cljs.core.Keyword(null,"rad","rad",1014016903),0.0174532925,new cljs.core.Keyword(null,"turn","turn",1017476079),0.002777778], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",1013907830),1,new cljs.core.Keyword(null,"px","px",1013907834),1.3333333333], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mm","mm",1013907730),1,new cljs.core.Keyword(null,"pt","pt",1013907830),2.83464567,new cljs.core.Keyword(null,"px","px",1013907834),3.7795275591], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grad","grad",1017085376),1,new cljs.core.Keyword(null,"rad","rad",1014016903),63.661977237,new cljs.core.Keyword(null,"turn","turn",1017476079),0.0025], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ms","ms",1013907736),1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rem","rem",1014017036),1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",1017476079),1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1013904357),1,new cljs.core.Keyword(null,"ms","ms",1013907736),1000], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pc","pc",1013907813),1,new cljs.core.Keyword(null,"mm","mm",1013907730),4.23333333,new cljs.core.Keyword(null,"pt","pt",1013907830),12,new cljs.core.Keyword(null,"px","px",1013907834),16], null)]);
/**
* True if unit is a key of convertable-units, false otherwise.
*/
garden.units.convertable_QMARK_ = (function convertable_QMARK_(unit){return cljs.core.contains_QMARK_.call(null,garden.units.conversions,unit);
});
/**
* Convert a Unit with :unit left to a Unit with :unit right if possible.
*/
garden.units.convert = (function convert(p__18742,right){var map__18744 = p__18742;var map__18744__$1 = ((cljs.core.seq_QMARK_.call(null,map__18744))?cljs.core.apply.call(null,cljs.core.hash_map,map__18744):map__18744);var m = cljs.core.get.call(null,map__18744__$1,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682));var left = cljs.core.get.call(null,map__18744__$1,new cljs.core.Keyword(null,"unit","unit",1017498870));if(cljs.core.every_QMARK_.call(null,garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)))
{var v1 = cljs.core.get_in.call(null,garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null));var v2 = cljs.core.get_in.call(null,garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right,left], null));if(cljs.core.truth_(v1))
{return (new garden.types.CSSUnit(right,(v1 * m)));
} else
{if(cljs.core.truth_(v2))
{return (new garden.types.CSSUnit(right,(m / v2)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,garden.util.format.call(null,"Can't convert %s to %s",cljs.core.name.call(null,left),cljs.core.name.call(null,right)),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
}
}
} else
{var x = cljs.core.first.call(null,cljs.core.drop_while.call(null,garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)));throw cljs.core.ex_info.call(null,[cljs.core.str("Inconvertible unit "),cljs.core.str(cljs.core.name.call(null,x))].join(''),cljs.core.PersistentArrayMap.EMPTY);
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
garden.units.read_unit = (function read_unit(s){var temp__4092__auto__ = cljs.core.re_matches.call(null,garden.units.unit_re,s);if(cljs.core.truth_(temp__4092__auto__))
{var vec__18746 = temp__4092__auto__;var _ = cljs.core.nth.call(null,vec__18746,0,null);var magnitude = cljs.core.nth.call(null,vec__18746,1,null);var unit = cljs.core.nth.call(null,vec__18746,2,null);var unit__$1 = cljs.core.keyword.call(null,unit);var magnitude__$1 = (cljs.core.truth_(magnitude)?cljs.reader.read_string.call(null,magnitude):0);return (new garden.types.CSSUnit(unit__$1,magnitude__$1));
} else
{return null;
}
});
/**
* Creates a function for verifying the given unit type.
*/
garden.units.make_unit_predicate = (function make_unit_predicate(unit){return (function (x){return (garden.units.unit_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unit","unit",1017498870).cljs$core$IFn$_invoke$arity$1(x),unit));
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
{var or__7880__auto__ = (function (){var and__7868__auto__ = cljs.core._EQ_.call(null,unit.call(null,x),unit);if(and__7868__auto__)
{return x;
} else
{return and__7868__auto__;
}
})();if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return garden.units.convert.call(null,x,unit);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,garden.util.format.call(null,"Don't know how to convert type %s to %s",cljs.core.type.call(null,x).getName(),cljs.core.name.call(null,unit)),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
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
var u_PLUS___0 = (function (){return u.call(null,0);
});
var u_PLUS___1 = (function (x){return u.call(null,x);
});
var u_PLUS___2 = (function (x,y){var map__18753 = u.call(null,x);var map__18753__$1 = ((cljs.core.seq_QMARK_.call(null,map__18753))?cljs.core.apply.call(null,cljs.core.hash_map,map__18753):map__18753);var m1 = cljs.core.get.call(null,map__18753__$1,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682));var map__18754 = u.call(null,y);var map__18754__$1 = ((cljs.core.seq_QMARK_.call(null,map__18754))?cljs.core.apply.call(null,cljs.core.hash_map,map__18754):map__18754);var m2 = cljs.core.get.call(null,map__18754__$1,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682));return u.call(null,(m1 + m2));
});
var u_PLUS___3 = (function() { 
var G__18755__delegate = function (x,y,more){return cljs.core.reduce.call(null,u_PLUS_,u_PLUS_.call(null,x,y),more);
};
var G__18755 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__18755__delegate.call(this,x,y,more);};
G__18755.cljs$lang$maxFixedArity = 2;
G__18755.cljs$lang$applyTo = (function (arglist__18756){
var x = cljs.core.first(arglist__18756);
arglist__18756 = cljs.core.next(arglist__18756);
var y = cljs.core.first(arglist__18756);
var more = cljs.core.rest(arglist__18756);
return G__18755__delegate(x,y,more);
});
G__18755.cljs$core$IFn$_invoke$arity$variadic = G__18755__delegate;
return G__18755;
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
var u___2 = (function (x,y){var map__18763 = u.call(null,x);var map__18763__$1 = ((cljs.core.seq_QMARK_.call(null,map__18763))?cljs.core.apply.call(null,cljs.core.hash_map,map__18763):map__18763);var m1 = cljs.core.get.call(null,map__18763__$1,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682));var map__18764 = u.call(null,y);var map__18764__$1 = ((cljs.core.seq_QMARK_.call(null,map__18764))?cljs.core.apply.call(null,cljs.core.hash_map,map__18764):map__18764);var m2 = cljs.core.get.call(null,map__18764__$1,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682));return u.call(null,(m1 - m2));
});
var u___3 = (function() { 
var G__18765__delegate = function (x,y,more){return cljs.core.reduce.call(null,u_,u_.call(null,x,y),more);
};
var G__18765 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__18765__delegate.call(this,x,y,more);};
G__18765.cljs$lang$maxFixedArity = 2;
G__18765.cljs$lang$applyTo = (function (arglist__18766){
var x = cljs.core.first(arglist__18766);
arglist__18766 = cljs.core.next(arglist__18766);
var y = cljs.core.first(arglist__18766);
var more = cljs.core.rest(arglist__18766);
return G__18765__delegate(x,y,more);
});
G__18765.cljs$core$IFn$_invoke$arity$variadic = G__18765__delegate;
return G__18765;
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
var u_STAR___0 = (function (){return u.call(null,1);
});
var u_STAR___1 = (function (x){return u.call(null,x);
});
var u_STAR___2 = (function (x,y){var map__18773 = u.call(null,x);var map__18773__$1 = ((cljs.core.seq_QMARK_.call(null,map__18773))?cljs.core.apply.call(null,cljs.core.hash_map,map__18773):map__18773);var m1 = cljs.core.get.call(null,map__18773__$1,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682));var map__18774 = u.call(null,y);var map__18774__$1 = ((cljs.core.seq_QMARK_.call(null,map__18774))?cljs.core.apply.call(null,cljs.core.hash_map,map__18774):map__18774);var m2 = cljs.core.get.call(null,map__18774__$1,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682));return u.call(null,(m1 * m2));
});
var u_STAR___3 = (function() { 
var G__18775__delegate = function (x,y,more){return cljs.core.reduce.call(null,u_STAR_,u_STAR_.call(null,x,y),more);
};
var G__18775 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__18775__delegate.call(this,x,y,more);};
G__18775.cljs$lang$maxFixedArity = 2;
G__18775.cljs$lang$applyTo = (function (arglist__18776){
var x = cljs.core.first(arglist__18776);
arglist__18776 = cljs.core.next(arglist__18776);
var y = cljs.core.first(arglist__18776);
var more = cljs.core.rest(arglist__18776);
return G__18775__delegate(x,y,more);
});
G__18775.cljs$core$IFn$_invoke$arity$variadic = G__18775__delegate;
return G__18775;
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
var ud__1 = (function (x){return u.call(null,(1 / x));
});
var ud__2 = (function (x,y){var map__18783 = u.call(null,x);var map__18783__$1 = ((cljs.core.seq_QMARK_.call(null,map__18783))?cljs.core.apply.call(null,cljs.core.hash_map,map__18783):map__18783);var m1 = cljs.core.get.call(null,map__18783__$1,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682));var map__18784 = u.call(null,y);var map__18784__$1 = ((cljs.core.seq_QMARK_.call(null,map__18784))?cljs.core.apply.call(null,cljs.core.hash_map,map__18784):map__18784);var m2 = cljs.core.get.call(null,map__18784__$1,new cljs.core.Keyword(null,"magnitude","magnitude",3292087682));return u.call(null,(m1 / m2));
});
var ud__3 = (function() { 
var G__18785__delegate = function (x,y,more){return cljs.core.reduce.call(null,ud,ud.call(null,x,y),more);
};
var G__18785 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__18785__delegate.call(this,x,y,more);};
G__18785.cljs$lang$maxFixedArity = 2;
G__18785.cljs$lang$applyTo = (function (arglist__18786){
var x = cljs.core.first(arglist__18786);
arglist__18786 = cljs.core.next(arglist__18786);
var y = cljs.core.first(arglist__18786);
var more = cljs.core.rest(arglist__18786);
return G__18785__delegate(x,y,more);
});
G__18785.cljs$core$IFn$_invoke$arity$variadic = G__18785__delegate;
return G__18785;
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
garden.units.cm = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"cm","cm",1013907420));
garden.units.cm_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"cm","cm",1013907420));
garden.units.cm_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"cm","cm",1013907420));
garden.units.cm_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"cm","cm",1013907420));
garden.units.cm_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"cm","cm",1013907420));
garden.units.cm_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"cm","cm",1013907420));
garden.units.mm = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"mm","mm",1013907730));
garden.units.mm_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"mm","mm",1013907730));
garden.units.mm_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"mm","mm",1013907730));
garden.units.mm_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"mm","mm",1013907730));
garden.units.mm_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"mm","mm",1013907730));
garden.units.mm_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"mm","mm",1013907730));
garden.units.in$ = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"in","in",1013907607));
garden.units.in_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"in","in",1013907607));
garden.units.in_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"in","in",1013907607));
garden.units.in_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"in","in",1013907607));
garden.units.in_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"in","in",1013907607));
garden.units.in_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"in","in",1013907607));
garden.units.px = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"px","px",1013907834));
garden.units.px_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"px","px",1013907834));
garden.units.px_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"px","px",1013907834));
garden.units.px_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"px","px",1013907834));
garden.units.px_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"px","px",1013907834));
garden.units.px_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"px","px",1013907834));
garden.units.pt = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"pt","pt",1013907830));
garden.units.pt_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"pt","pt",1013907830));
garden.units.pt_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"pt","pt",1013907830));
garden.units.pt_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"pt","pt",1013907830));
garden.units.pt_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"pt","pt",1013907830));
garden.units.pt_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"pt","pt",1013907830));
garden.units.pc = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"pc","pc",1013907813));
garden.units.pc_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"pc","pc",1013907813));
garden.units.pc_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"pc","pc",1013907813));
garden.units.pc_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"pc","pc",1013907813));
garden.units.pc_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"pc","pc",1013907813));
garden.units.pc_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"pc","pc",1013907813));
garden.units.percent = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"%","%",1013904279));
garden.units.percent_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"%","%",1013904279));
garden.units.percent_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"%","%",1013904279));
garden.units.percent_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"%","%",1013904279));
garden.units.percent_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"%","%",1013904279));
garden.units.percent_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"%","%",1013904279));
garden.units.em = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"em","em",1013907482));
garden.units.em_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"em","em",1013907482));
garden.units.em_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"em","em",1013907482));
garden.units.em_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"em","em",1013907482));
garden.units.em_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"em","em",1013907482));
garden.units.em_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"em","em",1013907482));
garden.units.ex = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ex","ex",1013907493));
garden.units.ex_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ex","ex",1013907493));
garden.units.ex_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ex","ex",1013907493));
garden.units.ex_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ex","ex",1013907493));
garden.units.ex_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ex","ex",1013907493));
garden.units.ex_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ex","ex",1013907493));
garden.units.ch = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ch","ch",1013907415));
garden.units.ch_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ch","ch",1013907415));
garden.units.ch_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ch","ch",1013907415));
garden.units.ch_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ch","ch",1013907415));
garden.units.ch_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ch","ch",1013907415));
garden.units.ch_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ch","ch",1013907415));
garden.units.rem = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"rem","rem",1014017036));
garden.units.rem_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"rem","rem",1014017036));
garden.units.rem_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"rem","rem",1014017036));
garden.units.rem_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"rem","rem",1014017036));
garden.units.rem_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"rem","rem",1014017036));
garden.units.rem_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"rem","rem",1014017036));
garden.units.vw = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vw","vw",1013908019));
garden.units.vw_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vw","vw",1013908019));
garden.units.vw_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vw","vw",1013908019));
garden.units.vw_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vw","vw",1013908019));
garden.units.vw_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vw","vw",1013908019));
garden.units.vw_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vw","vw",1013908019));
garden.units.vh = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vh","vh",1013908004));
garden.units.vh_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vh","vh",1013908004));
garden.units.vh_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vh","vh",1013908004));
garden.units.vh_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vh","vh",1013908004));
garden.units.vh_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vh","vh",1013908004));
garden.units.vh_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vh","vh",1013908004));
garden.units.vmin = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vmin","vmin",1017527694));
garden.units.vmin_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vmin","vmin",1017527694));
garden.units.vmin_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vmin","vmin",1017527694));
garden.units.vmin_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vmin","vmin",1017527694));
garden.units.vmin_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vmin","vmin",1017527694));
garden.units.vmin_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vmin","vmin",1017527694));
garden.units.vmax = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vmax","vmax",1017527456));
garden.units.vmax_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vmax","vmax",1017527456));
garden.units.vmax_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vmax","vmax",1017527456));
garden.units.vmax_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vmax","vmax",1017527456));
garden.units.vmax_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vmax","vmax",1017527456));
garden.units.vmax_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vmax","vmax",1017527456));
garden.units.deg = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"deg","deg",1014003576));
garden.units.deg_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"deg","deg",1014003576));
garden.units.deg_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"deg","deg",1014003576));
garden.units.deg_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"deg","deg",1014003576));
garden.units.deg_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"deg","deg",1014003576));
garden.units.deg_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"deg","deg",1014003576));
garden.units.grad = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"grad","grad",1017085376));
garden.units.grad_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"grad","grad",1017085376));
garden.units.grad_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"grad","grad",1017085376));
garden.units.grad_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"grad","grad",1017085376));
garden.units.grad_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"grad","grad",1017085376));
garden.units.grad_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"grad","grad",1017085376));
garden.units.rad = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"rad","rad",1014016903));
garden.units.rad_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"rad","rad",1014016903));
garden.units.rad_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"rad","rad",1014016903));
garden.units.rad_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"rad","rad",1014016903));
garden.units.rad_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"rad","rad",1014016903));
garden.units.rad_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"rad","rad",1014016903));
garden.units.turn = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079));
garden.units.turn_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079));
garden.units.turn_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079));
garden.units.turn_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079));
garden.units.turn_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079));
garden.units.turn_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079));
garden.units.s = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"s","s",1013904357));
garden.units.s_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"s","s",1013904357));
garden.units.s_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"s","s",1013904357));
garden.units.s_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"s","s",1013904357));
garden.units.s_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"s","s",1013904357));
garden.units.s_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"s","s",1013904357));
garden.units.ms = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ms","ms",1013907736));
garden.units.ms_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ms","ms",1013907736));
garden.units.ms_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ms","ms",1013907736));
garden.units.ms_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ms","ms",1013907736));
garden.units.ms_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ms","ms",1013907736));
garden.units.ms_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ms","ms",1013907736));
garden.units.Hz = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"Hz","Hz",1013906596));
garden.units.Hz_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"Hz","Hz",1013906596));
garden.units.Hz_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"Hz","Hz",1013906596));
garden.units.Hz_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"Hz","Hz",1013906596));
garden.units.Hz_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"Hz","Hz",1013906596));
garden.units.Hz_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"Hz","Hz",1013906596));
garden.units.kHz = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"kHz","kHz",1014009423));
garden.units.kHz_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"kHz","kHz",1014009423));
garden.units.kHz_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"kHz","kHz",1014009423));
garden.units.kHz_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"kHz","kHz",1014009423));
garden.units.kHz_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"kHz","kHz",1014009423));
garden.units.kHz_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"kHz","kHz",1014009423));
garden.units.dpi = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dpi","dpi",1014003919));
garden.units.dpi_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dpi","dpi",1014003919));
garden.units.dpi_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dpi","dpi",1014003919));
garden.units.dpi_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dpi","dpi",1014003919));
garden.units.dpi_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dpi","dpi",1014003919));
garden.units.dpi_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dpi","dpi",1014003919));
garden.units.dpcm = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",1016994152));
garden.units.dpcm_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",1016994152));
garden.units.dpcm_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",1016994152));
garden.units.dpcm_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",1016994152));
garden.units.dpcm_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",1016994152));
garden.units.dpcm_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",1016994152));
garden.units.dppx = garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dppx","dppx",1016994566));
garden.units.dppx_QMARK_ = garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dppx","dppx",1016994566));
garden.units.dppx_PLUS_ = garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dppx","dppx",1016994566));
garden.units.dppx_ = garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dppx","dppx",1016994566));
garden.units.dppx_STAR_ = garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dppx","dppx",1016994566));
garden.units.dppx_div = garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dppx","dppx",1016994566));

//# sourceMappingURL=units.js.map