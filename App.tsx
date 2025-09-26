import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import CareersPage from './pages/CareersPage';

const App: React.FC = () => {
  return (
    <div className="bg-dark-charcoal text-gray-200 font-sans min-h-screen flex flex-col">
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#8A2BE2_1px,transparent_1px)] [background-size:32px_32px]"
        style={{ maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)'}}
      ></div>

      <Header />
      <main className="relative z-10 flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;