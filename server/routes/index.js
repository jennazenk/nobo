/*jshint node:true, esversion:6*/
'use strict';

var router = require('express').Router();
var db = require('../models');
var Client = db.model('client');
var Majordome = db.model('majordome');
var Orders = db.model('orders');

module.exports = router;

router.use('/checkout', require('./checkout'));

router.use(function(req, res) {
	res.status(404).end();
})
