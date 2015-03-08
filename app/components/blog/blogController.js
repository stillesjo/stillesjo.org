'use strict'; 

angular.module('stillInteractiveApp.blog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog', {
    templateUrl: '/components/blog/blog.html',
    controller: 'BlogController'
  });
}])

.controller('BlogController', ['$scope', function($scope) {
  //Empty controller
}]);
