import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  destination: DS.hasMany('destination', { async: true })
});
