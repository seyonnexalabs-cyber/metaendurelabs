import AthleteSidebar from '@/components/navigation/AthleteSidebar';
import AthleteBottomNav from '@/components/navigation/AthleteBottomNav';
import ThemeToggle from '@/components/navigation/ThemeToggle';

export default function AthleteDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-zinc-900 dark:text-white flex">
      {/* Fixed Left Navigation Sidebar for Desktop */}
      <AthleteSidebar />

      {/* Main Content Area offset by 64 (16rem) on desktop */}
      <main className="flex-1 md:pl-64 min-h-screen flex flex-col">
        {/* Top Mini Header */}
        <header className="h-16 border-b border-zinc-200 dark:border-zinc-800/80 bg-white/95 dark:bg-black/95 backdrop-blur-xl px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/metaendure-logo-horizontal.png"
              alt="METAENDURE LABS"
              className="h-6 w-auto object-contain md:hidden"
            />
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#76C043]/15 text-[#2e7d32] dark:text-[#76C043] border border-[#76C043]/30">
              Cohort #04
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 hidden sm:inline">
              Coach: <strong className="text-zinc-900 dark:text-white">Sunil Menon</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-[#76C043] animate-pulse" />
              <span className="text-zinc-700 dark:text-zinc-300 font-mono hidden xs:inline">Garmin Sync</span>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Dashboard Dynamic Content with bottom padding for mobile bottom nav */}
        <div className="p-4 sm:p-6 md:p-8 pb-24 md:pb-8 flex-1">
          {children}
        </div>

        {/* Mobile Persistent Bottom Nav */}
        <AthleteBottomNav />
      </main>
    </div>
  );
}
