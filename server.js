// modules =================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');

// configuration ===========================================
	// connect to database here

// config files
// var db = require(DATABASE PATH NAME);

// set our port
var port = process.env.PORT || 3000

// set the static files location
app.use(express.static(_dirname + '/public'));

// routes
require('./app/routes')(app);
app.listen(port);

// shoutout to the user
console.log('Game on on port ', port);

// expose the app
exports = module.exports = app;