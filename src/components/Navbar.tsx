import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const legalPages = ['/privacy', '/terms', '/risk', '/refund', '/affiliate', '/challenge', '/funding', '/academy', '/blog'];
    if (legalPages.includes(location.pathname)) {
      setIsScrolled(true);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md -webkit-backdrop-filter backdrop-blur-md shadow-sm' : 'bg-[#171E60]/90 backdrop-blur-md -webkit-backdrop-filter backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo className={`h-10 w-auto transition-colors duration-300 ${isScrolled ? 'text-[#171E60]' : 'text-white'}`} />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className={isScrolled ? isActive('/about') : 'text-white/90 hover:text-white'}>
              {t('navbar.about')}
            </Link>
            <Link to="/challenge" className={isScrolled ? isActive('/challenge') : 'text-white/90 hover:text-white'}>
              {t('navbar.challenge')}
            </Link>
            <Link to="/funding" className={isScrolled ? isActive('/funding') : 'text-white/90 hover:text-white'}>
              {t('navbar.funding')}
            </Link>
            <Link to="/academy" className={isScrolled ? isActive('/academy') : 'text-white/90 hover:text-white'}>
              {t('navbar.academy')}
            </Link>
            <Link to="/blog" className={isScrolled ? isActive('/blog') : 'text-white/90 hover:text-white'}>
              {t('navbar.blog')}
            </Link>
            <Link to="/affiliate" className={isScrolled ? isActive('/affiliate') : 'text-white/90 hover:text-white'}>
              {t('navbar.affiliate')}
            </Link>
            <LanguageSwitcher />
            <a href="https://my.tradersact.com/login">
              <Button 
                variant={isScrolled ? "outline" : "primary"} 
                size="sm"
                className={isScrolled ? "bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300" : ""}
              >
                {t('common.signIn')}
              </Button>
            </a>
            <a href="https://my.tradersact.com/register">
              <Button 
                size="sm" 
                className={!isScrolled ? 'bg-white text-blue-800 hover:bg-white/90' : ''}
              >
                {t('common.getStarted')}
              </Button>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-white/80'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.about')}
            </Link>
            <Link
              to="/challenge"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.challenge')}
            </Link>
            <Link
              to="/funding"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.funding')}
            </Link>
            <Link
              to="/academy"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.academy')}
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.blog')}
            </Link>
            <Link
              to="/affiliate"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.affiliate')}
            </Link>
            <div className="px-3 py-2 space-y-2">
              <a href="https://my.tradersact.com/login" className="block w-full" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300">
                  {t('common.signIn')}
                </Button>
              </a>
              <a href="https://my.tradersact.com/register" className="block w-full" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">{t('common.getStarted')}</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}