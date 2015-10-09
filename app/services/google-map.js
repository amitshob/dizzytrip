import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,

  findMap(container, map) {
    return new this.googleMaps.Map(container, map);
  },

  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);

  }
});
