module.exports = function (seneca) {
  return {
    generateName: function (cb) {
      seneca.act({_generate_: 'name'}, function (err, result) {
        if (err) {
          return cb(err);
        }
        cb(null, result);
      });
    }
  }
};