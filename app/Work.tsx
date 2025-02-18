import React, { useRef, useCallback, useState } from 'react';
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
  const [isAnimating, setIsAnimating] = useState(false);
  const $root = useRef<HTMLAnchorElement>(null);
  const $overlay = useRef<HTMLSpanElement>(null);
  const $link = useRef<HTMLSpanElement>(null);
  const $imageContainer = useRef<HTMLDivElement>(null);

  const animate = useCallback((isEntering: boolean, clientY: number) => {
    if (!$root.current) return;
    const bounds = $root.current.getBoundingClientRect();
    const top = clientY < bounds.y + bounds.height / 2;

    if (isEntering) {
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
    } else {
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
    }
    setIsAnimating(isEntering);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    animate(true, e.clientY);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    animate(false, e.clientY);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (isMobile) {
      if (!isAnimating) {
        animate(true, e.clientY);
        // Delay the navigation to allow animation to complete
        setTimeout(() => {
          window.open(link, '_blank');
        }, 600);
      } else {
        animate(false, e.clientY);
      }
    } else {
      window.open(link, '_blank');
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLAnchorElement>) => {
    // Don't prevent default here to allow click handling
    const touch = e.touches[0];
    animate(true, touch.clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLAnchorElement>) => {
    // Don't prevent default here to allow click handling
    const touch = e.changedTouches[0];
    animate(false, touch.clientY);
  };

  return (
    <a 
      ref={$root} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`relative flex items-center ${containerClass}`}
    >
      {image && (
        <div className={`relative ${imageClass} responsive-image-container`} ref={$imageContainer} style={{ overflow: 'hidden' }}>
          <Image 
            src={image}
            alt={alt}
            layout="fill"
            objectFit="cover"
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