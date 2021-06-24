const express = require('express');
const app = express();
const mongoose = require('mongoose');
const tryify = require('./utils/tryify');
const mundle = require('./middleware/mundle');
const kraken = require('kraken-js');
const routes = require('./routes/routes.js');
require('dotenv').config();

const options = {
  onconfig: (config, next) => {

    next(null, config);
  }
}

const dbURI = process.env.dbURI;
const port = process.env.PORT || 3000;

// Sorry for using Mongoose. I like how easy it is to create a schema.
// I'm working on a generator which will convert my mongoose schema into
// a JSON schema so I won't use Mongoose again after this project.
const dbConnect = async (URI, PORT) => {
  const [data, error] = await tryify(mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true }))
  if (data) { app.listen(PORT, () => console.log(data)) }
  if (error) { console.log(error) }
} 

dbConnect(dbURI, port);

// Middleware Bundle
// P.S. body-parser is deprecated. It's recomended to use 
// the built in express body parser instead :)
app.use(mundle);

// App Routes
app.use(routes);