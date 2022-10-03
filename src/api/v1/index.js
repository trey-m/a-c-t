const express = require('express');
const rootRouter = require('./root')
const movieRouter = require('./movies')

const router = express.Router();

router.use('/', rootRouter);
router.use('/movies', movieRouter);

module.exports = router;