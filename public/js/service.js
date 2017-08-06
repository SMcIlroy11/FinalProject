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
      url:'	https://data.michigan.gov/api/views/p8a4-xe8s/rows.json?accessType=DOWNLOAD'
      // headers: {
      // "Authorization": "0B0717D2-1A05-4930-8D18-F9417FB2713D",
      // "Accept": "text/json"
      //   }
    }).then(function successfullCallBack(response) {

      console.log(response.data.data[0][9]);
      info = response.data ;

      console.log(response.data.data[0])

    });
      return p;
  };

function getInfo(){

  return info;
};

});
