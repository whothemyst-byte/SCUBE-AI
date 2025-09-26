import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons';

const Header: React.FC = () => {
  const navItems: { name: string; path: string }[] = [];

  return (
    <header className="relative z-20 container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
          <LogoIcon className="h-8 w-8 text-violet-purple" />
          <span>SCUBE</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="text-gray-300 hover:text-white transition-colors duration-300">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;