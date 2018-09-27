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
(setq *s* (read))
