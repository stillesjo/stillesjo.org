'use strict';

describe("FooterController", function() {
  beforeEach(module('stillInteractiveApp.footer'));

  var controller, $scope;

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    controller = $controller('FooterController', { $scope: $scope});
  }));

  describe('$scope.first $scope.second $scope.result)', function() {
    it("should not be above 10 or less than 0", function() {
      expect($scope.first).toBeLessThan(11);
      expect($scope.first).toBeGreaterThan(0);
      expect($scope.second).toBeLessThan(11);
      expect($scope.second).toBeGreaterThan(0);
    });

    it("should generate new unique numbers on generateValidation", function() {
      var a = $scope.first;
      var b = $scope.second;
      expect($scope.result).toEqual($scope.first+$scope.second);
      $scope.generateValidation();
      expect($scope.first).not.toEqual(a);
      expect($scope.second).not.toEqual(b);
      expect($scope.result).toEqual($scope.first+$scope.second);
    });
  });
});
