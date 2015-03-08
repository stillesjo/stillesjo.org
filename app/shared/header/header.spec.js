'use strict';

describe("HeaderController", function() {
  beforeEach(module('stillInteractiveApp.header'));

  var controller, $scope;

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    controller = $controller('HeaderController', { $scope: $scope});
  }));

  describe("$scope.products", function() {
    it("shouldn't be empty", function (){
      expect($scope.products.length).toBeGreaterThan(0);
    });
    it("should have both href and name", function() {
      for(var index in $scope.products) {
        expect($scope.products[index].name).not.toBeNull();
        expect($scope.products[index].name).not.toBeUndefined();
        expect($scope.products[index].href).not.toBeNull();
        expect($scope.products[index].href).not.toBeUndefined();

      }
    });
  });
});
