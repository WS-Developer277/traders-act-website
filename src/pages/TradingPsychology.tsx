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
    slug: 'technical-analysis-beyond-basics',
    title: 'Technical Analysis: Beyond the Basics',
    category: 'Technical Analysis',
    date: 'March 12, 2025',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=2940'
  }
];

export default function TradingPsychologyPost() {
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
                alt="Trading Psychology"
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
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Trading Psychology</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                  The Psychology of Successful Trading
                </h1>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Raj Patel
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
                Trading is often viewed primarily as a technical or analytical endeavor, but the reality is that psychology plays an equally—if not more—important role in determining trading success. Even the most sophisticated trading strategy will fail in the hands of a trader who cannot maintain emotional discipline. This article explores the psychological aspects of trading and provides practical strategies for developing the mental resilience needed for consistent profitability.
              </p>

              <h2>The Psychological Challenges of Trading</h2>
              <p>
                Trading presents unique psychological challenges that few other professions share:
              </p>
              <ul>
                <li><strong>Uncertainty:</strong> Markets are inherently unpredictable, forcing traders to make decisions with incomplete information</li>
                <li><strong>Financial risk:</strong> The potential for monetary loss creates emotional pressure</li>
                <li><strong>Performance anxiety:</strong> The need to perform consistently despite market variability</li>
                <li><strong>Isolation:</strong> Trading is often a solitary activity with limited feedback</li>
                <li><strong>Cognitive biases:</strong> Natural human tendencies that can distort decision-making</li>
              </ul>

              <h2>Common Psychological Pitfalls</h2>
              <h3>Fear and Greed</h3>
              <p>
                The twin emotions of fear and greed drive most trading mistakes. Fear leads to hesitation, premature exits, and missed opportunities. Greed encourages overtrading, excessive risk-taking, and holding losing positions too long.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <h3 className="text-blue-800 font-semibold mb-2">Recognizing Emotional Trading</h3>
                <p className="text-gray-700">
                  Signs you're trading based on emotions rather than your strategy:
                </p>
                <ul className="text-gray-700 mt-2">
                  <li>Taking positions without clear entry criteria</li>
                  <li>Increasing position size after a winning streak</li>
                  <li>Moving stop losses to avoid taking a loss</li>
                  <li>Feeling elated after wins or devastated after losses</li>
                  <li>Trading out of boredom or to "make back" losses</li>
                </ul>
              </div>

              <h3>Cognitive Biases</h3>
              <p>
                Traders are susceptible to numerous cognitive biases:
              </p>
              <ul>
                <li><strong>Confirmation bias:</strong> Seeking information that confirms existing beliefs</li>
                <li><strong>Recency bias:</strong> Overweighting recent events when making decisions</li>
                <li><strong>Loss aversion:</strong> Feeling losses more intensely than equivalent gains</li>
                <li><strong>Anchoring:</strong> Relying too heavily on the first piece of information encountered</li>
                <li><strong>Overconfidence:</strong> Overestimating one's abilities and the accuracy of one's knowledge</li>
              </ul>

              <h2>Building Psychological Resilience</h2>
              <h3>Developing a Trading Mindset</h3>
              <p>
                Successful traders cultivate specific mental attributes:
              </p>
              <ul>
                <li><strong>Patience:</strong> Waiting for high-probability setups rather than forcing trades</li>
                <li><strong>Discipline:</strong> Following trading rules regardless of emotions</li>
                <li><strong>Objectivity:</strong> Analyzing market conditions without emotional bias</li>
                <li><strong>Adaptability:</strong> Adjusting to changing market conditions</li>
                <li><strong>Humility:</strong> Acknowledging mistakes and learning from them</li>
              </ul>

              <h3>Practical Psychological Strategies</h3>
              <p>
                Implement these practical strategies to strengthen your trading psychology:
              </p>

              <h4>1. Maintain a Trading Journal</h4>
              <p>
                A comprehensive trading journal should record not just trades but also emotional states:
              </p>
              <ul>
                <li>Pre-trade mindset and expectations</li>
                <li>Emotions during the trade</li>
                <li>Post-trade reflection</li>
                <li>Lessons learned</li>
              </ul>
              <p>
                Reviewing your journal regularly helps identify emotional patterns that influence your trading decisions.
              </p>

              <h4>2. Implement Pre-Trading Routines</h4>
              <p>
                Develop a consistent pre-trading routine to establish the right mindset:
              </p>
              <ul>
                <li>Morning meditation or mindfulness practice</li>
                <li>Market analysis without position-taking</li>
                <li>Review of trading plan and rules</li>
                <li>Setting clear intentions for the trading session</li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
                <h3 className="text-amber-800 font-semibold mb-2">Sample Pre-Trading Routine</h3>
                <ol className="text-gray-700">
                  <li>10 minutes of mindfulness meditation</li>
                  <li>Review of previous day's trades and lessons</li>
                  <li>Analysis of current market conditions</li>
                  <li>Identification of potential trading opportunities</li>
                  <li>Setting specific risk parameters for the day</li>
                  <li>Verbal affirmation of commitment to trading plan</li>
                </ol>
              </div>

              <h4>3. Practice Mindfulness</h4>
              <p>
                Mindfulness—the practice of present-moment awareness without judgment—is particularly valuable for traders:
              </p>
              <ul>
                <li>Increases awareness of emotional states</li>
                <li>Improves focus and concentration</li>
                <li>Reduces impulsive decision-making</li>
                <li>Enhances ability to observe market conditions objectively</li>
              </ul>
              <p>
                Even 5-10 minutes of daily mindfulness practice can significantly improve trading psychology.
              </p>

              <h4>4. Utilize Visualization Techniques</h4>
              <p>
                Elite athletes use visualization to prepare for competition, and traders can do the same:
              </p>
              <ul>
                <li>Visualize following your trading plan during challenging market conditions</li>
                <li>Mentally rehearse maintaining discipline when facing losses</li>
                <li>Imagine staying calm and focused during volatile trading sessions</li>
              </ul>

              <h4>5. Implement Cognitive Restructuring</h4>
              <p>
                Identify and challenge negative thought patterns:
              </p>
              <ul>
                <li>Replace "I always lose when I trade this setup" with "Each trade is independent, and this setup has a statistical edge over time"</li>
                <li>Transform "I need to make back yesterday's losses today" to "My focus is on executing my strategy correctly, not on a specific profit target"</li>
                <li>Shift from "I can't afford to lose" to "This risk is within my predetermined parameters"</li>
              </ul>

              <h2>Managing Trading Stress</h2>
              <p>
                The stress of trading can be overwhelming if not properly managed:
              </p>
              <ul>
                <li><strong>Physical exercise:</strong> Regular physical activity reduces stress hormones and improves cognitive function</li>
                <li><strong>Adequate sleep:</strong> Sleep deprivation impairs decision-making and emotional regulation</li>
                <li><strong>Proper nutrition:</strong> Stable blood sugar levels support cognitive performance</li>
                <li><strong>Social support:</strong> Connect with other traders who understand the psychological challenges</li>
                <li><strong>Scheduled breaks:</strong> Take time away from the markets to maintain perspective</li>
              </ul>

              <h2>The Role of Identity in Trading</h2>
              <p>
                How you view yourself as a trader significantly impacts your performance:
              </p>
              <ul>
                <li>Separate your self-worth from your trading results</li>
                <li>Define success by adherence to process rather than profit/loss</li>
                <li>View yourself as a risk manager first, trader second</li>
                <li>Embrace the identity of a continuous learner</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                The psychology of trading is not merely an adjunct to technical analysis or risk management—it's the foundation upon which successful trading is built. By understanding common psychological pitfalls and implementing strategies to overcome them, traders can develop the mental resilience needed for long-term success.
              </p>
              <p>
                Remember that developing strong trading psychology is a continuous process, not a destination. Even experienced traders must regularly reassess and refine their psychological approach to the markets. With consistent practice and self-awareness, you can develop the psychological edge that separates successful traders from the rest.
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
                      Trading Psychology
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                      Mindfulness
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                      Emotional Control
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
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2076"
                    alt="Raj Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Raj Patel</h3>
                  <p className="text-gray-600">Trading Psychologist | Former Hedge Fund Trader</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Raj combines his background in clinical psychology with 12 years of professional trading experience to help traders overcome psychological barriers. He has coached hundreds of professional traders and fund managers.
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
