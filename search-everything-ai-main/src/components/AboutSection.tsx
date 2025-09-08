import React from 'react';
import { 
  Target, 
  Users, 
  Globe, 
  Zap, 
  Shield, 
  Award,
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "1M+", label: "Active Users", description: "Professionals worldwide trust SEARCH AI" },
    { icon: Zap, value: "50M+", label: "Tasks Completed", description: "AI-powered tasks successfully executed" },
    { icon: Globe, value: "100+", label: "AI Models", description: "Integrated advanced AI models and APIs" },
    { icon: Clock, value: "99.9%", label: "Uptime", description: "Enterprise-grade reliability" },
    { icon: Award, value: "95%", label: "Success Rate", description: "Tasks completed successfully" },
    { icon: TrendingUp, value: "300%", label: "Productivity Gain", description: "Average improvement reported by users" }
  ];

  const features = [
    {
      icon: Target,
      title: "Mission-Driven Innovation",
      description: "We democratize access to the world's most advanced AI capabilities, enabling everyone from students to Fortune 500 companies to harness artificial intelligence for their unique needs."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Your data is protected with military-grade encryption, compliance with major standards (GDPR, SOC2), and advanced access controls designed for the most demanding enterprise environments."
    },
    {
      icon: Globe,
      title: "Global Scale & Reach",
      description: "Operating worldwide with edge computing infrastructure, our platform delivers consistent performance and reliability regardless of your location or the complexity of your requirements."
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Platform Launch",
      description: "SEARCH AI officially launches with 50+ integrated AI models"
    },
    {
      year: "2024 Q2",
      title: "Enterprise Adoption",
      description: "Major corporations begin integrating SEARCH AI into their workflows"
    },
    {
      year: "2024 Q3",
      title: "1M Users Milestone",
      description: "Platform reaches 1 million active users across 150+ countries"
    },
    {
      year: "2024 Q4",
      title: "Advanced Features",
      description: "Launch of 3D modeling, video production, and enterprise automation"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Expanding to 200+ AI models with custom training capabilities"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Revolutionizing AI Accessibility
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            SEARCH AI revolutionizes how individuals and businesses interact with artificial intelligence. 
            By seamlessly integrating over 100 AI models and APIs into a single, intuitive platform, 
            we eliminate the complexity of managing multiple AI tools and subscriptions.
          </p>
          
          <div className="bg-gradient-card border border-border rounded-xl p-8 max-w-5xl mx-auto mb-12">
            <p className="text-lg text-foreground italic leading-relaxed text-center">
              "Transform your ideas into reality with the power of artificial intelligence. Whether you're a creator, entrepreneur, researcher, or innovator, SEARCH AI empowers you to achieve extraordinary results. Break through limitations, accelerate your workflow, and unlock possibilities you never imagined. Your next breakthrough is just one search away!"
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold">
              One Platform. Every AI. Everything Possible.
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-card border border-border rounded-2xl p-8 text-center hover:shadow-elegant transition-all duration-300"
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{stat.label}</h3>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Built for Professional Excellence
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-card border border-border rounded-2xl p-8 hover:shadow-card transition-all duration-300"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Real Results from Real Users
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-card border border-border rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary mr-3" />
                <span className="font-semibold text-foreground">Marketing Agency</span>
              </div>
              <p className="text-muted-foreground mb-4">
                "SEARCH AI reduced our campaign creation time from 40 hours to just 2 hours. 
                The quality is consistently professional, and our clients are amazed by the results."
              </p>
              <div className="text-2xl font-bold text-primary">95% Time Saved</div>
            </div>

            <div className="bg-gradient-card border border-border rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary mr-3" />
                <span className="font-semibold text-foreground">Tech Startup</span>
              </div>
              <p className="text-muted-foreground mb-4">
                "We saved $50,000 annually by replacing 15 different AI subscriptions with SEARCH AI. 
                The integrated approach is game-changing for our development workflow."
              </p>
              <div className="text-2xl font-bold text-primary">$50K+ Saved</div>
            </div>

            <div className="bg-gradient-card border border-border rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary mr-3" />
                <span className="font-semibold text-foreground">Enterprise Client</span>
              </div>
              <p className="text-muted-foreground mb-4">
                "Our content team achieved a 300% productivity increase. SEARCH AI handles everything 
                from research to final production with enterprise-grade quality."
              </p>
              <div className="text-2xl font-bold text-primary">300% Growth</div>
            </div>
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Journey to AI Excellence
          </h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-gradient-card border border-border rounded-xl p-6">
                      <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 bg-primary rounded-full w-6 h-6 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                  </div>
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center bg-gradient-primary rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-primary-foreground mb-6">
            Our Vision for the Future
          </h3>
          <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            We envision a world where artificial intelligence amplifies human creativity and productivity 
            without complexity. SEARCH AI is building that future today—where every professional has access 
            to the world's most advanced AI capabilities through one seamless, intelligent platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;