var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MathSchema = new Schema({
  operand_a: { type: mongoose.Types.Decimal128, required: true },
  operand_b: { type: mongoose.Types.Decimal128, required: true },
  operator: { type: String, required: true }
}, { collection: 'mathQuestions' });

// Virtual for question's text
MathSchema.virtual("questionHtml").get(function() {
  return "What is <span class='operand'>" + this.operand_a + "</span> <span class='operator'>" + this.operator + "</span> <span class='operand'>" + this.operand_b + "</span>?";
});

// Virtual for this question's answer
MathSchema.virtual("answer").get(function() {
  var answer;
  switch (this.operator) {
    case "+":
      answer = this.operand_a + this.operand_b;
      break;
    case "-":
      answer = this.operand_a - this.operand_b;
      break;
    default:
      answer = "Unsupported operator: " + this.operator;
  }
  return answer;
});

//Export model
module.exports = mongoose.model("MathQuestion", MathSchema);
