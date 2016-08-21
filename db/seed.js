
var Todo = require('./models/todo.js');

var todos = [
	'feed the dog',
	'walk the dog',
	'water the garden',
	'meal prep'
];

todos.forEach(function(todo, index){
	Todo.find({'name': todo}, function(err, todos){
		if(!err && !todos.length){
			Todo.create({completed: false, name: todo});
		}
	});
});

