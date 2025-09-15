import { useState } from "react";

export default function DesignGraphics() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/design-graphics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Design Graphics task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AI Design & Graphics</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Create logos, posters, UI/UX mockups, and stunning visuals with AI
        assistance. Just describe your idea, and get design suggestions,
        concepts, and even ready-to-use assets.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the graphic you want (e.g., 'modern logo for a tech startup', 'poster design for an event', 'UI layout for a mobile app')..."
        rows={6}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
      />

      <br />
      <button
        onClick={handleRun}
        style={{
          padding: "0.5rem 1rem",
          background: "#fd7e14",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate Design
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>Generated Design Ideas:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
  );
}
