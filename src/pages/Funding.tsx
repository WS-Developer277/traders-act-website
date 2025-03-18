import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, Star, TrendingUp, LineChart, Scale } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedTransition from '../components/AnimatedTransition';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function FundingPage() {
  const { t } = useTranslation();

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
              poster="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=2940"
            >
              <source
                src="https://videos.pexels.com/video-files/18743334/18743334-hd_1920_1080_60fps.mp4"
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
                  {t('pages.funding.hero.title')}
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                {t('pages.funding.hero.subtitle')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
              >
                <Link to="/challenge">
                  <Button size="lg" className="group px-8 py-4 text-lg bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all">
                    {t('pages.funding.hero.applyButton')}
                    <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 text-lg border-white text-white hover:bg-white/10"
                  onClick={() => document.getElementById('profit-sharing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('pages.funding.hero.learnMoreButton')}
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

        {/* Profit Sharing Section */}
        <section id="profit-sharing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pages.funding.profitSharing.title')}</h2>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                {t('pages.funding.profitSharing.description')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {(t('pages.funding.profitSharing.accounts', { returnObjects: true }) as Array<{ account: string, split: string }>).map((split, index) => (
                <motion.div
                  key={split.account}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-blue-50/80 rounded-lg overflow-hidden hover:bg-blue-100/80 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {split.account}
                    </h3>
                    <div className="text-xl font-bold text-blue-600">
                      {split.split}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600">
                {t('pages.funding.profitSharing.payoutInfo')}
              </p>
            </div>
          </div>
        </section>

        {/* Growth Plan Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pages.funding.growthPlan.title')}</h2>
              <p className="text-lg text-gray-600">
                {t('pages.funding.growthPlan.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(t('pages.funding.growthPlan.phases', { returnObjects: true }) as Array<{ title: string, description: string }>).map((phase, index) => (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className={`w-12 h-12 ${getPhaseIconBgColor(index)} rounded-lg flex items-center justify-center mb-4`}>
                    {getPhaseIcon(index)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Management Rules Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pages.funding.riskRules.title')}</h2>
              <p className="text-lg text-gray-600">
                {t('pages.funding.riskRules.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(t('pages.funding.riskRules.rules', { returnObjects: true }) as Array<{ title: string, description: string }>).map((rule, index) => (
                <motion.div
                  key={rule.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <AlertTriangle className="w-8 h-8 text-amber-500 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{rule.title}</h3>
                  <p className="text-gray-600">{rule.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pages.funding.testimonials.title')}</h2>
              <p className="text-lg text-gray-600">
                {t('pages.funding.testimonials.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {(t('pages.funding.testimonials.stories', { returnObjects: true }) as Array<{ quote: string, name: string, role: string, icon: string }>).map((testimonial, index) => (
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
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">{testimonial.icon}</div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">{t('pages.funding.cta.title')}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('pages.funding.cta.subtitle')}
            </p>
            <Link to="/challenge">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4">
                {t('pages.funding.cta.button')}
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </AnimatedTransition>
  );
}

// Helper functions to get the appropriate icons for the growth phases
function getPhaseIcon(index: number) {
  const icons = [
    <TrendingUp className="w-6 h-6 text-blue-600" />,
    <LineChart className="w-6 h-6 text-green-600" />,
    <Scale className="w-6 h-6 text-purple-600" />,
    <ArrowRight className="w-6 h-6 text-amber-600" />
  ];
  return icons[index % icons.length];
}

function getPhaseIconBgColor(index: number) {
  const colors = [
    'bg-blue-100',
    'bg-green-100',
    'bg-purple-100',
    'bg-amber-100'
  ];
  return colors[index % colors.length];
}