import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ChevronRight, Tag, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedTransition from '../components/AnimatedTransition';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const featuredPosts = [
  {
    id: 1,
    slug: 'mastering-risk-management',
    title: 'Mastering Risk Management: A Guide for Funded Traders',
    excerpt: 'Learn the essential risk management techniques that professional traders use to protect their capital and maximize returns.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2940',
    category: 'Risk Management',
    author: 'Ahmed Al-Farsi',
    date: 'March 15, 2025',
    readTime: '8 min read'
  },
  {
    id: 2,
    slug: 'technical-analysis-beyond-basics',
    title: 'Technical Analysis: Beyond the Basics',
    excerpt: 'Dive deep into advanced technical analysis concepts and learn how to identify high-probability trading setups.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=2940',
    category: 'Technical Analysis',
    author: 'Sophia Nguyen',
    date: 'March 12, 2025',
    readTime: '12 min read'
  },
  {
    id: 3,
    slug: 'psychology-successful-trading',
    title: 'The Psychology of Successful Trading',
    excerpt: 'Understanding and mastering trading psychology is crucial for long-term success in the markets.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2940',
    category: 'Trading Psychology',
    author: 'Raj Patel',
    date: 'March 10, 2025',
    readTime: '10 min read'
  }
];

const categories = [
  { name: 'Technical Analysis', count: 24 },
  { name: 'Risk Management', count: 18 },
  { name: 'Trading Psychology', count: 15 },
  { name: 'Market Analysis', count: 12 },
  { name: 'Trading Strategies', count: 21 },
  { name: 'Fundamental Analysis', count: 9 }
];

const recentPosts = [
  {
    id: 4,
    slug: 'understanding-market-correlations',
    title: 'Understanding Market Correlations',
    category: 'Market Analysis',
    date: 'March 8, 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2940'
  },
  {
    id: 5,
    slug: 'building-trading-plan',
    title: 'Building a Robust Trading Plan',
    category: 'Trading Strategies',
    date: 'March 5, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2940'
  },
  {
    id: 6,
    slug: 'economic-indicators',
    title: 'Economic Indicators That Matter',
    category: 'Fundamental Analysis',
    date: 'March 3, 2025',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2940'
  }
];

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <AnimatedTransition>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Trading Insights & Education
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Expert analysis, trading strategies, and market insights to help you become a better trader
              </motion.p>
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto mb-16"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </motion.div>

            {/* Featured Posts */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-600">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
                <div className="space-y-8">
                  {recentPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Link to={`/blog/${post.slug}`} className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              {post.category}
                            </span>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {post.date}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                            {post.title}
                          </h3>
                          <div className="group inline-flex items-center text-blue-600">
                            Read More
                            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Categories */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                  <div className="space-y-4">
                    {categories.map((category, index) => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center text-gray-600 group-hover:text-blue-600">
                          <Tag className="w-4 h-4 mr-2" />
                          {category.name}
                        </div>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                          {category.count}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-blue-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-blue-100 mb-6">
                    Get the latest trading insights and market analysis delivered to your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 mb-4"
                  />
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </AnimatedTransition>
  );
}