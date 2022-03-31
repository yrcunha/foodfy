# Foodfy

> O Foodfy é uma aplicação web completa de gerenciamento de receitas, desenvolvida durante o bootcamp LaunchBase da Rocketseat, usada como critério de avaliação dos conhecimentos obtidos durante o treinamento.

## Instalação e Uso

Para rodar a aplicação, você precisa instalar o [Node](https://nodejs.org/en/) e o banco de dados [Postgres](https://www.postgresql.org/).

Siga os passos abaixo:

```bash
# Instale as dependências
$ npm i

# Crie o banco de dados e as tabelas utilizando os comandos
# inclusos no arquivo "foodfy.sql".

# Conexão com o banco de dados:
# Abra e edite o arquivo "db.js" dentro da pasta "src/config"
# com o seu user e password do Postgres.

# Popule o banco de dados usando o aquivo "seed.js":
$ node src/config/seed.js

# Rode a aplicação
$ npm dev
```

> Selecione um email da tabela users, acesse a tela de login e entre utilizando o mesmo com a senha "rocket" (senha padrão).
