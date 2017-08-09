var app = angular.module('parkApp');


app.controller('mainCtrl', function($scope, parkFactory){

parkFactory.setParks().then(function(){
$scope.newPark=parkFactory.getParks();
});


$scope.favPark= parkFactory.getFavoritePark();
console.log($scope.favPark)

$scope.visitPark= parkFactory.getVisitPark();
console.log($scope.visitPark)

// parkFactory.setNews().then(function(){
// $scope.newEvents=parkFactory.getEvents();
// });
//
// parkFactory.setEvents().then(function(){
// $scope.newNews=parkFactory.getNews();
// });




});
