var app=angular.module('parkApp');

app.controller('parksReturnCtrl', function($scope, parkFactory){
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

$scope.showVisited= function() {
  $scope.showVisitedPark = true;
};

$scope.hidePopover = function (){
  $scope.showVisitedPark = false;
};


});
