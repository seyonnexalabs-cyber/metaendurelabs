'use client';

import Link from 'next/link';
import { 
  Check, ArrowRight, ShieldCheck, Dumbbell, Activity, HeartPulse, 
  Utensils, Brain, Zap, Clock, Users, ArrowUpRight
} from 'lucide-react';
import { PRICING_TIERS } from '@/lib/constants';

export default function WeOfferPage() {
  const servicePillars = [
    {
      id: 'endurance-coaching',
      icon: Activity,
      title: 'Endurance Coaching & Periodization',
      badge: 'Individualized',
      color: 'text-emerald-400',
      headerGradient: 'from-emerald-500/25 via-emerald-600/10 to-transparent',
      borderColor: 'border-emerald-500/30',
      description: 'Structured, scientifically periodized training for Marathoners, Half-Marathoners, and Multi-Sport Athletes. Every week is mapped based on physiological adaptations and current fatigue markers.',
      features: [
        'Customized weekly TrainingPeaks workout programming',
        'Heart rate reserve & lactate threshold zone matching',
        'Weekly coach sync calls & live metric feedback',
        'Dynamic tapering & race week carb-loading schedules'
      ],
      price: '₹7,500 / month'
    },
    {
      id: 'hyrox-simulation',
      icon: Dumbbell,
      title: 'HYROX Race Simulation & Strength',
      badge: 'Official Arena',
      color: 'text-amber-400',
      headerGradient: 'from-amber-500/25 via-yellow-600/10 to-transparent',
      borderColor: 'border-amber-500/30',
      description: 'The definitive HYROX conditioning system. Master compromised running, sled push/pull mechanics, and burpee broad jumps with laser timing and official competition weights.',
      features: [
        'Full 8-station indoor simulation arena access',
        'Compromised running pacing and cadence control',
        'Station transition efficiency drills',
        'Pro & Open division benchmark assessments'
      ],
      price: '₹6,500 / month'
    },
    {
      id: 'sports-physio',
      icon: HeartPulse,
      title: 'Sports Physiotherapy & Injury Prevention',
      badge: 'Clinical Partner',
      color: 'text-rose-400',
      headerGradient: 'from-rose-500/25 via-red-600/10 to-transparent',
      borderColor: 'border-rose-500/30',
      description: 'Powered by Dr Physio Sports Clinic. Rapid recovery protocols, dry needling, joint articulation, and biomechanical injury profiling to keep you competing uninterrupted.',
      features: [
        'Gait & movement pattern screenings',
        'Pre-hab corrective exercise prescriptions',
        'Post-long run percussion and compression therapy',
        'Direct coordination between coach and physiotherapist'
      ],
      price: 'Included / Pack'
    },
    {
      id: 'metabolic-testing',
      icon: Zap,
      title: 'Metabolic & Lactate Threshold Testing',
      badge: 'Precision Lab',
      color: 'text-cyan-400',
      headerGradient: 'from-cyan-500/25 via-blue-600/10 to-transparent',
      borderColor: 'border-cyan-500/30',
      description: 'Lab-grade metabolic cart assessments and blood lactate finger-stick testing to uncover your true anaerobic turnpoint, FatMax oxidation rate, and VO2 ceiling.',
      features: [
        'Multi-stage graded treadmill lactate profile',
        'FatMax vs Carb utilization curve analysis',
        'Heart rate & pace zone boundary determination',
        'Complete 12-page sports science diagnostic report'
      ],
      price: '₹5,000 / test'
    },
    {
      id: 'sports-nutrition',
      icon: Utensils,
      title: 'Performance Nutrition & Hydration',
      badge: 'Endurance Fueling',
      color: 'text-orange-400',
      headerGradient: 'from-orange-500/25 via-amber-600/10 to-transparent',
      borderColor: 'border-orange-500/30',
      description: 'Sweat sodium analysis and precision gut-training for endurance racing. Eliminate GI distress, cramping, and low blood glucose crashes on long days.',
      features: [
        'Sweat electrolyte & sodium loss testing',
        '60-90g/hr carbohydrate tolerance conditioning',
        'Daily macronutrient periodization for recovery',
        'Custom race day fueling and hydration timeline'
      ],
      price: '₹4,000 / consult'
    },
    {
      id: 'mental-resilience',
      icon: Brain,
      title: 'Sports Psychology & Mental Resilience',
      badge: 'Mindset',
      color: 'text-purple-400',
      headerGradient: 'from-purple-500/25 via-violet-600/10 to-transparent',
      borderColor: 'border-purple-500/30',
      description: 'Endurance racing is 90% psychological when physical reserves dwindle. Develop self-talk strategies, acute pain tolerance, and visualization drills for peak race execution.',
      features: [
        'Cognitive reframing under intense fatigue',
        'Pre-race anxiety regulation techniques',
        'Pacing mindfulness and focus retention',
        'Post-race debriefs and psychological resets'
      ],
      price: 'Integrated'
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            Comprehensive Athletic Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">OFFER</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            One singular, integrated science-backed ecosystem uniting endurance coaching, HYROX simulation, clinical physiotherapy, and metabolic diagnostic testing.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePillars.map((srv) => {
            const Icon = srv.icon;
            return (
              <div 
                key={srv.id}
                className={`group relative rounded-3xl bg-zinc-900/70 border ${srv.borderColor} overflow-hidden flex flex-col justify-between hover:bg-zinc-900/95 transition-all duration-300 shadow-xl`}
              >
                <div>
                  {/* Colorful Card Header Banner */}
                  <div className={`h-24 bg-gradient-to-r ${srv.headerGradient} border-b border-white/10 p-5 flex items-center justify-between`}>
                    <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <Icon className={`w-6 h-6 ${srv.color}`} />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/50 text-white border border-white/15">
                      {srv.badge}
                    </span>
                  </div>

                  <div className="p-7 space-y-5">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {srv.description}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-2 border-t border-zinc-800/80">
                      <div className="text-[11px] font-mono text-zinc-500 uppercase">Key Inclusions</div>
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Check className={`w-3.5 h-3.5 ${srv.color} shrink-0 mt-0.5`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-4 border-t border-zinc-800/80 flex items-center justify-between mt-4">
                  <span className="font-mono text-xs font-bold text-white">{srv.price}</span>
                  <Link
                    href={`/dashboard/checkout?plan=${srv.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Enroll Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* WHO WE SERVE */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-widest text-[#76C043] font-bold bg-[#76C043]/10 px-3 py-1 rounded-full border border-[#76C043]/20">
              Athlete Cohorts
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Who We Serve</h2>
            <p className="text-zinc-400 text-sm">
              MetaEndure Labs helps anyone committed to becoming a better version of themselves.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Endurance Athletes */}
            <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Endurance Athletes</h3>
                <p className="text-xs text-zinc-400 mt-1">Pursuing peak performance &amp; PR breakthroughs.</p>
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />Runners (5K to Marathon)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />Cyclists</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />Triathletes (70.3 &amp; 140.6)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />Ultra-distance athletes</li>
              </ul>
            </div>

            {/* Working Professionals */}
            <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4 hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Working Professionals</h3>
                <p className="text-xs text-zinc-400 mt-1">Calibrating energy, stamina, and career endurance.</p>
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />Busy individuals seeking sustainable fitness</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />Leaders wanting increased resilience and energy</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />Professionals managing stress and performance</li>
              </ul>
            </div>

            {/* Transformation Seekers */}
            <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4 hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Transformation Seekers</h3>
                <p className="text-xs text-zinc-400 mt-1">Systematic body recomp and lasting habits.</p>
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />Weight loss journeys</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />Lifestyle optimization</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />Habit-building and consistency development</li>
              </ul>
            </div>

            {/* High Performers */}
            <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4 hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">High Performers</h3>
                <p className="text-xs text-zinc-400 mt-1">Mastery across sport, discipline, and execution.</p>
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />Entrepreneurs</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />Executives</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />Competitive athletes</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />Individuals pursuing excellence</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Memberships & Pricing Plans */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">Transparent Subscriptions</span>
            <h2 className="text-3xl font-black text-white">Choose Your Training Package</h2>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto">
              Ready to embark? Pick your membership package and seamlessly checkout with Razorpay (INR/UPI) or Stripe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between border transition-all ${
                  tier.highlighted
                    ? 'bg-zinc-950 border-emerald-500/80 shadow-2xl shadow-emerald-500/10 scale-105'
                    : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-zinc-400 mt-1">{tier.description}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                    <span className="text-xs text-zinc-400 font-mono">/ {tier.interval}</span>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-zinc-800">
                    <div className="text-xs font-mono text-zinc-400 uppercase">What is included:</div>
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/dashboard/checkout?plan=${tier.id}`}
                    className={`w-full py-3 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all ${
                      tier.highlighted
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/25'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    }`}
                  >
                    <span>Select {tier.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="rounded-3xl p-8 bg-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">100% Adaptation Guarantee</h4>
              <p className="text-xs text-zinc-400">If your lactate threshold or running economy metrics do not show measurable improvement in 90 days, we rework your protocol free.</p>
            </div>
          </div>
          <Link
            href="/schedule"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs whitespace-nowrap"
          >
            Schedule Free Strategy Call
          </Link>
        </div>
      </div>
    </div>
  );
}
