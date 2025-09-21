import React from 'react';
// import './globals.css';

export const OptimizedLoading: React.FC = () => {
  return (
    <div className="optimized-loading-container">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};