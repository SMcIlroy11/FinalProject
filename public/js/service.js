var app = angular.module('parkApp');

app.factory('parkFactory', function($http) {
//setting up the empty arrays that we are using in the app//

//parks is used for any search that results in multiple parks and is displayed on the parks page - park is used for the individual park//
  var parks = [];
  var events =[];
  var news = [];
  var park = [];
  var visitedPark = [];
  var wantToVisitPark = [];
  var alerts = [];

//returning the functions that will be used in the service - set pushes info into the array and get retrives the info that can be passed to the controller//
  return {
    setParks: setParks,
    getParks: getParks,
    setEvents: setEvents,
    getEvents: getEvents,
    setNews: setNews,
    getNews: getNews,
    setSpecPark: setSpecPark,
    getSpecPark: getSpecPark,
    setVisitedPark: setVisitedPark,
    getVisitedPark: getVisitedPark,
    setWantToVisitPark: setWantToVisitPark,
    getWantToVisitPark: getWantToVisitPark,
    searchState: searchState,
    searchPark: searchPark,
    removeWantToVisitPark: removeWantToVisitPark,
    removeVisitedPark: removeVisitedPark,
    setAlerts: setAlerts,
    getAlerts: getAlerts
  }


//for the alert ticker on the home page//
    function setAlerts(){
        var pr = $http({
            method: 'GET',
            url: '/alerts'
        }).then(function successfullCallBack(responseAlerts){
            alerts = responseAlerts.data.data;
        });
        return pr;
    };

    function getAlerts(){
        return alerts;
    };


//making a request for all the parks//
  function setParks() {
    var p = $http({
      method: 'GET',
      url:'/parks'
    }).then(function successfullCallBack(response) {

      parks = response.data.data;

    });
      return p;
  };
//returning all the park searches because it is returning the parks in the array//
function getParks(){
  console.log(parks);
  return parks;
};

//making a request to the server for the Events//
function setEvents() {
  var p = $http({
    method: 'GET',
    url:'/home'
  }).then(function successfullCallBack(response) {

    events = response.data.data;

  });
    return p;
};

//returning events from the array//
function getEvents(){
return events;
};


//making a request to the server for the news//
function setNews() {
  var p = $http({
    method: 'GET',
    url:'/profile'
  }).then(function successfullCallBack(response) {

    news = response.data.data;

  });
    return p;
};

//returning news from the array//
function getNews(){
return news;
};


//making a request for the specific park//
function setSpecPark(specPark){
 // console.log(park.name)
  park= specPark;
  return park;
};

//returning specific park//
function getSpecPark(){

  return park;
};

//coming from the individual park page button that says "I've been here" and pushing this information into the empty array called favPark//
function setVisitedPark(newPark){

  visitedPark.push(newPark);

  return visitedPark;
};

//returning information from the visitedPark array//
function getVisitedPark(){
  return visitedPark;
}


function removeVisitedPark(park){
visitedPark.splice(park, 1);
}

//controller is sending information to the service with the parameter newPark//
function setWantToVisitPark(newPark){
  wantToVisitPark.push(newPark);

  return wantToVisitPark;
};


function getWantToVisitPark(){
  return wantToVisitPark;
}

//removing 1 item from the wantToVisitPark array//
function removeWantToVisitPark(visit){
wantToVisitPark.splice(visit, 1);

}
//search state is the map and the dropown function//
function searchState(state){
  var p =
  $http({
    method: 'GET',
    url: '/home/' + state
  }).then(function(response){
    parks = response.data.data;
  });
  return p;
}

//searchPark is the searchbar function//

function searchPark(input){
  var i = input;
  var p =
  $http({
    method: 'GET',
    url: '/home/search/' + i
  }).then(function(response){
    parks = response.data.data;
    console.log(parks);
  });
  return p;
}

// function setFilterState(state){
//   var s = state;
//   var p =
//   $http({
//     method: 'GET',
//     url: '/home/search/' + s
//   }).then(function(response){
//     parks = response.data.data;
//     // console.log(parks);
//   });
//   return p;
// }


});
