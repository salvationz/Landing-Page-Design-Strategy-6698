import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiLogOut } = FiIcons;

const MainApp = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* User Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <SafeIcon icon={FiUser} className="w-5 h-5" />
            <span className="text-sm">
              Welcome back! You're now logged in and ready to explore.
            </span>
          </div>
          <button
            onClick={logout}
            className="flex items-center space-x-2 text-sm hover:text-gray-200 transition-colors duration-200"
          >
            <SafeIcon icon={FiLogOut} className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </motion.div>

      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default MainApp;