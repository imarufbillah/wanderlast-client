"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const FeaturedDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const autoPlayRef = useRef(null);

  const destinations = [
    {
      id: 1,
      name: "Santorini",
      country: "Greece",
      image: "/assets/destinations/image1.png",
      rating: 4.9,
      tours: 12,
      price: "From $899",
      description: "Iconic white buildings and stunning sunsets",
    },
    {
      id: 2,
      name: "Bali",
      country: "Indonesia",
      image: "/assets/destinations/image2.png",
      rating: 4.8,
      tours: 18,
      price: "From $699",
      description: "Tropical paradise with rich culture",
    },
    {
      id: 3,
      name: "Paris",
      country: "France",
      image: "/assets/destinations/image3.png",
      rating: 4.9,
      tours: 24,
      price: "From $1,299",
      description: "The city of love and lights",
    },
    {
      id: 4,
      name: "Tokyo",
      country: "Japan",
      image: "/assets/destinations/image4.png",
      rating: 4.7,
      tours: 15,
      price: "From $1,099",
      description: "Modern metropolis meets ancient tradition",
    },
    {
      id: 5,
      name: "Maldives",
      country: "Indian Ocean",
      image: "/assets/destinations/image5.png",
      rating: 5.0,
      tours: 10,
      price: "From $1,499",
      description: "Crystal clear waters and luxury resorts",
    },
    {
      id: 6,
      name: "Dubai",
      country: "UAE",
      image: "/assets/destinations/image6.png",
      rating: 4.8,
      tours: 20,
      price: "From $999",
      description: "Futuristic skyline and desert adventures",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const maxIndex = destinations.length - visibleSlides;
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
  }, [isAutoPlaying, destinations.length, visibleSlides]);

  const goToSlide = (index) => {
    const maxIndex = destinations.length - visibleSlides;
    const validIndex = Math.min(index, maxIndex);
    setCurrentIndex(validIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0
        ? destinations.length - visibleSlides
        : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const maxIndex = destinations.length - visibleSlides;
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
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 xl:px-20 bg-background">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-12 md:mb-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-heading mb-3 sm:mb-4">
            Featured <span className="text-accent">Destinations</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-muted font-body">
            Discover the world&apos;s most breathtaking locations handpicked for
            unforgettable adventures
          </p>
        </div>

        <Link
          href="/destinations"
          className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent text-surface font-semibold font-body rounded-full hover:bg-accent-soft transition-all shadow-md hover:shadow-lg hover:scale-105 w-fit text-sm sm:text-base"
        >
          All Destinations
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Carousel Container */}
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
        <div className="overflow-hidden py-2">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
            }}
          >
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="shrink-0 px-3 sm:px-4"
                style={{ width: `${100 / visibleSlides}%` }}
              >
                <Link
                  href={`/destinations/${destination.id}`}
                  className="group block relative bg-surface rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:z-10"
                >
                  {/* Image Container */}
                  <div className="relative aspect-3/4 overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={`${destination.name}, ${destination.country}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/50 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
                      {/* Tours Count Badge */}
                      <div className="px-3 py-2 bg-surface/95 backdrop-blur-md rounded-full shadow-lg">
                        <span className="text-xs font-bold text-primary font-body">
                          {destination.tours} Tours
                        </span>
                      </div>

                      {/* Rating Badge */}
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-accent/95 backdrop-blur-md rounded-full shadow-lg">
                        <Star className="w-3.5 h-3.5 text-surface fill-surface" />
                        <span className="text-xs font-bold text-surface font-body">
                          {destination.rating}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      {/* Location */}
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-accent-soft shrink-0" />
                        <span className="text-sm text-surface/90 font-body font-medium">
                          {destination.country}
                        </span>
                      </div>

                      {/* Destination Name */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-surface font-heading mb-2 group-hover:text-accent-soft transition-colors">
                        {destination.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-surface/80 font-body mb-4 line-clamp-2">
                        {destination.description}
                      </p>

                      {/* Price & CTA Row */}
                      <div className="flex items-center justify-between pt-4 border-t border-surface/20">
                        <div>
                          <p className="text-xs text-surface/70 font-body mb-1">
                            Starting from
                          </p>
                          <p className="text-xl sm:text-2xl font-bold text-accent-soft font-heading">
                            {destination.price}
                          </p>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full group-hover:bg-accent-soft transition-all group-hover:scale-110 shadow-lg">
                          <ArrowRight className="w-5 h-5 text-surface group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {Array.from({ length: destinations.length - visibleSlides + 1 }).map(
            (_, index) => (
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
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
