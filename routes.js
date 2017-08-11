var express = require('express');
var route = express.Router();
var pg = require('pg');
var pool = require('./pg-connection-pool');
//added module request - allows us to make National Parks API//
var request = require('request');


var options = {
  url: 'https://developer.nps.gov/api/v0/parks?limit=100&fields=images,name,addresses,contacts,entranceFees,operatingHours',
  headers: {
    'User-Agent': 'request',
    'Authorization': '0B0717D2-1A05-4930-8D18-F9417FB2713D'
  }
}


route.get('/parks', function(req, res, next) {
      request(options, function callback(error, response, body) {
        //code
        // console.log(body);
        res.send(body)
      })
    });


      route.get('/home/:state', function(req, res, next) {
        var state = req.params.state
        var options3 = {
          url: 'https://developer.nps.gov/api/v0/parks?stateCode=' + state + '&limit=100&fields=images,name,addresses,contacts,entranceFees,operatingHours',
          headers: {
            'User-Agent': 'request',
            'Authorization': '0B0717D2-1A05-4930-8D18-F9417FB2713D'
          }
        }
            request(options3, function callback(error, response, body) {
              //code
              // console.log(body);
              res.send(body)
            })
          });

          route.get('/home/search/:i', function(req, res, next) {
            var id = req.params.i;
            var options4 = {
              url: 'https://developer.nps.gov/api/v0/parks?q=' + id + '&limit=200&fields=images,name,addresses,contacts,entranceFees,operatingHours',
              headers: {
                'User-Agent': 'request',
                'Authorization': '0B0717D2-1A05-4930-8D18-F9417FB2713D'
              }
            }
                request(options4, function callback(error, response, body) {
                  //code
                  console.log(body);
                  console.log(response);
                  res.send(body)
                })
              });

  


      //request for events//

            var options1 = {
              url: 'https://developer.nps.gov/api/v0/events?limit=3',
              headers: {
                'User-Agent': 'request',
                'Authorization': '0B0717D2-1A05-4930-8D18-F9417FB2713D'
              }
            }



      route.get('/home', function(req, res, next) {
            request(options1, function callback(error, response, body) {

              // console.log(body);
              res.send(body)
            });

              });

//requrst for news releases//

            var options2 = {
              url: 'https://developer.nps.gov/api/v0/newsreleases?limit=3',
              headers: {
                'User-Agent': 'request',
                'Authorization': '0B0717D2-1A05-4930-8D18-F9417FB2713D'
              }
            }

            route.get('/profile', function(req, res, next) {
              request(options2, function callback(error, response, body) {

                // console.log(body);
                res.send(body)
              })
  });

            module.exports = route;
