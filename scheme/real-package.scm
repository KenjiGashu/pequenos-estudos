(define (install-real-package)
  (define (square x)
    (* x x))
  (define (make-real x)
    x)
  (define (=zero? x)
    (= x 0))
  (define (tag x)
    (cons 'real x))
  (put 'make 'real (lambda (x) (tag (make-real x))))
  (put 'equ? '(real real) =)
  (put 'sqrt '(real) (lambda (x) (tag (sqrt x))))
  (put 'atan '(real real) (lambda (x y) (tag (atan x y))))
  (put 'sin '(real) (lambda (x) (tag (sin x))))
  (put 'cos '(real) (lambda (x) (tag (cos x))))
  (put 'square '(real) (lambda (x) (tag (square x))))
  ;; exercise 2.88
  (put '=zero? '(real) =zero?)
  (put 'negate '(real) (lambda (x) (tag (- x))))
  'done)
(install-real-package)
