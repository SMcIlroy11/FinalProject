var app=angular.module('parkApp');

app.controller('searchCtrl', function($scope, parkFactory){
    
    
    console.log("search control working")
    
    $scope.searchRes = searched;
    
    
    
//    $scope.searchRes = parkFactory.getSearch();
//    console.log($scope.searchRes)
    
    
})