import React from 'react';
import './globals.css';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (!isMobile) {
    return null; // Do not render the popup if the screen is not mobile-sized
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-md">
        <p className="text-xl sm:text-2xl font-medium mb-4">For an awesome experience, please view on desktop.</p>
        <p className="text-lg sm:text-xl font-semibold text-green-500 mb-4">Please continue. Thank you!</p>
        <button 
          onClick={onClose} 
          className="bg-slate-800 text-white font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-full"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Popup;
