(define pi 3.14159265358979323846264338327)

(define (degree-to-rad degree)
  (/ (* degree (* pi 2)) 360))


(define (absolute x)
  (cond ((< x 0) (- x))
	(else x)))

(define (append list1 list2)
  (if (null? list1)
      list2
      (cons (car list1) (append (cdr list1) list2))))

(define (length list)
    (define (iter list size)
      (cond ((null? list) size)
	    (else (iter (cdr list) (+ 1 size)))))
    (iter list 0))


(define (create-point x y)
  (cons x y))

(define (point-x p)
  (car p))

(define (point-y p)
  (cdr p))

(define (create-frame p0 p1 p2 p3)
  (list p0 p1 p2 p3))

(define (frame-p0 frame)
  (car frame))

(define (frame-p1 frame)
  (car (cdr frame)))

(define (frame-p2 frame)
  (car (cddr frame)))

(define (frame-p3 frame)
  (car (cdddr frame)))

(define (rotacionar-ponto x y rad)
  (cons (- (* x (cos rad))
	   (* y (sin rad)))
	(+ (* x (sin rad))
	   (* y (cos rad)))))

(define (rotacionar-90 x y)
  (cons (- y) x))

(define (eneth list n)
  (cond ((null? list) '())
	((= n 0) (car list))
	(else (cdr list) (- n 1))))

(define (map proc list)
  (cond ((null? list) '())
	(else (cons (proc (car list)) (map proc (cdr list))))))


(define (funcao-linear-x percent-x p1 p2)
  (let* ((p1x (car p1))
	 (p1y (cdr p1))
	 (p2x (car p2))
	 (p2y (cdr p2))
	 (diffx (- p2x p1x))
	 (diffy (- p2y p1y))
	 (a (cond ((= diffx 0) '()) ;; linha na vertical
		  ((= diffy 0) 0) ;; linha horizontal
		  (else (/ diffy difx))))
	 (x (+ (* diffx percent-x) p1x))
	 (y (cond ((null? a) (+ (* percent-x diffy) p1y))
		  ((= a 0) p1y)
		  (else (- (* a (- p1x x)) p1y)))))
    (cons (absolute x) (absolute y))))

(define (funcao-linear-y percent-y p1 p2)
  (let* ((p1x (car p1))
	 (p1y (cdr p1))
	 (p2x (car p2))
	 (p2y (cdr p2))
	 (diffx (- p2x p1x))
	 (diffy (- p2y p1y))
	 (a (cond ((= diffx 0) '()) ;;linha vertical
		  ((= diffy 0) 0) ;; linha horizontal
		  (else (/ diffy diffx))))
	 (y (+ (* percent-y diffy) p1y))
	 (x (cond ((null? a) p1x) ;; x eh constante
		  ((= a 0) (+ (* percent-y diffx) p1x)) ;; x na mesma proporcao de y
		  (else (- (/ (- y p1y) a) (- p1x)))))) ;; x calculado normalmente
    (cons x y)))



(define (paint2 painter)
  

  (define (translate-painter frame)
    (define (translate-point ponto)
      (funcao-linear-x (point-x ponto)
		       (funcao-linear-y (point-y ponto) (frame-p3 frame) (frame-p0 frame))
		       (funcao-linear-y (point-y ponto) (frame-p2 frame) (frame-p1 frame))))
    (define (translate-list list)
      (map translate-point list))
    (map translate-list painter))

  
  (define (desenha-lista layer lista)
    (define (iter-lista array lista pos)
      ;; (display lista)
      (cond ((null? lista) array)
	    (else (aset array (* pos 2) (point-x (car lista)))
		  (aset array (+ (* pos 2) 1) (point-y (car lista)))
		  (iter-lista array (cdr lista) (+ pos 1)))))
    (let* ((array-len (* (length lista) 2))
	   (array-pontos (cons-array array-len 'double)))
      (gimp-pencil layer array-len (iter-lista array-pontos lista 0))))

  (define (chama-desenho layer lista)
    (cond ((null? lista) '())
	  (else (desenha-lista layer (car lista))
		(chama-desenho layer (cdr lista)))))
  
  (let* ((width 500)
	 (height 500)
	 (frame (create-frame (create-point 0 500) (create-point 500 500) (create-point 500 0) (create-point 0 0)))
	 (image (car (gimp-image-new width height RGB)))
	 (layer (car (gimp-layer-new image width height RGB-IMAGE "my layer" 0 NORMAL))))

    (gimp-image-add-layer image layer 0)
    (gimp-context-set-background '(255 255 255))
    (gimp-context-set-foreground '(000 000 000))
    (gimp-context-set-brush-size 5)
    (gimp-drawable-fill layer BACKGROUND-FILL)

    ;; (display painter)
    (chama-desenho layer (translate-painter frame))

    (gimp-file-save RUN-NONINTERACTIVE image layer "teste.jpg" "")))

(define dima
  (list (list (create-point 0.3 0.5)
	      (create-point 0.5 0.3)
	      (create-point 0.7 0.5)
	      (create-point 0.5 0.9)
	      (create-point 0.5 0.3)
	      (create-point 0.5 0.7))))

(define (identity painter)
  painter)

(define (espelha painter)
  (define (mirror pair)
    (cons (- 1 (point-x pair)) (point-y pair)))
  (define (mirror-list list)
    (map mirror list))
  (map mirror-list painter))

(define (cabeca-pra-baixo painter)
  (define (turn-down pair)
    (cons (point-x pair) (- 1 (point-y pair))))
  (define (turn-down-list list)
    (map turn-down list))
  (map turn-down-list painter))

(define (gira rad painter)
  (let* ((meiox 0.5)
	 (meioy 0.5))
    (define (transforma pair)
      (cons (- (point-x pair) meiox) (- (point-y pair) meioy)))
    (define (transforma-volta pair)
      (cons (+ (point-x pair) meiox) (+ (point-y pair) meioy)))
    (define (rotacao pair)
      (rotacionar-ponto (point-x pair) (point-y pair) rad))
    (define (transforma-list list)
      (map transforma list))
    (define (transforma-volta-list list)
      (map transforma-volta list))
    (define (rotacao-list list)
      (map rotacao list))
    (map transforma-volta-list (map rotacao-list (map transforma-list painter)))))

(define (gira-90 painter)
  (gira (degree-to-rad 90) painter))

(define (gira-270 painter)
  (gira (degree-to-rad 270) painter))

(define (gira-180 painter)
  (gira (degree-to-rad 180) painter))

(define (do-lado painter1 painter2)
  (define (first-half point)
    (cons (* (point-x point) 0.5) (point-y point)))
  (define (second-half point)
    (cons (+ (* (point-x point) 0.5) 0.5) (point-y point)))
  (define (first-half-list list)
    (map first-half list))
  (define (second-half-list list)
    (map second-half list))
  (append (map first-half-list painter1) (map second-half-list painter2)))

(define (em-baixo painter1 painter2)
  (define (upper-half point)
    (cons (point-x point) (* (point-y point) 0.5)))
  (define (lower-half point)
    (cons (point-x point) (+ (* (point-y point) 0.5) 0.5)))
  (define (upper-half-list list)
    (map upper-half list))
  (define (lower-half-list list)
    (map lower-half list))
  (append (map lower-half-list painter1) (map upper-half-list painter2)))

(define (splita-direita painter n)
  (if (= n 0)
      painter
      (let ((menor (splita-direita painter (- n 1))))
	(do-lado painter (em-baixo menor menor)))))

(define (splita-cima painter n)
  (if (= n 0)
      painter
      (let ((menor (splita-cima painter (- n 1))))
	(em-baixo (do-lado menor menor) painter))))

(define (splita-canto painter n)
  (if (= n 0)
      painter
      (let ((cima (splita-cima painter (- n 1)))
	    (direita (splita-direita painter (- n 1))))
	(let ((cima-esquerda (do-lado cima cima))
	      (baixo-direita (em-baixo direita direita))
	      (canto (splita-canto painter (- n 1))))
	  (do-lado (em-baixo cima-esquerda painter)
		   (em-baixo canto baixo-direita))))))


(define (square-limit painter n)
  (let ((quarter (splita-canto painter n)))
    (let ((half (do-lado (espelha quarter) quarter)))
      (em-baixo (cabeca-pra-baixo half) half))))

(define (square-of-four tl tr bl br)
  (lambda (painter)
    (let ((top (do-lado (tl painter) (tr painter)))
	  (bottom (do-lado (bl painter) (br painter))))
      (em-baixo bottom top))))


(define (flipped-pairs painter)
  (let ((combine4 (square-of-four identity cabeca-pra-baixo
				  identity cabeca-pra-baixo)))
    (combine4 painter)))

(define (square-limit painter n)
  (let ((combine4 (square-of-four espelha identity
				  gira-180 cabeca-pra-baixo)))
    (combine4 (splita-canto painter n))))

(define (split proc1 proc2)
  (define (x painter n)
    (if (= n 0)
	painter
	(let ((menor (x painter (- n 1))))
	  (proc1 painter (proc2 menor menor)))))
  x)

(define right-split (split do-lado em-baixo))

(define up-split (split em-baixo do-lado))

(define (make-vect x y)
  (cons x y))

(define (xcor-vect v)
  (car v))

(define (ycor-vect v)
  (cdr v))

(define (add-vect v1 v2)
  (make-vect (+ (xcor-vect v1) (xcor-vect v2))
	     (+ (ycor-vect v1) (ycor-vect v2))))

(define (sub-vect v1 v2)
  (make-vect (- (xcor-vect v1) (xcor-vect v2))
	     (- (ycor-vect v1) (ycor-vect v2))))

(define (scale-vect v s)
  (make-vect (* (xcor-vect v) s)
	     (* (ycor-vect v) s)))

(define (make-frame1 origin edge1 edge2)
  (list origin edge1 edge2))

(define (make-frame2 origin edge1 edge2)
  (cons origin (cons edge1 edge2)))

(define (origin-frame1 frame)
  (car frame))

(define (origin-frame2 frame)
  (car frame))

(define (edge1-frame1 frame)
  (car (cdr frame)))

(define (edge1-frame2 frame)
  (car (cdr frame)))

(define (edge2-frame1 frame)
  (car (cdr (cdr frame))))

(define (edge2-frame2 frame)
  (cdr (cdr frame)))

(define (frame-coord-map frame)
  (lambda (v)
    (add-vect
     (origin-frame1 frame)
     (add-vect (scale-vect (xcor-vect v)
			   (edge1-frame1 frame))
	       (scale-vect (ycor-vect v)
			   (edge2-frame1 frame))))))


(define (segments->painter segment-list)
  (lambda (frame)
    (for-each
     (lambda (segment)
       (draw-line
	((frame-coord-map frame) (start-segment segment))
	((frame-coord-map frame) (end-segment segment))))
     segment-list)))

(define (make-segment start-segment end-segment)
  (cons start-segment end-segment))

(define (start-segment segment)
  (car segment))

(define (end-segment segment)
  (cdr segment))


(define (border-painter frame)
  (let ((segments-list (list (make-segment (make-vect 0 0) (make-vect 1 0))
			     (make-segment (make-vect 1 0) (make-vect 1 1))
			     (make-segment (make-vect 1 1) (make-vect 0 1))
			     (make-segment (make-vect 0 1) (make-vect 0 0)))))
    ((segments->painter segments-list) frame)))

(define (border-painter frame)
  (let ((segments-list (list (make-segment (make-vect 0 0) (make-vect 1 1))
			     (make-segment (make-vect 0 1) (make-vect 1 0)))))
    ((segments->painter segments-list) frame)))

(define (border-painter frame)
  (let ((segments-list (list (make-segment (make-vect 0 0.5) (make-vect 0.5 0))
			     (make-segment (make-vect 0.5 0) (make-vect 1 0.5))
			     (make-segment (make-vect 1 0.5) (make-vect 0.5 1))
			     (make-segment (make-vect 0.5 1) (make-vect 0 0.5)))))
    ((segments->painter segments-list) frame)))

(define (transform-painter painter origin corner1 corner2)
  (lambda (frame)
    (let ((m (frame-coord-map frame)))
      (let ((new-origin (m origin)))
	(painter
	 (make-frame new-origin
		     (sub-vect (m corner1) new-origin)
		     (sub-vect (m corner2) new-origin)))))))

(define (flip-vert painter)
  (transform-painter painter
		     (make-vect 0.0 1.0); new origin
		     (make-vect 1.0 1.0); new end of edge1
		     (make-vect 0.0 0.0))) ; new end of edge2


(define (shrink-to-upper-right painter)
  (transform-painter painter
		     (make-vect 0.5 0.5)
		     (make-vect 1.0 0.5)
		     (make-vect 0.5 1.0)))

(define (rotate90 painter)
  (transform-painter painter
		     (make-vect 1.0 0.0)
		     (make-vect 1.0 1.0)
		     (make-vect 0.0 0.0)))


(define (beside painter1 painter2)
  (let ((split-point (make-vect 0.5 0.0)))
    (let ((paint-left
	   (transform-painter painter1
			      (make-vect 0.0 0.0)
			      split-point
			      (make-vect 0.0 1.0)))
	  (paint-right
	   (transform-painter painter2
			      split-point
			      (make-vect 1.0 0.0)
			      (make-vect 0.5 1.0))))
      (lambda (frame)
	(paint-left frame)
	(paint-right frame)))))



(define (flip-horiz painter)
  (transform-painter painter
		     (make-vect 1.0 0.0)
		     (make-vect 0.0 0.0)
		     (make-vect 1.0 1.0)))


(define (rotate180 painter)
  (transform-painter painter
		     (make-vect 1.0 1.0)
		     (make-vect 0.0 1.0)
		     (make-vect 1.0 0.0)))

(define (rotate270 painter)
  (transform-painter painter
		     (make-vect 0.0 1.0)
		     (make-vect 0.0 0.0)
		     (make-vect 1.0 1.0)))


(define (below painter1 painter2)
  (let ((paint-upper (transform-painter painter2
					(make-vect 0.0 0.0)
					(make-vect 1.0 0.0)
					(make-vect 0.0 0.5)))
	(paint-lower (transform-painter painter1
					(make-vect 0.0 0.5)
					(make-vect 1.0 0.5)
					(make-vect 1.0 0.5))))
    (lambda (frame)
      (paint-upper frame)
      (paint-lower frame))))

(define (below painter1 painter2)
  (rotate270 (beside (rotate90 painter2) (rotate90 painter1))))
