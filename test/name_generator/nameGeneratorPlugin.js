var Faker = require('Faker');

function randomName(message, done) {
  done(null, {name: Faker.Name.findName()});
}

module.exports = function (options) {
  this.add({_generate_: 'name'}, randomName);
};