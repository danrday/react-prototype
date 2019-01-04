import gql from 'graphql-tag'

import Location from './entities_dummy/Location.json'
import LocationStaffSlot from './entities_dummy/LocationStaffSlot.json'
import LocationType from './entities_dummy/LocationType.json'
import Patient from './entities_dummy/Patient.json'
import Team from './entities_dummy/Team.json'
import User from './entities_dummy/User.json'
import UserRole from './entities_dummy/UserRole.json'
import UserRoleType from './entities_dummy/UserRoleType.json'

export const defaults = {
    todos: [],
    Locations: Location,
    // LocationStaffSlot,
    // LocationType,
    Patients: Patient,
    // Team,
    // User,
    // UserRole,
    // UserRoleType,
}

let nextTodoId = 0

export const resolvers = {
    Patient: {
        TestField: (_, args, { cache }) => {
            const query = gql`
                query GetLocation {
                    Locations(LocationId: "5c2d2083e20ecc2ddc0794cb") @client {
                        LocationNameDisplayName
                    }
                }
            `
            const locations = cache.readQuery({ query })

            console.log('ever firing?', locations)
            return 'hiii'
            // return {
            //     name: 'hi',
            //     __typename: 'Testing',
            // }
        },
    },
    Query: {
        Locations: (stuff, args, ctx, info) => {
            console.log('stuff', stuff)
            console.log('args', args)
            console.log('ctx', ctx.cache.data.data['ROOT_QUERY.Locations.0'])
            console.log('info', info)
            return stuff
        },
    },
    Mutation: {
        addTodo: (_, { text }, { cache }) => {
            const query = gql`
                query GetTodos {
                    todos @client {
                        id
                        text
                        completed
                    }
                }
            `
            const previous = cache.readQuery({ query })
            const newTodo = {
                id: nextTodoId++,
                text,
                completed: false,
                __typename: 'TodoItem',
            }
            const data = {
                todos: previous.todos.concat([newTodo]),
            }
            cache.writeData({ data })
            return newTodo
        },
        toggleTodo: (_, variables, { cache }) => {
            const id = `TodoItem:${variables.id}`
            const fragment = gql`
                fragment completeTodo on TodoItem {
                    completed
                }
            `
            const todo = cache.readFragment({ fragment, id })
            const data = { ...todo, completed: !todo.completed }
            cache.writeData({ id, data })
            return null
        },
    },
}
