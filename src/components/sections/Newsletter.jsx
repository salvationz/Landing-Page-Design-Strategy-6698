import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMail, FiArrowRight, FiCheck } = FiIcons;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-48 h-48 bg-purple-400/20 rounded-full blur-xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
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
          <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <SafeIcon icon={FiMail} className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay In The Loop
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Get the latest insights, tips, and industry updates delivered straight to your inbox. 
            Join 10,000+ professionals who trust our newsletter.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-full border-none outline-none text-gray-900 placeholder-gray-500 shadow-lg"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-gray-900 px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 shadow-2xl hover:shadow-white/25 transition-all duration-300"
                >
                  <span>Subscribe</span>
                  <SafeIcon 
                    icon={FiArrowRight} 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  />
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 max-w-md mx-auto mb-8 shadow-2xl"
            >
              <SafeIcon icon={FiCheck} className="w-5 h-5" />
              <span>Successfully Subscribed!</span>
            </motion.div>
          )}

          <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">10K+</span>
              <span>subscribers</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">Weekly</span>
              <span>updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">No</span>
              <span>spam, ever</span>
            </div>
          </div>

          <p className="text-white/60 text-sm mt-8">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;