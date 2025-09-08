import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfessionalFooter = () => {
  const footerSections = {
    products: [
      { name: "AI Platform", href: "#" },
      { name: "API Access", href: "#" },
      { name: "Mobile App", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Enterprise Suite", href: "#" }
    ],
    solutions: [
      { name: "Enterprise", href: "#" },
      { name: "Small Business", href: "#" },
      { name: "Developers", href: "#" },
      { name: "Education", href: "#" },
      { name: "Startups", href: "#" }
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Support Center", href: "#" },
      { name: "API Reference", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Partners", href: "#" }
    ]
  };

  return (
    <footer className="relative border-t border-border bg-gradient-card">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/lovable-uploads/4ce58f4f-38ce-4efb-9353-c1c5f3fe6abe.png" alt="SEARCH AI" className="w-12 h-12" />
              <div>
                <h3 className="text-2xl font-bold text-foreground">SEARCH AI</h3>
                <p className="text-sm text-muted-foreground">One Platform. Every AI. Everything Possible.</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Revolutionizing how individuals and businesses interact with artificial intelligence. 
              Access 100+ AI models through one comprehensive professional platform.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Contact Information</h4>
                <p className="text-muted-foreground">Phone: +92 376 097262</p>
                <p className="text-muted-foreground">Email: support@searchai.com</p>
                <p className="text-muted-foreground">Global Operations Center</p>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Products</h4>
            <ul className="space-y-3">
              {footerSections.products.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Solutions</h4>
            <ul className="space-y-3">
              {footerSections.solutions.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerSections.resources.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerSections.company.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="max-w-md">
              <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="hero">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="border-t border-border pt-8 mb-8">
          <h4 className="font-semibold text-foreground mb-6 text-center">Success Stories</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-card/30 border border-border rounded-xl p-6">
              <p className="text-sm text-muted-foreground">
                "A marketing agency reduced campaign creation time from 40 hours to 2 hours using SEARCH AI"
              </p>
              <div className="mt-4 text-2xl font-bold text-primary">95% Time Saved</div>
            </div>
            <div className="bg-card/30 border border-border rounded-xl p-6">
              <p className="text-sm text-muted-foreground">
                "A startup saved $50,000 annually by replacing 15 different AI subscriptions"
              </p>
              <div className="mt-4 text-2xl font-bold text-primary">$50K+ Saved</div>
            </div>
            <div className="bg-card/30 border border-border rounded-xl p-6">
              <p className="text-sm text-muted-foreground">
                "Enterprise client achieved 300% productivity increase in content workflows"
              </p>
              <div className="mt-4 text-2xl font-bold text-primary">300% Growth</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 SEARCH AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                GDPR Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;