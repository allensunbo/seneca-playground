var seneca = require('seneca')();

var argv = require('yargs').argv;

// whether start service "idGenerator" in this node process or ask for other resources on network
// use --include-random from command line
argv['include-id-generator'] ? seneca.use(require('./id_generator/idGenerator'), {})
  : seneca.client({port: 9292, host: 'localhost'});

var proxy = require('./id_generator/index')(seneca);

seneca.add({generate: 'id'}, function (msg, response) {
  proxy.generateId(function (err, result) {
    if (err) {
      return response(err);
    }
    response(null, result);
  });

});

seneca.listen({port: 9191, host: 'localhost'});
