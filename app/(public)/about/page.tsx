import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Trophy, 
  Flame, 
  Activity, 
  ArrowRight,
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Brain, 
  Microscope,
  Compass,
  Footprints,
  Medal,
  Mountain,
  Bike,
  Crown,
  Sparkles,
  Zap,
  Target,
  Rocket,
  Layers,
  HeartPulse,
  Scale
} from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { THREE_PILLARS, FOUNDER_ATHLETIC_MILESTONES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About | Brand Story & Pillars | MetaEndure Labs',
  description: 'The story, purpose, and philosophy of MetaEndure Labs: Endure, Evolve, Excel.',
  openGraph: {
    title: 'About | MetaEndure Labs',
    description: 'The story, purpose, and philosophy of MetaEndure Labs: Endure, Evolve, Excel.',
    url: 'https://www.metaendurelabs.com/about',
  },
};

export default function AboutPage() {
  const milestoneAchievements = FOUNDER_ATHLETIC_MILESTONES;

  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20 py-4 sm:py-8 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* 1. FOUNDER PROFILE (Slide 2) */}
      <ScrollReveal animation="fade-up">
        <section className="glass-card p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8 bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-2xl rounded-3xl">
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/10 pb-4">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Founder &amp; Leadership
            </span>
            <span className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-emerald-500/20 dark:border-[#76C043]/30 shadow-md dark:shadow-2xl bg-slate-50 dark:bg-[#08120b] p-6 flex flex-col items-center justify-center min-h-[320px]">
                <img
                  src="/assets/images/metaendure-crest.png"
                  alt="Sujai Sivan &bull; Founder of MetaEndure Labs"
                  className="w-48 h-48 object-contain drop-shadow-[0_0_25px_rgba(46,125,50,0.3)] dark:drop-shadow-[0_0_35px_rgba(118,192,67,0.4)]"
                />
                <div className="mt-4 text-center">
                  <div className="font-heading font-black text-xl text-zinc-900 dark:text-white">SUJAI SIVAN</div>
                  <div className="text-xs font-mono text-[#2e7d32] dark:text-[#76C043]">Endurance Athlete &bull; IRONMAN 70.3 Finisher</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-zinc-500 dark:text-[#788e7a] uppercase tracking-wider">LEADERSHIP</span>
                <h1 className="text-3xl sm:text-4xl font-heading font-black text-zinc-900 dark:text-white uppercase">
                  SUJAI SIVAN
                </h1>
                <p className="text-sm font-mono font-semibold text-[#2e7d32] dark:text-[#76C043]">
                  Founder, METAENDURE LABS | Pro Athlete Endurance Cyclist &amp; Triathlon
                </p>
              </div>

              <p className="text-sm text-zinc-600 dark:text-[#bdcebe] leading-relaxed">
                An endurance athlete, entrepreneur, and leadership thinker who turned a personal journey of overcoming obesity and adversity into a philosophy of endurance, growth, and excellence.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-zinc-200 dark:border-white/10 space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-[#788e7a] font-bold">Personal Transformation</div>
                <p className="text-xs text-zinc-800 dark:text-zinc-200">
                  Transformed from an uncoached <strong>84 kg</strong> runner to an <strong>IRONMAN 70.3 Finisher</strong>, reducing body weight by over 18 kg across a decade-long endurance journey.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-zinc-200 dark:border-white/10 space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-[#788e7a] font-bold">Vision</div>
                <p className="text-xs text-zinc-800 dark:text-zinc-200">
                  Building a high-performance ecosystem where individuals develop the mindset, habits, and physical capacity to excel in both sport and life.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 2. TURNING POINT (Slide 3) */}
      <ScrollReveal animation="fade-up">
        <section className="glass-card p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8 bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-2xl rounded-3xl">
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/10 pb-4">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              The Turning Point
            </span>
            <span className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-zinc-900 dark:text-white uppercase">
                FROM STRUGGLE TO STRENGTH
              </h2>
              <p className="text-sm text-zinc-600 dark:text-[#bdcebe] leading-relaxed">
                Began in 2015 as a self-trained runner weighing 84 kg completing a 10K without structured coaching or nutrition. Discovered that structured physical endurance builds mental resilience, shedding over 18 kg and achieving peak performance across endurance sports.
              </p>
              <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-black/50 border border-emerald-500/20 dark:border-[#76C043]/20 space-y-2">
                <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-wider">
                  The Realization
                </span>
                <p className="text-xs text-zinc-800 dark:text-zinc-200 italic leading-relaxed">
                  &quot;Endurance isn&apos;t just about running. It&apos;s a framework for life. If you can endure discomfort, you can evolve through challenge, and ultimately excel in anything.&quot;
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0a160d] border border-zinc-200 dark:border-white/10 text-center space-y-2">
                <div className="text-3xl font-mono font-black text-rose-500">
                  <AnimatedCounter end={84} duration={2} suffix=" kg" />
                </div>
                <div className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">Starting Point</div>
                <p className="text-[11px] text-zinc-600 dark:text-[#bdcebe]">Transformed body weight by over 18+ kg</p>
              </div>
              <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-[#0a160d] border border-emerald-500/30 dark:border-[#76C043]/30 text-center space-y-2">
                <div className="text-3xl font-mono font-black text-[#2e7d32] dark:text-[#76C043]">
                  <AnimatedCounter end={70.3} decimals={1} duration={2} suffix=" mi" />
                </div>
                <div className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">IRONMAN 70.3 Finisher</div>
                <p className="text-[11px] font-mono text-zinc-600 dark:text-[#bdcebe]">
                  1.2 mi Swim + 56 mi Bike + 13.1 mi Run
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 3. ATHLETIC MILESTONES (Slide 4) */}
      <ScrollReveal animation="fade-up">
        <section className="glass-card p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8 bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-2xl rounded-3xl">
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/10 pb-4">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              Athletic Milestones
            </span>
            <span className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-zinc-900 dark:text-white uppercase">
              PROVEN ON THE COURSE
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#bdcebe]">
              Every method taught at METAENDURE LABS was tested, measured, and earned in competition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestoneAchievements.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-[#0a160d] border border-zinc-200 dark:border-white/10 flex items-center gap-4 shadow-sm hover:-translate-y-1 transition-transform">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${m.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">{m.label}</div>
                    <div className="text-sm font-heading font-bold text-zinc-900 dark:text-white">{m.stat}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* 4. WHY METAENDURE LABS WAS BORN (Slide 5) */}
      <ScrollReveal animation="fade-up">
        <section className="glass-card p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8 bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-2xl rounded-3xl">
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/10 pb-4">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Rocket className="w-3.5 h-3.5 text-cyan-500" />
              Genesis &bull; Why We Were Born
            </span>
            <span className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-zinc-900 dark:text-white uppercase">
              THE VISION BEHIND THE LAB
            </h2>
            <p className="text-sm text-zinc-600 dark:text-[#bdcebe] leading-relaxed">
              Most fitness programs focus only on the physical — workouts, reps, and diets. But true transformation happens when physical endurance is connected to mental toughness and purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0a160d] border border-zinc-200 dark:border-white/10 space-y-2 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-[#76C043] flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-zinc-900 dark:text-white">A Bridge</h3>
              <p className="text-xs text-zinc-600 dark:text-[#bdcebe] leading-relaxed">
                Between ordinary fitness and extraordinary potential.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0a160d] border border-zinc-200 dark:border-white/10 space-y-2 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Brain className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-zinc-900 dark:text-white">A Platform</h3>
              <p className="text-xs text-zinc-600 dark:text-[#bdcebe] leading-relaxed">
                Where endurance training becomes a tool for personal and professional growth.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0a160d] border border-zinc-200 dark:border-white/10 space-y-2 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Flame className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-zinc-900 dark:text-white">A Community</h3>
              <p className="text-xs text-zinc-600 dark:text-[#bdcebe] leading-relaxed">
                Of relentless individuals who refuse to settle.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 5. MISSION & VISION (Slide 6) */}
      <ScrollReveal animation="fade-up">
        <section className="glass-card p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8 bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-2xl rounded-3xl">
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/10 pb-4">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-rose-500" />
              Vision &amp; Mission
            </span>
            <span className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0a160d] border border-emerald-500/30 dark:border-[#76C043]/30 space-y-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-[#76C043] flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#2e7d32] dark:text-[#76C043]">VISION</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-[#bdcebe] leading-relaxed">
                To build a globally respected human endurance and performance ecosystem that inspires and equips individuals to transcend perceived limits, master physical and mental resilience, and achieve enduring excellence in every dimension of life.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#0a160d] border border-indigo-500/30 dark:border-indigo-500/30 space-y-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-indigo-600 dark:text-indigo-400">MISSION</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-[#bdcebe] leading-relaxed">
                Empower individuals to build enduring physical, mental, and professional resilience through structured endurance training, mindset development, and science-backed performance strategies. We inspire people to push beyond perceived limits, embrace challenges with confidence, and achieve sustainable excellence in sport, career, and life.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 6. PILLARS (Slide 7) */}
      <ScrollReveal animation="fade-up">
        <section className="glass-card p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8 bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-2xl rounded-3xl">
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/10 pb-4">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-500" />
              The Three Pillars
            </span>
            <span className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {THREE_PILLARS.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div 
                  key={pillar.id} 
                  className={`group p-6 rounded-2xl bg-white dark:bg-[#0a160d] border ${pillar.borderColor} ${pillar.borderHover} space-y-3 shadow-sm hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-bold uppercase tracking-widest ${pillar.accentColor}`}>
                        PILLAR {pillar.id}
                      </span>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${pillar.badgeColor}`}>
                        <PillarIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-heading font-extrabold text-zinc-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-mono text-zinc-500 dark:text-[#788e7a] font-medium">
                      {pillar.phase}
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-[#bdcebe] leading-relaxed pt-2 border-t border-zinc-100 dark:border-white/10">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* 7. BRAND MEANING (Slide 8) */}
      <ScrollReveal animation="fade-up">
        <section className="glass-card p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8 bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-2xl rounded-3xl">
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/10 pb-4">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Brand Nomenclature &bull; Deconstructed
            </span>
            <span className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</span>
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-zinc-900 dark:text-white uppercase tracking-wider">
              METAENDURE LABS
            </h2>
            <div className="text-xs font-mono text-[#2e7d32] dark:text-[#76C043] tracking-widest uppercase">
              DECONSTRUCTING THE NAME
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0a160d] border border-indigo-500/30 dark:border-indigo-500/30 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">PART 01</span>
                <Brain className="w-5 h-5 text-indigo-500" />
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-indigo-600 dark:text-indigo-400">META</h3>
              <div className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">Beyond &bull; Higher Level &bull; Transformation</div>
              <p className="text-xs text-zinc-600 dark:text-[#bdcebe] leading-relaxed pt-2">
                Going beyond conventional limits. It represents self-awareness, meta-learning, thinking beyond current capabilities, and evolving into a higher version of yourself.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#0a160d] border border-emerald-500/30 dark:border-[#76C043]/30 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043]">PART 02</span>
                <HeartPulse className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-[#2e7d32] dark:text-[#76C043]">ENDURE</h3>
              <div className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">Resilience &bull; Stamina &bull; Longevity</div>
              <p className="text-xs text-zinc-600 dark:text-[#bdcebe] leading-relaxed pt-2">
                The core of athletic and mental performance. It stands for the grit to withstand pressure, physical and mental stamina, consistency, and the discipline to stay the course.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#0a160d] border border-cyan-500/30 dark:border-cyan-500/30 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">PART 03</span>
                <Microscope className="w-5 h-5 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-cyan-600 dark:text-cyan-400">LABS</h3>
              <div className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">Science &bull; Experimentation &bull; Optimization</div>
              <p className="text-xs text-zinc-600 dark:text-[#bdcebe] leading-relaxed pt-2">
                Reflects an evidence-based and structured approach. We test, measure, optimize, and innovate through training methodologies, sports science, and performance tracking.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-50/70 dark:bg-black/50 border border-emerald-500/20 dark:border-[#76C043]/30 text-center space-y-2 max-w-2xl mx-auto shadow-sm">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-wider">
              Together
            </span>
            <p className="text-sm sm:text-base font-heading font-bold text-zinc-900 dark:text-white">
              A place where science meets endurance to help individuals transcend their limits.
            </p>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
