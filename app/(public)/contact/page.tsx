import React from 'react';
import type { Metadata } from 'next';
import { 
  ArrowRight,
  Sparkles,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { CONTACT_CHANNELS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact & Connect | MetaEndure Labs',
  description: 'Connect with MetaEndure Labs. Official admissions, partnerships, and training facility contact information.',
  openGraph: {
    title: 'Contact & Connect | MetaEndure Labs',
    description: 'Connect with MetaEndure Labs. Official admissions and training inquiries.',
    url: 'https://www.metaendurelabs.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-10 sm:space-y-14 py-4 sm:py-8 px-4 sm:px-6 md:px-12 max-w-[1000px] mx-auto">
      {/* 1. OUTLAST YOUR YESTERDAY / CONNECT (Slide 15 & Slide 19/23) */}
      <ScrollReveal animation="fade-up">
        <section className="p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8 rounded-3xl bg-white dark:bg-[#080c09] border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-2xl">
          <div className="text-center space-y-3 sm:space-y-4">
            <span className="text-xs font-mono font-bold text-[#2e7d32] dark:text-[#76C043] uppercase tracking-widest bg-emerald-500/10 dark:bg-[#76C043]/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 dark:border-[#76C043]/20 inline-flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              Admissions &amp; Consultation
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-wider">
              CONTACT &amp; CONNECT
            </h1>

            <p className="text-sm md:text-base text-zinc-600 dark:text-[#bdcebe] max-w-2xl mx-auto leading-relaxed">
              METAENDURE LABS exists to help individuals unlock their highest potential through endurance, mindset, science, and performance.
            </p>
          </div>

          {/* Founder Quote Card */}
          <ScrollReveal animation="zoom-in" delay={150}>
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-[#09140c] border border-emerald-500/20 dark:border-[#76C043]/30 text-center space-y-2 max-w-xl mx-auto shadow-sm flex flex-col items-center">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <p className="text-base sm:text-lg font-heading font-semibold text-emerald-950 dark:text-white italic">
                &quot;Extraordinary results come from extraordinary consistency.&quot;
              </p>
              <div className="text-xs font-mono text-[#2e7d32] dark:text-[#76C043] font-bold">
                Sujai Sivan &bull; Founder, METAENDURE LABS
              </div>
            </div>
          </ScrollReveal>

          {/* Channels */}
          <div className="space-y-6 pt-4 border-t border-zinc-100 dark:border-white/10">
            <h2 className="text-center text-sm font-mono text-zinc-500 dark:text-[#788e7a] uppercase tracking-wider font-bold">
              Are you ready to transform?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CONTACT_CHANNELS.map((channel, idx) => {
                const Icon = channel.icon;
                return (
                  <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                    <a
                      href={channel.href}
                      target={channel.href?.startsWith('http') ? '_blank' : undefined}
                      rel={channel.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group p-6 rounded-2xl bg-slate-50 dark:bg-[#0a160d] border border-zinc-200 dark:border-white/10 hover:border-[#2e7d32] dark:hover:border-[#76C043] transition-all duration-300 block space-y-3 shadow-sm hover:-translate-y-1.5 h-full"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${channel.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-zinc-500 dark:text-[#788e7a] uppercase">{channel.title}</div>
                        <div className="text-sm font-heading font-bold text-zinc-900 dark:text-white group-hover:text-[#2e7d32] dark:group-hover:text-[#76C043] transition-colors mt-0.5 truncate">
                          {channel.value}
                        </div>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-[#788e7a]">
                        {channel.desc}
                      </p>
                    </a>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
