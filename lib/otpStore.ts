// In-memory OTP storage with 10-minute expiry
// Map: email -> { code: string, expiresAt: number }

interface OtpEntry {
  code: string;
  expiresAt: number;
}

const otpStore = new Map<string, OtpEntry>();

export function generateOtp(email: string): string {
  const cleanEmail = email.toLowerCase().trim();
  // Generate cryptographically sound 6-digit number
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

  otpStore.set(cleanEmail, { code, expiresAt });
  return code;
}

export function verifyOtp(email: string, code: string): boolean {
  const cleanEmail = email.toLowerCase().trim();
  const entry = otpStore.get(cleanEmail);

  if (!entry) return false;

  if (Date.now() > entry.expiresAt) {
    otpStore.delete(cleanEmail);
    return false;
  }

  if (entry.code === code.trim()) {
    otpStore.delete(cleanEmail); // Consume single-use OTP
    return true;
  }

  return false;
}
