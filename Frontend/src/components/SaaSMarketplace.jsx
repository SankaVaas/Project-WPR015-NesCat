import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Brain, Users, Star, Check, Menu, X, ArrowRight, Sparkles, Globe, Shield, Rocket, FileText, MessageSquare, User, Play, Award, TrendingUp, Plus, Filter, Search, Heart } from 'lucide-react';

const SaaSMarketplace = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Dynamic product data - easily expandable
  const productCategories = [
    { id: 'all', name: 'All Products', icon: <Globe className="w-4 h-4" /> },
    { id: 'ai', name: 'AI Tools', icon: <Brain className="w-4 h-4" /> },
    { id: 'business', name: 'Business', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'education', name: 'Education', icon: <FileText className="w-4 h-4" /> },
    { id: 'automation', name: 'Automation', icon: <Zap className="w-4 h-4" /> }
  ];

  const products = [
    {
      id: 1,
      name: "AI Note Summarizer",
      category: 'ai',
      tagline: "Transform lengthy documents into concise summaries",
      description: "Upload PDFs, research papers, or documents and get intelligent, structured summaries in seconds. Perfect for students, researchers, and professionals.",
      icon: <FileText className="w-8 h-8" />,
      price: 19,
      originalPrice: 29,
      billing: "month",
      features: ["PDF Processing", "Multi-language Support", "Export to Multiple Formats", "Batch Processing", "API Access"],
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      badge: "Popular",
      rating: 4.9,
      users: "2.3k",
      tags: ["AI", "Education", "Productivity"]
    },
    {
      id: 2,
      name: "Restaurant Chatbot Builder",
      category: 'business',
      tagline: "24/7 customer service automation for restaurants",
      description: "Create intelligent chatbots that handle reservations, menu questions, and orders. Integrate with your existing systems seamlessly.",
      icon: <MessageSquare className="w-8 h-8" />,
      price: 39,
      originalPrice: 59,
      billing: "month",
      features: ["Menu Integration", "Order Processing", "Reservation System", "Multi-platform Deploy", "Analytics Dashboard"],
      gradient: "from-green-400 via-blue-500 to-purple-600",
      badge: "New",
      rating: 4.8,
      users: "890",
      tags: ["Business", "Automation", "Customer Service"]
    },
    {
      id: 3,
      name: "AI Resume Generator Pro",
      category: 'ai',
      tagline: "Land your dream job with AI-optimized resumes",
      description: "Professional resume creation with ATS optimization, industry-specific templates, and real-time suggestions from AI.",
      icon: <User className="w-8 h-8" />,
      price: 14,
      originalPrice: 24,
      billing: "month",
      features: ["ATS Optimization", "50+ Templates", "AI Content Suggestions", "LinkedIn Integration", "Cover Letter Generator"],
      gradient: "from-orange-400 via-red-500 to-pink-500",
      badge: "Best Seller",
      rating: 4.9,
      users: "5.2k",
      tags: ["AI", "Career", "Templates"]
    },
    {
      id: 4,
      name: "Social Media Scheduler",
      category: 'business',
      tagline: "Automate your social media presence",
      description: "Schedule posts across all platforms, analyze engagement, and grow your audience with AI-powered content suggestions.",
      icon: <Rocket className="w-8 h-8" />,
      price: 25,
      originalPrice: 35,
      billing: "month",
      features: ["Multi-platform Posting", "Content Calendar", "Analytics Dashboard", "Team Collaboration", "AI Content Ideas"],
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      badge: "Trending",
      rating: 4.7,
      users: "1.8k",
      tags: ["Business", "Marketing", "Automation"]
    },
    {
      id: 5,
      name: "Code Documentation AI",
      category: 'ai',
      tagline: "Auto-generate documentation for your codebase",
      description: "Scan your repositories and automatically create comprehensive documentation with examples, API references, and usage guides.",
      icon: <Sparkles className="w-8 h-8" />,
      price: 35,
      originalPrice: 49,
      billing: "month",
      features: ["Multi-language Support", "GitHub Integration", "Auto-sync Updates", "Custom Templates", "Team Sharing"],
      gradient: "from-violet-400 via-purple-500 to-blue-600",
      badge: "Developer Favorite",
      rating: 4.8,
      users: "1.1k",
      tags: ["AI", "Developer Tools", "Documentation"]
    },
    {
      id: 6,
      name: "Learning Path Creator",
      category: 'education',
      tagline: "Personalized learning journeys with AI",
      description: "Create custom learning paths for any skill or topic. Track progress, get recommendations, and achieve your learning goals faster.",
      icon: <Award className="w-8 h-8" />,
      price: 21,
      originalPrice: 31,
      billing: "month",
      features: ["Custom Learning Paths", "Progress Tracking", "AI Recommendations", "Skill Assessments", "Certificates"],
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      badge: "Editor's Choice",
      rating: 4.9,
      users: "3.4k",
      tags: ["Education", "AI", "Skills"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Graduate Student",
      company: "MIT",
      content: "The AI Note Summarizer completely transformed my research workflow. I can process 10x more papers now.",
      rating: 5,
      avatar: "SC",
      product: "AI Note Summarizer"
    },
    {
      name: "Marco Rodriguez",
      role: "Restaurant Owner",
      company: "Bella Vista",
      content: "Our chatbot handles 80% of inquiries automatically. Customer satisfaction is up 45%!",
      rating: 5,
      avatar: "MR",
      product: "Restaurant Chatbot"
    },
    {
      name: "Alex Thompson",
      role: "Software Engineer",
      company: "TechFlow",
      content: "Got 3 job offers after using the AI Resume Generator. The ATS optimization really works!",
      rating: 5,
      avatar: "AT",
      product: "AI Resume Generator Pro"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const ProductCard = ({ product, index }) => (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
        hoveredProduct === product.id ? 'transform -translate-y-2 scale-[1.02]' : ''
      }`}
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Badge */}
      {product.badge && (
        <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${product.gradient}`}>
          {product.badge}
        </div>
      )}
      
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${product.gradient} text-white shadow-lg`}>
            {product.icon}
          </div>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors group">
            <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* Product Info */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {product.name}
          </h3>
          <p className="text-sm font-medium text-gray-600 mb-3">{product.tagline}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-900 mb-2">Key Features:</p>
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium">{product.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{product.users} users</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              <span className="text-gray-600">/{product.billing}</span>
            </div>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}/{product.billing}</span>
            )}
          </div>
          <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${product.gradient} text-white text-sm font-semibold`}>
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2`}>
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full py-2 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen #6d28d9">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SoftwareHub
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Products</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                Get Started
              </button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-lg rounded-full px-4 py-2 text-sm font-medium text-gray-600 mb-8 border border-gray-200">
            <Sparkles className="w-4 h-4 text-blue-500" />
            New products added weekly
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Premium
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Software </span>
            Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover powerful AI-driven tools and automation software that transform the way you work. 
            <span className="font-semibold"> Boost productivity by 10x</span> with our cutting-edge solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Explore Products
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '50,000+', label: 'Active Users' },
              { number: '25+', label: 'Software Tools' },
              { number: '99.9%', label: 'Uptime' },
              { number: '4.9/5', label: 'Average Rating' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Perfect
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Software Solution</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered automation to business management tools - we have everything you need to scale your operations.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 overflow-x-auto">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Add More Products CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">More Products Coming Soon</h3>
                <p className="text-gray-600">We're constantly adding new tools to help you succeed.</p>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> 50,000+ Users</span>
            </h2>
            <p className="text-xl text-gray-600">See what our customers are saying about our software solutions</p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                      <div className="text-gray-600">{testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}</div>
                      <div className="text-sm text-blue-600 font-medium">Using: {testimonials[currentTestimonial].product}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join 50,000+ users who are already saving time and increasing productivity with our premium software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 justify-center">
              <Rocket className="w-5 h-5" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">SoftwareHub</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Premium software solutions for modern businesses. Transform your workflow with AI-powered tools.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 SoftwareHub. All rights reserved.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">SoftwareHub</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="space-y-4">
                <a href="#products" className="block py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Products</a>
                <a href="#pricing" className="block py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
                <a href="#about" className="block py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="#contact" className="block py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium mt-6">
                  Get Started
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SaaSMarketplace;