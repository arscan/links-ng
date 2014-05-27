
'use strict';

angular.module('linksAngularApp')
.factory('Link', ['$resource', function ($resource) {
    return $resource('http://links.robscanlon.com/:linkId.json', {}, {
        query: {method: 'GET', params: {linkId:'userlinks'}, isArray: true}
    });
}]);
