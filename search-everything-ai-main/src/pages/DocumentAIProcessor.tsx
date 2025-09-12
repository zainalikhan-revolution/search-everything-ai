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
      <h2>Document AI Processor</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Upload or describe document for processing..."
        rows={5}
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <br />
      <button onClick={handleRun}>Run</button>
      <pre style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>{result}</pre>
    </div>
  );
}
