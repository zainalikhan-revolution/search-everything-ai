import { useState } from "react";

export default function DataVisualizationHub() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/data-visualization-hub", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Data Visualization Hub task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AI Data Visualization Hub</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Generate professional charts, graphs, and dashboards instantly. Just
        describe the visualization you need, and AI will help you bring your
        data to life with clear insights and ready-to-use code.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the visualization (e.g., 'bar chart of sales by region', 'line chart of revenue growth')..."
        rows={6}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
      />

      <br />
      <button
        onClick={handleRun}
        style={{
          padding: "0.5rem 1rem",
          background: "#20c997",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate Visualization
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>Visualization Output:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
  );
}

