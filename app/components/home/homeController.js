'use strict';


angular.module('stillInteractiveApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/components/home/home.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', ['$scope', function($scope) {
  $scope.header = "stillesjo.org";
}]);
