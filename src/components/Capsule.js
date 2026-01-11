import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';

/**
 * Capsule - A clickable card component for displaying a gallery build.
 *
 * Structure:
 *   - Cover image (3:4 aspect ratio) - always visible (first image from list)
 *   - Title, date, description - visible in side panel when expanded
 *   - Image gallery with navigation when expanded
 *
 * @param {string[]} images - Array of image URLs/paths
 * @param {string} title - Build title displayed in side panel
 * @param {string} date - Date string for the build
 * @param {string} description - Short description of the build
 * @param {boolean} expanded - Whether the capsule is expanded
 * @param {function} onClick - Click handler to toggle expansion
 */
function Capsule({ images, title, date, description, expanded, onClick }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textCapsuleRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset to first image when collapsed
  useEffect(() => {
    if (!expanded) {
      setCurrentIndex(0);
    }
  }, [expanded]);

  const handleNextImage = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % images.length;

    // Animate slide
    gsap.to(imageContainerRef.current, {
      x: -20,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIndex(nextIndex);
        gsap.fromTo(
          imageContainerRef.current,
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
      },
    });
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + images.length) % images.length;

    // Animate slide
    gsap.to(imageContainerRef.current, {
      x: 20,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIndex(prevIndex);
        gsap.fromTo(
          imageContainerRef.current,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
      },
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (expanded) {
        // Animate expansion
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
        );
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
        );
        gsap.fromTo(
          textCapsuleRef.current,
          { opacity: 0, scaleX: 0, transformOrigin: 'left center' },
          { opacity: 1, scaleX: 1, duration: 0.6, ease: 'back.out(1.2)', delay: 0.1 }
        );
      } else {
        // Animate collapse
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
        );
      }
    });

    return () => ctx.revert();
  }, [expanded]);

  if (expanded) {
    return (
      <div ref={containerRef} className="flex flex-row gap-10 w-full">
        <div
          ref={imageRef}
          className="w-2/3 flex-shrink-0 aspect-[4/3] overflow-hidden rounded-[8rem] relative"
        >
          <div ref={imageContainerRef} className="w-full h-full">
            <img
              src={images[currentIndex]}
              alt={`${title} - ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/50 hover:bg-white flex items-center justify-center text-crimson text-2xl font-bold transition-colors"
              >
                ‹
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/50 hover:bg-white flex items-center justify-center text-crimson text-2xl font-bold transition-colors"
              >
                ›
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/50 text-crimson text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
        <div
          ref={textCapsuleRef}
          className="w-1/3 rounded-full p-6 pt-20 flex flex-col gap-3 text-center"
          style={{
            background: 'linear-gradient(180deg, #DF7369, #C2E7A4)',
          }}
        >
          <h3 className="font-Monea text-3xl text-crimson">{title}</h3>
          <span className="text-sm text-crimson/70">{date}</span>
          <p className="text-base text-crimson/80 leading-relaxed flex-grow whitespace-pre-line text-left px-4 pt-4">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      <button
        onClick={onClick}
        className="flex flex-col rounded-full overflow-hidden text-left"
        style={{
          background: 'linear-gradient(180deg, #DF7369, #C2E7A4)',
        }}
      >
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </button>
    </div>
  );
}

export default Capsule;
