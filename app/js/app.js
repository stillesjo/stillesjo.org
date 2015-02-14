'use strict';


var stillInteractiveApp = angular.module('stillInteractiveApp', [
    'ngRoute', 'mgcrea.ngStrap', 'ngResource'
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
  $scope.skills = [
  { name: "C++", chron: 0, skillLevel: 9, superSkill: true},
  { name: "Java", chron: 1, skillLevel: 10, superSkill: true },
  { name: "HTML/CSS", chron: 2, skillLevel: 6, superSkill: true },
  { name: "Javascript", chron: 3, skillLevel: 6, superSkill: true },
  { name: "PHP", chron: 4, skillLevel: 4, superSkill: false },
  { name: "Python", chron: 5, skillLevel: 5, superSkill: false },
  { name: "Ruby", chron: 6, skillLevel: 8, superSkill: true },
  { name: "Ruby On Rails", chron: 7, skillLevel: 7, superSkill: true }
  ];
  $scope.isSuperSkill = function(skill) {
    return ["C++","Java","Ruby", "Javascript"].indexIf(skill) >= 0;
  }
}]);


stillInteractiveApp.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider.
        when('/shet', {
          templateUrl: 'partials/SHET.html',
        }).when('/',{
          templateUrl: 'partials/home.html',
        }).when('/about',{
          templateUrl: 'partials/about.html',
        }).otherwise({
          redirectTo: "/"
        });
    }]);

