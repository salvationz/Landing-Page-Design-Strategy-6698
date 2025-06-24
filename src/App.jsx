import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LoginPage from './components/auth/LoginPage';
import OnboardingPage from './components/auth/OnboardingPage';
import MainApp from './components/MainApp';
import BlogPage from './components/BlogPage';
import questConfig from './config/questConfig';

function App() {
  return (
    <QuestProvider
      apiKey={questConfig.APIKEY}
      entityId={questConfig.ENTITYID}
      apiType="PRODUCTION"
    >
      <AuthProvider>
        <Router>
          <div className="min-h-screen">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route 
                path="/onboarding" 
                element={
                  <ProtectedRoute>
                    <OnboardingPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/" 
                element={
                  <ProtectedRoute>
                    <MainApp />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/blog" 
                element={
                  <ProtectedRoute>
                    <BlogPage />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </QuestProvider>
  );
}

export default App;