'use client';
import React, { useRef, useEffect, ReactNode } from 'react';

interface AnimationWrapperProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export default function AnimationWrapper({ 
  children, 
  delay = 0, 
  duration = 1
}: AnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      // Simple CSS-based animation
      ref.current.style.opacity = '0';
      ref.current.style.transform = 'translateY(20px)';
      
      const timer = setTimeout(() => {
        if (ref.current) {
          ref.current.style.transition = `opacity ${duration}s ease-out, transform ${duration}s ease-out`;
          ref.current.style.opacity = '1';
          ref.current.style.transform = 'translateY(0)';
        }
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [delay, duration]);

  return <div ref={ref}>{children}</div>;
}