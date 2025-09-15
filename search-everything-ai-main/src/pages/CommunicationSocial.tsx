import { useState } from "react";

export default function CommunicationSocial() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/communication-social", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Communication & Social task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AI Communication & Social</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Plan, draft, and optimize your communication strategies. From social
        media posts and email campaigns to community engagement ideas — let AI
        help you connect effectively with your audience.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write a tweet, draft a LinkedIn post, or ask for strategy ideas..."
        rows={6}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
      />

      <br />
      <button
        onClick={handleRun}
        style={{
          padding: "0.5rem 1rem",
          background: "#6f42c1",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate Content
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>Generated Output:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
  );
}

