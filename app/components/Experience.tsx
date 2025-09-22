// app/components/Experience.tsx - Server Component
import React from 'react';
import AnimationWrapper from './AnimationWrapper';

interface ExperienceItemProps {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ startDate, endDate, title, company }) => (
  <div className="experience-item">
    <div className="experience-dates pt-4 md:pt-8 font-medium">
      <time dateTime={startDate}>{startDate}</time> - <time dateTime={endDate}>{endDate}</time>
    </div>
    <div className="experience-title pb-4 md:pb-8 font-medium">{title} @ {company}</div>
    <hr className="border-1 border-black" />
  </div>
);

// Server Component - No hooks
const Experience: React.FC = () => {
  const experience = [
    {
      startDate: "Feb 2023",
      endDate: 'June 2023',
      title: 'SEO & React js Developer',
      company: 'NXG Solutions'
    },
  ];

  return (
    <AnimationWrapper delay={2.2}>
      <section className="experience-section text-left w-full">
        <h1 
          id="experience-heading"
          className="experience-heading mt-10 mb-4 text-6xl md:mt-20 md:mb-6 md:text-9xl font-medium"
        >
          Experience
        </h1>
        {experience.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </section>
    </AnimationWrapper>
  );
};

export default Experience;