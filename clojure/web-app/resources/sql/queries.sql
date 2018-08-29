-- :name create-user! :! :n
-- :doc creates a new user record
INSERT INTO users
(id, first_name, last_name, email, pass)
VALUES (:id, :first_name, :last_name, :email, :pass)

-- :name update-user! :! :n
-- :doc updates an existing user record
UPDATE users
SET first_name = :first_name, last_name = :last_name, email = :email
WHERE id = :id

-- :name get-user :? :1
-- :doc retrieves a user record given the id
SELECT * FROM users
WHERE id = :id

-- :name delete-user! :! :n
-- :doc deletes a user record given the id
DELETE FROM users
WHERE id = :id

-- :name cria-preco! :! :n
-- :doc cria um novo preco
INSERT INTO precos
(valor, data_inicio, data_fim)
VALUES (:valor, :data_inicio, :data_fim)

-- :name atualiza-preco! :! :n
-- :doc atualiza um preco
UPDATE precos
SET valor = :valor, data_inicio = :data_inicio, data_fim = :data_fim
WHERE id_preco = :id_preco

-- :name select-precos :! :n
-- :doc seleciona todos os precos
SELECT * FROM precos

-- :name deleta-preco! :? :n
-- :doc deleta um preco
DELETE FROM precos
WHERE id_preco = :id_preco


-- :name cria-produto! :! :n
-- :doc cria um novo produto
INSERT INTO produtos
(nome, descricao, tipo, preco)
VALUES (:nome, :descricao, :tipo, :preco)

-- :name atualiza-produto! :! :n
-- :doc atualiza um produto
UPDATE produtos
SET nome = :nome, descricao = :descricao, tipo = :tipo, preco = :preco
WHERE id_produto = :id_produto

-- :name select-produto :! :n
-- :doc seleciona todos os produtos
SELECT * FROM produtos

-- :name deleta-produto! :! :n
-- :doc deleta um produto
DELETE FROM produtos
WHERE id_produto = :id_produto

-- :name cria-pessoa! :! :n
-- :doc cria um novo pessoa
INSERT INTO pessoas
(nome, rg, telefone)
VALUES (:nome, :rg, :telefone)

-- :name atualiza-pessoa! :! :n
-- :doc atualiza um pessoa
UPDATE pessoas
SET nome = :nome, rg = :rg, telefone = :telefone
WHERE id_pessoa = :id_pessoa

-- :name select-pessoa :! :n
-- :doc seleciona todos os pessoas
SELECT * FROM pessoas

-- :name deleta-pessoa! :! :n
-- :doc deleta um pessoa
DELETE FROM pessoas
WHERE id_pessoa = :id_pessoa
