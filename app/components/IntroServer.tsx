import React from "react";
import OptimizedSVG from './OptimizedSVG';
import IntroText from './IntroText';

// Server Component - No hooks, renders static HTML
export const IntroServer: React.FC = () => {
  const experience = 1; // years of experience

  return (
    <section id="svgintro" className="intro-section w-full m-0 p-4 sm:p-0">
      <div className="svg-container mb-8">
        <OptimizedSVG />
      </div>

      <IntroText experience={experience} />
    </section>
  );
};