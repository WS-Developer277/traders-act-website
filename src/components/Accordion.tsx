import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface AccordionItemProps {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className={`border ${isOpen ? 'border-blue-300 bg-blue-50' : 'border-gray-200'} rounded-lg overflow-hidden mb-4 transition-all duration-300 shadow-sm hover:shadow-md`}>
      <motion.button
        className={`w-full px-6 py-5 flex items-center justify-between ${isRTL ? 'text-right' : 'text-left'} ${isOpen ? 'bg-blue-50' : 'bg-white'}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: isOpen ? 'rgba(219, 234, 254, 0.8)' : 'rgba(0, 0, 0, 0.02)' }}
        transition={{ duration: 0.2 }}
        dir={isRTL ? 'rtl' : 'ltr'}
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-medium ${isOpen ? 'text-blue-800' : 'text-gray-900'}`}>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex items-center justify-center rounded-full ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'} w-8 h-8`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-5 pt-2"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'} leading-relaxed`}
            >
              <p className="text-base">{answer}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  return (
    <div className="space-y-4" dir={isRTL ? 'rtl' : 'ltr'}>
      {items.map((item, index) => (
        <AccordionItem 
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default Accordion;