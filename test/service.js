/**
 * Created by bsun on 8/28/2015.
 */

var yargs = require('yargs');

var seneca = require('seneca')();

var argv = require('yargs').argv;

var proxy = null;
// whether start random service in this node process
if (argv['include-random']) {
  seneca.use(require('./random'), {});
  proxy = require('./index')(seneca);
} else {
  proxy = require('./index')(seneca.client({port: 9292, host: 'localhost'}));
}

seneca.add({generate: 'id'}, function (msg, response) {
  proxy.generateId(function (err, result) {
    if (err) {
      return response(err);
    }
    response(null, result);
  });

});

seneca.listen({port: 9191, host: 'localhost'});
