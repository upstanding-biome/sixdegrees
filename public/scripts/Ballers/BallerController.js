app.controller('BallerController', function($scope, $http){
  //Search and SearchText are separate functions in angular
  //We elected not to write a custom function and use these two over different players.
  $scope.searchText = {};
  $scope.searchText.name = '';
  //This is used for the second basketball player.
  $scope.search = {};
  $scope.search.name = '';

  $scope.callDB = function(name1, name2) {
    var query = 'MATCH (p1:Player { name:"' +
        $scope.searchText.name.toLowerCase() + '" })' + ',(p2:Player{ name:"' +
        $scope.search.name.toLowerCase() + '" }),' +
        ' p = shortestPath((p1)-[*]-(p2)) RETURN EXTRACT(n in nodes(p) | n.name), EXTRACT(n in nodes(p) | n.year), RELATIONSHIPS(p)';
        console.log(query);

    db.queryRaw(cypher, function(err, result) {
      if (err) { throw err; }
      console.log("result",result);
    })


   //  var query = 'MATCH (p1:Player { name:"' +
   //    $scope.searchText.name.toLowerCase() + '" })' + ',(p2:Player{ name:"' +
   //    $scope.search.name.toLowerCase() + '" }),' +
   //    ' p = shortestPath((p1)-[*]-(p2)) RETURN EXTRACT(n in nodes(p) | n.name), EXTRACT(n in nodes(p) | n.year), RELATIONSHIPS(p)';
   //    console.log(query);
   // $http({
   //   method:"POST",
   //   url: "https://neo-55cb99b18376e-364459c455.do-stories.graphstory.com:7473/db/data/cypher",
   //   accepts: "application/json",
   //   datatype:"json",
   //   withCredentials: true,
   //   headers: {
   //      'Access-Control-Allow-Origin' : 'http://six-dribbles.herokuapp.com',
   //      'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
   //      'Content-Type': 'application/json',
   //      'Accept': 'application/json'
   //   },
   //   data: { "query" : query },
   //   success: function(data){},
   //   error:function(jqxhr, textstatus, errorthrown){
   //  }
   // })//end of placelist ajax
   //  .success(function(data) {

   //    console.log(data);
   //    console.log(data.data);
   //    console.log(data.data[0]);
   //    console.log(data.data[0][0]);

// $scope.dataset = '';

//    var players = [];
//    var teams = [];
//    var years = [];

//    for( var i = 0; i < data.data[0][0].length; i++){
//      if(i%2 === 0){
//        players.push(data.data[0][0][i]);
//      } else{
//        teams.push(data.data[0][0][i]);
//      }
//    }

//    for(var i =0 ; i < data.data[0][1].length; i++){
//      if(data.data[0][1][i] !== null){
//        years.push(data.data[0][1][i]);
//      }
//    }

//     var str = '';

//     for( var i = 0; i < teams.length; i++){
//      str += players[i] + ' played in ' + teams[i] + ' in ' + years[i] +' with ';
//      if(i === teams.length- 1){
//        str += players[i+1];
//      }
//     }


//     $scope.dataset = str;
    })
  };
});