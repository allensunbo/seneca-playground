var seneca = require('seneca')();

var argv = require('yargs').argv;

// whether start service "idGeneratorService" in this node process or ask for other resources on network
// use --include-id-generator from command line

var idGeneratorProxy = require('./id_generator/index')(seneca);
var nameGeneratorProxy = require('./name_generator/index')(seneca);


/*
seneca.add({generate: 'id'}, function (msg, response) {
  idGeneratorProxy.generateId(function (err, result) {
    if (err) {
      return response(err);
    }
    response(null, result);
  });

});
*/

seneca.add({generate: 'name'}, function (msg, response) {
  nameGeneratorProxy.generateName(function (err, result) {
    if (err) {
      return response(err);
    }
    response(null, result);
  });

});

var services = [];

seneca.add({add: 'service'}, function (msg, response) {
  var port = msg.port, host = msg.host;
  if (serviceExists(port, host)) {
    return response(null, {info: 'already added'});
  }
  services.push({port: port, host: host});
  clientOfExternalGeneratorService(port, host);
  response(null, {info: 'success'});
});

seneca.listen({port: 9191, host: 'localhost'});

/*argv['include-id-generator'] ? loadIdGeneratorPlugin() : clientOfExternalGeneratorService(9292, 'localhost');
argv['include-name-generator'] ? loadNameGeneratorPlugin() : clientOfExternalGeneratorService(9393,'localhost');*/


function loadIdGeneratorPlugin(options) {
  seneca.use(require('./id_generator/idGeneratorPlugin'), options);
}

function clientOfExternalGeneratorService(port, host) {
  console.log('client:', port, host);
  seneca.client({port: port, host: host})
}

function loadNameGeneratorPlugin(options) {
  seneca.use(require('./name_generator/nameGeneratorPlugin'), options);
}

function serviceExists(port, host) {
  for (var i = 0; i < services.length; i++) {
    if (services[i].port === port && services[i].host === host) {
      return true;
    }
  }
  return false;
}