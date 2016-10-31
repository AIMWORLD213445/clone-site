import Ember from 'ember';

  export default Ember.Route.extend({
    model() {
      return Ember.RSVP.hash({
        listings: this.store.findAll('listing'),
        categories: this.store.findAll('category')
      });
    },
    actions: {
      saveListing(params) {
        var newListing = this.store.createRecord('listing', params);
        newListing.save();
        this.transitionTo('index');
    },
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('index');
    }
  }
});
