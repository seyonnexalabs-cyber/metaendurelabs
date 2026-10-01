'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = barRef.current;
    if (!el) return;

    gsap.to(el, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.2, // Smooth catch-up
      },
    });
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent">
      <div
        ref={barRef}
        style={{ transformOrigin: '0% 50%' }}
        className="h-full w-full scale-x-0 bg-gradient-to-r from-[#2e7d32] via-[#76C043] to-emerald-400 shadow-[0_0_10px_rgba(118,192,67,0.7)]"
      />
    </div>
  );
}
