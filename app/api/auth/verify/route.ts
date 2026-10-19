import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { turso, isTursoConfigured } from '@/lib/turso';

const AUTH_FILE = path.join(process.cwd(), 'data', 'auth.json');

// Parse admin accounts from environment variable (as primary secure guard)
function getAdminAccounts() {
  const envAdmins = process.env.ADMIN_ACCOUNTS || '';
  return envAdmins
    .split(',')
    .map(entry => entry.trim())
    .filter(Boolean)
    .map(entry => {
      const [emailOrUser, password, name] = entry.split(':');
      return {
        identifier: emailOrUser?.toLowerCase(),
        password,
        name: name || 'Admin',
        role: 'admin' as const
      };
    });
}

export async function POST(req: Request) {
  try {
    const { usernameOrEmail, password } = await req.json();

    if (!usernameOrEmail || !password) {
      return NextResponse.json({ error: 'Username/Email and password required' }, { status: 400 });
    }

    const cleanInput = usernameOrEmail.toLowerCase().trim();

    // 1. Check Turso 'users' table if Turso is configured
    if (isTursoConfigured && turso) {
      try {
        const result = await turso.execute({
          sql: `SELECT * FROM users WHERE (LOWER(username) = ? OR LOWER(email) = ?) AND password = ? LIMIT 1`,
          args: [cleanInput, cleanInput, password]
        });

        if (result.rows && result.rows.length > 0) {
          const user: any = result.rows[0];
          return NextResponse.json({
            success: true,
            user: {
              username: String(user.username),
              role: String(user.role), // 'admin' or 'athlete'
              name: String(user.name),
              email: String(user.email)
            }
          });
        }
      } catch (err) {
        console.warn('Turso user auth query error, falling back to local:', err);
      }
    }

    // 2. Check Admin Credentials from secure .env.local
    const admins = getAdminAccounts();
    const matchedAdmin = admins.find(
      a => a.identifier === cleanInput && a.password === password
    );

    if (matchedAdmin) {
      return NextResponse.json({
        success: true,
        user: {
          username: cleanInput,
          role: 'admin',
          name: matchedAdmin.name
        }
      });
    }

    // 3. Fallback: Check standard users / athletes from data/auth.json
    const DATA_DIR = path.dirname(AUTH_FILE);
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(AUTH_FILE)) {
      fs.writeFileSync(AUTH_FILE, JSON.stringify([
        {
          username: "athlete_demo",
          email: "athlete@metaendurelabs.com",
          password: "athlete123",
          role: "athlete",
          name: "Demo Athlete"
        }
      ], null, 2), 'utf-8');
    }

    try {
      const raw = fs.readFileSync(AUTH_FILE, 'utf-8');
      const users = JSON.parse(raw || '[]');

      const matchedUser = users.find((u: any) => 
        (u.username?.toLowerCase() === cleanInput || u.email?.toLowerCase() === cleanInput) &&
        u.password === password
      );

      if (matchedUser) {
        return NextResponse.json({
          success: true,
          user: {
            username: matchedUser.username || cleanInput,
            role: matchedUser.role || 'athlete',
            name: matchedUser.name || 'Athlete'
          }
        });
      }
    } catch (e) {
      console.error('Error reading auth.json:', e);
    }

    return NextResponse.json({ error: 'Invalid username/email or password' }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ error: 'Authentication service error' }, { status: 500 });
  }
}
