var app = angular.module('parkApp');

app.factory('parkFactory', function($http) {

  var parks = [];
  var events =[];
  var news = [];
  var park = [];
  var favPark = [];
  var visitPark = [];



  return {
    setParks: setParks,
    getParks: getParks,
    setEvents: setEvents,
    getEvents: getEvents,
    setNews: setNews,
    getNews: getNews,
    setSpecPark: setSpecPark,
    getSpecPark: getSpecPark,
    setFavoritePark: setFavoritePark,
    getFavoritePark: getFavoritePark,
    setVisitPark: setVisitPark,
    getVisitPark: getVisitPark,
    searchState: searchState,
    searchPark: searchPark
    // getSearchState: getSearchState
  }

  function setParks() {
    var p = $http({
      method: 'GET',
      url:'/parks'
    }).then(function successfullCallBack(response) {

      // console.log(response);
      parks = response.data.data;
      //
      // console.log(response.data.data)
      // console.log(response.data.data[0].images[0].url)


    });
      return p;
  };

function getParks(){
  return parks;
};

function setEvents() {
  var p = $http({
    method: 'GET',
    url:'/home'
  }).then(function successfullCallBack(response) {

    // console.log(response);
    events = response.data.data;
    // console.log(response.data.data)
  });
    return p;
};

function getEvents(){
return events;
};

function setNews() {
  var p = $http({
    method: 'GET',
    url:'/profile'
  }).then(function successfullCallBack(response) {

    // console.log(response);
    news = response.data.data;

    // console.log(response.data.data)

  });
    return p;
};

function getNews(){
return news;
};

function setSpecPark(specPark){
 // console.log(park.name)
  park= specPark;
  return park;
};


function getSpecPark(){
  // console.log(park)
  return park;
};

function setFavoritePark(newPark){

  favPark.push(newPark);
  // console.log(favPark)
  return favPark;
};


function getFavoritePark(){
  // console.log(favPark)
  return favPark;
}


function setVisitPark(newPark){

  visitPark.push(newPark);
  // console.log(newPark)
  return visitPark;
};


function getVisitPark(){
  // console.log(visitPark)
  return visitPark;
}

function searchState(state){
  var p =
  $http({
    method: 'GET',
    url: '/home/' + state
  }).then(function(response){
    parks = response.data.data;
    // console.log(parks);
  });
  return p;
}

function searchPark(input){
  var i = input;
  var p =
  $http({
    method: 'GET',
    url: '/home/search/' + i
  }).then(function(response){
    parks = response.data.data;
    // console.log(parks);
  });
  return p;
}

});
