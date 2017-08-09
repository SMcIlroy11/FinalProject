var app = angular.module('parkApp');


app.controller('mainCtrl', function($scope, parkFactory){

parkFactory.setParks().then(function(){
$scope.newParks=parkFactory.getParks();
});

parkFactory.setNews().then(function(){
$scope.newEvents=parkFactory.getEvents();
});

parkFactory.setEvents().then(function(){
$scope.newNews=parkFactory.getNews();
});

$scope.submitPark=function(park){
  console.log(park.name);
  console.log(park.addresses[0].line1)
  // $('#parkButton')on('click', function(){
    $('.buttonExp').show("slow").append('<h1>' + park.name+ '</h1></p>' + park.addresses[0].line1 +'</p></p>' + park.addresses[0].city + ', ' + park.addresses[0].stateCode + ' ' + park.addresses[0].postalCode +'</p>');
  }
$scope.hidePark=function(){
  $('.buttonExp').hide("slow").text('').removeClass('hidePark');
  $('buttonExp').addClass('hidePark');

}



$('#map').usmap({
    // The click action
    click: function(event, data) {
        $('#clicked-state')
            .text('You clicked: '+data.name)
    }
});




});
