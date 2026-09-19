import AdminSidebar from '@/components/navigation/AdminSidebar';
import AdminBottomNav from '@/components/navigation/AdminBottomNav';
import ThemeToggle from '@/components/navigation/ThemeToggle';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-zinc-900 dark:text-white flex">
      {/* Fixed Left Navigation Sidebar for Superadmin on Desktop */}
      <AdminSidebar />

      {/* Main Command Center offset by 64 (16rem) on desktop */}
      <main className="flex-1 md:pl-64 min-h-screen flex flex-col">
        {/* Top Command Bar */}
        <header className="h-16 border-b border-zinc-200 dark:border-blue-500/20 bg-white/95 dark:bg-black/95 backdrop-blur-xl px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30">
              COMMAND
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate max-w-[180px] sm:max-w-none">
              Arena #01 (Chennai Central)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right text-xs">
              <div className="font-bold text-zinc-900 dark:text-white text-xs">Coach Superadmin</div>
              <div className="text-[10px] text-blue-600 dark:text-blue-400 font-mono hidden sm:block">Integrity: 100%</div>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Dynamic Admin Body with mobile bottom padding */}
        <div className="p-4 sm:p-6 md:p-8 pb-24 md:pb-8 flex-1">
          {children}
        </div>

        {/* Mobile Persistent Bottom Nav */}
        <AdminBottomNav />
      </main>
    </div>
  );
}
