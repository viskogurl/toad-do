'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { tryify } = require('./utils/klar');
const kraken = require('kraken-js');
require('dotenv').config();
const Path = require('path');
const snail = require('./utils/schnell');
const compress = require('compression');

const options = {
  onconfig: (config, next) => {
    console.log('configuring...');
    next(null, config);
  }
}

//app.use(compress());

const dbURI = process.env.dbURI;
const port = process.env.PORT || 8080;

// Sorry for using Mongoose. I won't use it again after this project.
mongoose.set("useFindAndModify", false);
/**
 * Database connection function.
 * @param {string} URI - Mongo Atlas URI string.
 * @param {number} PORT - Port number.
 */
const dbConnect = async (URI, PORT) => {
  const [data, error] = await tryify(mongoose.connect(URI, { poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true }))
  if (data) { app.listen(PORT, () => console.log(`Server running on port ${PORT}...`)) }
  if (error) { console.log(error) };
} 

dbConnect(dbURI, port);

app.use(kraken(options));

app.get('/', (req, res) => {
  res.status(200).sendFile(Path.join(__dirname, '/views/home.html'));
});

app.get('/stats', (req, res) => {
  res.status(200).sendFile(Path.join(__dirname, '/views/stats.html'));
});