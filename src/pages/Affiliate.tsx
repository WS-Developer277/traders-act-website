/** @jsxImportSource react */
import { motion } from 'framer-motion';
import { BarChart2, Clock, DollarSign, Headphones, Image, LineChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

// Feature icons and colors mapping
const iconColors = {
  green: 'text-green-600',
  blue: 'text-blue-600',
  purple: 'text-purple-600',
  amber: 'text-amber-600',
  indigo: 'text-indigo-600',
  rose: 'text-rose-600'
};

const iconBgColors = {
  green: 'bg-green-100',
  blue: 'bg-blue-100',
  purple: 'bg-purple-100',
  amber: 'bg-amber-100',
  indigo: 'bg-indigo-100',
  rose: 'bg-rose-100'
};

// Feature icons and colors
const featureIcons = [
  { icon: DollarSign, color: 'green' as const },
  { icon: BarChart2, color: 'blue' as const },
  { icon: Clock, color: 'purple' as const },
  { icon: Image, color: 'amber' as const },
  { icon: Headphones, color: 'indigo' as const },
  { icon: LineChart, color: 'rose' as const }
];

// Types for translation objects
interface Feature {
  title: string;
  description: string;
}

interface CommissionTier {
  range: string;
  commission: string;
  recurring: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function AffiliatePage() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Set page title
    document.title = `${t('pages.affiliate.title')} | Traders Act`;
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('pages.affiliate.hero.subtitle'));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = t('pages.affiliate.hero.subtitle');
      document.head.appendChild(meta);
    }
  }, [t]);

  // Get translations with proper typing
  const features = t('pages.affiliate.features', { returnObjects: true }) as Feature[];
  const commissionTiers = t('pages.affiliate.commission.tiers', { returnObjects: true }) as CommissionTier[];
  const faqs = t('pages.affiliate.faq.items', { returnObjects: true }) as FAQ[];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main>
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
                poster="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2940"
              >
                <source
                  src="https://videos.pexels.com/video-files/3201/pexels-tima-miroshnichenko-7579722.mp4"
                  type="video/mp4"
                />
                {/* Fallback image if video fails to load */}
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2940"
                  alt="Affiliate marketing"
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
                    {t('pages.affiliate.hero.title')}
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
                  data-component-name="MotionComponent"
                >
                  {t('pages.affiliate.hero.subtitle')}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
                >
                  <Link to="/register">
                    <Button size="lg" className="group px-8 py-4 text-lg bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all">
                      {t('pages.affiliate.hero.joinButton')}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-blue-600">$1M+</p>
                  <p className="text-gray-600 mt-2">{t('pages.affiliate.stats.payouts')}</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-blue-600">5000+</p>
                  <p className="text-gray-600 mt-2">{t('pages.affiliate.stats.affiliates')}</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-blue-600">40%</p>
                  <p className="text-gray-600 mt-2">{t('pages.affiliate.stats.commission')}</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-blue-600">24/7</p>
                  <p className="text-gray-600 mt-2">{t('pages.affiliate.stats.support')}</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                  {t('pages.affiliate.benefits.title')}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  {t('pages.affiliate.benefits.subtitle')}
                </motion.p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.isArray(features) && features.map((feature: Feature, index: number) => {
                  const iconInfo = featureIcons[index % featureIcons.length];
                  const Icon = iconInfo.icon;
                  const colorKey = iconInfo.color;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-sm"
                    >
                      <div className={`w-12 h-12 ${iconBgColors[colorKey]} rounded-lg flex items-center justify-center mb-4`}>
                        <Icon className={`w-6 h-6 ${iconColors[colorKey]}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Commission Structure */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                  {t('pages.affiliate.commission.title')}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  {t('pages.affiliate.commission.subtitle')}
                </motion.p>
              </div>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden max-w-4xl mx-auto">
                <div className="grid grid-cols-3 p-4 bg-gray-100 font-semibold">
                  <div>{t('pages.affiliate.commission.accountSize')}</div>
                  <div>{t('pages.affiliate.commission.rate')}</div>
                  <div>{t('pages.affiliate.commission.recurring')}</div>
                </div>
                {Array.isArray(commissionTiers) && commissionTiers.map((tier: CommissionTier, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grid grid-cols-3 p-4 border-b last:border-b-0 hover:bg-gray-50"
                  >
                    <div className="text-gray-900">{tier.range}</div>
                    <div className="text-blue-600 font-medium">{tier.commission}</div>
                    <div className="text-green-600 font-medium">{tier.recurring}</div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/commission-details" className="text-blue-600 hover:text-blue-800 font-medium">
                  {t('pages.affiliate.commission.viewDetails')}
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                  {t('pages.affiliate.faq.title')}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  {t('pages.affiliate.faq.subtitle')}
                </motion.p>
              </div>
              <div className="space-y-8">
                {Array.isArray(faqs) && faqs.map((faq: FAQ, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {t('pages.affiliate.cta.title')}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl mb-8 max-w-3xl mx-auto"
              >
                {t('pages.affiliate.cta.subtitle')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link to="/register" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-50 transition duration-300">
                  {t('common.signUp')}
                </Link>
                <Link to="/login" className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                  {t('common.signIn')}
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}