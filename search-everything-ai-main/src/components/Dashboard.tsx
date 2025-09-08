import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  History, 
  Settings, 
  Brain, 
  Zap, 
  BarChart, 
  Palette, 
  Globe, 
  Briefcase,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ProcessingEngine from './ProcessingEngine';
import serachLogo from '@/assets/serach-logo.png';

interface TaskResult {
  id: string;
  type: string;
  title: string;
  status: 'processing' | 'completed' | 'error';
  progress: number;
  result?: any;
  timestamp: Date;
}

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<TaskResult[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('workspace');

  const sidebarItems = [
    { id: 'workspace', icon: Brain, label: 'Workspace', active: true },
    { id: 'create', icon: Plus, label: 'Create', active: false },
    { id: 'analyze', icon: BarChart, label: 'Analyze', active: false },
    { id: 'automate', icon: Zap, label: 'Automate', active: false },
    { id: 'design', icon: Palette, label: 'Design', active: false },
    { id: 'research', icon: Globe, label: 'Research', active: false },
    { id: 'business', icon: Briefcase, label: 'Business', active: false },
    { id: 'history', icon: History, label: 'History', active: false },
    { id: 'settings', icon: Settings, label: 'Settings', active: false }
  ];

  const recentProjects = [
    { id: 1, title: 'Marketing Campaign Analysis', type: 'Analysis', time: '2 hours ago' },
    { id: 2, title: 'Product Launch Video', type: 'Video', time: '5 hours ago' },
    { id: 3, title: 'Website Redesign Code', type: 'Development', time: '1 day ago' },
    { id: 4, title: 'Market Research Report', type: 'Research', time: '2 days ago' }
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    setIsProcessing(true);
  };

  const handleResults = (newResults: TaskResult[]) => {
    setResults(newResults);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-card border-r border-border flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <img src={serachLogo} alt="SERACH AI" className="w-8 h-8" />
            {sidebarOpen && (
              <span className="font-bold text-foreground">SERACH AI</span>
            )}
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </button>
            ))}
          </div>
        </nav>

        {/* Sidebar Toggle */}
        <div className="p-4 border-t border-border">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full"
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="flex items-center justify-between p-6">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Input
                  variant="professional"
                  placeholder="Search everything... Create, analyze, automate, design, research"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="pr-12"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleSearch}
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="hero">
                Upgrade to Pro
              </Button>
              <div className="w-8 h-8 bg-gradient-primary rounded-full" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          {isProcessing || results.length > 0 ? (
            <ProcessingEngine 
              query={searchQuery} 
              onResults={handleResults}
            />
          ) : (
            <div className="p-6">
              {/* Welcome Section */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Welcome to SERACH AI
                </h1>
                <p className="text-muted-foreground">
                  Your comprehensive AI platform for everything digital. What would you like to create today?
                </p>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-card border border-border rounded-xl p-6 cursor-pointer hover:shadow-card transition-all duration-300 group">
                  <Brain className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-2">Create Content</h3>
                  <p className="text-sm text-muted-foreground">Articles, images, videos, code</p>
                </div>

                <div className="bg-gradient-card border border-border rounded-xl p-6 cursor-pointer hover:shadow-card transition-all duration-300 group">
                  <BarChart className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-2">Analyze Data</h3>
                  <p className="text-sm text-muted-foreground">Research, insights, reports</p>
                </div>

                <div className="bg-gradient-card border border-border rounded-xl p-6 cursor-pointer hover:shadow-card transition-all duration-300 group">
                  <Zap className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-2">Automate Tasks</h3>
                  <p className="text-sm text-muted-foreground">Workflows, processes, scheduling</p>
                </div>

                <div className="bg-gradient-card border border-border rounded-xl p-6 cursor-pointer hover:shadow-card transition-all duration-300 group">
                  <Palette className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-2">Design Graphics</h3>
                  <p className="text-sm text-muted-foreground">Logos, branding, 3D models</p>
                </div>
              </div>

              {/* Recent Projects */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Recent Projects</h2>
                <div className="space-y-3">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="bg-card border border-border rounded-lg p-4 hover:bg-secondary/50 cursor-pointer transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-foreground">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.type}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{project.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Tasks Completed</h3>
                  <p className="text-3xl font-bold text-primary">1,247</p>
                  <p className="text-sm text-muted-foreground">+23% this month</p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Time Saved</h3>
                  <p className="text-3xl font-bold text-primary">342h</p>
                  <p className="text-sm text-muted-foreground">+45% efficiency</p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Quality Score</h3>
                  <p className="text-3xl font-bold text-primary">98.5%</p>
                  <p className="text-sm text-muted-foreground">Professional grade</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;