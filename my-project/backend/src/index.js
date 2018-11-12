require('dotenv').config({path: '.env'})
const { formatError } = require('apollo-errors')

const createServer = require('./createServer')

const server = createServer()

// TODO use express middleware

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL
    },
    formatError: formatError
}, details => {
    console.log(`Server is now running on port: http:/localhost:${details.port}`)
})