// 'use strict';

var express = require('express');
var mongoose = require('mongoose');
var Todo = require('./db/models/todo');
var bodyParser = require('body-parser');
var app     = express();
var router = express.Router();

require('./db/db');
require('./db/seed');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//main home route for the site
app.use('/', express.static('public'));

//setting the prefix "api" for all api routes
app.use('/api', router);


//API Routes (Grabbing info from the database)

//GET 
router.get('/todos', function (req, res){
	Todo.find({}, function(err, todos){
		if(err){
			return console.log(err);
		}
		res.json({todos: todos});
	});
});

//POST
router.post('/todos', function(req, res){
	var todo = req.body;
	console.log(todo);
	Todo.create(todo, function(err, todo){
		if(err){
			return console.log(err);
		}
		res.json({'todo': todo, message: "todo created"});
	});
});

//PUT
router.put('/todos/:id', function(req, res) {
  var id = req.params.id;
  var todo = req.body;
  if (todo && todo._id !== id) {
    return res.status(500).json({ err: "Ids don't match!" });
  }
  Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'todo': todo, message: 'Todo Updated' });
  });
});


//TODO; add Delete route






app.listen(3000, function(){
	console.log ("server is up");

});

