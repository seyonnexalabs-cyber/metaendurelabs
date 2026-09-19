'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Activity, Award, ChevronRight, Zap, Target, Flame, 
  Timer, Compass, ArrowUpRight, CheckCircle2, Trophy, BarChart3,
  Footprints, HeartPulse, Apple, Hourglass, ShieldCheck, Dumbbell, Sparkles
} from 'lucide-react';
import { HYROX_STATIONS } from '@/lib/constants';

type SportTab = 'marathon' | 'triathlon' | 'hyrox';

export default function YourSportsPage() {
  const [activeTab, setActiveTab] = useState<SportTab>('marathon');
  const [selectedStation, setSelectedStation] = useState<number>(0);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <Activity className="w-3.5 h-3.5" />
            Specialized Disciplines
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white dark:text-white">
            CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">ARENA</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether conquering 42.195 km of tarmac, mastering multi-sport transitions across swim-bike-run, or dominating the high-lactate demands of HYROX racing.
          </p>
        </div>

        {/* Tab Navigation Pill */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-xl shadow-2xl">
            <button
              onClick={() => setActiveTab('marathon')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'marathon'
                  ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-black shadow-lg shadow-emerald-500/25'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              <Timer className="w-4 h-4" />
              <span>Marathon & Running</span>
            </button>
            <button
              onClick={() => setActiveTab('triathlon')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'triathlon'
                  ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-black shadow-lg shadow-emerald-500/25'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Triathlon (70.3 / 140.6)</span>
            </button>
            <button
              onClick={() => setActiveTab('hyrox')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'hyrox'
                  ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-black shadow-lg shadow-emerald-500/25'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>HYROX Race Simulation</span>
            </button>
          </div>
        </div>

        {/* Tab Content: Marathon */}
        {activeTab === 'marathon' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Overview Banner */}
            <div className="relative rounded-3xl overflow-hidden border border-[#76C043]/30 bg-gradient-to-br from-white via-[#f4faf2] to-emerald-50/50 dark:from-[#08120b] dark:via-[#0e2113] dark:to-black p-8 sm:p-12 shadow-xl dark:shadow-[0_8px_40px_rgba(0,0,0,0.8)] transition-colors">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#1b5e20] dark:text-[#8ff346] font-extrabold bg-[#76C043]/15 px-3 py-1 rounded-full border border-[#76C043]/30 inline-block">
                    Pacing Science • Lactate Dynamics • Cadence
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white leading-tight">
                    Engineered for Sub-3h Ambitions & 100K Ultras
                  </h2>
                  <p className="text-zinc-700 dark:text-[#d1ded2] leading-relaxed font-medium">
                    Endurance running is not about grinding junk miles; it is metabolic calibration. At MetaEndure Labs, your marathon journey is guided by VO2 threshold mapping, step-cadence optimization, and targeted glycogen-sparing nutrition protocols.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-white dark:bg-[#0d1c10] border border-zinc-200 dark:border-[#76C043]/25 shadow-sm">
                      <div className="text-2xl font-black text-[#1b5e20] dark:text-[#8ff346]">10K - 100K</div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 font-medium">Race Distances</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white dark:bg-[#0d1c10] border border-zinc-200 dark:border-[#76C043]/25 shadow-sm">
                      <div className="text-2xl font-black text-[#1b5e20] dark:text-[#8ff346]">Zone 2</div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 font-medium">Metabolic Baseline</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white dark:bg-[#0d1c10] border border-zinc-200 dark:border-[#76C043]/25 shadow-sm">
                      <div className="text-2xl font-black text-[#1b5e20] dark:text-[#8ff346]">-18%</div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 font-medium">Avg PR Reduction</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="/schedule"
                      className="px-6 py-3 rounded-xl bg-[#76C043] hover:bg-[#8ff346] text-black font-extrabold text-sm inline-flex items-center gap-2 shadow-lg shadow-[#76C043]/25 hover:shadow-[#76C043]/40 hover:-translate-y-0.5 transition-all"
                    >
                      Book Lactate & Run Test <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-white/90 dark:bg-[#0b180e] border border-zinc-200 dark:border-white/10 shadow-sm space-y-3 group hover:border-[#76C043]/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] flex items-center justify-center font-bold">
                      <Footprints className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-white">Biomechanical Video Analysis</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">High-speed capture of foot-strike angle, ground contact time (GCT), and vertical oscillation to eliminate energy leakage.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/90 dark:bg-[#0b180e] border border-zinc-200 dark:border-white/10 shadow-sm space-y-3 group hover:border-[#76C043]/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] flex items-center justify-center font-bold">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-white">Heart Rate Reserve (HRR)</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">Precision heart rate boundaries aligned with lactate turnpoint 1 and 2, eliminating the risk of late-race wall hitting.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/90 dark:bg-[#0b180e] border border-zinc-200 dark:border-white/10 shadow-sm space-y-3 group hover:border-[#76C043]/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] flex items-center justify-center font-bold">
                      <Apple className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-white">Intra-Race Carb Fueling</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">Tailored 60g–90g/hr multi-transportable carbohydrate strategies with sweat sodium concentration matching.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/90 dark:bg-[#0b180e] border border-zinc-200 dark:border-white/10 shadow-sm space-y-3 group hover:border-[#76C043]/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] flex items-center justify-center font-bold">
                      <Hourglass className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-white">Periodized Taper Protocols</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">Science-backed volume decay and neuromuscular retention workouts for peak glycogen supercompensation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Triathlon */}
        {activeTab === 'triathlon' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="relative rounded-3xl overflow-hidden border border-[#76C043]/30 bg-gradient-to-br from-white via-[#f4faf2] to-emerald-50/50 dark:from-[#08120b] dark:via-[#0e2113] dark:to-black p-8 sm:p-12 shadow-xl dark:shadow-[0_8px_40px_rgba(0,0,0,0.8)] transition-colors">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#1b5e20] dark:text-[#8ff346] font-extrabold bg-[#76C043]/15 px-3 py-1 rounded-full border border-[#76C043]/30 inline-block">
                    Swim • Bike • Run • T1/T2 Execution
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white leading-tight">
                    From First Sprint to Kona 140.6 Qualifications
                  </h2>
                  <p className="text-zinc-700 dark:text-[#d1ded2] leading-relaxed font-medium">
                    Triathlon demands harmonious mastery across three disciplines without acute fatigue bleeding into race day. MetaEndure Labs provides structured multi-sport planning, aero-power bike profiling, and open water swim drafting mechanics.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-[#d1ded2]">
                      <CheckCircle2 className="w-5 h-5 text-[#1b5e20] dark:text-[#76C043] shrink-0" />
                      <span><strong className="text-zinc-900 dark:text-white">Aero Bike Fit & FTP Calibration:</strong> Power-to-drag optimization and cadence profiling.</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-[#d1ded2]">
                      <CheckCircle2 className="w-5 h-5 text-[#1b5e20] dark:text-[#76C043] shrink-0" />
                      <span><strong className="text-zinc-900 dark:text-white">Brick Workout Engineering:</strong> Neuromuscular adaptation for smooth bike-to-run transitions.</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-[#d1ded2]">
                      <CheckCircle2 className="w-5 h-5 text-[#1b5e20] dark:text-[#76C043] shrink-0" />
                      <span><strong className="text-zinc-900 dark:text-white">Hydration & Thermal Stress:</strong> Sweating kinetics analysis for tropical and endurance heat indices.</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/schedule"
                      className="px-6 py-3 rounded-xl bg-[#76C043] hover:bg-[#8ff346] text-black font-extrabold text-sm inline-flex items-center gap-2 shadow-lg shadow-[#76C043]/25 hover:shadow-[#76C043]/40 hover:-translate-y-0.5 transition-all"
                    >
                      Consult Triathlon Head Coach <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-white/90 dark:bg-[#0d1c10] border border-zinc-200 dark:border-[#76C043]/25 shadow-sm group hover:border-[#76C043]/50 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] flex items-center justify-center">
                          <Zap className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-lg text-zinc-900 dark:text-white">Sprint &amp; Olympic</h3>
                      </div>
                      <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] border border-[#76C043]/30">Speed &amp; VO2</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">Focus on anaerobic capacity, rapid transition drills, and peak threshold power over 1.5-3 hours.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/90 dark:bg-[#0d1c10] border border-zinc-200 dark:border-[#76C043]/25 shadow-sm group hover:border-[#76C043]/50 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] flex items-center justify-center">
                          <Flame className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-lg text-zinc-900 dark:text-white">IRONMAN 70.3 (Half)</h3>
                      </div>
                      <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] border border-[#76C043]/30">Metabolic Efficiency</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">1.9km swim, 90km cycle, 21.1km run. Sustainable wattage pacing and electrolyte maintenance.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/90 dark:bg-[#0d1c10] border border-zinc-200 dark:border-[#76C043]/25 shadow-sm group hover:border-[#76C043]/50 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] flex items-center justify-center">
                          <Trophy className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-lg text-zinc-900 dark:text-white">Full IRONMAN 140.6</h3>
                      </div>
                      <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] border border-[#76C043]/30">Endurance Mastery</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">3.8km swim, 180km bike, 42.2km run. High-fat oxidation rates, mental toughness, and race execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: HYROX Simulation */}
        {activeTab === 'hyrox' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* HYROX Intro */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-[#f4faf2] to-emerald-50/50 dark:from-[#08120b] dark:via-[#0e2113] dark:to-black border border-[#76C043]/30 shadow-xl dark:shadow-[0_8px_40px_rgba(0,0,0,0.8)] space-y-8 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#1b5e20] dark:text-[#8ff346] font-extrabold bg-[#76C043]/15 px-3 py-1 rounded-full border border-[#76C043]/30 inline-block">
                    The Global Fitness Racing Standard
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mt-2">
                    Official HYROX Simulation Arena &amp; Science
                  </h2>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                    <Timer className="w-3.5 h-3.5" /> 8 x 1km Running
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] border border-[#76C043]/30 flex items-center gap-1.5">
                    <Dumbbell className="w-3.5 h-3.5" /> 8 Workout Stations
                  </span>
                </div>
              </div>

              <p className="text-zinc-700 dark:text-[#d1ded2] text-sm sm:text-base leading-relaxed font-medium">
                HYROX is the ultimate test of <strong className="text-zinc-900 dark:text-white">Compromised Running</strong>. Unlike standard 10Ks, you are forced to run at threshold pace immediately after crushing your quadriceps on a 152kg sled, spiking your heart rate on 80m burpees, or burning out your grip on kettlebell carries. Our arena recreates authentic World Championship race conditions with official Rogue sandbags, Concept2 ergs, laser-timed Roxzones, and physiological threshold calibration.
              </p>

              {/* 3 Strategic Pillars of HYROX Preparation */}
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#1b5e20] dark:text-[#8ff346] uppercase">
                    <Flame className="w-4 h-4 text-[#76C043]" />
                    <span>Compromised Pacing</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Clear blood lactate on the fly. We calibrate your exact stride cadence so your legs recover while running at 4:30–5:30/km post-sled.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono text-cyan-600 dark:text-cyan-400 uppercase">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>The Roxzone Advantage</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Most athletes bleed 4 to 8 minutes in station entry and exit transitions. We drill seamless pacing lines to preserve momentum.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono text-amber-600 dark:text-amber-400 uppercase">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span>All Official Divisions</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Full preparation across Open, Pro (heavier weights), Doubles (50/50 rep splits), and 4-Person Relay championships.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive 8 Stations Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-zinc-900 dark:text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#1b5e20] dark:text-[#76C043]" />
                  Explore the 8 HYROX Functional Stations
                </h3>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Click a station for standard specs</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {HYROX_STATIONS.map((st, idx) => (
                  <button
                    key={st.station}
                    onClick={() => setSelectedStation(idx)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedStation === idx
                        ? 'border-[#76C043] bg-[#76C043]/15 text-zinc-900 dark:text-white shadow-lg shadow-[#76C043]/20 font-bold'
                        : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c180e] text-zinc-600 dark:text-zinc-400 hover:border-[#76C043]/40 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-mono text-[#1b5e20] dark:text-[#8ff346] font-bold mb-1">STATION #{st.station}</div>
                    <div className="text-xs font-bold truncate">{st.name}</div>
                    <div className="text-[10px] text-zinc-500 mt-1">{st.distance}</div>
                  </button>
                ))}
              </div>

              {/* Station Detail Card */}
              {HYROX_STATIONS[selectedStation] && (
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#08120b] border-2 border-[#76C043]/30 shadow-lg grid md:grid-cols-3 gap-6 items-center">
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-[#1b5e20] dark:text-[#8ff346] font-bold">STATION {HYROX_STATIONS[selectedStation].station} / 8</div>
                    <h4 className="text-2xl font-black text-zinc-900 dark:text-white">{HYROX_STATIONS[selectedStation].name}</h4>
                    <p className="text-sm font-bold text-[#1b5e20] dark:text-[#8ff346]">{HYROX_STATIONS[selectedStation].distance}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono font-bold">SPECIFICATIONS & WEIGHTS</div>
                    <p className="text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed font-medium">{HYROX_STATIONS[selectedStation].description}</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-[#0d1c10] border border-zinc-200 dark:border-[#76C043]/20 text-center">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Preceded & Followed by</span>
                      <div className="text-sm font-bold text-zinc-900 dark:text-white mt-0.5">1,000m Compromised Run</div>
                    </div>
                    <Link
                      href="/schedule"
                      className="w-full py-2.5 rounded-xl bg-[#76C043] hover:bg-[#8ff346] text-black font-extrabold text-xs text-center shadow-md hover:shadow-[#76C043]/30 transition-all"
                    >
                      Book HYROX Wave Test
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#76C043]/15 via-white to-emerald-50/60 dark:from-[#09180d] dark:via-[#112a17] dark:to-[#07130a] border-2 border-[#76C043]/40 text-center space-y-6 shadow-xl dark:shadow-[0_8px_40px_rgba(0,0,0,0.8)] transition-colors">
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            Unsure Which Sport Architecture Fits Your Current Season?
          </h2>
          <p className="text-zinc-700 dark:text-[#bdcebe] max-w-2xl mx-auto text-sm sm:text-base font-medium leading-relaxed">
            Book an initial 45-minute athlete assessment with Head Coach Sunil Menon or Coach Rashmi to map your aerobic baseline and target races.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/schedule"
              className="px-8 py-3.5 rounded-xl bg-[#76C043] hover:bg-[#8ff346] text-black font-extrabold text-sm shadow-xl shadow-[#76C043]/25 hover:shadow-[#76C043]/40 hover:-translate-y-0.5 transition-all"
            >
              Book Athletic Assessment
            </Link>
            <Link
              href="/team"
              className="px-8 py-3.5 rounded-xl border border-zinc-300 dark:border-white/20 text-zinc-800 dark:text-white bg-white/70 dark:bg-white/5 hover:border-[#76C043]/50 font-bold text-sm transition-all shadow-sm"
            >
              Meet the Coaching Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
