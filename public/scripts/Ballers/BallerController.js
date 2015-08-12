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
      $scope.searchText.name + '" })' + ',(p2:Player{ name:"' +
      $scope.search.name + '" }),' +
      ' p = shortestPath((p1)-[*]-(p2)) RETURN EXTRACT(n in nodes(p) | n.name), EXTRACT (n in nodes(p) | n.year)';
    console.log('query', query);
   $http({
     method:"post",
     url: "http://localhost:7474/db/data/cypher",
     accepts: "application/json",
     datatype:"json",
     //contenttype:"application/json",
     data:{ "query" : query },
     success: function(){},
     error:function(jqxhr, textstatus, errorthrown){ console.log('Failed!', textstatus); }
   })//end of placelist ajax
    .success(function(data) {
      // $scope.dataset = data.data;
      // console.log("data",data);
      // console.log("data.data",data.data);
      // console.log("data.data[0]",data.data[0]);
      console.log("data.data[0][0]",data.data[0][0]);
    })
  };
});