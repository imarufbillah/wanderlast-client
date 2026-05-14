import { ArrowRight, MapPin, Star, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedDestinationsCard = ({ destination, visibleSlides }) => {
  return (
    <div
      className="shrink-0 px-3 sm:px-4 relative z-0 group/card"
      style={{ width: `${100 / visibleSlides}%` }}
    >
      <Link
        href={`/destinations/${destination._id}`}
        className="group block relative bg-surface rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:z-20"
      >
        {/* Image Container with Overlay Effects */}
        <div className="relative aspect-3/4 overflow-hidden">
          <Image
            src={destination.imageUrl}
            alt={`${destination.destinationName}, ${destination.country}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Multi-layer Gradient Overlay for depth */}
          <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/60 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-transparent to-accent-soft/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Animated Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-surface/20 to-transparent" />

          {/* Top Section - Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2 z-10">
            {/* Featured Badge with Icon */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-accent backdrop-blur-md rounded-full shadow-lg border border-accent-soft/30">
              <Sparkles className="w-3 h-3 text-surface" />
              <span className="text-xs font-bold text-surface font-body">
                Featured
              </span>
            </div>

            {/* Rating Badge - Premium Style */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-primary/90 backdrop-blur-md rounded-full shadow-lg border border-accent/20">
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              <span className="text-xs font-bold text-surface font-body">
                {destination.rating}
              </span>
              <span className="text-xs text-surface/70 font-body">
                ({destination.reviewsCount})
              </span>
            </div>
          </div>

          {/* Bottom Content - Enhanced Layout */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/20 backdrop-blur-sm rounded-full mb-3 border border-accent/30">
              <span className="text-xs font-semibold text-accent-soft font-body uppercase tracking-wide">
                {destination.category}
              </span>
            </div>

            {/* Location with enhanced styling */}
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 bg-accent/20 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-accent-soft shrink-0" />
              </div>
              <span className="text-sm text-surface font-body font-semibold">
                {destination.city}, {destination.country}
              </span>
            </div>

            {/* Destination Name - Larger and bolder */}
            <h3 className="text-3xl sm:text-4xl font-bold text-surface font-heading mb-3 group-hover:text-accent-soft transition-colors leading-tight">
              {destination.destinationName}
            </h3>

            {/* Description with better contrast */}
            <p className="text-sm text-surface/90 font-body mb-5 line-clamp-2 leading-relaxed">
              {destination.description}
            </p>

            {/* Price Section - Premium Card Style */}
            <div className="flex items-center justify-between p-4 bg-surface/10 backdrop-blur-md rounded-2xl border border-surface/20">
              <div>
                <p className="text-xs text-surface/80 font-body mb-1 uppercase tracking-wide">
                  Starting from
                </p>
                <div className="flex items-baseline gap-2">
                  {destination.discountPrice && (
                    <p className="text-base text-surface/50 font-body line-through">
                      ${destination.price}
                    </p>
                  )}
                  <p className="text-2xl sm:text-3xl font-bold text-accent-soft font-heading">
                    ${destination.discountPrice || destination.price}
                  </p>
                </div>
                <p className="text-xs text-surface/70 font-body mt-0.5">
                  {destination.duration}
                </p>
              </div>

              {/* Enhanced CTA Button */}
              <div className="relative">
                <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative flex items-center justify-center w-14 h-14 bg-linear-to-br from-accent to-accent-soft rounded-full group-hover:scale-110 transition-all shadow-lg">
                  <ArrowRight className="w-6 h-6 text-surface group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedDestinationsCard;
