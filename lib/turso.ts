import { createClient } from '@libsql/client';

const url = process.env.TURSO_DATABASE_URL || '';
const authToken = process.env.TURSO_AUTH_TOKEN || '';

export const isTursoConfigured = Boolean(
  url && 
  !url.includes('placeholder')
);

export const turso = isTursoConfigured
  ? createClient({
      url,
      authToken: authToken || undefined,
    })
  : null;
