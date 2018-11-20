const { createError } = require('apollo-errors')

const UnknownError = createError('UnknownError', {
    message: 'An unknown error has occurred.  Please try again later'
})

const UnauthorizedError = createError('UnauthorizedError', {
    message: 'You must login to do that'
})

const ForbiddenError = createError('ForbiddenError', {
    message: 'You are not allowed to do that'
})

module.exports = { UnknownError, UnauthorizedError, ForbiddenError }