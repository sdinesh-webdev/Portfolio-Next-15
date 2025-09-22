
import React from 'react';

// Use default export instead of named export
const OptimizedLoading: React.FC = () => {
  return (
    <div className="optimized-loading-container">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default OptimizedLoading;