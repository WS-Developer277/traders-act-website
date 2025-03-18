import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedTransition from '../components/AnimatedTransition';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function PositionSizingPost() {
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
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2940"
                alt="Position Sizing in Trading"
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
                  Position Sizing Strategies for Day Traders
                </h1>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Sarah Chen
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    March 10, 2025
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    10 min read
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
                Position sizing is one of the most critical aspects of day trading success. It determines not only your potential profit but, more importantly, your risk exposure. In this comprehensive guide, we'll explore effective position sizing strategies specifically tailored for day traders.
              </p>

              <h2>The Importance of Position Sizing</h2>
              <p>
                Proper position sizing helps you:
              </p>
              <ul>
                <li>Control risk on individual trades</li>
                <li>Maintain consistent exposure across different setups</li>
                <li>Preserve capital during drawdowns</li>
                <li>Scale positions based on conviction and market conditions</li>
              </ul>

              <h2>Fixed Risk Position Sizing</h2>
              <p>
                The most common and reliable approach for day traders is the fixed risk method. This involves risking a consistent percentage of your account on each trade, typically 1% to 2%.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <h3 className="text-blue-800 font-semibold mb-2">Example Calculation</h3>
                <p className="text-gray-700">
                  Account Size: $50,000<br />
                  Risk per Trade: 1% = $500<br />
                  Entry Price: $100<br />
                  Stop Loss: $98<br />
                  Risk per Share: $2<br />
                  Position Size: $500 ÷ $2 = 250 shares
                </p>
              </div>

              <h2>Advanced Position Sizing Techniques</h2>
              
              <h3>1. Volatility-Based Sizing</h3>
              <p>
                Adjust your position size based on market volatility:
              </p>
              <ul>
                <li>Use ATR (Average True Range) to measure volatility</li>
                <li>Reduce size during high volatility periods</li>
                <li>Increase size during stable market conditions</li>
                <li>Consider time of day when sizing positions</li>
              </ul>

              <h3>2. Tier-Based Position Sizing</h3>
              <p>
                Scale your position size based on setup quality:
              </p>
              <ul>
                <li>A-grade setups: Full size (1-2% risk)</li>
                <li>B-grade setups: Half size (0.5-1% risk)</li>
                <li>C-grade setups: Quarter size (0.25-0.5% risk)</li>
                <li>Avoid D-grade setups entirely</li>
              </ul>

              <h2>Position Sizing Rules for Day Traders</h2>
              <ol>
                <li>Never risk more than 2% on any single trade</li>
                <li>Reduce size after consecutive losses</li>
                <li>Consider correlation when trading multiple positions</li>
                <li>Account for liquidity when determining position size</li>
                <li>Adjust size based on time of day and market conditions</li>
              </ol>

              <h2>Common Position Sizing Mistakes</h2>
              <p>
                Avoid these common pitfalls:
              </p>
              <ul>
                <li>Oversizing positions based on FOMO</li>
                <li>Not accounting for slippage in size calculations</li>
                <li>Failing to adjust size for different market conditions</li>
                <li>Using inconsistent sizing across similar setups</li>
                <li>Not considering the impact of leverage on position size</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Mastering position sizing is essential for long-term trading success. Start with conservative sizes, maintain consistency, and gradually refine your approach based on experience and results. Remember, preservation of capital should always be your primary concern as a day trader.
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
                  <span className="text-gray-500">Risk Management, Day Trading</span>
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