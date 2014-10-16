var Hapi = require('hapi');
var Good = require('good');
var Server = new Hapi.Server(3000);

var model = require('./model');

Server.route({
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {
        model.user.find().exec(function(err, models) {
            reply(models);
        });
    }
});

Server.pack.register(Good, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    Server.start(function () {
        Server.log('info', 'Server running at: ' + Server.info.uri);
    });
});