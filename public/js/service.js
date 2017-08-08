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
      url:'	/parks'
      // headers: {
      // "Authorization": "0B0717D2-1A05-4930-8D18-F9417FB2713D",
      // "Accept": "text/json"
      //   }
    }).then(function successfullCallBack(response) {

      console.log(response);
      info = response.data.data;

      console.log(response.data.data)
      console.log(response.data.data[0].images[0].url)
    

    });
      return p;
  };

function getInfo(){

  return info;
};


});
