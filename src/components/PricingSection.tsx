import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight, CircleDot } from 'lucide-react';
import './PricingSection.css';

// Define account data structure with translation keys and colors for buttons
const accounts = [
  {
    translationKey: 'micro',
    popular: false,
    color: 'from-blue-400 to-blue-600',
    buttonColor: 'pricing-button-blue'
  },
  {
    translationKey: 'mini',
    popular: false,
    color: 'from-green-400 to-green-600',
    buttonColor: 'pricing-button-green'
  },
  {
    translationKey: 'starter',
    popular: false,
    color: 'from-purple-400 to-purple-600',
    buttonColor: 'pricing-button-purple'
  },
  {
    translationKey: 'pro',
    popular: true,
    color: 'from-orange-400 to-orange-600',
    buttonColor: 'pricing-button-orange'
  },
  {
    translationKey: 'elite',
    popular: false,
    color: 'from-pink-400 to-pink-600',
    buttonColor: 'pricing-button-pink'
  }
];

const PricingSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(2); // Start with the middle card (starter)
  const [autoplay, setAutoplay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Helper function to safely get features array
  const getFeatures = (path: string) => {
    try {
      const features = t(path, { returnObjects: true });
      return Array.isArray(features) ? features : [];
    } catch (error) {
      console.error(`Error loading features for ${path}:`, error);
      return [];
    }
  };

  // Get previous and next indices with wrapping
  const getPrevIndex = (index: number) => (index === 0 ? accounts.length - 1 : index - 1);
  const getNextIndex = (index: number) => (index === accounts.length - 1 ? 0 : index + 1);

  // Handle next slide
  const nextSlide = useCallback(() => {
    setActiveIndex(getNextIndex(activeIndex));
  }, [activeIndex]);

  // Handle previous slide
  const prevSlide = useCallback(() => {
    setActiveIndex(getPrevIndex(activeIndex));
  }, [activeIndex]);

  // Handle dot navigation
  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Handle button click
  const handleButtonClick = useCallback((account: string) => {
    console.log(`Starting challenge for ${account} account`);
    // Add your logic here to handle the button click
    // For example, redirect to a sign-up page or show a modal
  }, []);

  // Auto-play effect
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (autoplay) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoplay, nextSlide]);

  // Get card position and style based on its relation to the active card
  const getCardStyle = (index: number) => {
    // Calculate the position relative to the active card
    let position = index - activeIndex;
    
    // Handle wrapping for the carousel effect
    if (position < -2) position += accounts.length;
    if (position > 2) position -= accounts.length;
    
    // Define the styles for each position
    switch (position) {
      case -2: // Far left
        return {
          zIndex: 1,
          opacity: 0.3,
          scale: 0.6,
          x: '-85%',
          rotateY: '45deg',
          filter: 'blur(2px)',
        };
      case -1: // Left
        return {
          zIndex: 2,
          opacity: 0.6,
          scale: 0.75,
          x: '-55%',
          rotateY: '35deg',
          filter: 'blur(1px)',
        };
      case 0: // Center (active)
        return {
          zIndex: 10,
          opacity: 1,
          scale: 1,
          x: '0%',
          rotateY: '0deg',
          filter: 'blur(0px)',
        };
      case 1: // Right
        return {
          zIndex: 2,
          opacity: 0.6,
          scale: 0.75,
          x: '55%',
          rotateY: '-35deg',
          filter: 'blur(1px)',
        };
      case 2: // Far right
        return {
          zIndex: 1,
          opacity: 0.3,
          scale: 0.6,
          x: '85%',
          rotateY: '-45deg',
          filter: 'blur(2px)',
        };
      default:
        return {
          zIndex: 0,
          opacity: 0,
          scale: 0.5,
          x: position < 0 ? '-100%' : '100%',
          rotateY: position < 0 ? '60deg' : '-60deg',
          filter: 'blur(3px)',
        };
    }
  };

  return (
    <div className="error-boundary" data-component-name="PricingSection">
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden" data-component-name="PricingSection">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-component-name="PricingSection">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              {t('home.pricing.title', 'Choose Your Trading Account')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              {t('home.pricing.subtitle', 'Select the account size that matches your trading goals')}
            </motion.p>
          </div>

          {/* 3D Carousel Container */}
          <div className="pricing-container" data-component-name="PricingSection">
            {/* Main Carousel */}
            <div 
              ref={carouselRef} 
              className="pricing-carousel"
            >
              {accounts.map((account, index) => {
                const style = getCardStyle(index);
                const isActive = index === activeIndex;
                
                return (
                  <motion.div
                    key={account.translationKey}
                    initial={false}
                    animate={style}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                      mass: 1,
                    }}
                    onClick={() => !isActive && goToSlide(index)}
                    className={`pricing-card ${isActive ? 'active' : ''}`}
                  >
                    {/* Card Header with Gradient */}
                    <div className={`p-8 bg-gradient-to-r ${account.color} text-white`}>
                      {account.popular && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            {t('home.pricing.mostPopular', 'MOST POPULAR')}
                          </span>
                        </div>
                      )}
                      <h3 className="text-2xl font-bold mb-2">
                        {t(`home.pricing.${account.translationKey}.title`)}
                      </h3>
                      <div className="flex items-baseline">
                        <span className="text-5xl font-extrabold">
                          {t(`home.pricing.${account.translationKey}.price`)}
                        </span>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-8 bg-white">
                      <div className={`space-y-4 mb-8 ${!isActive && 'max-h-[250px] overflow-hidden'}`}>
                        {getFeatures(`home.pricing.${account.translationKey}.features`).map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 0 }}
                            transition={{ delay: isActive ? featureIndex * 0.1 : 0 }}
                            className="flex items-start"
                          >
                            <Check className={`h-5 w-5 text-${account.color.split('-')[1]}-500 mt-0.5 mr-3 flex-shrink-0`} />
                            <span className="text-gray-700">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mt-6"
                        >
                          <motion.button
                            className={`pricing-button-3d ${account.buttonColor}`}
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent card click event
                              handleButtonClick(account.translationKey);
                            }}
                            whileHover={{ 
                              scale: 1.05,
                              y: -4,
                              transition: { duration: 0.2 }
                            }}
                            whileTap={{ 
                              scale: 0.95,
                              y: 4,
                              transition: { duration: 0.1 }
                            }}
                          >
                            {t(`home.pricing.${account.translationKey}.button`)}
                          </motion.button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="pricing-arrow left"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
              aria-label="Previous account"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextSlide}
              className="pricing-arrow right"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
              aria-label="Next account"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>

            {/* Dots Navigation */}
            <div className="pricing-dots">
              {accounts.map((account, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`pricing-dot ${index === activeIndex ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                  onMouseEnter={() => setAutoplay(false)}
                  onMouseLeave={() => setAutoplay(true)}
                >
                  {index === activeIndex ? (
                    <CircleDot className={`h-6 w-6 text-${account.color.split('-')[1]}-500`} />
                  ) : (
                    <div className="h-3 w-3 rounded-full bg-gray-300 hover:bg-gray-400" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Autoplay Control Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
              onClick={() => setAutoplay(!autoplay)}
            >
              {autoplay ? 'Pause Rotation' : 'Resume Rotation'}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
