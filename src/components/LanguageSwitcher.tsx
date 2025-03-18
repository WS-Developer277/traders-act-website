import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import { cn } from '../lib/utils';
import { useLocation } from 'react-router-dom';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  
  // Determine if we're on a legal page
  const isLegalPage = ['/privacy', '/terms', '/risk', '/refund'].includes(location.pathname);
  
  // Available languages
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'zh-CN', name: '简体中文' },
    { code: 'es', name: 'Español' },
    { code: 'vi', name: 'Tiếng Việt' },
    { code: 'ms', name: 'Bahasa Melayu' }
  ];

  const changeLanguage = useCallback(async (lng: string) => {
    try {
      setIsChangingLanguage(true);
      await i18n.changeLanguage(lng);
      localStorage.setItem('i18nextLng', lng);
      
      // Instead of reloading the page, we'll just update the state
      // This will trigger a re-render of components using translations
      console.log(`Language changed to ${lng}`);
    } catch (error) {
      console.error("Error changing language:", error);
    } finally {
      setIsChangingLanguage(false);
    }
  }, [i18n]);

  // Initialize language from localStorage on component mount
  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang && savedLang !== i18n.language) {
      changeLanguage(savedLang);
    }
  }, [i18n.language, changeLanguage]);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative group">
      <button 
        className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors",
          isLegalPage ? "text-gray-700 hover:text-blue-600" : "text-inherit hover:text-blue-200",
          isChangingLanguage && "opacity-50 cursor-wait"
        )}
        aria-label={t('languageSwitcher.selectLanguage')}
        disabled={isChangingLanguage}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden md:inline">{currentLanguage.name}</span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={cn(
              "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors",
              i18n.language === lang.code && "bg-blue-50 text-blue-600",
              isChangingLanguage && "opacity-50 cursor-wait"
            )}
            disabled={isChangingLanguage || i18n.language === lang.code}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}