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
    slug: 'economic-indicators',
    title: 'Economic Indicators That Matter',
    category: 'Fundamental Analysis',
    date: 'March 3, 2025',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2940'
  },
  {
    slug: 'technical-analysis-beyond-basics',
    title: 'Technical Analysis: Beyond the Basics',
    category: 'Technical Analysis',
    date: 'March 12, 2025',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=2940'
  }
];

export default function MarketCorrelationsPost() {
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2940"
                alt="Market Correlations"
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
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Market Analysis</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                  Understanding Market Correlations
                </h1>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    David Wilson
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    March 8, 2025
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    9 min read
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
                Market correlations are among the most powerful yet often overlooked concepts in trading. Understanding how different assets move in relation to each other can provide valuable insights for risk management, portfolio diversification, and identifying trading opportunities. This article explores the concept of market correlations and how traders can use this knowledge to improve their trading results.
              </p>

              <h2>What Are Market Correlations?</h2>
              <p>
                Correlation in financial markets measures the degree to which two or more assets move in relation to each other. Correlation coefficients range from -1 to +1:
              </p>
              <ul>
                <li><strong>Positive correlation (+1):</strong> Assets move in the same direction</li>
                <li><strong>Negative correlation (-1):</strong> Assets move in opposite directions</li>
                <li><strong>No correlation (0):</strong> Assets move independently of each other</li>
              </ul>
              <p>
                In reality, most correlations fall somewhere between these extremes and can change over time.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <h3 className="text-blue-800 font-semibold mb-2">Correlation Coefficient Interpretation</h3>
                <ul className="text-gray-700">
                  <li><strong>0.7 to 1.0:</strong> Strong positive correlation</li>
                  <li><strong>0.3 to 0.7:</strong> Moderate positive correlation</li>
                  <li><strong>0 to 0.3:</strong> Weak positive correlation</li>
                  <li><strong>0 to -0.3:</strong> Weak negative correlation</li>
                  <li><strong>-0.3 to -0.7:</strong> Moderate negative correlation</li>
                  <li><strong>-0.7 to -1.0:</strong> Strong negative correlation</li>
                </ul>
              </div>

              <h2>Key Market Correlations</h2>
              <h3>Currency Pairs</h3>
              <p>
                The foreign exchange market features numerous correlations:
              </p>
              <ul>
                <li><strong>EUR/USD and USD/CHF:</strong> Strong negative correlation (typically -0.8 to -0.9)</li>
                <li><strong>AUD/USD and USD/CAD:</strong> Negative correlation due to commodity influences</li>
                <li><strong>EUR/USD and GBP/USD:</strong> Positive correlation (typically 0.7 to 0.9)</li>
                <li><strong>USD/CAD and Crude Oil:</strong> Negative correlation (CAD strengthens when oil prices rise)</li>
              </ul>

              <h3>Equities and Bonds</h3>
              <p>
                The relationship between stocks and bonds is fundamental to market dynamics:
              </p>
              <ul>
                <li>Traditionally, stocks and government bonds have a negative correlation</li>
                <li>During risk-off periods, money flows from stocks to bonds (flight to safety)</li>
                <li>This correlation can break down during certain economic conditions (e.g., stagflation)</li>
              </ul>

              <h3>Gold and Market Factors</h3>
              <p>
                Gold exhibits several important correlations:
              </p>
              <ul>
                <li><strong>Gold and USD:</strong> Generally negative correlation</li>
                <li><strong>Gold and Inflation:</strong> Positive correlation during inflationary periods</li>
                <li><strong>Gold and Market Uncertainty:</strong> Positive correlation during times of crisis</li>
              </ul>

              <h3>Sector Correlations</h3>
              <p>
                Within equity markets, different sectors show varying correlations:
              </p>
              <ul>
                <li>Technology and Consumer Discretionary: Often positively correlated</li>
                <li>Energy and Transportation: Negatively correlated (fuel costs impact transportation profits)</li>
                <li>Utilities and Interest Rates: Negatively correlated (higher rates hurt dividend-paying utilities)</li>
              </ul>

              <h2>Practical Applications for Traders</h2>
              <h3>Risk Management</h3>
              <p>
                Understanding correlations is crucial for effective risk management:
              </p>
              <ul>
                <li><strong>Avoid correlation blindness:</strong> Taking multiple positions that are highly correlated effectively increases your exposure</li>
                <li><strong>Example:</strong> Simultaneously trading EUR/USD long, USD/CHF short, and GBP/USD long creates excessive exposure to USD weakness</li>
                <li><strong>Position sizing:</strong> Adjust position sizes based on correlation to avoid overexposure</li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
                <h3 className="text-amber-800 font-semibold mb-2">Risk Management Example</h3>
                <p className="text-gray-700">
                  If you're trading three pairs with a 0.8 correlation to each other, consider:
                </p>
                <ul className="text-gray-700 mt-2">
                  <li>Reducing position size for each trade by 20-30%</li>
                  <li>Setting a combined stop loss for the correlated basket</li>
                  <li>Monitoring total exposure rather than individual trade risk</li>
                </ul>
              </div>

              <h3>Portfolio Diversification</h3>
              <p>
                Correlations are the foundation of effective diversification:
              </p>
              <ul>
                <li>True diversification requires assets with low or negative correlations</li>
                <li>During market stress, many correlations trend toward 1.0 (correlation convergence)</li>
                <li>Dynamic correlation management may be necessary during different market regimes</li>
              </ul>

              <h3>Identifying Trading Opportunities</h3>
              <p>
                Correlations can reveal potential trading setups:
              </p>
              <h4>1. Correlation Divergence</h4>
              <p>
                When typically correlated assets begin to diverge, it may signal a trading opportunity:
              </p>
              <ul>
                <li>If EUR/USD rises but GBP/USD fails to follow, this divergence might indicate weakness in GBP</li>
                <li>If crude oil rises significantly but USD/CAD doesn't fall as expected, CAD may be undervalued</li>
              </ul>

              <h4>2. Correlation Arbitrage</h4>
              <p>
                Taking advantage of temporary disruptions in established correlations:
              </p>
              <ul>
                <li>When correlated assets temporarily move out of sync, traders can position for a return to the normal relationship</li>
                <li>This approach requires statistical validation and careful risk management</li>
              </ul>

              <h4>3. Leading Indicators</h4>
              <p>
                Some markets tend to lead others, creating predictive relationships:
              </p>
              <ul>
                <li>Bond yields often move before equity markets</li>
                <li>Commodity prices frequently lead currency movements in commodity-dependent economies</li>
                <li>VIX (volatility index) movements can precede equity market direction</li>
              </ul>

              <h2>Analyzing Correlations</h2>
              <h3>Correlation Calculation Methods</h3>
              <p>
                Traders can use several approaches to measure correlations:
              </p>
              <ul>
                <li><strong>Pearson correlation coefficient:</strong> The most common measure, showing linear relationships</li>
                <li><strong>Spearman rank correlation:</strong> Measures monotonic relationships without requiring linearity</li>
                <li><strong>Rolling correlations:</strong> Calculate correlation over moving time windows to observe changes</li>
              </ul>

              <h3>Timeframe Considerations</h3>
              <p>
                Correlations vary across different timeframes:
              </p>
              <ul>
                <li>Short-term correlations (intraday to weekly) are more volatile and less reliable</li>
                <li>Medium-term correlations (monthly) often reflect current market regimes</li>
                <li>Long-term correlations (quarterly to yearly) reveal fundamental economic relationships</li>
              </ul>
              <p>
                Always analyze correlations on timeframes relevant to your trading horizon.
              </p>

              <h2>Correlation Traps to Avoid</h2>
              <p>
                Be aware of these common pitfalls when using correlations in your trading:
              </p>
              <ul>
                <li><strong>Correlation ≠ Causation:</strong> Just because assets move together doesn't mean one causes the other</li>
                <li><strong>Regime Changes:</strong> Correlations can shift dramatically during different economic conditions</li>
                <li><strong>Outlier Events:</strong> Black swan events can temporarily break established correlations</li>
                <li><strong>Over-optimization:</strong> Fitting correlation models too closely to historical data</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Understanding market correlations provides traders with a powerful framework for risk management, portfolio construction, and identifying trading opportunities. By recognizing how different assets move in relation to each other, traders can gain a more comprehensive view of market dynamics and make more informed decisions.
              </p>
              <p>
                Remember that correlations are not static—they evolve with changing market conditions and economic factors. Successful traders regularly reassess correlation relationships and adjust their strategies accordingly. By incorporating correlation analysis into your trading approach, you can enhance your market awareness and potentially improve your trading results.
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
                      Market Analysis
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                      Correlations
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
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070"
                    alt="David Wilson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">David Wilson</h3>
                  <p className="text-gray-600">Market Analyst | Former Institutional Trader</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                David specializes in intermarket analysis and correlation trading. With over 18 years of experience in global markets, he has developed proprietary correlation models used by institutional traders worldwide.
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
