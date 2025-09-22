import React from "react";
import { gsap } from "gsap";
import NextImage from "next/image";

interface MousePosition {
  x: number;
  y: number;
}

interface AwardPreviewProps {
  activeIndex: number | null;
  mousePosition: MousePosition;
  awardsListRef: React.RefObject<HTMLDivElement>;
  awards: Array<{ image?: string; name?: string }>; // Add awards prop
}

interface ImageItem {
  id: number;
  src: string;
}

const AwardPreview: React.FC<AwardPreviewProps> = ({
  activeIndex,
  mousePosition,
  awardsListRef,
  awards,
}) => {
  const previewRef = React.useRef<HTMLDivElement>(null);
  const [images, setImages] = React.useState<ImageItem[]>([]);
  const [isClient, setIsClient] = React.useState(false);

  // Set client-side flag
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (!isClient || activeIndex === null || !awards[activeIndex]?.image) return;

    const imgSrc = awards[activeIndex].image;
    const newImage = { id: Date.now(), src: imgSrc };
    
    setImages((prev) => {
      if (prev.length >= 2) {
        // remove old images smoothly
        const oldImages = prev.slice(0, -1);
        oldImages.forEach((img) => {
          const element = document.getElementById(`preview-${img.id}`);
          if (element) {
            gsap.to(element, {
              scale: 0,
              duration: 0.4,
              ease: "power2.out",
            });
          }
        });
        return [prev[prev.length - 1], newImage];
      }
      return [...prev, newImage];
    });
  }, [activeIndex, awards, isClient]);

  React.useEffect(() => {
    if (!isClient || !awardsListRef.current) return;

    const rect = awardsListRef.current.getBoundingClientRect();
    const isOutside =
      mousePosition.x < rect.left ||
      mousePosition.x > rect.right ||
      mousePosition.y < rect.top ||
      mousePosition.y > rect.bottom;

    if (isOutside) {
      images.forEach((img) => {
        const element = document.getElementById(`preview-${img.id}`);
        if (element) {
          gsap.to(element, {
            scale: 0,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () =>
              setImages((prev) => prev.filter((i) => i.id !== img.id)),
          });
        }
      });
    }
  }, [mousePosition, images, awardsListRef, isClient]);

  // Don't render anything on server side to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="award-preview">
        {/* Empty placeholder for SSR */}
      </div>
    );
  }

  return (
    <div
      ref={previewRef}
      className="award-preview"
    >
      {images.map((img) => (
        <NextImage
          key={img.id}
          id={`preview-${img.id}`}
          src={img.src}
          alt="award preview"
          fill
          sizes="(max-width: 768px) 50vw, 35vw"
          style={{
            objectFit: "cover",
            transform: "scale(0)", // initial state
          }}
          onLoad={(e) => {
            gsap.to(e.target, {
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(AwardPreview);