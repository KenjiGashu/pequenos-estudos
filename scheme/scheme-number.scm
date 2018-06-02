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

;; exercise 2.86
(define (install-scheme-number-package)
  (define (square x)
    (* x x))
  ;; exercise 2.88
  (define (=zero? x)
    (= 0 x))
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
  (put 'negate '(scheme-number) (lambda (x) (tag (- x))))

  (put 'sqrt '(scheme-number) (lambda (x) (tag (sqrt x))))
  (put 'atan '(scheme-number) (lambda (x y) (tag (atan x t))))
  (put 'sin '(scheme-number) (lambda (x) (tag (sin x))))
  (put 'cos '(scheme-number) (lambda (x) (tag (cos x))))
  (put 'square '(scheme-number) (lambda (x) (tag (square x))))
  (put '=zero? '(scheme-number) =zero?)
  'done)

(install-scheme-number-package)




(define number-package-test ((get 'make 'scheme-number) 6))
(apply-generic 'sqrt number-package-test)
(apply-generic 'sin number-package-test)
