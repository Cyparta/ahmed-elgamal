import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Workflow,
  Settings,
  Palette,
  Brain,
  Users,
  MessageSquare,
  Target
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const technicalSkills = [
    {
      category: t('skills.technical1'),
      icon: FileText,
      skills: ['BRD', 'SRS', 'FRD', t('skills.userStories')]
    },
    {
      category: t('skills.technical2'),
      icon: Workflow,
      skills: [t('skills.uml'), t('skills.flowcharts'), t('skills.wireframes')]
    },
    {
      category: t('skills.technical3'),
      icon: Settings,
      skills: ['Jira', 'Trello', 'TFS', 'ClickUp']
    },
    {
      category: t('skills.technical4'),
      icon: Palette,
      skills: ['Figma', 'Visily']
    }
  ];

  const softSkills = [
    { name: t('skills.soft1'), icon: Target },
    { name: t('skills.soft2'), icon: Brain },
    { name: t('skills.soft3'), icon: Users },
    { name: t('skills.soft4'), icon: MessageSquare },
    { name: t('skills.soft5'), icon: Settings }
  ];

  const proficiencyData = [
    { skill: t('skills.proficiency1'), level: 95 },
    { skill: t('skills.proficiency2'), level: 90 },
    { skill: t('skills.proficiency3'), level: 88 },
    { skill: t('skills.proficiency4'), level: 92 },
    { skill: t('skills.proficiency5'), level: 96 },
    { skill: t('skills.proficiency6'), level: 89 }
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
            {t('skills.title').split(' ').map((word, index) => (
              <span
                key={index}
                className={index === 2 ? 'text-gold-500' : ''}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            {t('skills.technical')}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSkills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-gold-200 transition-colors duration-300">
                  <category.icon className="text-gold-500" size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {category.category}
                </h3>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + index * 0.1 + skillIndex * 0.05
                      }}
                      className="px-3 py-2 bg-gray-50 rounded-lg text-center text-gray-700 font-medium hover:bg-gold-50 hover:text-gold-700 transition-colors duration-200"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            {t('skills.soft')}
          </motion.h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-gold-200 transition-colors duration-300">
                  <skill.icon className="text-gold-500" size={28} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gold-600 transition-colors duration-300">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Progress Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('skills.proficiency')}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {proficiencyData.map((item, index) => (
              <div key={item.skill} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">{item.skill}</span>
                  <span className="text-gold-600 font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: 1.2 + index * 0.1 }}
                    className="bg-gradient-to-r from-gold-400 to-gold-600 h-3 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
