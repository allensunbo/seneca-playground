var seneca = require('seneca')();
var request = require('request');

var port = 9292, host = 'localhost';

seneca.use(require('./idGeneratorPlugin'), {});

seneca.listen({port: port, host: host});

var registered = false;
var t = setInterval(function () {
  request.get({
    url: 'http://localhost:9191/act?add=service&port=' + port + '&host=' + host
  }, function optionalCallback(err, httpResponse, body) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(body);
    registered = true;
    if (t) clearInterval(t);
  });
}, 2000);



