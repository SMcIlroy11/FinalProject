var app = angular.module('parkApp');

app.factory('parkFactory', function($http) {

  var info = [];

  return {
    setInfo: setInfo,
    getInfo: getInfo
  }



  function setInfo() {
    var p = $http({
      method: 'GET',
      url: 'https://developer.nps.gov/api/v0/alerts',
      headers: {
        'authorization': '0B0717D2-1A05-4930-8D18-F9417FB2713D',
        'content-type': 'application/json'
      }
    }).then(function successfullCallBack(response) {

      console.log(response.data)
      info = response.data;

    });
      return p;
  };

function getInfo(){

  return info;
};

});
