import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Star } from "lucide-react";

const FeaturedDestinations = () => {
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

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {destinations.map((destination) => (
          <Link
            key={destination.id}
            href={`/destinations/${destination.id}`}
            className="group relative bg-surface rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
              <Image
                src={destination.image}
                alt={`${destination.name}, ${destination.country}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay - Stronger for better text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent" />

              {/* Top Badges Container */}
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

              {/* Bottom Content Overlay */}
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
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;
