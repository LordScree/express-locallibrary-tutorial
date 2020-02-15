var async = require("async");

exports.index = function(req, res) {
  async.parallel(
    {
      questions: function (callback) {
        callback(null, [
            {index: 1, question: "What is 1+1?", answer: 2},
            {index: 2, question: "What is 2+2?", answer: 4}
        ]); 
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
