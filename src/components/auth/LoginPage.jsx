import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { QuestLogin } from '@questlabs/react-sdk';
import { useAuth } from '../../context/AuthContext';
import questConfig from '../../config/questConfig';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiShield, FiUsers, FiTrendingUp, FiStar } = FiIcons;

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = ({ userId, token, newUser }) => {
    login({ userId, token });
    
    if (newUser) {
      navigate('/onboarding');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        
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

        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                <SafeIcon icon={FiShield} className="w-6 h-6 text-gray-900" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome Back to
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  YourBrand
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Join thousands of professionals who trust our platform to transform their business operations and accelerate growth.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiUsers} className="w-5 h-5 text-yellow-400" />
                <span className="text-white/90">50K+ Active Users</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-yellow-400" />
                <span className="text-white/90">300% Average ROI</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-400" />
                <span className="text-white/90">4.9/5 Customer Rating</span>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-white/90 italic mb-4">
                "This platform has completely transformed how we operate. The results speak for themselves."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
                  alt="Sarah Johnson"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-white font-semibold">Sarah Johnson</p>
                  <p className="text-white/70 text-sm">CEO, TechCorp</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-white">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto w-full"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              YourBrand
            </h2>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Sign In
            </h2>
            <p className="text-gray-600">
              Welcome back! Please sign in to your account.
            </p>
          </div>

          {/* Quest Login Component */}
          <div className="mb-6">
            <QuestLogin
              onSubmit={handleLogin}
              email={true}
              google={false}
              accent={questConfig.PRIMARY_COLOR}
            />
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>
              Don't have an account? Sign up to get started with your free trial.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;