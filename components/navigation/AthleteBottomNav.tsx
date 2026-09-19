'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Calendar, 
  Dumbbell, 
  CreditCard, 
  UserCheck 
} from 'lucide-react';

export const AthleteBottomNav: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Schedule', href: '/dashboard/schedule', icon: Calendar },
    { label: 'Workouts', href: '/dashboard/workouts', icon: Dumbbell },
    { label: 'Billing', href: '/dashboard/billing', icon: CreditCard },
    { label: 'Zones', href: '/dashboard/profile', icon: UserCheck },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-zinc-200 dark:border-white/10 px-2 py-1.5 shadow-[0_-4px_25px_rgba(0,0,0,0.15)]">
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
                  ? 'text-[#2e7d32] dark:text-[#76C043] font-bold'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <div className={`p-1 rounded-lg transition-all ${
                active ? 'bg-[#76C043]/15 dark:bg-[#76C043]/20 shadow-[0_0_12px_rgba(118,192,67,0.3)]' : ''
              }`}>
                <Icon className={`w-5 h-5 ${active ? 'text-[#2e7d32] dark:text-[#76C043]' : 'text-zinc-500 dark:text-zinc-400'}`} />
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

export default AthleteBottomNav;
