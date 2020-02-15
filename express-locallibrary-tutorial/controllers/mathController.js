var Math = require('../models/math');

var async = require("async");

exports.index = function(req, res) {
  async.parallel(
    {
      question_count: function(callback) {
        Math.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
      },
      question_list: function(callback) {
        Math.find({}, "question _id").exec(function(err, list_questions) {
          callback(err, list_questions);
        });
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
