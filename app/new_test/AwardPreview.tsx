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
}

interface ImageItem {
  id: number;
  src: string;
}

const AwardPreview: React.FC<AwardPreviewProps> = ({
  activeIndex,
  mousePosition,
  awardsListRef,
}) => {
  const previewRef = React.useRef<HTMLDivElement>(null);
  const [images, setImages] = React.useState<ImageItem[]>([]);

  const loadImage = React.useCallback(async (index: number) => {
    const formats = ["webp","png", "jpg", "jpeg"];

    for (const format of formats) {
      try {
        const img = new window.Image();
        const imgSrc = `/assets/img${index + 1}.${format}`;

        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          img.src = imgSrc;
        });

        return imgSrc;
      } catch {
        continue;
      }
    }
    return null;
  }, []);

  React.useEffect(() => {
    if (activeIndex !== null) {
      loadImage(activeIndex).then((imgSrc) => {
        if (imgSrc) {
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
                    // Remove the manual DOM removal here!
                    // onComplete: () => element.remove(),
                  });
                }
              });
              return [prev[prev.length - 1], newImage];
            }
            return [...prev, newImage];
          });
        }
      });
    }
  }, [activeIndex, loadImage]);

  React.useEffect(() => {
    if (awardsListRef.current) {
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
    }
  }, [mousePosition, images, awardsListRef]);

  return (
    <div
      ref={previewRef}
      className="award-preview relative w-[250px] h-[200px] overflow-hidden "
    >
      {images.map((img) => (
        <NextImage
          key={img.id}
          id={`preview-${img.id}`}
          src={img.src}
          alt="award preview"
          fill
          style={{
            objectFit: "cover",
            transform: "scale(0)", // initial state
          }}
          onLoadingComplete={(imgEl) => {
            gsap.to(imgEl, {
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
