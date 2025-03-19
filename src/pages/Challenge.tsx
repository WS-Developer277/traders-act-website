import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedTransition from '../components/AnimatedTransition';
import { useTranslation } from 'react-i18next';
import PricingSection from '../components/PricingSection';

// Lazy load the Accordion component
const Accordion = lazy(() => import('../components/Accordion'));

export default function ChallengePage() {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      title: t('pages.challenge.steps.items.0.title'),
      description: t('pages.challenge.steps.items.0.description')
    },
    {
      number: '02',
      title: t('pages.challenge.steps.items.1.title'),
      description: t('pages.challenge.steps.items.1.description')
    },
    {
      number: '03',
      title: t('pages.challenge.steps.items.2.title'),
      description: t('pages.challenge.steps.items.2.description')
    }
  ];

  // Get FAQ items from translations with proper typing
  interface FaqItem {
    question: string;
    answer: string;
  }
  
  const faqs = (t('pages.challenge.faqs.items', { returnObjects: true }) || []) as FaqItem[];

  return (
    <AnimatedTransition>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Hero Section */}
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
              poster="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2940"
            >
              <source
                src="https://videos.pexels.com/video-files/1851190/pexels-tima-miroshnichenko-5763433.mp4"
                type="video/mp4"
              />
              {/* Fallback image if video fails to load */}
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2940"
                alt="Trading challenge"
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
                  {t('pages.challenge.hero.title')}
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                {t('pages.challenge.hero.subtitle')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
              >
                <Button 
                  size="lg" 
                  className="group px-8 py-4 text-lg bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('common.startChallenge')}
                  <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 text-lg border-white text-white hover:bg-white/10"
                  onClick={() => document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('common.learnMore')}
                </Button>
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

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pages.challenge.steps.title')}</h2>
              <p className="text-lg text-gray-600">
                {t('pages.challenge.steps.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                    <div className="text-4xl font-bold text-blue-600 mb-4">
                      Step {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full mb-4">
                FAQ
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-gray-900 mb-4"
              >
                {t('pages.challenge.faqs.title')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                {t('pages.challenge.faqs.subtitle')}
              </motion.p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Suspense fallback={
                <div className="p-8 text-center">
                  <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-2 text-gray-600">Loading FAQ...</p>
                </div>
              }>
                <Accordion items={faqs} />
              </Suspense>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </AnimatedTransition>
  );
}