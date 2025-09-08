import React, { useState } from 'react';
import { Search, Mic, Upload, Sparkles, Zap, Brain, Globe, Camera } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchInterface = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const capabilities = [
    { icon: Brain, label: "Create Content", desc: "Articles, images, videos, code" },
    { icon: Zap, label: "Automate Tasks", desc: "Workflows, processes, scheduling" },
    { icon: Globe, label: "Research Everything", desc: "Market data, analysis, insights" },
    { icon: Camera, label: "Design & Media", desc: "Graphics, 3D models, animations" },
    { icon: Sparkles, label: "Business Tools", desc: "Finance, travel, productivity" },
    { icon: Search, label: "Intelligence", desc: "Analytics, predictions, optimization" }
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Gradient glow effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/4ce58f4f-38ce-4efb-9353-c1c5f3fe6abe.png"
            alt="SEARCH AI Logo" 
            className="w-10 h-10 animate-float"
          />
          <h1 className="text-2xl font-bold text-foreground">SEARCH AI</h1>
        </div>
        <Button variant="professional" size="lg">
          Sign In
        </Button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/4ce58f4f-38ce-4efb-9353-c1c5f3fe6abe.png"
              alt="SEARCH AI" 
              className="w-32 h-32 mx-auto animate-float mb-8"
            />
          </div>
          
          <h2 className="text-6xl font-bold text-foreground mb-6 leading-tight">
            The Ultimate
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Everything Platform
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            One Platform. Everything Possible. Create content, automate workflows, 
            research markets, design graphics, manage business operations, and more.
          </p>

          {/* Search Interface */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <Input
                variant="search"
                placeholder="What do you want to create, automate, or analyze today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="pr-20"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <Button size="icon" variant="ghost" className="h-12 w-12">
                  <Mic className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="h-12 w-12">
                  <Upload className="h-5 w-5" />
                </Button>
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handleSearch}
                  disabled={isProcessing}
                  className="h-12"
                >
                  {isProcessing ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  ) : (
                    <Search className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/50 transition-all duration-300 hover:shadow-card cursor-pointer"
              >
                <capability.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-foreground mb-2">{capability.label}</h3>
                <p className="text-sm text-muted-foreground">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Professional-Grade Capabilities
            </h3>
            <p className="text-lg text-muted-foreground">
              Enterprise-level tools for every digital task imaginable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-card">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">AI Content Studio</h4>
              <p className="text-muted-foreground">
                Generate professional content across all formats - text, images, videos, 
                3D models, code, and documents with enterprise-grade quality.
              </p>
            </div>

            <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-card">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Business Automation</h4>
              <p className="text-muted-foreground">
                Streamline operations with intelligent workflows, financial tools, 
                project management, and comprehensive business intelligence.
              </p>
            </div>

            <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-card">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Universal Intelligence</h4>
              <p className="text-muted-foreground">
                Advanced analytics, market research, predictive modeling, and 
                comprehensive insights across all industries and use cases.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border bg-card/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img src="/lovable-uploads/4ce58f4f-38ce-4efb-9353-c1c5f3fe6abe.png" alt="SEARCH AI" className="w-8 h-8" />
              <span className="text-lg font-semibold text-foreground">SEARCH AI</span>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              The world's most comprehensive AI platform.
              <br />
              One Platform. Everything Possible.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SearchInterface;