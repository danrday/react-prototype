const fetch = require("node-fetch")

const Queries = {

    dogs(parent, args, ctx, info) {
        global.dogs = global.dogs || []
        return global.dogs
    },

    getPerson: async (_, {id}) => {
        const response = await fetch(`https://swapi.co/api/people/${id}/`)
        return response.json()
    }

}



module.exports = Queries;
