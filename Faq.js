const mongoose = require("mongoose");

const FaqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    translations: {
      hi: { question: String, answer: String },
      bn: { question: String, answer: String },
    },
  },
  { timestamps: true }
);

// Export the model
module.exports = mongoose.model("Faq", FaqSchema);
