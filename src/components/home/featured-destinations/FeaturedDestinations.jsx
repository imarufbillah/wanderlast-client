import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CarouselContainer from "./CarouselContainer";
import { getFeaturedDestinations } from "@/lib/data";

const FeaturedDestinations = async () => {
  const featuredDestinations = await getFeaturedDestinations();

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
      <CarouselContainer featuredDestinations={featuredDestinations} />
    </section>
  );
};

export default FeaturedDestinations;
