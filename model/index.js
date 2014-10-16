var Waterline = require('waterline');
var orm = new Waterline();
var config = require('../config');

orm.loadCollection(require('./user'));

orm.initialize(config, function(err, models) {});

module.exports = orm.collections;