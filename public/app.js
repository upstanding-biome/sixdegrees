// app.js
var app = angular.module('six-degrees', ["ui.router"])
app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

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
    .state('player', {
      url: '/player',
      controller: function ($stateParams) {
      }
    })

    // catch all misroutes
    // send users to the form page
    $urlRouterProvider.otherwise('/');
}])
