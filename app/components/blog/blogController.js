'use strict'; 

angular.module('stillInteractiveApp.blog', ['ngRoute', 'ngResource'])

.factory("Blog", function($resource) {
  return $resource("https://:url//api/blog/:id", { url: "localhost:3000", id: "@id" },
      {
        'create':   { method: 'POST' },
        'index':    { method: 'GET', isArray: true },
        'show':     { method: 'GET', isArray: false },
        'update':   { method: 'PUT' },
        'destroy':  { method: 'DELETE' }
      }
      );
})

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog', {
    templateUrl: '/components/blog/blog.html',
    controller: 'BlogController'
  });
}])

.controller('BlogController', ['$scope', "Blog", function($scope, Blog) {
  //Empty controller
  $scope.doStuff = function() {
    console.log(Blog.index());
  };
}]);
