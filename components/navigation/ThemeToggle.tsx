'use client';

import React from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle Dark / Light Theme"
      className={`p-2 rounded-xl border border-zinc-300 dark:border-white/10 hover:border-[#76C043]/40 text-zinc-700 dark:text-[#bdcebe] hover:text-[#76C043] transition-all bg-zinc-100 hover:bg-zinc-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] flex items-center justify-center shadow-sm ${className}`}
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-zinc-800" />
      ) : (
        <Sun className="w-4 h-4 text-[#76C043]" />
      )}
    </button>
  );
};

export default ThemeToggle;
