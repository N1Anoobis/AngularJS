"use strict";

angular
  .module("myApp.view1", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1", {
        templateUrl: "view1/view1.html",
        controller: "View1Ctrl",
        
      });
    },
  ])

  .controller("View1Ctrl", [
    "$scope",
    function ($scope) {
      $scope.ninjas = [
        {
          name: "yoshi",
          belt: "green",
          rate: 50,
        },
        {
          name: "bond",
          belt: "blue",
          rate: 20,
        },
        {
          name: "rychu",
          belt: "red",
          rate: 80,
        },
        {
          name: "artur",
          belt: "black",
          rate: 60,
        },
      ];
      $scope.content = {
        "color": "orange",
        "background-color": "gray",
        "display": "flex",
        "flex-direction":"column",
        "align-items": "center",
        "min-height": "97vh",
    }

    $scope.input = {
      "margin": "0 auto",
      "width": "200px",

  }
    },
  ]);
