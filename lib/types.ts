export interface Coach {
  id: string;
  name: string;
  role: string;
  specialty?: string;
  specialties?: string[];
  experience?: string;
  bio: string;
  image?: string;
  availableDays?: string[];
}

export interface Partner {
  id: string;
  name: string;
  category: 'Medical & Physio' | 'Testing & Labs' | 'Nutrition' | string;
  lead: string;
  description: string;
  perk?: string;
  services?: string[];
}

export interface TrainingSession {
  id: string;
  title: string;
  sport: 'Running' | 'Triathlon' | 'HYROX' | 'Nutrition' | 'Rehab' | string;
  coach: string;
  date: string;
  time: string;
  durationMinutes: number;
  location: string;
  type: '1-on-1' | 'Cohort Wave' | 'Simulation Pass' | string;
  fee: number;
  status: 'confirmed' | 'pending' | 'completed';
}

export interface AthleteBiometrics {
  restingHr: number;
  maxHr: number;
  vo2max: number;
  target10kPace: string;
  targetHmPace: string;
  currentWeightKg: number;
  weightLostKg: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  interval: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface HyroxStation {
  station?: number;
  num?: string;
  name: string;
  distance?: string;
  description?: string;
  focus?: string;
  iconName?: string;
}
