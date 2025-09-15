import { useState } from "react";

export default function HealthWellness() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/health-wellness", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Health & Wellness task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Health & Wellness</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Achieve a healthier lifestyle with AI guidance. From personalized diet
        plans and workout routines to mindfulness tips and stress management,
        get tailored wellness insights.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: 'Create a weekly workout plan for beginners' or 'Suggest a balanced vegetarian diet plan'..."
        rows={6}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
      />

      <br />
      <button
        onClick={handleRun}
        style={{
          padding: "0.5rem 1rem",
          background: "#28a745", // 🟢 Healthy green shade
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate Wellness Plan
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>Your Personalized Health Plan:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
  );
}
