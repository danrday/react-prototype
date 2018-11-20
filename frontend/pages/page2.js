import React, { Component } from 'react'
import Link from 'next/link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_PERSON_QUERY = gql`
    query GET_PERSON_QUERY($id: Int!) {
        getPerson(id: $id) {
            name
        }
    }
`

class PageTwo extends Component {
    render() {
        // throw Error("Test error!")
        return (
            <div>
                <div>Page 2</div>
                <div>Hello!</div>
                <Query query={GET_PERSON_QUERY} variables={{ id: 1 }}>
                    {({ data, error, loading }) => {
                        console.log('payload', data)
                        if (loading) return <p>Loading</p>
                        if (error) return <p>Error: {error.message}</p>
                        return <div>Loaded::: {data.getPerson.name}</div>
                    }}
                </Query>
            </div>
        )
    }
}

export default PageTwo
