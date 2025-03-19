import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useEffect, useState, useCallback, useRef } from 'react';
import { cn } from '../lib/utils';
import { useLocation } from 'react-router-dom';
import './LanguageSwitcher.css';
import { availableLanguages } from '../lib/i18n';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
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
    if (i18n.language === lng) {
      setIsOpen(false);
      return;
    }
    
    try {
      setIsChangingLanguage(true);
      
      // Check if the language is supported
      if (!availableLanguages.includes(lng)) {
        console.error(`Language ${lng} is not supported`);
        setIsChangingLanguage(false);
        return;
      }
      
      // Change language
      await i18n.changeLanguage(lng);
      
      // Ensure the language is stored in localStorage
      localStorage.setItem('i18nextLng', lng);
      
      // Close dropdown
      setIsOpen(false);
      
      // Give time for the language to change before allowing new changes
      setTimeout(() => {
        setIsChangingLanguage(false);
      }, 500);
      
    } catch (error) {
      console.error("Error changing language:", error);
      setIsChangingLanguage(false);
    }
  }, [i18n]);

  // Initialize language from localStorage on component mount
  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang && availableLanguages.includes(savedLang) && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang).catch(err => {
        console.error("Error initializing language:", err);
      });
    }
  }, [i18n]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Find current language, defaulting to English if not found
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors px-3 py-2 rounded-md",
          isLegalPage 
            ? "bg-gray-100 text-gray-800 hover:text-blue-700 hover:bg-gray-200" 
            : "bg-blue-800 text-white hover:text-white hover:bg-blue-700",
          isChangingLanguage && "opacity-50 cursor-wait"
        )}
        aria-label={t('languageSwitcher.selectLanguage', 'Select language')}
        disabled={isChangingLanguage}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden md:inline">{currentLanguage.name}</span>
        {isChangingLanguage && (
          <span className="ml-2 w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
      </button>
      
      {isOpen && (
        <div className="language-dropdown absolute top-full right-0 mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50 border border-gray-200">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={cn(
                "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors",
                i18n.language === lang.code && "bg-blue-50 text-blue-800 font-medium",
                isChangingLanguage && "opacity-50 cursor-wait"
              )}
              disabled={isChangingLanguage || i18n.language === lang.code}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}