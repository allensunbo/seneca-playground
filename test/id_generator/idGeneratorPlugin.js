var uuid = require('uuid');

function randomId(message, done) {
  done(null, {id: uuid.v4()});
}

module.exports = function (options) {
  this.add({_generate_: 'id'}, randomId);
};