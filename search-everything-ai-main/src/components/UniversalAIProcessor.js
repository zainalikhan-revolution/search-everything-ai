// In your main dashboard/page component
import { useState } from 'react';
import UniversalAIProcessor from '../components/UniversalAIProcessor';

export default function Dashboard() {
  const [processorOpen, setProcessorOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [taskData, setTaskData] = useState(null);

  // Handle feature clicks
  const handleFeatureClick = (featureType, data = {}) => {
    setCurrentTask(featureType);
    setTaskData(data);
    setProcessorOpen(true);
  };

  const handleProcessorComplete = (result) => {
    // Handle the result based on task type
    console.log('Task completed:', result);
    // You can redirect to results page, show results, etc.
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">SEARCH AI Platform</h1>
        
        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Code Generation */}
          <div 
            onClick={() => handleFeatureClick('code-generation', { 
              prompt: 'Generate code based on user requirements' 
            })}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">💻</span>
              <h3 className="text-xl font-semibold">Code Generation</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Full-stack development, APIs, mobile apps, automation scripts
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Generate Code
            </button>
          </div>

          {/* Content Creation */}
          <div 
            onClick={() => handleFeatureClick('content-creation', { 
              type: 'article',
              topic: 'User specified topic'
            })}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">✍️</span>
              <h3 className="text-xl font-semibold">Content Creation</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Articles, images, videos, code, creative writing, business documents
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Create Content
            </button>
          </div>

          {/* Data Analysis */}
          <div 
            onClick={() => handleFeatureClick('data-analysis', { 
              dataType: 'business',
              analysis: 'comprehensive'
            })}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">📊</span>
              <h3 className="text-xl font-semibold">Data Analysis</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Business analytics, market research, financial analysis, predictive modeling
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Analyze Data
            </button>
          </div>

          {/* Image Generation */}
          <div 
            onClick={() => handleFeatureClick('image-generation', { 
              prompt: 'Generate image based on description',
              style: 'professional'
            })}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">🎨</span>
              <h3 className="text-xl font-semibold">AI Image Generator</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Text-to-image generation, style selection, image gallery, creative visuals
            </p>
            <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
              Generate Image
            </button>
          </div>

          {/* Marketing Campaigns */}
          <div 
            onClick={() => handleFeatureClick('marketing-campaigns', { 
              business: 'user business',
              goal: 'increase engagement'
            })}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">📈</span>
              <h3 className="text-xl font-semibold">Marketing Campaigns</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Complete marketing strategies, SEO, advertising, email campaigns
            </p>
            <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
              Create Campaign
            </button>
          </div>

          {/* Video Production */}
          <div 
            onClick={() => handleFeatureClick('video-production', { 
              type: 'promotional',
              duration: '30 seconds'
            })}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">🎬</span>
              <h3 className="text-xl font-semibold">Video Production</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Video editing, animation, live streaming, promotional content
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Create Video
            </button>
          </div>

        </div>
      </div>

      {/* Universal AI Processor */}
      <UniversalAIProcessor
        isOpen={processorOpen}
        onClose={() => setProcessorOpen(false)}
        taskType={currentTask}
        taskData={taskData}
        onComplete={handleProcessorComplete}
      />
    </div>
  );
}
