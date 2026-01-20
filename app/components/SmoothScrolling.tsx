'use client';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScrolling() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Only enable smooth scrolling on desktop for better performance
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    if (!isDesktop) return;

    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
    });

    // Animation frame loop
    let animationFrameId: number;

    function raf(time: number) {
      lenisRef.current?.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null;
}
