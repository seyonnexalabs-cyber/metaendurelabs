'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Calendar, 
  Dumbbell, 
  CreditCard, 
  MessageSquare, 
  UserCheck, 
  LogOut,
  Flame,
  ArrowUpRight
} from 'lucide-react';

export const AthleteSidebar: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Training Schedule', href: '/dashboard/schedule', icon: Calendar },
    { label: 'Workouts & HYROX', href: '/dashboard/workouts', icon: Dumbbell },
    { label: 'Payments & Billing', href: '/dashboard/billing', icon: CreditCard },
    { label: 'Coach Messages', href: '/dashboard/messages', icon: MessageSquare },
    { label: 'Biometrics & Zones', href: '/dashboard/profile', icon: UserCheck },
  ];

  return (
    <aside className="hidden md:flex w-64 bg-zinc-50 dark:bg-[#000000] border-r border-zinc-200 dark:border-white/10 h-screen fixed top-0 left-0 flex-col justify-between p-5 z-40">
      <div>
        {/* Brand: Logo Left and Text Right */}
        <Link href="/" className="flex items-center pb-6 border-b border-zinc-200 dark:border-white/10 mb-6">
          <img
            src="/assets/images/metaendure-logo-horizontal.png"
            alt="METAENDURE LABS"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Athlete Micro Card */}
        <div className="bg-white dark:bg-[#0d1510] border border-zinc-200 dark:border-[#76C043]/20 rounded-xl p-3 mb-6 shadow-sm">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-zinc-600 dark:text-[#bdcebe] font-heading font-semibold">Active Athlete</span>
            <span className="flex items-center gap-1 text-[#76C043] font-mono text-[10px]">
              <Flame className="w-3 h-3 text-[#76C043]" /> Zone 2 Block
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-zinc-200 dark:border-[#76C043]/40 shrink-0">
              <img
                src="/assets/images/default-avatar.svg"
                alt="Alex Mercer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-heading font-bold text-zinc-900 dark:text-white text-sm">Alex Mercer</div>
              <div className="text-[11px] text-zinc-500 dark:text-[#788e7a] font-mono">IRONMAN 70.3 &bull; Wk 6</div>
            </div>
          </div>
        </div>

        {/* Navigation Links with Public Page Brand Green */}
        <nav className="flex flex-col gap-1.5">
          {links.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-heading font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-[#76C043] text-black shadow-[0_2px_14px_rgba(118,192,67,0.4)] font-bold'
                    : 'text-zinc-600 dark:text-[#bdcebe] hover:text-black dark:hover:text-white hover:bg-zinc-200/70 dark:hover:bg-white/[0.05]'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-black' : 'text-[#76C043]'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer controls */}
      <div className="pt-4 border-t border-zinc-200 dark:border-white/10 flex flex-col gap-2">
        <Link
          href="/auth"
          className="flex items-center justify-between text-xs text-zinc-600 dark:text-[#bdcebe] hover:text-red-600 dark:hover:text-red-400 transition-all py-2 px-2.5 rounded-lg hover:bg-red-500/10"
        >
          <div className="flex items-center gap-2 font-medium">
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </div>
        </Link>
        <Link
          href="/admin"
          className="flex items-center justify-between text-xs text-[#788e7a] hover:text-[#76C043] transition-all py-1.5 px-2 border border-white/5 rounded-lg bg-white/[0.02]"
        >
          <span>Coach Admin Mode</span>
          <span className="font-mono text-[9px] bg-[#76C043]/20 text-[#76C043] px-1.5 py-0.5 rounded">PRO</span>
        </Link>
      </div>
    </aside>
  );
};

export default AthleteSidebar;
