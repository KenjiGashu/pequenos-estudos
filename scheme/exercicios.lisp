
;; exercise 2.2
(define (print-point p)
    (newline)
  (display "(")
  (display (x-point p))
  (display ",")
  (display (y-point p))
  (display ")"))

(define (make-point x y)
    (cons x y))

(define (x-point p)
    (car p))

(define (y-point p)
    (cdr p))

(define (make-segment p1 p2)
    (cons p1 p2))

(define (start-segment s)
    (car s))

(define (end-segment s)
    (cdr s))

(define (midpoint-segment s)
    (make-point
     (/ (+ (x-point (start-segment s)) (x-point (end-segment s))) 2)
     (/ (+ (y-point (start-segment s)) (y-point (end-segment s))) 2)))




;; exercise 2.3
;; ---- usa o make point do exercicio anterior

;; make rectangle
(define (make-rectangle1 p1 p2 p3 p4)
    (list p1 p2 p3 p4))

;; get point
(define (get-point1 num r)
    (cond (= num 1) (car r))
  (cond (= num 2) (car (cons r)))
  (cond (= num 3) (car (cons (cons r))))
  (cond (= num 4) (car (cons (cons (cons r))))))


(define (make-rectangle2 p1 p2 p3 p4)
    (cons p1 (cons p2 (cons p3 (cons p4 ())))))

(define)
(cdr (cdr (cdr (cdr (list (cons 1 2) (cons 2 3) (cons 3 4) (cons 4 5))))))


(cdr (cons (cons 1 2) (cons 3 4)))

ar (cdr (cdr (cdr (make-rectangle2 (make-point 1 1) (make-point 1 2) (make-point 2 1) (make-point 2 2)))))

(make-rectangle1 (make-point 1 1) (make-point 1 2) (make-point 2 1) (make-point 2 2))


;; exercise 2.4

(define (cons x y)
    (lambda (m) (m x y)))
(define (car z)
    (z (lambda (p q) p)))
(define (cdr z)
    (z (lambda (p q) q)))

;; exercize 2.5

(define (cons x y)
    (* (* 2 x)
       (* 3 y)))

(define (divid z resp)
    (if (or (> (modulo z 2) 0) (< z 2))
	resp
	(divid (/ z 2) (+ resp 1))))

(define (dividodd z resp)
    (if (or (> (modulo z 3) 0) (< z 3))
	resp
	(dividodd (/ z 3) (+ resp 1))))

(define (testes z resp)
    (if (or (> (modulo z 3) 0) (< z 3))
	resp
	(testes (- z 1) (+ resp 1))))

(dividodd 4 0)
(define (car z)
    (divid z 0))


;; bonus exercises 2.7+

(define (make-interval x y)
    (cons x y))

(define (lower-bound z)
    (car z))

(define (upper-bound z)
    (cdr z))

(define (add-interval x y)
    (make-interval (+ (lower-bound x) (lower-bound y))
		   (+ (upper-bound x) (upper-bound y))))

(define (mul-interval x y)
    (let ((p1 (* (lower-bound x) (lower-bound y)))
	  (p2 (* (lower-bound x) (upper-bound y)))
	  (p3 (* (upper-bound x) (lower-bound y)))
	  (p4 (* (upper-bound x) (upper-bound y))))
      (make-interval (min p1 p2 p3 p4)
		     (max p1 p2 p3 p4))))

(define (div-interval x y)
    (if (= (width-interval x) 0)
	0
	(mul-interval x
		      (make-interval (/ 1.0 (upper-bound y))
				     (/ 1.0 (lower-bound y))))))
(define (sub-interval x y)
    (make-interval (- (lower-bound x) (lower-bound y))
		   (- (upper-bound x) (upper-bound y))))

(define (width-interval x)
    (/ (- (upper-bound x) (lower-bound x)) 2))

