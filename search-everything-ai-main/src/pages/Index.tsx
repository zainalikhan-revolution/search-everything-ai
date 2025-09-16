// src/pages/index.js
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Search Everything AI - Ultimate Everything Platform</title>
        <meta name="description" content="Access 100+ AI models and APIs through one comprehensive professional platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AI</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">SEARCH AI</h1>
                  <p className="text-gray-400 text-xs">One Platform. Every AI. Everything Possible.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link 
                  href="/dashboard"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Ultimate
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Everything Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Access 100+ AI models and APIs through one comprehensive professional platform. 
              Create content, automate workflows, analyze data, design graphics, manage business operations, and more.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              <Link 
                href="/dashboard"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold text-lg"
              >
                Start Your Free Trial Today
              </Link>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/5 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { number: '1M+', label: 'Active Users' },
              { number: '50M+', label: 'Tasks Completed' },
              { number: '100+', label: 'AI Models' },
              { number: '99.9%', label: 'Uptime' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Preview */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              24 Professional AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              The world's most comprehensive AI platform with specialized capabilities for every professional need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: '📝',
                title: 'Content Creation',
                description: 'Articles, images, videos, code, creative writing, business documents'
              },
              {
                icon: '📊',
                title: 'Data Analysis',
                description: 'Business analytics, market research, financial analysis, predictive modeling'
              },
              {
                icon: '💻',
                title: 'Code Generation',
                description: 'Full-stack development, APIs, mobile apps, automation scripts'
              },
              {
                icon: '🎨',
                title: 'Design Graphics',
                description: 'Logos, branding, UI/UX, 3D modeling, marketing materials'
              },
              {
                icon: '📈',
                title: 'Marketing Campaigns',
                description: 'Complete marketing strategies, SEO, advertising, email campaigns'
              },
              {
                icon: '⚡',
                title: 'Business Automation',
                description: 'Workflow optimization, CRM, project management, process automation'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl border border-white/10 p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 1M+ professionals using SEARCH AI
            </p>
            <Link 
              href="/dashboard"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold text-lg inline-block"
            >
              Start Your Free Trial Today
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="text-center text-gray-400">
              <p>&copy; 2025 SEARCH AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
