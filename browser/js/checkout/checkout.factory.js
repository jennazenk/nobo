'use strict';

nobo.factory('CheckoutFactory', function($http) {
    var CheckoutFactory = {};

    function resToData(res) {
    	return res.data;
    }

    CheckoutFactory.sendForm = function() {
    	return $http.post('/api/checkout')
    	.then(resToData)
    }

    return CheckoutFactory;
});
