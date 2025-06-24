import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiZap, FiShield, FiTrendingUp, FiUsers, FiClock, FiGlobe } = FiIcons;

const features = [
  {
    icon: FiZap,
    title: 'Lightning Fast',
    description: 'Experience blazing fast performance with our optimized infrastructure'
  },
  {
    icon: FiShield,
    title: 'Enterprise Security',
    description: 'Bank-grade security to protect your data and ensure compliance'
  },
  {
    icon: FiTrendingUp,
    title: 'Advanced Analytics',
    description: 'Get deep insights with our powerful analytics and reporting tools'
  },
  {
    icon: FiUsers,
    title: 'Team Collaboration',
    description: 'Seamlessly collaborate with your team in real-time'
  },
  {
    icon: FiClock,
    title: '24/7 Support',
    description: 'Round-the-clock support from our expert team'
  },
  {
    icon: FiGlobe,
    title: 'Global Scale',
    description: 'Scale globally with our worldwide infrastructure'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Modern Teams</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline your workflow and accelerate growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;