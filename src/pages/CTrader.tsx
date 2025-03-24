import { motion } from 'framer-motion';
import { LineChart, Zap, Shield, Globe, BarChart2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import AnimatedTransition from '../components/AnimatedTransition';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

// Define interfaces for our feature and step items
interface FeatureItem {
  title: string;
  description: string;
}

interface StepItem {
  title: string;
  description: string;
}

export default function CTraderPage() {
  const { t, i18n } = useTranslation();
  const isRTL = ['ar'].includes(i18n.language);

  return (
    <AnimatedTransition>
      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-component-name="HeroSection">
          {/* Background */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-gray-900/90 z-10"></div>
            {/* Video Background */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://videos.pexels.com/video-files/30768173/13161117_1920_1080_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Animated particles overlay */}
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className={`text-center ${isRTL ? 'text-right' : ''}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative inline-block"
                data-component-name="HeroTitle"
              >
                <h1 className={`text-4xl md:text-6xl font-bold text-white mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {t('pages.ctrader.hero.title')}
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 ${isRTL ? 'text-right' : ''}`}
                data-component-name="HeroSubtitle"
              >
                {t('pages.ctrader.hero.subtitle')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                data-component-name="HeroButton"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {t('pages.ctrader.hero.button')}
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white" data-component-name="OverviewSection">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-12 ${isRTL ? 'text-right' : ''}`}>
              <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : ''}`}>
                {t('pages.ctrader.overview.title')}
              </h2>
              <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${isRTL ? 'text-right mx-auto' : ''}`}>
                {t('pages.ctrader.overview.content')}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50" data-component-name="FeaturesSection">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
              <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : ''}`}>
                {t('pages.ctrader.features.title')}
              </h2>
              <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${isRTL ? 'text-right mx-auto' : ''}`}>
                {t('pages.ctrader.features.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(t('pages.ctrader.features.items', { returnObjects: true }) as FeatureItem[]).map((feature: FeatureItem, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white p-8 rounded-lg shadow-sm ${isRTL ? 'text-right' : ''}`}
                  data-component-name="FeatureCard"
                >
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} mb-4`}>
                    {index === 0 && <LineChart className={`text-blue-600 ${isRTL ? 'ml-3' : 'mr-3'}`} size={24} />}
                    {index === 1 && <Zap className={`text-blue-600 ${isRTL ? 'ml-3' : 'mr-3'}`} size={24} />}
                    {index === 2 && <Shield className={`text-blue-600 ${isRTL ? 'ml-3' : 'mr-3'}`} size={24} />}
                    {index === 3 && <BarChart2 className={`text-blue-600 ${isRTL ? 'ml-3' : 'mr-3'}`} size={24} />}
                    {index === 4 && <Globe className={`text-blue-600 ${isRTL ? 'ml-3' : 'mr-3'}`} size={24} />}
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="py-20 bg-white" data-component-name="GettingStartedSection">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
              <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : ''}`}>
                {t('pages.ctrader.getting_started.title')}
              </h2>
              <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${isRTL ? 'text-right mx-auto' : ''}`}>
                {t('pages.ctrader.getting_started.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {(t('pages.ctrader.getting_started.steps', { returnObjects: true }) as StepItem[]).map((step: StepItem, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white p-8 rounded-lg border border-gray-200 ${isRTL ? 'text-right' : ''}`}
                  data-component-name="StepCard"
                >
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} mb-4`}>
                    <div className={`flex-shrink-0 ${isRTL ? 'ml-4' : 'mr-4'}`}>
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="primary"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                {t('pages.ctrader.getting_started.button')}
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white" data-component-name="CTASection">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center ${isRTL ? 'text-right' : ''}`}>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isRTL ? 'text-right' : ''}`}>
                {t('pages.ctrader.cta.title')}
              </h2>
              <p className={`text-xl text-white/90 max-w-3xl mx-auto mb-8 ${isRTL ? 'text-right mx-auto' : ''}`}>
                {t('pages.ctrader.cta.subtitle')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  {t('pages.ctrader.cta.button_platform')}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  {t('pages.ctrader.cta.button_account')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </AnimatedTransition>
  );
}
