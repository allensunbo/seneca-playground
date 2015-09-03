function foo(app, port) {
  if (typeof app === 'undefined') {
    var express = require('express');
    app = express();
    var server = app.listen(port, function () {
      var host = server.address().address;
      var port = server.address().port;

      console.log('Example app listening at http://%s:%s', host, port);
    });
  }

  app.get('/1', function (req, res) {
    res.end('test');
    /*var request = require('request');
     request('http://localhost:3001/', function (error, response, body) {
     if (!error && response.statusCode == 200) {
     res.end(body);
     }
     });*/

  });
}

module.exports = foo

