var mysqlAdapter = require('sails-mysql');

module.exports = {
    'connections': require('./connections'),
    'adapters':  {
        default: mysqlAdapter,
        mysql: mysqlAdapter
    }
};
