/*jshint node:true, esversion:6*/
'use strict';
require('babel-register');

var express = require('express');
var app = express();

var chalk = require('chalk');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

var db = require('./models');
var Client = db.model('client');
var Majordome = db.model('majordome');
var Orders = db.model('orders');

module.exports = app;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../browser')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/api', require('./routes')),

//middleware to catch URLs resembling to any file extension
//it should allow for proper 404 instead of the wildcard '/*'
//check if wildcard is better though
app.use(function(req, res, next) {
	if(path.extname(req.path).length > 0) {
		res.status(404).end();
	} else {
		next(null);
	}
})

var validFrontendRoutes = ['/', '/checkout', '/thankyou'];
var indexPath = path.join(__dirname, '..', 'browser', 'index.html');
validFrontendRoutes.forEach(function(stateRoute) {
	app.get(stateRoute, function(req, res) {
		res.sendFile(indexPath);
	});
});

//error handling endware
app.use(function(err, req, res, next) {
	console.error(err, typeof next);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal server error.');
});
