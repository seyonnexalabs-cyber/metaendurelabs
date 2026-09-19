'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Activity, 
  Users, 
  CalendarClock, 
  BadgeIndianRupee, 
  Trophy 
} from 'lucide-react';

export const AdminBottomNav: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Command', href: '/admin', icon: Activity },
    { label: 'Roster', href: '/admin/athletes', icon: Users },
    { label: 'Schedule', href: '/admin/schedule', icon: CalendarClock },
    { label: 'Finances', href: '/admin/finances', icon: BadgeIndianRupee },
    { label: 'HYROX', href: '/admin/benchmarks', icon: Trophy },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-zinc-200 dark:border-blue-500/20 px-2 py-1.5 shadow-[0_-4px_25px_rgba(0,0,0,0.15)]">
      <nav className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1.5 px-2.5 rounded-xl transition-all duration-200 min-w-[56px] ${
                active
                  ? 'text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <div className={`p-1 rounded-lg transition-all ${
                active ? 'bg-blue-500/15 dark:bg-blue-500/20 shadow-[0_0_12px_rgba(37,99,235,0.3)]' : ''
              }`}>
                <Icon className={`w-5 h-5 ${active ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-500 dark:text-zinc-400'}`} />
              </div>
              <span className="text-[11px] tracking-tight mt-0.5">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default AdminBottomNav;
