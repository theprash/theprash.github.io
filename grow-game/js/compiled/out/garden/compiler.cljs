(ns garden.compiler
  "Functions for compiling Clojure data structures to CSS."
  (:require [clojure.string :as string]
            [garden.util :as util :refer (       format to-str as-str)]
            [garden.units :as units]
            [garden.color :as c]
            [garden.types :as t])
        
  (:require-macros [garden.compiler :refer [with-media-query-context with-selector-context]])
       
                                              
                                                            
                               
                                   
                                 
                                 )

;;;; ## Compiler flags

(def
  ^{:dynamic true
    :private true
    :doc "The current compiler flags."}
  *flags*
  {;; When set to `true` the compiled stylesheet will be "pretty
   ;; printed." This would be equivalent to setting
   ;; `{:ouput-style => :expanded}` in Sass. When set to `false`
   ;; the compiled stylesheet will be compressed with the YUI
   ;; compressor.
   :pretty-print? true
   ;; Location to save a stylesheet after compiling.
   :output-to nil
   ;; A list of vendor prefixes to append automatically to things like
   ;; `@keyframes` and declarations containing the `^:prefix` meta data.
   :vendors []
   ;; `@media-query` specific configuration.
   :media-expressions {;; May either be `:merge` or `:default`. When
                       ;; set to `:merge` nested media queries will
                       ;; have their expressions merged with their
                       ;; parent's.
                       :nesting-behavior :default}})

