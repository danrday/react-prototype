import gql from 'graphql-tag'

const typeDefs = gql`
    type Todo {
        id: Int!
        text: String!
        completed: Boolean!
    }

    type Testing {
        name: String!
    }

    type Patient {
        PatientId: String!
        FirstName: String!
        LastName: String!
        LocationId: String!
        FhirResourceUrl: String!
        TestField: String!
    }

    type Location {
        LocationId: String!
        LocationNameDisplayName: String!
    }

    type Mutation {
        addTodo(text: String!): Todo
        toggleTodo(id: Int!): Todo
    }

    type Query {
        visibilityFilter: String
        todos: [Todo]
        Patients: [Patient]
        Locations(LocationId: String): [Location]
    }
`

export default typeDefs
