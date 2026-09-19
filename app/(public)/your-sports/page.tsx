'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Activity, Award, ChevronRight, Zap, Target, Flame, 
  Timer, Compass, ArrowUpRight, CheckCircle2, Trophy, BarChart3
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
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 sm:p-12">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">Pacing Science • Lactate Dynamics • Cadence</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                    Engineered for Sub-3h Ambitions & 100K Ultras
                  </h2>
                  <p className="text-zinc-300 leading-relaxed">
                    Endurance running is not about grinding junk miles; it is metabolic calibration. At MetaEndure Labs, your marathon journey is guided by VO2 threshold mapping, step-cadence optimization, and targeted glycogen-sparing nutrition protocols.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                      <div className="text-2xl font-black text-emerald-400">10K - 100K</div>
                      <div className="text-xs text-zinc-400 mt-1">Race Distances</div>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                      <div className="text-2xl font-black text-emerald-400">Zone 2</div>
                      <div className="text-xs text-zinc-400 mt-1">Metabolic Baseline</div>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                      <div className="text-2xl font-black text-emerald-400">-18%</div>
                      <div className="text-xs text-zinc-400 mt-1">Avg PR Reduction</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="/schedule"
                      className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                    >
                      Book Lactate & Run Test <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">01</div>
                    <h3 className="font-bold text-white">Biomechanical Video Analysis</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">High-speed capture of foot-strike angle, ground contact time (GCT), and vertical oscillation to eliminate energy leakage.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">02</div>
                    <h3 className="font-bold text-white">Heart Rate Reserve (HRR)</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">Precision heart rate boundaries aligned with lactate turnpoint 1 and 2, eliminating the risk of late-race wall hitting.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">03</div>
                    <h3 className="font-bold text-white">Intra-Race Carb Fueling</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">Tailored 60g–90g/hr multi-transportable carbohydrate strategies with sweat sodium concentration matching.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">04</div>
                    <h3 className="font-bold text-white">Periodized Taper Protocols</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">Science-backed volume decay and neuromuscular retention workouts for peak glycogen supercompensation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Triathlon */}
        {activeTab === 'triathlon' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 sm:p-12">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">Swim • Bike • Run • T1/T2 Execution</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                    From First Sprint to Kona 140.6 Qualifications
                  </h2>
                  <p className="text-zinc-300 leading-relaxed">
                    Triathlon demands harmonious mastery across three disciplines without acute fatigue bleeding into race day. MetaEndure Labs provides structured multi-sport planning, aero-power bike profiling, and open water swim drafting mechanics.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span><strong>Aero Bike Fit & FTP Calibration:</strong> Power-to-drag optimization and cadence profiling.</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span><strong>Brick Workout Engineering:</strong> Neuromuscular adaptation for smooth bike-to-run transitions.</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span><strong>Hydration & Thermal Stress:</strong> Sweating kinetics analysis for tropical and endurance heat indices.</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/schedule"
                      className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                    >
                      Consult Triathlon Head Coach <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg text-white">Sprint & Olympic</h3>
                      <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Speed & VO2</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">Focus on anaerobic capacity, rapid transition drills, and peak threshold power over 1.5-3 hours.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg text-white">IRONMAN 70.3 (Half)</h3>
                      <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Metabolic Efficiency</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">1.9km swim, 90km cycle, 21.1km run. Sustainable wattage pacing and electrolyte maintenance.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg text-white">Full IRONMAN 140.6</h3>
                      <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Endurance Mastery</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">3.8km swim, 180km bike, 42.2km run. High-fat oxidation rates, mental toughness, and race execution.</p>
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
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/90 border border-zinc-800 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">The Global Fitness Racing Standard</span>
                  <h2 className="text-3xl font-black text-white mt-1">Official HYROX Simulation Arena</h2>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">8 x 1km Running</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">8 Workout Stations</span>
                </div>
              </div>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                HYROX tests compromised running under acute peripheral fatigue. Our arena recreates official race conditions with exact competition weights, laser-timed transition tracking, and cadence targets for both Open and Pro divisions.
              </p>
            </div>

            {/* Interactive 8 Stations Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-emerald-400" />
                  Explore the 8 HYROX Functional Stations
                </h3>
                <span className="text-xs text-zinc-400">Click a station for standard specs</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {HYROX_STATIONS.map((st, idx) => (
                  <button
                    key={st.station}
                    onClick={() => setSelectedStation(idx)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedStation === idx
                        ? 'border-emerald-500 bg-emerald-500/10 text-white shadow-lg shadow-emerald-500/10'
                        : 'border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div className="text-xs font-mono text-emerald-400 font-bold mb-1">STATION #{st.station}</div>
                    <div className="text-xs font-bold truncate">{st.name}</div>
                    <div className="text-[10px] text-zinc-500 mt-1">{st.distance}</div>
                  </button>
                ))}
              </div>

              {/* Station Detail Card */}
              {HYROX_STATIONS[selectedStation] && (
                <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-emerald-500/30 grid md:grid-cols-3 gap-6 items-center">
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-emerald-400">STATION {HYROX_STATIONS[selectedStation].station} / 8</div>
                    <h4 className="text-2xl font-black text-white">{HYROX_STATIONS[selectedStation].name}</h4>
                    <p className="text-sm font-semibold text-emerald-300">{HYROX_STATIONS[selectedStation].distance}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-zinc-400 font-mono">SPECIFICATIONS & WEIGHTS</div>
                    <p className="text-sm text-zinc-200 leading-relaxed">{HYROX_STATIONS[selectedStation].description}</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                      <span className="text-xs text-zinc-400">Preceded & Followed by</span>
                      <div className="text-sm font-bold text-white mt-0.5">1,000m Compromised Run</div>
                    </div>
                    <Link
                      href="/schedule"
                      className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs text-center transition-all"
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
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-black border border-emerald-500/20 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Unsure Which Sport Architecture Fits Your Current Season?
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Book an initial 45-minute athlete assessment with Head Coach Sunil Menon or Coach Rashmi to map your aerobic baseline and target races.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/schedule"
              className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all"
            >
              Book Athletic Assessment
            </Link>
            <Link
              href="/team"
              className="px-8 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm transition-all"
            >
              Meet the Coaching Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
