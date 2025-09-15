import { useState } from "react";

export default function DocumentAIProcessor() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/document-ai-processor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Document AI Processor task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AI Document Processor</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Extract, summarize, translate, or analyze text from any type of document.
        Just describe what you need, and let AI process your content efficiently.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the task (e.g., 'summarize this PDF', 'translate to French', 'extract key points from contract')..."
        rows={6}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
      />

      <br />
      <button
        onClick={handleRun}
        style={{
          padding: "0.5rem 1rem",
          background: "#0d6efd",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Process Document
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>Processed Output:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
  );
}
