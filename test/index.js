module.exports = function (seneca) {
  return {
    generateId: function (cb) {
      seneca.act({generate: '_id'}, function (err, result) {
        console.log(result)
        cb(null, result);
      });
    }
  }
};