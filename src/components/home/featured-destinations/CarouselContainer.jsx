"use client";

import { useState, useEffect, useRef } from "react";
import FeaturedDestinationsCard from "./FeaturedDestinationsCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselContainer = ({ featuredDestinations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const autoPlayRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const maxIndex = featuredDestinations.length - visibleSlides;
          if (prev >= maxIndex) return 0; // Loop back to start
          return prev + 1;
        });
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, featuredDestinations.length, visibleSlides]);

  const goToSlide = (index) => {
    const maxIndex = featuredDestinations.length - visibleSlides;
    const validIndex = Math.min(index, maxIndex);
    setCurrentIndex(validIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0
        ? featuredDestinations.length - visibleSlides
        : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const maxIndex = featuredDestinations.length - visibleSlides;
    const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Calculate visible slides based on screen size
  const getVisibleSlides = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 640) return 2; // sm
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-surface/95 backdrop-blur-md rounded-full shadow-xl  items-center justify-center text-primary hover:bg-accent hover:text-surface transition-all hover:scale-110 hidden sm:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-surface/95 backdrop-blur-md rounded-full shadow-xl  items-center justify-center text-primary hover:bg-accent hover:text-surface transition-all hover:scale-110 hidden sm:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Track */}
      <div className="overflow-visible py-8">
        <div className="overflow-hidden -my-6">
          <div
            className="flex transition-transform duration-500 ease-out py-6"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
            }}
          >
            {featuredDestinations.map((destination) => (
              <FeaturedDestinationsCard
                key={destination._id}
                destination={destination}
                visibleSlides={visibleSlides}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
        {Array.from({
          length: featuredDestinations.length - visibleSlides + 1,
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-2 bg-accent"
                : "w-2 h-2 bg-border hover:bg-accent/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselContainer;
