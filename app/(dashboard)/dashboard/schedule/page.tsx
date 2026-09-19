'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar as CalendarIcon, Clock, Plus, Check, 
  MapPin, User, ChevronLeft, ChevronRight, AlertCircle
} from 'lucide-react';

interface BookedSession {
  id: string;
  title: string;
  date: string;
  time: string;
  coach: string;
  type: 'lab' | 'hyrox' | 'physio' | 'virtual';
  location: string;
  status: 'confirmed' | 'rescheduled';
}

export default function AthleteSchedulePage() {
  const [sessions, setSessions] = useState<BookedSession[]>([
    {
      id: 'sess-1',
      title: 'Graded Treadmill Lactate Re-Assessment',
      date: 'Tomorrow, Sept 20',
      time: '06:00 AM - 07:15 AM',
      coach: 'Sunil Menon',
      type: 'lab',
      location: 'MetaEndure Labs Metabolic Testing Suite',
      status: 'confirmed'
    },
    {
      id: 'sess-2',
      title: 'Compromised Running Simulation Wave (Group)',
      date: 'Wed, Sept 23',
      time: '06:30 PM - 07:45 PM',
      coach: 'Rashmi',
      type: 'hyrox',
      location: 'Arena Track & Sled Bay',
      status: 'confirmed'
    },
    {
      id: 'sess-3',
      title: 'Lower Extremity Dry Needling & Joint Flush',
      date: 'Sat, Sept 26',
      time: '09:00 AM - 09:45 AM',
      coach: 'Dr Physio Clinical Specialist',
      type: 'physio',
      location: 'Sports Rehab Wing',
      status: 'confirmed'
    }
  ]);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-emerald-400" />
            My Training & Lab Calendar
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Manage your booked testing slots, HYROX simulation waves, and coach syncs.
          </p>
        </div>

        <Link
          href="/schedule"
          className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-1.5 self-start"
        >
          <Plus className="w-4 h-4" />
          Book New Training Slot
        </Link>
      </div>

      {/* Quick Status Pill */}
      <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-zinc-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Next Scheduled Session: <strong>Graded Treadmill Lactate Re-Assessment</strong></span>
        </div>
        <span className="text-xs font-mono text-emerald-400">In 11 hours 20 mins</span>
      </div>

      {/* Booked Sessions List */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white">Upcoming Confirmed Bookings</h2>

        <div className="grid gap-4">
          {sessions.map((sess) => (
            <div
              key={sess.id}
              className="p-6 rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-emerald-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
                    {sess.type}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">{sess.date}</span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">• {sess.time}</span>
                </div>

                <h3 className="text-lg font-bold text-white">{sess.title}</h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Coach: <strong className="text-zinc-300">{sess.coach}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{sess.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => alert(`Reschedule request sent for: ${sess.title}`)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs transition-all"
                >
                  Reschedule
                </button>
                <button
                  onClick={() => alert(`Downloaded pass for: ${sess.title}`)}
                  className="px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-black font-bold text-xs transition-all"
                >
                  Entry Pass QR
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
