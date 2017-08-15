var app=angular.module('parkApp');

app.directive('showPark', function(){

    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'partials/searchPark.html'
    }

});
