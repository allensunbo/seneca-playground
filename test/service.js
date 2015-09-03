/**
 * Created by bsun on 8/28/2015.
 */

var seneca = require('seneca')();

seneca
  .use(require('./random'), {})
  .listen({port: 9191, host: 'localhost'});
