import React from 'react';
import type { Metadata } from 'next';
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
  Compass
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Training Schedule & Cohort Sessions | MetaEndure Labs',
  description: 'Upcoming track training, running mechanics, breathing techniques, and cohort reservations at MetaEndure Labs.',
};

export default function SchedulePage() {
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

  return (
    <div className="pt-0 sm:pt-2 pb-16 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-[#76C043] border border-emerald-500/20">
            <CalendarClock className="w-4 h-4 text-[#2e7d32] dark:text-[#76C043]" />
            <span>Upcoming Track Session Announcement</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-black text-zinc-900 dark:text-white tracking-tight uppercase">
            TRAINING SCHEDULE
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl mx-auto">
            Join our structured outdoor endurance track clinic designed to refine form, breathing, and running economy.
          </p>
        </div>

        {/* Featured Upcoming Training Card */}
        <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 dark:border-[#76C043]/40 bg-white dark:bg-[#071009] shadow-xl p-6 sm:p-8 space-y-6">
          {/* Top Header of Workshop */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 dark:border-white/10 pb-5">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-700 dark:text-[#8ff346] border border-emerald-500/30 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  Track &amp; Mechanics Clinic
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
                    Outdoor Running &amp; Form Workshop
                  </h2>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    <HeartPulse className="w-3.5 h-3.5 text-rose-500" />
                    <span>Biomechanics • Posture Check • Cadence &amp; Breathwork</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-emerald-50 dark:bg-white/5 border border-emerald-500/20 dark:border-white/10 px-4 py-2 rounded-2xl">
              <Flame className="w-5 h-5 text-amber-500" />
              <div className="text-left font-mono">
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Format</div>
                <div className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1">
                  <span>Trackside Live</span>
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
                31st October 2026
              </div>
              <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                <Timer className="w-3 h-3" />
                <span>Saturday Morning</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10 space-y-1 group hover:border-[#76C043]/40 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                Time
              </div>
              <div className="text-base font-heading font-black text-zinc-900 dark:text-white">
                06:00 AM IST
              </div>
              <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-500" />
                <span>Sharp Track Rollout</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10 space-y-1 group hover:border-[#76C043]/40 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                Location
              </div>
              <div className="text-base font-heading font-black text-zinc-900 dark:text-white">
                Kanteerava Stadium
              </div>
              <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                <Target className="w-3 h-3 text-emerald-500" />
                <span>400m Synthetic Track</span>
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
                <div className="text-xs font-bold text-zinc-900 dark:text-white">Visual Feedback</div>
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
              href="/contact?subject=Training%20at%20Kanteerava%20Stadium%20(31st%20Oct)"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-sm text-white dark:text-black bg-[#2e7d32] dark:bg-[#76C043] hover:bg-[#256628] dark:hover:bg-[#8ff346] shadow-md dark:shadow-[0_0_25px_rgba(118,192,67,0.35)] transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Reserve Your Slot</span>
            </Link>
          </div>
        </div>

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
