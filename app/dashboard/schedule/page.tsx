'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar as CalendarIcon, Clock, Plus, Check, 
  MapPin, User, ChevronLeft, ChevronRight, AlertCircle, CalendarCheck,
  Filter, Flame, Activity, X, QrCode, CheckCircle2, Dumbbell, Sparkles
} from 'lucide-react';
import { SessionCard, TrainingSessionItem } from '@/components/shared/SessionCard';
import { 
  SCHEDULE_WAVE_SLOTS, 
  SCHEDULE_COURSE_COHORTS, 
  COACHES, 
  INITIAL_ATHLETE_SESSIONS 
} from '@/lib/constants';

export default function AthleteSchedulePage() {
  const [viewMode, setViewMode] = useState<'list' | 'week'>('list');
  const [filterType, setFilterType] = useState<string>('all');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [checkInModalSession, setCheckInModalSession] = useState<TrainingSessionItem | null>(null);

  // Quick Booking Form State
  const [newTitle, setNewTitle] = useState<string>('Compromised HYROX Simulation Wave');
  const [newType, setNewType] = useState<'hyrox' | 'lab' | 'physio' | 'run'>('hyrox');
  const [newCoach, setNewCoach] = useState<string>('Sunil Menon');
  const [newDate, setNewDate] = useState<string>('2026-10-06');
  const [newSlotTime, setNewSlotTime] = useState<string>(SCHEDULE_WAVE_SLOTS[0].time);

  const [sessions, setSessions] = useState<TrainingSessionItem[]>(INITIAL_ATHLETE_SESSIONS);

  const filteredSessions = sessions.filter(s => {
    if (filterType === 'all') return true;
    return s.type === filterType;
  });

  const handleBookSession = (e: React.FormEvent) => {
    e.preventDefault();
    const newSession: TrainingSessionItem = {
      id: `sess-${Date.now()}`,
      title: newTitle,
      date: newDate,
      time: newSlotTime,
      coach: newCoach,
      type: newType,
      location: newType === 'lab' ? 'Metabolic Testing Suite' : newType === 'hyrox' ? 'Arena Track & Sled Bay' : 'Sports Rehab Wing',
      status: 'confirmed'
    };
    setSessions([newSession, ...sessions]);
    setIsBookingOpen(false);
  };

  const handleAction = (id: string, action: 'cancel' | 'checkin' | 'reschedule') => {
    const targetSession = sessions.find(s => s.id === id);
    if (!targetSession) return;

    if (action === 'cancel') {
      if (confirm(`Are you sure you want to cancel ${targetSession.title}?`)) {
        setSessions(sessions.filter(s => s.id !== id));
      }
    } else if (action === 'reschedule') {
      setIsBookingOpen(true);
    } else if (action === 'checkin') {
      setCheckInModalSession(targetSession);
    }
  };

  const weekDays = [
    { day: 'Mon', date: 'Oct 5', sessions: [] },
    { day: 'Tue', date: 'Oct 6', sessions: sessions.slice(0, 1) },
    { day: 'Wed', date: 'Oct 7', sessions: sessions.slice(1, 2) },
    { day: 'Thu', date: 'Oct 8', sessions: [] },
    { day: 'Fri', date: 'Oct 9', sessions: [] },
    { day: 'Sat', date: 'Oct 10', sessions: sessions.slice(2, 3) },
    { day: 'Sun', date: 'Oct 11', sessions: [] },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-[#76C043]/30 shadow-md">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1b5e20] dark:text-[#8ff346] bg-[#76C043]/15 px-3 py-1 rounded-full border border-[#76C043]/40 w-fit">
            <CalendarCheck className="w-3.5 h-3.5 text-[#76C043]" />
            TRAINING WAVE RESERVATIONS
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            Upcoming Training Waves &amp; Lab Tests
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#d1ded2] font-medium">
            Manage your booked HYROX simulation heats, physiological lactate assessments, and recovery sessions.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-[#76C043] hover:bg-[#8ff346] text-black font-extrabold text-xs shadow-lg shadow-[#76C043]/20 hover:shadow-[#76C043]/40 transition-all flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Quick Book Wave
          </button>
        </div>
      </div>

      {/* Filter Chips & View Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Sessions' },
            { id: 'hyrox', label: 'HYROX Waves' },
            { id: 'lab', label: 'Lactate / Lab' },
            { id: 'physio', label: 'Physio / Recovery' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                filterType === f.id
                  ? 'bg-emerald-600 text-white dark:bg-[#76C043] dark:text-black shadow-sm'
                  : 'bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* View Switcher (List vs 7-Day Grid) */}
        <div className="inline-flex p-1 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              viewMode === 'list'
                ? 'bg-white dark:bg-black text-zinc-900 dark:text-white shadow-sm'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setViewMode('week')}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              viewMode === 'week'
                ? 'bg-white dark:bg-black text-zinc-900 dark:text-white shadow-sm'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            7-Day Week Grid
          </button>
        </div>
      </div>

      {/* View: 7-Day Week Calendar Grid */}
      {viewMode === 'week' ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {weekDays.map((wd, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-white/10 space-y-2.5 min-h-[160px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-zinc-100 dark:border-white/10">
                  <span className="font-bold text-zinc-900 dark:text-white">{wd.day}</span>
                  <span className="text-zinc-500">{wd.date}</span>
                </div>

                <div className="pt-2 space-y-2">
                  {wd.sessions.length > 0 ? (
                    wd.sessions.map((sess) => (
                      <div
                        key={sess.id}
                        onClick={() => setCheckInModalSession(sess)}
                        className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/30 cursor-pointer hover:border-emerald-500 transition-all space-y-1"
                      >
                        <div className="text-[10px] font-mono text-emerald-600 dark:text-[#8ff346] font-bold uppercase truncate">
                          {sess.type}
                        </div>
                        <div className="text-xs font-bold text-zinc-900 dark:text-white line-clamp-1 leading-snug">
                          {sess.title}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500 truncate">
                          {sess.time}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-[11px] font-mono text-zinc-400 py-4 text-center">
                      Rest / Easy Aerobic
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => {
                  setNewDate(wd.date);
                  setIsBookingOpen(true);
                }}
                className="w-full py-1 text-[10px] font-mono text-zinc-500 hover:text-emerald-600 dark:hover:text-[#76C043] transition-colors text-center border-t border-zinc-100 dark:border-white/5"
              >
                + Book Wave
              </button>
            </div>
          ))}
        </div>
      ) : (
        /* View: Booked Sessions List via Reusable SessionCard */
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-bold text-lg text-zinc-900 dark:text-white">
              Active Reserved Waves ({filteredSessions.length})
            </h2>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              Attendance check-in opens 15m prior
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredSessions.map((sess) => (
              <div key={sess.id} className="relative group">
                <SessionCard
                  session={sess}
                  viewMode="athlete"
                  onAction={handleAction}
                />
                <button
                  onClick={() => setCheckInModalSession(sess)}
                  className="mt-2 w-full py-2 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-emerald-500/15 border border-zinc-200 dark:border-white/10 text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-[#8ff346] transition-all flex items-center justify-center gap-1.5"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  View Boarding Pass &bull; Check-In
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Enrolled Multi-Week Course Modules */}
      <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-heading font-bold text-lg text-zinc-900 dark:text-white">
              Enrolled Multi-Week Courses (1 Active Cohort)
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Periodized training curriculums with weekly progress gates and cohort milestones.
            </p>
          </div>
          <Link
            href="/schedule"
            className="text-xs font-bold text-emerald-600 dark:text-[#8ff346] hover:underline"
          >
            + Enroll in Another Course
          </Link>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-[#76C043]/30 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20">
                  12-WEEK INTENSIVE
                </span>
                <span className="text-xs text-zinc-500">Cohort Oct 5, 2026</span>
              </div>
              <h3 className="font-heading font-black text-xl text-zinc-900 dark:text-white">
                Beginner HYROX Foundation Program
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Lead Mentor: <strong>Sunil Menon</strong> (Head Coach) • 3x/week in Arena &amp; Track
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">Week 1 of 12</span>
              <div className="text-xs text-zinc-500">Benchmark Testing Stage</div>
            </div>
          </div>

          {/* Course Progression Milestones */}
          <div className="grid sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-emerald-500/30">
              <div className="text-[10px] font-mono text-emerald-500 font-bold mb-1">STAGE 1 • WEEKS 1-4</div>
              <div className="font-bold text-zinc-900 dark:text-white">Aerobic Engine &amp; Ergonomics</div>
              <div className="text-[11px] text-zinc-500 mt-1">RowErg &amp; SkiErg mechanics</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 opacity-80">
              <div className="text-[10px] font-mono text-zinc-400 font-bold mb-1">STAGE 2 • WEEKS 5-8</div>
              <div className="font-bold text-zinc-900 dark:text-white">Compromised Running</div>
              <div className="text-[11px] text-zinc-500 mt-1">Sled load progression</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 opacity-60">
              <div className="text-[10px] font-mono text-zinc-400 font-bold mb-1">STAGE 3 • WEEKS 9-11</div>
              <div className="font-bold text-zinc-900 dark:text-white">Station Sequencing</div>
              <div className="text-[11px] text-zinc-500 mt-1">Roxzone pacing drill</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 opacity-40">
              <div className="text-[10px] font-mono text-zinc-400 font-bold mb-1">STAGE 4 • WEEK 12</div>
              <div className="font-bold text-zinc-900 dark:text-white">Half HYROX Simulation</div>
              <div className="text-[11px] text-zinc-500 mt-1">Official time validation</div>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK IN-DASHBOARD BOOKING MODAL */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-[#0a120c] border border-zinc-200 dark:border-white/10 rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-[#76C043]">
                Instant Wave Reservation
              </span>
              <h3 className="text-xl font-heading font-black text-zinc-900 dark:text-white mt-1">
                Book Training Wave
              </h3>
              <p className="text-xs text-zinc-500">
                Reserve your spot in upcoming simulation heats or physiological tests.
              </p>
            </div>

            <form onSubmit={handleBookSession} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">Service Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'hyrox', title: 'HYROX Simulation', icon: Flame },
                    { id: 'lab', title: 'Lactate / VO2 Test', icon: Activity },
                    { id: 'physio', title: 'Dry Needling / Physio', icon: Sparkles },
                    { id: 'run', title: 'Track Intervals Wave', icon: Dumbbell }
                  ].map((st) => {
                    const Icon = st.icon;
                    return (
                      <button
                        type="button"
                        key={st.id}
                        onClick={() => {
                          setNewType(st.id as any);
                          setNewTitle(st.title);
                        }}
                        className={`p-2.5 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all ${
                          newType === st.id
                            ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-[#8ff346] font-bold'
                            : 'border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{st.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">Select Mentor Coach</label>
                <select
                  value={newCoach}
                  onChange={(e) => setNewCoach(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white text-xs font-medium focus:border-emerald-500 focus:outline-none"
                >
                  {COACHES.map(c => (
                    <option key={c.id} value={c.name}>{c.name} &bull; {c.role}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">Date</label>
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">Wave Slot</label>
                  <select
                    value={newSlotTime}
                    onChange={(e) => setNewSlotTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white text-xs font-mono focus:border-emerald-500 focus:outline-none"
                  >
                    {SCHEDULE_WAVE_SLOTS.map(slot => (
                      <option key={slot.id} value={slot.time}>
                        {slot.time} ({slot.maxCapacity - slot.bookedCount} spots)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-zinc-200 dark:border-white/10 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#76C043] hover:bg-[#8ff346] text-black font-extrabold text-xs shadow-lg shadow-[#76C043]/20 transition-all"
                >
                  Confirm Wave Spot
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DIGITAL BOARDING PASS & CHECK-IN MODAL */}
      {checkInModalSession && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-[#76C043]/40 rounded-3xl max-w-sm w-full p-6 space-y-5 text-center shadow-2xl relative">
            <button
              onClick={() => setCheckInModalSession(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-[#8ff346] flex items-center justify-center mx-auto">
              <QrCode className="w-6 h-6" />
            </div>

            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#76C043]">
                Digital Boarding Pass
              </span>
              <h3 className="font-heading font-black text-lg text-zinc-900 dark:text-white mt-1">
                {checkInModalSession.title}
              </h3>
              <p className="text-xs text-zinc-500 mt-0.5">
                Wave Time: {checkInModalSession.time}
              </p>
            </div>

            {/* QR Simulation Visual */}
            <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-inner flex flex-col items-center justify-center">
              <div className="w-36 h-36 border-4 border-black p-2 rounded-xl flex items-center justify-center bg-white">
                <div className="grid grid-cols-6 gap-1 w-full h-full">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-sm ${
                        (i % 2 === 0 && i % 3 === 0) || i === 0 || i === 5 || i === 30 || i === 35
                          ? 'bg-black'
                          : 'bg-zinc-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-[10px] font-mono text-zinc-600 mt-2 font-bold tracking-widest">
                MEL-WAVE-{checkInModalSession.id.toUpperCase()}
              </span>
            </div>

            <div className="text-xs text-zinc-600 dark:text-[#bdcebe] font-medium leading-relaxed">
              Show this QR code at Arena Bay entrance 15 minutes prior to warm-up.
            </div>

            <button
              onClick={() => {
                alert('Attendance check-in acknowledged by Arena Gate system.');
                setCheckInModalSession(null);
              }}
              className="w-full py-2.5 rounded-xl bg-[#76C043] hover:bg-[#8ff346] text-black font-extrabold text-xs transition-all flex items-center justify-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              Simulate Gate Check-In
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

