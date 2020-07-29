# telzir-api

Back-end CRUD do projeto Telzir feito em Node.js com Typescript, para manipulação dos preços de ligações entre uma origem e um destino;<br />

Necessário um banco de dados em PostgreSQL. As credenciais para conexão do back-end com o banco são configuradas no arquivo .env;<br />

Ao iniciar a API com a conexão correta com o banco de dados, as tabelas são criadas automaticamente pelas migrações, e populadas com as seeds;<br />

Esse back-end está rodando em produção na URL https://telzir-falemais-backend.herokuapp.com;<br />

Um coleção no Postman pode ser importada com as rotas disponíveis pela API pela URL https://www.postman.com/collections/b844a01c71a06f6ff04d;

## Scripts Disponíveis

### `npm install`

Necessário para instalar todos os pacotes utilizados pelo projeto;<br />

### `npm run dev`

Roda a API em modo de desenvolvimento na rota http://localhost:5000;<br />

### `npm test`

Executa os testes de integração, testando todas as rotas da API, se a conexão com o banco de dados for bem sucedida;<br />

### `npm start`

Roda a API em modo de produção (usada no Heroku);<br />
