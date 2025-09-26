import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-text-primary mb-4">
              <LogoIcon className="h-8 w-8" />
              <span>SCUBE</span>
            </Link>
            <p className="text-text-secondary max-w-sm">
              Empowering businesses with autonomous AI agents to drive growth and efficiency.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:hello.scube.ai@gmail.com" className="text-text-secondary hover:text-accent">hello.scube.ai@gmail.com</a></li>
              <li className="text-text-secondary">Join our community</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} SCUBE AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;