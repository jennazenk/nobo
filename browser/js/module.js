'use strict';

var nobo = angular.module('nobo', ['ui.router', 'ngMessages']);

nobo.run(function ($rootScope) {
 $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
   console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);
 });
});

nobo.config(function($urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    // when there is an empty route, redirect to /index
    // $urlRouterProvider.when('/', '/');
});
