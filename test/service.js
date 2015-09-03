/**
 * Created by bsun on 8/28/2015.
 */

var seneca = require('seneca')();

seneca.use(require('./random'), {});

var proxy = require('./index')(seneca.client({port: 9292, host: 'localhost', pin: 'role:math'}));

seneca.add({generate: 'id'}, function (msg, response) {
  proxy.generateId(function (err, result) {
    response(null, result);
  });

});

seneca.listen({port: 9191, host: 'localhost', pin: 'role.math'});
