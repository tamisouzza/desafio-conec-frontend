# Desafio Conec - Frontend

Este projeto é o frontend  desenvolvido com React e TypeScript.

---

## Tecnologias Utilizadas

- React  
- TypeScript  
- Styled Components  
- Axios  
- React Router DOM  

---

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (versão 16 ou superior)  
- npm ou yarn  

---

## Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/tamisouzza/desafio-conec-frontend.git

2. Acesse o diretório do projeto:

cd desafio-conec-frontend

3. Instale as dependências:
npm install

4. Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto com as variáveis necessárias, por exemplo:

REACT_APP_API_URL=https://seu-backend-url.com
REACT_APP_GOOGLE_CLIENT_ID=seu-google-client-id

5. Inicie o servidor de desenvolvimento:
npm start

6. Abra o navegador e acesse:

http://localhost:3000

Testes

Para rodar os testes automatizados, use:

npm test

Build para produção

Para gerar uma build otimizada para produção:

npm run build
Os arquivos serão gerados na pasta build/.

Deploy

Para fazer o deploy da aplicação, você pode usar serviços como Vercel, Netlify, Surge, entre outros. Faça o upload da pasta build/ gerada.

Estrutura do Projeto

src/components - Componentes React reutilizáveis

src/pages - Páginas da aplicação

src/context - Contextos para gerenciamento global de estado

src/services - Serviços para comunicação com APIs

public/ - Arquivos estáticos


Fullstack Project

 Objective
Build a fullstack application with authentication and user management, following the proposed specifications.

 Technologies
Backend
NestJS

TypeScript

PostgreSQL

Prisma ORM

JWT (Authentication)

Bcrypt (Password encryption)

Swagger (API documentation)

Jest (Unit tests)

Frontend
React

TypeScript

Axios

Styled-Components

React Router v6

Context API

Vite

Vercel (Deployment)

 Features
JWT authentication

Login and registration

User roles: Admin and User

List, create, update and delete users (CRUD)

Filter by name and status (active/inactive)

User profile page

Responsive layout

Protected routes

Documentation with Swagger

Unit testing

Google login (extra)

Deploy with public links

 How to run
Backend

# Clone the repository
git clone https://github.com/tamisouzza/desafio-conec-backend.git

# Navigate to the folder
cd desafio-conec-backend

# Install dependencies
npm install

# Configure the database
# Create a .env file based on .env.example and update your PostgreSQL connection

# Run migrations
npx prisma migrate dev

# Start the server
npm run start:dev
Frontend

# Clone the repository
git clone https://github.com/tamisouzza/desafio-conec-frontend.git

# Navigate to the folder
cd desafio-conec-frontend

# Install dependencies
npm install

# Create a .env file and set the API URL
REACT_APP_API_URL=https://desafio-conec-backend.onrender.com

# Run the app
npm run dev
 Deploy
Frontend Vercel

Backend Render

 Author
Developed by Tamiris Soares



