(ns grow-game.core
  (:require [grow-game.draw-canvas :as draw]
            [clojure.browser.repl]
            [hiccups.runtime :as hiccupsrt]
            [garden.core :refer [css]]
            [goog.Timer]
            [goog.events]
            [goog.dom]
            [figwheel.client :include-macros true])
  (:require-macros [hiccups.core :as hiccups]))

(enable-console-print!)

(comment ; Disable figwheel until code is reloadable
  (figwheel.client/watch-and-reload
    ;; :websocket-url "ws://localhost:3449/figwheel-ws" default
    :jsload-callback (fn [] (print "reloaded")))) ;; optional callback


(def empty-colour "#333333")

(def cell-types
  {"cell-red"    {:show-count true  :style {:background-color "#BA3D15"}}
   "cell-blue"   {:show-count true  :style {:background-color "#118C95"}}
   "cell-yellow" {:show-count true  :style {:background-color "#C9AD40"}}
   "cell-empty"  {:show-count false :style {:background-color empty-colour}}
   "cell-wall"   {:show-count false :style {:background-color "#000000"
                                            :border-color "#000000"}}})

(def all-cells (atom nil))
(def canvas (atom nil))
(def cell-vecs-by-class (atom (zipmap (keys cell-types)
                                      (repeat #{}))))
(def grow-queue (atom #{}))
(def timer (atom (goog.Timer.)))
(def chart-div (atom nil))
(def current-speed-idx (atom 0))
(def speed-label-div (atom nil))
(def clicks-remaining (atom nil))
(def clicks-remaining-div (atom nil))

(def speeds [{:name "1.0x" :interval 500}
             {:name "1.5x" :interval (/ 500 1.5)}
             {:name "2.0x" :interval (/ 500 2.0)}
             {:name "3.0x" :interval (/ 500 3.0)}])

(defn set-speed! [speed-idx]
  (if-let [new-speed (get speeds speed-idx)]
    (do
      (reset! current-speed-idx speed-idx)
      (. @timer setInterval (new-speed :interval))
      (set! (.-innerHTML @speed-label-div)
            (str (new-speed :name))))))

(defn change-speed! [change-fn]
  (set-speed! (change-fn @current-speed-idx)))

(defn add-to-grow-queue! [cell-vec]
  (swap! grow-queue #(conj % cell-vec)))

(defn clear-grow-queue! []
  (reset! grow-queue #{}))

(def grid-rows 60)
(def grid-cols 60)
(def total-cells (* grid-rows grid-cols))
(def chart-width 200)

(defn count-cell-class? [cell-class]
  ((cell-types cell-class) :show-count))

(def page-body
  (hiccups/html
    [:canvas#canvas-grid {:width 600 :height 600}]
    [:div#game-info
     (into [:div#chart]
           (map (fn [cell-class]
                  [(keyword (str "div#" cell-class "-count" "." "cell-count"))])
                (filter count-cell-class?
                        (keys cell-types))))
     [:div#speed
      [:div "Speed (Left and Right arrow keys)"]
      [:button#decrease-speed-button "-"]
      [:div#speed-label]
      [:button#increase-speed-button "+"]]
     [:div#clicks-remaining]
     [:div [:button#restart-button "Restart (R)"]]]
    [:div#about "Written in ClojureScript. "
     [:a {:href "https://github.com/theprash/theprash.github.io/tree/master/grow-game/cljs/grow_game"}
      "View code"]]
    ))

(defn get-cell-class [cell-vec]
  (when-let [kv (first (filter (fn [kv] (get (val kv) cell-vec))
                               @cell-vecs-by-class))]
    (key kv)))

(defn page-css []
  (apply css
         [:body {:background-color "#F1F2C0"
                 :font-family "Helvetica"}]
         [:div#game-info {:padding "10px"
                          :display "inline-block"
                          :width "200px"}]
         [:div#game-info>* {:clear "left"
                            :margin-bottom "20px"
                            :overflow "hidden"}]
         [:div#chart {:width (str chart-width "px")
                      :background-color empty-colour
                      :border-style "solid"
                      :border-width "3px"}]
         [:div#speed>* {:float "left"}]
         [:div#about {:clear "left"}]
         (map (fn [cell-class]
                (let [div-id (str (key cell-class) "-count")]
                  [(keyword (str "div#" div-id))
                   (merge (select-keys (-> cell-class val :style)
                                       [:background-color])
                          {:color "white"})]))
              (filter #(count-cell-class? (key %))
                      cell-types))))

(defn set-page-style! [css-text]
  (set! (-> js/document
            .-head
            (.getElementsByTagName "style")
            array-seq
            first
            .-innerHTML)
        css-text))

(defn set-cell! [cell-vec class-name]
  (if-let [cell (@all-cells cell-vec)]
    (let [old-class-name (-> cell :class)]
      (swap! all-cells (fn [x] (assoc-in x [cell-vec :class] class-name)))
      (when (not= old-class-name "")
        (swap! cell-vecs-by-class (fn [x] (update-in x [old-class-name]
                                                     (fn [cell-vecs] (disj cell-vecs cell-vec))))))
      (swap! cell-vecs-by-class (fn [x] (update-in x [class-name]
                                                   (fn [cell-vecs] (conj cell-vecs cell-vec))))))))

(defn set-cell-and-grow! [cell-vec class-name]
  (set-cell! cell-vec class-name)
  (add-to-grow-queue! cell-vec))

(defn id->vector [id]
  (vec (map cljs.reader/read-string
            (clojure.string/split id #"-"))))

(defn adjacent-empty-vecs [cell-vec cell-class]
  (let [adjacent-vecs (for [rel [[1 0] [0 1] [-1 0] [0 -1]]]
                        (vec (map + cell-vec rel)))
        cell-empty? #((@cell-vecs-by-class "cell-empty") %)]
    (->> adjacent-vecs
         (filter cell-empty?))))

(defn fill-adjacent-cells! [cell-vec cell-class]
  (doseq [cell-vec (adjacent-empty-vecs cell-vec cell-class)]
    (set-cell-and-grow! cell-vec cell-class)))

(defn grow-cells! [cell-vecs]
  (clear-grow-queue!)
  (doseq [cell-vec cell-vecs]
    (let [cell-class (get-cell-class cell-vec)]
      (when (not= cell-class "cell-empty")
        (fill-adjacent-cells! cell-vec cell-class)))))

(defn update-chart! []
  (set! (.-innerHTML @chart-div)
        (apply str
               (map (fn [cell-class]
                      (let [cell-count (count (@cell-vecs-by-class cell-class))
                            new-width (* (/ cell-count total-cells) chart-width)]
                        (hiccups/html [(keyword (str "div#" cell-class "-count" "." "cell-count"))
                                       {:style (str "width:" new-width "px")}
                                       cell-count])))
                    (sort-by #(- (count (@cell-vecs-by-class %)))
                             (filter count-cell-class?
                                     (keys cell-types)))))))

(defn tick! []
  (let [cell-vecs @grow-queue]
    (grow-cells! cell-vecs)
    (draw/draw-frame!
      (fn []
        (draw/draw-fn {:cells @all-cells} @canvas cell-types)
        (update-chart!)))))

(defn swap-clicks-remaining! [swap-fn]
  (swap! clicks-remaining swap-fn)
  (set! (.-innerHTML @clicks-remaining-div)
        (str "Clicks remaining: " @clicks-remaining)))

(defn set-cells-empty! []
  (doseq [cell-vec (keys @all-cells)] (set-cell! cell-vec "cell-empty")))

(defn get-all-cells []
  (into {}
        (for [col (range grid-cols)
              row (range grid-rows)]
          {[col row] {:element element
                      :class nil}})))

(defn set-canvas-click! [canvas]
  (.addEventListener
    canvas
    "mousedown"
    (fn [e] (let [x (.-x e)
                  y (.-y e)
                  clicked-cell (map #(dec (int (/ % draw/cell-size)))
                                    [x y])]
              (when (and ((@cell-vecs-by-class "cell-empty") clicked-cell)
                         (< 0 @clicks-remaining))
                (set-cell-and-grow! clicked-cell "cell-red")
                (swap-clicks-remaining! dec))))
    false))

(defn start-timer []
  (. @timer start)
  (goog.events/listen @timer goog.Timer/TICK tick!))

(defn random-empty-vec []
  (rand-nth (seq (@cell-vecs-by-class "cell-empty"))))

(defn create-random-walls! []
  (doseq [centre (->> @all-cells keys shuffle (take 10))
          directions [[1 0] [0 1] [-1 0] [0 -1]]
          dist (range 10)]
    (let [cell-vec (vec (map + centre
                             (map #(* % dist)
                                  directions)))]
      (set-cell! cell-vec "cell-wall"))))

(defn start-game! []
  (set-speed! 0)
  (swap-clicks-remaining! (constantly 1))
  (clear-grow-queue!)
  (set-cells-empty!)
  (create-random-walls!)
  (doseq [cell-class (take 4 (cycle ["cell-blue" "cell-yellow"]))]
    (set-cell-and-grow! (random-empty-vec) cell-class)))

(defn key-handler [event]
  (let [key-code (.-keyCode event)]
    (cond
      (= key-code 37) (change-speed! dec) ;left
      (= key-code 39) (change-speed! inc) ;right
      (= key-code 82) (start-game!)))) ;R

(defn on-load []
  (set-page-style! (page-css))
  (set! (.-innerHTML (goog.dom/getElement "game")) page-body)
  (reset! all-cells (get-all-cells))
  (reset! canvas (goog.dom/getElement "canvas-grid"))
  (set-canvas-click! @canvas)
  (reset! chart-div (goog.dom/getElement "chart"))
  (reset! speed-label-div (goog.dom/getElement "speed-label"))
  (reset! clicks-remaining-div (goog.dom/getElement "clicks-remaining"))
  (set! (.-onclick (goog.dom/getElement "decrease-speed-button")) #(change-speed! dec))
  (set! (.-onclick (goog.dom/getElement "increase-speed-button")) #(change-speed! inc))
  (set! (.-onclick (goog.dom/getElement "restart-button")) start-game!)
  (set! (-> js/document .-onkeydown) key-handler)
  (start-timer)
  (start-game!))

(set! (.-onload js/window) on-load)
