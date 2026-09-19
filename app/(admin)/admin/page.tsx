'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Users, DollarSign, Calendar, Flame, Activity, 
  ArrowUpRight, TrendingUp, ShieldAlert, CheckCircle2, Search
} from 'lucide-react';
import { COACHES } from '@/lib/constants';

export default function AdminDashboardPage() {
  const [activeAthletes] = useState([
    { id: 'ATH-101', name: 'Vijay Raghavan', sport: 'Triathlon (Full)', coach: 'Sunil Menon', status: 'Active', plan: 'Pro Endurance' },
    { id: 'ATH-102', name: 'Naveen Swaminathan', sport: 'HYROX Pro', coach: 'Rashmi', status: 'Active', plan: 'Elite Hybrid' },
    { id: 'ATH-103', name: 'Priya Sundaram', sport: 'Marathon (Sub-3:30)', coach: 'Sucharita', status: 'Active', plan: 'Pro Endurance' },
    { id: 'ATH-104', name: 'Karthik Balaji', sport: '100K Ultramarathon', coach: 'Marimuthu', status: 'In Rehab', plan: 'Foundational' },
    { id: 'ATH-105', name: 'Sneha Chidambaram', sport: 'HYROX Doubles', coach: 'Mudit', status: 'Active', plan: 'Elite Hybrid' }
  ]);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            Executive Command Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#d1ded2]">
            Real-time athlete cohort metrics, HYROX wave occupancy, and financial ledger.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/admin/athletes"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-500/25 transition-all"
          >
            + Onboard Athlete
          </Link>
          <Link
            href="/admin/schedule"
            className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-800 font-bold text-xs transition-all"
          >
            Open Arena Wave
          </Link>
        </div>
      </div>

      {/* 4 Core Financial & Operational KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Active Athletes */}
        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-mono">ENROLLED ATHLETES</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">128</span>
            <span className="text-xs text-emerald-400 font-bold">+14 this month</span>
          </div>
          <div className="text-[11px] text-zinc-500 font-mono">Capacity: 150 Cap Max</div>
        </div>

        {/* Monthly Recurring Revenue (MRR) */}
        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-mono">RECURRING REVENUE (MRR)</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">₹9,60,000</span>
            <span className="text-xs text-emerald-400 font-bold">+18.4% MoM</span>
          </div>
          <div className="text-[11px] text-zinc-500 font-mono">Gateways: Razorpay & Stripe</div>
        </div>

        {/* Arena Wave Occupancy */}
        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-mono">HYROX ARENA OCCUPANCY</span>
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">92.5%</span>
            <span className="text-xs text-zinc-400">Peak 6-8 AM</span>
          </div>
          <div className="text-[11px] text-emerald-400 font-mono">38 Waves Run This Week</div>
        </div>

        {/* Metabolic Lab Tests */}
        <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-mono">LAB LACTATE TESTS</span>
            <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Activity className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">24</span>
            <span className="text-xs text-zinc-400">Graded tests</span>
          </div>
          <div className="text-[11px] text-zinc-500 font-mono">Next: 4 slots scheduled tomorrow</div>
        </div>
      </div>

      {/* Athlete Roster Table */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-400" />
            Active Athlete Cohort Directory
          </h2>
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search athlete by name or ID..."
              className="pl-8 pr-4 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-emerald-500 focus:outline-none w-64"
            />
          </div>
        </div>

        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-zinc-800 bg-zinc-950/40 text-zinc-400 font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-4">Athlete ID</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Primary Discipline</th>
                  <th className="p-4">Head Coach</th>
                  <th className="p-4">Membership Tier</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {activeAthletes.map((ath) => (
                  <tr key={ath.id} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="p-4 font-mono text-emerald-400 font-bold">{ath.id}</td>
                    <td className="p-4 font-bold text-white">{ath.name}</td>
                    <td className="p-4 text-zinc-300">{ath.sport}</td>
                    <td className="p-4 text-zinc-300">{ath.coach}</td>
                    <td className="p-4 text-zinc-400">{ath.plan}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase ${
                        ath.status === 'Active'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      }`}>
                        {ath.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => alert(`Opening athlete dossier for: ${ath.name}`)}
                        className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-emerald-500 hover:text-black text-zinc-300 font-bold text-[11px] transition-all"
                      >
                        Dossier
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
