export interface UserSession {
  name: string;
  email: string;
  role: 'admin' | 'athlete';
}

const SESSION_KEY = 'metaendure_session';

export function getSession(): UserSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as UserSession;
  } catch {
    return null;
  }
}

export function setSession(user: { name?: string | null; email?: string | null; role?: string | null }): void {
  if (typeof window === 'undefined') return;
  const session: UserSession = {
    name: user.name || (user.role === 'admin' ? 'Coach Sujai S' : 'Athlete'),
    email: user.email || '',
    role: user.role === 'admin' ? 'admin' : 'athlete',
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearSession(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(SESSION_KEY);
  // Also clean up any legacy keys if present
  localStorage.removeItem('metaendure_user_name');
  localStorage.removeItem('metaendure_user_email');
  localStorage.removeItem('metaendure_admin_logged_in');
  localStorage.removeItem('metaendure_admin_name');
  localStorage.removeItem('metaendure_admin_email');
}

export function isAdminLoggedIn(): boolean {
  const session = getSession();
  return session?.role === 'admin';
}
