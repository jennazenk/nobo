'use strict'

nobo.config(function ($stateProvider) {
    $stateProvider.state('checkoutState', {
        url: '/checkout',
        templateUrl: '/js/checkout/checkout.html',
        controller: 'CheckoutCtrl'
    });
});
