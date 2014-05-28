
'use strict';

angular.module('linksAngularApp')
.factory('Link', ['$resource', function ($resource) {
    return $resource('http://links.robscanlon.com/userlinks', {}, {
        query: {action: 'GET', url: 'http://links.robscanlon.com/userlinks.json', isArray: true}
    });
}]);
