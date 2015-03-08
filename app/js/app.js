'use strict';


var stillInteractiveApp = angular.module('stillInteractiveApp', [
    'ngRoute', 
    'mgcrea.ngStrap', 
    'stillInteractiveApp.about', 
    'stillInteractiveApp.home', 
    'stillInteractiveApp.shet', 
    'stillInteractiveApp.experiplan',
    'stillInteractiveApp.footer',
    'stillInteractiveApp.contact',
    'stillInteractiveApp.blog'
]);

stillInteractiveApp.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
        .otherwise({ redirectTo: '/' })
    }]);
