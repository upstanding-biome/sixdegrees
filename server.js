"use strict";

/*=======================================================|
|   Call in express and other node_modules               |
|=======================================================*/

var express = require('express'),
  https = require('https'),
  http = require('http'),
  path = require('path'),
  bodyParser = require('body-parser'),
  app = express(),
  dbRemote = require('./db/db');

/*=======================================================|
|   Sets port to environment port or local port          |
|=======================================================*/

var port = process.env.PORT || 7473;

/*=======================================================|
|   connecting the client and server                     |
|   allows for CORS (cross origin resource sharing)      |
|=======================================================*/

app.use('player', function(req, res, next) {
  console.log("req",req);
  console.log("res",res);
  res.header("access-control-allow-origin", "*");
  res.header("access-control-allow-headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/*=======================================================|
|   statically serves files from the client directory    |
|=======================================================*/

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

/*=======================================================|
|  ROUTES                                                |
|=======================================================*/

app.get('/', function(req, res) {
  res.location('/public/index.html');
});

app.post('/player', function(req, res){
  // console.log(req.body.query);
  dbRemote.queryRaw(req.body.query,{}, function(err, result){
        if (err) throw err;
  res.send(result);
  });
});

/*=======================================================|
|    Test                                                |
|=======================================================*/

// dbRemote.queryRaw("MATCH (n:Player) RETURN n LIMIT 1", {}, function(err, result) {
//     if (err) throw err;
//     console.log("Query is working")
// });

/*=======================================================|
|   Calling the server                                   |
|=======================================================*/

app.listen(port, function() {
  console.log('Tip off on port', port);
});
exports = module.exports = app;