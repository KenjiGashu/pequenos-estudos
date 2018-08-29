(ns caixa.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [caixa.core-test]))

(doo-tests 'caixa.core-test)

