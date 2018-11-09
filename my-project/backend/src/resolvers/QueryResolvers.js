const fetch = require("node-fetch")

const resolveFilmsWithoutDataLoader = async parent => {
    const promises = parent.films.map(async url => {
        console.log("URL", url)
        const response = await fetch(url)
        return response.json()
    })
    return Promise.all(promises)
}

const batchResolveFilms = async (parent, _, {filmLoader}) => {
    const films = parent.films
    const res = await filmLoader.loadMany(films)
    return res
}

const PersonResolver = {
    homeworld: async parent => {
        const response = await fetch(parent.homeworld)
        return response.json()
    },
    films: batchResolveFilms
}

PlanetResolver = {
    films: batchResolveFilms
}

module.exports = {PersonResolver, PlanetResolver};
