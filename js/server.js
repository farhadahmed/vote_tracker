'use strict'

var express = require('express') //require is used if you need data from another file

var app = express();

app.use(express.static('public'));
