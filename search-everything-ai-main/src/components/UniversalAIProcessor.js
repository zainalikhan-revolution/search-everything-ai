// src/components/UniversalAIProcessor.js
import { useState } from 'react';

const AIFeatures = [
  {
    id: 'code',
    name: 'Code Generation',
    icon: '💻',
    description: 'Generate code in any programming language',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'text',
    name: 'Text Generation',
    icon: '✍️',
    description: 'Create articles, emails, and content',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'analysis',
    name: 'Data Analysis',
    icon: '📊',
    description: 'Analyze and visualize your data',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'image',
    name: 'Image Generation',
    icon: '🎨',
    description: 'Create stunning AI-generated images',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'chat',
    name: 'AI Chat',
    icon: '💬',
    description: 'Chat with advanced AI models',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'translate',
    name: 'Translation',
    icon: '🌍',
    description: 'Translate text between languages',
    color: 'from-teal-500 to-teal-600'
  }
];

const ProcessingSteps = {
  code: [
    'Understanding your requirements...',
    'Selecting optimal programming approach...',
    'Generating clean, efficient code...',
    'Adding comments and documentation...',
    'Finalizing and optimizing...'
  ],
  text: [
    'Analyzing your prompt...',
    'Researching topic context...',
    'Structuring content outline...',
    'Writing engaging content...',
    'Polishing and formatting...'
  ],
  analysis: [
    'Loading your data...',
    'Identifying patterns and trends...',
    'Performing statistical analysis...',
    'Creating visualizations...',
    'Generating insights report...'
  ],
  image: [
    'Understanding image description...',
    'Selecting art style and composition...',
    'Generating base image structure...',
    'Adding details and refinements...',
    'Final rendering and enhancement...'
  ],
  chat: [
    'Processing your message...',
    'Accessing knowledge base...',
    'Formulating comprehensive response...',
    'Checking for accuracy...',
    'Delivering response...'
  ],
  translate: [
    'Detecting source language...',
    'Analyzing context and meaning...',
    'Applying translation algorithms...',
    'Ensuring cultural accuracy...',
    'Finalizing translation...'
  ]
};

export default function UniversalAIProcessor() {
  const [activeFeature, setActiveFeature] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const processAIRequest = async (featureId, input) => {
    setIsProcessing(true);
    setCurrentStep(0);
    setError('');
    
    const steps = ProcessingSteps[featureId] || ProcessingSteps.chat;
    
    try {
      // Process steps one by one
      for (let i = 0; i < steps.length; i++) {
        setCurrentStep(i);
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      // Make API call to your backend
      const response = await fetch('/api/ai-process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          feature: featureId,
          prompt: input
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setResult(data.result || 'Task completed successfully!');
      
    } catch (err) {
      setError(`${activeFeature.name} failed: ${err.message}`);
      console.error('API Error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFeatureClick = (feature) => {
    setActiveFeature(feature);
    setResult('');
    setError('');
    setUserInput('');
  };

  const handleSubmit = () => {
    if (!userInput.trim()) {
      setError('Please enter your request');
      return;
    }
    processAIRequest(activeFeature.id, userInput);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Search Everything AI</h1>
                <p className="text-gray-400 text-sm">Ultimate Everything Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <div className="text-center">
                <div className="text-xl font-bold">1M+</div>
                <div className="text-xs text-gray-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">50M+</div>
                <div className="text-xs text-gray-400">Tasks</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">100+</div>
                <div className="text-xs text-gray-400">Models</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {!activeFeature ? (
          // Feature Selection Grid
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose Your AI Tool
              </h2>
              <p className="text-xl text-gray-300">
                Access 100+ AI models through one powerful platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AIFeatures.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => handleFeatureClick(feature)}
                  className="group relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative p-8">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.name}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                    <div className="mt-6 inline-flex items-center text-blue-400 group-hover:text-blue-300">
                      <span className="mr-2">Start Now</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Feature Interface
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <button
                onClick={() => setActiveFeature(null)}
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-4"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back to Features
              </button>
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{activeFeature.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{activeFeature.name}</h2>
                  <p className="text-gray-400">{activeFeature.description}</p>
                </div>
              </div>
            </div>

            {/* Input Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-6">
              <label className="block text-white font-semibold mb-3">
                Enter your request:
              </label>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={`Describe what you want the AI to ${activeFeature.name.toLowerCase()}...`}
                className="w-full h-32 bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none"
              />
              <button
                onClick={handleSubmit}
                disabled={isProcessing}
                className={`mt-4 w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isProcessing 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : `bg-gradient-to-r ${activeFeature.color} hover:shadow-lg hover:shadow-blue-500/25`
                } text-white`}
              >
                {isProcessing ? 'Processing...' : `Generate with ${activeFeature.name}`}
              </button>
            </div>

            {/* Processing Animation - ONLY for selected feature */}
            {isProcessing && (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{activeFeature.icon}</span>
                    <h3 className="text-lg font-semibold text-white">
                      Processing {activeFeature.name}
                    </h3>
                  </div>
                  <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{Math.round(((currentStep + 1) / ProcessingSteps[activeFeature.id].length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / ProcessingSteps[activeFeature.id].length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {ProcessingSteps[activeFeature.id]?.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                        index < currentStep 
                          ? 'bg-green-500' 
                          : index === currentStep 
                          ? 'bg-blue-500 animate-pulse' 
                          : 'bg-gray-600'
                      }`}>
                        {index < currentStep && (
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                            <path d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z"/>
                          </svg>
                        )}
                      </div>
                      <span className={`text-sm ${
                        index < currentStep 
                          ? 'text-green-400' 
                          : index === currentStep 
                          ? 'text-white font-medium' 
                          : 'text-gray-500'
                      }`}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Error Display */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-6">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h3 className="text-red-400 font-semibold">Error</h3>
                    <p className="text-red-300">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Result Display */}
            {result && !isProcessing && (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Result</h3>
                  <button
                    onClick={() => navigator.clipboard.writeText(result)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm text-white transition-colors"
                  >
                    Copy
                  </button>
                </div>
                <pre className="whitespace-pre-wrap text-gray-300 bg-black/20 rounded-lg p-4 overflow-x-auto">
                  {result}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
