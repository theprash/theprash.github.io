(ns grow-game.draw-canvas
  "Functions for drawing the game state")

(def cell-size 10)

(defn draw-grid! [game-state canvas cell-types]
  (draw-frame! #(draw-fn game-state canvas cell-types)))

(defn draw-frame! [fn]
  (.requestAnimationFrame js/window fn))

(defn draw-fn [game-state canvas cell-types]
  (let [context (.getContext canvas "2d")
        cells (:cells game-state)]
    (doseq [cell-vec (keys cells)]
      (let [class-name (get-in cells [cell-vec :class])]
        (set! (.-fillStyle context) (get-in cell-types [class-name :style :background-color]))
        (let [draw-pos (map (partial * cell-size) cell-vec)]
          (.fillRect context (first draw-pos) (second draw-pos) cell-size cell-size))))))
