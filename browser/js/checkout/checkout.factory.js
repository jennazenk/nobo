'use strict';

nobo.factory('CheckoutFactory', function($http) {
    var CheckoutFactory = {};

    function resToData(res) {
    	return res.data;
    }

    CheckoutFactory.sendForm = function(data) {
    	return $http.post('/api/checkout', data)
    	.then(resToData)
    }

    return CheckoutFactory;
});
