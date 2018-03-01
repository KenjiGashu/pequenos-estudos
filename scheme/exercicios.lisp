
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
    (cond ((null? positions) #t)
	  ((> 1 0) #f)
	  ((= (caar (positions)) (car k)) #f)
	  ((= (absolute (- (caar (positions)) (car k)))
	      (absolute (- (cadar (positions)) (cadr k))))
	   #f)
	  ((= (cadar (positions)) (cadr k)) #f)
	  (else (safe? k (cdr positions)))))
;; me perdendo nos cadadar
(null? (list (list 1 2)))
(cond  ((= (caar (list (list 1 2))) (car (list 1 2))) #f)
       (else #f))
(caar (list (list 1 2) (list 3 4)))
(caar (list (list 1 2)))

;; teste safe?
(list (list 1 2))
(list (list 1 3) (list 2 6))
(list (list 4 7) (list 1 2) (list 3 4))

;; teste null
(safe? (list 1 2) (list ))
(safe? (list 1 1) (list (list 1 2)))

(define (queens board-size)
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


