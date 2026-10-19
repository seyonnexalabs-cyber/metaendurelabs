'use client';

import { TrainingSession } from '@/lib/types';

export interface AdminTrainingSession extends TrainingSession {
  isTrash?: boolean;
}

export const DEFAULT_SESSIONS: AdminTrainingSession[] = [
  {
    id: 'sess-kanteerava-oct31',
    title: 'Outdoor Running & Form Workshop',
    date: '31st October 2026',
    time: '06:00 AM - 07:30 AM',
    coach: 'Sujai S',
    type: 'run',
    location: 'Kanteerava Stadium (400m Track)',
    status: 'confirmed',
    capacity: { current: 8, max: 20 },
    isTrash: false
  }
];

/**
 * Fetch all sessions from the server API
 */
export async function fetchSessions(includeTrash: boolean = false): Promise<AdminTrainingSession[]> {
  try {
    const res = await fetch(`/api/schedules${includeTrash ? '?includeTrash=true' : ''}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    return Array.isArray(data) ? data : DEFAULT_SESSIONS;
  } catch (err) {
    console.warn('Falling back to defaults:', err);
    return DEFAULT_SESSIONS;
  }
}

/**
 * Create or Edit a training session
 */
export async function saveSession(session: AdminTrainingSession): Promise<AdminTrainingSession[]> {
  const sessionId = session.id || `sess-${Date.now()}`;

  const res = await fetch('/api/schedules', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...session, id: sessionId })
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to save schedule');
  }

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('metaendure_schedule_updated'));
  }

  return fetchSessions(true);
}

/**
 * Backwards compatibility alias for createSession
 */
export const createSession = saveSession;

/**
 * Move session to Trash (soft delete) or restore from Trash
 */
export async function toggleTrashSession(id: string, isTrash: boolean): Promise<AdminTrainingSession[]> {
  const res = await fetch('/api/schedules', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, isTrash })
  });

  if (!res.ok) {
    throw new Error('Failed to update trash status');
  }

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('metaendure_schedule_updated'));
  }

  return fetchSessions(true);
}

/**
 * Permanently delete a session
 */
export async function permanentlyDeleteSession(id: string): Promise<AdminTrainingSession[]> {
  const res = await fetch(`/api/schedules?id=${encodeURIComponent(id)}`, {
    method: 'DELETE'
  });

  if (!res.ok) {
    throw new Error('Failed to delete schedule permanently');
  }

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('metaendure_schedule_updated'));
  }

  return fetchSessions(true);
}

export const deleteSession = permanentlyDeleteSession;
