const { GraphQLServer } = require('graphql-yoga')
const Mutations = require('./resolvers/Mutations')
const Queries = require('./resolvers/Queries')
const { PersonResolver, PlanetResolver } = require('./resolvers/queryResolvers')
const filmLoader = require('./loaders/filmLoader')

// create the graphql yoga server
function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation: Mutations,
            Query: Queries,
            Person: PersonResolver,
            Planet: PlanetResolver,
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        context: req => ({ ...req, filmLoader: filmLoader(), user: 'Dan' }),
    })
}

module.exports = createServer
