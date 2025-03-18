import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedTransition from './AnimatedTransition';
import { useTranslation } from 'react-i18next';

interface LegalPageLayoutProps {
  children: ReactNode;
  title: string;
  icon?: ReactNode;
}

export default function LegalPageLayout({ children, title, icon }: LegalPageLayoutProps) {
  const { t } = useTranslation();
  
  return (
    <AnimatedTransition>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-sm rounded-xl p-8 md:p-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  {icon && icon}
                  <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                </div>
                
                <div className="prose prose-blue max-w-none">
                  {children}
                  
                  <div className="mt-8 text-sm text-gray-500">
                    <p>Last Updated: January 15, 2025</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </AnimatedTransition>
  );
}