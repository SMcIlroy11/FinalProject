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
.when('/specPark', {
  controller: 'parksReturnCtrl',
  templateUrl: 'partials/specPark.html'
})
.otherwise({redirectTo: '/home'});
// .when('/searchPark', {
//   controller: 'parksReturnCtrl',
//   templateUrl: 'partials/searchPark.html'
// })



});
