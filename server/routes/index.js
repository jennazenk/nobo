/*jshint node:true, esversion:6*/
'use strict';

var router = require('express').Router();
var db = require('../models');
var Client = db.model('client');
var Majordome = db.model('majordome');
var Orders = db.model('orders');

module.exports = router;

router.use('/neworder', require('./neworder'));

// router.get('/', function(req, res, next) {
// 	console.log('Got here');
// 	res.sendStatus(200);
// })

router.use(function(req, res) {
	res.status(404).end();
})
