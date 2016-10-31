import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
  actions: {
    updateListingForm() {
      this.set('updateListingForm', true);
    },
    update(listing) {
      var params = {
        username: this.get('username'),
        category: this.get('category'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.set('updateListingForm', false);
      this.sendAction('update', listing, params);
    }
  }
});
