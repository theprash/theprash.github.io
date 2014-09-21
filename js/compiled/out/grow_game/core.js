// Compiled by ClojureScript 0.0-2197
goog.provide('grow_game.core');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('goog.Timer');
goog.require('grow_game.draw_canvas');
goog.require('goog.dom');
goog.require('figwheel.client');
goog.require('hiccups.runtime');
goog.require('grow_game.draw_canvas');
goog.require('hiccups.runtime');
goog.require('clojure.browser.repl');
goog.require('goog.events');
goog.require('garden.core');
cljs.core.enable_console_print_BANG_.call(null);
grow_game.core.empty_colour = "#333333";
grow_game.core.cell_types = new cljs.core.PersistentArrayMap(null, 5, ["cell-red",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-count","show-count",693322161),true,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),"#BA3D15"], null)], null),"cell-blue",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-count","show-count",693322161),true,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),"#118C95"], null)], null),"cell-yellow",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-count","show-count",693322161),true,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),"#C9AD40"], null)], null),"cell-empty",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-count","show-count",693322161),false,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),grow_game.core.empty_colour], null)], null),"cell-wall",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-count","show-count",693322161),false,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),"#000000",new cljs.core.Keyword(null,"border-color","border-color",1305991668),"#000000"], null)], null)], null);
grow_game.core.all_cells = cljs.core.atom.call(null,null);
grow_game.core.canvas = cljs.core.atom.call(null,null);
grow_game.core.cell_vecs_by_class = cljs.core.atom.call(null,cljs.core.zipmap.call(null,cljs.core.keys.call(null,grow_game.core.cell_types),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)));
grow_game.core.grow_queue = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
grow_game.core.timer = cljs.core.atom.call(null,(new goog.Timer()));
grow_game.core.chart_div = cljs.core.atom.call(null,null);
grow_game.core.current_speed_idx = cljs.core.atom.call(null,0);
grow_game.core.speed_label_div = cljs.core.atom.call(null,null);
grow_game.core.clicks_remaining = cljs.core.atom.call(null,null);
grow_game.core.clicks_remaining_div = cljs.core.atom.call(null,null);
grow_game.core.speeds = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"1.0x",new cljs.core.Keyword(null,"interval","interval",1584322615),500], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"1.5x",new cljs.core.Keyword(null,"interval","interval",1584322615),(500 / 1.5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"2.0x",new cljs.core.Keyword(null,"interval","interval",1584322615),(500 / 2.0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"3.0x",new cljs.core.Keyword(null,"interval","interval",1584322615),(500 / 3.0)], null)], null);
grow_game.core.set_speed_BANG_ = (function set_speed_BANG_(speed_idx){var temp__4090__auto__ = cljs.core.get.call(null,grow_game.core.speeds,speed_idx);if(cljs.core.truth_(temp__4090__auto__))
{var new_speed = temp__4090__auto__;cljs.core.reset_BANG_.call(null,grow_game.core.current_speed_idx,speed_idx);
cljs.core.deref.call(null,grow_game.core.timer).setInterval(new_speed.call(null,new cljs.core.Keyword(null,"interval","interval",1584322615)));
return cljs.core.deref.call(null,grow_game.core.speed_label_div).innerHTML = [cljs.core.str(new_speed.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))].join('');
} else
{return null;
}
});
grow_game.core.change_speed_BANG_ = (function change_speed_BANG_(change_fn){return grow_game.core.set_speed_BANG_.call(null,change_fn.call(null,cljs.core.deref.call(null,grow_game.core.current_speed_idx)));
});
grow_game.core.add_to_grow_queue_BANG_ = (function add_to_grow_queue_BANG_(cell_vec){return cljs.core.swap_BANG_.call(null,grow_game.core.grow_queue,(function (p1__13994_SHARP_){return cljs.core.conj.call(null,p1__13994_SHARP_,cell_vec);
}));
});
grow_game.core.clear_grow_queue_BANG_ = (function clear_grow_queue_BANG_(){return cljs.core.reset_BANG_.call(null,grow_game.core.grow_queue,cljs.core.PersistentHashSet.EMPTY);
});
grow_game.core.grid_rows = 60;
grow_game.core.grid_cols = 60;
grow_game.core.total_cells = (grow_game.core.grid_rows * grow_game.core.grid_cols);
grow_game.core.chart_width = 200;
grow_game.core.count_cell_class_QMARK_ = (function count_cell_class_QMARK_(cell_class){return grow_game.core.cell_types.call(null,cell_class).call(null,new cljs.core.Keyword(null,"show-count","show-count",693322161));
});
grow_game.core.page_body = [cljs.core.str("<canvas height=\"600\" id=\"canvas-grid\" width=\"600\"></canvas>"),cljs.core.str((function (){var attrs13997 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#chart","div#chart",1711439070)], null),cljs.core.map.call(null,(function (cell_class){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("div#"),cljs.core.str(cell_class),cljs.core.str("-count"),cljs.core.str("."),cljs.core.str("cell-count")].join(''))], null);
}),cljs.core.filter.call(null,grow_game.core.count_cell_class_QMARK_,cljs.core.keys.call(null,grow_game.core.cell_types))));if(cljs.core.map_QMARK_.call(null,attrs13997))
{return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"game-info",new cljs.core.Keyword(null,"class","class",1108647146),null], null),attrs13997))),cljs.core.str(">"),cljs.core.str("<div id=\"speed\"><div>Speed (Left and Right arrow keys)</div><button id=\"decrease-speed-button\">-</button><div id=\"speed-label\"></div><button id=\"increase-speed-button\">+</button></div>"),cljs.core.str("<div id=\"clicks-remaining\"></div>"),cljs.core.str("<div><button id=\"restart-button\">Restart (R)</button></div>"),cljs.core.str("</div>")].join('');
} else
{return [cljs.core.str("<div id=\"game-info\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs13997)),cljs.core.str("<div id=\"speed\"><div>Speed (Left and Right arrow keys)</div><button id=\"decrease-speed-button\">-</button><div id=\"speed-label\"></div><button id=\"increase-speed-button\">+</button></div>"),cljs.core.str("<div id=\"clicks-remaining\"></div>"),cljs.core.str("<div><button id=\"restart-button\">Restart (R)</button></div>"),cljs.core.str("</div>")].join('');
}
})())].join('');
grow_game.core.get_cell_class = (function get_cell_class(cell_vec){var temp__4092__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (kv){return cljs.core.get.call(null,cljs.core.val.call(null,kv),cell_vec);
}),cljs.core.deref.call(null,grow_game.core.cell_vecs_by_class)));if(cljs.core.truth_(temp__4092__auto__))
{var kv = temp__4092__auto__;return cljs.core.key.call(null,kv);
} else
{return null;
}
});
grow_game.core.page_css = (function page_css(){return cljs.core.apply.call(null,garden.core.css,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),"#F1F2C0",new cljs.core.Keyword(null,"font-family","font-family",1122436628),"Helvetica"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#game-info","div#game-info",3486912425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",4502531971),"10px",new cljs.core.Keyword(null,"display","display",2685668404),"inline-block",new cljs.core.Keyword(null,"width","width",1127031096),"200px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#game-info>*","div#game-info>*",2457855381),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clear","clear",1108650431),"left",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",3099939484),"20px",new cljs.core.Keyword(null,"overflow","overflow",1543546740),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#chart","div#chart",1711439070),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",1127031096),[cljs.core.str(grow_game.core.chart_width),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"background-color","background-color",1619226998),grow_game.core.empty_colour,new cljs.core.Keyword(null,"border-style","border-style",1320929346),"solid",new cljs.core.Keyword(null,"border-width","border-width",1324275799),"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#speed>*","div#speed>*",2877459379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",1111430606),"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#about","div#about",1709426829),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1108650431),"left"], null)], null),cljs.core.map.call(null,(function (cell_class){var div_id = [cljs.core.str(cljs.core.key.call(null,cell_class)),cljs.core.str("-count")].join('');return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("div#"),cljs.core.str(div_id)].join('')),cljs.core.merge.call(null,cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cell_class)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",1619226998)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"white"], null))], null);
}),cljs.core.filter.call(null,(function (p1__14010_SHARP_){return grow_game.core.count_cell_class_QMARK_.call(null,cljs.core.key.call(null,p1__14010_SHARP_));
}),grow_game.core.cell_types)));
});
grow_game.core.set_page_style_BANG_ = (function set_page_style_BANG_(css_text){return cljs.core.first.call(null,cljs.core.array_seq.call(null,document.head.getElementsByTagName("style"))).innerHTML = css_text;
});
grow_game.core.set_cell_BANG_ = (function set_cell_BANG_(cell_vec,class_name){var temp__4090__auto__ = cljs.core.deref.call(null,grow_game.core.all_cells).call(null,cell_vec);if(cljs.core.truth_(temp__4090__auto__))
{var cell = temp__4090__auto__;var old_class_name = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(cell);cljs.core.swap_BANG_.call(null,grow_game.core.all_cells,((function (old_class_name,cell,temp__4090__auto__){
return (function (x){return cljs.core.assoc_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_vec,new cljs.core.Keyword(null,"class","class",1108647146)], null),class_name);
});})(old_class_name,cell,temp__4090__auto__))
);
if(cljs.core.not_EQ_.call(null,old_class_name,""))
{cljs.core.swap_BANG_.call(null,grow_game.core.cell_vecs_by_class,((function (old_class_name,cell,temp__4090__auto__){
return (function (x){return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_class_name], null),((function (old_class_name,cell,temp__4090__auto__){
return (function (cell_vecs){return cljs.core.disj.call(null,cell_vecs,cell_vec);
});})(old_class_name,cell,temp__4090__auto__))
);
});})(old_class_name,cell,temp__4090__auto__))
);
} else
{}
return cljs.core.swap_BANG_.call(null,grow_game.core.cell_vecs_by_class,((function (old_class_name,cell,temp__4090__auto__){
return (function (x){return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name], null),((function (old_class_name,cell,temp__4090__auto__){
return (function (cell_vecs){return cljs.core.conj.call(null,cell_vecs,cell_vec);
});})(old_class_name,cell,temp__4090__auto__))
);
});})(old_class_name,cell,temp__4090__auto__))
);
} else
{return null;
}
});
grow_game.core.set_cell_and_grow_BANG_ = (function set_cell_and_grow_BANG_(cell_vec,class_name){grow_game.core.set_cell_BANG_.call(null,cell_vec,class_name);
return grow_game.core.add_to_grow_queue_BANG_.call(null,cell_vec);
});
grow_game.core.id__GT_vector = (function id__GT_vector(id){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.reader.read_string,clojure.string.split.call(null,id,/-/)));
});
grow_game.core.adjacent_empty_vecs = (function adjacent_empty_vecs(cell_vec,cell_class){var adjacent_vecs = (function (){var iter__8597__auto__ = (function iter__14016(s__14017){return (new cljs.core.LazySeq(null,(function (){var s__14017__$1 = s__14017;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14017__$1);if(temp__4092__auto__)
{var s__14017__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14017__$2))
{var c__8595__auto__ = cljs.core.chunk_first.call(null,s__14017__$2);var size__8596__auto__ = cljs.core.count.call(null,c__8595__auto__);var b__14019 = cljs.core.chunk_buffer.call(null,size__8596__auto__);if((function (){var i__14018 = 0;while(true){
if((i__14018 < size__8596__auto__))
{var rel = cljs.core._nth.call(null,c__8595__auto__,i__14018);cljs.core.chunk_append.call(null,b__14019,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,cell_vec,rel)));
{
var G__14020 = (i__14018 + 1);
i__14018 = G__14020;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14019),iter__14016.call(null,cljs.core.chunk_rest.call(null,s__14017__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14019),null);
}
} else
{var rel = cljs.core.first.call(null,s__14017__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,cell_vec,rel)),iter__14016.call(null,cljs.core.rest.call(null,s__14017__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8597__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null)], null));
})();var cell_empty_QMARK_ = ((function (adjacent_vecs){
return (function (p1__14011_SHARP_){return cljs.core.deref.call(null,grow_game.core.cell_vecs_by_class).call(null,"cell-empty").call(null,p1__14011_SHARP_);
});})(adjacent_vecs))
;return cljs.core.filter.call(null,cell_empty_QMARK_,adjacent_vecs);
});
grow_game.core.fill_adjacent_cells_BANG_ = (function fill_adjacent_cells_BANG_(cell_vec,cell_class){var seq__14025 = cljs.core.seq.call(null,grow_game.core.adjacent_empty_vecs.call(null,cell_vec,cell_class));var chunk__14026 = null;var count__14027 = 0;var i__14028 = 0;while(true){
if((i__14028 < count__14027))
{var cell_vec__$1 = cljs.core._nth.call(null,chunk__14026,i__14028);grow_game.core.set_cell_and_grow_BANG_.call(null,cell_vec__$1,cell_class);
{
var G__14029 = seq__14025;
var G__14030 = chunk__14026;
var G__14031 = count__14027;
var G__14032 = (i__14028 + 1);
seq__14025 = G__14029;
chunk__14026 = G__14030;
count__14027 = G__14031;
i__14028 = G__14032;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14025);if(temp__4092__auto__)
{var seq__14025__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14025__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__14025__$1);{
var G__14033 = cljs.core.chunk_rest.call(null,seq__14025__$1);
var G__14034 = c__8628__auto__;
var G__14035 = cljs.core.count.call(null,c__8628__auto__);
var G__14036 = 0;
seq__14025 = G__14033;
chunk__14026 = G__14034;
count__14027 = G__14035;
i__14028 = G__14036;
continue;
}
} else
{var cell_vec__$1 = cljs.core.first.call(null,seq__14025__$1);grow_game.core.set_cell_and_grow_BANG_.call(null,cell_vec__$1,cell_class);
{
var G__14037 = cljs.core.next.call(null,seq__14025__$1);
var G__14038 = null;
var G__14039 = 0;
var G__14040 = 0;
seq__14025 = G__14037;
chunk__14026 = G__14038;
count__14027 = G__14039;
i__14028 = G__14040;
continue;
}
}
} else
{return null;
}
}
break;
}
});
grow_game.core.grow_cells_BANG_ = (function grow_cells_BANG_(cell_vecs){grow_game.core.clear_grow_queue_BANG_.call(null);
var seq__14045 = cljs.core.seq.call(null,cell_vecs);var chunk__14046 = null;var count__14047 = 0;var i__14048 = 0;while(true){
if((i__14048 < count__14047))
{var cell_vec = cljs.core._nth.call(null,chunk__14046,i__14048);var cell_class_14049 = grow_game.core.get_cell_class.call(null,cell_vec);if(cljs.core.not_EQ_.call(null,cell_class_14049,"cell-empty"))
{grow_game.core.fill_adjacent_cells_BANG_.call(null,cell_vec,cell_class_14049);
} else
{}
{
var G__14050 = seq__14045;
var G__14051 = chunk__14046;
var G__14052 = count__14047;
var G__14053 = (i__14048 + 1);
seq__14045 = G__14050;
chunk__14046 = G__14051;
count__14047 = G__14052;
i__14048 = G__14053;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14045);if(temp__4092__auto__)
{var seq__14045__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14045__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__14045__$1);{
var G__14054 = cljs.core.chunk_rest.call(null,seq__14045__$1);
var G__14055 = c__8628__auto__;
var G__14056 = cljs.core.count.call(null,c__8628__auto__);
var G__14057 = 0;
seq__14045 = G__14054;
chunk__14046 = G__14055;
count__14047 = G__14056;
i__14048 = G__14057;
continue;
}
} else
{var cell_vec = cljs.core.first.call(null,seq__14045__$1);var cell_class_14058 = grow_game.core.get_cell_class.call(null,cell_vec);if(cljs.core.not_EQ_.call(null,cell_class_14058,"cell-empty"))
{grow_game.core.fill_adjacent_cells_BANG_.call(null,cell_vec,cell_class_14058);
} else
{}
{
var G__14059 = cljs.core.next.call(null,seq__14045__$1);
var G__14060 = null;
var G__14061 = 0;
var G__14062 = 0;
seq__14045 = G__14059;
chunk__14046 = G__14060;
count__14047 = G__14061;
i__14048 = G__14062;
continue;
}
}
} else
{return null;
}
}
break;
}
});
grow_game.core.update_chart_BANG_ = (function update_chart_BANG_(){return cljs.core.deref.call(null,grow_game.core.chart_div).innerHTML = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (cell_class){var cell_count = cljs.core.count.call(null,cljs.core.deref.call(null,grow_game.core.cell_vecs_by_class).call(null,cell_class));var new_width = ((cell_count / grow_game.core.total_cells) * grow_game.core.chart_width);return [cljs.core.str(hiccups.runtime.render_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("div#"),cljs.core.str(cell_class),cljs.core.str("-count"),cljs.core.str("."),cljs.core.str("cell-count")].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("width:"),cljs.core.str(new_width),cljs.core.str("px")].join('')], null),cell_count], null)))].join('');
}),cljs.core.sort_by.call(null,(function (p1__14063_SHARP_){return (- cljs.core.count.call(null,cljs.core.deref.call(null,grow_game.core.cell_vecs_by_class).call(null,p1__14063_SHARP_)));
}),cljs.core.filter.call(null,grow_game.core.count_cell_class_QMARK_,cljs.core.keys.call(null,grow_game.core.cell_types)))));
});
grow_game.core.tick_BANG_ = (function tick_BANG_(){var start__8753__auto__ = (new Date()).getTime();var ret__8754__auto__ = (function (){var cell_vecs = cljs.core.deref.call(null,grow_game.core.grow_queue);grow_game.core.grow_cells_BANG_.call(null,cell_vecs);
return grow_game.draw_canvas.draw_frame_BANG_.call(null,((function (cell_vecs,start__8753__auto__){
return (function (){grow_game.draw_canvas.draw_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cells","cells",1108448963),cljs.core.deref.call(null,grow_game.core.all_cells)], null),cljs.core.deref.call(null,grow_game.core.canvas),grow_game.core.cell_types);
return grow_game.core.update_chart_BANG_.call(null);
});})(cell_vecs,start__8753__auto__))
);
})();cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str(((new Date()).getTime() - start__8753__auto__)),cljs.core.str(" msecs")].join(''));
return ret__8754__auto__;
});
grow_game.core.swap_clicks_remaining_BANG_ = (function swap_clicks_remaining_BANG_(swap_fn){cljs.core.swap_BANG_.call(null,grow_game.core.clicks_remaining,swap_fn);
return cljs.core.deref.call(null,grow_game.core.clicks_remaining_div).innerHTML = [cljs.core.str("Clicks remaining: "),cljs.core.str(cljs.core.deref.call(null,grow_game.core.clicks_remaining))].join('');
});
grow_game.core.set_cells_empty_BANG_ = (function set_cells_empty_BANG_(){var seq__14068 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,grow_game.core.all_cells)));var chunk__14069 = null;var count__14070 = 0;var i__14071 = 0;while(true){
if((i__14071 < count__14070))
{var cell_vec = cljs.core._nth.call(null,chunk__14069,i__14071);grow_game.core.set_cell_BANG_.call(null,cell_vec,"cell-empty");
{
var G__14072 = seq__14068;
var G__14073 = chunk__14069;
var G__14074 = count__14070;
var G__14075 = (i__14071 + 1);
seq__14068 = G__14072;
chunk__14069 = G__14073;
count__14070 = G__14074;
i__14071 = G__14075;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14068);if(temp__4092__auto__)
{var seq__14068__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14068__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__14068__$1);{
var G__14076 = cljs.core.chunk_rest.call(null,seq__14068__$1);
var G__14077 = c__8628__auto__;
var G__14078 = cljs.core.count.call(null,c__8628__auto__);
var G__14079 = 0;
seq__14068 = G__14076;
chunk__14069 = G__14077;
count__14070 = G__14078;
i__14071 = G__14079;
continue;
}
} else
{var cell_vec = cljs.core.first.call(null,seq__14068__$1);grow_game.core.set_cell_BANG_.call(null,cell_vec,"cell-empty");
{
var G__14080 = cljs.core.next.call(null,seq__14068__$1);
var G__14081 = null;
var G__14082 = 0;
var G__14083 = 0;
seq__14068 = G__14080;
chunk__14069 = G__14081;
count__14070 = G__14082;
i__14071 = G__14083;
continue;
}
}
} else
{return null;
}
}
break;
}
});
grow_game.core.get_all_cells = (function get_all_cells(){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8597__auto__ = (function iter__14090(s__14091){return (new cljs.core.LazySeq(null,(function (){var s__14091__$1 = s__14091;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14091__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var col = cljs.core.first.call(null,xs__4579__auto__);var iterys__8593__auto__ = ((function (s__14091__$1,col,xs__4579__auto__,temp__4092__auto__){
return (function iter__14092(s__14093){return (new cljs.core.LazySeq(null,((function (s__14091__$1,col,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__14093__$1 = s__14093;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14093__$1);if(temp__4092__auto____$1)
{var s__14093__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14093__$2))
{var c__8595__auto__ = cljs.core.chunk_first.call(null,s__14093__$2);var size__8596__auto__ = cljs.core.count.call(null,c__8595__auto__);var b__14095 = cljs.core.chunk_buffer.call(null,size__8596__auto__);if((function (){var i__14094 = 0;while(true){
if((i__14094 < size__8596__auto__))
{var row = cljs.core._nth.call(null,c__8595__auto__,i__14094);cljs.core.chunk_append.call(null,b__14095,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",3646034542),grow_game.core.element,new cljs.core.Keyword(null,"class","class",1108647146),null], null)], true, false));
{
var G__14096 = (i__14094 + 1);
i__14094 = G__14096;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14095),iter__14092.call(null,cljs.core.chunk_rest.call(null,s__14093__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14095),null);
}
} else
{var row = cljs.core.first.call(null,s__14093__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",3646034542),grow_game.core.element,new cljs.core.Keyword(null,"class","class",1108647146),null], null)], true, false),iter__14092.call(null,cljs.core.rest.call(null,s__14093__$2)));
}
} else
{return null;
}
break;
}
});})(s__14091__$1,col,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__14091__$1,col,xs__4579__auto__,temp__4092__auto__))
;var fs__8594__auto__ = cljs.core.seq.call(null,iterys__8593__auto__.call(null,cljs.core.range.call(null,grow_game.core.grid_rows)));if(fs__8594__auto__)
{return cljs.core.concat.call(null,fs__8594__auto__,iter__14090.call(null,cljs.core.rest.call(null,s__14091__$1)));
} else
{{
var G__14097 = cljs.core.rest.call(null,s__14091__$1);
s__14091__$1 = G__14097;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8597__auto__.call(null,cljs.core.range.call(null,grow_game.core.grid_cols));
})());
});
grow_game.core.set_canvas_click_BANG_ = (function set_canvas_click_BANG_(canvas){return canvas.addEventListener("mousedown",(function (e){var x = e.x;var y = e.y;var clicked_cell = cljs.core.map.call(null,((function (x,y){
return (function (p1__14098_SHARP_){return (((p1__14098_SHARP_ / grow_game.draw_canvas.cell_size) | 0) - 1);
});})(x,y))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));if(cljs.core.truth_((function (){var and__7868__auto__ = cljs.core.deref.call(null,grow_game.core.cell_vecs_by_class).call(null,"cell-empty").call(null,clicked_cell);if(cljs.core.truth_(and__7868__auto__))
{return (0 < cljs.core.deref.call(null,grow_game.core.clicks_remaining));
} else
{return and__7868__auto__;
}
})()))
{grow_game.core.set_cell_and_grow_BANG_.call(null,clicked_cell,"cell-red");
return grow_game.core.swap_clicks_remaining_BANG_.call(null,cljs.core.dec);
} else
{return null;
}
}),false);
});
grow_game.core.start_timer = (function start_timer(){cljs.core.deref.call(null,grow_game.core.timer).start();
return goog.events.listen(cljs.core.deref.call(null,grow_game.core.timer),goog.Timer.TICK,grow_game.core.tick_BANG_);
});
grow_game.core.random_empty_vec = (function random_empty_vec(){return cljs.core.rand_nth.call(null,cljs.core.seq.call(null,cljs.core.deref.call(null,grow_game.core.cell_vecs_by_class).call(null,"cell-empty")));
});
grow_game.core.create_random_walls_BANG_ = (function create_random_walls_BANG_(){var seq__14128 = cljs.core.seq.call(null,cljs.core.take.call(null,10,cljs.core.shuffle.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,grow_game.core.all_cells)))));var chunk__14141 = null;var count__14142 = 0;var i__14143 = 0;while(true){
if((i__14143 < count__14142))
{var centre = cljs.core._nth.call(null,chunk__14141,i__14143);var seq__14144_14156 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null)], null));var chunk__14149_14157 = null;var count__14150_14158 = 0;var i__14151_14159 = 0;while(true){
if((i__14151_14159 < count__14150_14158))
{var directions_14160 = cljs.core._nth.call(null,chunk__14149_14157,i__14151_14159);var seq__14152_14161 = cljs.core.seq.call(null,cljs.core.range.call(null,10));var chunk__14153_14162 = null;var count__14154_14163 = 0;var i__14155_14164 = 0;while(true){
if((i__14155_14164 < count__14154_14163))
{var dist_14165 = cljs.core._nth.call(null,chunk__14153_14162,i__14155_14164);var cell_vec_14166 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__14152_14161,chunk__14153_14162,count__14154_14163,i__14155_14164,seq__14144_14156,chunk__14149_14157,count__14150_14158,i__14151_14159,seq__14128,chunk__14141,count__14142,i__14143,dist_14165,directions_14160,centre){
return (function (p1__14099_SHARP_){return (p1__14099_SHARP_ * dist_14165);
});})(seq__14152_14161,chunk__14153_14162,count__14154_14163,i__14155_14164,seq__14144_14156,chunk__14149_14157,count__14150_14158,i__14151_14159,seq__14128,chunk__14141,count__14142,i__14143,dist_14165,directions_14160,centre))
,directions_14160)));grow_game.core.set_cell_BANG_.call(null,cell_vec_14166,"cell-wall");
{
var G__14167 = seq__14152_14161;
var G__14168 = chunk__14153_14162;
var G__14169 = count__14154_14163;
var G__14170 = (i__14155_14164 + 1);
seq__14152_14161 = G__14167;
chunk__14153_14162 = G__14168;
count__14154_14163 = G__14169;
i__14155_14164 = G__14170;
continue;
}
} else
{var temp__4092__auto___14171 = cljs.core.seq.call(null,seq__14152_14161);if(temp__4092__auto___14171)
{var seq__14152_14172__$1 = temp__4092__auto___14171;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14152_14172__$1))
{var c__8628__auto___14173 = cljs.core.chunk_first.call(null,seq__14152_14172__$1);{
var G__14174 = cljs.core.chunk_rest.call(null,seq__14152_14172__$1);
var G__14175 = c__8628__auto___14173;
var G__14176 = cljs.core.count.call(null,c__8628__auto___14173);
var G__14177 = 0;
seq__14152_14161 = G__14174;
chunk__14153_14162 = G__14175;
count__14154_14163 = G__14176;
i__14155_14164 = G__14177;
continue;
}
} else
{var dist_14178 = cljs.core.first.call(null,seq__14152_14172__$1);var cell_vec_14179 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__14152_14161,chunk__14153_14162,count__14154_14163,i__14155_14164,seq__14144_14156,chunk__14149_14157,count__14150_14158,i__14151_14159,seq__14128,chunk__14141,count__14142,i__14143,dist_14178,seq__14152_14172__$1,temp__4092__auto___14171,directions_14160,centre){
return (function (p1__14099_SHARP_){return (p1__14099_SHARP_ * dist_14178);
});})(seq__14152_14161,chunk__14153_14162,count__14154_14163,i__14155_14164,seq__14144_14156,chunk__14149_14157,count__14150_14158,i__14151_14159,seq__14128,chunk__14141,count__14142,i__14143,dist_14178,seq__14152_14172__$1,temp__4092__auto___14171,directions_14160,centre))
,directions_14160)));grow_game.core.set_cell_BANG_.call(null,cell_vec_14179,"cell-wall");
{
var G__14180 = cljs.core.next.call(null,seq__14152_14172__$1);
var G__14181 = null;
var G__14182 = 0;
var G__14183 = 0;
seq__14152_14161 = G__14180;
chunk__14153_14162 = G__14181;
count__14154_14163 = G__14182;
i__14155_14164 = G__14183;
continue;
}
}
} else
{}
}
break;
}
{
var G__14184 = seq__14144_14156;
var G__14185 = chunk__14149_14157;
var G__14186 = count__14150_14158;
var G__14187 = (i__14151_14159 + 1);
seq__14144_14156 = G__14184;
chunk__14149_14157 = G__14185;
count__14150_14158 = G__14186;
i__14151_14159 = G__14187;
continue;
}
} else
{var temp__4092__auto___14188 = cljs.core.seq.call(null,seq__14144_14156);if(temp__4092__auto___14188)
{var seq__14144_14189__$1 = temp__4092__auto___14188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14144_14189__$1))
{var c__8628__auto___14190 = cljs.core.chunk_first.call(null,seq__14144_14189__$1);{
var G__14191 = cljs.core.chunk_rest.call(null,seq__14144_14189__$1);
var G__14192 = c__8628__auto___14190;
var G__14193 = cljs.core.count.call(null,c__8628__auto___14190);
var G__14194 = 0;
seq__14144_14156 = G__14191;
chunk__14149_14157 = G__14192;
count__14150_14158 = G__14193;
i__14151_14159 = G__14194;
continue;
}
} else
{var directions_14195 = cljs.core.first.call(null,seq__14144_14189__$1);var seq__14145_14196 = cljs.core.seq.call(null,cljs.core.range.call(null,10));var chunk__14146_14197 = null;var count__14147_14198 = 0;var i__14148_14199 = 0;while(true){
if((i__14148_14199 < count__14147_14198))
{var dist_14200 = cljs.core._nth.call(null,chunk__14146_14197,i__14148_14199);var cell_vec_14201 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__14145_14196,chunk__14146_14197,count__14147_14198,i__14148_14199,seq__14144_14156,chunk__14149_14157,count__14150_14158,i__14151_14159,seq__14128,chunk__14141,count__14142,i__14143,dist_14200,directions_14195,seq__14144_14189__$1,temp__4092__auto___14188,centre){
return (function (p1__14099_SHARP_){return (p1__14099_SHARP_ * dist_14200);
});})(seq__14145_14196,chunk__14146_14197,count__14147_14198,i__14148_14199,seq__14144_14156,chunk__14149_14157,count__14150_14158,i__14151_14159,seq__14128,chunk__14141,count__14142,i__14143,dist_14200,directions_14195,seq__14144_14189__$1,temp__4092__auto___14188,centre))
,directions_14195)));grow_game.core.set_cell_BANG_.call(null,cell_vec_14201,"cell-wall");
{
var G__14202 = seq__14145_14196;
var G__14203 = chunk__14146_14197;
var G__14204 = count__14147_14198;
var G__14205 = (i__14148_14199 + 1);
seq__14145_14196 = G__14202;
chunk__14146_14197 = G__14203;
count__14147_14198 = G__14204;
i__14148_14199 = G__14205;
continue;
}
} else
{var temp__4092__auto___14206__$1 = cljs.core.seq.call(null,seq__14145_14196);if(temp__4092__auto___14206__$1)
{var seq__14145_14207__$1 = temp__4092__auto___14206__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14145_14207__$1))
{var c__8628__auto___14208 = cljs.core.chunk_first.call(null,seq__14145_14207__$1);{
var G__14209 = cljs.core.chunk_rest.call(null,seq__14145_14207__$1);
var G__14210 = c__8628__auto___14208;
var G__14211 = cljs.core.count.call(null,c__8628__auto___14208);
var G__14212 = 0;
seq__14145_14196 = G__14209;
chunk__14146_14197 = G__14210;
count__14147_14198 = G__14211;
i__14148_14199 = G__14212;
continue;
}
} else
{var dist_14213 = cljs.core.first.call(null,seq__14145_14207__$1);var cell_vec_14214 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__14145_14196,chunk__14146_14197,count__14147_14198,i__14148_14199,seq__14144_14156,chunk__14149_14157,count__14150_14158,i__14151_14159,seq__14128,chunk__14141,count__14142,i__14143,dist_14213,seq__14145_14207__$1,temp__4092__auto___14206__$1,directions_14195,seq__14144_14189__$1,temp__4092__auto___14188,centre){
return (function (p1__14099_SHARP_){return (p1__14099_SHARP_ * dist_14213);
});})(seq__14145_14196,chunk__14146_14197,count__14147_14198,i__14148_14199,seq__14144_14156,chunk__14149_14157,count__14150_14158,i__14151_14159,seq__14128,chunk__14141,count__14142,i__14143,dist_14213,seq__14145_14207__$1,temp__4092__auto___14206__$1,directions_14195,seq__14144_14189__$1,temp__4092__auto___14188,centre))
,directions_14195)));grow_game.core.set_cell_BANG_.call(null,cell_vec_14214,"cell-wall");
{
var G__14215 = cljs.core.next.call(null,seq__14145_14207__$1);
var G__14216 = null;
var G__14217 = 0;
var G__14218 = 0;
seq__14145_14196 = G__14215;
chunk__14146_14197 = G__14216;
count__14147_14198 = G__14217;
i__14148_14199 = G__14218;
continue;
}
}
} else
{}
}
break;
}
{
var G__14219 = cljs.core.next.call(null,seq__14144_14189__$1);
var G__14220 = null;
var G__14221 = 0;
var G__14222 = 0;
seq__14144_14156 = G__14219;
chunk__14149_14157 = G__14220;
count__14150_14158 = G__14221;
i__14151_14159 = G__14222;
continue;
}
}
} else
{}
}
break;
}
{
var G__14223 = seq__14128;
var G__14224 = chunk__14141;
var G__14225 = count__14142;
var G__14226 = (i__14143 + 1);
seq__14128 = G__14223;
chunk__14141 = G__14224;
count__14142 = G__14225;
i__14143 = G__14226;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14128);if(temp__4092__auto__)
{var seq__14128__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14128__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__14128__$1);{
var G__14227 = cljs.core.chunk_rest.call(null,seq__14128__$1);
var G__14228 = c__8628__auto__;
var G__14229 = cljs.core.count.call(null,c__8628__auto__);
var G__14230 = 0;
seq__14128 = G__14227;
chunk__14141 = G__14228;
count__14142 = G__14229;
i__14143 = G__14230;
continue;
}
} else
{var centre = cljs.core.first.call(null,seq__14128__$1);var seq__14129_14231 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null)], null));var chunk__14134_14232 = null;var count__14135_14233 = 0;var i__14136_14234 = 0;while(true){
if((i__14136_14234 < count__14135_14233))
{var directions_14235 = cljs.core._nth.call(null,chunk__14134_14232,i__14136_14234);var seq__14137_14236 = cljs.core.seq.call(null,cljs.core.range.call(null,10));var chunk__14138_14237 = null;var count__14139_14238 = 0;var i__14140_14239 = 0;while(true){
if((i__14140_14239 < count__14139_14238))
{var dist_14240 = cljs.core._nth.call(null,chunk__14138_14237,i__14140_14239);var cell_vec_14241 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__14137_14236,chunk__14138_14237,count__14139_14238,i__14140_14239,seq__14129_14231,chunk__14134_14232,count__14135_14233,i__14136_14234,seq__14128,chunk__14141,count__14142,i__14143,dist_14240,directions_14235,centre,seq__14128__$1,temp__4092__auto__){
return (function (p1__14099_SHARP_){return (p1__14099_SHARP_ * dist_14240);
});})(seq__14137_14236,chunk__14138_14237,count__14139_14238,i__14140_14239,seq__14129_14231,chunk__14134_14232,count__14135_14233,i__14136_14234,seq__14128,chunk__14141,count__14142,i__14143,dist_14240,directions_14235,centre,seq__14128__$1,temp__4092__auto__))
,directions_14235)));grow_game.core.set_cell_BANG_.call(null,cell_vec_14241,"cell-wall");
{
var G__14242 = seq__14137_14236;
var G__14243 = chunk__14138_14237;
var G__14244 = count__14139_14238;
var G__14245 = (i__14140_14239 + 1);
seq__14137_14236 = G__14242;
chunk__14138_14237 = G__14243;
count__14139_14238 = G__14244;
i__14140_14239 = G__14245;
continue;
}
} else
{var temp__4092__auto___14246__$1 = cljs.core.seq.call(null,seq__14137_14236);if(temp__4092__auto___14246__$1)
{var seq__14137_14247__$1 = temp__4092__auto___14246__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14137_14247__$1))
{var c__8628__auto___14248 = cljs.core.chunk_first.call(null,seq__14137_14247__$1);{
var G__14249 = cljs.core.chunk_rest.call(null,seq__14137_14247__$1);
var G__14250 = c__8628__auto___14248;
var G__14251 = cljs.core.count.call(null,c__8628__auto___14248);
var G__14252 = 0;
seq__14137_14236 = G__14249;
chunk__14138_14237 = G__14250;
count__14139_14238 = G__14251;
i__14140_14239 = G__14252;
continue;
}
} else
{var dist_14253 = cljs.core.first.call(null,seq__14137_14247__$1);var cell_vec_14254 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__14137_14236,chunk__14138_14237,count__14139_14238,i__14140_14239,seq__14129_14231,chunk__14134_14232,count__14135_14233,i__14136_14234,seq__14128,chunk__14141,count__14142,i__14143,dist_14253,seq__14137_14247__$1,temp__4092__auto___14246__$1,directions_14235,centre,seq__14128__$1,temp__4092__auto__){
return (function (p1__14099_SHARP_){return (p1__14099_SHARP_ * dist_14253);
});})(seq__14137_14236,chunk__14138_14237,count__14139_14238,i__14140_14239,seq__14129_14231,chunk__14134_14232,count__14135_14233,i__14136_14234,seq__14128,chunk__14141,count__14142,i__14143,dist_14253,seq__14137_14247__$1,temp__4092__auto___14246__$1,directions_14235,centre,seq__14128__$1,temp__4092__auto__))
,directions_14235)));grow_game.core.set_cell_BANG_.call(null,cell_vec_14254,"cell-wall");
{
var G__14255 = cljs.core.next.call(null,seq__14137_14247__$1);
var G__14256 = null;
var G__14257 = 0;
var G__14258 = 0;
seq__14137_14236 = G__14255;
chunk__14138_14237 = G__14256;
count__14139_14238 = G__14257;
i__14140_14239 = G__14258;
continue;
}
}
} else
{}
}
break;
}
{
var G__14259 = seq__14129_14231;
var G__14260 = chunk__14134_14232;
var G__14261 = count__14135_14233;
var G__14262 = (i__14136_14234 + 1);
seq__14129_14231 = G__14259;
chunk__14134_14232 = G__14260;
count__14135_14233 = G__14261;
i__14136_14234 = G__14262;
continue;
}
} else
{var temp__4092__auto___14263__$1 = cljs.core.seq.call(null,seq__14129_14231);if(temp__4092__auto___14263__$1)
{var seq__14129_14264__$1 = temp__4092__auto___14263__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14129_14264__$1))
{var c__8628__auto___14265 = cljs.core.chunk_first.call(null,seq__14129_14264__$1);{
var G__14266 = cljs.core.chunk_rest.call(null,seq__14129_14264__$1);
var G__14267 = c__8628__auto___14265;
var G__14268 = cljs.core.count.call(null,c__8628__auto___14265);
var G__14269 = 0;
seq__14129_14231 = G__14266;
chunk__14134_14232 = G__14267;
count__14135_14233 = G__14268;
i__14136_14234 = G__14269;
continue;
}
} else
{var directions_14270 = cljs.core.first.call(null,seq__14129_14264__$1);var seq__14130_14271 = cljs.core.seq.call(null,cljs.core.range.call(null,10));var chunk__14131_14272 = null;var count__14132_14273 = 0;var i__14133_14274 = 0;while(true){
if((i__14133_14274 < count__14132_14273))
{var dist_14275 = cljs.core._nth.call(null,chunk__14131_14272,i__14133_14274);var cell_vec_14276 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__14130_14271,chunk__14131_14272,count__14132_14273,i__14133_14274,seq__14129_14231,chunk__14134_14232,count__14135_14233,i__14136_14234,seq__14128,chunk__14141,count__14142,i__14143,dist_14275,directions_14270,seq__14129_14264__$1,temp__4092__auto___14263__$1,centre,seq__14128__$1,temp__4092__auto__){
return (function (p1__14099_SHARP_){return (p1__14099_SHARP_ * dist_14275);
});})(seq__14130_14271,chunk__14131_14272,count__14132_14273,i__14133_14274,seq__14129_14231,chunk__14134_14232,count__14135_14233,i__14136_14234,seq__14128,chunk__14141,count__14142,i__14143,dist_14275,directions_14270,seq__14129_14264__$1,temp__4092__auto___14263__$1,centre,seq__14128__$1,temp__4092__auto__))
,directions_14270)));grow_game.core.set_cell_BANG_.call(null,cell_vec_14276,"cell-wall");
{
var G__14277 = seq__14130_14271;
var G__14278 = chunk__14131_14272;
var G__14279 = count__14132_14273;
var G__14280 = (i__14133_14274 + 1);
seq__14130_14271 = G__14277;
chunk__14131_14272 = G__14278;
count__14132_14273 = G__14279;
i__14133_14274 = G__14280;
continue;
}
} else
{var temp__4092__auto___14281__$2 = cljs.core.seq.call(null,seq__14130_14271);if(temp__4092__auto___14281__$2)
{var seq__14130_14282__$1 = temp__4092__auto___14281__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14130_14282__$1))
{var c__8628__auto___14283 = cljs.core.chunk_first.call(null,seq__14130_14282__$1);{
var G__14284 = cljs.core.chunk_rest.call(null,seq__14130_14282__$1);
var G__14285 = c__8628__auto___14283;
var G__14286 = cljs.core.count.call(null,c__8628__auto___14283);
var G__14287 = 0;
seq__14130_14271 = G__14284;
chunk__14131_14272 = G__14285;
count__14132_14273 = G__14286;
i__14133_14274 = G__14287;
continue;
}
} else
{var dist_14288 = cljs.core.first.call(null,seq__14130_14282__$1);var cell_vec_14289 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__14130_14271,chunk__14131_14272,count__14132_14273,i__14133_14274,seq__14129_14231,chunk__14134_14232,count__14135_14233,i__14136_14234,seq__14128,chunk__14141,count__14142,i__14143,dist_14288,seq__14130_14282__$1,temp__4092__auto___14281__$2,directions_14270,seq__14129_14264__$1,temp__4092__auto___14263__$1,centre,seq__14128__$1,temp__4092__auto__){
return (function (p1__14099_SHARP_){return (p1__14099_SHARP_ * dist_14288);
});})(seq__14130_14271,chunk__14131_14272,count__14132_14273,i__14133_14274,seq__14129_14231,chunk__14134_14232,count__14135_14233,i__14136_14234,seq__14128,chunk__14141,count__14142,i__14143,dist_14288,seq__14130_14282__$1,temp__4092__auto___14281__$2,directions_14270,seq__14129_14264__$1,temp__4092__auto___14263__$1,centre,seq__14128__$1,temp__4092__auto__))
,directions_14270)));grow_game.core.set_cell_BANG_.call(null,cell_vec_14289,"cell-wall");
{
var G__14290 = cljs.core.next.call(null,seq__14130_14282__$1);
var G__14291 = null;
var G__14292 = 0;
var G__14293 = 0;
seq__14130_14271 = G__14290;
chunk__14131_14272 = G__14291;
count__14132_14273 = G__14292;
i__14133_14274 = G__14293;
continue;
}
}
} else
{}
}
break;
}
{
var G__14294 = cljs.core.next.call(null,seq__14129_14264__$1);
var G__14295 = null;
var G__14296 = 0;
var G__14297 = 0;
seq__14129_14231 = G__14294;
chunk__14134_14232 = G__14295;
count__14135_14233 = G__14296;
i__14136_14234 = G__14297;
continue;
}
}
} else
{}
}
break;
}
{
var G__14298 = cljs.core.next.call(null,seq__14128__$1);
var G__14299 = null;
var G__14300 = 0;
var G__14301 = 0;
seq__14128 = G__14298;
chunk__14141 = G__14299;
count__14142 = G__14300;
i__14143 = G__14301;
continue;
}
}
} else
{return null;
}
}
break;
}
});
grow_game.core.start_game_BANG_ = (function start_game_BANG_(){grow_game.core.set_speed_BANG_.call(null,0);
grow_game.core.swap_clicks_remaining_BANG_.call(null,cljs.core.constantly.call(null,1));
grow_game.core.clear_grow_queue_BANG_.call(null);
grow_game.core.set_cells_empty_BANG_.call(null);
grow_game.core.create_random_walls_BANG_.call(null);
var seq__14306 = cljs.core.seq.call(null,cljs.core.take.call(null,4,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cell-blue","cell-yellow"], null))));var chunk__14307 = null;var count__14308 = 0;var i__14309 = 0;while(true){
if((i__14309 < count__14308))
{var cell_class = cljs.core._nth.call(null,chunk__14307,i__14309);grow_game.core.set_cell_and_grow_BANG_.call(null,grow_game.core.random_empty_vec.call(null),cell_class);
{
var G__14310 = seq__14306;
var G__14311 = chunk__14307;
var G__14312 = count__14308;
var G__14313 = (i__14309 + 1);
seq__14306 = G__14310;
chunk__14307 = G__14311;
count__14308 = G__14312;
i__14309 = G__14313;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14306);if(temp__4092__auto__)
{var seq__14306__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14306__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__14306__$1);{
var G__14314 = cljs.core.chunk_rest.call(null,seq__14306__$1);
var G__14315 = c__8628__auto__;
var G__14316 = cljs.core.count.call(null,c__8628__auto__);
var G__14317 = 0;
seq__14306 = G__14314;
chunk__14307 = G__14315;
count__14308 = G__14316;
i__14309 = G__14317;
continue;
}
} else
{var cell_class = cljs.core.first.call(null,seq__14306__$1);grow_game.core.set_cell_and_grow_BANG_.call(null,grow_game.core.random_empty_vec.call(null),cell_class);
{
var G__14318 = cljs.core.next.call(null,seq__14306__$1);
var G__14319 = null;
var G__14320 = 0;
var G__14321 = 0;
seq__14306 = G__14318;
chunk__14307 = G__14319;
count__14308 = G__14320;
i__14309 = G__14321;
continue;
}
}
} else
{return null;
}
}
break;
}
});
grow_game.core.key_handler = (function key_handler(event){var key_code = event.keyCode;if(cljs.core._EQ_.call(null,key_code,37))
{return grow_game.core.change_speed_BANG_.call(null,cljs.core.dec);
} else
{if(cljs.core._EQ_.call(null,key_code,39))
{return grow_game.core.change_speed_BANG_.call(null,cljs.core.inc);
} else
{if(cljs.core._EQ_.call(null,key_code,82))
{return grow_game.core.start_game_BANG_.call(null);
} else
{return null;
}
}
}
});
grow_game.core.on_load = (function on_load(){grow_game.core.set_page_style_BANG_.call(null,grow_game.core.page_css.call(null));
goog.dom.getElement("game").innerHTML = grow_game.core.page_body;
cljs.core.reset_BANG_.call(null,grow_game.core.all_cells,grow_game.core.get_all_cells.call(null));
cljs.core.reset_BANG_.call(null,grow_game.core.canvas,goog.dom.getElement("canvas-grid"));
grow_game.core.set_canvas_click_BANG_.call(null,cljs.core.deref.call(null,grow_game.core.canvas));
cljs.core.reset_BANG_.call(null,grow_game.core.chart_div,goog.dom.getElement("chart"));
cljs.core.reset_BANG_.call(null,grow_game.core.speed_label_div,goog.dom.getElement("speed-label"));
cljs.core.reset_BANG_.call(null,grow_game.core.clicks_remaining_div,goog.dom.getElement("clicks-remaining"));
goog.dom.getElement("decrease-speed-button").onclick = (function (){return grow_game.core.change_speed_BANG_.call(null,cljs.core.dec);
});
goog.dom.getElement("increase-speed-button").onclick = (function (){return grow_game.core.change_speed_BANG_.call(null,cljs.core.inc);
});
goog.dom.getElement("restart-button").onclick = grow_game.core.start_game_BANG_;
document.onkeydown = grow_game.core.key_handler;
grow_game.core.start_timer.call(null);
return grow_game.core.start_game_BANG_.call(null);
});
window.onload = grow_game.core.on_load;

//# sourceMappingURL=core.js.map