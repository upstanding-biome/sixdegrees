// modules =================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configuration ===========================================
	// connect to database here

// config files
// var db = require(DATABASE PATH NAME);

// set our port
var port = process.env.PORT || 3000
console.log(__dirname);
// set the static files location
app.use(express.static(__dirname + '/public/'));

// routes
app.listen(port);

// shoutout to the user
console.log('Tip off on port', port);

// expose the app
exports = module.exports = app;