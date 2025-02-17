"use client";
import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Main from './Main';
import { Loading } from './Loading';
import Popup from './Popup';
import './globals.css';
import { inject } from '@vercel/analytics';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    console.log('useEffect triggered');
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    const lenis = new Lenis({
      duration: isMobile ? 1 : 2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: !isMobile,
      wheelMultiplier: isMobile ? 1.5 : 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    setTimeout(() => {
      console.log('Loading complete');
      setIsLoading(false);
      setShowPopup(true);
    }, 1000);

    inject();

    return () => {
      console.log('Cleaning up');
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full desktop:overflow-visible sm:overflow-visible max-sm:min-h-[2300px] max-sm:overflow-y-auto max-sm:overflow-x-hidden max-sm:will-change-transform">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Main />
          <SpeedInsights />
          {showPopup && <Popup onClose={() => setShowPopup(false)} />}
        </>
      )}
    </main>
  );
}