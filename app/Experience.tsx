import React from 'react';
import useGsapReveal from './useGsapReveal';

interface ExperienceItemProps {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ startDate, endDate, title, company }) => (
  <div className="experience-item">
    <div className="experience-dates pt-4 md:pt-8">{startDate} - {endDate}</div>
    <div className="experience-title font-medium pb-4 md:pb-8">{title} @ {company}</div>
    <hr className="border-1 border-black" />
  </div>
);

const Experience: React.FC = () => {
  // useGsapReveal hook automatically handles the opacity animation
  const experienceRef = useGsapReveal(2.2);

  const experience = [
    {
      startDate: "Feb 2023",
      endDate: 'Jan 2024',
      title: 'SEO & React js Developer',
      company: 'NXG Solutions'
    },
  ];

  return (
    // opacity-0 class sets initial opacity to 0
    <section className="experience-section text-left w-full opacity-0" ref={experienceRef}>
      <h1 className="experience-heading mt-10 mb-4 text-6xl md:mt-20 md:mb-6 md:text-8xl font-medium">Experience</h1>
      {experience.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </section>
  );
};

export default Experience;