import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiArrowRight, FiMail } = FiIcons;

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-60 h-60 bg-purple-400/20 rounded-full blur-xl"
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of companies already using our platform to accelerate their growth and success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 shadow-2xl hover:shadow-white/25 transition-all duration-300"
            >
              <span>Start Free Trial</span>
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
              <SafeIcon icon={FiMail} className="w-5 h-5" />
              <span>Contact Sales</span>
            </motion.button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">14-day</span>
              <span>free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">No</span>
              <span>credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">24/7</span>
              <span>support included</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;