import React from 'react';
import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { 
  Trophy, 
  Flame, 
  CheckCircle2, 
  HeartPulse, 
  Apple, 
  Users, 
  Gauge, 
  Activity, 
  Zap, 
  Scale, 
  Footprints, 
  Layers, 
  Dumbbell, 
  Award, 
  Thermometer, 
  ShieldCheck, 
  RefreshCw, 
  Sparkles, 
  Mountain,
  Bike
} from 'lucide-react';

import { DETAILED_SPORTS_DISCIPLINES, YOUR_SPORTS_HYROX_LABS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Your Sports | Marathon, Trail, Triathlon & HYROX | MetaEndure Labs',
  description: 'Evidence-based athletic preparation, specialized endurance programs, and official HYROX Performance Lab training.',
  openGraph: {
    title: 'Your Sports | MetaEndure Labs',
    description: 'Evidence-based athletic preparation for Marathon, Trail, Triathlon, and HYROX.',
    url: 'https://www.metaendurelabs.com/your-sports',
  },
};

export default function YourSportsPage() {
  const sportsDisciplines = DETAILED_SPORTS_DISCIPLINES;
  const hyroxLabs = YOUR_SPORTS_HYROX_LABS;

  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20 py-4 sm:py-8 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* 1. YOUR SPORTS (Slide 20) */}
      <section className="space-y-6 sm:space-y-8">
        <ScrollReveal animation="fade-down">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-2 shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>Athletic Disciplines</span>
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-wider">
              YOUR SPORTS
            </h1>
            <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sportsDisciplines.map((item, idx) => {
            const Icon = item.icon;
            const BadgeIcon = item.badgeIcon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                <div className={`p-6 rounded-3xl bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 space-y-4 border-t-4 ${item.accentColor} flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group h-full`}>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider ${item.tagColor}`}>
                        {item.num}
                      </span>
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ${item.badgeBg}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-heading font-extrabold text-zinc-900 dark:text-white">
                      {item.title}
                    </h2>
                    
                    {item.badgeText && BadgeIcon && (
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#09140c] border border-zinc-200 dark:border-white/10 text-xs font-mono text-zinc-800 dark:text-[#bdcebe] flex items-center gap-2">
                        <BadgeIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item.badgeText}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-[#788e7a] pt-2 border-t border-zinc-100 dark:border-white/5">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 2. HYROX PERFORMANCE PROGRAM (Slides 16, 17, 18) */}
      <section className="space-y-12">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-2 shadow-sm">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>HYROX Performance Engine</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider">
              METAENDURE LABS – HYROX PERFORMANCE PROGRAM
            </h2>
            <p className="text-sm font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hyroxLabs.map((lab, idx) => {
            const LabIcon = lab.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                <div className="p-6 rounded-3xl bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center gap-2 text-xs font-mono font-bold ${lab.tagClass}`}>
                        <span className={`px-2 py-0.5 rounded-md ${lab.badgeBg}`}>{lab.step}</span>
                        <span>{lab.title}</span>
                      </div>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ${lab.iconBg}`}>
                        <LabIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-zinc-900 dark:text-white">
                      {lab.subtitle}
                    </h3>

                    {lab.type === 'list' && lab.items && (
                      <ul className="text-xs text-zinc-700 dark:text-[#bdcebe] space-y-2 font-mono">
                        {lab.items.map((it, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {lab.type === 'stations' && lab.stations && (
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-800 dark:text-[#bdcebe]">
                        {lab.stations.map((st, sIdx) => {
                          const StationIcon = st.icon;
                          return (
                            <span key={sIdx} className={`p-2.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-zinc-200 dark:border-white/5 flex items-center gap-2 group-hover:border-amber-500/30 transition-colors ${st.span}`}>
                              <StationIcon className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                              <span className="truncate">{st.name}</span>
                            </span>
                          );
                        })}
                      </div>
                    )}

                    {lab.type === 'recovery' && lab.recoveryItems && (
                      <ul className="text-xs text-zinc-700 dark:text-[#bdcebe] space-y-2 font-mono">
                        {lab.recoveryItems.map((rc, rIdx) => {
                          const RcIcon = rc.icon;
                          return (
                            <li key={rIdx} className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                              <RcIcon className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                              <span>{rc.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    {lab.type === 'nutrition' && lab.nutritionItems && (
                      <ul className="text-xs text-zinc-700 dark:text-[#bdcebe] space-y-2 font-mono">
                        {lab.nutritionItems.map((nt, nIdx) => {
                          const NtIcon = nt.icon;
                          return (
                            <li key={nIdx} className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                              <NtIcon className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span>{nt.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    {lab.type === 'community' && lab.communityItems && (
                      <ul className="text-xs text-zinc-700 dark:text-[#bdcebe] space-y-2 font-mono">
                        {lab.communityItems.map((cm, cIdx) => {
                          const CmIcon = cm.icon;
                          return (
                            <li key={cIdx} className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                              <CmIcon className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                              <span>{cm.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  {lab.footnote && (
                    <div className="pt-3 border-t border-zinc-100 dark:border-white/10 text-[11px] text-zinc-500 dark:text-[#788e7a] space-y-1 font-mono">
                      {lab.footnote.map((fn, fIdx) => (
                        <p key={fIdx}>{fn}</p>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
