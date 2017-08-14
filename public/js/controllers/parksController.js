var app=angular.module('parkApp');

app.controller('parksCtrl', function($scope, $timeout, parkFactory){
  parkFactory.setParks().then(function(){
  $scope.newPark=parkFactory.getParks();
});

$scope.submitPark=function(park){
  parkFactory.setSpecPark(park);

}
//pulling all information about searched parks including map and search bar//
$scope.statePark=parkFactory.getParks();
console.log($scope.statePark);

$scope.searchedPark=parkFactory.searchPark();




$scope.submitPark=function(park){
  parkFactory.setSpecPark(park);

}

$scope.filterState=function(state){
  parkFactory.setFilterState(state);
}


// Timeout for next and back buttons
angular.module('parkApp').filter('pagination', function () {
     return function (input, start) {
         start = +start;
         return input.slice(start);
     };
 });
var arr = $scope.statePark;
$scope.backbtn = true;
$scope.nextbtn = true;
$timeout(function(){

    console.log(arr);

    var start = 0;
    var end = 3;
//dims buttons if you are at the beginning or the end of the array//
    function checkPos() {
        if(start == 0 && end >= arr.length) {
            $scope.backbtn = true;
            $scope.nextbtn = true;
        } else if(start == 0) {
          $scope.backbtn = true;
          $scope.nextbtn = false;
        } else if (end >= arr.length) {
            $scope.nextbtn = true;
        } else {
            $scope.backbtn = false;
            $scope.nextbtn = false;
        }
    }
    checkPos();

    $scope.pArr = arr.slice(start, end);

    $scope.next = function() {
        start += 3;
        end += 3;

        $scope.pArr = arr.slice(start, end);
        checkPos();
    }

    $scope.back = function() {
        start -= 3;
        end -= 3;

        $scope.pArr = arr.slice(start, end);
        checkPos();
    }

}, 5000);


});
