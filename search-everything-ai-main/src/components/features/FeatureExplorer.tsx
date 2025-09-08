'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { callAI, APIResponse } from '@/lib/api';
import { useAuth } from '@/components/auth/AuthProvider';
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
  Play,
  Download,
  Copy,
  RefreshCw,
  Wand2
} from 'lucide-react';

interface FeatureExplorerProps {
  isOpen: boolean;
  onClose: () => void;
  featureType: string | null;
  featureTitle: string;
}

const serviceTemplates = {
  content: {
    title: 'Content Creation',
    icon: Brain,
    prompts: [
      'Write a professional blog post about artificial intelligence trends',
      'Create a compelling product description for a tech startup',
      'Generate a creative short story about time travel',
      'Write a technical documentation guide for an API'
    ],
    parameters: {
      tone: ['Professional', 'Casual', 'Creative', 'Technical'],
      length: ['Short (100-300 words)', 'Medium (300-600 words)', 'Long (600+ words)'],
      style: ['Blog Post', 'Article', 'Social Media', 'Email', 'Report']
    }
  },
  analysis: {
    title: 'Data Analysis',
    icon: BarChart,
    prompts: [
      'Analyze market trends in the AI industry for 2024',
      'Create a SWOT analysis for a tech company',
      'Analyze customer feedback data and provide insights',
      'Generate a competitive analysis report'
    ],
    parameters: {
      analysisType: ['Market Analysis', 'SWOT Analysis', 'Trend Analysis', 'Competitive Analysis'],
      industry: ['Technology', 'Healthcare', 'Finance', 'Retail', 'Education'],
      dataScope: ['Current Year', 'Historical', 'Predictive', 'Comparative']
    }
  },
  code: {
    title: 'Code Generation',
    icon: Code,
    prompts: [
      'Create a React component for a user dashboard',
      'Generate a Python script for data analysis',
      'Build a REST API using Node.js and Express',
      'Create a responsive CSS layout with Tailwind'
    ],
    parameters: {
      language: ['JavaScript/TypeScript', 'Python', 'Java', 'PHP', 'Go', 'C#'],
      framework: ['React', 'Vue', 'Angular', 'Express', 'Django', 'Spring'],
      complexity: ['Beginner', 'Intermediate', 'Advanced']
    }
  },
  design: {
    title: 'Design Graphics',
    icon: Palette,
    prompts: [
      'Design a modern logo for a tech startup',
      'Create a social media banner for a product launch',
      'Design a professional business card layout',
      'Generate a website header design concept'
    ],
    parameters: {
      style: ['Modern', 'Minimalist', 'Corporate', 'Creative', 'Retro'],
      colorScheme: ['Blue & White', 'Black & Gold', 'Colorful', 'Monochrome', 'Brand Colors'],
      format: ['Logo', 'Banner', 'Poster', 'Card', 'Icon']
    }
  },
  image: {
    title: 'AI Image Generator',
    icon: Sparkles,
    prompts: [
      'Generate a professional headshot for business use',
      'Create a futuristic cityscape with flying cars',
      'Design a product mockup for a mobile app',
      'Generate an abstract art piece with vibrant colors'
    ],
    parameters: {
      style: ['Realistic', 'Artistic', 'Abstract', 'Cartoon', 'Professional'],
      size: ['Square (1024x1024)', 'Portrait (1024x1536)', 'Landscape (1536x1024)'],
      quality: ['Standard', 'High Definition', 'Ultra HD']
    }
  }
};

