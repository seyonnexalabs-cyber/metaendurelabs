import Link from 'next/link';
import { 
  Compass, ArrowLeft, Home, Calendar, Activity, 
  Search, ShieldAlert, Sparkles 
} from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#ffffff] dark:bg-[#000000] text-zinc-900 dark:text-white flex items-center justify-center p-6 relative overflow-hidden transition-colors">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#76C043]/15 dark:bg-[#76C043]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10 space-y-8 animate-in fade-in zoom-in-95 duration-300">
        {/* Brand Crest */}
        <div className="flex justify-center">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <img
              src="/assets/images/metaendure-crest.png"
              alt="METAENDURE LABS"
              className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-heading font-extrabold text-xl tracking-wider text-zinc-900 dark:text-white">
              META<span className="text-[#76C043]">ENDURE</span>
            </span>
          </Link>
        </div>

        {/* 404 Hero Visual Badge */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] border border-[#76C043]/30 uppercase tracking-widest">
            <ShieldAlert className="w-3.5 h-3.5 text-[#76C043]" />
            Course Deviation • Route Not Found
          </div>

          <h1 className="text-7xl sm:text-9xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#76C043] via-[#4d8628] to-zinc-400 dark:to-zinc-800">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white font-heading">
            Off the Paced Course
          </h2>

          <p className="text-sm text-zinc-600 dark:text-[#bdcebe] max-w-md mx-auto leading-relaxed font-medium">
            The mile marker or trail you are looking for has been moved, recalibrated, or does not exist in our training database.
          </p>
        </div>

        {/* Quick Recovery Navigation Hub */}
        <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-[#0a140d] border border-zinc-200 dark:border-[#76C043]/20 shadow-xl space-y-4 text-left">
          <div className="text-xs font-mono font-bold text-[#1b5e20] dark:text-[#8ff346] uppercase tracking-wider flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#76C043]" />
            <span>Recommended Recovery Trails</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/"
              className="p-3 rounded-2xl bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 hover:border-[#76C043]/50 flex items-center gap-3 group transition-all"
            >
              <div className="p-2 rounded-xl bg-[#76C043]/10 text-[#76C043] group-hover:scale-110 transition-transform">
                <Home className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-900 dark:text-white">Main Lab Arena</div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">Return to Homepage</div>
              </div>
            </Link>

            <Link
              href="/schedule"
              className="p-3 rounded-2xl bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 hover:border-[#76C043]/50 flex items-center gap-3 group transition-all"
            >
              <div className="p-2 rounded-xl bg-[#76C043]/10 text-[#76C043] group-hover:scale-110 transition-transform">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-900 dark:text-white">Training Scheduler</div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">Book Simulation Wave</div>
              </div>
            </Link>

            <Link
              href="/your-sports"
              className="p-3 rounded-2xl bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 hover:border-[#76C043]/50 flex items-center gap-3 group transition-all"
            >
              <div className="p-2 rounded-xl bg-[#76C043]/10 text-[#76C043] group-hover:scale-110 transition-transform">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-900 dark:text-white">Your Sports</div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">Marathon, Tri, HYROX</div>
              </div>
            </Link>

            <Link
              href="/auth"
              className="p-3 rounded-2xl bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 hover:border-[#76C043]/50 flex items-center gap-3 group transition-all"
            >
              <div className="p-2 rounded-xl bg-[#76C043]/10 text-[#76C043] group-hover:scale-110 transition-transform">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-900 dark:text-white">Join / Sign In</div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">Athlete & Coach Access</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Action button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#76C043] to-[#8ff346] text-[#070e08] font-heading font-black text-xs uppercase tracking-wider shadow-lg shadow-[#76C043]/25 hover:shadow-[#76C043]/45 transition-all hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Safe Pacing Course</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
