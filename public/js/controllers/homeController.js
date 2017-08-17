var app = angular.module('parkApp');

app.controller('homeCtrl', function ($scope,$route, $location, $timeout, parkFactory) {





    parkFactory.setParks().then(function () {
        $scope.newPark = parkFactory.getParks();
//        console.log('newPark ' + $scope.newPark)
    });

    $scope.filterState=function(data){
        parkFactory.searchState(data).then(function(){
          $location.path('/parks');
            $route.reload();
        });

    }






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

        // declaring variables
        var tickerItems = parkFactory.getAlerts()
        var tickerIndex = 0; // start index for ticker
        var tickerDuration = 15; // time in seconds
        var ticker; // declaring ticker variable so it can be referenced in the function

        // function to go through array and print out each .category property of the array. 'ticker.html' is replacing the current html on the DOM with the provided html.
        var setTicker = function () {
            ticker.html("<a href='" + tickerItems[tickerIndex].url + "'>" + tickerItems[tickerIndex++].title + "</a>" + "<br><span class='tickerCat'><b>" + tickerItems[tickerIndex].listingDescription + "</b></span>");
            if (tickerIndex >= tickerItems.length) {
                tickerIndex = 0;
            }
        };

        // function to make the ticker fade in/out
        var rotateTicker = function () {
            ticker.fadeOut('slow', function () {
                setTicker();
                ticker.fadeIn('slow');
            });
        };

        // targeting the array where the ticker will be placed
        ticker = $('span#ticker');
        setTicker();
        if (tickerItems.length > 1) {
            window.setInterval(rotateTicker, tickerDuration * 1000); // this is setting the tickerDuration variable to multiply by 1000ms. allowing us to change the speed the ticker scrolls through in seconds with the variable above.
        }


    }, 5000); // five second timeout to allow time for the api to load and feed ticker information.




//    $('.moreEvents').click(function(){
//        $(this).toggleClass('moreEventsClose');
//        $(this).animate({height: '100px'})
//    });






    $('.moreEvents').click(function(){

        $('.expand').toggleClass('eventsSmall', 300)
//        $('.moreEvents').removeClass('moreEvents');

    })

    $('.moreEventsNews').click(function(){

        $('.expandNews').toggleClass('eventsSmall', 300)
        //        $('.moreEvents').removeClass('moreEvents');

    })




});
