import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './PricingSection.css';

// Define account data structure with translation keys and colors for buttons
const accounts = [
  {
    translationKey: 'micro',
    popular: false,
    color: 'from-[#171E60] to-[#2D3A8C]',
    buttonColor: 'pricing-button-brand-light',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    hoverColor: 'hover:border-blue-300'
  },
  {
    translationKey: 'mini',
    popular: false,
    color: 'from-[#171E60] to-[#2D3A8C]',
    buttonColor: 'pricing-button-brand-light',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    hoverColor: 'hover:border-blue-300'
  },
  {
    translationKey: 'starter',
    popular: false,
    color: 'from-[#171E60] to-[#2D3A8C]',
    buttonColor: 'pricing-button-brand-light',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    hoverColor: 'hover:border-blue-300'
  },
  {
    translationKey: 'pro',
    popular: true,
    color: 'from-[#0F1649] to-[#171E60]',
    buttonColor: 'pricing-button-brand',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    hoverColor: 'hover:border-blue-400'
  },
  {
    translationKey: 'elite',
    popular: false,
    color: 'from-[#171E60] to-[#2D3A8C]',
    buttonColor: 'pricing-button-brand-light',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    hoverColor: 'hover:border-blue-300'
  }
];

const PricingSection = () => {
  const { t, i18n } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const isArabic = i18n.language === 'ar';

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

  // Handle button click
  const handleButtonClick = (account: string) => {
    console.log(`Starting challenge for ${account} account`);
    // Add your logic here to handle the button click
    // For example, redirect to a sign-up page or show a modal
  };

  return (
    <div className="error-boundary" data-component-name="PricingSection">
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden" data-component-name="PricingSection">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-component-name="PricingSection">
          <div className={`text-center mb-16 ${isArabic ? 'rtl' : ''}`}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold text-gray-900 mb-4 ${isArabic ? 'text-right' : ''}`}
            >
              {t('pages.pricing.title', 'Choose Your Trading Account')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-xl text-gray-600 max-w-2xl mx-auto ${isArabic ? 'text-right' : ''}`}
            >
              {t('pages.pricing.subtitle', 'Select the account size that matches your trading goals')}
            </motion.p>
          </div>

          {/* Card Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {accounts.map((account) => (
              <motion.div
                key={account.translationKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: accounts.indexOf(account) * 0.1 }}
                className={`pricing-card-new relative border-2 rounded-xl overflow-hidden transition-all duration-300 ${account.borderColor} ${account.hoverColor} ${
                  hoveredCard === account.translationKey ? 'transform scale-105 shadow-xl' : 'shadow-md'
                } ${account.popular ? 'ring-2 ring-[#171E60] ring-offset-2' : ''}`}
                onMouseEnter={() => setHoveredCard(account.translationKey)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Popular Badge */}
                {account.popular && (
                  <div className={`absolute top-0 ${isArabic ? 'left-0 ml-4' : 'right-0 mr-4'} mt-4 z-10`}>
                    <span className="bg-[#171E60] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {t('pages.pricing.mostPopular', 'MOST POPULAR')}
                    </span>
                  </div>
                )}

                {/* Card Header with Gradient */}
                <div className={`p-6 bg-gradient-to-r ${account.color} text-white`}>
                  <h3 className={`text-xl font-bold mb-2 ${isArabic ? 'text-right' : ''}`}>
                    {t(`pages.pricing.${account.translationKey}.title`)}
                  </h3>
                  <div className={`flex items-baseline ${isArabic ? 'justify-end' : ''}`}>
                    <span className="text-3xl font-extrabold">
                      {t(`pages.pricing.${account.translationKey}.price`)}
                    </span>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className={`p-6 ${account.bgColor}`}>
                  <div className="space-y-3 mb-6" data-component-name="PricingSection">
                    {getFeatures(`pages.pricing.${account.translationKey}.features`).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-start ${isArabic ? 'flex-row-reverse text-right' : ''}`}
                      >
                        <Check className={`h-5 w-5 text-[#171E60] mt-0.5 ${isArabic ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                        <span className="text-gray-700 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    className={`pricing-button-3d ${account.buttonColor} w-full`}
                    onClick={() => handleButtonClick(account.translationKey)}
                  >
                    {t(`pages.pricing.${account.translationKey}.button`)}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
