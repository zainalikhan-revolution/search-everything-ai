import { useState } from "react";

export default function DataAnalysis() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/data-analysis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Data Analysis task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AI Data Analysis</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Analyze datasets, uncover insights, and generate visualizations. Whether
        you need summaries, trend analysis, or code to process data — the AI
        assistant helps you work smarter with your information.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your data query (e.g., 'summarize this dataset', 'generate Python code for analysis', 'find trends in sales data')..."
        rows={6}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
      />

      <br />
      <button
        onClick={handleRun}
        style={{
          padding: "0.5rem 1rem",
          background: "#17a2b8",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Analyze Data
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>Analysis Result:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
  );
}

