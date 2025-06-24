import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCalendar, FiClock, FiUser, FiArrowRight, FiTrendingUp, FiEye } = FiIcons;

const BlogContent = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredPost = {
    id: 1,
    title: "The Future of Business: AI and Automation Trends for 2024",
    excerpt: "Discover how artificial intelligence and automation are reshaping industries and what it means for your business strategy.",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    category: "Technology",
    featured: true,
    views: "12.5K"
  };

  const blogPosts = [
    {
      id: 2,
      title: "10 Growth Hacking Strategies That Actually Work",
      excerpt: "Learn proven growth hacking techniques that have helped startups scale from zero to millions of users.",
      author: "Michael Chen",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Growth",
      views: "8.2K"
    },
    {
      id: 3,
      title: "Design Systems: Building Consistent User Experiences",
      excerpt: "How to create and maintain design systems that scale with your product and team.",
      author: "Emily Rodriguez",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop",
      category: "Design",
      views: "6.7K"
    },
    {
      id: 4,
      title: "Marketing Automation: Complete Guide for Beginners",
      excerpt: "Everything you need to know about marketing automation to streamline your campaigns and boost ROI.",
      author: "David Park",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
      category: "Marketing",
      views: "9.3K"
    },
    {
      id: 5,
      title: "Remote Team Management: Best Practices for 2024",
      excerpt: "Essential strategies for managing distributed teams and maintaining productivity in a remote-first world.",
      author: "Lisa Wang",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
      category: "Business",
      views: "5.8K"
    },
    {
      id: 6,
      title: "Customer Success Metrics That Matter",
      excerpt: "Key performance indicators to track customer satisfaction and reduce churn in your SaaS business.",
      author: "Alex Thompson",
      date: "Dec 3, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Business",
      views: "7.1K"
    },
    {
      id: 7,
      title: "The Psychology of User Interface Design",
      excerpt: "Understanding how users interact with digital interfaces and designing for better user experiences.",
      author: "Nina Patel",
      date: "Nov 30, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
      category: "Design",
      views: "4.9K"
    }
  ];

  const categories = ['All', 'Technology', 'Business', 'Design', 'Marketing', 'Growth'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-orange-500 font-semibold">Featured Article</span>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <SafeIcon icon={FiEye} className="w-4 h-4 mr-1" />
                    <span>{featuredPost.views}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <SafeIcon icon={FiUser} className="w-4 h-4 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-blue-600 text-white px-6 py-2 rounded-full font-medium flex items-center space-x-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <span>Read More</span>
                    <SafeIcon 
                      icon={FiArrowRight} 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm text-gray-600 px-2 py-1 rounded-full text-xs">
                    <SafeIcon icon={FiEye} className="w-3 h-3 mr-1" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <SafeIcon icon={FiUser} className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                  >
                    <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 mx-auto"
          >
            <span>Load More Articles</span>
            <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogContent;