import React, { useState } from 'react';
import { Brain, Zap, Search, Image, Video, FileText, Code, BarChart, Workflow, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface TaskResult {
  id: string;
  type: string;
  title: string;
  status: 'processing' | 'completed' | 'error';
  progress: number;
  result?: any;
  timestamp: Date;
}

interface ProcessingEngineProps {
  query: string;
  onResults: (results: TaskResult[]) => void;
}

const ProcessingEngine: React.FC<ProcessingEngineProps> = ({ query, onResults }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<TaskResult[]>([]);

  const taskTypes = [
    { type: 'content', icon: FileText, label: 'Content Generation', capability: 'text' },
    { type: 'image', icon: Image, label: 'Image Creation', capability: 'visual' },
    { type: 'video', icon: Video, label: 'Video Production', capability: 'multimedia' },
    { type: 'code', icon: Code, label: 'Code Generation', capability: 'development' },
    { type: 'analysis', icon: BarChart, label: 'Data Analysis', capability: 'intelligence' },
    { type: 'automation', icon: Workflow, label: 'Workflow Creation', capability: 'automation' }
  ];

  // FIXED: Only detect ONE task instead of multiple
  const intelligentTaskRouting = (query: string): string => {
    const queryLower = query.toLowerCase();

    // Return the FIRST matching task only - no multiple tasks!
    if (queryLower.includes('image') || queryLower.includes('picture') || queryLower.includes('graphic') || queryLower.includes('design')) {
      return 'image';
    }
    if (queryLower.includes('code') || queryLower.includes('app') || queryLower.includes('website') || queryLower.includes('program')) {
      return 'code';
    }
    if (queryLower.includes('analyze') || queryLower.includes('research') || queryLower.includes('data') || queryLower.includes('report')) {
      return 'analysis';
    }
    if (queryLower.includes('video') || queryLower.includes('animation') || queryLower.includes('film')) {
      return 'video';
    }
    if (queryLower.includes('automate') || queryLower.includes('workflow') || queryLower.includes('schedule') || queryLower.includes('process')) {
      return 'automation';
    }
    if (queryLower.includes('write') || queryLower.includes('article') || queryLower.includes('blog') || queryLower.includes('content')) {
      return 'content';
    }

    // Default to content if no specific match
    return 'content';
  };

  const processTask = async (taskType: string): Promise<TaskResult> => {
    const task: TaskResult = {
      id: `${taskType}-${Date.now()}`,
      type: taskType,
      title: taskTypes.find(t => t.type === taskType)?.label || taskType,
      status: 'processing',
      progress: 0,
      timestamp: new Date()
    };

    // Update results immediately to show processing
    setResults([task]);

    // Simulate progressive processing
    for (let i = 0; i <= 100; i += 20) {
      await new Promise(resolve => setTimeout(resolve, 500));
      task.progress = i;
      setResults([{ ...task }]);
    }

    // Simulate task completion with mock results
    task.status = 'completed'; // Always succeed for demo
    task.progress = 100;
    task.result = generateMockResult(taskType, query);

    return task;
  };

  const generateMockResult = (taskType: string, query: string) => {
    switch (taskType) {
      case 'content':
        return {
          type: 'article',
          title: `Professional Article: ${query}`,
          excerpt: `Comprehensive analysis and insights generated for "${query}" with professional-grade content creation...`,
          wordCount: 1500,
          quality: 'Professional Grade'
        };
      case 'image':
        return {
          type: 'image',
          title: `AI Image: ${query}`,
          excerpt: `High-quality image generated for "${query}" with professional artistic style and composition...`,
          dimensions: '4K (3840x2160)',
          style: 'Professional',
          quality: 'Ultra High Resolution'
        };
      case 'video':
        return {
          type: 'video',
          title: `Video Production: ${query}`,
          excerpt: `Professional video content created for "${query}" with high-quality production values...`,
          duration: '2:30',
          resolution: '4K',
          quality: 'Professional Grade'
        };
      case 'code':
        return {
          type: 'application',
          title: `Code Solution: ${query}`,
          excerpt: `Complete code solution generated for "${query}" with modern best practices and documentation...`,
          language: 'TypeScript/React',
          lines: 250,
          quality: 'Production Ready'
        };
      case 'analysis':
        return {
          type: 'report',
          title: `Analysis Report: ${query}`,
          excerpt: `Comprehensive data analysis completed for "${query}" with statistical insights and recommendations...`,
          insights: 15,
          confidence: '94%',
          quality: 'Enterprise Grade'
        };
      case 'automation':
        return {
          type: 'workflow',
          title: `Automation Workflow: ${query}`,
          excerpt: `Intelligent automation solution designed for "${query}" with optimized efficiency and reliability...`,
          steps: 8,
          efficiency: '+300%',
          quality: 'Professional Grade'
        };
      default:
        return { 
          title: 'Task completed successfully',
          excerpt: `Your request for "${query}" has been processed successfully.`,
          quality: 'Professional Grade'
        };
    }
  };

  // FIXED: Process only ONE task instead of multiple
  const executeProcessing = async () => {
    setIsProcessing(true);
    
    // Get only ONE task instead of multiple
    const taskToProcess = intelligentTaskRouting(query);
    console.log(`Processing ONLY: ${taskToProcess} for query: ${query}`);
    
    try {
      // Process only the single detected task
      const processedTask = await processTask(taskToProcess);
      
      setResults([processedTask]);
      onResults([processedTask]);
      
    } catch (error) {
      console.error('Processing error:', error);
      const errorTask: TaskResult = {
        id: `error-${Date.now()}`,
        type: taskToProcess,
        title: `Error processing ${taskToProcess}`,
        status: 'error',
        progress: 0,
        result: { title: `Failed to process ${taskToProcess}: ${error.message}` },
        timestamp: new Date()
      };
      setResults([errorTask]);
      onResults([errorTask]);
    } finally {
      setIsProcessing(false);
    }
  };

  React.useEffect(() => {
    if (query) {
      executeProcessing();
    }
  }, [query]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="h-8 w-8 text-primary animate-glow" />
          <h2 className="text-2xl font-bold text-foreground">AI Processing Engine</h2>
        </div>
        <p className="text-muted-foreground">
          Processing your request with the most suitable AI capability
        </p>
        {/* Success indicator */}
        <div className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-lg mt-2">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
          <span className="text-green-400 text-sm font-medium">SINGLE TASK PROCESSING - FIXED</span>
        </div>
      </div>

      {results.length > 0 && (
        <div className="grid gap-6">
          {results.map((result) => {
            const taskType = taskTypes.find(t => t.type === result.type);
            const Icon = taskType?.icon || Brain;

            return (
              <div key={result.id} className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-foreground">{result.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {result.status === 'processing' && (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary" />
                    )}
                    {result.status === 'completed' && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    {result.status === 'error' && (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                    <span className="text-sm text-muted-foreground">
                      {result.status === 'processing' ? 'Processing...' : 
                       result.status === 'completed' ? 'Completed' : 'Error'}
                    </span>
                  </div>
                </div>

                <Progress value={result.progress} className="mb-4" />

                {result.result && result.status === 'completed' && (
                  <div className="bg-secondary/50 rounded-lg p-4 mt-4">
                    <h4 className="font-medium text-foreground mb-2">{result.result.title}</h4>
                    {result.result.excerpt && (
                      <p className="text-sm text-muted-foreground mb-2">{result.result.excerpt}</p>
                    )}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {result.result.wordCount && <span>Words: {result.result.wordCount}</span>}
                      {result.result.dimensions && <span>Size: {result.result.dimensions}</span>}
                      {result.result.duration && <span>Duration: {result.result.duration}</span>}
                      {result.result.language && <span>Language: {result.result.language}</span>}
                      {result.result.insights && <span>Insights: {result.result.insights}</span>}
                      {result.result.steps && <span>Steps: {result.result.steps}</span>}
                      {result.result.quality && <span className="text-primary font-medium">{result.result.quality}</span>}
                    </div>
                  </div>
                )}

                {result.status === 'error' && result.result && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-4">
                    <p className="text-destructive text-sm">{result.result.title}</p>
                  </div>
                )}

                {result.status === 'completed' && (
                  <div className="flex gap-2 mt-4">
                    <Button variant="professional" size="sm">
                      View Result
                    </Button>
                    <Button variant="outline" size="sm">
                      Export
                    </Button>
                    <Button variant="ghost" size="sm">
                      Refine
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {isProcessing && results.length === 0 && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
            <p className="text-lg font-medium text-foreground">Initializing AI Processing...</p>
            <p className="text-muted-foreground">Analyzing your request and preparing optimal solution</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessingEngine;
