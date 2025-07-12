import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiMapPin, FiUsers, FiMusic, FiHeart } = FiIcons;

const Timeline = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const timelineEvents = [
    {
      date: "March 13, 2025",
      day: "Day 1",
      events: [
        {
          time: "4:00 PM",
          title: "Mehendi Ceremony",
          location: "Sharma Family Home",
          description: "Intimate henna ceremony with close family and friends",
          icon: FiHeart,
          color: "orange"
        },
        {
          time: "7:00 PM",
          title: "Mehendi Dinner",
          location: "Garden Terrace",
          description: "Traditional dinner with folk music and storytelling",
          icon: FiUsers,
          color: "orange"
        }
      ]
    },
    {
      date: "March 14, 2025",
      day: "Day 2",
      events: [
        {
          time: "6:00 PM",
          title: "Sangeet Night",
          location: "Grand Ballroom, Hotel Majestic",
          description: "Musical evening with dance performances by both families",
          icon: FiMusic,
          color: "purple"
        },
        {
          time: "9:00 PM",
          title: "Sangeet Dinner",
          location: "Hotel Majestic",
          description: "Festive dinner with live music and dancing",
          icon: FiUsers,
          color: "purple"
        }
      ]
    },
    {
      date: "March 15, 2025",
      day: "Day 3 - Wedding Day",
      events: [
        {
          time: "8:00 AM",
          title: "Haldi Ceremony",
          location: "Both Family Homes",
          description: "Turmeric ceremony for bride and groom separately",
          icon: FiHeart,
          color: "yellow"
        },
        {
          time: "6:00 PM",
          title: "Baraat Arrival",
          location: "The Grand Palace",
          description: "Groom's procession with horse and band",
          icon: FiMusic,
          color: "red"
        },
        {
          time: "7:00 PM",
          title: "Wedding Ceremony",
          location: "Main Hall, The Grand Palace",
          description: "Sacred marriage ceremony with traditional rituals",
          icon: FiHeart,
          color: "red"
        },
        {
          time: "10:00 PM",
          title: "Wedding Dinner",
          location: "The Grand Palace",
          description: "Celebration dinner with family and friends",
          icon: FiUsers,
          color: "red"
        }
      ]
    },
    {
      date: "March 16, 2025",
      day: "Day 4",
      events: [
        {
          time: "7:00 PM",
          title: "Reception",
          location: "Crystal Ballroom, Hotel Regency",
          description: "Grand reception for extended family and friends",
          icon: FiUsers,
          color: "blue"
        },
        {
          time: "9:00 PM",
          title: "Reception Dinner",
          location: "Hotel Regency",
          description: "Elegant dinner with speeches and entertainment",
          icon: FiMusic,
          color: "blue"
        }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      orange: "bg-orange-500 text-white",
      purple: "bg-purple-500 text-white",
      yellow: "bg-yellow-500 text-white",
      red: "bg-red-500 text-white",
      blue: "bg-blue-500 text-white"
    };
    return colors[color] || "bg-indian-primary text-white";
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-indian-background to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-script text-4xl md:text-5xl text-indian-text mb-4">
            {t('timeline')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indian-primary to-indian-secondary mx-auto mb-6"></div>
          <p className="text-lg text-indian-text/80 font-serif max-w-3xl mx-auto">
            Follow our four-day celebration journey filled with love, tradition, and joy.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              className="mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Day Header */}
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-indian-primary to-indian-secondary text-white px-6 py-3 rounded-full">
                  <span className="font-sans font-bold">{day.day}</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-script text-2xl text-indian-text">{day.date}</h3>
                </div>
              </div>

              {/* Events */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indian-primary/30"></div>

                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    className="relative flex items-start mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline Dot */}
                    <div className={`w-16 h-16 rounded-full ${getColorClasses(event.color)} flex items-center justify-center shadow-lg z-10`}>
                      <SafeIcon icon={event.icon} className="w-8 h-8" />
                    </div>

                    {/* Event Content */}
                    <div className="ml-6 flex-1">
                      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-script text-xl text-indian-text">{event.title}</h4>
                          <div className="flex items-center space-x-2 text-indian-primary">
                            <SafeIcon icon={FiClock} className="w-4 h-4" />
                            <span className="font-sans font-semibold">{event.time}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 mb-3">
                          <SafeIcon icon={FiMapPin} className="w-4 h-4 text-indian-secondary" />
                          <span className="font-sans text-indian-text/80">{event.location}</span>
                        </div>

                        <p className="text-indian-text/70 font-serif">{event.description}</p>

                        {/* Decorative Element */}
                        <div className="mt-4 flex justify-end">
                          <div className="w-8 h-1 bg-gradient-to-r from-indian-primary to-indian-secondary rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notes */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-script text-3xl text-indian-text mb-6 text-center">
            Important Notes
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans font-semibold text-indian-text mb-4">
                Dress Code:
              </h4>
              <ul className="space-y-2 text-indian-text/80">
                <li>• Mehendi: Bright colors (yellows, oranges)</li>
                <li>• Sangeet: Traditional or fusion wear</li>
                <li>• Haldi: Old clothes (will get stained)</li>
                <li>• Wedding: Traditional Indian attire</li>
                <li>• Reception: Formal/semi-formal</li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-indian-text mb-4">
                What to Expect:
              </h4>
              <ul className="space-y-2 text-indian-text/80">
                <li>• Traditional Indian music and dance</li>
                <li>• Authentic Indian cuisine</li>
                <li>• Cultural rituals and ceremonies</li>
                <li>• Photography and videography</li>
                <li>• Gifts and blessing ceremonies</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;