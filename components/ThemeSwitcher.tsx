import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon, SwatchIcon } from './icons';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { name: 'Light', value: 'light', icon: <SunIcon className="w-5 h-5" /> },
    { name: 'Dark', value: 'dark', icon: <MoonIcon className="w-5 h-5" /> },
    { name: 'Gray', value: 'mild-gray', icon: <SwatchIcon className="w-5 h-5" /> },
  ] as const;

  const activeTheme = themes.find((t) => t.value === theme);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="p-2 rounded-full text-text-primary border border-card-border/50 hover:border-accent hover:bg-accent/10 transition-all duration-300"
        aria-label={`Current theme: ${theme}. Click to change theme.`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {activeTheme?.icon}
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-36 bg-card-background border border-card-border rounded-lg shadow-lg p-2 z-50"
        >
          <ul className="space-y-1">
            {themes.map((t) => (
              <li key={t.value}>
                <button
                  onClick={() => {
                    setTheme(t.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    theme === t.value
                      ? 'bg-accent text-white'
                      : 'text-card-text-primary hover:bg-accent/10'
                  }`}
                  aria-pressed={theme === t.value}
                >
                  {t.icon}
                  <span>{t.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
