'use client';

import * as React from 'react';
import { format, parse, isValid } from 'date-fns';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

interface DatePickerProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function DatePicker({
  value,
  onChange,
  placeholder = 'Pick a date',
  className = '',
}: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Parse display value back to Date object if valid
  const selectedDate = React.useMemo(() => {
    if (!value) return undefined;

    // Try standard formats
    const cleaned = value.replace(/(\d+)(st|nd|rd|th)/, '$1');
    const parsedCustom = parse(cleaned, 'd MMMM yyyy', new Date());
    if (isValid(parsedCustom)) return parsedCustom;

    const parsedIso = new Date(value);
    if (isValid(parsedIso)) return parsedIso;

    return undefined;
  }, [value]);

  // Click outside listener to close dropdown
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (date: Date | undefined) => {
    if (!date) return;
    const day = date.getDate();
    const suffix =
      day === 1 || day === 21 || day === 31
        ? 'st'
        : day === 2 || day === 22
        ? 'nd'
        : day === 3 || day === 23
        ? 'rd'
        : 'th';
    const formatted = `${day}${suffix} ${format(date, 'MMMM yyyy')}`;
    onChange(formatted);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Trigger Button styled according to shadcn + glassmorphism */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-white/10 hover:border-blue-500/50 text-xs text-zinc-950 dark:text-white transition-colors cursor-pointer text-left focus:outline-none focus:border-blue-500"
      >
        <span className={value ? 'font-medium text-zinc-900 dark:text-white' : 'text-zinc-400'}>
          {value || placeholder}
        </span>
        <CalendarIcon className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 ml-2" />
      </button>

      {/* Floating shadcn Calendar Popover with rich glassmorphism */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 p-3 rounded-2xl glass-modal shadow-2xl animate-in fade-in zoom-in-95 duration-150 border border-zinc-200 dark:border-blue-500/30">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            classNames={{
              root: 'text-xs select-none',
              months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
              month: 'space-y-3',
              month_caption: 'flex justify-between items-center pt-1 px-1 relative',
              caption_label: 'text-xs font-heading font-bold text-zinc-900 dark:text-white',
              nav: 'flex items-center gap-1',
              button_previous:
                'h-7 w-7 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-white/5 dark:hover:bg-white/10 flex items-center justify-center text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer',
              button_next:
                'h-7 w-7 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-white/5 dark:hover:bg-white/10 flex items-center justify-center text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer',
              month_grid: 'w-full border-collapse space-y-1',
              weekdays: 'flex gap-1 mb-1',
              weekday: 'text-zinc-400 dark:text-zinc-500 font-mono text-[10px] uppercase w-8 text-center font-bold',
              week: 'flex w-full gap-1 mt-1',
              day: 'relative p-0 text-center text-xs focus-within:relative focus-within:z-20',
              day_button:
                'h-8 w-8 rounded-lg flex items-center justify-center font-mono text-xs text-zinc-800 dark:text-zinc-200 hover:bg-blue-50 dark:hover:bg-blue-950/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer',
              today: 'font-bold text-blue-600 dark:text-blue-400 border border-blue-500/40',
              selected:
                'bg-blue-600 !text-white font-bold shadow-md shadow-blue-500/30 hover:bg-blue-500 hover:!text-white',
              outside: 'text-zinc-300 dark:text-zinc-600 opacity-50',
              disabled: 'text-zinc-300 dark:text-zinc-700 opacity-40 cursor-not-allowed',
            }}
            components={{
              Chevron: (props) =>
                props.orientation === 'left' ? (
                  <ChevronLeft className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
                ),
            }}
          />

          {/* Quick presets footer */}
          <div className="pt-2 mt-2 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono">
            <button
              type="button"
              onClick={() => handleSelect(new Date())}
              className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              Today
            </button>
            <button
              type="button"
              onClick={() => {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                handleSelect(tomorrow);
              }}
              className="text-zinc-500 hover:text-zinc-800 dark:hover:text-white cursor-pointer"
            >
              Tomorrow
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
