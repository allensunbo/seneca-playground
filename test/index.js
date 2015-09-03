module.exports = function (seneca) {
  return {
    generateId: function () {
      seneca.act({generate: 'id'}, function (err, result) {
        console.log(result);
      });
    }
  }
};