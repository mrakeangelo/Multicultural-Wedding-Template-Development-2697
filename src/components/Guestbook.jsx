import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUser, FiGlobe, FiSend, FiMessageCircle } = FiIcons;

const Guestbook = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [newMessage, setNewMessage] = useState({
    name: '',
    message: '',
    language: 'en',
    location: ''
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      message: "Wishing you both a lifetime of love and happiness! Can't wait to celebrate with you.",
      language: "en",
      location: "New York, USA",
      timestamp: "2024-01-15T10:30:00Z"
    },
    {
      id: 2,
      name: "राज शर्मा",
      message: "आपके नए जीवन की शुरुआत के लिए हार्दिक शुभकामनाएं! भगवान आपको हमेशा खुश रखे।",
      language: "hi",
      location: "Mumbai, India",
      timestamp: "2024-01-14T15:45:00Z"
    },
    {
      id: 3,
      name: "李小明",
      message: "祝愿你们新婚快乐，白头偕老！期待参加你们的婚礼。",
      language: "zh",
      location: "Beijing, China",
      timestamp: "2024-01-13T08:20:00Z"
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      message: "¡Felicidades! May your marriage be filled with joy, laughter, and endless love.",
      language: "es",
      location: "Madrid, Spain",
      timestamp: "2024-01-12T14:15:00Z"
    }
  ]);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMessage(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        ...newMessage,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [message, ...prev]);
      setNewMessage({
        name: '',
        message: '',
        language: 'en',
        location: ''
      });
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getLanguageInfo = (code) => {
    return languages.find(lang => lang.code === code) || languages[0];
  };

  return (
    <section id="guestbook" className="py-20 bg-gradient-to-br from-white to-indian-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-script text-4xl md:text-5xl text-indian-text mb-4">
            {t('guestbook')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indian-primary to-indian-secondary mx-auto mb-6"></div>
          <p className="text-lg text-indian-text/80 font-serif max-w-3xl mx-auto">
            {t('leaveBlessing')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Message Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-indian-text font-sans font-semibold mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indian-primary w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={newMessage.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-indian-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indian-primary/30 focus:border-indian-primary transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-indian-text font-sans font-semibold mb-2">
                    Location (Optional)
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiGlobe} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indian-primary w-5 h-5" />
                    <input
                      type="text"
                      name="location"
                      value={newMessage.location}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-indian-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indian-primary/30 focus:border-indian-primary transition-colors"
                      placeholder="City, Country"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-indian-text font-sans font-semibold mb-2">
                  Language
                </label>
                <select
                  name="language"
                  value={newMessage.language}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-indian-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indian-primary/30 focus:border-indian-primary transition-colors"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-indian-text font-sans font-semibold mb-2">
                  Your Blessing/Message *
                </label>
                <textarea
                  name="message"
                  value={newMessage.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-indian-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indian-primary/30 focus:border-indian-primary transition-colors resize-none"
                  placeholder="Share your blessings, wishes, or memories in your preferred language..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-indian-primary to-indian-secondary text-white py-4 rounded-lg font-sans font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiSend} className="w-5 h-5" />
                <span>Send Blessing</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Messages Display */}
          <div className="space-y-6">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indian-primary to-indian-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {message.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-indian-text">
                        {message.name}
                      </h4>
                      <div className="flex items-center space-x-2 text-sm text-indian-text/60">
                        {message.location && (
                          <>
                            <span>{message.location}</span>
                            <span>•</span>
                          </>
                        )}
                        <span>{formatTimestamp(message.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getLanguageInfo(message.language).flag}</span>
                    <SafeIcon icon={FiMessageCircle} className="w-4 h-4 text-indian-primary" />
                  </div>
                </div>

                <p className="text-indian-text/80 font-serif leading-relaxed mb-4">
                  {message.message}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-indian-text/60">
                    Written in {getLanguageInfo(message.language).name}
                  </span>
                  <motion.button
                    className="flex items-center space-x-1 text-indian-primary hover:text-indian-secondary transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SafeIcon icon={FiHeart} className="w-4 h-4" />
                    <span className="text-sm">Like</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-white border-2 border-indian-primary text-indian-primary px-8 py-3 rounded-full font-sans font-semibold hover:bg-indian-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Messages
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;