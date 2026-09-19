import React from 'react';
import { Calendar, Clock, MapPin, User, CheckCircle2, AlertCircle } from 'lucide-react';

export interface TrainingSessionItem {
  id: string;
  title: string;
  date: string;
  time: string;
  coach: string;
  type: 'lab' | 'hyrox' | 'physio' | 'virtual' | 'run';
  location: string;
  status: 'confirmed' | 'rescheduled' | 'completed' | 'in-progress';
  capacity?: {
    current: number;
    max: number;
  };
}

interface SessionCardProps {
  session: TrainingSessionItem;
  viewMode?: 'athlete' | 'admin';
  onAction?: (id: string, action: 'cancel' | 'checkin' | 'reschedule') => void;
}

export const SessionCard: React.FC<SessionCardProps> = ({
  session,
  viewMode = 'athlete',
  onAction
}) => {
  const typeBadgeStyles = {
    lab: 'bg-emerald-500/15 text-[#1b5e20] dark:text-[#8ff346] border-emerald-500/30',
    hyrox: 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30',
    physio: 'bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30',
    virtual: 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30',
    run: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border-cyan-500/30'
  };

  return (
    <div className="p-5 rounded-2xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-white/10 shadow-sm hover:border-[#76C043]/40 transition-all space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${typeBadgeStyles[session.type] || typeBadgeStyles.lab}`}>
            {session.type}
          </span>
          {session.status === 'confirmed' && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#1b5e20] dark:text-[#8ff346] font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed
            </span>
          )}
        </div>

        {viewMode === 'admin' && session.capacity && (
          <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-md border border-blue-500/20">
            Capacity: {session.capacity.current} / {session.capacity.max}
          </span>
        )}
      </div>

      <div>
        <h3 className="font-heading text-base font-bold text-zinc-900 dark:text-white leading-snug">
          {session.title}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-[#bdcebe] font-medium pt-2 border-t border-zinc-100 dark:border-white/5">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-[#76C043]" />
          <span>{session.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-[#76C043]" />
          <span>{session.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <User className="w-3.5 h-3.5 text-[#76C043]" />
          <span>Coach {session.coach}</span>
        </div>
        <div className="flex items-center gap-2 truncate">
          <MapPin className="w-3.5 h-3.5 text-[#76C043] shrink-0" />
          <span className="truncate">{session.location}</span>
        </div>
      </div>

      {onAction && (
        <div className="flex gap-2 pt-2">
          {viewMode === 'athlete' ? (
            <button
              onClick={() => onAction(session.id, 'reschedule')}
              className="px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-white/10 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:border-[#76C043]/50 transition-all"
            >
              Reschedule
            </button>
          ) : (
            <button
              onClick={() => onAction(session.id, 'checkin')}
              className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all"
            >
              Check-In Athletes
            </button>
          )}
        </div>
      )}
    </div>
  );
};
