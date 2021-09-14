## Node.js + Express + Typescript and more ... :crystal_ball:
---

### :dart: Objetivo:

O intuito deste repositório é demonstrar os conhecimentos adquiridos de forma auto-didática na confecção de uma aplicação simples.

A tecnologia utilizada aqui foi escolhida para exemplificar o conhecimento adquirido e deixar registros dos esforços gerados na aprendizagem dos seguintes temas:

- Node.js + Express;
- Typescript;
- Sequelize + MySQL;
- Swagger;
- Containerização com Docker-Compose;
- i18n;
- Middlewares e Autenticação JWT.

### :bust_in_silhouette: Autor

- Arthur Barbero - [LinkedIn](https://www.linkedin.com/in/arthur-barbero/)

### :scroll: Tecnologias empregadas:

* <details open>
  <summary><strong>Node.js:</strong></summary>

    Node.js é uma plataforma open-source que utiliza o ambiente de execução JavaScript, o core do Google Chrome (V8 engine) para ler e executar códigos JavaScript.
    [Clique aqui para ler mais sobre](https://nodejs.dev/learn)

</details>
    
* <details open>
  <summary><strong>Express:</strong></summary>

    Framework web para Node.js, flexível e minimalista para criar APIs ou aplicativos inteiros direcionados para a Web.
    [Clique aqui para ler mais sobre](https://expressjs.com/pt-br/)

</details>

* <details open>
  <summary><strong>Typescript:</strong></summary>

    Permite a escrita de JavaScript com a entrada de uma sintaxe fortemente tipada, trazendo todo o conhecimento de heranças, extensões, interfaces e tudo mais que uma linguagem padrão de POO (Programação Orientada a Objetos) pode oferecer, além da checagem de código, autocompleção de código e muitas outras facilidades para escrever código.
    [Clique aqui para ler mais sobre](https://www.typescriptlang.org/pt/)

</details>

* <details open>
  <summary><strong>Sequelize:</strong></summary>

    Biblioteca ORM (Object Relational Mapping) que permite a conexão a vários tipos de bancos de dados relacionais para Node.js, baseada em "Promises", é uma ferramenta bastante útil para o mapeamento de Entidades gerenciamento de banco de dados em um código assíncrono. 
    [Clique aqui para ler mais sobre](https://sequelize.org/)

</details>

* <details open>
  <summary><strong>:newspaper: Swagger:</strong></summary>

    Swagger é um aglomerado de ferramentas para a documentação, design, compilação, testes e muito mais para APIs no padrão REST. 
    Neste projeto utilizamos apenas a face da padronização de documentação das rotas existentes, quais parâmetros e quais respostas podem ser adquiridas.
    [Clique aqui para ler mais sobre](https://swagger.io/solutions/api-documentation/)

</details>

* <details open>
  <summary><strong>Docker, JWT e i18n:</strong></summary>

    O restante das tecnologias foram apenas desafios pessoais para ver como a criação de um desenvolvimento voltado para a vida real com containers e tradução podem ser realizadas com ferramentas do Node.js e com Docker.

    - JWT foi utilizada a biblioteca [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
    - [i18n](https://www.npmjs.com/package/i18n)
    - :whale: [Docker-Compose](https://docs.docker.com/compose/)

</details>

### Rodando o projeto

#### :whale: Docker:
 1 - Tenha Docker em sua máquina - [Docker](https://docs.docker.com/get-docker/)
 
 2 - Clone o Repositório

 3 - Vá para a raiz da pasta e execute `docker-compose up`

 3.1 - Da primeira vez que rodar, é possível que depois que terminar de baixar e montar as imagens, o container com a persistencia em MySQL-server execute depois do container da aplicação, dando um erro na inicialização da instância. Caso isso aconteça, pare os processos com `Ctrl + C` e apenas execute o comando `docker-compose up` novamente, uma vez com os containers criados, o início dos containers serão realizados mais rapidamente.

 4 - Acesse em `http://{container-ip}/api-doc` para ver a documentação.

#### :computer: Localmente:

Se pretende não utilizar Docker, sigo os passos:

1 - Crie o arquivo `.env` na raiz da pasta, siga o exemplo do arquivo `.env-example` e preencha as informações com seu banco de dados.

2 - Instale as dependencias com `npm install`

3 - Utilize `npm run dev` para iniciar o ambiente de Desenvolvimento com 'hot-reload' provido pelo Nodemon ou utilize `npm run build` que irá compilar os arquivos em JavaScript.

