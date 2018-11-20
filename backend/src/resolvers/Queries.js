const fetch = require("node-fetch")
const {isAuthenticatedResolver} = require('./abstractResolvers')

const dogs = (parent, args, ctx, info) => {
    global.dogs = global.dogs || []
    return global.dogs
}

const getPerson = isAuthenticatedResolver.createResolver(
    async (_, {id}) => {
        const response = await fetch(`https://swapi.co/api/people/${id}/`)
        return response.json()
    }
)

const Queries = {
    getPerson,
    dogs
}



module.exports = Queries;
