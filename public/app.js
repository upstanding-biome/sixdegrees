// app.js
var app = angular.module('six-degrees', ["ui.router"])
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
      // route to show our basic form (/form)
    .state('landing', {
      url: '/',
      templateUrl: 'scripts/Ballers/Baller.html',
      controller: 'BallerController'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'about.html',
      controller: function ($stateParams) {
      }
    })

      // each of these sections will have their own view
    .state('neo4j', {
      url: '/graph',
      templateUrl: '/scripts/App/graph.html',
      controller: function ($stateParams) {
      }
    })

    // catch all misroutes
    // send users to the form page
    $urlRouterProvider.otherwise('/');
}])
