'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/weekdb', function(err) { //cardb
  if (err) {
    console.log('Failed connecting to MongoDB!');
  } else {
    console.log('Successfully connected to MongoDB!');
  }
});