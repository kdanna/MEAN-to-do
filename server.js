// 'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app     = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

//main home route for the site
app.use('/', express.static('public'));

//setting the prefix "api" for all api routes
app.use('/api', router);


//API Routes
router.get('/todos', function (req, res){
	res.json({todos: []});
});

//TODO: add POST route to create new extries
//TODO: add PUT route to update entries
//TODO; add Delete route






app.listen(3000, function(){
	console.log ("server is up");

});

