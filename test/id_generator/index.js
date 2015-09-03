module.exports = function (seneca) {
  return {
    generateId: function (cb) {
      seneca.act({_generate_: 'id'}, function (err, result) {
        if (err) {
          return cb(err);
        }
        cb(null, result);
      });
    }
  }
};