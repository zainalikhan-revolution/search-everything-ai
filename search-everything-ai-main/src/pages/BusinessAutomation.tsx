import { useState } from "react";

export default function BusinessAutomation() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/business-automation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Business Automation task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AI Business Automation</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Automate workflows, streamline processes, and boost productivity.
        From CRM updates and project management to data entry and reporting,
        this tool empowers businesses to save time and operate smarter.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the workflow or process you want to automate (e.g., schedule tasks, update CRM, generate reports)..."
        rows={5}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
      />

      <br />
      <button
        onClick={handleRun}
        style={{
          padding: "0.5rem 1rem",
          background: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Automate Workflow
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>Automation Result:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
  );
}
