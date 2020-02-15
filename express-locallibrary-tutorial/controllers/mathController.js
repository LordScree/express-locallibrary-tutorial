var Math = require("../models/math");

var async = require("async");

exports.index = function(req, res) {
  async.parallel(
    {
      question_count: function(callback) {
        Math.countDocuments({}, callback);
      },
      question_list: function(callback) {
        Math.find({}, null, callback);
      }
    },
    function(err, results) {
      res.render("math", {
        title: "Welcome to Maths with Daddy!",
        error: err,
        data: results
      });
    }
  );
};
