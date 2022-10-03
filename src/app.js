const express = require('express');
const v1Router = require('./api/v1/index')

const app = express();

app.use('/api/v1', v1Router)

module.exports = app;