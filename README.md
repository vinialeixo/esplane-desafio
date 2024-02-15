# Esplane Desafio Técnico

Este aplicativo permite aos usuários visualizar, adicionar e gerenciar suas receitas favoritas. Ele é construído usando React para o frontend e Node.js com Prisma para o backend


### Pré-requisitos:

- Node.js e npm instalados em sua máquina.
- Uma conta no ElephantSQL para o banco de dados.
- Uma chave de API Spoonacular para a API de receitas.

### Configurando:

1. **Configurando o Backend**:

   - Navegue até o diretório backend:
     ```bash
     cd backend
     ```

   - Instale os pacotes necessários:
     ```bash
     npm install
     ```

   - **Spoonacular API**:
     - Adicione a chave API à variável API_KEY no arquivo .env   

   - **ElephantSQL Setup**:
     - Crie uma nova instância de banco de dados no ElephantSQL.
     - Copie a string de conexão fornecida pelo ElephantSQLL.

   - **Prisma Setup**:
     - Substitua `DATABASE_URL` no arquivo `.env` pela string de conexão do ElephantSQL.
     - Inicialize o Prisma e gere o cliente Prisma:
       ```bash
       npx prisma init
       npx prisma generate
       ```

   - Inicie o servidor back-end:
     ```bash
     npm start
     ```

2. **Configurando o front-end**:

   - Navegue até o diretor de front-end:
     ```bash
     cd frontend
     ```

   - Instale os pacotes necessários:
     ```bash
     npm install
     ```

   - Inicie o servidor de desenvolvimento front-end:
     ```bash
     npm run dev
     ```
