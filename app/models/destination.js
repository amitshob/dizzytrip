import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  city: DS.attr(),
  image: DS.attr(),
  visit_time:DS.attr('number'),
  visit_budget:DS.attr('number'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')

});
