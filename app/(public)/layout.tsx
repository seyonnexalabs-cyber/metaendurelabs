import React from 'react';
import { PublicTopNav } from '../../components/navigation/PublicTopNav';
import { PublicFooter } from '../../components/layout/PublicFooter';
import { ScrollProgressBar } from '../../components/shared/ScrollProgressBar';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* GSAP Scroll-Linked Top Progress Indicator */}
      <ScrollProgressBar />
      {/* Top Announcement Bar */}
      <aside className="bg-emerald-50 dark:bg-[#09140c] border-b border-emerald-500/20 dark:border-[#76C043]/20 py-1.5 px-4 text-center text-xs text-emerald-950 dark:text-[#bdcebe] transition-colors">
        <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-800 dark:text-[#76C043] border border-emerald-500/30 dark:border-[#76C043]/30 px-2.5 py-0.5 rounded-full font-mono text-[11px] uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-[#76C043] animate-ping"></span>
            Outlast Your Yesterday
          </span>
          <span className="font-medium text-emerald-900 dark:text-zinc-200">Endure. Evolve. Excel. &bull; METAENDURE LABS</span>
          <a href="mailto:sujaisivan@metaendurelabs.com" className="text-emerald-700 dark:text-[#76C043] font-bold hover:underline">
            sujaisivan@metaendurelabs.com &rarr;
          </a>
        </div>
      </aside>

      {/* Screen-wide Floating Header */}
      <PublicTopNav />

      {/* Main Page Content with calibrated top spacing for fixed navbar */}
      <main className="flex-grow pt-[100px] sm:pt-[108px]">{children}</main>

      {/* Global Public Footer */}
      <PublicFooter />
    </div>
  );
}
