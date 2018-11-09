const fetch = require("node-fetch")
const DataLoader = require('dataloader');



const resolveFilms = async parent => {
    const promises = parent.films.map(async url => {
        const response = await fetch(url)
        return response.json()
    })
    return Promise.all(promises)
}


const filmLoader = new DataLoader(films => resolveFilmz(films))

const resolveFilmz = async films => {
    const promises = films.map(async url => {
        const response = await fetch(url)
        return response.json()
    })
    return Promise.all(promises)
}

const loadEm = async parent => {
    // console.log('parent', parent)
    let films = parent.films
    let test = await filmLoader.loadMany(films)
    return test
}

const PersonResolver = {
    homeworld: async parent => {
        const response = await fetch(parent.homeworld)
        return response.json()
    },
    films: loadEm
}

PlanetResolver = {
    films: loadEm
}

module.exports = {PersonResolver, PlanetResolver};
