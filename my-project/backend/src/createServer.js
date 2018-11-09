const { GraphQLServer } = require("graphql-yoga");
const Mutations = require("./resolvers/Mutations");
const Queries = require("./resolvers/Queries");
const {PersonResolver, PlanetResolver} = require("./resolvers/QueryResolvers");
// const filmLoader = require("./loaders/filmLoader.ts")

// create the graphql yoga server
function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation: Mutations,
      Query: Queries,
      Person: PersonResolver,
      Planet: PlanetResolver
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req})
  });
}

module.exports = createServer;
