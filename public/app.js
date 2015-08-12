// app.js
var app = angular.module('six-degrees', ["ui.router"])
app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        // route to show our basic form (/form)
        .state('landing', {
            url: '/',
            templateUrl: 'index.html',
            controller: function ($stateParams) {
              console.log($stateParams);
            }
        })

        // nested states
        // each of these sections will have their own view
        .state('neo4j', {
            url: '/graph',
            templateUrl: 'baller.html',
            controller: function ($stateParams) {
              console.log($stateParams);
            }
        })

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/');
})
