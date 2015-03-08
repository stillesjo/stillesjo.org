'use strict';


var stillInteractiveApp = angular.module('stillInteractiveApp', [
    'ngRoute', 
    'mgcrea.ngStrap', 
    'ngResource', 
    'stillInteractiveApp.about', 
    'stillInteractiveApp.home', 
    'stillInteractiveApp.shet', 
    'stillInteractiveApp.experiplan',
    'stillInteractiveApp.blog'
]);

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
      $routeProvider
        .otherwise({ redirectTo: '/' })
    }]);