(def
  ^{:private true
    :doc "Retun a function to call when rendering a media expression.
  The returned function accepts two arguments: the media
  expression being evaluated and the current media expression context.
  Both arguments are maps. This is used to provide semantics for nested
  media queries."}
  media-expression-behavior
  {:merge (fn [expr context] (merge context expr))
   :default (fn [expr _] expr)})

(def
  ^{:dynamic true
    :private true
    :doc "The current parent selector context."}
  *selector-context* nil)
 
(def
  ^{:dynamic true
    :private true
    :doc "The current media query context."}
  *media-query-context* nil)

;;;; ## Utilities

     
                               
                           
                                                  
                  
 
     
                                  
                           
                                                     
                  

(defn- vendors
  "Return the current list of browser vendors specified in `*flags*`."
  []
  (seq (:vendors *flags*)))

(defn- top-level-expression? [x]
  (or (util/rule? x)
      (util/at-import? x)
      (util/at-media? x)
      (util/at-keyframes? x)))

(defn- divide-vec
  "Return a vector of [(filter pred coll) (remove pred coll)]."
  [pred coll]
  ((juxt filter remove) pred coll))
 
     
                      
                              
                   
                         

;;;; ## Stylesheet compression

;; Clojure stylesheet compression leverages the YUI Compressor as it
;; provides a performant and excellent solution to CSS compression.

     
                          
                                                     
              
                                                 
                               
                                 
                            
                  

;; ClojureScript stylesheet compression uses a simple tokenizer and
;; loop/recur to construct a new string of minified CSS. 

      
(defn- token-fn
  "Return a function which when given a string will return a map 
  containing the chunk of text matched by re, it's size, and tag."
  [[tag re]]
  (fn [s]
    (when-let [chunk (re-find re s)]
      {:tag tag
       :chunk chunk
       :size (count chunk)})))

      
(defn- tokenizer
  "Given an arbitrary number of [tag regex] pairs, return a function
  which when given a string s will return the first matching token of s.
  Token precedence is determined by the order of the pairs. The first 
  and last pairs have the highest and lowest precedence respectively."
  [& tags+regexes]
  (let [fs (map token-fn tags+regexes)]
    (fn [s]
      (some #(% s) fs))))

      
(def
  ^{:private true
    :doc "Tokenizer used during stylesheet compression."}
  stylesheet-tokenizer
  (tokenizer
   ;; String literals
   [:string #"^\"(?:\\.|[^\"])*\""]
   ;; Delimiters 
   [:r-brace #"^\s*\{\s*"]
   [:l-brace #"^;?\s*}"]
   [:r-paren #"^\s*\(\s*"]
   [:l-paren #"^\s*\)"]
   [:comma #"^,\s*"]
   [:colon #"^:\s*"]
   [:semicolon #"^;"]
   ;; White space
   [:space+ #"^ +"]
   [:white-space+ #"^\s+"]
   ;; Everything else 
   [:any #"^."]))

      
(defn compress-stylesheet [stylesheet]
  (loop [s1 stylesheet s2 ""]
    (if-let [{:keys [tag chunk size]} (stylesheet-tokenizer s1)]
      (recur (subs s1 size)
             (str s2 (case tag
                       :string chunk
                       :r-brace "{"
                       :l-brace "}"
                       :r-paren "("
                       :l-paren ")"
                       :comma ","
                       :semi-comma ";"
                       :colon ":"
                       :space+ " "
                       :white-space+ ""
                       chunk)))
      s2)))

;; ## Expansion

;; The expansion process ensures that before a stylesheet is rendered
;; it is in a format that can be easily digested. That is, it produces
;; a new data structure which is a list of only one level.

;; This intermediate process between input and compilation separates
;; concerns between parsing data structures and compiling them to CSS.

;; All data types that implement `IExpandable` should produce a list.

(defprotocol IExpandable
  (expand [this]
    "Return a list containing the expanded form of `this`."))

;; ### List expansion

(defn- expand-seqs
  "Like flatten but only affects seqs."
  [coll]
  (mapcat
   (fn [x]
     (if (seq? x)
       (expand-seqs x)
       (list x)))
   coll))

;; ### Declaration expansion

(defn expand-declaration-1
  [d]
  (let [prefix #(util/as-str %1 "-" %2)]
    (reduce
     (fn [m [k v]]
       (if (util/hash-map? v)
         (reduce
          (fn [m1 [k1 v1]]
            (assoc m1 (prefix k k1) v1))
          m
          (expand-declaration-1 v))
         (assoc m (util/to-str k) v)))
     {}
     d)))

(defn- expand-declaration
  [d]
  (when (seq d)
    (with-meta (expand-declaration-1 d) (meta d))))

;; ### Rule expansion

(def
  ^{:private true
    :doc "Matches a single \"&\" or \"&\" follow by one or more 
  non-whitespace characters."}
  parent-selector-re
  #"^&(?:\S+)?$")

(defn- extract-reference
  "Extract the selector portion of a parent selector reference."
  [selector]
  (when-let [reference (->> (last selector)
                            (util/to-str)
                            (re-find parent-selector-re))]
    (apply str (rest reference))))

(defn- expand-selector-reference
  [selector]
  (if-let [reference (extract-reference selector)]
    (let [parent (butlast selector)]
      (concat (butlast parent)
              (-> (last parent)
                  (util/as-str reference)
                  (list))))
    selector))

(defn- expand-selector [selector parent]
  (let [selector (if (seq parent)
                   (->> (util/cartesian-product parent selector)
                        (map flatten))
                   (map list selector))]
    (map expand-selector-reference selector)))

(defn- expand-rule
  [rule]
  (let [[selector children] (split-with (complement coll?) rule)
        selector (expand-selector selector *selector-context*)
        children (expand children)
        [declarations xs] (divide-vec util/declaration? children)
        ys (with-selector-context
             (if (seq selector)
               selector
               *selector-context*)
             (doall (mapcat expand xs)))]
    (->> (mapcat expand declarations)
         (conj [selector])
         (conj ys))))

;;; ### At-rule expansion

(defmulti ^:private expand-at-rule :identifier)

(defmethod expand-at-rule :default
  [at-rule]
  (list at-rule))

;; #### @keyframes expansion

(defmethod expand-at-rule :keyframes
  [{:keys [value]}]
  (let [{:keys [identifier frames]} value]
    (->> {:identifier (util/to-str identifier)
          :frames (mapcat expand frames)}
         (t/CSSAtRule. :keyframes)
         (list))))

;; #### @media expansion

(defn- expand-media-query-expression [expression]
  (if-let [f (->> [:media-expressions :nesting-behavior]
                  (get-in *flags*)
                  (media-expression-behavior))]
    (f expression *media-query-context*)
    expression))

(defmethod expand-at-rule :media
  [{:keys [value]}]
  (let [{:keys [media-queries rules]} value 
        media-queries (expand-media-query-expression media-queries)
        xs (with-media-query-context media-queries
             (doall (mapcat expand (expand rules))))
        ;; Though media-queries may be nested, they may not be nested
        ;; at compile time. Here we make sure this is the case.  
        [subqueries rules] (divide-vec util/at-media? xs)]
    (cons
     (t/CSSAtRule. :media {:media-queries media-queries
                         :rules rules})
     subqueries)))

;; ### Stylesheet expansion

(defn- expand-stylesheet [xs]
  (->> (expand xs)
       (map expand)
       (apply concat)))
 
(extend-protocol IExpandable
                         
         IndexedSeq
  (expand [this] (expand-seqs this))

         LazySeq
         (expand [this] (expand-seqs this))

         RSeq
         (expand [this] (expand-seqs this))

         NodeSeq
         (expand [this] (expand-seqs this))

         ArrayNodeSeq
         (expand [this] (expand-seqs this))

         Cons
         (expand [this] (expand-seqs this))

         ChunkedCons
         (expand [this] (expand-seqs this))

         ChunkedSeq
         (expand [this] (expand-seqs this))

         PersistentArrayMapSeq
         (expand [this] (expand-seqs this))

         List
         (expand [this] (expand-seqs this))
 
                                      
         PersistentVector
  (expand [this] (expand-rule this))
 
         Subvec
        (expand [this] (expand-rule this))

         BlackNode
        (expand [this] (expand-rule this))

         RedNode
        (expand [this] (expand-rule this))
 
                                   
         PersistentArrayMap
  (expand [this] (list (expand-declaration this)))

         PersistentHashMap
         (expand [this] (list (expand-declaration this)))

         PersistentTreeMap
         (expand [this] (list (expand-declaration this))) 

                   
         t/CSSFunction
  (expand [this] (list this))

                 
         t/CSSAtRule
  (expand [this] (expand-at-rule this))

                
         c/CSSColor
  (expand [this] (list this))
 
              
         default
  (expand [this] (list this))
 
  nil
  (expand [this] nil))

;; ## Rendering

(defprotocol CSSRenderer
  (render-css [this]
    "Convert a Clojure data type in to a string of CSS."))

;; ### Punctuation

(def ^:private comma ", ")
(def ^:private colon ": ")
(def ^:private semicolon ";")
(def ^:private l-brace " {\n")
(def ^:private r-brace "\n}")
(def ^:private l-brace-1 " {\n\n")
(def ^:private r-brace-1 "\n\n}")
(def ^:private rule-sep "\n\n")
(def ^:private indent "  ")

(defn- space-separated-list
  "Return a space separated list of values."
  ([xs]
     (space-separated-list render-css xs))
  ([f xs]
     (string/join " " (map f xs))))

(defn- comma-separated-list
  "Return a comma separated list of values. Subsequences are joined with
   spaces."
  ([xs]
     (comma-separated-list render-css xs))
  ([f xs]
     (let [ys (for [x xs]
                (if (sequential? x)
                  (space-separated-list f x)
                  (f x)))]
       (string/join comma ys))))

(defn- rule-join [xs]
  (string/join rule-sep xs))

(def
  ^{:private true
    :doc "Match the start of a line if the characters immediately
  after it are spaces or used in a CSS id (#), class (.), or tag name."}
  indent-loc-re
       
                          
        
  (js/RegExp. "(?=[ A-Za-z#.}-]+)^" "gm"))

(defn- indent-str [s]
       
                                         
        
  (.replace s indent-loc-re indent))

;; ### Declaration rendering

(defn- render-value
  "Render the value portion of a declaration."
  [x]
  (if (util/at-keyframes? x)
    (util/to-str (get-in x [:value :identifier]))
    (render-css x)))

(defn- render-property-and-value
  [[prop val]]
  (if (set? val)
    (->> (interleave (repeat prop) val)
         (partition 2)
         (map render-property-and-value)
         (string/join "\n"))
    (let [val (if (sequential? val)
                (comma-separated-list render-value val)
                (render-value val))]
      (util/as-str prop colon val semicolon))))

(defn- prefix-declaration
  "If `(:vendors *flags*)` is bound and `declaration` has the meta 
  `{:prefix true}` automatically create vendor prefixed properties."
  [declaration]
  (if-not (:prefix (meta declaration))
    declaration
    (let [ps (keys declaration)
          vs (vals declaration)
          vendors (or (:vendors (meta declaration))
                      (vendors))]
     (mapcat 
      (fn [p v]
        (cons [p v]
              (map
               (fn [vendor p1 v1]
                 (vector (util/vendor-prefix vendor (name p1)) v1))
               vendors
               (repeat p)
               (repeat v))))
      ps
      vs))))

(defn- render-declaration
  [declaration]
  (->> (prefix-declaration declaration)
       (map render-property-and-value)
       (string/join "\n")))

;; ### Rule rendering

(defn- render-selector
  [selector]
  (comma-separated-list selector))

(defn- render-rule
  "Convert a vector to a CSS rule string. The vector is expected to be
  fully expanded."
  [[selector declarations :as rule]]
  (when (and (seq rule) (every? seq rule))
    (str (render-selector selector)
         l-brace
         (->> (map render-css declarations)
              (string/join "\n")
              (indent-str))
         r-brace)))

;; ### Media query rendering

(defn- render-media-expr-part
  "Render the individual components of a media expression."
  [[k v]]
  (let [[sk sv] (map render-value [k v])]
    (cond
     (true? v) sk
     (false? v) (str "not " sk)
     (= "only" sv) (str "only " sk)
     :else (if (and v (seq sv))
             (str "(" sk colon sv ")")
             (str "(" sk ")")))))

(defn- render-media-expr
  "Make a media query expession from one or more maps. Keys are not
  validated but values have the following semantics:
  
    `true`  as in `{:screen true}`  == \"screen\"
    `false` as in `{:screen false}` == \"not screen\"
    `:only` as in `{:screen :only}  == \"only screen\""
  [expr]
  (if (sequential? expr)
    (->> (map render-media-expr expr)
         (comma-separated-list))
    (->> (map render-media-expr-part expr)
         (string/join " and "))))

;; ### Garden type rendering

(defn- render-unit
  "Render a CSSUnit."
  [css-unit]
  (let [{:keys [magnitude unit]} css-unit
        magnitude        magnitude
                                        
                                     
                              ]
    (str magnitude (name unit))))

(defn- render-function
  "Render a CSS function."
  [css-function]
  (let [{:keys [function args]} css-function
        args (if (sequential? args)
               (comma-separated-list args)
               (util/to-str args))]
    (format "%s(%s)" (util/to-str function) args)))

(defn ^:private render-color [c]
  (if-let [a (:alpha c)]
    (let [{:keys [hue saturation lightness]} (garden.color/as-hsl c)
          [s l] (map units/percent [saturation lightness])]
      (format "hsla(%s)" (comma-separated-list [hue s l a])))
    (garden.color/as-hex c)))

;; ### At-rule rendering

(defmulti ^:private render-at-rule
  "Render a CSS at-rule"
  :identifier)

(defmethod render-at-rule :default [_] nil)

;; #### @import rendering

(defmethod render-at-rule :import
  [{:keys [value]}]
  (let [{:keys [url media-queries]} value 
        url (if (string? url)
              (util/wrap-quotes url)
              (render-css url))
        queries (when media-queries
                  (render-media-expr media-queries))]
    (str "@import "
         (if queries (str url " " queries) url)
         semicolon)))

;; #### @keyframes rendering

(defmethod render-at-rule :keyframes
  [{:keys [value]}]
  (let [{:keys [identifier frames]} value]
    (when (seq frames)
      (let [body (str (util/to-str identifier)
                      l-brace-1
                      (->> (map render-css frames)
                           (rule-join)
                           (indent-str))
                      r-brace-1)
            prefix (fn [vendor]
                     (str "@" (util/vendor-prefix vendor "keyframes ")))]
        (->> (map prefix (vendors))
             (cons "@keyframes ")
             (map #(str % body))
             (rule-join))))))

;; #### @media rendering

(defmethod render-at-rule :media
  [{:keys [value]}]
  (let [{:keys [media-queries rules]} value]
    (when (seq rules)
      (str "@media "
           (render-media-expr media-queries)
           l-brace-1
           (-> (map render-css rules)
               (rule-join)
               (indent-str)) 
           r-brace-1))))


;; ### CSSRenderer implementation

(extend-protocol CSSRenderer
                         
         IndexedSeq
  (render-css [this] (map render-css this))

         LazySeq
         (render-css [this] (map render-css this))

         RSeq
         (render-css [this] (map render-css this))

         NodeSeq
         (render-css [this] (map render-css this))

         ArrayNodeSeq
         (render-css [this] (map render-css this))

         Cons
         (render-css [this] (map render-css this))

         ChunkedCons
         (render-css [this] (map render-css this))

         ChunkedSeq
         (render-css [this] (map render-css this))

         PersistentArrayMapSeq
         (render-css [this] (map render-css this))

         List
         (render-css [this] (map render-css this))

                                      
         PersistentVector
  (render-css [this] (render-rule this))

         Subvec
         (render-css [this] (render-rule this))

         BlackNode
         (render-css [this] (render-rule this))

         RedNode
         (render-css [this] (render-rule this))

                                   
         PersistentArrayMap
  (render-css [this] (render-declaration this))

         PersistentHashMap
         (render-css [this] (render-declaration this))

         PersistentTreeMap
         (render-css [this] (render-declaration this))

                          
                                              

         number
         (render-css [this] (str this))

                            
         Keyword
  (render-css [this] (name this))

               
         t/CSSUnit
  (render-css [this] (render-unit this))

                   
         t/CSSFunction
  (render-css [this] (render-function this))

                 
         t/CSSAtRule
  (render-css [this] (render-at-rule this))

                
         c/CSSColor
  (render-css [this] (render-color this))

              
         default
  (render-css [this] (str this))

  nil
  (render-css [this] ""))

;; ## Compilation

(defn- compile-stylesheet
  [flags rules]
  (binding [*flags* flags]
    (->> (expand-stylesheet rules)
         (filter top-level-expression?) 
         (map render-css)
         (remove nil?)
         (rule-join))))

(defn compile-style
  "Convert a sequence of maps into CSS for use with the HTML style
   attribute."
  [ms]
  (->> (filter util/declaration? ms)
       (reduce merge)
       (expand)
       (render-css)
       (first)))

(defn compile-css
  "Convert any number of Clojure data structures to CSS."
  [flags & rules]
  (let [[flags rules] (if (and (util/hash-map? flags)
                               (some (set (keys flags)) (keys *flags*)))
                        [(merge *flags* flags) rules]
                        [*flags* (cons flags rules)])
        output-to (:output-to flags)
        stylesheet (let [stylesheet (compile-stylesheet flags rules)]
                     (if (:pretty-print? flags)
                       stylesheet
                       (compress-stylesheet stylesheet)))]
         
                 
         
                                              
                                    
                   
                 
           stylesheet))

;;;;;;;;;;;; This file autogenerated from src/cljx/garden/compiler.cljx
