import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedTransition from '../components/AnimatedTransition';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const relatedPosts = [
  {
    slug: 'position-sizing-strategies',
    title: 'Position Sizing Strategies for Day Traders',
    category: 'Risk Management',
    date: 'March 10, 2025',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2940'
  },
  {
    slug: 'understanding-stop-loss',
    title: 'Understanding Stop Loss Placement',
    category: 'Risk Management',
    date: 'March 5, 2025',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=2940'
  }
];

export default function BlogPost() {
  // Keeping useTranslation hook for future internationalization needs
  useTranslation();

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
                alt="Risk Management in Trading"
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
                  Back to Blog
                </Link>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Risk Management</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                  Mastering Risk Management: A Guide for Funded Traders
                </h1>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Ahmed Al-Farsi
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    March 15, 2025
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    8 min read
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                Risk management is the cornerstone of successful trading. For funded traders, who are managing significant capital provided by others, mastering risk management becomes even more crucial. This comprehensive guide will explore essential risk management techniques that professional traders use to protect their capital and maximize returns.
              </p>

              <h2>The Foundation: Position Sizing</h2>
              <p>
                Position sizing is your first line of defense against excessive losses. As a funded trader, you should never risk more than 1-2% of your account on any single trade. This means that if you have a $100,000 funded account, your maximum risk per trade should be between $1,000 and $2,000.
              </p>
              <p>
                To calculate your position size:
              </p>
              <ol>
                <li>Determine your account risk (1-2% of account size)</li>
                <li>Identify your stop loss in pips or points</li>
                <li>Calculate your position size based on the risk per pip/point</li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <h3 className="text-blue-800 font-semibold mb-2">Example Calculation</h3>
                <p className="text-gray-700">
                  Account Size: $100,000<br />
                  Risk per Trade: 1% = $1,000<br />
                  Stop Loss: 50 pips<br />
                  Therefore: $1,000 ÷ 50 pips = $20 per pip<br />
                  Position Size: Adjust your lot size to achieve $20 per pip
                </p>
              </div>

              <h2>Stop Loss Strategy</h2>
              <p>
                Every trade must have a predetermined stop loss. This is non-negotiable. Your stop loss should be placed at a level that:
              </p>
              <ul>
                <li>Invalidates your trading setup</li>
                <li>Accounts for market volatility</li>
                <li>Aligns with your risk per trade</li>
                <li>Considers key support/resistance levels</li>
              </ul>

              <h2>Risk-Reward Ratio</h2>
              <p>
                Maintain a minimum risk-reward ratio of 1:2, meaning your potential profit should be at least twice your risk. This allows you to be profitable even with a win rate below 50%. For example:
              </p>
              <ul>
                <li>Risk per trade: $1,000</li>
                <li>Minimum target: $2,000</li>
                <li>With a 40% win rate: (40% × $2,000) - (60% × $1,000) = $200 average profit per trade</li>
              </ul>

              <h2>Drawdown Management</h2>
              <p>
                As a funded trader, you'll typically have maximum drawdown limits. To stay well within these limits:
              </p>
              <ul>
                <li>Track your daily and overall drawdown</li>
                <li>Reduce position sizes after consecutive losses</li>
                <li>Take a break if you reach 50% of your maximum drawdown</li>
                <li>Implement a daily stop-loss limit</li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
                <h3 className="text-amber-800 font-semibold mb-2">Warning Signs</h3>
                <p className="text-gray-700">
                  Stop trading immediately if you:
                </p>
                <ul className="text-gray-700 mt-2">
                  <li>Reach your daily loss limit</li>
                  <li>Experience three consecutive losses</li>
                  <li>Feel emotionally compromised</li>
                  <li>Start deviating from your trading plan</li>
                </ul>
              </div>

              <h2>Correlation Risk</h2>
              <p>
                Be mindful of correlation risk when trading multiple positions. Taking several correlated trades effectively increases your position size and risk exposure. For example:
              </p>
              <ul>
                <li>Trading multiple forex pairs with high USD exposure</li>
                <li>Taking positions in both oil and CAD pairs</li>
                <li>Trading indices with overlapping components</li>
              </ul>

              <h2>Advanced Risk Management Techniques</h2>
              <h3>Scaling In and Out</h3>
              <p>
                Instead of entering or exiting positions all at once, consider:
              </p>
              <ul>
                <li>Scaling into positions to average your entry price</li>
                <li>Taking partial profits to secure gains</li>
                <li>Moving stop loss to breakeven after partial profits</li>
              </ul>

              <h3>Time-Based Risk Management</h3>
              <p>
                Different trading sessions have different risk characteristics:
              </p>
              <ul>
                <li>Avoid trading during major news events</li>
                <li>Be cautious during market opens and closes</li>
                <li>Adjust position sizes during volatile periods</li>
                <li>Consider time stops for trades not moving in your favor</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Risk management is what separates successful funded traders from those who fail. By implementing these strategies and maintaining strict discipline, you can protect your funded account and build a sustainable trading career. Remember, your first goal as a funded trader should be capital preservation, followed by consistent growth.
              </p>
            </div>

            {/* Article Footer */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    Helpful
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Bookmark className="w-4 h-4" />
                    Save
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-500">Risk Management, Trading</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
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
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {post.title}
                      </h3>
                      <Link to={`/blog/${post.slug}`} className="group">
                        <Button variant="outline">
                          Read Article
                        </Button>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </AnimatedTransition>
  );
}