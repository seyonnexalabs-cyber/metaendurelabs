import { Coach, Partner, PricingTier, HyroxStation, WaveSlot, CourseCohort } from './types';
import { 
  Activity, 
  Brain, 
  Microscope, 
  Flame, 
  HeartPulse, 
  Repeat, 
  Clock, 
  ShieldCheck, 
  Target, 
  Compass, 
  Sparkles, 
  Award, 
  TrendingUp, 
  Zap, 
  Layers, 
  FileCheck,
  Dumbbell,
  Timer,
  Crown,
  Briefcase,
  Utensils,
  Building,
  Mail,
  Share2,
  Trophy,
  Users,
  Medal,
  Mountain,
  Bike,
  Footprints,
  Stethoscope,
  Gauge,
  Scale,
  Thermometer,
  RefreshCw,
  Apple
} from 'lucide-react';

/* ==========================================================================
   1. COACHES & ATHLETIC TEAM (Slide 22)
   ========================================================================== */

export const COACHES: Coach[] = [
  {
    id: 'sunil-menon',
    name: 'Sunil Menon',
    role: 'CEO & Founder MFS, Performance Neuroscience Coach',
    experience: 'Master Endurance Coach',
    specialties: ['Menon Fitness System', 'Race Craft Labs', 'Performance Neuroscience'],
    bio: 'CEO & Founder MFS, Performance Neuroscience Coach. Race Craft Labs / Menon Fitness Systems.',
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  {
    id: 'rashmi',
    name: 'Rashmi',
    role: 'Founder WefitYoga',
    experience: 'Wefityogaandfitness',
    specialties: ['WefitYoga', 'Functional Fitness', 'Mindset & Mobility'],
    bio: 'Founder WefitYoga & Wefityogaandfitness.',
    availableDays: ['Tue', 'Thu', 'Sat', 'Sun']
  },
  {
    id: 'sucharita-uday-karelia',
    name: 'Sucharita Uday Karelia',
    role: 'Strength Training Coach',
    experience: 'Strength & Conditioning',
    specialties: ['Strength Training', 'Athlete Conditioning', 'Injury Resilience'],
    bio: 'Strength Training Coach & Strength Conditioning Specialist.',
    availableDays: ['Mon', 'Wed', 'Fri']
  },
  {
    id: 'marimuthu-sathasivam',
    name: 'Marimuthu Sathasivam',
    role: 'Strength & Conditioning Coach',
    experience: 'Race Craft Labs Coach',
    specialties: ['Strength & Conditioning', 'Biomechanics', 'Endurance Performance'],
    bio: 'Strength & Conditioning Coach associated with Race Craft Labs.',
    availableDays: ['Mon', 'Tue', 'Thu', 'Fri']
  },
  {
    id: 'sujai-s',
    name: 'Sujai S',
    role: 'Founder, METAENDURE LABS | Pro Athlete Endurance Cyclist & Triathlon',
    experience: 'IRONMAN 70.3 Finisher',
    specialties: ['Endurance Cycling', 'Triathlon Coaching', 'Performance Systems'],
    bio: 'Founder, METAENDURE LABS. Endurance Athlete, IRONMAN 70.3 Finisher, Pro Athlete Endurance Cyclist & Triathlon.',
    availableDays: ['Mon', 'Wed', 'Sat']
  },
  {
    id: 'mudit-kohli',
    name: 'Mudit Kohli',
    role: 'Triathlete & Coach (Triathlon)',
    experience: 'Triathlon Coach',
    specialties: ['Triathlon (Swim / Bike / Run)', 'Race Strategy', 'Multi-sport Pacing'],
    bio: 'Triathlete & Coach (Triathlon).',
    availableDays: ['Wed', 'Fri', 'Sat', 'Sun']
  }
];

/* ==========================================================================
   2. STRATEGIC PARTNERS (Slide 23)
   ========================================================================== */

export const PARTNERS: Partner[] = [
  {
    id: 'menon-fitness-race-craft',
    name: 'Menon Fitness System / Race Craft Labs',
    category: 'Performance & Neuroscience',
    lead: 'Coach Sunil Menon',
    description: 'Menon Fitness System / Race Craft Labs – Led by Coach Sunil Menon.',
    perk: 'Evidence-based coaching and neuroscience frameworks',
    services: [
      'Menon Fitness System (MFS)',
      'Race Craft Labs Diagnostics',
      'Performance Neuroscience Coaching'
    ]
  },
  {
    id: 'dr-physio',
    name: 'Dr Physio Clinic',
    category: 'Therapeutic Sports Massage',
    lead: 'Dr Prince Jacob',
    description: 'Dr Physio Clinic (Therapeutic Sports Massage) – Led by Dr Prince Jacob.',
    perk: 'Therapeutic sports massage and musculoskeletal rehabilitation',
    services: [
      'Therapeutic Sports Massage',
      'Sports Physiotherapy',
      'Injury Recovery & Rehabilitation'
    ]
  },
  {
    id: 'wefityoga',
    name: 'Wefityogaandfitness',
    category: 'Yoga & Functional Movement',
    lead: 'Coach Rashmi',
    description: 'Wefityogaandfitness – Led by Founder Coach Rashmi.',
    perk: 'Mobility, recovery sessions, and functional body control',
    services: [
      'WefitYoga Sessions',
      'Functional Conditioning',
      'Mobility & Core Stability'
    ]
  },
  {
    id: 'strength-training-suchitra',
    name: 'Strength Training',
    category: 'Strength & Conditioning',
    lead: 'Coach Suchitra',
    description: 'Strength Training – Led by Coach Suchitra.',
    perk: 'Functional strength training tailored for endurance athletes',
    services: [
      'Strength Training Programs',
      'Endurance Support Conditioning',
      'Movement Quality & Power'
    ]
  }
];

/* ==========================================================================
   3. FRAMEWORK PILLARS (Slide 9: E.M.S.P.)
   ========================================================================== */

export const FRAMEWORK_PILLARS = [
  {
    letter: 'E',
    title: 'Endurance',
    subtitle: 'The ability to keep going when others stop.',
    icon: Activity,
    badgeColor: 'text-[#2e7d32] dark:text-[#76C043] bg-emerald-500/15 border-emerald-500/30',
    borderColor: 'border-emerald-500/30 dark:border-[#76C043]/30 hover:border-[#2e7d32] dark:hover:border-[#76C043]',
    accentColor: 'text-[#2e7d32] dark:text-[#76C043]',
    quoteBg: 'bg-emerald-50/70 dark:bg-black/40 border-emerald-500/20 dark:border-[#76C043]/20',
    quote: '"Endurance is not about speed. It\'s about staying in the game."',
    items: [
      { icon: HeartPulse, text: 'Physical stamina' },
      { icon: Repeat, text: 'Recovery' },
      { icon: Clock, text: 'Consistency' },
      { icon: ShieldCheck, text: 'Long-term discipline' },
    ],
  },
  {
    letter: 'M',
    title: 'Mindset',
    subtitle: 'The engine behind endurance.',
    icon: Brain,
    badgeColor: 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/15 border-indigo-500/30',
    borderColor: 'border-zinc-200 dark:border-white/10 hover:border-indigo-500',
    accentColor: 'text-indigo-600 dark:text-indigo-400',
    quoteBg: 'bg-zinc-50 dark:bg-black/40 border-zinc-200 dark:border-white/10',
    quote: '"The body follows where the mind leads."',
    items: [
      { icon: Target, text: 'Mental resilience' },
      { icon: Compass, text: 'Focus' },
      { icon: Sparkles, text: 'Self-belief' },
      { icon: Award, text: 'Grit' },
    ],
  },
  {
    letter: 'S',
    title: 'Science',
    subtitle: 'The differentiator.',
    icon: Microscope,
    badgeColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/15 border-cyan-500/30',
    borderColor: 'border-cyan-500/30 dark:border-cyan-500/30 hover:border-cyan-500',
    accentColor: 'text-cyan-600 dark:text-cyan-400',
    quoteBg: 'bg-cyan-50/70 dark:bg-black/40 border-cyan-500/20 dark:border-cyan-500/30',
    quote: '"We don\'t guess. We measure."',
    items: [
      { icon: TrendingUp, text: 'Data-driven training' },
      { icon: Zap, text: 'Sports science' },
      { icon: Activity, text: 'Biometrics' },
      { icon: Layers, text: 'Performance testing' },
      { icon: FileCheck, text: 'Evidence-based coaching' },
    ],
  },
  {
    letter: 'P',
    title: 'Performance',
    subtitle: 'The outcome.',
    icon: Flame,
    badgeColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/15 border-amber-500/30',
    borderColor: 'border-amber-500/30 dark:border-amber-500/30 hover:border-amber-500',
    accentColor: 'text-amber-600 dark:text-amber-400',
    quoteBg: 'bg-amber-50/70 dark:bg-black/40 border-amber-500/20 dark:border-amber-500/30',
    quote: '"Performance is the result of endurance, mindset, and science working together."',
    items: [
      { icon: Zap, text: 'Faster' },
      { icon: Award, text: 'Stronger' },
      { icon: HeartPulse, text: 'Healthier' },
      { icon: ShieldCheck, text: 'More resilient' },
    ],
  },
];

/* ==========================================================================
   4. KEY DIFFERENTIATORS (Slide 13)
   ========================================================================== */

export const KEY_DIFFERENTIATORS = [
  { num: '01', title: 'Mindset + Science Together', desc: 'Mental conditioning integrated with sports science.', icon: Brain, color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20' },
  { num: '02', title: 'Data-Driven, Not Guesswork', desc: 'Testing, metrics, and measurable progression.', icon: Microscope, color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20' },
  { num: '03', title: 'Holistic Athlete Development', desc: 'Endurance, strength, mobility, and recovery combined.', icon: HeartPulse, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' },
  { num: '04', title: 'Beyond Fitness to Life', desc: 'Endurance as a philosophy for career, life, and personal growth.', icon: Sparkles, color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
  { num: '05', title: 'Community of Relentless Pursuers', desc: 'A tribe of individuals committed to excellence.', icon: Users, color: 'text-rose-500 bg-rose-500/10 border-rose-500/20' }
];

/* ==========================================================================
   6. 3 PILLARS: ENDURE, EVOLVE, EXCEL (Slide 7)
   ========================================================================== */

export const THREE_PILLARS = [
  {
    id: '01',
    title: 'ENDURE',
    phase: 'The Foundational Phase',
    desc: 'The foundational phase of resilience, grit, and survival. It represents the capacity to withstand hardships, absorb pressure, maintain discipline, and persist through setbacks or unfavourable conditions without quitting.',
    icon: Activity,
    badgeColor: 'text-[#2e7d32] dark:text-[#76C043] bg-emerald-500/15 border-emerald-500/30',
    borderHover: 'hover:border-[#2e7d32] dark:hover:border-[#76C043]',
    borderColor: 'border-emerald-500/30 dark:border-[#76C043]/30',
    accentColor: 'text-[#2e7d32] dark:text-[#76C043]',
  },
  {
    id: '02',
    title: 'EVOLVE',
    phase: 'The Intermediate Phase',
    desc: 'The intermediate phase of adaptation and growth. Once you survive the initial pressure, you must learn, shift your mindset, update your strategies, and transform your capabilities to align with a changing environment rather than remaining stagnant.',
    icon: Brain,
    badgeColor: 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/15 border-indigo-500/30',
    borderHover: 'hover:border-indigo-500',
    borderColor: 'border-zinc-200 dark:border-white/10',
    accentColor: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    id: '03',
    title: 'EXCEL',
    phase: 'The Ultimate Phase',
    desc: 'The ultimate phase of high performance and achievement. By successfully withstanding adversity (enduring) and adapting to new demands (evolving), you ultimately surpass previous limitations, outperform peers, and achieve mastery or market leadership.',
    icon: Flame,
    badgeColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/15 border-amber-500/30',
    borderHover: 'hover:border-amber-500',
    borderColor: 'border-amber-500/30 dark:border-amber-500/30',
    accentColor: 'text-amber-600 dark:text-amber-400',
  },
];

/* ==========================================================================
   7. AUDIENCES WE SERVE (Slide 10)
   ========================================================================== */

export const AUDIENCE_GROUPS = [
  {
    title: 'Endurance Athletes',
    icon: Activity,
    color: 'text-emerald-500 bg-emerald-500/15 border-emerald-500/20',
    items: ['Runners', 'Cyclists', 'Triathletes', 'Ultra-distance athletes']
  },
  {
    title: 'Working Professionals',
    icon: Briefcase,
    color: 'text-indigo-500 bg-indigo-500/15 border-indigo-500/20',
    items: [
      'Busy individuals seeking sustainable fitness',
      'Leaders wanting increased resilience and energy',
      'Professionals managing stress and performance'
    ]
  },
  {
    title: 'Transformation Seekers',
    icon: TrendingUp,
    color: 'text-amber-500 bg-amber-500/15 border-amber-500/20',
    items: [
      'Weight loss journeys',
      'Lifestyle optimization',
      'Habit-building and consistency development'
    ]
  },
  {
    title: 'High Performers',
    icon: Crown,
    color: 'text-rose-500 bg-rose-500/15 border-rose-500/20',
    items: [
      'Entrepreneurs',
      'Executives',
      'Competitive athletes',
      'Individuals pursuing excellence'
    ]
  }
];

/* ==========================================================================
   8. WHAT WE OFFER (Slide 11 & Slide 21)
   ========================================================================== */

export const OFFERING_CATEGORIES = [
  {
    title: 'Endurance Coaching',
    icon: Timer,
    color: 'text-emerald-500 bg-emerald-500/15 border-emerald-500/20',
    items: [
      '5K, 10K, Half Marathon, Marathon',
      'Race preparation plans',
      'Personalized coaching'
    ]
  },
  {
    title: 'Triathlon Coaching',
    icon: Award,
    color: 'text-cyan-500 bg-cyan-500/15 border-cyan-500/20',
    items: [
      'Swim, Bike, Run integration',
      'Structured training plans',
      'Race strategy guidance'
    ]
  },
  {
    title: 'Performance Nutrition',
    icon: Utensils,
    color: 'text-amber-500 bg-amber-500/15 border-amber-500/20',
    items: [
      'Sports nutrition fundamentals',
      'Race fuelling strategies',
      'Weight management'
    ]
  },
  {
    title: 'Mindset Development',
    icon: Brain,
    color: 'text-indigo-500 bg-indigo-500/15 border-indigo-500/20',
    items: [
      'Resilience coaching',
      'Goal achievement framework',
      'Performance psychology principles'
    ]
  }
];

export const CORE_SERVICE_PILLARS = [
  { title: 'ENDURANCE PERFORMANCE COACHING', icon: Activity, color: 'text-emerald-500 bg-emerald-500/15' },
  { title: 'TRIATHLON PERFORMANCE COACHING', icon: Crown, color: 'text-cyan-500 bg-cyan-500/15' },
  { title: 'HYROX PERFORMANCE COACHING', icon: Dumbbell, color: 'text-amber-500 bg-amber-500/15' },
  { title: 'PERFORMANCE NUTRITION', icon: Utensils, color: 'text-rose-500 bg-rose-500/15' },
  { title: 'CHAMPION MINDSET COACHING', icon: Brain, color: 'text-indigo-500 bg-indigo-500/15' },
  { title: 'REHABILITATION', icon: HeartPulse, color: 'text-teal-500 bg-teal-500/15' }
];

/* ==========================================================================
   9. CONTACT & COMMUNITY (Slide 22 & Slide 24)
   ========================================================================== */

export const CONTACT_CHANNELS = [
  {
    title: 'Official Website',
    value: 'www.metaendurelabs.com',
    desc: 'Explore programs, community schedules, and scientific coaching.',
    href: 'https://www.metaendurelabs.com',
    icon: Building,
    color: 'text-emerald-500 bg-emerald-500/15 border-emerald-500/20'
  },
  {
    title: 'Direct Email',
    value: 'sujai@metaendurelabs.com',
    desc: 'Athlete admissions, partnership inquiries, and corporate training.',
    href: 'mailto:sujai@metaendurelabs.com',
    icon: Mail,
    color: 'text-indigo-500 bg-indigo-500/15 border-indigo-500/20'
  },
  {
    title: 'Social & Inquiries',
    value: '@metaendurelabs',
    desc: 'Connect with our athletes, coaches, and daily community stories.',
    icon: Share2,
    color: 'text-amber-500 bg-amber-500/15 border-amber-500/20'
  }
];

/* ==========================================================================
   11. HYROX STATIONS, PRICING & BENCHMARKS
   ========================================================================== */

export const HYROX_STATIONS: HyroxStation[] = [
  { 
    station: 1, 
    num: '01', 
    name: '1000m SkiErg', 
    distance: '1,000m', 
    description: 'Tests upper body pulling power and hip hinge. Men Pro: Damper 6-8, Women/Open: Damper 5-6.',
    focus: 'Lats, core, and posterior chain pacing to prevent heart spike before run 2',
    iconName: 'Wind'
  },
  { 
    station: 2, 
    num: '02', 
    name: '50m Sled Push', 
    distance: '4 x 12.5m', 
    description: 'Men Pro: 202kg incl. sled | Open Men/Pro Women: 152kg | Open Women: 102kg.',
    focus: 'Leg drive angle, quad endurance, and metabolic resistance under heavy load',
    iconName: 'Weight'
  },
  { 
    station: 3, 
    num: '03', 
    name: '50m Sled Pull', 
    distance: '4 x 12.5m', 
    description: 'Men Pro: 153kg | Open Men/Pro Women: 103kg | Open Women: 78kg.',
    focus: 'Foot bracing, rope cadence, grip management, and forearm fatigue control',
    iconName: 'Anchor'
  },
  { 
    station: 4, 
    num: '04', 
    name: '80m Burpee Broad Jumps', 
    distance: '80 meters', 
    description: 'Chest to deck touch required every repetition with two-foot takeoff on broad jump.',
    focus: 'Chest-to-deck rhythm, hip pop, jump distance efficiency, breath control',
    iconName: 'MoveUpRight'
  },
  { 
    station: 5, 
    num: '05', 
    name: '1000m Rowing', 
    distance: '1,000m', 
    description: 'Concept2 RowErg with damper setting strictly regulated to competition standard.',
    focus: 'Stroke rate 28-32 SPM, damper calibration, aerobic power preservation',
    iconName: 'Waves'
  },
  { 
    station: 6, 
    num: '06', 
    name: '200m Farmers Carry', 
    distance: '200 meters', 
    description: 'Men Pro: 2 x 32kg kettlebells | Open Men/Pro Women: 2 x 24kg | Open Women: 2 x 16kg.',
    focus: 'Kettlebell trap stabilization, ribcage expansion, rhythmic brisk gait',
    iconName: 'Dumbbell'
  },
  { 
    station: 7, 
    num: '07', 
    name: '100m Sandbag Lunges', 
    distance: '100 meters', 
    description: 'Men Pro: 30kg sandbag | Open Men/Pro Women: 20kg | Open Women: 10kg.',
    focus: 'Shoulder rack stability, knee angle control, glute endurance under burn',
    iconName: 'Footprints'
  },
  { 
    station: 8, 
    num: '08', 
    name: '100 Wall Balls', 
    distance: '100 reps', 
    description: 'Men Pro: 9kg to 10ft | Open Men/Pro Women: 6kg to 10ft/9ft | Open Women: 4kg to 9ft.',
    focus: 'Squat depth rhythm, target accuracy, shoulder endurance to the finish line',
    iconName: 'Target'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'foundational',
    name: 'Foundational Endurance',
    price: '₹4,500',
    interval: 'month',
    description: 'Essential scientific programming for half marathoners and fitness runners.',
    features: [
      'Structured weekly TrainingPeaks workout plan',
      'Heart rate zone calibration guidelines',
      'Monthly coach check-in review',
      'Access to weekend cohort supported long runs'
    ]
  },
  {
    id: 'pro-endurance',
    name: 'Pro Endurance Coaching',
    price: '₹7,500',
    interval: 'month',
    highlighted: true,
    description: 'Our flagship 1-on-1 coaching for ambitious marathoners, triathletes, and HYROX competitors.',
    features: [
      'Fully individualized TrainingPeaks adaptive plan',
      'Weekly coach sync call & split analysis',
      'Blood lactate threshold zone matching',
      'Bi-weekly HYROX arena simulation wave entry',
      '15% discount on Dr Physio Sports Clinic visits'
    ]
  },
  {
    id: 'elite-hybrid',
    name: 'Elite Hybrid / Kona Tier',
    price: '₹14,500',
    interval: 'month',
    description: 'Comprehensive high-performance squad membership for podium and BQ contenders.',
    features: [
      'Unlimited 1-on-1 coach access with Sunil Menon',
      'Quarterly laboratory blood lactate & VO2 tests included',
      'Unlimited HYROX simulation wave passes',
      'Direct Dr Physio monthly screening and dry needling',
      'Customized MetaFuel sweat electrolyte fueling protocol'
    ]
  }
];

export const MOCK_ATHLETE = {
  id: 'MEL-ATH-2026-44',
  name: 'Vijay Raghavan',
  email: 'vijay.triathlon@example.com',
  targetRace: 'Tata Mumbai Marathon 2027 (Sub-3:15 Target)',
  vo2Max: 56.4,
  restingHR: 46,
  hrv: 78,
  lactateThresholdPace: '4:18',
  weeklyDistanceKm: 54.2,
  targetWeeklyDistanceKm: 70.0,
  assignedCoach: 'Sunil Menon'
};

/* ==========================================================================
   SCHEDULE WAVE AVAILABILITY & COHORT CAPACITY DATA (Single Source of Truth)
   ========================================================================== */

export const SCHEDULE_WAVE_SLOTS: WaveSlot[] = [
  {
    id: 'wave-1',
    time: '06:00 AM - 07:15 AM',
    maxCapacity: 6,
    bookedCount: 5,
    coachId: 'sunil-menon',
    category: 'hyrox',
    status: 'filling-fast'
  },
  {
    id: 'wave-2',
    time: '07:15 AM - 08:30 AM',
    maxCapacity: 6,
    bookedCount: 6,
    coachId: 'rashmi',
    category: 'hyrox',
    status: 'waitlist'
  },
  {
    id: 'wave-3',
    time: '08:45 AM - 09:45 AM',
    maxCapacity: 2,
    bookedCount: 1,
    coachId: 'sunil-menon',
    category: 'lab',
    status: 'available'
  },
  {
    id: 'wave-4',
    time: '10:00 AM - 11:00 AM',
    maxCapacity: 3,
    bookedCount: 1,
    coachId: 'sucharita-uday-karelia',
    category: 'consult',
    status: 'available'
  },
  {
    id: 'wave-5',
    time: '04:30 PM - 05:45 PM',
    maxCapacity: 6,
    bookedCount: 2,
    coachId: 'marimuthu-sathasivam',
    category: 'hyrox',
    status: 'available'
  },
  {
    id: 'wave-6',
    time: '06:00 PM - 07:15 PM',
    maxCapacity: 6,
    bookedCount: 5,
    coachId: 'rashmi',
    category: 'hyrox',
    status: 'filling-fast'
  },
  {
    id: 'wave-7',
    time: '07:30 PM - 08:30 PM',
    maxCapacity: 4,
    bookedCount: 1,
    coachId: 'sucharita-uday-karelia',
    category: 'physio',
    status: 'available'
  }
];

export const SCHEDULE_COURSE_COHORTS: CourseCohort[] = [
  {
    id: 'cohort-hyrox-fdn-oct',
    courseId: 'course-hyrox-foundation',
    title: 'Beginner HYROX Foundation Program',
    startDate: 'Oct 5, 2026',
    maxCapacity: 16,
    enrolledCount: 12,
    schedule: '3x / week (Tue, Thu 06:30 AM + Sat 07:00 AM)'
  },
  {
    id: 'cohort-hyrox-perf-oct',
    courseId: 'course-hyrox-performance',
    title: 'Intermediate HYROX Performance Program',
    startDate: 'Oct 12, 2026',
    maxCapacity: 14,
    enrolledCount: 11,
    schedule: '4x / week (Mon, Wed, Fri 06:00 AM + Sun Wave 06:30 AM)'
  },
  {
    id: 'cohort-marathon-sub3-oct',
    courseId: 'course-marathon-sub3',
    title: 'Sub-3h & Ultra Endurance Mastery Course',
    startDate: 'Oct 1, 2026',
    maxCapacity: 12,
    enrolledCount: 9,
    schedule: '5x / week structured (Tue/Thu Track + Sun Cohort LSR)'
  },
  {
    id: 'cohort-triathlon-703-oct',
    courseId: 'course-triathlon-703',
    title: 'IRONMAN 70.3 Multi-Sport Blueprint',
    startDate: 'Oct 15, 2026',
    maxCapacity: 10,
    enrolledCount: 7,
    schedule: 'Multi-Discipline (Pool, Aero Bike & Run Bricks)'
  }
];

/* ==========================================================================
   HOMEPAGE & ABOUT DATA COLLECTIONS (No Hardcoded Arrays in Pages)
   ========================================================================== */

export const HOMEPAGE_SYSTEM_STEPS = [
  { step: 'STEP 1', title: 'ASSESS', desc: 'Understand current fitness, habits, lifestyle, and goals.', icon: Activity, border: 'border-l-emerald-500', color: 'text-emerald-600 dark:text-[#76C043] bg-emerald-500/15' },
  { step: 'STEP 2', title: 'PLAN', desc: 'Build a science-backed roadmap tailored to the individual.', icon: Layers, border: 'border-l-cyan-500', color: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/15' },
  { step: 'STEP 3', title: 'EXECUTE', desc: 'Apply structured training, nutrition, and recovery strategies.', icon: Flame, border: 'border-l-amber-500', color: 'text-amber-600 dark:text-amber-400 bg-amber-500/15' },
  { step: 'STEP 4', title: 'ADAPT', desc: 'Review performance data and refine the plan continuously.', icon: Sparkles, border: 'border-l-indigo-500', color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/15' },
  { step: 'STEP 5', title: 'ACHIEVE', desc: 'Deliver measurable improvements and sustainable results.', icon: Award, border: 'border-l-rose-500', color: 'text-rose-600 dark:text-rose-400 bg-rose-500/15' },
  { step: 'STEP 6', title: 'EVOLVE', desc: 'Create lifelong habits that drive continuous growth.', icon: HeartPulse, border: 'border-l-violet-500', color: 'text-violet-600 dark:text-violet-400 bg-violet-500/15' }
];

export const FOUNDER_ATHLETIC_MILESTONES = [
  { label: '10K', stat: '1:08:36 → 43:06', icon: Footprints, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' },
  { label: 'Half Marathon', stat: '1:57:55 → 1:40:45', icon: Medal, color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
  { label: 'Marathon', stat: 'Marathon Finisher', icon: Target, color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20' },
  { label: 'Ultra Marathon', stat: 'Ultra Marathon Finisher (50K & 43K)', icon: Mountain, color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20' },
  { label: 'Triathlons', stat: 'Multiple Triathlon Finisher (BMF & BERGMAN)', icon: Bike, color: 'text-violet-500 bg-violet-500/10 border-violet-500/20' },
  { label: '5K Podium', stat: '5K Podium Finish (2023)', icon: Trophy, color: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20' },
  { label: 'IRONMAN', stat: 'IRONMAN Goa 70.3 Finisher (2025)', icon: Crown, color: 'text-rose-500 bg-rose-500/10 border-rose-500/20' }
];

export const DETAILED_SPORTS_DISCIPLINES = [
  {
    num: 'DISCIPLINE 01',
    title: 'MARATHON',
    accentColor: 'border-t-emerald-500',
    tagColor: 'text-emerald-600 dark:text-[#76C043]',
    badgeBg: 'bg-emerald-500/15 text-emerald-600 dark:text-[#76C043]',
    icon: Footprints,
    badgeText: '10K / HM / FM / ULTRA',
    badgeIcon: Activity,
    desc: 'Structured endurance and distance pacing.',
    items: null,
  },
  {
    num: 'DISCIPLINE 02',
    title: 'TRAIL RACING',
    accentColor: 'border-t-amber-500',
    tagColor: 'text-amber-600 dark:text-amber-400',
    badgeBg: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
    icon: Mountain,
    badgeText: 'ELEVATION • ULTRA RUNS',
    badgeIcon: Layers,
    desc: 'Technical terrain adaptation and stamina.',
    items: null,
  },
  {
    num: 'DISCIPLINE 03',
    title: 'TRIATHLON',
    accentColor: 'border-t-cyan-500',
    tagColor: 'text-cyan-600 dark:text-cyan-400',
    badgeBg: 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400',
    icon: Bike,
    badgeText: 'SWIM • BIKE • RUN • BRICK',
    badgeIcon: Zap,
    desc: 'Multi-discipline balance and endurance.',
    items: null,
  },
  {
    num: 'DISCIPLINE 04',
    title: 'HYROX',
    accentColor: 'border-t-[#76C043]',
    tagColor: 'text-emerald-600 dark:text-[#76C043]',
    badgeBg: 'bg-emerald-500/15 text-emerald-600 dark:text-[#76C043]',
    icon: Dumbbell,
    badgeText: '8 STATIONS • 8KM RUNNING',
    badgeIcon: Trophy,
    desc: 'Compromised running and strength capacity.',
    items: null,
  },
];

export const YOUR_SPORTS_HYROX_LABS = [
  {
    step: '01',
    title: 'HYROX Structured Training',
    subtitle: 'Programs & Assessments',
    color: 'emerald',
    tagClass: 'text-emerald-600 dark:text-[#76C043]',
    badgeBg: 'bg-emerald-500/10 dark:bg-[#76C043]/10',
    iconBg: 'bg-emerald-500/15 text-emerald-600 dark:text-[#76C043]',
    icon: Activity,
    type: 'list',
    items: [
      'Beginner HYROX Foundation Program (12 weeks)',
      'Intermediate Performance Program (16 weeks)',
      'Advanced/Race Ready Program',
      'Personalized programming',
      'Performance assessments every 4-6 weeks',
    ],
    footnote: null,
  },
  {
    step: '02',
    title: 'HYROX Simulation Lab',
    subtitle: 'Dedicated Race Simulation Zone',
    color: 'amber',
    tagClass: 'text-amber-600 dark:text-amber-400',
    badgeBg: 'bg-amber-500/10 dark:bg-amber-500/20',
    iconBg: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
    icon: Dumbbell,
    type: 'stations',
    stations: [
      { name: 'SkiErg', icon: Gauge, span: '' },
      { name: 'RowErg', icon: Activity, span: '' },
      { name: 'Sled Push', icon: Zap, span: '' },
      { name: 'Sled Pull', icon: Scale, span: '' },
      { name: 'Burpee Broad Jump lanes', icon: Footprints, span: 'col-span-2' },
      { name: 'Sandbag Lunges', icon: Layers, span: '' },
      { name: 'Farmers Carry', icon: Dumbbell, span: '' },
      { name: 'Wall Balls', icon: Award, span: 'col-span-2' },
    ],
    footnote: [
      'Athletes regularly complete:',
      '• Half & Full HYROX simulations',
      '• Station-specific benchmarking & race pacing drills',
    ],
  },
  {
    step: '03',
    title: 'Pro Athlete Coaching',
    subtitle: 'Elite Coaching Sessions',
    color: 'cyan',
    tagClass: 'text-cyan-600 dark:text-cyan-400',
    badgeBg: 'bg-cyan-500/10 dark:bg-cyan-500/20',
    iconBg: 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400',
    icon: Award,
    type: 'list',
    items: [
      'Weekly masterclasses with HYROX athletes',
      'Race strategy workshops',
      'Technique analysis sessions',
      'Competition preparation camps',
    ],
    footnote: null,
  },
  {
    step: '04',
    title: 'Recovery & Rehabilitation Lab',
    subtitle: 'METAENDURE Recovery Lab',
    color: 'indigo',
    tagClass: 'text-indigo-600 dark:text-indigo-400',
    badgeBg: 'bg-indigo-500/10 dark:bg-indigo-500/20',
    iconBg: 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400',
    icon: HeartPulse,
    type: 'recovery',
    recoveryItems: [
      { text: 'Ice Baths', icon: Thermometer },
      { text: 'Infrared Sauna', icon: Flame },
      { text: 'Mobility Sessions', icon: Activity },
      { text: 'Sports Massage Partnerships', icon: ShieldCheck },
      { text: 'Recovery Tracking', icon: RefreshCw },
    ],
    footnote: null,
  },
  {
    step: '05',
    title: 'Race Nutrition Lab',
    subtitle: 'Fuelling Protocols',
    color: 'emerald',
    tagClass: 'text-emerald-600 dark:text-[#76C043]',
    badgeBg: 'bg-emerald-500/10 dark:bg-[#76C043]/10',
    iconBg: 'bg-emerald-500/15 text-emerald-600 dark:text-[#76C043]',
    icon: Apple,
    type: 'nutrition',
    nutritionItems: [
      { text: 'Pre-race fuelling plans', icon: Apple },
      { text: 'During-race hydration strategies', icon: Activity },
      { text: 'Carb-loading protocols', icon: Zap },
      { text: 'Recovery nutrition guidance', icon: HeartPulse },
      { text: 'Supplement education', icon: Sparkles },
    ],
    footnote: null,
  },
  {
    step: '06',
    title: 'Community & Competition',
    subtitle: 'Community Building',
    color: 'rose',
    tagClass: 'text-rose-600 dark:text-rose-400',
    badgeBg: 'bg-rose-500/10 dark:bg-rose-500/20',
    iconBg: 'bg-rose-500/15 text-rose-600 dark:text-rose-400',
    icon: Users,
    type: 'community',
    communityItems: [
      { text: 'Monthly Simulation Race Days', icon: Trophy },
      { text: 'Partner HYROX Events', icon: Users },
      { text: 'In-House Leaderboards', icon: Award },
      { text: 'Team Competitions', icon: Flame },
      { text: 'HYROX Training Camps', icon: Mountain },
    ],
    footnote: null,
  },
];

export const COMMUNITY_EVENTS_INITIATIVES = [
  { name: 'Monthly Simulation Race Days', icon: Flame, color: 'text-amber-500 bg-amber-500/15 border-amber-500/30' },
  { name: 'Partner HYROX Events', icon: Trophy, color: 'text-yellow-500 bg-yellow-500/15 border-yellow-500/30' },
  { name: 'In-House Leaderboards', icon: Award, color: 'text-cyan-500 bg-cyan-500/15 border-cyan-500/30' },
  { name: 'Team Competitions', icon: Users, color: 'text-indigo-500 bg-indigo-500/15 border-indigo-500/30' },
  { name: 'HYROX Training Camps', icon: Mountain, color: 'text-emerald-500 bg-emerald-500/15 border-emerald-500/30' }
];

export const HR_ZONE_DEFINITIONS = [
  {
    zone: 'Zone 1',
    name: 'Active Recovery',
    minPct: 0.50,
    maxPct: 0.60,
    pctMaxHr: '50% – 60% HRR',
    physiologicalRole: 'Capillary growth, lactic flushing, tissue remodeling without metabolic fatigue.',
    fuelSource: 'Pure Free Fatty Acids (95%+)',
    color: 'border-blue-500/40 text-blue-500 bg-blue-500/10'
  },
  {
    zone: 'Zone 2',
    name: 'Aerobic Base (FatMax)',
    minPct: 0.60,
    maxPct: 0.70,
    pctMaxHr: '60% – 70% HRR',
    physiologicalRole: 'Mitochondrial density, cardiac stroke volume, glycogen-sparing endurance foundation.',
    fuelSource: 'Optimal Fat Oxidation (FatMax)',
    color: 'border-[#76C043]/40 text-[#1b5e20] dark:text-[#8ff346] bg-[#76C043]/10'
  },
  {
    zone: 'Zone 3',
    name: 'Tempo / Aerobic Power',
    minPct: 0.70,
    maxPct: 0.80,
    pctMaxHr: '70% – 80% HRR',
    physiologicalRole: 'Sustained marathon race pace, neuromuscular rhythm, and aerobic efficiency.',
    fuelSource: 'Balanced 50/50 Fat & Glycogen',
    color: 'border-amber-500/40 text-amber-600 dark:text-amber-400 bg-amber-500/10'
  },
  {
    zone: 'Zone 4',
    name: 'Lactate Threshold (LT2)',
    minPct: 0.80,
    maxPct: 0.90,
    pctMaxHr: '80% – 90% HRR',
    physiologicalRole: 'Maximum steady state where lactate clearance matches production. 1-hour race ceiling.',
    fuelSource: 'Predominantly Muscle Glycogen (85%+)',
    color: 'border-orange-500/40 text-orange-600 dark:text-orange-400 bg-orange-500/10'
  },
  {
    zone: 'Zone 5',
    name: 'VO2 Max & Anaerobic Capacity',
    minPct: 0.90,
    maxPct: 1.00,
    pctMaxHr: '90% – 100% HRR',
    physiologicalRole: 'Maximum oxygen uptake, stroke output limit, short 3-5 minute interval intervals.',
    fuelSource: 'Anaerobic Glycolysis (100%)',
    color: 'border-rose-500/40 text-rose-600 dark:text-rose-400 bg-rose-500/10'
  }
];

/* ==========================================================================
   ATHLETE DASHBOARD SEED COLLECTIONS (Centralized Initial State)
   ========================================================================== */

export const INITIAL_ATHLETE_SESSIONS = [
  {
    id: 'sess-1',
    title: 'Graded Treadmill Lactate Re-Assessment',
    date: 'Tomorrow, Sept 20',
    time: '06:00 AM - 07:15 AM',
    coach: 'Sunil Menon',
    type: 'lab' as const,
    location: 'MetaEndure Labs Metabolic Testing Suite',
    status: 'confirmed' as const
  },
  {
    id: 'sess-2',
    title: 'Compromised Running Simulation Wave (Group)',
    date: 'Wed, Sept 23',
    time: '06:30 PM - 07:45 PM',
    coach: 'Rashmi',
    type: 'hyrox' as const,
    location: 'Arena Track & Sled Bay',
    status: 'confirmed' as const
  },
  {
    id: 'sess-3',
    title: 'Lower Extremity Dry Needling & Joint Flush',
    date: 'Sat, Sept 26',
    time: '09:00 AM - 09:45 AM',
    coach: 'Dr Physio Clinical Specialist',
    type: 'physio' as const,
    location: 'Sports Rehab Wing',
    status: 'confirmed' as const
  }
];

export const INITIAL_WORKOUT_LOGS = [
  {
    id: 'w-1',
    title: 'Compromised 10K Simulation Intervals',
    sport: 'hyrox' as const,
    date: 'Yesterday',
    duration: '52:14 min',
    metric: '5x (1km Run @ 4:20/km + 25m Sled Push)',
    rpe: 8,
    notes: 'Sled pushed at 152kg. Heart rate cleared to 164 bpm within 200m into each run interval.',
    zone: 'Zone 4 / Threshold'
  },
  {
    id: 'w-2',
    title: 'Aerobic Base Long Run (FatMax Calibration)',
    sport: 'running' as const,
    date: '3 days ago',
    duration: '1:42:10 hr',
    metric: '21.1 km @ 4:51/km avg',
    rpe: 6,
    notes: 'Maintained strictly under 146 bpm. Took 60g carb gel every 35 mins without gastro distress.',
    zone: 'Zone 2 / Aerobic'
  },
  {
    id: 'w-3',
    title: 'Triathlon Brick: 55km Aero Bike + 6km Stride',
    sport: 'brick' as const,
    date: 'Last Saturday',
    duration: '2:08:45 hr',
    metric: '55km Cycle (218W NP) + 6km Run (4:35/km)',
    rpe: 7,
    notes: 'Heavy legs in the first 800m off the bike. Cadence settled into 88 spm by km 2.',
    zone: 'Zone 3 / Tempo'
  }
];

export const INITIAL_COACH_MESSAGES = [
  {
    id: 'm-1',
    sender: 'coach' as const,
    senderName: 'Sunil Menon',
    text: 'Vijay, reviewed your 21km aerobic long run from Sunday. Your cardiac drift was under 3.8% across the entire 100 minutes—that indicates solid mitochondrial efficiency. Keep your hydration electrolytes at 750mg sodium/liter for this week.',
    timestamp: 'Yesterday at 04:30 PM',
    category: 'feedback' as const
  },
  {
    id: 'm-2',
    sender: 'athlete' as const,
    senderName: 'Vijay Raghavan',
    text: 'Thanks Coach! Legs felt noticeably fresher post-run than 3 weeks ago. For Wednesday’s 5x 1km compromised intervals with Coach Rashmi, should I hold 4:20/km or push to 4:15/km?',
    timestamp: 'Yesterday at 06:15 PM'
  },
  {
    id: 'm-3',
    sender: 'coach' as const,
    senderName: 'Sunil Menon',
    text: 'Hold 4:20/km strictly on the first 3 reps. The focus is rapid lactate buffering post-sled push, not burning matches early. If rep 4 feels controlled at 165 bpm, you can open up rep 5 to 4:12/km.',
    timestamp: 'Today at 07:10 AM',
    category: 'plan-change' as const
  }
];

export const INITIAL_BILLING_INVOICES = [
  {
    id: 'inv-1',
    number: 'MEL-INV-2026-089',
    date: 'Sept 1, 2026',
    plan: 'Pro Endurance Coaching (Monthly)',
    amount: '₹7,500',
    gateway: 'razorpay' as const,
    status: 'paid' as const
  },
  {
    id: 'inv-2',
    number: 'MEL-INV-2026-042',
    date: 'Aug 1, 2026',
    plan: 'Pro Endurance Coaching (Monthly)',
    amount: '₹7,500',
    gateway: 'razorpay' as const,
    status: 'paid' as const
  },
  {
    id: 'inv-3',
    number: 'MEL-INV-2026-011',
    date: 'July 15, 2026',
    plan: 'Metabolic Graded Lactate Cart Test',
    amount: '₹5,000',
    gateway: 'razorpay' as const,
    status: 'paid' as const
  }
];

export const SCHEDULE_COURSE_PROGRAMS = [
  {
    id: 'course-hyrox-foundation',
    title: 'Beginner HYROX Foundation Program',
    duration: '12 Weeks',
    level: 'Beginner / First Timer',
    badge: '12-Week Intensive',
    price: '₹18,500',
    cohort: 'Cohort Starts Oct 5, 2026',
    schedule: '3x / week (Tue, Thu 06:30 AM + Sat 07:00 AM)',
    description: 'Structured 12-week onboarding course covering compromised running technique, sled mechanics, row/ski ergonomics, and foundational lactate clearance.',
    curriculum: [
      'Weeks 1-4: Aerobic Base & Station Ergonomics (SkiErg & RowErg technique)',
      'Weeks 5-8: Compromised Running Adaptation & Sled Load Progression',
      'Weeks 9-11: Full Station Sequencing & Pacing Calibration',
      'Week 12: Half HYROX Benchmark Simulation & Race Readiness Review'
    ],
    icon: Flame
  },
  {
    id: 'course-hyrox-performance',
    title: 'Intermediate HYROX Performance Program',
    duration: '16 Weeks',
    level: 'Intermediate / Sub-1:20 Target',
    badge: '16-Week Periodization',
    price: '₹24,000',
    cohort: 'Cohort Starts Oct 12, 2026',
    schedule: '4x / week (Mon, Wed, Fri 06:00 AM + Sun Wave 06:30 AM)',
    description: 'Comprehensive periodization designed for athletes chasing Open Division podiums or transitioning into heavier Pro Division competition weights.',
    curriculum: [
      'Weeks 1-4: Threshold Aerobic Engine & Roxzone Transition Speed',
      'Weeks 5-8: Heavy Sled Overload & High-Lactate Running Tolerance',
      'Weeks 9-12: Full Station Race Simulations with Laser Roxzone Timing',
      'Weeks 13-15: Neuromuscular Taper & Glycogen Optimization',
      'Week 16: Official Full HYROX World Simulation Assessment'
    ],
    icon: Dumbbell
  },
  {
    id: 'course-marathon-sub3',
    title: 'Sub-3h & Ultra Endurance Mastery Course',
    duration: '16 Weeks',
    level: 'Advanced Marathoners',
    badge: '16-Week Blueprint',
    price: '₹22,500',
    cohort: 'Cohort Starts Oct 1, 2026',
    schedule: '5x / week structured (Tue/Thu Track + Sun Cohort LSR)',
    description: 'Master marathon pacing dynamics, 60-90g/hr intra-race fueling tolerance, and graded lactate threshold progression under Head Coach Sunil Menon.',
    curriculum: [
      'Weeks 1-4: Physiological Baseline (Lactate Step Test + Video Gait Analysis)',
      'Weeks 5-8: VO2 Max Intervals & Glycogen-Sparing Aerobic Rebuild',
      'Weeks 9-13: Peak Mileage Block (Up to 34km LSR with Race Pacing Segments)',
      'Weeks 14-16: 3-Week Scientific Decay Taper & Carb-Loading Protocol'
    ],
    icon: Activity
  },
  {
    id: 'course-triathlon-703',
    title: 'IRONMAN 70.3 Multi-Sport Blueprint',
    duration: '16 Weeks',
    level: 'Triathletes (First-Timer to Qualifier)',
    badge: '16-Week Cohort',
    price: '₹26,000',
    cohort: 'Cohort Starts Oct 15, 2026',
    schedule: 'Multi-Discipline (Pool, Aero Bike & Run Bricks)',
    description: 'Complete multi-sport synchronization covering open-water swim drafting, aero FTP power pacing, and running off the bike without cramping.',
    curriculum: [
      'Weeks 1-4: Bilateral Swim Mechanics & FTP Power Baseline Tests',
      'Weeks 5-8: Brick Workout Conditioning (Bike-to-Run Neuromuscular Drills)',
      'Weeks 9-13: Race Pace Simulation Waves & Sweat Sodium Calibration',
      'Weeks 14-16: T1/T2 Transition Efficiency, Thermal Taper & Race Strategy'
    ],
    icon: Zap
  }
];

export const SCHEDULE_SESSION_TYPES = [
  {
    id: 'lactate-test',
    name: 'Blood Lactate & VO2 Graded Test',
    duration: '60 mins',
    category: 'Diagnostics',
    price: '₹5,000',
    description: 'Finger-stick blood lactate measurement across 5 progressive 4-minute stages on treadmill.',
    icon: Activity
  },
  {
    id: 'hyrox-wave',
    name: 'HYROX Full Station Wave Simulation',
    duration: '75 mins',
    category: 'HYROX Arena',
    price: '₹2,500',
    description: 'Compromised 1km running + 8 competition stations with chip timing and coach pacing cueing.',
    icon: Flame
  },
  {
    id: 'coaching-consult',
    name: 'Endurance Coaching & Season Strategy',
    duration: '45 mins',
    category: 'Consultation',
    price: '₹2,000',
    description: 'Comprehensive review of your past race splits, weekly volume, and target marathon/triathlon roadmap.',
    icon: Zap
  },
  {
    id: 'gait-analysis',
    name: '3D Gait & Biomechanics Screen',
    duration: '45 mins',
    category: 'Dr Physio Clinic',
    price: '₹3,500',
    description: 'High-speed 240fps dual-plane video capture of ground contact time, pronation, and pelvic tilt.',
    icon: Activity
  }
];


