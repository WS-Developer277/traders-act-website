import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedTransition from '../components/AnimatedTransition';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function StopLossPost() {
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
                src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=2940"
                alt="Stop Loss Placement"
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
                  Understanding Stop Loss Placement
                </h1>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Sarah Chen
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    March 5, 2025
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    12 min read
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
                Stop loss placement is a crucial skill that separates successful traders from those who struggle to maintain consistent profitability. This comprehensive guide will explore the art and science of setting effective stop losses to protect your trading capital.
              </p>

              <h2>The Purpose of Stop Losses</h2>
              <p>
                Stop losses serve multiple purposes:
              </p>
              <ul>
                <li>Limit potential losses on trades</li>
                <li>Remove emotion from trade management</li>
                <li>Enforce disciplined risk management</li>
                <li>Protect profits on winning trades</li>
              </ul>

              <h2>Types of Stop Losses</h2>
              
              <h3>1. Technical Stop Loss</h3>
              <p>
                Based on technical analysis levels:
              </p>
              <ul>
                <li>Support and resistance levels</li>
                <li>Moving averages</li>
                <li>Chart patterns</li>
                <li>Price action signals</li>
              </ul>

              <h3>2. Volatility Stop Loss</h3>
              <p>
                Calculated using market volatility:
              </p>
              <ul>
                <li>Average True Range (ATR)</li>
                <li>Standard deviation</li>
                <li>Bollinger Bands</li>
                <li>Volatility ratio</li>
              </ul>

              <h3>3. Time-Based Stop Loss</h3>
              <p>
                Exit trades based on time criteria:
              </p>
              <ul>
                <li>Specific time of day</li>
                <li>Duration since entry</li>
                <li>Before major news events</li>
                <li>Market session changes</li>
              </ul>

              <h2>Stop Loss Placement Strategies</h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <h3 className="text-blue-800 font-semibold mb-2">Key Principles</h3>
                <ul className="text-gray-700">
                  <li>Place stops at logical price levels</li>
                  <li>Account for normal market volatility</li>
                  <li>Avoid placing stops at obvious levels</li>
                  <li>Consider market conditions when setting stops</li>
                </ul>
              </div>

              <h2>Common Stop Loss Mistakes</h2>
              <p>
                Avoid these frequent errors:
              </p>
              <ul>
                <li>Setting stops too tight</li>
                <li>Using arbitrary stop distances</li>
                <li>Placing stops at round numbers</li>
                <li>Moving stops away from original levels</li>
                <li>Not adjusting stops for market conditions</li>
              </ul>

              <h2>Advanced Stop Loss Techniques</h2>
              
              <h3>Trailing Stops</h3>
              <p>
                Methods for trailing your stops:
              </p>
              <ul>
                <li>Fixed pip/point distance</li>
                <li>Percentage of price</li>
                <li>Technical indicator based</li>
                <li>Volatility adjusted</li>
              </ul>

              <h3>Multiple Time Frame Analysis</h3>
              <p>
                Use multiple time frames to:
              </p>
              <ul>
                <li>Identify key support/resistance levels</li>
                <li>Understand market structure</li>
                <li>Find optimal stop loss placement</li>
                <li>Confirm trade direction</li>
              </ul>

              <h2>Risk Management Integration</h2>
              <p>
                Integrate stop losses with overall risk management:
              </p>
              <ul>
                <li>Calculate position size based on stop distance</li>
                <li>Consider correlation risk with multiple positions</li>
                <li>Account for slippage in volatile markets</li>
                <li>Plan for worst-case scenarios</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Effective stop loss placement is essential for long-term trading success. Take time to develop and refine your stop loss strategy, always remembering that capital preservation is your first priority as a trader.
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
                  <span className="text-gray-500">Risk Management, Trading Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </AnimatedTransition>
  );
}