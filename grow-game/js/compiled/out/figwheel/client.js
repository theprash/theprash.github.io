// Compiled by ClojureScript 0.0-2356
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
var log__delegate = function (p__11757,args){var map__11759 = p__11757;var map__11759__$1 = ((cljs.core.seq_QMARK_.call(null,map__11759))?cljs.core.apply.call(null,cljs.core.hash_map,map__11759):map__11759);var debug = cljs.core.get.call(null,map__11759__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__11757,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__11757,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__11760){
var p__11757 = cljs.core.first(arglist__11760);
var args = cljs.core.rest(arglist__11760);
return log__delegate(p__11757,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__11761){var map__11763 = p__11761;var map__11763__$1 = ((cljs.core.seq_QMARK_.call(null,map__11763))?cljs.core.apply.call(null,cljs.core.hash_map,map__11763):map__11763);var websocket_url = cljs.core.get.call(null,map__11763__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__11764,callback){var map__11766 = p__11764;var map__11766__$1 = ((cljs.core.seq_QMARK_.call(null,map__11766))?cljs.core.apply.call(null,cljs.core.hash_map,map__11766):map__11766);var msg = map__11766__$1;var dependency_file = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__11766,map__11766__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__11766,map__11766__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__11767,p__11768){var map__11771 = p__11767;var map__11771__$1 = ((cljs.core.seq_QMARK_.call(null,map__11771))?cljs.core.apply.call(null,cljs.core.hash_map,map__11771):map__11771);var opts = map__11771__$1;var url_rewriter = cljs.core.get.call(null,map__11771__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__11772 = p__11768;var map__11772__$1 = ((cljs.core.seq_QMARK_.call(null,map__11772))?cljs.core.apply.call(null,cljs.core.hash_map,map__11772):map__11772);var d = map__11772__$1;var file = cljs.core.get.call(null,map__11772__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__11773,p__11774){var map__11816 = p__11773;var map__11816__$1 = ((cljs.core.seq_QMARK_.call(null,map__11816))?cljs.core.apply.call(null,cljs.core.hash_map,map__11816):map__11816);var opts = map__11816__$1;var on_jsload = cljs.core.get.call(null,map__11816__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__11816__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__11817 = p__11774;var map__11817__$1 = ((cljs.core.seq_QMARK_.call(null,map__11817))?cljs.core.apply.call(null,cljs.core.hash_map,map__11817):map__11817);var files = cljs.core.get.call(null,map__11817__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__6622__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto__,map__11816,map__11816__$1,opts,on_jsload,before_jsload,map__11817,map__11817__$1,files){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto__,map__11816,map__11816__$1,opts,on_jsload,before_jsload,map__11817,map__11817__$1,files){
return (function (state_11840){var state_val_11841 = (state_11840[(1)]);if((state_val_11841 === (6)))
{var inst_11822 = (state_11840[(7)]);var inst_11831 = (state_11840[(2)]);var inst_11832 = cljs.core.PersistentVector.EMPTY_NODE;var inst_11833 = [inst_11822];var inst_11834 = (new cljs.core.PersistentVector(null,1,(5),inst_11832,inst_11833,null));var inst_11835 = cljs.core.apply.call(null,on_jsload,inst_11834);var state_11840__$1 = (function (){var statearr_11842 = state_11840;(statearr_11842[(8)] = inst_11831);
return statearr_11842;
})();var statearr_11843_11857 = state_11840__$1;(statearr_11843_11857[(2)] = inst_11835);
(statearr_11843_11857[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11841 === (5)))
{var inst_11838 = (state_11840[(2)]);var state_11840__$1 = state_11840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11840__$1,inst_11838);
} else
{if((state_val_11841 === (4)))
{var state_11840__$1 = state_11840;var statearr_11844_11858 = state_11840__$1;(statearr_11844_11858[(2)] = null);
(statearr_11844_11858[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11841 === (3)))
{var inst_11822 = (state_11840[(7)]);var inst_11825 = console.debug("Figwheel: loaded these files");var inst_11826 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_11822);var inst_11827 = cljs.core.prn_str.call(null,inst_11826);var inst_11828 = console.log(inst_11827);var inst_11829 = cljs.core.async.timeout.call(null,(10));var state_11840__$1 = (function (){var statearr_11845 = state_11840;(statearr_11845[(9)] = inst_11825);
(statearr_11845[(10)] = inst_11828);
return statearr_11845;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11840__$1,(6),inst_11829);
} else
{if((state_val_11841 === (2)))
{var inst_11822 = (state_11840[(7)]);var inst_11822__$1 = (state_11840[(2)]);var inst_11823 = cljs.core.not_empty.call(null,inst_11822__$1);var state_11840__$1 = (function (){var statearr_11846 = state_11840;(statearr_11846[(7)] = inst_11822__$1);
return statearr_11846;
})();if(cljs.core.truth_(inst_11823))
{var statearr_11847_11859 = state_11840__$1;(statearr_11847_11859[(1)] = (3));
} else
{var statearr_11848_11860 = state_11840__$1;(statearr_11848_11860[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11841 === (1)))
{var inst_11818 = before_jsload.call(null,files);var inst_11819 = figwheel.client.add_request_urls.call(null,opts,files);var inst_11820 = figwheel.client.load_all_js_files.call(null,inst_11819);var state_11840__$1 = (function (){var statearr_11849 = state_11840;(statearr_11849[(11)] = inst_11818);
return statearr_11849;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11840__$1,(2),inst_11820);
} else
{return null;
}
}
}
}
}
}
});})(c__6622__auto__,map__11816,map__11816__$1,opts,on_jsload,before_jsload,map__11817,map__11817__$1,files))
;return ((function (switch__6557__auto__,c__6622__auto__,map__11816,map__11816__$1,opts,on_jsload,before_jsload,map__11817,map__11817__$1,files){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_11853 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11853[(0)] = state_machine__6558__auto__);
(statearr_11853[(1)] = (1));
return statearr_11853;
});
var state_machine__6558__auto____1 = (function (state_11840){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_11840);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e11854){if((e11854 instanceof Object))
{var ex__6561__auto__ = e11854;var statearr_11855_11861 = state_11840;(statearr_11855_11861[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11840);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11854;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11862 = state_11840;
state_11840 = G__11862;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_11840){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_11840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto__,map__11816,map__11816__$1,opts,on_jsload,before_jsload,map__11817,map__11817__$1,files))
})();var state__6624__auto__ = (function (){var statearr_11856 = f__6623__auto__.call(null);(statearr_11856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto__);
return statearr_11856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto__,map__11816,map__11816__$1,opts,on_jsload,before_jsload,map__11817,map__11817__$1,files))
);
return c__6622__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__11863,link_href){var map__11865 = p__11863;var map__11865__$1 = ((cljs.core.seq_QMARK_.call(null,map__11865))?cljs.core.apply.call(null,cljs.core.hash_map,map__11865):map__11865);var request_url = cljs.core.get.call(null,map__11865__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__11865__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__6622__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto__,parent){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto__,parent){
return (function (state_11886){var state_val_11887 = (state_11886[(1)]);if((state_val_11887 === (2)))
{var inst_11883 = (state_11886[(2)]);var inst_11884 = parent.removeChild(orig_link);var state_11886__$1 = (function (){var statearr_11888 = state_11886;(statearr_11888[(7)] = inst_11883);
return statearr_11888;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11886__$1,inst_11884);
} else
{if((state_val_11887 === (1)))
{var inst_11881 = cljs.core.async.timeout.call(null,(200));var state_11886__$1 = state_11886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11886__$1,(2),inst_11881);
} else
{return null;
}
}
});})(c__6622__auto__,parent))
;return ((function (switch__6557__auto__,c__6622__auto__,parent){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_11892 = [null,null,null,null,null,null,null,null];(statearr_11892[(0)] = state_machine__6558__auto__);
(statearr_11892[(1)] = (1));
return statearr_11892;
});
var state_machine__6558__auto____1 = (function (state_11886){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_11886);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e11893){if((e11893 instanceof Object))
{var ex__6561__auto__ = e11893;var statearr_11894_11896 = state_11886;(statearr_11894_11896[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11886);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11893;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11897 = state_11886;
state_11886 = G__11897;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_11886){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_11886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto__,parent))
})();var state__6624__auto__ = (function (){var statearr_11895 = f__6623__auto__.call(null);(statearr_11895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto__);
return statearr_11895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto__,parent))
);
return c__6622__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__11898){var map__11900 = p__11898;var map__11900__$1 = ((cljs.core.seq_QMARK_.call(null,map__11900))?cljs.core.apply.call(null,cljs.core.hash_map,map__11900):map__11900);var f_data = map__11900__$1;var request_url = cljs.core.get.call(null,map__11900__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__11900__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__11901,files_msg){var map__11923 = p__11901;var map__11923__$1 = ((cljs.core.seq_QMARK_.call(null,map__11923))?cljs.core.apply.call(null,cljs.core.hash_map,map__11923):map__11923);var opts = map__11923__$1;var on_cssload = cljs.core.get.call(null,map__11923__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__11924_11944 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__11925_11945 = null;var count__11926_11946 = (0);var i__11927_11947 = (0);while(true){
if((i__11927_11947 < count__11926_11946))
{var f_11948 = cljs.core._nth.call(null,chunk__11925_11945,i__11927_11947);figwheel.client.reload_css_file.call(null,f_11948);
{
var G__11949 = seq__11924_11944;
var G__11950 = chunk__11925_11945;
var G__11951 = count__11926_11946;
var G__11952 = (i__11927_11947 + (1));
seq__11924_11944 = G__11949;
chunk__11925_11945 = G__11950;
count__11926_11946 = G__11951;
i__11927_11947 = G__11952;
continue;
}
} else
{var temp__4126__auto___11953 = cljs.core.seq.call(null,seq__11924_11944);if(temp__4126__auto___11953)
{var seq__11924_11954__$1 = temp__4126__auto___11953;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11924_11954__$1))
{var c__4408__auto___11955 = cljs.core.chunk_first.call(null,seq__11924_11954__$1);{
var G__11956 = cljs.core.chunk_rest.call(null,seq__11924_11954__$1);
var G__11957 = c__4408__auto___11955;
var G__11958 = cljs.core.count.call(null,c__4408__auto___11955);
var G__11959 = (0);
seq__11924_11944 = G__11956;
chunk__11925_11945 = G__11957;
count__11926_11946 = G__11958;
i__11927_11947 = G__11959;
continue;
}
} else
{var f_11960 = cljs.core.first.call(null,seq__11924_11954__$1);figwheel.client.reload_css_file.call(null,f_11960);
{
var G__11961 = cljs.core.next.call(null,seq__11924_11954__$1);
var G__11962 = null;
var G__11963 = (0);
var G__11964 = (0);
seq__11924_11944 = G__11961;
chunk__11925_11945 = G__11962;
count__11926_11946 = G__11963;
i__11927_11947 = G__11964;
continue;
}
}
} else
{}
}
break;
}
var c__6622__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6622__auto__,map__11923,map__11923__$1,opts,on_cssload){
return (function (){var f__6623__auto__ = (function (){var switch__6557__auto__ = ((function (c__6622__auto__,map__11923,map__11923__$1,opts,on_cssload){
return (function (state_11934){var state_val_11935 = (state_11934[(1)]);if((state_val_11935 === (2)))
{var inst_11930 = (state_11934[(2)]);var inst_11931 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_11932 = on_cssload.call(null,inst_11931);var state_11934__$1 = (function (){var statearr_11936 = state_11934;(statearr_11936[(7)] = inst_11930);
return statearr_11936;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11934__$1,inst_11932);
} else
{if((state_val_11935 === (1)))
{var inst_11928 = cljs.core.async.timeout.call(null,(100));var state_11934__$1 = state_11934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11934__$1,(2),inst_11928);
} else
{return null;
}
}
});})(c__6622__auto__,map__11923,map__11923__$1,opts,on_cssload))
;return ((function (switch__6557__auto__,c__6622__auto__,map__11923,map__11923__$1,opts,on_cssload){
return (function() {
var state_machine__6558__auto__ = null;
var state_machine__6558__auto____0 = (function (){var statearr_11940 = [null,null,null,null,null,null,null,null];(statearr_11940[(0)] = state_machine__6558__auto__);
(statearr_11940[(1)] = (1));
return statearr_11940;
});
var state_machine__6558__auto____1 = (function (state_11934){while(true){
var ret_value__6559__auto__ = (function (){try{while(true){
var result__6560__auto__ = switch__6557__auto__.call(null,state_11934);if(cljs.core.keyword_identical_QMARK_.call(null,result__6560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6560__auto__;
}
break;
}
}catch (e11941){if((e11941 instanceof Object))
{var ex__6561__auto__ = e11941;var statearr_11942_11965 = state_11934;(statearr_11942_11965[(5)] = ex__6561__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11934);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11941;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11966 = state_11934;
state_11934 = G__11966;
continue;
}
} else
{return ret_value__6559__auto__;
}
break;
}
});
state_machine__6558__auto__ = function(state_11934){
switch(arguments.length){
case 0:
return state_machine__6558__auto____0.call(this);
case 1:
return state_machine__6558__auto____1.call(this,state_11934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6558__auto____0;
state_machine__6558__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6558__auto____1;
return state_machine__6558__auto__;
})()
;})(switch__6557__auto__,c__6622__auto__,map__11923,map__11923__$1,opts,on_cssload))
})();var state__6624__auto__ = (function (){var statearr_11943 = f__6623__auto__.call(null);(statearr_11943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6622__auto__);
return statearr_11943;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6624__auto__);
});})(c__6622__auto__,map__11923,map__11923__$1,opts,on_cssload))
);
return c__6622__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__11967){var map__11972 = p__11967;var map__11972__$1 = ((cljs.core.seq_QMARK_.call(null,map__11972))?cljs.core.apply.call(null,cljs.core.hash_map,map__11972):map__11972);var opts = map__11972__$1;var on_compile_fail = cljs.core.get.call(null,map__11972__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__11972__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__11972__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__11972__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__11972,map__11972__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__11973 = cljs.core._EQ_;var expr__11974 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__11973.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__11974)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__11973.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__11974)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__11973.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__11974)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__11972,map__11972__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__11972,map__11972__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__11972,map__11972__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__11972,map__11972__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__11972,map__11972__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__11972,map__11972__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__11972,map__11972__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__11972,map__11972__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__11972,map__11972__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj11979 = {"detail":url};return obj11979;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__11980){var map__11982 = p__11980;var map__11982__$1 = ((cljs.core.seq_QMARK_.call(null,map__11982))?cljs.core.apply.call(null,cljs.core.hash_map,map__11982):map__11982);var class$ = cljs.core.get.call(null,map__11982__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__11982__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__11983){var map__11989 = p__11983;var map__11989__$1 = ((cljs.core.seq_QMARK_.call(null,map__11989))?cljs.core.apply.call(null,cljs.core.hash_map,map__11989):map__11989);var ed = map__11989__$1;var exception_data = cljs.core.get.call(null,map__11989__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__11989__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__11990_11994 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__11991_11995 = null;var count__11992_11996 = (0);var i__11993_11997 = (0);while(true){
if((i__11993_11997 < count__11992_11996))
{var msg_11998 = cljs.core._nth.call(null,chunk__11991_11995,i__11993_11997);console.log(msg_11998);
{
var G__11999 = seq__11990_11994;
var G__12000 = chunk__11991_11995;
var G__12001 = count__11992_11996;
var G__12002 = (i__11993_11997 + (1));
seq__11990_11994 = G__11999;
chunk__11991_11995 = G__12000;
count__11992_11996 = G__12001;
i__11993_11997 = G__12002;
continue;
}
} else
{var temp__4126__auto___12003 = cljs.core.seq.call(null,seq__11990_11994);if(temp__4126__auto___12003)
{var seq__11990_12004__$1 = temp__4126__auto___12003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11990_12004__$1))
{var c__4408__auto___12005 = cljs.core.chunk_first.call(null,seq__11990_12004__$1);{
var G__12006 = cljs.core.chunk_rest.call(null,seq__11990_12004__$1);
var G__12007 = c__4408__auto___12005;
var G__12008 = cljs.core.count.call(null,c__4408__auto___12005);
var G__12009 = (0);
seq__11990_11994 = G__12006;
chunk__11991_11995 = G__12007;
count__11992_11996 = G__12008;
i__11993_11997 = G__12009;
continue;
}
} else
{var msg_12010 = cljs.core.first.call(null,seq__11990_12004__$1);console.log(msg_12010);
{
var G__12011 = cljs.core.next.call(null,seq__11990_12004__$1);
var G__12012 = null;
var G__12013 = (0);
var G__12014 = (0);
seq__11990_11994 = G__12011;
chunk__11991_11995 = G__12012;
count__11992_11996 = G__12013;
i__11993_11997 = G__12014;
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
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__12015){var map__12017 = p__12015;var map__12017__$1 = ((cljs.core.seq_QMARK_.call(null,map__12017))?cljs.core.apply.call(null,cljs.core.hash_map,map__12017):map__12017);var opts = map__12017__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__12015 = null;if (arguments.length > 0) {
  p__12015 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__12015);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__12018){
var p__12015 = cljs.core.seq(arglist__12018);
return watch_and_reload__delegate(p__12015);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map