const fetch = require("node-fetch")
const { createError } = require('apollo-errors')
const {baseResolver, isAuthenticatedResolver} = require('./abstractResolvers')
const { UnknownError, UnauthorizedError, ForbiddenError } = require('./errors')


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
