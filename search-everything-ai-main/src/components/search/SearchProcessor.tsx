'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { callAI, performSearch, APIResponse } from '@/lib/api';
import { useAuth } from '@/components/auth/AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  Brain, 
  BarChart, 
  Code, 
  Palette, 
  Target, 
  Settings,
  Globe,
  Sparkles,
  CreditCard,
  Heart,
  GraduationCap,
  MessageSquare,
  Video,
  Music,
  Languages,
  FileText,
  Home,
  ShoppingCart,
  Download,
  Copy,
  Share2,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';

interface SearchProcessorProps {
  isOpen: boolean;
  onClose: () => void;
  query: string;
}

interface ProcessingTask {
  id: string;
  service: string;
  title: string;
  icon: React.ComponentType<any>;
  progress: number;
  status: 'pending' | 'processing' | 'completed' | 'error';
  result?: any;
  error?: string;
}

const serviceConfig = {
  content: { title: 'Content Creation', icon: Brain, color: 'bg-blue-500' },
  analysis: { title: 'Data Analysis', icon: BarChart, color: 'bg-green-500' },
  code: { title: 'Code Generation', icon: Code, color: 'bg-purple-500' },
  design: { title: 'Design Graphics', icon: Palette, color: 'bg-pink-500' },
  marketing: { title: 'Marketing Campaigns', icon: Target, color: 'bg-orange-500' },
  automation: { title: 'Business Automation', icon: Settings, color: 'bg-red-500' },
  research: { title: 'Research & Insights', icon: Globe, color: 'bg-cyan-500' },
  image: { title: 'AI Image Generator', icon: Sparkles, color: 'bg-blue-600' },
  finance: { title: 'Finance Management', icon: CreditCard, color: 'bg-emerald-500' },
  health: { title: 'Health & Wellness', icon: Heart, color: 'bg-green-600' },
  education: { title: 'Education & Learning', icon: GraduationCap, color: 'bg-yellow-500' },
  communication: { title: 'Communication & Social', icon: MessageSquare, color: 'bg-orange-600' },
  video: { title: 'Video Production', icon: Video, color: 'bg-red-600' },
  audio: { title: 'Audio Processing', icon: Music, color: 'bg-pink-600' },
  translation: { title: 'Translation Services', icon: Languages, color: 'bg-purple-600' },
  legal: { title: 'Legal Documents', icon: FileText, color: 'bg-indigo-500' },
  realestate: { title: 'Real Estate Analysis', icon: Home, color: 'bg-blue-700' },
  ecommerce: { title: 'E-commerce Solutions', icon: ShoppingCart, color: 'bg-cyan-600' },
  chat: { title: 'AI Chat Interface', icon: MessageSquare, color: 'bg-teal-500' },
  codeplayground: { title: 'Code Playground', icon: Code, color: 'bg-emerald-600' },
  document: { title: 'Document AI Processor', icon: FileText, color: 'bg-green-700' },
  visualization: { title: 'Data Visualization Hub', icon: BarChart, color: 'bg-lime-500' },
  videocreator: { title: 'Video/Audio AI Creator', icon: Video, color: 'bg-yellow-600' },
  socialmedia: { title: 'Social Media Manager', icon: Target, color: 'bg-orange-700' },
};

