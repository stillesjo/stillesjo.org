'use strict';

angular.module('stillInteractiveApp.footer', [])

.controller("FooterController", ["$scope", function($scope) {

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
