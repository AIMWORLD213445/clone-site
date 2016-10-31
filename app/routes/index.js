import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('listing');
  },
  actions: {
    saveListing(params) {
      var newListing = this.store.createRecord('listing', params);
      newListing.save();
      this.transitioTo('index');
    }
  }
});
