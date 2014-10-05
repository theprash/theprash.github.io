// Compiled by ClojureScript 0.0-2356
goog.provide('grow_game.core');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('grow_game.draw_canvas');
goog.require('goog.dom');
goog.require('goog.Timer');
goog.require('grow_game.draw_canvas');
goog.require('hiccups.runtime');
goog.require('clojure.browser.repl');
goog.require('figwheel.client');
goog.require('goog.events');
goog.require('hiccups.runtime');
goog.require('garden.core');
cljs.core.enable_console_print_BANG_.call(null);
grow_game.core.empty_colour = "#333333";
grow_game.core.cell_types = new cljs.core.PersistentArrayMap(null, 5, ["cell-red",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-count","show-count",-280069732),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#BA3D15"], null)], null),"cell-blue",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-count","show-count",-280069732),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#118C95"], null)], null),"cell-yellow",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-count","show-count",-280069732),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#C9AD40"], null)], null),"cell-empty",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-count","show-count",-280069732),false,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),grow_game.core.empty_colour], null)], null),"cell-wall",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-count","show-count",-280069732),false,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#000000",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#000000"], null)], null)], null);
grow_game.core.all_cells = cljs.core.atom.call(null,null);
grow_game.core.canvas = cljs.core.atom.call(null,null);
grow_game.core.cell_vecs_by_class = cljs.core.atom.call(null,cljs.core.zipmap.call(null,cljs.core.keys.call(null,grow_game.core.cell_types),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)));
grow_game.core.grow_queue = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
grow_game.core.timer = cljs.core.atom.call(null,(new goog.Timer()));
grow_game.core.chart_div = cljs.core.atom.call(null,null);
grow_game.core.current_speed_idx = cljs.core.atom.call(null,(0));
grow_game.core.speed_label_div = cljs.core.atom.call(null,null);
grow_game.core.clicks_remaining = cljs.core.atom.call(null,null);
grow_game.core.clicks_remaining_div = cljs.core.atom.call(null,null);
grow_game.core.speeds = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"1.0x",new cljs.core.Keyword(null,"interval","interval",1708495417),(500)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"1.5x",new cljs.core.Keyword(null,"interval","interval",1708495417),((500) / 1.5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"2.0x",new cljs.core.Keyword(null,"interval","interval",1708495417),((500) / 2.0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"3.0x",new cljs.core.Keyword(null,"interval","interval",1708495417),((500) / 3.0)], null)], null);
grow_game.core.set_speed_BANG_ = (function set_speed_BANG_(speed_idx){var temp__4124__auto__ = cljs.core.get.call(null,grow_game.core.speeds,speed_idx);if(cljs.core.truth_(temp__4124__auto__))
{var new_speed = temp__4124__auto__;cljs.core.reset_BANG_.call(null,grow_game.core.current_speed_idx,speed_idx);
cljs.core.deref.call(null,grow_game.core.timer).setInterval(new_speed.call(null,new cljs.core.Keyword(null,"interval","interval",1708495417)));
return cljs.core.deref.call(null,grow_game.core.speed_label_div).innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_speed.call(null,new cljs.core.Keyword(null,"name","name",1843675177))));
} else
{return null;
}
});
grow_game.core.change_speed_BANG_ = (function change_speed_BANG_(change_fn){return grow_game.core.set_speed_BANG_.call(null,change_fn.call(null,cljs.core.deref.call(null,grow_game.core.current_speed_idx)));
});
grow_game.core.add_to_grow_queue_BANG_ = (function add_to_grow_queue_BANG_(cell_vec){return cljs.core.swap_BANG_.call(null,grow_game.core.grow_queue,(function (p1__10140_SHARP_){return cljs.core.conj.call(null,p1__10140_SHARP_,cell_vec);
}));
});
grow_game.core.clear_grow_queue_BANG_ = (function clear_grow_queue_BANG_(){return cljs.core.reset_BANG_.call(null,grow_game.core.grow_queue,cljs.core.PersistentHashSet.EMPTY);
});
grow_game.core.grid_rows = (60);
grow_game.core.grid_cols = (60);
grow_game.core.total_cells = (grow_game.core.grid_rows * grow_game.core.grid_cols);
grow_game.core.chart_width = (200);
grow_game.core.count_cell_class_QMARK_ = (function count_cell_class_QMARK_(cell_class){return grow_game.core.cell_types.call(null,cell_class).call(null,new cljs.core.Keyword(null,"show-count","show-count",-280069732));
});
grow_game.core.page_body = ("<canvas height=\"600\" id=\"canvas-grid\" width=\"600\"></canvas>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs10143 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#chart","div#chart",-1094603544)], null),cljs.core.map.call(null,(function (cell_class){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,("div#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_class)+"-count.cell-count"))], null);
}),cljs.core.filter.call(null,grow_game.core.count_cell_class_QMARK_,cljs.core.keys.call(null,grow_game.core.cell_types))));if(cljs.core.map_QMARK_.call(null,attrs10143))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"game-info",new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs10143)))+"><div id=\"speed\"><div>Speed (Left and Right arrow keys)</div><button id=\"decrease-speed-button\">-</button><div id=\"speed-label\"></div><button id=\"increase-speed-button\">+</button></div><div id=\"clicks-remaining\"></div><div><button id=\"restart-button\">Restart (R)</button></div></div>");
} else
{return ("<div id=\"game-info\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs10143))+"<div id=\"speed\"><div>Speed (Left and Right arrow keys)</div><button id=\"decrease-speed-button\">-</button><div id=\"speed-label\"></div><button id=\"increase-speed-button\">+</button></div><div id=\"clicks-remaining\"></div><div><button id=\"restart-button\">Restart (R)</button></div></div>");
}
})())+"<div id=\"about\">Written in ClojureScript. <a href=\"https://github.com/theprash/theprash.github.io/tree/master/grow-game/cljs/grow_game\">View code</a></div>");
grow_game.core.get_cell_class = (function get_cell_class(cell_vec){var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (kv){return cljs.core.get.call(null,cljs.core.val.call(null,kv),cell_vec);
}),cljs.core.deref.call(null,grow_game.core.cell_vecs_by_class)));if(cljs.core.truth_(temp__4126__auto__))
{var kv = temp__4126__auto__;return cljs.core.key.call(null,kv);
} else
{return null;
}
});
grow_game.core.page_css = (function page_css(){return cljs.core.apply.call(null,garden.core.css,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#F1F2C0",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Helvetica"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#game-info","div#game-info",-590897864),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#game-info>*","div#game-info>*",814440301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clear","clear",1877104959),"left",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#chart","div#chart",-1094603544),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(grow_game.core.chart_width)+"px"),new cljs.core.Keyword(null,"background-color","background-color",570434026),grow_game.core.empty_colour,new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#speed>*","div#speed>*",183064721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#about","div#about",-1867980794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"left"], null)], null),cljs.core.map.call(null,(function (cell_class){var div_id = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.key.call(null,cell_class))+"-count");return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,("div#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(div_id))),cljs.core.merge.call(null,cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cell_class)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null))], null);
}),cljs.core.filter.call(null,(function (p1__10158_SHARP_){return grow_game.core.count_cell_class_QMARK_.call(null,cljs.core.key.call(null,p1__10158_SHARP_));
}),grow_game.core.cell_types)));
});
grow_game.core.set_page_style_BANG_ = (function set_page_style_BANG_(css_text){return cljs.core.first.call(null,cljs.core.array_seq.call(null,document.head.getElementsByTagName("style"))).innerHTML = css_text;
});
grow_game.core.set_cell_BANG_ = (function set_cell_BANG_(cell_vec,class_name){var temp__4124__auto__ = cljs.core.deref.call(null,grow_game.core.all_cells).call(null,cell_vec);if(cljs.core.truth_(temp__4124__auto__))
{var cell = temp__4124__auto__;var old_class_name = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cell);cljs.core.swap_BANG_.call(null,grow_game.core.all_cells,((function (old_class_name,cell,temp__4124__auto__){
return (function (x){return cljs.core.assoc_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_vec,new cljs.core.Keyword(null,"class","class",-2030961996)], null),class_name);
});})(old_class_name,cell,temp__4124__auto__))
);
if(cljs.core.not_EQ_.call(null,old_class_name,""))
{cljs.core.swap_BANG_.call(null,grow_game.core.cell_vecs_by_class,((function (old_class_name,cell,temp__4124__auto__){
return (function (x){return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_class_name], null),((function (old_class_name,cell,temp__4124__auto__){
return (function (cell_vecs){return cljs.core.disj.call(null,cell_vecs,cell_vec);
});})(old_class_name,cell,temp__4124__auto__))
);
});})(old_class_name,cell,temp__4124__auto__))
);
} else
{}
return cljs.core.swap_BANG_.call(null,grow_game.core.cell_vecs_by_class,((function (old_class_name,cell,temp__4124__auto__){
return (function (x){return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name], null),((function (old_class_name,cell,temp__4124__auto__){
return (function (cell_vecs){return cljs.core.conj.call(null,cell_vecs,cell_vec);
});})(old_class_name,cell,temp__4124__auto__))
);
});})(old_class_name,cell,temp__4124__auto__))
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
grow_game.core.adjacent_empty_vecs = (function adjacent_empty_vecs(cell_vec,cell_class){var adjacent_vecs = (function (){var iter__4377__auto__ = (function iter__10164(s__10165){return (new cljs.core.LazySeq(null,(function (){var s__10165__$1 = s__10165;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10165__$1);if(temp__4126__auto__)
{var s__10165__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10165__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__10165__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__10167 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__10166 = (0);while(true){
if((i__10166 < size__4376__auto__))
{var rel = cljs.core._nth.call(null,c__4375__auto__,i__10166);cljs.core.chunk_append.call(null,b__10167,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,cell_vec,rel)));
{
var G__10168 = (i__10166 + (1));
i__10166 = G__10168;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10167),iter__10164.call(null,cljs.core.chunk_rest.call(null,s__10165__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10167),null);
}
} else
{var rel = cljs.core.first.call(null,s__10165__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,cell_vec,rel)),iter__10164.call(null,cljs.core.rest.call(null,s__10165__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null));
})();var cell_empty_QMARK_ = ((function (adjacent_vecs){
return (function (p1__10159_SHARP_){return cljs.core.deref.call(null,grow_game.core.cell_vecs_by_class).call(null,"cell-empty").call(null,p1__10159_SHARP_);
});})(adjacent_vecs))
;return cljs.core.filter.call(null,cell_empty_QMARK_,adjacent_vecs);
});
grow_game.core.fill_adjacent_cells_BANG_ = (function fill_adjacent_cells_BANG_(cell_vec,cell_class){var seq__10173 = cljs.core.seq.call(null,grow_game.core.adjacent_empty_vecs.call(null,cell_vec,cell_class));var chunk__10174 = null;var count__10175 = (0);var i__10176 = (0);while(true){
if((i__10176 < count__10175))
{var cell_vec__$1 = cljs.core._nth.call(null,chunk__10174,i__10176);grow_game.core.set_cell_and_grow_BANG_.call(null,cell_vec__$1,cell_class);
{
var G__10177 = seq__10173;
var G__10178 = chunk__10174;
var G__10179 = count__10175;
var G__10180 = (i__10176 + (1));
seq__10173 = G__10177;
chunk__10174 = G__10178;
count__10175 = G__10179;
i__10176 = G__10180;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10173);if(temp__4126__auto__)
{var seq__10173__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10173__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__10173__$1);{
var G__10181 = cljs.core.chunk_rest.call(null,seq__10173__$1);
var G__10182 = c__4408__auto__;
var G__10183 = cljs.core.count.call(null,c__4408__auto__);
var G__10184 = (0);
seq__10173 = G__10181;
chunk__10174 = G__10182;
count__10175 = G__10183;
i__10176 = G__10184;
continue;
}
} else
{var cell_vec__$1 = cljs.core.first.call(null,seq__10173__$1);grow_game.core.set_cell_and_grow_BANG_.call(null,cell_vec__$1,cell_class);
{
var G__10185 = cljs.core.next.call(null,seq__10173__$1);
var G__10186 = null;
var G__10187 = (0);
var G__10188 = (0);
seq__10173 = G__10185;
chunk__10174 = G__10186;
count__10175 = G__10187;
i__10176 = G__10188;
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
var seq__10193 = cljs.core.seq.call(null,cell_vecs);var chunk__10194 = null;var count__10195 = (0);var i__10196 = (0);while(true){
if((i__10196 < count__10195))
{var cell_vec = cljs.core._nth.call(null,chunk__10194,i__10196);var cell_class_10197 = grow_game.core.get_cell_class.call(null,cell_vec);if(cljs.core.not_EQ_.call(null,cell_class_10197,"cell-empty"))
{grow_game.core.fill_adjacent_cells_BANG_.call(null,cell_vec,cell_class_10197);
} else
{}
{
var G__10198 = seq__10193;
var G__10199 = chunk__10194;
var G__10200 = count__10195;
var G__10201 = (i__10196 + (1));
seq__10193 = G__10198;
chunk__10194 = G__10199;
count__10195 = G__10200;
i__10196 = G__10201;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10193);if(temp__4126__auto__)
{var seq__10193__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10193__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__10193__$1);{
var G__10202 = cljs.core.chunk_rest.call(null,seq__10193__$1);
var G__10203 = c__4408__auto__;
var G__10204 = cljs.core.count.call(null,c__4408__auto__);
var G__10205 = (0);
seq__10193 = G__10202;
chunk__10194 = G__10203;
count__10195 = G__10204;
i__10196 = G__10205;
continue;
}
} else
{var cell_vec = cljs.core.first.call(null,seq__10193__$1);var cell_class_10206 = grow_game.core.get_cell_class.call(null,cell_vec);if(cljs.core.not_EQ_.call(null,cell_class_10206,"cell-empty"))
{grow_game.core.fill_adjacent_cells_BANG_.call(null,cell_vec,cell_class_10206);
} else
{}
{
var G__10207 = cljs.core.next.call(null,seq__10193__$1);
var G__10208 = null;
var G__10209 = (0);
var G__10210 = (0);
seq__10193 = G__10207;
chunk__10194 = G__10208;
count__10195 = G__10209;
i__10196 = G__10210;
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
grow_game.core.update_chart_BANG_ = (function update_chart_BANG_(){return cljs.core.deref.call(null,grow_game.core.chart_div).innerHTML = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (cell_class){var cell_count = cljs.core.count.call(null,cljs.core.deref.call(null,grow_game.core.cell_vecs_by_class).call(null,cell_class));var new_width = ((cell_count / grow_game.core.total_cells) * grow_game.core.chart_width);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,("div#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_class)+"-count.cell-count")),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),("width:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_width)+"px")], null),cell_count], null))));
}),cljs.core.sort_by.call(null,(function (p1__10211_SHARP_){return (- cljs.core.count.call(null,cljs.core.deref.call(null,grow_game.core.cell_vecs_by_class).call(null,p1__10211_SHARP_)));
}),cljs.core.filter.call(null,grow_game.core.count_cell_class_QMARK_,cljs.core.keys.call(null,grow_game.core.cell_types)))));
});
grow_game.core.tick_BANG_ = (function tick_BANG_(){var cell_vecs = cljs.core.deref.call(null,grow_game.core.grow_queue);grow_game.core.grow_cells_BANG_.call(null,cell_vecs);
return grow_game.draw_canvas.draw_frame_BANG_.call(null,((function (cell_vecs){
return (function (){grow_game.draw_canvas.draw_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.deref.call(null,grow_game.core.all_cells)], null),cljs.core.deref.call(null,grow_game.core.canvas),grow_game.core.cell_types);
return grow_game.core.update_chart_BANG_.call(null);
});})(cell_vecs))
);
});
grow_game.core.swap_clicks_remaining_BANG_ = (function swap_clicks_remaining_BANG_(swap_fn){cljs.core.swap_BANG_.call(null,grow_game.core.clicks_remaining,swap_fn);
return cljs.core.deref.call(null,grow_game.core.clicks_remaining_div).innerHTML = ("Clicks remaining: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,grow_game.core.clicks_remaining)));
});
grow_game.core.set_cells_empty_BANG_ = (function set_cells_empty_BANG_(){var seq__10216 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,grow_game.core.all_cells)));var chunk__10217 = null;var count__10218 = (0);var i__10219 = (0);while(true){
if((i__10219 < count__10218))
{var cell_vec = cljs.core._nth.call(null,chunk__10217,i__10219);grow_game.core.set_cell_BANG_.call(null,cell_vec,"cell-empty");
{
var G__10220 = seq__10216;
var G__10221 = chunk__10217;
var G__10222 = count__10218;
var G__10223 = (i__10219 + (1));
seq__10216 = G__10220;
chunk__10217 = G__10221;
count__10218 = G__10222;
i__10219 = G__10223;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10216);if(temp__4126__auto__)
{var seq__10216__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10216__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__10216__$1);{
var G__10224 = cljs.core.chunk_rest.call(null,seq__10216__$1);
var G__10225 = c__4408__auto__;
var G__10226 = cljs.core.count.call(null,c__4408__auto__);
var G__10227 = (0);
seq__10216 = G__10224;
chunk__10217 = G__10225;
count__10218 = G__10226;
i__10219 = G__10227;
continue;
}
} else
{var cell_vec = cljs.core.first.call(null,seq__10216__$1);grow_game.core.set_cell_BANG_.call(null,cell_vec,"cell-empty");
{
var G__10228 = cljs.core.next.call(null,seq__10216__$1);
var G__10229 = null;
var G__10230 = (0);
var G__10231 = (0);
seq__10216 = G__10228;
chunk__10217 = G__10229;
count__10218 = G__10230;
i__10219 = G__10231;
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
grow_game.core.get_all_cells = (function get_all_cells(){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__10238(s__10239){return (new cljs.core.LazySeq(null,(function (){var s__10239__$1 = s__10239;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10239__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var col = cljs.core.first.call(null,xs__4624__auto__);var iterys__4373__auto__ = ((function (s__10239__$1,col,xs__4624__auto__,temp__4126__auto__){
return (function iter__10240(s__10241){return (new cljs.core.LazySeq(null,((function (s__10239__$1,col,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__10241__$1 = s__10241;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10241__$1);if(temp__4126__auto____$1)
{var s__10241__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10241__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__10241__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__10243 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__10242 = (0);while(true){
if((i__10242 < size__4376__auto__))
{var row = cljs.core._nth.call(null,c__4375__auto__,i__10242);cljs.core.chunk_append.call(null,b__10243,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),grow_game.core.element,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)], true, false));
{
var G__10244 = (i__10242 + (1));
i__10242 = G__10244;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10243),iter__10240.call(null,cljs.core.chunk_rest.call(null,s__10241__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10243),null);
}
} else
{var row = cljs.core.first.call(null,s__10241__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),grow_game.core.element,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)], true, false),iter__10240.call(null,cljs.core.rest.call(null,s__10241__$2)));
}
} else
{return null;
}
break;
}
});})(s__10239__$1,col,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__10239__$1,col,xs__4624__auto__,temp__4126__auto__))
;var fs__4374__auto__ = cljs.core.seq.call(null,iterys__4373__auto__.call(null,cljs.core.range.call(null,grow_game.core.grid_rows)));if(fs__4374__auto__)
{return cljs.core.concat.call(null,fs__4374__auto__,iter__10238.call(null,cljs.core.rest.call(null,s__10239__$1)));
} else
{{
var G__10245 = cljs.core.rest.call(null,s__10239__$1);
s__10239__$1 = G__10245;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,cljs.core.range.call(null,grow_game.core.grid_cols));
})());
});
grow_game.core.set_canvas_click_BANG_ = (function set_canvas_click_BANG_(canvas){return canvas.addEventListener("mousedown",(function (e){var x = e.x;var y = e.y;var clicked_cell = cljs.core.map.call(null,((function (x,y){
return (function (p1__10246_SHARP_){return (((p1__10246_SHARP_ / grow_game.draw_canvas.cell_size) | (0)) - (1));
});})(x,y))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));if(cljs.core.truth_((function (){var and__3627__auto__ = cljs.core.deref.call(null,grow_game.core.cell_vecs_by_class).call(null,"cell-empty").call(null,clicked_cell);if(cljs.core.truth_(and__3627__auto__))
{return ((0) < cljs.core.deref.call(null,grow_game.core.clicks_remaining));
} else
{return and__3627__auto__;
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
grow_game.core.create_random_walls_BANG_ = (function create_random_walls_BANG_(){var seq__10276 = cljs.core.seq.call(null,cljs.core.take.call(null,(10),cljs.core.shuffle.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,grow_game.core.all_cells)))));var chunk__10289 = null;var count__10290 = (0);var i__10291 = (0);while(true){
if((i__10291 < count__10290))
{var centre = cljs.core._nth.call(null,chunk__10289,i__10291);var seq__10292_10304 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null));var chunk__10297_10305 = null;var count__10298_10306 = (0);var i__10299_10307 = (0);while(true){
if((i__10299_10307 < count__10298_10306))
{var directions_10308 = cljs.core._nth.call(null,chunk__10297_10305,i__10299_10307);var seq__10300_10309 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));var chunk__10301_10310 = null;var count__10302_10311 = (0);var i__10303_10312 = (0);while(true){
if((i__10303_10312 < count__10302_10311))
{var dist_10313 = cljs.core._nth.call(null,chunk__10301_10310,i__10303_10312);var cell_vec_10314 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__10300_10309,chunk__10301_10310,count__10302_10311,i__10303_10312,seq__10292_10304,chunk__10297_10305,count__10298_10306,i__10299_10307,seq__10276,chunk__10289,count__10290,i__10291,dist_10313,directions_10308,centre){
return (function (p1__10247_SHARP_){return (p1__10247_SHARP_ * dist_10313);
});})(seq__10300_10309,chunk__10301_10310,count__10302_10311,i__10303_10312,seq__10292_10304,chunk__10297_10305,count__10298_10306,i__10299_10307,seq__10276,chunk__10289,count__10290,i__10291,dist_10313,directions_10308,centre))
,directions_10308)));grow_game.core.set_cell_BANG_.call(null,cell_vec_10314,"cell-wall");
{
var G__10315 = seq__10300_10309;
var G__10316 = chunk__10301_10310;
var G__10317 = count__10302_10311;
var G__10318 = (i__10303_10312 + (1));
seq__10300_10309 = G__10315;
chunk__10301_10310 = G__10316;
count__10302_10311 = G__10317;
i__10303_10312 = G__10318;
continue;
}
} else
{var temp__4126__auto___10319 = cljs.core.seq.call(null,seq__10300_10309);if(temp__4126__auto___10319)
{var seq__10300_10320__$1 = temp__4126__auto___10319;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10300_10320__$1))
{var c__4408__auto___10321 = cljs.core.chunk_first.call(null,seq__10300_10320__$1);{
var G__10322 = cljs.core.chunk_rest.call(null,seq__10300_10320__$1);
var G__10323 = c__4408__auto___10321;
var G__10324 = cljs.core.count.call(null,c__4408__auto___10321);
var G__10325 = (0);
seq__10300_10309 = G__10322;
chunk__10301_10310 = G__10323;
count__10302_10311 = G__10324;
i__10303_10312 = G__10325;
continue;
}
} else
{var dist_10326 = cljs.core.first.call(null,seq__10300_10320__$1);var cell_vec_10327 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__10300_10309,chunk__10301_10310,count__10302_10311,i__10303_10312,seq__10292_10304,chunk__10297_10305,count__10298_10306,i__10299_10307,seq__10276,chunk__10289,count__10290,i__10291,dist_10326,seq__10300_10320__$1,temp__4126__auto___10319,directions_10308,centre){
return (function (p1__10247_SHARP_){return (p1__10247_SHARP_ * dist_10326);
});})(seq__10300_10309,chunk__10301_10310,count__10302_10311,i__10303_10312,seq__10292_10304,chunk__10297_10305,count__10298_10306,i__10299_10307,seq__10276,chunk__10289,count__10290,i__10291,dist_10326,seq__10300_10320__$1,temp__4126__auto___10319,directions_10308,centre))
,directions_10308)));grow_game.core.set_cell_BANG_.call(null,cell_vec_10327,"cell-wall");
{
var G__10328 = cljs.core.next.call(null,seq__10300_10320__$1);
var G__10329 = null;
var G__10330 = (0);
var G__10331 = (0);
seq__10300_10309 = G__10328;
chunk__10301_10310 = G__10329;
count__10302_10311 = G__10330;
i__10303_10312 = G__10331;
continue;
}
}
} else
{}
}
break;
}
{
var G__10332 = seq__10292_10304;
var G__10333 = chunk__10297_10305;
var G__10334 = count__10298_10306;
var G__10335 = (i__10299_10307 + (1));
seq__10292_10304 = G__10332;
chunk__10297_10305 = G__10333;
count__10298_10306 = G__10334;
i__10299_10307 = G__10335;
continue;
}
} else
{var temp__4126__auto___10336 = cljs.core.seq.call(null,seq__10292_10304);if(temp__4126__auto___10336)
{var seq__10292_10337__$1 = temp__4126__auto___10336;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10292_10337__$1))
{var c__4408__auto___10338 = cljs.core.chunk_first.call(null,seq__10292_10337__$1);{
var G__10339 = cljs.core.chunk_rest.call(null,seq__10292_10337__$1);
var G__10340 = c__4408__auto___10338;
var G__10341 = cljs.core.count.call(null,c__4408__auto___10338);
var G__10342 = (0);
seq__10292_10304 = G__10339;
chunk__10297_10305 = G__10340;
count__10298_10306 = G__10341;
i__10299_10307 = G__10342;
continue;
}
} else
{var directions_10343 = cljs.core.first.call(null,seq__10292_10337__$1);var seq__10293_10344 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));var chunk__10294_10345 = null;var count__10295_10346 = (0);var i__10296_10347 = (0);while(true){
if((i__10296_10347 < count__10295_10346))
{var dist_10348 = cljs.core._nth.call(null,chunk__10294_10345,i__10296_10347);var cell_vec_10349 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__10293_10344,chunk__10294_10345,count__10295_10346,i__10296_10347,seq__10292_10304,chunk__10297_10305,count__10298_10306,i__10299_10307,seq__10276,chunk__10289,count__10290,i__10291,dist_10348,directions_10343,seq__10292_10337__$1,temp__4126__auto___10336,centre){
return (function (p1__10247_SHARP_){return (p1__10247_SHARP_ * dist_10348);
});})(seq__10293_10344,chunk__10294_10345,count__10295_10346,i__10296_10347,seq__10292_10304,chunk__10297_10305,count__10298_10306,i__10299_10307,seq__10276,chunk__10289,count__10290,i__10291,dist_10348,directions_10343,seq__10292_10337__$1,temp__4126__auto___10336,centre))
,directions_10343)));grow_game.core.set_cell_BANG_.call(null,cell_vec_10349,"cell-wall");
{
var G__10350 = seq__10293_10344;
var G__10351 = chunk__10294_10345;
var G__10352 = count__10295_10346;
var G__10353 = (i__10296_10347 + (1));
seq__10293_10344 = G__10350;
chunk__10294_10345 = G__10351;
count__10295_10346 = G__10352;
i__10296_10347 = G__10353;
continue;
}
} else
{var temp__4126__auto___10354__$1 = cljs.core.seq.call(null,seq__10293_10344);if(temp__4126__auto___10354__$1)
{var seq__10293_10355__$1 = temp__4126__auto___10354__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10293_10355__$1))
{var c__4408__auto___10356 = cljs.core.chunk_first.call(null,seq__10293_10355__$1);{
var G__10357 = cljs.core.chunk_rest.call(null,seq__10293_10355__$1);
var G__10358 = c__4408__auto___10356;
var G__10359 = cljs.core.count.call(null,c__4408__auto___10356);
var G__10360 = (0);
seq__10293_10344 = G__10357;
chunk__10294_10345 = G__10358;
count__10295_10346 = G__10359;
i__10296_10347 = G__10360;
continue;
}
} else
{var dist_10361 = cljs.core.first.call(null,seq__10293_10355__$1);var cell_vec_10362 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__10293_10344,chunk__10294_10345,count__10295_10346,i__10296_10347,seq__10292_10304,chunk__10297_10305,count__10298_10306,i__10299_10307,seq__10276,chunk__10289,count__10290,i__10291,dist_10361,seq__10293_10355__$1,temp__4126__auto___10354__$1,directions_10343,seq__10292_10337__$1,temp__4126__auto___10336,centre){
return (function (p1__10247_SHARP_){return (p1__10247_SHARP_ * dist_10361);
});})(seq__10293_10344,chunk__10294_10345,count__10295_10346,i__10296_10347,seq__10292_10304,chunk__10297_10305,count__10298_10306,i__10299_10307,seq__10276,chunk__10289,count__10290,i__10291,dist_10361,seq__10293_10355__$1,temp__4126__auto___10354__$1,directions_10343,seq__10292_10337__$1,temp__4126__auto___10336,centre))
,directions_10343)));grow_game.core.set_cell_BANG_.call(null,cell_vec_10362,"cell-wall");
{
var G__10363 = cljs.core.next.call(null,seq__10293_10355__$1);
var G__10364 = null;
var G__10365 = (0);
var G__10366 = (0);
seq__10293_10344 = G__10363;
chunk__10294_10345 = G__10364;
count__10295_10346 = G__10365;
i__10296_10347 = G__10366;
continue;
}
}
} else
{}
}
break;
}
{
var G__10367 = cljs.core.next.call(null,seq__10292_10337__$1);
var G__10368 = null;
var G__10369 = (0);
var G__10370 = (0);
seq__10292_10304 = G__10367;
chunk__10297_10305 = G__10368;
count__10298_10306 = G__10369;
i__10299_10307 = G__10370;
continue;
}
}
} else
{}
}
break;
}
{
var G__10371 = seq__10276;
var G__10372 = chunk__10289;
var G__10373 = count__10290;
var G__10374 = (i__10291 + (1));
seq__10276 = G__10371;
chunk__10289 = G__10372;
count__10290 = G__10373;
i__10291 = G__10374;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10276);if(temp__4126__auto__)
{var seq__10276__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10276__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__10276__$1);{
var G__10375 = cljs.core.chunk_rest.call(null,seq__10276__$1);
var G__10376 = c__4408__auto__;
var G__10377 = cljs.core.count.call(null,c__4408__auto__);
var G__10378 = (0);
seq__10276 = G__10375;
chunk__10289 = G__10376;
count__10290 = G__10377;
i__10291 = G__10378;
continue;
}
} else
{var centre = cljs.core.first.call(null,seq__10276__$1);var seq__10277_10379 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null));var chunk__10282_10380 = null;var count__10283_10381 = (0);var i__10284_10382 = (0);while(true){
if((i__10284_10382 < count__10283_10381))
{var directions_10383 = cljs.core._nth.call(null,chunk__10282_10380,i__10284_10382);var seq__10285_10384 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));var chunk__10286_10385 = null;var count__10287_10386 = (0);var i__10288_10387 = (0);while(true){
if((i__10288_10387 < count__10287_10386))
{var dist_10388 = cljs.core._nth.call(null,chunk__10286_10385,i__10288_10387);var cell_vec_10389 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__10285_10384,chunk__10286_10385,count__10287_10386,i__10288_10387,seq__10277_10379,chunk__10282_10380,count__10283_10381,i__10284_10382,seq__10276,chunk__10289,count__10290,i__10291,dist_10388,directions_10383,centre,seq__10276__$1,temp__4126__auto__){
return (function (p1__10247_SHARP_){return (p1__10247_SHARP_ * dist_10388);
});})(seq__10285_10384,chunk__10286_10385,count__10287_10386,i__10288_10387,seq__10277_10379,chunk__10282_10380,count__10283_10381,i__10284_10382,seq__10276,chunk__10289,count__10290,i__10291,dist_10388,directions_10383,centre,seq__10276__$1,temp__4126__auto__))
,directions_10383)));grow_game.core.set_cell_BANG_.call(null,cell_vec_10389,"cell-wall");
{
var G__10390 = seq__10285_10384;
var G__10391 = chunk__10286_10385;
var G__10392 = count__10287_10386;
var G__10393 = (i__10288_10387 + (1));
seq__10285_10384 = G__10390;
chunk__10286_10385 = G__10391;
count__10287_10386 = G__10392;
i__10288_10387 = G__10393;
continue;
}
} else
{var temp__4126__auto___10394__$1 = cljs.core.seq.call(null,seq__10285_10384);if(temp__4126__auto___10394__$1)
{var seq__10285_10395__$1 = temp__4126__auto___10394__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10285_10395__$1))
{var c__4408__auto___10396 = cljs.core.chunk_first.call(null,seq__10285_10395__$1);{
var G__10397 = cljs.core.chunk_rest.call(null,seq__10285_10395__$1);
var G__10398 = c__4408__auto___10396;
var G__10399 = cljs.core.count.call(null,c__4408__auto___10396);
var G__10400 = (0);
seq__10285_10384 = G__10397;
chunk__10286_10385 = G__10398;
count__10287_10386 = G__10399;
i__10288_10387 = G__10400;
continue;
}
} else
{var dist_10401 = cljs.core.first.call(null,seq__10285_10395__$1);var cell_vec_10402 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__10285_10384,chunk__10286_10385,count__10287_10386,i__10288_10387,seq__10277_10379,chunk__10282_10380,count__10283_10381,i__10284_10382,seq__10276,chunk__10289,count__10290,i__10291,dist_10401,seq__10285_10395__$1,temp__4126__auto___10394__$1,directions_10383,centre,seq__10276__$1,temp__4126__auto__){
return (function (p1__10247_SHARP_){return (p1__10247_SHARP_ * dist_10401);
});})(seq__10285_10384,chunk__10286_10385,count__10287_10386,i__10288_10387,seq__10277_10379,chunk__10282_10380,count__10283_10381,i__10284_10382,seq__10276,chunk__10289,count__10290,i__10291,dist_10401,seq__10285_10395__$1,temp__4126__auto___10394__$1,directions_10383,centre,seq__10276__$1,temp__4126__auto__))
,directions_10383)));grow_game.core.set_cell_BANG_.call(null,cell_vec_10402,"cell-wall");
{
var G__10403 = cljs.core.next.call(null,seq__10285_10395__$1);
var G__10404 = null;
var G__10405 = (0);
var G__10406 = (0);
seq__10285_10384 = G__10403;
chunk__10286_10385 = G__10404;
count__10287_10386 = G__10405;
i__10288_10387 = G__10406;
continue;
}
}
} else
{}
}
break;
}
{
var G__10407 = seq__10277_10379;
var G__10408 = chunk__10282_10380;
var G__10409 = count__10283_10381;
var G__10410 = (i__10284_10382 + (1));
seq__10277_10379 = G__10407;
chunk__10282_10380 = G__10408;
count__10283_10381 = G__10409;
i__10284_10382 = G__10410;
continue;
}
} else
{var temp__4126__auto___10411__$1 = cljs.core.seq.call(null,seq__10277_10379);if(temp__4126__auto___10411__$1)
{var seq__10277_10412__$1 = temp__4126__auto___10411__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10277_10412__$1))
{var c__4408__auto___10413 = cljs.core.chunk_first.call(null,seq__10277_10412__$1);{
var G__10414 = cljs.core.chunk_rest.call(null,seq__10277_10412__$1);
var G__10415 = c__4408__auto___10413;
var G__10416 = cljs.core.count.call(null,c__4408__auto___10413);
var G__10417 = (0);
seq__10277_10379 = G__10414;
chunk__10282_10380 = G__10415;
count__10283_10381 = G__10416;
i__10284_10382 = G__10417;
continue;
}
} else
{var directions_10418 = cljs.core.first.call(null,seq__10277_10412__$1);var seq__10278_10419 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));var chunk__10279_10420 = null;var count__10280_10421 = (0);var i__10281_10422 = (0);while(true){
if((i__10281_10422 < count__10280_10421))
{var dist_10423 = cljs.core._nth.call(null,chunk__10279_10420,i__10281_10422);var cell_vec_10424 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__10278_10419,chunk__10279_10420,count__10280_10421,i__10281_10422,seq__10277_10379,chunk__10282_10380,count__10283_10381,i__10284_10382,seq__10276,chunk__10289,count__10290,i__10291,dist_10423,directions_10418,seq__10277_10412__$1,temp__4126__auto___10411__$1,centre,seq__10276__$1,temp__4126__auto__){
return (function (p1__10247_SHARP_){return (p1__10247_SHARP_ * dist_10423);
});})(seq__10278_10419,chunk__10279_10420,count__10280_10421,i__10281_10422,seq__10277_10379,chunk__10282_10380,count__10283_10381,i__10284_10382,seq__10276,chunk__10289,count__10290,i__10291,dist_10423,directions_10418,seq__10277_10412__$1,temp__4126__auto___10411__$1,centre,seq__10276__$1,temp__4126__auto__))
,directions_10418)));grow_game.core.set_cell_BANG_.call(null,cell_vec_10424,"cell-wall");
{
var G__10425 = seq__10278_10419;
var G__10426 = chunk__10279_10420;
var G__10427 = count__10280_10421;
var G__10428 = (i__10281_10422 + (1));
seq__10278_10419 = G__10425;
chunk__10279_10420 = G__10426;
count__10280_10421 = G__10427;
i__10281_10422 = G__10428;
continue;
}
} else
{var temp__4126__auto___10429__$2 = cljs.core.seq.call(null,seq__10278_10419);if(temp__4126__auto___10429__$2)
{var seq__10278_10430__$1 = temp__4126__auto___10429__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10278_10430__$1))
{var c__4408__auto___10431 = cljs.core.chunk_first.call(null,seq__10278_10430__$1);{
var G__10432 = cljs.core.chunk_rest.call(null,seq__10278_10430__$1);
var G__10433 = c__4408__auto___10431;
var G__10434 = cljs.core.count.call(null,c__4408__auto___10431);
var G__10435 = (0);
seq__10278_10419 = G__10432;
chunk__10279_10420 = G__10433;
count__10280_10421 = G__10434;
i__10281_10422 = G__10435;
continue;
}
} else
{var dist_10436 = cljs.core.first.call(null,seq__10278_10430__$1);var cell_vec_10437 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,centre,cljs.core.map.call(null,((function (seq__10278_10419,chunk__10279_10420,count__10280_10421,i__10281_10422,seq__10277_10379,chunk__10282_10380,count__10283_10381,i__10284_10382,seq__10276,chunk__10289,count__10290,i__10291,dist_10436,seq__10278_10430__$1,temp__4126__auto___10429__$2,directions_10418,seq__10277_10412__$1,temp__4126__auto___10411__$1,centre,seq__10276__$1,temp__4126__auto__){
return (function (p1__10247_SHARP_){return (p1__10247_SHARP_ * dist_10436);
});})(seq__10278_10419,chunk__10279_10420,count__10280_10421,i__10281_10422,seq__10277_10379,chunk__10282_10380,count__10283_10381,i__10284_10382,seq__10276,chunk__10289,count__10290,i__10291,dist_10436,seq__10278_10430__$1,temp__4126__auto___10429__$2,directions_10418,seq__10277_10412__$1,temp__4126__auto___10411__$1,centre,seq__10276__$1,temp__4126__auto__))
,directions_10418)));grow_game.core.set_cell_BANG_.call(null,cell_vec_10437,"cell-wall");
{
var G__10438 = cljs.core.next.call(null,seq__10278_10430__$1);
var G__10439 = null;
var G__10440 = (0);
var G__10441 = (0);
seq__10278_10419 = G__10438;
chunk__10279_10420 = G__10439;
count__10280_10421 = G__10440;
i__10281_10422 = G__10441;
continue;
}
}
} else
{}
}
break;
}
{
var G__10442 = cljs.core.next.call(null,seq__10277_10412__$1);
var G__10443 = null;
var G__10444 = (0);
var G__10445 = (0);
seq__10277_10379 = G__10442;
chunk__10282_10380 = G__10443;
count__10283_10381 = G__10444;
i__10284_10382 = G__10445;
continue;
}
}
} else
{}
}
break;
}
{
var G__10446 = cljs.core.next.call(null,seq__10276__$1);
var G__10447 = null;
var G__10448 = (0);
var G__10449 = (0);
seq__10276 = G__10446;
chunk__10289 = G__10447;
count__10290 = G__10448;
i__10291 = G__10449;
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
grow_game.core.start_game_BANG_ = (function start_game_BANG_(){grow_game.core.set_speed_BANG_.call(null,(0));
grow_game.core.swap_clicks_remaining_BANG_.call(null,cljs.core.constantly.call(null,(1)));
grow_game.core.clear_grow_queue_BANG_.call(null);
grow_game.core.set_cells_empty_BANG_.call(null);
grow_game.core.create_random_walls_BANG_.call(null);
var seq__10454 = cljs.core.seq.call(null,cljs.core.take.call(null,(4),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cell-blue","cell-yellow"], null))));var chunk__10455 = null;var count__10456 = (0);var i__10457 = (0);while(true){
if((i__10457 < count__10456))
{var cell_class = cljs.core._nth.call(null,chunk__10455,i__10457);grow_game.core.set_cell_and_grow_BANG_.call(null,grow_game.core.random_empty_vec.call(null),cell_class);
{
var G__10458 = seq__10454;
var G__10459 = chunk__10455;
var G__10460 = count__10456;
var G__10461 = (i__10457 + (1));
seq__10454 = G__10458;
chunk__10455 = G__10459;
count__10456 = G__10460;
i__10457 = G__10461;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10454);if(temp__4126__auto__)
{var seq__10454__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10454__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__10454__$1);{
var G__10462 = cljs.core.chunk_rest.call(null,seq__10454__$1);
var G__10463 = c__4408__auto__;
var G__10464 = cljs.core.count.call(null,c__4408__auto__);
var G__10465 = (0);
seq__10454 = G__10462;
chunk__10455 = G__10463;
count__10456 = G__10464;
i__10457 = G__10465;
continue;
}
} else
{var cell_class = cljs.core.first.call(null,seq__10454__$1);grow_game.core.set_cell_and_grow_BANG_.call(null,grow_game.core.random_empty_vec.call(null),cell_class);
{
var G__10466 = cljs.core.next.call(null,seq__10454__$1);
var G__10467 = null;
var G__10468 = (0);
var G__10469 = (0);
seq__10454 = G__10466;
chunk__10455 = G__10467;
count__10456 = G__10468;
i__10457 = G__10469;
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
grow_game.core.key_handler = (function key_handler(event){var key_code = event.keyCode;if(cljs.core._EQ_.call(null,key_code,(37)))
{return grow_game.core.change_speed_BANG_.call(null,cljs.core.dec);
} else
{if(cljs.core._EQ_.call(null,key_code,(39)))
{return grow_game.core.change_speed_BANG_.call(null,cljs.core.inc);
} else
{if(cljs.core._EQ_.call(null,key_code,(82)))
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