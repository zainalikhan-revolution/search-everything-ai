import { useState } from "react";

export default function EducationLearning() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/education-learning", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Education & Learning task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Education & Learning</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Enhance your knowledge or create engaging learning experiences. Use AI
        to design courses, generate study materials, or build personalized
        learning plans.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: 'Generate a 4-week AI fundamentals course outline' or 'Explain quantum mechanics in simple terms'..."
        rows={6}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
      />

      <br />
      <button
        onClick={handleRun}
        style={{
          padding: "0.5rem 1rem",
          background: "#007bff", // 📘 Blue for education/knowledge
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate Learning Plan
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>AI-Powered Learning Resources:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
  );
}
