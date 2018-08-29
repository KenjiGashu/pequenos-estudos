CREATE TABLE produtos
(id_produto INTEGER PRIMARY KEY AUTO_INCREMENT,
 nome_produto VARCHAR(200),
 descricao VARCHAR(200),
 tipo VARCHAR(200),
 preco INTEGER REFERENCES precos(id_preco));
