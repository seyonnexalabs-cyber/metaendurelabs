'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Dumbbell, Footprints, Timer, Flame, Plus, Trophy, 
  Calendar, CheckCircle2, TrendingUp, Sparkles, Filter, Activity, Clock
} from 'lucide-react';
import { HYROX_STATIONS } from '@/lib/constants';
import { HyroxStationBadge } from '@/components/shared/HyroxStationBadge';
import { MetricCard } from '@/components/shared/MetricCard';

interface WorkoutLog {
  id: string;
  title: string;
  sport: 'running' | 'hyrox' | 'brick' | 'strength';
  date: string;
  duration: string;
  metric: string;
  rpe: number; // 1-10
  notes: string;
  zone: string;
}

export default function WorkoutsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'running' | 'hyrox' | 'brick'>('all');
  const [selectedStation, setSelectedStation] = useState<number>(0);

  const [logs, setLogs] = useState<WorkoutLog[]>([
    {
      id: 'w-1',
      title: 'Compromised 10K Simulation Intervals',
      sport: 'hyrox',
      date: 'Yesterday',
      duration: '52:14 min',
      metric: '5x (1km Run @ 4:20/km + 25m Sled Push)',
      rpe: 8,
      notes: 'Sled pushed at 152kg. Heart rate cleared to 164 bpm within 200m into each run interval.',
      zone: 'Zone 4 / Threshold'
    },
    {
      id: 'w-2',
      title: 'Aerobic Base Long Run (FatMax Calibration)',
      sport: 'running',
      date: '3 days ago',
      duration: '1:42:10 hr',
      metric: '21.1 km @ 4:51/km avg',
      rpe: 6,
      notes: 'Maintained strictly under 146 bpm. Took 60g carb gel every 35 mins without gastro distress.',
      zone: 'Zone 2 / Aerobic'
    },
    {
      id: 'w-3',
      title: 'Triathlon Brick: 55km Aero Bike + 6km Stride',
      sport: 'brick',
      date: 'Last Saturday',
      duration: '2:08:45 hr',
      metric: '55km Cycle (218W NP) + 6km Run (4:35/km)',
      rpe: 7,
      notes: 'Heavy legs in the first 800m off the bike. Cadence settled into 88 spm by km 2.',
      zone: 'Zone 3 / Tempo'
    }
  ]);

  const [showLogModal, setShowLogModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newSport, setNewSport] = useState<'running' | 'hyrox' | 'brick'>('running');
  const [newDuration, setNewDuration] = useState('');
  const [newMetric, setNewMetric] = useState('');
  const [newNotes, setNewNotes] = useState('');

  const handleAddWorkout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newEntry: WorkoutLog = {
      id: `w-${Date.now()}`,
      title: newTitle,
      sport: newSport,
      date: 'Just now',
      duration: newDuration || '45:00 min',
      metric: newMetric || 'Standard effort logged',
      rpe: 7,
      notes: newNotes || 'Consistent pacing preserved throughout workout.',
      zone: 'Zone 3 / Threshold'
    };

    setLogs([newEntry, ...logs]);
    setNewTitle('');
    setNewDuration('');
    setNewMetric('');
    setNewNotes('');
    setShowLogModal(false);
  };

  const filteredLogs = logs.filter((log) => activeFilter === 'all' || log.sport === activeFilter);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-[#76C043]/30 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1b5e20] dark:text-[#8ff346] bg-[#76C043]/15 px-3 py-1 rounded-full border border-[#76C043]/40 w-fit">
            <Dumbbell className="w-3.5 h-3.5 text-[#76C043]" />
            TRAINING LEDGER & BENCHMARKS
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            Workouts &amp; HYROX Log
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#d1ded2] font-medium">
            Log compromised running workouts, track personal records on all 8 stations, and monitor weekly TrainingPeaks adaptation.
          </p>
        </div>

        <button
          onClick={() => setShowLogModal(true)}
          className="px-6 py-3 rounded-xl bg-[#76C043] hover:bg-[#8ff346] text-black font-extrabold text-xs shadow-lg shadow-[#76C043]/20 hover:shadow-[#76C043]/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          Log New Session
        </button>
      </div>

      {/* 4 Weekly KPIs via Reusable MetricCard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Weekly Mileage"
          value="54.2"
          unit="km"
          subtext="Target: 70.0 km"
          icon={Footprints}
          variant="emerald"
          trend={{ value: '+12% vs last week', isPositive: true }}
        />
        <MetricCard
          label="HYROX Sim PB"
          value="1:06:40"
          unit="hr"
          subtext="World Open Qualifying Standard"
          icon={Trophy}
          variant="amber"
          trend={{ value: '-2m 14s PR', isPositive: true }}
        />
        <MetricCard
          label="Training Load (TSS)"
          value="485"
          unit="pts"
          subtext="Optimal Adaptation Range"
          icon={Activity}
          variant="blue"
        />
        <MetricCard
          label="Average Pace"
          value="4:38"
          unit="/km"
          subtext="Threshold: 4:18/km"
          icon={Timer}
          variant="rose"
        />
      </div>

      {/* HYROX 8 Stations PB Grid via Reusable HyroxStationBadge */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-white/10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="font-heading text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#76C043]" />
              Official 8-Station Benchmark Tracker
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              Click on any station to view your calibrated personal best, split pace, and coaching cues.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-[#1b5e20] dark:text-[#8ff346] bg-[#76C043]/10 px-3 py-1 rounded-full border border-[#76C043]/20 self-start">
            PRO DIVISION CALIBRATION
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {HYROX_STATIONS.map((st, idx) => (
            <HyroxStationBadge
              key={st.station || st.num}
              station={st}
              selected={selectedStation === idx}
              onClick={() => setSelectedStation(idx)}
            />
          ))}
        </div>

        {/* Selected Station Deep-Dive */}
        {HYROX_STATIONS[selectedStation] && (
          <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/10 grid sm:grid-cols-3 gap-4 items-center">
            <div>
              <span className="text-[11px] font-mono text-[#1b5e20] dark:text-[#8ff346] font-bold">CURRENT STATION FOCUS</span>
              <div className="font-heading font-black text-xl text-zinc-900 dark:text-white mt-0.5">
                {HYROX_STATIONS[selectedStation].name}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                Distance / Reps: {HYROX_STATIONS[selectedStation].distance}
              </div>
            </div>
            <div className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
              <span className="font-bold text-zinc-900 dark:text-white block mb-1">Coaching Directive:</span>
              {HYROX_STATIONS[selectedStation].focus}
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#0c180e] border border-zinc-200 dark:border-[#76C043]/25 text-center">
              <span className="text-[10px] uppercase font-mono text-zinc-500 dark:text-zinc-400">Personal Best Split</span>
              <div className="text-lg font-black text-[#1b5e20] dark:text-[#8ff346] font-mono">
                {selectedStation === 0 ? '3:42 min' : selectedStation === 1 ? '2:18 min' : selectedStation === 4 ? '3:38 min' : '4:15 min'}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Workout History Table / Feed */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-white/10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="font-heading text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#76C043]" />
            Recent Session Feed
          </h2>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs">
            {(['all', 'running', 'hyrox', 'brick'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg capitalize font-bold transition-all ${
                  activeFilter === filter
                    ? 'bg-[#76C043] text-black shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredLogs.map((log) => (
            <div
              key={log.id}
              className="p-5 rounded-2xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/10 hover:border-[#76C043]/40 transition-all space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] border border-[#76C043]/30">
                    {log.sport}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">{log.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                    {log.zone}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">RPE: {log.rpe}/10</span>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-zinc-900 dark:text-white">{log.title}</h3>
                <div className="font-mono text-xs font-semibold text-zinc-700 dark:text-[#76C043] mt-1">
                  {log.metric} &bull; {log.duration}
                </div>
              </div>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium pt-1 border-t border-zinc-200/60 dark:border-white/5">
                {log.notes}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Log Workout Modal */}
      {showLogModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0a140d] border border-zinc-200 dark:border-[#76C043]/30 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-black text-xl text-zinc-900 dark:text-white">Log Workout Session</h3>
              <button
                onClick={() => setShowLogModal(false)}
                className="text-zinc-400 hover:text-black dark:hover:text-white text-lg font-bold"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleAddWorkout} className="space-y-4">
              <div>
                <label className="text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 uppercase">Session Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5x 1km Compromised Run + Sandbag Lunges"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full mt-1 p-3 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-black text-sm text-zinc-900 dark:text-white focus:border-[#76C043] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 uppercase">Sport Discipline</label>
                  <select
                    value={newSport}
                    onChange={(e) => setNewSport(e.target.value as any)}
                    className="w-full mt-1 p-3 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-black text-sm text-zinc-900 dark:text-white focus:border-[#76C043] outline-none"
                  >
                    <option value="running">Running (Aerobic / Speed)</option>
                    <option value="hyrox">HYROX Simulation Wave</option>
                    <option value="brick">Triathlon Brick</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 uppercase">Duration</label>
                  <input
                    type="text"
                    placeholder="e.g. 48:30 min"
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                    className="w-full mt-1 p-3 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-black text-sm text-zinc-900 dark:text-white focus:border-[#76C043] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 uppercase">Performance Metrics</label>
                <input
                  type="text"
                  placeholder="e.g. 10.5 km @ 4:25/km avg, avg HR 158 bpm"
                  value={newMetric}
                  onChange={(e) => setNewMetric(e.target.value)}
                  className="w-full mt-1 p-3 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-black text-sm text-zinc-900 dark:text-white focus:border-[#76C043] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 uppercase">Coach & Athlete Notes</label>
                <textarea
                  rows={3}
                  placeholder="How did the legs feel? Hydration & carb intake notes..."
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  className="w-full mt-1 p-3 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-black text-sm text-zinc-900 dark:text-white focus:border-[#76C043] outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLogModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-white/10 text-xs font-bold text-zinc-700 dark:text-zinc-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#76C043] hover:bg-[#8ff346] text-black font-extrabold text-xs shadow-md transition-all"
                >
                  Save to TrainingPeaks
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
