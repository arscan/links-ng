var app = angular.module("linksAngularApp");

/*
app.directive('myCustomer', function() {
        return {
                  template: 'Name: {{customer.name}} Address: {{customer.address}}'
                      };
                        });
                       */

app.directive("backgroundFill", function(){
    return {
        scope: {
           links: "=",
        },
        link: function($scope){
            $scope.$watch("links",function(newValue, oldValue){
                if($scope.links){
                    newValue.forEach(function(link){
                        link.opacity = Math.random() * .5 + .3;
                    });
                }
            });
        },
        template: '<span ng-repeat="link in links" style="opacity: {{link.opacity}}">{{ link.name }}</span>'
    };
});



