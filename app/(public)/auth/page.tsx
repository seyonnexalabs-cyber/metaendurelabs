'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  Lock, Mail, User, ShieldCheck, ArrowRight, 
  Zap, Eye, EyeOff, CheckCircle2 
} from 'lucide-react';

function AuthContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'signin';
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 900);
  };

  return (
    <div className="min-h-screen py-16 px-4 flex flex-col items-center justify-center relative transition-colors">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#76C043]/15 dark:bg-[#76C043]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Centered Authentication Card */}
      <div className="w-full max-w-md relative z-10 space-y-6">
        {/* Brand Crest & Header */}
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <img
              src="/assets/images/metaendure-crest.png"
              alt="METAENDURE LABS"
              className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-heading font-extrabold text-2xl tracking-wider text-zinc-900 dark:text-white">
              META<span className="text-[#1b5e20] dark:text-[#76C043]">ENDURE</span>
            </span>
          </Link>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#bdcebe] font-medium">
            {mode === 'signin' 
              ? 'Access your athlete biometrics, training waves, and coach syncs'
              : 'Join the squad for scientific endurance coaching and HYROX testing'}
          </p>
        </div>

        {/* Card Box */}
        <div className="rounded-3xl bg-white dark:bg-[#0a140d] border border-zinc-200 dark:border-[#76C043]/25 p-6 sm:p-8 shadow-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.85)] space-y-6">
          {/* 1-Click Instant Demo Testing (Prominent Fast Lane) */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block text-center">
              Instant 1-Click Demo Evaluation
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => router.push('/dashboard')}
                className="py-2.5 px-3 rounded-xl bg-[#76C043] hover:bg-[#8ff346] text-black font-extrabold text-xs shadow-md shadow-[#76C043]/20 hover:shadow-[#76C043]/35 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Athlete View</span>
              </button>
              <button
                type="button"
                onClick={() => router.push('/admin')}
                className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Coach Admin</span>
              </button>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-zinc-200 dark:border-white/10"></div>
            <span className="flex-shrink mx-3 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              Or With Email
            </span>
            <div className="flex-grow border-t border-zinc-200 dark:border-white/10"></div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="p-1 rounded-2xl bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-white/10 flex">
            <button
              type="button"
              onClick={() => setMode('signin')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                mode === 'signin'
                  ? 'bg-white dark:bg-white/10 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                mode === 'signup'
                  ? 'bg-white dark:bg-white/10 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Minimal Form */}
          <form onSubmit={handleAuthSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div className="space-y-1 animate-in fade-in duration-200">
                <label className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vijay Raghavan"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white text-xs focus:border-[#76C043] outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="email"
                  required
                  placeholder="athlete@metaendure.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white text-xs focus:border-[#76C043] outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">Password</label>
                {mode === 'signin' && (
                  <button
                    type="button"
                    onClick={() => alert('Password reset link sent to your registered email.')}
                    className="text-[11px] font-mono text-[#1b5e20] dark:text-[#8ff346] hover:underline"
                  >
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white text-xs focus:border-[#76C043] outline-none transition-colors"
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

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-[#76C043] hover:bg-[#8ff346] disabled:opacity-50 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#76C043]/20 hover:shadow-[#76C043]/35 transition-all mt-4"
            >
              {loading ? (
                <span>Entering Lab...</span>
              ) : (
                <>
                  <span>{mode === 'signin' ? 'Sign In to Dashboard' : 'Complete Registration'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer Link */}
        <div className="text-center">
          <Link
            href="/"
            className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            &larr; Back to Public Portal
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-zinc-500 font-mono text-xs">Loading authentication...</div>}>
      <AuthContent />
    </Suspense>
  );
}
