'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Lock, Mail, User, Phone, ShieldCheck, ArrowRight, 
  Activity, CheckCircle2, Flame, Trophy, Eye, EyeOff
} from 'lucide-react';

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [role, setRole] = useState<'athlete' | 'coach' | 'admin'>('athlete');
  const [loading, setLoading] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    primarySport: 'Marathon & Endurance',
    agreeTerms: true
  });

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // If admin, route to admin portal, else athlete dashboard
      if (role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/dashboard');
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 flex flex-col items-center justify-center relative">
      {/* Return to home link */}
      <div className="w-full max-w-5xl mb-6 flex justify-between items-center">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-[#2e7d32] dark:hover:text-[#76C043] transition-colors"
        >
          &larr; Return to Home
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/assets/images/metaendure-crest.png"
            alt="METAENDURE"
            className="w-7 h-7 object-contain"
          />
          <span className="font-heading font-extrabold text-sm tracking-wider text-zinc-900 dark:text-white">
            META<span className="text-[#2e7d32] dark:text-[#76C043]">ENDURE</span>
          </span>
        </Link>
      </div>

      <div className="w-full max-w-5xl grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Col: Brand Value, Pillars & Role Preview (5 Cols) */}
        <div className="lg:col-span-5 space-y-6 hidden lg:block">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Activity className="w-3.5 h-3.5" />
            MetaEndure Biometric Authentication
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            ONE LAB FOR YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">ENDURANCE JOURNEY</span>
          </h2>

          <p className="text-zinc-400 text-sm leading-relaxed">
            Access your personalized physiological profile, lactate threshold curves, microcycle TrainingPeaks workouts, and HYROX simulation wave bookings.
          </p>

          <div className="space-y-3.5 pt-2">
            <div className="flex items-start gap-3 text-xs text-zinc-300 p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Real-time Biometrics:</strong> VO2 max, resting heart rate, HRV recovery, and LT1/LT2 thresholds.</span>
            </div>
            <div className="flex items-start gap-3 text-xs text-zinc-300 p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>HYROX Benchmark Tracking:</strong> Station velocity, compromised running splits, and wave leaderboard rankings.</span>
            </div>
            <div className="flex items-start gap-3 text-xs text-zinc-300 p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Direct Mentorship:</strong> 1-on-1 coach communication with Sunil Menon, Rashmi, and the elite panel.</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Encrypted athlete credentials with federated Garmin & TrainingPeaks sync.</span>
          </div>
        </div>

        {/* Right Col: Single Unified Sign In / Sign Up Card (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-zinc-900/90 border border-zinc-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            {/* Ambient emerald blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Toggle Switch Pill */}
            <div className="flex justify-center mb-8">
              <div className="p-1 rounded-2xl bg-zinc-950 border border-zinc-800 inline-flex">
                <button
                  type="button"
                  onClick={() => setMode('signin')}
                  className={`px-8 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    mode === 'signin'
                      ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-black shadow-lg shadow-emerald-500/20'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className={`px-8 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    mode === 'signup'
                      ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-black shadow-lg shadow-emerald-500/20'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Create Account
                </button>
              </div>
            </div>

            {/* Header copy */}
            <div className="text-center space-y-1.5 mb-6">
              <h3 className="text-2xl font-black text-white">
                {mode === 'signin' ? 'Welcome Back, Athlete' : 'Join the MetaEndure Cohort'}
              </h3>
              <p className="text-xs text-zinc-400">
                {mode === 'signin' 
                  ? 'Enter your registered credentials to access your performance portal' 
                  : 'Start your scientific endurance journey with personalized testing'}
              </p>
            </div>

            {/* 1-Click Instant Demo Login Buttons */}
            <div className="mb-6 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                  Instant Demo Access (No Password Needed)
                </span>
                <span className="text-[10px] font-mono text-[#76C043] bg-[#76C043]/10 px-2 py-0.5 rounded-full border border-[#76C043]/30">
                  Ready to test
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => router.push('/dashboard')}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#76C043] hover:bg-[#8ff346] text-[#051107] font-heading font-bold text-xs shadow-md shadow-[#76C043]/20 hover:shadow-[#76C043]/40 transition-all hover:-translate-y-0.5"
                >
                  <span>⚡ Demo Athlete Login</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => router.push('/admin')}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-heading font-bold text-xs shadow-md shadow-blue-500/25 hover:shadow-blue-500/45 transition-all hover:-translate-y-0.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>🛡️ Demo Coach / Admin</span>
                </button>
              </div>
            </div>

            <div className="relative flex py-2 items-center mb-5">
              <div className="flex-grow border-t border-zinc-200 dark:border-zinc-800"></div>
              <span className="flex-shrink mx-4 text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Or Sign in with Credentials</span>
              <div className="flex-grow border-t border-zinc-200 dark:border-zinc-800"></div>
            </div>

            {/* The Unified Form */}
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {/* Full Name field (Only in Sign Up mode) */}
              {mode === 'signup' && (
                <div className="space-y-1 animate-in fade-in duration-200">
                  <label className="text-xs font-semibold text-zinc-300 block">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vijay Raghavan"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300 block">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="email"
                    required
                    placeholder="athlete@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Mobile Phone (Only in Sign Up mode) */}
              {mode === 'signup' && (
                <div className="space-y-1 animate-in fade-in duration-200">
                  <label className="text-xs font-semibold text-zinc-300 block">WhatsApp Mobile</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98401 88990"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Primary Sport Discipline (Only in Sign Up mode) */}
              {mode === 'signup' && (
                <div className="space-y-1 animate-in fade-in duration-200">
                  <label className="text-xs font-semibold text-zinc-300 block">Primary Discipline</label>
                  <select
                    value={formData.primarySport}
                    onChange={(e) => setFormData({...formData, primarySport: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="Marathon & Endurance">Marathon & Road Running (10K - 42.2K)</option>
                    <option value="Triathlon (70.3 / 140.6)">Triathlon (Olympic, 70.3, 140.6)</option>
                    <option value="HYROX Racing">HYROX Race Simulation (Open / Pro)</option>
                    <option value="Ultra Distance">Ultra Marathon & Trail (50K - 100K)</option>
                  </select>
                </div>
              )}

              {/* Password */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-zinc-300 block">Password</label>
                  {mode === 'signin' && (
                    <button
                      type="button"
                      onClick={() => alert('Password reset instructions sent to your email address.')}
                      className="text-[11px] text-emerald-400 hover:text-emerald-300"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-700 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 transition-all mt-6"
              >
                {loading ? (
                  <span>Authenticating Athlete...</span>
                ) : (
                  <>
                    <span>{mode === 'signin' ? `Enter ${role === 'admin' ? 'Superadmin Portal' : 'Athlete Dashboard'}` : 'Register & Enter Dashboard'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Bottom Footer toggle */}
            <div className="mt-6 pt-6 border-t border-zinc-800 text-center text-xs text-zinc-400">
              {mode === 'signin' ? (
                <span>
                  New to MetaEndure Labs?{' '}
                  <button
                    onClick={() => setMode('signup')}
                    className="text-emerald-400 hover:text-emerald-300 font-bold"
                  >
                    Create an account
                  </button>
                </span>
              ) : (
                <span>
                  Already registered?{' '}
                  <button
                    onClick={() => setMode('signin')}
                    className="text-emerald-400 hover:text-emerald-300 font-bold"
                  >
                    Sign in to your portal
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
