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


;; 2.33

;; filter
(define (filter predicate sequence)
    (cond ((null? sequence) nil)
	  ((predicate (car sequence))
	   (cons (car sequence)
		 (filter predicate (cdr sequence))))
	  (else (filter predicate (cdr sequence)))))

;; accumulate
(define (accumulate op initial sequence)
    (if (null? sequence)
	initial
	(op (car sequence)
	    (accumulate op initial (cdr sequence)))))


(define (map p sequence)
    (accumulate (lambda (x y) (cons (p x) y)) nil sequence))

(define (append seq1 seq2)
    (accumulate cons seq2 seq1))

(define (length sequence)
    (accumulate (lambda (x y) (+ 1 y)) 0 sequence))


;; 2.34

(define (map proc items)
    (if (null? items)
	'()
	(cons (proc (car items))
	      (map proc (cdr items)))))

(define (horner-eval x coefficient-sequence)
    (accumulate (lambda (this-coeff higher-terms) (+ (* higher-terms x) this-coeff))
		0
		coefficient-sequence))

(horner-eval 2 (list 1 3 0 5 0 1))

;; 2.35

;; map
(define (map proc items)
    (if (null? items)
	'()
	(cons (proc (car items))
	      (map proc (cdr items)))))

;; accumulate
(define (accumulate op initial sequence)
    (if (null? sequence)
	initial
	(op (car sequence)
	    (accumulate op initial (cdr sequence)))))

;; old count leavews
(define (count-leaves2 x)
    (cond ((null? x) 0)
	  ((not (pair? x)) 1)
	  (else (+ (count-leaves2 (car x))
		   (count-leaves2 (cdr x))))))

