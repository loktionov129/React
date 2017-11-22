const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();

mongoose.connect('mongodb://localhost/example');
mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./routes')(app);
app.listen(config.port, () => {
  console.log('We are live on ' + config.port);
});