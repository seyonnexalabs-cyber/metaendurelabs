import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { turso, isTursoConfigured } from '@/lib/turso';

const AUTH_FILE = path.join(process.cwd(), 'data', 'auth.json');

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Please enter your full name.' }, { status: 400 });
    }

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    if (!email.includes('@')) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters long.' }, { status: 400 });
    }

    const cleanEmail = email.toLowerCase().trim();
    const cleanUsername = cleanEmail; // Username automatically set to email to prevent conflicts
    const displayName = name.trim();
    const userId = `usr-${Date.now()}`;

    // 1. If Turso is configured, insert into Turso 'users' table
    if (isTursoConfigured && turso) {
      try {
        // Check if email already exists
        const existing = await turso.execute({
          sql: `SELECT id FROM users WHERE LOWER(email) = ? LIMIT 1`,
          args: [cleanEmail]
        });

        if (existing.rows && existing.rows.length > 0) {
          return NextResponse.json({ error: 'An account with this email already exists. Please sign in.' }, { status: 409 });
        }

        // Insert new user with role 'athlete'
        await turso.execute({
          sql: `INSERT INTO users (id, username, email, password, name, role) VALUES (?, ?, ?, ?, ?, ?)`,
          args: [userId, cleanUsername, cleanEmail, password, displayName, 'athlete']
        });

        return NextResponse.json({
          success: true,
          user: {
            id: userId,
            username: cleanUsername,
            email: cleanEmail,
            name: displayName,
            role: 'athlete'
          }
        });
      } catch (err: any) {
        console.error('Turso signup error:', err);
        return NextResponse.json({ error: err.message || 'Database error during signup' }, { status: 500 });
      }
    }

    // 2. Fallback: Save to data/auth.json
    const DATA_DIR = path.dirname(AUTH_FILE);
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

    let users = [];
    if (fs.existsSync(AUTH_FILE)) {
      try {
        users = JSON.parse(fs.readFileSync(AUTH_FILE, 'utf-8') || '[]');
      } catch {}
    }

    if (users.some((u: any) => u.email?.toLowerCase() === cleanEmail)) {
      return NextResponse.json({ error: 'An account with this email already exists. Please sign in.' }, { status: 409 });
    }

    const newUser = {
      id: userId,
      username: cleanUsername,
      email: cleanEmail,
      password,
      name: name.trim(),
      role: 'athlete'
    };

    users.push(newUser);
    fs.writeFileSync(AUTH_FILE, JSON.stringify(users, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      user: {
        id: userId,
        username: cleanUsername,
        email: cleanEmail,
        name: name.trim(),
        role: 'athlete'
      }
    });
  } catch (err) {
    return NextResponse.json({ error: 'Registration service error' }, { status: 500 });
  }
}
