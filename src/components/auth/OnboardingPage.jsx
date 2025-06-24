import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { OnBoarding } from '@questlabs/react-sdk';
import questConfig from '../../config/questConfig';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTarget, FiUsers, FiTrendingUp, FiCheckCircle } = FiIcons;

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedToken = localStorage.getItem('token');
    
    if (!storedUserId || !storedToken) {
      navigate('/login');
      return;
    }
    
    setUserId(storedUserId);
    setToken(storedToken);
  }, [navigate]);

  const getAnswers = () => {
    // Navigate to main app after onboarding completion
    navigate('/');
  };

  if (!userId || !token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Visual/Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-500 via-blue-600 to-purple-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <motion.div 
          className="absolute top-16 right-16 w-40 h-40 bg-white/10 rounded-full blur-xl"
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
          className="absolute bottom-16 left-16 w-56 h-56 bg-purple-400/20 rounded-full blur-xl"
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

        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <SafeIcon icon={FiTarget} className="w-8 h-8 text-gray-900" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Get You
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Started!
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                We're setting up your personalized experience. This will only take a few minutes and will help us tailor the platform to your specific needs.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Tell us about your goals</h3>
                  <p className="text-white/70 text-sm">Help us understand what you want to achieve</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Customize your experience</h3>
                  <p className="text-white/70 text-sm">Set up your preferences and workflow</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">You're all set!</h3>
                  <p className="text-white/70 text-sm">Start exploring your personalized dashboard</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-white font-bold mb-4">What you'll get:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiUsers} className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/90 text-sm">Personalized dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiTrendingUp} className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/90 text-sm">Tailored recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiTarget} className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/90 text-sm">Goal-focused features</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Section - Onboarding Component */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-white">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto w-full"
        >
          {/* Mobile Header */}
          <div className="lg:hidden mb-8 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's Get Started!</h2>
            <p className="text-gray-600">We're setting things up for you.</p>
          </div>

          {/* Quest Onboarding Component */}
          <div style={{ width: '400px', maxWidth: '100%' }}>
            <OnBoarding
              userId={userId}
              token={token}
              questId={questConfig.QUEST_ONBOARDING_QUESTID}
              answer={answers}
              setAnswer={setAnswers}
              getAnswers={getAnswers}
              accent={questConfig.PRIMARY_COLOR}
              singleChoose="modal1"
              multiChoice="modal2"
            >
              <OnBoarding.Header />
              <OnBoarding.Content />
              <OnBoarding.Footer />
            </OnBoarding>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OnboardingPage;