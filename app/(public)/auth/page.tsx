'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  Lock, Mail, User, ShieldCheck, ArrowRight, 
  Zap, Eye, EyeOff, CheckCircle2, KeyRound, ArrowLeft, Send, ShieldAlert
} from 'lucide-react';
import { setSession } from '@/lib/authSession';

function AuthContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'signin';
  
  // Modes: 'signin' | 'signup' | 'forgot'
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>(initialMode);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [otpSending, setOtpSending] = useState<boolean>(false);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    otp: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Request 6-digit OTP code to email
  const handleSendOtp = async () => {
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter your full registered email address first.');
      return;
    }

    setErrorMessage(null);
    setSuccessMessage(null);
    setOtpSending(true);

    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email.trim() })
      });

      const data = await res.json();
      setOtpSending(false);

      if (res.ok && data.success) {
        setOtpSent(true);
        setSuccessMessage(data.message);
        if (data.devCode) {
          // Dev hint
          setFormData(prev => ({ ...prev, otp: data.devCode }));
        }
      } else {
        setErrorMessage(data.error || 'Failed to send OTP code.');
      }
    } catch {
      setOtpSending(false);
      setErrorMessage('Connection failed while requesting OTP code.');
    }
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    const inputIdentifier = formData.email.trim();

    // ----------------------------------------------------
    // FORGOT / RESET PASSWORD SUBMISSION (REQUIRES OTP)
    // ----------------------------------------------------
    if (mode === 'forgot') {
      if (!otpSent || !formData.otp.trim()) {
        setLoading(false);
        setErrorMessage('Please request and enter your 6-digit email OTP code.');
        return;
      }
      if (formData.newPassword !== formData.confirmPassword) {
        setLoading(false);
        setErrorMessage('New passwords do not match.');
        return;
      }
      if (formData.newPassword.length < 6) {
        setLoading(false);
        setErrorMessage('Password must be at least 6 characters long.');
        return;
      }

      try {
        const res = await fetch('/api/auth/reset-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: inputIdentifier,
            otp: formData.otp.trim(),
            newPassword: formData.newPassword
          })
        });

        const data = await res.json();
        setLoading(false);

        if (res.ok && data.success) {
          setSuccessMessage(data.message || 'Password reset successfully! Please sign in with your new password.');
          setMode('signin');
          setOtpSent(false);
          setFormData(prev => ({ 
            ...prev, 
            password: prev.newPassword, 
            otp: '', 
            newPassword: '', 
            confirmPassword: '' 
          }));
        } else {
          setErrorMessage(data.error || 'Failed to verify OTP and reset password.');
        }
      } catch (err) {
        setLoading(false);
        setErrorMessage('Failed to connect to reset service.');
      }
      return;
    }

    // ----------------------------------------------------
    // SIGN UP SUBMISSION (Create Account in Turso)
    // ----------------------------------------------------
    if (mode === 'signup') {
      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password
          })
        });

        const data = await res.json();
        setLoading(false);

        if (res.ok && data.success) {
          setSession({
            name: data.user.name,
            email: data.user.email,
            role: 'athlete'
          });
          setSuccessMessage(`Account created successfully! Welcome, ${data.user.name}. Redirecting...`);
          setTimeout(() => {
            router.push('/dashboard');
          }, 800);
          return;
        } else {
          setErrorMessage(data.error || 'Failed to create account.');
          return;
        }
      } catch (err) {
        setLoading(false);
        setErrorMessage('Failed to connect to registration service.');
        return;
      }
    }

    // ----------------------------------------------------
    // SIGN IN SUBMISSION (Verify in Turso or .env.local)
    // ----------------------------------------------------
    const inputPassword = formData.password;

    try {
      const res = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usernameOrEmail: inputIdentifier,
          password: inputPassword
        })
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok && data.success) {
        setSession({
          name: data.user.name || (data.user.role === 'admin' ? 'Coach Sujai S' : 'Athlete'),
          email: data.user.email || inputIdentifier,
          role: data.user.role || 'athlete'
        });

        if (data.user.role === 'admin') {
          router.push('/admin/schedule');
        } else {
          router.push('/dashboard');
        }
        return;
      } else {
        setErrorMessage(data.error || 'Invalid username/email or password.');
        return;
      }
    } catch (err) {
      setLoading(false);
      setErrorMessage('Connection failed during sign in.');
    }
  };

  return (
    <div className="py-2 sm:py-4 px-4 flex flex-col items-center justify-center relative transition-colors -mt-6 sm:-mt-10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#76C043]/15 dark:bg-[#76C043]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Centered Authentication Card */}
      <div className="w-full max-w-sm relative z-10 space-y-3.5">
        {/* Brand Crest & Header */}
        <div className="text-center space-y-1.5">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <img
              src="/assets/images/metaendure-crest.png"
              alt="METAENDURE LABS"
              className="w-9 h-9 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-wider text-zinc-900 dark:text-white">
              META<span className="text-[#1b5e20] dark:text-[#76C043]">ENDURE</span>
            </span>
          </Link>
          <p className="text-xs text-zinc-600 dark:text-[#bdcebe] font-medium max-w-xs mx-auto">
            {mode === 'forgot'
              ? 'Secure OTP email verification to reset account password'
              : mode === 'signin' 
                ? 'Access your athlete biometrics, training waves, and coach syncs'
                : 'Join the squad for scientific endurance coaching and HYROX testing'}
          </p>
        </div>

        {/* Card Box */}
        <div className="rounded-3xl glass-card-elevated p-5 sm:p-6 space-y-3.5">
          
          {/* Messages */}
          {errorMessage && (
            <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-bold animate-in fade-in">
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-[#76C043] text-xs font-bold flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Mode Switcher Tabs */}
          <div className="p-1 rounded-2xl bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-white/10 flex">
                <button
                  type="button"
                  onClick={() => { setMode('signin'); setErrorMessage(null); setSuccessMessage(null); }}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    mode === 'signin'
                      ? 'bg-white dark:bg-white/10 text-zinc-900 dark:text-white shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => { setMode('signup'); setErrorMessage(null); setSuccessMessage(null); }}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    mode === 'signup'
                      ? 'bg-white dark:bg-white/10 text-zinc-900 dark:text-white shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  Create Account
                </button>
              </div>

          {/* Reset Header Back Button if on Forgot Mode */}
          {mode === 'forgot' && (
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 pb-2">
              <button
                type="button"
                onClick={() => { setMode('signin'); setErrorMessage(null); setOtpSent(false); }}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Sign In</span>
              </button>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-[#76C043]">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                <span>OTP Protected</span>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleAuthSubmit} className="space-y-3">

            {/* Full Name Field (Sign Up Only) */}
            {mode === 'signup' && (
              <div className="space-y-1 animate-in fade-in duration-200">
                <label className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white text-xs focus:border-[#76C043] outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Email Address Field with Send OTP Button */}
            <div className="space-y-1">
              <label className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">
                Email Address
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white text-xs focus:border-[#76C043] outline-none transition-colors"
                  />
                </div>
                {mode === 'forgot' && (
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={otpSending}
                    className="px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-white/10 dark:hover:bg-white/15 text-zinc-800 dark:text-white text-xs font-mono font-bold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#76C043]" />
                    <span>{otpSending ? 'Sending...' : otpSent ? 'Resend' : 'Send OTP'}</span>
                  </button>
                )}
              </div>
            </div>

            {/* OTP Code Input (Only in forgot mode after sending OTP) */}
            {mode === 'forgot' && (
              <div className="space-y-1 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">
                    6-Digit Verification Code
                  </label>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-[#76C043]">
                    Sent to email
                  </span>
                </div>
                <div className="relative">
                  <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-500" />
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={formData.otp}
                    onChange={(e) => setFormData({...formData, otp: e.target.value})}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-50 dark:bg-black border border-amber-500/40 text-zinc-900 dark:text-white text-sm font-mono tracking-wider focus:border-[#76C043] outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Normal Signin / Signup Password */}
            {mode !== 'forgot' && (
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">Password</label>
                  {mode === 'signin' && (
                    <button
                      type="button"
                      onClick={() => {
                        setMode('forgot');
                        setErrorMessage(null);
                        setSuccessMessage(null);
                      }}
                      className="text-[11px] font-mono text-[#1b5e20] dark:text-[#8ff346] hover:underline cursor-pointer"
                    >
                      Forgot Password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full pl-10 pr-10 py-2 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white text-xs focus:border-[#76C043] outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* Forgot / Reset New Password Fields */}
            {mode === 'forgot' && (
              <>
                <div className="space-y-1 animate-in fade-in">
                  <label className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">
                    New Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.newPassword}
                      onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
                      className="w-full pl-10 pr-10 py-2 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white text-xs focus:border-[#76C043] outline-none transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1 animate-in fade-in">
                  <label className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      className="w-full pl-10 pr-10 py-2 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white text-xs focus:border-[#76C043] outline-none transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Action Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl bg-[#76C043] hover:bg-[#8ff346] disabled:opacity-50 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#76C043]/20 hover:shadow-[#76C043]/35 transition-all mt-3 cursor-pointer"
            >
              {loading ? (
                <span>Verifying OTP &amp; Saving...</span>
              ) : mode === 'forgot' ? (
                <>
                  <span>Verify OTP &amp; Reset Password</span>
                  <KeyRound className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>{mode === 'signin' ? 'Sign In to Dashboard' : 'Complete Registration'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/"
            className="text-xs text-zinc-500 hover:text-[#2e7d32] dark:hover:text-[#76C043] transition-colors font-medium"
          >
            &larr; Return to MetaEndure Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#76C043] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <AuthContent />
    </Suspense>
  );
}
