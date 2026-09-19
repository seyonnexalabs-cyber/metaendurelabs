'use client';

import Link from 'next/link';
import { 
  Activity, Flame, Heart, Zap, Calendar, TrendingUp, 
  ArrowUpRight, Clock, Award, CheckCircle2, ChevronRight,
  Dumbbell, Gauge, Sparkles, Stethoscope, Target, Trophy, ShieldCheck
} from 'lucide-react';
import { MOCK_ATHLETE, HYROX_STATIONS } from '@/lib/constants';

export default function AthleteDashboardPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-[#76C043]/30 shadow-md dark:shadow-[0_4px_30px_rgba(0,0,0,0.8)] flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-[#76C043]/50 shadow-md shrink-0 bg-zinc-100 dark:bg-zinc-900">
            <img
              src="/assets/images/default-avatar.svg"
              alt={MOCK_ATHLETE.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1b5e20] dark:text-[#8ff346] bg-[#76C043]/15 px-3 py-1 rounded-full border border-[#76C043]/40 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#76C043] animate-pulse" />
              ATHLETE ID: {MOCK_ATHLETE.id}
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#050806] dark:text-white tracking-wide">
              Welcome Back, {MOCK_ATHLETE.name}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-[#d1ded2] font-medium">
              Target Race: <strong className="text-[#1b5e20] dark:text-[#8ff346] font-bold">{MOCK_ATHLETE.targetRace}</strong> &bull; 42 Days to Taper Phase
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Link
            href="/dashboard/schedule"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-1.5"
          >
            <Calendar className="w-4 h-4" />
            Book Training Wave
          </Link>
          <Link
            href="/dashboard/workouts"
            className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5"
          >
            <Activity className="w-4 h-4" />
            Log Run / Splits
          </Link>
        </div>
      </div>

      {/* 4 Core Physiological KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* VO2 Max */}
        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 transition-all space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-mono">VO2 PEAK</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{MOCK_ATHLETE.vo2Max}</span>
            <span className="text-xs text-zinc-400">mL/kg/min</span>
          </div>
          <div className="text-[11px] text-emerald-400 font-medium">Top 5% for Age Category (M35)</div>
        </div>

        {/* Resting HR & HRV */}
        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 transition-all space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-mono">RESTING HR / HRV</span>
            <div className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <Heart className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{MOCK_ATHLETE.restingHR}</span>
            <span className="text-xs text-zinc-400">bpm</span>
            <span className="text-xs text-emerald-400 font-mono">HRV: {MOCK_ATHLETE.hrv}ms</span>
          </div>
          <div className="text-[11px] text-zinc-400 font-medium">Readiness: Optimal (Green State)</div>
        </div>

        {/* Lactate Threshold Pace */}
        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 transition-all space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-mono">LACTATE TURNPOINT (LT2)</span>
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{MOCK_ATHLETE.lactateThresholdPace}</span>
            <span className="text-xs text-zinc-400">/km</span>
          </div>
          <div className="text-[11px] text-emerald-400 font-medium">+12s pace shift since July benchmark</div>
        </div>

        {/* Weekly Mileage Progress */}
        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 transition-all space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-mono">WEEKLY RUN VOLUME</span>
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{MOCK_ATHLETE.weeklyDistanceKm}</span>
            <span className="text-xs text-zinc-400">/ {MOCK_ATHLETE.targetWeeklyDistanceKm} km</span>
          </div>
          <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full rounded-full transition-all" 
              style={{ width: `${(MOCK_ATHLETE.weeklyDistanceKm / MOCK_ATHLETE.targetWeeklyDistanceKm) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Grid: Upcoming Scheduled Workouts & HYROX Personal Bests */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 cols: Upcoming Workouts Schedule */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              Microcycle Schedule (Week 3 of 12)
            </h2>
            <Link href="/dashboard/schedule" className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1">
              View Calendar <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {/* Workout 1 */}
            <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-between hover:border-zinc-700 transition-all group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">TOMORROW 06:00 AM</span>
                    <span className="text-xs font-bold text-white">Aerobic Zone 2 Foundation Run</span>
                  </div>
                  <p className="text-xs text-zinc-400">14km steady pace @ 5:15 - 5:25 min/km • HR cap &lt; 142 bpm</p>
                </div>
              </div>
              <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-lg bg-zinc-800">Assigned</span>
            </div>

            {/* Workout 2 */}
            <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-between hover:border-zinc-700 transition-all group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">WED 06:30 PM</span>
                    <span className="text-xs font-bold text-white">HYROX Sled & Compromised Intervals</span>
                  </div>
                  <p className="text-xs text-zinc-400">Arena Session with Coach Rashmi • 4 x (500m Run + 50m Sled Push 152kg)</p>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-lg bg-emerald-500/10">Lab Wave</span>
            </div>

            {/* Workout 3 */}
            <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-between hover:border-zinc-700 transition-all group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">FRI 07:00 AM</span>
                    <span className="text-xs font-bold text-white">Dr Physio Movement & Joint Mobility</span>
                  </div>
                  <p className="text-xs text-zinc-400">Hip articulation, hamstring eccentric loading & foam roller flush</p>
                </div>
              </div>
              <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-lg bg-zinc-800">Clinical</span>
            </div>
          </div>
        </div>

        {/* Right 5 cols: HYROX Benchmarks & PRs */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              HYROX Benchmark Times
            </h2>
            <span className="text-xs font-mono text-emerald-400">Overall PR: 1h 14m 20s</span>
          </div>

          <div className="p-5 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="text-zinc-500 text-[10px] font-mono">1000m SKIERG</div>
                <div className="text-base font-bold text-white mt-0.5">3m 42s</div>
                <div className="text-[10px] text-emerald-400">Split pace: 1:51/500m</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="text-zinc-500 text-[10px] font-mono">50m SLED PUSH (152kg)</div>
                <div className="text-base font-bold text-white mt-0.5">2m 18s</div>
                <div className="text-[10px] text-emerald-400">Continuous 4 lengths</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="text-zinc-500 text-[10px] font-mono">80m BURPEE BROAD</div>
                <div className="text-base font-bold text-white mt-0.5">4m 05s</div>
                <div className="text-[10px] text-emerald-400">Cadence: 22 reps/min</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="text-zinc-500 text-[10px] font-mono">100 WALL BALLS (6kg)</div>
                <div className="text-base font-bold text-white mt-0.5">4m 15s</div>
                <div className="text-[10px] text-emerald-400">Unbroken sets of 25</div>
              </div>
            </div>

            <Link
              href="/dashboard/workouts"
              className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <span>View All 8 Stations & Lap Velocity</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
