import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Traders Act</h3>
            <p className="text-gray-400">
              {t('footer.copyright', { year: new Date().getFullYear() }).replace('{year}', new Date().getFullYear().toString())}
            </p>
            <p className="text-gray-400 mt-2 text-sm">
              Operated by: White Stone Investment Advisors LTD
            </p>
            <p className="text-gray-400 mt-1 text-sm">
              Introduced by White Stone Financial Services LLC
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">{t('navbar.about')}</Link></li>
              <li><Link to="/challenge" className="text-gray-400 hover:text-white">{t('navbar.challenge')}</Link></li>
              <li><Link to="/funding" className="text-gray-400 hover:text-white">{t('navbar.funding')}</Link></li>
              <li><Link to="/academy" className="text-gray-400 hover:text-white">{t('navbar.academy')}</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">{t('navbar.blog')}</Link></li>
              <li><Link to="/affiliate" className="text-gray-400 hover:text-white">{t('navbar.affiliate')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">{t('footer.links.privacy')}</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">{t('footer.links.terms')}</Link></li>
              <li><Link to="/risk" className="text-gray-400 hover:text-white">{t('footer.links.risk')}</Link></li>
              <li><Link to="/refund" className="text-gray-400 hover:text-white">{t('footer.links.refund')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.connect')}</h4>
            <ul className="space-y-2">
              <li><a href="https://twitter.com/tradersact" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">{t('footer.links.twitter')}</a></li>
              <li><a href="https://linkedin.com/company/tradersact" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">{t('footer.links.linkedin')}</a></li>
              <li><a href="https://instagram.com/tradersact" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">{t('footer.links.instagram')}</a></li>
              <li><a href="https://youtube.com/c/tradersact" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">{t('footer.links.youtube')}</a></li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400">
          {isArabic ? (
            <p>تنويه: Traders Act هو منصة تعليمية وتجريبية للتداول ولا يقدم مشورة استثمارية. جميع عمليات التداول تنطوي على مخاطر، ولا تضمن النتائج السابقة تحقيق نتائج مستقبلية. الاستخدام على مسؤوليتك الخاصة.</p>
          ) : (
            <p>Disclaimer: Traders Act is an educational and demo trading platform and does not provide investment advice. All trading involves risk, and past performance is not indicative of future results. Use at your own risk.</p>
          )}
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Traders Act. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}