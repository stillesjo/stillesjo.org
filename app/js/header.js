
stillInteractiveApp.controller('HeaderController',['$scope', '$location', function($scope, $location) {
  $scope.isActive = function(viewLocation) {
    return viewLocation == $location.path();
  };
  $scope.products = [
  {name:'SHET', href:'shet'},
  {name:'Experiplan', href:'experiplan'}
  ];
  $scope.hidestuff = function() {
    $("#navbar").collapse("hide");
  }
}]);
