import React, { useState } from 'react';
import { 
  Search, 
  Mic, 
  Upload, 
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Brain,
  BarChart3,
  Code,
  Palette,
  Target,
  Settings,
  Globe,
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
  Crown,
  Zap,
  Building,
  Star,
  Check,
  Menu,
  X,
  ChevronRight,
  Users,
  Award,
  TrendingUp,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AuthDialog } from '@/components/auth/AuthDialog';
import { SearchProcessor } from '@/components/search/SearchProcessor';
import { useAuth } from '@/components/auth/AuthProvider';
import { toast } from 'sonner';

const ComprehensivePlatform = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [processorDialogOpen, setProcessorDialogOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'signin' | 'signup'>('signin');
  
  const { user, signOut } = useAuth();

  // 24 Major Feature Categories (6x4 Grid)
  const majorFeatures = [
    {
      icon: Brain,
      title: "Content Creation",
      description: "Articles, images, videos, code, creative writing, business documents",
      capabilities: [
        "Professional Article Writing & Blog Posts",
        "Creative Writing: Stories, Scripts, Poems", 
        "Business Documents: Proposals, Reports, Presentations",
        "Social Media Content & Marketing Copy",
        "Technical Documentation & Manuals"
      ],
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Business analytics, market research, financial analysis, predictive modeling",
      capabilities: [
        "Business Analytics & KPI Dashboards",
        "Market Research & Competitor Analysis",
        "Financial Analysis & Investment Research",
        "Statistical Analysis & Data Interpretation",
        "Predictive Modeling & Trend Forecasting"
      ],
      color: "from-green-500/20 to-blue-500/20"
    },
    {
      icon: Code,
      title: "Code Generation",
      description: "Full-stack development, APIs, mobile apps, automation scripts",
      capabilities: [
        "Web Development: React, Vue, Angular",
        "Backend Development: Node.js, Python, Java",
        "Mobile App Development: iOS & Android",
        "API Development & Database Design",
        "DevOps & Automation Scripts"
      ],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Palette,
      title: "Design Graphics",
      description: "Logos, branding, UI/UX, 3D modeling, marketing materials",
      capabilities: [
        "Logo Design & Brand Identity Systems",
        "UI/UX Design & Prototyping",
        "3D Modeling & Product Visualization",
        "Marketing Graphics & Social Media Assets",
        "Print Design & Presentation Templates"
      ],
      color: "from-pink-500/20 to-orange-500/20"
    },
    {
      icon: Target,
      title: "Marketing Campaigns",
      description: "Complete marketing strategies, SEO, advertising, email campaigns",
      capabilities: [
        "Digital Marketing Strategy & Planning",
        "SEO Optimization & Content Marketing",
        "Email Marketing Automation & Campaigns",
        "Social Media Management & Advertising",
        "Brand Positioning & Customer Acquisition"
      ],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Settings,
      title: "Business Automation",
      description: "Workflow optimization, CRM, project management, process automation",
      capabilities: [
        "Workflow Automation & Process Optimization",
        "CRM & Customer Relationship Management",
        "Project Management & Team Coordination",
        "Inventory Management & Supply Chain",
        "Financial Management & Accounting Automation"
      ],
      color: "from-red-500/20 to-blue-500/20"
    },
    {
      icon: Globe,
      title: "Research & Insights",
      description: "Market research, competitive analysis, academic research, trend analysis",
      capabilities: [
        "Market Research & Industry Analysis",
        "Competitive Intelligence & Benchmarking",
        "Academic Research & Literature Reviews",
        "Consumer Behavior & Trend Analysis",
        "Patent Research & IP Intelligence"
      ],
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: Sparkles,
      title: "AI Image Generator",
      description: "Text-to-image generation, style selection, image gallery, creative visuals",
      capabilities: [
        "High-Quality Text-to-Image Generation",
        "Multiple Art Styles & Creative Filters",
        "Image Gallery & Asset Management",
        "Custom Resolution & Format Options",
        "Batch Generation & Editing Tools"
      ],
      color: "from-blue-500/20 to-teal-500/20"
    },
    {
      icon: CreditCard,
      title: "Finance Management",
      description: "Financial planning, investment analysis, budgeting, risk assessment",
      capabilities: [
        "Personal & Business Budget Planning",
        "Investment Analysis & Portfolio Management",
        "Risk Assessment & Financial Modeling",
        "Tax Planning & Compliance",
        "Insurance Analysis & Recommendations"
      ],
      color: "from-emerald-500/20 to-green-500/20"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Fitness planning, nutrition, mental health, medical research",
      capabilities: [
        "Personalized Fitness Plans & Tracking",
        "Nutrition Analysis & Meal Planning",
        "Mental Health & Wellness Coaching",
        "Medical Research & Health Information",
        "Telemedicine & Health Monitoring"
      ],
      color: "from-green-500/20 to-lime-500/20"
    },
    {
      icon: GraduationCap,
      title: "Education & Learning",
      description: "Course creation, tutoring, skill development, academic support",
      capabilities: [
        "Course Creation & Curriculum Development",
        "Personalized Learning & Tutoring",
        "Skill Assessment & Development Plans",
        "Academic Writing & Research Support",
        "Corporate Training & Development"
      ],
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: MessageSquare,
      title: "Communication & Social",
      description: "Social media management, PR, community building, networking",
      capabilities: [
        "Social Media Strategy & Management",
        "Public Relations & Media Outreach",
        "Community Building & Engagement",
        "Internal Communications & HR",
        "Customer Support & Service Automation"
      ],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Video editing, animation, live streaming, promotional content",
      capabilities: [
        "Professional Video Editing & Post-Production",
        "2D/3D Animation & Motion Graphics",
        "Live Streaming & Broadcasting Setup",
        "Promotional Video & Advertisement Creation",
        "Training Video & Educational Content"
      ],
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      icon: Music,
      title: "Audio Processing",
      description: "Music production, podcast creation, voice synthesis, audio enhancement",
      capabilities: [
        "Music Composition & Production",
        "Podcast Creation & Audio Editing",
        "Voice Synthesis & Audio Cloning",
        "Sound Design & Audio Enhancement",
        "Audio Transcription & Analysis"
      ],
      color: "from-pink-500/20 to-purple-500/20"
    },
    {
      icon: Languages,
      title: "Translation Services",
      description: "Professional translation, localization, cultural adaptation",
      capabilities: [
        "Document Translation & Localization",
        "Real-time Language Interpretation",
        "Cultural Adaptation & Context Analysis",
        "Multilingual Content Creation",
        "Language Learning & Training Materials"
      ],
      color: "from-purple-500/20 to-indigo-500/20"
    },
    {
      icon: FileText,
      title: "Legal Documents",
      description: "Contract analysis, legal research, compliance, document drafting",
      capabilities: [
        "Contract Review & Analysis",
        "Legal Document Drafting & Templates",
        "Compliance & Regulatory Analysis",
        "Intellectual Property Research",
        "Legal Research & Case Analysis"
      ],
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      icon: Home,
      title: "Real Estate Analysis",
      description: "Property valuation, market analysis, investment research",
      capabilities: [
        "Property Valuation & Market Analysis",
        "Real Estate Investment Research",
        "Market Trends & Forecasting",
        "Property Management & Documentation",
        "Mortgage & Financing Analysis"
      ],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Online store development, product management, sales optimization",
      capabilities: [
        "E-commerce Platform Development",
        "Product Catalog & Inventory Management",
        "Payment Processing & Security",
        "Sales Analytics & Optimization",
        "Customer Experience & Conversion"
      ],
      color: "from-cyan-500/20 to-teal-500/20"
    },
    {
      icon: MessageSquare,
      title: "Advanced AI Chat Interface",
      description: "Multi-model conversations, file uploads, chat templates, context memory",
      capabilities: [
        "Multi-Model AI Chat Conversations",
        "File Upload & Document Analysis in Chat",
        "Pre-built Chat Templates & Prompts",
        "Context Memory & Conversation History",
        "Real-time Collaboration & Sharing"
      ],
      color: "from-teal-500/20 to-emerald-500/20"
    },
    {
      icon: Code,
      title: "Code Playground with AI Assistant",
      description: "Syntax highlighting, live preview, AI debugging, multi-language support",
      capabilities: [
        "Interactive Code Editor & Syntax Highlighting",
        "Live Preview & Real-time Compilation",
        "AI-Powered Code Debugging & Optimization",
        "Multi-Language Support & Libraries",
        "Code Sharing & Collaboration Tools"
      ],
      color: "from-emerald-500/20 to-green-500/20"
    },
    {
      icon: FileText,
      title: "Document AI Processor",
      description: "PDF tools, document summarization, Q&A, content extraction",
      capabilities: [
        "PDF Analysis & Content Extraction",
        "Document Summarization & Key Insights",
        "Interactive Document Q&A System",
        "Multi-format Document Processing",
        "Automated Document Classification"
      ],
      color: "from-green-500/20 to-lime-500/20"
    },
    {
      icon: BarChart3,
      title: "Data Visualization Hub",
      description: "Chart builder, AI insights, interactive dashboards, reporting",
      capabilities: [
        "Interactive Chart Builder & Customization",
        "AI-Generated Data Insights & Patterns",
        "Real-time Dashboard Creation",
        "Advanced Reporting & Export Options",
        "Data Source Integration & APIs"
      ],
      color: "from-lime-500/20 to-yellow-500/20"
    },
    {
      icon: Video,
      title: "Video/Audio AI Creator",
      description: "Text-to-video, voice cloning, audio editing, content generation",
      capabilities: [
        "Text-to-Video Generation & Animation",
        "AI Voice Cloning & Synthesis",
        "Professional Audio Editing & Enhancement",
        "Automated Subtitle & Caption Generation",
        "Multi-format Export & Optimization"
      ],
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Target,
      title: "Social Media Manager",
      description: "Content generation, post scheduling, analytics, engagement automation",
      capabilities: [
        "AI-Powered Content Generation & Ideas",
        "Multi-Platform Post Scheduling",
        "Social Media Analytics & Performance",
        "Automated Engagement & Responses",
        "Hashtag Research & Trend Analysis"
      ],
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  const pricingPlans = [
    {
      name: "FREE",
      price: "$0",
      period: "/month",
      description: "Perfect for individuals getting started",
      icon: Star,
      features: ["50 AI tasks per month", "Basic AI models", "3 projects", "Email support"],
      buttonText: "Start Free",
      popular: false
    },
    {
      name: "STARTER", 
      price: "$29",
      period: "/month",
      description: "Ideal for professionals",
      icon: Zap,
      features: ["500 AI tasks per month", "All AI models", "50 projects", "Priority support"],
      buttonText: "Start 14-Day Trial",
      popular: false
    },
    {
      name: "PRO",
      price: "$99", 
      period: "/month",
      description: "For teams and growing businesses",
      icon: Crown,
      features: ["5,000 AI tasks per month", "Premium APIs", "500 projects", "Team collaboration"],
      buttonText: "Start 14-Day Trial",
      popular: true
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      period: "pricing", 
      description: "For large organizations",
      icon: Building,
      features: ["Unlimited tasks", "Custom models", "White-label", "Dedicated support"],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: "1M+", label: "Active Users" },
    { icon: Zap, value: "50M+", label: "Tasks Completed" },
    { icon: Globe, value: "100+", label: "AI Models" },
    { icon: Award, value: "99.9%", label: "Uptime" }
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error('Please enter a search query');
      return;
    }
    
    // Open processor dialog regardless of auth status
    setProcessorDialogOpen(true);
  };

  const handleExplore = (featureTitle: string) => {
    // Set a default query based on the feature
    setSearchQuery(`Help me with ${featureTitle}`);
    setProcessorDialogOpen(true);
  };

  const handlePricingAction = (planName: string) => {
    if (planName === 'FREE') {
      if (!user) {
        setAuthTab('signup');
        setAuthDialogOpen(true);
      } else {
        toast.success('You are already on the free plan!');
      }
    } else if (planName === 'ENTERPRISE') {
      window.open('mailto:everythingsearchai@gmail.com?subject=Enterprise Plan Inquiry', '_blank');
    } else {
      if (!user) {
        toast.error('Please sign in to upgrade');
        setAuthDialogOpen(true);
      } else {
        toast.info('Redirecting to payment...');
        // Here you would integrate with Stripe/PayPal
      }
    }
  };

  const handleSignIn = () => {
    setAuthTab('signin');
    setAuthDialogOpen(true);
  };

  const handleSignUp = () => {
    setAuthTab('signup');
    setAuthDialogOpen(true);
  };

  const handleSignOut = async () => {
    await signOut();
    toast.success('Signed out successfully');
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="relative z-50 bg-card/20 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Brand */}
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/4ce58f4f-38ce-4efb-9353-c1c5f3fe6abe.png"
                alt="SEARCH AI Logo" 
                className="w-12 h-12 animate-float"
              />
              <div>
                <h1 className="text-2xl font-bold text-foreground">SEARCH AI</h1>
                <p className="text-sm text-muted-foreground">One Platform. Every AI. Everything Possible.</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    Welcome, {user.user_metadata?.full_name || user.email}
                  </span>
                  <Button variant="ghost" size="lg" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="ghost" size="lg" onClick={handleSignIn}>
                    Sign In
                  </Button>
                  <Button variant="hero" size="lg" onClick={handleSignUp}>
                    Start Free Trial
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block text-muted-foreground hover:text-primary">Features</a>
              <a href="#pricing" className="block text-muted-foreground hover:text-primary">Pricing</a>
              <a href="#about" className="block text-muted-foreground hover:text-primary">About</a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary">Contact</a>
              <div className="flex flex-col gap-2 pt-4">
                {user ? (
                  <>
                    <span className="text-sm text-muted-foreground px-3">
                      {user.user_metadata?.full_name || user.email}
                    </span>
                    <Button variant="ghost" onClick={handleSignOut}>Sign Out</Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" onClick={handleSignIn}>Sign In</Button>
                    <Button variant="hero" onClick={handleSignUp}>Start Free Trial</Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <img 
              src="/lovable-uploads/4ce58f4f-38ce-4efb-9353-c1c5f3fe6abe.png"
              alt="SEARCH AI" 
              className="w-40 h-40 mx-auto animate-float mb-8"
            />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            The Ultimate
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Everything Platform
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Access 100+ AI models and APIs through one comprehensive professional platform. 
            Create content, automate workflows, analyze data, design graphics, manage business operations, and more.
          </p>

          {/* Main Search Interface */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative group">
              <Input
                placeholder="What would you like to create, analyze, automate, or accomplish today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="h-20 text-lg pr-32 pl-6 rounded-2xl border-2 border-border/50 focus:border-primary bg-card/50 backdrop-blur-sm"
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
                  className="h-12 px-6"
                >
                  {isProcessing ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Search
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 24 Feature Categories (6x4 Grid) */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              24 Professional AI Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The world's most comprehensive AI platform with specialized capabilities for every professional need.
            </p>
          </div>

          {/* Feature Grid (6 columns on large screens, responsive) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {majorFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${feature.color} backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-elegant transition-all duration-500 hover:scale-105 xl:col-span-2 ${
                  index % 3 === 0 ? 'xl:col-span-2' : 'xl:col-span-2'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-card rounded-2xl opacity-80" />
                
                <div className="relative z-10">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-1 mb-6">
                    {feature.capabilities.slice(0, 3).map((capability, capIndex) => (
                      <li key={capIndex} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="professional" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground text-xs"
                    onClick={() => handleExplore(feature.title)}
                  >
                    Explore <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gradient-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Professional Plans for Every Need
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect plan for your AI journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-card border-2 ${
                  plan.popular ? 'border-primary scale-105' : 'border-border'
                } rounded-2xl p-8 hover:shadow-elegant transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
                
                <Button 
                  variant={plan.popular ? "hero" : "professional"} 
                  className="w-full mb-6"
                  size="lg"
                  onClick={() => handlePricingAction(plan.name)}
                >
                  {plan.buttonText}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About SEARCH AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              SEARCH AI revolutionizes how individuals and businesses interact with artificial intelligence. 
              By seamlessly integrating over 100 AI models and APIs into a single, intuitive platform, 
              we eliminate the complexity of managing multiple AI tools and subscriptions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-card border border-border rounded-2xl p-8 text-center hover:shadow-card transition-all duration-300">
              <Target className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                Democratize access to the world's most advanced AI capabilities, enabling everyone from 
                students to Fortune 500 companies to harness artificial intelligence.
              </p>
            </div>

            <div className="bg-gradient-card border border-border rounded-2xl p-8 text-center hover:shadow-card transition-all duration-300">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Military-grade encryption, GDPR compliance, and enterprise-level security 
                designed for the most demanding professional environments.
              </p>
            </div>

            <div className="bg-gradient-card border border-border rounded-2xl p-8 text-center hover:shadow-card transition-all duration-300">
              <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Global Scale</h3>
              <p className="text-muted-foreground">
                Operating worldwide with edge computing infrastructure, delivering consistent 
                performance regardless of location or complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="relative border-t border-border bg-gradient-card">
        <div className="absolute inset-0 bg-gradient-glow opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand & Contact */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/lovable-uploads/4ce58f4f-38ce-4efb-9353-c1c5f3fe6abe.png" 
                  alt="SEARCH AI" 
                  className="w-16 h-16"
                />
                <div>
                  <h3 className="text-3xl font-bold text-foreground">SEARCH AI</h3>
                  <p className="text-muted-foreground">One Platform. Every AI. Everything Possible.</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
                The world's most comprehensive AI platform for professional use. Access 100+ AI models 
                through one seamless interface designed for enterprise-grade productivity.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground text-lg">Contact Information</h4>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+923476097262" className="hover:text-primary transition-colors">
                    +92 347 6097262
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:everythingsearchai@gmail.com" className="hover:text-primary transition-colors">
                    everythingsearchai@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Products</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">AI Platform</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API Access</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mobile App</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Enterprise Suite</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">3D Modeling Tools</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Press</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-border pt-8 mb-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
                <div className="flex items-center gap-4">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('https://www.linkedin.com/company/sarch-everything-ai/', '_blank')}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('https://twitter.com/searchai', '_blank')}
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('mailto:everythingsearchai@gmail.com', '_blank')}
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-primary rounded-xl p-6 text-center">
                <h4 className="font-semibold text-primary-foreground mb-2">Ready to Get Started?</h4>
                <p className="text-primary-foreground/90 mb-4">Join 1M+ professionals using SEARCH AI</p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => user ? toast.success('You are already signed up!') : handleSignUp()}
                >
                  Start Your Free Trial Today
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground">
                © 2025 SEARCH AI. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">GDPR Compliance</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Dialogs */}
      <AuthDialog 
        isOpen={authDialogOpen} 
        onClose={() => setAuthDialogOpen(false)}
        defaultTab={authTab}
      />
      
      <SearchProcessor
        isOpen={processorDialogOpen}
        onClose={() => setProcessorDialogOpen(false)}
        query={searchQuery}
      />
    </div>
  );
};

export default ComprehensivePlatform;