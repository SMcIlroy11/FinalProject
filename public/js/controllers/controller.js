var app = angular.module('parkApp');


app.controller('mainCtrl', function($scope, $location, $route, parkFactory){

  parkFactory.setParks().then(function(){
  $scope.newPark=parkFactory.getParks();
});

$scope.visitedPark= parkFactory.getVisitedPark();

$scope.wantToVisitPark= parkFactory.getWantToVisitPark();


//function for the search bar - transferring this information to the service//
$scope.searchInput=function(input){
  parkFactory.searchPark(input).then(function(){
        $location.path('/parks');
        $route.reload();
      });
};


//added routing for the removePark buttons
$scope.deletePark=function (visit) {
  parkFactory.removeWantToVisitPark(visit);
}
$scope.deleteFavPark=function (park) {
  parkFactory.removeVisitedPark(park);
}


$scope.showPopover= function() {
  $scope.popoverIsVisible = true;
};

$scope.hidePopover = function (){
  $scope.popoverIsVisible = false;
};

$scope.deletePopover = function(){
  $scope.popoverIsVisible = false;
};

$scope.showPopover02= function() {
  $scope.popoverIsVisible02 = true;
};

$scope.hidePopover02 = function (){
  $scope.popoverIsVisible02 = false;
};

$scope.deletePopover02 = function(){
  $scope.popoverIsVisible02 = false;
};

});
