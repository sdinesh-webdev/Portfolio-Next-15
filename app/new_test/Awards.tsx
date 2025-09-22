// app/new_test/Awards.tsx - Updated with AnimationWrapper
'use client';
import React from 'react';
import Award from './Award';
import AwardPreview from './AwardPreview';
import { awards } from './data';
import AnimationWrapper from '../components/AnimationWrapper';
import './index.css';

interface MousePosition {
  x: number;
  y: number;
}

// Memoize the Awards component
const Awards: React.FC = React.memo(() => {
  const [activeAward, setActiveAward] = React.useState<number | null>(null);
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: 0, y: 0 });
  const awardsListRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = React.useCallback((e: MouseEvent): void => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <>
      <AnimationWrapper delay={3.0} duration={2}>
        <section className="awards">
          <h1 className="text-start mt-24 pb-6 mb-4 text-6xl md:mt-20 md:mb-6 md:text-9xl font-medium max-md:pb-0">
            Project's
          </h1>
          <p className='projects-description text-start font-light pb-14'>
            Building Web-Experience, not just websites.
          </p>

          <div className="awards-list" ref={awardsListRef}>
            {awards.map((award, index) => (
              <Award
                key={index}
                award={award}
                index={index}
                setActiveAward={setActiveAward}
                isActive={activeAward === index}
                mousePosition={mousePosition}
              />
            ))}
          </div>
        </section>
      </AnimationWrapper>
      <AwardPreview
        activeIndex={activeAward}
        mousePosition={mousePosition}
        awardsListRef={awardsListRef}
        awards={awards}
      />
    </>
  );
});

export default Awards;