const {GraphQLServer} = require('graphql-yoga')
const Mutations = require('./resolvers/Mutations')
const Queries = require('./resolvers/Queries')

// create the graphql yoga server
function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation: Mutations,
            Query: Queries
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({ ...req })
    })
}

module.exports = createServer