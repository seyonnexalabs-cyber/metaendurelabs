'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Users, Trophy, Calendar, Sparkles, MapPin, 
  ArrowRight, ShoppingBag, CheckCircle2, Flame
} from 'lucide-react';

export default function CommunityPage() {
  const [selectedSize, setSelectedSize] = useState<string>('M');

  const upcomingEvents = [
    {
      id: 'event-1',
      title: 'Marina Beach 30K Long Steady Run (LSR)',
      date: 'Sunday, Oct 4, 2026',
      time: '05:00 AM',
      location: 'Light House, Marina, Chennai',
      category: 'Marathon Prep',
      spots: '45 Athletes Registered',
      description: 'Fully supported long run with mobile hydration, electrolyte stations, and pace pacers for 4:45, 5:15, 5:45, and 6:15 min/km.'
    },
    {
      id: 'event-2',
      title: 'HYROX Compromised Running Simulation Day',
      date: 'Saturday, Oct 17, 2026',
      time: '06:30 AM',
      location: 'MetaEndure Arena, Chennai',
      category: 'HYROX Test',
      spots: 'Limited to 24 Waves',
      description: 'Full official race simulation with chip timing, Sled push/pull, Burpee broad jumps, and wall-balls.'
    },
    {
      id: 'event-3',
      title: 'East Coast Road (ECR) 100K Century Cycling Ride',
      date: 'Sunday, Nov 1, 2026',
      time: '05:15 AM',
      location: 'Akkarai to Mahabalipuram & Back',
      category: 'Triathlon / Iron Prep',
      spots: '30 Slots Available',
      description: 'Aero drafting mechanics, rolling support vehicle with spare tubes, CO2, and high-carb nutrition replenishment.'
    }
  ];

  const officialApparel = [
    {
      id: 'apparel-1',
      name: 'MetaEndure Pro Aero Singlet',
      tag: 'Heat Dissipation Mesh',
      price: '₹2,199',
      features: ['Ultra-breathable micro-mesh', 'Zero-chafe flatlock seams', 'Reflective 3M logos']
    },
    {
      id: 'apparel-2',
      name: 'Stealth Bio-Green HYROX Short',
      tag: 'Competition Grade',
      price: '₹2,699',
      features: ['4-way stretch ripstop', 'Internal compression liner', 'Laser-cut sweat ventilation']
    },
    {
      id: 'apparel-3',
      name: 'MetaEndure Technical Race Trucker Cap',
      tag: 'Sweatband Tech',
      price: '₹1,299',
      features: ['Absorbent moisture brow', 'Lightweight EVA soft visor', 'Sublimated emerald crest']
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <Users className="w-3.5 h-3.5" />
            Athlete Community & Gear
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            THE ENDURANCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">TRIBE</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Join weekend supported long runs, inter-cohort HYROX battles, race debriefs, and wear official team gear crafted for extreme tropical humidity.
          </p>
        </div>

        {/* Section 1: Upcoming Supported Events */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <h2 className="text-2xl font-black text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                Upcoming Cohort Events & Long Runs
              </h2>
              <p className="text-xs text-zinc-400">Supported by our coaches, pacing crew, and medical crew</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((evt) => (
              <div
                key={evt.id}
                className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-zinc-900/90 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
                      {evt.category}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">{evt.spots}</span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">
                      {evt.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-zinc-400 mt-2 font-mono">
                      <span>{evt.date}</span> • <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400/80 mt-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800">
                  <Link
                    href="/schedule"
                    className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-emerald-500 hover:text-black text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <span>RSVP for Free</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Official Technical Apparel */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <h2 className="text-2xl font-black text-white flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-emerald-400" />
                Official Technical Race Apparel
              </h2>
              <p className="text-xs text-zinc-400">Tested in Chennai tropical humidity to eliminate chafing and maximize cooling</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {officialApparel.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-zinc-900/90 transition-all group"
              >
                <div className="space-y-4">
                  <div className="aspect-video rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center p-4 relative overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xl">
                      MEL
                    </div>
                    <span className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-emerald-400 font-bold text-sm mt-1">{item.price}</div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    {item.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all ${
                          selectedSize === size
                            ? 'bg-emerald-500 text-black'
                            : 'bg-zinc-800 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <Link
                    href={`/dashboard/checkout?item=${item.id}&price=${item.price}`}
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
