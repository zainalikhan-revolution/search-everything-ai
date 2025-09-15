import { useState } from "react";

export default function CodePlayground() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/code-playground", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Code Playground task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AI Code Playground</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Experiment, test, and refine your ideas in real time. The AI assistant helps you 
        transform prompts into runnable code snippets instantly.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type code ideas, snippets, or questions here..."
        rows={6}
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
        Run Playground
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>Playground Output:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
  );
}
