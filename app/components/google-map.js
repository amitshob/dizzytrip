import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions:{
    showMap(city) {
        // function initMap(){
          var city = this.get('city');
          // create a map and ceter it in city selected from the drop down menu
          var map = {
            center:  this.get('map').center(city.get('latitude'), city.get('longitude')),
            zoom: 15
          };
          // initialize new directionsService (service for computing directions)
        //and directionsrenderer( renders directions obtained from directionsService )
          var directionsService = new google.maps.DirectionsService;
          var directionsDisplay = new google.maps.DirectionsRenderer;
          // setMap specifies the map on which directions will be rendered
          // directionsDisplay.setMap(map); (throws an error)
          // document.getElementById('submit').addEventListener('click', function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
          // }); Just execute the function above straightaway
          // var destination = city.get('destinations').get('firstObject');

          var container = this.$('.map-display')[0];

          this.get('map').findMap(container, map);
        // }
        function calculateAndDisplayRoute(directionsService, directionsDisplay) {
          var waypts = [];(just put values here )
          var checkboxArray = document.getElementById('waypoints');
          for (var i = 0; i < checkboxArray.length; i++) {
            if (checkboxArray.options[i].selected) {
              waypts.push({
                location: checkboxArray[i].value,
                stopover: true
              });
            }
          }

      }

  }
});
