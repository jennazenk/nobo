'use strict';

nobo.controller('OfferCtrl', function($scope, $state) {

    $scope.quantities = [2, 3, 4, 5, 6, 7, 8, 9];

    $scope.offers = {
        "Besoin ponctuel": 32,
        "Pack 10h": 280,
        "Pack 20h": 480
    }

    $scope.checkoutMode = false;

});
