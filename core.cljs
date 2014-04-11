(ns grow-game.core
  (:require [clojure.browser.repl]
            [hiccups.runtime :as hiccupsrt]
            [garden.core :refer [css]]
            [goog.Timer]
            [goog.events]
            [goog.dom])
  (:require-macros [hiccups.core :as hiccups]))

(enable-console-print!)

(def all-cells (atom nil))
(def cell-vecs-by-class (atom (zipmap ["cell-empty" "cell-red" "cell-blue" "cell-yellow" "cell-wall"]
                                      (repeat #{}))))
(def grow-queue (atom #{}))

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

(defn get-cell-class [cell-vec]
  (when-let [kv (first (filter (fn [kv] ((val kv) cell-vec))
                               @cell-vecs-by-class))]
    (key kv)))

(def grid-rows 60)
(def grid-cols 60)
(def cell-size 10)

(defn page-css []
  (let [empty-colour "#333333"
        cell-content-size 8
        cell-border-width (/ (- cell-size cell-content-size) 2)]
    (css
      [:body {:text-align "center"
              :background-color "#F1F2C0"}]
      [:div#grid {:border-style "solid"
                  :border-width "3px"
                  :display "inline-block"}]
      (vec (concat [:div.cell-empty]
                   (map #(keyword (str "div." %))
                        (keys @cell-vecs-by-class))
                   [{:width (str cell-content-size "px")
                     :height (str cell-content-size "px")
                     :float "left"
                     :border-style "solid"
                     :border-width (str cell-border-width "px")
                     :border-color empty-colour}]))
      [:div.row {:clear "left"}]
      [:div.cell-empty  {:background-color empty-colour}]
      [:div.cell-red    {:background-color "#BA3D15"}]
      [:div.cell-blue   {:background-color "#118C95"}]
      [:div.cell-yellow {:background-color "#C9AD40"}]
      [:div.cell-wall   {:background-color "#000000"
                         :border-color "#000000"}])))

(defn set-page-style! [css]
  (set! (-> js/document
            .-head
            (.getElementsByTagName "style")
            array-seq
            first
            .-innerHTML)
        css))

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

(defn tick! []
  (let [cell-vecs @grow-queue]
    (clear-grow-queue!)
    (grow-cells! cell-vecs)))

(defn cell-click [cell-vec]
  (when ((@cell-vecs-by-class "cell-empty") cell-vec)
    (set-cell-and-grow! cell-vec "cell-red")))

(defn set-cells-empty! []
  (doseq [cell-vec (keys @all-cells)] (set-cell! cell-vec "cell-empty")))

(defn set-all-cells! []
  (reset! all-cells (let [all-cells-seq (mapcat (fn [row] (array-seq (goog.dom/getChildren row)))
                                                (array-seq (goog.dom/getElementsByClass "row")))]
                      (zipmap (map #(-> % .-id id->vector)
                                   all-cells-seq)
                              all-cells-seq)))
  (set-cells-empty!))

(defn set-cells-click! []
  (doseq [cell (vals @all-cells)]
    (let [cell-vec (-> cell .-id id->vector)]
      (set! (.-onclick cell) #(cell-click cell-vec)))))

(defn start-timer []
  (let [timer (goog.Timer. 500)]
    (. timer start)
    (goog.events/listen timer goog.Timer/TICK tick!)))

(defn random-empty-vec []
  (rand-nth (seq (@cell-vecs-by-class "cell-empty"))))

(defn on-load []
  (set-page-style! (page-css))
  (set! (-> js/document .-body .-innerHTML) (hiccups/html (grid grid-rows grid-cols)))
  (set-all-cells!)
  (doseq [initial-cell-vec (->> @all-cells keys shuffle (take 10))
          direction [[1 0] [0 1] [-1 0] [0 -1]]
          dist (range 10)]
    (let [cell-vec (vec (map + initial-cell-vec
                             (map #(* % dist)
                                  direction)))]
      (set-cell! cell-vec "cell-wall")))

  (set-cell-and-grow! (random-empty-vec) "cell-blue")
  (set-cell-and-grow! (random-empty-vec) "cell-blue")
  (set-cell-and-grow! (random-empty-vec) "cell-yellow")
  (set-cell-and-grow! (random-empty-vec) "cell-yellow")
  (set-cells-click!)
  (start-timer))

(set! (.-onload js/window) on-load)
