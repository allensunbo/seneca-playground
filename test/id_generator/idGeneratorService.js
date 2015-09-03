var seneca = require('seneca')();

seneca.use(require('./idGeneratorPlugin'), {});

seneca.listen({port: 9292, host: 'localhost'});
