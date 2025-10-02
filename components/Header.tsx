import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoIcon } from './icons';
import { ToggleTheme } from './ui/toggle-theme';
import { cn } from '../lib/utils';

const Header: React.FC = () => {
  const navItems = [
    { name: 'Home', path: '/' },
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
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "transition-colors duration-300",
                    isActive ? "font-bold text-accent" : "text-text-secondary hover:text-text-primary"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;