import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Users, 
  Sparkles, 
  ArrowRight,
  Mail,
  Shirt,
  Flame,
  BellRing
} from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = {
  title: 'Community & Apparel Hub | MetaEndure Labs',
  description: 'The MetaEndure community club, race simulations, and official athlete apparel are launching soon.',
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-4xl mx-auto flex items-center justify-center">
      <div className="w-full text-center space-y-10">
        <ScrollReveal animation="fade-down">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-[#76C043] border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5 text-[#2e7d32] dark:text-[#76C043]" />
            <span>Community Club &amp; Official Gear</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100}>
          <div className="space-y-4 max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-heading font-black text-zinc-900 dark:text-white uppercase tracking-tight">
              COMMUNITY HUB <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2e7d32] to-emerald-500 dark:from-[#76C043] dark:to-emerald-400">
                COMING SOON
              </span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              We are preparing the official MetaEndure athlete community, exclusive race-simulation weekends, and the first technical kit drop.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Preview Cards */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#0a160d] border border-zinc-200 dark:border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500/15 text-[#2e7d32] dark:text-[#76C043] border border-emerald-500/20">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-white">
                Race Simulation Weekends
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Inter-squad simulations, pacing workshops, and local hybrid endurance meetups led by coach Sujai.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#0a160d] border border-zinc-200 dark:border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                <Shirt className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-white">
                Official Athlete Apparel
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Technical dry-fit edition featuring the signature &quot;Outlast Your Yesterday&quot; spine spine print.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-heading font-bold text-sm text-white dark:text-black bg-[#2e7d32] dark:bg-[#76C043] hover:bg-[#256628] dark:hover:bg-[#8ff346] shadow-md dark:shadow-[0_0_25px_rgba(118,192,67,0.35)] transition-all hover:-translate-y-0.5"
            >
              <BellRing className="w-4 h-4" />
              <span>Join Community Waitlist</span>
            </Link>
            <Link
              href="/we-offer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-heading font-semibold text-sm text-zinc-800 dark:text-white border border-zinc-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
