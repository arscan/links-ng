'use strict';

angular
.module('linksAngularApp', [
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
