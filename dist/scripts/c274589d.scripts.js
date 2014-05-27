"use strict";angular.module("linksAngularApp",["ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("linksAngularApp").controller("GlobalCtrl",["$scope","Link",function(a,b){a.links=b.query(function(){a.shuffledLinks=shuffleArray(a.links.slice(0))})}]),angular.module("linksAngularApp").controller("MainCtrl",["$scope","Link",function(a){a.linkInputKeystroke=function(a){13===a.which&&0===a.target.value.indexOf("http://")&&$("#link-input-details").css("display","block")}}]);var shuffleArray=function(a){for(var b,c,d=a.length;d;)c=Math.floor(Math.random()*d--),b=a[d],a[d]=a[c],a[c]=b;return a};angular.module("linksAngularApp").factory("Link",["$resource",function(a){return a("http://links.robscanlon.com/:linkId.json",{},{query:{method:"GET",params:{linkId:"userlinks"},isArray:!0}})}]),angular.module("linksAngularApp").filter("domain",function(){return function(a){var b,c="",d=/\w+:\/\/([\w|\.]+)/;return b=d.exec(a),null!==b&&(c=b[1]),c}}),angular.module("linksAngularApp").filter("startsWithHttp",function(){return function(a){return a&&0===a.indexOf("http://")}});var app=angular.module("linksAngularApp");app.directive("backgroundFill",function(){return{scope:{links:"="},link:function(a){a.$watch("links",function(b){a.links&&b.forEach(function(a){a.opacity=.5*Math.random()+.3})})},template:'<span ng-repeat="link in links" style="opacity: {{link.opacity}}">{{ link.name }}</span>'}});