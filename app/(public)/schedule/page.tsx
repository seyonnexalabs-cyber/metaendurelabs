'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CalendarClock, 
  ArrowRight, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  Flame, 
  CheckCircle2, 
  Activity, 
  Wind, 
  Sparkles,
  Footprints,
  HeartPulse,
  Eye,
  RefreshCw,
  Zap,
  Timer,
  Target,
  Users,
  Compass,
  Layers
} from 'lucide-react';
import { TrainingSession } from '@/lib/types';
import { fetchSessions, DEFAULT_SESSIONS } from '@/lib/scheduleService';

export default function SchedulePage() {
  const [sessions, setSessions] = useState<TrainingSession[]>(DEFAULT_SESSIONS);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchSessions();
        setSessions(data);
      } catch (err) {
        console.error(err);
      }
    };
    load();
    window.addEventListener('metaendure_schedule_updated', load);
    window.addEventListener('storage', load);
    return () => {
      window.removeEventListener('metaendure_schedule_updated', load);
      window.removeEventListener('storage', load);
    };
  }, []);

  const focusItems = [
    {
      title: 'Running Warm-Up & Dynamic Activation',
      desc: 'Glute activation, ankle mobility drills & neuromuscular prep',
      icon: Flame,
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      title: 'Running Form Check & Biomechanical Correction',
      desc: 'Footstrike assessment, cadence optimization & posture alignment',
      icon: Eye,
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      title: 'Breathing Techniques & Rhythmic Control',
      desc: 'Locomotor-respiratory coupling, diaphragmatic cadence flow',
      icon: Wind,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      title: 'Running Cool-Down & Fascial Mobility',
      desc: 'Post-track static stretching, joint decompression & flush',
      icon: RefreshCw,
      color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20'
    }
  ];

  // The primary highlighted session (most recent or top session)
  const primarySession = sessions[0] || DEFAULT_SESSIONS[0];
  // Other scheduled sessions created by admin
  const otherSessions = sessions.slice(1);

  return (
    <div className="pt-0 sm:pt-1 pb-10 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto space-y-5">
        {/* Header */}
        <div className="text-center space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-[#76C043] border border-emerald-500/20">
            <CalendarClock className="w-4 h-4 text-[#2e7d32] dark:text-[#76C043]" />
            <span>Upcoming Track &amp; Wave Sessions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-heading font-black text-zinc-900 dark:text-white tracking-tight uppercase">
            TRAINING SCHEDULE
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl mx-auto">
            Live cohort training schedules, track mechanics clinics, and high-performance endurance waves.
          </p>
        </div>

        {/* Featured Upcoming Training Card (Live Active Session) */}
        {primarySession && (
          <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 dark:border-[#76C043]/40 bg-white dark:bg-[#071009] shadow-xl p-5 sm:p-6 space-y-4">
            {/* Top Header of Workshop */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 dark:border-white/10 pb-5">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-700 dark:text-[#8ff346] border border-emerald-500/30 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    {primarySession.type.toUpperCase()} CLINIC
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-600 dark:text-[#76C043]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Open for Registration
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#76C043]/20 to-emerald-500/10 border border-[#76C043]/30 flex items-center justify-center text-[#2e7d32] dark:text-[#76C043] shrink-0">
                    <Footprints className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-black text-zinc-900 dark:text-white">
                      {primarySession.title}
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                      <HeartPulse className="w-3.5 h-3.5 text-rose-500" />
                      <span>Coach: {primarySession.coach} • Biomechanics &amp; Pacing</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-emerald-50 dark:bg-white/5 border border-emerald-500/20 dark:border-white/10 px-4 py-2 rounded-2xl">
                <Flame className="w-5 h-5 text-amber-500" />
                <div className="text-left font-mono">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Format</div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1">
                    <span>Live Wave</span>
                    <Sparkles className="w-3 h-3 text-[#76C043]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Date, Time, Location Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10 space-y-1 group hover:border-[#76C043]/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-wider">
                  <Calendar className="w-4 h-4" />
                  Date
                </div>
                <div className="text-base font-heading font-black text-zinc-900 dark:text-white">
                  {primarySession.date}
                </div>
                <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                  <Timer className="w-3 h-3" />
                  <span>Scheduled Session</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10 space-y-1 group hover:border-[#76C043]/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  Time
                </div>
                <div className="text-base font-heading font-black text-zinc-900 dark:text-white">
                  {primarySession.time}
                </div>
                <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-500" />
                  <span>Sharp Rollout</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10 space-y-1 group hover:border-[#76C043]/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  Location
                </div>
                <div className="text-sm font-heading font-bold text-zinc-900 dark:text-white truncate">
                  {primarySession.location}
                </div>
                <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                  <span>Cap: {primarySession.capacity?.max || 20} Athletes</span>
                </div>
              </div>
            </div>

            {/* Quick Stats Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-2xl bg-zinc-50/80 dark:bg-white/[0.02] border border-zinc-200/60 dark:border-white/5 flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-[#76C043]">
                  <Footprints className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Surface</div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">Synthetic 400m</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-50/80 dark:bg-white/[0.02] border border-zinc-200/60 dark:border-white/5 flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Intensity</div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">Drills &amp; Pacing</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-50/80 dark:bg-white/[0.02] border border-zinc-200/60 dark:border-white/5 flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Cohort</div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">Limited Wave</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-50/80 dark:bg-white/[0.02] border border-zinc-200/60 dark:border-white/5 flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Coaching</div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">{primarySession.coach}</div>
                </div>
              </div>
            </div>

            {/* Focus Areas with Rich Lucide Icons */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-500/20 dark:border-[#76C043]/20 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2e7d32] dark:text-[#76C043]">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Session Focus &amp; Curriculum
                </div>
                <span className="text-[11px] font-mono text-zinc-500">4 Core Modules</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusItems.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-2xl bg-white dark:bg-[#0a160d] border border-zinc-200/80 dark:border-white/10 flex items-start gap-3 shadow-xs hover:border-[#76C043]/40 transition-all"
                    >
                      <div className={`p-2 rounded-xl border shrink-0 ${item.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-heading font-bold text-zinc-900 dark:text-white">
                          {item.title}
                        </div>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Footer inside the card */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-zinc-100 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-[#76C043]" />
                <span>Limited spots per wave for personalized 1-on-1 gait feedback.</span>
              </div>
              <Link
                href={`/contact?subject=Reserve%20Slot%20for%20${encodeURIComponent(primarySession.title)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-sm text-white dark:text-black bg-[#2e7d32] dark:bg-[#76C043] hover:bg-[#256628] dark:hover:bg-[#8ff346] shadow-md dark:shadow-[0_0_25px_rgba(118,192,67,0.35)] transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Reserve Your Slot</span>
              </Link>
            </div>
          </div>
        )}

        {/* Other Active Schedules Published by Admin */}
        {otherSessions.length > 0 && (
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                <Layers className="w-4 h-4 text-[#76C043]" />
                <span>Additional Scheduled Sessions &amp; Waves ({otherSessions.length})</span>
              </div>
              <span className="text-xs font-mono text-zinc-500">Live Active Cohorts</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherSessions.map((session) => (
                <div 
                  key={session.id}
                  className="p-5 rounded-2xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-white/10 shadow-sm space-y-3 hover:border-[#76C043]/40 transition-all"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-[#76C043] border border-emerald-500/20">
                      {session.type}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {session.coach}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-black text-base text-zinc-900 dark:text-white">
                      {session.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span className="truncate">{session.location}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-white/5 text-xs font-mono">
                    <span className="text-zinc-700 dark:text-zinc-300 font-semibold">{session.date}</span>
                    <span className="text-[#2e7d32] dark:text-[#76C043] font-bold">{session.time}</span>
                  </div>

                  <Link
                    href={`/contact?subject=Book%20${encodeURIComponent(session.title)}`}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-bold bg-zinc-100 dark:bg-white/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-[#76C043] dark:hover:text-black transition-all"
                  >
                    <span>Reserve Spot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Info / Direct Cohort Inquiries */}
        <div className="p-6 rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-50/80 dark:bg-white/[0.03] backdrop-blur-md text-left space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#2e7d32] dark:text-[#76C043]">
            <ShieldCheck className="w-4 h-4" />
            Direct Cohort Inquiries &amp; 1-on-1 Consults
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Athletes desiring 1-on-1 threshold testing, biomechanics video assessment, or priority cohort reservations can reach out directly to head coach Sujai Sivan.
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
