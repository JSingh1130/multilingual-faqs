const express = require("express");
const { getFaqs, createFaq } = require("./faqController");

const router = express.Router();

router.get("/", getFaqs);
router.post("/", createFaq);

module.exports = router; // Export using CommonJS
