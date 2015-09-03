function randomId(message, done) {
  done(null, {id: '' + Math.random()})
}

module.exports = function (options) {
  this.add({_generate_: 'id'}, randomId)
};