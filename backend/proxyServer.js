import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";

const app = express();
app.use(cors());

app.get("/api/menu/:resId", async (req, res) => {
  const { resId } = req.params;
  const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.6039168&lng=85.1360248&restaurantId=${resId}`;

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(apiUrl, { waitUntil: "networkidle2" });
    const content = await page.content(); // get full HTML

    // extract JSON if present
    const jsonMatch = content.match(/\{.*\}/s);
    if (jsonMatch) {
      const jsonData = JSON.parse(jsonMatch[0]);
      res.json(jsonData);
    } else {
      res.status(500).json({ error: "No JSON found in Swiggy response" });
    }

    await browser.close();
  } catch (error) {
    console.error("🔥 Puppeteer error:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Puppeteer proxy running on port ${PORT}`));
