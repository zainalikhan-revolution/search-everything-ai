import { useState } from "react";

export default function ContentCreation() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/content-creation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Content Creation task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AI Content Creation</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Generate engaging blogs, articles, marketing copy, and creative writing 
        with ease. Just describe what you need, and let AI craft compelling 
        content tailored to your audience.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write your request here (e.g., 'Blog post about AI trends', 'Instagram caption', 'Product description')..."
        rows={6}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
      />

      <br />
      <button
        onClick={handleRun}
        style={{
          padding: "0.5rem 1rem",
          background: "#e83e8c",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Create Content
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>Generated Content:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
  );
}

