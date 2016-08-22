// 'use strict';
angular.module('todoListApp')
.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/indexTemplate.html',
        controller: 'todoCtrl'
      })
      .when('/about_me', {
        templateUrl: 'templates/about_me.html',
        controller: 'todoCtrl'
      });
});


angular.module('todoListApp')
.controller('todoCtrl', function($scope, dataService) {
  $scope.deleteTodo = function(todo, index) {
    $scope.todos.splice(index, 1);
    dataService.deleteTodo(todo);
  };
  
  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo){
      console.log("this is the filteredTodos var:"+filteredTodos);
      if(todo.edited) {
        return todo;
      }
    });
  dataService.saveTodos(filteredTodos)
  .finally($scope.resetTodoState());
    };

    $scope.resetTodoState = function() {
        $scope.todos.forEach(function(todo) {
           todo.edited = false;
        });
    };
  });