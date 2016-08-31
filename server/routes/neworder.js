'use strict';

var db = require('../models');
var Client = db.model('client');
var Majordome = db.model('majordome');
var Orders = db.model('orders');
var router = require('express').Router();
var Sequelize = require('sequelize');

module.exports = router;

router.get('/', function(req, res, next) {
	console.log('Checking the route is OK ... Should send a 200');
	res.sendStatus(200);
})