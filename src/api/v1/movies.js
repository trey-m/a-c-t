const express = require('express');
const movieRouter = express.Router();
const movieService = require('../../services/movies')

movieRouter.get('/', async (req, res) => {
  try {
    const { page } = req.query;

    const movies = await movieService.list({page});
    
    return res.status(200).send(movies);
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      statusCode: 500,
      message: 'Internal Destruction Has Occured',
      error: err
    });
  };
});

movieRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [ movie ] = await movieService.details({id});

    return res.status(200).send(movie);
  } catch (err) {
    console.log(err)
    return res.status(500).send({
      statusCode: 500,
      message: 'Internal Destruction Has Occured',
      error: err
    });
  };
});

module.exports = movieRouter;