import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBook, FiChevronDown, FiChevronUp, FiInfo, FiHeart } = FiIcons;

const TraditionsGuide = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [expandedTradition, setExpandedTradition] = useState(null);

  const traditions = [
    {
      id: 'mehendi',
      title: 'Mehendi Ceremony',
      sanskrit: 'मेहंदी',
      icon: '🎨',
      summary: 'Beautiful henna art applied to hands and feet',
      description: 'The Mehendi ceremony is a joyous pre-wedding celebration where intricate henna designs are applied to the bride\'s hands and feet. The deeper the color, the more the groom is said to love his bride.',
      significance: 'Mehendi is believed to bring good luck, joy, and spiritual awakening to the bride. The ceremony strengthens the bond between families.',
      whatToExpect: [
        'Professional mehendi artists will create intricate designs',
        'Traditional folk songs and dance performances',
        'Light refreshments and sweets',
        'Photo opportunities with beautiful henna art'
      ],
      guestEtiquette: [
        'Wear bright, colorful clothing (yellows and oranges preferred)',
        'Participate in singing traditional songs',
        'Avoid wearing white or black',
        'Bring small gifts or sweets for the bride'
      ]
    },
    {
      id: 'sangeet',
      title: 'Sangeet Night',
      sanskrit: 'संगीत',
      icon: '🎵',
      summary: 'Musical evening with dance and celebrations',
      description: 'Sangeet is a vibrant celebration filled with music, dance, and performances by both families. It\'s a time for everyone to come together and celebrate the upcoming union.',
      significance: 'This ceremony brings both families together in celebration and helps break the ice between relatives who may be meeting for the first time.',
      whatToExpected: [
        'Choreographed dance performances by family members',
        'Traditional and modern music',
        'Friendly competition between bride and groom\'s families',
        'Dinner and celebration late into the night'
      ],
      guestEtiquette: [
        'Dress in traditional or fusion wear',
        'Participate in group dances',
        'Cheer for the performances',
        'Bring your dancing shoes!'
      ]
    },
    {
      id: 'haldi',
      title: 'Haldi Ceremony',
      sanskrit: 'हल्दी',
      icon: '🌟',
      summary: 'Turmeric paste blessing ritual',
      description: 'A purifying ceremony where turmeric paste is applied to the bride and groom (separately) by family members. This ritual is believed to cleanse and bless the couple.',
      significance: 'Turmeric has antiseptic properties and is believed to give a natural glow to the skin. It also symbolizes fertility and prosperity.',
      whatToExpect: [
        'Turmeric paste application by family members',
        'Playful and fun atmosphere',
        'Traditional sweets and refreshments',
        'Lots of laughter and photo opportunities'
      ],
      guestEtiquette: [
        'Wear old clothes that can get stained',
        'Yellow-themed clothing is preferred',
        'Participate in applying haldi to the couple',
        'Be prepared for a messy but fun experience'
      ]
    },
    {
      id: 'wedding',
      title: 'Wedding Ceremony',
      sanskrit: 'विवाह',
      icon: '💒',
      summary: 'Sacred marriage ceremony with traditional rituals',
      description: 'The main wedding ceremony includes various sacred rituals including the Saat Phere (seven vows) around the sacred fire, exchange of garlands, and the tying of the mangalsutra.',
      significance: 'This is the most sacred part of the celebration where the couple takes their vows in front of the sacred fire (Agni) and family members.',
      whatToExpect: [
        'Sacred fire ceremony (Agni)',
        'Exchange of garlands (Jaimala)',
        'Seven vows around the fire (Saat Phere)',
        'Tying of the mangalsutra (sacred necklace)',
        'Blessing from elders'
      ],
      guestEtiquette: [
        'Dress in traditional Indian attire',
        'Maintain silence during sacred rituals',
        'Remove shoes before entering the mandap',
        'Offer blessings to the couple after the ceremony'
      ]
    },
    {
      id: 'reception',
      title: 'Reception',
      sanskrit: 'स्वागत',
      icon: '🎉',
      summary: 'Grand celebration dinner and party',
      description: 'The reception is a grand celebration where the newlyweds are formally introduced to extended family and friends. It includes dinner, speeches, and dancing.',
      significance: 'This ceremony welcomes the couple into their new life together and allows both families to celebrate with their extended network.',
      whatToExpect: [
        'Formal introduction of the couple',
        'Multi-course dinner with Indian cuisine',
        'Speeches and toasts',
        'Dancing and entertainment',
        'Cake cutting ceremony'
      ],
      guestEtiquette: [
        'Dress in formal or semi-formal attire',
        'Bring gifts for the couple',
        'Participate in the celebration',
        'Enjoy the feast and festivities'
      ]
    }
  ];

  const toggleTradition = (id) => {
    setExpandedTradition(expandedTradition === id ? null : id);
  };

  return (
    <section id="traditions" className="py-20 bg-gradient-to-br from-indian-background to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-script text-4xl md:text-5xl text-indian-text mb-4">
            {t('traditions')} to Know
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indian-primary to-indian-secondary mx-auto mb-6"></div>
          <p className="text-lg text-indian-text/80 font-serif max-w-3xl mx-auto">
            Learn about the beautiful traditions and customs that make our wedding celebration meaningful and special.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {traditions.map((tradition, index) => (
            <motion.div
              key={tradition.id}
              className="mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                {/* Header */}
                <motion.button
                  onClick={() => toggleTradition(tradition.id)}
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-indian-primary/30"
                  whileHover={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{tradition.icon}</div>
                      <div>
                        <h3 className="font-script text-2xl text-indian-text mb-1">
                          {tradition.title}
                        </h3>
                        <p className="text-indian-primary font-hindi text-lg mb-2">
                          {tradition.sanskrit}
                        </p>
                        <p className="text-indian-text/70 font-serif">
                          {tradition.summary}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedTradition === tradition.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SafeIcon 
                        icon={expandedTradition === tradition.id ? FiChevronUp : FiChevronDown} 
                        className="w-6 h-6 text-indian-primary" 
                      />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedTradition === tradition.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-indian-primary/20"
                    >
                      <div className="p-6 space-y-6">
                        {/* Description */}
                        <div>
                          <h4 className="font-sans font-semibold text-indian-text mb-3 flex items-center space-x-2">
                            <SafeIcon icon={FiBook} className="w-5 h-5 text-indian-primary" />
                            <span>Description</span>
                          </h4>
                          <p className="text-indian-text/80 font-serif leading-relaxed">
                            {tradition.description}
                          </p>
                        </div>

                        {/* Significance */}
                        <div>
                          <h4 className="font-sans font-semibold text-indian-text mb-3 flex items-center space-x-2">
                            <SafeIcon icon={FiHeart} className="w-5 h-5 text-indian-primary" />
                            <span>Cultural Significance</span>
                          </h4>
                          <p className="text-indian-text/80 font-serif leading-relaxed">
                            {tradition.significance}
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* What to Expect */}
                          <div>
                            <h4 className="font-sans font-semibold text-indian-text mb-3 flex items-center space-x-2">
                              <SafeIcon icon={FiInfo} className="w-5 h-5 text-indian-primary" />
                              <span>What to Expect</span>
                            </h4>
                            <ul className="space-y-2">
                              {tradition.whatToExpect.map((item, i) => (
                                <li key={i} className="flex items-start space-x-2">
                                  <div className="w-2 h-2 bg-indian-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-indian-text/80 font-sans text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Guest Etiquette */}
                          <div>
                            <h4 className="font-sans font-semibold text-indian-text mb-3">
                              Guest Etiquette
                            </h4>
                            <ul className="space-y-2">
                              {tradition.guestEtiquette.map((item, i) => (
                                <li key={i} className="flex items-start space-x-2">
                                  <div className="w-2 h-2 bg-indian-secondary rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-indian-text/80 font-sans text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Cultural Note */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="font-script text-3xl text-indian-text mb-6">
              A Note on Cultural Respect
            </h3>
            <p className="text-indian-text/80 font-serif leading-relaxed max-w-2xl mx-auto">
              These traditions have been passed down through generations and hold deep spiritual and cultural significance. 
              We invite you to participate with respect and open hearts as we celebrate our heritage together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TraditionsGuide;