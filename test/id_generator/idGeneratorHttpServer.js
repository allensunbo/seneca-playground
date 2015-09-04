var express = require('express');
var app = express();

app.get('/act', function (req, res) {
  res.send(randomId());
});

var uuid = require('uuid');

function randomId() {
  return {id: uuid.v4()};
}

var server = app.listen(9292, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});