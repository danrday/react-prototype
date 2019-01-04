import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import { endpoint } from '../config'
import { defaults, resolvers } from './resolvers'
import typeDefs from './typeDefs'

function createClient({ headers }) {
    return new ApolloClient({
        uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
        request: operation => {
            operation.setContext({
                fetchOptions: {
                    credentials: 'include',
                },
                headers,
            })
        },
        clientState: {
            defaults,
            resolvers,
            typeDefs,
        },
    })
}

export default withApollo(createClient)
