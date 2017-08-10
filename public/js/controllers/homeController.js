var app=angular.module('parkApp');

app.controller('homeCtrl', function($scope, $location, parkFactory){
// $scope.someFunction =
  parkFactory.setParks().then(function(){
  $scope.newPark=parkFactory.getParks();
});

// //
//   });


parkFactory.setNews().then(function(){
$scope.newEvents=parkFactory.getEvents();
});

parkFactory.setEvents().then(function(){
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
  //
  //   function getState(state){
  //   $http ({
  //     method: 'GET',
  //     url:'/home/' + state
  //   }).then...
  // }
    //
    // $scope.allItems=[{news:'wow'},{news:"cool"}];


});
