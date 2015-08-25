"use strict";

/*========================================================
   Call in express and other node_modules               
========================================================*/

var express = require('express'),
  https = require('https'),
  http = require('http'),
  path = require('path'),
  bodyParser = require('body-parser'),
  // config = require('./config');
  app = express(),
  dbRemote = require('db/db.js'),
  morgan = require('morgan');

/*========================================================
   Sets port to environment port or local port          
========================================================*/

var port = process.env.PORT || 7473;

/*========================================================
   connecting the client and server                     
   allows for CORS (cross origin resource sharing)      
========================================================*/

app.use('player', function(req, res, next) {
  console.log("req",req);
  console.log("res",res);
  res.header("access-control-allow-origin", "*");
  res.header("access-control-allow-headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// for more info, see: http://enable-cors.org/server_expressjs.html

/*========================================================
   statically serves files from the client directory    
========================================================*/

// app.use(express.static('public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

/*========================================================/
   ROUTES                                               
========================================================*/

app.get('/', function(req, res) {
  res.location('/public/index.html');
});

// app.get('/player', function(req, res) {
//   console.log(res);
//   console.log(req);
//   dbRemote.queryRaw("MATCH (n:Player) RETURN n LIMIT 1", {}, function(err, result) {
//     if (err) throw err;
//     console.log("Query is working inside GET")
//   });
// });

app.post('/player', function(req, res){
  console.log(req.body);
  console.log(res);
});

// app.get('#/player', function(err, data){
// console.log("appGet-data",data);
// });

dbRemote.queryRaw("MATCH (n:Player) RETURN n LIMIT 1", {}, function(err, result) {
    if (err) throw err;
    console.log("Query is working")
});

 // app.get('/api/todos', function(req, res) {

 //        // use mongoose to get all todos in the database
 //        Todo.find(function(err, todos) {

 //            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
 //            if (err)
 //                res.send(err)

 //            res.json(todos); // return all todos in JSON format
 //        });
 //    });

 //    // create todo and send back all todos after creation
 //    app.post('/api/todos', function(req, res) {

 //        // create a todo, information comes from AJAX request from Angular
 //        Todo.create({
 //            text : req.body.text,
 //            done : false
 //        }, function(err, todo) {
 //            if (err)
 //                res.send(err);

 //            // get and return all the todos after you create another
 //            Todo.find(function(err, todos) {
 //                if (err)
 //                    res.send(err)
 //                res.json(todos);
 //            });
 //        });

 //    });

/*========================================================
   Calling the server                                   
========================================================*/

app.listen(port, function() {
  console.log('Tip off on port', port);
});
exports = module.exports = app;