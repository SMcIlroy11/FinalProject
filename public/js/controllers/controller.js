var app = angular.module('parkApp');


app.controller('mainCtrl', function($scope, $location, parkFactory){

  parkFactory.setParks().then(function(){
  $scope.newPark=parkFactory.getParks();
});

$scope.favPark= parkFactory.getFavoritePark();
console.log($scope.favPark)

$scope.visitPark= parkFactory.getVisitPark();
console.log($scope.visitPark)


//function for the search bar - transferring this information to the service//
$scope.searchInput=function(input){
  parkFactory.searchPark(input).then(function(){
    console.log(input);
    
        $location.path('/parks');
      });
};


//added routing for the removePark buttons
$scope.deletePark=function (visit) {
  parkFactory.removePark(visit);

}
$scope.deleteFavPark=function (park) {
  parkFactory.removeFavPark(park);

}





});
