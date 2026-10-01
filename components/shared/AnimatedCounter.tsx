'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}: CounterProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const countObj = useRef({ val: 0 });

  useGSAP(
    () => {
      const el = spanRef.current;
      if (!el) return;

      gsap.to(countObj.current, {
        val: end,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          if (el) {
            const formatted = decimals > 0 
              ? countObj.current.val.toFixed(decimals) 
              : Math.round(countObj.current.val).toString();
            el.innerText = `${prefix}${formatted}${suffix}`;
          }
        },
      });
    },
    { scope: spanRef }
  );

  return (
    <span ref={spanRef} className={`tabular-nums ${className}`}>
      {prefix}0{suffix}
    </span>
  );
}
