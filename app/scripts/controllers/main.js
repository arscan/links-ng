'use strict';

angular.module('linksAngularApp')
.controller('GlobalCtrl', ['$scope', 'Link', function ($scope, Link) {

    $scope.links = Link.query(function(){
        $scope.shuffledLinks = shuffleArray($scope.links.slice(0));
    });

}]);

angular.module('linksAngularApp')
.controller('MainCtrl', ['$scope', 'Link', function ($scope, Link) {

    $scope.linkInputKeystroke = function(ev){
        if(ev.which === 13){
            if(ev.target.value.indexOf("http://") === 0){
                $("#link-input-details").css("display", "block");
            }
        }
    };
}]);


// -> Fisher–Yates shuffle algorithm
var shuffleArray = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
