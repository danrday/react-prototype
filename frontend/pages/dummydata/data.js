import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_VISIBILITY_FILTER = gql`
    {
        todos @client
    }
`

const DummyData = props => (
    <div>
        <Query query={GET_VISIBILITY_FILTER}>
            {({ data, client }) => <div>{data.todos}</div>}
        </Query>
    </div>
)

export default DummyData
