import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Activity, 
  Target, 
  Flame, 
  Zap, 
  Trophy, 
  CheckCircle2, 
  Calendar,
  Layers,
  Sparkles,
  Shield,
  TrendingUp,
  Dumbbell,
  Compass,
  Award,
  HeartPulse,
  Clock,
  Gauge,
  Brain,
  Wind,
  Weight,
  Anchor,
  MoveUpRight,
  Waves,
  Footprints
} from 'lucide-react';
import { HYROX_STATIONS } from '@/lib/constants';

function getStationIcon(iconName?: string) {
  switch (iconName) {
    case 'Wind': return Wind;
    case 'Weight': return Weight;
    case 'Anchor': return Anchor;
    case 'MoveUpRight': return MoveUpRight;
    case 'Waves': return Waves;
    case 'Dumbbell': return Dumbbell;
    case 'Footprints': return Footprints;
    case 'Target': return Target;
    default: return Activity;
  }
}

export default function HomePage() {
  return (
    <div className="space-y-28 pt-8">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 md:px-12 max-w-[1440px] mx-auto pt-12 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#76C043]/15 border border-[#76C043]/40 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#76C043] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#76C043] animate-pulse"></span>
              Outlast Your Yesterday
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-white uppercase tracking-wider leading-[1.05]">
              Endure. <span className="text-[#76C043] drop-shadow-[0_0_25px_rgba(118,192,67,0.45)]">Evolve.</span> Excel.
            </h1>

            <p className="text-[#bdcebe] text-base md:text-lg leading-relaxed max-w-2xl">
              Most people do not fail because they lack potential. They fail because they lack a proven system. 
              <strong className="text-white"> METAENDURE LABS</strong> combines endurance sports science, mindset architecture, and bio-calibrated coaching to unlock your highest athletic potential.
            </p>

            <div className="flex items-center gap-4 flex-wrap pt-2">
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-bold text-sm text-[#070e08] bg-gradient-to-r from-[#76C043] to-[#8ff346] shadow-[0_4px_25px_rgba(118,192,67,0.4)] hover:shadow-[0_6px_30px_rgba(118,192,67,0.6)] transition-all hover:-translate-y-0.5"
              >
                <span>Book Training Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#76C043]/50 transition-all"
              >
                <Compass className="w-4 h-4 text-[#76C043]" />
                <span>Explore Philosophy</span>
              </Link>
            </div>

            {/* Micro Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-[#76C043]/10 border border-[#76C043]/20 shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-[#76C043]" />
                </div>
                <div>
                  <div className="font-mono text-2xl md:text-3xl font-bold text-white">10<span className="text-[#76C043]">+</span></div>
                  <div className="text-[11px] text-[#788e7a] font-mono uppercase tracking-wider mt-0.5">Years Evolution</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-[#76C043]/10 border border-[#76C043]/20 shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-[#76C043]" />
                </div>
                <div>
                  <div className="font-mono text-2xl md:text-3xl font-bold text-white">18<span className="text-[#76C043]">kg</span></div>
                  <div className="text-[11px] text-[#788e7a] font-mono uppercase tracking-wider mt-0.5">Body Recomp</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-[#76C043]/10 border border-[#76C043]/20 shrink-0 mt-1">
                  <Award className="w-4 h-4 text-[#76C043]" />
                </div>
                <div>
                  <div className="font-mono text-2xl md:text-3xl font-bold text-white">70.3</div>
                  <div className="text-[11px] text-[#788e7a] font-mono uppercase tracking-wider mt-0.5">IRONMAN Finisher</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-[#76C043]/10 border border-[#76C043]/20 shrink-0 mt-1">
                  <Dumbbell className="w-4 h-4 text-[#76C043]" />
                </div>
                <div>
                  <div className="font-mono text-2xl md:text-3xl font-bold text-white">8<span className="text-[#76C043]">-Station</span></div>
                  <div className="text-[11px] text-[#788e7a] font-mono uppercase tracking-wider mt-0.5">HYROX Lab Arena</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            {/* Glowing Backdrop Orb */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#76C043]/20 via-[#234c2a]/30 to-transparent blur-3xl -z-10 rounded-full"></div>
            
            <div className="relative p-3 rounded-3xl border border-white/15 bg-gradient-to-b from-[#101c13] to-[#08100b] shadow-[0_25px_60px_rgba(0,0,0,0.8)] max-w-md w-full overflow-hidden group flex flex-col items-center justify-center">
              <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                <img
                  src="/assets/images/metaendure-logo-vertical-plate.png"
                  alt="METAENDURE Official Crest"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Floating Badge Top */}
              <div className="absolute top-6 left-6 bg-[#0a150d]/90 backdrop-blur-md border border-[#76C043]/40 rounded-xl p-2.5 px-3.5 shadow-xl flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#76C043] animate-ping"></span>
                <span className="text-xs font-heading font-bold text-white">Science &times; Mindset Engine</span>
              </div>

              {/* Floating Badge Bottom */}
              <div className="absolute bottom-6 right-6 bg-[#0a150d]/90 backdrop-blur-md border border-[#76C043]/40 rounded-xl p-2.5 px-3.5 shadow-xl flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#76C043]" />
                <span className="text-xs font-mono font-bold text-white">Goa 70.3 Verified Finisher</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THREE CORE PILLARS PREVIEW */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold text-[#76C043] uppercase tracking-widest bg-[#76C043]/10 px-3 py-1 rounded-full border border-[#76C043]/20">
            Core Philosophy
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mt-3">
            The Three Transformative <span className="text-[#76C043]">Pillars</span>
          </h2>
          <p className="text-[#bdcebe] text-sm md:text-base mt-3">
            From absorbing stress to intellectual adaptation, to absolute competitive mastery in sport and life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: ENDURE (Endurance & Resilience) */}
          <div className="rounded-3xl border-2 border-emerald-500/30 bg-white dark:bg-gradient-to-b dark:from-emerald-950/40 dark:via-zinc-950/80 dark:to-black overflow-hidden shadow-xl dark:shadow-2xl group hover:border-emerald-500 hover:shadow-[0_10px_35px_rgba(16,185,129,0.2)] transition-all flex flex-col justify-between">
            <div>
              {/* Colorful Card Header Banner */}
              <div className="h-32 bg-gradient-to-br from-emerald-500/20 via-emerald-600/10 to-emerald-500/5 dark:from-emerald-500/25 dark:via-emerald-600/15 dark:to-transparent border-b border-emerald-500/20 p-6 flex items-center justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center -space-x-3">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-md group-hover:scale-110 group-hover:-translate-x-1 transition-transform z-10" title="Endurance (Shield)">
                    <Shield className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100/90 dark:bg-emerald-600/30 border border-emerald-400/50 flex items-center justify-center text-emerald-700 dark:text-emerald-300 shadow-md group-hover:scale-110 group-hover:translate-x-1 transition-transform z-20" title="Resilience (HeartPulse)">
                    <HeartPulse className="w-7 h-7 text-emerald-700 dark:text-emerald-300" />
                  </div>
                </div>
                <span className="font-mono text-xs font-black tracking-widest text-emerald-700 dark:text-emerald-300 bg-emerald-500/15 dark:bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                  PILLAR 01
                </span>
              </div>
              <div className="p-7 space-y-3">
                <h3 className="font-heading text-2xl font-black text-zinc-900 dark:text-white">ENDURE.</h3>
                <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 flex-wrap">
                  <span className="inline-flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <Shield className="w-3 h-3" /> Endurance
                  </span>
                  <span>+</span>
                  <span className="inline-flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <HeartPulse className="w-3 h-3" /> Resilience
                  </span>
                </div>
                <p className="text-xs text-zinc-700 dark:text-[#d1ded2] leading-relaxed font-medium">
                  The foundational phase of resilience, grit, and survival. It represents the capacity to withstand hardships, absorb pressure, maintain discipline, and persist through setbacks without quitting.
                </p>
              </div>
            </div>
            <div className="p-6 pt-4 border-t border-zinc-200 dark:border-white/10 mx-6 mb-2 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span>Phase 01</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> Zero Quitting
              </span>
            </div>
          </div>

          {/* Pillar 2: EVOLVE (Mindset + Science) */}
          <div className="rounded-3xl border-2 border-cyan-500/30 bg-white dark:bg-gradient-to-b dark:from-cyan-950/40 dark:via-zinc-950/80 dark:to-black overflow-hidden shadow-xl dark:shadow-2xl group hover:border-cyan-500 hover:shadow-[0_10px_35px_rgba(6,182,212,0.2)] transition-all flex flex-col justify-between">
            <div>
              {/* Colorful Card Header Banner */}
              <div className="h-32 bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-cyan-500/5 dark:from-cyan-500/25 dark:via-blue-600/15 dark:to-transparent border-b border-cyan-500/20 p-6 flex items-center justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center -space-x-3">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-md group-hover:scale-110 group-hover:-translate-x-1 transition-transform z-10" title="Mindset (Brain)">
                    <Brain className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-cyan-100/90 dark:bg-cyan-600/30 border border-cyan-400/50 flex items-center justify-center text-cyan-700 dark:text-cyan-300 shadow-md group-hover:scale-110 group-hover:translate-x-1 transition-transform z-20" title="Science (Zap / Physiology)">
                    <Zap className="w-7 h-7 text-cyan-700 dark:text-cyan-300" />
                  </div>
                </div>
                <span className="font-mono text-xs font-black tracking-widest text-cyan-700 dark:text-cyan-300 bg-cyan-500/15 dark:bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-500/30">
                  PILLAR 02
                </span>
              </div>
              <div className="p-7 space-y-3">
                <h3 className="font-heading text-2xl font-black text-zinc-900 dark:text-white">EVOLVE.</h3>
                <div className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 flex-wrap">
                  <span className="inline-flex items-center gap-1 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    <Brain className="w-3 h-3" /> Mindset
                  </span>
                  <span>+</span>
                  <span className="inline-flex items-center gap-1 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    <Zap className="w-3 h-3" /> Science
                  </span>
                </div>
                <p className="text-xs text-zinc-700 dark:text-[#d1ded2] leading-relaxed font-medium">
                  The intermediate phase of adaptation and intelligent growth. Once you survive initial pressure, you must learn, shift your mindset, update your fueling and training, and transform capabilities.
                </p>
              </div>
            </div>
            <div className="p-6 pt-4 border-t border-zinc-200 dark:border-white/10 mx-6 mb-2 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span>Phase 02</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" /> Data Calibration
              </span>
            </div>
          </div>

          {/* Pillar 3: EXCEL (Performance & Mastery) */}
          <div className="rounded-3xl border-2 border-amber-500/30 bg-white dark:bg-gradient-to-b dark:from-amber-950/40 dark:via-zinc-950/80 dark:to-black overflow-hidden shadow-xl dark:shadow-2xl group hover:border-amber-500 hover:shadow-[0_10px_35px_rgba(245,158,11,0.2)] transition-all flex flex-col justify-between">
            <div>
              {/* Colorful Card Header Banner */}
              <div className="h-32 bg-gradient-to-br from-amber-500/20 via-yellow-600/10 to-amber-500/5 dark:from-amber-500/25 dark:via-yellow-600/15 dark:to-transparent border-b border-amber-500/20 p-6 flex items-center justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center -space-x-3">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-md group-hover:scale-110 group-hover:-translate-x-1 transition-transform z-10" title="Performance (Flame)">
                    <Flame className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-100/90 dark:bg-amber-600/30 border border-amber-400/50 flex items-center justify-center text-amber-700 dark:text-amber-300 shadow-md group-hover:scale-110 group-hover:translate-x-1 transition-transform z-20" title="Mastery (Trophy)">
                    <Trophy className="w-7 h-7 text-amber-700 dark:text-amber-300" />
                  </div>
                </div>
                <span className="font-mono text-xs font-black tracking-widest text-amber-700 dark:text-amber-300 bg-amber-500/15 dark:bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                  PILLAR 03
                </span>
              </div>
              <div className="p-7 space-y-3">
                <h3 className="font-heading text-2xl font-black text-zinc-900 dark:text-white">EXCEL.</h3>
                <div className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5 flex-wrap">
                  <span className="inline-flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    <Flame className="w-3 h-3" /> Performance
                  </span>
                  <span>+</span>
                  <span className="inline-flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    <Trophy className="w-3 h-3" /> Mastery
                  </span>
                </div>
                <p className="text-xs text-zinc-700 dark:text-[#d1ded2] leading-relaxed font-medium">
                  The ultimate phase of high achievement. By withstanding adversity and systematically adapting, you surpass limitations, outperform competitors, and claim your place on the podium.
                </p>
              </div>
            </div>
            <div className="p-6 pt-4 border-t border-zinc-200 dark:border-white/10 mx-6 mb-2 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span>Phase 03</span>
              <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" /> Podium &amp; Longevity
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HYROX SIMULATION ARENA SHOWCASE */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="bg-gradient-to-br from-[#76C043]/15 via-white to-emerald-50/60 dark:from-[#09180d] dark:via-[#112a17] dark:to-[#07130a] border-2 border-[#76C043]/40 rounded-3xl p-8 md:p-14 shadow-2xl dark:shadow-[0_10px_50px_rgba(0,0,0,0.85)] transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-extrabold text-[#1b5e20] dark:text-[#8ff346] uppercase tracking-widest bg-[#76C043]/15 px-3 py-1 rounded-full border border-[#76C043]/30 inline-block">
                Dedicated Arena
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mt-3">
                HYROX <span className="text-[#1b5e20] dark:text-[#8ff346]">Simulation Lab</span>
              </h2>
              <p className="text-zinc-700 dark:text-[#d1ded2] text-sm md:text-base max-w-xl mt-2 font-medium leading-relaxed">
                Race simulation arena equipped with authentic Concept2 SkiErgs, RowErgs, weighted sled lanes, and broad jump grids.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/schedule"
                className="px-6 py-3 rounded-xl bg-[#76C043] text-black font-heading font-extrabold text-xs shadow-lg shadow-[#76C043]/25 hover:bg-[#8ff346] hover:shadow-[#76C043]/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Book Simulation Wave</span>
              </Link>
              <Link
                href="/your-sports"
                className="px-6 py-3 rounded-xl border border-zinc-300 dark:border-white/20 text-zinc-800 dark:text-white bg-white/60 dark:bg-white/5 font-heading font-bold text-xs hover:border-[#76C043]/50 transition-all shadow-sm flex items-center gap-2"
              >
                <Gauge className="w-4 h-4 text-[#76C043]" />
                <span>View 8 Stations</span>
              </Link>
            </div>
          </div>

          {/* 8 Stations Full Preview Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#76C043]" />
                The Complete 8-Station Sequence (Interspersed with 1,000m Runs)
              </span>
              <span className="text-[#1b5e20] dark:text-[#8ff346] font-bold">Total: 8km Run + 8 Stations</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {HYROX_STATIONS.map((st) => {
                const StationIcon = getStationIcon(st.iconName);
                return (
                  <div key={st.num} className="bg-white/90 dark:bg-[#0b180e] border border-zinc-200 dark:border-white/10 rounded-2xl p-3.5 shadow-sm hover:border-[#76C043]/50 hover:shadow-md transition-all group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-xs font-black text-[#1b5e20] dark:text-[#8ff346]">{st.num}</span>
                      <StationIcon className="w-3.5 h-3.5 text-[#76C043] group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="font-heading font-bold text-zinc-900 dark:text-white text-xs truncate mb-1">{st.name}</div>
                    <div className="text-[10px] text-zinc-500 dark:text-[#788e7a] font-mono leading-tight">{st.distance}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAST LINKS BANNER */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/your-sports" className="glass-card p-6 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#76C043]/10 border border-[#76C043]/20 group-hover:bg-[#76C043]/20 transition-colors">
                <Compass className="w-5 h-5 text-[#76C043]" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#76C043] uppercase">Explore Disciplines</div>
                <div className="font-heading font-bold text-white text-base group-hover:text-[#76C043] transition-colors">
                  Your Sports Tabbed Arena
                </div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#76C043] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link href="/we-offer" className="glass-card p-6 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#76C043]/10 border border-[#76C043]/20 group-hover:bg-[#76C043]/20 transition-colors">
                <Layers className="w-5 h-5 text-[#76C043]" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#76C043] uppercase">Coaching Tracks</div>
                <div className="font-heading font-bold text-white text-base group-hover:text-[#76C043] transition-colors">
                  We Offer (6 Pillars)
                </div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#76C043] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link href="/team" className="glass-card p-6 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#76C043]/10 border border-[#76C043]/20 group-hover:bg-[#76C043]/20 transition-colors">
                <Sparkles className="w-5 h-5 text-[#76C043]" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#76C043] uppercase">Coaches &amp; Clinics</div>
                <div className="font-heading font-bold text-white text-base group-hover:text-[#76C043] transition-colors">
                  Team &amp; Ecosystem
                </div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#76C043] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
