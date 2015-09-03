function randomId(message, done) {
  console.log('generate random id');
  done(null, {id: '' + Math.random()})
}

module.exports = function (options) {
  this.add({generate: '_id'}, randomId)
};