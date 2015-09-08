// DO not use this, use service instead!
var express = require('express');
var app = express();

app.get('/act', function (req, res) {
  res.send(randomName());
});

var Faker = require('Faker');

function randomName(message, done) {
  var name = Faker.Name.findName();
  console.log(name);
  return {name: name};
}

var server = app.listen(9393, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});