var express = require('express');
var app = express();
var request = require('request');

app.get('/', function (req, res) {
  var request = require('request');
  request('http://localhost:3001/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.end(body);
    }
  });

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


var app2 = express();

app2.get('/', function (req, res) {
  res.end('Hello World --2 haha !');
});

var server2 = app2.listen(3001, function () {
  var host2 = server2.address().address;
  var port2 = server2.address().port;

  console.log('Example app listening at http://%s:%s', host2, port2);
});