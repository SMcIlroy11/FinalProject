var app = angular.module('parkApp');

app.controller('homeCtrl', function ($scope, $location, $timeout, parkFactory) {





    parkFactory.setParks().then(function () {
        $scope.newPark = parkFactory.getParks();
    });

    parkFactory.setEvents().then(function () {
        $scope.newEvents = parkFactory.getEvents();
    });

    parkFactory.setNews().then(function () {
        $scope.newNews = parkFactory.getNews();
    });

    parkFactory.setAlerts().then(function () {
        $scope.newAlerts = parkFactory.getAlerts();
    });


    $('#map').usmap({
        // The click action
        click: function (event, data) {
            parkFactory.searchState(data.name).then(function () {
                $location.path('/parks');
            })

        }
    });






    // alerts ticker - timeout set to 5 seconds to allow api call

    $timeout(function () {
        var tickerItems = parkFactory.getAlerts()

        var tickerIndex = 0;
        var tickerDuration = 5; // time in seconds
        var ticker;

        var setTicker = function () {
            ticker.html("<a href='" + tickerItems[tickerIndex].url + "'>" + tickerItems[tickerIndex++].title + "</a>" + "<br><span class='tickerCat'>(<b>" + tickerItems[tickerIndex].category + "</b>)</span>");
            if (tickerIndex >= tickerItems.length) {
                tickerIndex = 0;
            }
        };

        var rotateTicker = function () {
            ticker.fadeOut('slow', function () {
                setTicker();
                ticker.fadeIn('slow');
            });
        };

        ticker = $('span#ticker');
        setTicker();
        if (tickerItems.length > 1) {
            window.setInterval(rotateTicker, tickerDuration * 1000);
        }


    }, 5000);









});
