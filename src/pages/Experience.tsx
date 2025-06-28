import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const responsibilities = [
    t('experience.resp1'),
    t('experience.resp2'),
    t('experience.resp3'),
    t('experience.resp4'),
    t('experience.resp5'),
  ];

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
            {t('experience.title').split(' ').map((word, index) => (
              <span
                key={index}
                className={index === 1 ? 'text-gold-500' : ''}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl p-8 md:p-12"
          >
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gold-100 rounded-lg flex items-center justify-center mr-4">
                  <Building className="text-gold-500" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {t('experience.company')}
                  </h2>
                  <p className="text-xl text-gold-600 font-semibold">
                    {t('experience.role')}
                  </p>
                </div>
              </div>

              <div className="flex items-center text-gray-600">
                <Calendar className="mr-2" size={20} />
                <span className="font-medium">{t('experience.duration')}</span>
              </div>
            </div>

            {/* Key Contributions */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('experience.contributions')}
              </h3>

              <div className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle
                      className="text-gold-500 mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {responsibility}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 p-6 bg-gold-50 rounded-lg border-l-4 border-gold-500"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {t('experience.impact')}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {t('experience.impact.desc')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
