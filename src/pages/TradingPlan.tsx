import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedTransition from '../components/AnimatedTransition';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const relatedPosts = [
  {
    slug: 'mastering-risk-management',
    title: 'Mastering Risk Management: A Guide for Funded Traders',
    category: 'Risk Management',
    date: 'March 15, 2025',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2940'
  },
  {
    slug: 'psychology-successful-trading',
    title: 'The Psychology of Successful Trading',
    category: 'Trading Psychology',
    date: 'March 10, 2025',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2940'
  }
];

export default function TradingPlanPost() {
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2940"
                alt="Trading Plan"
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
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Trading Strategies</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                  Building a Robust Trading Plan
                </h1>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Alex Morgan
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    March 5, 2025
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    11 min read
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
                A well-structured trading plan is the foundation of consistent trading success. Without a comprehensive plan, traders are essentially navigating the markets blindfolded, making decisions based on emotions rather than logic. This article will guide you through the process of creating a robust trading plan that can withstand market volatility and help you achieve your financial goals.
              </p>

              <h2>Why You Need a Trading Plan</h2>
              <p>
                Before diving into the components of a trading plan, let's understand why having one is non-negotiable:
              </p>
              <ul>
                <li><strong>Eliminates emotional decision-making:</strong> A plan provides objective criteria for entries and exits</li>
                <li><strong>Creates consistency:</strong> Standardizes your approach across different market conditions</li>
                <li><strong>Enables performance measurement:</strong> Provides a benchmark against which to evaluate results</li>
                <li><strong>Facilitates improvement:</strong> Identifies strengths and weaknesses in your trading approach</li>
                <li><strong>Builds confidence:</strong> Reduces anxiety by providing clear guidelines for action</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <h3 className="text-blue-800 font-semibold mb-2">The Cost of Trading Without a Plan</h3>
                <p className="text-gray-700">
                  Research indicates that traders without a written plan are 35% more likely to abandon their strategy during market volatility and 42% more likely to exceed their risk parameters. The financial cost of trading without a plan is estimated to be 15-25% in reduced returns annually.
                </p>
              </div>

              <h2>Essential Components of a Trading Plan</h2>
              <h3>1. Trading Goals and Objectives</h3>
              <p>
                Your trading plan should begin with clear, measurable goals:
              </p>
              <ul>
                <li><strong>Financial goals:</strong> Specific return targets (monthly, quarterly, annual)</li>
                <li><strong>Performance goals:</strong> Metrics beyond P&L (win rate, risk-reward ratio, drawdown limits)</li>
                <li><strong>Development goals:</strong> Skills to acquire or improve</li>
              </ul>
              <p>
                Effective goals are SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. Instead of "make money trading," a SMART goal would be "achieve a 2% monthly return with a maximum drawdown of 5% over the next six months."
              </p>

              <h3>2. Market Analysis Framework</h3>
              <p>
                Define your approach to analyzing the markets:
              </p>
              <ul>
                <li><strong>Technical analysis:</strong> Specific indicators, chart patterns, and timeframes</li>
                <li><strong>Fundamental analysis:</strong> Economic indicators, news events, and their interpretation</li>
                <li><strong>Sentiment analysis:</strong> Methods for gauging market sentiment</li>
                <li><strong>Intermarket analysis:</strong> Correlations between different markets</li>
              </ul>
              <p>
                Be specific about which tools you'll use and how you'll interpret them. For example: "I will use the 200-day moving average on the daily chart to determine the primary trend direction, and the 20-day moving average on the 4-hour chart to identify entry opportunities."
              </p>

              <h3>3. Trade Selection Criteria</h3>
              <p>
                Clearly define what constitutes a valid trading opportunity:
              </p>
              <ul>
                <li>Specific setups you trade (e.g., breakouts, pullbacks, reversals)</li>
                <li>Confirmation signals required</li>
                <li>Minimum risk-reward ratio</li>
                <li>Market conditions when setups are valid or invalid</li>
              </ul>
              <p>
                Your criteria should be objective enough that another trader could identify the same setups using your rules.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
                <h3 className="text-amber-800 font-semibold mb-2">Example Trade Setup</h3>
                <p className="text-gray-700">
                  <strong>Pullback to Moving Average Setup:</strong>
                </p>
                <ul className="text-gray-700 mt-2">
                  <li>Market must be in an uptrend (price above 200-day MA)</li>
                  <li>Price pulls back to the 20-day MA</li>
                  <li>RSI shows bullish divergence during pullback</li>
                  <li>Candlestick reversal pattern forms at support</li>
                  <li>Volume increases on reversal day</li>
                  <li>Minimum risk-reward ratio of 1:2</li>
                </ul>
              </div>

              <h3>4. Risk Management Rules</h3>
              <p>
                This section is arguably the most important part of your trading plan:
              </p>
              <ul>
                <li><strong>Position sizing formula:</strong> Exactly how you'll calculate position size for each trade</li>
                <li><strong>Maximum risk per trade:</strong> Typically 1-2% of account value</li>
                <li><strong>Maximum portfolio risk:</strong> Total risk across all open positions</li>
                <li><strong>Stop loss methodology:</strong> How you'll determine stop loss placement</li>
                <li><strong>Drawdown limits:</strong> Maximum acceptable drawdown before reducing size or stopping</li>
                <li><strong>Correlation management:</strong> Rules for handling correlated positions</li>
              </ul>
              <p>
                Your risk management rules should be non-negotiable and followed with absolute discipline.
              </p>

              <h3>5. Trade Management Guidelines</h3>
              <p>
                Define how you'll manage trades from entry to exit:
              </p>
              <ul>
                <li><strong>Entry execution:</strong> Market orders, limit orders, or conditional orders</li>
                <li><strong>Partial profit-taking:</strong> Rules for scaling out of positions</li>
                <li><strong>Stop loss adjustments:</strong> When and how to move stops (e.g., to breakeven)</li>
                <li><strong>Adding to positions:</strong> Criteria for pyramiding or averaging down (if applicable)</li>
                <li><strong>Exit criteria:</strong> Technical levels, time-based exits, trailing stops</li>
              </ul>

              <h3>6. Trading Schedule and Routine</h3>
              <p>
                Structure creates consistency:
              </p>
              <ul>
                <li><strong>Trading hours:</strong> Specific times you'll be actively trading</li>
                <li><strong>Market preparation:</strong> Pre-market and post-market routines</li>
                <li><strong>Session review:</strong> Process for reviewing completed trades</li>
                <li><strong>Rest periods:</strong> Scheduled breaks to maintain mental freshness</li>
              </ul>

              <h3>7. Performance Tracking and Evaluation</h3>
              <p>
                Define how you'll measure and improve your trading:
              </p>
              <ul>
                <li><strong>Trade journal format:</strong> Information recorded for each trade</li>
                <li><strong>Performance metrics:</strong> Key statistics to track (win rate, average win/loss, profit factor)</li>
                <li><strong>Review schedule:</strong> Daily, weekly, and monthly review processes</li>
                <li><strong>Improvement methodology:</strong> How you'll address identified weaknesses</li>
              </ul>

              <h2>Implementing Your Trading Plan</h2>
              <h3>Creating Your First Draft</h3>
              <p>
                Follow these steps to create your initial trading plan:
              </p>
              <ol>
                <li>Start with a template or outline (like the components above)</li>
                <li>Complete each section with your specific approach</li>
                <li>Review for inconsistencies or gaps</li>
                <li>Have an experienced trader review it if possible</li>
                <li>Create a condensed one-page summary for quick reference</li>
              </ol>

              <h3>Testing Your Plan</h3>
              <p>
                Before risking real capital:
              </p>
              <ul>
                <li>Backtest your strategy if possible</li>
                <li>Paper trade to verify practicality</li>
                <li>Start with minimal risk to test in live markets</li>
                <li>Document any implementation challenges</li>
              </ul>

              <h3>Refining Your Plan</h3>
              <p>
                A trading plan is a living document:
              </p>
              <ul>
                <li>Schedule quarterly reviews to assess performance</li>
                <li>Make data-driven adjustments based on results</li>
                <li>Document all changes and the rationale behind them</li>
                <li>Avoid frequent changes based on recent results</li>
              </ul>

              <h2>Common Trading Plan Mistakes</h2>
              <p>
                Avoid these pitfalls when creating your plan:
              </p>
              <ul>
                <li><strong>Excessive complexity:</strong> Too many indicators or conflicting rules</li>
                <li><strong>Insufficient detail:</strong> Vague guidelines that require subjective interpretation</li>
                <li><strong>Unrealistic expectations:</strong> Goals that create pressure to overtrade or take excessive risk</li>
                <li><strong>Ignoring psychology:</strong> Failing to address emotional responses to trading</li>
                <li><strong>Inflexibility:</strong> Not adapting to changing market conditions</li>
                <li><strong>No accountability:</strong> Lacking mechanisms to ensure plan adherence</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                A robust trading plan transforms trading from a series of reactive decisions into a structured business operation. It provides clarity during market volatility, objectivity during emotional moments, and a framework for continuous improvement.
              </p>
              <p>
                Remember that the most sophisticated trading plan is worthless without the discipline to follow it. Commit to trading your plan with consistency, and you'll separate yourself from the majority of traders who fail due to impulsive, emotion-driven decisions.
              </p>
              <p>
                Start building your trading plan today, even if it's not perfect. As the saying goes, "Plan your trade and trade your plan." Your future trading success depends on it.
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
                    <Bookmark className="w-4 h-4" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Tags:</span>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                      Trading Strategies
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                      Trading Plan
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                      Risk Management
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-white rounded-xl p-6 mt-12 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2070"
                    alt="Alex Morgan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Alex Morgan</h3>
                  <p className="text-gray-600">Trading Coach | Systems Developer</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Alex has helped hundreds of traders develop and implement effective trading plans. With a background in systems engineering and 14 years of active trading experience, he specializes in creating robust, process-driven trading approaches.
              </p>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((post, index) => (
                  <Link key={index} to={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                        <h3 className="font-bold text-lg mt-3 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-600 mt-3">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </Link>
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
