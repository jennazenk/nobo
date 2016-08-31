'use strict'

nobo.config(function ($stateProvider) {
    $stateProvider.state('offerState', {
        url: '/offer',
        templateUrl: '/js/offer/offer.html',
        controller: 'OfferCtrl'
    });
});
