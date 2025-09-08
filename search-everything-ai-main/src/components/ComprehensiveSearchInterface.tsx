import React, { useState } from 'react';
import { 
  Search, 
  Mic, 
  Upload, 
  Camera, 
  FileText, 
  Video, 
  Music, 
  Code, 
  Brain,
  Sparkles,
  Globe,
  TrendingUp,
  Zap
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ComprehensiveSearchInterface = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMode, setActiveMode] = useState('universal');

  const searchModes = [
    { id: 'universal', label: 'Universal', icon: Search, color: 'text-primary' },
    { id: 'create', label: 'Create', icon: Brain, color: 'text-blue-400' },
    { id: 'analyze', label: 'Analyze', icon: TrendingUp, color: 'text-green-400' },
    { id: 'automate', label: 'Automate', icon: Zap, color: 'text-yellow-400' },
    { id: 'research', label: 'Research', icon: Globe, color: 'text-purple-400' }
  ];

  const quickActions = [
    { icon: FileText, label: "Write Article", query: "Write a professional article about" },
    { icon: Code, label: "Generate Code", query: "Create a web application that" },
    { icon: Video, label: "Create Video", query: "Produce a marketing video for" },
    { icon: Camera, label: "Design Graphics", query: "Design professional graphics for" },
    { icon: Music, label: "Compose Music", query: "Create background music for" },
    { icon: Brain, label: "AI Analysis", query: "Analyze and provide insights on" }
  ];

  const searchSuggestions = [
    "Create a comprehensive marketing campaign for my new product launch",
    "Analyze market trends and competitor strategies in the tech industry",
    "Generate a fully functional e-commerce website with payment integration",
    "Design a complete brand identity including logo, colors, and guidelines",
    "Automate my social media posting schedule across all platforms",
    "Research and write a detailed business plan for my startup idea",
    "Create a 3D product visualization and animated presentation",
    "Develop a mobile app with user authentication and database",
    "Write and produce a professional training video series",
    "Build automated workflows for customer support and sales"
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    // Processing will be handled by parent component
  };

  const handleQuickAction = (query: string) => {
    setSearchQuery(query + " ");
  };

  const handleSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Search Mode Tabs */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {searchModes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setActiveMode(mode.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
              activeMode === mode.id
                ? 'bg-primary text-primary-foreground shadow-glow'
                : 'bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground'
            }`}
          >
            <mode.icon className={`h-4 w-4 ${activeMode === mode.id ? 'text-primary-foreground' : mode.color}`} />
            <span className="font-medium">{mode.label}</span>
          </button>
        ))}
      </div>

      {/* Main Search Interface */}
      <div className="relative mb-8">
        <div className="relative group">
          <Input
            variant="search"
            placeholder="What would you like to create, analyze, automate, or accomplish today?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="h-20 text-lg pr-32 pl-6 rounded-2xl border-2 border-border/50 focus:border-primary bg-card/50 backdrop-blur-sm"
          />
          
          {/* Input Icons */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <Button size="icon" variant="ghost" className="h-12 w-12 hover:bg-primary/10">
              <Mic className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-12 w-12 hover:bg-primary/10">
              <Upload className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-12 w-12 hover:bg-primary/10">
              <Camera className="h-5 w-5" />
            </Button>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleSearch}
              className="h-12 px-6"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Character Counter */}
        <div className="absolute -bottom-6 right-4 text-xs text-muted-foreground">
          {searchQuery.length}/500 characters
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {quickActions.map((action, index) => (
          <button
            key={index}
            onClick={() => handleQuickAction(action.query)}
            className="group bg-card/30 border border-border rounded-xl p-4 hover:bg-card/60 hover:shadow-card transition-all duration-300 text-center"
          >
            <action.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-sm font-medium text-foreground">{action.label}</p>
          </button>
        ))}
      </div>

      {/* Search Suggestions */}
      <div className="bg-gradient-card border border-border rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Sparkles className="h-5 w-5 text-primary mr-2" />
          Popular Requests
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {searchSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestion(suggestion)}
              className="text-left p-3 rounded-lg bg-card/30 hover:bg-card/60 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <p className="text-sm text-muted-foreground group-hover:text-foreground">
                {suggestion}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Advanced Options */}
      <div className="mt-8 text-center">
        <details className="group">
          <summary className="cursor-pointer text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
            <span>Advanced Search Options</span>
            <div className="group-open:rotate-180 transition-transform duration-300">
              ▼
            </div>
          </summary>
          
          <div className="mt-6 bg-card/30 border border-border rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Output Format</h4>
                <div className="space-y-2">
                  {['Text', 'Image', 'Video', 'Audio', 'Code', 'Document'].map((format) => (
                    <label key={format} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-muted-foreground">{format}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Quality Level</h4>
                <div className="space-y-2">
                  {['Standard', 'Professional', 'Premium', 'Enterprise'].map((quality) => (
                    <label key={quality} className="flex items-center">
                      <input type="radio" name="quality" className="mr-2" />
                      <span className="text-sm text-muted-foreground">{quality}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Processing Speed</h4>
                <div className="space-y-2">
                  {['Fast', 'Balanced', 'Quality Focused'].map((speed) => (
                    <label key={speed} className="flex items-center">
                      <input type="radio" name="speed" className="mr-2" />
                      <span className="text-sm text-muted-foreground">{speed}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default ComprehensiveSearchInterface;