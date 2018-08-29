(ns caixa.events
  (:require [re-frame.core :refer [reg-event-db reg-event-fx reg-fx inject-cofx trim-v after path debug]]
            [day8.re-frame.http-fx] ;; even if we don't use this require its existence will cause the :http-xhrio effect handler to self-register with re-frame
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [ajax.core :refer [json-request-format json-response-format]]
            [clojure.string :as str]
            [cljs-time.coerce :refer [to-long]]
            [reitit.core :as reitit]))
;;dispatchers

(reg-event-fx
  :navigate
  (fn-traced [{:keys [db]} [_ route]]
             (let [new-route (assoc db :route route)]
               (case route
                 :home {:db new-route }
                 :about {:db new-route }
                 :precos {:db new-route 
                          :dispatch [:precos/get-precos]}
                 :precos/novo {:db new-route}
                 {:db new-route}))))

(reg-event-fx
 :set-active-page
 (fn-traced [{:keys [db]} [_ route]]
            (let [new-route (assoc db :active-page route)]
              (case route
                :home    {:db new-route}
                :about   {:db new-route}
                :precos  {:db new-route
                          :dispatch [:precos/get-precos]}
                :precos/novo {:db new-route}
                {:db (assoc db :active-page :home)}))))

(reg-event-db
  :set-docs
  (fn-traced [db [_ docs]]
    (assoc db :docs docs)))

(reg-event-db
 :complete-request         ;; when we complete a request we need to clean up
 (fn-traced [db [_ request-type]] ;; few things so that our ui is nice and tidy
            (assoc db :loading? false)))

(reg-event-fx
 :api-request-error  ;; triggered when we get request-error from the server
 (fn-traced [{:keys [db]} [_ request-type response]]  ;; destructure to obtain request-type and response
            {:db (assoc-in db [:errors request-type] (get-in response [:response :errors]))  ;; save in db so that we can
             :dispatch [:complete-request request-type]}))

(reg-event-fx
 :precos/process-novo-request
 (fn-traced [{:keys [db]} [_ preco response]]
   (let [{:keys [inserted]} response]
     {:print response
      :db (-> db
              (assoc :loading? false)
              (update-in [:errors] dissoc :novo-preco)
              )
      :dispatch [:set-active-page :precos]})))

(reg-event-fx
 :precos/teste
 (fn-traced []))

(reg-fx
 :print
 (fn-traced [value]
   (println (str value))))

(reg-event-fx
 :precos/novo-preco
 (fn-traced [{:keys [db]} [_ preco]]
   {:db (assoc db :loading? true)
    :print preco
    :http-xhrio {:method :post
                 :uri "api/precos/novo"
                 :params preco
                 :format (json-request-format)
                 :response-format (json-response-format {:keywords? true})
                 :on-success [:precos/process-novo-request preco]
                 :on-failure [:api-request-error :novo-preco]}}))

(reg-event-fx
 :process-deleta-request
 (fn-traced [{:keys [db]} [_ response]]
   {:db (assoc db :loading? false)
    :dispatch-n (list [:precos/get-precos])}))

(reg-event-fx
 :precos/deleta-preco
 (fn-traced [{:keys [db]} [_ id-preco]]
   {:db (assoc db :loading? true)
    :http-xhrio {:method :delete
                 :uri (str "api/precos/deleta/" id-preco)
                 :format (json-request-format)
                 :response-format (json-response-format {:keywords? true})
                 :on-success [:process-deleta-request]
                 :on-failure [:api-request-error :deleta-preco]}}))

(reg-event-db
 :get-precos-success
 (fn
   [db [_ response]]
   (-> db
       (assoc :loading? false)
       (assoc :precos (js->clj (:precos response))))))

(reg-event-db
 :bad-response
 (fn-traced [db [_ response]]
   (assoc db :precos (js->clj response))))

(reg-event-fx
 :precos/get-precos
 (fn-traced [{:keys [db]} _]
   {:http-xhrio {:method :get
                 :uri "api/precos/todos"
                 :format (json-request-format)
                 :response-format (json-response-format {:keywords? true})
                 :on-success [:get-precos-success]
                 :on-failure [:api-request-error :get-precos]}
    :db (assoc db :loading? true)}
   ))

(reg-event-db
 :atualizar
 (fn-traced
   [_ _]
   (assoc db :precos "precos atualizados")))

(reg-event-db
 :botao
 (fn-traced [db [_ msg]]
   (assoc-in db :precos msg)))
