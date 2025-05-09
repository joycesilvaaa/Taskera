# Taskera

## Setup Instructions

Follow these steps to set up and run the Taskera project:

### 1. Install Dependencies
Run the following command to install the required dependencies:
```bash
npx install
```

### 2. Initialize Prisma
Initialize Prisma with the SQLite datasource provider:
```bash
npx prisma init --datasource-provider sqlite
```

### 3. Update `schema.prisma`
Replace the contents of the `schema.prisma` file with the following configuration:
```prisma
generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "sqlite"
    url      = "file:./dev.db"
}

model Tarefa {
    id         Int     @id @default(autoincrement())
    titulo     String
    descricao  String?
    concluida  Boolean @default(false)
}
```

### 4. Run Database Migrations
Apply the database migrations with the following command:
```bash
npx prisma migrate dev --name init
```

### 5. Start the Application
Run the application using:
```bash
node index.js
```

## GraphQL Queries and Mutations

Here are some example GraphQL queries and mutations for managing tasks in Taskera:

### Add a Task
Use the following mutation to create a new task:
```graphql
mutation {
    criarTarefa(titulo: "Estudar GraphQL", descricao: "Testando o CRUD") {
        id
        titulo
        concluida
    }
}
```

### List All Tasks
Use this query to retrieve all tasks:
```graphql
query {
    listarTarefas {
        id
        titulo
        descricao
        concluida
    }
}
```

### Get Task by ID
Use this query to fetch a specific task by its ID:
```graphql
query {
    buscarTarefa(id: 1) {
        id
        titulo
        descricao
        concluida
    }
}
```

### Update a Task
Use this mutation to update a task's status or other fields:
```graphql
mutation {
    atualizarTarefa(id: 1, concluida: true) {
        id
        titulo
        concluida
    }
}
```

### Delete a Task
Use this mutation to delete a task by its ID:
```graphql
mutation {
    deletarTarefa(id: 1)
}
```

These examples demonstrate how to interact with the Taskera GraphQL API for task management.

## Notes
- Ensure you have Node.js and Prisma CLI installed on your system.
- The database file `dev.db` will be created in the project directory.

Enjoy using Taskera!