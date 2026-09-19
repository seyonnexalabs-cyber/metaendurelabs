'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../providers/ThemeProvider';
import { Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';

export const PublicTopNav: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Completely remove top header on /auth page
  if (pathname === '/auth') {
    return null;
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Your Sports', href: '/your-sports' },
    { label: 'We Offer', href: '/we-offer' },
    { label: 'Team & Partners', href: '/team' },
    { label: 'Community', href: '/community' },
    { label: 'Schedule', href: '/schedule' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b backdrop-blur-xl ${
          scrolled
            ? 'h-16 bg-[#08120a]/95 dark:bg-[#08120a]/95 border-[#76C043]/30 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
            : 'h-[72px] bg-[#0c1a10]/85 dark:bg-[#0c1a10]/85 border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
        }`}
      >
        <div className="w-full max-w-[1520px] mx-auto h-full px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#76C043]/40 p-0.5 bg-gradient-to-br from-white/10 to-[#76C043]/30">
              <img
                src="/assets/images/metaendure-crest.png"
                alt="METAENDURE Crest"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold tracking-wider text-zinc-900 dark:text-white text-base md:text-lg leading-tight">
                META<span className="text-[#2e7d32] dark:text-[#76C043]">ENDURE</span>
              </span>
              <span className="font-mono text-[9px] text-zinc-500 dark:text-[#788e7a] tracking-[0.2em] uppercase">
                -Labs-
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/90 dark:bg-white/[0.04] p-1.5 rounded-full border border-zinc-200 dark:border-white/[0.06]">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold transition-all duration-200 ${
                    active
                      ? 'bg-[#76C043] text-black shadow-[0_2px_12px_rgba(118,192,67,0.4)]'
                      : 'text-zinc-600 dark:text-[#bdcebe] hover:text-black dark:hover:text-white hover:bg-zinc-200/70 dark:hover:bg-white/[0.08]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark / Light Theme"
              className="p-2 rounded-full border border-zinc-300 dark:border-white/10 hover:border-[#76C043]/40 text-zinc-700 dark:text-[#bdcebe] hover:text-[#76C043] transition-all bg-zinc-100 dark:bg-white/[0.04]"
            >
              {theme === 'light' ? <Moon className="w-4 h-4 text-zinc-800" /> : <Sun className="w-4 h-4 text-[#76C043]" />}
            </button>

            {/* Single Unified Sign In / Join Action Button */}
            <Link
              href="/auth"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-heading font-bold text-[#070e08] bg-gradient-to-r from-[#76C043] to-[#8ff346] shadow-[0_4px_20px_rgba(118,192,67,0.35)] hover:shadow-[0_6px_25px_rgba(118,192,67,0.55)] transition-all hover:-translate-y-0.5"
            >
              <span>Join / Sign In</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-zinc-800 dark:text-white border border-zinc-200 dark:border-white/10 rounded-full"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/80 backdrop-blur-md flex flex-col justify-between p-6">
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/images/metaendure-crest.png"
                  alt="METAENDURE Crest"
                  className="w-8 h-8 rounded-md"
                />
                <span className="font-heading font-bold text-white text-base">METAENDURE LABS</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white border border-white/10 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-heading font-semibold text-[#bdcebe] hover:text-[#76C043] py-2 border-b border-white/[0.06]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/auth"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-heading font-semibold text-[#76C043] py-2 border-b border-white/[0.06]"
              >
                Join / Sign In &rarr;
              </Link>
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#788e7a] font-mono">
            <span>sujaisivan@metaendurelabs.com</span>
            <button onClick={toggleTheme} className="text-[#76C043]">
              {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
