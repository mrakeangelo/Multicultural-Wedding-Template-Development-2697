import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const OurRoots = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const familyStories = {
    bride: {
      name: "Priya's Heritage",
      origin: "Rajasthan, India",
      story: "Born into a family of artisans and storytellers, Priya carries forward the rich traditions of Rajasthani culture. Her grandmother's tales of desert kingdoms and vibrant festivals shaped her love for heritage and celebration.",
      traditions: ["Mehendi ceremonies", "Traditional folk dances", "Rajasthani cuisine"],
      image: "https://images.unsplash.com/photo-1583391265740-65681f8d2b94?w=400&h=300&fit=crop"
    },
    groom: {
      name: "Arjun's Legacy",
      origin: "Gujarat, India",
      story: "Arjun's family has been guardians of Gujarati business traditions for generations. His father's teachings about community, prosperity, and celebration have instilled in him a deep respect for cultural values.",
      traditions: ["Garba dancing", "Business ethics", "Gujarati hospitality"],
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop"
    }
  };

  return (
    <section id="our-roots" className="py-20 bg-gradient-to-br from-indian-background to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-script text-4xl md:text-5xl text-indian-text mb-4">
            {t('ourStory')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indian-primary to-indian-secondary mx-auto mb-6"></div>
          <p className="text-lg text-indian-text/80 font-serif max-w-3xl mx-auto">
            Our love story is woven from the threads of two rich cultures, creating a beautiful tapestry of traditions, values, and shared dreams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {Object.entries(familyStories).map(([key, story], index) => (
            <motion.div
              key={key}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-script text-2xl mb-1">{story.name}</h3>
                  <p className="text-sm opacity-90">{story.origin}</p>
                </div>
              </div>

              <div className="p-8">
                <p className="text-indian-text/80 font-serif mb-6 leading-relaxed">
                  {story.story}
                </p>

                <div>
                  <h4 className="font-sans font-semibold text-indian-text mb-4">
                    Cultural Traditions:
                  </h4>
                  <div className="space-y-2">
                    {story.traditions.map((tradition, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-indian-primary rounded-full"></div>
                        <span className="text-indian-text/80 font-sans">{tradition}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Family Tree Preview */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="font-script text-3xl text-indian-text mb-6">
              Our Family Tree
            </h3>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indian-primary to-indian-secondary rounded-full flex items-center justify-center mb-2">
                  <span className="text-white text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <p className="text-sm text-indian-text/80">Sharma Family</p>
              </div>
              <div className="flex-1 h-px bg-indian-primary/30"></div>
              <div className="w-12 h-12 bg-indian-accent rounded-full flex items-center justify-center">
                <span className="text-white text-xl">💕</span>
              </div>
              <div className="flex-1 h-px bg-indian-primary/30"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indian-secondary to-indian-accent rounded-full flex items-center justify-center mb-2">
                  <span className="text-white text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <p className="text-sm text-indian-text/80">Patel Family</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurRoots;