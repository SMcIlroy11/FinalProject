var app=angular.module('parkApp');

app.controller('parksReturnCtrl', function($scope, parkFactory){
  $scope.newPark= parkFactory.getSpecPark();
  console.log($scope.newPark)
});
