import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUsers, FiStar } = FiIcons;

const WeddingParty = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const weddingParty = {
    bride: {
      name: "Priya Sharma",
      role: "Bride",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop",
      bio: "A software engineer with a passion for classical dance and traditional arts.",
      outfit: "Traditional red lehenga with gold embroidery"
    },
    groom: {
      name: "Arjun Patel",
      role: "Groom",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "An entrepreneur who loves music and believes in preserving cultural traditions.",
      outfit: "Cream silk sherwani with gold details"
    },
    brideParty: [
      {
        name: "Meera Sharma",
        role: "Maid of Honor",
        relation: "Sister",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
        bio: "Priya's younger sister and best friend since childhood.",
        outfit: "Pink silk saree with traditional jewelry"
      },
      {
        name: "Kavya Reddy",
        role: "Bridesmaid",
        relation: "Best Friend",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop",
        bio: "College roommate and dance partner for 8 years.",
        outfit: "Turquoise lehenga with mirror work"
      },
      {
        name: "Anjali Gupta",
        role: "Bridesmaid",
        relation: "Cousin",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&h=300&fit=crop",
        bio: "Cousin who shares Priya's love for traditional crafts.",
        outfit: "Orange silk saree with gold border"
      }
    ],
    groomParty: [
      {
        name: "Rohan Patel",
        role: "Best Man",
        relation: "Brother",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
        bio: "Arjun's elder brother and business partner.",
        outfit: "Navy blue sherwani with gold buttons"
      },
      {
        name: "Vikram Singh",
        role: "Groomsman",
        relation: "Best Friend",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
        bio: "College friend and cricket team captain.",
        outfit: "Maroon kurta with cream dhoti"
      },
      {
        name: "Aditya Joshi",
        role: "Groomsman",
        relation: "Cousin",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
        bio: "Cousin who introduced Arjun to traditional music.",
        outfit: "Green silk kurta with gold embroidery"
      }
    ]
  };

  const PartyMember = ({ member, index, isMain = false }) => (
    <motion.div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${isMain ? 'col-span-full max-w-md mx-auto' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-script text-xl mb-1">{member.name}</h3>
          <p className="text-sm opacity-90">{member.role}</p>
          {member.relation && (
            <p className="text-xs opacity-75">{member.relation}</p>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-indian-text/80 font-serif mb-4 leading-relaxed">
          {member.bio}
        </p>
        
        <div className="border-t border-indian-primary/20 pt-4">
          <h4 className="font-sans font-semibold text-indian-text mb-2">
            Wedding Outfit:
          </h4>
          <p className="text-indian-text/70 font-sans text-sm">
            {member.outfit}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="wedding-party" className="py-20 bg-gradient-to-br from-white to-indian-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-script text-4xl md:text-5xl text-indian-text mb-4">
            {t('weddingParty')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indian-primary to-indian-secondary mx-auto mb-6"></div>
          <p className="text-lg text-indian-text/80 font-serif max-w-3xl mx-auto">
            Meet the special people who will be standing with us on our wedding day, dressed in beautiful traditional attire.
          </p>
        </motion.div>

        {/* Bride and Groom */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <PartyMember member={weddingParty.bride} index={0} isMain={true} />
          <PartyMember member={weddingParty.groom} index={1} isMain={true} />
        </div>

        {/* Bride's Party */}
        <div className="mb-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-script text-3xl text-indian-text mb-4 flex items-center justify-center space-x-2">
              <SafeIcon icon={FiHeart} className="w-6 h-6 text-indian-primary" />
              <span>Bride's Party</span>
            </h3>
            <p className="text-indian-text/70 font-serif">
              The wonderful women supporting Priya on her special day
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {weddingParty.brideParty.map((member, index) => (
              <PartyMember key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Groom's Party */}
        <div className="mb-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-script text-3xl text-indian-text mb-4 flex items-center justify-center space-x-2">
              <SafeIcon icon={FiUsers} className="w-6 h-6 text-indian-primary" />
              <span>Groom's Party</span>
            </h3>
            <p className="text-indian-text/70 font-serif">
              The amazing men standing with Arjun on his wedding day
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {weddingParty.groomParty.map((member, index) => (
              <PartyMember key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Traditional Attire Guide */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-script text-3xl text-indian-text mb-6 text-center flex items-center justify-center space-x-2">
            <SafeIcon icon={FiStar} className="w-6 h-6 text-indian-primary" />
            <span>Traditional Attire Guide</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans font-semibold text-indian-text mb-4">
                Women's Traditional Wear:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-indian-primary text-lg">👗</span>
                  <div>
                    <p className="font-semibold text-indian-text">Lehenga</p>
                    <p className="text-sm text-indian-text/70">Skirt with fitted blouse and dupatta</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indian-primary text-lg">🥻</span>
                  <div>
                    <p className="font-semibold text-indian-text">Saree</p>
                    <p className="text-sm text-indian-text/70">Draped silk or cotton with blouse</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indian-primary text-lg">👚</span>
                  <div>
                    <p className="font-semibold text-indian-text">Salwar Kameez</p>
                    <p className="text-sm text-indian-text/70">Tunic with loose pants and scarf</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-sans font-semibold text-indian-text mb-4">
                Men's Traditional Wear:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-indian-primary text-lg">🤵</span>
                  <div>
                    <p className="font-semibold text-indian-text">Sherwani</p>
                    <p className="text-sm text-indian-text/70">Long coat with churidar pants</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indian-primary text-lg">👕</span>
                  <div>
                    <p className="font-semibold text-indian-text">Kurta</p>
                    <p className="text-sm text-indian-text/70">Traditional shirt with dhoti or pants</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indian-primary text-lg">🎩</span>
                  <div>
                    <p className="font-semibold text-indian-text">Accessories</p>
                    <p className="text-sm text-indian-text/70">Turban, mojaris, and traditional jewelry</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-indian-primary/10 rounded-lg">
            <p className="text-indian-text/80 font-serif text-center">
              <strong>Note:</strong> All wedding party members will be available for photos and to help explain 
              the significance of traditional attire to interested guests.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingParty;