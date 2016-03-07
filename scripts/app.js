// [] for dependencies
angular.module("todoListApp", [])
.controller("mainCtrl", function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there. This is the helloWorld controller function in the mainCtrl.");
  };

  $scope.todos = [
    {"name": "Make an app"},
    {"name": "Do yoga"},
    {"name": "Draw someone"},
    {"name": "Watch Phil's new video"},
    {"name": "Feed the cat"},
    {"name": "Clean the kitchen"}
  ]

});