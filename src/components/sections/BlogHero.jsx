import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiSearch, FiTrendingUp, FiBookOpen, FiUsers } = FiIcons;

const BlogHero = () => {
  const categories = ['All', 'Technology', 'Business', 'Design', 'Marketing', 'Growth'];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Insights, tips, and stories to help you grow your business and stay ahead of the curve
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <SafeIcon icon={FiBookOpen} className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">150+</span>
              </div>
              <p className="text-gray-600 text-sm">Articles</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <SafeIcon icon={FiUsers} className="w-6 h-6 text-purple-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">50K+</span>
              </div>
              <p className="text-gray-600 text-sm">Readers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">25+</span>
              </div>
              <p className="text-gray-600 text-sm">Authors</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <SafeIcon icon={FiBookOpen} className="w-6 h-6 text-orange-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Weekly</span>
              </div>
              <p className="text-gray-600 text-sm">Updates</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;