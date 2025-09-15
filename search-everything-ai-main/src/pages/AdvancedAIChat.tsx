import { useState } from "react";

export default function AdvancedAIChat() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/advanced-ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Advanced AI Chat task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Advanced AI Chat Interface</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Engage in multi-modal AI conversations. Upload files, analyze documents,
        and interact with AI using pre-built chat templates and memory.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Start your conversation with AI..."
        rows={5}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
      />

      <br />
      <button
        onClick={handleRun}
        style={{
          padding: "0.5rem 1rem",
          background: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Chat with AI
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>AI Response:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
  );
}

