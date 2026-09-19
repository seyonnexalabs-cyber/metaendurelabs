import React from 'react';
import Link from 'next/link';
import { 
  Trophy, 
  Flame, 
  Zap, 
  Compass, 
  Activity, 
  CheckCircle2, 
  ShieldCheck,
  Shield,
  TrendingUp,
  Award,
  Target,
  Stethoscope,
  ClipboardList,
  Play,
  RefreshCw,
  Sparkles,
  HeartPulse,
  UserCheck,
  BarChart2
} from 'lucide-react';

export default function AboutPage() {
  const milestones = [
    { year: '2015 Baseline', title: '84kg &bull; 10K in 1:08:36', desc: 'Self-trained runner with no structured coaching, fueling, or biomechanical support.' },
    { year: '2018 - 2022', title: 'The Scientific Turning Point', desc: 'Shifted from guesswork to data-backed systems. 10K dropped to 43:06; Half Marathon to 1:40:45.' },
    { year: '2023 - 2024', title: 'Podiums & Ultra Marathons', desc: 'Conquered 50K and 43K Ultra Marathons, BMF & BERGMAN Triathlons, and secured 5K podium.' },
    { year: '2025 Milestone', title: 'IRONMAN Goa 70.3 Finisher', desc: 'Completed 1.9km swim, 90km bike, and 21.1km run—culminating in the launch of METAENDURE LABS.' }
  ];

  const differentiators = [
    { num: '01', title: 'Real Experience', desc: 'Built from a decade-long authentic transformation journey, from 84kg novice to 70.3 finisher.' },
    { num: '02', title: 'Science-Backed', desc: 'Training decisions driven by physiological metrics, lactate testing, and data—not guesswork.' },
    { num: '03', title: 'Holistic System', desc: 'Fitness, nutrition, mindset, recovery, and daily habits seamlessly integrated into one blueprint.' },
    { num: '04', title: 'Sustainable Results', desc: 'Focus on compounding long-term performance and metabolic longevity rather than fleeting motivation.' },
    { num: '05', title: 'Accountability', desc: 'High-touch support systems and performance community designed to keep individuals progressing.' }
  ];

  return (
    <div className="space-y-24 py-12 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold text-[#76C043] uppercase tracking-widest bg-[#76C043]/10 px-3 py-1 rounded-full border border-[#76C043]/20">
          The Origin &amp; Philosophy
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-normal text-white uppercase tracking-wider">
          About <span className="text-[#76C043]">METAENDURE LABS</span>
        </h1>
        <p className="text-[#bdcebe] text-sm md:text-base leading-relaxed">
          From an 84kg recreational runner with zero structured guidance to an IRONMAN 70.3 finisher. Discover how scientific systems unlock human potential.
        </p>

        {/* Quick Nav Anchors */}
        <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
          {['founder', 'philosophy', 'vision-mission', 'pillars', 'system', 'different'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-xs font-mono text-[#788e7a] hover:text-[#76C043] border border-white/10 px-3 py-1 rounded-full bg-white/[0.02] hover:border-[#76C043]/40 transition-all capitalize"
            >
              #{item.replace('-', ' ')}
            </a>
          ))}
        </div>
      </div>

      {/* 1. FOUNDER JOURNEY (Slides 2, 3 & 4) */}
      <section id="founder" className="glass-card p-8 md:p-14 space-y-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#76C043]/30 shadow-2xl bg-[#08120b]">
              <img
                src="/assets/images/metaendure-logo-hero.png"
                alt="Sujai Sivan - Founder"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#101c13] border border-[#76C043] rounded-xl p-3 px-4 shadow-xl">
              <div className="font-mono text-xl font-bold text-[#76C043]">18kg+ Lost</div>
              <div className="text-[10px] text-[#788e7a] font-mono">From 84kg to 70.3 Finisher</div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-mono font-bold text-[#76C043] uppercase tracking-widest">
              Founder &bull; Sujai Sivan
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-white">
              A Decade-Long Transformation Journey
            </h2>
            <p className="text-[#bdcebe] text-sm leading-relaxed">
              "What began in 2015 as a self-trained runner weighing 84 kg, completing a 10K in 1:08:36 without structured coaching, nutrition, or a training plan, evolved into a decade-long journey of transformation. Through science-backed training, disciplined nutrition, systematic coaching, and relentless consistency, I transformed both physical and mental resilience."
            </p>

            {/* Milestones Track */}
            <div className="space-y-3 pt-2">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-3 text-xs">
                  <span className="font-mono font-bold text-[#76C043] shrink-0 w-32">{m.year}:</span>
                  <div>
                    <strong className="text-white font-heading">{m.title}</strong>
                    <span className="text-[#788e7a] ml-1">&bull; {m.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY METAENDURE LABS (Slide 4) */}
      <section id="philosophy" className="bg-gradient-to-br from-[#76C043]/15 via-white to-emerald-50/70 dark:from-[#09180d] dark:via-[#0f2817] dark:to-[#07130a] border-2 border-[#76C043]/40 dark:border-[#76C043]/50 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-xl dark:shadow-[0_8px_40px_rgba(118,192,67,0.18)] scroll-mt-24 transition-colors">
        <span className="text-xs font-mono text-[#1b5e20] dark:text-[#8ff346] uppercase tracking-widest font-extrabold bg-[#76C043]/15 px-3 py-1 rounded-full border border-[#76C043]/30 inline-block">
          The Core Realization
        </span>
        <h2 className="font-heading text-2xl md:text-4xl font-black text-zinc-900 dark:text-white">
          Why <span className="text-[#1b5e20] dark:text-[#8ff346]">METAENDURE LABS?</span>
        </h2>
        <p className="text-lg md:text-xl font-heading font-semibold text-[#1b5e20] dark:text-[#8ff346] italic max-w-2xl mx-auto">
          "Most people do not fail because they lack potential. They fail because they lack a proven system."
        </p>
        <p className="text-xs md:text-sm text-zinc-700 dark:text-[#d1ded2] leading-relaxed max-w-2xl mx-auto font-medium">
          Having experienced the difference that science-backed training, performance nutrition, mindset development, and accountability make, Sujai founded METAENDURE LABS to help everyday individuals, professionals, and athletes achieve extraordinary longevity and performance.
        </p>
      </section>

      {/* 3. VISION & MISSION (Slide 6) */}
      <section id="vision-mission" className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-mt-24">
        <div className="glass-card p-8 border-t-2 border-t-[#76C043]">
          <div className="w-10 h-10 rounded-lg bg-[#76C043]/15 flex items-center justify-center text-[#76C043] mb-4">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-heading text-xl font-bold text-white mb-2">Vision Statement</h3>
          <p className="text-xs text-[#bdcebe] leading-relaxed">
            Empower recreational athletes, professionals, and everyday individuals to achieve extraordinary levels of endurance, resilience, and performance. Through evidence-based training, mindset transformation, and continuous self-improvement, we aim to create a global community that embraces challenges, pushes beyond limits, and unlocks its fullest human potential.
          </p>
        </div>

        <div className="glass-card p-8 border-t-2 border-t-[#76C043]">
          <div className="w-10 h-10 rounded-lg bg-[#76C043]/15 flex items-center justify-center text-[#76C043] mb-4">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="font-heading text-xl font-bold text-white mb-2">Mission Statement</h3>
          <p className="text-xs text-[#bdcebe] leading-relaxed">
            Empower individuals to build enduring physical, mental, and professional resilience through structured endurance training, mindset development, and science-backed performance strategies. We inspire people to push beyond perceived limits, embrace challenges with confidence, and achieve sustainable excellence in sport, career, and life.
          </p>
        </div>
      </section>

      {/* 4. THE 3 CORE PILLARS (Slide 8) */}
      <section id="pillars" className="space-y-8 scroll-mt-24">
        <div className="text-center">
          <span className="text-xs font-mono font-bold text-[#76C043] uppercase tracking-widest">
            Slide 8 Blueprint
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-white mt-2">
            The Three Main Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 01 */}
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/40 via-zinc-950/80 to-black overflow-hidden shadow-2xl group hover:border-emerald-400/70 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] transition-all">
            <div className="h-28 bg-gradient-to-br from-emerald-500/25 via-emerald-600/15 to-transparent border-b border-emerald-500/20 p-5 flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-inner group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-emerald-400" />
              </div>
              <span className="font-mono text-xs font-black tracking-widest text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                PILLAR 01
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-heading text-lg font-bold text-white">ENDURE. = Endurance</h3>
              <p className="text-xs text-[#bdcebe] leading-relaxed">
                The foundational phase of resilience, grit, and survival. Capacity to withstand hardships, absorb physical and mental pressure, and maintain discipline without quitting.
              </p>
            </div>
          </div>

          {/* Pillar 02 */}
          <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/40 via-zinc-950/80 to-black overflow-hidden shadow-2xl group hover:border-cyan-400/70 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] transition-all">
            <div className="h-28 bg-gradient-to-br from-cyan-500/25 via-blue-600/15 to-transparent border-b border-cyan-500/20 p-5 flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-inner group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-cyan-400" />
              </div>
              <span className="font-mono text-xs font-black tracking-widest text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-500/30">
                PILLAR 02
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-heading text-lg font-bold text-white">EVOLVE. = Mindset + Science</h3>
              <p className="text-xs text-[#bdcebe] leading-relaxed">
                The intermediate phase of adaptation. Once you survive initial pressure, you must learn, shift your mindset, update training methodologies, and evolve capabilities.
              </p>
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-b from-amber-950/40 via-zinc-950/80 to-black overflow-hidden shadow-2xl group hover:border-amber-400/70 hover:shadow-[0_0_35px_rgba(245,158,11,0.25)] transition-all">
            <div className="h-28 bg-gradient-to-br from-amber-500/25 via-yellow-600/15 to-transparent border-b border-amber-500/20 p-5 flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shadow-inner group-hover:scale-110 transition-transform">
                <Trophy className="w-7 h-7 text-amber-400" />
              </div>
              <span className="font-mono text-xs font-black tracking-widest text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                PILLAR 03
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-heading text-lg font-bold text-white">EXCEL. = Performance</h3>
              <p className="text-xs text-[#bdcebe] leading-relaxed">
                The ultimate phase of high performance and achievement. Surpass limitations, outperform peers, and achieve absolute competitive mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 6-STEP PERFORMANCE SYSTEM (Slide 12) */}
      <section id="system" className="glass-card p-8 md:p-12 space-y-8 scroll-mt-24">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-mono font-bold text-[#76C043] uppercase tracking-widest bg-[#76C043]/10 px-3 py-1 rounded-full border border-[#76C043]/20">
            Systematic Methodology
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-white mt-3">
            Our 6-Step Performance Engine
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {[
            { step: '01', name: 'ASSESS', desc: 'Understand current fitness, habits, lifestyle, and goals.', icon: Stethoscope },
            { step: '02', name: 'PLAN', desc: 'Build a science-backed roadmap tailored to the individual.', icon: ClipboardList },
            { step: '03', name: 'EXECUTE', desc: 'Apply structured training, nutrition, and recovery.', icon: Play },
            { step: '04', name: 'ADAPT', desc: 'Review performance data and refine the plan continuously.', icon: RefreshCw },
            { step: '05', name: 'ACHIEVE', desc: 'Deliver measurable improvements and results.', icon: Trophy },
            { step: '06', name: 'EVOLVE', desc: 'Create lifelong habits that drive continuous growth.', icon: Sparkles },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="bg-[#08120b] border border-white/10 rounded-xl p-4 text-center group hover:border-[#76C043]/50 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#76C043]/10 border border-[#76C043]/20 flex items-center justify-center mx-auto mb-2 text-[#76C043] group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-mono text-xs font-bold text-[#76C043] mb-1">Step {s.step}</div>
                <div className="font-heading font-bold text-white text-sm mb-2">{s.name}</div>
                <p className="text-[11px] text-[#788e7a] leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. WHAT MAKES US DIFFERENT (Slide 13) */}
      <section id="different" className="space-y-8 scroll-mt-24">
        <div className="text-center">
          <span className="text-xs font-mono font-bold text-[#76C043] uppercase tracking-widest bg-[#76C043]/10 px-3 py-1 rounded-full border border-[#76C043]/20">
            Competitive Advantage
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-white mt-3">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { num: '01', title: 'Real Experience', desc: 'Built from a decade-long authentic transformation journey, from 84kg novice to 70.3 finisher.', icon: Award },
            { num: '02', title: 'Science-Backed', desc: 'Training decisions driven by physiological metrics, lactate testing, and data—not guesswork.', icon: Activity },
            { num: '03', title: 'Holistic System', desc: 'Fitness, nutrition, mindset, recovery, and daily habits seamlessly integrated into one blueprint.', icon: HeartPulse },
            { num: '04', title: 'Sustainable Results', desc: 'Focus on compounding long-term performance and metabolic longevity rather than fleeting motivation.', icon: TrendingUp },
            { num: '05', title: 'Accountability', desc: 'High-touch support systems and performance community designed to keep individuals progressing.', icon: UserCheck }
          ].map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.num} className="glass-card p-5 text-center group hover:border-[#76C043]/50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#76C043]/10 border border-[#76C043]/20 flex items-center justify-center mx-auto mb-3 text-[#76C043] group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs font-bold text-[#76C043] mb-1">Advantage {d.num}</div>
                <h4 className="font-heading font-bold text-white text-sm mb-2">{d.title}</h4>
                <p className="text-[11px] text-[#bdcebe] leading-relaxed">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
