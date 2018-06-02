;; exercise 2.89
(define (install-polynomial-dense-package)
;; internal procedures
  ;; exercise 2.89
  (define (make-poly variable terms) (cons variable terms))
  (define (variable p) (car p))
  (define (terms p) (cdr p))
  (define (the-empty-termlist) '())
  (define (list-length list)
    (if (null? list)
      0
      (+ 1 (teste-length-list (cdr list)))))
  (define (make-coeff-list order coeff-list)
    (if (= (list-length coeff-list) order)
	(cons order coeff-list)
	(error "order e tamanho da lista de coeficientes nao eh o mesmo - make-term-list" order)))
  (define (terms-order terms)
    (car terms))
  (define (terms-coeff-list terms)
    (cdr terms))
  (define (first-coeff terms) (cadr terms))
  (define (rest-coeff terms) (cddr terms))
  (define (coeff coeff-list)
    (car coeff-list))
  (define (rest-coeff-list coeff-list)
    (cdr coeff-list))
  (define (empty-terms? terms) (null? terms))
  (define (empty-coeff-list? terms) (null? (terms-coeff-list terms)))
  (define (make-terms order coeff-list) (cons order coeff-list))
  (define (order terms) (car terms))
  (define (=zero?-p p)
    (cond ((null? (terms-coeff-list p) #t))
	   ((= 0 (first-term p) (=zero?-p (rest-terms p))))
	   (else #f)))
  (define (adjoin-term new-term-order new-term-coeff terms)
    (let ((order (terms-order terms))
	  (coeff-list (terms-coeff-list terms)))
      (begin (define (iteration current-term-order current-coeff-list)
	       (cond ((null? current-coeff-list) (if (> new-term-order current-term-order)
						     (cons 0 (iteration (+ current-term-order 1) (cdr current-coeff-list)))
						     (cons new-term-coeff '())))
		     ((= new-term-order current-term-order) (cons (+ new-term-coeff (car coeff-list)) (cdr coeff-list)))
		     (else (cons (car current-coeff-list) (iteration (- current-term-order 1) (cdr current-coeff-list))))))
	     ;;return terms
	     (if (> new-term-order order)
		 (make-terms new-term-order (iteration order coeff-list))
		 (make-terms order (iteration order coeff-list))))))
  (define (same-variable? x1 x2)
    (eq? x1 x2))
  ;; exercise 2.87
  (define (=zero? x)
    (= 0 x))
  ;; representation of terms and term lists
  (define (add-poly p1 p2)
    (if (same-variable? (variable p1) (variable p2))
	(make-poly (variable p1)
		   (add-terms (terms p1) (terms p2)))
	(error "Polys not in same var: ADD-POLY" (list p1 p2))))
  (define (mul-poly p1 p2)
    (if (same-variable? (variable p1) (variable p2))
	(make-poly (variable p1)
		   (mul-terms (terms p1) (terms p2)))
	(error "Polys not in same var: MUL-POLY" (list p1 p2))))
  (define (add-terms terms1 terms2)
    (cond ((< (terms-order terms1) 0) terms2)
	  (else (let ((order1 (terms-order terms1))
		      (coeff-list1 (terms-coeff-list terms1)))
		  (begin (adjoin-term order1
				      (car coeff-list1)
				      terms2)
			 (add-terms (make-terms (- order1 1) (cdr coeff-list1)) terms2))))))
  ;; (define (add-terms L1 L2)
  ;;   (cond ((empty-termlist? L1) L2)
  ;; 	  ((empty-termlist? L2) L1)
  ;; 	  (else
  ;; 	   (let ((t1 (first-term L1))
  ;; 		 (t2 (first-term L2)))
  ;; 	     (cond ((> (order t1) (order t2))
  ;; 		    (adjoin-term
  ;; 		     t1 (add-terms (rest-terms L1) L2)))
  ;; 		   ((< (order t1) (order t2))
  ;; 		    (adjoin-term
  ;; 		     t2 (add-terms L1 (rest-terms L2))))
  ;; 		   (else
  ;; 		    (adjoin-term
  ;; 		     (make-term (order t1)
  ;; 				(add (coeff t1) (coeff t2)))
  ;; 		     (add-terms (rest-terms L1)
  ;; 				(rest-terms L2))))))))) 
  ;; exercise 2.88
  (define (sub-terms L1 L2)
    (cond ((empty-termlist? L1) (negate-term L2))
	  ((empty-termlist? L2) L1)
	  (else
	   (let ((t1 (first-term L1))
		 (t2 (first-term L2)))
	     (cond ((> (order t1) (order t2))
		    (adjoin-term t1
				 (sub-terms (rest-terms L1) L2)))
		   ((< (order t1) (order t2))
		    (adjoin-term t2 (sub-terms L1 (rest-terms L2))))
		   (else (adjoin-term (make-term (order t1)
						 (sub (coeff t1) (coeff t2)))
				      (sub-terms (rest-terms L1)
						 (rest-terms L2))))
		   )))))
  ;; exercise 2.88 
  (define (negate-term L1)
    (cond ((empty-termlist? L1) the-empty-termlist)
	  (else (adjoin-term
		 (make-term (order (first-term L1))
			    (- (coeff (first-term L1))))
		 (negate-term (rest-terms L1))))))
  (define (mul-terms L1 L2)
    (if (empty-termlist? L1)
	(the-empty-termlist)
	(add-terms (mul-term-by-all-terms (first-term L1) L2)
		   (mul-terms (rest-terms L1) L2))))
  (define (mul-term-by-all-terms t1 L)
    (if (empty-termlist? L)
	(the-empty-termlist)
	(let ((t2 (first-term L)))
	  (adjoin-term
	   (make-term (+ (order t1) (order t2))
		      (mul (coeff t1) (coeff t2)))
	   (mul-term-by-all-terms t1 (rest-terms L))))))
  ;; interface to rest of the system
  (define (tag p) (attach-tag 'polynomial-dense p))
  (put 'add '(polynomial-dense polynomial-dense)
       (lambda (p1 p2) (tag (add-poly p1 p2))))
  (put 'mul '(polynomial-dense polynomial-dense)
       (lambda (p1 p2) (tag (mul-poly p1 p2))))
  (put 'make 'polynomial-dense
       (lambda (var terms) (tag (make-poly var terms))))
  (put '=zero? '(polynomial-dense) =zero?-p)
  (put 'adjoin-term 'polynomial-dense (lambda (order coeff terms) (tag (adjoin-term order coeff terms))))
  (put 'add-terms 'polynomial-dense add-terms)
  'done)

(install-polynomial-dense-package)



;;  testes
(define (teste-make-terms var coeff-list)
  (cons var coeff-list))
(define teste-adjoin-term (get 'adjoin-term 'polynomial-dense))
(define teste-add-terms (get 'add-terms 'polynomial-dense))
(teste-adjoin-term 2 2 (list 2 1 0 0))
(teste-make-terms (- (car (list 2 1 0 0)) 1) (cdr (cdr (list 2 1 0 0))))
(teste-make-terms 1 (list 1 1))

(teste-add-terms (list 2 2 0 0) (list 2 1 1 1))
(teste-adjoin-term )
