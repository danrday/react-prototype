const fetch = require("node-fetch")
const DataLoader = require('dataloader');

const filmLoader = () => new DataLoader(films => resolveFilms(films))

const resolveFilms = async films => {
    const promises = films.map(async url => {
        console.log("URL", url)
        const response = await fetch(url)
        return response.json()
    })
    return Promise.all(promises)
}

module.exports = filmLoader