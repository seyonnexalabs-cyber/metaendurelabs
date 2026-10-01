import React from 'react';
import type { Metadata } from 'next';
import { Calendar as CalendarIcon } from 'lucide-react';
import { ScheduleClient } from '@/components/schedule/ScheduleClient';

export const metadata: Metadata = {
  title: 'Training Schedule & Cohort Enrollment | MetaEndure Labs',
  description: 'Book diagnostic lab assessments, HYROX arena waves, or enroll into 12-week and 16-week endurance coaching cohorts.',
  openGraph: {
    title: 'Training Schedule & Cohort Enrollment | MetaEndure Labs',
    description: 'Book diagnostic lab assessments, HYROX waves, and multi-week courses.',
    url: 'https://www.metaendurelabs.com/schedule',
  },
};

export default function SchedulePage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header (Server Rendered HTML for Search Engines) */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <CalendarIcon className="w-3.5 h-3.5" />
            Live Training Scheduler &amp; Cohort Enrollment
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            BOOK A <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">SESSION OR COURSE</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Reserve single lab assessments &amp; HYROX waves, or enroll into multi-week structured training courses.
          </p>
        </div>

        {/* Interactive Client Booking & Tab Component */}
        <ScheduleClient />
      </div>
    </div>
  );
}
