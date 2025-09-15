import { useState } from "react";

export default function EcommerceSolutions() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/ecommerce-solutions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running E-commerce Solutions task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>E-commerce Solutions</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Build, optimize, and scale your online business with AI. Whether you need
        help with store setup, product descriptions, marketing strategies, or
        customer engagement, this tool has you covered.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: 'Generate 5 product descriptions for eco-friendly shoes' or 'Suggest a sales funnel for my Shopify store'..."
        rows={6}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
      />

      <br />
      <button
        onClick={handleRun}
        style={{
          padding: "0.5rem 1rem",
          background: "#28a745", // ✅ Green theme for growth/business
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate Solutions
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>AI-Powered Recommendations:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
