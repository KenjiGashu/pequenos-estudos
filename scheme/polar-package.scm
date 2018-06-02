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
  ;; exercise 2.88
  (define (=zero? x)
    (and (= 0 (real-part x)) (= 0 (imag-part x))))
  (put 'real-part '(polar) real-part)
  (put 'imag-part '(polar) imag-part)
  (put 'magnitude '(polar) magnitude)
  (put 'angle '(polar) angle)
  (put 'make-from-real-imag 'polar
	(lambda (x y) (tag (make-from-real-imag x y))))
  (put 'make-from-mag-ang 'polar
       (lambda (r a) (tag (make-from-mag-ang r a))))
  (put 'equ? '(polar polar) equ?)
  (put '=zero? '(polar) =zero?)
  'done)

;; exercise 2.86
(define (install-polar-package)
  ;; internal procedures
  (define (magnitude z) (car z))
  (define (angle z) (cdr z))
  (define (make-from-mag-ang r a) (cons r a))
  (define (real-part z)
    (apply-generic 'mul (magnitude z) (apply-generic 'cos (angle z))))
  (define (imag-part z)
    (apply-generic 'mul (magnitude z) (apply-generic 'sin (angle z))))
  (define (make-from-real-imag x y)
    (cons (apply-generic 'sqrt (apply-generic 'sum (apply-generic 'square x) (apply-generic 'square y)))
	  (appla-generic 'atan y x)))
  ;; interface to the rest of the system
  (define (tag x) (attach-tag 'polar x))
  (define (equ? x y)
    (cond ((and (= (real-part x) (real-part y)) (= (imag-part x) (imag-part y))) #t)
	  (else #f)))
  (define (=zero? x)
    (and (= 0 (real-part x)) (= 0 (imag-part x))))
  (define (negate x)
    (make-from-real-imag (- (real-part x))
			 (- (imag-part x))))
  (put 'real-part '(polar) real-part)
  (put 'imag-part '(polar) imag-part)
  (put 'magnitude '(polar) magnitude)
  (put 'angle '(polar) angle)
  (put 'make-from-real-imag 'polar
	(lambda (x y) (tag (make-from-real-imag x y))))
  (put 'make-from-mag-ang 'polar
       (lambda (r a) (tag (make-from-mag-ang r a))))
  (put 'equ? '(polar polar) equ?)
  (put '=zero? '(polar) =zero?)
  (put 'negate '(polar) (lambda (x) (tag (negate x))))

  'done)


(install-polar-package)
