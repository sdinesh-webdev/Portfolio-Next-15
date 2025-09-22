// app/components/ClientEnhancements.tsx - Fixed dynamic imports
'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Fix the dynamic imports with proper default export handling
const SmoothScrolling = dynamic(() => import('./SmoothScrolling'), {
  ssr: false,
  loading: () => null
});

const OptimizedLoading = dynamic(() => import('../components/OptimizedLoading'), {
  ssr: false,
  loading: () => null
});

const MobilePopup = dynamic(() => import('../components/Popup'), {
  ssr: false,
  loading: () => null
});

export default function ClientEnhancements() {
  const [mounted, setMounted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Show brief loading overlay for smooth transition
    setShowLoading(true);
    
    // Fast loading completion
    const loadingTimeout = setTimeout(() => {
      setShowLoading(false);
      
      // Check for mobile popup after loading
      const hasSeenPopup = localStorage.getItem('hasSeenMobilePopup');
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      
      if (!hasSeenPopup && isMobile) {
        setTimeout(() => setShowPopup(true), 500);
      }
    }, 100); // Minimal loading time

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Smooth scrolling for enhanced UX */}
      <SmoothScrolling />
      
      {/* Brief loading overlay for transition */}
      {showLoading && <OptimizedLoading />}
      
      {/* Mobile popup */}
      {showPopup && (
        <MobilePopup 
          onClose={() => setShowPopup(false)} 
          aria-label="Welcome popup with additional information"
        />
      )}
    </>
  );
}