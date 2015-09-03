/**
 * Created by bsun on 8/28/2015.
 */
var seneca = require('seneca')();

seneca.client({port: 9191, host: 'localhost'})
  .act({generate: 'id'}, function (err, result) {
    console.log(result);
  });