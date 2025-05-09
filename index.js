const { ApolloServer, gql } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Schema GraphQL
const typeDefs = gql`
  type Tarefa {
    id: ID!
    titulo: String!
    descricao: String
    concluida: Boolean!
  }

  type Query {
    listarTarefas: [Tarefa!]!
    buscarTarefa(id: ID!): Tarefa
  }

  type Mutation {
    criarTarefa(titulo: String!, descricao: String): Tarefa!
    atualizarTarefa(id: ID!, titulo: String, descricao: String, concluida: Boolean): Tarefa!
    deletarTarefa(id: ID!): Boolean!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    listarTarefas: () => prisma.tarefa.findMany(),
    buscarTarefa: (_, { id }) => prisma.tarefa.findUnique({ where: { id: Number(id) } })
  },
  Mutation: {
    criarTarefa: (_, args) => prisma.tarefa.create({ data: args }),
    atualizarTarefa: (_, { id, ...data }) => prisma.tarefa.update({
      where: { id: Number(id) },
      data
    }),
    deletarTarefa: async (_, { id }) => {
      await prisma.tarefa.delete({ where: { id: Number(id) } });
      return true;
    }
  }
};

// Start server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Servidor rodando em: ${url}`);
});
