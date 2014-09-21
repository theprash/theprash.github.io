// Compiled by ClojureScript 0.0-2197
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__15393,args){var map__15395 = p__15393;var map__15395__$1 = ((cljs.core.seq_QMARK_.call(null,map__15395))?cljs.core.apply.call(null,cljs.core.hash_map,map__15395):map__15395);var debug = cljs.core.get.call(null,map__15395__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__15393,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__15393,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__15396){
var p__15393 = cljs.core.first(arglist__15396);
var args = cljs.core.rest(arglist__15396);
return log__delegate(p__15393,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__15397){var map__15399 = p__15397;var map__15399__$1 = ((cljs.core.seq_QMARK_.call(null,map__15399))?cljs.core.apply.call(null,cljs.core.hash_map,map__15399):map__15399);var websocket_url = cljs.core.get.call(null,map__15399__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__15400,callback){var map__15402 = p__15400;var map__15402__$1 = ((cljs.core.seq_QMARK_.call(null,map__15402))?cljs.core.apply.call(null,cljs.core.hash_map,map__15402):map__15402);var msg = map__15402__$1;var dependency_file = cljs.core.get.call(null,map__15402__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__15402__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__15402__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__7880__auto__ = dependency_file;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__15402,map__15402__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__15402,map__15402__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__15403,p__15404){var map__15407 = p__15403;var map__15407__$1 = ((cljs.core.seq_QMARK_.call(null,map__15407))?cljs.core.apply.call(null,cljs.core.hash_map,map__15407):map__15407);var opts = map__15407__$1;var url_rewriter = cljs.core.get.call(null,map__15407__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__15408 = p__15404;var map__15408__$1 = ((cljs.core.seq_QMARK_.call(null,map__15408))?cljs.core.apply.call(null,cljs.core.hash_map,map__15408):map__15408);var d = map__15408__$1;var file = cljs.core.get.call(null,map__15408__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__15409,p__15410){var map__15451 = p__15409;var map__15451__$1 = ((cljs.core.seq_QMARK_.call(null,map__15451))?cljs.core.apply.call(null,cljs.core.hash_map,map__15451):map__15451);var opts = map__15451__$1;var on_jsload = cljs.core.get.call(null,map__15451__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__15451__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__15452 = p__15410;var map__15452__$1 = ((cljs.core.seq_QMARK_.call(null,map__15452))?cljs.core.apply.call(null,cljs.core.hash_map,map__15452):map__15452);var files = cljs.core.get.call(null,map__15452__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__10478__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto__,map__15451,map__15451__$1,opts,on_jsload,before_jsload,map__15452,map__15452__$1,files){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto__,map__15451,map__15451__$1,opts,on_jsload,before_jsload,map__15452,map__15452__$1,files){
return (function (state_15474){var state_val_15475 = (state_15474[1]);if((state_val_15475 === 6))
{var inst_15457 = (state_15474[7]);var inst_15466 = (state_15474[2]);var inst_15467 = [inst_15457];var inst_15468 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_15467,null));var inst_15469 = cljs.core.apply.call(null,on_jsload,inst_15468);var state_15474__$1 = (function (){var statearr_15476 = state_15474;(statearr_15476[8] = inst_15466);
return statearr_15476;
})();var statearr_15477_15491 = state_15474__$1;(statearr_15477_15491[2] = inst_15469);
(statearr_15477_15491[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15475 === 5))
{var inst_15472 = (state_15474[2]);var state_15474__$1 = state_15474;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15474__$1,inst_15472);
} else
{if((state_val_15475 === 4))
{var state_15474__$1 = state_15474;var statearr_15478_15492 = state_15474__$1;(statearr_15478_15492[2] = null);
(statearr_15478_15492[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15475 === 3))
{var inst_15457 = (state_15474[7]);var inst_15460 = console.debug("Figwheel: loaded these files");var inst_15461 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_15457);var inst_15462 = cljs.core.prn_str.call(null,inst_15461);var inst_15463 = console.log(inst_15462);var inst_15464 = cljs.core.async.timeout.call(null,10);var state_15474__$1 = (function (){var statearr_15479 = state_15474;(statearr_15479[9] = inst_15463);
(statearr_15479[10] = inst_15460);
return statearr_15479;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15474__$1,6,inst_15464);
} else
{if((state_val_15475 === 2))
{var inst_15457 = (state_15474[7]);var inst_15457__$1 = (state_15474[2]);var inst_15458 = cljs.core.not_empty.call(null,inst_15457__$1);var state_15474__$1 = (function (){var statearr_15480 = state_15474;(statearr_15480[7] = inst_15457__$1);
return statearr_15480;
})();if(cljs.core.truth_(inst_15458))
{var statearr_15481_15493 = state_15474__$1;(statearr_15481_15493[1] = 3);
} else
{var statearr_15482_15494 = state_15474__$1;(statearr_15482_15494[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15475 === 1))
{var inst_15453 = before_jsload.call(null,files);var inst_15454 = figwheel.client.add_request_urls.call(null,opts,files);var inst_15455 = figwheel.client.load_all_js_files.call(null,inst_15454);var state_15474__$1 = (function (){var statearr_15483 = state_15474;(statearr_15483[11] = inst_15453);
return statearr_15483;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15474__$1,2,inst_15455);
} else
{return null;
}
}
}
}
}
}
});})(c__10478__auto__,map__15451,map__15451__$1,opts,on_jsload,before_jsload,map__15452,map__15452__$1,files))
;return ((function (switch__10408__auto__,c__10478__auto__,map__15451,map__15451__$1,opts,on_jsload,before_jsload,map__15452,map__15452__$1,files){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_15487 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15487[0] = state_machine__10409__auto__);
(statearr_15487[1] = 1);
return statearr_15487;
});
var state_machine__10409__auto____1 = (function (state_15474){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_15474);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e15488){if((e15488 instanceof Object))
{var ex__10412__auto__ = e15488;var statearr_15489_15495 = state_15474;(statearr_15489_15495[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15474);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15488;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15496 = state_15474;
state_15474 = G__15496;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_15474){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_15474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto__,map__15451,map__15451__$1,opts,on_jsload,before_jsload,map__15452,map__15452__$1,files))
})();var state__10480__auto__ = (function (){var statearr_15490 = f__10479__auto__.call(null);(statearr_15490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto__);
return statearr_15490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto__,map__15451,map__15451__$1,opts,on_jsload,before_jsload,map__15452,map__15452__$1,files))
);
return c__10478__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__15497,link_href){var map__15499 = p__15497;var map__15499__$1 = ((cljs.core.seq_QMARK_.call(null,map__15499))?cljs.core.apply.call(null,cljs.core.hash_map,map__15499):map__15499);var request_url = cljs.core.get.call(null,map__15499__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__15499__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__10478__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto__,parent){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto__,parent){
return (function (state_15520){var state_val_15521 = (state_15520[1]);if((state_val_15521 === 2))
{var inst_15517 = (state_15520[2]);var inst_15518 = parent.removeChild(orig_link);var state_15520__$1 = (function (){var statearr_15522 = state_15520;(statearr_15522[7] = inst_15517);
return statearr_15522;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15520__$1,inst_15518);
} else
{if((state_val_15521 === 1))
{var inst_15515 = cljs.core.async.timeout.call(null,200);var state_15520__$1 = state_15520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15520__$1,2,inst_15515);
} else
{return null;
}
}
});})(c__10478__auto__,parent))
;return ((function (switch__10408__auto__,c__10478__auto__,parent){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_15526 = [null,null,null,null,null,null,null,null];(statearr_15526[0] = state_machine__10409__auto__);
(statearr_15526[1] = 1);
return statearr_15526;
});
var state_machine__10409__auto____1 = (function (state_15520){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_15520);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e15527){if((e15527 instanceof Object))
{var ex__10412__auto__ = e15527;var statearr_15528_15530 = state_15520;(statearr_15528_15530[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15520);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15531 = state_15520;
state_15520 = G__15531;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_15520){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_15520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto__,parent))
})();var state__10480__auto__ = (function (){var statearr_15529 = f__10479__auto__.call(null);(statearr_15529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto__);
return statearr_15529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto__,parent))
);
return c__10478__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__15532){var map__15534 = p__15532;var map__15534__$1 = ((cljs.core.seq_QMARK_.call(null,map__15534))?cljs.core.apply.call(null,cljs.core.hash_map,map__15534):map__15534);var f_data = map__15534__$1;var request_url = cljs.core.get.call(null,map__15534__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__15534__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4090__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4090__auto__))
{var link = temp__4090__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__15535,files_msg){var map__15557 = p__15535;var map__15557__$1 = ((cljs.core.seq_QMARK_.call(null,map__15557))?cljs.core.apply.call(null,cljs.core.hash_map,map__15557):map__15557);var opts = map__15557__$1;var on_cssload = cljs.core.get.call(null,map__15557__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__15558_15578 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__15559_15579 = null;var count__15560_15580 = 0;var i__15561_15581 = 0;while(true){
if((i__15561_15581 < count__15560_15580))
{var f_15582 = cljs.core._nth.call(null,chunk__15559_15579,i__15561_15581);figwheel.client.reload_css_file.call(null,f_15582);
{
var G__15583 = seq__15558_15578;
var G__15584 = chunk__15559_15579;
var G__15585 = count__15560_15580;
var G__15586 = (i__15561_15581 + 1);
seq__15558_15578 = G__15583;
chunk__15559_15579 = G__15584;
count__15560_15580 = G__15585;
i__15561_15581 = G__15586;
continue;
}
} else
{var temp__4092__auto___15587 = cljs.core.seq.call(null,seq__15558_15578);if(temp__4092__auto___15587)
{var seq__15558_15588__$1 = temp__4092__auto___15587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15558_15588__$1))
{var c__8628__auto___15589 = cljs.core.chunk_first.call(null,seq__15558_15588__$1);{
var G__15590 = cljs.core.chunk_rest.call(null,seq__15558_15588__$1);
var G__15591 = c__8628__auto___15589;
var G__15592 = cljs.core.count.call(null,c__8628__auto___15589);
var G__15593 = 0;
seq__15558_15578 = G__15590;
chunk__15559_15579 = G__15591;
count__15560_15580 = G__15592;
i__15561_15581 = G__15593;
continue;
}
} else
{var f_15594 = cljs.core.first.call(null,seq__15558_15588__$1);figwheel.client.reload_css_file.call(null,f_15594);
{
var G__15595 = cljs.core.next.call(null,seq__15558_15588__$1);
var G__15596 = null;
var G__15597 = 0;
var G__15598 = 0;
seq__15558_15578 = G__15595;
chunk__15559_15579 = G__15596;
count__15560_15580 = G__15597;
i__15561_15581 = G__15598;
continue;
}
}
} else
{}
}
break;
}
var c__10478__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10478__auto__,map__15557,map__15557__$1,opts,on_cssload){
return (function (){var f__10479__auto__ = (function (){var switch__10408__auto__ = ((function (c__10478__auto__,map__15557,map__15557__$1,opts,on_cssload){
return (function (state_15568){var state_val_15569 = (state_15568[1]);if((state_val_15569 === 2))
{var inst_15564 = (state_15568[2]);var inst_15565 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_15566 = on_cssload.call(null,inst_15565);var state_15568__$1 = (function (){var statearr_15570 = state_15568;(statearr_15570[7] = inst_15564);
return statearr_15570;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15568__$1,inst_15566);
} else
{if((state_val_15569 === 1))
{var inst_15562 = cljs.core.async.timeout.call(null,100);var state_15568__$1 = state_15568;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15568__$1,2,inst_15562);
} else
{return null;
}
}
});})(c__10478__auto__,map__15557,map__15557__$1,opts,on_cssload))
;return ((function (switch__10408__auto__,c__10478__auto__,map__15557,map__15557__$1,opts,on_cssload){
return (function() {
var state_machine__10409__auto__ = null;
var state_machine__10409__auto____0 = (function (){var statearr_15574 = [null,null,null,null,null,null,null,null];(statearr_15574[0] = state_machine__10409__auto__);
(statearr_15574[1] = 1);
return statearr_15574;
});
var state_machine__10409__auto____1 = (function (state_15568){while(true){
var ret_value__10410__auto__ = (function (){try{while(true){
var result__10411__auto__ = switch__10408__auto__.call(null,state_15568);if(cljs.core.keyword_identical_QMARK_.call(null,result__10411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10411__auto__;
}
break;
}
}catch (e15575){if((e15575 instanceof Object))
{var ex__10412__auto__ = e15575;var statearr_15576_15599 = state_15568;(statearr_15576_15599[5] = ex__10412__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15568);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10410__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15600 = state_15568;
state_15568 = G__15600;
continue;
}
} else
{return ret_value__10410__auto__;
}
break;
}
});
state_machine__10409__auto__ = function(state_15568){
switch(arguments.length){
case 0:
return state_machine__10409__auto____0.call(this);
case 1:
return state_machine__10409__auto____1.call(this,state_15568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10409__auto____0;
state_machine__10409__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10409__auto____1;
return state_machine__10409__auto__;
})()
;})(switch__10408__auto__,c__10478__auto__,map__15557,map__15557__$1,opts,on_cssload))
})();var state__10480__auto__ = (function (){var statearr_15577 = f__10479__auto__.call(null);(statearr_15577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10478__auto__);
return statearr_15577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10480__auto__);
});})(c__10478__auto__,map__15557,map__15557__$1,opts,on_cssload))
);
return c__10478__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",3979112649)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__15601){var map__15606 = p__15601;var map__15606__$1 = ((cljs.core.seq_QMARK_.call(null,map__15606))?cljs.core.apply.call(null,cljs.core.hash_map,map__15606):map__15606);var opts = map__15606__$1;var on_compile_fail = cljs.core.get.call(null,map__15606__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__15606__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__15606__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__15606__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__15606,map__15606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__15607 = cljs.core._EQ_;var expr__15608 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__15607.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__15608)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__15607.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__15608)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__15607.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__15608)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__15606,map__15606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__15606,map__15606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__15606,map__15606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__15606,map__15606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__15606,map__15606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__15606,map__15606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__15606,map__15606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__15606,map__15606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__15606,map__15606__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj15613 = {"detail":url};return obj15613;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__15614){var map__15616 = p__15614;var map__15616__$1 = ((cljs.core.seq_QMARK_.call(null,map__15616))?cljs.core.apply.call(null,cljs.core.hash_map,map__15616):map__15616);var class$ = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__15617){var map__15623 = p__15617;var map__15623__$1 = ((cljs.core.seq_QMARK_.call(null,map__15623))?cljs.core.apply.call(null,cljs.core.hash_map,map__15623):map__15623);var ed = map__15623__$1;var exception_data = cljs.core.get.call(null,map__15623__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__15623__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.debug("Figwheel: Compile Exception");
var seq__15624_15628 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__15625_15629 = null;var count__15626_15630 = 0;var i__15627_15631 = 0;while(true){
if((i__15627_15631 < count__15626_15630))
{var msg_15632 = cljs.core._nth.call(null,chunk__15625_15629,i__15627_15631);console.log(msg_15632);
{
var G__15633 = seq__15624_15628;
var G__15634 = chunk__15625_15629;
var G__15635 = count__15626_15630;
var G__15636 = (i__15627_15631 + 1);
seq__15624_15628 = G__15633;
chunk__15625_15629 = G__15634;
count__15626_15630 = G__15635;
i__15627_15631 = G__15636;
continue;
}
} else
{var temp__4092__auto___15637 = cljs.core.seq.call(null,seq__15624_15628);if(temp__4092__auto___15637)
{var seq__15624_15638__$1 = temp__4092__auto___15637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15624_15638__$1))
{var c__8628__auto___15639 = cljs.core.chunk_first.call(null,seq__15624_15638__$1);{
var G__15640 = cljs.core.chunk_rest.call(null,seq__15624_15638__$1);
var G__15641 = c__8628__auto___15639;
var G__15642 = cljs.core.count.call(null,c__8628__auto___15639);
var G__15643 = 0;
seq__15624_15628 = G__15640;
chunk__15625_15629 = G__15641;
count__15626_15630 = G__15642;
i__15627_15631 = G__15643;
continue;
}
} else
{var msg_15644 = cljs.core.first.call(null,seq__15624_15638__$1);console.log(msg_15644);
{
var G__15645 = cljs.core.next.call(null,seq__15624_15638__$1);
var G__15646 = null;
var G__15647 = 0;
var G__15648 = 0;
seq__15624_15628 = G__15645;
chunk__15625_15629 = G__15646;
count__15626_15630 = G__15647;
i__15627_15631 = G__15648;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__7880__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__15649){var map__15651 = p__15649;var map__15651__$1 = ((cljs.core.seq_QMARK_.call(null,map__15651))?cljs.core.apply.call(null,cljs.core.hash_map,map__15651):map__15651);var opts = map__15651__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__15649 = null;if (arguments.length > 0) {
  p__15649 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__15649);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__15652){
var p__15649 = cljs.core.seq(arglist__15652);
return watch_and_reload__delegate(p__15649);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map