'use strict';

angular.module('stillInteractiveApp.experiplan', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/experiplan', {
    templateUrl: "/components/experiplan/experiplan.html",
    controller: "ExperiplanController"
  });
}])

.controller('ExperiplanController', ['$scope', function($scope) {
  //Empty controller
}]);
