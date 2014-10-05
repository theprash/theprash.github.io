// Compiled by ClojureScript 0.0-2356
goog.provide('garden.compiler');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.units');
goog.require('garden.types');
goog.require('garden.units');
goog.require('garden.types');
goog.require('garden.util');
goog.require('garden.util');
goog.require('clojure.string');
goog.require('garden.color');
goog.require('garden.color');
goog.require('clojure.string');
/**
* The current compiler flags.
*/
garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),true,new cljs.core.Keyword(null,"output-to","output-to",-965533968),null,new cljs.core.Keyword(null,"vendors","vendors",-153040496),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
/**
* Retun a function to call when rendering a media expression.
* The returned function accepts two arguments: the media
* expression being evaluated and the current media expression context.
* Both arguments are maps. This is used to provide semantics for nested
* media queries.
*/
garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (expr,context){return cljs.core.merge.call(null,context,expr);
}),new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr,_){return expr;
})], null);
/**
* The current parent selector context.
*/
garden.compiler._STAR_selector_context_STAR_ = null;
/**
* The current media query context.
*/
garden.compiler._STAR_media_query_context_STAR_ = null;
/**
* Return the current list of browser vendors specified in `*flags*`.
*/
garden.compiler.vendors = (function vendors(){return cljs.core.seq.call(null,new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_));
});
garden.compiler.top_level_expression_QMARK_ = (function top_level_expression_QMARK_(x){var or__3639__auto__ = garden.util.rule_QMARK_.call(null,x);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (garden.util.at_import_QMARK_.call(null,x)) || (garden.util.at_media_QMARK_.call(null,x)) || (garden.util.at_keyframes_QMARK_.call(null,x));
}
});
/**
* Return a vector of [(filter pred coll) (remove pred coll)].
*/
garden.compiler.divide_vec = (function divide_vec(pred,coll){return cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,pred,coll);
});
/**
* Return a function which when given a string will return a map
* containing the chunk of text matched by re, it's size, and tag.
*/
garden.compiler.token_fn = (function token_fn(p__14869){var vec__14871 = p__14869;var tag = cljs.core.nth.call(null,vec__14871,(0),null);var re = cljs.core.nth.call(null,vec__14871,(1),null);return ((function (vec__14871,tag,re){
return (function (s){var temp__4126__auto__ = cljs.core.re_find.call(null,re,s);if(cljs.core.truth_(temp__4126__auto__))
{var chunk = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"chunk","chunk",-1191159620),chunk,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.count.call(null,chunk)], null);
} else
{return null;
}
});
;})(vec__14871,tag,re))
});
/**
* Given an arbitrary number of [tag regex] pairs, return a function
* which when given a string s will return the first matching token of s.
* Token precedence is determined by the order of the pairs. The first
* and last pairs have the highest and lowest precedence respectively.
* @param {...*} var_args
*/
garden.compiler.tokenizer = (function() { 
var tokenizer__delegate = function (tags_PLUS_regexes){var fs = cljs.core.map.call(null,garden.compiler.token_fn,tags_PLUS_regexes);return ((function (fs){
return (function (s){return cljs.core.some.call(null,((function (fs){
return (function (p1__14872_SHARP_){return p1__14872_SHARP_.call(null,s);
});})(fs))
,fs);
});
;})(fs))
};
var tokenizer = function (var_args){
var tags_PLUS_regexes = null;if (arguments.length > 0) {
  tags_PLUS_regexes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tokenizer__delegate.call(this,tags_PLUS_regexes);};
tokenizer.cljs$lang$maxFixedArity = 0;
tokenizer.cljs$lang$applyTo = (function (arglist__14873){
var tags_PLUS_regexes = cljs.core.seq(arglist__14873);
return tokenizer__delegate(tags_PLUS_regexes);
});
tokenizer.cljs$core$IFn$_invoke$arity$variadic = tokenizer__delegate;
return tokenizer;
})()
;
/**
* Tokenizer used during stylesheet compression.
*/
garden.compiler.stylesheet_tokenizer = garden.compiler.tokenizer.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),/^\"(?:\\.|[^\"])*\"/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-brace","r-brace",-1335738887),/^\s*\{\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-brace","l-brace",613286657),/^;?\s*}/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-paren","r-paren",-1688338021),/^\s*\(\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-paren","l-paren",2052672514),/^\s*\)/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comma","comma",1699024745),/^,\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colon","colon",-965200945),/^:\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semicolon","semicolon",797086549),/^;/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space+","space+",378127624),/^ +/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"white-space+","white-space+",1452157162),/^\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any","any",1705907423),/^./], null));
garden.compiler.compress_stylesheet = (function compress_stylesheet(stylesheet){var s1 = stylesheet;var s2 = "";while(true){
var temp__4124__auto__ = garden.compiler.stylesheet_tokenizer.call(null,s1);if(cljs.core.truth_(temp__4124__auto__))
{var map__14876 = temp__4124__auto__;var map__14876__$1 = ((cljs.core.seq_QMARK_.call(null,map__14876))?cljs.core.apply.call(null,cljs.core.hash_map,map__14876):map__14876);var size = cljs.core.get.call(null,map__14876__$1,new cljs.core.Keyword(null,"size","size",1098693007));var chunk = cljs.core.get.call(null,map__14876__$1,new cljs.core.Keyword(null,"chunk","chunk",-1191159620));var tag = cljs.core.get.call(null,map__14876__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));{
var G__14878 = cljs.core.subs.call(null,s1,size);
var G__14879 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__14877 = (((tag instanceof cljs.core.Keyword))?tag.fqn:null);switch (G__14877) {
case "l-brace":
return "}";

break;
case "l-paren":
return ")";

break;
case "space+":
return " ";

break;
case "comma":
return ",";

break;
case "white-space+":
return "";

break;
case "string":
return chunk;

break;
case "colon":
return ":";

break;
case "semi-comma":
return ";";

break;
case "r-brace":
return "{";

break;
case "r-paren":
return "(";

break;
default:
return chunk;

}
})()));
s1 = G__14878;
s2 = G__14879;
continue;
}
} else
{return s2;
}
break;
}
});
garden.compiler.IExpandable = (function (){var obj14882 = {};return obj14882;
})();
garden.compiler.expand = (function expand(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.garden$compiler$IExpandable$expand$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.garden$compiler$IExpandable$expand$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (garden.compiler.expand[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (garden.compiler.expand["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IExpandable.expand",this$);
}
}
})().call(null,this$);
}
});
/**
* Like flatten but only affects seqs.
*/
garden.compiler.expand_seqs = (function expand_seqs(coll){return cljs.core.mapcat.call(null,(function (x){if(cljs.core.seq_QMARK_.call(null,x))
{return expand_seqs.call(null,x);
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,x);
}
}),coll);
});
garden.compiler.expand_declaration_1 = (function expand_declaration_1(d){var prefix = (function (p1__14883_SHARP_,p2__14884_SHARP_){return garden.util.as_str.call(null,p1__14883_SHARP_,"-",p2__14884_SHARP_);
});return cljs.core.reduce.call(null,((function (prefix){
return (function (m,p__14889){var vec__14890 = p__14889;var k = cljs.core.nth.call(null,vec__14890,(0),null);var v = cljs.core.nth.call(null,vec__14890,(1),null);if(garden.util.hash_map_QMARK_.call(null,v))
{return cljs.core.reduce.call(null,((function (vec__14890,k,v,prefix){
return (function (m1,p__14891){var vec__14892 = p__14891;var k1 = cljs.core.nth.call(null,vec__14892,(0),null);var v1 = cljs.core.nth.call(null,vec__14892,(1),null);return cljs.core.assoc.call(null,m1,prefix.call(null,k,k1),v1);
});})(vec__14890,k,v,prefix))
,m,expand_declaration_1.call(null,v));
} else
{return cljs.core.assoc.call(null,m,garden.util.to_str.call(null,k),v);
}
});})(prefix))
,cljs.core.PersistentArrayMap.EMPTY,d);
});
garden.compiler.expand_declaration = (function expand_declaration(d){if(cljs.core.seq.call(null,d))
{return cljs.core.with_meta.call(null,garden.compiler.expand_declaration_1.call(null,d),cljs.core.meta.call(null,d));
} else
{return null;
}
});
/**
* Matches a single "&" or "&" follow by one or more
* non-whitespace characters.
*/
garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
* Extract the selector portion of a parent selector reference.
*/
garden.compiler.extract_reference = (function extract_reference(selector){var temp__4126__auto__ = cljs.core.re_find.call(null,garden.compiler.parent_selector_re,garden.util.to_str.call(null,cljs.core.last.call(null,selector)));if(cljs.core.truth_(temp__4126__auto__))
{var reference = temp__4126__auto__;return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,reference));
} else
{return null;
}
});
garden.compiler.expand_selector_reference = (function expand_selector_reference(selector){var temp__4124__auto__ = garden.compiler.extract_reference.call(null,selector);if(cljs.core.truth_(temp__4124__auto__))
{var reference = temp__4124__auto__;var parent = cljs.core.butlast.call(null,selector);return cljs.core.concat.call(null,cljs.core.butlast.call(null,parent),cljs.core._conj.call(null,cljs.core.List.EMPTY,garden.util.as_str.call(null,cljs.core.last.call(null,parent),reference)));
} else
{return selector;
}
});
garden.compiler.expand_selector = (function expand_selector(selector,parent){var selector__$1 = ((cljs.core.seq.call(null,parent))?cljs.core.map.call(null,cljs.core.flatten,garden.util.cartesian_product.call(null,parent,selector)):cljs.core.map.call(null,cljs.core.list,selector));return cljs.core.map.call(null,garden.compiler.expand_selector_reference,selector__$1);
});
garden.compiler.expand_rule = (function expand_rule(rule){var vec__14896 = cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.coll_QMARK_),rule);var selector = cljs.core.nth.call(null,vec__14896,(0),null);var children = cljs.core.nth.call(null,vec__14896,(1),null);var selector__$1 = garden.compiler.expand_selector.call(null,selector,garden.compiler._STAR_selector_context_STAR_);var children__$1 = garden.compiler.expand.call(null,children);var vec__14897 = garden.compiler.divide_vec.call(null,garden.util.declaration_QMARK_,children__$1);var declarations = cljs.core.nth.call(null,vec__14897,(0),null);var xs = cljs.core.nth.call(null,vec__14897,(1),null);var ys = (function (){var _STAR_selector_context_STAR_14898 = garden.compiler._STAR_selector_context_STAR_;try{garden.compiler._STAR_selector_context_STAR_ = ((cljs.core.seq.call(null,selector__$1))?selector__$1:garden.compiler._STAR_selector_context_STAR_);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,garden.compiler.expand,xs));
}finally {garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR_14898;
}})();return cljs.core.conj.call(null,ys,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.call(null,garden.compiler.expand,declarations)));
});
garden.compiler.expand_at_rule = (function (){var method_table__4518__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4519__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4520__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4521__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4522__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("expand-at-rule",new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4522__auto__,method_table__4518__auto__,prefer_table__4519__auto__,method_cache__4520__auto__,cached_hierarchy__4521__auto__));
})();
cljs.core._add_method.call(null,garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (at_rule){return cljs.core._conj.call(null,cljs.core.List.EMPTY,at_rule);
}));
cljs.core._add_method.call(null,garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__14899){var map__14900 = p__14899;var map__14900__$1 = ((cljs.core.seq_QMARK_.call(null,map__14900))?cljs.core.apply.call(null,cljs.core.hash_map,map__14900):map__14900);var value = cljs.core.get.call(null,map__14900__$1,new cljs.core.Keyword(null,"value","value",305978217));var map__14901 = value;var map__14901__$1 = ((cljs.core.seq_QMARK_.call(null,map__14901))?cljs.core.apply.call(null,cljs.core.hash_map,map__14901):map__14901);var frames = cljs.core.get.call(null,map__14901__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));var identifier = cljs.core.get.call(null,map__14901__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));return cljs.core._conj.call(null,cljs.core.List.EMPTY,(new garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),garden.util.to_str.call(null,identifier),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.mapcat.call(null,garden.compiler.expand,frames)], null))));
}));
garden.compiler.expand_media_query_expression = (function expand_media_query_expression(expression){var temp__4124__auto__ = garden.compiler.media_expression_behavior.call(null,cljs.core.get_in.call(null,garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755)], null)));if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return f.call(null,expression,garden.compiler._STAR_media_query_context_STAR_);
} else
{return expression;
}
});
cljs.core._add_method.call(null,garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__14902){var map__14903 = p__14902;var map__14903__$1 = ((cljs.core.seq_QMARK_.call(null,map__14903))?cljs.core.apply.call(null,cljs.core.hash_map,map__14903):map__14903);var value = cljs.core.get.call(null,map__14903__$1,new cljs.core.Keyword(null,"value","value",305978217));var map__14904 = value;var map__14904__$1 = ((cljs.core.seq_QMARK_.call(null,map__14904))?cljs.core.apply.call(null,cljs.core.hash_map,map__14904):map__14904);var rules = cljs.core.get.call(null,map__14904__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));var media_queries = cljs.core.get.call(null,map__14904__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));var media_queries__$1 = garden.compiler.expand_media_query_expression.call(null,media_queries);var xs = (function (){var _STAR_media_query_context_STAR_14906 = garden.compiler._STAR_media_query_context_STAR_;try{garden.compiler._STAR_media_query_context_STAR_ = media_queries__$1;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,garden.compiler.expand,garden.compiler.expand.call(null,rules)));
}finally {garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR_14906;
}})();var vec__14905 = garden.compiler.divide_vec.call(null,garden.util.at_media_QMARK_,xs);var subqueries = cljs.core.nth.call(null,vec__14905,(0),null);var rules__$1 = cljs.core.nth.call(null,vec__14905,(1),null);return cljs.core.cons.call(null,(new garden.types.CSSAtRule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null))),subqueries);
}));
garden.compiler.expand_stylesheet = (function expand_stylesheet(xs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,garden.compiler.expand,garden.compiler.expand.call(null,xs)));
});
(garden.compiler.IExpandable["null"] = true);
(garden.compiler.expand["null"] = (function (this$){return null;
}));
garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$ = true;
garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_at_rule.call(null,this$__$1);
});
garden.color.CSSColor.prototype.garden$compiler$IExpandable$ = true;
garden.color.CSSColor.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return cljs.core._conj.call(null,cljs.core.List.EMPTY,this$__$1);
});
cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$ = true;
cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_seqs.call(null,this$__$1);
});
cljs.core.LazySeq.prototype.garden$compiler$IExpandable$ = true;
cljs.core.LazySeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_seqs.call(null,this$__$1);
});
cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$ = true;
cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_seqs.call(null,this$__$1);
});
cljs.core.BlackNode.prototype.garden$compiler$IExpandable$ = true;
cljs.core.BlackNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_rule.call(null,this$__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$ = true;
cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_seqs.call(null,this$__$1);
});
cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$ = true;
cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_seqs.call(null,this$__$1);
});
cljs.core.Cons.prototype.garden$compiler$IExpandable$ = true;
cljs.core.Cons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_seqs.call(null,this$__$1);
});
cljs.core.RSeq.prototype.garden$compiler$IExpandable$ = true;
cljs.core.RSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_seqs.call(null,this$__$1);
});
cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$ = true;
cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return cljs.core._conj.call(null,cljs.core.List.EMPTY,garden.compiler.expand_declaration.call(null,this$__$1));
});
cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$ = true;
cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_seqs.call(null,this$__$1);
});
cljs.core.Subvec.prototype.garden$compiler$IExpandable$ = true;
cljs.core.Subvec.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_rule.call(null,this$__$1);
});
(garden.compiler.IExpandable["_"] = true);
(garden.compiler.expand["_"] = (function (this$){return cljs.core._conj.call(null,cljs.core.List.EMPTY,this$);
}));
cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$ = true;
cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return cljs.core._conj.call(null,cljs.core.List.EMPTY,garden.compiler.expand_declaration.call(null,this$__$1));
});
cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$ = true;
cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_seqs.call(null,this$__$1);
});
cljs.core.RedNode.prototype.garden$compiler$IExpandable$ = true;
cljs.core.RedNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_rule.call(null,this$__$1);
});
cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$ = true;
cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_rule.call(null,this$__$1);
});
cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$ = true;
cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return cljs.core._conj.call(null,cljs.core.List.EMPTY,garden.compiler.expand_declaration.call(null,this$__$1));
});
garden.types.CSSFunction.prototype.garden$compiler$IExpandable$ = true;
garden.types.CSSFunction.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return cljs.core._conj.call(null,cljs.core.List.EMPTY,this$__$1);
});
cljs.core.List.prototype.garden$compiler$IExpandable$ = true;
cljs.core.List.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.expand_seqs.call(null,this$__$1);
});
garden.compiler.CSSRenderer = (function (){var obj14908 = {};return obj14908;
})();
garden.compiler.render_css = (function render_css(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.garden$compiler$CSSRenderer$render_css$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (garden.compiler.render_css[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (garden.compiler.render_css["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"CSSRenderer.render-css",this$);
}
}
})().call(null,this$);
}
});
garden.compiler.comma = ", ";
garden.compiler.colon = ": ";
garden.compiler.semicolon = ";";
garden.compiler.l_brace = " {\n";
garden.compiler.r_brace = "\n}";
garden.compiler.l_brace_1 = " {\n\n";
garden.compiler.r_brace_1 = "\n\n}";
garden.compiler.rule_sep = "\n\n";
garden.compiler.indent = "  ";
/**
* Return a space separated list of values.
*/
garden.compiler.space_separated_list = (function() {
var space_separated_list = null;
var space_separated_list__1 = (function (xs){return space_separated_list.call(null,garden.compiler.render_css,xs);
});
var space_separated_list__2 = (function (f,xs){return clojure.string.join.call(null," ",cljs.core.map.call(null,f,xs));
});
space_separated_list = function(f,xs){
switch(arguments.length){
case 1:
return space_separated_list__1.call(this,f);
case 2:
return space_separated_list__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
space_separated_list.cljs$core$IFn$_invoke$arity$1 = space_separated_list__1;
space_separated_list.cljs$core$IFn$_invoke$arity$2 = space_separated_list__2;
return space_separated_list;
})()
;
/**
* Return a comma separated list of values. Subsequences are joined with
* spaces.
*/
garden.compiler.comma_separated_list = (function() {
var comma_separated_list = null;
var comma_separated_list__1 = (function (xs){return comma_separated_list.call(null,garden.compiler.render_css,xs);
});
var comma_separated_list__2 = (function (f,xs){var ys = (function (){var iter__4377__auto__ = (function iter__14913(s__14914){return (new cljs.core.LazySeq(null,(function (){var s__14914__$1 = s__14914;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14914__$1);if(temp__4126__auto__)
{var s__14914__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14914__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__14914__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__14916 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__14915 = (0);while(true){
if((i__14915 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__14915);cljs.core.chunk_append.call(null,b__14916,((cljs.core.sequential_QMARK_.call(null,x))?garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)));
{
var G__14917 = (i__14915 + (1));
i__14915 = G__14917;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14916),iter__14913.call(null,cljs.core.chunk_rest.call(null,s__14914__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14916),null);
}
} else
{var x = cljs.core.first.call(null,s__14914__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)),iter__14913.call(null,cljs.core.rest.call(null,s__14914__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,xs);
})();return clojure.string.join.call(null,garden.compiler.comma,ys);
});
comma_separated_list = function(f,xs){
switch(arguments.length){
case 1:
return comma_separated_list__1.call(this,f);
case 2:
return comma_separated_list__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comma_separated_list.cljs$core$IFn$_invoke$arity$1 = comma_separated_list__1;
comma_separated_list.cljs$core$IFn$_invoke$arity$2 = comma_separated_list__2;
return comma_separated_list;
})()
;
garden.compiler.rule_join = (function rule_join(xs){return clojure.string.join.call(null,garden.compiler.rule_sep,xs);
});
/**
* Match the start of a line if the characters immediately
* after it are spaces or used in a CSS id (#), class (.), or tag name.
*/
garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
garden.compiler.indent_str = (function indent_str(s){return s.replace(garden.compiler.indent_loc_re,garden.compiler.indent);
});
/**
* Render the value portion of a declaration.
*/
garden.compiler.render_value = (function render_value(x){if(garden.util.at_keyframes_QMARK_.call(null,x))
{return garden.util.to_str.call(null,cljs.core.get_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null)));
} else
{return garden.compiler.render_css.call(null,x);
}
});
garden.compiler.render_property_and_value = (function render_property_and_value(p__14918){var vec__14920 = p__14918;var prop = cljs.core.nth.call(null,vec__14920,(0),null);var val = cljs.core.nth.call(null,vec__14920,(1),null);if(cljs.core.set_QMARK_.call(null,val))
{return clojure.string.join.call(null,"\n",cljs.core.map.call(null,render_property_and_value,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.repeat.call(null,prop),val))));
} else
{var val__$1 = ((cljs.core.sequential_QMARK_.call(null,val))?garden.compiler.comma_separated_list.call(null,garden.compiler.render_value,val):garden.compiler.render_value.call(null,val));return garden.util.as_str.call(null,prop,garden.compiler.colon,val__$1,garden.compiler.semicolon);
}
});
/**
* If `(:vendors *flags*)` is bound and `declaration` has the meta
* `{:prefix true}` automatically create vendor prefixed properties.
*/
garden.compiler.prefix_declaration = (function prefix_declaration(declaration){if(cljs.core.not.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration))))
{return declaration;
} else
{var ps = cljs.core.keys.call(null,declaration);var vs = cljs.core.vals.call(null,declaration);var vendors = (function (){var or__3639__auto__ = new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return garden.compiler.vendors.call(null);
}
})();return cljs.core.mapcat.call(null,((function (ps,vs,vendors){
return (function (p,v){return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,v], null),cljs.core.map.call(null,((function (ps,vs,vendors){
return (function (vendor,p1,v1){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p1)),v1],null));
});})(ps,vs,vendors))
,vendors,cljs.core.repeat.call(null,p),cljs.core.repeat.call(null,v)));
});})(ps,vs,vendors))
,ps,vs);
}
});
garden.compiler.render_declaration = (function render_declaration(declaration){return clojure.string.join.call(null,"\n",cljs.core.map.call(null,garden.compiler.render_property_and_value,garden.compiler.prefix_declaration.call(null,declaration)));
});
garden.compiler.render_selector = (function render_selector(selector){return garden.compiler.comma_separated_list.call(null,selector);
});
/**
* Convert a vector to a CSS rule string. The vector is expected to be
* fully expanded.
*/
garden.compiler.render_rule = (function render_rule(p__14921){var vec__14923 = p__14921;var selector = cljs.core.nth.call(null,vec__14923,(0),null);var declarations = cljs.core.nth.call(null,vec__14923,(1),null);var rule = vec__14923;if((cljs.core.seq.call(null,rule)) && (cljs.core.every_QMARK_.call(null,cljs.core.seq,rule)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.render_selector.call(null,selector))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.l_brace)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str.call(null,clojure.string.join.call(null,"\n",cljs.core.map.call(null,garden.compiler.render_css,declarations))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.r_brace));
} else
{return null;
}
});
/**
* Render the individual components of a media expression.
*/
garden.compiler.render_media_expr_part = (function render_media_expr_part(p__14924){var vec__14927 = p__14924;var k = cljs.core.nth.call(null,vec__14927,(0),null);var v = cljs.core.nth.call(null,vec__14927,(1),null);var vec__14928 = cljs.core.map.call(null,garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));var sk = cljs.core.nth.call(null,vec__14928,(0),null);var sv = cljs.core.nth.call(null,vec__14928,(1),null);if(v === true)
{return sk;
} else
{if(v === false)
{return ("not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk));
} else
{if(cljs.core._EQ_.call(null,"only",sv))
{return ("only "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk));
} else
{if(cljs.core.truth_((function (){var and__3627__auto__ = v;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.seq.call(null,sv);
} else
{return and__3627__auto__;
}
})()))
{return ("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.colon)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv)+")");
} else
{return ("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)+")");
}

}
}
}
});
/**
* Make a media query expession from one or more maps. Keys are not
* validated but values have the following semantics:
* 
* `true`  as in `{:screen true}`  == "screen"
* `false` as in `{:screen false}` == "not screen"
* `:only` as in `{:screen :only}  == "only screen"
*/
garden.compiler.render_media_expr = (function render_media_expr(expr){if(cljs.core.sequential_QMARK_.call(null,expr))
{return garden.compiler.comma_separated_list.call(null,cljs.core.map.call(null,render_media_expr,expr));
} else
{return clojure.string.join.call(null," and ",cljs.core.map.call(null,garden.compiler.render_media_expr_part,expr));
}
});
/**
* Render a CSSUnit.
*/
garden.compiler.render_unit = (function render_unit(css_unit){var map__14930 = css_unit;var map__14930__$1 = ((cljs.core.seq_QMARK_.call(null,map__14930))?cljs.core.apply.call(null,cljs.core.hash_map,map__14930):map__14930);var unit = cljs.core.get.call(null,map__14930__$1,new cljs.core.Keyword(null,"unit","unit",375175175));var magnitude = cljs.core.get.call(null,map__14930__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));var magnitude__$1 = magnitude;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,unit)));
});
/**
* Render a CSS function.
*/
garden.compiler.render_function = (function render_function(css_function){var map__14932 = css_function;var map__14932__$1 = ((cljs.core.seq_QMARK_.call(null,map__14932))?cljs.core.apply.call(null,cljs.core.hash_map,map__14932):map__14932);var args = cljs.core.get.call(null,map__14932__$1,new cljs.core.Keyword(null,"args","args",1315556576));var function$ = cljs.core.get.call(null,map__14932__$1,new cljs.core.Keyword(null,"function","function",-2127255473));var args__$1 = ((cljs.core.sequential_QMARK_.call(null,args))?garden.compiler.comma_separated_list.call(null,args):garden.util.to_str.call(null,args));return garden.util.format.call(null,"%s(%s)",garden.util.to_str.call(null,function$),args__$1);
});
garden.compiler.render_color = (function render_color(c){var temp__4124__auto__ = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(c);if(cljs.core.truth_(temp__4124__auto__))
{var a = temp__4124__auto__;var map__14935 = garden.color.as_hsl.call(null,c);var map__14935__$1 = ((cljs.core.seq_QMARK_.call(null,map__14935))?cljs.core.apply.call(null,cljs.core.hash_map,map__14935):map__14935);var lightness = cljs.core.get.call(null,map__14935__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));var saturation = cljs.core.get.call(null,map__14935__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));var hue = cljs.core.get.call(null,map__14935__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));var vec__14936 = cljs.core.map.call(null,garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));var s = cljs.core.nth.call(null,vec__14936,(0),null);var l = cljs.core.nth.call(null,vec__14936,(1),null);return garden.util.format.call(null,"hsla(%s)",garden.compiler.comma_separated_list.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null)));
} else
{return garden.color.as_hex.call(null,c);
}
});
/**
* Render a CSS at-rule
*/
garden.compiler.render_at_rule = (function (){var method_table__4518__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4519__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4520__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4521__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4522__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render-at-rule",new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4522__auto__,method_table__4518__auto__,prefer_table__4519__auto__,method_cache__4520__auto__,cached_hierarchy__4521__auto__));
})();
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){return null;
}));
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"import","import",-1399500709),(function (p__14937){var map__14938 = p__14937;var map__14938__$1 = ((cljs.core.seq_QMARK_.call(null,map__14938))?cljs.core.apply.call(null,cljs.core.hash_map,map__14938):map__14938);var value = cljs.core.get.call(null,map__14938__$1,new cljs.core.Keyword(null,"value","value",305978217));var map__14939 = value;var map__14939__$1 = ((cljs.core.seq_QMARK_.call(null,map__14939))?cljs.core.apply.call(null,cljs.core.hash_map,map__14939):map__14939);var media_queries = cljs.core.get.call(null,map__14939__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));var url = cljs.core.get.call(null,map__14939__$1,new cljs.core.Keyword(null,"url","url",276297046));var url__$1 = ((typeof url === 'string')?garden.util.wrap_quotes.call(null,url):garden.compiler.render_css.call(null,url));var queries = (cljs.core.truth_(media_queries)?garden.compiler.render_media_expr.call(null,media_queries):null);return ("@import "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(queries)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(queries)):url__$1))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.semicolon));
}));
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__14941){var map__14942 = p__14941;var map__14942__$1 = ((cljs.core.seq_QMARK_.call(null,map__14942))?cljs.core.apply.call(null,cljs.core.hash_map,map__14942):map__14942);var value = cljs.core.get.call(null,map__14942__$1,new cljs.core.Keyword(null,"value","value",305978217));var map__14943 = value;var map__14943__$1 = ((cljs.core.seq_QMARK_.call(null,map__14943))?cljs.core.apply.call(null,cljs.core.hash_map,map__14943):map__14943);var frames = cljs.core.get.call(null,map__14943__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));var identifier = cljs.core.get.call(null,map__14943__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));if(cljs.core.seq.call(null,frames))
{var body = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.util.to_str.call(null,identifier))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.l_brace_1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str.call(null,garden.compiler.rule_join.call(null,cljs.core.map.call(null,garden.compiler.render_css,frames))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.r_brace_1));var prefix = ((function (body,map__14943,map__14943__$1,frames,identifier,map__14942,map__14942__$1,value){
return (function (vendor){return ("@"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.util.vendor_prefix.call(null,vendor,"keyframes ")));
});})(body,map__14943,map__14943__$1,frames,identifier,map__14942,map__14942__$1,value))
;return garden.compiler.rule_join.call(null,cljs.core.map.call(null,((function (body,prefix,map__14943,map__14943__$1,frames,identifier,map__14942,map__14942__$1,value){
return (function (p1__14940_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14940_SHARP_)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(body));
});})(body,prefix,map__14943,map__14943__$1,frames,identifier,map__14942,map__14942__$1,value))
,cljs.core.cons.call(null,"@keyframes ",cljs.core.map.call(null,prefix,garden.compiler.vendors.call(null)))));
} else
{return null;
}
}));
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__14944){var map__14945 = p__14944;var map__14945__$1 = ((cljs.core.seq_QMARK_.call(null,map__14945))?cljs.core.apply.call(null,cljs.core.hash_map,map__14945):map__14945);var value = cljs.core.get.call(null,map__14945__$1,new cljs.core.Keyword(null,"value","value",305978217));var map__14946 = value;var map__14946__$1 = ((cljs.core.seq_QMARK_.call(null,map__14946))?cljs.core.apply.call(null,cljs.core.hash_map,map__14946):map__14946);var rules = cljs.core.get.call(null,map__14946__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));var media_queries = cljs.core.get.call(null,map__14946__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));if(cljs.core.seq.call(null,rules))
{return ("@media "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.render_media_expr.call(null,media_queries))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.l_brace_1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str.call(null,garden.compiler.rule_join.call(null,cljs.core.map.call(null,garden.compiler.render_css,rules))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.r_brace_1));
} else
{return null;
}
}));
(garden.compiler.CSSRenderer["null"] = true);
(garden.compiler.render_css["null"] = (function (this$){return "";
}));
garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$ = true;
garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.render_at_rule.call(null,this$__$1);
});
garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$ = true;
garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.render_color.call(null,this$__$1);
});
cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});
cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});
cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});
cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.render_rule.call(null,this$__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});
cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});
cljs.core.Cons.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.Cons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});
cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});
(garden.compiler.CSSRenderer["number"] = true);
(garden.compiler.render_css["number"] = (function (this$){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$));
}));
cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.render_declaration.call(null,this$__$1);
});
cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});
cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.render_rule.call(null,this$__$1);
});
(garden.compiler.CSSRenderer["_"] = true);
(garden.compiler.render_css["_"] = (function (this$){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$));
}));
cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.render_declaration.call(null,this$__$1);
});
cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});
garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$ = true;
garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.render_unit.call(null,this$__$1);
});
cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.render_rule.call(null,this$__$1);
});
cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.render_rule.call(null,this$__$1);
});
cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.name.call(null,this$__$1);
});
cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.render_declaration.call(null,this$__$1);
});
garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$ = true;
garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return garden.compiler.render_function.call(null,this$__$1);
});
cljs.core.List.prototype.garden$compiler$CSSRenderer$ = true;
cljs.core.List.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});
garden.compiler.compile_stylesheet = (function compile_stylesheet(flags,rules){var _STAR_flags_STAR_14948 = garden.compiler._STAR_flags_STAR_;try{garden.compiler._STAR_flags_STAR_ = flags;
return garden.compiler.rule_join.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,garden.compiler.render_css,cljs.core.filter.call(null,garden.compiler.top_level_expression_QMARK_,garden.compiler.expand_stylesheet.call(null,rules)))));
}finally {garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR_14948;
}});
/**
* Convert a sequence of maps into CSS for use with the HTML style
* attribute.
*/
garden.compiler.compile_style = (function compile_style(ms){return cljs.core.first.call(null,garden.compiler.render_css.call(null,garden.compiler.expand.call(null,cljs.core.reduce.call(null,cljs.core.merge,cljs.core.filter.call(null,garden.util.declaration_QMARK_,ms)))));
});
/**
* Convert any number of Clojure data structures to CSS.
* @param {...*} var_args
*/
garden.compiler.compile_css = (function() { 
var compile_css__delegate = function (flags,rules){var vec__14950 = (cljs.core.truth_((function (){var and__3627__auto__ = garden.util.hash_map_QMARK_.call(null,flags);if(and__3627__auto__)
{return cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,flags)),cljs.core.keys.call(null,garden.compiler._STAR_flags_STAR_));
} else
{return and__3627__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,garden.compiler._STAR_flags_STAR_,flags),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.compiler._STAR_flags_STAR_,cljs.core.cons.call(null,flags,rules)], null));var flags__$1 = cljs.core.nth.call(null,vec__14950,(0),null);var rules__$1 = cljs.core.nth.call(null,vec__14950,(1),null);var output_to = new cljs.core.Keyword(null,"output-to","output-to",-965533968).cljs$core$IFn$_invoke$arity$1(flags__$1);var stylesheet = (function (){var stylesheet = garden.compiler.compile_stylesheet.call(null,flags__$1,rules__$1);if(cljs.core.truth_(new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158).cljs$core$IFn$_invoke$arity$1(flags__$1)))
{return stylesheet;
} else
{return garden.compiler.compress_stylesheet.call(null,stylesheet);
}
})();return stylesheet;
};
var compile_css = function (flags,var_args){
var rules = null;if (arguments.length > 1) {
  rules = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return compile_css__delegate.call(this,flags,rules);};
compile_css.cljs$lang$maxFixedArity = 1;
compile_css.cljs$lang$applyTo = (function (arglist__14951){
var flags = cljs.core.first(arglist__14951);
var rules = cljs.core.rest(arglist__14951);
return compile_css__delegate(flags,rules);
});
compile_css.cljs$core$IFn$_invoke$arity$variadic = compile_css__delegate;
return compile_css;
})()
;

//# sourceMappingURL=compiler.js.map