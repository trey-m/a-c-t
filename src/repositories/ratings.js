const { ratingDb } = require('../utils/db');

const getRatingsByMovieId = async ({ id }) => {
  const data  = await ratingDb('ratings')
        .from('ratings')
        .select('ratingId', 'userId', 'movieId', 'rating', 'timestamp')
        .where({ movieId: id })

  return data;
};

module.exports = {
  getRatingsByMovieId
};