app.controller('BallerController', function($scope, $http){

  String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  //Search and SearchText are separate functions in angular
  //We elected not to write a custom function and use these two over different players.
  $scope.searchText = {};
  $scope.searchText.name = '';
  //This is used for the second basketball player.
  $scope.search = {};
  $scope.search.name = '';

  $scope.callDB = function() {
    var query = 'MATCH (p1:Player { name:"' +
      $scope.searchText.name.toLowerCase() + '" })' + ',(p2:Player{ name:"' +
      $scope.search.name.toLowerCase() + '" }),' +
' p = shortestPath((p1)-[*]-(p2)) RETURN EXTRACT(n in nodes(p) | n.name), EXTRACT(n in nodes(p) | n.year), RELATIONSHIPS(p)';
   $http({
     method:"POST",
     url: '/player',
     accepts: "application/json",
     datatype:"json",
     data: { "query" : query },
     error:function(jqxhr, textstatus, errorthrown){console.log("error",query,errorthrown)}
   })
    .then(function(response, data) {
      console.log(response.data.data[0][0]);
      $scope.dataset = '';

      var answer = response.data.data[0][0];

      for (var i = 0; i < answer.length; i++){
        if (i % 2 === 0) { answer[i] = answer[i].split(" ").map(function(a){return a.capitalizeFirstLetter(); }).join(" ") }
        else if (i === 1) { answer[i] = ' played in ' + answer[i] + " with "; }
        else { answer[i] = ' who played in ' + answer[i] + " with "; }
     }
     $scope.dataset = answer.join('');
     
    })
  };
});