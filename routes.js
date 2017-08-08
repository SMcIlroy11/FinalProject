var express = require('express');
var route = express.Router();
var pg = require('pg');
var pool = require('./pg-connection-pool');
var request = require('request');

var options = {
  url:'https://developer.nps.gov/api/v0/parks?limit=10&fields=images,name,addresses,contacts',
  headers: {
    'User-Agent': 'request',
    'Authorization':'0B0717D2-1A05-4930-8D18-F9417FB2713D'
  }
}


// request(options);

route.get('/parks', function(req, res, next) {
  request(options, function callback(error, response, body) {
    //code
    console.log(body);
    res.send(body)
  })
});



module.exports = route;
