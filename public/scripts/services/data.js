// 'use strict';


angular.module('todoListApp')
.service('dataService', function($http, $q) {
  this.getTodos = function(cb) {
    $http.get('/api/todos').then(cb);
  };
  
  this.deleteTodo = function(todo) {
    console.log("I deleted the " + todo.name + " todo!");
  };
  
  this.saveTodos = function(todos) {
    console.log("I saved " + todos.length + " todos!");
    var queue = [];
    todos.forEach(function(todo){
    	var request;
    	if(!todo._id){
    		request = $http.post('/api/todos', todo);

    	}else {
    		request = $http.put('/api/todos/' + todo._id, todo).then(function(result){
    			todo = result.data.todo;
    			// return todo;
    		});
    	}
    	queue.push(request);
    });
    //this resolves all promises before returning results
    return $q.all(queue).then(function(results){
    	console.log(todos.length + "many todos were saved");
    });
  };
  
});
