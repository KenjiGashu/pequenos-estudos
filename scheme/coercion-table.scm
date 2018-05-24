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
	  (content (map contents arg))
	  (procedure (get-coercion 'raise (map type-tag arg))))
      (if procedure
	  (apply (get-coercion 'raise tag) content)
	  x))))
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

;; exercise 2.85
(define (drop x)
  (let ((tag (type-tag x))
	(num (contents x)))
    (let ((conversao (get-coercion 'lower (list tag))))
      (if conversao
	  (let ((numero-convertido (conversao num)))
	    (let ((de-volta-acima (generic-raise numero-convertido)))
	      (if (apply-generic 'equ? de-volta-acima x)
		  (drop numero-convertido)
		  x)))
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
(define teste-complex2 ((get 'make-from-real-imag 'complex) 2 0))
;;test scheme number
(define number-test ((get 'make 'scheme-number) 2))
(define lista-scheme-number (list (cons 'scheme-number 1) (cons 'rational (cons 1 2)) (cons 'scheme-number 3)))
(define teste-complex ((get 'make-from-real-imag 'complex) 2 2))
(define number-test2 ((get 'make 'scheme-number) 1))
(define rational-test2 ((get 'make 'rational) 2 2))




;; testes antes de testar coercion complex->real

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
((get-coercion 'lower '(rational)) (contents rational-test2))
((get-coercion 'raise '(scheme-number)) (contents number-test2))

(apply-generic 'equ? rational-test2 (generic-raise number-test2))

;; testes de drop
(drop rational-test2)
(drop real-test)
(drop teste-complex2)

