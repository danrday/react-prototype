const { createResolver } = require('apollo-resolvers')
const { createError, isInstance } = require('apollo-errors')
const { UnknownError, UnauthorizedError, ForbiddenError } = require('./errors')

// Abstract Resolvers /////////////////////////////////////////////////

const baseResolver = createResolver(
    //incoming requests will pass through this resolver like a no-op
    null,
    /*
      Only mask outgoing errors that aren't already apollo-errors,
      such as ORM errors etc
    */
    (root, args, context, error) => isInstance(error) ? error : new UnknownError({data: {name: error.name}})
)

const isAuthenticatedResolver = baseResolver.createResolver(
    // Extract the user from context (undefined if non-existent)
    (root, args, { user }, info) => {
        if (!user) throw new ForbiddenError();
    }
)

module.exports = {baseResolver, isAuthenticatedResolver}