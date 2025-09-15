import { useState } from "react";

export default function AudioProcessing() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/audio-processing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Audio Processing task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AI Audio Processing</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Enhance, edit, and generate audio with AI. From music production and
        podcast editing to voice synthesis and noise reduction, this tool
        handles every sound task.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the audio task (e.g., remove noise, generate voice, edit podcast)..."
        rows={5}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
      />

      <br />
      <button
        onClick={handleRun}
        style={{
          padding: "0.5rem 1rem",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Process Audio
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>Processing Result:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
  );
}
