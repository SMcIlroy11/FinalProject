var app=angular.module('parkApp');

app.controller('parksReturnCtrl', function($scope,$timeout, parkFactory){
  $scope.newPark= parkFactory.getSpecPark();


$scope.visitedPark=function(newPark){
  parkFactory.setVisitedPark(newPark);

}

//scope - gives us access to the wantToVisit function from the individual parks page//
$scope.wantToVisit=function(newPark){
  parkFactory.setWantToVisitPark(newPark);

}

$scope.beenHere= function() {
  $scope.beenHereDiv = true;

$timeout(callAtTimeout, 3000);
  function callAtTimeout(){

$scope.beenHereDiv=false;


};
};

$scope.wantVisit= function() {
  $scope.wantVisitDiv = true;

  $timeout(callAtTimeout, 3000);
    function callAtTimeout(){

  $scope.wantVisitDiv=false;


  };
};



});
