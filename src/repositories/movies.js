const { movieDb } = require('../utils/db');

const getMovies = async ({ page }) => {
  const LIMIT = 50

  const data  = await movieDb('movies')
        .from('movies')
        .select('imdbId', 'title', 'genres','releaseDate', 'budget')
        .limit(LIMIT)
        .offset(LIMIT * page);

  return data;
}

const getMovieById = async ({ id }) => {
  const data  = await movieDb('movies')
        .from('movies')
        .select('imdbId', 'title', 'overview','releaseDate', 'budget', 'runtime', 'genres')
        .where({ movieId: id })

  return data;
};

module.exports = {
  getMovies,
  getMovieById
};