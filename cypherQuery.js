//Require the Neo4J module
var neo4j = require('node-neo4j');

//Create a db object. We will using this object to work on the DB.
db = new neo4j('http://localhost:7474');

// console.log(__dirname);
//Run raw cypher with params
// db.cypherQuery(
//   'CREATE (p:Player {name:"Kent"}) RETURN p',
//   // {
//   //   name: 'Ghuffran',
//   //   company: 'Modulus',
//   //   age: ~~(Math.random() * 100) //generate random age
//   // },
//   function (err, result) {
//     if (err) {
//       return console.log(err);
//     }
//     if (result) {
//       console.log('HI')
//     }
//     // console.log(result.data); // delivers an array of query results
//     // console.log(result.columns); // delivers an array of names of objects getting returned
//   }
// );