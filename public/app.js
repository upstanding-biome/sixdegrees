// app.js
var app = angular.module('six-degrees', ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // route to show our basic form (/form)
        .state('landing', {
            url: '/',
            templateUrl: 'index.html'
        })

        // nested states
        // each of these sections will have their own view
        .state('neo4j', {
            url: '/neo4j',
            templateUrl: 'baller.html'
        })

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/');
})

  // .controller('AppController', function($scope, $filter) {

  //   //This function eliminates case sensitivity.
  //   $scope.case = function(expected, actual){
  //     return angular.equals(expected.toLowerCase(), actual.toLowerCase());
  //   };
  //   //Spelling Check, verified inputs before proceeding to database.
  //   });
  // });
    //Custom Filter not working.
    // $scope.baller2 = $scope.ballers;
    // $scope.baller1 = $scope.ballers;

    // $scope.$watch('search', function(val){
    //   $scope.ballers = $filter('filter')($scope.baller2, val)
    //   $scope.ballers = $filter('case')($scope.ballers, val)
    //   $scope.ballers = $filter('true')($scope.ballers, val)
    // });
    // $scope.$watch('searchText', function(val){
    //   $scope.ballers = $filter('filter')($scope.baller1, val)
    //   $scope.ballers = $filter('case')($scope.ballers, val)
    //   $scope.ballers = $filter('true')($scope.ballers, val)
    // });