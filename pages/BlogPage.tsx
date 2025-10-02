import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import { blogPosts } from '../data/blogPosts';
import { BlogPostCard } from '../components/BlogPostCard';
import { AnimatedGroup } from '../components/ui/animated-group';
import { Button } from '../components/ui/button';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))];

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>SCUBE AI Blog | Insights on AI & Business Automation</title>
        <meta name="description" content="Explore the latest insights, guides, and updates on the future of business automation with autonomous AI agents. Stay ahead with SCUBE AI." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content="SCUBE AI Blog | Insights on AI & Business Automation" />
        <meta property="og:description" content="Explore the latest insights, guides, and updates on the future of business automation with autonomous AI agents. Stay ahead with SCUBE AI." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1200&auto=format&fit=crop" />
        <meta property="og:site_name" content="SCUBE AI Blog" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={window.location.href} />
        <meta name="twitter:title" content="SCUBE AI Blog | Insights on AI & Business Automation" />
        <meta name="twitter:description" content="Explore the latest insights, guides, and updates on the future of business automation with autonomous AI agents. Stay ahead with SCUBE AI." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1200&auto=format&fit=crop" />
      </Helmet>
      <Header />
      <div className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <AnimatedGroup preset="slide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-4">
              The SCUBE AI Blog
            </h1>
            <p className="text-lg text-text-secondary">
              Insights, guides, and updates on the future of business automation with AI agents.
            </p>
          </div>
        </AnimatedGroup>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onPress={() => setSelectedCategory(category)}
              className="rounded-full transition-colors duration-200"
            >
              {category}
            </Button>
          ))}
        </motion.div>
        
        <motion.div
          key={selectedCategory} // Re-trigger animation on category change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))
          ) : (
            <div className="md:col-span-2 lg:col-span-3 text-center py-16">
              <p className="text-text-secondary">No posts found in this category.</p>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default BlogPage;