(define (equal-interval x y)
    (if (and (= (upper-bound x) (upper-bound y))
	     (= (lower-bound x) (lower-bound y)))
	#t
	#f))

(define (print-before-returning data)
    (display data) (newline)
    data)

(define int1 (make-interval 10 20))
(define int2 (make-interval 5 15))
(= (width-interval (sub-interval int1 int2)) (- (width-interval int1) (width-interval int2)))
(= (print-before-returning (width-interval (mul-interval int1 int2))) (print-before-returning (* (width-interval int1) (width-interval int2))))


(define (fast-mul-interval x y)
    (let ((l-x (lower-bound x))
	  (u-x (upper-bound x))
	  (l-y (lower-bound y))
	  (u-y (upper-bound y)))
      (cond ((> l-x 0) 
					;x > 0
	     (cond ((> l-y 0)
					;y > 0
		    (make-interval (* l-x l-y) (* u-x u-y))
		    )
		   ((< u-y 0)
					;y < 0
		    (make-interval (* u-x l-y) (* l-x u-y))
		    )
		   (else
					;y contains 0
		    (make-interval (* u-x l-y) (* u-y u-x))
		    ))
	     )
	    ((> l-y 0)
					;y > 0
	     (if (< u-x 0)
					; x < 0
		 (make-interval (* u-y l-x) (* l-y u-x))
					; x contains 0
		 (make-interval (* l-x u-y) (* u-x l-y))
		 )
	     )
	    ((< u-x 0)
					;x < 0
	     (if (< u-y 0)
					; y < 0
		 (make-interval (* u-x u-y) (* l-x l-y))
					; y contains 0
		 (make-interval (* u-y u-x) (* l-y u-x))
		 )
	     )
	    ((< u-y 0)
					;y < 0 and x contains 0
	     (make-interval (* u-y u-x) (* l-x u-y))
	     )
	    (else 
					;x and y both contain 0
	     (let ((p1 (* l-x l-y))
		   (p2 (* l-x u-y))
		   (p3 (* u-x u-y))
		   (p4 (* u-x l-y)))
	       (make-interval (min p1 p2 p3 p4) (max p1 p2 p3 p4)))
	     ))))


(define (make-center-width c w)
    (make-interval (- c w) (+ c w)))
(define (center i)
    (/ (+ (lower-bound i) (upper-bound i)) 2))
(define (width i)
    (/ (- (upper-bound i) (lower-bound i)) 2))

(define (make-center-percentage c p)
    (make-interval (* (- 1 p) c) (* (+ 1 p) c)))

(define int3 (make-interval 90 110))
(define int4 (make-interval 48 52))
(define int5 (make-interval 76 84))
(define int6 (make-center-percentage 40 0.04))
(define int7 (make-center-percentage 70 0.03))


(div-interval int4 int4)
(div-interval int5 int4)

(percentage int3)

(define (percentage i)
    (- (/ (upper-bound i) (center i)) 1))


;; exercise 2.17

(define (last-pair l)
    (define (iter items result)
	(if (null? items)
	    result
	    (iter (cdr items) items)))
  (iter l l))

;; exercise 2.18 reverse
(define nil '())
(define (reverse l)
    (define (iter l result)
	(if (null? l)
	    result
	    (iter (cdr l) (cons (car l) result))))
  (iter l nil))

;; exercise 2.19

(define us-coins (list 50 25 10 5 1))
(define uk-coins (list 100 50 20 10 5 2 1 0.5))

(define (cc amount coin-values)
    (cond ((= amount 0) 1)
	  ((or (< amount 0) (no-more? coin-values)) 0)
	  (else
	   (+ (cc amount
		  (except-first-denomination coin-values))
	      (cc (- amount
		     (first-denomination coin-values))
		  coin-values)))))

(define (first-denomination denominations) (car denominations))
(define (except-first-denomination denominations) (cdr denominations))
(define (no-more? denominations) (null? denominations))

(cc 100 (list 50 25 10 5 1))

;; 2.20

(define (same-parity . l)
    (define (iter l par)
	(if (null? l)
	    '()
	    (if (= par (modulo (car l) 2))
		(cons (car l) (iter (cdr l) par))
		(iter (cdr l) par))))
  (iter l (modulo (car l) 2)))

(define (iter l par)
    (if (null? l)
	'()
	(if (= par (modulo (car l) 2))
	    (cons (car l) (iter (cdr l) par))
	    (iter (cdr l) par))))
(same-parity 1 2 3 4 5 6)

(define (map proc items)
    (if (null? items)
	'()
	(cons (proc (car items))
	      (map proc (cdr items)))))

(map (lambda (x) (* 2 x)) (list 1 2 3 4 5 6))

;; exercise 2.21
(define (square-list items)
    (if (null? items)
	'()
	(cons (* (car items) (car items))
	      (square-list (cdr items)))))

(define (square-list2 items)
    (map (lambda (x) (* x x)) items))

;; exercise 2.22
(define (square-list items)
    (define (iter things answer)
	(if (null? things)
	    answer
	    (iter (cdr things)
		  (cons (square (car things))
			answer))))
  (iter items nil))

(define (square-list items)
    (define (iter things answer)
	(if (null? things)
	    answer
	    (iter (cdr things)
		  (cons answer
			(square (car things))))))
  (iter items nil))

;; faz o car de um item apontar para o car da chamada anterior
;; trocando a ordem dos elementos do cons vai fazer ele parar de funcionar

;; exercise 2.23

(define (for-each proc items)
    (cond ((null? items) '())
	  (else   (proc (car items))
		  (for-each proc (cdr items)))))

(for-each (lambda (x) (newline) (display x))
	  (list 1 23 3))

(define (count-leaves x)
    (cond ((null? x) 0)
	  ((not (pair? x)) 1)
	  (else (+ (count-leaves (car x))
		   (count-leaves (cdr x))))))

(list 1 (list 2 (list 3 4)))

;; 2.25
(car (cdr (car (cdr (cdr list1)))))
(car (car list2))
(car (cdr (car (cdr (car (cdr(car (cdr (car (cdr (car (cdr list3))))))))))))

(define list1 (list 1 3 ( list 5 7) 9))
(define list2 (list (list 7)))
(define list3 (list 1 (list 2 (list 3 (list 4 (list 5 (list 6 7)))))))

;; 2.26
(define list4 (list 1 2 3))
(define list5 (list 4 5 6))

(append list4 list5)
(cdr (cons list4 list5))
(car (cdr (list list4 list5)))

;; 2.27
(define nil '())
(define (deep-reverse l)
    (define (iter l result)
	(if (null? l)
	    result
	    (if (pair? (car l))
		(iter (cdr l) (cons (iter (car l) '()) result))
		(iter (cdr l) (cons (car l) result)))))
  (iter l nil))

(deep-reverse (list (list 1 2 3) 1 2 3 4))
(deep-reverse (list (list 1 2) (list 3 4)))


;; 2.28
(cons (list) 1)
(append (append (list ) 1) 2)
(append 1 2)


(define (fringe tree) 
    (define nil '()) 
  (cond ((null? tree) nil) 
	((not (pair? tree)) (list tree)) 
	(else (append (fringe (car tree)) (fringe (cdr tree)))))) 


(cons 1 (cons 2 (cons 3 '())))
(cons 1 (list 2 3))
(fringe (list 1 2 3 4))
(fringe (list (list 1 2) (list 3 4)))

;; 2.29

(define (make-mobile left right)
    (list left right))
(define (make-branch length structure)
    (list length structure))
(define (left-branch mobile)
    (car mobile))
(define (right-branch mobile)
    (car (cdr mobile)))
(define (branch-length branch)
    (car branch))
(define (branch-structure branch)
    (car (cdr branch)))

(define (branch-weight branch) 
   (let ((s (branch-structure branch))) 
     (if (pair? s) 
         (total-weight s) 
         s))) 
(branch-weight (make-branch 10 10))

(define (total-weight mobile)
    (define (mobile? m)
	(pair? m))
  (if (not (mobile? mobile)) mobile
      (+ (total-weight (branch-structure (left-branch mobile)))
	 (total-weight (branch-structure (right-branch mobile))))))
(make-mobile (make-branch 10 10) (make-branch 10 10))
(make-mobile (make-branch 1 10) (make-branch 1 (make-mobile (make-branch 1 5) (make-branch 1 5))))

(left-branch (make-mobile (make-branch 10 10) (make-branch 10 10)))
(right-branch (make-mobile (make-branch 10 10) (make-branch 10 10)))
(branch-length (left-branch (make-mobile (make-branch 10 10) (make-branch 10 10))))
(branch-structure (left-branch (make-mobile (make-branch 10 10) (make-branch 10 10))))
(branch-structure (left-branch (make-mobile (make-branch 1 (make-mobile (make-branch 1 5) (make-branch 1 5))) (make-branch 1 10))))
(branch-length (right-branch (make-mobile (make-branch 10 10) (make-branch 10 10))))
(branch-structure (right-branch (make-mobile (make-branch 1 10) (make-branch 1 (make-mobile (make-branch 1 5) (make-branch 1 5))))))

(define (branch-balanced? b)
    (let ((s (branch-structure b)))
      (if (pair? s)
	  (balanced? s)
	  #t)))

(define (branch-torque b)
    (* (branch-weight b)
       (branch-length b)))
 (define (balanced? mobile) 
  
   (let ((left (left-branch mobile)) 
         (right (right-branch mobile))) 
     (and (= (branch-torque left) 
             (branch-torque right)) 
          (branch-balanced? left) 
          (branch-balanced? right))))

(balanced? (make-mobile (make-branch 10 10) (make-branch 10 10)))

(total-weight (make-mobile (make-branch 10 10) (make-branch 10 10)))


;; 2.30
(define (left tree)
    (car tree))

(define (right tree))
(car (cdr (list 1
      (list 2 (list 3 4) 5)
      (list 6 7))))

(define (square-tree tree)
    (cond ((null? tree) tree)
	  ((not (pair? tree)) (* tree tree))
	  (else (cons (square-tree (car tree))
		      (square-tree (cdr tree))))))
(square-tree '())
(square-tree (list 1))


(square-tree (list 1
      (list 2 (list 3 4) 5)
      (list 6 7)))

;; exercise 2.31

(define (map proc items)
    (if (null? items)
	'()
	(cons (proc (car items))
	      (map proc (cdr items)))))

(define (square-tree2 tree)
    (define (square x) (* x x))
  (define (map-tree proc tree)
      (cond ((null? tree) tree)
	    ((pair? tree) (cons (map-tree proc (car tree)) (map-tree proc (cdr tree))))
	    (else (proc tree))))
  (map-tree square tree))

(define (tree-map proc tree) 
    (map (lambda (sub-tree) 
	   (if (pair? sub-tree) 
	       (tree-map proc sub-tree) 
	       (proc sub-tree))) 
	 tree)) 

(square-tree2 '())
(square-tree2 (list 1 2 6))

(square-tree2 (list 1
      (list 2 (list 3 4) 5)
      (list 6 7)))


;; 2.32

(define (subsets s)
    (if (null? s)
	(list '())
	(let ((rest (subsets (cdr s))))
	  (append rest (map (lambda (x) (cons (car s) x))
			    rest)))))

(subsets (list 1 2 3))
(subsets '())
(subsets (list 1))

;; 
