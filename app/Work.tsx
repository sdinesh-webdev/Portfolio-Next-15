import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import parse from 'html-react-parser';

interface WorkProps {
  id: string;
  link: string;
  name: string;
  image?: string;
  nameClass?: string;
  containerClass?: string;
  imageClass?: string;
  imageStyle?: React.CSSProperties;
  overlayClass?: string;
  alt: string;
}

const Work: React.FC<WorkProps> = ({ 
  link, 
  name, 
  image, 
  nameClass, 
  containerClass, 
  imageClass, 
  imageStyle, 
  overlayClass,
  alt 
}) => {
  const $root = useRef<HTMLAnchorElement>(null);
  const $overlay = useRef<HTMLSpanElement>(null);
  const $link = useRef<HTMLSpanElement>(null);
  const $imageContainer = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!$root.current) return;
    const bounds = $root.current.getBoundingClientRect();
    const top = e.clientY < bounds.y + bounds.height / 2;

    if ($link.current) {
      gsap.to($link.current, {
        x: '2.5rem',
        color: '#fff',
        duration: 0.5,
        ease: 'power3.out'
      });
    }
    if ($imageContainer.current) {
      gsap.to($imageContainer.current.querySelector('img'), {
        filter: 'invert(1)',
        duration: 0.5,
      });
    }
    if ($overlay.current) {
      gsap.fromTo(
        $overlay.current,
        {
          scaleY: 0,
          transformOrigin: top ? '0 0' : '0 100%'
        },
        {
          scaleY: 1,
          duration: 0.5,
          ease: 'power3.out'
        }
      );
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!$root.current) return;
    const bounds = $root.current.getBoundingClientRect();
    const top = e.clientY < bounds.y + bounds.height / 2;

    const elements = [$overlay.current, $link.current, $imageContainer.current?.querySelector('img')].filter((el): el is NonNullable<typeof el> => el !== null);
    gsap.killTweensOf(elements);

    if ($link.current) {
      gsap.to($link.current, {
        x: 0,
        color: '#000',
        duration: 0.3,
        ease: 'power3.out'
      });
    }
    if ($imageContainer.current) {
      gsap.to($imageContainer.current.querySelector('img'), {
        filter: 'invert(0)',
        duration: 0.3,
        ease: 'power3.out'
      });
    }
    if ($overlay.current) {
      gsap.to($overlay.current, {
        scaleY: 0,
        transformOrigin: top ? '0 0' : '0 100%',
        duration: 0.7,
        ease: 'power3.out'
      });
    }
  };

  return (
    <a 
      ref={$root} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`relative flex items-center ${containerClass}`}
    >
      {image && (
        <div className={imageClass} ref={$imageContainer} style={{ overflow: 'hidden' }}>
          <Image 
            src={image}
            alt={alt}
            width={105}
            height={75}
            style={{ ...imageStyle, objectFit: 'cover' }}
            priority
          />
        </div>
      )}
      <span
        className={nameClass} 
        ref={$link}
      >
        {parse(name)}
      </span>
      <span className={overlayClass} ref={$overlay}></span>
    </a>
  );
};

export default Work;