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

stillInteractiveApp.controller("ContactController", ["$scope", function($scope) {
  $scope.open_contact = function() {
    $("#still-collapsed-form-collapse").collapse("show");
  }
}]);

stillInteractiveApp.controller("FooterController", ["$scope", function($scope) {

  $scope.close = function() {
    $("#still-collapsed-form-collapse").collapse("hide");
  }

  $scope.generateValidation = function() {
    $scope.first = Math.floor(Math.random()*10 + 1);
    $scope.second = Math.floor(Math.random()*10 + 1);
    $scope.result = $scope.first + $scope.second;
  }
  $scope.generateValidation();

  $scope.submit = function() {
    $("#still-collapsed-form-collapse").collapse("hide");
    $("#still-success").collapse("show").delay(5000).hide("slow");
  }
  $scope.index = 0;
  $scope.move_out = function() {
    if ($scope.index <= 0) {
        $scope.index = 1;
      $('#contactButton').animate({
        right: '+=50px'
      }, 200);
    }
  }
  $scope.move_in = function(button) {
    if ($scope.index == 1) {
      $scope.index = 0;
      $('#contactButton').animate({
        right: '-70px'
      }, 200);

    }
  }
}]);

stillInteractiveApp.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider.
        when('/',{
          templateUrl: 'partials/home.html',
        }).when('/about',{
          templateUrl: 'partials/about.html',
        }).when('/shet',{
          templateUrl: 'partials/SHET.html',
        }).when('/experiplan',{
          templateUrl: 'partials/experiplan.html',
        }).otherwise({
          redirectTo: "/"
        });
    }]);



