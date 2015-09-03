function randomId(message, done) {
  console.log('generate random id');
  done(null, {id: '' + Math.random()})
}

module.exports = function (seneca) {
  seneca.add({generate: 'id'}, randomId);
};