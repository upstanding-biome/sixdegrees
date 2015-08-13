// app.js
var app = angular.module('six-degrees', ["ui.router"])
app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider' , function($stateProvider, $urlRouterProvider, $httpProvider) {
  
  // delete header from client:
  // http://stackoverflow.com/questions/17289195/angularjs-post-data-to-external-rest-api
  // $httpProvider.defaults.useXDomain = true;
  // delete $httpProvider.defaults.headers.common['X-Requested-With'];

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
