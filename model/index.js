var Waterline = require('waterline');
var orm = new Waterline();
var config = require('../config');

orm.loadCollection(require('./user'));

orm.initialize(config, function(err, models) {
  if(err) {
    console.log(err);
  };

  module.exports = models;
});

module.exports = orm.collections;