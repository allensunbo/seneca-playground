var seneca = require('seneca')();

seneca.client({port: 9191, host: 'localhost'})
 /* .act({generate: 'id'}, function (err, result) {
    console.log(result);
  })*/
  .act({generate: 'name'}, function (err, result) {
    console.log(result);
  });