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
  Sparkles
} from 'lucide-react';
import { HYROX_STATIONS } from '@/lib/constants';

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
                <span>Explore Philosophy</span>
              </Link>
            </div>

            {/* Micro Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              <div>
                <div className="font-mono text-2xl md:text-3xl font-bold text-white">10<span className="text-[#76C043]">+</span></div>
                <div className="text-[11px] text-[#788e7a] font-mono uppercase tracking-wider mt-0.5">Years Evolution</div>
              </div>
              <div>
                <div className="font-mono text-2xl md:text-3xl font-bold text-white">18<span className="text-[#76C043]">kg</span></div>
                <div className="text-[11px] text-[#788e7a] font-mono uppercase tracking-wider mt-0.5">Body Recomp</div>
              </div>
              <div>
                <div className="font-mono text-2xl md:text-3xl font-bold text-white">70.3</div>
                <div className="text-[11px] text-[#788e7a] font-mono uppercase tracking-wider mt-0.5">IRONMAN Finisher</div>
              </div>
              <div>
                <div className="font-mono text-2xl md:text-3xl font-bold text-white">8<span className="text-[#76C043]">-Station</span></div>
                <div className="text-[11px] text-[#788e7a] font-mono uppercase tracking-wider mt-0.5">HYROX Lab Arena</div>
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
          <div className="glass-card p-8 flex flex-col justify-between border-t-2 border-t-[#76C043]/50 group hover:border-[#76C043] transition-all">
            <div>
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.5)] mb-6 group-hover:scale-105 transition-transform">
                <img
                  src="/assets/images/pillar-endure.png"
                  alt="ENDURE Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">ENDURE.</h3>
              <div className="text-xs font-mono text-[#76C043] uppercase mb-4 tracking-wider">= Endurance &amp; Resilience</div>
              <p className="text-xs text-[#bdcebe] leading-relaxed">
                The foundational phase of resilience, grit, and survival. It represents the capacity to withstand hardships, absorb pressure, maintain discipline, and persist through setbacks without quitting.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-mono text-[#788e7a]">
              <span>Phase 01</span>
              <span className="text-white font-bold">Zero Quitting</span>
            </div>
          </div>

          <div className="glass-card p-8 flex flex-col justify-between border-t-2 border-t-[#76C043] group hover:shadow-[0_0_30px_rgba(118,192,67,0.25)] transition-all">
            <div>
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.5)] mb-6 group-hover:scale-105 transition-transform">
                <img
                  src="/assets/images/pillar-evolve.png"
                  alt="EVOLVE Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">EVOLVE.</h3>
              <div className="text-xs font-mono text-[#76C043] uppercase mb-4 tracking-wider">= Mindset + Science</div>
              <p className="text-xs text-[#bdcebe] leading-relaxed">
                The intermediate phase of adaptation and intelligent growth. Once you survive initial pressure, you must learn, shift your mindset, update your fueling and training, and transform capabilities.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-mono text-[#788e7a]">
              <span>Phase 02</span>
              <span className="text-[#76C043] font-bold">Data Calibration</span>
            </div>
          </div>

          <div className="glass-card p-8 flex flex-col justify-between border-t-2 border-t-[#76C043]/50 group hover:border-[#76C043] transition-all">
            <div>
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.5)] mb-6 group-hover:scale-105 transition-transform">
                <img
                  src="/assets/images/pillar-excel.png"
                  alt="EXCEL Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">EXCEL.</h3>
              <div className="text-xs font-mono text-[#76C043] uppercase mb-4 tracking-wider">= Performance &amp; Mastery</div>
              <p className="text-xs text-[#bdcebe] leading-relaxed">
                The ultimate phase of high achievement. By withstanding adversity and systematically adapting, you surpass limitations, outperform competitors, and claim your place on the podium.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-mono text-[#788e7a]">
              <span>Phase 03</span>
              <span className="text-white font-bold">Podium &amp; Longevity</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HYROX SIMULATION ARENA SHOWCASE */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="bg-gradient-to-r from-[#0d1e11] via-[#162f1c] to-[#0d1e11] border border-[#76C043]/30 rounded-3xl p-8 md:p-14 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-bold text-[#76C043] uppercase tracking-widest">
                Dedicated Arena
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mt-2">
                HYROX <span className="text-[#76C043]">Simulation Lab</span>
              </h2>
              <p className="text-[#bdcebe] text-sm max-w-xl mt-2">
                Race simulation arena equipped with authentic Concept2 SkiErgs, RowErgs, weighted sled lanes, and broad jump grids.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/schedule"
                className="px-6 py-3 rounded-xl bg-[#76C043] text-[#070e08] font-heading font-bold text-xs shadow-lg hover:bg-[#8ff346] transition-all"
              >
                Book Simulation Wave
              </Link>
              <Link
                href="/your-sports"
                className="px-6 py-3 rounded-xl border border-white/20 text-white font-heading font-semibold text-xs hover:bg-white/5 transition-all"
              >
                View 8 Stations
              </Link>
            </div>
          </div>

          {/* 8 Stations Compact Preview Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {HYROX_STATIONS.slice(0, 4).map((st) => (
              <div key={st.num} className="bg-[#08120b] border border-white/10 rounded-xl p-4">
                <div className="font-mono text-xs font-bold text-[#76C043] mb-1">{st.num}</div>
                <div className="font-heading font-bold text-white text-sm mb-1">{st.name}</div>
                <div className="text-[11px] text-[#788e7a] line-clamp-2">{st.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAST LINKS BANNER */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/your-sports" className="glass-card p-6 flex items-center justify-between group">
            <div>
              <div className="text-xs font-mono text-[#76C043] uppercase">Explore Disciplines</div>
              <div className="font-heading font-bold text-white text-base group-hover:text-[#76C043] transition-colors">
                Your Sports Tabbed Arena
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#76C043] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link href="/we-offer" className="glass-card p-6 flex items-center justify-between group">
            <div>
              <div className="text-xs font-mono text-[#76C043] uppercase">Coaching Tracks</div>
              <div className="font-heading font-bold text-white text-base group-hover:text-[#76C043] transition-colors">
                We Offer (6 Pillars)
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#76C043] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link href="/team" className="glass-card p-6 flex items-center justify-between group">
            <div>
              <div className="text-xs font-mono text-[#76C043] uppercase">Coaches &amp; Clinics</div>
              <div className="font-heading font-bold text-white text-base group-hover:text-[#76C043] transition-colors">
                Team &amp; Ecosystem
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#76C043] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
