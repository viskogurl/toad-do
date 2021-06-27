'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { tryify } = require('./utils/klar');
const colorChecker = require('./middleware/colorChecker');
const kraken = require('kraken-js');
require('dotenv').config();
const Path = require('path');

const options = {
  onconfig: (config, next) => {
    console.log('configuring...');
    next(null, config);
  }
}

const dbURI = process.env.dbURI;
const port = process.env.PORT || 3000;

// Sorry for using Mongoose. I like how easy it is to create a schema.
// I'm working on a generator which will convert my mongoose schema into
// a JSON schema so I won't use Mongoose again after this project.
mongoose.set("useFindAndModify", false);
const dbConnect = async (URI, PORT) => {
  const [data, error] = await tryify(mongoose.connect(URI, { poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true }))
  if (data) { app.listen(PORT, () => console.log(`Server running on port ${PORT}...`)) }
  if (error) { console.log(error) }
} 

dbConnect(dbURI, port);

app.use(kraken(options));

app.get('/', (req, res) => {
  res.status(200).sendFile(Path.join(__dirname, '/views/home.html'));
});