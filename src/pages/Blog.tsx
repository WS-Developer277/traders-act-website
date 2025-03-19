import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Calendar, Clock, ChevronRight, Tag, User, X, Check, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedTransition from '../components/AnimatedTransition';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { subscribeToNewsletter } from '../services/newsletter';

// Add tags to the posts
const featuredPosts = [
  {
    id: 1,
    slug: 'mastering-risk-management',
    title: 'Mastering Risk Management: A Guide for Funded Traders',
    excerpt: 'Learn the essential risk management techniques that professional traders use to protect their capital and maximize returns.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2940',
    category: 'Risk Management',
    tags: ['Risk Management', 'Stop Loss', 'Position Sizing', 'Drawdown'],
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
    tags: ['Technical Analysis', 'Chart Patterns', 'Indicators', 'Price Action'],
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
    tags: ['Trading Psychology', 'Emotional Control', 'Discipline', 'Mindset'],
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

// Add tags to recent posts
const recentPosts = [
  {
    id: 4,
    slug: 'understanding-market-correlations',
    title: 'Understanding Market Correlations',
    category: 'Market Analysis',
    tags: ['Market Analysis', 'Correlations', 'Risk Management', 'Diversification'],
    date: 'March 8, 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2940'
  },
  {
    id: 5,
    slug: 'building-trading-plan',
    title: 'Building a Robust Trading Plan',
    category: 'Trading Strategies',
    tags: ['Trading Strategies', 'Planning', 'Risk Management', 'Goals'],
    date: 'March 5, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2940'
  },
  {
    id: 6,
    slug: 'economic-indicators',
    title: 'Economic Indicators That Matter',
    category: 'Fundamental Analysis',
    tags: ['Fundamental Analysis', 'Economic Indicators', 'GDP', 'Inflation'],
    date: 'March 3, 2025',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2940'
  }
];

// Define post interface
interface Post {
  id: number;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  date: string;
  image: string;
  excerpt?: string;
  author?: string;
  readTime?: string;
}

// Extract all unique tags from posts
function getAllTags(): string[] {
  const allPosts = [...featuredPosts, ...recentPosts];
  const tagsSet = new Set<string>();
  
  allPosts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => tagsSet.add(tag));
    }
  });
  
  return Array.from(tagsSet);
}

