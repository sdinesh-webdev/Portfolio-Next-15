"use client";
import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { OptimizedLoading } from './components/OptimizedLoading';
import Popup from './Popup';
import { IntroServer } from './components/IntroServer';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
// import Projects from './components/Projects';
import Awards from './new_test/Awards';
import Contact from './components/Contact';
import './globals.css';
import { inject } from '@vercel/analytics';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Initialize Lenis scroll immediately
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

    // Fast loading - only wait for DOM ready and critical resources
    const handleLoading = async () => {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        await new Promise(resolve => {
          document.addEventListener('DOMContentLoaded', resolve);
        });
      }

      // Preload only critical images
      const criticalImages = [
        'https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/meta-McN0j2H9cDvZZNHlXeehrc8IteQeII.webp',
      ];

      // Load critical images in parallel (don't wait for all)
      const imagePromises = criticalImages.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // Don't fail on image errors
          img.src = src;
          // Resolve after 200ms even if image hasn't loaded
          setTimeout(resolve, 200);
        });
      });

      // Wait for fastest response (DOM ready or first image)
      await Promise.race([
        Promise.all(imagePromises),
        new Promise(resolve => setTimeout(resolve, 100)) // Maximum 100ms wait
      ]);

      setIsLoading(false);
      
      // Check for popup after loading is complete
      setTimeout(() => {
        const hasSeenPopup = localStorage.getItem('hasSeenMobilePopup');
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (!hasSeenPopup && isMobile) {
          setShowPopup(true);
        }
      }, 200);
    };

    handleLoading();
    inject();

    return () => {
      lenis.destroy();
    };
  }, []);

  // Render main content immediately, show loading overlay only briefly
  return (
    <>
      {/* Main content renders immediately */}
      <div className={`main-app ${isLoading ? 'loading' : 'loaded'}`}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50 rounded-br-md transition-all duration-200"
        >
          Skip to main content
        </a>
        
        <header role="banner" className="header-section">
          <IntroServer/>
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
          
          <section aria-labelledby="awards-heading" className="awards-section">
            <Awards />
          </section>
        </main>
        
        <footer 
          className="footer-section w-full mt-[900px] max-sm:mt-[741px]" 
          role="contentinfo"
          aria-label="Contact information and professional links"
        >
          <Contact />
        </footer>
        
        <SpeedInsights />
      </div>

      {/* Minimal loading overlay */}
      {isLoading && <OptimizedLoading />}
      
      {/* Popup after loading */}
      {showPopup && (
        <Popup 
          onClose={() => setShowPopup(false)} 
          aria-label="Welcome popup with additional information"
        />
      )}
    </>
  );
}