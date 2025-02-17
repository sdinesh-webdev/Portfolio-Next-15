import Image from 'next/image';
import React from 'react';
import Work from './Work'; // Assuming Work component is exported with its props type
import './globals.css';
import useGsapReveal from './useGsapReveal';

interface WorkItem {
  link: string;
  name: string;
  alt: string;
  // No image property needed here
}

const Contact: React.FC = () => {
  const contactRef = useGsapReveal(3.3); // Delay after Projects

  const workItems: WorkItem[] = [
    {
      link: "mailto:sdineshk7899@gmail.com",
      name: "Email: sdineshk7899@gmail.com",
      alt: "Email",
    },
    {
      link: "https://www.linkedin.com/in/sdineshku",
      name: "LinkedIn",
      alt: "LinkedIn Profile",
    },
    {
      link: "https://github.com/sdineshku",
      name: "GitHub",
      alt: "GitHub Profile",
    },
    {
      link: "/Resume24.pdf",
      name: "Download Resume",
      alt: "Resume",
    },
  ];

  return (
    <section className="contact-section flex h-28 flex-col w-full opacity-0" ref={contactRef}>
      <h1 className="contact-heading text-start mt-24 pb-6 mb-4 text-6xl md:mt-20 md:mb-6 md:text-8xl font-medium">Contact</h1>
      {workItems.map((item, index) => (
        <div
          className={`contact-item border-b border-black mb-0 ${index === 0 ? 'border-t' : ''} relative`}
          key={index}
        >
          <Work
            {...item}
            id={`contact-${index}`}  // Add required id prop
            nameClass="font-normal text-2xl ml-4" // Added some left margin to compensate for removed image
            containerClass="w-full h-24"
            overlayClass="absolute top-0 left-0 w-full h-full bg-black -z-10 transform scale-y-0 origin-top"
          />
          <Image 
            src="/arrow.svg"
            alt="arrow" 
            className="absolute right-4 top-1/2 mr-6 w-10 h-10 font-bold arrow-icon"
            width={40}
            height={40}
          />
        </div>
      ))}
      <h2 className="thank-you-message py-20 text-start text-3xl ">👋 Thank you.</h2>
    </section>
  );
};

export default Contact;