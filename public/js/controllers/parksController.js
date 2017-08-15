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


// $scope.searchedPark=parkFactory.searchPark();

$scope.submitPark=function(park){
  parkFactory.setSpecPark(park);

}

$scope.filterState=function(state){
  parkFactory.setFilterState(state);
}


// Timeout for next and back buttons - pagination is a filter
angular.module('parkApp').filter('pagination', function () {

//adding to the start variable: start = +start
// input and start are paramters//
     return function (input, start) {
         start = +start;

         //slice - returning input and
         return input.slice(start);
     };
 });
 //var arr being set to $scope.statePark - results from the getPark()
var arr = $scope.statePark;
//setting the value of backbtn and nextbtn to true - they are set as disabled on the html page - buttons are starting off disabled when you get to the page//
$scope.backbtn = true;
$scope.nextbtn = true;
$timeout(function(){

//how many parks are going to be displayed on the page //
    var start = 0;
    var end = 6;
// //dims buttons if you are at the beginning or the end of the array
// if start number =0 and the end number is bigger than the number of items in the array, then the back btn disabled is still true and the next button is still true//
    function checkPos() {
        if(start == 0 && end >= arr.length) {
            $scope.backbtn = true;
            $scope.nextbtn = true;
        }
//if the start is 0, backbtn is still disabled  and next btn is enabled/

        else if(start == 0) {
          $scope.backbtn = true;
          $scope.nextbtn = false;
        }
//if there are no more items in the array - the nextbtn is disabled (set to true)//
        else if (end >= arr.length) {
            $scope.nextbtn = true;
        }
//otherwise enable all the buttons//
        else {
            $scope.backbtn = false;
            $scope.nextbtn = false;
        }
    }
    //running the function//
    checkPos();

//setting pagArray to the scope and equals are variable array with the slice method - passing through start and end - going to slice the two numbers into it - first number is the index you want to start at and the second number is how many items you want to change//

    $scope.pagArray = arr.slice(start, end);

//then run a function is a variable on the scope and this function is adding three to start and end - this is why//
    $scope.next = function() {
        start += 6;
        end += 6;

        $scope.pagArray = arr.slice(start, end);
        checkPos();
    }
//doing the opposite of above - subtracting six from the start and end//

    $scope.back = function() {
        start -= 6;
        end -= 6;
//checks the position every time//
        $scope.pagArray = arr.slice(start, end);
        checkPos();
    }

}, 1000);


});
