const { GraphQLServer } = require("graphql-yoga");
const Mutations = require("./resolvers/Mutations");
const {Queries, PersonResolver} = require("./resolvers/Queries");

// create the graphql yoga server
function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation: Mutations,
      Query: Queries,
      Person: PersonResolver
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req })
  });
}

module.exports = createServer;
