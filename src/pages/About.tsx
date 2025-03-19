import { motion } from 'framer-motion';
import { Globe, Building2, Shield, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import AnimatedTransition from '../components/AnimatedTransition';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

export default function AboutPage() {
  const { t, i18n } = useTranslation();
  const isRTL = ['ar'].includes(i18n.language);

  // Get story content with fallback for non-array response
  const storyContent = t('pages.about.story.content', { returnObjects: true }) || [];
  const storyItems = Array.isArray(storyContent) ? storyContent : [storyContent];

  return (
    <AnimatedTransition>
      <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
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
              poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2940"
            >
              <source
                src="https://videos.pexels.com/video-files/2495/pexels-artem-podrez-5752729.mp4"
                type="video/mp4"
              />
              {/* Fallback image if video fails to load */}
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2940"
                alt="Our team"
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
                  {t('pages.about.hero.title')}
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                {t('pages.about.hero.subtitle')}
              </motion.p>
              
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

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('pages.about.story.title')}
                </h2>
                <div className="prose prose-lg text-gray-600">
                  {storyItems.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative group rounded-xl overflow-hidden shadow-xl bg-white">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2940"
                      alt="Corporate growth and success"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Group Structure Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Group Structure</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Traders Act operates through a network of regulated entities, each specializing in different aspects of our business to ensure the highest standards of service and compliance.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Markets Act Broker */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-600" />
                <div className="p-8">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Markets Act Broker Ltd</h3>
                  <p className="text-gray-600 mb-6">
                    A globally recognized brokerage licensed by the Financial Services Commission in Mauritius, ensuring efficient trade execution and maintaining the highest standards of operational excellence.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Licensed and regulated broker</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Advanced trading infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Multi-asset trading platform</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* White Stone Investment Advisors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-1 bg-gradient-to-r from-green-500 to-green-600" />
                <div className="p-8">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">White Stone Investment Advisors LTD</h3>
                  <p className="text-gray-600 mb-6">
                    A fully regulated financial advisory that supervises and funds our program, providing successful traders with a verified trading track record and a Professional Certificate of Achievement.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Professional certification</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Risk management oversight</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Compliance monitoring</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* White Stone Financial Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-1 bg-gradient-to-r from-purple-500 to-purple-600" />
                <div className="p-8">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">White Stone Financial Services LLC</h3>
                  <p className="text-gray-600 mb-6">
                    Our global outreach partner based in the UAE, ensuring international standards of service and trust. This partnership strengthens our presence in key markets and provides localized support.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Global market access</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">24/7 customer support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Regional expertise</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment to Excellence</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Regulatory Compliance</h4>
                  <p className="text-gray-600">
                    Through our group structure, we maintain the highest standards of regulatory compliance and operational integrity. Each entity is fully licensed and regulated in their respective jurisdictions, ensuring your trading experience is secure and compliant with international standards.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Global Support Network</h4>
                  <p className="text-gray-600">
                    Our integrated group structure allows us to provide comprehensive support to traders worldwide. From specialized trading solutions like Shariah-compliant accounts to localized customer service, we ensure every trader receives the support they need to succeed.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-6"
              >
                Ready to Start Your Trading Journey?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
              >
                Join Traders Act today and turn your trading skills into real profits. Sign up now, take the challenge, and discover a world of opportunities tailored for you!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a href="https://my.tradersact.com/register">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8"
                  >
                    Get Started
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </AnimatedTransition>
  );
}