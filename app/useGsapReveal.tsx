'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const useGsapReveal = (delay: number = 0, duration: number = 2) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, { opacity: 1, delay, ease: 'power3.out', duration });
    }
  }, [delay, duration]);

  return ref;
};
//intro reveal animation
export default useGsapReveal;