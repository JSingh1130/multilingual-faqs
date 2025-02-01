const Faq = require("./faq");
const redis = require("./redis");
const translate = require("google-translate-api-x");

// Helper function for translation
const translateText = async (text, lang) => {
  try {
    const res = await translate(text, { to: lang });
    return res.text;
  } catch (error) {
    console.error(`Translation error: ${error.message}`);
    return text; // Fallback to original text
  }
};

// Get FAQs with caching
const getFaqs = async (req, res) => {
  const { lang } = req.query; // Get the language query parameter
  const cacheKey = `faqs:${lang || "en"}`; // Default cache key to English

  console.log(`Checking Redis cache for key: ${cacheKey}`);
  const cachedData = await redis.get(cacheKey);

  try {
    let faqs;

    if (cachedData) {
      // Parse cached data
      const parsedData = JSON.parse(cachedData);
      console.log("Cache hit:", parsedData);

      // Filter or return English-only content when no lang is specified
      if (!lang || lang === "en") {
        faqs = parsedData.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }));
      } else {
        faqs = parsedData;
      }
    } else {
      console.log("Cache miss. Fetching from DB...");
      const dbData = await Faq.find(); // Fetch from MongoDB
      console.log("FAQs from DB:", dbData);

      // Process data based on lang
      if (!lang || lang === "en") {
        faqs = dbData.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }));
      } else {
        faqs = await Promise.all(
          dbData.map(async (faq) => ({
            question: faq.translations[lang]?.question || faq.question,
            answer: faq.translations[lang]?.answer || faq.answer,
          }))
        );
      }

      // Cache the processed data
      console.log("Setting cache for key:", cacheKey);
      await redis.set(cacheKey, JSON.stringify(faqs), "EX", 3600);
    }

    res.json(faqs);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Add FAQ with automatic translation
const createFaq = async (req, res) => {
  try {
    const { question, answer } = req.body;

    const translatedHiQuestion = await translateText(question, "hi");
    const translatedBnQuestion = await translateText(question, "bn");
    const translatedHiAnswer = await translateText(answer, "hi");
    const translatedBnAnswer = await translateText(answer, "bn");

    const faq = new Faq({
      question,
      answer,
      translations: {
        hi: { question: translatedHiQuestion, answer: translatedHiAnswer },
        bn: { question: translatedBnQuestion, answer: translatedBnAnswer },
      },
    });

    await faq.save();

    // Invalidate Redis cache to reflect the new FAQ
    const cacheKeys = [`faqs:en`, `faqs:hi`, `faqs:bn`];
    for (const key of cacheKeys) {
      await redis.del(key);
    }

    res.status(201).json(faq);
  } catch (error) {
    console.error("Error creating FAQ:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { getFaqs, createFaq };
