import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { getAllDestinations } from "@/lib/data";

const DestinationsPage = async () => {
  const destinations = await getAllDestinations();

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      {/* Page Header */}
      <section className="py-16 sm:py-20 md:py-24 px-4 xl:px-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary font-heading mb-4">
            All <span className="text-accent">Destinations</span>
          </h1>
          <p className="text-base sm:text-lg text-text-muted font-body">
            Discover amazing places around the world and start planning your
            next adventure
          </p>
        </div>
      </section>

      {/* Destinations Grid Section */}
      <section className="pb-16 sm:pb-20 md:pb-24 px-4 xl:px-20">
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-text-muted font-body text-sm sm:text-base">
            Showing{" "}
            <span className="font-semibold text-primary">
              {destinations.length}
            </span>{" "}
            {destinations.length === 1 ? "destination" : "destinations"}
          </p>
        </div>

        {/* Destinations Grid */}
        {destinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {destinations.map((destination) => (
              <Link
                key={destination._id}
                href={`/destinations/${destination._id}`}
                className="group relative bg-surface rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative aspect-4/5 overflow-hidden">
                  <Image
                    src={destination.imageUrl}
                    alt={`${destination.destinationName}, ${destination.country}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
                    {/* Featured Badge */}
                    {destination.featured && (
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-accent/95 backdrop-blur-md rounded-full shadow-lg">
                        <TrendingUp className="w-3.5 h-3.5 text-surface" />
                        <span className="text-xs font-bold text-surface font-body">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Rating Badge */}
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-surface/95 backdrop-blur-md rounded-full shadow-lg ml-auto">
                      <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                      <span className="text-xs font-bold text-primary font-body">
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
                        {destination.city}, {destination.country}
                      </span>
                    </div>

                    {/* Destination Name */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-surface font-heading mb-3 group-hover:text-accent-soft transition-colors">
                      {destination.destinationName}
                    </h3>

                    {/* Duration */}
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-4 h-4 text-accent-soft shrink-0" />
                      <span className="text-sm text-surface/80 font-body">
                        {destination.duration}
                      </span>
                    </div>

                    {/* Price Section */}
                    <div className="flex items-center justify-between pt-4 border-t border-surface/20">
                      <div>
                        <p className="text-xs text-surface/70 font-body mb-1">
                          Starting from
                        </p>
                        <div className="flex items-baseline gap-2">
                          {destination.discountPrice && (
                            <p className="text-sm text-surface/50 font-body line-through">
                              ${destination.price}
                            </p>
                          )}
                          <p className="text-xl sm:text-2xl font-bold text-accent-soft font-heading">
                            ${destination.discountPrice || destination.price}
                          </p>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full group-hover:bg-accent-soft transition-all group-hover:scale-110 shadow-lg">
                        <ArrowRight className="w-5 h-5 text-surface group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
              <MapPin className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary font-heading mb-3">
              No Destinations Found
            </h3>
            <p className="text-text-muted font-body">
              We couldn&apos;t find any destinations. Please try again later.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default DestinationsPage;
