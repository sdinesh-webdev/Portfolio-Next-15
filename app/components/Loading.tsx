import React, { useState, useEffect } from 'react';
import './globals.css';

export const Loading: React.FC = () => {
  const [number, setNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => (prevNumber < 100 ? prevNumber + 5 : 100)); // Faster increment
    }, 20); // Faster interval

    // Much faster loading completion - 300ms maximum
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300); // Reduced from 2000ms to 300ms

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="loading-container">
      <div className="number">{number}</div>
    </div>
  );
};
