import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiMail, FiPhone, FiUsers, FiHeart, FiCheck } = FiIcons;

const RSVP = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    events: [],
    dietary: '',
    message: '',
    language: 'en'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const events = [
    { id: 'mehendi', name: 'Mehendi Ceremony', date: 'March 13' },
    { id: 'sangeet', name: 'Sangeet Night', date: 'March 14' },
    { id: 'haldi', name: 'Haldi Ceremony', date: 'March 15' },
    { id: 'wedding', name: 'Wedding Ceremony', date: 'March 15' },
    { id: 'reception', name: 'Reception', date: 'March 16' }
  ];

  const dietaryOptions = [
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'gluten-free', label: 'Gluten-free' },
    { value: 'no-restrictions', label: 'No dietary restrictions' },
    { value: 'other', label: 'Other (please specify)' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEventChange = (eventId) => {
    setFormData(prev => ({
      ...prev,
      events: prev.events.includes(eventId)
        ? prev.events.filter(id => id !== eventId)
        : [...prev.events, eventId]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend/Supabase
    console.log('RSVP Data:', formData);
    setIsSubmitted(true);
    
    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '1',
        events: [],
        dietary: '',
        message: '',
        language: 'en'
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-br from-indian-background to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <motion.div
                className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <SafeIcon icon={FiCheck} className="w-10 h-10 text-white" />
              </motion.div>
              
              <h2 className="font-script text-4xl text-indian-text mb-4">
                {t('thankYou')}!
              </h2>
              <p className="text-lg text-indian-text/80 font-serif mb-6">
                Your RSVP has been received successfully. We can't wait to celebrate with you!
              </p>
              
              {/* Celebration Animation */}
              <motion.div
                className="flex justify-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="text-2xl"
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  >
                    🎉
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-indian-background to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-script text-4xl md:text-5xl text-indian-text mb-4">
            {t('rsvp')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indian-primary to-indian-secondary mx-auto mb-6"></div>
          <p className="text-lg text-indian-text/80 font-serif max-w-3xl mx-auto">
            Please let us know if you'll be joining us for our special celebration. Your presence would make our day even more meaningful.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            {/* Basic Information */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-indian-text font-sans font-semibold mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indian-primary w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-indian-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indian-primary/30 focus:border-indian-primary transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-indian-text font-sans font-semibold mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indian-primary w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-indian-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indian-primary/30 focus:border-indian-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-indian-text font-sans font-semibold mb-2">
                    Phone
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indian-primary w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-indian-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indian-primary/30 focus:border-indian-primary transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-indian-text font-sans font-semibold mb-2">
                  Number of Guests *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiUsers} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indian-primary w-5 h-5" />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-indian-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indian-primary/30 focus:border-indian-primary transition-colors"
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Events Selection */}
            <div className="mb-8">
              <label className="block text-indian-text font-sans font-semibold mb-4">
                Which events will you attend? *
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                {events.map((event) => (
                  <motion.label
                    key={event.id}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.events.includes(event.id)
                        ? 'border-indian-primary bg-indian-primary/10'
                        : 'border-indian-primary/20 hover:border-indian-primary/40'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.events.includes(event.id)}
                      onChange={() => handleEventChange(event.id)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      formData.events.includes(event.id)
                        ? 'bg-indian-primary border-indian-primary'
                        : 'border-indian-primary/40'
                    }`}>
                      {formData.events.includes(event.id) && (
                        <SafeIcon icon={FiCheck} className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-indian-text">{event.name}</p>
                      <p className="text-sm text-indian-text/60">{event.date}</p>
                    </div>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Dietary Preferences */}
            <div className="mb-8">
              <label className="block text-indian-text font-sans font-semibold mb-4">
                Dietary Preferences
              </label>
              <div className="space-y-2">
                {dietaryOptions.map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="dietary"
                      value={option.value}
                      checked={formData.dietary === option.value}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-indian-primary focus:ring-indian-primary/30"
                    />
                    <span className="text-indian-text">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Language Preference */}
            <div className="mb-8">
              <label className="block text-indian-text font-sans font-semibold mb-2">
                Preferred Language for Communication
              </label>
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-indian-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indian-primary/30 focus:border-indian-primary transition-colors"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी (Hindi)</option>
                <option value="gu">ગુજરાતી (Gujarati)</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-indian-text font-sans font-semibold mb-2">
                Special Message or Requests
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-indian-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indian-primary/30 focus:border-indian-primary transition-colors resize-none"
                placeholder="Share any special requests, dietary needs, or a heartfelt message..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-indian-primary to-indian-secondary text-white py-4 rounded-lg font-sans font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SafeIcon icon={FiHeart} className="w-5 h-5" />
              <span>Send RSVP</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;