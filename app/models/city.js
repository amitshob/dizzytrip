import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  latitude:DS.attr('number'),
  longitude:DS.attr('number'),
  destinations: DS.attr()
});
