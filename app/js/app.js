'use strict';


var stillInteractiveApp = angular.module('stillInteractiveApp', [
    'ngRoute', 'mgcrea.ngStrap', 'ngResource'
]);

stillInteractiveApp.controller('AboutController', ['$scope', function($scope) {
  $scope.social_networks = [
  { url:'https://github.com/stillesjo', img:'github.png' },
  { url:'https://se.linkedin.com/in/stillesjo/en', img:'linkedin.png'},
  { url:'https://twitter.com/stillesjo', img:'twitter.png'}
  ];
  $scope.skills= [ "C++", "Java","Python", "Ruby", "HTML/CSS", "Javascript", "Ruby On Rails", "PHP"];
}]);

stillInteractiveApp.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider.
        //when('/shet', {
        //  templateUrl: 'partials/SHET.html',
        //}).
          when('/',{
          templateUrl: 'partials/home.html',
        }).when('/about',{
          templateUrl: 'partials/about.html',
        }).otherwise({
          redirectTo: "/"
        });
    }]);

