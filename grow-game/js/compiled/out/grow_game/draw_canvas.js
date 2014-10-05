// Compiled by ClojureScript 0.0-2356
goog.provide('grow_game.draw_canvas');
goog.require('cljs.core');
grow_game.draw_canvas.cell_size = (10);
grow_game.draw_canvas.draw_grid_BANG_ = (function draw_grid_BANG_(game_state,canvas,cell_types){return grow_game.draw_canvas.draw_frame_BANG_.call(null,(function (){return grow_game.draw_canvas.draw_fn.call(null,game_state,canvas,cell_types);
}));
});
grow_game.draw_canvas.draw_frame_BANG_ = (function draw_frame_BANG_(fn){return window.requestAnimationFrame(fn);
});
grow_game.draw_canvas.draw_fn = (function draw_fn(game_state,canvas,cell_types){var context = canvas.getContext("2d");var cells = new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(game_state);var seq__10472 = cljs.core.seq.call(null,cljs.core.keys.call(null,cells));var chunk__10473 = null;var count__10474 = (0);var i__10475 = (0);while(true){
if((i__10475 < count__10474))
{var cell_vec = cljs.core._nth.call(null,chunk__10473,i__10475);var class_name_10476 = cljs.core.get_in.call(null,cells,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_vec,new cljs.core.Keyword(null,"class","class",-2030961996)], null));context.fillStyle = cljs.core.get_in.call(null,cell_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name_10476,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"background-color","background-color",570434026)], null));
var draw_pos_10477 = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,grow_game.draw_canvas.cell_size),cell_vec);context.fillRect(cljs.core.first.call(null,draw_pos_10477),cljs.core.second.call(null,draw_pos_10477),grow_game.draw_canvas.cell_size,grow_game.draw_canvas.cell_size);
{
var G__10478 = seq__10472;
var G__10479 = chunk__10473;
var G__10480 = count__10474;
var G__10481 = (i__10475 + (1));
seq__10472 = G__10478;
chunk__10473 = G__10479;
count__10474 = G__10480;
i__10475 = G__10481;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10472);if(temp__4126__auto__)
{var seq__10472__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10472__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__10472__$1);{
var G__10482 = cljs.core.chunk_rest.call(null,seq__10472__$1);
var G__10483 = c__4408__auto__;
var G__10484 = cljs.core.count.call(null,c__4408__auto__);
var G__10485 = (0);
seq__10472 = G__10482;
chunk__10473 = G__10483;
count__10474 = G__10484;
i__10475 = G__10485;
continue;
}
} else
{var cell_vec = cljs.core.first.call(null,seq__10472__$1);var class_name_10486 = cljs.core.get_in.call(null,cells,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_vec,new cljs.core.Keyword(null,"class","class",-2030961996)], null));context.fillStyle = cljs.core.get_in.call(null,cell_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name_10486,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"background-color","background-color",570434026)], null));
var draw_pos_10487 = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,grow_game.draw_canvas.cell_size),cell_vec);context.fillRect(cljs.core.first.call(null,draw_pos_10487),cljs.core.second.call(null,draw_pos_10487),grow_game.draw_canvas.cell_size,grow_game.draw_canvas.cell_size);
{
var G__10488 = cljs.core.next.call(null,seq__10472__$1);
var G__10489 = null;
var G__10490 = (0);
var G__10491 = (0);
seq__10472 = G__10488;
chunk__10473 = G__10489;
count__10474 = G__10490;
i__10475 = G__10491;
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