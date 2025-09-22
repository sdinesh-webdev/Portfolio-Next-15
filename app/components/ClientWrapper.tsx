'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load heavy components
const SmoothScroll = dynamic(() => import('../components/SmoothScrolling'), { 
  ssr: false,
  loading: () => null 
});

const Popup = dynamic(() => import('../components/Popup'), { 
  ssr: false,
  loading: () => null 
});

export default function ClientWrapper() {
  const [showPopup, setShowPopup] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check popup condition after mount
    const hasSeenPopup = typeof window !== 'undefined' && 
      localStorage.getItem('hasSeenMobilePopup');
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    if (!hasSeenPopup && isMobile) {
      setTimeout(() => setShowPopup(true), 500);
    }
  }, []);

  if (!mounted) return null;

  return (
    <>
      <SmoothScroll />
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
}