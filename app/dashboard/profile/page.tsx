'use client';

import React, { useState } from 'react';
import { 
  UserCheck, Activity, Heart, Flame, Shield, TrendingUp, 
  Microscope, Zap, Clock, Award, CheckCircle2, ChevronRight, Gauge 
} from 'lucide-react';
import { MOCK_ATHLETE } from '@/lib/constants';
import { MetricCard } from '@/components/shared/MetricCard';

interface HeartRateZone {
  zone: string;
  name: string;
  rangeBpm: string;
  pctMaxHr: string;
  physiologicalRole: string;
  fuelSource: string;
  color: string;
}

export default function BiometricsAndZonesPage() {
  const [maxHr, setMaxHr] = useState<number>(188);
  const [restingHr, setRestingHr] = useState<number>(MOCK_ATHLETE.restingHR);

  // Dynamic 5-Zone calculation using Heart Rate Reserve (Karvonen formula)
  const hrr = maxHr - restingHr;
  const calculateZoneRange = (minPct: number, maxPct: number) => {
    const low = Math.round(restingHr + hrr * minPct);
    const high = Math.round(restingHr + hrr * maxPct);
    return `${low} – ${high} bpm`;
  };

  const hrZones: HeartRateZone[] = [
    {
      zone: 'Zone 1',
      name: 'Active Recovery',
      rangeBpm: calculateZoneRange(0.50, 0.60),
      pctMaxHr: '50% – 60% HRR',
      physiologicalRole: 'Capillary growth, lactic flushing, tissue remodeling without metabolic fatigue.',
      fuelSource: 'Pure Free Fatty Acids (95%+)',
      color: 'border-blue-500/40 text-blue-500 bg-blue-500/10'
    },
    {
      zone: 'Zone 2',
      name: 'Aerobic Base (FatMax)',
      rangeBpm: calculateZoneRange(0.60, 0.70),
      pctMaxHr: '60% – 70% HRR',
      physiologicalRole: 'Mitochondrial density, cardiac stroke volume, glycogen-sparing endurance foundation.',
      fuelSource: 'Optimal Fat Oxidation (FatMax)',
      color: 'border-[#76C043]/40 text-[#1b5e20] dark:text-[#8ff346] bg-[#76C043]/10'
    },
    {
      zone: 'Zone 3',
      name: 'Tempo / Aerobic Power',
      rangeBpm: calculateZoneRange(0.70, 0.80),
      pctMaxHr: '70% – 80% HRR',
      physiologicalRole: 'Sustained marathon race pace, neuromuscular rhythm, and aerobic efficiency.',
      fuelSource: 'Balanced 50/50 Fat & Glycogen',
      color: 'border-amber-500/40 text-amber-600 dark:text-amber-400 bg-amber-500/10'
    },
    {
      zone: 'Zone 4',
      name: 'Lactate Threshold (LT2)',
      rangeBpm: calculateZoneRange(0.80, 0.90),
      pctMaxHr: '80% – 90% HRR',
      physiologicalRole: 'Maximum steady state where lactate clearance matches production. 1-hour race ceiling.',
      fuelSource: 'Predominantly Muscle Glycogen (85%+)',
      color: 'border-orange-500/40 text-orange-600 dark:text-orange-400 bg-orange-500/10'
    },
    {
      zone: 'Zone 5',
      name: 'VO2 Max & Anaerobic Capacity',
      rangeBpm: calculateZoneRange(0.90, 1.00),
      pctMaxHr: '90% – 100% HRR',
      physiologicalRole: 'Maximum oxygen uptake, stroke output limit, short 3-5 minute interval intervals.',
      fuelSource: 'Anaerobic Glycolysis (100%)',
      color: 'border-rose-500/40 text-rose-600 dark:text-rose-400 bg-rose-500/10'
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-[#76C043]/30 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1b5e20] dark:text-[#8ff346] bg-[#76C043]/15 px-3 py-1 rounded-full border border-[#76C043]/40 w-fit">
            <Microscope className="w-3.5 h-3.5 text-[#76C043]" />
            PHYSIOLOGICAL LABORATORY PROFILE
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            Biometrics &amp; Physiological Zones
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#d1ded2] font-medium">
            Calibrated by Menon Fitness Systems (MFS). Your individual blood lactate turnpoints, heart rate zones, and metabolic cart scores.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-2.5 rounded-2xl">
          <div className="text-right pr-2 border-r border-zinc-200 dark:border-white/10">
            <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 block">LAB TEST STATUS</span>
            <span className="text-xs font-bold text-[#1b5e20] dark:text-[#8ff346] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Certified Current
            </span>
          </div>
          <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 pl-1">Last Graded Test: Aug 2026</span>
        </div>
      </div>

      {/* 4 Core Physiological Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="VO2 Peak (Direct Cart)"
          value={MOCK_ATHLETE.vo2Max}
          unit="mL/kg/min"
          subtext="Elite Amateur Benchmark (Top 5%)"
          icon={Zap}
          variant="emerald"
        />
        <MetricCard
          label="Resting HR / HRV"
          value={`${MOCK_ATHLETE.restingHR}`}
          unit="bpm"
          subtext={`HRV (rMSSD): ${MOCK_ATHLETE.hrv} ms &bull; High Readiness`}
          icon={Heart}
          variant="rose"
        />
        <MetricCard
          label="Lactate Turnpoint (LT2)"
          value={MOCK_ATHLETE.lactateThresholdPace}
          unit="/km"
          subtext="168 bpm Threshold Ceiling"
          icon={Flame}
          variant="amber"
        />
        <MetricCard
          label="FatMax Oxidation"
          value="0.68"
          unit="g/min"
          subtext="Occurs at 138-144 bpm (5:12/km)"
          icon={Activity}
          variant="blue"
        />
      </div>

      {/* 5-Zone Heart Rate Pacing Ledger */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-white/10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-heading text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Gauge className="w-5 h-5 text-[#76C043]" />
              Individualized 5-Zone Heart Rate Calibration
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              Calculated via Heart Rate Reserve (HRR) matched to treadmill blood lactate draws.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <span>Resting HR: <strong>{restingHr} bpm</strong></span>
            <span>&bull;</span>
            <span>Max HR: <strong>{maxHr} bpm</strong></span>
          </div>
        </div>

        <div className="space-y-3">
          {hrZones.map((z) => (
            <div
              key={z.zone}
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-[#76C043]/40 transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-[200px]">
                <span className={`px-3 py-1 rounded-xl text-xs font-mono font-black border ${z.color}`}>
                  {z.zone}
                </span>
                <div>
                  <div className="font-heading font-bold text-sm text-zinc-900 dark:text-white">{z.name}</div>
                  <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">{z.pctMaxHr}</div>
                </div>
              </div>

              <div className="flex-1 max-w-xl text-xs text-zinc-600 dark:text-[#bdcebe] font-medium leading-relaxed">
                {z.physiologicalRole}
              </div>

              <div className="text-left md:text-right min-w-[170px] pt-2 md:pt-0 border-t md:border-t-0 border-zinc-200/60 dark:border-white/5">
                <div className="text-base font-black font-mono text-zinc-900 dark:text-white">{z.rangeBpm}</div>
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{z.fuelSource}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blood Lactate Curve Stage Report */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-white/10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="font-heading text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Microscope className="w-5 h-5 text-[#76C043]" />
              Graded Treadmill Blood Lactate Curve (Stage Data)
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              3-minute step test at 1% incline. Blood sample taken at end of each stage.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Analyst: Sunil Menon &bull; Lactate Pro 2</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-400 uppercase">
                <th className="py-3 px-4">Stage</th>
                <th className="py-3 px-4">Speed (km/h)</th>
                <th className="py-3 px-4">Pace (/km)</th>
                <th className="py-3 px-4">Heart Rate</th>
                <th className="py-3 px-4">Blood Lactate (mmol/L)</th>
                <th className="py-3 px-4">Interpretation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200/60 dark:divide-white/5 text-zinc-800 dark:text-zinc-200">
              <tr className="hover:bg-[#76C043]/5">
                <td className="py-3.5 px-4 font-bold">Stage 1</td>
                <td className="py-3.5 px-4">10.0</td>
                <td className="py-3.5 px-4">6:00</td>
                <td className="py-3.5 px-4">124 bpm</td>
                <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-bold">1.1 mmol/L</td>
                <td className="py-3.5 px-4 text-zinc-500">Baseline Warmup</td>
              </tr>
              <tr className="hover:bg-[#76C043]/5">
                <td className="py-3.5 px-4 font-bold">Stage 2</td>
                <td className="py-3.5 px-4">11.5</td>
                <td className="py-3.5 px-4">5:13</td>
                <td className="py-3.5 px-4">138 bpm</td>
                <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-bold">1.3 mmol/L</td>
                <td className="py-3.5 px-4 text-emerald-600 font-semibold">Aerobic Threshold (LT1 / FatMax)</td>
              </tr>
              <tr className="hover:bg-[#76C043]/5">
                <td className="py-3.5 px-4 font-bold">Stage 3</td>
                <td className="py-3.5 px-4">12.5</td>
                <td className="py-3.5 px-4">4:48</td>
                <td className="py-3.5 px-4">152 bpm</td>
                <td className="py-3.5 px-4 text-amber-600 dark:text-amber-400 font-bold">2.2 mmol/L</td>
                <td className="py-3.5 px-4 text-zinc-500">Marathon Pace Steady State</td>
              </tr>
              <tr className="hover:bg-[#76C043]/5 bg-[#76C043]/10">
                <td className="py-3.5 px-4 font-bold text-[#1b5e20] dark:text-[#8ff346]">Stage 4</td>
                <td className="py-3.5 px-4 font-bold">13.8</td>
                <td className="py-3.5 px-4 font-bold">4:21</td>
                <td className="py-3.5 px-4 font-bold">166 bpm</td>
                <td className="py-3.5 px-4 text-amber-600 dark:text-amber-400 font-bold">4.0 mmol/L</td>
                <td className="py-3.5 px-4 text-[#1b5e20] dark:text-[#8ff346] font-bold">Anaerobic Threshold (LT2 / OBLA)</td>
              </tr>
              <tr className="hover:bg-[#76C043]/5">
                <td className="py-3.5 px-4 font-bold">Stage 5</td>
                <td className="py-3.5 px-4">15.2</td>
                <td className="py-3.5 px-4">3:57</td>
                <td className="py-3.5 px-4">182 bpm</td>
                <td className="py-3.5 px-4 text-rose-600 dark:text-rose-400 font-bold">8.6 mmol/L</td>
                <td className="py-3.5 px-4 text-rose-600 font-semibold">VO2 Max / Severe Fatigue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
