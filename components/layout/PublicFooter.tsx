import React from 'react';
import Link from 'next/link';

export const PublicFooter: React.FC = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-[#000000] text-zinc-600 dark:text-[#bdcebe] py-16 px-6 md:px-12 mt-24">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/metaendure-crest.png"
              alt="METAENDURE LABS"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="font-heading font-extrabold text-white text-lg tracking-wider">
              META<span className="text-[#76C043]">ENDURE</span>
            </span>
          </div>
          <p className="text-xs text-[#788e7a] leading-relaxed">
            Science-backed endurance coaching, HYROX simulation performance labs, and high-performance mindset frameworks. Outlast your yesterday.
          </p>
          <div className="text-xs text-[#76C043] font-mono">
            Founded by Sujai Sivan &bull; IRONMAN 70.3 Finisher
          </div>
        </div>

        <div>
          <h4 className="text-xs font-heading font-bold text-white uppercase tracking-widest mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Story & Pillars</Link></li>
            <li><Link href="/your-sports" className="hover:text-white transition-colors">Your Sports (Running, Tri, HYROX)</Link></li>
            <li><Link href="/we-offer" className="hover:text-white transition-colors">We Offer</Link></li>
            <li><Link href="/team" className="hover:text-white transition-colors">Coaches & Partners</Link></li>
            <li><Link href="/community" className="hover:text-white transition-colors">Community & Apparel</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-heading font-bold text-white uppercase tracking-widest mb-4">
            Portals & Access
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/schedule" className="text-[#76C043] font-semibold hover:underline">Training Scheduler</Link></li>
            <li><Link href="/dashboard" className="hover:text-white transition-colors">Athlete Dashboard (User)</Link></li>
            <li><Link href="/admin" className="hover:text-white transition-colors">Coach Superadmin Portal</Link></li>
            <li><Link href="/checkout" className="hover:text-white transition-colors">Payment Gateway (Razorpay/Stripe)</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-heading font-bold text-white uppercase tracking-widest mb-4">
            Direct Contact
          </h4>
          <div className="space-y-2 text-xs">
            <p className="text-[#788e7a]">Inquiries & Consultation:</p>
            <p className="text-white font-mono">sujaisivan@metaendurelabs.com</p>
            <p className="text-[#788e7a] mt-3">Lab Locations:</p>
            <p className="text-white">Chennai &bull; Goa &bull; Bengaluru, India</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#788e7a]">
        <div>&copy; 2026 METAENDURE LABS. All rights reserved.</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <span>Endure.</span>
          <span className="text-[#76C043]">Evolve.</span>
          <span>Excel.</span>
        </div>
      </div>
    </footer>
  );
};
