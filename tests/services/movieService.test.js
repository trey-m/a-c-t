const movieService = require('../../src/services/movies');
const ratingService = require('../../src/services/ratings');
const movieRepository = require('../../src/repositories/movies');
const { numberToDollars } = require('../../src/utils/currency');

const MOVIE_LIST_STRUCT = {
  imdbId: "1234asdf",
  title: 'Movie Title',
  genres: "[]",
  releaseDate: "1994-07-06",
  budget: 40000000
};

const MOVIE_DETAILS_STRUCT = {
  ...MOVIE_LIST_STRUCT,
  runtime: 90,
  overview: 'An overview'
};

const MOVIE_REPO_FIXTURES = {
  getMovies: [MOVIE_LIST_STRUCT],
  getMovieById: [MOVIE_DETAILS_STRUCT]
};

describe('movieService: (fn: list)', () => {
  test('Should return budget in dollars', async () => {
    jest.spyOn(movieRepository, 'getMovies').mockImplementation(() => MOVIE_REPO_FIXTURES.getMovies)

    const [res] = await movieService.list({page: 0});

    expect(res.budget).toStrictEqual(numberToDollars(MOVIE_REPO_FIXTURES.getMovies[0].budget));
  });
});


describe('movieService: (fn: details)', () => {
  test('Should return empty object if no movie is found', async () => {
    jest.spyOn(movieRepository, 'getMovieById').mockImplementation(() => [])

    const res = await movieService.details({id: 1});

    expect(res).toStrictEqual([]);
  });

  test('Should return budget in dollars', async () => {
    jest.spyOn(movieRepository, 'getMovieById').mockImplementation(() => MOVIE_REPO_FIXTURES.getMovieById)

    const [res] = await movieService.details({id: 1});
    
    expect(res.budget).toStrictEqual(numberToDollars(MOVIE_REPO_FIXTURES.getMovieById[0].budget));
  });

  test('Should return average rating', async () => {
    const AVG_RATING = 4.3
    jest.spyOn(movieRepository, 'getMovieById').mockImplementation(() => MOVIE_REPO_FIXTURES.getMovieById)
    jest.spyOn(ratingService, 'averageRatingByMovieId').mockImplementation(() => AVG_RATING)

    const [res] = await movieService.details({id: 1});
    
    expect(res.averageRating).toStrictEqual(AVG_RATING);
  });
});


