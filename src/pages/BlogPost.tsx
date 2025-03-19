import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Bookmark, ThumbsUp, Copy, Mail, Twitter, Facebook, Linkedin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedTransition from '../components/AnimatedTransition';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Add tags to related posts
const relatedPosts = [
  {
    slug: 'position-sizing-strategies',
    title: 'Position Sizing Strategies for Day Traders',
    category: 'Risk Management',
    tags: ['Risk Management', 'Position Sizing', 'Day Trading'],
    date: 'March 10, 2025',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2940'
  },
  {
    slug: 'understanding-stop-loss',
    title: 'Understanding Stop Loss Placement',
    category: 'Risk Management',
    tags: ['Risk Management', 'Stop Loss', 'Technical Analysis'],
    date: 'March 5, 2025',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=2940'
  }
];

export default function BlogPost() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(42); // Starting with a default count
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [shareSuccess, setShareSuccess] = useState<string | null>(null);
  const shareOptionsRef = useRef<HTMLDivElement>(null);
  
  // Current blog post slug - in a real app, this would come from the URL or router
  const currentPostSlug = 'mastering-risk-management';
  
  // Current blog post tags
  const currentPostTags = ['Risk Management', 'Stop Loss', 'Position Sizing', 'Drawdown'];

  // Current post title and description for sharing
  const postTitle = t(`pages.blog.posts.${currentPostSlug}.title`, 'Mastering Risk Management: A Guide for Funded Traders');
  const postDescription = t(`pages.blog.posts.${currentPostSlug}.excerpt`, 'Learn the essential risk management techniques that professional traders use to protect their capital and maximize returns.');
  const postUrl = window.location.href;

  // Handle like button click
  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(prevCount => prevCount - 1);
    } else {
      setLikeCount(prevCount => prevCount + 1);
    }
    setIsLiked(!isLiked);
    
    // In a real app, you would make an API call to update the like status
    // Example: api.updateLikeStatus(currentPostSlug, !isLiked);
  };

  // Handle save button click
  const handleSaveClick = () => {
    setIsSaved(!isSaved);
    
    // In a real app, you would make an API call to update the saved status
    // Example: api.updateSavedStatus(currentPostSlug, !isSaved);
  };

  // Handle share button click - now toggles share options
  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
  };

  // Handle share via Web Share API
  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: postTitle,
        text: postDescription,
        url: postUrl,
      })
      .then(() => {
        setShareSuccess(t('pages.blog.shareSuccess.native', 'Successfully shared!'));
        setTimeout(() => setShareSuccess(null), 3000);
        setShowShareOptions(false);
      })
      .catch((error) => console.log('Error sharing', error));
    }
  };

  // Handle copy link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl)
      .then(() => {
        setShareSuccess(t('pages.blog.shareSuccess.copy', 'Link copied to clipboard!'));
        setTimeout(() => setShareSuccess(null), 3000);
        setShowShareOptions(false);
      })
      .catch((error) => {
        console.error('Failed to copy link:', error);
      });
  };

  // Handle email share
  const handleEmailShare = () => {
    const subject = encodeURIComponent(postTitle);
    const body = encodeURIComponent(`${postDescription}\n\n${postUrl}`);
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
    setShareSuccess(t('pages.blog.shareSuccess.email', 'Email client opened!'));
    setTimeout(() => setShareSuccess(null), 3000);
    setShowShareOptions(false);
  };

  // Handle social media sharing
  const handleSocialShare = (platform: string) => {
    let shareUrl = '';
    const encodedUrl = encodeURIComponent(postUrl);
    const encodedTitle = encodeURIComponent(postTitle);

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
      setShareSuccess(t('pages.blog.shareSuccess.social', `Shared on ${platform}!`));
      setTimeout(() => setShareSuccess(null), 3000);
      setShowShareOptions(false);
    }
  };
  
  // Handle tag click
  const handleTagClick = (tag: string) => {
    // In a real app, you would navigate to the blog page with the tag filter applied
    // For now, we'll just navigate to the blog page
    navigate('/blog');
    
    // In a real implementation, you might use a query parameter or state management
    // Example: navigate(`/blog?tag=${encodeURIComponent(tag)}`);
    console.log(`Navigating with tag: ${tag}`); // Use the tag parameter to avoid unused variable warning
  };

  // Close share options when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (shareOptionsRef.current && !shareOptionsRef.current.contains(event.target as Node)) {
        setShowShareOptions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Load saved preferences from localStorage on component mount
  useEffect(() => {
    const savedLikeStatus = localStorage.getItem(`blog_liked_${currentPostSlug}`);
    const savedBookmarkStatus = localStorage.getItem(`blog_saved_${currentPostSlug}`);
    
    if (savedLikeStatus === 'true') {
      setIsLiked(true);
    }
    
    if (savedBookmarkStatus === 'true') {
      setIsSaved(true);
    }
  }, [currentPostSlug]);

  // Save preferences to localStorage when they change
  useEffect(() => {
    localStorage.setItem(`blog_liked_${currentPostSlug}`, isLiked.toString());
  }, [isLiked, currentPostSlug]);

  useEffect(() => {
    localStorage.setItem(`blog_saved_${currentPostSlug}`, isSaved.toString());
  }, [isSaved, currentPostSlug]);

  return (
    <AnimatedTransition>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <article>
          {/* Hero Section */}
          <div className="relative h-[60vh] overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2940"
                alt={t(`pages.blog.posts.${currentPostSlug}.title`, 'Risk Management in Trading')}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/blog" className="inline-flex items-center text-white hover:text-blue-200 mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('pages.blog.backToBlog', 'Back to Blog')}
                </Link>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  {t('pages.blog.categories.riskManagement', 'Risk Management')}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                  {t(`pages.blog.posts.${currentPostSlug}.title`, 'Mastering Risk Management: A Guide for Funded Traders')}
                </h1>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {t(`pages.blog.posts.${currentPostSlug}.author`, 'Ahmed Al-Farsi')}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {t(`pages.blog.posts.${currentPostSlug}.date`, 'March 15, 2025')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {t(`pages.blog.posts.${currentPostSlug}.readTime`, '8 min read')}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {currentPostTags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-white/20 text-white px-2 py-1 rounded-full text-xs cursor-pointer hover:bg-white/30 transition-colors"
                      onClick={() => handleTagClick(tag)}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="prose prose-lg max-w-none">
              <h2>{t(`pages.blog.posts.${currentPostSlug}.sections.introduction.title`, 'Introduction')}</h2>
              <p>
                {t(`pages.blog.posts.${currentPostSlug}.sections.introduction.content`, 'Risk management is the cornerstone of successful trading. For funded traders, who are managing significant capital provided by others, mastering risk management becomes even more crucial. This comprehensive guide will explore essential risk management techniques that professional traders use to protect their capital and maximize returns.')}
              </p>

              <h2>{t(`pages.blog.posts.${currentPostSlug}.sections.positionSizing.title`, 'The Foundation: Position Sizing')}</h2>
              <p>
                {t(`pages.blog.posts.${currentPostSlug}.sections.positionSizing.content1`, 'Position sizing is your first line of defense against excessive losses. As a funded trader, you should never risk more than 1-2% of your account on any single trade. This means that if you have a $100,000 funded account, your maximum risk per trade should be between $1,000 and $2,000.')}
              </p>
              <p>
                {t(`pages.blog.posts.${currentPostSlug}.sections.positionSizing.content2`, 'To calculate your position size:')}
              </p>
              <ol>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.positionSizing.steps.step1`, 'Determine your account risk (1-2% of account size)')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.positionSizing.steps.step2`, 'Identify your stop loss in pips or points')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.positionSizing.steps.step3`, 'Calculate your position size based on the risk per pip/point')}</li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <h3 className="text-blue-800 font-semibold mb-2">{t(`pages.blog.posts.${currentPostSlug}.sections.positionSizing.example.title`, 'Example Calculation')}</h3>
                <p className="text-gray-700">
                  {t(`pages.blog.posts.${currentPostSlug}.sections.positionSizing.example.content`, 'Account Size: $100,000<br />Risk per Trade: 1% = $1,000<br />Stop Loss: 50 pips<br />Therefore: $1,000 ÷ 50 pips = $20 per pip<br />Position Size: Adjust your lot size to achieve $20 per pip', { interpolation: { escapeValue: false } })}
                </p>
              </div>

              <h2>{t(`pages.blog.posts.${currentPostSlug}.sections.stopLoss.title`, 'Stop Loss Strategy')}</h2>
              <p>
                {t(`pages.blog.posts.${currentPostSlug}.sections.stopLoss.content`, 'Every trade must have a predetermined stop loss. This is non-negotiable. Your stop loss should be placed at a level that:')}
              </p>
              <ul>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.stopLoss.points.point1`, 'Invalidates your trading setup')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.stopLoss.points.point2`, 'Accounts for market volatility')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.stopLoss.points.point3`, 'Aligns with your risk per trade')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.stopLoss.points.point4`, 'Considers key support/resistance levels')}</li>
              </ul>

              <h2>{t(`pages.blog.posts.${currentPostSlug}.sections.riskReward.title`, 'Risk-Reward Ratio')}</h2>
              <p>
                {t(`pages.blog.posts.${currentPostSlug}.sections.riskReward.content`, 'Maintain a minimum risk-reward ratio of 1:2, meaning your potential profit should be at least twice your risk. This allows you to be profitable even with a win rate below 50%. For example:')}
              </p>
              <ul>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.riskReward.points.point1`, 'Risk per trade: $1,000')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.riskReward.points.point2`, 'Minimum target: $2,000')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.riskReward.points.point3`, 'With a 40% win rate: (40% × $2,000) - (60% × $1,000) = $200 average profit per trade')}</li>
              </ul>

              <h2>{t(`pages.blog.posts.${currentPostSlug}.sections.drawdown.title`, 'Drawdown Management')}</h2>
              <p>
                {t(`pages.blog.posts.${currentPostSlug}.sections.drawdown.content`, 'As a funded trader, you\'ll typically have maximum drawdown limits. To stay well within these limits:')}
              </p>
              <ul>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.drawdown.points.point1`, 'Track your daily and overall drawdown')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.drawdown.points.point2`, 'Reduce position sizes after consecutive losses')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.drawdown.points.point3`, 'Take a break if you reach 50% of your maximum drawdown')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.drawdown.points.point4`, 'Implement a daily stop-loss limit')}</li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
                <h3 className="text-amber-800 font-semibold mb-2">{t(`pages.blog.posts.${currentPostSlug}.sections.drawdown.warning.title`, 'Warning Signs')}</h3>
                <p className="text-gray-700">
                  {t(`pages.blog.posts.${currentPostSlug}.sections.drawdown.warning.content`, 'Stop trading immediately if you:')}
                </p>
                <ul className="text-gray-700 mt-2">
                  <li>{t(`pages.blog.posts.${currentPostSlug}.sections.drawdown.warning.points.point1`, 'Reach your daily loss limit')}</li>
                  <li>{t(`pages.blog.posts.${currentPostSlug}.sections.drawdown.warning.points.point2`, 'Experience three consecutive losses')}</li>
                  <li>{t(`pages.blog.posts.${currentPostSlug}.sections.drawdown.warning.points.point3`, 'Feel emotionally compromised')}</li>
                  <li>{t(`pages.blog.posts.${currentPostSlug}.sections.drawdown.warning.points.point4`, 'Start deviating from your trading plan')}</li>
                </ul>
              </div>

              <h2>{t(`pages.blog.posts.${currentPostSlug}.sections.correlation.title`, 'Correlation Risk')}</h2>
              <p>
                {t(`pages.blog.posts.${currentPostSlug}.sections.correlation.content`, 'Be mindful of correlation risk when trading multiple positions. Taking several correlated trades effectively increases your position size and risk exposure. For example:')}
              </p>
              <ul>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.correlation.points.point1`, 'Trading multiple forex pairs with high USD exposure')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.correlation.points.point2`, 'Taking positions in both oil and CAD pairs')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.correlation.points.point3`, 'Trading indices with overlapping components')}</li>
              </ul>

              <h2>{t(`pages.blog.posts.${currentPostSlug}.sections.advanced.title`, 'Advanced Risk Management Techniques')}</h2>
              <h3>{t(`pages.blog.posts.${currentPostSlug}.sections.advanced.scaling.title`, 'Scaling In and Out')}</h3>
              <p>
                {t(`pages.blog.posts.${currentPostSlug}.sections.advanced.scaling.content`, 'Instead of entering or exiting positions all at once, consider:')}
              </p>
              <ul>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.advanced.scaling.points.point1`, 'Scaling into positions to average your entry price')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.advanced.scaling.points.point2`, 'Taking partial profits to secure gains')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.advanced.scaling.points.point3`, 'Moving stop loss to breakeven after partial profits')}</li>
              </ul>

              <h3>{t(`pages.blog.posts.${currentPostSlug}.sections.advanced.time.title`, 'Time-Based Risk Management')}</h3>
              <p>
                {t(`pages.blog.posts.${currentPostSlug}.sections.advanced.time.content`, 'Different trading sessions have different risk characteristics:')}
              </p>
              <ul>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.advanced.time.points.point1`, 'Avoid trading during major news events')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.advanced.time.points.point2`, 'Be cautious during market opens and closes')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.advanced.time.points.point3`, 'Adjust position sizes during volatile periods')}</li>
                <li>{t(`pages.blog.posts.${currentPostSlug}.sections.advanced.time.points.point4`, 'Consider time stops for trades not moving in your favor')}</li>
              </ul>

              <h2>{t(`pages.blog.posts.${currentPostSlug}.sections.conclusion.title`, 'Conclusion')}</h2>
              <p>
                {t(`pages.blog.posts.${currentPostSlug}.sections.conclusion.content`, 'Risk management is what separates successful funded traders from those who fail. By implementing these strategies and maintaining strict discipline, you can protect your funded account and build a sustainable trading career. Remember, your first goal as a funded trader should be capital preservation, followed by consistent growth.')}
              </p>
            </div>

            {/* Article Footer */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2 relative">
                  <Button 
                    variant={isLiked ? "primary" : "outline"} 
                    size="sm" 
                    className={`gap-2 ${isLiked ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} rounded-md py-2 px-4`}
                    onClick={handleLikeClick}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    {isLiked ? t('pages.blog.actions.helpful.liked', 'Helpful') : t('pages.blog.actions.helpful', 'Helpful')} ({likeCount})
                  </Button>
                  
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-md py-2 px-4"
                      onClick={handleShareClick}
                      id="share-button"
                      aria-haspopup="true"
                      aria-expanded={showShareOptions}
                    >
                      <Share2 className="w-4 h-4" />
                      {t('pages.blog.actions.share', 'Share')}
                    </Button>
                    
                    {/* Share Options Dropdown */}
                    {showShareOptions && (
                      <div 
                        ref={shareOptionsRef}
                        className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="share-button"
                      >
                        <div className="py-1">
                          {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
                            <button
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={handleNativeShare}
                              role="menuitem"
                            >
                              <Share2 className="w-4 h-4 mr-3" />
                              {t('pages.blog.shareOptions.native', 'Share via device')}
                            </button>
                          )}
                          <button
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={handleCopyLink}
                            role="menuitem"
                          >
                            <Copy className="w-4 h-4 mr-3" />
                            {t('pages.blog.shareOptions.copy', 'Copy link')}
                          </button>
                          <button
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={handleEmailShare}
                            role="menuitem"
                          >
                            <Mail className="w-4 h-4 mr-3" />
                            {t('pages.blog.shareOptions.email', 'Share via email')}
                          </button>
                          <button
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => handleSocialShare('twitter')}
                            role="menuitem"
                          >
                            <Twitter className="w-4 h-4 mr-3" />
                            {t('pages.blog.shareOptions.twitter', 'Share on Twitter')}
                          </button>
                          <button
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => handleSocialShare('facebook')}
                            role="menuitem"
                          >
                            <Facebook className="w-4 h-4 mr-3" />
                            {t('pages.blog.shareOptions.facebook', 'Share on Facebook')}
                          </button>
                          <button
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => handleSocialShare('linkedin')}
                            role="menuitem"
                          >
                            <Linkedin className="w-4 h-4 mr-3" />
                            {t('pages.blog.shareOptions.linkedin', 'Share on LinkedIn')}
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {/* Share Success Message */}
                    {shareSuccess && (
                      <div className="absolute right-0 mt-2 p-2 bg-green-100 text-green-800 rounded-md shadow-md">
                        {shareSuccess}
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    variant={isSaved ? "primary" : "outline"} 
                    size="sm" 
                    className={`gap-2 ${isSaved ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} rounded-md py-2 px-4`}
                    onClick={handleSaveClick}
                  >
                    <Bookmark className="w-4 h-4" />
                    {isSaved ? t('pages.blog.actions.saved', 'Saved') : t('pages.blog.actions.save', 'Save')}
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-0">
                  <Tag className="w-4 h-4 text-gray-500" />
                  <div className="flex flex-wrap gap-2">
                    {currentPostTags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
                        onClick={() => handleTagClick(tag)}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('pages.blog.relatedArticles', 'Related Articles')}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((post, index) => (
                  <motion.article
                    key={post.title}
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
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
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
                        
                        {/* Tags */}
                        {post.tags && (
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span 
                                key={tag}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
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
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </AnimatedTransition>
  );
}