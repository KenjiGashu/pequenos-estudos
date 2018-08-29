(asdf:load-system :clx)
(defpackage :teste-de-telas
  (:use :common-lisp :asdf))
(in-package :teste-de-telas)

(defstruct (menu)
  "A simple menu of text strings."
  (title "Choose an item:")
  item-alist				;((item-window item-string))
  window
  gcontext
  width
  title-width
  item-width
  item-height
  (geometry-changed-p t))	     ;nil if unchanged since displayed


(defun create-menu (parent-window text-color background-color text-font)
  (make-menu
   ;; Create menu graphics context
   :gcontext (CREATE-GCONTEXT :drawable   parent-window
			      :foreground text-color
			      :background background-color
			      :font       text-font)

   ;; Create menu window
   :window    (CREATE-WINDOW
	       :parent            parent-window
	       :class             :input-output
	       :x                 0	;temporary value
	       :y                 0	;temporary value
	       :width             16	;temporary value
	       :height            16	;temporary value
	       :border-width 2
	       :border            text-color
	       :background        background-color
	       :save-under        :on
	       :override-redirect :on ;override window mgr when positioning
	       :event-mask        (MAKE-EVENT-MASK :leave-window :exposure))))


(defun menu-set-item-list (menu &rest item-strings)
  ;; Assume the new items will change the menu's width and height
  (setf (menu-geometry-changed-p menu) t)

  ;; Destroy any existing item windows
  (dolist (item (menu-item-alist menu))
    (DESTROY-WINDOW (first item)))

  ;; Add (item-window item-string) elements to item-alist
  (setf (menu-item-alist menu)
	(let (alist)
	  (dolist (item item-strings (nreverse alist))
	    (push (list (CREATE-WINDOW
			 :parent       (menu-window menu)
			 :x            0 ;temporary value
			 :y            0 ;temporary value
			 :width        16 ;temporary value
			 :height       16 ;temporary value
			 :background   (GCONTEXT-BACKGROUND (menu-gcontext menu))
			 :event-mask   (MAKE-EVENT-MASK :enter-window
							:leave-window
							:button-press
							:button-release))
			item)
		  alist)))))
