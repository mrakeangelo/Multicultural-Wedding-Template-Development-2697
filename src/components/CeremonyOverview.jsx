import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiMoon, FiHeart, FiUsers, FiMusic, FiGift } = FiIcons;

const CeremonyOverview = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const ceremonies = [
    {
      name: "Mehendi Ceremony",
      sanskrit: "मेहंदी",
      time: "Day 1 - Evening",
      description: "An intimate celebration where intricate henna designs are applied to the bride's hands and feet, surrounded by family and friends sharing stories and songs.",
      icon: FiSun,
      color: "from-orange-400 to-red-400",
      traditions: ["Henna application", "Traditional songs", "Family bonding"],
      attire: "Bright yellows and oranges"
    },
    {
      name: "Sangeet Night",
      sanskrit: "संगीत",
      time: "Day 2 - Evening",
      description: "A vibrant night of music, dance, and celebration where both families come together to perform traditional and modern dances.",
      icon: FiMusic,
      color: "from-purple-400 to-pink-400",
      traditions: ["Dance performances", "Musical competitions", "Cultural fusion"],
      attire: "Colorful lehengas and sherwanis"
    },
    {
      name: "Haldi Ceremony",
      sanskrit: "हल्दी",
      time: "Day 3 - Morning",
      description: "A purifying ritual where turmeric paste is applied to the bride and groom by family members, symbolizing blessings and good fortune.",
      icon: FiHeart,
      color: "from-yellow-400 to-orange-400",
      traditions: ["Turmeric application", "Blessing rituals", "Playful celebrations"],
      attire: "Old clothes (yellow theme)"
    },
    {
      name: "Wedding Ceremony",
      sanskrit: "विवाह",
      time: "Day 3 - Evening",
      description: "The sacred union ceremony with traditional rituals, vows, and the seven circles around the sacred fire, witnessed by family and friends.",
      icon: FiUsers,
      color: "from-red-400 to-pink-400",
      traditions: ["Saat Phere", "Mangalsutra", "Sacred vows"],
      attire: "Traditional red and gold"
    },
    {
      name: "Reception",
      sanskrit: "स्वागत",
      time: "Day 4 - Evening",
      description: "A grand celebration to introduce the newlyweds to extended family and friends, featuring dinner, dancing, and joyful festivities.",
      icon: FiGift,
      color: "from-blue-400 to-purple-400",
      traditions: ["Formal introductions", "Dinner celebration", "Modern festivities"],
      attire: "Elegant formal wear"
    }
  ];

  return (
    <section id="ceremony" className="py-20 bg-gradient-to-br from-white to-indian-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-script text-4xl md:text-5xl text-indian-text mb-4">
            {t('ceremony')} Overview
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indian-primary to-indian-secondary mx-auto mb-6"></div>
          <p className="text-lg text-indian-text/80 font-serif max-w-3xl mx-auto">
            Join us for a beautiful five-day celebration that honors our heritage while creating new memories together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ceremonies.map((ceremony, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={`h-2 bg-gradient-to-r ${ceremony.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-script text-2xl text-indian-text mb-1">
                      {ceremony.name}
                    </h3>
                    <p className="text-indian-primary font-hindi text-lg">
                      {ceremony.sanskrit}
                    </p>
                  </div>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${ceremony.color} flex items-center justify-center`}>
                    <SafeIcon icon={ceremony.icon} className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <SafeIcon icon={FiMoon} className="w-4 h-4 text-indian-primary" />
                    <span className="text-indian-primary font-sans font-semibold">
                      {ceremony.time}
                    </span>
                  </div>
                  <p className="text-indian-text/80 font-serif leading-relaxed">
                    {ceremony.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-sans font-semibold text-indian-text mb-2">
                      Key Traditions:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {ceremony.traditions.map((tradition, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-indian-primary/10 text-indian-primary rounded-full text-sm font-sans"
                        >
                          {tradition}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-sans font-semibold text-indian-text mb-2">
                      Attire:
                    </h4>
                    <p className="text-indian-text/80 font-sans text-sm">
                      {ceremony.attire}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cultural Significance */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-script text-3xl text-indian-text mb-6 text-center">
            Cultural Significance
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans font-semibold text-indian-text mb-4">
                Sacred Elements:
              </h4>
              <ul className="space-y-2 text-indian-text/80">
                <li className="flex items-center space-x-2">
                  <span className="text-indian-primary">🔥</span>
                  <span>Sacred fire (Agni) - witness to vows</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indian-primary">🌸</span>
                  <span>Flower garlands - purity and beauty</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indian-primary">🥥</span>
                  <span>Coconut - prosperity and fertility</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indian-primary">🌾</span>
                  <span>Rice - abundance and blessings</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-indian-text mb-4">
                Symbolic Colors:
              </h4>
              <ul className="space-y-2 text-indian-text/80">
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span>Red - love, passion, and fertility</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span>Yellow - prosperity and new beginnings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span>Orange - courage and sacrifice</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span>Green - harmony and new life</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeremonyOverview;