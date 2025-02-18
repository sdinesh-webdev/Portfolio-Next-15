import React from 'react';
import Work from './Work';
import useGsapReveal from './useGsapReveal';

interface WorkItem {
  id: string;
  link: string;
  name: string;
  imagePath: string;
  imageStyle: string;
  alt: string;
}

const Projects: React.FC = () => {
  const projectsRef = useGsapReveal(3.0);

  const workItems: WorkItem[] = [
    {
      id: 'proj1',
      link: "/Projects/Proj1",
      name: "Coming soon . . .",
      imagePath: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/proj_1-nf95bIkFlrR5oVhDi2YS7142kyTY9h.webp",
      imageStyle: "w-32 h-24",
      alt: "Project 1"
    },
    {
      id: 'proj2',
      link: "/Projects/Proj2",
      name: "Coming soon . . .",
      imagePath: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/proj_2-LsD0XqEoWnUZ33ne5Tolr39X9yZKws.webp",
      imageStyle: "w-32 h-24",
      alt: "Project 2"
    },
    {
      id: 'proj3',
      link: "/Projects/Proj3",
      name: "Coming soon . . .",
      imagePath: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/proj_3-MPywbekD0XEH4fdcteEDOVsndHweNW.webp",
      imageStyle: "w-32 h-24",
      alt: "Project 3"
    },
    {
      id: 'proj4',
      link: "/Projects/Proj4",
      name: "Coming soon . . .",
      imagePath: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/proj_4-9nYbeLFBk1IYJIp1mmOkOchovsUF3D.webp",
      imageStyle: "w-32 h-24",
      alt: "Project 4"
    },
    {
      id: 'proj5',
      link: "/Projects/Proj5",
      name: "Coming soon . . .",
      imagePath: "https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/proj_5-dU2OtTBEBO55bAnPUSATLXv3UTnmtY.webp",
      imageStyle: "w-32 h-24",
      alt: "Project 5"
    },
  ];

  return (
    <section className="projects-section flex flex-col w-full opacity-0" ref={projectsRef}>
      <h1 className="projects-heading text-start text-6xl mb-4 mt-24 md:mt-20 md:mb-6 md:text-8xl font-medium">
        Projects
      </h1>
      <p className='projects-description text-start font-light pb-14 pt-2'>
        Projects are in development. Their listing will be available soon.
      </p>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-x-4">
        {workItems.map((item, index) => (
          <div
            className={`project-item border-b border-black mb-0 ${index === 0 ? 'border-t' : ''} ${index === 1 ? 'md:border-t' : ''}`}
            key={item.id}
          >
            <Work
              id={item.id}
              link={item.link}
              name={item.name}
              image={item.imagePath}
              alt={item.alt}
              nameClass="font-medium text-2xl md:text-4xl ml-4"
              containerClass="w-full h-32 flex items-center"
              imageClass={`ml-4 ${item.imageStyle}`}
              imageStyle={{}}
              overlayClass="absolute top-0 left-0 w-full h-full bg-black -z-10 transform scale-y-0 origin-top"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;