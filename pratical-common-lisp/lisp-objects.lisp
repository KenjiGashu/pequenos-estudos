(defgeneric draw (shape)
  (:documentation "Draw the given shape on the screen."))


(defmethod draw ((shape circle))
  (format t "sou um circle~%"))

(defmethod draw ((shape triangle))
  (format t "sou um triangle ~%"))

(defgeneric withdraw (account amount)
  (:documentation "Withdraw the specified amount from the account.
Signal an error if the current balance is less than amount."))

(defmethod withdraw ((account bank-account) amount)
  (when (< (balance account) amount)
    (error "Account overdrawn."))
  (decf (balance account) amount))

(defmethod withdraw ((account checking-account) amount)
  (let ((overdraft (- amount (balance account))))
    (when (plusp overdraft)
      (withdraw (overdraft-account account) overdraft)
      (incf (balance account) overdraft)))
  (call-next-method))

(defmethod withdraw ((proxy proxy-account) amount)
  (withdraw (proxied-account proxy) amount))


(defmethod withdraw ((account (eql *account-of-bank-president*)) amount)
  (let ((overdraft (- amount (balance account))))
    (when (plusp overdraft)
      (incf (balance account) (embezzle *bank* overdraft)))
  (call-next-method)))


(defmethod withdraw :before ((account checking-account) amount)
  (let ((overdraft (- amount (balance account))))
    (when (plusp overdraft)
      (withdraw (overdraft-account account) overdraft)
      (incf (balance account) overdraft))))

(defgeneric priority (job)
  (:documentation "Return the priority at which the job should be run.")
  (:method-combination +))


(defgeneric priority (job)
  (:documentation "Return the priority at which the job should be run.")
  (:method-combination + :most-specific-last))

(defclass name (direct-superclass-name*)
  (slot-specifier*))

(defclass bank-account ()
  ((quantity :initarg :quantity
	     :initform 10000
	     :reader quantity)
   (name :initarg :name
	 :reader name
	 :writer (setf name))
   (rg :initarg :rg
       :accessor rg)
   (teste :initarg :teste
	  :initform (format t "oi, eu fui chamado"))
   (rank-conta :reader rank-conta)))
(defmethod initialize-instance :after ((account bank-account) &key arg-teste)
  (let ((quantity (slot-value account 'quantity)))
    (when arg-teste (format t "vc usou o arg-teste") (setf (slot-value account 'quantity) (* (slot-value account 'quantity) 2)))
    (setf (slot-value account 'rank-conta)
          (cond
            ((>= quantity 100000) :ouro)
            ((>= quantity 50000) :prata)
            (t :lixo)))))
(defparameter *conta2* (make-instance 'bank-account :quantity 100000 :name "eu sou goku" :rg "1238938" :teste "teste" :arg-teste "um arg"))
(slot-value *conta2* 'quantity)
(defclass checking-account (bank-account) (checking))

(defclass savings-account (bank-account) (savings))
(make-instance 'bank-account)
(make-instance (class-of (make-instance 'bank-account)))
(make-instance (find-class 'bank-account))
(slot-value (make-instance 'bank-account) 'quantity )
(print-object (make-instance 'bank-account) t)
(defparameter *conta*
  (make-instance 'bank-account :quantity 100000 :name "oi, menino" :rg "8474838"))
(setf (slot-value *conta* 'name) "meu nome")
(setf (slot-value *conta* 'quantity) 12)
(slot-value *conta* 'name)


(remove-method #'initialize-instance
  (find-method #'initialize-instance () (list (find-class 'bank-account))))

(defun quantity (account)
  (slot-value account 'balance))

(defgeneric quantity (account))

(defmethod quantity ((account bank-account))
  (slot-value account 'quantity))

(defun (setf name) (name account)
  (setf (slot-value account 'name) name))

(setf (name *conta2*) "kenji")
(remove-method #'name
  (find-method #'name () (list (find-class 'bank-account))))
(defgeneric (setf name) (name account))
(defmethod (setf name) (name (account bank-account))
  (setf (slot-value account 'name) name))
(defgeneric name (account))
(defmethod name (name (account bank-account))
  (slot-value account 'name))
(find-method )


(defmethod um-metodo (valor (account bank-account))
  (with-slots (quantity) account
    quantity))

(defmethod dois-metodo (valor (account bank-account))
  (with-slots (quan quantity) account
    quan))

(defmethod teste-accessor (valor (account bank-account))
  (with-accessors (quan1 quantity) account
    quan1))

(defmethod teste2-accessor (valor (account bank-account))
  (with-accessors (quantity) account
    quantity))

(defclass foo ()
  ((a :initarg :a :initform "A" :accessor a :allocation :instance)
   (b :initarg :b :initform "B" :accessor b)))

(defclass bar (foo)
  ((a :initform (error "Must supply a value for a"))
   (b :initarg :the-b :accessor the-b :allocation :class)))


(defclass money-market-account (checking-account savings-account) ())



(define-condition malformed-log-entry-error (error)
  ((text :initarg :text :reader text)))


(define-condition nome-de-uma-condition (error)
  ((text :initarg :text :reader text)))

(make-condition 'nome-de-uma-condition :text "texto de condition")
(defun teste-condition (valor)
  (when valor (error 'nome-de-uma-condition :text valor)))

(defun chamada-teste-condition (valor)
  (handler-case (teste-condition valor)
    (nome-de-uma-condition (valor) (format t "chamou a condition: ~A" (text valor)))))
(defun teste ()
  (format t "entrou no restart ~A~%" valor))
(defun chamada-teste-condition (valor)
  (restart-case (teste-condition valor)
    (nome-de-uma-condition () (format t "chamou restart: ~A~%" (text valor)))))
(chamada-teste-condition "asdasdasdasd")
(defun parse-log-entry (text)
  (if (well-formed-log-entry-p text)
    (make-instance 'log-entry ...)
    (error 'malformed-log-entry-error :text text)))


(defun log-analyzer ()
  (handler-bind ((malformed-log-entry-error
                  #'(lambda (c)
                      (invoke-restart 'skip-log-entry))))
    (dolist (log (find-all-logs))
      (analyze-log log))))

(defun skip-log-entry (c)
  (invoke-restart 'skip-log-entry))


(defun log-analyzer ()
  (handler-bind ((malformed-log-entry-error #'skip-log-entry))
    (dolist (log (find-all-logs))
      (analyze-log log))))

(macroexpand '(multiple-value-bind (x y) (values 1 2)
  (+ x y)))
(multiple-value-bind (x y) (values 1 2)
  (+ x y))


(find-package 'user)
(find-symbol "defun")
(intern "teste-condition")


(defpackage :com.gigamonkeys.email-db
  (:use :common-lisp))




(if (loop for n in (list 2 4 6 8 11) always (evenp n))
    (print "All numbers even."))
