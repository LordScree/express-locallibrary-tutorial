var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MathSchema = new Schema({
  _id: { type: mongoose.Types.ObjectId, required: true },
  operand_a: { type: mongoose.Types.Decimal128, required: true },
  operand_b: { type: mongoose.Types.Decimal128, required: true },
  operator: { type: String, required: true }
});

// Virtual for question's text
MathSchema.virtual("question").get(function() {
  return "What is " + this.operand_a + this.operator + this.operand_b + "?";
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
module.exports = mongoose.model("Math", MathSchema);
