// app/components/Popup.tsx - SSR-optimized session-based popup
'use client';

import React, { useEffect, useState } from 'react';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  // Start with false to prevent hydration mismatch
  const [shouldShow, setShouldShow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // First useEffect: Mark component as mounted (SSR-safe)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Second useEffect: Check conditions after mount
  useEffect(() => {
    if (!isMounted) return;

    // Check if popup was already shown in this session
    const hasSeenPopupThisSession = sessionStorage.getItem('hasSeenMobilePopup');
    
    // Check if device is mobile using matchMedia
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const isMobile = mediaQuery.matches;
    
    // Show popup only if:
    // 1. User is on mobile device
    // 2. Popup hasn't been shown in this session yet
    if (isMobile && !hasSeenPopupThisSession) {
      // Delay slightly to ensure smooth render after hydration
      const timer = setTimeout(() => {
        setShouldShow(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  const handleClick = () => {
    // Mark popup as seen for this session only
    sessionStorage.setItem('hasSeenMobilePopup', 'true');
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close the popup
    onClose();
  };

  // Don't render anything if:
  // 1. Component hasn't mounted yet (prevents SSR hydration issues)
  // 2. Popup shouldn't show
  if (!isMounted || !shouldShow) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      aria-describedby="popup-description"
    >
      <div 
        className="bg-white p-6 w-full flex flex-col items-center text-center gap-5
                   border-[3px] border-black
                   shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]
                   hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)]
                   transition-all duration-300 ease-in-out
                   relative
                   after:content-['']
                   after:absolute
                   after:inset-0
                   after:bg-[#00FF9C]
                   after:opacity-10
                   after:z-[-1]
                   will-change-transform"
      >
        <h2 
          id="popup-title" 
          className="sr-only"
        >
          Mobile Device Notice
        </h2>
        
        <p 
          id="popup-description"
          className="text-4xl font-medium leading-relaxed text-black"
        >
          For an{' '}
          <span className="bg-purple-200 px-2 py-1">
            Awesome Experience
          </span>
          , please view site on a desktop.
        </p>

        <div className="flex justify-center items-center w-full gap-6 flex-wrap">
          <p className="text-3xl font-medium text-green-600">Please</p>
          
          <button 
            onClick={handleClick}
            aria-label="Continue to site"
            className="bg-[#00FF9C] text-black font-bold text-2xl px-6 py-2
                       border-2 border-black
                       shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] 
                       hover:shadow-none
                       hover:translate-x-[4px]
                       hover:translate-y-[4px]
                       transition-all duration-200
                       uppercase tracking-wide
                       active:scale-95
                       focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2
                       will-change-transform"
          >
            Continue
          </button>
          
          <p className="text-3xl font-medium text-green-600">Thank you!</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
