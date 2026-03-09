'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode[];
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  gap?: number;
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function Carousel({
  children,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 24,
  showArrows = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalItems = children.length;
  const maxIndex = Math.max(0, totalItems - itemsToShow);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsToShow(itemsPerView.mobile);
      } else if (width < 1024) {
        setItemsToShow(itemsPerView.tablet);
      } else {
        setItemsToShow(itemsPerView.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerView]);

  // Auto play
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  // Don't show carousel controls if all items fit
  const showControls = totalItems > itemsToShow;

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={containerRef}>
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            gap: `${gap}px`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `calc((100% - ${gap * (itemsToShow - 1)}px) / ${itemsToShow})`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showControls && showArrows && (
        <>
          <button
            onClick={goToPrevious}
            disabled={!canGoPrevious}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
              canGoPrevious
                ? 'hover:bg-gray-100 hover:scale-110 text-gray-800'
                : 'opacity-50 cursor-not-allowed text-gray-400'
            }`}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={!canGoNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
              canGoNext
                ? 'hover:bg-gray-100 hover:scale-110 text-gray-800'
                : 'opacity-50 cursor-not-allowed text-gray-400'
            }`}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showControls && showDots && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
