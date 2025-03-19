import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle = ({ className = '' }: DarkModeToggleProps) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a preference stored
    const savedTheme = localStorage.getItem('traders-act-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Check if user prefers dark mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('traders-act-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('traders-act-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full transition-colors ${
        isDarkMode 
          ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
          : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
      } ${className}`}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default DarkModeToggle;
