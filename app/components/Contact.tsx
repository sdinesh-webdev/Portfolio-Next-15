import React from 'react';
import Image from 'next/image';
import Work from '../Work';
import AnimationWrapper from './AnimationWrapper';

interface WorkItem {
  link: string;
  name: string;
  alt: string;
}

// Server Component - No hooks, renders on server
const Contact: React.FC = () => {
  const workItems: WorkItem[] = [
    {
      link: "mailto:sdineshkumarwebdev@gmail.com",
      name: "Email: sdineshkumarwebdev@gmail.com",
      alt: "Email",
    },
    {
      link: "https://www.linkedin.com/in/sdineshku",
      name: "LinkedIn",
      alt: "LinkedIn Profile",
    },
    {
      link: "https://github.com/sdinesh-webdev",
      name: "GitHub",
      alt: "GitHub Profile",
    },
    {
      link: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/1_S_DINESH_KUMAR_FULLSTACK_DEVELOPER_2025.pdf",
      name: "Download Resume",
      alt: "Resume",
    },
  ];

  return (
    <AnimationWrapper delay={3.3}>
      <section className="contact-section relative flex flex-col w-full md:h-[52vh] lg:m z-20">
        <h1 className="contact-heading text-start mt-24 pb-6 mb-4 text-6xl md:mt-20 md:mb-6 md:text-9xl font-medium text-black">
          Contact
        </h1>

        {workItems.map((item, index) => (
          <div
            key={index}
            className={`contact-item border-b border-black mb-0 ${
              index === 0 ? "border-t" : ""
            } relative`}
          >
            <Work
              {...item}
              id={`contact-${index}`}
              nameClass="font-normal text-2xl ml-4 z-20 text-black"
              containerClass="w-full h-24 relative z-10"
              overlayClass="absolute top-0 left-0 w-full h-full bg-black z-0 transform scale-y-0 origin-top"
            />
            <img
              src="https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/Arrow-9uUXN36dmROFAkDANKH5WbeW9HbH0x.svg"
              alt="arrow"
              className="absolute right-4 top-1/2 -translate-y-1/2 mr-6 w-10 h-10 font-bold arrow-icon z-10"
              width={40}
              height={40}
            />
          </div>
        ))}

        <h2 className="thank-you-message py-20 text-start text-3xl text-black">👋 Thank you.</h2>
      </section>
    </AnimationWrapper>
  );
};

export default Contact;
