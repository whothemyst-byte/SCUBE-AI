import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons';
import { ToggleTheme } from './ui/toggle-theme';

const Header: React.FC = () => {
  const navItems: { name: string; path: string }[] = [
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className="relative z-20 container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-text-primary">
          <LogoIcon className="h-8 w-8" />
          <span>SCUBE</span>
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="text-text-secondary hover:text-text-primary transition-colors duration-300">
                {item.name}
              </Link>
            ))}
          </nav>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;