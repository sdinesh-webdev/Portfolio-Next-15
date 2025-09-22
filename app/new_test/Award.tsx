import React from 'react';
import { gsap } from 'gsap';

interface MousePosition {
  x: number;
  y: number;
}

interface AwardType {
  name: string;
  type: string;
  project: string;
  label: string;
  image: string;
  link?: string;
}

interface AwardProps {
  award: AwardType;
  index: number;
  setActiveAward: (index: number | null) => void;
  isActive: boolean;
  mousePosition: MousePosition;
}

// Helper function to get current award height from CSS custom property
const getAwardHeight = (): number => {
  // Check if we're in the browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return 100; // fallback value for SSR
  }
  
  const root = document.documentElement;
  const awardHeight = getComputedStyle(root).getPropertyValue('--award-height');
  return parseInt(awardHeight.replace('px', '')) || 100; // fallback to 100px
};

// Dynamic position calculator based on current award height
const getPositions = () => {
  const height = getAwardHeight();
  return {
    BOTTOM: 0,
    MIDDLE: -height,
    TOP: -height * 2,
  };
};

const Award: React.FC<AwardProps> = ({ award, index, setActiveAward, isActive, mousePosition }) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const awardRef = React.useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = React.useState(-200); // Default fallback value
  const [isClient, setIsClient] = React.useState(false);

  // Set client-side flag and initialize positions
  React.useEffect(() => {
    setIsClient(true);
    const positions = getPositions();
    setCurrentPosition(positions.TOP);
    
    // Set initial position without animation
    if (wrapperRef.current) {
      gsap.set(wrapperRef.current, { y: positions.TOP });
    }
  }, []);

  // Listen for window resize events to update positions
  React.useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      const positions = getPositions();
      if (currentPosition <= positions.TOP) {
        setCurrentPosition(positions.TOP);
        if (wrapperRef.current) {
          gsap.set(wrapperRef.current, { y: positions.TOP });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPosition, isClient]);

  const handleMouseEnter = React.useCallback((e: React.MouseEvent) => {
    if (!isClient) return;
    
    setActiveAward(index);
    const positions = getPositions();
    
    if (!awardRef.current) return;
    
    const rect = awardRef.current.getBoundingClientRect();
    const enterFromTop = e.clientY < rect.top + rect.height / 2;

    if (enterFromTop || currentPosition === positions.BOTTOM) {
      setCurrentPosition(positions.MIDDLE);
      gsap.to(wrapperRef.current, {
        y: positions.MIDDLE,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [index, currentPosition, setActiveAward, isClient]);

  const handleMouseLeave = React.useCallback((e: React.MouseEvent) => {
    if (!isClient) return;
    
    setActiveAward(null);
    const positions = getPositions();
    
    if (!awardRef.current) return;
    
    const rect = awardRef.current.getBoundingClientRect();
    const leavingFromTop = e.clientY < rect.top + rect.height / 2;
    const newPosition = leavingFromTop ? positions.TOP : positions.BOTTOM;
    
    setCurrentPosition(newPosition);
    gsap.to(wrapperRef.current, {
      y: newPosition,
      duration: 0.4,
      ease: "power2.out",
    });
  }, [setActiveAward, isClient]);

  const handleClick = React.useCallback(() => {
    if (award.link) {
      window.open(award.link, '_blank', 'noopener, noreferrer');
    }
  }, [award.link]);

  return (
    <div
      ref={awardRef}
      className="award"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div ref={wrapperRef} className="award-wrapper">
        <div className="award-name">
          <h1>{award.name}</h1>
          <h1>{award.type}</h1>
        </div>
        <div className="award-project">
          <h1>{award.project}</h1>
          <h1>{award.label}</h1>
        </div>
        <div className="award-name">
          <h1>{award.name}</h1>
          <h1>{award.type}</h1>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Award);