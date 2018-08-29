(defun test-+ ()
  (and
    (= (+ 1 2) 3)
    (= (+ 1 2 3) 6)
    (= (+ -1 -3) -4)))

(defun test-+ ()
  (format t "~:[FAIL~;pass~] ... ~a~%" (= (+ 1 2) 3) '(= (+ 1 2) 3))
  (format t "~:[FAIL~;pass~] ... ~a~%" (= (+ 1 2 3) 6) '(= (+ 1 2 3) 6))
  (format t "~:[FAIL~;pass~] ... ~a~%" (= (+ -1 -3) -4) '(= (+ -1 -3) -4)))

(defun report-result (result form)
  (format t "~:[FAIL~;pass~] ... ~a~%" result form))

(defun test-+ ()
  (report-result (= (+ 1 2) 3) '(= (+ 1 2) 3))
  (report-result (= (+ 1 2 3) 6) '(= (+ 1 2 3) 6))
  (report-result (= (+ -1 -3) -4) '(= (+ -1 -3) -4)))

(defmacro check (form)
  `(report-result ,form ',form))

(defun test-+ ()
  (check (= (+ 1 2) 3))
  (check (= (+ 1 2 3) 6))
  (check (= (+ -1 -3) -4)))

(defmacro check (&body forms)
  `(progn
     ,@(loop for f in forms collect `(report-result ,f ',f))))

(defun test-+ ()
  (check
    (= (+ 1 2) 3)
    (= (+ 1 2 3) 6)
    (= (+ -1 -3) -4)))

(defun report-result (result form)
  (format t "~:[FAIL~;pass~] ... ~a~%" result form)
  result)


(defmacro with-gensyms ((&rest names) &body body)
  `(let ,(loop for n in names collect `(,n (gensym)))
     ,@body))


(defmacro combine-results (&body forms)
  (with-gensyms (result)
    `(let ((,result t))
      ,@(loop for f in forms collect `(unless ,f (setf ,result nil)))
      ,result)))



(defmacro check (&body forms)
  `(combine-results
    ,@(loop for f in forms collect `(report-result ,f ',f))))

(defun test-* ()
  (check
    (= (* 2 2) 4)
    (= (* 3 5) 15)))



(defun test-arithmetic ()
  (combine-results
   (test-+)
   (test-*)))

(defvar *test-name* nil)

(defun report-result (result form)
  (format t "~:[FAIL ... ~a~%~;~] ~a:" result *test-name* form)
  result)
(report-result (= 2 1) '(= 2 2))
(defun test-+ ()
  (let ((*test-name* 'test-+))
    (check
      (= (+ 1 2) 3)
      (= (+ 1 2 3) 6)
      (= (+ -1 -3) -4))))

(defun test-* ()
  (let ((*test-name* 'test-*))
    (check
      (= (* 2 2) 4)
      (= (* 3 5) 15))))

(with-gensyms (a) (format t "a"))

;; final code
(defvar *test-name* nil)

(defmacro deftest (name parameters &body body)
  "Define a test function. Within a test function we can call
   other test functions or use 'check' to run individual test
   cases."
  `(defun ,name ,parameters
    (let ((*test-name* (append *test-name* (list ',name))))
      ,@body)))

(defmacro check (&body forms)
  "Run each expression in 'forms' as a test case."
  `(combine-results
    ,@(loop for f in forms collect `(report-result ,f ',f))))

(defmacro combine-results (&body forms)
  "Combine the results (as booleans) of evaluating 'forms' in order."
  (with-gensyms (result)
    `(let ((,result t))
      ,@(loop for f in forms collect `(unless ,f (setf ,result nil)))
      ,result)))

(defun report-result (result form)
  "Report the results of a single test case. Called by 'check'."
  (format t "~:[FAIL~;pass~] ... ~a: ~a~%" result *test-name* form)
  result)


(vector 1)
(make-array 5 :initial-element 2)
(make-array 5 :fill-pointer 0)
(defparameter *array* (make-array 5 :fill-pointer 0))
(vector-push 'a *array*)
(vector-pop *array*)
(defparameter *array2* (make-array 5 :fill-pointer 0 :adjustable T))
(elt *array* 5)
(setf (elt *array* 4) 2)
(count 2 *array*)
(find 2 *array*)
(find 'a *array*)
(position 'a *array*)
(remove 2 *array*)
(substitute 'b 'a *array*)
(count 'a *array* :test #'eql)
(find 'a *array* :key #'append)
(count-if #'evenp *array*)
(defparameter *hashe* (make-hash-table :test #'equal))
(gethash 'foo *hashe*)
(setf (gethash 'foo *hashe*) 2)
(defun show-value (key hash-table)
  (multiple-value-bind (value present) (gethash key hash-table)
    (if present
      (format nil "Value ~a actually present." value)
      (format nil "Value ~a because key not found." value))))
(multiple-value-bind )
(remhash 'foo *hashe*)
(clrhash *hashe*)
(setf (gethash 'foo *hashe*) 'foo)
(setf (gethash 'que *hashe*) 'que)

(maphash #'(lambda (k v) (format t "~a -> ~a~%" k v)) *hashe*)


(let ((in (open "unit-test-framework.lisp")))
  (format t "~a~%" (read-line in))
  (close in))
(let ((in (open "/some/file/name.txt" :if-does-not-exist nil)))
  (when in
    (format t "~a~%" (read-line in))
    (close in)))
(let ((in (open "unit-test-framework.lisp" :if-does-not-exist nil)))
  (when in
    (loop for line = (read-line in nil)
         while line do (format t "~a~%" line))
    (close in)))

(open "/some/file/name.txt" :direction :output :if-exists :supersede)

(with-open-file (stream "/some/file/name.txt")
  (format t "~a~%" (read-line stream)))


(make-pathname
  :directory '(:absolute "foo" "bar")
  :name "baz"
  :type "txt")

(make-pathname :type "html" :defaults input-file)
