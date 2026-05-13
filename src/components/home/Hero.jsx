import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Calendar, DollarSign, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-banner.png"
          alt="Adventure traveler overlooking scenic mountains and ocean"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Overlay for better text readability - centered design */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/60 via-primary/40 to-primary/70" />
      </div>

      {/* Hero Content */}
      <div className="relative min-h-dvh flex flex-col">
        {/* Spacer for top */}
        <div className="shrink-0 h-20 md:h-24" />

        {/* Main Content - Centered */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 xl:px-20">
          <div className="w-full max-w-5xl text-center">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-surface font-heading leading-tight mb-3 sm:mb-4 md:mb-6">
              Explore the World
              <br />
              <span className="text-accent">Your Way</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-surface/90 font-body mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2 sm:px-4">
              Discover breathtaking destinations, create unforgettable memories,
              and embark on adventures that last a lifetime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4">
              <Link
                href="/destinations"
                className="px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-accent text-surface font-semibold font-body rounded-full hover:bg-accent-soft transition-all shadow-lg hover:shadow-xl hover:scale-105 text-xs sm:text-sm md:text-base"
              >
                Explore Destinations
              </Link>
              <Link
                href="/tours"
                className="px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-surface/10 backdrop-blur-sm text-surface font-semibold font-body rounded-full border-2 border-surface/30 hover:bg-surface/20 transition-all text-xs sm:text-sm md:text-base"
              >
                View Tours
              </Link>
            </div>
          </div>
        </div>

        {/* Search Bar - Bottom Positioned */}
        <div className="shrink-0 pb-16 sm:pb-20 md:pb-24 px-3 sm:px-4 md:px-6 xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-stretch gap-2 sm:gap-3">
              {/* Input Fields Container */}
              <div className="relative bg-surface/15 backdrop-blur-3xl rounded-2xl sm:rounded-4xl lg:rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-1.5 sm:p-2 border border-surface/40 flex-1 group hover:shadow-[0_8px_48px_0_rgba(19,218,233,0.3)] transition-all duration-500">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-4xl lg:rounded-full bg-linear-to-r from-accent/5 via-transparent to-accent-soft/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row items-stretch gap-1.5 sm:gap-2">
                  {/* Destination Input */}
                  <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-surface/25 backdrop-blur-md rounded-xl sm:rounded-full flex-1 hover:bg-surface/35 transition-all duration-300 border border-surface/30 hover:border-accent/40 group/item">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                    <div className="flex-1 min-w-0">
                      <input
                        type="text"
                        placeholder="Where to?"
                        className="w-full bg-transparent text-surface font-body outline-none placeholder:text-surface/60 text-xs sm:text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Date Input */}
                  <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-surface/25 backdrop-blur-md rounded-xl sm:rounded-full flex-1 hover:bg-surface/35 transition-all duration-300 border border-surface/30 hover:border-accent/40 group/item">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                    <div className="flex-1 min-w-0">
                      <input
                        type="text"
                        placeholder="Select date"
                        className="w-full bg-transparent text-surface font-body outline-none placeholder:text-surface/60 text-xs sm:text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Budget Input */}
                  <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-surface/25 backdrop-blur-md rounded-xl sm:rounded-full flex-1 hover:bg-surface/35 transition-all duration-300 border border-surface/30 hover:border-accent/40 group/item">
                    <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                    <div className="flex-1 min-w-0">
                      <input
                        type="text"
                        placeholder="Max budget"
                        className="w-full bg-transparent text-surface font-body outline-none placeholder:text-surface/60 text-xs sm:text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Travelers Input */}
                  <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-surface/25 backdrop-blur-md rounded-xl sm:rounded-full flex-1 hover:bg-surface/35 transition-all duration-300 border border-surface/30 hover:border-accent/40 group/item">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                    <div className="flex-1 min-w-0">
                      <input
                        type="text"
                        placeholder="How many?"
                        className="w-full bg-transparent text-surface font-body outline-none placeholder:text-surface/60 text-xs sm:text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Button - Separated */}
              <button className="relative flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 bg-linear-to-r from-accent to-accent-soft text-surface font-bold font-body rounded-xl sm:rounded-full hover:shadow-[0_0_40px_rgba(19,218,233,0.6)] transition-all duration-300 shadow-[0_8px_24px_rgba(19,218,233,0.4)] hover:scale-105 lg:min-w-35 xl:min-w-40 overflow-hidden group/btn">
                {/* Animated shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-surface/30 to-transparent" />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover/btn:rotate-90 transition-transform duration-300" />
                <span className="relative z-10 tracking-wide text-xs sm:text-sm md:text-base">
                  Search
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Redesigned */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-surface/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-surface/80 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
