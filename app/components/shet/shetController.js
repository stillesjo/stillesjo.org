'use strict';

angular.module('stillInteractiveApp.shet', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/shet', {
    templateUrl: '/components/shet/SHET.html',
    controller: 'ShetController'
  });
}])

.controller('ShetController', ['$scope', function($scope) {
  // Empty controller
}]);