export function FeatureExplorer({ isOpen, onClose, featureType, featureTitle }: FeatureExplorerProps) {
  const [prompt, setPrompt] = useState('');
  const [parameters, setParameters] = useState<Record<string, string>>({});
  const [result, setResult] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { user } = useAuth();

  const template = featureType ? serviceTemplates[featureType as keyof typeof serviceTemplates] : null;

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt');
      return;
    }

    if (!user) {
      toast.error('Please sign in to use AI features');
      return;
    }

    if (!featureType) {
      toast.error('Invalid feature type');
      return;
    }

    setIsProcessing(true);
    setResult(null);

    try {
      const response = await callAI(prompt, 'openai');

      if (response.success) {
        setResult(response.data);
        toast.success('Generation completed successfully!');
      } else {
        toast.error(response.error || 'Generation failed');
      }
    } catch (error) {
      console.error('Generation error:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleUseTemplate = (templatePrompt: string) => {
    setPrompt(templatePrompt);
  };

  const handleCopyResult = () => {
    if (result) {
      const text = typeof result === 'string' ? result : JSON.stringify(result, null, 2);
      navigator.clipboard.writeText(text);
      toast.success('Result copied to clipboard!');
    }
  };

  const handleDownloadResult = () => {
    if (result) {
      const text = typeof result === 'string' ? result : JSON.stringify(result, null, 2);
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${featureType}-result.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success('Result downloaded!');
    }
  };

  if (!template) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Feature Not Available</DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground">This feature is not yet available. Please try another feature.</p>
          <Button onClick={onClose} className="mt-4">Close</Button>
        </DialogContent>
      </Dialog>
    );
  }

  const IconComponent = template.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <IconComponent className="h-6 w-6 text-primary-foreground" />
            </div>
            {template.title} Explorer
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5" />
                  Prompt & Parameters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="prompt">Your Prompt</Label>
                  <Textarea
                    id="prompt"
                    placeholder={`Describe what you want to ${template.title.toLowerCase()}...`}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Dynamic Parameters */}
                {Object.entries(template.parameters).map(([key, options]) => (
                  <div key={key}>
                    <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                    <Select onValueChange={(value) => setParameters(prev => ({ ...prev, [key]: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder={`Select ${key}...`} />
                      </SelectTrigger>
                      <SelectContent>
                        {options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ))}

                <Button 
                  onClick={handleGenerate} 
                  disabled={isProcessing || !prompt.trim()}
                  className="w-full"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Generate
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Template Prompts */}
            <Card>
              <CardHeader>
                <CardTitle>Template Prompts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {template.prompts.map((templatePrompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="text-left h-auto p-3 justify-start"
                      onClick={() => handleUseTemplate(templatePrompt)}
                    >
                      <div className="text-sm">{templatePrompt}</div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Result Section */}
          <div className="space-y-6">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Generated Result</span>
                  {result && (
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleCopyResult}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleDownloadResult}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setResult(null)}
                      >
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isProcessing ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Generating your content...</p>
                    </div>
                  </div>
                ) : result ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="default">Generated</Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date().toLocaleTimeString()}
                      </span>
                    </div>
                    <Separator />
                    
                    {/* Render different result types */}
                    {featureType === 'image' && result.imageUrl ? (
                      <div className="text-center">
                        <img 
                          src={result.imageUrl} 
                          alt="Generated image" 
                          className="max-w-full h-auto rounded-lg mx-auto"
                        />
                        <p className="text-sm text-muted-foreground mt-2">
                          Prompt: {result.prompt}
                        </p>
                      </div>
                    ) : featureType === 'audio' && result.audioUrl ? (
                      <div className="text-center">
                        <audio controls className="w-full mb-2">
                          <source src={result.audioUrl} type="audio/mpeg" />
                        </audio>
                        <p className="text-sm text-muted-foreground">
                          Text: {result.text}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-secondary/50 rounded-lg p-4">
                        <pre className="text-sm whitespace-pre-wrap max-h-96 overflow-y-auto">
                          {typeof result === 'string' ? result : JSON.stringify(result, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center py-12 text-muted-foreground">
                    <div className="text-center">
                      <IconComponent className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Enter a prompt and click Generate to see results here</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-between items-center pt-4 border-t">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <IconComponent className="h-4 w-4" />
            <span>{template.title}</span>
          </div>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}