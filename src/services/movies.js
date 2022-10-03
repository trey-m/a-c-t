const movieRepository = require('../repositories/movies')
const ratingsService = require('../services/ratings');
const { numberToDollars } = require('../utils/currency');

const listDTO = (data = []) => {
  return data.map(movie => {
    const DOLLARS = numberToDollars(movie.budget);
    movie.budget = DOLLARS
    
    return movie;
  });
};

const list = async ({ page = 0 }) => {
  console.log(`Movie Service (fn: list): `, {params: { page }})
  const movies = await movieRepository.getMovies({ page });

  return listDTO(movies);
}

const detailsDTO = (data = [], rating = 0) => {
  return data.map(movie => {
    movie.description = movie.overview;
    delete movie.overview;

    const DOLLARS = numberToDollars(movie.budget);
    movie.budget = DOLLARS;

    movie.averageRating = rating;

    return movie;
  });
};

const details = async ({ id }) => {
  console.log(`Movie Service (fn: details): `, {params: { id }})

  const movie = await movieRepository.getMovieById({ id });

  if (!movie) return {};

  const rating = await ratingsService.averageRatingByMovieId({ id });

  return detailsDTO(movie, rating);
}

module.exports = {
  list,
  details
}