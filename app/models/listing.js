import DS from 'ember-data';

export default DS.Model.extend({
    category : DS.attr(),
    content :  DS.attr(),
    date :  DS.attr('date'),
    image : DS.attr(),
    username : DS.attr()
    category: DS.belongsTo('category', { async: true }),
});
