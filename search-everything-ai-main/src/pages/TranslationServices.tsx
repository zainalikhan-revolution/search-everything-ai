// search-everything-ai/search-everything-ai-main/src/pages/TranslationServices.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">🌍 Translation Services</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter text to translate and target language..."
            rows={5}
            className="mb-4"
          />
          <Button onClick={handleRun} className="w-full">
            Run Translation
          </Button>
          {result && (
            <pre className="mt-4 p-3 bg-gray-100 rounded-md whitespace-pre-wrap">
              {result}
            </pre>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

