var app=angular.module('parkApp');

app.controller('parksCtrl', function($scope, parkFactory){
  parkFactory.setParks().then(function(){
  $scope.newPark=parkFactory.getParks();
});

$scope.submitPark=function(park){
  // console.log(park.name);
  // console.log(park.addresses[0].line1)
  parkFactory.setSpecPark(park);
// console.log(park);
}

// parkFactory.searchState().then(function(){
$scope.statePark=parkFactory.getParks();
// console.log($scope.statePark);


$scope.searchedPark=parkFactory.searchPark();
console.log($scope.searchedPark);

$scope.submitPark=function(park){
  // console.log(park.name);
  // console.log(park.addresses[0].line1)
  parkFactory.setSpecPark(park);
// console.log(park);
}

$scope.filterState=function(state){
  // console.log(park.name);
  // console.log(park.addresses[0].line1)
  parkFactory.setFilterState(state);
// console.log(park);
}


});


  // $('#parkButton')on('click', function(){
  //   $('.buttonExp').show("slow").append('<h1>' + park.name+ '</h1></p>' + park.addresses[0].line1 +'</p></p>' + park.addresses[0].city + ', ' + park.addresses[0].stateCode + ' ' + park.addresses[0].postalCode +'</p>');
  // }
// $scope.hidePark=function(){
//   $('.buttonExp').hide("slow").text('').removeClass('hidePark');
//   $('buttonExp').addClass('hidePark');
//
// }
