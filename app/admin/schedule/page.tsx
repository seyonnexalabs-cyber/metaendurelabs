'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CalendarClock, 
  Plus, 
  Trash2, 
  Edit3,
  RotateCcw,
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  CheckCircle2, 
  Activity, 
  Flame, 
  Footprints, 
  Sparkles, 
  Search, 
  SlidersHorizontal,
  X,
  Target,
  AlertTriangle,
  ArchiveRestore,
  Users
} from 'lucide-react';
import { COACHES } from '@/lib/constants';
import { DatePicker } from '@/components/ui/DatePicker';
import { 
  fetchSessions, 
  saveSession, 
  toggleTrashSession,
  permanentlyDeleteSession,
  AdminTrainingSession,
  DEFAULT_SESSIONS 
} from '@/lib/scheduleService';

export default function AdminSchedulePage() {
  const [sessions, setSessions] = useState<AdminTrainingSession[]>(DEFAULT_SESSIONS);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // View tabs: 'active' | 'trash'
  const [activeTab, setActiveTab] = useState<'active' | 'trash'>('active');
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modal State (Used for both Create and Edit)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingSessionId, setEditingSessionId] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Form Fields
  const [formTitle, setFormTitle] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formStartTime, setFormStartTime] = useState('');
  const [formEndTime, setFormEndTime] = useState('');
  const [formCoach, setFormCoach] = useState(COACHES[0].name);
  const [formType, setFormType] = useState<'run' | 'hyrox' | 'lab' | 'physio' | 'virtual'>('run');
  const [formLocation, setFormLocation] = useState('');
  const [formCapacity, setFormCapacity] = useState('20');
  const [formStatus, setFormStatus] = useState<'confirmed' | 'rescheduled' | 'completed' | 'in-progress'>('confirmed');

  const loadData = async () => {
    try {
      const data = await fetchSessions(true); // Fetch all including trash
      setSessions(data);
    } catch (err) {
      console.error('Error fetching schedules:', err);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    loadData();

    const handleSync = () => {
      loadData();
    };

    window.addEventListener('metaendure_schedule_updated', handleSync);
    window.addEventListener('storage', handleSync);

    return () => {
      window.removeEventListener('metaendure_schedule_updated', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // Helper to format ISO YYYY-MM-DD into display string (e.g. 24th October 2026)
  const formatDateForDisplay = (isoDate: string) => {
    if (!isoDate) return '';
    try {
      const parts = isoDate.split('-');
      if (parts.length === 3) {
        const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
        const day = d.getDate();
        const suffix = (day === 1 || day === 21 || day === 31) ? 'st' :
                       (day === 2 || day === 22) ? 'nd' :
                       (day === 3 || day === 23) ? 'rd' : 'th';
        const month = d.toLocaleString('en-US', { month: 'long' });
        const year = d.getFullYear();
        return `${day}${suffix} ${month} ${year}`;
      }
    } catch {}
    return isoDate;
  };

  // Helper to format 24h HH:mm to 12h display
  // Convert 12h time (e.g. "06:00 AM") to 24h ("06:00") for native time input
  const parse12hTo24h = (timeStr: string) => {
    if (!timeStr) return '';
    try {
      const match = timeStr.trim().match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
      if (!match) return '';
      let h = parseInt(match[1], 10);
      const m = match[2];
      const ampm = (match[3] || 'AM').toUpperCase();
      if (ampm === 'PM' && h < 12) h += 12;
      if (ampm === 'AM' && h === 12) h = 0;
      return `${h < 10 ? '0' : ''}${h}:${m}`;
    } catch {
      return '';
    }
  };

  // Convert 24h ("06:00") to 12h display ("06:00 AM")
  const format24hTo12h = (t: string) => {
    if (!t) return '';
    const [hStr, mStr] = t.split(':');
    let h = parseInt(hStr, 10);
    const m = mStr || '00';
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    const formattedH = h < 10 ? `0${h}` : `${h}`;
    return `${formattedH}:${m} ${ampm}`;
  };

  // Open Create Modal (Empty blank fields for clean new entry)
  const handleOpenCreateModal = () => {
    setEditingSessionId(null);
    setFormTitle('');
    setFormDate('');
    setFormStartTime('');
    setFormEndTime('');
    setFormCoach(COACHES[0].name);
    setFormType('run');
    setFormLocation('');
    setFormCapacity('20');
    setFormStatus('confirmed');
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEditModal = (session: AdminTrainingSession) => {
    setEditingSessionId(session.id);
    setFormTitle(session.title);
    setFormDate(session.date);

    // Parse existing "06:00 AM - 07:30 AM" into From & To 24h values
    const parts = (session.time || '').split('-').map(s => s.trim());
    if (parts.length >= 2) {
      setFormStartTime(parse12hTo24h(parts[0]));
      setFormEndTime(parse12hTo24h(parts[1]));
    } else {
      setFormStartTime(parse12hTo24h(parts[0] || ''));
      setFormEndTime('');
    }

    setFormCoach(session.coach);
    setFormType(session.type);
    setFormLocation(session.location);
    setFormCapacity(String(session.capacity?.max || 15));
    setFormStatus(session.status || 'confirmed');
    setIsModalOpen(true);
  };

  // Submit Create or Edit
  const handleSaveSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formDate || !formStartTime || isSubmitting) return;

    // Construct formatted time range string (e.g. "06:00 AM - 07:30 AM")
    const formattedTime = formEndTime 
      ? `${format24hTo12h(formStartTime)} - ${format24hTo12h(formEndTime)}`
      : format24hTo12h(formStartTime);

    setIsSubmitting(true);
    try {
      const payload: AdminTrainingSession = {
        id: editingSessionId || `sess-custom-${Date.now()}`,
        title: formTitle,
        date: formDate,
        time: formattedTime,
        coach: formCoach,
        type: formType,
        location: formLocation,
        status: formStatus,
        capacity: {
          current: 0,
          max: parseInt(formCapacity, 10) || 15
        },
        isTrash: false
      };

      const updated = await saveSession(payload);
      setSessions(updated);
      setIsModalOpen(false);
      showNotification(
        editingSessionId 
          ? `Training schedule "${formTitle}" updated successfully!`
          : `Training schedule "${formTitle}" published successfully!`
      );
    } catch (err: any) {
      alert(err.message || 'Error saving schedule');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Move to Trash (Soft delete)
  const handleMoveToTrash = async (id: string, title: string) => {
    if (confirm(`Move "${title}" to Trash? It will be hidden from public and athlete schedules.`)) {
      try {
        const updated = await toggleTrashSession(id, true);
        setSessions(updated);
        showNotification(`Session moved to Trash.`);
      } catch (err: any) {
        alert('Failed to move to trash');
      }
    }
  };

  // Restore from Trash
  const handleRestoreFromTrash = async (id: string, title: string) => {
    try {
      const updated = await toggleTrashSession(id, false);
      setSessions(updated);
      showNotification(`Session "${title}" restored to active schedules.`);
    } catch (err: any) {
      alert('Failed to restore session');
    }
  };

  // Permanent Delete
  const handlePermanentDelete = async (id: string, title: string) => {
    if (confirm(`Permanently delete "${title}"? This action cannot be undone.`)) {
      try {
        const updated = await permanentlyDeleteSession(id);
        setSessions(updated);
        showNotification(`Session permanently deleted.`);
      } catch (err: any) {
        alert('Failed to delete schedule permanently');
      }
    }
  };

  // Filter based on active vs trash, type, and search
  const visibleSessions = sessions.filter(s => {
    const isTrashed = Boolean(s.isTrash);
    if (activeTab === 'active' && isTrashed) return false;
    if (activeTab === 'trash' && !isTrashed) return false;

    const matchesFilter = filterType === 'all' || s.type === filterType;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.coach.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const activeCount = sessions.filter(s => !s.isTrash).length;
  const trashCount = sessions.filter(s => s.isTrash).length;

  return (
    <div className="space-y-4 max-w-7xl mx-auto">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-6 z-50 p-3.5 rounded-2xl bg-blue-600 text-white text-xs font-bold shadow-2xl flex items-center gap-2 animate-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{notification}</span>
        </div>
      )}

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl glass-card-elevated border-blue-500/20 shadow-sm">
        <div className="space-y-0.5">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20 w-fit">
            <CalendarClock className="w-3 h-3" />
            ADMIN MASTER SCHEDULER
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            Training Schedules &amp; Track Waves
          </h1>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Publish track clinics, edit wave details, and manage schedules with trash recovery.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleOpenCreateModal}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-md shadow-blue-500/25 transition-all flex items-center gap-1.5 hover:-translate-y-0.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Schedule</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs: Active Schedules vs Trash */}
      <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-white/10 pb-3">
        <button
          onClick={() => setActiveTab('active')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
            activeTab === 'active'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Active Schedules ({activeCount})</span>
        </button>

        <button
          onClick={() => setActiveTab('trash')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
            activeTab === 'trash'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-500/20'
              : 'text-zinc-500 hover:text-rose-500 hover:bg-rose-500/10'
          }`}
        >
          <Trash2 className="w-4 h-4" />
          <span>Trash Bin ({trashCount})</span>
        </button>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Type Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Sessions' },
            { id: 'run', label: 'Outdoor Track / Run' },
            { id: 'hyrox', label: 'HYROX Heats' },
            { id: 'lab', label: 'Lab & Diagnostics' },
            { id: 'physio', label: 'Physio / Rehab' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                filterType === f.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by title, location, coach..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Session Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-bold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
            <span>{activeTab === 'active' ? 'Active Schedules' : 'Trashed Schedules'}</span>
            <span className="text-xs font-mono text-zinc-400">({visibleSessions.length})</span>
          </h2>
          <span className="text-xs font-mono text-zinc-500">
            {activeTab === 'active' ? 'Click Edit to modify or Trash to archive' : 'Restore back to active or permanently delete'}
          </span>
        </div>

        {visibleSessions.length === 0 ? (
          <div className="p-12 text-center rounded-3xl border border-dashed border-zinc-200 dark:border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-white/5 flex items-center justify-center mx-auto text-zinc-400">
              {activeTab === 'trash' ? <Trash2 className="w-6 h-6" /> : <CalendarClock className="w-6 h-6" />}
            </div>
            <p className="text-sm font-heading font-semibold text-zinc-500">
              {activeTab === 'trash' ? 'No schedules in the trash bin.' : 'No active schedules found.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleSessions.map(session => (
              <div 
                key={session.id} 
                className={`p-5 rounded-2xl transition-all flex flex-col justify-between gap-4 ${
                  session.isTrash
                    ? 'glass-panel border-rose-500/30'
                    : 'glass-card-elevated hover:border-blue-500/40'
                }`}
              >
                {/* Header & Badges */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      {session.type}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500 font-semibold">
                      Coach: {session.coach}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-black text-base text-zinc-900 dark:text-white leading-snug">
                      {session.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span className="truncate">{session.location}</span>
                    </p>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-white/5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-700 dark:text-zinc-300 font-semibold">{session.date}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{session.time}</span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>Cap: {session.capacity?.max || 15} Athletes</span>
                    <span className="capitalize px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400">
                      {session.status}
                    </span>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center gap-2 pt-1">
                    {session.isTrash ? (
                      <>
                        <button
                          onClick={() => handleRestoreFromTrash(session.id, session.title)}
                          className="flex-1 py-1.5 px-3 rounded-xl text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <ArchiveRestore className="w-3.5 h-3.5" />
                          <span>Restore</span>
                        </button>
                        <button
                          onClick={() => handlePermanentDelete(session.id, session.title)}
                          className="py-1.5 px-3 rounded-xl text-xs font-mono font-bold bg-rose-500/10 text-rose-600 hover:bg-rose-600 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete Permanently</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleOpenEditModal(session)}
                          className="flex-1 py-1.5 px-3 rounded-xl text-xs font-mono font-bold bg-zinc-100 hover:bg-blue-600 hover:text-white dark:bg-white/5 dark:hover:bg-blue-600 text-zinc-800 dark:text-zinc-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleMoveToTrash(session.id, session.title)}
                          className="py-1.5 px-3 rounded-xl text-xs font-mono font-bold bg-rose-500/10 text-rose-600 hover:bg-rose-500 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                          title="Move to Trash"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Trash</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CREATE / EDIT OUTLOOK-STYLE MEETING COMPOSER */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="glass-modal rounded-2xl max-w-2xl w-full border border-zinc-200/80 dark:border-blue-500/30 overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200 my-6">
            
            {/* Outlook Top Window Ribbon / Header */}
            <div className="bg-zinc-100/90 dark:bg-[#070e17] px-5 py-3 border-b border-zinc-200 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm">
                  <CalendarClock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-heading font-bold text-zinc-900 dark:text-white leading-tight">
                    {editingSessionId ? 'Modify Event • Master Scheduler' : 'New Event • Master Scheduler'}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                    MetaEndure Arena #01 (Chennai Central)
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-800 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Outlook Action Bar (Send / Discard / Categories) */}
            <div className="px-5 py-2.5 bg-zinc-50/60 dark:bg-black/30 border-b border-zinc-200/60 dark:border-white/5 flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={e => handleSaveSchedule(e as any)}
                  disabled={isSubmitting}
                  className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-heading font-bold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Saving...' : editingSessionId ? 'Save & Close' : 'Send / Publish'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-white/10 text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Discard
                </button>
              </div>

              {/* Category Pill */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">Track Category:</span>
                <select
                  value={formType}
                  onChange={e => setFormType(e.target.value as any)}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 focus:outline-none cursor-pointer"
                >
                  <option value="run">Outdoor Track / Running</option>
                  <option value="hyrox">HYROX Simulation Wave</option>
                  <option value="lab">Metabolic / VO2 Max Lab</option>
                  <option value="physio">Physiotherapy &amp; Recovery</option>
                  <option value="virtual">Virtual Remote Prep</option>
                </select>
              </div>
            </div>

            {/* Form Body styled like Outlook Event Inspector */}
            <form onSubmit={handleSaveSchedule} className="p-5 sm:p-6 space-y-4">
              
              {/* Event Title (Headline Input) */}
              <div className="space-y-1">
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={e => setFormTitle(e.target.value)}
                  placeholder="Add title (e.g. HYROX Simulation Wave 04)"
                  className="w-full text-base sm:text-lg font-heading font-bold px-3 py-2 rounded-xl bg-transparent border-b-2 border-zinc-200 dark:border-white/15 focus:border-blue-500 dark:focus:border-blue-400 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Required Coach / Organizer Field */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-white/10">
                <User className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="text-xs font-mono font-bold text-zinc-500 shrink-0">Lead Coach:</span>
                <select
                  value={formCoach}
                  onChange={e => setFormCoach(e.target.value)}
                  className="flex-1 bg-transparent text-xs font-semibold text-zinc-900 dark:text-white focus:outline-none cursor-pointer"
                >
                  {COACHES.map(c => (
                    <option key={c.id} value={c.name} className="dark:bg-[#070e17]">{c.name} ({c.role})</option>
                  ))}
                </select>
              </div>

              {/* Date & Time Scheduling Section (Exact Outlook Row Layout) */}
              <div className="p-4 rounded-xl bg-zinc-50/70 dark:bg-black/40 border border-zinc-200 dark:border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-zinc-200/60 dark:border-white/10 pb-2">
                  <span className="font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Meeting Time &amp; Recurrence</span>
                  </span>
                  {formStartTime && formEndTime && (
                    <span className="font-mono text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
                      {format24hTo12h(formStartTime)} &rarr; {format24hTo12h(formEndTime)}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                  {/* Date with shadcn Popover */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-500">Date</label>
                    <DatePicker
                      value={formDate}
                      onChange={val => setFormDate(val)}
                      placeholder="Select event date"
                    />
                  </div>

                  {/* Start Time (From) */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-500">Start Time</label>
                    <input
                      type="time"
                      required
                      value={formStartTime}
                      onChange={e => setFormStartTime(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 text-xs font-mono font-bold text-zinc-900 dark:text-white focus:outline-none focus:border-blue-500 cursor-pointer"
                    />
                  </div>

                  {/* End Time (To) */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-500">End Time</label>
                    <input
                      type="time"
                      required
                      value={formEndTime}
                      onChange={e => setFormEndTime(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 text-xs font-mono font-bold text-zinc-900 dark:text-white focus:outline-none focus:border-blue-500 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Quick 1-Click Meeting Templates */}
                <div className="flex items-center gap-1.5 flex-wrap pt-1">
                  <span className="text-[10px] font-mono text-zinc-500 mr-1">Templates:</span>
                  {[
                    { label: '6:00 - 7:30 AM (Track Wave)', start: '06:00', end: '07:30' },
                    { label: '7:00 - 8:30 AM (HYROX Block)', start: '07:00', end: '08:30' },
                    { label: '5:00 - 6:30 PM (Evening Wave)', start: '17:00', end: '18:30' },
                    { label: '6:30 - 8:00 PM (Recovery)', start: '18:30', end: '20:00' }
                  ].map(slot => (
                    <button
                      key={slot.label}
                      type="button"
                      onClick={() => {
                        setFormStartTime(slot.start);
                        setFormEndTime(slot.end);
                      }}
                      className={`px-2 py-0.5 rounded-lg text-[10px] font-mono font-medium border transition-colors cursor-pointer ${
                        formStartTime === slot.start && formEndTime === slot.end
                          ? 'bg-blue-600 text-white border-blue-600 font-bold'
                          : 'bg-white dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:border-blue-500/50'
                      }`}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location & Capacity Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Location / Arena Track</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formLocation}
                    onChange={e => setFormLocation(e.target.value)}
                    placeholder="e.g. Kanteerava Stadium Track (Lane 01-04)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Max Capacity (Athletes)</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    required
                    value={formCapacity}
                    onChange={e => setFormCapacity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>
              </div>

              {/* Status Selector */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50/50 dark:bg-black/30 border border-zinc-200 dark:border-white/10">
                <span className="text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400">
                  Event Status:
                </span>
                <div className="flex items-center gap-1.5">
                  {(['confirmed', 'rescheduled', 'in-progress'] as const).map(st => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setFormStatus(st)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase font-bold transition-all cursor-pointer ${
                        formStatus === st
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
