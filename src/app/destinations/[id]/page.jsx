import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Star,
  Clock,
  Users,
  Calendar,
  TrendingUp,
  Check,
  ChevronLeft,
  Sparkles,
  Award,
  Shield,
  Heart,
  Share2,
  Edit,
  Trash2,
} from "lucide-react";
import { getDestinationById } from "@/lib/data";

const DestinationDetails = async ({ params }) => {
  const { id } = await params;

  const destination = await getDestinationById(id);

  if (!destination) {
    return (
      <div className="min-h-screen bg-background pt-16 md:pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary font-heading mb-4">
            Destination Not Found
          </h1>
          <Link
            href="/destinations"
            className="text-accent hover:text-accent-soft font-body"
          >
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  const hasDiscount = destination.discountPrice;
  const savings = hasDiscount
    ? destination.price - destination.discountPrice
    : 0;
  const discountPercent = hasDiscount
    ? Math.round((savings / destination.price) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      {/* Top Navigation Bar */}
      <div className="px-4 xl:px-20 py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Back Button */}
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-4 py-2 bg-surface backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all text-primary font-body font-semibold border border-border hover:border-accent"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Destinations</span>
          </Link>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href={`/destinations/${destination._id}/edit`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all text-accent font-body font-semibold border border-accent/20 hover:bg-accent/20"
            >
              <Edit className="w-5 h-5" />
              <span className="hidden sm:inline">Edit</span>
            </Link>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all text-red-500 font-body font-semibold border border-red-500/20 hover:bg-red-500/20">
              <Trash2 className="w-5 h-5" />
              <span className="hidden sm:inline">Delete</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Split Layout */}
      <section className="px-4 xl:px-20 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Image */}
            <div className="relative">
              {/* Image Container with 4:5 Ratio */}
              <div className="sticky top-24">
                <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={destination.imageUrl}
                    alt={destination.destinationName}
                    fill
                    priority
                    className="object-cover"
                  />
                  
                  {/* Subtle Gradient Overlay - Bottom only */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary/40 via-transparent to-transparent" />

                  {/* Action Buttons - Top Right */}
                  <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
                    <button className="p-3 bg-surface/90 backdrop-blur-md rounded-full shadow-lg hover:bg-surface hover:scale-110 transition-all text-primary">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-surface/90 backdrop-blur-md rounded-full shadow-lg hover:bg-surface hover:scale-110 transition-all text-primary">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Badges - Bottom Left */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
                    {destination.featured && (
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-accent backdrop-blur-md rounded-full shadow-lg">
                        <Sparkles className="w-3.5 h-3.5 text-surface" />
                        <span className="text-xs font-bold text-surface font-body">
                          Featured
                        </span>
                      </div>
                    )}
                    {destination.popular && (
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-success backdrop-blur-md rounded-full shadow-lg">
                        <TrendingUp className="w-3.5 h-3.5 text-surface" />
                        <span className="text-xs font-bold text-surface font-body">
                          Popular
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Discount Badge - Top Left */}
                  {hasDiscount && (
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-1.5 px-4 py-2 bg-success backdrop-blur-md rounded-full shadow-lg">
                        <TrendingUp className="w-4 h-4 text-surface" />
                        <span className="text-sm font-bold text-surface font-body">
                          Save {discountPercent}%
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6 sm:space-y-8">
              {/* Header Section */}
              <div>
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4 border border-accent/20">
                  <span className="text-sm font-bold text-accent font-body uppercase tracking-wide">
                    {destination.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary font-heading mb-4 leading-tight">
                  {destination.destinationName}
                </h1>

                {/* Location */}
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-lg text-text font-body font-semibold">
                    {destination.city}, {destination.country}
                  </span>
                </div>

                {/* Rating & Availability */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-border shadow-sm">
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    <span className="text-base font-bold text-primary font-body">
                      {destination.rating}
                    </span>
                    <span className="text-sm text-text-muted font-body">
                      ({destination.reviewsCount} reviews)
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-success/10 rounded-full border border-success/20">
                    <span className="text-sm font-semibold text-success font-body">
                      {destination.availability}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <Clock className="w-6 h-6 text-accent mb-2" />
                  <p className="text-xs text-text-muted font-body mb-1">
                    Duration
                  </p>
                  <p className="text-sm font-bold text-primary font-body">
                    {destination.duration}
                  </p>
                </div>
                <div className="p-4 bg-surface rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <Users className="w-6 h-6 text-accent mb-2" />
                  <p className="text-xs text-text-muted font-body mb-1">
                    Group Size
                  </p>
                  <p className="text-sm font-bold text-primary font-body">
                    {destination.groupSize}
                  </p>
                </div>
                <div className="p-4 bg-surface rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <Calendar className="w-6 h-6 text-accent mb-2" />
                  <p className="text-xs text-text-muted font-body mb-1">
                    Departure
                  </p>
                  <p className="text-sm font-bold text-primary font-body">
                    {new Date(destination.departureDate).toLocaleDateString(
                      "en-US",
                      { month: "short", day: "numeric", year: "numeric" }
                    )}
                  </p>
                </div>
                <div className="p-4 bg-surface rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <Award className="w-6 h-6 text-accent mb-2" />
                  <p className="text-xs text-text-muted font-body mb-1">
                    Difficulty
                  </p>
                  <p className="text-sm font-bold text-primary font-body">
                    {destination.difficulty}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="p-6 bg-surface rounded-2xl border border-border shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-primary font-heading mb-3">
                  About This <span className="text-accent">Experience</span>
                </h2>
                <p className="text-base text-text font-body leading-relaxed">
                  {destination.description}
                </p>
              </div>

              {/* Booking Card */}
              <div className="p-6 sm:p-8 bg-linear-to-br from-accent/5 to-accent-soft/5 rounded-3xl border-2 border-accent/20 shadow-xl">
                {/* Price Section */}
                <div className="mb-6">
                  {hasDiscount && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-success/20 rounded-full mb-3 border border-success/30">
                      <TrendingUp className="w-4 h-4 text-success" />
                      <span className="text-sm font-bold text-success font-body">
                        Save ${savings} ({discountPercent}% OFF)
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-3 mb-2">
                    {hasDiscount && (
                      <p className="text-2xl text-text-muted font-body line-through">
                        ${destination.price}
                      </p>
                    )}
                    <p className="text-5xl font-bold text-accent font-heading">
                      ${destination.discountPrice || destination.price}
                    </p>
                  </div>
                  <p className="text-sm text-text-muted font-body">
                    per person • {destination.currency}
                  </p>
                </div>

                {/* Booking Form */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-text font-body mb-2">
                      Number of Travelers
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all cursor-pointer">
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4 People</option>
                      <option>5+ People</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text font-body mb-2">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      defaultValue={destination.departureDate.split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-text font-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Book Button */}
                <button className="w-full py-4 bg-linear-to-r from-accent to-accent-soft text-surface font-bold font-body rounded-xl hover:shadow-[0_0_30px_rgba(19,218,233,0.4)] transition-all shadow-lg mb-6 text-lg">
                  Book Now
                </button>

                {/* Trust Badges */}
                <div className="space-y-3 pt-6 border-t border-accent/20">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm text-text font-body">
                      Secure payment & data protection
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-sm text-text font-body">
                      Free cancellation up to 24 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm text-text font-body">
                      Best price guarantee
                    </span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="p-6 bg-surface rounded-2xl border border-border shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-primary font-heading mb-4">
                  Trip <span className="text-accent">Highlights</span>
                </h2>
                <div className="space-y-3">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm text-text font-body">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="p-6 bg-surface rounded-2xl border border-border shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-primary font-heading mb-4">
                  What&apos;s <span className="text-accent">Included</span>
                </h2>
                <div className="space-y-3">
                  {destination.included.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="shrink-0 w-6 h-6 bg-success/10 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-success" />
                      </div>
                      <span className="text-sm text-text font-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Season */}
              <div className="p-6 bg-linear-to-br from-accent/5 to-accent-soft/5 rounded-2xl border border-accent/20">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 bg-accent/10 rounded-xl">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary font-heading mb-2">
                      Best Time to Visit
                    </h3>
                    <p className="text-base text-text font-body">
                      {destination.bestSeason}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetails;
