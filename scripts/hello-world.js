//no [] so it looks for existing app
angular.module("todoListApp")
.directive("helloWorld", function() {
  return {
    template: "This is the hello world directive"
  };
});