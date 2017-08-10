var app=angular.module('parkApp');

app.controller('homeCtrl', function($scope, parkFactory){

parkFactory.setNews().then(function(){
$scope.newEvents=parkFactory.getEvents();
});

parkFactory.setEvents().then(function(){
$scope.newNews=parkFactory.getNews();
});


$('#map').usmap({
    // The click action
    click: function(event, data) {
      parkFactory.searchState(data.name)
        $('#clicked-state')
            .text('You clicked: '+ data.name)
            
    }
});
  //
  //   function getState(state){
  //   $http ({
  //     method: 'GET',
  //     url:'/home/' + state
  //   }).then...
  // }

    $scope.allItems=[{news:'wow'},{news:"cool"}];


});