(define (count-leaves t)
    (accumulate +
		0
		(map (lambda (t)
		       (cond ((null? t) '())
			     ((pair? t) (count-leaves t))
			     (else 1)))
		     t)))

(list (list (list 1 2) (list 3 4)) (list (list 5 6 7) (list 8 9 10)))
(count-leaves2 (list (list (list 1 2) (list 3 4)) (list (list 5 6 7) (list 8 9 10))))
(count-leaves (list (list (list 1 2) (list 3 4)) (list (list 5 6 7) (list 8 9 10))))


;; 2.36

(list (list 1 2 3) (list 4 5 6) (list 7 8 9) (list 10 11 12))

(car (cdr (list 1 2 3 4 5 6)))

(define (accumulate-n op init seqs)
    (define (filter jumps seq)
	(cond ((null? seq) '())
	      ((= jumps 0) (car seq))
	      (else (filter (- jumps 1) (cdr seq)))))
  (define (nths n t)
      (cond ((pair? t) (cons (filter n (car t)) (nths n (cdr t))))))
  (if (null? (car seqs))
      '()
      (cons (accumulate op init (nths )) ;jesus!
	    ((accumulate-n op init (car seqs))))))

;; solucao

(define (accumulate-n op init sequence) 
    (define nil '()) 
  (if (null? (car sequence)) 
      nil 
      (cons (accumulate op init (map car sequence)) 
	    (accumulate-n op init (map cdr sequence))))) 

(accumulate-n + 0 (list (list 1 2 3) (list 4 5 6) (list 7 8 9) (list 10 11 12)))



;; 2.37


(define (dot-product v w)
    (accumulate + 0 (map * v w)))

(define (matrix-*-vector m v)
    (map (lambda (m-row)
	   (dot-product m-row v))
	 m))

(define (transpose mat)
    (accumulate-n cons '() mat))

(define (matrix-*-matrix m n)
    (let ((cols (transpose n)))
      (map (lambda (m-row)
	     (map (lambda (n-col)
		    (dot-product m-row n-col))
		  cols))
	   m)))


;; 2.38

(define (fold-left op initial sequence)
    (define (iter result rest)
	(if (null? rest)
	    result
	    (iter (op result (car rest))
		  (cdr rest))))
  (iter initial sequence))

(define (fold-right op initial sequence)
    (if (null? sequence)
	initial
	(op (car sequence)
	    (accumulate op initial (cdr sequence)))))

(define nil '())

(fold-right / 1 (list 1 2 3))
(fold-left / 1 (list 1 2 3))
(fold-right list nil (list 1 2 3))
(fold-left list nil (list 1 2 3))
;; eles têm que ser comutativo


;; 2.39


(define (reverse sequence)
    (fold-right (lambda (x y)
		  (append y (list x)))
		nil sequence))
(define (reverse sequence)
    (fold-left (lambda (x y) (cons y x)) nil sequence))

(reverse (list 1 2 3 ))


;; livro

;; map
(define (map proc items)
    (if (null? items)
	'()
	(cons (proc (car items))
	      (map proc (cdr items)))))

;; accumulate
(define (accumulate op initial sequence)
    (if (null? sequence)
	initial
	(op (car sequence)
	    (accumulate op initial (cdr sequence)))))

(define nil '())

;; interval
(define (enumerate-interval low high)
    (if (> low high)
	nil
	(cons low (enumerate-interval (+ low 1) high))))

(map (lambda (i)
       (map (lambda (j) (list i j))
	    (enumerate-interval 1 (- i 1))))
     (enumerate-interval 1 5))

(accumulate append
	    nil
	    (map (lambda (i)
		   (map (lambda (j) (list i j))
			(enumerate-interval 1 (- i 1))))
		 (enumerate-interval 1 5)))

(define (flatmap proc seq)
    (accumulate append nil (map proc seq)))

(define (prime-sum? pair)
    (prime? (+ (car pair) (cadr pair))))

(define (make-pair-sum pair)
    (list (car pair) (cadr pair) (+ (car pair) (cadr pair))))

(define (fast-prime? n times)
    (cond ((= times 0) true)
	  ((fermat-test n) (fast-prime? n (- times 1)))
	  (else false)))

(define (prime? n)
    (= n (smallest-divisor n)))
(define (square x) (* x x))

(define (smallest-divisor n)
    (find-divisor n 2))
(define (find-divisor n test-divisor)
    (cond ((> (square test-divisor) n) n)
	  ((divides? test-divisor n) test-divisor)
	  (else (find-divisor n (+ test-divisor 1)))))
(define (divides? a b)
    (= (remainder b a) 0))

(define (prime-sum-pairs n)
    (map make-pair-sum
	 (filter prime-sum?
		 (flatmap
		  (lambda (i)
		    (map (lambda (j) (list i j))
			 (enumerate-interval 1 (- i 1))))
		  (enumerate-interval 1 n)))))



(define (permutations s)
    (if (null? s)
					; empty set?
	(list nil)
					; sequence containing empty set
	(flatmap (lambda (x)
		   (map (lambda (p) (cons x p))
			(permutations (remove x s))))
		 s)))
;; filter
(define (filter predicate sequence)
    (cond ((null? sequence) nil)
	  ((predicate (car sequence))
	   (cons (car sequence)
		 (filter predicate (cdr sequence))))
	  (else (filter predicate (cdr sequence)))))

(define (remove item sequence)
    (filter (lambda (x) (not (= x item)))
	    sequence))


;; exercise 2.40
(define (unique-pairs n)
    (let ((low 1)
	  (high n))
      (flatmap (lambda (i)
		 (map (lambda (j)
			(list i j))
		      (enumerate-interval 1 i)))
	       (enumerate-interval low high))))

(define (prime-sum-pairs n)
    (map make-pair-sum
	 (filter prime-sum?
		 (unique-pairs n))))

(unique-pairs 4)


(prime-sum-pairs 5)



;; exrecise 2.41

;; flatmap
(define (flatmap proc seq)
    (accumulate append nil (map proc seq)))

(define (map proc items)
    (if (null? items)
	'()
	(cons (proc (car items))
	      (map proc (cdr items)))))

;; make-interval
(define (make-interval low high)
    (cond ((> low high) '())
	  (else (cons low (make-interval (+ low 1) high)))))
					;make-triplet
(define (make-triplet x y z)
    (list x y z))

(make-interval 1 4)

;; accumulate
(define (accumulate op initial sequence)
    (if (null? sequence)
	initial
	(op (car sequence)
	    (accumulate op initial (cdr sequence)))))

;; nil
(define nil '())

;; filter 
(define (filter predicate sequence)
    (cond ((null? sequence) nil)
	  ((predicate (car sequence))
	   (cons (car sequence)
		 (filter predicate (cdr sequence))))
	  (else (filter predicate (cdr sequence)))))

(define (unique-triplets n)
    (flatmap (lambda (i)
	       (flatmap (lambda (j)
			  (map (lambda (k)
				 (make-triplet i j k))
			       (make-interval 1 j)))
			(make-interval 1 i)))
	     (make-interval 1 n)))

(unique-triplets 3)

(define (sum-triplet-equal ))

(define (triplet-sum-s range sum)
    (define (sum-triplet-equal? n)
	(= (accumulate + 0 n) sum))
  (filter sum-triplet-equal? (unique-triplets range)))

(triplet-sum-s 3 5)

(triplet-sum-s)



;; exercise 2.42

(define (absolute x)
    (cond ((< x 0) (- x))
	  (else x)))

;; teste abso
(absolute (- 20))
(absolute 20)

(define (safe? k positions)

    ;; (cond ((null? positions) #t)
    ;; 	  ((> 1 0) #f)
    ;; 	  ((= (caar (positions)) (car k)) #f)
    ;; 	  ((= (absolute (- (caar (positions)) (car k)))
    ;; 	      (absolute (- (cadar (positions)) (cadr k))))
    ;; 	   #f)
    ;; 	  ((= (cadar (positions)) (cadr k)) #f)
    ;; 	  (else (safe? k (cdr positions)))))

    (let ((row (caar positions))
	  (col (cadar positions)))
      (define (func queen positions)
	  (if (null? positions) #t
	      (let ((row (car queen))
		(col (cadr queen))
		(pr (caar positions))
		(pc (cadar positions)))
	    (cond ((null? positions) #t)
		  ((= row pr) #f)
		  ((= col pc))
		  ((= (absolute (- row pr))
		      (absolute (- col pc)))
		   #f)
		  (else (func queen (cdr positions)))))))
      (func (list row col) (cdr positions))))

(define (safe? oi tchau)
    (display oi))

(safe? '3 (list (list 1 1) (list 2 4)))


;;listas
(list (list 1 2))
(list (list 1 3) (list 2 6))
(list (list 4 7) (list 1 2) (list 3 4))



;; filter
(define (filter predicate sequence)
    (cond ((null? sequence) nil)
	  ((predicate (car sequence))
	   (cons (car sequence)
		 (filter predicate (cdr sequence))))
	  (else (filter predicate (cdr sequence)))))

;; flatmap
(define (flatmap proc seq)
    (accumulate append nil (map proc seq)))

;; make-interval
(define (make-interval low high)
    (cond ((> low high) '())
	  (else (cons low (make-interval (+ low 1) high)))))
					;make-triplet
(define (make-triplet x y z)
    (list x y z))

(make-interval 1 4)

;; accumulate
(define (accumulate op initial sequence)
    (if (null? sequence)
	initial
	(op (car sequence)
	    (accumulate op initial (cdr sequence)))))

;; map
(define (map proc items)
    (if (null? items)
	'()
	(cons (proc (car items))
	      (map proc (cdr items)))))


(define (adjoin-position new-row k rest-of-queens)
    ;; (map (lambda (rest-of-queens)
    ;; 	   (cons (list new-row k) rest-of-queens))
    ;; 	 rest-of-queens)
  (cons (list new-row k) rest-of-queens))

(define (queens board-size)
    (define empty-board '())
    (define (queen-cols k)
	(if (= k 0)
	    (list empty-board)
	    (filter
	     (lambda (positions) (safe? k positions))
	     (flatmap
	      (lambda (rest-of-queens)
		(map (lambda (new-row)
		       (adjoin-position new-row k rest-of-queens))
		     (enumerate-interval 1 board-size)))
	      (queen-cols (- k 1))))))
  (queen-cols board-size))

(define (enumerate-interval low high)
    (if (> low high)
	nil
	(cons low (enumerate-interval (+ low 1) high))))

(define nil '())

(flatmap
 (lambda (rest-of-queens)
   (map (lambda (new-row)
	  (adjoin-position new-row 3 rest-of-queens))
	(enumerate-interval 1 4))) 
 (list (list (list 1 1) (list 2 4))))


(car (map (lambda (new-row)
       (adjoin-position new-row 3 (list (list (list 1 1) (list 2 4)))))
     (enumerate-interval 1 4)))

(map (lambda (new-row)
       (adjoin-position new-row 3 (list (list (list 1 1) (list 2 4)))))
     (enumerate-interval 1 4))

(list (list (list (list 1 3) (list 1 1) (list 2 4)))
 (list (list (list 2 3) (list 1 1) (list 2 4)))
 (list (list (list 3 3) (list 1 1) (list 2 4)))
 (list (list (list 4 3) (list 1 1) (list 2 4))))

(accumulate append nil (map (lambda (rest-of-queens)
			      (map (lambda (new-row)
				     (adjoin-position new-row 3 rest-of-queens))
				   (enumerate-interval 1 4)))
			    (list (list (list 1 1) (list 2 4)) (list (list 7 8) (list 6 7)))))

(list (list 1 1) (list 2 4))

(list (list (list 1 1) (list 2 4)))

(adjoin-position 4 3 (list (list 1 1) (list 2 4)))

(cons (list 4 3) (list (list 1 1) (list 2 4)))

(queens 3)
(queens 0)
(queens 1)
(queens 2)
(queens 4)


;; exercise 2.43

;; creates 64 rows instead of 8 rows when mapping


(flatmap
 (lambda (rest-of-queens)
   (map (lambda (new-row)
	  (adjoin-position new-row 3 rest-of-queens))
	(enumerate-interval 1 4))) 
 (queen-cols (- k 1)))


(flatmap
 (lambda (new-row)
   (map (lambda (rest-of-queens)
	  (adjoin-position new-row k rest-of-queens))
	(queen-cols (- k 1))))
 (enumerate-interval 1 board-size))


;; exercise 2.44

(define (up-split painter n)
    (if (= n 0)
	painter
	(let ((smaller (up-split painter (- n 1))))
	  (below (beside smaller smaller) painter))))


;;; =========== 2.3 =================

;; 2.53???
(define (memq item list)
    (cond ((null? list) #f) 
	  ((eq? item (car list)) list)
	  (else (memq item (cdr list)))))

;; 2.54

(define (equal? list1 list2)
    (or (eq? list1 list2)
	(and (equal? (car list1) (car list2))
	     (equal? (cdr list1) (cdr list2)))))

(define (equal? list1 list2)
    (cond ((and (null? list1) (null? list2)) #t)
	  ((not (eq? (car list1) (car list2))) #f)
	  (else (equal? (cdr list1) (cdr list2)))))



(equal? (list  1 2) (list 1 2)) 

(equal? (list 1 2 3) (list 1 2 3))




;; 2.3.2 ??????????????????????????

(define (deriv exp var)
    (cond ((number? exp) 0)
	  ((variable? exp)
	   (if (same-variable? exp var) 1 0))
	  ((sum?2 exp)
	   (make-sum (deriv (addend2 exp) var)
		     (deriv (augend exp) var)))
	  ((product?2 exp)
	   (make-sum
	    (make-product (multiplier2 exp)
			  (deriv (multiplicand exp) var))
	    (make-product (deriv (multiplier2 exp) var)
			  (multiplicand exp))))
	  ((exponentiation? exp)
	   (make-product (deriv (base exp) var)
			 (make-product (make-exponentiation (base exp) (- (exponent exp) 1))
				       (exponent exp))))
	  (else
	   (error "unknown expression type -- DERIV" exp))))

(define (=number? exp num) 
  (and (number? exp) (= exp num))) 


(define (variable? x) (symbol? x))

(define (same-variable? v1 v2)
    (and (variable? v1) (variable? v2) (eq? v1 v2)))

(define (make-sum a1 a2) (list '+ a1 a2))

(define (make-sum a1 a2)
    (cond ((=number? a1 0) a2)
	  ((=number? a2 0) a1)
	  ((and (number? a1) (number? a2)) (+ a1 a2))
	  (else (list '+ a1 a2))))

(define (make-product m1 m2) (list '* m1 m2))

(define (make-product m1 m2)
    (cond ((or (=number? m1 0) (=number? m2 0)) 0)
	  ((=number? m1 1) m2)
	  ((=number? m2 1) m1)
	  ((and (number? m1) (number? m2)) (* m1 m2))
	  (else (list '* m1 m2))))

(define (sum? x)
    (and (pair? x) (eq? (car x) '+)))

(define (addend s) (cadr s))

(define (augend s) (caddr s))

(define (product? x)
    (and (pair? x) (eq? (car x) '*)))

(define (multiplier p) (cadr p))

(define (multiplicand p) (caddr p))


;; exercise 2.56

(define (exponentiation? x)
    (and (pair? x) (eq? (car x) 'expo)))

(define (base x) (cadr x))

(define (exponent x) (caddr x))

(define (make-exponentiation x exp)
    (cond ((= exp 0) 1)
	  ((= exp 1) x)
	  (list 'expo x exp)))

;; exercise 2.57

(define (accumulate op initial sequence) 
  (if (null? sequence) 
      initial 
      (op (car sequence) 
	  (accumulate op initial (cdr sequence))))) 

(define (augend-list s)
  (accumulate make-sum 0 (cddr s)))


(define (multiplicand-list p)  
  (accumulate make-product 1 (cddr  p))) 

(define (make-sum-list . args)
  (cond ((=number? (car args) 0) (make-sum (cdr args)))
	(else (list '+ (car args) (make-sum (cdr args))))))


(augend-list '(1 2 3 4 5))

;;  2.58 a ?????????????????ww

(define (sum?2 s)
  (or (and (pair? s) (eq? '+ (car s)))
      (and (pair? s) (eq? '+ (cadr s)))))

(define (product?2 p)
  (or (and (pair? p) (eq? '* (car p)))
      (and (pair? p) (eq? '* (cadr p)))))

(define (addend2 s)
  (if (eq? (car s) '+)
      (cadr s)
      (car s)))

(define (augend2 s)
  (caddr s))

(define (multiplier2 p)
  (if (eq? (car p) '*)
      (cadr p)
      (car p)))

(deriv '(x * y) 'x)

(define (prob? s)
  (if (null? prob)
      ))

;; 2.3.3

(define (element-of-set? x set)
  (cond ((null? set) #f)
	((equal? x (car set)) #t)
	(else (element-of-set? x (cdr set)))))

(define (adjoin-set x set)
  (if (element-of-set? x set)
      set
      (cons x set)))

(define (intersection-set set1 set2)
  (cond ((or (null? set1) (null? set2)) '())
	((element-of-set? (car set1) set2)
	 (cons (car set1)
	       (intersection-set (cdr set1) set2)))
	(else (intersection-set (cdr set1) set2))))

;; exercise 2.59

(define (union-set set1 set2)
  (cond ((null? set1) set2)
	((element-of-set? (car set1) set2) (union-set (cdr set1) set2))
	(else (cons (car set1)
		    (union-set (cdr set1) set2)))))

;; exercise 2.60

;; element of set nao muda
;; adjoin-set so faz um cons
;; union junta os dois sem checar
;; intersection set continua a mesma coisa



;; ordered sets

(define (element-of-set? x set)
  (cond ((null? set) false)
	((= x (car set)) true)
	((< x (car set)) false)
	(else (element-of-set? x (cdr set)))))

(define (intersection-set set1 set2)
  (if (or (null? set1) (null? set2))
      '()
       (let ((x1 (car set1)) (x2 (car set2)))
	 (cond ((= x1 x2)
		(cons x1
		      (intersection-set (cdr set1)
					(cdr set2))))
	       ((< x1 x2)
		(intersection-set (cdr set1) set2))
	       ((< x2 x1)
		(intersection-set set1 (cdr set2)))))))



;; exercise 2.61

(define (adjoin-set-ordered element set)
  (define (adjoin-with-ant anterior element set)
    (cond ((null? set) (cond ((null? anterior) (cons element set))
			     (else (cons anterior (list element)))))
	  ((= element (car set)) set)
	  ((> (car set) element) (cons anterior (cons element set)))
	  (else (adjoin-with-ant (car set) element (cdr set)))))
  (adjoin-with-ant '() element set))


(define (adjoin-set-ordered2 x set)
  (cond ((or (null? set) (< x (car set))) (cons x set))
	((= x (car set)) set)
	((cons (car set) (adjoin-set-ordered2 x (cdr set))))))

;; exercise 2.62

(define (union-set set1 set2)
  (cond ((null? set2) set1)
	((null? set1) set2)
	((= (car set1) (car set2)) (cons (car set2) (union-set (cdr set1) (cdr set2))))
	((> (car set1) (car set2)) (cons (car set1) (union-set (cdr set1) set2)))
	(else (cons (car set2) (union-set set1 (cdr set2))))))

;; binary tree set

(define (entry tree)
  (car tree))

(define (left-branch tree)
  (cadr tree))

(define (right-branch tree)
  (caddr tree))

(define (make-tree entry left right)
  (list entry left right))

(define (element-of-set-tree? element tree)
  (cond ((null? tree) #f)
	((= element (entry tree)) #t)
	((> element (entry tree)) (element-of-set-tree? element (left-branch tree)))
	(else (element-of-set-tree? element (right-branch tree)))))

(define (adjoin-tree element tree)
  (cond ((null? tree) (make-tree element '() '()))
	((= element (entry tree)) tree)
	((> element (entry tree)) (make-tree (entry tree) (adjoin-tree element (left-branch tree)) (right-branch tree)))
	(else (make-tree (entry tree) (left-branch tree) (adjoin-tree element (right-branch tree))))))



;; exercise 2.63

;;A geram a mesma lista

;;B o primeiro roda um append a mais na metade da arvore


;; exercise 2.64

;; A pega metade e gera o lado esquerdo (chamada recursiva). pega um cara e faz virar root. gera o lado direito com o resto (outra chamada). depois junto o que sobrou com a arvore

;; T(n)= T(n/2) + T(n/2)


;; exrecise 2.65

(define (union-tree tree1 tree2)
  (cond ((null? tree1) tree2)
	((null? tree2) tree1)
	((< (entry tree1) (entry tree2))
	 (make-tree (entry tree2)
		    (union-tree (make-tree (entry tree1) (left-branch tree1) '())
				(left-branch (union-tree (right-branch tree1) tree2)))
		    (right-branch tree2)))
	 ;; (union-tree (make-tree (entry tree1) (left-branch tree1) '())
	 ;; 					     (union-tree (right-branch tree1) tree2)))
	((> (entry tree1) (entry tree2))
	 (make-tree (entry tree2)
		    (left-branch tree2)
		    (union-tree (make-tree (entry tree1) (right-branch tree1) '())
				(right-branch (union-tree (left-branch tree1) tree2)))))
	 ;; (union-tree (union-tree (left-branch tree1) tree2)
	 ;; 					     (make-tree (entry tree1) (right-branch tree1) '())))
	((= (entry tree1) (entry tree2))
	 (make-tree (entry tree2)
		    (union-tree (left-branch tree1) (left-branch tree2))
		    (union-tree (right-branch tree1) (right-branch tree2))))))


(union-tree (make-tree 10 (make-tree 5 '() '()) '()) (make-tree 50 (make-tree 25 '() (make-tree 36 '() '())) (make-tree 150 '() '())))

;; sets and information retrieval
;; exercise 2.66

(define (lookup given-key set-of-records)
  (cond ((null? set-of-records) #f)
	((equal? given-key (key (entry set-of-records))) (entry set-of-records))
	((> given-key (key (entry set-of-records))) (lookup given-key (right-branch set-of-records)))
	((< given-key (key (entry set-of-records))) (lookup given-key (left-branch set-of-records)))))




;; 2.3.4 Example: Huffman Encoding Trees

(define (make-leaf symbol weight)
  (list 'leaf symbol weight))
(define (leaf? object)
  (eq? (car object) 'leaf))
(define (symbol-leaf x) (cadr x))
(define (weight-leaf x) (caddr x))

(define (make-code-tree left right)
  (list left
	right
	(append (symbols left) (symbols right))
	(+ (weight left) (weight right))))

(define (left-branch tree) (car tree))
(define (right-branch tree) (cadr tree))
(define (symbols tree)
  (if (leaf? tree)
      (list (symbol-leaf tree))
      (caddr tree)))
(define (weight tree)
  (if (leaf? tree)
      (weight-leaf tree)
      (cadddr tree)))


(define (decode bits tree)
  (define (decode-1 bits current-branch)
    (if (null? bits)
	'()
	 (let ((next-branch
		(choose-branch (car bits) current-branch)))
	   (if (leaf? next-branch)
	       (cons (symbol-leaf next-branch)
		     (decode-1 (cdr bits) tree))
	       (decode-1 (cdr bits) next-branch)))))
  (decode-1 bits tree))
(define (choose-branch bit branch)
  (cond ((= bit 0) (left-branch branch))
	((= bit 1) (right-branch branch))
	(else (error "bad bit -- CHOOSE-BRANCH" bit))))

(define (adjoin-set x set)
  (cond ((null? set) (list x))
	((< (weight x) (weight (car set))) (cons x set))
	(else (cons (car set)
		    (adjoin-set x (cdr set))))))


(define (make-leaf-set pairs)
  (if (null? pairs)
      '()
       (let ((pair (car pairs)))
	 (adjoin-set (make-leaf (car pair)
					; symbol
				(cadr pair)) ; frequency
		     (make-leaf-set (cdr pairs))))))


(define sample-tree
  (make-code-tree (make-leaf 'A 4)
		  (make-code-tree
		   (make-leaf 'B 2)
		   (make-code-tree (make-leaf 'D 1)
				   (make-leaf 'C 1)))))
(define sample-message '(0 1 1 0 0 1 0 1 0 1 1 1 0))

(define sample-char-msg '(A B C))

(decode sample-message sample-tree)


;; exercise 2.68

(define (encode message tree)
  (if (null? message)
      '()
       (append (encode-symbol (car message) tree)
	       (encode (cdr message) tree))))


(define (element-of-set? x set) 
   (cond ((null? set) #f) 
         ((equal? x (car set)) #t) 
         (else (element-of-set? x (cdr set))))) 



(define (encode-symbol msg-char tree)
  (cond ((null? tree) (error "not in the tree" msg-char))
	((leaf? tree) '())
	((element-of-set? msg-char (symbols (left-branch tree))) (cons 0 (encode-symbol msg-char (left-branch tree))))
	((element-of-set? msg-char (symbols (right-branch tree))) (cons 1 (encode-symbol msg-char (right-branch tree))))))

(encode sample-char-msg sample-tree)

(define (generate-huffman-tree pairs)
  (successive-merge (make-leaf-set pairs)))

(define (make-code-tree left right)
  (list left
	right
	(append (symbols left) (symbols right))
	(+ (weight left) (weight right))))

(define (length list)
  (define (iter-length size list)
    (cond ((null? list) size)
	  (else (iter-length (+ size 1) (cdr list))))))

(define (element-of-set? x set)
  (cond ((null? set) false)
	((equal? x (car set)) true)
	(else (element-of-set? x (cdr set)))))

(define (adjoin-set x set)
  (if (element-of-set? x set)
      set
      (cons x set)))


(list (make-leaf 'a 3) (make-leaf 'b 1))

;; exercise 2.69

(define test-set (list (make-leaf 'b 3) (make-leaf 'a 8)))
(define test-set2 (list (make-leaf 'y 1) (make-leaf 'b 3) (make-leaf 'c 3) (make-leaf 'e 5) (make-leaf 'a 8)))
(define test-set3 (list (make-leaf 'b 3) (make-leaf 'a 8) (make-leaf 'e 9)))


(define (equal? list1 list2)
  (cond ((and (null? list1) (null? list2)) #t)
	((and (pair? list1) (pair? list2)) (and (equal? (car list1) (car list2)) (equal? (cdr list1) (cdr list2))))
	;; ((and (pair? list1) (pair? list2)) (and (equal? (car list1) (car list2)) (equal? (cdr list1) (cdr list2))))
	;; (else (and (eq? list1 list2) (equal? (cdr list1) (cdr list2))))
	((and (not (pair? list1)) (not (pair? list2))) (eq? list1 list2))
	(else (and (eq? list1 list2) (equal? (cdr list1) (cdr list2))))))


(define (adjoin-set x set)
  (cond ((null? set) (list x))
	((< (weight x) (weight (car set))) (cons x set))
	(else (cons (car set)
		    (adjoin-set x (cdr set))))))

(adjoin-set (make-leaf 'e 5) (adjoin-set (make-leaf 'y 1) (adjoin-set (make-leaf 'c 3) test-set)))


(define (make-leaf symbol weight)
  (list 'leaf symbol weight))
(define (leaf? object)
  (eq? (car object) 'leaf))
(define (symbol-leaf x) (cadr x))
(define (weight-leaf x) (caddr x))

(define (make-code-tree left right)
  (list left
	right
	(append (symbols left) (symbols right))
	(+ (weight left) (weight right))))

(define (left-branch tree) (car tree))
(define (right-branch tree) (cadr tree))
(define (symbols tree)
  (if (leaf? tree)
      (list (symbol-leaf tree))
      (caddr tree)))
(define (weight tree)
  (if (leaf? tree)
      (weight-leaf tree)
      (cadddr tree)))

(define (successive-merge ordered-leaf-list)
  (cond ((<= (length ordered-leaf-list) 1) (car ordered-leaf-list))
	(else (let ((first-leaf (car ordered-leaf-list))
		    (second-leaf (cadr ordered-leaf-list))
		    (rest-of-list (cddr ordered-leaf-list)))
		
		(successive-merge (adjoin-set (make-code-tree first-leaf second-leaf)
					      rest-of-list))))))

(define (make-leaf-set pairs)
  (define (iteration pairs resp)
    (cond ((null? pairs) resp)
	  (else (adjoin-set (car pairs) (make-leaf-set (cdr pairs))))))
  (iteration pairs '()))

(make-leaf-set test-set)

(define (generate-huffman-tree pairs)
  (successive-merge (make-leaf-set pairs)))

(generate-huffman-tree test-set3)



;; exercise 2.70


(define (length list)
  (define (iter-length size list)
    (cond ((null? list) size)
	  (else (iter-length (+ size 1) (cdr list)))))
  (iter-length 0 list))

(define (make-leaf symbol weight)
  (list 'leaf symbol weight))
(define (leaf? object)
  (eq? (car object) 'leaf))
(define (symbol-leaf x) (cadr x))
(define (weight-leaf x) (caddr x))

(define (make-code-tree left right)
  (list left
	right
	(append (symbols left) (symbols right))
	(+ (weight left) (weight right))))

(define (left-branch tree) (car tree))
(define (right-branch tree) (cadr tree))
(define (symbols tree)
  (if (leaf? tree)
      (list (symbol-leaf tree))
      (caddr tree)))
(define (weight tree)
  (if (leaf? tree)
      (weight-leaf tree)
      (cadddr tree)))


(define (equal? list1 list2)
  (cond ((and (null? list1) (null? list2)) #t)
	((and (pair? list1) (pair? list2)) (and (equal? (car list1) (car list2)) (equal? (cdr list1) (cdr list2))))
	((and (not (pair? list1)) (not (pair? list2))) (eq? list1 list2))
	(else (and (eq? list1 list2) (equal? (cdr list1) (cdr list2))))))


(define (element-of-set? x set) 
   (cond ((null? set) #f) 
         ((equal? x (car set)) #t) 
         (else (element-of-set? x (cdr set))))) 

(define (adjoin-set x set)
  (cond ((null? set) (list x))
	((< (weight x) (weight (car set))) (cons x set))
	(else (cons (car set)
		    (adjoin-set x (cdr set))))))



(define (successive-merge ordered-leaf-list)
  (cond ((<= (length ordered-leaf-list) 1) (car ordered-leaf-list))
	(else (let ((first-leaf (car ordered-leaf-list))
		    (second-leaf (cadr ordered-leaf-list))
		    (rest-of-list (cddr ordered-leaf-list)))
		(successive-merge (adjoin-set (make-code-tree first-leaf second-leaf)
					      rest-of-list))))))
(define (make-leaf-set pairs)
  (define (iteration pairs resp)
    (cond ((null? pairs) resp)
	  (else (adjoin-set (car pairs) (make-leaf-set (cdr pairs))))))
  (iteration pairs '()))

(adjoin-set (make-code-tree (car test-set) (cadr test-set))
	    '())


(define (generate-huffman-tree pairs)
  (successive-merge (make-leaf-set pairs)))

(define (encode message tree)
  (if (null? message)
      '()
       (append (encode-symbol (car message) tree)
	       (encode (cdr message) tree))))


(define (encode-symbol msg-char tree)
  (cond ((null? tree) (error "not in the tree" msg-char))
	((leaf? tree) '())
	((element-of-set? msg-char (symbols (left-branch tree))) (cons 0 (encode-symbol msg-char (left-branch tree))))
	((element-of-set? msg-char (symbols (right-branch tree))) (cons 1 (encode-symbol msg-char (right-branch tree))))))

(define test-set (list (make-leaf 'b 3) (make-leaf 'a 8)))
(define test-set2 (list (make-leaf 'y 1) (make-leaf 'b 3) (make-leaf 'c 3) (make-leaf 'e 5) (make-leaf 'a 8)))
(define test-set3 (list (make-leaf 'b 3) (make-leaf 'a 8) (make-leaf 'e 9)))
(define exercise-270 (list (make-leaf 'a 2) (make-leaf 'boom 1) (make-leaf 'get 2) (make-leaf 'job 2) (make-leaf 'na 16) (make-leaf 'sha 3) (make-leaf 'yip 9) (make-leaf 'wah 1)))
(define exercise-huffman (generate-huffman-tree exercise-270))
(define song '(Get a job Sha na na na na na na na na Get a job Sha na na na na na na na na Wah yip yip yip yip yip yip yip yip yip Sha boom))
(encode (list 'get 'a 'job) exercise-huffman)
(encode (list 'sha 'na 'na 'na 'na 'na 'na 'na 'na) exercise-huffman)
(encode (list 'wah 'yip 'yip 'yip 'yip 'yip 'yip 'yip 'yip 'yip) exercise-huffman)
(encode (list 'Get 'a 'job 'Sha 'na 'na 'na 'na 'na 'na 'na 'na 'Get 'a 'job 'Sha 'na 'na 'na 'na 'na 'na 'na 'na 'Wah 'yip 'yip 'yip 'yip 'yip 'yip 'yip 'yip 'yip 'Sha 'boom) exercise-huffman)


;; exercise 2.71



(define exercise-271n5 (list (make-leaf 'a 1) (make-leaf 'b 2) (make-leaf 'c 4) (make-leaf 'd 8) (make-leaf 'e 16)))
(define exercise-271n10 (list (make-leaf 'a 1) (make-leaf 'b 2) (make-leaf 'c 4) (make-leaf 'd 8) (make-leaf 'e 16)
			      (make-leaf 'f 32) (make-leaf 'g 64) (make-leaf 'h 128) (make-leaf 'i 256) (make-leaf 'j 512)))

(encode (list 'a) (generate-huffman-tree exercise-271n5))
(encode (list 'e) (generate-huffman-tree exercise-271n5))

;; least encoded is the height of the tree = n
;; the most encoded symbol is 1 bit



;; exercise 2.72
;; most used is 1 bit
;; least used is 26 bits
;; order of growth is n


;;  2.4  multiple representations for abstract data

;; 2.4.1 representations for complex numbers

(make-from-real-imag (real-part z) (imag-part z))

(make-from-mag-ang (magnitude z) (angle z))

(define (add-complex z1 z2)
  (make-from-real-imag (+ (real-part z1) (real-part z2))
		       (+ (imag-part z1) (imag-part z2))))

(define (sub-complex z1 z2)
  (make-from-real-imag (- (real-part z1) (real-part z2))
		       (- (imag-part z1) (imag-part z2))))

(define (mul-complex z1 z2)
  (make-from-mag-ang (* (magnitude z1) (magnitude z2))
		     (+ (angle z1) (angle z2))))

(define (div-complex z1 z2)
  (make-from-mag-ang (/ (magnitude z1) (magnitude z2))
		     (- (angle z1) (angle z2))))

;; ben
(define (real-part z) (car z))
(define (imag-part z) (cdr z))
(define (magnitude z)
  (sqrt (+ (square (real-part z)) (square (imag-part z)))))
(define (angle z)
  (atan (imag-part z) (real-part z)))
(define (make-from-real-imag x y) (cons x y))
(define (make-from-mag-ang r a)
  (cons (* r (cos a)) (* r (sin a))))

;; alyssa
(define (real-part z)
  (* (magnitude z) (cos (angle z))))
(define (imag-part z)
  (* (magnitude z) (sin (angle z))))
(define (magnitude z) (car z))
(define (angle z) (cdr z))
(define (make-from-real-imag x y)
  (cons (sqrt (+ (square x) (square y)))
	(atan y x)))
(define (make-from-mag-ang r a) (cons r a))

;; 2.4.2 tagged data

(define (attach-tag type-tag contents)
  (cons type-tag contents))
(define (type-tag datum)
  (if (pair? datum)
      (car datum)
      (error "Bad tagged datum -- TYPE-TAG" datum)))
(define (contents datum)
  (if (pair? datum)
      (cdr datum)
      (error "Bad tagged datum -- CONTENTS" datum)))
(define (rectangular? z)
  (eq? (type-tag z) 'rectangular))
(define (polar? z)
  (eq? (type-tag z) 'polar))

;; ben revised
(define (real-part-rectangular z) (car z))
(define (imag-part-rectangular z) (cdr z))
(define (magnitude-rectangular z)
  (sqrt (+ (square (real-part-rectangular z))
	   (square (imag-part-rectangular z)))))
(define (angle-rectangular z)
  (atan (imag-part-rectangular z)
	(real-part-rectangular z)))
(define (make-from-real-imag-rectangular x y)
  (attach-tag 'rectangular (cons x y)))
(define (make-from-mag-ang-rectangular r a)
  (attach-tag 'rectangular
	       (cons (* r (cos a)) (* r (sin a)))))

;; alyssa revised
(define (real-part-polar z)
  (* (magnitude-polar z) (cos (angle-polar z))))
(define (imag-part-polar z)
  (* (magnitude-polar z) (sin (angle-polar z))))
(define (magnitude-polar z) (car z))
(define (angle-polar z) (cdr z))
(define (make-from-real-imag-polar x y)
  (attach-tag 'polar
	       (cons (sqrt (+ (square x) (square y)))
		     (atan y x))))
(define (make-from-mag-ang-polar r a)
  (attach-tag 'polar (cons r a)))


;; generic selectors
(define (real-part z)
  (cond ((rectangular? z)
	 (real-part-rectangular (contents z)))
	((polar? z)
	 (real-part-polar (contents z)))
	(else (error "Unknown type -- REAL-PART" z))))
(define (imag-part z)
  (cond
   ((rectangular? z)
    (imag-part-rectangular (contents z)))
   ((polar? z)
    (imag-part-polar (contents z)))
   (else (error "Unknown type -- IMAG-PART" z))))
(define (magnitude z)
  (cond ((rectangular? z)
	 (magnitude-rectangular (contents z)))
	((polar? z)
	 (magnitude-polar (contents z)))
	(else (error "Unknown type -- MAGNITUDE" z))))
(define (angle z)
  (cond ((rectangular? z)
	 (angle-rectangular (contents z)))
	((polar? z)
	 (angle-polar (contents z)))
	(else (error "Unknown type -- ANGLE" z))))


(define (add-complex z1 z2)
  (make-from-real-imag (+ (real-part z1) (real-part z2))
		       (+ (imag-part z1) (imag-part z2))))

(define (make-from-real-imag x y)
  (make-from-real-imag-rectangular x y))
(define (make-from-mag-ang r a)
  (make-from-mag-ang-polar r a))

;;
;; dispatching on type ^^^^^
;;


;;  2.4.3 Data-Directed Programming and Additivity


;;
;; data-directed programming  vvvvvvv
;;

(put <op> <type> <item>)
(get <op> <type>)


;; novo ben

(define (install-rectangular-package)
  ;; internal procedures
  (define (real-part z) (car z))
  (define (imag-part z) (cdr z))
  (define (make-from-real-imag x y) (cons x y))
  (define (magnitude z)
    (sqrt (+ (square (real-part z))
	     (square (imag-part z)))))
  (define (angle z)
    (atan (imag-part z) (real-part z)))
  (define (make-from-mag-ang r a)
    (cons (* r (cos a)) (* r (sin a))))
  ;; interface to the rest of the system
  (define (tag x) (attach-tag 'rectangular x))
  (put 'real-part '(rectangular) real-part)
  (put 'imag-part '(rectangular) imag-part)
  (put 'magnitude '(rectangular) magnitude)
  (put 'angle '(rectangular) angle)
  (put 'make-from-real-imag 'rectangular
	(lambda (x y) (tag (make-from-real-imag x y))))
  (put 'make-from-mag-ang 'rectangular
	(lambda (r a) (tag (make-from-mag-ang r a))))
  'done)
(install-rectangular-package)
;; novo alyssa

(define (install-polar-package)
  ;; internal procedures
  (define (magnitude z) (car z))
  (define (angle z) (cdr z))
  (define (make-from-mag-ang r a) (cons r a))
  (define (real-part z)
    (* (magnitude z) (cos (angle z))))
  (define (imag-part z)
    (* (magnitude z) (sin (angle z))))
  (define (make-from-real-imag x y)
    (cons (sqrt (+ (square x) (square y)))
	  (atan y x)))
  ;; interface to the rest of the system
  (define (tag x) (attach-tag 'polar x))
  (put 'real-part '(polar) real-part)
  (put 'imag-part '(polar) imag-part)
  (put 'magnitude '(polar) magnitude)
  (put 'angle '(polar) angle)
  (put 'make-from-real-imag 'polar
	(lambda (x y) (tag (make-from-real-imag x y))))
  (put 'make-from-mag-ang 'polar
	(lambda (r a) (tag (make-from-mag-ang r a))))
  'done)
(install-polar-package)

;; apply

(define (apply-generic op . args)
  (let ((type-tags (map type-tag args)))
    (let ((proc (get op type-tags)))
      (if proc
	  (apply proc (map contents args))
	  (error
	   "No method for these types -- APPLY-GENERIC"
	   (list op type-tags))))))


(define (real-part z) (apply-generic 'real-part z))
(define (imag-part z) (apply-generic 'imag-part z))
(define (magnitude z) (apply-generic 'magnitude z))
(define (angle z) (apply-generic 'angle z))
(define (make-from-real-imag x y)
  ((get 'make-from-real-imag 'rectangular) x y))
(define (make-from-mag-ang r a)
  ((get 'make-from-mag-ang 'polar) r a))


;; exercise 2.73

;; =============     table package        ===================

(define (assoc key records)
  (cond ((null? records) false)
        ((equal? key (caar records)) (car records))
        (else (assoc key (cdr records)))))

(define (make-table)
  (let ((local-table (list '*table*)))
    (define (lookup key-1 key-2)
      (let ((subtable (assoc key-1 (cdr local-table))))
        (if subtable
            (let ((record (assoc key-2 (cdr subtable))))
              (if record
                  (cdr record)
                  false))
            false)))
    (define (insert! key-1 key-2 value)
      (let ((subtable (assoc key-1 (cdr local-table))))
        (if subtable
            (let ((record (assoc key-2 (cdr subtable))))
              (if record
                  (set-cdr! record value)
                  (set-cdr! subtable
                            (cons (cons key-2 value)
                                  (cdr subtable)))))
            (set-cdr! local-table
                      (cons (list key-1
                                  (cons key-2 value))
                            (cdr local-table)))))
      'ok)    
    (define (dispatch m)
      (cond ((eq? m 'lookup-proc) lookup)
            ((eq? m 'insert-proc!) insert!)
            (else (error "Unknown operation -- TABLE" m))))
    dispatch))

(define operation-table (make-table))
(define get (operation-table 'lookup-proc))
(define put (operation-table 'insert-proc!))

;; =============     table package        ===================


;; =============     tag package        ===================

(define (attach-tag type-tag contents)
  (cons type-tag contents))
(define (type-tag datum)
  (if (pair? datum)
      (car datum)
      (error "Bad tagged datum -- TYPE-TAG" datum)))
(define (contents datum)
  (if (pair? datum)
      (cdr datum)
      (error "Bad tagged datum -- CONTENTS" datum)))
(define (rectangular? z)
  (eq? (type-tag z) 'rectangular))
(define (polar? z)
  (eq? (type-tag z) 'polar))


;; =============     tag package        ===================



;; old deriv
(define (deriv exp var)
  (cond ((number? exp) 0)
	((variable? exp) (if (same-variable? exp var) 1 0))
	((sum? exp)
	 (make-sum (deriv (addend exp) var)
		   (deriv (augend exp) var)))
	((product? exp)
	 (make-sum
	  (make-product (multiplier exp)
			(deriv (multiplicand exp) var))
	  (make-product (deriv (multiplier exp) var)
			(multiplicand exp))))
	<more rules can be added here>
	(else (error "unknown expression type -- DERIV" exp))))


;; data style deriv
(define (deriv exp var)
  (cond ((number? exp) 0)
	((variable? exp) (if (same-variable? exp var) 1 0))
	(else ((get 'deriv (operator exp)) (operands exp)
	       var))))
(define (operator exp) (car exp))
(define (operands exp) (cdr exp))



;; a) porque não é preciso colocar esses dois caras na tabela, nao ha diferença entre os tipos de deriv.
;;


;; b) e c)
(define (install-deriv-package)
  ;; internal procedures
  (define (addend exp)
    (car exp))
  (define (augend exp)
    (cadr exp))
  (define (make-sum exp var)
    (make-sum (deriv (addend exp) var)
	      (deriv (augend exp) var)))
  (define (multiplier exp)
    (car exp))
  (define (multiplicand exp)
    (cadr exp))
  (define (make-product exp var)
    (make-sum
	  (make-product (multiplier exp)
			(deriv (multiplicand exp) var))
	  (make-product (deriv (multiplier exp) var)
			(multiplicand exp))))

  (define (base x) (car x))
  (define (exponent x) (cadr x))
  (define (make-exponentiation x exp)
    (cond ((= exp 0) 1)
	  ((= exp 1) x)
	  (make-product (deriv (base exp) var)
			(make-product (make-exponentiation (base exp) (- (exponent exp) 1))
				      (exponent exp)))))
    
  ;; interface to the rest of the system
  (define (tag x) (attach-tag 'deriv x))
  (put 'deriv '+ make-sum)
  (put 'deriv '* make-product)
  (put 'deriv 'expo make-exponentiation)
  'done)

;; d) troca a ordem das tags no put

(define (install-deriv-package)
  ;; internal procedures
  (define (addend exp)
    (car exp))
  (define (augend exp)
    (cadr exp))
  (define (make-sum exp var)
    (make-sum (deriv (addend exp) var)
	      (deriv (augend exp) var)))
  (define (multiplier exp)
    (car exp))
  (define (multiplicand exp)
    (cadr exp))
  (define (make-product exp var)
    (make-sum
	  (make-product (multiplier exp)
			(deriv (multiplicand exp) var))
	  (make-product (deriv (multiplier exp) var)
			(multiplicand exp))))

  (define (base x) (car x))
  (define (exponent x) (cadr x))
  (define (make-exponentiation x exp)
    (cond ((= exp 0) 1)
	  ((= exp 1) x)
	  (make-product (deriv (base exp) var)
			(make-product (make-exponentiation (base exp) (- (exponent exp) 1))
				      (exponent exp)))))
    
  ;; interface to the rest of the system
  (define (tag x) (attach-tag 'deriv x))
  (put '+ 'deriv make-sum)
  (put '* 'deriv make-product)
  (put 'expo 'deriv make-exponentiation)
  'done)




;; exercise 2.74

;; =============     table package        ===================

(define (assoc key records)
  (cond ((null? records) false)
        ((equal? key (caar records)) (car records))
        (else (assoc key (cdr records)))))

(define (make-table)
  (let ((local-table (list '*table*)))
    (define (lookup key-1 key-2)
      (let ((subtable (assoc key-1 (cdr local-table))))
        (if subtable
            (let ((record (assoc key-2 (cdr subtable))))
              (if record
                  (cdr record)
                  false))
            false)))
    (define (insert! key-1 key-2 value)
      (let ((subtable (assoc key-1 (cdr local-table))))
        (if subtable
            (let ((record (assoc key-2 (cdr subtable))))
              (if record
                  (set-cdr! record value)
                  (set-cdr! subtable
                            (cons (cons key-2 value)
                                  (cdr subtable)))))
            (set-cdr! local-table
                      (cons (list key-1
                                  (cons key-2 value))
                            (cdr local-table)))))
      'ok)    
    (define (dispatch m)
      (cond ((eq? m 'lookup-proc) lookup)
            ((eq? m 'insert-proc!) insert!)
            (else (error "Unknown operation -- TABLE" m))))
    dispatch))

(define operation-table (make-table))
(define get (operation-table 'lookup-proc))
(define put (operation-table 'insert-proc!))

;; =============     table package        ===================


;; =============     tag package        ===================

(define (attach-tag type-tag contents)
  (cons type-tag contents))
(define (type-tag datum)
  (if (pair? datum)
      (car datum)
      (error "Bad tagged datum -- TYPE-TAG" datum)))
(define (contents datum)
  (if (pair? datum)
      (cdr datum)
      (error "Bad tagged datum -- CONTENTS" datum)))

;; =============     tag package        ===================

;; employers sets

(define (install-record-package1)
  ;; internal package
  (define (make-record-data tag data)
    (attach-tag tag data))
  (define (record-data-content record-data)
    (car record-data))
  (define (record-data-tag record-data)
    (cdr record-data))
  (define (make-employer-record name args)
    (cons name args))
  (define (record-name record)
    (car record))
  (define (record-data-set record)
    (cdr record))
  (define (get-record-name name file)
    (cond ((null? file) '())
	  ((eq? (record-name (car file)) name) (car file))
	  (else (get-record-name name (cdr file)))))
  

  (define (make-file record)
    (list record))

  ;; auxiliary methods for get salary
  (define (record-other-data record)
    (cdr record))
  (define (data-tag data)
    (car data))
  (define (data-content data)
    (cdr data))
  (define (get-salary record)
    (define (search-rest rest)
      (cond ((null? rest) '())
	    ((eq? (data-tag rest) 'salary) (data-content rest))
	    (else (search-rest (cdr rest)))))
    (let ((rest-of-record (record-other-data record)))
      (search-rest rest-of-record)))
  ;; this ends get-salary
  
  ;; (define (get-file)
  ;;   (get 'file '(company1)))
  ;; (define (save-file file)
  ;;   (put 'file '(company1) file))
  (define (add-record record file)
    (cond ((equal? (get-record-name (record-name (car record))) '()) (cons record file))
	  (else file)))

  ;; (define (search-record-by-name name))
  
  (define (tag x)
    (attach-tag 'company1 x))
  
  ;; interface to rest
  (put 'make-file '(company1) (lambda (record) (tag (make-file record))))
  ;; (put 'get-file '(company1) (tag (get-file)))
  ;; (put 'save-file '(company1) save-file)
  (put 'add-record '(company1) (lambda (record) (tag (add-record record (get-file)))))
  (put 'make-record-data '(company1) (lambda (tag data) (tag (make-record-data tag data))))
  (put 'make-employer-record 'company1 (lambda (name . args) (tag (make-employer-record name args))))
  ;; (put 'update-file 'company1 update-file)
  'done)

;; a) get-record assumes that each record on each division is a list with name in the head
;;    each of its other data are pairs listed together

;; b) get-salary assumes that each data aside from name is a pair with a tag as its first
;;    data -> (TAG . DATA)

;; c) find employee
(define (find-employee-record name files)
  (let ((search-result (apply-generic 'get-record (car files))))
    (cond ((null? search-result) (find-employee-record name (cdr files))
	   (else search-result)))))

;; d) you need to make another package that interfaces with the new division
;;    and you need to install it into the table 


(define (apply-generic op . args)
  (let ((type-tags (map type-tag args)))
    (let ((proc (get op type-tags)))
      (if proc
	  (apply proc (map contents args))
	  (error
	   "No method for these types -- APPLY-GENERIC"
	   (list op type-tags))))))

(install-record-package1)

(define (make-employer-record1 name . args)
  ((get 'make-employer-record 'company1) name args))
(define (make-employer-record2 name . args)
  ((get 'make-employer-record 'company2) name args))
(define (make-file1 record)
  (apply-generic 'make-file record))

(define (add-record1 record)
  (apply-generic 'add-record record))

(define (save-file file)
  (apply-generic 'save-file file))
(define (get-file1)
  (get 'get-file '(company1)))
(define (get-file2)
  (cons 'company1 (get 'file '(company1))))
(get-file2)
(get-file1)
(put 'file '(company1) (contents (make-file1 (make-employer-record1 'tchau))))
(get 'file '(company1))

((get 'save-file '(company1)) (make-file1 (make-employer-record1 'oi)))
((get 'save-file '(company1)) (make-file1 (make-employer-record1 'tchau)))
(make-file1 (make-employer-record1 'oi))
(apply-generic 'save-file (make-file1 (make-employer-record1 'tchau)))
(apply (get 'save-file '(company1)) (make-file1 (make-employer-record1 'tchau)))

(save-file (make-file1 (make-employer-record1 'pin)))

(put 'file '(company1) (contents (make-file1 (make-employer-record1 'oi))))
(get 'file '(company1))
(get 'get-file '(company1))


(get-file1)

(put 'file 'company1 (contents (make-file1 (make-employer-record1 'robert))))
(get 'file 'company1)
(contents (make-employer-record1 'robert))
(define (teste oi . args)
  (cons oi args))

(teste 'oi)


(make-file1 'oi)

(define (save-file file)
  (apply-generic 'update-file file)
  'done)
(define (add-record file record)
  (apply-feneric 'add-record file record))



(define (make-file-company1 record)
  (apply (get 'make-file 'company1) record))
(make-file-company1 )

(define (get-record file name))

(define (make-record-data tag data)
  (attach-tag tag data))
(define (record-data-content record-data)
  (car record-data))
(define (record-data-tag record-data)
  (cdr record-data))
(define (make-employer-record name . args)
  (cons name args))
(define (record-name record)
  (car record))
(define (record-data-set record)
  (cdr record))

(define (make-file record)
  (list record))
(define (add-record record file)
  (cons record file))


file -> set of records
each set has its own way
(set name address salary)




;; Message Passing

;; make complex number message passing style
(define (make-from-real-imag x y)
  (define (dispatch op)
    (cond ((eq? op 'real-part) x)
	  ((eq? op 'imag-part) y)
	  ((eq? op 'magnitude)
	   (sqrt (+ (square x) (square y))))
	  ((eq? op 'angle) (atan y x))
	  (else
	   (error "Unknown op -- MAKE-FROM-REAL-IMAG" op))))
  dispatch)

;; exercise 2.75


(define (make-from-mang-ang x y)
  (define (dispatch op)
    (cond ((eq? op 'real-part) (* x (cos y)))
	  ((eq? op 'imag-part) (* x (sin y)))
	  ((eq? op 'magnitude) x)
	  ((eq? op 'angle) y)
	  (else
	   (error "Unknown op -- MAKE-FROM-REAL-IMAG" op))))
  dispatch)

;; exercise 2.76
;;
;; Explicit Dispatch: para adicionar novos tipos e operações, é preciso primeiro criar a operacao com nome unico
;;                    e depois mudar na funcao que seleciona as funcoes, provavelmente vai adicionar um novo if else
;;
;; Data-directed: para adicionar novos tipos e operações é bem simples, vc só instala novas colunas ou linhas na tabela
;;                teoricamente (eu acho) você pode ter células vazias, mas as chamadas estao vinculadas às tags de tipos
;;                de cada 'pacote' instalado
;;
;; message-passing: parecido com orientação a objetos, para adicionar um metodo na funcao vc só coloca mais um if else
;;                  dentro do objeto
;;
;; quando novos tipos sao adicionados direto, precisa usar o data-directed. pq é só criar um pacote novo para o tipo novo
;; e adicionar com install
;;
;; quando novas operacoes sao adicionadas, pode ser o data-directed ou message passing (talvez ate dispatch), de qualquer
;; jeito, possivelmente vai ter que adicionar a operacao em todos os tipos de dados
;;
;;
;;



;; 2.5 Systems with Generic Operations


(define (add x y) (apply-generic 'add x y ))
(define (sub x y) (apply-generic 'sub x y ))
(define (mul x y) (apply-generic 'mul x y ))
(define (div x y) (apply-generic 'div x y ))

(define (install-scheme-number-package)
  (define (tag x)
    (attach-tag 'scheme-number x))
  (put 'add '(scheme-number scheme-number)
       (lambda (x y) (tag (+ x y))))
  (put 'sub '(scheme-number scheme-number)
       (lambda (x y) (tag (- x y))))
  (put 'mul '(scheme-number scheme-number)
       (lambda (x y) (tag (* x y))))
  (put 'div '(scheme-number scheme-number)
       (lambda (x y) (tag (/ x y))))
  (put 'make 'scheme-number
       (lambda (x) (tag x)))
  'done)

(define (make-scheme-number n)
  ((get 'make 'scheme-number) n))

;; rational arithmetic

(define (install-rational-package)
  ;; internal procedures
  (define (numer x) (car x))
  (define (denom x) (cdr x))
  (define (make-rat n d)
    (let ((g (gcd n d)))
      (cons (/ n g) (/ d g))))
  (define (add-rat x y)
    (make-rat (+ (* (numer x) (denom y))
		 (* (numer y) (denom x)))
	      (* (denom x) (denom y))))
  (define (sub-rat x y)
    (make-rat (- (* (numer x) (denom y))
		 (* (numer y) (denom x)))
	      (* (denom x) (denom y))))
  (define (mul-rat x y)
    (make-rat (* (numer x) (numer y))
	      (* (denom x) (denom y))))
  (define (div-rat x y)
    (make-rat (* (numer x) (denom y))
	      (* (denom x) (numer y))))
  ;; interface to rest of the system
  (define (tag x) (attach-tag 'rational x))
  (put 'add '(rational rational)
	(lambda (x y) (tag (add-rat x y))))
  (put 'sub '(rational rational)
	(lambda (x y) (tag (sub-rat x y))))
  (put 'mul '(rational rational)
	(lambda (x y) (tag (mul-rat x y))))
  (put 'div '(rational rational)
	(lambda (x y) (tag (div-rat x y))))
  (put 'make 'rational
	(lambda (n d) (tag (make-rat n d))))
  'done)
(define (make-rational n d)
  ((get 'make 'rational) n d))


;; complex number

(define (install-complex-package)
  ;; imported procedures from rectangular and polar packages
  (define (make-from-real-imag x y)
    ((get 'make-from-real-imag 'rectangular) x y))
  (define (make-from-mag-ang r a)
    ((get 'make-from-mag-ang 'polar) r a))
  ;; internal procedures
  (define (add-complex z1 z2)
    (make-from-real-imag (+ (real-part z1) (real-part z2))
			 (+ (imag-part z1) (imag-part z2))))
  (define (sub-complex z1 z2)
    (make-from-real-imag (- (real-part z1) (real-part z2))
			 (- (imag-part z1) (imag-part z2))))
  (define (mul-complex z1 z2)
    (make-from-mag-ang (* (magnitude z1) (magnitude z2))
		       (+ (angle z1) (angle z2))))

  (define (div-complex z1 z2)
    (make-from-mag-ang (/ (magnitude z1) (magnitude z2))
		       (- (angle z1) (angle z2))))
  ;; interface to rest of the system
  (define (tag z) (attach-tag 'complex z))
  (put 'add '(complex complex)
	(lambda (z1 z2) (tag (add-complex z1 z2))))
  (put 'sub '(complex complex)
	(lambda (z1 z2) (tag (sub-complex z1 z2))))
  (put 'mul '(complex complex)
	(lambda (z1 z2) (tag (mul-complex z1 z2))))
  (put 'div '(complex complex)
	(lambda (z1 z2) (tag (div-complex z1 z2))))
  (put 'make-from-real-imag 'complex
	(lambda (x y) (tag (make-from-real-imag x y))))
  (put 'make-from-mag-ang 'complex
	(lambda (r a) (tag (make-from-mag-ang r a))))
  'done)


(define (make-complex-from-real-imag x y)
  ((get 'make-from-real-imag 'complex) x y))
(define (make-complex-from-mag-ang r a)
  ((get 'make-from-mag-ang 'complex) r a))



;; exercise 2.77


(define (install-complex-package)
  ;; imported procedures from rectangular and polar packages
  (define (make-from-real-imag x y)
    ((get 'make-from-real-imag 'rectangular) x y))
  (define (make-from-mag-ang r a)
    ((get 'make-from-mag-ang 'polar) r a))
  ;; internal procedures
  (define (real-part z)
    (apply-generic 'real-part z))
  (define (imag-part z)
    (apply-generic 'imag-part z))
  (define (magnitude z)
    (apply-generic 'magnitude z))
  (define (angle z)
    (apply-generic 'angle z))
  
  (define (add-complex z1 z2)
    (make-from-real-imag (+ (real-part z1) (real-part z2))
			 (+ (imag-part z1) (imag-part z2))))
  (define (sub-complex z1 z2)
    (make-from-real-imag (- (real-part z1) (real-part z2))
			 (- (imag-part z1) (imag-part z2))))
  (define (mul-complex z1 z2)
    (make-from-mag-ang (* (magnitude z1) (magnitude z2))
		       (+ (angle z1) (angle z2))))

  (define (div-complex z1 z2)
    (make-from-mag-ang (/ (magnitude z1) (magnitude z2))
		       (- (angle z1) (angle z2))))
  ;; interface to rest of the system
  (define (tag z) (attach-tag 'complex z))
  (put 'add '(complex complex)
	(lambda (z1 z2) (tag (add-complex z1 z2))))
  (put 'sub '(complex complex)
	(lambda (z1 z2) (tag (sub-complex z1 z2))))
  (put 'mul '(complex complex)
	(lambda (z1 z2) (tag (mul-complex z1 z2))))
  (put 'div '(complex complex)
	(lambda (z1 z2) (tag (div-complex z1 z2))))
  (put 'make-from-real-imag 'complex
	(lambda (x y) (tag (make-from-real-imag x y))))
  (put 'make-from-mag-ang 'complex
	(lambda (r a) (tag (make-from-mag-ang r a))))

  (put 'real-part '(complex) real-part)
  (put 'imag-part '(complex) imag-part)
  (put 'magnitude '(complex) magnitude)
  (put 'angle '(complex) angle)
  'done)
(install-complex-package)

(define complex-teste ((get 'make-from-real-imag 'complex) 1 2))
(define (apply-generic op . args)
  (let ((type-tags (map type-tag args)))
    (let ((proc (get op type-tags)))
      (if proc
	  (apply proc (map contents args))
	  (error
	   "No method for these types -- APPLY-GENERIC"
	   (list op type-tags))))))
(apply-generic 'real-part complex-teste)
(apply-generic 'real-part rectangular-teste)
(get 'real-part '(rectangular))
(define rectangular-teste ((get 'make-from-real-imag 'rectangular) 1 2))

(define (make-complex-rec x y)
  ((get 'make-from-real-imag 'complex) x y))

(make-complex-rec 1 2)
(apply-generic 'make-from-real-imag 'complex 1 2)
;; do jeito que livro falou pra fazer nao funciona. Você tem que colocar a definição das funcoes na package complex pra depois poder dar put
;; pra chamar de fora do package, precisa ser criado um "magnitude" chamando apply-generic com tag '(complex)
;; ele vai obter a definicao "magnitude" dentro do package complex e vai chamá-lo
;; esse método faz um get de acordo com a tag do tipo de numero complexo, 'rectangular ou 'polar
;; e então pega o magnitude correto e o chama


;; exercise 2.78

(define (attach-tag type-tag contents)
  (cond ((number? contents) contents)
	((pair? contents) (cons type-tag contents))
	(else (error "nao sei" contents))))

(define (type-tag datum)
  (cond ((pair? datum) (car datum))
	((number? datum) 'scheme-number)
	(else (error "Bad tagged datum -- TYPE-TAG" datum))))

(define (contents datum)
  (cond ((pair? datum) (cdr datum))
	((number? datum) datum)
	(else (error "Bad tagged datum -- CONTENTS" datum))))

(define (install-scheme-number-package)
  (define (tag x)
    (attach-tag 'scheme-number x))
  (put 'add '(scheme-number scheme-number)
       (lambda (x y) (tag (+ x y))))
  (put 'sub '(scheme-number scheme-number)
       (lambda (x y) (tag (- x y))))
  (put 'mul '(scheme-number scheme-number)
       (lambda (x y) (tag (* x y))))
  (put 'div '(scheme-number scheme-number)
       (lambda (x y) (tag (/ x y))))
  (put 'make 'scheme-number
       (lambda (x) (tag x)))
  'done)
(install-scheme-number-package)
(define teste-number ((get 'make 'scheme-number) 3))
(apply-generic 'add teste-number teste-number)




(define (apply-generic op . args)
  (let ((type-tags (map type-tag args)))
    (let ((proc (get op type-tags)))
      (if proc
	  (apply proc (map contents args))
	  (error
	   "No method for these types -- APPLY-GENERIC"
	   (list op type-tags))))))


;; exercise 2.79
;; inside each number-package you have to define an equal procedure
;; complex rectangular
(define (equ? x y)
  (cond ((and (= (real-part x) (real-part y)) (= (imag-part x) (imag-part y))) #t)
	(else #f)))
;; complex polar
(define (equ? x y)
  (cond ((and (= (real-part x) (real-part y)) (= (imag-part x) (imag-part y))) #t)
	(else #f)))
;; rational
(define (equ? x y)
  (cond ((and (= (numer x) (numer y)) (= (denom x) (denom y))) #t)))
;; ordinary
(define (equ? x y)
  (= x y))

(define (install-generic-arithmetic-package)
  ;; internal procedures
  (define (equ? x y)
    (apply-generic 'equ? x y))
  
  ;; interface to rest of program
  (put 'equ? 'generic equ?)
  'done)

(define (equ? x y)
  ((get 'equ? 'generic) x y))
(get 'equ? 'complex)
(define test-complex ((get 'make-from-real-imag 'complex) 1 2))
(get 'make-from-real-imag 'complex)
(get 'make-from-real-imag 'rectangular)
;; exercise 2.80 o mesmo das coisa em cima

(define (=zero? x)
  (cond ((and (= (real-part x) 0) (= (imag-part x) 0))  #t)
	(else #f)))
;; complex polar
(define (=zero? x)
  (cond ((and (= (real-part x) 0) (= (imag-part x) 0)) #t)
	(else #f)))
;; rational
(define (=zero? x)
  (cond ((= (numer x) 0) #t)))
;; ordinary
(define (=zero? x)
  (= x 0))

(define (install-generic-arithmetic-package)
  ;; internal procedures
  (define (=zero? x)
    (apply-generic '=zero? x))
  
  ;; interface to rest of program
  (put '=zero? 'generic =zero?)
  'done)

(define (=zero? x)
  ((get '=zero? 'generic) x y))




;; 2.5.2 combining data of different types


;; to be included in the complex package
(define (add-complex-to-schemenum z x)
  (make-from-real-imag (+ (real-part z) x)
		       (imag-part z)))
(put ’add ’(complex scheme-number)
      (lambda (z x) (tag (add-complex-to-schemenum z x))))


(define (install-complex-package)
  ;; imported procedures from rectangular and polar packages
  (define (make-from-real-imag x y)
    ((get 'make-from-real-imag 'rectangular) x y))
  (define (make-from-mag-ang r a)
    ((get 'make-from-mag-ang 'polar) r a))
  ;; internal procedures
  (define (real-part z)
    ((get 'real-part (cadr z)) z))
  (define (imag-part z)
    ((get 'imag-part (cadr z)) z))
  (define (magnitude z)
    ((get 'magnitude (cadr z)) z))
  (define (angle z)
    ((get 'angle (cadr z)) z))
  
  (define (add-complex z1 z2)
    (make-from-real-imag (+ (real-part z1) (real-part z2))
			 (+ (imag-part z1) (imag-part z2))))
  (define (sub-complex z1 z2)
    (make-from-real-imag (- (real-part z1) (real-part z2))
			 (- (imag-part z1) (imag-part z2))))
  (define (mul-complex z1 z2)
    (make-from-mag-ang (* (magnitude z1) (magnitude z2))
		       (+ (angle z1) (angle z2))))

  (define (div-complex z1 z2)
    (make-from-mag-ang (/ (magnitude z1) (magnitude z2))
		       (- (angle z1) (angle z2))))

  ;; to be included in the complex package
  (define (add-complex-to-schemenum z x)
    (make-from-real-imag (+ (real-part z) x)
			 (imag-part z)))
  ;; interface to rest of the system
  (define (tag z) (attach-tag 'complex z))
  (put 'add '(complex complex)
	(lambda (z1 z2) (tag (add-complex z1 z2))))
  (put 'sub '(complex complex)
	(lambda (z1 z2) (tag (sub-complex z1 z2))))
  (put 'mul '(complex complex)
	(lambda (z1 z2) (tag (mul-complex z1 z2))))
  (put 'div '(complex complex)
	(lambda (z1 z2) (tag (div-complex z1 z2))))
  (put 'make-from-real-imag 'complex
	(lambda (x y) (tag (make-from-real-imag x y))))
  (put 'make-from-mag-ang 'complex
	(lambda (r a) (tag (make-from-mag-ang r a))))

  (put 'real-part '(complex) real-part)
  (put 'imag-part '(complex) imag-part)
  (put 'magnitude '(complex) magnitude)
  (put 'angle '(complex) angle)
  (put ’add ’(complex scheme-number)
	(lambda (z x) (tag (add-complex-to-schemenum z x))))
  'done)

;; for coercion table
(define (scheme-number->complex n)
  (make-complex-from-real-imag (contents n) 0))

(define (apply-generic op . args)
  (let ((type-tags (map type-tag args)))
    (let ((proc (get op type-tags)))
      (if proc
	  (apply proc (map contents args))
	  (if (= (length args) 2)
	      (let ((type1 (car type-tags))
		    (type2 (cadr type-tags))
		    (a1 (car args))
		    (a2 (cadr args)))
		(let ((t1->t2 (get-coercion type1 type2))
		      (t2->t1 (get-coercion type2 type1)))
		  (cond (t1->t2
			 (apply-generic op (t1->t2 a1) a2))
			(t2->t1
			 (apply-generic op a1 (t2->t1 a2)))
			(else
			 (error "No method for these types"
				(list op type-tags))))))
	      (error "No method for these types"
		     (list op type-tags)))))))


;; exercise 2.81
;; a) infinite loop

;; b) funciona do jeito que ta
;; c) bota um if depois do if de length testando se sao tipos differentes

;; 2.82
(define (apply-generic op . args)
  (let ((type-tags (map type-tag args)))
    (let ((proc (get op type-tags)))
      (if proc
	  (apply proc (map contents args))
	  (if (= (length args) 2)
	      (let ((type1 (car type-tags))
		    (type2 (cadr type-tags))
		    (a1 (car args))
		    (a2 (cadr args)))
		(let ((t1->t2 (get-coercion type1 type2))
		      (t2->t1 (get-coercion type2 type1)))
		  (cond (t1->t2
			 (apply-generic op (t1->t2 a1) a2))
			(t2->t1
			 (apply-generic op a1 (t2->t1 a2)))
			(else
			 (error "No method for these types"
				(list op type-tags))))))
	      (error "No method for these types"
		     (list op type-tags)))))))

(define (coerce-list list)
  (define (coerce-to-type type list)
    (let ((type2 (tag-type (car list))))
      (let ((conv (get-coercion type2 type)))
	(cond (conv (cons (conv (car list)) (coerce-to-type type (cdr list))))
	      (else #f)))))
  (define (iter cur list)
    (let ((coerced-list (coerce-to-type (tag-type (car cur)) list)))
      (if (problem? coerced-list)
	  (iter (cdr cur) list)
	  coerced-list)))
  (define (problem? list)
    (cond ((null? list) #f)
	  ((not (car list)) #t)
	  (else (problem? (cdr list)))))
  (iter (car list) list))


;; exercise 2.83




(define (assoc key records)
  (cond ((null? records) false)
        ((equal? key (caar records)) (car records))
        (else (assoc key (cdr records)))))

(define (make-table-coercion)
  (let ((local-table (list '*table-coercion*)))
    (define (lookup key-1 key-2)
      (let ((subtable (assoc key-1 (cdr local-table))))
        (if subtable
            (let ((record (assoc key-2 (cdr subtable))))
              (if record
                  (cdr record)
                  false))
            false)))
    (define (insert! key-1 key-2 value)
      (let ((subtable (assoc key-1 (cdr local-table))))
        (if subtable
            (let ((record (assoc key-2 (cdr subtable))))
              (if record
                  (set-cdr! record value)
                  (set-cdr! subtable
                            (cons (cons key-2 value)
                                  (cdr subtable)))))
            (set-cdr! local-table
                      (cons (list key-1
                                  (cons key-2 value))
                            (cdr local-table)))))
      'ok)    
    (define (dispatch m)
      (cond ((eq? m 'lookup-proc) lookup)
            ((eq? m 'insert-proc!) insert!)
            (else (error "Unknown operation -- TABLE" m))))
    dispatch))

(define operation-table-coercion (make-table-coercion))
(define get (operation-table-coercion 'lookup-proc))
(define put (operation-table-coercion 'insert-proc!))

(define (integer->rational x)
  (make-rat x 1))

(define (rational->real x)
  (make-real x))

(put-coerce 'integer 'rational integer->rational)
(put-coerce 'rational 'real rational->real)

(define (generic-raise x)
  (define (upper x)
    (cond ((integer? x) 'rational)
	  ((rational? x) 'real)
	  ((real? x) 'complex)))
  ((get (type-tag x) (upper (type-tag x))) x)
  )
