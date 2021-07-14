'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller("myApp", [
  "$scope",
  function ($scope) {
   
    $scope.menu = {
      // "color": "white",
      // "background-color": "gray",
      'background-color': 'red',
      'color': 'orange',
      'padding': '10px'

  }
  },
]);