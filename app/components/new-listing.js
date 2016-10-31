import Ember from 'ember';

export default Ember.Component.extend({
    addNewListing: false,
    actions: {
      listingFormShow() {
        this.set('addNewListing', true);
      },

      saveListing() {
        var params= {
          username: this.get('username'),
          category: this.get('category'),
          content: this.get('content'),
          image: this.get('image'),
          date: new Date(),
        };
        this.set('addNewListing', false);
        this.sendAction('saveListing', params);
      }
    }
});
