# Cashback Boticário - BackEnd e FrontEnd - Grupo Boticário

# 1. Sobre o projeto

- Aplicação construída em React
- Utilização da lib [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken), para realização de autenticação e validação de rotas.
- Utilização do cliente HTTP [Axios](https://github.com/axios/axios).
- Utilização do [json-server](https://github.com/typicode/json-server) para criação de uma API fake, responsável por disponibilizar os dados para o FRONT-END, além de realizar a validação de rotas e autenticação do usuário




# 2. Preparação dos Ambientes




## Pré-requisitos

- Node
- NPM




# 3. Instalação




## Dependências

- Navegue até a pasta raiz backend e use o gerenciador de pacotes NPM para a instalação das dependências (npm install)

- Navegue até a pasta raiz frontend e use o gerenciador de pacotes NPM para a instalação das dependências (npm install)




# 4. Executando o projeto

- Navegue até a pasta raiz backend e use o gerenciador de pacotes NPM para iniciar o BACKEND (npm run dev)

- Navegue até a pasta raiz frontend e use o gerenciador de pacotes NPM para iniciar o FRONTEND (npm run dev)

- Acesse a URL http://localhost:8080/?#/ e informe os dados:
usuário: admin@email.com
senha: admin




# 5. Abordagens aplicadas



## BackEnd

- O arquivo db.json contém a lista de revendedores cadastrados, suas respectivas compras e o percentual de cashback gerado para cada compra

- O arquivo users.json contém a lista de usuários que podem acessar a aplicação

- O arquivo server.js contém toda a configuração necessária para a execução da API FAKE. Aqui também estão as funções que validam as rotas, com a geração e manutenção do token JWT.

## FrontEnd

- O projeto utiliza o Redux para a manutenção dos estados da aplicação
- O projeto utiliza componentes compartilhados entre a aplicação
- O projeto utiliza o Session Storage e o Local Storage para armazenamento de dados cadastrados na aplicação e armazenamento de token, respectivamente.
- O projeto é adaptado para dispositivos móveis (Design responsivo)