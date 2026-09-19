import React from 'react';
import { 
  Wind, Weight, Anchor, MoveUpRight, Waves, 
  Dumbbell, Footprints, Target, Activity, LucideIcon 
} from 'lucide-react';
import { HyroxStation } from '@/lib/types';

interface HyroxStationBadgeProps {
  station: HyroxStation;
  selected?: boolean;
  onClick?: () => void;
  variant?: 'emerald' | 'blue';
  compact?: boolean;
}

export function getStationIconComponent(iconName?: string): LucideIcon {
  switch (iconName) {
    case 'Wind': return Wind;
    case 'Weight': return Weight;
    case 'Anchor': return Anchor;
    case 'MoveUpRight': return MoveUpRight;
    case 'Waves': return Waves;
    case 'Dumbbell': return Dumbbell;
    case 'Footprints': return Footprints;
    case 'Target': return Target;
    default: return Activity;
  }
}

export const HyroxStationBadge: React.FC<HyroxStationBadgeProps> = ({
  station,
  selected = false,
  onClick,
  variant = 'emerald',
  compact = false
}) => {
  const Icon = getStationIconComponent(station.iconName);

  const activeStyles = variant === 'emerald'
    ? 'border-[#76C043] bg-[#76C043]/15 text-zinc-900 dark:text-white shadow-lg shadow-[#76C043]/20 font-bold'
    : 'border-blue-500 bg-blue-500/15 text-zinc-900 dark:text-white shadow-lg shadow-blue-500/20 font-bold';

  const defaultStyles = 'border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c180e] text-zinc-700 dark:text-zinc-300 hover:border-[#76C043]/40';

  if (compact) {
    return (
      <div 
        onClick={onClick}
        className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${selected ? activeStyles : defaultStyles} ${onClick ? 'cursor-pointer hover:scale-[1.02]' : ''}`}
      >
        <div className="w-6 h-6 rounded-lg bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] flex items-center justify-center shrink-0">
          <Icon className="w-3.5 h-3.5" />
        </div>
        <div className="truncate">
          <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">Station {station.station || station.num}</div>
          <div className="text-xs font-bold truncate text-zinc-900 dark:text-white">{station.name}</div>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-3.5 rounded-2xl border text-left transition-all ${selected ? activeStyles : defaultStyles} ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-mono text-[#1b5e20] dark:text-[#8ff346] font-bold">#{station.station || station.num}</span>
        <Icon className={`w-4 h-4 ${selected ? 'text-[#1b5e20] dark:text-[#8ff346]' : 'text-zinc-400'}`} />
      </div>
      <div className="text-xs font-bold truncate text-zinc-900 dark:text-white">{station.name}</div>
      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 font-mono">{station.distance}</div>
    </button>
  );
};
