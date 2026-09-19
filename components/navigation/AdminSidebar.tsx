'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ShieldCheck, 
  Users, 
  CalendarClock, 
  BadgeIndianRupee, 
  Trophy, 
  Radio, 
  ArrowLeft,
  Activity,
  LogOut
} from 'lucide-react';

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { label: 'Admin Command', href: '/admin', icon: Activity },
    { label: 'Athlete Roster', href: '/admin/athletes', icon: Users },
    { label: 'Master Scheduler', href: '/admin/schedule', icon: CalendarClock },
    { label: 'Finances & Gateways', href: '/admin/finances', icon: BadgeIndianRupee },
    { label: 'HYROX Leaderboards', href: '/admin/benchmarks', icon: Trophy },
    { label: 'Broadcasts & Alerts', href: '/admin/broadcast', icon: Radio },
  ];

  return (
    <aside className="hidden md:flex w-64 bg-zinc-50 dark:bg-[#000000] border-r border-zinc-200 dark:border-blue-500/20 h-screen fixed top-0 left-0 flex-col justify-between p-5 z-40">
      <div>
        {/* Brand: Logo Left and Text Right */}
        <Link href="/admin" className="flex items-center pb-6 border-b border-zinc-200 dark:border-white/10 mb-6">
          <img
            src="/assets/images/metaendure-logo-horizontal.png"
            alt="METAENDURE LABS"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Live Lab Status - Admin Blue Theme */}
        <div className="bg-white dark:bg-[#0a111a] border border-blue-200 dark:border-blue-500/30 rounded-xl p-3 mb-6 shadow-sm">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-blue-700 dark:text-blue-300 font-heading font-semibold">HYROX Command Center</span>
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          </div>
          <div className="font-mono font-bold text-zinc-900 dark:text-white text-xs">Wave 04 Active &bull; 87% Occupied</div>
          <div className="text-[10px] text-blue-600 dark:text-blue-400 font-mono mt-1">Lead: Coach Sujai Sivan</div>
        </div>

        {/* Navigation Links with Blue Theme */}
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
                    ? 'bg-blue-600 text-white shadow-[0_2px_14px_rgba(37,99,235,0.4)] font-bold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50/70 dark:hover:bg-blue-950/40'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer controls */}
      <div className="pt-4 border-t border-zinc-200 dark:border-white/10 flex flex-col gap-2">
        <Link
          href="/dashboard"
          className="flex items-center justify-between text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-white transition-all py-1.5 px-2 font-mono"
        >
          <span>Switch to Athlete View</span>
          <ArrowLeft className="w-3.5 h-3.5" />
        </Link>
        <Link
          href="/auth"
          className="flex items-center justify-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 transition-all py-1.5 px-2 rounded-lg hover:bg-red-500/10 font-medium"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
