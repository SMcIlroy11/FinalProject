var app = angular.module('parkApp');

app.factory('parkFactory', function($http) {

  var parks = [];
  var events =[];
  var news = [];

  return {
    setParks: setParks,
    getParks: getParks,
    setEvents: setEvents,
    getEvents: getEvents,
    setNews: setNews,
    getNews: getNews
  }

  function setParks() {
    var p = $http({
      method: 'GET',
      url:'/parks'
    }).then(function successfullCallBack(response) {

      // console.log(response);
      parks = response.data.data;
      //
      console.log(response.data.data)
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

    console.log(response);
    news = response.data.data;

    console.log(response.data.data)

  });
    return p;
};

function getNews(){
return news;
};


});
