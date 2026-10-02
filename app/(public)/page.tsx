import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ArrowRight, 
  Sparkles,
  Flame,
  Radio,
  Layers,
  CheckCircle2,
  Lightbulb,
  Activity,
  HeartPulse,
  Award,
  ChevronRight,
  Target,
  Compass
} from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { 
  UNIFIED_PILLARS,
  KEY_DIFFERENTIATORS,
  HOMEPAGE_SYSTEM_STEPS
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'MetaEndure Labs | Outlast Your Yesterday',
  description: 'Evidence-based athletic preparation, mindset development, and sports science architecture for Marathon, Trail, Triathlon, and HYROX.',
  openGraph: {
    title: 'MetaEndure Labs | Outlast Your Yesterday',
    description: 'Evidence-based athletic preparation, mindset development, and sports science architecture.',
    url: 'https://www.metaendurelabs.com',
    siteName: 'MetaEndure Labs',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="space-y-14 sm:space-y-20 md:space-y-24 pb-14 overflow-hidden">
      {/* 1. HERO SECTION (Slide 1 & Slide 8) */}
      <section className="relative px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto pt-6 sm:pt-10 md:pt-14">
        {/* Dynamic Background Glow & Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-[#76C043]/5 to-transparent rounded-3xl -z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] bg-gradient-to-b from-emerald-500/20 via-[#76C043]/10 to-transparent rounded-[100%] blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-10 left-6 sm:left-14 w-72 sm:w-[26rem] h-72 sm:h-[26rem] bg-emerald-500/15 dark:bg-[#76C043]/20 rounded-full blur-[80px] pointer-events-none -z-10 animate-pulse" />
        <div className="absolute top-16 right-6 sm:right-14 w-80 sm:w-[28rem] h-80 sm:h-[28rem] bg-indigo-500/10 dark:bg-emerald-600/20 rounded-full blur-[90px] pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <ScrollReveal animation="fade-down" delay={80}>
              <div className="inline-flex items-center gap-2.5 bg-emerald-500/15 dark:bg-[#76C043]/15 border border-emerald-500/30 dark:border-[#76C043]/40 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-emerald-800 dark:text-[#76C043] tracking-widest uppercase shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-[#76C043] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-[#76C043]"></span>
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                <span>Outlast Your Yesterday</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={180}>
              <div className="space-y-2">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-zinc-900 dark:text-white uppercase tracking-wider leading-[1.04]">
                  Endure. <span className="text-[#2e7d32] dark:text-[#76C043] drop-shadow-[0_0_35px_rgba(118,192,67,0.4)]">Evolve.</span> Excel.
                </h1>
                <p className="text-sm sm:text-base font-mono font-semibold text-[#2e7d32] dark:text-[#76C043] tracking-widest uppercase">
                  METAENDURE LABS &bull; ATHLETIC PERFORMANCE ARCHITECTURE
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={260}>
              <div className="space-y-4 max-w-2xl">
                <p className="text-base sm:text-lg text-zinc-800 dark:text-[#d1e0d2] leading-relaxed font-medium">
                  Most people do not fail because they lack potential. They fail because they lack a proven system.
                </p>

                <p className="text-sm sm:text-base text-zinc-600 dark:text-[#a8bda9] leading-relaxed">
                  Having personally experienced the difference that science-backed training, performance nutrition, mindset development, and accountability can make, Sujai founded <strong className="text-zinc-900 dark:text-white font-semibold">METAENDURE LABS</strong> to help recreational athletes, professionals, and everyday individuals build resilience and achieve lasting excellence in sport, work, and life.
                </p>

                {/* Founder Philosophy Quote Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-500/20 dark:border-[#76C043]/25 backdrop-blur-sm space-y-2">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2e7d32] dark:text-[#76C043] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Founder Philosophy &bull; Sujai Sivan
                  </div>
                  <blockquote className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 italic leading-relaxed">
                    &ldquo;My journey proves that extraordinary results are not reserved for elite athletes. With the right mindset, structure, and consistency, anyone can transform their performance and redefine their limits.&rdquo;
                  </blockquote>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={340}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/we-offer"
                  className="px-6 sm:px-8 py-3.5 rounded-full font-heading font-bold text-sm text-white dark:text-black bg-[#2e7d32] dark:bg-[#76C043] hover:bg-[#256628] dark:hover:bg-[#8ff346] shadow-md dark:shadow-[0_0_25px_rgba(118,192,67,0.35)] transition-all flex items-center gap-2 group hover:-translate-y-0.5"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="px-6 sm:px-8 py-3.5 rounded-full font-heading font-semibold text-sm text-zinc-800 dark:text-white border border-zinc-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5"
                >
                  Our Philosophy
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={420}>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-zinc-200 dark:border-white/10">
                <div className="p-3 rounded-2xl bg-white/70 dark:bg-black/40 border border-zinc-200/80 dark:border-white/10">
                  <div className="text-xl sm:text-2xl font-mono font-black text-[#2e7d32] dark:text-[#76C043]">
                    <AnimatedCounter end={3} duration={1.2} />
                  </div>
                  <div className="text-[11px] font-mono text-zinc-600 dark:text-[#788e7a] uppercase tracking-wider font-semibold">Evolution Phases</div>
                  <div className="text-[10px] font-mono text-zinc-400">Endure &bull; Evolve &bull; Excel</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/70 dark:bg-black/40 border border-zinc-200/80 dark:border-white/10">
                  <div className="text-xl sm:text-2xl font-mono font-black text-indigo-600 dark:text-indigo-400">
                    <AnimatedCounter end={4} duration={1.5} />
                  </div>
                  <div className="text-[11px] font-mono text-zinc-600 dark:text-[#788e7a] uppercase tracking-wider font-semibold">Framework Pillars</div>
                  <div className="text-[10px] font-mono text-zinc-400">E &bull; M &bull; S &bull; P</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/70 dark:bg-black/40 border border-zinc-200/80 dark:border-white/10">
                  <div className="text-xl sm:text-2xl font-mono font-black text-amber-600 dark:text-amber-400">
                    <AnimatedCounter end={5} duration={1.8} />
                  </div>
                  <div className="text-[11px] font-mono text-zinc-600 dark:text-[#788e7a] uppercase tracking-wider font-semibold">Differentiators</div>
                  <div className="text-[10px] font-mono text-zinc-400">Science + Mindset</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 relative">
            <ScrollReveal animation="zoom-in" delay={220}>
              <div className="relative mx-auto max-w-sm sm:max-w-md p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#071009]/80 border border-emerald-500/30 dark:border-[#76C043]/30 backdrop-blur-xl shadow-xl dark:shadow-[0_0_50px_rgba(118,192,67,0.15)] group hover:border-[#2e7d32] dark:hover:border-[#76C043] transition-all duration-500">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-white/10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#2e7d32] dark:text-[#76C043]">
                    METAENDURE LABS CREST
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[10px] font-mono text-zinc-400">FOUNDED 2026</span>
                  </div>
                </div>

                <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/20 dark:bg-[#76C043]/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-emerald-50 to-white dark:from-[#0d1e12] dark:to-black border-2 border-[#2e7d32] dark:border-[#76C043] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <img
                        src="/assets/images/metaendure-crest.png"
                        alt="Sujai Sivan &bull; Founder of MetaEndure Labs"
                        className="w-48 h-48 object-contain drop-shadow-[0_0_25px_rgba(46,125,50,0.3)] dark:drop-shadow-[0_0_35px_rgba(118,192,67,0.4)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="font-heading font-extrabold text-xl text-zinc-900 dark:text-white">
                      METAENDURE LABS
                    </div>
                    <p className="text-xs font-mono text-[#2e7d32] dark:text-[#76C043] tracking-widest">
                      OUTLAST YOUR YESTERDAY
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 dark:border-white/10 pb-4">
              <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5 w-fit">
                <Target className="w-3.5 h-3.5 text-rose-500" />
                Strategic Direction &bull; Vision &amp; Mission
              </span>
              <span className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">Outlast Your Yesterday</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-2xl bg-zinc-50/80 dark:bg-[#0a160d] border border-emerald-500/30 dark:border-[#76C043]/30 shadow-sm hover:border-[#2e7d32] dark:hover:border-[#76C043] transition-all group flex flex-col justify-between">
                {/* Header Band */}
                <div className="px-6 py-4 bg-gradient-to-r from-emerald-500/15 via-emerald-500/10 to-transparent dark:from-[#76C043]/20 dark:via-[#76C043]/10 border-b border-emerald-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#2e7d32] dark:bg-[#76C043] text-white dark:text-black flex items-center justify-center shadow-md">
                      <Compass className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-[#2e7d32] dark:text-[#76C043] tracking-wide">OUR VISION</h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-700 dark:text-[#76C043] bg-emerald-500/10 px-2 py-0.5 rounded-md">Horizon</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-zinc-700 dark:text-[#bdcebe] leading-relaxed">
                    To build a globally respected human endurance and performance ecosystem that inspires and equips individuals to transcend perceived limits, master physical and mental resilience, and achieve enduring excellence in every dimension of life.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl bg-zinc-50/80 dark:bg-[#0a160d] border border-indigo-500/30 dark:border-indigo-500/30 shadow-sm hover:border-indigo-500 transition-all group flex flex-col justify-between">
                {/* Header Band */}
                <div className="px-6 py-4 bg-gradient-to-r from-indigo-500/15 via-indigo-500/10 to-transparent dark:from-indigo-500/25 dark:via-indigo-500/10 border-b border-indigo-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center shadow-md">
                      <Target className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-indigo-600 dark:text-indigo-400 tracking-wide">OUR MISSION</h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-md">Action</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-zinc-700 dark:text-[#bdcebe] leading-relaxed">
                    Empower individuals to build enduring physical, mental, and professional resilience through structured endurance training, mindset development, and science-backed performance strategies. We inspire people to push beyond perceived limits, embrace challenges with confidence, and achieve sustainable excellence in sport, career, and life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. METAENDURE LABS FRAMEWORK (Slide 9) */}
      <section className="px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto space-y-6 sm:space-y-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 dark:bg-[#76C043]/15 border border-emerald-500/25 dark:border-[#76C043]/30 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043]">
              <Radio className="w-3.5 h-3.5" />
              <span>THE PERFORMANCE EQUATION: E(M+S)P &equiv; ENDURE &bull; EVOLVE &bull; EXCEL</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white">
              METAENDURE LABS FRAMEWORK
            </h2>
            <p className="text-zinc-600 dark:text-[#bdcebe] text-xs sm:text-sm">
              <strong className="text-zinc-900 dark:text-white font-semibold">Endurance (E)</strong> builds grit &bull; <strong className="text-zinc-900 dark:text-white font-semibold">Mindset &amp; Science (M+S)</strong> drive evolution &bull; <strong className="text-zinc-900 dark:text-white font-semibold">Performance (P)</strong> unlocks excellence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UNIFIED_PILLARS.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            return (
              <ScrollReveal key={pillar.id} animation="fade-up" delay={(idx + 1) * 120}>
                <div className={`group overflow-hidden rounded-3xl bg-white dark:bg-[#0a160d] border ${pillar.borderColor} transition-all duration-300 flex flex-col justify-between shadow-sm dark:shadow-none hover:-translate-y-1.5 h-full`}>
                  {/* Colored Card Header */}
                  <div className={`px-6 py-4 bg-gradient-to-r ${pillar.headerGradient} border-b flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <span className={`text-2xl font-mono font-black ${pillar.accentColor}`}>{pillar.code}</span>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold">{pillar.subtitle}</span>
                        <span className="text-base font-heading font-black text-zinc-900 dark:text-white tracking-wide">{pillar.title}</span>
                      </div>
                    </div>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${pillar.badgeColor}`}>
                      <PillarIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex flex-col justify-between flex-1">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-zinc-100 dark:bg-white/5 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/10">
                        <span>Engine:</span>
                        <span className={pillar.accentColor}>{pillar.engine}</span>
                      </div>

                      <p className="text-xs text-zinc-600 dark:text-[#bdcebe] leading-relaxed">
                        {pillar.desc}
                      </p>

                      <ul className="text-xs text-zinc-600 dark:text-[#788e7a] space-y-2 pt-3 border-t border-zinc-100 dark:border-white/10 font-mono">
                        {pillar.coreItems.map((it, itemIdx) => {
                          const ItemIcon = it.icon;
                          return (
                            <li key={itemIdx} className="flex items-center gap-2">
                              <ItemIcon className={`w-3.5 h-3.5 shrink-0 ${pillar.accentColor}`} />
                              <span>{it.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className={`rounded-xl p-3.5 border ${pillar.quoteBg} transition-all mt-4`}>
                      <div className={`text-[10px] font-mono uppercase tracking-wider font-bold flex items-center gap-1.5 ${pillar.accentColor}`}>
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                        Brand Axiom
                      </div>
                      <p className="text-xs text-zinc-800 dark:text-white italic mt-1 leading-relaxed">{pillar.quote}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 3. OUR PERFORMANCE SYSTEM (Slide 12) */}
      <section className="px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto space-y-6 sm:space-y-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-[#76C043]" />
              Performance Architecture
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white">
              OUR PERFORMANCE SYSTEM
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#2e7d32] dark:text-[#76C043] tracking-widest uppercase">
              Endure &rarr; Evolve &rarr; Excel
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {HOMEPAGE_SYSTEM_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                <div className={`p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0a160d] border border-zinc-200 dark:border-white/10 space-y-3 border-l-4 ${item.border} shadow-sm hover:-translate-y-1.5 transition-all duration-300`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500">{item.step}</span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-zinc-900 dark:text-white">{item.title}</h3>
                  <p className="text-xs text-zinc-600 dark:text-[#bdcebe] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 4. WHAT MAKES US DIFFERENT (Slide 13) */}
      <section className="px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto space-y-6 sm:space-y-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#76C043]" />
              Key Differentiators
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white">
              WHAT MAKES US DIFFERENT
            </h2>
            <p className="text-zinc-600 dark:text-[#bdcebe] text-xs sm:text-sm">
              Five principles that separate METAENDURE LABS from generic coaching.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {KEY_DIFFERENTIATORS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80} className={idx === 4 ? 'sm:col-span-2 lg:col-span-2' : ''}>
                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#09140c] border border-zinc-200 dark:border-white/10 space-y-3 shadow-sm hover:-translate-y-1.5 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-xs font-bold text-zinc-500">{item.num}</div>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-zinc-900 dark:text-white">{item.title}</h3>
                  <p className="text-xs text-zinc-600 dark:text-[#bdcebe] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 5. OUTLAST YOUR YESTERDAY / CTA (Slide 15) */}
      <section className="px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
        <ScrollReveal animation="zoom-in" duration={700}>
          <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 dark:border-[#76C043]/30 bg-emerald-50/60 dark:bg-gradient-to-br dark:from-[#0c1c11] dark:via-[#08130a] dark:to-black p-6 sm:p-10 md:p-14 text-center space-y-5 shadow-md dark:shadow-2xl transition-colors">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/15 dark:bg-[#76C043]/15 px-3.5 py-1.5 rounded-full border border-emerald-500/30 dark:border-[#76C043]/30 inline-flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-500" />
              Outlast Your Yesterday
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
              ARE YOU READY TO TRANSFORM?
            </h2>

            <p className="text-sm sm:text-base text-zinc-700 dark:text-[#bdcebe] max-w-2xl mx-auto leading-relaxed">
              METAENDURE LABS exists to help individuals unlock their highest potential through endurance, mindset, science, and performance.
            </p>

            <div className="p-4 max-w-xl mx-auto rounded-2xl bg-white dark:bg-black/50 border border-zinc-200 dark:border-white/10 space-y-1 shadow-sm">
              <p className="text-xs sm:text-sm text-zinc-900 dark:text-white italic">
                &quot;Extraordinary results come from extraordinary consistency.&quot;
              </p>
              <div className="text-[11px] font-mono text-[#2e7d32] dark:text-[#76C043] font-semibold">
                Sujai Sivan &bull; Founder, METAENDURE LABS
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2 text-xs font-mono">
              <a
                href="mailto:sujaisivan@metaendurelabs.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-white dark:text-black bg-[#2e7d32] dark:bg-[#76C043] hover:bg-[#256628] dark:hover:bg-[#8ff346] shadow-sm dark:shadow-lg dark:shadow-[#76C043]/30 transition-all hover:-translate-y-0.5"
              >
                <span>sujaisivan@metaendurelabs.com</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-zinc-800 dark:text-white border border-zinc-300 dark:border-white/20 bg-white dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 transition-all shadow-sm hover:-translate-y-0.5"
              >
                <span>Connect with METAENDURE LABS</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
