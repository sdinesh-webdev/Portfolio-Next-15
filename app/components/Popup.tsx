// app/components/Popup.tsx - Fixed default export
import React, { useEffect, useState } from 'react';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenMobilePopup');
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    if (!hasSeenPopup && isMobile) {
      setShouldShow(true);
    }
  }, []);

  const handleClick = () => {
    localStorage.setItem('hasSeenMobilePopup', 'true');
    window.scrollTo(0, 0);
    onClose();
    window.location.reload();
  };

  if (!shouldShow) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 sm:p-8 w-full max-w-md flex flex-col items-center text-center
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
                    after:z-[-1]">
        <p className="text-base sm:text-lg font-medium mb-3 sm:mb-4">
          For an{' '}
          <span className="bg-purple-200 py-1">
            Awesome Experience
          </span>
          , please view on desktop.
        </p>
        <p className="text-xl sm:text-2xl font-medium text-green-600 mb-6 sm:mb-8">Please continue. Thank you!</p>
        <div className="flex justify-center w-full">
          <button 
            onClick={handleClick} 
            className="bg-[#00FF9C] text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 
                     border-2 border-black
                     shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] 
                     hover:shadow-none
                     hover:translate-x-[4px]
                     hover:translate-y-[4px]
                     transition-all duration-200
                     uppercase tracking-wide"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;