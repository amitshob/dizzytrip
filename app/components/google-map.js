import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions:{
    showMap(listing){
      // function initMap() {
      //   var directionsService = new google.maps.DirectionsService;
      //   var directionsDisplay = new google.maps.DirectionsRenderer;
      //   var map = new google.maps.Map(document.getElementById('map'), {
      //     zoom: 6,
      //     center: {lat: 41.85, lng: -87.65}
      //     // replace this with variables pulled from database
      //   });
      //   directionsDisplay.setMap(map);
      //
      //   document.getElementById('submit').addEventListener('click', function() {
      //     calculateAndDisplayRoute(directionsService, directionsDisplay);
      //   });
      // }
      // function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      //   var waypts = [];
      //   var checkboxArray = document.getElementById('waypoints');
      //   for (var i = 0; i < checkboxArray.length; i++) {
      //     if (checkboxArray.options[i].selected) {
      //       waypts.push({
      //         location: checkboxArray[i].value,
      //         stopover: true
      //       });
      //     }
      //   }




    }
  }




});
