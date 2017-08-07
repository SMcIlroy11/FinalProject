var app = angular.module('parkApp');


app.controller('mainCtrl', function($scope, $timeout, parkFactory){

parkFactory.setInfo();
// parkFactory.getInfo();
$timeout(callAtTimeout, 2000);

function callAtTimeout(){
$scope.newInfo=parkFactory.getInfo();
// console.log(newInfo);
}
// $scope.names=newInfo.data[0];

    

});


