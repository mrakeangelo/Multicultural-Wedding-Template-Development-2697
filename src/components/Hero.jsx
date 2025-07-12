import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiCalendar, FiMapPin } = FiIcons;

const Hero = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const weddingData = {
    bride: "Priya Sharma",
    groom: "Arjun Patel",
    date: "March 15, 2025",
    venue: "The Grand Palace, Mumbai",
    tagline: "Two hearts, two families, one beautiful journey"
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 animate-float">
          <MandalaPattern />
        </div>
        <div className="absolute bottom-32 right-32 w-24 h-24 animate-float" style={{ animationDelay: '1s' }}>
          <MandalaPattern />
        </div>
        <div className="absolute top-1/2 left-10 w-20 h-20 animate-float" style={{ animationDelay: '2s' }}>
          <MandalaPattern />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Cultural Flags/Motifs */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-indian-primary to-indian-secondary rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white text-2xl">🪷</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <SafeIcon icon={FiHeart} className="w-8 h-8 text-indian-primary" />
            </motion.div>
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-indian-secondary to-indian-accent rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white text-2xl">🕉️</span>
            </motion.div>
          </div>

          {/* Names */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-script text-5xl md:text-7xl text-indian-text mb-2">
              {weddingData.bride}
            </h1>
            <div className="flex items-center justify-center my-4">
              <div className="h-px bg-indian-primary w-16"></div>
              <span className="mx-4 text-indian-primary font-script text-2xl">&</span>
              <div className="h-px bg-indian-primary w-16"></div>
            </div>
            <h1 className="font-script text-5xl md:text-7xl text-indian-text">
              {weddingData.groom}
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-indian-text/80 font-serif mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {weddingData.tagline}
          </motion.p>

          {/* Wedding Details */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-2 text-indian-text">
              <SafeIcon icon={FiCalendar} className="w-5 h-5 text-indian-primary" />
              <span className="font-sans">{weddingData.date}</span>
            </div>
            <div className="flex items-center space-x-2 text-indian-text">
              <SafeIcon icon={FiMapPin} className="w-5 h-5 text-indian-primary" />
              <span className="font-sans">{weddingData.venue}</span>
            </div>
          </motion.div>

          {/* Save the Date Button */}
          <motion.button
            className="bg-gradient-to-r from-indian-primary to-indian-secondary text-white px-8 py-4 rounded-full font-sans font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t('saveTheDate')}
          </motion.button>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-indian-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-indian-primary rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const MandalaPattern = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full animate-mandala">
    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    {Array.from({ length: 8 }).map((_, i) => (
      <line
        key={i}
        x1="50"
        y1="50"
        x2={50 + 40 * Math.cos((i * Math.PI) / 4)}
        y2={50 + 40 * Math.sin((i * Math.PI) / 4)}
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
    ))}
  </svg>
);

export default Hero;