export function SearchProcessor({ isOpen, onClose, query }: SearchProcessorProps) {
  const [tasks, setTasks] = useState<ProcessingTask[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    if (isOpen && query.trim()) {
      initializeProcessing();
    }
  }, [isOpen, query]);

  const initializeProcessing = () => {
    const services = ['content', 'analysis']; // Simplified routing
    const newTasks: ProcessingTask[] = services.map((service, index) => ({
      id: `task-${index}`,
      service,
      title: serviceConfig[service]?.title || service,
      icon: serviceConfig[service]?.icon || Brain,
      progress: 0,
      status: 'pending',
    }));

    setTasks(newTasks);
    setIsProcessing(true);
    setCompletedTasks(0);

    // Start processing tasks
    processAllTasks(newTasks);
  };

  const processAllTasks = async (tasksToProcess: ProcessingTask[]) => {
    for (let i = 0; i < tasksToProcess.length; i++) {
      await processTask(tasksToProcess[i], i);
      await new Promise(resolve => setTimeout(resolve, 500)); // Slight delay between tasks
    }
    setIsProcessing(false);
    
    // Track usage
    if (user) {
      await trackUsage(tasksToProcess.length);
    }
  };

  const processTask = async (task: ProcessingTask, index: number) => {
    // Update task to processing
    setTasks(prev => prev.map(t => 
      t.id === task.id 
        ? { ...t, status: 'processing', progress: 10 }
        : t
    ));

    // Simulate progress updates
    const progressInterval = setInterval(() => {
      setTasks(prev => prev.map(t => 
        t.id === task.id && t.status === 'processing'
          ? { ...t, progress: Math.min(t.progress + Math.random() * 20, 90) }
          : t
      ));
    }, 300);

    try {
      console.log('🚀 Processing task:', task.service, 'with query:', query);
      
      // Make actual AI API call
      const response = await callAI(query, 'openai');

      console.log('📨 API Response:', response);
      clearInterval(progressInterval);

      if (response.success) {
        // Log successful generation (only if user is signed in)
        try {
          if (user) {
            await supabase.from('ai_generations').insert({
              user_id: user.id,
              prompt: query,
              response: JSON.stringify(response.data),
              model_used: getModelForService(task.service),
              task_type: task.service,
              tokens_used: 0, // response.tokensUsed || 0,
              cost_usd: 0, // response.cost || 0,
              success: true,
            });
          }
        } catch (dbError) {
          console.warn('Failed to log to database:', dbError);
          // Don't fail the task if DB logging fails
        }

        setTasks(prev => prev.map(t => 
          t.id === task.id 
            ? { ...t, status: 'completed', progress: 100, result: response.data }
            : t
        ));
        setCompletedTasks(prev => prev + 1);
        
        // Show success toast
        toast.success(`${task.title} completed successfully!`);
      } else {
        // Log failed generation (only if user is signed in)
        try {
          if (user) {
            await supabase.from('ai_generations').insert({
              user_id: user.id,
              prompt: query,
              model_used: getModelForService(task.service),
              task_type: task.service,
              success: false,
              error_message: response.error || 'Unknown error',
            });
          }
        } catch (dbError) {
          console.warn('Failed to log error to database:', dbError);
        }

        const errorMessage = response.error || 'Processing failed';
        console.error('❌ Task failed:', task.service, errorMessage);
        
        setTasks(prev => prev.map(t => 
          t.id === task.id 
            ? { ...t, status: 'error', progress: 100, error: errorMessage }
            : t
        ));
        
        // Show error toast
        toast.error(`${task.title} failed: ${errorMessage}`);
      }
    } catch (error) {
      clearInterval(progressInterval);
      const errorMessage = error instanceof Error ? error.message : 'Network error occurred';
      console.error('💥 Task processing error:', error);
      
      setTasks(prev => prev.map(t => 
        t.id === task.id 
          ? { ...t, status: 'error', progress: 100, error: errorMessage }
          : t
      ));
      
      // Show error toast
      toast.error(`${task.title} failed: ${errorMessage}`);
    }
  };

  const trackUsage = async (taskCount: number) => {
    if (!user) return;
    
    try {
      // Update user subscription usage
      const { data: subscription } = await supabase
        .from('user_subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (subscription) {
        const newTasksUsed = subscription.tasks_used + taskCount;
        
        if (newTasksUsed > subscription.tasks_limit) {
          toast.error('Task limit exceeded! Please upgrade your plan.');
          return;
        }

        await supabase
          .from('user_subscriptions')
          .update({ tasks_used: newTasksUsed })
          .eq('user_id', user.id);
      }
    } catch (error) {
      console.error('Error tracking usage:', error);
    }
  };

  const getModelForService = (service: string): string => {
    const modelMap: Record<string, string> = {
      content: 'openai/gpt-4-turbo',
      analysis: 'anthropic/claude-3-5-sonnet-20241022',
      code: 'openai/gpt-4-turbo',
      design: 'openai/dall-e-3',
      marketing: 'openai/gpt-4-turbo',
      automation: 'anthropic/claude-3-5-sonnet-20241022',
      research: 'anthropic/claude-3-5-sonnet-20241022',
      image: 'openai/dall-e-3',
      finance: 'openai/gpt-4-turbo',
      health: 'openai/gpt-4-turbo',
      education: 'openai/gpt-4-turbo',
      communication: 'openai/gpt-4-turbo',
      video: 'openai/gpt-4-turbo',
      audio: 'elevenlabs/eleven_multilingual_v2',
      translation: 'openai/gpt-4-turbo',
      legal: 'anthropic/claude-3-5-sonnet-20241022',
      realestate: 'openai/gpt-4-turbo',
      ecommerce: 'openai/gpt-4-turbo',
      chat: 'openai/gpt-4-turbo',
      codeplayground: 'openai/gpt-4-turbo',
      document: 'anthropic/claude-3-5-sonnet-20241022',
      visualization: 'openai/gpt-4-turbo',
      videocreator: 'openai/gpt-4-turbo',
      socialmedia: 'openai/gpt-4-turbo',
    };
    return modelMap[service] || 'openai/gpt-4-turbo';
  };

  const handleCopyResult = (result: any) => {
    const text = typeof result === 'string' ? result : JSON.stringify(result, null, 2);
    navigator.clipboard.writeText(text);
    toast.success('Result copied to clipboard!');
  };

  const handleRetryTask = (task: ProcessingTask) => {
    processTask(task, 0);
  };

  const overallProgress = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            AI Processing: {query}
          </DialogTitle>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Overall Progress</span>
              <span>{Math.round(overallProgress)}%</span>
            </div>
            <Progress value={overallProgress} className="w-full" />
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {tasks.map((task) => {
            const config = serviceConfig[task.service];
            const IconComponent = task.icon;
            
            return (
              <div key={task.id} className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${config?.color || 'bg-primary'}`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{task.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {task.status === 'pending' && (
                          <Badge variant="secondary" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            Pending
                          </Badge>
                        )}
                        {task.status === 'processing' && (
                          <Badge variant="default" className="text-xs">
                            <div className="animate-spin rounded-full h-3 w-3 border-b border-white mr-1" />
                            Processing
                          </Badge>
                        )}
                        {task.status === 'completed' && (
                          <Badge variant="default" className="text-xs bg-green-600">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                        )}
                        {task.status === 'error' && (
                          <Badge variant="destructive" className="text-xs">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Error
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {task.status === 'error' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleRetryTask(task)}
                    >
                      <RefreshCw className="h-4 w-4 mr-1" />
                      Retry
                    </Button>
                  )}
                </div>

                {(task.status === 'processing' || task.status === 'completed') && (
                  <div className="mb-3">
                    <Progress value={task.progress} className="w-full h-2" />
                  </div>
                )}

                {task.error && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 mb-3">
                    <p className="text-sm text-destructive">{task.error}</p>
                  </div>
                )}

                {task.result && (
                  <div className="bg-secondary/50 rounded-lg p-4 mt-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Result</span>
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleCopyResult(task.result)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Separator className="mb-3" />
                    
                    {/* Render different result types */}
                    {task.service === 'image' && task.result.imageUrl ? (
                      <div className="text-center">
                        <img 
                          src={task.result.imageUrl} 
                          alt="Generated image" 
                          className="max-w-full h-auto rounded-lg mx-auto"
                        />
                        <p className="text-sm text-muted-foreground mt-2">
                          Prompt: {task.result.prompt}
                        </p>
                      </div>
                    ) : task.service === 'audio' && task.result.audioUrl ? (
                      <div className="text-center">
                        <audio controls className="w-full">
                          <source src={task.result.audioUrl} type="audio/mpeg" />
                        </audio>
                        <p className="text-sm text-muted-foreground mt-2">
                          Text: {task.result.text}
                        </p>
                      </div>
                    ) : (
                      <div className="text-sm text-foreground whitespace-pre-wrap max-h-48 overflow-y-auto">
                        {typeof task.result === 'string' ? task.result : JSON.stringify(task.result, null, 2)}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <div className="text-sm text-muted-foreground">
            {completedTasks} of {tasks.length} tasks completed
          </div>
          <div className="flex gap-2">
            {!isProcessing && completedTasks > 0 && (
              <Button variant="outline" onClick={() => initializeProcessing()}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Regenerate All
              </Button>
            )}
            <Button variant="outline" onClick={onClose}>
              {isProcessing ? 'Cancel' : 'Close'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}