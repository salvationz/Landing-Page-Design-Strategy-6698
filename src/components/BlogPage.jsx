import React from 'react';
import Header from './sections/Header';
import BlogHero from './sections/BlogHero';
import BlogContent from './sections/BlogContent';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BlogHero />
      <BlogContent />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogPage;