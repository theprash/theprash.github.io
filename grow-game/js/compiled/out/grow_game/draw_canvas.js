// Compiled by ClojureScript 0.0-2197
goog.provide('grow_game.draw_canvas');
goog.require('cljs.core');
grow_game.draw_canvas.cell_size = 10;
grow_game.draw_canvas.draw_grid_BANG_ = (function draw_grid_BANG_(game_state,canvas,cell_types){return grow_game.draw_canvas.draw_frame_BANG_.call(null,(function (){return grow_game.draw_canvas.draw_fn.call(null,game_state,canvas,cell_types);
}));
});
grow_game.draw_canvas.draw_frame_BANG_ = (function draw_frame_BANG_(fn){return window.requestAnimationFrame(fn);
});
grow_game.draw_canvas.draw_fn = (function draw_fn(game_state,canvas,cell_types){var context = canvas.getContext("2d");var cells = new cljs.core.Keyword(null,"cells","cells",1108448963).cljs$core$IFn$_invoke$arity$1(game_state);var seq__14326 = cljs.core.seq.call(null,cljs.core.keys.call(null,cells));var chunk__14327 = null;var count__14328 = 0;var i__14329 = 0;while(true){
if((i__14329 < count__14328))
{var cell_vec = cljs.core._nth.call(null,chunk__14327,i__14329);var class_name_14330 = cljs.core.get_in.call(null,cells,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_vec,new cljs.core.Keyword(null,"class","class",1108647146)], null));context.fillStyle = cljs.core.get_in.call(null,cell_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name_14330,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.Keyword(null,"background-color","background-color",1619226998)], null));
var draw_pos_14331 = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,grow_game.draw_canvas.cell_size),cell_vec);context.fillRect(cljs.core.first.call(null,draw_pos_14331),cljs.core.second.call(null,draw_pos_14331),grow_game.draw_canvas.cell_size,grow_game.draw_canvas.cell_size);
{
var G__14332 = seq__14326;
var G__14333 = chunk__14327;
var G__14334 = count__14328;
var G__14335 = (i__14329 + 1);
seq__14326 = G__14332;
chunk__14327 = G__14333;
count__14328 = G__14334;
i__14329 = G__14335;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14326);if(temp__4092__auto__)
{var seq__14326__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14326__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__14326__$1);{
var G__14336 = cljs.core.chunk_rest.call(null,seq__14326__$1);
var G__14337 = c__8628__auto__;
var G__14338 = cljs.core.count.call(null,c__8628__auto__);
var G__14339 = 0;
seq__14326 = G__14336;
chunk__14327 = G__14337;
count__14328 = G__14338;
i__14329 = G__14339;
continue;
}
} else
{var cell_vec = cljs.core.first.call(null,seq__14326__$1);var class_name_14340 = cljs.core.get_in.call(null,cells,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_vec,new cljs.core.Keyword(null,"class","class",1108647146)], null));context.fillStyle = cljs.core.get_in.call(null,cell_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name_14340,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.Keyword(null,"background-color","background-color",1619226998)], null));
var draw_pos_14341 = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,grow_game.draw_canvas.cell_size),cell_vec);context.fillRect(cljs.core.first.call(null,draw_pos_14341),cljs.core.second.call(null,draw_pos_14341),grow_game.draw_canvas.cell_size,grow_game.draw_canvas.cell_size);
{
var G__14342 = cljs.core.next.call(null,seq__14326__$1);
var G__14343 = null;
var G__14344 = 0;
var G__14345 = 0;
seq__14326 = G__14342;
chunk__14327 = G__14343;
count__14328 = G__14344;
i__14329 = G__14345;
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

//# sourceMappingURL=draw_canvas.js.map