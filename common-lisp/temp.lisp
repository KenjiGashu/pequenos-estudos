;;(defparameter num (parse-integer (read-line)))

(defparameter respostas '())

(defun queen-row (queen)
  (car queen))

(defun queen-col (queen)
  (cadr queen))

(defun check-colision (queens-positions queen)
  (if (null queens-positions)
      nil
      (let ((current-queen (car queens-positions)))
	(cond ((= (queen-row current-queen)
		  (queen-row queen))
	       t)
	      ((= (queen-col current-queen)
		  (queen-col queen))
	       t)
	      ((= (abs (- (queen-row current-queen) (queen-row queen))) 
		  (abs (- (queen-col current-queen) (queen-col queen))))
	       t)
	      (t (check-colision (cdr queens-positions) queen))))))

(defun queen-step (N positions step)
  (if (> step N)
      (setf respostas (append respostas (list positions)))
      (loop for i from 1 upto N
	 do (unless (check-colision positions (list step i))
	      (queen-step N
			  (append '() positions (list (list step i)))
			  (+ step 1))))))

(defun print-queen (positions size)
  (loop for queen in positions
       do (loop for i from 1 to size
	     do (if (= (queen-col queen) i)
		    (format t "~D " 1)
		    (format t "~D " 0))
	     finally (format t "~%"))))

(defun queen (N)
  (queen-step N '() 1))

(print-queen (car respostas) 10)
(car respostas)
(queen 10)
(append respostas '(1 2 3))
(print respostas)
respostas
(print-queen '((1 2) (2 4) (3 1) (4 3)) 4)
(car respostas)
;; (check-colision '((1 1) (2 3)) '(4 2))

;; (loop for item in '(1 2 3 4 5)
;;    for i below (length '(1 2 3 4 5))
;;      do (print item))

;;(print-queen '((1 1) (2 2) (3 3)))
(split-sequence:split-sequence-if
            (lambda (item)
              (position item " -+"))
            "aa bb  ccc  dddd--eee++++ffff"
            :remove-empty-subseqs t)

;;helpers
(defun split-string (string delimiter start)
  (let ((len (length string)))
    (if (>= start len)
	nil
	(do ((i start (1+ i)))
	    ((or (>= i len) (char= (char string i) delimiter))
	     (cons (subseq string start i) (split-string string delimiter (1+ i))))))))

;;nao usado :(
(defun char->integer (char)
  (- (char-int char) 48))

(defparameter *leitura-dimensoes* (read-line))
(defparameter *row-col* (make-array 0
				    :element-type 'integer
				    :fill-pointer 0
				    :adjustable t))
;; carrega a dimensao do array em *row-col*
(defun carrega-dimensoes ()
  (loop for c across *leitura-dimensoes*
   do (unless (char= c #\ )
	(vector-push-extend (- (char-int c) 48) *row-col*))))
(carrega-dimensoes)

(defun create-2d-array (row col)
  (make-array (list row col)
	      :element-type 'integer
	      :adjustable t))
(defparameter *array* (create-2d-array (aref *row-col* 0) (aref *row-col* 1)))

;;carrega o array com os numeros
(defun carrega-array ()
  (loop for row below (aref *row-col* 0)
     for num-list = (split-string (read-line) #\Space 0) then (split-string (read-line) #\Space 0)
     do (loop for num in num-list
	   for col = 0 then (1+ col)
	   do (setf (aref *array* row col)
		    (parse-integer num)))))
(carrega-array)

(defun printa-array ()
  (loop for col below (aref *row-col* 1)
     do (loop for row below (aref *row-col* 0)
	   do (format t "~D " (aref *array* row col))
	   finally (format t "~%"))))
(printa-array)


(format t "~a~%" *array*)

(loop for c across "um input"
     do (format t "~@c" c))
;;ler linha de numeros
(loop for c across "1 2 3 4 5"
   for i = 0 then (unless (char= c #\ )
		    (+ i 1))
   do (unless (char= c #\ )
	(setf (aref *array* 1 i) (char->integer c))))

;;carrega array com linhas
(loop for row below (aref *row-col* 0)
   for input = (read-line) then (read-line)
   do (loop for c across input
	   for col = 0 then (unless (char= c #\ )
			      (1+ col))
	   do (progn
		(format t "~a~%" input)
		(unless (char= c #\ )
		  (setf (aref *array* row col)
			(char->integer c))))))

(loop
   for j = 0 then (+ j 1)
   for c = (aref "amsndja" j) then (aref "amsndja" j)
   for i = 0 then (unless (char= c #\ )
		    (+ i 1))
   collect i)

(loop
   for j = 0 then (+ j 1)
   collect j)

(loop repeat 5 
      for x = 0 then y
      for y = 1 then (+ x y)
      collect y)


;; ---------------------------------------------
;; Roy and Symmetric Logos
(defun reverse-list (l)
  (defun iteration (l result)
    (if (null l)
	result
	(if (listp (car l))
	    (iteration (cdr l) (cons (iteration (car l) nil) result))
	    (iteration (cdr l) (cons (car l) result)))))
    (iteration l nil))

(defun compare-list (l1 l2)
  (if (= (car l1) (car l2))))
(null 1)

(= (car '(2 3)) (car '(5 6)))
(reverse-list '((0 0 1 0 0)
		(0 1 0 1 0)
		(1 0 0 0 1)
		(0 1 0 1 0)
		(0 0 1 0 0)))


((0 0 1 0 0)
 (0 1 0 1 0)
 (1 0 0 0 1)
 (0 1 0 1 0)
 (0 0 1 0 0))

;; -----------------------------------------------
;; split
(defun my-split (string &key (delimiterp #'delimiterp))
  (loop :for beg = (position-if-not delimiterp string)
    :then (position-if-not delimiterp string :start (1+ end))
    :for end = (and beg (position-if delimiterp string :start beg))
    :when beg :collect (subseq string beg end)
    :while end))
(defun delimiterp (cha)
  (char= cha #\Space))

(loop for oi = 1 then (1+ oi)
   for x = oi
   collect x
   do (format t "~a " x)
   while (< oi 10))
(format t "oi")


;; --------------------------------------------
;; city travel
;; -----------------------
;; initialize parameters
(defparameter *s* (read))
(defparameter *x* (read))
(defparameter *n* (read))
;;(defparameter *ty* (make-hash-table))
(defparameter *ty* (make-array (list *n*)
			       :element-type 'pair
			       :initial-element -1))
(defparameter teste (make-array (list 10)
				:element-type 'integer
				:adjustable t
				:initial-element -1))

;; --------------------------------
;; arrays of pairs
(loop for i below *n*
   do (setf (aref *ty* i) (vector (read) (read))))

;; -------------------------------------
;; sort array by Ti
(sort *ty* #'< :key (lambda (a) (aref a 0)))

(defun response (day next-day index total)
  (format t "day: ~a next: ~a total: ~a~%" day next-day total)
  (if (>= total *s*)
      day
      (progn (if (= day next-day)
		 (if-let ((next ))
		   (response (1+ day) next (1+ index) (+ total (aref (aref *ty* index) 1)))
		   (response (1+ day) next-day index (+ total (aref (aref *ty* index) 1))))
		 (response (1+ day) next-day index (+ total *x*))))))
(defun response2 (day other-days total)
  (if (>= total *s*)
      (- day 1)
      (if (null other-days)
	  (response (1+ day) other-days (+ total *x*))
	  (if (= day (aref (car other-days) 0))
	      (response2 (1+ day) (cdr other-days) (+ total (aref (car other-days) 1)))
	      (response2 (1+ day) other-days (+ total *x*))))))

(defun next-day (other-days)
  (if (null other-days)
      nil
      (aref (car other-days) 0)))

(defun response3 (day next-day other-days total)
  (if (>= total *s*)
      (1- day)
      (if next-day
	  (loop for d from day upto next-day
	       )
	  (loop d = days then (1+ d)
	     t = (+ total *x*) then (+ total *x*)
	     while (< t *s*)
	     finally )
	  (if))))
(map 'list (lambda (i) i) *ty*)   
(response2 1 (map 'list (lambda (i) i) *ty*) 0)
(response 1 (aref (aref *ty* 0) 0) 0 0)
(aref (aref *ty* (1+ index)) 0)
(loop for index = 0 then (1+ index)
   for day = 1 then next-day
   for next-day = (aref (aref *ty* index) 0)
   for total = (loop for walked-till-day below (- next-day day)
		    ))
(loop for day = 1 then (1+ day)
   for index = 0 then (if (> day (aref (aref *ty* index) 0))
			  (1+ index)
			  index)
   for next-day = (aref (aref *ty* index) 0)
   for dist = (if (= day next-day)
	      (aref (aref *ty* index) 1)
	      *x*)
   for total = dist then (+ total dist)
   while (< total *s*)
   finally (format t "~a" day))

;; (setf (aref *ty* 0 0) 2) 
;; (setf (aref *ty* 0 1) 4)
;; (setf (aref *ty* 1 0) 4)
;; (setf (aref *ty* 1 1) 8)
;; (setf (aref *ty* 1 0) 2) 
;; (setf (aref *ty* 1 1) 4)
;; (setf (aref *ty* 0 0) 4)
;; (setf (aref *ty* 0 1) 8)
;; (setf (aref *ty* 1) (vector 2 4))
;; (setf (aref *ty* 0) (vector 4 8))
;; (aref (vector 2 4) 0)
;; (sort *ty* #'< :key (lambda (a) (aref a 0)))

;; ---------------------------
;; get exception days
;; (loop for i below *n*
;;    for key = (read)
;;    do (setf (gethash key *ty*) (read)))

;; -----------------------------
;; get exception days array
(loop for i below *n*
    do (setf (aref *ty* (read)) (read)))

;; --------------------------------
;; solve with arrays
;; (loop for i = 1 then (1+ i)
;;    for dist = (if (> (aref *ty* i) 0)
;; 		  (aref *ty* i)
;; 		  *x*)
;;    for total = dist then (+ total dist)
;;    while (< total *s*)
;;    finally (format t "~a" i))

;; --------------------------
;; solve with hashmap
;; (loop for i = 1 then (1+ i)
;;    for dist = (if (gethash i *ty*)
;; 		  (gethash i *ty*)
;; 		  *x*)
;;    for total = dist then (+ total dist)
;;    while (< total *s*)
;;    finally (format t "~a" i total))
;; (maphash (lambda (key value) (format t "key: ~a value: ~a~%" key value)) *ty*)

(setf (gethash 0 *my-hash*) 2)
(setf (gethash 2 *my-hash*) 7)
(gethash 2 *my-hash*)
(gethash 19 *ty*)

(loop for total = 0 then (+ total *x*)
  for i = 0 then (1+ i)
  while (< total *s*)
  finally (format t "~a" i))

;; ----------------------------------------
;; high jump
;; (defun simple-jump-obstacle (obstacle pos)
;;   (let* ((x (obstacle-x obstacle))
;; 	 (y (obstacle-y obstacle))
;; 	 (x-jump (- x (/ y *a*)))
;; 	 (x-after-jump (+ x (/ y *a*))))
;;     (format t "~a ~a ~%" x-jump pos)
;;     (list (cons x-jump 0) (cons x y) (cons x-after-jump 0))))
;; (defun jump-more-obstacles (obstacles pos)
;;   (let* ((maior (maior-lista obstacles nil))
;; 	 (b1 (- (cdar maior) (* *a* (caar maior))))
;; 	 (b2 (- (cddr maior) (* (- *a*) (cadr maior))))
;; 	 (pontox (/ (- b2 b1) (* 2 *a*)))
;; 	 (ponto-pulo (cons pontox (+ (* *a* pontox) b1))))
;;     (format t "~a~%~a~%~a~%~a~%~a~%" maior b1 b2 pontox ponto-pulo)
;;     (list (cons (- (car ponto-pulo) (/ (cdr ponto-pulo) *a*)) 0) ponto-pulo (cons (+ (car ponto-pulo) (/ (cdr ponto-pulo) *a*)) 0))))
;; (jump-more-obstacles (list (cons 8 8) (cons 10 8) (cons 12 8)) (cons 0 0))



;; (defun cascade-jump (obstacle-list index pos before-pos answer)
;;   (if (null obstacle-list)
;;       (if (= 0 (cdr (nth 3 (car answer))))
;; 	  t
;; 	  nil)
;;       (progn (if (null answer)
;; 		 (cascade-jump (cdr obstacle-list) (1+ index) (list (car obstacle-list)) (cons (simplre-jump ) answer))
;; 		 (if ()
;; 		     (cascade-jump (cdr obstacle-list) (1+ index) (append before-pos (car obstacle-list)) (cons (more-jump) (cdr answer)))
;; 		     (cascade-jump (cdr obstacle-list) (1+ index) (list (car obstacle-list)) (cons (simple-jump ) answer))))))
;;   (let ((simple-jump (simple-jump-obstacle (aref *obstacle* index))))
;;     (if (null obstacle-list)
;; 	(if simple-jump
;; 	    (cascade-jump obstacle-list (1+ index) simple-jump pos)
;; 	    (cascade-jump (cons (aref *obstacles* index) obstacle-list)
;; 		      (1- index)
;; 		      before-pos
;; 		      before-pos))
;; 	(cascade-jump ))))

;; (defun maior-lista (obstacle-list maiores)
;;   (if (null obstacle-list)
;;       maiores
;;       (if (null maiores)
;; 	  (maior-lista (cdr obstacle-list) (cons
;; 					    (car obstacle-list)
;; 					    (car obstacle-list)))
;; 	  (let ((prim (if (> (compara-maior
;; 			      (car maiores)
;; 			      (car obstacle-list))
;; 			     0)
;; 			  (car maiores)
;; 			  (car obstacle-list)))
;; 		(second (if (> (compara-menor
;; 				(cdr maiores)
;; 				(car obstacle-list))
;; 			       0)
;; 			    (cdr maiores)
;; 			    (car obstacle-list))))
;; 	    (maior-lista (cdr obstacle-list) (cons prim second))))))

;; (defun jump-obstacle (obstacles index)
;;   (let* ((obstacle (aref obstacles index))
;; 	 (start (- (obstacle-x obstacle)
;; 		   (/ (obstacle-y obstacle) *a*)))
;; 	 (end (+ (obstacle-x obstacle)
;; 		 (/ (obstacle-y obstacle) *a*)))
;; 	 (highest-point (encontro-linhas (cons start 0) *a* (cons end 0) (- *a*))))
;;     (make-instance 'jump
;; 		   :start start
;; 		   :end end
;; 		   :highest-point highest-point
;; 		   :obstacles-start index
;; 		   :obstacles-end index)))

(defparameter *n* (read))
(defparameter *m* (read))
(defparameter *l* (read))
(defparameter *a* (read))
(defparameter *obstacles* (make-array (list *n*)
				      :element-type 'pair))

(defun obstacle-x (obs)
  (car obs))
(defun obstacle-y (obs)
  (cdr obs))
(defun make-obstacle (x y)
  (cons x y))
(loop for i below *n*
     do (setf (aref *obstacles* i) (cons (read) (read))))
(sort *obstacles* #'< :key (lambda (a) (car a)))

(defclass jump ()
  ((start :accessor start :initarg :start)
   (end :accessor end :initarg :end)
   (highest-point :accessor highest-point :initarg :highest-point)
   (obstacles-start :accessor obstacles-start :initarg :obstacles-start)
   (obstacles-end :accessor obstacles-end :initarg :obstacles-end)))

(defmethod print-object ((object jump) out)
  (print-unreadable-object (object out :type t)
    (with-accessors ((start start) (end end) (highest-point highest-point) (obstacles-start obstacles-start) (obstacles-end obstacles-end)) object
      (format out "start: ~a, end: ~a, highest-point: ~a, obstacles-start: ~a, obstacles-end: ~a~%" start end highest-point obstacles-start obstacles-end))))

(defun compara-maior (x y)
  (let* ((diff-x-y (- (car y) (car x)))
	 (nova-altura (+ (cdr x) (* *a* diff-x-y))))
    (if (> nova-altura (cdr y))
	1
	(if (< nova-altura (cdr y))
	    -1
	    0))))
(defun compara-menor (x y)
  (let* ((diff-x-y (- (car y) (car x)))
	 (nova-altura (+ (cdr x) (* (- *a*) diff-x-y))))
    (if (> nova-altura (cdr y))
	1
	(if (< nova-altura (cdr y))
	    -1
	    0))))

(defun maior-lista2 (array start end maiores)
  (if (< start end)
      (let ((maior (if (> (compara-maior
			   (car maiores)
			   (aref array start))
			  0)
		       (car maiores)
		       (aref array start)))
	    (menor (if (> (compara-menor
			   (cdr maiores)
			   (aref array start))
			  0)
		       (cdr maiores)
		       (aref array start))))
	(maior-lista2 array (1+ start) end (cons maior menor)))
      maiores))
;;(maior-lista2 *obstacles* 0 3 (cons (aref *obstacles* 0) (aref *obstacles* 0)))

(defun encontro-linhas (p1 a1 p2 a2)
  (let* ((x1 (obstacle-x p1))
	 (y1 (obstacle-y p1))
	 (x2 (obstacle-x p2))
	 (y2 (obstacle-y p2))
	 (b1 (- y1 (* *a* x1)))
	 (b2 (- y2 (* (- *a*) x2)))
	 (new-x (/ (- b2 b1) (- a1 a2)))
	 (new-y (+ (* *a* new-x) b1)))
    (cons new-x new-y)))
;;(encontro-linhas (cons 8 8) *a* (cons 10 8) (- *a*))

(defun obstaculos-conflitantes (this-jump other-jumps response)
  (if (null other-jumps)
      response
      (if (< (obstacles-start this-jump) (end (car other-jumps)))
	  (obstaculos-conflitantes this-jump
				   (cdr other-jumps)
				   (obstacles-start (car other-jumps)))
	  response)))


(defun jump-obstacles (obstacles start end)
  (let* ((dupla-maior (maior-lista2 obstacles start end (cons (cons 0 0) (cons 0 0))))
	 (maior (car dupla-maior))
	 (menor (cdr dupla-maior)))
    (make-instance 'jump
		   :start (- (obstacle-x maior)
			     (/ (obstacle-y maior) *a*))
		   :end (+ (obstacle-x menor)
			   (/ (obstacle-y menor) *a*))
		   :highest-point (encontro-linhas maior *a* menor (- *a*))
		   :obstacles-start start
		   :obstacles-end end)))


(defun cascade-jump2 (obstacles index jumps pos max-height distance)
  (if (>= index (length obstacles))
      (if (< pos distance)
	  (format t "Yes~%")
	  (format t "No~%"))
      (let* ((jump-this-obstacle (jump-obstacles obstacles index index))
	     (conflitos-pulos (obstaculos-conflitantes
			       jump-this-obstacle
			       jumps
			       index))
	     (this-jump (if conflitos-pulos
			    (jump-obstacles obstacles conflitos-pulos index)
			    jump-this-obstacle)))
	(if (> (cdr (highest-point this-jump)) max-height)
	    (format t "No~%")
	    (cascade-jump2 obstacles
			   (1+ index)
			   (cons this-jump jumps)
			   (end this-jump)
			   max-height
			   distance)))))

(defun cascade-jump3 (obstacles index jumps pos max-height distance)
  (if (>= index (length obstacles))
      (if (< pos distance)
	  (format t "Yes~%")
	  (format t "No~%"))
      (let* ((jump-this-obstacle (jump-obstacles obstacles index index))
	     (conflitos-pulos (obstaculos-conflitantes
			       jump-this-obstacle
			       jumps
			       index))
	     (this-jump (if conflitos-pulos
			    (jump-obstacles obstacles conflitos-pulos index)
			    jump-this-obstacle)))
	(if (> (cdr (highest-point this-jump)) max-height)
	    (format t "No~%")
	    (cascade-jump2 obstacles
			   (1+ index)
			   (cons this-jump jumps)
			   (end this-jump)
			   max-height
			   distance)))))

(cascade-jump2 *obstacles* 0 nil 0 *m* *l*)

;; ---------------------------------
;; testes obstaculos e pulos
(defparameter *array2* (make-array (list 3)
				   :element-type 'pair
				   :initial-contents
				   '((2 . 6) (3 . 6) (8 . 6))))
(defparameter *jump1* (make-instance 'jump
			    :start 0
			    :end 4
			    :highest-point 6
			    :obstacles-start 0
			    :obstacles-end 0))
(defparameter *jump2* (make-instance 'jump
			    :start 6
			    :end 10
			    :highest-point 6
			    :obstacles-start 1
			    :obstacles-end 1))
(defparameter *jump3* (make-instance 'jump
				     :start 1
				     :end 5
				     :highest-point 6
				     :obstacles-start 1
				     :obstacles-end 1))
(defparameter *jumpei* (jump-obstacles *array2* 0 2))
(defparameter *jumpei2* (jump-obstacle *array2* 0))
(format t "~a~%" *jumpei2*)
(format t "~a~%" *jumpei2*)
(obstaculos-conflitantes *jump3* (list *jump1*) 0)

;; (loop for i from 0 upto 10
;;    for teste = i then (if (> i 6)
;; 			  1000
;; 			  teste)
;;    do (format t "~a~%" teste)
;;    finally (return (cons teste 1)))

(null 1)
(nil 1 new 0)
((1) 1 0 0)
(simple-jump-obstacle (cons 5 1) 0)
(maior-lista (list (cons 0 111) (cons 1 1) (cons 2 111)) nil)

