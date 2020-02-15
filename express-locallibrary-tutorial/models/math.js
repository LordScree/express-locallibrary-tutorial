var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MathSchema = new Schema({
  _id: { type: Guid, required: true },
  operand_a: { type: Decimal128, required: true },
  operand_b: { type: Decimal128, required: true },
  operator: { type: String, required: true }''
});

// Virtual for question's text
MathSchema.virtual("question").get(function() {
  return "What is " + this.operand_a + this.operator + this.operand_b + "?";
});

//Export model
module.exports = mongoose.model("Math", MathSchema);
