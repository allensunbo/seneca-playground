/**
 * Created by bsun on 8/28/2015.
 */

var seneca = require('seneca')();

seneca.use(require('./idGenerator'), {});

seneca.listen({port: 9292, host: 'localhost', pin: 'role.math'});
