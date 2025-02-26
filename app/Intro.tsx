import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Intro: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (svg) {
      const viewBox = svg.getAttribute("viewBox")?.split(" ");
      if (viewBox) {
        const ratio = parseFloat(viewBox[2]) / parseFloat(viewBox[3]);
        const containerWidth = svg.parentElement?.clientWidth || 0;
        const containerHeight = containerWidth / ratio;
        svg.setAttribute("width", containerWidth.toString());
        svg.setAttribute("height", containerHeight.toString());
      }

      gsap.to(svg, { opacity: 1, duration: 1 });
      gsap.fromTo(
        "#animate path, #animate line",
        { strokeDasharray: 2000, strokeDashoffset: 2000 },
        { strokeDashoffset: 0, duration: 16 }
      );
      gsap.to(introRef.current, { opacity: 1, delay: 1.5, ease: 'power3.out', duration: 2 });
    }
  }, []);

  return (
    <section id="svgintro" className="intro-section w-full m-0 p-4 sm:p-0">
      <div className="svg-container w-full h-auto pb-0 sm:pb-16 sm:w-400px mb-[-15%] sm:mb-0 overflow-hidden">
        <svg  
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 874.13 130"
          className="w-full h-auto responsive-svg overflow-clip"
          style={{ opacity: 0 }}
        >
          <title>S DINESH KUMAR</title>
          <g id="animate">
            <line className="cls-1"
              x1="9.37"
              x2="9.37"
              y2="121"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="21px"
              fill="none"
            />
            <line className="cls-1"
              y1="58.56"
              x2="95.13"
              y2="58.56"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="21px"
              fill="none"
            />
            <line className="cls-1"
              x1="85.48"
              x2="85.48"
              y2="120.56"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="21px"
              fill="none"
            />
            <path className="cls-1"
              d="M110.81,74.94h76.45s0-35.2-31.63-35.2c0,0-34.26-1.88-34.26,33.88,0,0-.18,39.91,34.26,39.91,27.59,0,31.63-24.47,31.63-24.47"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="21px"
              fill="none"
            />
            <line className="cls-1"
              x1="222.34"
              x2="222.34"
              y2="121.21"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="21px"
              fill="none"
            />
            <line className="cls-1"
              x1="262.34"
              x2="262.34"
              y2="121.21"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="21px"
              fill="none"
            />
            <path className="cls-1"
              d="M325.09,41H334c19.44.69,33.08,15.37,33.08,35.75,0,20.88-14.31,35.78-34.52,35.78-20.37,0-34.52-14.9-34.52-35.78,0-20.1,13.12-34.67,32.28-35.72"
              stroke="#000"
              strokeWidth="21px"
              fill="none"
            />
          </g>
        </svg>
      </div>

      <div className="intro text-left mt-4 sm:mt-0 font-matter" ref={introRef} style={{ opacity: 0 }}>
        <strong className="pb-8 font-matter">My name is S Dinesh Kumar : Code Meets Creativity. <br /></strong>
        <p className="leading-relaxed max-sm:text-3xl max-sm:leading-loose font-matter">
          I&apos;m a{' '}
          <span className="bg-green-100 px-4 py-1 pb-2">
            multidisciplinary
          </span>{' '}
          full-stack developer from India who loves building websites that look Modern and work&apos;s{' '}
          <span className="bg-sky-100 px-4 py-1 pb-2">
            Awesome
          </span>. <br />
          I enjoy learning new skills and using different tools to create simple,{' '}
          <span className="bg-purple-100 px-4 py-1 pb-2">
            creative
          </span>{' '}
          solutions. <br />
          I also love working with others to build the{' '}
          <span className="bg-orange-100 px-4 py-1 pb-2">
            future
          </span>{' '}
          together.
        </p>
      </div>
    </section>
  );
};