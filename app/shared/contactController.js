'use strict';

angular.module('stillInteractiveApp.contact', [])

.controller("ContactController", ["$scope", function($scope) {
  $scope.open_contact = function() {
    $("#still-collapsed-form-collapse").collapse("show");
  }
}]);
