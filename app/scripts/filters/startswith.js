'use strict';

angular.module('linksAngularApp')
.filter( 'startsWithHttp', function () {
    return function ( input) {
        return input && input.indexOf("http://") === 0;
    };
});
