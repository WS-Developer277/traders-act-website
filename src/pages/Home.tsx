import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/Navbar';
import {
  ArrowRight,
  BarChart2,
  Shield,
  Trophy,
  Users,
  Star,
} from 'lucide-react';
import AnimatedTransition from '../components/AnimatedTransition';
import { lazy } from 'react';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import PricingSection from '../components/PricingSection';

// Lazy load the Accordion component
const Accordion = lazy(() => import('../components/Accordion'));

function HomePage() {
  const { t, i18n } = useTranslation();
  const isRTL = ['ar'].includes(i18n.language);
  
  // Define the type for FAQ items
  interface FaqItem {
    question: string;
    answer: string;
  }
  
  // Get FAQ items from translations with proper typing
  const faqs = (t('home.faq.items', { returnObjects: true }) || []) as FaqItem[];

  // Fallback in case translation is missing
  if (faqs.length === 0) {
    faqs.push({
      question: "What is the Traders Act challenge?",
      answer: "The Traders Act challenge is an evaluation program designed to identify skilled traders."
    });
  }

  // Define testimonial interface
  interface Testimonial {
    quote: string;
    name: string;
    position: string;
    icon: string;
  }

  // Use translations for testimonials
  const testimonials: Testimonial[] = [
    {
      quote: t('home.testimonials.testimonial1.quote'),
      name: t('home.testimonials.testimonial1.name'),
      position: t('home.testimonials.testimonial1.position'),
      icon: "👨‍💼"
    },
    {
      quote: t('home.testimonials.testimonial2.quote'),
      name: t('home.testimonials.testimonial2.name'),
      position: t('home.testimonials.testimonial2.position'),
      icon: "👨‍💻"
    },
    {
      quote: t('home.testimonials.testimonial3.quote'),
      name: t('home.testimonials.testimonial3.name'),
      position: t('home.testimonials.testimonial3.position'),
      icon: "👨‍🚀"
    }
  ];

  return (
    <AnimatedTransition>
      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
        <Navbar />
        
        {/* Hero Section */}
        <ErrorBoundary sectionName="Hero">
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-gray-900/90 z-10"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                preload="auto"
                poster="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=2940"
              >
                <source
                  src="https://videos.pexels.com/video-files/29940285/12849559_1920_1080_25fps.mp4"
                  type="video/mp4"
                />
                {/* Fallback image if video fails to load */}
                <img
                  src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=2940"
                  alt="Trading background"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </video>
            </div>

            {/* Animated particles overlay */}
            <div className="absolute inset-0 z-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.1),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1),transparent_50%)]"></div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative inline-block"
                >
                  <span className="absolute -inset-1 -skew-y-3 bg-blue-500/10 rounded-2xl" aria-hidden="true"></span>
                  <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    {t('home.hero.title')}
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
                  data-component-name="MotionComponent"
                >
                  {t('home.hero.subtitle')}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
                >
                  <a href="https://my.tradersact.com/register">
                    <Button size="lg" className="group px-8 py-4 text-lg bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all">
                      {t('common.startChallenge')}
                      <ArrowRight className={`ml-2 group-hover:translate-x-1 transition-transform ${isRTL ? 'flip-in-rtl' : ''}`} />
                    </Button>
                  </a>
                  <a href="#features">
                    <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white/10">
                      {t('common.learnMore')}
                    </Button>
                  </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">$500K+</div>
                    <div className="text-gray-300">{t('home.hero.stats.payouts')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                    <div className="text-gray-300">{t('home.hero.stats.traders')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">90%</div>
                    <div className="text-gray-300">{t('home.hero.stats.profitShare')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-gray-300">{t('home.hero.stats.support')}</div>
                  </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
                  >
                    <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        {/* Features Section */}
        <ErrorBoundary sectionName="Features">
          <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.features.title')}</h2>
                <p className="text-lg text-gray-600">{t('home.features.subtitle')}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('home.features.security.title')}</h3>
                  <p className="text-gray-600">{t('home.features.security.description')}</p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart2 className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('home.features.analytics.title')}</h3>
                  <p className="text-gray-600">{t('home.features.analytics.description')}</p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Trophy className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('home.features.profitShare.title')}</h3>
                  <p className="text-gray-600">{t('home.features.profitShare.description')}</p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('home.features.community.title')}</h3>
                  <p className="text-gray-600">{t('home.features.community.description')}</p>
                </div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        {/* Pricing Section */}
        <ErrorBoundary sectionName="Pricing">
          <PricingSection />
        </ErrorBoundary>

        {/* Testimonials Section */}
        <ErrorBoundary sectionName="Testimonials">
          <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.testimonials.title')}</h2>
                <p className="text-lg text-gray-600">{t('home.testimonials.subtitle')}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-xl shadow-sm"
                  >
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="text-4xl mr-4">{testimonial.icon}</div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-gray-500 text-sm">{testimonial.position}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ErrorBoundary>

        {/* FAQ Section */}
        <ErrorBoundary sectionName="FAQ">
          <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50" data-component-name="HomePage">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-component-name="HomePage">
              <div className={`text-center mb-16 ${isRTL ? 'rtl' : ''}`}>
                <div className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full mb-4">
                  {i18n.language === 'en' ? 'FAQ' : t('navbar.faq')}
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {t('home.faq.title')}
                </h2>
                <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
                  {t('home.faq.subtitle')}
                </p>
              </div>
              <div className="space-y-4 max-w-3xl mx-auto">
                <Suspense fallback={<div className="p-8 text-center"><div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>}>
                  <Accordion items={faqs} />
                </Suspense>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        {/* Contact Section */}
        <ContactSection />

        <FooterSection />
      </div>
    </AnimatedTransition>
  );
}

export default HomePage;