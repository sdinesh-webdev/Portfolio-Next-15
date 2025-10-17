'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface IntroTextProps {
  experience: number;
}

const IntroText: React.FC<IntroTextProps> = ({ experience }) => {
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the intro text after a delay to sync with SVG animation
    if (introRef.current) {
      gsap.to(introRef.current, { 
        opacity: 1, 
        delay: 1.5, 
        ease: 'power3.out', 
        duration: 2 
      });
    }
  }, []);

  return (
    <div className="intro text-left mt-4 max-sm:mt-0 font-matter" ref={introRef} style={{ opacity: 0 }}>
      <strong className="pb-8 font-matter font-extrabold">Hey.. My Self S Dinesh Kumar : Code Meets Creativity. <br /></strong>
      <p className="leading-relaxed max-sm:text-3xl max-sm:leading-loose font-matter font-medium text-4xl">
        I&apos;m a{' '}
        <span className="bg-green-100 px-4 py-1 pb-2">
          Multidisciplinary
        </span>{' '}
        full-stack developer from India with year{experience > 1 ? 's' : ''} of experience who loves building websites that look Modern and work&apos;s{' '}
        <span className="bg-sky-100 px-4 py-1 pb-2">
          Awesome
        </span>. <br />
        I enjoy learning new skills and using different tools to create simple,{' '}
        <span className="bg-purple-100 px-4 py-1 pb-2">
          Creative
        </span>{' '}
        solutions. <br />
        I also love working with others to build the{' '}
        <span className="bg-orange-100 px-4 py-1 pb-2">
          future
        </span>{' '}
        together.
      </p>
    </div>
  );
};

export default IntroText;
