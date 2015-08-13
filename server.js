// modules =================================================
var express = require('express');
var bodyParser = require('body-parser');

// configuration ===========================================
  // connect to database here
var app = express();

// config files
// var db = require(DATABASE PATH NAME);

// set our port
var port = process.env.PORT || 7473;
console.log(__dirname);
// set the static files location




app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

// app.all('*', function(req, res){
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     console.log(res);
//     // res.send(
//     //     { posts : ... }
//     // );
// });

app.all('*', function(req, res,next) {
    /*Headers*/
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin",  "http://six-dribbles.herokuapp.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
});

// app.use(express.static(__dirname + '/node_modules'));

// routes
app.listen(port);

// shoutout to the user
console.log('Tip off on port', port);

// expose the app
exports = module.exports = app;