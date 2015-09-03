var seneca = require('seneca')();

var argv = require('yargs').argv;

// whether start service "idGeneratorService" in this node process or ask for other resources on network
// use --include-id-generator from command line
argv['include-id-generator'] ? loadIdGeneratorPlugin() : clientOfExternalIdGeneratorService();

var idGeneratorProxy = require('./id_generator/index')(seneca);

seneca.add({generate: 'id'}, function (msg, response) {
  idGeneratorProxy.generateId(function (err, result) {
    if (err) {
      return response(err);
    }
    response(null, result);
  });

});

seneca.listen({port: 9191, host: 'localhost'});

function loadIdGeneratorPlugin(options) {
  seneca.use(require('./id_generator/idGeneratorPlugin'), options);
}

function clientOfExternalIdGeneratorService() {
  seneca.client({port: 9292, host: 'localhost'})
}