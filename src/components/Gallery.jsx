import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiChevronLeft, FiChevronRight, FiHeart } = FiIcons;

const Gallery = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      alt: "Engagement photoshoot",
      category: "couple",
      title: "Our Engagement"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1583391265740-65681f8d2b94?w=400&h=300&fit=crop",
      alt: "Bride's family",
      category: "bride",
      title: "Sharma Family"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop",
      alt: "Groom's family",
      category: "groom",
      title: "Patel Family"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
      alt: "Traditional ceremony",
      category: "ceremony",
      title: "Traditional Rituals"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop",
      alt: "Mehendi celebration",
      category: "ceremony",
      title: "Mehendi Night"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      alt: "Grandparents",
      category: "generations",
      title: "Our Grandparents"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=400&h=300&fit=crop",
      alt: "Couple portrait",
      category: "couple",
      title: "Pre-wedding Shoot"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop",
      alt: "Wedding preparations",
      category: "ceremony",
      title: "Wedding Preparations"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1583391265740-65681f8d2b94?w=400&h=300&fit=crop",
      alt: "Extended family",
      category: "generations",
      title: "Three Generations"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Photos' },
    { key: 'couple', label: 'Couple' },
    { key: 'bride', label: "Bride's Side" },
    { key: 'groom', label: "Groom's Side" },
    { key: 'ceremony', label: 'Ceremonies' },
    { key: 'generations', label: 'Generations' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-white to-indian-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-script text-4xl md:text-5xl text-indian-text mb-4">
            {t('gallery')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indian-primary to-indian-secondary mx-auto mb-6"></div>
          <p className="text-lg text-indian-text/80 font-serif max-w-3xl mx-auto">
            Capturing precious moments from our journey together and the beautiful families that raised us.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-sans font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-indian-primary text-white shadow-lg'
                  : 'bg-white text-indian-text hover:bg-indian-primary/10 border border-indian-primary/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => openLightbox(image)}
                layout
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-script text-lg mb-1">{image.title}</h3>
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiHeart} className="w-4 h-4 text-white/80" />
                      <span className="text-white/80 text-sm font-sans">Click to view</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-6 h-6 text-white" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <SafeIcon icon={FiChevronRight} className="w-6 h-6 text-white" />
                </button>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <h3 className="text-white font-script text-xl mb-2">{selectedImage.title}</h3>
                  <p className="text-white/80 font-sans text-sm">{selectedImage.alt}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;