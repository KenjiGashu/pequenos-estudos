(ns caixa.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))

;;subscriptions

(reg-sub
  :route
  (fn [db _]
    (-> db :route)))

(reg-sub
  :page
  :<- [:route]
  (fn [route _]
    (-> route :data :name)))

(reg-sub
 :active-page
 (fn [db _]
   (-> db :active-page)))

(reg-sub
  :docs
  (fn [db _]
    (:docs db)))

(reg-sub
 :errors
 (fn [db _]
   (:errors db)))

(reg-sub
 :precos
 (fn [db _]
   (:precos db)))

(reg-sub
 :teste
 (fn [db _]
   (:teste db)))

(reg-sub
 :loading?
 (fn [db _]
   (:loading? db)))

(reg-sub
 :precos/sent-novo-preco-request
 (fn [db _]
   (:precos/sent-novo-preco-request db)))

