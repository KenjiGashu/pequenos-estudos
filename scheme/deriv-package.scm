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
