// src/components/CodeGenerator.js - CREATE OR UPDATE THIS COMPONENT

import { useState } from 'react';
import { makeApiRequest } from '../utils/apiHandler';

const CodeGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [generatedCode, setGeneratedCode] = useState('');
  const [progress, setProgress] = useState(0);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setLoading(true);
    setError(null);
    setProgress(0);
    setGeneratedCode('');

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 10, 90));
    }, 300);

    try {
      const data = await makeApiRequest('/api/generate-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      setGeneratedCode(data.code);
      setProgress(100);
    } catch (err) {
      setError(err.message);
      setProgress(0);
    } finally {
      clearInterval(progressInterval);
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">AI Code Generator</h2>
        
        {/* Input Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Describe what code you want to generate:
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., Create a React component for a todo list with add, delete, and mark complete functionality"
              className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              disabled={loading}
            />
          </div>
          
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            {loading ? 'Generating...' : 'Generate Code'}
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-900">
                  Generating your code... {progress}%
                </p>
                <div className="mt-2 bg-blue-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="text-red-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-red-800">Generation Failed</h3>
                <p className="text-sm text-red-700 mt-1">{error}</p>
                
                {error.includes('quota') && (
                  <div className="mt-3 p-3 bg-red-100 rounded-lg">
                    <p className="text-sm font-medium text-red-800">Quick Fix:</p>
                    <ol className="text-sm text-red-700 mt-1 list-decimal list-inside">
                      <li>Go to <a href="https://platform.openai.com/account/billing" target="_blank" className="underline">platform.openai.com/account/billing</a></li>
                      <li>Add a payment method</li>
                      <li>Add some credit ($5-10 is enough)</li>
                      <li>Try again</li>
                    </ol>
                  </div>
                )}
                
                <button 
                  onClick={handleGenerate}
                  className="mt-3 bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded text-sm"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success State */}
        {generatedCode && !loading && !error && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-green-800">✅ Code Generated Successfully!</h3>
              <button 
                onClick={copyToClipboard}
                className="bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1 rounded text-sm"
              >
                Copy Code
              </button>
            </div>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto max-h-96">
              <code>{generatedCode}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeGenerator;
