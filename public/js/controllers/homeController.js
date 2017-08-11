var app=angular.module('parkApp');

app.controller('homeCtrl', function($scope, $location, parkFactory){
// $scope.someFunction =
  parkFactory.setParks().then(function(){
  $scope.newPark=parkFactory.getParks();
});

// //
//   });


parkFactory.setEvents().then(function(){
$scope.newEvents=parkFactory.getEvents();
});

parkFactory.setNews().then(function(){
$scope.newNews=parkFactory.getNews();
});


$('#map').usmap({
    // The click action
    click: function(event, data) {
      parkFactory.searchState(data.name).then(function(){
      $location.path('/parks');
      })

    }
});
    
    


});
