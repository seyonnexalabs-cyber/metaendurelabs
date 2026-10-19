import { NextResponse } from 'next/server';
import { generateOtp } from '@/lib/otpStore';
import { sendOtpEmail } from '@/lib/emailService';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const cleanEmail = email.toLowerCase().trim();

    // 1. Generate 6-digit OTP
    const otp = generateOtp(cleanEmail);

    // 2. Deliver code via email service
    const result = await sendOtpEmail(cleanEmail, otp);

    if (!result.success) {
      return NextResponse.json({ error: 'Failed to dispatch email. Please try again later.' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: `A 6-digit verification code has been sent to ${cleanEmail}. Check your inbox.`,
      // For instant dev feedback if SMTP is not yet hooked up
      devCode: result.preview ? otp : undefined
    });
  } catch (err) {
    return NextResponse.json({ error: 'Server error generating OTP' }, { status: 500 });
  }
}
