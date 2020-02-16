var Math = require("../models/mathQuestion");

var async = require("async");

exports.index = function(req, res) {
  async.parallel(
    {
      question_count: function(callback) {
        Math.countDocuments({}, callback);
      },
      question_list: function(callback) {
        Math.find({}, callback);
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

// POST to check answers.
exports.check_answers = function(req, res) {
  async.parallel(
    {
      question_count: function(callback) {
        Math.countDocuments({}, callback);
      },
      question_list: function(callback) {
        Math.find({}, callback);
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
