import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter } = FiIcons;

const Footer = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const contactInfo = {
    bride: {
      name: "Priya Sharma",
      email: "priya@unitythreads.com",
      phone: "+91 98765 43210"
    },
    groom: {
      name: "Arjun Patel",
      email: "arjun@unitythreads.com",
      phone: "+91 87654 32109"
    },
    families: {
      bride: "Sharma Family: +91 98765 43211",
      groom: "Patel Family: +91 87654 32108"
    }
  };

  const socialLinks = [
    { icon: FiInstagram, href: "#", label: "Instagram" },
    { icon: FiFacebook, href: "#", label: "Facebook" },
    { icon: FiTwitter, href: "#", label: "Twitter" }
  ];

  const importantLinks = [
    { href: "#our-roots", label: "Our Story" },
    { href: "#ceremony", label: "Ceremony" },
    { href: "#timeline", label: "Timeline" },
    { href: "#rsvp", label: "RSVP" },
    { href: "#registry", label: "Registry" }
  ];

  return (
    <footer className="bg-gradient-to-br from-indian-text to-indian-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-indian-primary to-indian-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold">UT</span>
              </div>
              <span className="font-script text-2xl">Unity Threads</span>
            </div>
            <p className="text-white/80 font-serif mb-6 leading-relaxed">
              A celebration of love, culture, and the beautiful union of two hearts and two families.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <SafeIcon icon={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-script text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors font-sans flex items-center space-x-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1 h-1 bg-indian-primary rounded-full"></span>
                    <span>{link.label}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-script text-xl mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-sans font-semibold text-white mb-2">Bride's Side</h4>
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiMail} className="w-4 h-4" />
                    <span>{contactInfo.bride.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiPhone} className="w-4 h-4" />
                    <span>{contactInfo.bride.phone}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-sans font-semibold text-white mb-2">Groom's Side</h4>
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiMail} className="w-4 h-4" />
                    <span>{contactInfo.groom.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiPhone} className="w-4 h-4" />
                    <span>{contactInfo.groom.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Wedding Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-script text-xl mb-6">Wedding Details</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-indian-primary mt-1" />
                <div>
                  <h4 className="font-sans font-semibold text-white">Venue</h4>
                  <p className="text-white/80 text-sm">
                    The Grand Palace<br />
                    Mumbai, Maharashtra<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <SafeIcon icon={FiHeart} className="w-5 h-5 text-indian-primary mt-1" />
                <div>
                  <h4 className="font-sans font-semibold text-white">Date</h4>
                  <p className="text-white/80 text-sm">
                    March 15, 2025<br />
                    7:00 PM onwards
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/20 mt-12 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white/80 font-serif text-sm">
                Unity Threads – A Cultural Heritage Wedding Template by{' '}
                <span className="text-indian-primary font-semibold">Mrake Agency</span>
              </p>
              <p className="text-white/60 text-xs mt-1">
                Celebrating love, culture, and tradition with respect and dignity
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white/60 hover:text-white text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-xs transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-white/60 hover:text-white text-xs transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <p className="text-center text-white/40 text-xs mt-6">
            © {new Date().getFullYear()} Unity Threads. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;