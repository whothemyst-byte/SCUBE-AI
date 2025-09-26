import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-gray-800/50 mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <LogoIcon className="h-8 w-8 text-violet-purple" />
              <span>SCUBE</span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              Empowering businesses with autonomous AI agents to drive growth and efficiency.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2">
               <li>
                  <Link to="/careers" className="text-gray-400 hover:text-violet-purple">Careers</Link>
               </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:hello@scube.ai" className="text-gray-400 hover:text-violet-purple">hello@scube.ai</a></li>
              <li className="text-gray-400">Join our community</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800/50 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SCUBE AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;