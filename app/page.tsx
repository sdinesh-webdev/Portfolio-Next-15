"use client";
import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Loading } from './Loading';
import Popup from './Popup';
import { Intro } from './Intro';
import Experience from './Experience';
import Certificates from './Certificates';
import Projects from './Projects';
import Awards from './new_test/Awards';
import Contact from './Contact';
import './globals.css';
import { inject } from '@vercel/analytics';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    console.log('useEffect triggered');
    const lenis = new Lenis({
      duration: 2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Use Promise.all to load critical resources in parallel
    Promise.all([
      // Simulate loading critical resources
      new Promise(resolve => setTimeout(resolve, 500))
    ]).then(() => {
      console.log('Loading complete');
      setIsLoading(false);
      // Delay popup slightly for better UX
      setTimeout(() => setShowPopup(true), 300);
    });

    inject();

    return () => {
      console.log('Cleaning up');
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* Skip to main content for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50 rounded-br-md transition-all duration-200"
          >
            Skip to main content
          </a>
          
          <header role="banner" className="header-section">
            <Intro />
          </header>
          
          <main 
            id="main-content" 
            className="main-section w-full h-dvh" 
            role="main"
            aria-label="Portfolio content showcasing S Dinesh Kumar's professional work"
          >
            <section aria-labelledby="experience-heading" className="experience-section">
              <Experience />
            </section>
            
            <section aria-labelledby="certificates-heading" className="certificates-section">
              <Certificates />
            </section>
            
            {/* <section aria-labelledby="projects-heading" className="projects-section">
              <Projects />
            </section> */}
            
            <section aria-labelledby="awards-heading" className="awards-section">
              <Awards />
            </section>
          </main>
          
          <footer 
            className="footer-section w-full mt-[900px] max-sm:mt-[741px]   " 
            role="contentinfo"
            aria-label="Contact information and professional links"
          >
            <Contact />
          </footer>
          
          <SpeedInsights />
          {showPopup && (
            <Popup 
              onClose={() => setShowPopup(false)} 
              aria-label="Welcome popup with additional information"
            />
          )}
        </>
      )}
    </>
  );
}