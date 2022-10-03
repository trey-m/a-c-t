const ratingRepository = require('../repositories/ratings')

const averageRatingByMovieIdDTO = (data) => {
  return data.reduce((avg, { rating }, _, { length }) => {
    return avg + rating / length;
  }, 0).toFixed(1);
};


const averageRatingByMovieId = async ({ id }) => {
  console.log(`Rating Service (fn: averageRatingByMovieId): `, {params: { id }});
  const ratings = await ratingRepository.getRatingsByMovieId({ id });
  
  return averageRatingByMovieIdDTO(ratings);
};

module.exports = {
  averageRatingByMovieId
};

