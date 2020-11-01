const express = require('express');
const mongoose = require('mongoose');
const artists = require('./app/artists');
const albums = require('./app/albums');
const tracks = require('./app/tracks');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.static('public'));

const run = async () => {
  await mongoose.connect('mongodb://localhost/playlist', {useNewUrlParser: true, useUnifiedTopology: true});

  app.use('/artists', artists);
  app.use('/albums', albums );
  app.use('/tracks', tracks );

  console.log('Connected to MongoDB');
  app.listen(port, () => console.log('Server started'));
};

run().catch(console.error);