export default function BlogPage() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags] = useState<string[]>(getAllTags());
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Combine all posts for search functionality
  const allPosts: Post[] = [...featuredPosts, ...recentPosts];
  
  // Filter posts based on search query, category, and tags
  const filteredPosts = allPosts.filter(post => {
    // Search query filter
    const matchesSearch = searchQuery.trim() === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    // Category filter
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    
    // Tags filter
    const matchesTags = selectedTags.length === 0 || 
      (post.tags && selectedTags.every(tag => post.tags.includes(tag)));
    
    return matchesSearch && matchesCategory && matchesTags;
  });

  // Separate filtered posts into featured and non-featured
  const filteredFeaturedPosts = filteredPosts.filter(post => 
    featuredPosts.some(fp => fp.id === post.id)
  );
  
  const filteredRecentPosts = filteredPosts.filter(post => 
    recentPosts.some(rp => rp.id === post.id)
  );
  
  // Check if there are any matching posts
  const hasMatchingPosts = filteredPosts.length > 0;

  // Handle category selection
  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(prevCategory => prevCategory === categoryName ? '' : categoryName);
  };

  // Handle tag selection
  const handleTagClick = (tag: string) => {
    setSelectedTags(prevTags => {
      if (prevTags.includes(tag)) {
        return prevTags.filter(t => t !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  // Handle newsletter subscription
  const handleSubscribe = async () => {
    if (!email) {
      setSubscriptionStatus({
        success: false,
        message: t('pages.blog.newsletter.errorEmpty', 'Please enter your email address')
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await subscribeToNewsletter(email);
      setSubscriptionStatus(result);
      
      if (result.success) {
        setEmail(''); // Clear the email input on success
      }
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      setSubscriptionStatus({
        success: false,
        message: t('pages.blog.newsletter.errorGeneric', 'An error occurred. Please try again later.')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedTags([]);
  };

  return (
    <AnimatedTransition>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-white text-blue-900 py-16" data-component-name="BlogPage">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">{t('pages.blog.title', 'Traders Act Blog')}</h1>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto" data-component-name="BlogPage">
                {t('pages.blog.subtitle', 'Insights, strategies, and news for funded traders')}
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-grow max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('pages.blog.searchPlaceholder', 'Search articles...')}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Active Filters */}
              <div className="flex flex-wrap items-center gap-2">
                {selectedCategory && (
                  <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    <span>{t(`pages.blog.categories.${selectedCategory.toLowerCase().replace(/\s+/g, '')}`, selectedCategory)}</span>
                    <button 
                      onClick={() => setSelectedCategory('')}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                      aria-label={`Remove ${selectedCategory} filter`}
                      title={`Remove ${selectedCategory} filter`}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
                
                {selectedTags.map(tag => (
                  <div key={tag} className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    <span>#{tag}</span>
                    <button 
                      onClick={() => handleTagClick(tag)}
                      className="ml-2 text-green-600 hover:text-green-800"
                      aria-label={`Remove ${tag} tag filter`}
                      title={`Remove ${tag} tag filter`}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                
                {(selectedCategory || selectedTags.length > 0 || searchQuery) && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={clearFilters}
                    className="text-sm"
                  >
                    {t('pages.blog.clearFilters', 'Clear All')}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('pages.blog.featuredArticles', 'Featured Articles')}</h2>
            
            {filteredFeaturedPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFeaturedPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Link to={`/blog/${post.slug}`} className="block">
                      <img
                        src={post.image}
                        alt={t(`pages.blog.posts.${post.slug}.title`, post.title)}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                          <span 
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full cursor-pointer hover:bg-blue-200"
                            onClick={(e) => {
                              e.preventDefault();
                              handleCategoryClick(post.category);
                            }}
                          >
                            {t(`pages.blog.categories.${post.category.toLowerCase().replace(/\s+/g, '')}`, post.category)}
                          </span>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime ? t(`pages.blog.posts.${post.slug}.readTime`, post.readTime) : ''}
                          </div>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                          {t(`pages.blog.posts.${post.slug}.title`, post.title)}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt ? t(`pages.blog.posts.${post.slug}.excerpt`, post.excerpt) : ''}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-600">
                            <User className="w-4 h-4 mr-1" />
                            {post.author ? t(`pages.blog.posts.${post.slug}.author`, post.author) : ''}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-1" />
                            {t(`pages.blog.posts.${post.slug}.date`, post.date)}
                          </div>
                        </div>
                        {post.tags && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map(tag => (
                              <span 
                                key={tag}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleTagClick(tag);
                                }}
                              >
                                #{tag}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="text-xs text-gray-500">+{post.tags.length - 3} more</span>
                            )}
                          </div>
                        )}
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : !hasMatchingPosts && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  {t('pages.blog.noResults', 'No articles found matching your criteria.')}
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={clearFilters}
                >
                  {t('pages.blog.resetFilters', 'Reset Filters')}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('pages.blog.latestArticles', 'Latest Articles')}</h2>
                <div className="space-y-8">
                  {filteredRecentPosts.map((post, index) => (
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
                            alt={t(`pages.blog.posts.${post.slug}.title`, post.title)}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                            <span 
                              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full cursor-pointer hover:bg-blue-200"
                              onClick={(e) => {
                                e.preventDefault();
                                handleCategoryClick(post.category);
                              }}
                            >
                              {t(`pages.blog.categories.${post.category.toLowerCase().replace(/\s+/g, '')}`, post.category)}
                            </span>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {t(`pages.blog.posts.${post.slug}.date`, post.date)}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                            {t(`pages.blog.posts.${post.slug}.title`, post.title)}
                          </h3>
                          {post.tags && (
                            <div className="mb-4 flex flex-wrap gap-2">
                              {post.tags.slice(0, 3).map(tag => (
                                <span 
                                  key={tag}
                                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleTagClick(tag);
                                  }}
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="group inline-flex items-center text-blue-600">
                            {t('pages.blog.readMore', 'Read More')}
                            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
                
                {!hasMatchingPosts && (
                  <div className="text-center py-12">
                    <p className="text-gray-600 text-lg">
                      {t('pages.blog.noResults', 'No articles found matching your criteria.')}
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={clearFilters}
                    >
                      {t('pages.blog.resetFilters', 'Reset Filters')}
                    </Button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Categories */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{t('pages.blog.categoriesTitle', 'Categories')}</h3>
                  <div className="space-y-4">
                    {categories.map((category, index) => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`flex items-center justify-between group cursor-pointer ${selectedCategory === category.name ? 'text-blue-600' : ''}`}
                        onClick={() => handleCategoryClick(category.name)}
                      >
                        <div className={`flex items-center ${selectedCategory === category.name ? 'text-blue-600 font-medium' : 'text-gray-600'} group-hover:text-blue-600`}>
                          <Tag className="w-4 h-4 mr-2" />
                          {t(`pages.blog.categories.${category.name.toLowerCase().replace(/\s+/g, '')}`, category.name)}
                        </div>
                        <span className={`${selectedCategory === category.name ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'} px-2 py-1 rounded-full text-sm`}>
                          {category.count}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{t('pages.blog.tagsTitle', 'Popular Tags')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`text-sm px-3 py-1 rounded-full cursor-pointer ${
                          selectedTags.includes(tag) 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        onClick={() => handleTagClick(tag)}
                      >
                        #{tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-blue-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">{t('pages.blog.newsletter.title', 'Subscribe to Our Newsletter')}</h3>
                  <p className="text-blue-100 mb-6">
                    {t('pages.blog.newsletter.description', 'Get the latest trading insights and market analysis delivered to your inbox.')}
                  </p>
                  
                  {subscriptionStatus.message && (
                    <div className={`p-3 mb-4 rounded-lg flex items-center text-sm ${
                      subscriptionStatus.success 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {subscriptionStatus.success ? (
                        <Check className="w-4 h-4 mr-2 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      )}
                      {subscriptionStatus.message}
                    </div>
                  )}
                  
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('pages.blog.newsletter.placeholder', 'Enter your email')}
                    className="w-full px-4 py-2 rounded-lg text-gray-900 mb-4"
                  />
                  <Button 
                    className="w-full bg-white text-blue-600 hover:bg-blue-50"
                    onClick={handleSubscribe}
                    disabled={isSubmitting}
                  >
                    {isSubmitting 
                      ? t('pages.blog.newsletter.submitting', 'Subscribing...') 
                      : t('pages.blog.newsletter.button', 'Subscribe Now')}
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