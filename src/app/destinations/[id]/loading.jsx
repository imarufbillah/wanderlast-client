const DestinationDetailsLoading = () => (
  <div className="min-h-screen bg-background pt-16 md:pt-20 animate-pulse">
    {/* Breadcrumbs skeleton */}
    <div className="px-4 xl:px-20 pt-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="h-4 w-16 bg-border rounded" />
        <div className="h-4 w-4 bg-border rounded" />
        <div className="h-4 w-24 bg-border rounded" />
        <div className="h-4 w-4 bg-border rounded" />
        <div className="h-4 w-32 bg-border rounded" />
      </div>
    </div>

    {/* Top Navigation Bar skeleton */}
    <div className="sticky top-16 md:top-20 z-40 bg-surface/95 backdrop-blur-xl border-b border-border/50 px-4 xl:px-20 py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="h-6 w-48 bg-border rounded-lg" />
        <div className="flex items-center gap-3">
          <div className="h-10 w-24 bg-border rounded-xl" />
          <div className="h-10 w-10 bg-border rounded-xl" />
        </div>
      </div>
    </div>

    {/* Main Content */}
    <section className="px-4 xl:px-20 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Image skeleton */}
          <div className="relative aspect-4/3 lg:aspect-square bg-border rounded-3xl overflow-hidden" />

          {/* Right Column - Details skeleton */}
          <div className="space-y-6 sm:space-y-8">
            {/* Header skeleton */}
            <div className="space-y-3">
              <div className="h-5 w-24 bg-border rounded-full" />
              <div className="h-10 w-full bg-border rounded-xl" />
              <div className="h-6 w-3/4 bg-border rounded-lg" />
              <div className="flex items-center gap-4">
                <div className="h-5 w-20 bg-border rounded" />
                <div className="h-5 w-32 bg-border rounded" />
              </div>
            </div>

            {/* Quick Info Grid skeleton */}
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-background rounded-2xl p-4 border border-border space-y-2"
                >
                  <div className="h-4 w-16 bg-border rounded" />
                  <div className="h-5 w-24 bg-border rounded" />
                </div>
              ))}
            </div>

            {/* Description skeleton */}
            <div className="space-y-3">
              <div className="h-6 w-32 bg-border rounded-lg" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-border rounded" />
                <div className="h-4 w-full bg-border rounded" />
                <div className="h-4 w-3/4 bg-border rounded" />
              </div>
            </div>

            {/* Booking Card skeleton */}
            <div className="bg-linear-to-br from-accent/5 to-accent-soft/5 rounded-3xl p-6 sm:p-8 border-2 border-accent/20 space-y-6">
              <div className="space-y-3">
                <div className="h-4 w-20 bg-border rounded" />
                <div className="h-10 w-40 bg-border rounded-xl" />
                <div className="h-4 w-32 bg-border rounded" />
              </div>
              <div className="h-14 w-full bg-border rounded-xl" />
            </div>

            {/* Highlights skeleton */}
            <div className="space-y-4">
              <div className="h-6 w-32 bg-border rounded-lg" />
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-border rounded-full shrink-0" />
                    <div className="h-4 w-full bg-border rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Included skeleton */}
            <div className="space-y-4">
              <div className="h-6 w-40 bg-border rounded-lg" />
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-border rounded shrink-0" />
                    <div className="h-4 w-20 bg-border rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Best Season skeleton */}
            <div className="space-y-3">
              <div className="h-6 w-32 bg-border rounded-lg" />
              <div className="h-5 w-48 bg-border rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default DestinationDetailsLoading;
