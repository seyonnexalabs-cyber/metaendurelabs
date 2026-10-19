import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { verifyOtp } from '@/lib/otpStore';
import { turso, isTursoConfigured } from '@/lib/turso';

const AUTH_FILE = path.join(process.cwd(), 'data', 'auth.json');

export async function POST(req: Request) {
  try {
    const { email, otp, newPassword } = await req.json();

    if (!email || !otp || !newPassword) {
      return NextResponse.json({ error: 'Email, OTP code, and new password are required' }, { status: 400 });
    }

    if (newPassword.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters long.' }, { status: 400 });
    }

    const cleanEmail = email.toLowerCase().trim();

    // 1. VERIFY OTP: The critical security check!
    const isOtpValid = verifyOtp(cleanEmail, otp);
    if (!isOtpValid) {
      return NextResponse.json({ 
        error: 'Invalid or expired 6-digit verification code. Please request a new one.' 
      }, { status: 403 });
    }

    // 2. If user is in Turso database, update their password
    if (isTursoConfigured && turso) {
      try {
        const check = await turso.execute({
          sql: `SELECT id FROM users WHERE LOWER(email) = ? OR LOWER(username) = ? LIMIT 1`,
          args: [cleanEmail, cleanEmail]
        });

        if (check.rows && check.rows.length > 0) {
          await turso.execute({
            sql: `UPDATE users SET password = ? WHERE LOWER(email) = ? OR LOWER(username) = ?`,
            args: [newPassword, cleanEmail, cleanEmail]
          });
          return NextResponse.json({ 
            success: true, 
            message: 'OTP verified! Your password has been updated securely.' 
          });
        }
      } catch (err: any) {
        console.error('Turso password reset error:', err);
      }
    }

    // 3. Fallback: Update in data/auth.json if exists
    if (fs.existsSync(AUTH_FILE)) {
      try {
        const raw = fs.readFileSync(AUTH_FILE, 'utf-8');
        const users = JSON.parse(raw || '[]');

        const userIndex = users.findIndex(
          (u: any) => u.email?.toLowerCase() === cleanEmail || u.username?.toLowerCase() === cleanEmail
        );

        if (userIndex !== -1) {
          users[userIndex].password = newPassword;
          fs.writeFileSync(AUTH_FILE, JSON.stringify(users, null, 2), 'utf-8');
          return NextResponse.json({ 
            success: true, 
            message: 'OTP verified! Your password has been updated successfully.' 
          });
        }
      } catch (err) {
        console.error('File reset error:', err);
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'OTP verified! Account updated successfully.' 
    });
  } catch (err) {
    return NextResponse.json({ error: 'Server error during password reset' }, { status: 500 });
  }
}
