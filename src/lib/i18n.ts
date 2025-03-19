import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all language files
import enTranslation from '../locales/en.json';
import arTranslation from '../locales/ar.json';
import viTranslation from '../locales/vi.json';
import msTranslation from '../locales/ms.json';
import hiTranslation from '../locales/hi.json';
import zhCNTranslation from '../locales/zh-CN.json';
import esTranslation from '../locales/es.json';

// Define available languages
export const availableLanguages = ['en', 'ar', 'vi', 'ms', 'hi', 'zh-CN', 'es'];

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
      vi: { translation: viTranslation },
      ms: { translation: msTranslation },
      hi: { translation: hiTranslation },
      'zh-CN': { translation: zhCNTranslation },
      es: { translation: esTranslation }
    },
    fallbackLng: 'en',
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
      cookieMinutes: 160,
      htmlTag: document.documentElement
    },
    returnObjects: true,
    returnEmptyString: false,
    returnNull: false,
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
      defaultTransParent: 'div'
    },
    // Add missing key handling
    saveMissing: import.meta.env.DEV,
    missingKeyHandler: (lng, _ns, key) => {
      if (import.meta.env.DEV) {
        console.warn(`Missing translation key: ${key} for language: ${lng}`);
      }
    }
  });

// Ensure we have a valid language
const storedLang = localStorage.getItem('i18nextLng');
if (storedLang && !availableLanguages.includes(storedLang)) {
  // If stored language is invalid, reset to English
  localStorage.setItem('i18nextLng', 'en');
  i18n.changeLanguage('en');
}

// Handle language direction and font family
i18n.on('languageChanged', (lng) => {
  // Set direction
  const direction = ['ar'].includes(lng) ? 'rtl' : 'ltr';
  document.documentElement.dir = direction;
  document.documentElement.lang = lng;

  // Set appropriate font family class
  document.documentElement.className = '';
  if (lng === 'ar') {
    document.documentElement.classList.add('font-arabic');
  } else if (lng === 'hi') {
    document.documentElement.classList.add('font-hindi');
  } else if (lng === 'zh-CN') {
    document.documentElement.classList.add('font-chinese');
  } else {
    document.documentElement.classList.add('font-sans');
  }

  // Update localStorage
  localStorage.setItem('i18nextLng', lng);

  // Log language change in development
  if (import.meta.env.DEV) {
    console.log(`Language changed to: ${lng}`);
  }
});

export default i18n;