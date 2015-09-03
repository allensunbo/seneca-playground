module.exports = function (seneca) {
  return {
    generateId: function (cb) {
      seneca.act({_generate_: 'id'}, function (err, result) {
        cb(null, result);
      });
    }
  }
};