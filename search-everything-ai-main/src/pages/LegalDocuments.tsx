// search-everything-ai/search-everything-ai-main/src/pages/LegalDocuments.tsx
import { useState } from "react";

export default function LegalDocuments() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/legal-documents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Legal Documents task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Legal Documents</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the legal document or analysis needed..."
        rows={5}
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <br />
      <button onClick={handleRun}>Run</button>
      <pre style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>{result}</pre>
    </div>
  );
}
