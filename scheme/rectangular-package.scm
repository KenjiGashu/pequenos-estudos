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
  ;; exercise 2.88
  (define (=zero? x)
    (and (= 0 (real-part x)) (= 0 (imag-part x))))
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
  (put '=zero? '(rectangular) =zero?)
  'done)

;; exercise 2.86
(define (install-rectangular-package)
  ;; internal procedures
  (define (real-part z) (car z))
  (define (imag-part z) (cdr z))
  (define (make-from-real-imag x y) (cons x y))
  (define (magnitude z)
    (apply-generic 'sqrt (apply-generic 'add (apply-generic 'square (real-part z))
					(apply-generic 'square (imag-part z)))))
  (define (angle z)
    (apply-generic 'atan (imag-part z) (real-part z)))
  (define (make-from-mag-ang r a)
    (cons (apply-generic 'mul r (apply-generic 'cos a)) (apply-generic 'mul r (apply-generic 'sin a))))
  (define (equ? x y)
    (cond ((and (= (real-part x) (real-part y)) (= (imag-part x) (imag-part y))) #t)
	  (else #f)))
  (define (=zero? x)
    (and (= 0 (real-part x)) (= 0 (imag-part x))))
  (define (negate x)
    (make-from-real-imag (- (real-part x))
			 (- (imag-part x))))
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
  (put '=zero? '(rectangular) =zero?)
  (put 'negate '(rectangular) (lambda (x) (tag (negate x))))
  'done)

(install-rectangular-package)

(define rectangular-package-test-num2 ((get 'make-from-real-imag 'rectangular) 5 9))

