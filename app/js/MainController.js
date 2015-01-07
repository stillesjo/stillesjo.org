'use strict';

var MainController = angular.module('MainController', []);

MainController.controller('MainController', ['$scope',
    function($scope) {
      console.log("Angular controller is running...")
    }]);
