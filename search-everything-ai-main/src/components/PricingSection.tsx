import React from 'react';
import { Check, Crown, Zap, Building, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "FREE",
      price: "$0",
      period: "/month",
      description: "Perfect for individuals getting started with AI",
      icon: Star,
      features: [
        "50 AI tasks per month",
        "Access to basic AI models",
        "3 active projects",
        "Email support",
        "Standard processing speed",
        "Basic export formats",
        "Community access"
      ],
      limitations: ["No advanced features", "Limited model access", "Standard priority"],
      buttonText: "Start Free",
      buttonVariant: "outline" as const,
      popular: false,
      gradient: "from-gray-500/10 to-gray-600/10"
    },
    {
      name: "STARTER",
      price: "$29",
      period: "/month",
      description: "Ideal for professionals and small businesses",
      icon: Zap,
      features: [
        "500 AI tasks per month",
        "All AI models & APIs",
        "50 active projects",
        "Priority chat support",
        "Advanced processing speed",
        "All export formats",
        "Template library access",
        "Basic integrations",
        "Usage analytics"
      ],
      limitations: [],
      buttonText: "Start 14-Day Trial",
      buttonVariant: "professional" as const,
      popular: false,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "PRO",
      price: "$99",
      period: "/month",
      description: "For teams and growing businesses",
      icon: Crown,
      features: [
        "5,000 AI tasks per month",
        "All AI models + Premium APIs",
        "500 active projects",
        "Priority support + phone",
        "Fastest processing speed",
        "Advanced export options",
        "Premium templates",
        "Advanced integrations",
        "Detailed analytics",
        "Team collaboration",
        "Custom workflows",
        "API access"
      ],
      limitations: [],
      buttonText: "Start 14-Day Trial",
      buttonVariant: "hero" as const,
      popular: true,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with custom needs",
      icon: Building,
      features: [
        "Unlimited AI tasks",
        "All AI models + Custom models",
        "Unlimited projects",
        "Dedicated support manager",
        "Enterprise-grade speed",
        "White-label options",
        "Custom integrations",
        "Advanced security",
        "Compliance tools",
        "Team management",
        "Custom workflows",
        "Full API access",
        "On-premise deployment",
        "Custom training"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonVariant: "professional" as const,
      popular: false,
      gradient: "from-emerald-500/20 to-green-500/20"
    }
  ];

  const features = [
    {
      category: "AI Models & Processing",
      items: [
        { name: "GPT-4 & Latest Language Models", free: false, starter: true, pro: true, enterprise: true },
        { name: "Claude, Gemini, & Advanced Models", free: false, starter: true, pro: true, enterprise: true },
        { name: "Image Generation (DALL-E, Midjourney)", free: false, starter: true, pro: true, enterprise: true },
        { name: "Code Generation & Review", free: false, starter: true, pro: true, enterprise: true },
        { name: "Custom Model Training", free: false, starter: false, pro: false, enterprise: true }
      ]
    },
    {
      category: "Professional Features",
      items: [
        { name: "Advanced Analytics & Reporting", free: false, starter: true, pro: true, enterprise: true },
        { name: "Team Collaboration Tools", free: false, starter: false, pro: true, enterprise: true },
        { name: "Project Management", free: false, starter: true, pro: true, enterprise: true },
        { name: "Version Control & History", free: false, starter: true, pro: true, enterprise: true },
        { name: "White-label Solutions", free: false, starter: false, pro: false, enterprise: true }
      ]
    },
    {
      category: "Integration & API",
      items: [
        { name: "REST API Access", free: false, starter: false, pro: true, enterprise: true },
        { name: "Webhook Support", free: false, starter: false, pro: true, enterprise: true },
        { name: "Third-party Integrations", free: false, starter: true, pro: true, enterprise: true },
        { name: "Custom Integrations", free: false, starter: false, pro: false, enterprise: true },
        { name: "Enterprise SSO", free: false, starter: false, pro: false, enterprise: true }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Professional AI Plans for Every Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your AI journey. All plans include access to our 
            comprehensive AI platform with professional-grade capabilities.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${plan.gradient} backdrop-blur-sm border-2 ${
                plan.popular ? 'border-primary' : 'border-border'
              } rounded-2xl p-8 ${plan.popular ? 'scale-105 shadow-elegant' : ''} transition-all duration-300 hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-card rounded-2xl opacity-90" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <plan.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground text-center mb-2">
                  {plan.name}
                </h3>
                
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                
                <p className="text-muted-foreground text-center mb-6 text-sm">
                  {plan.description}
                </p>
                
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full mb-6 font-semibold"
                  size="lg"
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
                
                {plan.limitations.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      {plan.limitations.join(" • ")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-gradient-card border border-border rounded-2xl overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Detailed Feature Comparison
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-6 text-foreground font-semibold">Features</th>
                    <th className="text-center py-4 px-6 text-foreground font-semibold">Free</th>
                    <th className="text-center py-4 px-6 text-foreground font-semibold">Starter</th>
                    <th className="text-center py-4 px-6 text-foreground font-semibold bg-primary/10 rounded-t-lg">Pro</th>
                    <th className="text-center py-4 px-6 text-foreground font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((category, categoryIndex) => (
                    <>
                      <tr key={`category-${categoryIndex}`}>
                        <td colSpan={5} className="py-4 px-6">
                          <h4 className="font-semibold text-primary">{category.category}</h4>
                        </td>
                      </tr>
                      {category.items.map((item, itemIndex) => (
                        <tr key={`${categoryIndex}-${itemIndex}`} className="border-b border-border/50">
                          <td className="py-3 px-6 text-muted-foreground">{item.name}</td>
                          <td className="py-3 px-6 text-center">
                            {item.free ? (
                              <Check className="h-5 w-5 text-primary mx-auto" />
                            ) : (
                              <div className="w-5 h-5 mx-auto bg-muted rounded-full" />
                            )}
                          </td>
                          <td className="py-3 px-6 text-center">
                            {item.starter ? (
                              <Check className="h-5 w-5 text-primary mx-auto" />
                            ) : (
                              <div className="w-5 h-5 mx-auto bg-muted rounded-full" />
                            )}
                          </td>
                          <td className="py-3 px-6 text-center bg-primary/5">
                            {item.pro ? (
                              <Check className="h-5 w-5 text-primary mx-auto" />
                            ) : (
                              <div className="w-5 h-5 mx-auto bg-muted rounded-full" />
                            )}
                          </td>
                          <td className="py-3 px-6 text-center">
                            {item.enterprise ? (
                              <Check className="h-5 w-5 text-primary mx-auto" />
                            ) : (
                              <div className="w-5 h-5 mx-auto bg-muted rounded-full" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Our Enterprise team can create a tailored solution that meets your specific needs, 
            including custom AI models, dedicated infrastructure, and specialized integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Contact Sales: +92 376 097262
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;