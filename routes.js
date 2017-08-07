var express = require('express');
var route = express.Router();
var pg = require('pg');
var pool = require('./pg-connection-pool');
var request = require('request');
// var Client = require('node-rest-client').Client;
//
// var client = new Client();
//
// var args = {
//     path: 'https://developer.nps.gov/api/v0/alerts?parkCode=yell,yose'
//     headers: {
//       "Autorization": "'0B0717D2-1A05-4930-8D18-F9417FB2713D'"
//       "Accept": "text/json"
//   };

var options = {
  url:'https://developer.nps.gov/api/v0/parks',
  headers: {
    'User-Agent': 'request',
    'Authorization':'0B0717D2-1A05-4930-8D18-F9417FB2713D'
  }
}


request(options);

route.get('/parks', function(req, res, next) {
  request(options, function callback(error, response, body) {
    //code
    console.log(body);
    res.send(body)
  })
});



module.exports = route;
