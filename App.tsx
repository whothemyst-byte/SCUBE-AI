

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
// import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import BlogPostDetailPage from './pages/BlogPostDetailPage';
import { Toaster } from './components/ui/toaster';
import Preloader from './components/ui/preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="bg-background text-text-primary font-sans min-h-screen flex flex-col">
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(var(--color-radial-gradient)_1px,transparent_1px)] [background-size:32px_32px]"
        style={{ maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)'}}
      ></div>

      <main className="relative z-10 flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostDetailPage />} />
          {/* <Route path="/pricing" element={<PricingPage />} /> */}
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;