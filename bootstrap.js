var express = require('express');
var app = express();

require('./app')(void 0, 3001);
require('./app2')(app);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

module.exports = app;

