import React from 'react';
import type { Metadata } from 'next';
import { 
  Users, 
  Trophy, 
  CheckCircle2, 
  ShoppingBag,
  ArrowRight,
  Flame,
  Calendar,
  Award,
  Zap,
  Mountain,
  Tag,
  Sparkles
} from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { COMMUNITY_EVENTS_INITIATIVES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Community & Culture | MetaEndure Labs',
  description: 'Join the MetaEndure community: simulation race days, team competitions, and official athlete training camps.',
  openGraph: {
    title: 'Community & Culture | MetaEndure Labs',
    description: 'Join our community of endurance and HYROX athletes.',
    url: 'https://www.metaendurelabs.com/community',
  },
};

export default function CommunityPage() {
  const communityInitiatives = COMMUNITY_EVENTS_INITIATIVES;

  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20 py-4 sm:py-8 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* 1. COMMUNITY & COMPETITION (Slide 18.6) */}
      <section className="space-y-6 sm:space-y-8">
        <ScrollReveal animation="fade-down">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-500" />
              Community &amp; Culture
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-wider">
              COMMUNITY &amp; COMPETITION
            </h1>
            <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <div className="p-5 sm:p-8 md:p-12 rounded-3xl bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 space-y-6 shadow-sm">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-2xl font-heading font-extrabold text-zinc-900 dark:text-white">
                Build a strong HYROX community through:
              </h2>
              <p className="text-xs text-zinc-600 dark:text-[#bdcebe]">
                Fostering connection, healthy rivalry, and collective resilience across athletes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {communityInitiatives.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0a160d] border border-zinc-200 dark:border-white/10 flex items-center gap-3.5 shadow-sm hover:-translate-y-1 transition-transform">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. OFFICIAL ATHLETE APPAREL (Slide 19) */}
      <section className="space-y-6 sm:space-y-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-cyan-500" />
              Official Lab Kit
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider">
              OFFICIAL ATHLETE APPAREL
            </h2>
            <p className="text-sm font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {/* T-Shirt Mockup Visual */}
          <ScrollReveal animation="zoom-in" delay={100}>
            <div className="p-8 rounded-3xl bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 text-center space-y-4 shadow-sm flex flex-col items-center">
              <div className="w-64 h-64 rounded-2xl bg-zinc-900 border-2 border-emerald-500/40 p-6 flex flex-col items-center justify-center text-white relative shadow-2xl">
                <span className="text-[10px] font-mono tracking-widest text-[#76C043] uppercase">Front Chest</span>
                <div className="text-3xl font-display tracking-widest mt-2">M/E</div>
                <div className="text-[10px] font-mono tracking-widest text-zinc-400 mt-1 uppercase">METAENDURE LABS</div>
                <div className="mt-8 pt-4 border-t border-white/10 w-full text-center">
                  <div className="text-[11px] font-mono font-bold text-[#76C043] tracking-widest uppercase">
                    OUTLAST YOUR YESTERDAY
                  </div>
                </div>
              </div>
              <div className="text-xs font-mono text-zinc-500 dark:text-[#788e7a]">Technical Dry-Fit Athlete Edition</div>
            </div>
          </ScrollReveal>

          {/* Details */}
          <ScrollReveal animation="fade-left" delay={200}>
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest">
                  COMMUNITY GEAR
                </span>
                <h3 className="text-2xl font-heading font-black text-zinc-900 dark:text-white uppercase">
                  METAENDURE LABS OFFICIAL T-SHIRT
                </h3>
                <p className="text-xs text-zinc-600 dark:text-[#bdcebe] leading-relaxed">
                  Engineered for intense training sessions, race days, and everyday representation of the endurance mindset.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white dark:bg-[#0a160d] border border-zinc-200 dark:border-white/10 space-y-1">
                  <div className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">Front Design</div>
                  <p className="text-xs text-zinc-500 dark:text-[#788e7a]">
                    Minimalist METAENDURE LABS brand mark on the chest with performance badge.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-[#0a160d] border border-zinc-200 dark:border-white/10 space-y-1">
                  <div className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043]">Back Motto</div>
                  <p className="text-xs text-zinc-800 dark:text-white font-mono font-bold">
                    &quot;OUTLAST YOUR YESTERDAY&quot;
                  </p>
                  <p className="text-[11px] text-zinc-500 dark:text-[#788e7a]">
                    Bold vertical placement along the spine to inspire the athlete behind you.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
