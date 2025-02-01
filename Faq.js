const mongoose = require("mongoose");
const translate = require("google-translate-api-x");
const redis = require("./redis"); // Import Redis instance

const translateText = async (text, lang) => {
  try {
    const res = await translate(text, { to: lang });
    return res.text;
  } catch (error) {
    console.error(`Translation error: ${error.message}`);
    return text; // Fallback to the original text
  }
};

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

// Pre-save hook for automatic translation
FaqSchema.pre("save", async function (next) {
  try {
    if (this.isNew || this.isModified("question") || this.isModified("answer")) {
      this.translations.hi = {
        question: await translateText(this.question, "hi"),
        answer: await translateText(this.answer, "hi"),
      };
      this.translations.bn = {
        question: await translateText(this.question, "bn"),
        answer: await translateText(this.answer, "bn"),
      };
    }
    next();
  } catch (error) {
    console.error("Error during translation in pre-save hook:", error);
    next(error);
  }
});

// Post-save hook to invalidate Redis cache
FaqSchema.post("save", async function () {
  const cacheKeys = [`faqs:en`, `faqs:hi`, `faqs:bn`];
  for (const key of cacheKeys) {
    await redis.del(key); // Invalidate cache
    console.log(`Cache invalidated for key: ${key}`);
  }
});

module.exports = mongoose.model("Faq", FaqSchema);
