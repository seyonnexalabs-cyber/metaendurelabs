import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { 
  Users, 
  Target, 
  Sparkles, 
  Award, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { 
  AUDIENCE_GROUPS, 
  OFFERING_CATEGORIES, 
  CORE_SERVICE_PILLARS 
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'We Offer | Programs & Audience Cohorts | MetaEndure Labs',
  description: 'Targeted endurance coaching, triathlon preparation, sports nutrition, and champion mindset frameworks.',
  openGraph: {
    title: 'We Offer | MetaEndure Labs',
    description: 'Targeted endurance coaching, triathlon preparation, and sports nutrition.',
    url: 'https://www.metaendurelabs.com/we-offer',
  },
};

export default function WeOfferPage() {
  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20 py-4 sm:py-8 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* 1. WHO WE SERVE (Slide 10) */}
      <section className="space-y-6 sm:space-y-8">
        <ScrollReveal animation="fade-down">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-500" />
              Audience Focus
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-wider">
              WHO WE SERVE
            </h1>
            <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCE_GROUPS.map((group, idx) => {
            const Icon = group.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                <div className="group p-6 rounded-2xl bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 hover:border-[#2e7d32] dark:hover:border-[#76C043]/60 space-y-4 border-t-2 border-t-[#2e7d32] dark:border-t-[#76C043]/50 flex flex-col justify-between shadow-sm hover:-translate-y-1.5 transition-all duration-300 h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">GROUP 0{idx + 1}</span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${group.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h2 className="text-xl font-heading font-extrabold text-zinc-900 dark:text-white group-hover:text-[#2e7d32] dark:group-hover:text-[#76C043] transition-colors">{group.title}</h2>
                    <ul className="text-xs text-zinc-700 dark:text-[#bdcebe] space-y-2 font-mono pt-2 border-t border-zinc-100 dark:border-white/10">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal animation="zoom-in" delay={300}>
          <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-[#09140c] border border-emerald-500/20 dark:border-[#76C043]/30 text-center max-w-3xl mx-auto shadow-sm flex items-center justify-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <p className="text-sm sm:text-base font-heading font-bold text-emerald-950 dark:text-white">
              MetaEndure Labs helps anyone committed to becoming a better version of themselves.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. WHAT WE OFFER (Slide 11) */}
      <section className="space-y-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-cyan-500" />
              Program Offerings
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider">
              WHAT WE OFFER
            </h2>
            <p className="text-sm font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFERING_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                <div className="group p-6 rounded-2xl bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 hover:border-[#2e7d32] dark:hover:border-[#76C043]/60 space-y-4 shadow-sm hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">CATEGORY 0{idx + 1}</span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${cat.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-zinc-900 dark:text-white group-hover:text-[#2e7d32] dark:group-hover:text-[#76C043] transition-colors">{cat.title}</h3>
                    <ul className="text-xs text-zinc-700 dark:text-[#bdcebe] space-y-2 font-mono pt-2 border-t border-zinc-100 dark:border-white/10">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 3. CORE SERVICES (Slide 21) */}
      <section className="space-y-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3 py-1 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              Core Performance Pillars
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider">
              WE OFFER – PERFORMANCE PILLARS
            </h2>
            <p className="text-sm font-mono text-zinc-500 dark:text-[#788e7a]">www.metaendurelabs.com</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICE_PILLARS.map((service, idx) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 60}>
                <div 
                  className="group p-6 rounded-2xl bg-white dark:bg-[#09140c] border border-zinc-200 dark:border-white/10 hover:border-[#2e7d32] dark:hover:border-[#76C043] transition-all duration-300 flex items-center gap-4 shadow-sm hover:-translate-y-1.5 h-full"
                >
                  <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center shrink-0 border border-white/5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider">PILLAR 0{idx + 1}</div>
                    <h3 className="font-heading font-bold text-sm md:text-base text-zinc-900 dark:text-white group-hover:text-[#2e7d32] dark:group-hover:text-[#76C043] transition-colors mt-0.5">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 3. SCHEDULE CTA BANNER */}
      <section>
        <ScrollReveal animation="fade-up">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-zinc-900/5 to-[#76C043]/10 dark:from-[#0a160d] dark:to-[#050806] border border-emerald-500/30 dark:border-[#76C043]/30 text-center space-y-5">
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-zinc-900 dark:text-white uppercase tracking-wider">
              Ready to Book Your Assessment or Join a Cohort?
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Check real-time slot availability for blood lactate diagnostic tests, HYROX simulation waves, and multi-week periodized cohorts.
            </p>
            <div className="pt-2">
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-bold text-sm text-white dark:text-black bg-[#2e7d32] dark:bg-[#76C043] hover:bg-[#256628] dark:hover:bg-[#8ff346] shadow-md dark:shadow-[0_0_25px_rgba(118,192,67,0.35)] transition-all hover:-translate-y-0.5"
              >
                <span>View Full Schedule &amp; Wave Slots</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
