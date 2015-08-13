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

   $http({
     method:"post",
     url:  'http://app39991019:c1R9PJMtTrQzXW2F4bnq@app39991019.sb05.stations.graphenedb.com:24789/db/data/cypher',
     accepts: "application/json",
     datatype:"json",
     data:{ "query" : query },
     success: function(){},
     error:function(jqxhr, textstatus, errorthrown){ console.log('Failed!', textstatus); }
   })//end of placelist ajax

    .success(function(data) {
$scope.dataset = '';
   var players = [];
   var teams = [];
   var years = [];

   for( var i = 0; i < data.data[0][0].length; i++){
     if(i%2 === 0){
       players.push(data.data[0][0][i]);
     } else{
       teams.push(data.data[0][0][i]);
     }
   }

   for(var i =0 ; i < data.data[0][1].length; i++){
     if(data.data[0][1][i] !== null){
       years.push(data.data[0][1][i]);
     }
   }

    var str = '';

    for( var i = 0; i < teams.length; i++){
     str += players[i] + ' played in ' + teams[i] + ' in ' + years[i] +' with ';
     if(i === teams.length- 1){
       str += players[i+1];
     }
    }


    $scope.dataset = str;
    })
  };
});