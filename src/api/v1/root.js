const express = require('express');
const rootRouter = express.Router();

rootRouter.get('/', async (req, res) => {
  res.send({
    message: `Welcome to v1 of the Aetna Code Test API`,
    availableResources: {
      movies: `/movies`
    }
  })
})

module.exports = rootRouter;