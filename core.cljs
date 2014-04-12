(ns grow-game.core
  (:require [clojure.browser.repl]
            [hiccups.runtime :as hiccupsrt]
            [garden.core :refer [css]]
            [goog.Timer]
            [goog.events]
            [goog.dom])
  (:require-macros [hiccups.core :as hiccups]))

(enable-console-print!)

(def empty-colour "#333333")

(def cell-classes
  {"cell-red"    {:show-count true  :style {:background-color "#BA3D15"}}
   "cell-blue"   {:show-count true  :style {:background-color "#118C95"}}
   "cell-yellow" {:show-count true  :style {:background-color "#C9AD40"}}
   "cell-empty"  {:show-count false :style {:background-color empty-colour}}
   "cell-wall"   {:show-count false :style {:background-color "#000000"
                                            :border-color "#000000"}}})

(def all-cells (atom nil))
(def cell-vecs-by-class (atom (zipmap (keys cell-classes)
                                      (repeat #{}))))
(def grow-queue (atom #{}))
(def timer (atom (goog.Timer.)))
(def chart-div (atom nil))
(def current-speed-idx (atom 0))
(def speed-div (atom nil))
(def clicks-remaining (atom nil))
(def clicks-remaining-div (atom nil))

(def speeds [{:name "1.0x" :interval 500}
             {:name "1.5x" :interval 350}
             {:name "2.0x" :interval 200}])

(defn set-speed! [speed-idx]
  (if-let [new-speed (get speeds speed-idx)]
    (do
      (reset! current-speed-idx speed-idx)
      (. @timer setInterval (new-speed :interval))
      (set! (.-innerHTML @speed-div)
            (str "Speed: " (new-speed :name) " (Left and Right arrow keys)")))))

(defn change-speed! [direction-fn]
  (set-speed! (direction-fn @current-speed-idx 1)))

(defn add-to-grow-queue! [cell-vec]
  (swap! grow-queue #(conj % cell-vec)))

(defn clear-grow-queue! []
  (reset! grow-queue #{}))

(defn cell [rownum colnum]
  (let [id (str rownum "-" colnum)]
    [(keyword (str "div#" id))]))

(defn row [rownum cells]
  [:div.row (map (fn [colnum] (cell rownum colnum))
                 (range cells))])

(defn grid [rows columns]
  [:div#grid (map (fn [rownum] (row rownum columns))
                  (range rows))])

(def grid-rows 60)
(def grid-cols 60)
(def cell-size 10)
(def total-cells (* grid-rows grid-cols))
(def chart-width 200)

(defn count-cell-class? [cell-class]
  ((cell-classes cell-class) :show-count))

(defn page-body []
  (hiccups/html
    (grid grid-rows grid-cols)
    [:div#game-info
     (into [:div#chart]
           (map (fn [cell-class]
                  [(keyword (str "div#" cell-class "-count" "." "cell-count"))])
                (filter count-cell-class?
                        (keys cell-classes))))
     [:div#speed]
     [:div#clicks-remaining]
     [:div [:button#restart-button "Restart"]]]))

(defn get-cell-class [cell-vec]
  (when-let [kv (first (filter (fn [kv] ((val kv) cell-vec))
                               @cell-vecs-by-class))]
    (key kv)))

(defn page-css []
  (let [cell-content-size 8
        cell-border-width (/ (- cell-size cell-content-size) 2)]
    (apply css
           [:body {:background-color "#F1F2C0"
                   :font-family "Helvetica"}]
           [:div#grid {:border-style "solid"
                       :border-width "3px"
                       :display "inline-block"
                       :float "left"}]
           (into (vec (map #(keyword (str "div." %))
                           (keys cell-classes)))
                 [{:width (str cell-content-size "px")
                   :height (str cell-content-size "px")
                   :float "left"
                   :border-style "solid"
                   :border-width (str cell-border-width "px")
                   :border-color empty-colour}])
           [:div.row {:clear "left"}]
           [:div#game-info {:padding "10px"
                            :display "inline-block"
                            :width "200px"}]
           [:div#chart {:width (str chart-width "px")
                        :background-color empty-colour
                        :border-style "solid"
                        :border-width "3px"}]
           (into
             (map (fn [cell-class]
                    [(keyword (str "div." (key cell-class)))
                     (-> cell-class val :style)])
                  cell-classes)
             (map (fn [cell-class]
                    (let [div-id (str (key cell-class) "-count")]
                      [(keyword (str "div#" div-id))
                       (merge (select-keys (-> cell-class val :style)
                                           [:background-color])
                              {:color "white"})]))
                  (filter #(count-cell-class? (key %))
                          cell-classes))))))

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
    (let [old-class-name (.-className cell)]
      (set! (.-className cell) class-name)
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

(defn grow-cell! [cell-vec]
  (let [cell-class (get-cell-class cell-vec)]
    (when (not= cell-class "cell-empty")
      (fill-adjacent-cells! cell-vec cell-class))))

(defn grow-cells! [cell-vecs]
  (doseq [cell-vec cell-vecs]
    (grow-cell! cell-vec)))

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
                                     (keys cell-classes)))))))

(defn tick! []
  (let [cell-vecs @grow-queue]
    (clear-grow-queue!)
    (grow-cells! cell-vecs)
    (update-chart!)))

(defn swap-clicks-remaining! [swap-fn]
  (swap! clicks-remaining swap-fn)
  (set! (.-innerHTML @clicks-remaining-div)
        (str "Clicks remaining: " @clicks-remaining)))

(defn cell-click [cell-vec]
  (when (and ((@cell-vecs-by-class "cell-empty") cell-vec)
             (< 0 @clicks-remaining))
    (do
      (set-cell-and-grow! cell-vec "cell-red")
      (swap-clicks-remaining! dec))))

(defn set-cells-empty! []
  (doseq [cell-vec (keys @all-cells)] (set-cell! cell-vec "cell-empty")))

(defn set-all-cells! []
  (reset! all-cells (let [all-cells-seq (mapcat (fn [row] (array-seq (goog.dom/getChildren row)))
                                                (array-seq (goog.dom/getElementsByClass "row")))]
                      (zipmap (map #(-> % .-id id->vector)
                                   all-cells-seq)
                              all-cells-seq))))

(defn set-cells-click! []
  (doseq [cell (vals @all-cells)]
    (let [cell-vec (-> cell .-id id->vector)]
      (set! (.-onclick cell) #(cell-click cell-vec)))))

(defn start-timer []
  (. @timer start)
  (goog.events/listen @timer goog.Timer/TICK tick!))

(defn random-empty-vec []
  (rand-nth (seq (@cell-vecs-by-class "cell-empty"))))

(defn start-game! []
  (set-speed! 0)
  (swap-clicks-remaining! (constantly 1))
  (clear-grow-queue!)
  (set-cells-empty!)
  (doseq [initial-cell-vec (->> @all-cells keys shuffle (take 10))
          direction [[1 0] [0 1] [-1 0] [0 -1]]
          dist (range 10)]
    (let [cell-vec (vec (map + initial-cell-vec
                             (map #(* % dist)
                                  direction)))]
      (set-cell! cell-vec "cell-wall")))
  (doseq [cell-class (take 4 (cycle ["cell-blue" "cell-yellow"]))]
    (set-cell-and-grow! (random-empty-vec) cell-class)))

(defn speed-hotkey-handler [event]
  (let [key (.-key event)]
    (cond
      (= key "Right") (change-speed! +)
      (= key "Left")  (change-speed! -))))

(defn set-speed-hotkeys! []
  (set! (-> js/document .-body .-onkeypress)
        speed-hotkey-handler))

(defn on-load []
  (set-page-style! (page-css))
  (set! (-> js/document .-body .-innerHTML) (page-body))
  (set-all-cells!)
  (set-cells-click!)
  (reset! chart-div (goog.dom/getElement "chart"))
  (reset! speed-div (goog.dom/getElement "speed"))
  (reset! clicks-remaining-div (goog.dom/getElement "clicks-remaining"))
  (let [button (goog.dom/getElement "restart-button")]
    (set! (.-onclick button) start-game!))
  (start-timer)
  (set-speed-hotkeys!)
  (start-game!))

(set! (.-onload js/window) on-load)
