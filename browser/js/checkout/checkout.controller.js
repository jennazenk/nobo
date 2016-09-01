'use strict';

nobo.controller('CheckoutCtrl', function($scope, $state, CheckoutFactory) {

	$scope.sendForm = function(data) {
		CheckoutFactory.sendForm(data);
	}

});