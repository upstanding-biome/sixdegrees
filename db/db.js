var db_url = "https://neo-55cb99b18376e-364459c455.do-stories.graphstory.com:7473", 
// var db_url = 'http://localhost:7474';
dbRemote = require("seraph")({server: db_url, endpoint: "/db/data", user: "55cb99b18376e", pass: "akYCVJ6HDu8rxmZqaCrOgPiW30uZzo6f6r9Pbw6E"});

exports = module.exports = dbRemote;