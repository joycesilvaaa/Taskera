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

## Notes
- Ensure you have Node.js and Prisma CLI installed on your system.
- The database file `dev.db` will be created in the project directory.

Enjoy using Taskera!
