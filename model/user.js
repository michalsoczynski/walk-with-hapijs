var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
  identity: 'user',
  connection: 'mysql',

  attributes: {
    first_name: 'string',
    last_name: 'string'
  }
});