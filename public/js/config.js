var app=angular.module('parkApp', ['ngRoute']);

app.config(function($routeProvider){

$routeProvider
.when('/home',{
controller: 'mainCtrl',
templateUrl: 'partials/home.html'
})
.when('/parks', {
  controller: 'mainCtrl',
  templateUrl: 'partials/parks.html'
})
.when('/profile', {
  controller: 'mainCtrl',
  templateUrl: 'partials/profile.html'
})


});
