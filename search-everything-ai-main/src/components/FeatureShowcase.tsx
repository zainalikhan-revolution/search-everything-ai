import React from 'react';
import { 
  Brain, 
  BarChart3, 
  Code, 
  Palette, 
  Target, 
  Settings,
  Search,
  Plane,
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
  Globe,
  Briefcase,
  Camera,
  Microscope,
  Shield,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeatureShowcase = () => {
  const featureCategories = [
    {
      icon: Brain,
      title: "Content Creation",
      description: "Generate articles, stories, scripts, and professional documents",
      capabilities: [
        "Article Writing & Blog Posts",
        "Creative Writing & Storytelling", 
        "Business Proposals & Reports",
        "Social Media Content & Campaigns"
      ],
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Advanced analytics, market research, and business intelligence",
      capabilities: [
        "Business Analytics & KPIs",
        "Market Research & Insights",
        "Financial Analysis & Forecasting",
        "Predictive Modeling & Trends"
      ],
      gradient: "from-green-500/20 to-blue-500/20"
    },
    {
      icon: Code,
      title: "Code Generation",
      description: "Full-stack development, APIs, and automation scripts",
      capabilities: [
        "Web & Mobile App Development",
        "API Integration & Development",
        "Database Design & Optimization",
        "DevOps & Automation Scripts"
      ],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Palette,
      title: "Design Graphics",
      description: "Professional graphics, logos, and visual content creation",
      capabilities: [
        "Logo Design & Brand Identity",
        "Marketing Graphics & Assets",
        "UI/UX Design & Prototypes",
        "3D Modeling & Visualization"
      ],
      gradient: "from-pink-500/20 to-orange-500/20"
    },
    {
      icon: Target,
      title: "Marketing Campaigns",
      description: "Complete marketing strategies and campaign management",
      capabilities: [
        "Campaign Strategy & Planning",
        "Content Calendar & Scheduling",
        "SEO Optimization & Analytics",
        "Email Marketing Automation"
      ],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Settings,
      title: "Business Automation",
      description: "Workflow optimization and process automation",
      capabilities: [
        "Process Optimization & Mapping",
        "Task Automation & Scheduling",
        "CRM & Customer Management",
        "Inventory & Supply Chain"
      ],
      gradient: "from-red-500/20 to-blue-500/20"
    },
    {
      icon: Search,
      title: "Research & Insights",
      description: "Comprehensive research and competitive analysis",
      capabilities: [
        "Market Research & Analysis",
        "Competitor Intelligence",
        "Literature Reviews & Citations",
        "Trend Analysis & Forecasting"
      ],
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: Plane,
      title: "Travel Planning",
      description: "Complete travel management and booking assistance",
      capabilities: [
        "Itinerary Planning & Optimization",
        "Flight & Hotel Booking",
        "Local Recommendations & Guides",
        "Budget Planning & Tracking"
      ],
      gradient: "from-blue-500/20 to-teal-500/20"
    },
    {
      icon: CreditCard,
      title: "Finance Management",
      description: "Financial planning, analysis, and investment strategies",
      capabilities: [
        "Budget Planning & Tracking",
        "Investment Analysis & Advice",
        "Risk Assessment & Management",
        "Tax Planning & Optimization"
      ],
      gradient: "from-emerald-500/20 to-green-500/20"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Personalized health coaching and wellness programs",
      capabilities: [
        "Fitness Planning & Tracking",
        "Nutrition Analysis & Meal Plans",
        "Mental Health & Meditation",
        "Medical Research & Information"
      ],
      gradient: "from-green-500/20 to-lime-500/20"
    },
    {
      icon: GraduationCap,
      title: "Education & Learning",
      description: "Curriculum development and personalized learning",
      capabilities: [
        "Course Creation & Curriculum",
        "Personalized Learning Paths",
        "Assessment & Testing Tools",
        "Academic Research & Writing"
      ],
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: MessageSquare,
      title: "Communication & Social",
      description: "Social media management and communication tools",
      capabilities: [
        "Social Media Management",
        "Community Building & Engagement",
        "Public Relations & PR",
        "Crisis Communication & Management"
      ],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video creation and editing services",
      capabilities: [
        "Video Editing & Post-Production",
        "Animation & Motion Graphics",
        "Promotional Video Creation",
        "Live Streaming & Broadcasting"
      ],
      gradient: "from-red-500/20 to-pink-500/20"
    },
    {
      icon: Music,
      title: "Audio Processing",
      description: "Music production and audio content creation",
      capabilities: [
        "Music Composition & Production",
        "Podcast Creation & Editing",
        "Voice Synthesis & Cloning",
        "Audio Enhancement & Mastering"
      ],
      gradient: "from-pink-500/20 to-purple-500/20"
    },
    {
      icon: Languages,
      title: "Translation Services",
      description: "Professional translation and localization services",
      capabilities: [
        "Document Translation & Localization",
        "Real-time Language Interpretation",
        "Cultural Adaptation & Context",
        "Multilingual Content Creation"
      ],
      gradient: "from-purple-500/20 to-indigo-500/20"
    },
    {
      icon: FileText,
      title: "Legal Documents",
      description: "Legal document preparation and analysis",
      capabilities: [
        "Contract Review & Analysis",
        "Legal Document Drafting",
        "Compliance & Regulatory Review",
        "Intellectual Property Research"
      ],
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      icon: Home,
      title: "Real Estate Analysis",
      description: "Property analysis and real estate intelligence",
      capabilities: [
        "Property Valuation & Analysis",
        "Market Trends & Forecasting",
        "Investment Property Research",
        "Real Estate Documentation"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platform and optimization",
      capabilities: [
        "Online Store Development",
        "Product Catalog Management",
        "Payment Processing Integration",
        "Sales Analytics & Optimization"
      ],
      gradient: "from-cyan-500/20 to-teal-500/20"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            18+ Professional AI Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access the world's most comprehensive AI platform with over 100+ specialized models 
            integrated into one seamless professional interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCategories.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border border-border rounded-2xl p-8 hover:shadow-elegant transition-all duration-500 hover:scale-105`}
            >
              <div className="absolute inset-0 bg-gradient-card rounded-2xl opacity-80" />
              
              <div className="relative z-10">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {feature.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
                
                <Button variant="professional" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Try Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Capabilities Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Plus Many More Specialized Capabilities
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: Globe, label: "Global APIs" },
              { icon: Briefcase, label: "Enterprise Tools" },
              { icon: Camera, label: "Photography" },
              { icon: Microscope, label: "Scientific Research" },
              { icon: Shield, label: "Security Analysis" },
              { icon: Zap, label: "Automation" }
            ].map((item, index) => (
              <div key={index} className="bg-card/30 border border-border rounded-xl p-4 hover:bg-card/50 transition-all duration-300">
                <item.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;