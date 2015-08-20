var db_url = "https://user:pass@example-url.do-stories.graphstory.com:7473";
// var db_url = 'http://localhost:7474';
var db = require("seraph")(db_url);

exports = module.exports = db;