import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { TrainingSession } from '@/lib/types';
import { turso, isTursoConfigured } from '@/lib/turso';

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'schedules.json');

// Local fallback if Turso is not yet configured
function getLocalSchedules(): (TrainingSession & { isTrash?: boolean })[] {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    if (!fs.existsSync(FILE_PATH)) {
      const initial: (TrainingSession & { isTrash?: boolean })[] = [
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
      fs.writeFileSync(FILE_PATH, JSON.stringify(initial, null, 2), 'utf-8');
      return initial;
    }
    const content = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(content || '[]');
  } catch {
    return [];
  }
}

function saveLocalSchedules(data: any[]) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE_PATH, JSON.stringify(data.slice(0, 500), null, 2), 'utf-8');
}

// Ensure Turso has is_trash column if connected
async function ensureTursoTrashColumn() {
  if (isTursoConfigured && turso) {
    try {
      await turso.execute('ALTER TABLE schedules ADD COLUMN is_trash INTEGER DEFAULT 0');
    } catch {
      // Column already exists, ignore
    }
  }
}

// GET: Return all stored schedules (optional ?includeTrash=true)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const includeTrash = searchParams.get('includeTrash') === 'true';

  if (isTursoConfigured && turso) {
    try {
      await ensureTursoTrashColumn();
      const sql = includeTrash 
        ? 'SELECT * FROM schedules ORDER BY created_at DESC'
        : 'SELECT * FROM schedules WHERE is_trash IS NULL OR is_trash = 0 ORDER BY created_at DESC';
      
      const result = await turso.execute(sql);
      const rows = result.rows.map((r: any) => ({
        id: String(r.id),
        title: String(r.title),
        date: String(r.date),
        time: String(r.time),
        coach: String(r.coach),
        type: (r.type as any) || 'run',
        location: String(r.location),
        status: (r.status as any) || 'confirmed',
        isTrash: Boolean(r.is_trash),
        capacity: {
          current: Number(r.capacity_current ?? 0),
          max: Number(r.capacity_max ?? 15)
        }
      }));
      return NextResponse.json(rows);
    } catch (err) {
      console.error('Turso GET error, using local fallback:', err);
    }
  }

  // Fallback to local file
  const sessions = getLocalSchedules();
  if (includeTrash) {
    return NextResponse.json(sessions);
  }
  return NextResponse.json(sessions.filter(s => !s.isTrash));
}

// POST: Add or Edit a schedule
export async function POST(req: Request) {
  try {
    const session = (await req.json()) as (TrainingSession & { isTrash?: boolean });
    if (!session || !session.title) {
      return NextResponse.json({ error: 'Missing schedule title' }, { status: 400 });
    }

    const sessionId = session.id || `sess-${Date.now()}`;

    if (isTursoConfigured && turso) {
      try {
        await ensureTursoTrashColumn();
        await turso.execute({
          sql: `INSERT OR REPLACE INTO schedules (
            id, title, date, time, coach, type, location, status, capacity_current, capacity_max, is_trash
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          args: [
            sessionId,
            session.title,
            session.date,
            session.time,
            session.coach,
            session.type || 'run',
            session.location,
            session.status || 'confirmed',
            session.capacity?.current ?? 0,
            session.capacity?.max ?? 15,
            session.isTrash ? 1 : 0
          ]
        });
        return NextResponse.json({ success: true, session: { ...session, id: sessionId } });
      } catch (err: any) {
        console.error('Turso INSERT/UPDATE error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
      }
    }

    // Fallback to local file
    const current = getLocalSchedules();
    const existingIndex = current.findIndex(s => s.id === sessionId);
    let updated;
    if (existingIndex !== -1) {
      current[existingIndex] = { ...current[existingIndex], ...session, id: sessionId };
      updated = current;
    } else {
      updated = [{ ...session, id: sessionId, isTrash: false }, ...current];
    }
    saveLocalSchedules(updated);
    return NextResponse.json({ success: true, session: { ...session, id: sessionId } });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to save schedule' }, { status: 500 });
  }
}

// PATCH: Move to trash or restore from trash
export async function PATCH(req: Request) {
  try {
    const { id, isTrash } = await req.json();
    if (!id) return NextResponse.json({ error: 'Session ID required' }, { status: 400 });

    if (isTursoConfigured && turso) {
      await ensureTursoTrashColumn();
      await turso.execute({
        sql: 'UPDATE schedules SET is_trash = ? WHERE id = ?',
        args: [isTrash ? 1 : 0, id]
      });
      return NextResponse.json({ success: true });
    }

    // Local fallback
    const current = getLocalSchedules();
    const updated = current.map(s => s.id === id ? { ...s, isTrash: Boolean(isTrash) } : s);
    saveLocalSchedules(updated);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update trash status' }, { status: 500 });
  }
}

// DELETE: Permanent deletion
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Schedule ID required' }, { status: 400 });
    }

    if (isTursoConfigured && turso) {
      try {
        await turso.execute({
          sql: 'DELETE FROM schedules WHERE id = ?',
          args: [id]
        });
        return NextResponse.json({ success: true });
      } catch (err: any) {
        console.error('Turso DELETE error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
      }
    }

    // Fallback to local file
    const current = getLocalSchedules();
    const updated = current.filter(s => s.id !== id);
    saveLocalSchedules(updated);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to delete schedule' }, { status: 500 });
  }
}
