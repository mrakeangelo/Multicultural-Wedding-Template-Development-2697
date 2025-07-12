import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGift, FiHeart, FiHome, FiShoppingBag, FiStar, FiExternalLink } = FiIcons;

const Registry = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('traditional');

  const registryCategories = {
    traditional: {
      name: 'Traditional Gifts',
      icon: FiStar,
      color: 'from-indian-primary to-indian-secondary',
      items: [
        {
          name: 'Silver Pooja Thali Set',
          description: 'Handcrafted silver prayer plate set for daily worship',
          price: '$150',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
          priority: 'high'
        },
        {
          name: 'Brass Diya Collection',
          description: 'Traditional oil lamps for festivals and ceremonies',
          price: '$45',
          image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=300&h=200&fit=crop',
          priority: 'medium'
        },
        {
          name: 'Handwoven Silk Sarees',
          description: 'Beautiful Banarasi silk sarees for special occasions',
          price: '$200',
          image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=200&fit=crop',
          priority: 'high'
        },
        {
          name: 'Copper Water Vessels',
          description: 'Traditional copper pots for health and wellness',
          price: '$75',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
          priority: 'medium'
        }
      ]
    },
    home: {
      name: 'Home & Kitchen',
      icon: FiHome,
      color: 'from-blue-500 to-purple-500',
      items: [
        {
          name: 'Pressure Cooker Set',
          description: 'Stainless steel pressure cookers for Indian cooking',
          price: '$120',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop',
          priority: 'high'
        },
        {
          name: 'Spice Box Collection',
          description: 'Traditional masala dabba with authentic spices',
          price: '$65',
          image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=200&fit=crop',
          priority: 'medium'
        },
        {
          name: 'Dinner Set',
          description: 'Beautiful ceramic dinner set for 12 people',
          price: '$180',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
          priority: 'high'
        },
        {
          name: 'Tea Set',
          description: 'Elegant porcelain tea service with traditional design',
          price: '$85',
          image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=200&fit=crop',
          priority: 'medium'
        }
      ]
    },
    modern: {
      name: 'Modern Lifestyle',
      icon: FiShoppingBag,
      color: 'from-green-500 to-teal-500',
      items: [
        {
          name: 'Smart Home System',
          description: 'Complete home automation and security system',
          price: '$500',
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
          priority: 'high'
        },
        {
          name: 'Air Purifier',
          description: 'High-efficiency air purifier for healthy living',
          price: '$250',
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
          priority: 'medium'
        },
        {
          name: 'Fitness Equipment',
          description: 'Home gym setup for healthy lifestyle',
          price: '$400',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
          priority: 'low'
        },
        {
          name: 'Travel Luggage Set',
          description: 'Premium luggage set for honeymoon and future travels',
          price: '$300',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop',
          priority: 'medium'
        }
      ]
    }
  };

  const giftingTraditions = [
    {
      region: 'India',
      tradition: 'Cash gifts in odd amounts (₹501, ₹1001) are considered auspicious',
      icon: '🇮🇳'
    },
    {
      region: 'Global',
      tradition: 'Household items to help establish the new home',
      icon: '🌍'
    },
    {
      region: 'Regional',
      tradition: 'Gold jewelry and precious items for prosperity',
      icon: '💰'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <section id="registry" className="py-20 bg-gradient-to-br from-indian-background to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-script text-4xl md:text-5xl text-indian-text mb-4">
            {t('registry')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indian-primary to-indian-secondary mx-auto mb-6"></div>
          <p className="text-lg text-indian-text/80 font-serif max-w-3xl mx-auto">
            Your presence is the greatest gift, but if you wish to honor us with something special, 
            here are some items that would help us build our new home together.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {Object.entries(registryCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-sans font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white text-indian-text hover:bg-indian-primary/10 border border-indian-primary/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={category.icon} className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Registry Items */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {registryCategories[activeCategory].items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full ${getPriorityColor(item.priority)}`} 
                       title={`${item.priority} priority`}></div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-script text-xl text-indian-text mb-2">
                  {item.name}
                </h3>
                <p className="text-indian-text/70 font-serif text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-indian-primary font-sans font-bold text-lg">
                    {item.price}
                  </span>
                  <motion.button
                    className="bg-indian-primary text-white px-4 py-2 rounded-lg font-sans font-semibold text-sm hover:bg-indian-secondary transition-colors flex items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SafeIcon icon={FiGift} className="w-4 h-4" />
                    <span>Give</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gifting Traditions */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-script text-3xl text-indian-text mb-6 text-center">
            Gifting Traditions Around the World
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {giftingTraditions.map((tradition, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-indian-background/30 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{tradition.icon}</div>
                <h4 className="font-sans font-semibold text-indian-text mb-2">
                  {tradition.region}
                </h4>
                <p className="text-indian-text/70 font-serif text-sm">
                  {tradition.tradition}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Alternative Giving Options */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-script text-3xl text-indian-text mb-6 text-center">
            Alternative Ways to Celebrate
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indian-primary to-indian-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiHeart} className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-sans font-semibold text-indian-text mb-3">
                Charitable Donations
              </h4>
              <p className="text-indian-text/70 font-serif text-sm leading-relaxed">
                Consider making a donation to our favorite charity: 
                Education for Underprivileged Children Foundation
              </p>
              <motion.button
                className="mt-4 bg-indian-primary/10 text-indian-primary px-6 py-2 rounded-full font-sans font-semibold text-sm hover:bg-indian-primary/20 transition-colors flex items-center space-x-1 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                <span>Learn More</span>
              </motion.button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indian-secondary to-indian-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiStar} className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-sans font-semibold text-indian-text mb-3">
                Honeymoon Fund
              </h4>
              <p className="text-indian-text/70 font-serif text-sm leading-relaxed">
                Help us create beautiful memories on our honeymoon trip 
                to Kerala and the Maldives
              </p>
              <motion.button
                className="mt-4 bg-indian-primary/10 text-indian-primary px-6 py-2 rounded-full font-sans font-semibold text-sm hover:bg-indian-primary/20 transition-colors flex items-center space-x-1 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiGift} className="w-4 h-4" />
                <span>Contribute</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;