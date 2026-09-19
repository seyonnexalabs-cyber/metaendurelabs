import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  subtext?: string;
  icon: LucideIcon;
  variant?: 'emerald' | 'blue' | 'amber' | 'rose';
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  unit,
  subtext,
  icon: Icon,
  variant = 'emerald',
  trend
}) => {
  const variantStyles = {
    emerald: {
      border: 'border-zinc-200 dark:border-[#76C043]/25 hover:border-[#76C043]/50',
      iconBg: 'bg-[#76C043]/10 text-[#1b5e20] dark:text-[#8ff346] border border-[#76C043]/20',
      highlight: 'text-[#1b5e20] dark:text-[#8ff346]'
    },
    blue: {
      border: 'border-zinc-200 dark:border-blue-500/25 hover:border-blue-500/50',
      iconBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20',
      highlight: 'text-blue-600 dark:text-blue-400'
    },
    amber: {
      border: 'border-zinc-200 dark:border-amber-500/25 hover:border-amber-500/50',
      iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20',
      highlight: 'text-amber-600 dark:text-amber-400'
    },
    rose: {
      border: 'border-zinc-200 dark:border-rose-500/25 hover:border-rose-500/50',
      iconBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20',
      highlight: 'text-rose-600 dark:text-rose-400'
    }
  };

  const currentStyle = variantStyles[variant];

  return (
    <div className={`p-5 rounded-2xl bg-white dark:bg-[#070d09] border ${currentStyle.border} shadow-sm dark:shadow-lg transition-all space-y-3 group`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{label}</span>
        <div className={`w-9 h-9 rounded-xl ${currentStyle.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-black text-zinc-900 dark:text-white font-mono tracking-tight">{value}</span>
        {unit && <span className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400">{unit}</span>}
      </div>

      {(subtext || trend) && (
        <div className="flex items-center justify-between text-[11px] pt-1 border-t border-zinc-100 dark:border-white/5">
          {subtext && <span className="text-zinc-600 dark:text-[#bdcebe] font-medium">{subtext}</span>}
          {trend && (
            <span className={`font-mono font-bold ${trend.isPositive ? 'text-[#1b5e20] dark:text-[#8ff346]' : 'text-rose-500'}`}>
              {trend.value}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
