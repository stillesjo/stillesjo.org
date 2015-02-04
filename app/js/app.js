'use strict';

var stillInteractiveApp = angular.module('stillInteractiveApp', [
    'ngRoute'
]);

stillInteractiveApp.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider.
        when('/shet', {
          templateUrl: 'partials/SHET.html',
        }).when('/',{
          templateUrl: 'partials/index.html',
        }).when('/about',{
          templateUrl: 'partials/about.html',
        }).otherwise({
          redirectTo: "/"
        });
    }]);

function HeaderController($scope, $location) {
  $scope.isActive() = function(viewLocation) {
    return viewlocation == $location.path();
  }; 
}
