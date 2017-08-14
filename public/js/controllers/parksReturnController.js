var app=angular.module('parkApp');

app.controller('parksReturnCtrl', function($scope,$timeout, parkFactory){
  $scope.newPark= parkFactory.getSpecPark();
  console.log($scope.newPark)


$scope.favoritePark=function(newPark){
  parkFactory.setFavoritePark(newPark);
  // console.log(newPark)
}


$scope.toVisitPark=function(newPark){
  parkFactory.setVisitPark(newPark);
  // console.log(newPark)
}

$scope.showVisited1= function() {
  $scope.showVisitedPark1 = true;

$timeout(callAtTimeout, 5000);
  function callAtTimeout(){

$scope.showVisitedPark1=false;


};
};

$scope.showVisited2= function() {
  $scope.showVisitedPark2 = true;

  $timeout(callAtTimeout, 5000);
    function callAtTimeout(){

  $scope.showVisitedPark2=false;


  };
};



});
