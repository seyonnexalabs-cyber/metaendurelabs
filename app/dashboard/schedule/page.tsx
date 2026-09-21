'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar as CalendarIcon, Clock, Plus, Check, 
  MapPin, User, ChevronLeft, ChevronRight, AlertCircle, CalendarCheck
} from 'lucide-react';
import { SessionCard, TrainingSessionItem } from '@/components/shared/SessionCard';

export default function AthleteSchedulePage() {
  const [sessions, setSessions] = useState<TrainingSessionItem[]>([
    {
      id: 'sess-1',
      title: 'Graded Treadmill Lactate Re-Assessment',
      date: 'Tomorrow, Sept 20',
      time: '06:00 AM - 07:15 AM',
      coach: 'Sunil Menon',
      type: 'lab',
      location: 'MetaEndure Labs Metabolic Testing Suite',
      status: 'confirmed'
    },
    {
      id: 'sess-2',
      title: 'Compromised Running Simulation Wave (Group)',
      date: 'Wed, Sept 23',
      time: '06:30 PM - 07:45 PM',
      coach: 'Rashmi',
      type: 'hyrox',
      location: 'Arena Track & Sled Bay',
      status: 'confirmed'
    },
    {
      id: 'sess-3',
      title: 'Lower Extremity Dry Needling & Joint Flush',
      date: 'Sat, Sept 26',
      time: '09:00 AM - 09:45 AM',
      coach: 'Dr Physio Clinical Specialist',
      type: 'physio',
      location: 'Sports Rehab Wing',
      status: 'confirmed'
    }
  ]);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-[#76C043]/30 shadow-md">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1b5e20] dark:text-[#8ff346] bg-[#76C043]/15 px-3 py-1 rounded-full border border-[#76C043]/40 w-fit">
            <CalendarCheck className="w-3.5 h-3.5 text-[#76C043]" />
            TRAINING WAVE RESERVATIONS
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            Upcoming Training Waves &amp; Lab Tests
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#d1ded2] font-medium">
            Manage your booked HYROX simulation heats, physiological lactate assessments, and physio recovery sessions.
          </p>
        </div>

        <Link
          href="/schedule"
          className="px-6 py-3 rounded-xl bg-[#76C043] hover:bg-[#8ff346] text-black font-extrabold text-xs shadow-lg shadow-[#76C043]/20 hover:shadow-[#76C043]/40 transition-all flex items-center justify-center gap-2 self-start sm:self-auto shrink-0"
        >
          <Plus className="w-4 h-4" />
          Book New Session
        </Link>
      </div>

      {/* Booked Sessions List via Reusable SessionCard */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-bold text-lg text-zinc-900 dark:text-white">
            Active Reserved Waves ({sessions.length})
          </h2>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            Attendance check-in opens 15m prior
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sessions.map((sess) => (
            <SessionCard
              key={sess.id}
              session={sess}
              viewMode="athlete"
              onAction={(id, action) => {
                alert(`Session ${id} requested ${action}`);
              }}
            />
          ))}
        </div>
      </div>

      {/* Enrolled Multi-Week Course Modules */}
      <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-heading font-bold text-lg text-zinc-900 dark:text-white">
              Enrolled Multi-Week Courses (1 Active Cohort)
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Periodized training curriculums with weekly progress gates and cohort milestones.
            </p>
          </div>
          <Link
            href="/schedule"
            className="text-xs font-bold text-emerald-600 dark:text-[#8ff346] hover:underline"
          >
            + Enroll in Another Course
          </Link>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-[#76C043]/30 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20">
                  12-WEEK INTENSIVE
                </span>
                <span className="text-xs text-zinc-500">Cohort Oct 5, 2026</span>
              </div>
              <h3 className="font-heading font-black text-xl text-zinc-900 dark:text-white">
                Beginner HYROX Foundation Program
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Lead Mentor: <strong>Sunil Menon</strong> (Head Coach) • 3x/week in Arena &amp; Track
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">Week 1 of 12</span>
              <div className="text-xs text-zinc-500">Benchmark Testing Stage</div>
            </div>
          </div>

          {/* Course Progression Milestones */}
          <div className="grid sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-emerald-500/30">
              <div className="text-[10px] font-mono text-emerald-500 font-bold mb-1">STAGE 1 • WEEKS 1-4</div>
              <div className="font-bold text-zinc-900 dark:text-white">Aerobic Engine &amp; Ergonomics</div>
              <div className="text-[11px] text-zinc-500 mt-1">RowErg &amp; SkiErg mechanics</div>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 opacity-80">
              <div className="text-[10px] font-mono text-zinc-400 font-bold mb-1">STAGE 2 • WEEKS 5-8</div>
              <div className="font-bold text-zinc-900 dark:text-white">Compromised Running</div>
              <div className="text-[11px] text-zinc-500 mt-1">Sled load progression</div>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 opacity-60">
              <div className="text-[10px] font-mono text-zinc-400 font-bold mb-1">STAGE 3 • WEEKS 9-11</div>
              <div className="font-bold text-zinc-900 dark:text-white">Station Sequencing</div>
              <div className="text-[11px] text-zinc-500 mt-1">Roxzone pacing drill</div>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 opacity-40">
              <div className="text-[10px] font-mono text-zinc-400 font-bold mb-1">STAGE 4 • WEEK 12</div>
              <div className="font-bold text-zinc-900 dark:text-white">Half HYROX Simulation</div>
              <div className="text-[11px] text-zinc-500 mt-1">Official time validation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
