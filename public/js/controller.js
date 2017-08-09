var app = angular.module('parkApp');


app.controller('mainCtrl', function($scope, parkFactory){

parkFactory.setParks().then(function(){
$scope.newParks=parkFactory.getParks();
});

// parkFactory.setNews().then(function(){
// $scope.newEvents=parkFactory.getEvents();
// });
//
// parkFactory.setEvents().then(function(){
// $scope.newNews=parkFactory.getNews();
// });




});
