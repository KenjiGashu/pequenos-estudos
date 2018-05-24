;; =============     table package        ===================
(require sicp)
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



(define (apply-generic op . args)
  (let ((type-tags (map type-tag args)))
    (let ((proc (get op type-tags)))
      (if proc
	  (apply proc (map contents args))
	  (error
	   "No method for these types -- APPLY-GENERIC"
	   (list op type-tags))))))


(define (install-complex-package)
  ;; imported procedures from rectangular and polar packages
  (define (make-from-real-imag x y)
    ((get 'make-from-real-imag 'rectangular) x y))
  (define (make-from-mag-ang r a)
    ((get 'make-from-mag-ang 'polar) r a))
  (define (equ? x y)
    (apply-generic 'equ? x y))
  (define (real-part x)
    (apply-generic 'real-part x))
  (define (imag-part x)
    (apply-generic 'imag-part x))
  (define (magnitude x)
    (apply-generic 'magnitude x))
  (define (angle x)
    (apply-generic 'angle x)) 
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
  (put 'equ? '(complex complex) equ?)
  (put 'real-part '(complex) real-part)
  (put 'imag-part '(complex) imag-part)
  (put 'magnitude '(complex) magnitude)
  (put 'angle '(complex) angle)
  'done)
(install-complex-package)



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
  (define (equ? x y)
    (cond ((and (= (real-part x) (real-part y)) (= (imag-part x) (imag-part y))) #t)
	  (else #f)))
  (put 'real-part '(polar) real-part)
  (put 'imag-part '(polar) imag-part)
  (put 'magnitude '(polar) magnitude)
  (put 'angle '(polar) angle)
  (put 'make-from-real-imag 'polar
	(lambda (x y) (tag (make-from-real-imag x y))))
  (put 'make-from-mag-ang 'polar
       (lambda (r a) (tag (make-from-mag-ang r a))))
  (put 'equ? '(polar polar) equ?)
  'done)
(install-polar-package)



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
  (define (equ? x y)
    (cond ((and (= (numer x) (numer y)) (= (denom x) (denom y))) #t)))
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
  (put 'equ? '(rational rational) equ?)
  (put 'denom '(rational) denom)
  (put 'numer '(rational) numer)
  'done)
(install-rational-package)




(define (install-real-package)
  (define (make-real x)
    x)
  (define (tag x)
    (cons 'real x))
  (put 'make 'real (lambda (x) (tag (make-real x))))
  'done)
(install-real-package)






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
  (define (equ? x y)
    (cond ((and (= (real-part x) (real-part y)) (= (imag-part x) (imag-part y))) #t)
	  (else #f)))
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
  (put 'equ? '(rectangular rectangular) equ?)
  'done)
(install-rectangular-package)





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
  (put 'equ? '(scheme-number scheme-number)
       (lambda (x y) (= x y)))
  'done)
(install-scheme-number-package)




;; coercion table!
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
(define get-coercion (operation-table-coercion 'lookup-proc))
(define put-coercion (operation-table-coercion 'insert-proc!))
(define (install-coercion-package)
  ;;private
  (define (integer->rational x)
    ((get 'make 'rational) x 1))
  (define (rational->real x)
    (let ((numer (get 'numer '(rational)))
	  (denom (get 'denom '(rational))))
      ((get 'make 'real) (/ (numer x) (denom x)))))
  (define (real->complex x)
    ((get 'make-from-real-imag 'complex) x 0))
  (define (complex->real x)
    ((get 'make 'real) (apply-generic 'real-part x)))
  (define (real->rational x)
    (define (mul-10 x mul-times)
      (let ((mult-by-10 (* mul-times x)))
	(if (integer? mult-by-10)
	    (cons (* mul-times x) mul-times)
	    (mul-10 (* mul-times x) (* 10 mul-times)))))
    ((get 'make 'rational) (car (mul-10 x 10)) (cdr (mul-10 x 10))))
  (define (rational->integer x)
    (let ((denom (get 'denom '(rational)))
	  (numer (get 'numer '(rational))))
      ((get 'make 'scheme-number) (/ (- (numer x)
					(modulo (numer x) (denom x)))
				     (denom x)))))
  (put-coercion 'scheme-number 'rational integer->rational)
  (put-coercion 'rational 'real rational->real)
  (put-coercion 'real 'complex real->complex)
  (put-coercion 'raise '(scheme-number) integer->rational)
  (put-coercion 'raise '(rational) rational->real)
  (put-coercion 'raise '(real) real->complex)
  (put-coercion 'coercion-list 'scheme-number 1)
  (put-coercion 'coercion-list 'rational 2)
  (put-coercion 'coercion-list 'real 3)
  (put-coercion 'coercion-list 'complex 4)
  (put-coercion 'number-to-type 4 'complex)
  (put-coercion 'number-to-type 3 'real)
  (put-coercion 'number-to-type 2 'rational)
  (put-coercion 'number-to-type 1 'scheme-number)
  (put-coercion 'lower '(complex) complex->real)
  (put-coercion 'lower '(real) real->rational)
  (put-coercion 'lower '(rational) rational->integer)
  'done)
(install-coercion-package)

(define (highest-type list)
  (define (highest list biggest-type)
    (if (null? list)
	biggest-type
	(let ((tag (type-tag (car list))))
	  (let ((num (get-coercion 'coercion-list tag)))
	    (if (> num biggest-type)
		(highest (cdr list) num)
		(highest (cdr list) biggest-type))))))
  (highest list 0))

(define (generic-raise x)
  (let ((arg (list x)))
    (let ((tag (map type-tag arg))
	  (content (map contents arg)))
      (apply (get-coercion 'raise tag) content))))
(define (generic-raise-list list)
  (define (generic-raise-list-iterator list mais-alto)
     (cond ((null? list) list)
	   (else (let ((current (car list))
		       (tag (type-tag (car list)))
		       (content (contents (car list)))
		       (tag-num (get-coercion 'coercion-list (type-tag (car list)))))
		   (cond ((> (- mais-alto tag-num) 1)
			  (generic-raise-list-iterator (cons (generic-raise current)
							     (cdr list))
						       mais-alto))
			 ((= (- mais-alto tag-num) 1)
			  (cons (generic-raise current)
				(generic-raise-list-iterator (cdr list) mais-alto)))
			 (else (cons current
				     (generic-raise-list-iterator (cdr list) mais-alto))))))))
  (let ((tipo-mais-alto (highest-type list))) 
    (generic-raise-list-iterator list tipo-mais-alto)))
;; exercise 2.84
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
	      (generic-raise-list args))))))

(define (drop x)
  (let ((tag (type-tag x))
	(content (contents x)))
    (let ((conversao (get 'lower tag)))
      (if (conversao)
	  (if (apply-generic 'equ?
			     (apply-generic 'raise (type-tag (conversao contents)) (conversao contents)) x)
	      (drop conversao)
	      x)
	  x))))

(define (apply-generic-coercion op . args)
  (let ((type-tags (map type-tag args)))
    (let ((proc (get-coercion op type-tags)))
      (if proc
	  (apply proc (map contents args))
	  (error "nao encontrou a funcao no coercion table" op)))))
(define (integer->rational x)
  ((get-coercion 'scheme-number 'rational) (contents x)))
(define (rational->real x)
  ((get-coercion 'rational 'real) (contents x)))
(define (real->complex x)
  ((get-coercion 'real 'complex) (contents x)))
(define rational-test ((get 'make 'rational) 1 2))
(define real-test ((get 'make 'real) 4.5))
;;test scheme number
(define number-test ((get 'make 'scheme-number) 2))
(integer->rational number-test)
(rational->real rational-test)
(real->complex real-test)
(contents rational-test)
((get 'numer '(rational)) (contents rational-test))

(define lista-scheme-number (list (cons 'scheme-number 1) (cons 'rational (cons 1 2)) (cons 'scheme-number 3)))


;; testes antes de testar coercion complex->real
(define teste-complex ((get 'make-from-real-imag 'complex) 2 2))
((get 'real-part '(complex)) teste-complex)
(apply-generic 'real-part teste-complex)
((get 'make 'real) (apply-generic 'real-part teste-complex))
((get 'make 'real) 5)
((get-coercion 'lower '(complex)) teste-complex)

;; testes de real->rational
(define (mul-10 x mul-times)
  (let ((mult-by-10 (* mul-times x)))
    (if (integer? mult-by-10)
	(cons (* mul-times x) mul-times)
	(mul-10 (* mul-times x) (* 10 mul-times)))))
(mul-10 4.5 10)
(car (mul-10 4.5 10))
(cdr (mul-10 4.5 10))
((get 'make 'rational) (car (mul-10 4.5 10)) (cdr (mul-10 4.5 10)))
((get 'make 'rational) 45 10)

((get-coercion 'lower '(real)) (contents real-test))
((get-coercion 'lower '(real)) 4.5) 

;; testes de rational->integer
((get-coercion 'lower '(rational)) (contents rational-test))
((get 'make 'scheme-number) 7)
