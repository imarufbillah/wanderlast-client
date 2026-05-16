import Link from "next/link";
import { Home, Search, MapPin, ArrowLeft, Compass } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found — WanderLast",
  description: "The page you're looking for doesn't exist.",
};

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <div className="px-4 xl:px-20 py-16 sm:py-20 md:py-24 flex items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
        <div className="max-w-2xl w-full text-center">
          {/* Animated Icon */}
          <div className="relative inline-flex items-center justify-center mb-6 sm:mb-8">
            {/* Background circles */}
            <div className="absolute w-40 h-40 bg-accent/10 rounded-full animate-pulse" />
            <div className="absolute w-32 h-32 bg-accent/20 rounded-full animate-ping" />

            {/* Main icon */}
            <div className="relative w-24 h-24 bg-linear-to-br from-accent/20 to-accent-soft/20 rounded-full flex items-center justify-center border-2 border-accent/30">
              <Compass
                className="w-12 h-12 text-accent animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </div>

          {/* Error Code */}
          <div className="mb-4 sm:mb-6">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold font-heading mb-2 bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              404
            </h1>
            <div className="h-1 w-20 sm:w-24 bg-linear-to-r from-accent to-accent-soft rounded-full mx-auto" />
          </div>

          {/* Message */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-heading mb-3 sm:mb-4">
            Oops! You&apos;ve Wandered Off the Map
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-text-muted font-body mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist. It might have
            been moved or deleted.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent text-primary font-bold font-body rounded-xl hover:bg-accent-soft active:scale-95 transition-all shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 w-full sm:w-auto text-sm sm:text-base"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              Back to Home
            </Link>

            <Link
              href="/destinations"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-surface text-text font-semibold font-body rounded-xl border-2 border-border hover:border-accent hover:text-accent active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 w-full sm:w-auto text-sm sm:text-base"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              Explore Destinations
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-surface rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-border shadow-sm">
            <h3 className="text-base sm:text-lg font-bold text-primary font-heading mb-4 sm:mb-5">
              Popular Pages
            </h3>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <Link
                href="/destinations"
                className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-background rounded-xl text-xs sm:text-sm font-medium font-body text-text hover:text-accent hover:bg-accent/5 transition-all group"
              >
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Destinations</span>
              </Link>

              <Link
                href="/about"
                className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-background rounded-xl text-xs sm:text-sm font-medium font-body text-text hover:text-accent hover:bg-accent/5 transition-all group"
              >
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>About Us</span>
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-background rounded-xl text-xs sm:text-sm font-medium font-body text-text hover:text-accent hover:bg-accent/5 transition-all group"
              >
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Contact</span>
              </Link>

              <Link
                href="/bookings"
                className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-background rounded-xl text-xs sm:text-sm font-medium font-body text-text hover:text-accent hover:bg-accent/5 transition-all group"
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>My Bookings</span>
              </Link>
            </div>
          </div>

          {/* Help Text */}
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-text-muted font-body">
            Need help?{" "}
            <Link
              href="/contact"
              className="text-accent hover:text-accent-soft font-semibold transition-colors underline"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
