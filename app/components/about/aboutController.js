'use strict';


angular.module('stillInteractiveApp.about', [
    'ngRoute', 'mgcrea.ngStrap', 'ngResource'
    ])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: '/components/about/about.html',
    controller: 'AboutController'
  });
}])

.controller('AboutController', ['$scope', function($scope) {
  $scope.social_networks = [
  { url:'https://github.com/stillesjo', img:'github.png' },
  { url:'https://se.linkedin.com/in/stillesjo/en', img:'linkedin.png'},
  { url:'https://twitter.com/stillesjo', img:'twitter.png'}
  ];
  $scope.skills= [ "C++", "Java","Python", "Ruby", "HTML/CSS", "Javascript", "Ruby On Rails", "PHP"];
}]);
