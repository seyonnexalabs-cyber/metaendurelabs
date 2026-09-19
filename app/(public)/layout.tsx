import React from 'react';
import { PublicTopNav } from '../../components/navigation/PublicTopNav';
import { PublicFooter } from '../../components/layout/PublicFooter';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Announcement Bar */}
      <aside className="bg-gradient-to-r from-[#09140c] via-[#112516] to-[#09140c] border-b border-[#76C043]/20 py-1.5 px-4 text-center text-xs text-[#bdcebe]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-[#76C043]/15 text-[#76C043] border border-[#76C043]/30 px-2 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#76C043] animate-ping"></span>
            2026 Season Open
          </span>
          <span>HYROX Simulation Lab &amp; Triathlon Cohort Slots Open</span>
          <a href="/schedule" className="text-[#76C043] font-bold hover:underline">
            Book Assessment &rarr;
          </a>
        </div>
      </aside>

      {/* Screen-wide Floating Pill Header */}
      <PublicTopNav />

      {/* Main Page Content */}
      <main className="flex-grow">{children}</main>

      {/* Global Public Footer */}
      <PublicFooter />
    </div>
  );
}
