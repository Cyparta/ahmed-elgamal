import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Building, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Achievements = () => {
  const { t } = useLanguage();

  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    industries: 0,
    products: 0
  });

  const achievements = [
    {
      icon: Trophy,
      number: 120,
      suffix: '+',
      label: t('achievements.projectsLabel'),
      description: t('achievements.projectsDesc'),
      color: 'from-gold-400 to-gold-600'
    },
    {
      icon: Users,
      number: 80,
      suffix: '+',
      label: t('achievements.clientsLabel'),
      description: t('achievements.clientsDesc'),
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Building,
      number: 30,
      suffix: '',
      label: t('achievements.industriesLabel'),
      description: t('achievements.industriesDesc'),
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Rocket,
      number: 40,
      suffix: '+',
      label: t('achievements.productsLabel'),
      description: t('achievements.productsDesc'),
      color: 'from-purple-400 to-purple-600'
    }
  ];

  useEffect(() => {
    const animateCount = (target: number, key: keyof typeof counts) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 20);
    };

    const timer = setTimeout(() => {
      animateCount(120, 'projects');
      animateCount(80, 'clients');
      animateCount(30, 'industries');
      animateCount(40, 'products');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('achievements.title')} <span className="text-gold-500">{t('achievements.titleGold')}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('achievements.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="text-white" size={36} />
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
              >
                {index === 0 ? counts.projects : 
                 index === 1 ? counts.clients : 
                 index === 2 ? counts.industries : 
                 counts.products}
                <span className="text-gold-500">{achievement.suffix}</span>
              </motion.div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {achievement.label}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievement Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('achievements.timelineTitle')}
          </h2>
          
          <div className="space-y-8">
            {[
              {
                year: '2024',
                title: t('achievements.timeline.2024.title'),
                description: t('achievements.timeline.2024.desc')
              },
              {
                year: '2023',
                title: t('achievements.timeline.2023.title'),
                description: t('achievements.timeline.2023.desc')
              },
              {
                year: '2022',
                title: t('achievements.timeline.2022.title'),
                description: t('achievements.timeline.2022.desc')
              },
              {
                year: '2021',
                title: t('achievements.timeline.2021.title'),
                description: t('achievements.timeline.2021.desc')
              }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gold-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-gold-600 font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t('achievements.recognitionTitle')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: '50%',
                description: t('achievements.recognition.0')
              },
              {
                metric: '95%',
                description: t('achievements.recognition.1')
              },
              {
                metric: '30%',
                description: t('achievements.recognition.2')
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.metric}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-gradient-to-r from-gold-50 to-gold-100 p-6 rounded-lg border border-gold-200"
              >
                <div className="text-3xl font-bold text-gold-600 mb-2">
                  {stat.metric}
                </div>
                <p className="text-gray-700 font-medium">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;