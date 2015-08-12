app.controller('BallerController', function($scope, $http){
  //Search and SearchText are separate functions in angular
  //We elected not to write a custom function and use these two over different players.
  $scope.searchText = {};
  $scope.searchText.name = '';
  //This is used for the second basketball player.
  $scope.search = {};
  $scope.search.name = '';

  $scope.callDB = function(name1, name2) {
    $http.post('http://localhost:7474/db/data/cypher/',
        '{"query" : "MATCH (n:Player) RETURN n LIMIT 25", "params" : {"id" : ".*' + $scope.searchText + '.*"} }')
    // console.log('http://localhost:7474/db/data/cypher/',
    //   '{"query" : "MATCH (p1:Player ' + '{ name:"' + name1 +
    //              '" }),' + '(p2:Player { name:"' + name2 +
    //              '" }), p = shortestPath((p1)-[*]-(p2)) RETURN' + ' p;" }');
    // $http.post('http://localhost:7474/db/data/cypher/',
    //   '{"query" : "MATCH (p1' + '{ name:"' + name1 +
    //              '" }),' + '(p2{ name:"' + name2 +
    //              '" }), p = shortestPath((p1)-[*]-(p2)) RETURN' + ' p;" ,"params": {} }')
      .success(function(data) {
        // $scope.dataset = data.data;
        console.log("data",data);
        console.log("data.data[0]",data.data[0]);
        console.log("data.data[0][0]",data.data[0][0]);
        console.log("data.data[0][0].data",data.data[0][0].data);
      })
      .error(function() {
        console.log('Failed!');
      });
  };

//   $scope.callDB = function(name1, name2) {
//               function (err, result) {
//                 if (err) { console.log(err); }
//                 if (result) { console.log('Query Working...', result) };
//     //console.log(result.data); // delivers an array of query results
//     //console.log(result.columns); // delivers an array of names of objects getting returned
//                 }

//               );
//       // GET request to build CYPHER query
//       $http({
//         url: '/graph',
//         method: "GET",
//         data: [],
//         params: { name1: $scope.searchText.name.toLowerCase(),
//                   name2: $scope.search.name.toLowerCase() }
//       }).success(function(data, status) {
//           $scope.response = "GET Response: " + JSON.stringify(data.args);
//           $scope.fullResponse = JSON.stringify(data);

// db.cypherQuery( 'MATCH (p1:Player { name:"' + name1 +
//                 '" }),(p2:Player { name:"' + name2 +
//                 '" }), p = shortestPath((p1)-[*]-(p2)) RETURN p;',
//               function (err, result) {
//                 if (err) { console.log(err); }
//                 if (result) { console.log('Query Working...', result) };
//     //console.log(result.data); // delivers an array of query results
//     //console.log(result.columns); // delivers an array of names of objects getting returned
//                 }

//               );
//       });
//   };



 });