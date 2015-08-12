//Require the Neo4J module
var neo4j = require('node-neo4j');

//Create a db object. We will using this object to work on the DB.
db = new neo4j('http://localhost:7474/');
//Run raw cypher with params
db.cypherQuery(

  'LOAD CSV FROM "file://' + __dirname + '/MasterDB.csv" AS line MERGE(p:Player {name:line[0]}) MERGE(t:Team {name:line[2], year:line[1]})', function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      db.cypherQuery(
       'LOAD CSV FROM "file://' + __dirname + '/MasterDB.csv" AS line MATC functionH (p:Player), (t:Team) WHERE p.name = line[0] AND t.name = line[2] AND t.year = line[1] CREATE (p)-[r:PLAYS_IN]->(t)', function(err,result){
        if(err){
          console.log('there was an error running the query', err);
        } else if(result){
          console.log('Successfully Created Player and Team connections')
        }
      });
      console.log('Successfully Create Player and Team nodes')

    }
    //console.log(result.data); // delivers an array of query results
    //console.log(result.columns); // delivers an array of names of objects getting returned
  }

);

