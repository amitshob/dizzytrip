import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions:{
    showMap() {
        // function initMap(){
          var directionsService = new google.maps.DirectionsService;
          var directionsDisplay = new google.maps.DirectionsRenderer;
          var city = this.get('city');
          var destinations = city.get('destinations');


          // create a map and ceter it in city selected from the drop down menu
          var map = {
            center:  this.get('map').center(city.get('latitude'), city.get('longitude')),
            zoom: 15
          };
          // initialize new directionsService (service for computing directions)
        //and directionsrenderer( renders directions obtained from directionsService )

          // setMap specifies the map on which directions will be rendered
        //  directionsDisplay.setMap(map); //(throws an error)
          //  document.getElementById('submit').addEventListener('click', function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        // }); //Just execute the function above straightaway
          // var destination = city.get('destinations').get('firstObject');


        // }
        function calculateAndDisplayRoute(directionsService, directionsDisplay) {
          var first = new google.maps.LatLng(destinations[0].latitude,destinations[0].longitude);
          var second = new google.maps.LatLng(destinations[1].latitude,destinations[1].longitude);
          var third = new google.maps.LatLng(destinations[2].latitude,destinations[2].longitude);

          var waypts = [{location: first, stopover: true}, {location: second, stopover: true},
            {location: third, stopover: true}];
          // var waypts = [destinations[0].name,destinations[1].name,destinations[2].name];


         directionsService.route({
            origin: document.getElementById('origin').value,
            destination: document.getElementById('destination').value,

            // budget: document.getElementById('budget').value,

            // origin: "89 E 42nd St, New York, NY 10017",
            // destination: "4 Pennsylvania Plaza, New York, NY 10121",
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING
          }, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
              directionsDisplay.setDirections(response);
              var route = response.routes[0];
              var summaryPanel = document.getElementById('directions-panel');
              var time_available = document.getElementById('time_available').value;
              summaryPanel.innerHTML = '';
              var travel_duration = 0;
              // For each route, display summary information.
              for (var i = 0; i < route.legs.length; i++) {
                var routeSegment = i + 1;
                summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
                    '</b><br>';
                summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
                summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
                summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
                route.legs[i].duration;
                travel_duration = travel_duration +route.legs[i].duration;
                debugger;

                // window.alert('hi');
              }


            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        }
          var container = this.$('.map-display')[0];

          this.get('map').findMap(container, map);

    }

  }
});
