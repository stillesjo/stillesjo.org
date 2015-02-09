'use strict';


var stillInteractiveApp = angular.module('stillInteractiveApp', [
    'ngRoute', 'mgcrea.ngStrap', 'ui.bootstrap'
]);

stillInteractiveApp.controller('HeaderController',['$scope', '$location', function($scope, $location) {
  $scope.isActive = function(viewLocation) {
    return viewLocation == $location.path();
  };
}]);


// ($scope, $location) {
//   $scope.isActive() = function(viewLocation) {
//     return viewlocation == $location.path();
//   }; 
// }

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

