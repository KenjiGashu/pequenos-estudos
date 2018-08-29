(defpackage :com.kenji.spam-filter-system (:use :asdf :cl))
(in-package :com.kenji.spam-filter-system)

(defsystem spam-filter
    :name "kenji-spam-filter"
    :author "Peter Seibel <peter@gigamonkeys.com>"
    :version "1.0"
    :maintainer "Peter Seibel <peter@gigamonkeys.com>"
    :licence "BSD"
    :description "Simple s-expression database."
    :long-description ""
    :depends-on (:cl-ppcre :pathnames)
    :components ((:file "spam-filter-packages")
		 (:file "spam-filter" :depends-on ("spam-filter-packages"))))
