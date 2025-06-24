import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiArrowRight, FiPlay, FiStar, FiUsers, FiTrendingUp } = FiIcons;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 mb-8"
        >
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <SafeIcon key={i} icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-white/80 text-sm">Trusted by 10,000+ users</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Transform Your
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Business </span>
          Today
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Unlock unprecedented growth with our cutting-edge platform designed for modern businesses
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 mb-12 text-white/80"
        >
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiUsers} className="w-5 h-5" />
            <span className="text-lg font-semibold">50K+ Users</span>
          </div>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiTrendingUp} className="w-5 h-5" />
            <span className="text-lg font-semibold">300% ROI</span>
          </div>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiStar} className="w-5 h-5" />
            <span className="text-lg font-semibold">4.9/5 Rating</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
          >
            <span>Get Started Free</span>
            <SafeIcon 
              icon={FiArrowRight} 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
            />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <SafeIcon icon={FiPlay} className="w-5 h-5" />
            <span>Watch Demo</span>
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <p className="text-white/60 text-sm mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Google', 'Microsoft', 'Apple', 'Amazon', 'Meta'].map((company) => (
              <div key={company} className="text-white font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;