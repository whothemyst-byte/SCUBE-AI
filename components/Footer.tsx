

import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-text-primary mb-4">
              <LogoIcon className="h-8 w-8" />
              <span>SCUBE</span>
            </Link>
            <p className="text-text-secondary max-w-sm text-sm">
              Empowering businesses with autonomous AI agents.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 justify-self-start md:justify-self-end">
             <div>
                <h3 className="font-semibold text-text-primary mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li><a href="mailto:hello.scube.ai@gmail.com" className="text-text-secondary hover:text-accent text-sm">hello.scube.ai@gmail.com</a></li>
                  <li><p className="text-text-secondary text-sm">+91 95005 94498</p></li>
                </ul>
             </div>
             <div>
                <h3 className="font-semibold text-text-primary mb-4">Blog</h3>
                <ul className="space-y-2">
                    <li><Link to="/blog" className="text-text-secondary hover:text-accent text-sm">Read our articles</Link></li>
                </ul>
             </div>
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