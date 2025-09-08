export async function searchAI(query, provider = "openrouter") {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: query, provider }),
    });

    const data = await res.json();

    if (data.error) {
      return "❌ Error: " + data.error;
    }

    return (
      data.choices?.[0]?.message?.content ||
      data.output_text ||
      "⚠️ No response"
    );
  } catch (err) {
    return "🌐 Network error: " + err.message;
  }
}

