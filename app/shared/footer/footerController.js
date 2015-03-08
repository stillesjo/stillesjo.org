'use strict';

angular.module('stillInteractiveApp.footer', [])

.controller("FooterController", ["$scope", function($scope) {

  $scope.close = function() {
    $("#still-collapsed-form-collapse").collapse("hide");
  }

  $scope.first=0;
  $scope.second=0;
  $scope.generateValidation = function() {
    var a = $scope.first;
    var b = $scope.second;
    while (a == $scope.first)
      $scope.first = Math.floor(Math.random()*10 + 1);
    while (b == $scope.second)
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
