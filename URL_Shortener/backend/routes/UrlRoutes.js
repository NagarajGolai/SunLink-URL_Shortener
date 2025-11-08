const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const Url = require("../models/Url");

// ✅ Test route
router.get("/test", (req, res) => {
  res.send("✅ Test path working!");
});

// ✅ Root route (optional)
router.get("/", (req, res) => {
  res.send("🚀 URL Shortener backend is live!");
});

// ✅ POST /shorten
router.post("/shorten", async (req, res) => {
  try {
    const { longUrl, customCode } = req.body;

    if (!longUrl)
      return res.status(400).json({ error: "longUrl is required" });

    // 1️⃣ Check if custom alias exists
    if (customCode) {
      const existingCustom = await Url.findOne({ shortCode: customCode });
      if (existingCustom) {
        return res.status(400).json({
          error: "Custom alias already taken. Please choose another.",
        });
      }
    }

    // 2️⃣ Check if same long URL already has a short one
    const existing = await Url.findOne({ longUrl });
    if (existing) {
      const shortUrl = `${req.protocol}://${req.get("host")}/${existing.shortCode}`;
      return res.json({
        message: "Already a shortURL exists for this",
        shortUrl,
      });
    }

    // 3️⃣ Create new short URL
    const shortCode =
      customCode && customCode.trim() !== ""
        ? customCode
        : shortid.generate();

    const newUrl = new Url({ longUrl, shortCode });
    await newUrl.save();

    const shortUrl = `${req.protocol}://${req.get("host")}/${shortCode}`;
    res.json({ shortUrl });

  } catch (err) {
    console.error("🔥 Error in /shorten route:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// ✅ Redirect short URLs — this MUST be last!
router.get("/:code", async (req, res) => {
  try {
    const { code } = req.params;
    const url = await Url.findOne({ shortCode: code });

    if (!url) return res.status(404).json({ error: "URL not found" });

    res.redirect(url.longUrl);
  } catch (err) {
    console.error("🔥 Redirect error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
