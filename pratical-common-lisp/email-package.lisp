(defpackage :com.gigamonkeys.email-db
  (:use :common-lisp :com.gigamonkeys.text-db))

(defpackage :com.gigamonkeys.email-db
  (:use :common-lisp :com.gigamonkeys.text-db)
  (:import-from :com.acme.email :parse-email-address))


(defpackage :com.gigamonkeys.email-db
  (:use :common-lisp :com.gigamonkeys.text-db :com-acme-text)
  (:import-from :com.acme.email :parse-email-address)
  (:shadow :build-index)
  (:shadowing-import-from :com.gigamonkeys.text-db :save))



(loop
   for item in (list 'a 'b 'c 'd 'e 'f)
   for i from 1 to 10
   do (format t "~A ~d~%" item i))



(loop
   from, downfrom, or upfrom xxxxx
   to, upto, below, downto, or above xxxxxx
   by HOW_MUCH )

;; looping over collections

(loop
   for VAR in LIST_FORM
   by FUNC)
(loop
   for VAR on LIST_FORM
   by FUNC)

;; loop vector or string

(loop
     for VAR across "string")

;; loop hash or packages
(loop for k being the hash-keys in h using (hash-value v) ...)
(loop for v being the hash-values in h using (hash-key k) ...)
(loop for var being the things in hash-or-package ...)

;; things on hash hash-keys and hash-values
;; things on packages symbols, present-symbols, and external-symbols
;; 


;; para mais controle
(loop for var = initial-value-form [ then step-form ] ...)


(loop repeat 5 
      for x = 0 then y
      for y = 1 then (+ x y)
      collect y)

;; declare variable inside loop
with var [ = value-form ]


(loop for (a b) in '((1 2) (3 4) (5 6))
            do (format t "a: ~a; b: ~a~%" a b))


(loop for cons on list
    do (format t "~a" (car cons))
    when (cdr cons) do (format t ", "))



(loop for (item . rest) on list
    do (format t "~a" item)
    when rest do (format t ", "))


(loop for (a nil) in '((1 2) (3 4) (5 6)) collect a) ==> (1 3 5)




The possible verbs are collect, append, nconc, count, sum, maximize, and minimize


(loop for i in *random*
   counting (evenp i) into evens
   counting (oddp i) into odds
   summing i into total
   maximizing i into max
   minimizing i into min
   finally (return (list min max total evens odds)))

(loop for i from 1 to 10 do (print i))

(block outer
  (loop for i from 0 return 100) ; 100 returned from LOOP
  (print "This will print")
  200) ==> 200

(loop for i from 1 to 10 do (when (evenp i) (print i)))

(loop for i from 1 to 10 when (evenp i) sum i) ==> 30

(loop for key in some-list when (gethash key some-hash) collect it)

(loop for i from 1 to 100
      if (evenp i)
        minimize i into min-even and 
        maximize i into max-even and
        unless (zerop (mod i 4))
          sum i into even-not-fours-total
        end
        and sum i into even-total
      else
        minimize i into min-odd and
        maximize i into max-odd and
        when (zerop (mod i 5)) 
          sum i into fives-total
        end
        and sum i into odd-total
      do (update-analysis min-even
                          max-even
                          min-odd
                          max-odd
                          even-total
                          odd-total
                          fives-total
                          even-not-fours-total))

(loop named outer for list in lists do
     (loop for item in list do
          (if (what-i-am-looking-for-p item)
            (return-from outer item))))
