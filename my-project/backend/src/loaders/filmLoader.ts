const DataLoader= require('dataloader');


type BatchFilm = (ids: string[]) => Promise<Film[]>

const batchFilms: BatchFilm = async (ids) => {

    const films = await Film.findByIds(ids)

    return []
}

export const filmLoader = () => new DataLoader<string, Film>(batchFilms)