'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar as CalendarIcon, Clock, CheckCircle2, 
  MapPin, ArrowRight, Zap, Flame, Activity, Dumbbell
} from 'lucide-react';
import { 
  COACHES, 
  SCHEDULE_WAVE_SLOTS, 
  SCHEDULE_COURSE_COHORTS,
  SCHEDULE_COURSE_PROGRAMS,
  SCHEDULE_SESSION_TYPES
} from '@/lib/constants';

const COURSE_PROGRAMS = SCHEDULE_COURSE_PROGRAMS;
const SESSION_TYPES = SCHEDULE_SESSION_TYPES;

export function ScheduleClient() {
  const [scheduleMode, setScheduleMode] = useState<'session' | 'course'>('session');
  const [selectedCourse, setSelectedCourse] = useState<string>(COURSE_PROGRAMS[0].id);
  const [selectedSession, setSelectedSession] = useState<string>('lactate-test');
  const [selectedCoach, setSelectedCoach] = useState<string>(COACHES[0].id);
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-05');
  const [selectedTime, setSelectedTime] = useState<string>(SCHEDULE_WAVE_SLOTS[0].time);
  const [athleteName, setAthleteName] = useState<string>('');
  const [athleteEmail, setAthleteEmail] = useState<string>('');
  const [athletePhone, setAthletePhone] = useState<string>('');
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  const activeSessionObj = SESSION_TYPES.find(s => s.id === selectedSession) || SESSION_TYPES[0];
  const activeCourseObj = COURSE_PROGRAMS.find(c => c.id === selectedCourse) || COURSE_PROGRAMS[0];
  const activeCoachObj = COACHES.find(c => c.id === selectedCoach) || COACHES[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!athleteName || !athleteEmail || !athletePhone) return;
    setBookingSuccess(true);
  };

  return (
    <div className="space-y-12">
      {/* Mode Switcher Pills */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
          <button
            type="button"
            onClick={() => setScheduleMode('session')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              scheduleMode === 'session'
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/25'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Single Session / Lab Test</span>
          </button>
          <button
            type="button"
            onClick={() => setScheduleMode('course')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              scheduleMode === 'course'
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/25'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Schedule a Multi-Week Course</span>
          </button>
        </div>
      </div>

      {bookingSuccess ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900 border border-emerald-500/40 text-center space-y-6 max-w-xl mx-auto animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-white">
              {scheduleMode === 'course' ? 'Course Enrollment Reserved!' : 'Slot Reserved Successfully!'}
            </h2>
            <p className="text-xs text-zinc-300">
              A calendar confirmation and cohort onboarding briefing have been dispatched to <strong>{athleteEmail}</strong>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-left space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-zinc-400">{scheduleMode === 'course' ? 'Program:' : 'Session:'}</span>
              <span className="font-bold text-white text-right">
                {scheduleMode === 'course' ? activeCourseObj.title : activeSessionObj.name}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Duration:</span>
              <span className="font-mono text-zinc-300">
                {scheduleMode === 'course' ? activeCourseObj.duration : activeSessionObj.duration}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">{scheduleMode === 'course' ? 'Start Cohort:' : 'Schedule:'}</span>
              <span className="font-bold text-emerald-400">
                {scheduleMode === 'course' ? activeCourseObj.cohort : `${selectedDate} @ ${selectedTime}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Assigned Coach:</span>
              <span className="font-bold text-white">{activeCoachObj.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Facility:</span>
              <span className="font-bold text-white">MetaEndure Labs Arena, Chennai</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              href={`/dashboard/checkout?${scheduleMode === 'course' ? `course=${activeCourseObj.id}&amount=${activeCourseObj.price}` : `session=${activeSessionObj.id}&coach=${activeCoachObj.id}&amount=${activeSessionObj.price}`}`}
              className="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs text-center shadow-lg shadow-emerald-500/20 transition-all"
            >
              Proceed to Payment ({scheduleMode === 'course' ? activeCourseObj.price : activeSessionObj.price})
            </Link>
            <button
              onClick={() => setBookingSuccess(false)}
              className="px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs"
            >
              Schedule Another {scheduleMode === 'course' ? 'Course' : 'Session'}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleBookingSubmit} className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Step 1 & 2: Select Session / Course and Coach */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Program / Session Picker */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center">1</span>
                  <h3 className="font-bold text-white text-lg">
                    {scheduleMode === 'course' ? 'Select Structured Multi-Week Course' : 'Select Session Type'}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {scheduleMode === 'course' ? `${COURSE_PROGRAMS.length} Cohort Tracks` : `${SESSION_TYPES.length} Lab Protocols`}
                </span>
              </div>

              {scheduleMode === 'course' ? (
                <div className="space-y-4">
                  {COURSE_PROGRAMS.map((course) => {
                    const Icon = course.icon;
                    const isSelected = selectedCourse === course.id;
                    return (
                      <div
                        key={course.id}
                        onClick={() => setSelectedCourse(course.id)}
                        className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/10'
                            : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className={`p-2 rounded-xl ${isSelected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-zinc-800 text-zinc-400'}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-bold text-base text-white">{course.title}</h4>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                                  {course.badge}
                                </span>
                                <span className="text-[11px] text-zinc-400">
                                  Target: {course.level}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-black text-emerald-400">{course.price}</span>
                            <div className="text-[10px] text-zinc-500 font-mono">Full Course Fee</div>
                          </div>
                        </div>

                        <p className="text-xs text-zinc-300 mt-2 mb-3">
                          {course.description}
                        </p>

                        <div className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-1.5 mb-3">
                          <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                            Curriculum Progression &amp; Milestones:
                          </div>
                          <ul className="space-y-1 text-[11px] text-zinc-300">
                            {course.curriculum.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-zinc-800/60 text-[11px] font-mono">
                          <span className="text-emerald-400 font-bold">{course.cohort}</span>
                          <span className="text-zinc-400 flex items-center gap-1.5">
                            <Clock className="w-3 h-3" /> {course.schedule}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
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
              )}
            </div>

            {/* Step 2: Select Coach */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="font-bold text-white text-lg">
                  {scheduleMode === 'course' ? 'Select Lead Program Mentor' : 'Select Lead Coach or Specialist'}
                </h3>
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

            {/* Step 3: Date/Cohort Slot */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center">3</span>
                <h3 className="font-bold text-white text-lg">
                  {scheduleMode === 'course' ? 'Confirm Cohort Start Window' : 'Pick Date & Time Window'}
                </h3>
              </div>

              {scheduleMode === 'course' ? (
                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="text-xs text-zinc-300 flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-emerald-400" />
                      <span>Assigned Batch Start: <strong className="text-white">{activeCourseObj.cohort}</strong></span>
                    </div>
                    {(() => {
                      const cohortData = SCHEDULE_COURSE_COHORTS.find(c => c.courseId === activeCourseObj.id);
                      if (!cohortData) return null;
                      const spotsLeft = cohortData.maxCapacity - cohortData.enrolledCount;
                      const pct = Math.round((cohortData.enrolledCount / cohortData.maxCapacity) * 100);
                      return (
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold self-start sm:self-auto">
                          {spotsLeft} spots remaining ({cohortData.enrolledCount}/{cohortData.maxCapacity} enrolled)
                        </span>
                      );
                    })()}
                  </div>

                  {/* Cohort Enrollment Progress Bar */}
                  {(() => {
                    const cohortData = SCHEDULE_COURSE_COHORTS.find(c => c.courseId === activeCourseObj.id);
                    if (!cohortData) return null;
                    const pct = Math.round((cohortData.enrolledCount / cohortData.maxCapacity) * 100);
                    return (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                          <span>Cohort Capacity</span>
                          <span className="text-emerald-400 font-bold">{pct}% Filled</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })()}

                  <div className="text-[11px] font-mono text-zinc-400">
                    Weekly Schedule: {activeCourseObj.schedule}
                  </div>
                  <p className="text-[11px] text-zinc-500">
                    * Cohort orientations and physiological baseline tests are conducted on Saturday morning prior to week 1 kickoff.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
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
                      <label className="text-xs font-semibold text-zinc-400 block mb-1.5">Selected Time Wave</label>
                      <div className="px-4 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-emerald-400 font-mono text-xs flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-400" />
                        <span>{selectedTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Wave Slot Availability Grid */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-zinc-300">Live Wave Slot Availability</span>
                      <span className="text-[11px] font-mono text-zinc-500">Updated in real-time</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SCHEDULE_WAVE_SLOTS.map((slot) => {
                        const isSelected = selectedTime === slot.time;
                        const spotsLeft = slot.maxCapacity - slot.bookedCount;
                        const isWaitlist = slot.status === 'waitlist' || spotsLeft <= 0;

                        return (
                          <div
                            key={slot.id}
                            onClick={() => {
                              setSelectedTime(slot.time);
                            }}
                            className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                              isSelected
                                ? 'border-emerald-500 bg-emerald-500/15 shadow-md shadow-emerald-500/10'
                                : isWaitlist
                                ? 'border-zinc-800/80 bg-zinc-950/40 opacity-75 hover:opacity-100'
                                : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700'
                            }`}
                          >
                            <div className="space-y-0.5">
                              <div className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                                <span>{slot.time}</span>
                              </div>
                              <div className="text-[10px] text-zinc-400 uppercase font-mono">
                                Wave Capacity: {slot.bookedCount} / {slot.maxCapacity} athletes
                              </div>
                            </div>

                            <div>
                              {isWaitlist ? (
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-500/15 text-rose-400 border border-rose-500/30">
                                  Waitlist Only
                                </span>
                              ) : spotsLeft <= 2 ? (
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30 animate-pulse">
                                  {spotsLeft} left
                                </span>
                              ) : (
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                                  {spotsLeft} spots open
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>


          {/* Step 3: Booking Summary & Contact Input */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 space-y-6 sticky top-32">
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="font-bold text-white text-lg">
                  {scheduleMode === 'course' ? 'Course Enrollment Summary' : 'Reservation Summary'}
                </h3>
                <p className="text-xs text-zinc-400">Review selected protocol before confirming</p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-zinc-800/60">
                  <span className="text-zinc-400">{scheduleMode === 'course' ? 'Course Track:' : 'Service:'}</span>
                  <span className="font-bold text-white text-right">
                    {scheduleMode === 'course' ? activeCourseObj.title : activeSessionObj.name}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/60">
                  <span className="text-zinc-400">Duration:</span>
                  <span className="font-mono text-zinc-300">
                    {scheduleMode === 'course' ? activeCourseObj.duration : activeSessionObj.duration}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/60">
                  <span className="text-zinc-400">{scheduleMode === 'course' ? 'Lead Mentor:' : 'Assigned Coach:'}</span>
                  <span className="font-bold text-white">{activeCoachObj.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/60">
                  <span className="text-zinc-400">{scheduleMode === 'course' ? 'Cohort Kickoff:' : 'Schedule:'}</span>
                  <span className="font-mono text-emerald-400 text-right">
                    {scheduleMode === 'course' ? activeCourseObj.cohort : `${selectedDate} @ ${selectedTime.split(' - ')[0]}`}
                  </span>
                </div>
                <div className="flex justify-between py-2 text-sm font-bold text-white">
                  <span>{scheduleMode === 'course' ? 'Total Course Fee:' : 'Session Fee:'}</span>
                  <span className="text-emerald-400">
                    {scheduleMode === 'course' ? activeCourseObj.price : activeSessionObj.price}
                  </span>
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
                <span>{scheduleMode === 'course' ? 'Confirm Course Enrollment' : 'Confirm Slot Reservation'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>MetaEndure Labs Arena, Chennai &amp; Online Sync</span>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
