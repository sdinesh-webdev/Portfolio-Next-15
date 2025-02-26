import React from 'react';
import useGsapReveal from './useGsapReveal';
import Work from './Work';
import './globals.css';

interface WorkItem {
  id: string;
  link: string;
  name: string;
  image: string;
  imageStyle: string;
  alt: string;
}

const Certificates: React.FC = () => {
  const certificatesRef = useGsapReveal(2.7);
  const workItems: WorkItem[] = [
    {
      id: 'cert1',
      link: "https://www.coursera.org/account/accomplishments/specialization/HLJUAPS49XLG",
      name: "Meta Front-End Developer Professional",
      image: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/meta-McN0j2H9cDvZZNHlXeehrc8IteQeII.webp",
      imageStyle: "w-[120px] h-[64px] sm:w-[105px] sm:h-[75px]",
      alt: "Meta Front-End Developer Certificate"
    },
    {
      id: 'cert2',
      link: "https://www.coursera.org/account/accomplishments/specialization/YAPAFNUL4QA2",
      name: "IBM Back-end JavaScript Developer Professional",
      image: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/ibm-HSDe48i4RxTGnQ9DvNMIx0IB00YwYf.avif",
      imageStyle: "w-[145px] h-[64px] sm:w-[105px] sm:h-[75px]",
      alt: "IBM Back-end JavaScript Developer Certificate"
    },
    {
      id: 'cert3',
      link: "https://www.coursera.org/account/accomplishments/specialization/ZPTNMXAC7FQB",
      name: "Search Engine Optimization (SEO) Specializations",
      image: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/certificate_3-gPcKxvzxWVky1QvifxeQL87JQyLGmB.webp",
      imageStyle: "w-[145px] h-[64px] sm:w-[105px] sm:h-[75px]",
      alt: "SEO Certificate"
    },
    {
      id: 'cert4',
      link: "https://example.com",
      name: "UI Fullstack With React js -- NareshIT_HYD",
      image: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/certificate_4-SQ0g6px9UDMpiRFOuxyov5IAUC2Fmc.webp",
      imageStyle: "w-[145px] h-[64px] sm:w-[105px] sm:h-[75px]",
      alt: "Example Project Certificate"
    },
  ];

  return (
    <section className="flex flex-col w-full opacity-0" ref={certificatesRef}>
      <h1 className="text-start mt-24 pb-6 mb-4 text-6xl md:mt-20 md:mb-6 md:text-8xl font-medium">
        Professional Certificates
      </h1>
      <div className="certificates-list">
        {workItems.map((item, index) => (
          <div
            className={`border-b border-black mb-0 ${index === 0 ? 'border-t' : ''}`}
            key={item.id}
          >
            <Work
              {...item}
              nameClass="font-medium text-2xl sm:text-3xl lg:text-5xl ml-2 sm:ml-4 max-sm:text-start pl-2"
              containerClass="w-full h-40 max-sm:h-32 flex items-center"
              imageClass={`relative ml-2 sm:ml-4 certificate-image-container ${item.imageStyle}`}
              imageStyle={{}}
              overlayClass="absolute top-0 left-0 w-full h-full bg-black -z-10 transform scale-y-0 origin-top"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;