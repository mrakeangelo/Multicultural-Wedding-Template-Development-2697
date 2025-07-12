import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiGlobe, FiPalette } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { theme, changeTheme, themes } = useTheme();
  const { t, changeLanguage, currentLanguage } = useLanguage();

  const menuItems = [
    { key: 'ourStory', href: '#our-roots' },
    { key: 'ceremony', href: '#ceremony' },
    { key: 'timeline', href: '#timeline' },
    { key: 'gallery', href: '#gallery' },
    { key: 'traditions', href: '#traditions' },
    { key: 'rsvp', href: '#rsvp' },
    { key: 'guestbook', href: '#guestbook' }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-indian-primary/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-indian-primary to-indian-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">UT</span>
            </div>
            <span className="font-script text-xl text-indian-text">Unity Threads</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="text-indian-text hover:text-indian-primary transition-colors font-sans"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(item.key)}
              </motion.a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="p-2 rounded-lg bg-indian-primary/10 hover:bg-indian-primary/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiPalette} className="w-5 h-5 text-indian-primary" />
              </motion.button>
              
              {isThemeMenuOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-indian-primary/20 py-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {Object.entries(themes).map(([key, themeData]) => (
                    <button
                      key={key}
                      onClick={() => {
                        changeTheme(key);
                        setIsThemeMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-indian-primary/10 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: themeData.colors.primary }}
                        />
                        <span className="text-sm">{themeData.name}</span>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="p-2 rounded-lg bg-indian-primary/10 hover:bg-indian-primary/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiGlobe} className="w-5 h-5 text-indian-primary" />
              </motion.button>
              
              {isLanguageMenuOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-indian-primary/20 py-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-indian-primary/10 transition-colors ${
                        currentLanguage === lang.code ? 'bg-indian-primary/20' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span>{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-indian-primary/10 hover:bg-indian-primary/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon 
                icon={isMenuOpen ? FiX : FiMenu} 
                className="w-5 h-5 text-indian-primary" 
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4 border-t border-indian-primary/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="pt-4 space-y-2">
              {menuItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  className="block px-4 py-2 text-indian-text hover:text-indian-primary hover:bg-indian-primary/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  {t(item.key)}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;