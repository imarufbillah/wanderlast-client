"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw, AlertTriangle } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <div className="px-4 xl:px-20 py-16 sm:py-20 md:py-24 flex items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
        <div className="max-w-2xl w-full text-center">
          {/* Animated Icon */}
          <div className="relative inline-flex items-center justify-center mb-6 sm:mb-8">
            {/* Background circles */}
            <div className="absolute w-40 h-40 bg-red-500/10 rounded-full animate-pulse" />
            <div className="absolute w-32 h-32 bg-red-500/20 rounded-full animate-ping" />

            {/* Main icon */}
            <div className="relative w-24 h-24 bg-linear-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center border-2 border-red-500/30">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-4 sm:mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary font-heading mb-2">
              Something Went Wrong
            </h1>
            <div className="h-1 w-20 sm:w-24 bg-linear-to-r from-red-500 to-red-600 rounded-full mx-auto" />
          </div>

          {/* Description */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-heading mb-3 sm:mb-4">
            Oops! We Hit a Bump in the Road
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-text-muted font-body mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
            Don&apos;t worry, it&apos;s not your fault. Our team has been
            notified and we&apos;re working on it.
          </p>

          {/* Error Details (Development only) */}
          {process.env.NODE_ENV === "development" && error?.message && (
            <div className="mb-6 sm:mb-8 bg-red-50 border border-red-200 rounded-2xl p-4 sm:p-5 text-left max-w-lg mx-auto">
              <p className="text-xs sm:text-sm font-semibold text-red-800 font-body mb-2">
                Error Details (Development Only):
              </p>
              <p className="text-xs sm:text-sm text-red-700 font-mono wrap-break-word">
                {error.message}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
            <button
              onClick={() => reset()}
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent text-primary font-bold font-body rounded-xl hover:bg-accent-soft active:scale-95 transition-all shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 w-full sm:w-auto text-sm sm:text-base"
            >
              <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
              Try Again
            </button>

            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-surface text-text font-semibold font-body rounded-xl border-2 border-border hover:border-accent hover:text-accent active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 w-full sm:w-auto text-sm sm:text-base"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              Back to Home
            </Link>
          </div>

          {/* Help Section */}
          <div className="bg-surface rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-border shadow-sm">
            <h3 className="text-base sm:text-lg font-bold text-primary font-heading mb-3 sm:mb-4">
              What You Can Do
            </h3>

            <div className="space-y-3 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-background rounded-xl">
                <div className="shrink-0 w-6 h-6 bg-accent/10 rounded-lg flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-accent">1</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-primary font-body mb-1">
                    Refresh the page
                  </p>
                  <p className="text-xs text-text-muted font-body">
                    Sometimes a simple refresh fixes the issue
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 sm:p-4 bg-background rounded-xl">
                <div className="shrink-0 w-6 h-6 bg-accent/10 rounded-lg flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-accent">2</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-primary font-body mb-1">
                    Go back to the previous page
                  </p>
                  <p className="text-xs text-text-muted font-body">
                    Use your browser&apos;s back button
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 sm:p-4 bg-background rounded-xl">
                <div className="shrink-0 w-6 h-6 bg-accent/10 rounded-lg flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-accent">3</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-primary font-body mb-1">
                    Contact support
                  </p>
                  <p className="text-xs text-text-muted font-body">
                    If the problem persists, let us know
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Help Text */}
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-text-muted font-body">
            Still having issues?{" "}
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
}
