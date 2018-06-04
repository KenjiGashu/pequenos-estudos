(list 1 2 3)

(getf (list :a 1 :b 2 :c 3) :c)

(defun make-cd (title artist rating ripped)
  (list :title title :artist artist :rating rating :ripped ripped))
(make-cd "titulo" "um artista" 8 t)

(defvar *db* nil)
(defun add-record (cd) (push cd *db*))
(add-record (make-cd "titulo" "um artista" 8 t))
(add-record (make-cd "titulo2" "dois artista" 4 t))

(defun dump-db ()
  (dolist (cd *db*)
    (format t "~{~a:~10t~a~%~}~%" cd)))
(dump-db)

(defun prompt-read (prompt)
  (format *query-io* "~a: " prompt)
  (force-output *query-io*)
  (read-line *query-io*))
(defun prompt-for-cd ()
  (make-cd
   (prompt-read "Title")
   (prompt-read "Artist")
   (or (parse-integer (prompt-read "Rating") :junk-allowed t) 0)
   (y-or-n-p "Ripped [y/n]: ")))
(prompt-for-cd)


(defun add-cds ()
  (loop (add-record (prompt-for-cd))
      (if (not (y-or-n-p "Another? [y/n]: ")) (return))))

(defun save-db (filename)
  (with-open-file (out filename
                   :direction :output
                   :if-exists :supersede)
    (with-standard-io-syntax
      (print *db* out))))
(defun load-db (filename)
  (with-open-file (in filename)
    (with-standard-io-syntax
      (setf *db* (read in)))))

(defun select-by-artist (artist)
  (remove-if-not
   #'(lambda (cd) (equal (getf cd :artist) artist))
   *db*))
(defun select (selector-fn)
  (remove-if-not selector-fn *db*))
;; tem que usar o select assim:
(select #'(lambda (cd) (equal (getf cd :artist) "Dixie Chicks")))
;; para deixar menos feio usar os selectors
(defun artist-selector (artist)
  #'(lambda (cd) (equal (getf cd :artist) artist)))
;; selector geral!:
(defun where (&key title artist rating (ripped nil ripped-p))
  #'(lambda (cd)
      (and
       (if title    (equal (getf cd :title)  title)  t)
       (if artist   (equal (getf cd :artist) artist) t)
       (if rating   (equal (getf cd :rating) rating) t)
       (if ripped-p (equal (getf cd :ripped) ripped) t))))
;; usos:
(select (where :artist "Dixie Chicks"))
(select (where :rating 10 :ripped nil))

;; mesma ideia no update
(defun update (selector-fn &key title artist rating (ripped nil ripped-p))
  (setf *db*
        (mapcar
         #'(lambda (row)
             (when (funcall selector-fn row)
               (if title    (setf (getf row :title) title))
               (if artist   (setf (getf row :artist) artist))
               (if rating   (setf (getf row :rating) rating))
               (if ripped-p (setf (getf row :ripped) ripped)))
             row) *db*)))

;; usos:
(update (where :artist "Dixie Chicks") :rating 11)

;; delete
(defun delete-rows (selector-fn)
  (setf *db* (remove-if selector-fn *db*)))

;; usando macros para deixar o código menor.
;; ele gera só os ifs necessarios no select, tipo isso daqui:
(select
 #'(lambda (cd)
     (and (equal (getf cd :title) "Give Us a Break")
          (equal (getf cd :ripped) t))))

;; exemplos de macros
(defmacro backwards (expr) (reverse expr))
(backwards ("hello, world" t format))
;; retornando lista de codigo
(defun make-comparison-expr (field value)
  (list 'equal (list 'getf 'cd field) value))
;; retornando lista de codigo correto
(defun make-comparison-expr (field value)
  `(equal (getf cd ,field) ,value))
(defun make-comparisons-list (fields)
  (loop while fields
     collecting (make-comparison-expr (pop fields) (pop fields))))
(defmacro where (&rest clauses)
  `#'(lambda (cd) (and ,@(make-comparisons-list clauses))))
(macroexpand-1 '(where :title "Give Us a Break" :ripped t))
