import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarClock, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Training Schedule & Cohort Enrollment | MetaEndure Labs',
  description: 'Public schedule bookings are undergoing protocol maintenance and synchronization. Inquire directly for private waves and cohort registration.',
};

export default function SchedulePage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto text-center space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-[#76C043] border border-emerald-500/20">
          <CalendarClock className="w-4 h-4 animate-pulse text-[#2e7d32] dark:text-[#76C043]" />
          <span>Cohort Synchronization &amp; Schedule Revamp</span>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-heading font-black text-zinc-900 dark:text-white tracking-tight">
            TRAINING SCHEDULE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2e7d32] to-emerald-500 dark:from-[#76C043] dark:to-emerald-400">
              COMING SOON
            </span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl mx-auto">
            Live public wave scheduling and automated cohort reservations are launching soon.
          </p>
        </div>

        {/* Info card */}
        <div className="p-6 rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-50/80 dark:bg-white/[0.03] backdrop-blur-md text-left space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#2e7d32] dark:text-[#76C043]">
            <ShieldCheck className="w-4 h-4" />
            Direct Cohort Inquiries Still Active
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Athletes desiring immediate 1-on-1 threshold testing, biomechanics video assessment, or priority cohort reservations can reach out directly to head coach Sujai Sivan.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-heading font-bold text-sm text-white dark:text-black bg-[#2e7d32] dark:bg-[#76C043] hover:bg-[#256628] dark:hover:bg-[#8ff346] shadow-md dark:shadow-[0_0_25px_rgba(118,192,67,0.35)] transition-all hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Inquire for Cohort Slots</span>
          </Link>
          <Link
            href="/we-offer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-heading font-semibold text-sm text-zinc-800 dark:text-white border border-zinc-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5"
          >
            <span>Explore All Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
