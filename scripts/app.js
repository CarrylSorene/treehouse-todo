// [] for dependencies
angular.module("todoListApp", [])
.controller("mainCtrl", function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;
  // $scope.learningNgChange = function() {
  //   console.log("An input changed");
  // };

  $scope.todos = [
    {"name": "Make an app"},
    {"name": "Do yoga"},
    {"name": "Draw someone"},
    {"name": "Watch Phil's new video"},
    {"name": "Feed the cat"},
    {"name": "Clean the kitchen"}
  ]

})
.service("dataService", function() {

  this.helloConsole = function() {
    console.log("This is the hello console service.");
  }

});