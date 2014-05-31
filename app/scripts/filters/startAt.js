'use strict';

angular
.module('linksAngularApp')
.filter( 'startAt', function () {
    return function ( input, arg ) {

        return input.slice(+arg);
    };
})
