'use client';
import { useEffect } from 'react';

export default function SmoothScrolling() {
  useEffect(() => {
    let lenis: any = null;

    const initSmoothScroll = async () => {
      // Only load on desktop for better performance
      const isDesktop = window.matchMedia('(min-width: 768px)').matches;
      
      if (isDesktop) {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    };

    // Initialize after component mount
    initSmoothScroll();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return null;
}
