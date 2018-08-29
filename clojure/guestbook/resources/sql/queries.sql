-- :name cria-preco! :! :n
-- :doc creates a new message
INSERT INTO precos
(valor, datainicio, datafim)
VALUES (:valor, :datainicio, :datafim)

-- :name precos :? :*
-- :doc selects all available messages
SELECT * FROM precos 
