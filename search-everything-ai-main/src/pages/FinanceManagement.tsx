import { useState } from "react";

export default function FinanceManagement() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/finance-management", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Finance Management task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Finance Management</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem" }}>
        Take control of your money with AI-powered financial planning. From
        budgeting and investment strategies to cash flow analysis, this tool
        helps you make smarter financial decisions.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: 'Create a monthly budget for a student' or 'Suggest a safe investment strategy for 2025'..."
        rows={6}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
      />

      <br />
      <button
        onClick={handleRun}
        style={{
          padding: "0.5rem 1rem",
          background: "#006400", // 🟢 Dark green = money/finance
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate Financial Plan
      </button>

      <div style={{ marginTop: "2rem" }}>
        {result && (
          <>
            <h3>AI-Powered Financial Insights:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
          </>
        )}
      </div>
    </div>
  );
}

