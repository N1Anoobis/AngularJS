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
      $scope.removeNinja = function (ninja) {
        const removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);
      };

      $scope.addNinja = function () {
        $scope.ninjas.push({
          name: $scope.newNinja.name,
          belt: $scope.newNinja.belt,
          rate: parseInt($scope.newNinja.rate), 
          available: true,
        });
        $scope.newNinja.name = "";
        $scope.newNinja.belt = "";
        $scope.newNinja.rate = "";
      };

      $scope.ninjas = [
        {
          name: "yoshi",
          belt: "green",
          rate: 50,
          available: false,
        },
        {
          name: "bond",
          belt: "blue",
          rate: 20,
          available: true,
        },
        {
          name: "rychu",
          belt: "red",
          rate: 80,
          available: true,
        },
        {
          name: "artur",
          belt: "black",
          rate: 60,
          available: true,
        },
      ];
      $scope.content = {
        color: "orange",
        "background-color": "gray",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "min-height": "95vh",
      };

      $scope.input = {
        margin: "0 auto",
        width: "200px",
      };
      $scope.cross = {
        color: "red",
        display: "inline",
        "padding-left": "15px",
        cursor: "pointer",
      };
    },
  ]);
