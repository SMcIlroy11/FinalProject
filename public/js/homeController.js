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
        $('#clicked-state')
            .text('You clicked: '+data.name)
            .parent().effect('highlight', {color: '#C7F464'}, 2000);
    }
});

});
