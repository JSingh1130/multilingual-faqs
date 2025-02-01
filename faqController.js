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
  const { lang = "en" } = req.query;
  const cacheKey = `faqs:${lang}`;

  console.log(`Checking Redis cache for key: ${cacheKey}`);
  const cachedData = await redis.get(cacheKey);

  // Parse cached data and check if it's empty
  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    if (parsedData.length > 0) {
      console.log("Cache hit:", parsedData);
      return res.json(parsedData);
    }
    console.log("Cache hit but contains empty data. Fetching from DB...");
  } else {
    console.log("Cache miss. Fetching from DB...");
  }

  try {
    let faqs = await Faq.find(); // Fetch from the database
    console.log("FAQs from DB:", faqs);

    // Translate FAQs if a non-English language is requested
    if (lang !== "en") {
      faqs = await Promise.all(
        faqs.map(async (faq) => ({
          question: faq.translations[lang]?.question || faq.question,
          answer: faq.translations[lang]?.answer || faq.answer,
        }))
      );
    }

    // Update Redis cache
    console.log("Setting cache for key:", cacheKey);
    await redis.set(cacheKey, JSON.stringify(faqs), "EX", 3600);
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

    const translatedHi = await translateText(question, "hi");
    const translatedBn = await translateText(question, "bn");

    const faq = new Faq({
      question,
      answer,
      translations: {
        hi: { question: translatedHi, answer },
        bn: { question: translatedBn, answer },
      },
    });

    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    console.error("Error creating FAQ:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { getFaqs, createFaq };
