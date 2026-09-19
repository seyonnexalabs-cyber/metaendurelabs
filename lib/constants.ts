import { Coach, Partner, PricingTier, HyroxStation } from './types';

export const COACHES: Coach[] = [
  {
    id: 'sunil-menon',
    name: 'Sunil Menon',
    role: 'Founder, Head of Performance & Master Endurance Coach',
    experience: '25+ Years Experience',
    specialties: ['Sub-3h Marathons', 'Kona IRONMAN Pacing', 'Blood Lactate Dynamics'],
    bio: 'Founder of MetaEndure Labs and Menon Fitness Systems (MFS). Over 25 years preparing elite Indian and international athletes for world majors, Kona, and Ultraman distance breakthroughs.',
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  {
    id: 'rashmi',
    name: 'Rashmi',
    role: 'Head of HYROX Simulation & Functional Strength',
    experience: 'Official HYROX Specialist',
    specialties: ['Compromised Running', 'Sled Power Dynamics', 'Station Transitions'],
    bio: 'Pioneering functional fitness and HYROX racing architect. Specializes in peripheral fatigue resistance, wall-ball pacing cadence, and high-lactate engine conditioning.',
    availableDays: ['Tue', 'Thu', 'Sat', 'Sun']
  },
  {
    id: 'sucharita',
    name: 'Sucharita',
    role: 'Ultra-Endurance & Master Running Coach',
    experience: '12+ Years Ultra Coaching',
    specialties: ['100K Ultras', 'Trail Navigation', 'Mental Resilience'],
    bio: 'Specialist in multi-stage trail running, mountain ultra-marathons, and post-injury aerobic rebuild pathways.',
    availableDays: ['Mon', 'Wed', 'Fri']
  },
  {
    id: 'marimuthu',
    name: 'Marimuthu',
    role: 'Elite Biomechanics & Track Speed Coach',
    experience: 'Former National Athlete',
    specialties: ['5K/10K Speed Development', 'Ground Contact Economy', 'VO2 Max Intervals'],
    bio: 'Decodes foot-strike kinetics, cadence optimization, and track speed mechanics to turn plodders into efficient flyers.',
    availableDays: ['Mon', 'Tue', 'Thu', 'Fri']
  },
  {
    id: 'mudit',
    name: 'Mudit',
    role: 'Triathlon & Open Water Swim Coach',
    experience: 'Multiple 70.3 Finisher',
    specialties: ['Aero Bike Fitting', 'Bilateral Breathing', 'Brick Workouts'],
    bio: 'Master of multi-sport transitions (T1/T2), power-meter wattage calibration, and sustainable open water drafting.',
    availableDays: ['Wed', 'Fri', 'Sat', 'Sun']
  },
  {
    id: 'sujai',
    name: 'Sujai',
    role: 'Sports Nutritionist & Sweat Kinetics Specialist',
    experience: 'Clinical Sports Dietitian',
    specialties: ['Carb Loading Protocols', 'Sweat Sodium Profiling', 'GI Distress Mitigation'],
    bio: 'Designs precision hydration and 60-90g/hr carbohydrate fueling strategies engineered for tropical heat and humidity.',
    availableDays: ['Mon', 'Wed', 'Sat']
  }
];

export const PARTNERS: Partner[] = [
  {
    id: 'dr-physio',
    name: 'Dr Physio Sports Clinic',
    category: 'Medical & Physio',
    lead: 'Dr. Prince Jacob, Chief Sports Physiotherapist',
    description: 'Therapeutic sports massage, myofascial release, dry needling, and musculoskeletal diagnostic screenings for injury mitigation.',
    perk: 'Complimentary quarterly screening for cohort athletes',
    services: [
      'Pre-race gait and kinetic chain screenings',
      'Dry needling & joint mobilization therapy',
      'Post-long run pneumatic compression flush'
    ]
  },
  {
    id: 'race-craft-mfs',
    name: 'Race Craft Labs / Menon Fitness Systems',
    category: 'Testing & Labs',
    lead: 'Sunil Menon',
    description: 'Lactate threshold profile testing, VO2max spirometry calibration, and biometric aerobic zone mapping.',
    perk: 'Exclusive metabolic baseline calibration protocols',
    services: [
      'Graded treadmill blood lactate testing',
      'FatMax metabolic cart oxidation curves',
      'Individualized heart rate training zone cards'
    ]
  },
  {
    id: 'metafuel-nutrition',
    name: 'MetaFuel Hydration & Metabolic Fueling',
    category: 'Nutrition',
    lead: 'MetaEndure Nutrition Board',
    description: 'Formulation of pre-race muscle glycogen saturation plans, rapid sodium-potassium electrolyte formulas, and intra-race fueling strategies.',
    perk: 'Personalized race-day fueling calculator integration',
    services: [
      'Sweat electrolyte sodium loss profiling',
      'Gut training for 60-90g/hr carbohydrate absorption',
      'Custom race week depletion & saturation protocol'
    ]
  }
];

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
