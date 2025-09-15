import { useState } from "react";

export default function CodeGeneration() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/code-generation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Code Generation task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AI Code Generation</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Generate production-ready code with ease. From front-end components to
        back-end APIs, mobile apps, and automation scripts — describe what you
        need, and let AI build it for you.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the code you need (e.g., 'React login form', 'Python API', 'Node.js script')..."
        rows={6}
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
        Generate Code
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>Generated Code:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
  );
}
