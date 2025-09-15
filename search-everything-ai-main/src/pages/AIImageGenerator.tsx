import { useState } from "react";

export default function AIImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/ai-image-generator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running AI Image Generator task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AI Image Generator</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Turn your imagination into reality. Describe anything—from logos to
        fantasy landscapes—and let AI instantly create high-quality visuals.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the image you want to generate..."
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
        Generate Image
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
