'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'blur-in';
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 750,
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = elementRef.current;
      if (!el) return;

      const durSeconds = duration / 1000;
      const delaySeconds = delay / 1000;

      // Define initial kinematic offsets based on chosen animation type
      let fromVars: gsap.TweenVars = {
        opacity: 0,
        ease: 'power3.out',
        duration: durSeconds,
        delay: delaySeconds,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      };

      switch (animation) {
        case 'fade-up':
          fromVars.y = 38;
          break;
        case 'fade-down':
          fromVars.y = -38;
          break;
        case 'fade-left':
          fromVars.x = 42;
          break;
        case 'fade-right':
          fromVars.x = -42;
          break;
        case 'zoom-in':
          fromVars.scale = 0.92;
          fromVars.y = 16;
          break;
        case 'blur-in':
          fromVars.filter = 'blur(10px)';
          fromVars.scale = 0.96;
          break;
        default:
          fromVars.y = 38;
      }

      gsap.from(el, fromVars);
    },
    { scope: elementRef }
  );

  return (
    <div ref={elementRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};
