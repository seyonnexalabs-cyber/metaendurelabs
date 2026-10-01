import React from 'react';
import Link from 'next/link';

export const PublicFooter: React.FC = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/10 bg-slate-50 dark:bg-[#000000] text-zinc-600 dark:text-[#bdcebe] py-10 sm:py-14 px-4 sm:px-6 md:px-12 mt-12 sm:mt-16 transition-colors">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/metaendure-crest.png"
              alt="METAENDURE LABS"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="font-heading font-extrabold text-zinc-900 dark:text-white text-lg tracking-wider">
              META<span className="text-[#2e7d32] dark:text-[#76C043]">ENDURE</span>
            </span>
          </div>
          <p className="text-xs text-zinc-600 dark:text-[#788e7a] leading-relaxed">
            Science-backed endurance coaching, HYROX simulation performance labs, and high-performance mindset frameworks. Outlast your yesterday.
          </p>
          <div className="text-xs text-[#2e7d32] dark:text-[#76C043] font-mono">
            Founded by Sujai Sivan &bull; IRONMAN 70.3 Finisher
          </div>
        </div>

        <div>
          <h4 className="text-xs font-heading font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About &amp; Pillars</Link></li>
            <li><Link href="/your-sports" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Your Sports &amp; HYROX</Link></li>
            <li><Link href="/we-offer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">We Offer</Link></li>
            <li><Link href="/schedule" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Schedule &amp; Waves</Link></li>
            <li><Link href="/team" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Performance Coaches</Link></li>
            <li><Link href="/community" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Community &amp; T-Shirt</Link></li>
            <li><Link href="/contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-heading font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
            Connect
          </h4>
          <div className="space-y-2 text-xs">
            <p className="text-zinc-500 dark:text-[#788e7a]">Official Inquiries:</p>
            <p className="text-zinc-900 dark:text-white font-mono font-medium">sujaisivan@metaendurelabs.com</p>
            <p className="text-zinc-500 dark:text-[#788e7a] mt-3">Website:</p>
            <p className="text-[#2e7d32] dark:text-[#76C043] font-mono font-medium">www.metaendurelabs.com</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-heading font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-4">
            Philosophy
          </h4>
          <div className="space-y-2 text-xs">
            <p className="text-zinc-800 dark:text-white italic">&quot;Extraordinary results come from extraordinary consistency.&quot;</p>
            <p className="text-[#2e7d32] dark:text-[#76C043] font-mono text-[11px]">— Sujai Sivan, Founder</p>
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
