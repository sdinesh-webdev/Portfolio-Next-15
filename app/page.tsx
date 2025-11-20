import { Metadata } from 'next';
import { Suspense } from 'react';
import { IntroServer } from './components/IntroServer';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Awards from './new_test/Awards';
import Contact from './components/Contact';
import ClientEnhancements from './components/ClientEnhancements';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './globals.css';

// Generate metadata for SEO
export const metadata: Metadata = {
  title: 'S Dinesh Kumar | Expert Full-Stack Developer',
  description: 'Professional portfolio showcasing expertise in MERN Stack, React.js, Next.js development',
};

// Loading skeleton components for better UX
function ExperienceLoading() {
  return (
    <div className="experience-section animate-pulse">
      <div className="h-20 bg-gray-200 rounded mb-6 w-1/2"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
}

function CertificatesLoading() {
  return (
    <div className="certificates-section animate-pulse">
      <div className="h-20 bg-gray-200 rounded mb-6 w-2/3"></div>
      <div className="space-y-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center space-x-4 border-b pb-4">
            <div className="w-24 h-16 bg-gray-200 rounded"></div>
            <div className="flex-1 h-6 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AwardsLoading() {
  return (
    <div className="awards-section animate-pulse">
      <div className="h-20 bg-gray-200 rounded mb-6 w-1/3"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
}

function ContactLoading() {
  return (
    <div className="contact-section animate-pulse">
      <div className="h-20 bg-gray-200 rounded mb-6 w-1/4"></div>
      <div className="space-y-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center justify-between border-b pb-4">
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Server Component
export default function HomePage() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50 rounded-br-md transition-all duration-200"
      >
        Skip to main content
      </a>
      
      {/* Header - Server Rendered */}
      <header role="banner" className="header-section">
        <IntroServer />
      </header>
      
      {/* Main Content - Server Rendered with Suspense boundaries */}
      <main 
        id="main-content" 
        className="main-section w-full h-dvh" 
        role="main"
        aria-label="Portfolio content showcasing S Dinesh Kumar's professional work"
      >
        <Suspense fallback={<ExperienceLoading />}>
          <section aria-labelledby="experience-heading" className="experience-section">
            <Experience />
          </section>
        </Suspense>
        
        <Suspense fallback={<CertificatesLoading />}>
          <section aria-labelledby="certificates-heading" className="certificates-section">
            <Certificates />
          </section>
        </Suspense>
        
        <Suspense fallback={<AwardsLoading />}>
          <section aria-labelledby="awards-heading" className="awards-section">
            <Awards />
          </section>
        </Suspense>
      </main>
      
      {/* Footer - Server Rendered */}
      <Suspense fallback={<ContactLoading />}>
        <footer 
          className="footer-section w-full mt-[1139px] max-sm:mt-[929px]" 
          role="contentinfo"
          aria-label="Contact information and professional links"
        >
          <Contact />
        </footer>
      </Suspense>
      
      {/* Client-side Enhancements - Hydrated after initial render */}
      <ClientEnhancements />
      
      {/* Analytics - Client-side only */}
      <SpeedInsights />
    </>
  );
}
