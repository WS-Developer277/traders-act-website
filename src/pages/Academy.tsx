import { motion } from 'framer-motion';
import { Book, Video, Users, Brain, Target, Shield, ChevronRight, BookOpen, Users2, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AnimatedTransition from '../components/AnimatedTransition';
import { useTranslation } from 'react-i18next';

interface Feature {
  title: string;
  description: string;
}

interface Module {
  number: string;
  title: string;
  description: string;
  lessons: string[];
}

export default function AcademyPage() {
  const { t } = useTranslation();

  // Features section
  const features = t('pages.academy.whyEducation.features', { returnObjects: true }) as Feature[];

  // Educational offerings
  const offerings = [
    {
      title: t('pages.academy.offerings.items.0.title'),
      description: t('pages.academy.offerings.items.0.description'),
      icon: Book,
      features: t('pages.academy.offerings.items.0.features', { returnObjects: true }) as string[]
    },
    {
      title: t('pages.academy.offerings.items.1.title'),
      description: t('pages.academy.offerings.items.1.description'),
      icon: Video,
      features: t('pages.academy.offerings.items.1.features', { returnObjects: true }) as string[]
    },
    {
      title: t('pages.academy.offerings.items.2.title'),
      description: t('pages.academy.offerings.items.2.description'),
      icon: Users,
      features: t('pages.academy.offerings.items.2.features', { returnObjects: true }) as string[]
    },
    {
      title: t('pages.academy.offerings.items.3.title'),
      description: t('pages.academy.offerings.items.3.description'),
      icon: Users2,
      features: t('pages.academy.offerings.items.3.features', { returnObjects: true }) as string[]
    }
  ];

  // Course modules
  const modules = t('pages.academy.modules.items', { returnObjects: true }) as Module[];

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
              poster="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2940"
            >
              <source
                src="https://videos.pexels.com/video-files/3194/pexels-tima-miroshnichenko-5428262.mp4"
                type="video/mp4"
              />
              {/* Fallback image if video fails to load */}
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2940"
                alt="Trading education"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </video>
          </div>

          {/* Animated particles overlay */}
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          </div>

          {/* Content */}
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
                  {t('pages.academy.hero.title')}
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                {t('pages.academy.hero.subtitle')}
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
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('pages.academy.hero.exploreButton')}
                  <ChevronRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 text-lg border-white text-white hover:bg-white/10"
                  onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('pages.academy.hero.resourcesButton')}
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

        {/* Why Trading Education Matters */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pages.academy.whyEducation.title')}</h2>
              <p className="text-lg text-gray-600">
                {t('pages.academy.whyEducation.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature: Feature, index: number) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className={`w-12 h-12 ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-purple-100' : 'bg-green-100'} rounded-lg flex items-center justify-center mb-4`}>
                    {index === 0 ? <Target className="w-6 h-6 text-blue-600" /> : 
                     index === 1 ? <Brain className="w-6 h-6 text-purple-600" /> : 
                     <Shield className="w-6 h-6 text-green-600" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Offerings */}
        <section id="resources" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pages.academy.offerings.title')}</h2>
              <p className="text-lg text-gray-600">
                {t('pages.academy.offerings.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offerings.map((offering, index) => (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <offering.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{offering.title}</h3>
                  <p className="text-gray-600 mb-4">{offering.description}</p>
                  <ul className="space-y-2">
                    {offering.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Modules */}
        <section id="courses" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pages.academy.modules.title')}</h2>
              <p className="text-lg text-gray-600">
                {t('pages.academy.modules.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {modules.map((module: Module, index: number) => (
                <motion.div
                  key={module.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-bold text-blue-600">
                      {module.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
                      <p className="text-gray-600 mb-4">{module.description}</p>
                      <ul className="space-y-2">
                        {module.lessons.map((lesson: string, lessonIndex: number) => (
                          <li key={lessonIndex} className="flex items-center text-gray-600">
                            <BookOpen className="w-4 h-4 text-blue-500 mr-2" />
                            {lesson}
                          </li>
                        ))}
                      </ul>
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
            <h2 className="text-3xl font-bold text-white mb-8">{t('pages.academy.cta.title')}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('pages.academy.cta.subtitle')}
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4">
              {t('pages.academy.cta.button')}
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </AnimatedTransition>
  );
}