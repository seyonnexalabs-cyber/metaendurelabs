'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, Award, Stethoscope, HeartPulse, ShieldCheck, 
  ExternalLink, Calendar, Mail, CheckCircle2, Building2
} from 'lucide-react';
import { COACHES, PARTNERS } from '@/lib/constants';

type FilterType = 'all' | 'coaches' | 'partners';

export default function TeamPage() {
  const [filter, setFilter] = useState<FilterType>('all');

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <Users className="w-3.5 h-3.5" />
            Coaches & Clinical Alliance
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">ECOSYSTEM</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            World-class endurance mentorship combined with elite clinical physiotherapy, sports medicine, biomechanics, and metabolic nutrition partners.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-xl">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/25'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Ecosystem ({COACHES.length + PARTNERS.length})
            </button>
            <button
              onClick={() => setFilter('coaches')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'coaches'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/25'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Master Coaches ({COACHES.length})
            </button>
            <button
              onClick={() => setFilter('partners')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'partners'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/25'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Allied Partners ({PARTNERS.length})
            </button>
          </div>
        </div>

        {/* Section 1: Coaches */}
        {(filter === 'all' || filter === 'coaches') && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h2 className="text-2xl font-black text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-400" />
                  Elite Coaching Cadre
                </h2>
                <p className="text-xs text-zinc-400">Certified endurance masters with proven podium and PR records</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COACHES.map((coach) => (
                <div
                  key={coach.id}
                  className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-zinc-900/90 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden flex items-center justify-center shrink-0">
                        <img
                          src={coach.image || "/assets/images/default-avatar.svg"}
                          alt={coach.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">
                          {coach.name}
                        </h3>
                        <p className="text-xs font-medium text-emerald-400">{coach.role}</p>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {coach.bio}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">Specialties</div>
                      <div className="flex flex-wrap gap-1.5">
                        {coach.specialties?.map((spec, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-zinc-400">{coach.experience}</span>
                    <Link
                      href={`/schedule?coach=${coach.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-black font-bold text-xs transition-all"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Book with {coach.name.split(' ')[0]}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Allied Partners */}
        {(filter === 'all' || filter === 'partners') && (
          <div className="space-y-8 animate-in fade-in duration-300 pt-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h2 className="text-2xl font-black text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-emerald-400" />
                  Clinical, Diagnostic & Nutrition Partners
                </h2>
                <p className="text-xs text-zinc-400">Collaborative clinical relationships for seamless athlete recovery</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PARTNERS.map((partner) => (
                <div
                  key={partner.id}
                  className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-zinc-900/90 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
                        {partner.category}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-bold text-xl text-white group-hover:text-emerald-400 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-xs text-emerald-400/80 font-mono">{partner.lead}</p>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {partner.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">Alliance Benefits</div>
                      {partner.services?.map((svc, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{svc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-500">Official Clinical Partner</span>
                    <Link
                      href="/schedule"
                      className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                    >
                      Book Partner Referral <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Join Ecosystem CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 text-center space-y-4">
          <h2 className="text-2xl font-black text-white">Are You a Sports Medicine Clinician or Brand?</h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto">
            MetaEndure Labs is continuously evaluating clinical alliances, lab testing facilities, and sports tech innovators to enhance athlete care.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs inline-flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              Inquire About Partnership
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
