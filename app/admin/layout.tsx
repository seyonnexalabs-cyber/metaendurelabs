'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import AdminSidebar from '@/components/navigation/AdminSidebar';
import AdminBottomNav from '@/components/navigation/AdminBottomNav';
import ThemeToggle from '@/components/navigation/ThemeToggle';

import { getSession } from '@/lib/authSession';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [adminName, setAdminName] = useState<string>('Coach Sujai S');

  useEffect(() => {
    try {
      const session = getSession();
      if (session?.role === 'admin') {
        if (session.name) setAdminName(session.name);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
        router.replace('/auth?redirect=' + encodeURIComponent(pathname));
      }
    } catch {
      setIsAuthorized(false);
      router.replace('/auth');
    } finally {
      setChecked(true);
    }
  }, [pathname, router]);

  // While checking, render a tiny blank screen to prevent any flicker
  if (!checked) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#000000] flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // If not authorized after check, render sign in prompt
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#000000] flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-3 max-w-sm">
          <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto font-mono font-bold">
            🔒
          </div>
          <h2 className="text-base font-heading font-black text-zinc-900 dark:text-white">Admin Authentication Required</h2>
          <p className="text-xs text-zinc-500">Please sign in with coach credentials to access the command center.</p>
          <a
            href="/auth?redirect=/admin/schedule"
            className="inline-block mt-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all"
          >
            Sign In with Coach Account &rarr;
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-zinc-900 dark:text-white flex">
      {/* Fixed Left Navigation Sidebar for Superadmin on Desktop */}
      <AdminSidebar />

      {/* Main Command Center offset by 64 (16rem) on desktop */}
      <main className="flex-1 md:pl-64 min-h-screen flex flex-col">
        {/* Top Command Bar */}
        <header className="h-16 glass-header px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30">
              COMMAND
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate max-w-[180px] sm:max-w-none">
              Arena #01 (Chennai Central)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right text-xs">
              <div className="font-bold text-zinc-900 dark:text-white text-xs">{adminName}</div>
              <div className="text-[10px] text-blue-600 dark:text-blue-400 font-mono hidden sm:block">Status: Authenticated</div>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Dynamic Admin Body with mobile bottom padding */}
        <div className="p-3 sm:p-4 md:p-5 pb-20 md:pb-6 flex-1">
          {children}
        </div>

        {/* Mobile Persistent Bottom Nav */}
        <AdminBottomNav />
      </main>
    </div>
  );
}
