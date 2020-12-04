# API Pokemons

API criada usando Node, Microsoft SQL Server, Sequelize, Express e Docker, para efetuar CRUD de Pokemons e realizar batalhas entre eles

## Pré-requisitos

Para rodar o projeto, é necessário ter instalado npm e node previamente. Se quiser criar e usar o banco de dados como container, é necessário ter instalado também o Docker e docker-compose

## Criando o container do MS SQL Server para o Docker

Na raíz do projeto, vá até a pasta docker e execute `docker-compose up -d` em seu terminal

## Executando a API

Na raíz do projeto, vá até a pasta server e execute `npm install` para instalar os pacotes. Após o término da instalação, execute `npm start` para executar o servidor em modo de desenvolvimento.

## Gerando documentação do Swagger e visualizando seu conteúdo

Na raíz do projeto, vá até a pasta server e execute `npm run swagger-autogen` para gerar a documentação. 

Para visualizar a documentação, acesse o endereço [http://localhost:3001/doc/](http://localhost:3001/doc/) em seu navegador.

## Rodando casos de testes

Na raíz do projeto, vá até a pasta server e execute `npm test` para executar todos casos de teste 
