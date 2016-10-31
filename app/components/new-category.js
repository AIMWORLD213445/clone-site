import Ember from 'ember';

export default Ember.Component.extend({
    addNewCategory: false,
    actions: {
      listingFormShow() {
        this.set('addNewCategory', true);
      },

      saveCategory() {
        var params= {
          name: this.get('username'),
          listing: this.get('listing')
        };
        this.set('addNewCategory', false);
        this.sendAction('saveCategory', params);
      }
    }
});
