import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// ✅ Your Gemini API endpoint
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

// POST route to handle story generation
app.post("/generate-story", async (req, res) => {
  const { child_name, child_age, child_gender, child_interests, favorite_character, book_genre } = req.body;

  const prompt = `Write a fun and heartwarming bedtime story about ${child_name}, 
  a ${child_age}-year-old ${child_gender} who loves ${child_interests}, 
  featuring their favorite character ${favorite_character}, 
  in a ${book_genre} theme.`;

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      }),
    });
  
    const data = await response.json();
    console.log("Gemini raw response:", data); // 👈 add this
  
    const story =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Story generation failed, please try again.";
  
    res.json({ story });
  } catch (error) {
    console.error("Error generating story:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
