app.controller('BallerController', function($scope, $http){
  //Search and SearchText are separate functions in angular
  //We elected not to write a custom function and use these two over different players.
  $scope.searchText = {};
  $scope.searchText.name = '';
  //This is used for the second basketball player.
  $scope.search = {};
  $scope.search.name = '';


  $scope.callDB = function() {

      // GET request to build CYPHER query
      $http({
        url: '/graph',
        method: "GET",
        data: [],
        params: { name1: $scope.searchText.name.toLowerCase(),
                  name2: $scope.search.name.toLowerCase() }
      }).success(function(data, status) {
          $scope.response = "GET Response: " + JSON.stringify(data.args);
          $scope.fullResponse = JSON.stringify(data);
      });
  };


 });