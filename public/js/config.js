var app=angular.module('parkApp', ['ngRoute']);

app.config(function($routeProvider){

$routeProvider
.when('/home',{
controller: 'homeCtrl',
templateUrl: 'partials/home.html'
})
.when('/parks', {
  controller: 'parksCtrl',
  templateUrl: 'partials/parks.html'
})
.when('/profile', {
  controller: 'mainCtrl',
  templateUrl: 'partials/profile.html'
})


});
