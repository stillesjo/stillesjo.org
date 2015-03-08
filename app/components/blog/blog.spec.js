'use strict';

describe("BlogController", function() {

  beforeEach(module('stillInteractiveApp.blog'));

  var controller, $scope;

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();

    controller = $controller('BlogController', {$scope: $scope});

  }));

  describe('$scope.entries', function() {
    it('should be empty', function() {
      expect($scope.banana).toBe(1);
    });
  });

});
