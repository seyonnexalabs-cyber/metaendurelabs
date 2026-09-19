'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar as CalendarIcon, Clock, User, CheckCircle2, 
  MapPin, ShieldAlert, ArrowRight, Zap, Flame, Activity
} from 'lucide-react';
import { COACHES } from '@/lib/constants';

interface SessionType {
  id: string;
  name: string;
  duration: string;
  category: string;
  price: string;
  description: string;
  icon: any;
}

const SESSION_TYPES: SessionType[] = [
  {
    id: 'lactate-test',
    name: 'Blood Lactate & VO2 Graded Test',
    duration: '60 mins',
    category: 'Diagnostics',
    price: '₹5,000',
    description: 'Finger-stick blood lactate measurement across 5 progressive 4-minute stages on treadmill.',
    icon: Activity
  },
  {
    id: 'hyrox-wave',
    name: 'HYROX Full Station Wave Simulation',
    duration: '75 mins',
    category: 'HYROX Arena',
    price: '₹2,500',
    description: 'Compromised 1km running + 8 competition stations with chip timing and coach pacing cueing.',
    icon: Flame
  },
  {
    id: 'coaching-consult',
    name: 'Endurance Coaching & Season Strategy',
    duration: '45 mins',
    category: 'Consultation',
    price: '₹2,000',
    description: 'Comprehensive review of your past race splits, weekly volume, and target marathon/triathlon roadmap.',
    icon: Zap
  },
  {
    id: 'gait-analysis',
    name: '3D Gait & Biomechanics Screen',
    duration: '45 mins',
    category: 'Dr Physio Clinic',
    price: '₹3,500',
    description: 'High-speed 240fps dual-plane video capture of ground contact time, pronation, and pelvic tilt.',
    icon: Activity
  }
];

const TIME_SLOTS = [
  '06:00 AM - 07:00 AM',
  '07:15 AM - 08:15 AM',
  '08:30 AM - 09:30 AM',
  '10:00 AM - 11:00 AM',
  '04:30 PM - 05:30 PM',
  '05:45 PM - 06:45 PM',
  '07:00 PM - 08:00 PM'
];

export default function SchedulePage() {
  const [selectedSession, setSelectedSession] = useState<string>('lactate-test');
  const [selectedCoach, setSelectedCoach] = useState<string>(COACHES[0].id);
  const [selectedDate, setSelectedDate] = useState<string>('2026-09-22');
  const [selectedTime, setSelectedTime] = useState<string>(TIME_SLOTS[0]);
  const [athleteName, setAthleteName] = useState<string>('');
  const [athleteEmail, setAthleteEmail] = useState<string>('');
  const [athletePhone, setAthletePhone] = useState<string>('');
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  const activeSessionObj = SESSION_TYPES.find(s => s.id === selectedSession) || SESSION_TYPES[0];
  const activeCoachObj = COACHES.find(c => c.id === selectedCoach) || COACHES[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!athleteName || !athleteEmail || !athletePhone) return;
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <CalendarIcon className="w-3.5 h-3.5" />
            Live Training Scheduler
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            BOOK YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">SESSION</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Reserve testing slots in our lab, HYROX simulation waves, or dedicated 1-on-1 coach consultations.
          </p>
        </div>

        {bookingSuccess ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900 border border-emerald-500/40 text-center space-y-6 max-w-xl mx-auto animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white">Slot Reserved Successfully!</h2>
              <p className="text-xs text-zinc-300">
                A calendar invite and preparation guidelines have been dispatched to <strong>{athleteEmail}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-left space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-zinc-400">Session:</span> <span className="font-bold text-white">{activeSessionObj.name}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Coach / Specialist:</span> <span className="font-bold text-white">{activeCoachObj.name}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Date & Slot:</span> <span className="font-bold text-emerald-400">{selectedDate} @ {selectedTime}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Facility:</span> <span className="font-bold text-white">MetaEndure Labs Arena, Chennai</span></div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/dashboard/checkout?session=${activeSessionObj.id}&coach=${activeCoachObj.id}&amount=${activeSessionObj.price}`}
                className="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs text-center shadow-lg shadow-emerald-500/20 transition-all"
              >
                Proceed to Payment ({activeSessionObj.price})
              </Link>
              <button
                onClick={() => setBookingSuccess(false)}
                className="px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs"
              >
                Book Another Slot
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Step 1 & 2: Select Session and Coach */}
            <div className="lg:col-span-7 space-y-8">
              {/* Select Session */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center">1</span>
                  <h3 className="font-bold text-white text-lg">Select Session Type</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {SESSION_TYPES.map((sess) => {
                    const Icon = sess.icon;
                    const isSelected = selectedSession === sess.id;
                    return (
                      <div
                        key={sess.id}
                        onClick={() => setSelectedSession(sess.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/10'
                            : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Icon className={`w-5 h-5 ${isSelected ? 'text-emerald-400' : 'text-zinc-400'}`} />
                          <span className="text-xs font-bold text-emerald-400">{sess.price}</span>
                        </div>
                        <h4 className="font-bold text-sm text-white mb-1">{sess.name}</h4>
                        <p className="text-[11px] text-zinc-400 line-clamp-2">{sess.description}</p>
                        <div className="mt-3 flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
                          <Clock className="w-3 h-3" /> {sess.duration}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Select Coach */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center">2</span>
                  <h3 className="font-bold text-white text-lg">Select Lead Coach or Specialist</h3>
                </div>

                <div className="grid sm:grid-cols-3 gap-3">
                  {COACHES.map((coach) => {
                    const isSelected = selectedCoach === coach.id;
                    return (
                      <div
                        key={coach.id}
                        onClick={() => setSelectedCoach(coach.id)}
                        className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-500/10'
                            : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700'
                        }`}
                      >
                        <div className="text-xs font-bold text-white">{coach.name}</div>
                        <div className="text-[10px] text-emerald-400 truncate">{coach.role}</div>
                        <div className="text-[10px] text-zinc-500 mt-1 font-mono">{coach.experience}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Select Date and Slot */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center">3</span>
                  <h3 className="font-bold text-white text-lg">Pick Date & Time Window</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-400 block mb-1.5">Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-400 block mb-1.5">Time Window</label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-emerald-500 focus:outline-none"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Booking Summary & Contact Input */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 space-y-6 sticky top-32">
                <div className="border-b border-zinc-800 pb-4">
                  <h3 className="font-bold text-white text-lg">Reservation Summary</h3>
                  <p className="text-xs text-zinc-400">Review selected protocol before confirming</p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Service:</span>
                    <span className="font-bold text-white text-right">{activeSessionObj.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Duration:</span>
                    <span className="font-mono text-zinc-300">{activeSessionObj.duration}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Assigned Coach:</span>
                    <span className="font-bold text-white">{activeCoachObj.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Schedule:</span>
                    <span className="font-mono text-emerald-400">{selectedDate} @ {selectedTime.split(' - ')[0]}</span>
                  </div>
                  <div className="flex justify-between py-2 text-sm font-bold text-white">
                    <span>Session Fee:</span>
                    <span className="text-emerald-400">{activeSessionObj.price}</span>
                  </div>
                </div>

                {/* Athlete Details Input */}
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arun Ramanathan"
                      value={athleteName}
                      onChange={(e) => setAthleteName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="arun@domain.com"
                      value={athleteEmail}
                      onChange={(e) => setAthleteEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">WhatsApp Mobile *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 12345"
                      value={athletePhone}
                      onChange={(e) => setAthletePhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 transition-all"
                >
                  <span>Confirm Slot Reservation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>MetaEndure Labs Arena, Chennai & Online Sync</span>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
