"use strict";

//========================================================\\
//   Call in express and other node_modules               \\
//========================================================\\

// var db = require('./db.js')
var express = require('express');
var bodyParser = require('body-parser');
var db_url = "https://user:pass@example-url.do-stories.graphstory.com:7473"; // var db_url = 'http://localhost:7474';
var db = require("seraph")(db_url);
var app = express();

//========================================================\\
//   Sets port to environment port or local port          \\
//========================================================\\

var port = process.env.PORT || 7473;
console.log(__dirname);

//========================================================\\
//   connecting the client and server                     \\
//   allows for CORS (cross origin resource sharing)      \\
//========================================================\\

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// for more info, see: http://enable-cors.org/server_expressjs.html

//========================================================\\
//   statically serves files from the client directory    \\
//========================================================\\

app.use(express.static('public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

//========================================================\\
//   ROUTES                                               \\
//========================================================\\

app.get('/', function(req, res) {
  res.location('/public/index.html');
});

app.get('#/player',function(err, result){
    if (err) { console.log(err); }
    if (result) { console.log(result); }
    // db.queryRaw(cypher, function(err, result) {
    //   if (err) { throw err; }
    //   console.log("result",result);
    // })

})

//========================================================\\
//   Calling the server                                   \\
//========================================================\\

app.listen(port, function() {
  var host = server.address().address;
  console.log('Tip off on port', host, port);
});

exports = module.exports = app;

//***

// config files
// var db = require(DATABASE PATH NAME);

// ******************************************************************************************************************************* //
// ****************************************** ATTEMPT TO SOLVE CORS PROBLEM  ***************************************************** //

// Note: This was an attempt to solve our CROS headers problem. We explore different solutions.


// app.all('*', function(req, res){
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     console.log(res);
//     // res.send(
//     //     { posts : ... }
//     // );
// });

// app.all('*', function(req, res,next) {
//     /*Headers*/
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header("Access-Control-Allow-Origin",  "http://six-dribbles.herokuapp.com");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");

//     if ('OPTIONS' == req.method) {
//         res.send(200);
//     }
//     else {
//         next();
//     }
// });
