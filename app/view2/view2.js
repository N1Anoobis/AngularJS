'use strict';

angular.module('myApp.view2', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl', ["$scope", '$http', function ($scope, $http) {
    $scope.step = 0
    $scope.score = 0
    $scope.finalResult = ''
    $scope.tasks = [
      // {
      //   question: "Which JavaScript method allows you to filter the elements of an array",
      //   options: ["indexOf()", "map()", "filter()", "reduce()"],
      //   answer: "filter()"
      // },
      // {
      //   question: "Which JavaScript method allows you to check if an element is in an array",
      //   options: ["isNaN()", "includes()", "findIndex()", "isOdd()"],
      //   answer: "includes()"
      // },
      // {
      //   question: "Which method transforms JSON into a JavaScript object?",
      //   options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
      //   answer: "JSON.parse()"
      // },
      // {
      //   question: "Which JavaScript object allows to round to the nearest integer",
      //   options: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
      //   answer: "Math.round()"
      // }
    ];

    $scope.fetchData = function () {
      $http.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
        .then(function (response) {
          // $scope.myWelcome = response.data;
          $scope.transformData(response.data)

        });
    }

    $scope.transformData = function (data) {

      for (const questionObject of data.results) {
        const transformed = {
          question: questionObject.question,
          options: [...questionObject.incorrect_answers, questionObject.correct_answer].sort(),
          answer: questionObject.correct_answer
        }
        $scope.tasks.push(transformed)

      }
      $scope.updateGameStep()
    }

    $scope.isCorrect = function (choise) {
      choise === $scope.tasks[$scope.step].answer && $scope.score++
      $scope.step++
      $scope.updateGameStep()
    }

    $scope.currentTasks = ''
    $scope.updateGameStep = function () {

      $scope.currentTasks = $scope.tasks[$scope.step]
      if ($scope.step === $scope.tasks.length) {
        $scope.finalResult = `Correct answers: ${$scope.score}`
      }
    }
    $scope.gameEngine = function () {
      $scope.fetchData()
    }

    $scope.gameEngine()
  }]);