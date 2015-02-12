'use strict';


var stillInteractiveApp = angular.module('stillInteractiveApp', [
    'ngRoute', 'mgcrea.ngStrap'//, 'ui.bootstrap'
]);

stillInteractiveApp.controller('HeaderController',['$scope', '$location', function($scope, $location) {
  $scope.isActive = function(viewLocation) {
    return viewLocation == $location.path();
  };
  $scope.products = [
  {name:'SHET', href:'shet'}
  ];
}]);

stillInteractiveApp.controller('AboutController', ['$scope', function($scope) {
  $scope.social_networks = [
  { url:'https://github.com/stillesjo', img:'github.png' },
  { url:'https://se.linkedin.com/in/stillesjo/en', img:'linkedin.png'},
  { url:'https://twitter.com/stillesjo', img:'twitter.png'}
  ];
}]);


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

