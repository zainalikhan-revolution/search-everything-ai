export default async function handler(req, res) {
  // ✅ Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { input, provider = "openai" } = req.body;

    if (!input) {
      return res.status(400).json({ error: "Missing input" });
    }

    console.log("🔑 API Keys available:", {
      openai: !!process.env.OPENAI_API_KEY,
      openrouter: !!process.env.OPENROUTER_API_KEY
    });

    let apiUrl = "";
    let headers = {};
    let body = {};

    if (provider === "openai" && process.env.OPENAI_API_KEY) {
      // 🔹 OpenAI GPT
      apiUrl = "https://api.openai.com/v1/chat/completions";
      headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      };
      body = {
        model: "gpt-5-2025-08-07",
        messages: [{ role: "user", content: input }],
        max_tokens: 1000,
      };
    } else if (process.env.OPENROUTER_API_KEY) {
      // 🔹 OpenRouter (fallback)
      apiUrl = "https://openrouter.ai/api/v1/chat/completions";
      headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": req.headers.origin || "https://search-ai.vercel.app",
        "X-Title": "Search AI Platform",
      };
      body = {
        model: "openai/gpt-5-2025-08-07",
        messages: [{ role: "user", content: input }],
        max_tokens: 1000,
      };
    } else {
      return res.status(500).json({ 
        error: "No API keys configured. Please add OPENAI_API_KEY or OPENROUTER_API_KEY to Vercel environment variables." 
      });
    }

    console.log("🌐 Making request to:", apiUrl);

    const response = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ API Error:", errorData);
      throw new Error(
        errorData.error?.message ||
          `API request failed with status ${response.status}`
      );
    }

    const data = await response.json();
    console.log("✅ API Success:", data.choices?.[0]?.message?.content?.slice(0, 100));
    res.status(200).json(data);
  } catch (error) {
    console.error("💥 Handler Error:", error.message);
    res.status(500).json({ error: error.message });
  }
}


