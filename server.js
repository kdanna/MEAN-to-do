// 'use strict';

var express = require('express');
var mongoose = require('mongoose');
var Todo = require('./db/models/todo');
var bodyParser = require('body-parser');
var app     = express();
var router = express.Router();

require('./db/db');
require('./db/seed');

app.use(bodyParser.urlencoded({ extended: true }));

//main home route for the site
app.use('/', express.static('public'));

//setting the prefix "api" for all api routes
app.use('/api', router);


//API Routes
router.get('/todos', function (req, res){
	Todo.find({}, function(err, todos){
		if(err){
			return console.log(err);
		}
		res.json({todos: todos});
	});
});

//TODO: add POST route to create new extries
//TODO: add PUT route to update entries
//TODO; add Delete route






app.listen(3000, function(){
	console.log ("server is up");

});

