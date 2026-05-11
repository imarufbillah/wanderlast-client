import { MapPin, Star } from "lucide-react";

const DestinationHeader = ({
  category,
  destinationName,
  city,
  country,
  rating,
  reviewsCount,
  availability,
}) => {
  return (
    <div>
      {/* Category Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4 border border-accent/20">
        <span className="text-sm font-bold text-accent font-body uppercase tracking-wide">
          {category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary font-heading mb-4 leading-tight">
        {destinationName}
      </h1>

      {/* Location */}
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-accent" />
        <span className="text-lg text-text font-body font-semibold">
          {city}, {country}
        </span>
      </div>

      {/* Rating & Availability */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-border shadow-sm">
          <Star className="w-5 h-5 text-accent fill-accent" />
          <span className="text-base font-bold text-primary font-body">
            {rating}
          </span>
          <span className="text-sm text-text-muted font-body">
            ({reviewsCount} reviews)
          </span>
        </div>
        <div className="px-4 py-2 bg-success/10 rounded-full border border-success/20">
          <span className="text-sm font-semibold text-success font-body">
            {availability}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DestinationHeader;
