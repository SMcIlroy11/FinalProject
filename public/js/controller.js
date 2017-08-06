var app = angular.module('parkApp');


app.controller('mainCtrl', function($scope, parkFactory){

parkFactory.setInfo();
parkFactory.getInfo();





});
