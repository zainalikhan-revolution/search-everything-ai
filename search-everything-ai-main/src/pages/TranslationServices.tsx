import { useState } from "react";

export default function TranslationServices() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const res = await fetch("/api/translation-services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Error running Translation Services task.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Translation Services</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter text to translate and target language..."
        rows={5}
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <br />
      <button onClick={handleRun}>Run</button>
      <pre style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>{result}</pre>
    </div>
  );
}
