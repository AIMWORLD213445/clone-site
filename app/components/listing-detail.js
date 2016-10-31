import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(listing) {
      if (confirm('Are you sure you want to wipe this listing from our Database?')){
        this.sendAction('destroyListing', listing);
      }
    }
  }
});
