import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { 
  Users, 
  Award, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck, 
  Stethoscope, 
  Brain, 
  Dumbbell, 
  HeartPulse, 
  Activity, 
  Crown, 
  Zap 
} from 'lucide-react';
import { COACHES, PARTNERS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Team & Strategic Partners | MetaEndure Labs',
  description: 'Meet our Master Coaches, performance neuroscience specialists, and medical rehabilitation partners.',
  openGraph: {
    title: 'Team & Strategic Partners | MetaEndure Labs',
    description: 'Meet our Master Coaches and performance neuroscience specialists.',
    url: 'https://www.metaendurelabs.com/team',
  },
};

export default function TeamPage() {
  const coachIconMap: Record<string, { icon: any, color: string }> = {
    'sunil-menon': { icon: Brain, color: 'text-indigo-600 bg-indigo-500/15 border-indigo-500/30' },
    'rashmi': { icon: HeartPulse, color: 'text-rose-600 bg-rose-500/15 border-rose-500/30' },
    'sucharita-uday-karelia': { icon: Dumbbell, color: 'text-amber-600 bg-amber-500/15 border-amber-500/30' },
    'marimuthu-sathasivam': { icon: Activity, color: 'text-cyan-600 bg-cyan-500/15 border-cyan-500/30' },
    'sujai-s': { icon: Crown, color: 'text-emerald-600 bg-emerald-500/15 border-emerald-500/30' },
    'mudit-kohli': { icon: Zap, color: 'text-teal-600 bg-teal-500/15 border-teal-500/30' },
  };

  const partnerIconMap: Record<string, { icon: any, color: string }> = {
    'menon-fitness-race-craft': { icon: Brain, color: 'text-indigo-600 bg-indigo-500/15' },
    'dr-physio': { icon: Stethoscope, color: 'text-rose-600 bg-rose-500/15' },
    'wefityoga': { icon: HeartPulse, color: 'text-teal-600 bg-teal-500/15' },
    'strength-training-suchitra': { icon: Dumbbell, color: 'text-amber-600 bg-amber-500/15' },
  };

  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20 py-4 sm:py-8 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* 1. PERFORMANCE COACHES (Slide 22) */}
      <section className="space-y-6 sm:space-y-8">
        <ScrollReveal animation="fade-down">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              Master Coaching Panel
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-wider">
              PERFORMANCE COACHES
            </h1>
            <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COACHES.map((coach, idx) => {
            const iconData = coachIconMap[coach.id] || { icon: Users, color: 'text-emerald-600 bg-emerald-500/15 border-emerald-500/30' };
            const Icon = iconData.icon;
            return (
              <ScrollReveal key={coach.id} animation="fade-up" delay={idx * 60}>
                <div className="p-6 rounded-2xl bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 space-y-4 hover:border-[#2e7d32] dark:hover:border-[#76C043] transition-all flex flex-col justify-between shadow-sm hover:-translate-y-1 duration-300 h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">COACH 0{idx + 1}</div>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${iconData.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl font-heading font-extrabold text-zinc-900 dark:text-white">{coach.name}</h2>
                      <p className="text-xs font-mono text-[#2e7d32] dark:text-[#76C043] font-semibold mt-0.5">{coach.role}</p>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-[#bdcebe] leading-relaxed pt-2 border-t border-zinc-100 dark:border-white/10">
                      {coach.bio}
                    </p>
                    {coach.specialties && coach.specialties.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {coach.specialties.map((s, sIdx) => (
                          <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-[#bdcebe] border border-zinc-200 dark:border-white/5">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="pt-3 border-t border-zinc-100 dark:border-white/10 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-[#788e7a]">
                    <span>Focus: {coach.experience}</span>
                    <span className="text-[#2e7d32] dark:text-[#76C043] font-bold">Available</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 2. STRATEGIC PARTNERS (Slide 23) */}
      <section className="space-y-6 sm:space-y-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-cyan-500" />
              Strategic Medical &amp; Training Partners
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider">
              STRATEGIC PARTNERS
            </h2>
            <p className="text-sm font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PARTNERS.map((partner, idx) => {
            const partnerData = partnerIconMap[partner.id] || { icon: Building2, color: 'text-emerald-600 bg-emerald-500/15' };
            const Icon = partnerData.icon;
            return (
              <ScrollReveal key={partner.id} animation="fade-up" delay={idx * 80}>
                <div className="p-6 rounded-2xl bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 space-y-4 hover:border-[#2e7d32] dark:hover:border-[#76C043] transition-all flex flex-col justify-between shadow-sm hover:-translate-y-1 duration-300 h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">PARTNER 0{idx + 1}</div>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${partnerData.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-extrabold text-zinc-900 dark:text-white">{partner.name}</h3>
                      <p className="text-xs font-mono text-[#2e7d32] dark:text-[#76C043] font-semibold mt-0.5">{partner.lead}</p>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-[#bdcebe] leading-relaxed pt-2 border-t border-zinc-100 dark:border-white/10">
                      {partner.description}
                    </p>
                    {partner.services && partner.services.length > 0 && (
                      <div className="space-y-1.5 pt-2">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold">Capabilities</div>
                        <ul className="text-xs text-zinc-600 dark:text-[#bdcebe] space-y-1 font-mono">
                          {partner.services.map((srv, sIdx) => (
                            <li key={sIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span>{srv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="pt-3 border-t border-zinc-100 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500 dark:text-[#788e7a]">Category: {partner.category}</span>
                    <span className="text-emerald-600 dark:text-[#76C043] font-bold">Active Partner</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
