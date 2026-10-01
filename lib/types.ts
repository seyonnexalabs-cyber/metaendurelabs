/* ==========================================================================
   CORE APPLICATION DOMAIN TYPES
   ========================================================================== */

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
  date: string;
  time: string;
  coach: string;
  type: 'lab' | 'hyrox' | 'physio' | 'virtual' | 'run';
  location: string;
  status: 'confirmed' | 'rescheduled' | 'completed' | 'in-progress';
  capacity?: {
    current: number;
    max: number;
  };
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

export interface WaveSlot {
  id: string;
  time: string;
  maxCapacity: number;
  bookedCount: number;
  coachId?: string;
  category: 'hyrox' | 'lab' | 'consult' | 'physio' | 'run';
  status: 'available' | 'filling-fast' | 'waitlist';
}

export interface CourseCohort {
  id: string;
  courseId: string;
  startDate: string;
  title: string;
  maxCapacity: number;
  enrolledCount: number;
  schedule: string;
}
